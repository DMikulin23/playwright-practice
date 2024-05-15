import { expect, type Locator, type Page } from '@playwright/test';

export class SingUp {
  readonly page: Page;
  readonly singUpButton: Locator;
  readonly nameField: Locator;
  readonly lastNameField: Locator;
  readonly emailField: Locator;
  readonly passwordField: Locator;
  readonly rePasswordField: Locator;
  readonly registerButton: Locator;
  readonly errorMassage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.singUpButton = page.getByText('Sign up');
    this.nameField = page.locator('#signupName');
    this.lastNameField = page.locator('#signupLastName');
    this.errorMassage = page.locator('.invalid-feedback');
    this.emailField = page.locator('#signupEmail');
    this.passwordField = page.locator('#signupPassword');
    this.registerButton = page.getByRole('button', { name: 'Register' })
    this.rePasswordField = page.locator('#signupRepeatPassword');
  }

  async loginWithCredentials(name: string, lastName: string, email: string, password: string, rePassword: string) {
    await this.nameField.fill(name);
    await this.lastNameField.fill(lastName);
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.rePasswordField.fill(rePassword);
  }

  


}