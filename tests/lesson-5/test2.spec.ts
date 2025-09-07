import { test } from '@playwright/test';

test('Exercise 2', async ({ page }) => {
    await test.step("Navigate page", async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step("Click Bai hoc 2", async () => {
        await page.locator("//a[@href='02-xpath-product-page.html']").click();
    });

    await test.step("San pham 1", async () => {
        await page.locator("//button[@data-product-id='1']").dblclick();
    });

    await test.step("San pham 2", async () => {
        for (let i = 0; i < 3; i++) {
            await page.locator("//button[@data-product-id='2']").click();
        }
    });

    await test.step("San pham 3", async () => {
        await page.locator("//button[@data-product-id='3']").click();

    });
});