// @ts-check
const { test, expect } = require('@playwright/test');
const { loginPage } = require('../pages/loginPage');
const { loginInformation } = require('../data-classes/loginInformation');
const { basePage } = require('../pages/basePage');



test.describe('Login Tests', ()=> {
  let loginPageVar;
  test.beforeEach(async ({page}) => {
    loginPageVar = new loginPage(page);
    await loginPageVar.goto();
  })
  
  let loginTestsParams = [ 
    {loginInfo: new loginInformation('aleksas.balciukynas@sft.com', 'tester142'), userType: 'user'},
    {loginInfo: new loginInformation('admin9@sft.com', 'admin816'), userType: 'admin'},
  ]

  loginTestsParams.forEach((param) => {
    test(`Successful ${param.userType} login`, async ({ page }) => {
      // Arrange
      let urlAfterLoginSubstring = 'https://lunch.devbstaging.com/dishes/';
    
      // Act
      await loginPageVar.login(param.loginInfo);
    
      // Assert
      await expect(page).toHaveURL(new RegExp(urlAfterLoginSubstring)); // Verifies if the url of current page has urlAfterLogin substring
    });
  })
})



test.describe('Navigation tests', ()=> {
  let loginPageVar;
  let basePageVar;
  test.beforeEach(async ({page}) => {
    loginPageVar = new loginPage(page);
    basePageVar = new basePage(page);
    await loginPageVar.goto();
  })

  let userNavigationTestsParams = [
    {buttonText: "Užsakymų istorija"},
    {buttonText: "Užsakymų Sąrašas"},
    {buttonText: "Patiekalų Įvertinimai"},
    {buttonText: "Nustatymai"},
  ]
  
  userNavigationTestsParams.forEach((param) => {
    test(`${param.buttonText} user navigation successful`, async ({page}) => {
      // Act
      var loginInfo = new loginInformation('aleksas.balciukynas@sft.com', 'tester142');
      await loginPageVar.login(loginInfo);
      await basePageVar.menu.clickButtonInMenu(param.buttonText);
      
      // Assert
      expect(await basePageVar.title.innerText()).toBe(param.buttonText);
    })
  })

  let adminNavigationTestsParams = [
    {buttonText: "Patiekalų Redagavimas"},
    {buttonText: "Vartotojų Išlaidos"},
    {buttonText: "Užsakymų istorija"},
    {buttonText: "Užsakymų Sąrašas"},
    {buttonText: "Užsakymų Kiekiai"},
    {buttonText: "Patiekalų Įvertinimai"},
    {buttonText: "Nustatymai"},
  ]
  
  adminNavigationTestsParams.forEach((param) => {
    test(`${param.buttonText} admin navigation successful`, async ({page}) => {
      // Act
      var loginInfo = new loginInformation('admin9@sft.com', 'admin816');
      await loginPageVar.login(loginInfo);
      await basePageVar.menu.clickButtonInMenu(param.buttonText);
      
      // Assert
      expect(await basePageVar.title.innerText()).toBe(param.buttonText);
    })
  })
})