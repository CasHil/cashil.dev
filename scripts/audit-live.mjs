import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, '..', 'screenshots', 'audit');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

const TARGET_URL = process.env.AUDIT_URL || 'https://cashil.dev';
console.log('Auditing target:', TARGET_URL);

async function runAudit() {
  const browser = await chromium.launch();
  const report = {
    url: TARGET_URL,
    pages: [],
    findings: [],
  };

  // 1. Desktop Context (1280x900)
  const desktopContext = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  });
  const dPage = await desktopContext.newPage();

  const routes = [
    { name: 'desktop_home_light', path: '/', dark: false },
    { name: 'desktop_home_dark', path: '/', dark: true },
    { name: 'desktop_work_light', path: '/work-experience', dark: false },
    { name: 'desktop_work_dark', path: '/work-experience', dark: true },
    { name: 'desktop_education_light', path: '/education', dark: false },
    { name: 'desktop_education_dark', path: '/education', dark: true },
    { name: 'desktop_cv_sheet_light', path: '/cv', dark: false },
    { name: 'desktop_cv_pdf_light', path: '/cv', dark: false, pdf: true },
  ];

  for (const r of routes) {
    console.log(`Checking desktop: ${r.name} (${r.path})`);
    try {
      await dPage.goto(TARGET_URL + r.path, { waitUntil: 'networkidle', timeout: 15000 });
      if (r.dark) {
        await dPage.evaluate(() => document.documentElement.classList.add('dark'));
      } else {
        await dPage.evaluate(() => document.documentElement.classList.remove('dark'));
      }
      if (r.pdf) {
        const pdfBtn = await dPage.$('button:has-text("PDF Embed")');
        if (pdfBtn) await pdfBtn.click();
      }
      await dPage.waitForTimeout(500);

      const shotPath = path.join(OUT, `${r.name}.png`);
      await dPage.screenshot({ path: shotPath, fullPage: true });

      // Run DOM inspections
      const pageFindings = await dPage.evaluate((routeName) => {
        const issues = [];
        // Check for text containing redundant colons like "Languages:", "Talen:"
        const elements = Array.from(document.querySelectorAll('*'));
        elements.forEach((el) => {
          if (el.children.length === 0 && el.textContent) {
            const text = el.textContent.trim();
            if (/(Languages|Talen|Frontend|Backend|Databases|Methodieken|Practices):$/i.test(text)) {
              issues.push({ type: 'redundant_label', text, route: routeName });
            }
          }
        });

        // Check horizontal overflow
        const hasHScroll = document.documentElement.scrollWidth > document.documentElement.clientWidth;
        if (hasHScroll) {
          issues.push({ type: 'horizontal_overflow', route: routeName });
        }

        return issues;
      }, r.name);

      report.findings.push(...pageFindings);
    } catch (e) {
      console.error(`Error loading ${r.name}:`, e.message);
    }
  }

  // 2. Mobile Context 390x844 (iPhone 14)
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Mobile/15E148 Safari/604.1',
  });
  const mPage = await mobileContext.newPage();

  const mobileRoutes = [
    { name: 'mobile_home_light', path: '/', dark: false },
    { name: 'mobile_home_dark', path: '/', dark: true },
    { name: 'mobile_work_light', path: '/work-experience', dark: false },
    { name: 'mobile_education_light', path: '/education', dark: false },
    { name: 'mobile_cv_light', path: '/cv', dark: false },
  ];

  for (const r of mobileRoutes) {
    console.log(`Checking mobile: ${r.name} (${r.path})`);
    try {
      await mPage.goto(TARGET_URL + r.path, { waitUntil: 'networkidle', timeout: 15000 });
      if (r.dark) {
        await mPage.evaluate(() => document.documentElement.classList.add('dark'));
      } else {
        await mPage.evaluate(() => document.documentElement.classList.remove('dark'));
      }
      await mPage.waitForTimeout(500);

      const shotPath = path.join(OUT, `${r.name}.png`);
      await mPage.screenshot({ path: shotPath, fullPage: true });

      // Run mobile touch targets & overflow check
      const mobileFindings = await mPage.evaluate((routeName) => {
        const issues = [];
        // Check interactive element touch sizes (<44px)
        const interactive = Array.from(document.querySelectorAll('a, button, input, select'));
        interactive.forEach((el) => {
          const rect = el.getBoundingClientRect();
          // Filter visible elements
          if (rect.width > 0 && rect.height > 0 && rect.top >= 0 && rect.bottom <= window.innerHeight) {
            if (rect.width < 40 || rect.height < 40) {
              issues.push({
                type: 'touch_target_small',
                tag: el.tagName,
                text: el.textContent?.slice(0, 30).trim(),
                width: Math.round(rect.width),
                height: Math.round(rect.height),
                route: routeName,
              });
            }
          }
        });

        const hasHScroll = document.documentElement.scrollWidth > document.documentElement.clientWidth;
        if (hasHScroll) {
          issues.push({
            type: 'horizontal_overflow',
            scrollWidth: document.documentElement.scrollWidth,
            clientWidth: document.documentElement.clientWidth,
            route: routeName,
          });
        }

        return issues;
      }, r.name);

      report.findings.push(...mobileFindings);
    } catch (e) {
      console.error(`Error loading mobile ${r.name}:`, e.message);
    }
  }

  // 3. Mobile Context 360x780 (Dutch Language)
  const mobile360Context = await browser.newContext({
    viewport: { width: 360, height: 780 },
    isMobile: true,
    hasTouch: true,
  });
  const m360Page = await mobile360Context.newPage();
  try {
    await m360Page.goto(TARGET_URL + '/', { waitUntil: 'networkidle', timeout: 15000 });
    const nlBtn = await m360Page.$('button[aria-label*="Nederlands"], button:has-text("NL")');
    if (nlBtn) await nlBtn.click();
    await m360Page.waitForTimeout(500);
    await m360Page.screenshot({ path: path.join(OUT, 'mobile_360_nl_home.png'), fullPage: true });

    await m360Page.goto(TARGET_URL + '/cv', { waitUntil: 'networkidle', timeout: 15000 });
    await m360Page.waitForTimeout(500);
    await m360Page.screenshot({ path: path.join(OUT, 'mobile_360_nl_cv.png'), fullPage: true });
  } catch (e) {
    console.error('Error on mobile 360 NL:', e.message);
  }

  await browser.close();
  fs.writeFileSync(path.join(OUT, 'report.json'), JSON.stringify(report, null, 2));
  console.log('Audit complete! Results saved to screenshots/audit/report.json');
}

runAudit();
