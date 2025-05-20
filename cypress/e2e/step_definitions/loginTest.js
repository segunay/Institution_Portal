
import LoginTest from '../../Pages/LoginPage';
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
const login = new LoginTest

Given(/^I am on the home page$/, () => {
    cy.visit('/')

});

Then('I login successfully',()=>{
    login.loginCredentials()
})
Then('I am on the dashboard',()=>{
    login.verifyLogin()
})
            