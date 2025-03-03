const { expect } = require('playwright/test');
const { LandingPage } = require('../helper/landing.page');
const { HomePage } = require('../pages/home.page');

// Verify the home page navigation
exports.verifyHomePageNavigation = async function (page) {
    const landingPage = new LandingPage(page);
    await landingPage.navigateToHackerPage();
    const homePage = new HomePage(page);
    await expect(homePage.titlehHackerNews).toBeVisible();
};

// Get the newest 100 articles
exports.getNewestArticles = async function (page) {
    const homePage = new HomePage(page);
    let savedTitles = [];

    while (savedTitles.length < 100) {
        let titles = await homePage.newsTitle.allInnerTexts();

        for (let title of titles) {
            if (savedTitles.length < 100) {
                savedTitles.push(title);
            } else {
                break;
            }
        }

        if (savedTitles.length < 100) {
            await homePage.moreLink.click();
        }
    }

    console.log("Newest Articles (First 100):", savedTitles);
};