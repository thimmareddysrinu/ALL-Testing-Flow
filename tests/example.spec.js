import { test, expect,request } from '@playwright/test';

test.describe('Standard Web and API Test Suite', () => {

  // 1. REGRESSION TEST
  test('Verify search input presence and interaction on Google', { tag: ['@regression'] }, async ({ page }) => {
    // Navigate to a standard landing page
    await page.goto('https://google.com');

    // Locate the search text area box
    const searchBox = page.locator('textarea[name="q"]');
    
    // Assert that the element exists and is ready for interaction
    await expect(searchBox).toBeVisible();
    
    // Perform typing interaction
    await searchBox.fill('Playwright automation');
    await expect(searchBox).toHaveValue('Playwright automation');
  });

  // 2. WEB TESTING (UI / INTERACTION) TEST
  test('Verify interaction with basic interface buttons', { tag: ['@WEBTESTING'] }, async ({ page }) => {
    await page.goto('https://google.com');

    // Find search engine footer links
    const aboutLink = page.locator('text=About');
    
    // Assert the link metadata and trigger a click
    await expect(aboutLink).toBeVisible();
    await aboutLink.click();

    // Verify navigation updated the active URL route successfully
    await expect(page).toHaveURL(/about/);
  });

  // 3. API TESTING TEST
   test('Verify rest api response status and json body payload schema', { tag: ['@APITESTING'] }, async () => {
    // Query the correct public JSON API endpoint
    const ApiContext=await request.newContext({
        extraHTTPHeaders:{
            "Content-Type": "application/json",
            'accept':'application/json'
        },
        
    });
    const response=await ApiContext.get('https://jsonplaceholder.typicode.com/posts');
    
    
    // Assert status headers confirm a 200 OK delivery code
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    // Parse payload text content into a JSON object cleanly
    const responseBody = await response.json();
    
    // Validate object values exist within this testing endpoint profile
    expect(responseBody).toBeDefined();
    
   
  });


});
