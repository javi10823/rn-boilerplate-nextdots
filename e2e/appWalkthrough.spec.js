describe('Complete app Walkthrough', () => {
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

  // Home
  it('Should show and the dismiss Alert after tapping Sign In button on Sign In screen', async () => {
    await element(by.text('Sign In')).tap();
    await expect(element(by.text('OK'))).toBeVisible();
    await element(by.text('OK')).tap();
  });

  it('Should show Home screen after dismissing Alert', async () => {
    // await expect(element(by.id('home_screen'))).toBeVisible(); // approach 1
    await waitFor(element(by.id('home_screen'))) // approach 2: wait until alert disappears
      .toBeVisible()
      .withTimeout(500); // UI-UX driven
  });

  // Fetch Example
  it('Should go to Fetch Example screen after tapping on button', async () => {
    await waitFor(element(by.text('Go To FetchExample'))) // UI-UX driven
      .toBeVisible()
      .withTimeout(500);
    await element(by.text('Go To FetchExample')).tap();
    await expect(element(by.id('fetch_example_screen'))).toBeVisible();
  });

  it('Should go back to FetchExample pressing the back arrow.', async () => {
    await expect(element(by.id('back_button_on_fetch_screen'))).toBeVisible();
    await element(by.id('back_button_on_fetch_screen')).tap();
    await expect(element(by.id('home_screen'))).toBeVisible();
  });

  // Log out
  it('Should go to Welcome screen after tapping Log Out button on Home screen', async () => {
    await expect(element(by.text('Log Out'))).toBeVisible();
    await element(by.text('Log Out')).tap();
    await expect(element(by.id('welcome_screen'))).toBeVisible();
  });
});
