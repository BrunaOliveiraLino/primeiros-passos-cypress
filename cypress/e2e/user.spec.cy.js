import LoginPage from '../pages/loginPage.js'
import userData from '../fixtures/userData.json'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js' 
import MyInfoPage from '../pages/myInfoPage.js'
import LogoutPage from '../pages/logoutPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()
const logoutPage = new LogoutPage()


describe('Orange HRM Tests', () => {

 

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    //dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails('firstName', 'lastName')
    myInfoPage.fillEmployeeInfo('employee', '12345', '010101', '2026-05-22')
    myInfoPage.fillStatusDetails()
    myInfoPage.saveFormsButton()

    logoutPage.accessUserLogout()
 

  })

})