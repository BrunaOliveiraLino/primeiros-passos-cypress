class MyInfoPage {
    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            closeButtonField: '.--close',
            saveButtonField: ".oxd-button--secondary",
            comboBoxButton: ".oxd-select-text--arrow",
            genericDateBirth: "[placeholder='yyyy-dd-mm']",
            genderSelect: ".oxd-radio-wrapper",
        } 
    return selectors

    }

    fillPersonalDetails(firstName, lastName) {

         cy.get(this.selectorsList().firstNameField).clear().type(firstName)
         cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        
    }

    fillEmployeeInfo(employeeId, otherId, driversLicenseNumber, licenseExpiryDate) {

         cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
         cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
         cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber)
         cy.get(this.selectorsList().genericField).eq(6).clear().type(licenseExpiryDate)
         cy.get(this.selectorsList().closeButtonField).click()

    }

    fillStatusDetails() {
         cy.get(this.selectorsList().comboBoxButton).eq(0).click()
         cy.get(':nth-child(4) > span')
         cy.get(this.selectorsList().comboBoxButton).eq(1).click()
         cy.get('.oxd-select-dropdown > :nth-child(3)')
         cy.get(this.selectorsList().genericDateBirth).eq(1).clear().type('2001-08-20')
         cy.get(this.selectorsList().genderSelect).eq(1).click()

    }

    saveFormsButton() {

         cy.get(this.selectorsList().saveButtonField).eq(0).click()
         cy.get('body').should('contain', 'Successfully Update')

    }

    }


    export default MyInfoPage
