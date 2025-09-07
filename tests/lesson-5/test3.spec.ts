import { test } from '@playwright/test';

test('Exercise 3', async ({ page }) => {
    await test.step("Navigate page", async () => {
        await page.goto('https://material.playwrightvn.com/');
        await page.locator("//a[@href='03-xpath-todo-list.html']").click();

    });

    await test.step("Them 100 Todo", async () => {
        for (let i = 1; i < 5; i++) {
            await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
            await page.locator("//button[@id='add-task']").click();
        }
    });
});