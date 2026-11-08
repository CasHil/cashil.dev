import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { preview } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ARTIFACT_DIR = 'C:/Users/Casper/.gemini/antigravity/brain/23889243-c06d-4c8d-a5a1-e6cc2e5dd5e9';

(async () => {
  console.log('Starting preview server...');
  const server = await preview({
    preview: { port: 5183 },
  });

  const BASE = 'http://localhost:5183';
  console.log('Server started at', BASE);

  const browser = await chromium.launch();

  // 1. Mobile viewport 390x844
  const mobileContext = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const mPage = await mobileContext.newPage();

  await mPage.goto(BASE + '/', { waitUntil: 'networkidle' });
  await mPage.waitForTimeout(500);

  // Initial top view
  await mPage.screenshot({ path: path.join(ARTIFACT_DIR, 'mobile_header_top.png') });
  console.log('Captured mobile_header_top.png');

  // Scroll down so the black button is partially passing directly underneath the sticky header
  const ctaBtn = await mPage.waitForSelector('section[aria-labelledby="hero-title"] a[href="/work-experience"]');
  if (ctaBtn) {
    const box = await ctaBtn.boundingBox();
    if (box) {
      console.log('Button found at y =', box.y);
      // Header height is 56px (h-14). Scroll so button is right under the header
      await mPage.evaluate((targetY) => window.scrollTo(0, targetY - 20), box.y);
      await mPage.waitForTimeout(400);
      await mPage.screenshot({ path: path.join(ARTIFACT_DIR, 'mobile_header_scrolled_over_button.png') });
      console.log('Captured mobile_header_scrolled_over_button.png');
    }
  }

  // Test mobile menu open
  const menuBtn = await mPage.$('button[aria-label="Menu"], button[aria-label="Menukaart"], button[aria-label*="enu"]');
  if (menuBtn) {
    await menuBtn.click();
    await mPage.waitForTimeout(400);
    await mPage.screenshot({ path: path.join(ARTIFACT_DIR, 'mobile_menu_open.png') });
    console.log('Captured mobile_menu_open.png');
  }

  // 2. Desktop viewport 1280x900
  const desktopContext = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const dPage = await desktopContext.newPage();

  await dPage.goto(BASE + '/', { waitUntil: 'networkidle' });
  await dPage.waitForTimeout(500);

  // Desktop scrolled
  await dPage.evaluate(() => window.scrollTo(0, 320));
  await dPage.waitForTimeout(400);
  await dPage.screenshot({ path: path.join(ARTIFACT_DIR, 'desktop_header_scrolled.png') });
  console.log('Captured desktop_header_scrolled.png');

  await browser.close();
  server.httpServer.close();
  console.log('All verification screenshots captured!');
})();
