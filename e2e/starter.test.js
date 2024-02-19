describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have login heading', async () => {
    await expect(element(by.id('login-head'))).toBeVisible();
  });
  
  it('should show welcome screen after login', async () => {
    await element(by.id('login-btn')).tap();
    await expect(element(by.id('welcome-user'))).toBeVisible();
  });
});
