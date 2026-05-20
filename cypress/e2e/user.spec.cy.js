import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: 'button',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb',
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: '.oxd-alert--error',    
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    closeButtonField: '.--close',
    saveButtonField: ".oxd-button--secondary"
 }

  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('testFirstName')
    cy.get(selectorsList.lastNameField).clear().type('testLastName')
    cy.get(selectorsList.genericField).eq(3).clear().type('EmploTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('12345')
    cy.get(selectorsList.genericField).eq(5).clear().type('Drivers licence number test')
    cy.get(selectorsList.genericField).eq(6).clear().type('2026-05-19')
    cy.get(selectorsList.closeButtonField).click()
    cy.get(selectorsList.saveButtonField).eq(0).click()
    cy.get('body').should('contain', 'Successfully Update')

    
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
 })
})