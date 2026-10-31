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
    preview: { port: 5178 },
  });

  const BASE = 'http://localhost:5178';
  console.log('Server started at', BASE);

  const browser = await chromium.launch();

  // Desktop captures (1280 x 900)
  const desktopContext = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const dPage = await desktopContext.newPage();

  const DESKTOP_ROUTES = [
    { name: '01_overview_light', path: '/', dark: false },
    { name: '02_overview_dark', path: '/', dark: true },
    { name: '03_work_light', path: '/work-experience', dark: false },
    { name: '04_work_dark', path: '/work-experience', dark: true },
    { name: '05_education_light', path: '/education', dark: false },
    { name: '06_education_dark', path: '/education', dark: true },
    { name: '07_cv_light', path: '/cv', dark: false },
  ];

  for (const r of DESKTOP_ROUTES) {
    await dPage.goto(BASE + r.path, { waitUntil: 'networkidle' });
    if (r.dark) {
      await dPage.evaluate(() => document.documentElement.classList.add('dark'));
    } else {
      await dPage.evaluate(() => document.documentElement.classList.remove('dark'));
    }
    await dPage.waitForTimeout(400);
    const file = path.join(OUT, r.name + '.png');
    await dPage.screenshot({ path: file, fullPage: true });
    console.log('Saved desktop:', r.name);
  }

  // Mobile 390px (iPhone 14) captures
  const mobile390 = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const mPage = await mobile390.newPage();

  // Mobile overview light & dark
  await mPage.goto(BASE + '/', { waitUntil: 'networkidle' });
  await mPage.evaluate(() => document.documentElement.classList.remove('dark'));
  await mPage.waitForTimeout(400);
  await mPage.screenshot({ path: path.join(OUT, '10_overview_mobile_light.png'), fullPage: true });

  await mPage.evaluate(() => document.documentElement.classList.add('dark'));
  await mPage.waitForTimeout(400);
  await mPage.screenshot({ path: path.join(OUT, '11_overview_mobile_dark.png'), fullPage: true });

  // Mobile CV light
  await mPage.goto(BASE + '/cv', { waitUntil: 'networkidle' });
  await mPage.evaluate(() => document.documentElement.classList.remove('dark'));
  await mPage.waitForTimeout(400);
  await mPage.screenshot({ path: path.join(OUT, '12_cv_mobile_light.png'), fullPage: true });

  // Mobile Education light
  await mPage.goto(BASE + '/education', { waitUntil: 'networkidle' });
  await mPage.waitForTimeout(400);
  await mPage.screenshot({ path: path.join(OUT, '13_education_mobile_light.png'), fullPage: true });

  // Mobile 360px (Narrow Android) Dutch Mode Testing
  const mobile360 = await browser.newContext({ viewport: { width: 360, height: 780 } });
  const nlPage = await mobile360.newPage();

  // Switch to Dutch
  await nlPage.goto(BASE + '/cv', { waitUntil: 'networkidle' });
  const nlBtn = await nlPage.$('button[aria-label*="Nederlands"], button:has-text("NL")');
  if (nlBtn) await nlBtn.click();
  await nlPage.waitForTimeout(400);
  await nlPage.screenshot({ path: path.join(OUT, '14_cv_mobile_nl_360.png'), fullPage: true });
  console.log('Saved: 14_cv_mobile_nl_360.png');

  // Dutch Education on 360px
  await nlPage.goto(BASE + '/education', { waitUntil: 'networkidle' });
  await nlPage.waitForTimeout(400);
  await nlPage.screenshot({ path: path.join(OUT, '15_education_mobile_nl_360.png'), fullPage: true });
  console.log('Saved: 15_education_mobile_nl_360.png');

  // Dutch Overview on 360px
  await nlPage.goto(BASE + '/', { waitUntil: 'networkidle' });
  await nlPage.waitForTimeout(400);
  await nlPage.screenshot({ path: path.join(OUT, '16_overview_mobile_nl_360.png'), fullPage: true });
  console.log('Saved: 16_overview_mobile_nl_360.png');

  await browser.close();
  server.httpServer.close();
  console.log('All screenshots captured successfully!');
  process.exit(0);
})();
