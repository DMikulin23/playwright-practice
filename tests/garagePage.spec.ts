import { expect } from '@playwright/test';
import { test } from '../fixtures/fixtureGaragePage';

test.describe('Homework fixtures and POM', () => {

    test.describe('Add cars as user', () => {
        test('Add [Audi] [A8] to the garage', async ({ garagePageAsUser }) => {
            await garagePageAsUser.selectBrand('Audi');
            await garagePageAsUser.selectModel('A8');
            await garagePageAsUser.enterMileage('4444');
            await garagePageAsUser.clickAddButton();
            await expect(garagePageAsUser.firstCarName).toHaveText('Audi A8')
        });

        test('Add [BMW] [X5] to the garage', async ({ garagePageAsUser }) => {
            await garagePageAsUser.selectBrand('BMW');
            await garagePageAsUser.selectModel('X5');
            await garagePageAsUser.enterMileage('456346');
            await garagePageAsUser.clickAddButton();
            await expect(garagePageAsUser.firstCarName).toHaveText('BMW X5')
        });

        test('Add [Ford] [Focus] to the garage', async ({ garagePageAsUser }) => {
            await garagePageAsUser.selectBrand('Ford');
            await garagePageAsUser.selectModel('Focus');
            await garagePageAsUser.enterMileage('34543');
            await garagePageAsUser.clickAddButton();
            await expect(garagePageAsUser.firstCarName).toHaveText('Ford Focus')
        });

        test('Add [Porsche] [911] to the garage', async ({ garagePageAsUser }) => {
            await garagePageAsUser.selectBrand('Porsche');
            await garagePageAsUser.selectModel('911');
            await garagePageAsUser.enterMileage('354');
            await garagePageAsUser.clickAddButton();
            await expect(garagePageAsUser.firstCarName).toHaveText('Porsche 911')
        });

        test('Add [Fiat] [Scudo] to the garage', async ({ garagePageAsUser }) => {
            await garagePageAsUser.selectBrand('Fiat');
            await garagePageAsUser.selectModel('Scudo');
            await garagePageAsUser.enterMileage('22');
            await garagePageAsUser.clickAddButton();
            await expect(garagePageAsUser.firstCarName).toHaveText('Fiat Scudo')
        });

    });

    test.describe('Add cars as guest', () => {
        test('Add [Audi] [A8] to the garage', async ({ garagePageAsGuest }) => {
            await garagePageAsGuest.selectBrand('Audi');
            await garagePageAsGuest.selectModel('A8');
            await garagePageAsGuest.enterMileage('4444');
            await garagePageAsGuest.clickAddButton();
            await expect(garagePageAsGuest.firstCarName).toHaveText('Audi A8')
        });

        test('Add [BMW] [X5] to the garage', async ({ garagePageAsGuest }) => {
            await garagePageAsGuest.selectBrand('BMW');
            await garagePageAsGuest.selectModel('X5');
            await garagePageAsGuest.enterMileage('456346');
            await garagePageAsGuest.clickAddButton();
            await expect(garagePageAsGuest.firstCarName).toHaveText('BMW X5')
        });

        test('Add [Ford] [Focus] to the garage', async ({ garagePageAsGuest }) => {
            await garagePageAsGuest.selectBrand('Ford');
            await garagePageAsGuest.selectModel('Focus');
            await garagePageAsGuest.enterMileage('34543');
            await garagePageAsGuest.clickAddButton();
            await expect(garagePageAsGuest.firstCarName).toHaveText('Ford Focus')
        });

        test('Add [Porsche] [911] to the garage', async ({ garagePageAsGuest }) => {
            await garagePageAsGuest.selectBrand('Porsche');
            await garagePageAsGuest.selectModel('911');
            await garagePageAsGuest.enterMileage('354');
            await garagePageAsGuest.clickAddButton();
            await expect(garagePageAsGuest.firstCarName).toHaveText('Porsche 911')
        });

        test('Add [Fiat] [Scudo] to the garage', async ({ garagePageAsGuest }) => {
            await garagePageAsGuest.selectBrand('Fiat');
            await garagePageAsGuest.selectModel('Scudo');
            await garagePageAsGuest.enterMileage('22');
            await garagePageAsGuest.clickAddButton();
            await expect(garagePageAsGuest.firstCarName).toHaveText('Fiat Scudo')
        });

    });
});
