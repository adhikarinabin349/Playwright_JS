
const { test, expect } = require('@playwright/test');
import { getNewestArticles, verifyHomePageNavigation } from "../pageFactory/action/homePageAction";

test('Hacker News newest articles are sorted by date', async ({ page }) => {

    await test.step('Verify the home page navigation', async () => {
        await verifyHomePageNavigation(page);
    });

    await test.step('Get the newest articles', async () => {
        await getNewestArticles(page);
    });
});