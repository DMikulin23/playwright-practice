import { expect, type Locator, type Page } from '@playwright/test';

export class Garage {
    readonly garage: Locator;

    constructor(page: Page) {
        this.garage = page.locator('h1');
    };


    async checkGaragePage() {
        await expect(this.garage).toHaveText('Garage');
    };
};





