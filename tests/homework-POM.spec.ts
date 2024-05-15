import { test, expect } from '@playwright/test';
import { SingUp } from '../page-objects/forms/singUp';
import { Garage } from '../page-objects/pages/garagePage';



test.beforeEach(async ({ page }) => {
  await page.goto('/');
  let singUpForm: SingUp;
  singUpForm = new SingUp(page);
  await singUpForm.singUpButton.click();
});

test.describe('Registration complete', () => {
  let singUpForm: SingUp;
  let garagePage: Garage;

  test('Registration', async ({ page }) => {
    garagePage = new Garage(page);
    singUpForm = new SingUp(page);
    await singUpForm.loginWithCredentials('test', 'test', 'ivanovivan+aqa76@gmail.com', 'Qwerty358', 'Qwerty358');
    await singUpForm.rePasswordField.blur();
    await singUpForm.registerButton.click();
    
    await garagePage.checkGaragePage();
  });
});

test.describe('Field "Name"', () => {
  let singUpForm: SingUp;

  test('Name required', async ({ page }) => {
    singUpForm = new SingUp(page);
    await singUpForm.nameField.focus();
    await singUpForm.nameField.blur();
    await expect(singUpForm.errorMassage).toHaveText('Name required');
  });

  test('Name is invalid', async ({ page }) => {
    singUpForm = new SingUp(page);
    await singUpForm.nameField.fill('test test');
    await singUpForm.nameField.blur();
    await expect(singUpForm.errorMassage).toHaveText('Name is invalid');
  });

  test('Name has to be from 2 to 20 characters long', async ({ page }) => {
    singUpForm = new SingUp(page);
    await singUpForm.nameField.fill('a');
    await singUpForm.nameField.blur();
    await expect(singUpForm.errorMassage).toHaveText('Name has to be from 2 to 20 characters long');
  });

  test('Error "Name" Border color is red', async ({ page }) => {
    singUpForm = new SingUp(page);
    await singUpForm.nameField.fill('a');
    await singUpForm.nameField.blur();
    await expect(singUpForm.nameField).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
});

test.describe('Field "Last Name"', () => {
  let singUpForm: SingUp;

  test('Last name required', async ({ page }) => {
    singUpForm = new SingUp(page);
    await singUpForm.lastNameField.focus();
    await singUpForm.lastNameField.blur();
    await expect(singUpForm.errorMassage).toHaveText('Last name required');
  });

  test('Last name is invalid', async ({ page }) => {
    singUpForm = new SingUp(page);
    await singUpForm.lastNameField.fill('test test');
    await singUpForm.lastNameField.blur();
    await expect(singUpForm.errorMassage).toHaveText('Last name is invalid');
  });

  test('Last name has to be from 2 to 20 characters long', async ({ page }) => {
    singUpForm = new SingUp(page);
    await singUpForm.lastNameField.fill('a');
    await singUpForm.lastNameField.blur();
    await expect(singUpForm.errorMassage).toHaveText('Last name has to be from 2 to 20 characters long');
  });

  test('Error "Last name" border color is red', async ({ page }) => {
    singUpForm = new SingUp(page);
    await singUpForm.lastNameField.fill('a');
    await singUpForm.lastNameField.blur();
    await expect(singUpForm.lastNameField).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
});

test.describe('Field "email"', () => {
  let singUpForm: SingUp;

  test('Email is incorrect', async ({ page }) => {
    singUpForm = new SingUp(page);
    await singUpForm.emailField.fill('test');
    await singUpForm.emailField.blur();
    await expect(singUpForm.errorMassage).toHaveText('Email is incorrect');
  });

  test('Email required', async ({ page }) => {
    singUpForm = new SingUp(page);
    await singUpForm.emailField.focus();
    await singUpForm.emailField.blur();
    await expect(singUpForm.errorMassage).toHaveText('Email required');
  });

  test('Error "email" border color is red', async ({ page }) => {
    singUpForm = new SingUp(page);
    await singUpForm.emailField.fill('a');
    await singUpForm.emailField.blur();
    await expect(singUpForm.emailField).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
});

test.describe('Field "password"', () => {
  let singUpForm: SingUp;

  test('Wrong data', async ({ page }) => {
    singUpForm = new SingUp(page);
    await singUpForm.passwordField.fill('a');
    await singUpForm.passwordField.blur();
    await expect(singUpForm.errorMassage).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
  });

  test('For empty field error', async ({ page }) => {
    singUpForm = new SingUp(page);
    await singUpForm.passwordField.focus();
    await singUpForm.passwordField.blur();
    await expect(singUpForm.errorMassage).toHaveText('Password required');
  });

  test('Error "password" border color is red', async ({ page }) => {
    singUpForm = new SingUp(page);
    await singUpForm.passwordField.fill('a');
    await singUpForm.passwordField.blur();
    await expect(singUpForm.passwordField).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });

  test.describe('Field "Re-password"', () => {
    let singUpForm: SingUp;

    test('Password do not match', async ({ page }) => {
      singUpForm = new SingUp(page);
      await singUpForm.loginWithCredentials('test', 'test', 'ivanovivan+aqa01@gmail.com', 'Qwerty358', 'Qwerty35');
      await singUpForm.rePasswordField.blur();
      await expect(singUpForm.errorMassage).toHaveText('Passwords do not match');
    });

    test('Re-password field empty', async ({ page }) => {
      singUpForm = new SingUp(page);
      await singUpForm.rePasswordField.focus();
      await singUpForm.rePasswordField.blur();
      await expect(singUpForm.errorMassage).toHaveText('Re-enter password required');
    });

    test('Error "Re-password" border color is red', async ({ page }) => {
      singUpForm = new SingUp(page);
      await singUpForm.rePasswordField.fill('a');
      await singUpForm.rePasswordField.blur();
      await expect(singUpForm.rePasswordField).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });
  });
});


