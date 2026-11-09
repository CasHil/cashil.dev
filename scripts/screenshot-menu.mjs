import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { preview } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, '..', 'screenshots');

if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

(async () => {
  console.log('Starting preview server...');
  const server = await preview({
    preview: { port: 5179 },
  });

  const BASE = 'http://localhost:5179';
  console.log('Server started at', BASE);

  const browser = await chromium.launch();

  // Mobile 390px (iPhone 14) captures
  const mobile390 = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const mPage = await mobile390.newPage();

  // 1. Mobile menu open - light mode
  await mPage.goto(BASE + '/', { waitUntil: 'networkidle' });
  await mPage.evaluate(() => document.documentElement.classList.remove('dark'));
  const menuBtn = await mPage.$('button[aria-label="Menu"]');
  if (menuBtn) {
    await menuBtn.click();
    await mPage.waitForTimeout(300);
    await mPage.screenshot({ path: path.join(OUT, '20_mobile_menu_open_light.png') });
    console.log('Saved 20_mobile_menu_open_light.png');
  }

  // 2. Mobile menu open - dark mode
  await mPage.evaluate(() => document.documentElement.classList.add('dark'));
  await mPage.waitForTimeout(200);
  await mPage.screenshot({ path: path.join(OUT, '21_mobile_menu_open_dark.png') });
  console.log('Saved 21_mobile_menu_open_dark.png');

  // 3. Narrow budget mobile (360x740)
  const mobile360 = await browser.newContext({ viewport: { width: 360, height: 740 } });
  const nPage = await mobile360.newPage();
  await nPage.goto(BASE + '/', { waitUntil: 'networkidle' });
  const nMenuBtn = await nPage.$('button[aria-label="Menu"]');
  if (nMenuBtn) {
    await nMenuBtn.click();
    await nPage.waitForTimeout(300);
    await nPage.screenshot({ path: path.join(OUT, '22_mobile_menu_open_360.png') });
    console.log('Saved 22_mobile_menu_open_360.png');
  }

  // 4. Desktop settings popover
  const desktop = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const dPage = await desktop.newPage();
  await dPage.goto(BASE + '/', { waitUntil: 'networkidle' });
  const settingsBtn = await dPage.$('button[aria-label="Settings"]');
  if (settingsBtn) {
    await settingsBtn.click();
    await dPage.waitForTimeout(300);
    await dPage.screenshot({ path: path.join(OUT, '23_desktop_settings_open.png') });
    console.log('Saved 23_desktop_settings_open.png');
  }

  await browser.close();
  server.httpServer.close();
  console.log('All menu screenshots captured successfully!');
  process.exit(0);
})();
