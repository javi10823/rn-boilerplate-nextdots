describe('Welcome Screen Test', () => {
  beforeEach(async () => {
    // await device.reloadReactNative();
  });

  it('should show the Welcome Screen', async () => {
    await expect(element(by.id('welcome_screen'))).toBeVisible();
  });

  it('should have the Next Dots logo', async () => {
    await expect(element(by.id('nextdots_logo'))).toBeVisible();
  });

  it('should have a specific welcome text', async () => {
    await expect(
      element(by.text(`REACT NATIVE TYPESCRIPT\nNEXTDOTS v0.61.5 FEBRUARY 2020`)),
    ).toBeVisible();
  });
});
