import {test as base} from '@playwright/test';
import { Garage } from '../page-objects/pages/garagePage';

export const test = base.extend({
    garagePageAsUser : async ({page}, use) => {
        await page.goto('/');
        let garagePage = new Garage(page);
        await garagePage.openAsLoggedUser('ivanovivan+aqa01@gmail.com', 'Qwerty358');
        await garagePage.clickAddCarButton();
        await use(garagePage);
        await garagePage.removeLastCar();
    },

    garagePageAsGuest : async ({page}, use) => {
        await page.goto('/');
        let garagePage = new Garage(page);
        await page.locator('.-guest').click();
        await garagePage.clickAddCarButton();
        await use(garagePage);
        await garagePage.removeLastCar();
    },
    
  });