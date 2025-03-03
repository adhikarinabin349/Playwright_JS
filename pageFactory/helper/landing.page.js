// This file contains the landing page class which contains the methods to navigate to the hacker news page
const { Page } = require('playwright');

class LandingPage {
    constructor(page) {
        this.page = page;
    }

    // Navigate to the hacker news page (Can add more pages here)
    async navigateToHackerPage() {
        await this.page.goto('https://news.ycombinator.com/newest');
    }
}

module.exports = { LandingPage };