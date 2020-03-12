describe('Home Screen Test', () => {
  beforeEach(async () => {
    // await device.reloadReactNative();
  });

  // Before
  it('Should show the Welcome Screen', async () => {
    await expect(element(by.id('welcome_screen'))).toBeVisible();
  });

  it('Should go to Sign In screen after tapping Sign In button on Welcome screen', async () => {
    await element(by.text('Go To Sign In')).tap(); // UI-UX driven
    // await element(by.id('go_to_signin_button')).tap(); // Code driven
    await expect(element(by.id('signin_screen'))).toBeVisible();
  });

  it('should go to Home screen after tapping Sign In button on Sign In screen', async () => {
    await element(by.text('Sign In')).tap();
    // await expect(element(by.id('home_screen'))).toBeVisible();
    await expect(element(by.text('OK'))).toBeVisible();
  });

  // Home
  it('should dismiss Alert', async () => {
    await element(by.text('OK')).tap();
  });

  it('Should show the Home Screen', async () => {
    // await expect(element(by.id('home_screen'))).toBeVisible(); // approach 1
    await waitFor(element(by.id('home_screen'))) // approach 2: wait until alert disappears
      .toBeVisible()
      .withTimeout(500); // UI-UX driven
  });

  it('Should have the HOME text', async () => {
    await expect(element(by.text('HOME'))).toBeVisible();
  });

  it('Should have a Go To FetchExample button', async () => {
    await waitFor(element(by.text('Go To FetchExample')))
      .toBeVisible()
      .withTimeout(500); // UI-UX driven
  });

  it('Should have a Log Out button', async () => {
    await expect(element(by.text('Log Out'))).toBeVisible(); // UI-UX driven
  });
});
