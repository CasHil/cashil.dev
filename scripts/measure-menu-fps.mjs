import { chromium } from 'playwright';
import { preview } from 'vite';

(async () => {
  console.log('Starting preview server...');
  const server = await preview({
    preview: { port: 5180 },
  });

  const BASE = 'http://localhost:5180';
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
  });

  const page = await context.newPage();

  // Emulate 4x CPU slowdown via Chrome DevTools Protocol to simulate a budget mobile phone
  const client = await context.newCDPSession(page);
  await client.send('Emulation.setCPUThrottlingRate', { rate: 4 });

  await page.goto(BASE + '/', { waitUntil: 'networkidle' });

  // Measure FPS during menu open and close
  const fpsResult = await page.evaluate(async () => {
    return new Promise((resolve) => {
      let frameCount = 0;
      let lastTime = performance.now();
      const frameDeltas = [];

      let running = true;
      function tick(now) {
        if (!running) return;
        const delta = now - lastTime;
        lastTime = now;
        frameDeltas.push(delta);
        frameCount++;
        requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);

      // Trigger menu open
      const menuBtn = document.querySelector('button[aria-label="Menu"]');
      if (menuBtn) menuBtn.click();

      // Wait 300ms for open animation
      setTimeout(() => {
        // Trigger menu close
        const closeBtn = document.querySelector('button[aria-label="Close"], button[aria-label="Sluiten"]');
        if (closeBtn) closeBtn.click();

        setTimeout(() => {
          running = false;
          // Calculate stats
          // Filter out the initial startup frame
          const deltas = frameDeltas.slice(2);
          const avgDelta = deltas.reduce((a, b) => a + b, 0) / deltas.length;
          const avgFps = 1000 / avgDelta;
          const longFrames = deltas.filter(d => d > 33.33).length; // frames taking > 30fps (dropped frames)
          resolve({
            avgFps: Math.round(avgFps),
            totalFrames: deltas.length,
            droppedFrames: longFrames,
            maxFrameTime: Math.round(Math.max(...deltas)),
          });
        }, 300);
      }, 350);
    });
  });

  console.log('Menu Performance Profile under 4x CPU Throttling (Budget Mobile Phone):');
  console.log(`- Average FPS: ${fpsResult.avgFps} FPS`);
  console.log(`- Total Animation Frames: ${fpsResult.totalFrames}`);
  console.log(`- Dropped Frames (>33ms): ${fpsResult.droppedFrames}`);
  console.log(`- Max Frame Time: ${fpsResult.maxFrameTime}ms`);

  await browser.close();
  server.httpServer.close();

  if (fpsResult.avgFps < 50 || fpsResult.droppedFrames > 2) {
    console.error('Performance criteria NOT met');
    process.exit(1);
  } else {
    console.log('Buttery smooth 60+ FPS target achieved!');
    process.exit(0);
  }
})();
