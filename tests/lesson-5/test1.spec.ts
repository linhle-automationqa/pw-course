import { test } from '@playwright/test';

test('Fill information', async ({ page }) => {
    await test.step("Navigate page", async () => {
        await page.goto('https://material.playwrightvn.com/');
        await page.locator("//a[@href='01-xpath-register-page.html']").click();

    })
    await test.step("Fill", async () => {
        await page.locator("//input[@id='username']").fill('Linh Le');
        await page.locator("//input[@id='email']").fill('linhlq1@gmail.com');
        await page.check("//input[@id='male']");
        await page.check("//input[@id='traveling']");
        await page.selectOption("//select[@id='interests']", "sports");
        await page.selectOption("//select[@id='country']", "uk");
        await page.locator("//input[@id='dob']").pressSequentially('10151998');
        await page.setInputFiles("//input[@id='profile']", "tests/lesson-5/test-data.txt");
        await page.locator("//textarea[@id='bio']").fill('Test Biography');
        await page.locator("//input[@id='rating']").fill('10');
        await page.locator("//input[@id='favcolor']").evaluate((el: any) => el.value = '#000000');
        await page.locator("//div[@class='tooltip']").hover();
        await page.check("//input[@id='newsletter']");
        await page.check("//span[@class='slider round']");
        await page.locator("//div[@id='starRating']").click();
    })

    await test.step("Click Register", async () => {
        await page.locator("//button[@type='submit']").click();
    })

});
