class LoginTest {

    loginBtn = "//button[normalize-space()='Log In']"
    emailField = "#email"
    passwordField = "#passwordField"
    loginButton = "#login"
    email = "as@yopmail.com"
    password = "Password123!"
    dasboard = "//h6[normalize-space()='Dashboard']"


    loginCredentials() {
        cy.xpath("//button[normalize-space()='Log In']").click()
        cy.get(this.emailField).type(this.email)
        cy.get(this.passwordField).type(this.password)
        cy.get(this.loginButton).click()
    }

    verifyLogin(){
        cy.xpath(this.dasboard).should('contain','Dashboard').and('be.visible')
    }

}
export default LoginTest