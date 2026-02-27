import { test, expect } from '@playwright/test';

test.describe('Product Catalog and Inquiry System', () => {
  test('displays the product grid on /products', async ({ page }) => {
    await page.goto('/products');
    
    // Check page title
    await expect(page.locator('h1')).toContainText('Our Products');
    
    // Check that products are loaded (At least our 4 mock products)
    const productCards = page.locator('h2').filter({ hasText: '20L Vehicle Spill Kit' });
    await expect(productCards).toBeVisible();
    
    // Check category label exists
    await expect(page.locator('main').getByText('Spill Kits').first()).toBeVisible();
  });

  test('filters products by category via URL parameter', async ({ page }) => {
    await page.goto('/products?category=Absorbents');
    
    // Only "Oil Absorbent Pads" should be visible from our mock data
    await expect(page.locator('h2').filter({ hasText: 'Oil Absorbent Pads (Pack of 100)' })).toBeVisible();
    
    // "20L Vehicle Spill Kit" should NOT be visible
    await expect(page.locator('text=20L Vehicle Spill Kit')).not.toBeVisible();
  });

  test('navigates to the product detail page', async ({ page }) => {
    await page.goto('/products');
    
    // Click on "View Details" for the first product
    await page.getByRole('link', { name: 'View Details' }).first().click();
    
    // Verify we are on the detail page (URL should contain /products/)
    await expect(page).toHaveURL(/\/products\/.*$/);
    
    // Verify the "Technical Specifications" section is visible
    await expect(page.locator('text=Technical Specifications')).toBeVisible();
    
    // Verify the "Request Pricing" button exists
    const requestPricingBtn = page.getByRole('link', { name: 'Request Pricing' });
    await expect(requestPricingBtn).toBeVisible();
  });

  test('auto-fills the inquiry form from the product detail page', async ({ page }) => {
    await page.goto('/products/20l-vehicle-spill-kit');
    
    // Click the "Request Pricing" button
    await page.getByRole('link', { name: 'Request Pricing' }).click();
    
    // Verify we are redirected to /enquire with the product parameter
    await expect(page).toHaveURL(/\/enquire\?product=20l-vehicle-spill-kit/);
    
    // Check if the "Required Products / Enquiry" textarea has the product name pre-filled
    const textarea = page.locator('textarea[name="requiredProducts"]');
    await expect(textarea).toHaveValue('20L Vehicle Spill Kit');
  });

  test('auto-fills the inquiry form directly from the product grid', async ({ page }) => {
    await page.goto('/products');
    
    // Click the "Request Quote" button for "4-Drum Spill Pallet"
    // Since there are multiple "Request Quote" buttons, we scope it to the product card
    const card = page.locator('.group').filter({ hasText: '4-Drum Spill Pallet' });
    await card.getByRole('link', { name: 'Request Quote' }).click();
    
    // Verify redirection
    await expect(page).toHaveURL(/\/enquire\?product=4-drum-spill-pallet/);
    
    // Verify textarea is pre-filled
    const textarea = page.locator('textarea[name="requiredProducts"]');
    await expect(textarea).toHaveValue('4-Drum Spill Pallet');
  });
});
