// This file contains the page object for the home page
const { Locator, Page } = require('playwright');

class HomePage {
    constructor(page) {
        this.page = page;
        this.titlehHackerNews = this.page.locator('[class="hnname"]');
        this.linkNew = this.page.locator('[class="topsel"]');
        this.newsTitle = this.page.locator('[class="titleline"]').locator('a');
        this.moreLink = this.page.locator('[class="morelink"]');
    }
}

module.exports = { HomePage };