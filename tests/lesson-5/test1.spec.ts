import { test } from '@playwright/test';

const date = "1998-10-15";
const username = "Linh Le";
const email = "linhlq1@gmail.com";
const bio = "Test Biography";
const country = "uk";

test('Exercise 1: Register Page', async ({ page }) => {
    await test.step("Navigate to Material Playwright Page", async () => {
        await page.goto('https://material.playwrightvn.com/');
    })

    await test.step("Click on User Registration", async () => {
        await page.locator("//a[@href='01-xpath-register-page.html']").click();
    })

    await test.step("Fill information to all fields", async () => {
        await page.locator("//input[@id='username']").fill(username);
        await page.locator("//input[@id='email']").fill(email);
        await page.locator("//input[@id='male']").check();
        await page.locator("//input[@id='traveling']").check();
        await page.locator("//select[@id='country']").selectOption(country);
        await page.locator("//input[@id='dob']").fill(date);
        await page.locator("//input[@id='profile']").setInputFiles("tests/lesson-5/test-data.txt");
        await page.locator("//textarea[@id='bio']").fill(bio);
        await page.locator("//input[@id='rating']").fill("10");
        await page.locator("//input[@id='favcolor']").fill("#000000");
        await page.locator("//div[@class='tooltip']").hover();
        await page.locator("//input[@id='newsletter']").check();
        await page.locator("//span[@class='slider round']").click();
    })

    await test.step("Click Register", async () => {
        await page.locator("//button[@type='submit']").click();
    })

});
