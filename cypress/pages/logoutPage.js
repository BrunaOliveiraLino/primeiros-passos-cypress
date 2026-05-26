class LogoutPage {
    selectorsList() {
        const selectors = {
             menuPerfilSelect: ".oxd-userdropdown-name",
             logoutSelect: "[href='/web/index.php/auth/logout']"
        }

        return selectors

    }

    accessUserLogout() {
         cy.get(this.selectorsList().menuPerfilSelect).click()
         cy.get(this.selectorsList().logoutSelect).click()

    }
}

export default LogoutPage