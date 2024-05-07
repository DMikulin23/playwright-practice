import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.getByText('Sign up').click();
});

test.describe('Registration complete', () => {
  test('Password do not match', async ({ page }) => {
    await page.locator('#signupPassword').fill('test');
    await page.locator('#signupLastName').fill('test');
    await page.locator('#signupEmail').fill('ivanovivan+aqa01@gmail.com');
    await page.locator('#signupPassword').fill('Qwerty358');
    await page.locator('#signupRepeatPassword').fill('Qwerty358');
    await page.locator('#signupRepeatPassword').blur();
    const registerButton = page.getByText('Register');
    await expect(page.click(registerButton));
    
  });
});

test.describe('Field "Name"', () => {
  test('Name required', async ({ page }) => {
    await page.locator('#signupName').focus();
    await page.locator('#signupName').blur();
    const errorMassageName1 = page.getByText('Name required');
    await expect(errorMassageName1).toBeVisible();
  });

  test('Name is invalid', async ({ page }) => {
    await page.locator('#signupName').fill('test test');
    await page.locator('#signupName').blur();
    const errorMassageName2 = page.getByText('Name is invalid');
    await expect(errorMassageName2).toBeVisible();
  });

  test('Name has to be from 2 to 20 characters long', async ({ page }) => {
    await page.locator('#signupName').fill('a');
    await page.locator('#signupName').blur();
    const errorMassageName3 = page.getByText('Name has to be from 2 to 20 characters long');
    await expect(errorMassageName3).toBeVisible();
  });

  test('Error "Name" Border color is red', async ({ page }) => {
    await page.locator('#signupName').fill('a');
    await page.locator('#signupName').blur();
    const inputElement = await page.locator('#signupName');
    const inputStyle = await inputElement.evaluate(element => {
      const styles = window.getComputedStyle(element);
      return styles.borderColor;
    });
    console.log(inputStyle);
    expect(inputStyle).toBe('rgb(205, 195, 204)');
  });
});

test.describe('Field "Last Name"', () => {
  test('Last name required', async ({ page }) => {
    await page.locator('#signupLastName').focus();
    await page.locator('#signupLastName').blur();
    const errorMassageLastName1 = page.getByText('Last name required');
    await expect(errorMassageLastName1).toBeVisible();
  });

  test('Last name is invalid', async ({ page }) => {
    await page.locator('#signupLastName').fill('test test');
    await page.locator('#signupLastName').blur();
    const errorMassageLastName2 = page.getByText('Last name is invalid');
    await expect(errorMassageLastName2).toBeVisible();
  });

  test('Last name has to be from 2 to 20 characters long', async ({ page }) => {
    await page.locator('#signupLastName').fill('a');
    await page.locator('#signupLastName').blur();
    const errorMassageLastName3 = page.getByText('Last name has to be from 2 to 20 characters long');
    await expect(errorMassageLastName3).toBeVisible();
  });

  test('Error "Last name" border color is red', async ({ page }) => {
    await page.locator('#signupLastName').fill('a');
    await page.locator('#signupLastName').blur();
    const lastNameInputElement = await page.locator('#signupLastName');
    const lastNameInputStyle = await lastNameInputElement.evaluate(element => {
      const styles = window.getComputedStyle(element);
      return styles.borderColor;
    });
    console.log(lastNameInputStyle);
    expect(lastNameInputStyle).toBe('rgb(204, 207, 215)');
  });
});

test.describe('Field "email"', () => {
  test('Email is incorrect', async ({ page }) => {
    await page.locator('#signupEmail').fill('test');
    await page.locator('#signupEmail').blur();
    const errorMassageEmail1 = page.getByText('Email is incorrect');
    await expect(errorMassageEmail1).toBeVisible();
  });

  test('Email required', async ({ page }) => {
    await page.locator('#signupEmail').focus();
    await page.locator('#signupEmail').blur();
    const errorMassageEmail2 = page.getByText('Email required');
    await expect(errorMassageEmail2).toBeVisible();
  });

  test('Error "email" border color is red', async ({ page }) => {
    await page.locator('#signupEmail').focus();
    await page.locator('#signupEmail').blur();
    const emailInputElement = await page.locator('#signupEmail');
    const emailInputStyle = await emailInputElement.evaluate(element => {
      const styles = window.getComputedStyle(element);
      return styles.borderColor;
    });
    console.log(emailInputStyle);
    expect(emailInputStyle).toBe('rgb(205, 195, 204)');
  });
});

test.describe('Field "password"', () => {
  test('Wrong data', async ({ page }) => {
    await page.locator('#signupPassword').fill('a');
    await page.locator('#signupPassword').blur();
    const errorMassagePassword1 = page.getByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    await expect(errorMassagePassword1).toBeVisible();
  });

  test('For empty field error', async ({ page }) => {
    await page.locator('#signupPassword').focus();
    await page.locator('#signupPassword').blur();
    const errorMassagePassword2 = page.getByText('Password required');
    await expect(errorMassagePassword2).toBeVisible();
  });

  test('Error "password" border color is red', async ({ page }) => {
    await page.locator('#signupPassword').focus();
    await page.locator('#signupPassword').blur();
    const passwordInputElement = await page.locator('#signupPassword');
    const passwordInputStyle = await passwordInputElement.evaluate(element => {
      const styles = window.getComputedStyle(element);
      return styles.borderColor;
    });
    console.log(passwordInputStyle);
    expect(passwordInputStyle).toBe('rgb(205, 195, 204)');
  });

  test.describe('Field "Re-password"', () => {
    test('Password do not match', async ({ page }) => {
      await page.locator('#signupPassword').fill('test');
      await page.locator('#signupLastName').fill('test');
      await page.locator('#signupEmail').fill('ivanovivan+aqa01@gmail.com');
      await page.locator('#signupPassword').fill('Qwerty358');
      await page.locator('#signupRepeatPassword').fill('Qwerty35');
      await page.locator('#signupRepeatPassword').blur();
      const errorMassageRePassword1 = page.getByText('Passwords do not match');
      await expect(errorMassageRePassword1).toBeVisible();
    });

    test('Re-password field empty', async ({ page }) => {
      await page.locator('#signupRepeatPassword').focus();
      await page.locator('#signupRepeatPassword').blur();
      const errorMassageRePassword2 = page.getByText('Re-enter password required');
      await expect(errorMassageRePassword2).toBeVisible();
    });

    test('Error "Re-password" border color is red', async ({ page }) => {
      await page.locator('#signupRepeatPassword').focus();
      await page.locator('#signupRepeatPassword').blur();
      const rePasswordInputElement = await page.locator('#signupRepeatPassword');
      const rePasswordInputStyle = await rePasswordInputElement.evaluate(element => {
        const styles = window.getComputedStyle(element);
        return styles.borderColor;
      });
      console.log(rePasswordInputStyle);
      expect(rePasswordInputStyle).toBe('rgb(205, 195, 204)');
    });
  });
});


