import {expect} from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  /* beforeEach(async () => {
    await device.reloadReactNative();
  }); */

  it('should have login heading', async () => {
    await expect(element(by.id('login-head'))).toBeVisible();
  });

  it('should show alert when wrong credentials used in login', async () => {

    const emailEl = element(by.id('input-email'));
    const passwordEl = element(by.id('input-password'));

    await emailEl.clearText();
    await passwordEl.clearText();
    await emailEl.typeText('john@example.com');
    await passwordEl.typeText('123456');
    
    await element(by.id('login-btn')).tap();
    
    await expect(
      element(by.text('No active account found with the given credentials')),
    ).toBeVisible();
    
    await element(by.text('OK')).tap();
    
    await expect(
      element(by.text('No active account found with the given credentials')),
    ).not.toBeVisible();
  });

  it('should show welcome screen when correct credentials used in login', async () => {
    const emailEl = element(by.id('input-email'));
    const passwordEl = element(by.id('input-password'));
    const loginButton = element(by.id('login-btn'));

    await emailEl.clearText();
    await passwordEl.clearText();
    await emailEl.typeText('admin@admin.com');
    await passwordEl.typeText('admin');
    await loginButton.tap();

    await expect(loginButton).not.toExist();
    await expect(element(by.id('welcome-user'))).toBeVisible();
  });

  it('should show menu when menu button tapped and closed when close button tapped', async () => {
    await element(by.id('menu-btn')).tap();
    await expect(element(by.id('menu-head'))).toBeVisible();

    await element(by.id('close-menu-btn')).tap();
    await expect(element(by.id('menu-head'))).not.toBeVisible();
  })

  it('should logout when logout button tapped', async () => {
    await element(by.id('menu-btn')).tap();

    await element(by.id('menu-scrollview')).scrollTo('bottom', NaN, 0.2);
    
    await expect(element(by.id('logout-menu-id'))).toBeVisible();

    await element(by.id('logout-menu-id')).tap();
    await expect(element(by.id('logout-menu-id'))).not.toBeVisible();
    await expect(element(by.id('login-head'))).toBeVisible();
  })

});
