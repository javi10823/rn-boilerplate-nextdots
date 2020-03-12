describe('Sign In Screen', () => {
  beforeEach(async () => {
    // await device.reloadReactNative();
  });

  it('Should show the Welcome Screen', async () => {
    await expect(element(by.id('welcome_screen'))).toBeVisible();
  });

  // Sign in
  it('Should go to Sign In screen after tapping Sign In button on Welcome screen', async () => {
    await element(by.text('Go To Sign In')).tap(); // UI-UX driven
    // await element(by.id('go_to_signin_button')).tap(); // Code driven
    await expect(element(by.id('signin_screen'))).toBeVisible();
  });

  it('Should have email and password fields, and a Sign In button', async () => {
    await expect(element(by.id('email_field'))).toBeVisible();
    await expect(element(by.id('password_field'))).toBeVisible();
    await expect(element(by.text('Sign In'))).toBeVisible();
  });

  it('Should be able to delete the text of the Email in the text Input', async () => {
    await element(by.id('email_field')).clearText();
  });

  it('Should not be able to Sign In if the email field is invalid.', async () => {
    await element(by.text('Sign In')).tap();
    // await expect(element(by.id('home_screen'))).toBeNotVisible(); // approach 1
    await expect(element(by.id('signin_screen'))).toBeVisible(); // approach 2
  });

  it('Should be able to write the Email in the text Input', async () => {
    await element(by.id('email_field')).typeText('user@email.com');
  });

  it('Should be able to delete the text of the Password in the text Input', async () => {
    await element(by.id('password_field')).clearText();
  });

  it('Should not be able to Sign In if the password field is invalid.', async () => {
    await element(by.text('Sign In')).tap();
    // await expect(element(by.id('home_screen'))).toBeNotVisible(); // approach 1
    await expect(element(by.id('signin_screen'))).toBeVisible(); // approach 2
  });

  it('Should be able to write the Password in the text Input', async () => {
    await element(by.id('password_field')).typeText('Asd123123');
  });

  it('should leave the screen after tapping Sign In button', async () => {
    await element(by.text('Sign In')).tap();
    await expect(element(by.id('signin_screen'))).toBeNotVisible();
    // await expect(element(by.id('home_screen'))).toBeVisible();
  });
});
