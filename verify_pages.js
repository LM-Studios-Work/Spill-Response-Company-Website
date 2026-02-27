const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    // 1. Verify Privacy Policy
    console.log("Navigating to Privacy Policy...");
    await page.goto('http://localhost:3000/privacy-policy');

    // Wait for content to load
    await page.waitForSelector('h1:has-text("Privacy Policy")');
    console.log("Privacy Policy loaded.");

    // Take screenshot
    await page.screenshot({ path: 'privacy-policy.png', fullPage: true });
    console.log("Screenshot saved: privacy-policy.png");

    // 2. Verify Terms of Use
    console.log("Navigating to Terms of Use...");
    await page.goto('http://localhost:3000/terms-of-use');

    // Wait for content to load
    await page.waitForSelector('h1:has-text("Terms of Use")');
    console.log("Terms of Use loaded.");

    // Take screenshot
    await page.screenshot({ path: 'terms-of-use.png', fullPage: true });
    console.log("Screenshot saved: terms-of-use.png");

    // 3. Verify Footer Links
    console.log("Navigating to Home to check Footer...");
    await page.goto('http://localhost:3000');

    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Wait for footer to be visible
    await page.waitForSelector('footer');

    // Check if links exist
    const privacyLink = await page.$('a[href="/privacy-policy"]');
    const termsLink = await page.$('a[href="/terms-of-use"]');

    if (privacyLink && termsLink) {
        console.log("Footer links found.");
    } else {
        console.error("Footer links missing!");
    }

    // Take screenshot of footer
    await page.screenshot({ path: 'footer.png' });
    console.log("Screenshot saved: footer.png");

  } catch (error) {
    console.error("Error during verification:", error);
  } finally {
    await browser.close();
  }
})();
