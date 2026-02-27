import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    // Navigate to the contact page
    await page.goto('http://localhost:3000/contact');

    // Wait for the form to load
    await page.waitForSelector('form');

    // Focus on the Name input to show focus state
    await page.focus('input[placeholder="Enter your full name"]');

    // Take a screenshot of the form
    await page.screenshot({ path: 'verification/contact-form.png', fullPage: true });

    // Check for aria attributes
    const nameInput = await page.$('input[placeholder="Enter your full name"]');
    const ariaRequired = await nameInput.getAttribute('aria-required');
    console.log(`Name input aria-required: ${ariaRequired}`);

    // Trigger validation error
    await page.click('button[type="submit"]');

    // Wait for error messages
    await page.waitForTimeout(1000);

    // Take a screenshot of validation errors
    await page.screenshot({ path: 'verification/contact-form-errors.png', fullPage: true });

    // Check for aria-invalid on name input
    const ariaInvalid = await nameInput.getAttribute('aria-invalid');
    console.log(`Name input aria-invalid after submit: ${ariaInvalid}`);

    // Check for aria-describedby
    const ariaDescribedBy = await nameInput.getAttribute('aria-describedby');
    console.log(`Name input aria-describedby: ${ariaDescribedBy}`);

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
})();
