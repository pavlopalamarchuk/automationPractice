const url = 'http://automationpractice.com/index.php'

module.exports = {
    /*Automation practice Urls */
    baseUrl: `${url}`,
    autentificationUrl: `${url}?controller=authentication&back=my-account`,
    myAccountUrl: `${url}?controller=my-account`,
    logInUrl: `${url}?controller=authentication`,
    logOutUrl: `${url}?mylogout=`,
    /*Data*/
    email: 'testsevtest@gmail.com',
    password: '12345678',
}
