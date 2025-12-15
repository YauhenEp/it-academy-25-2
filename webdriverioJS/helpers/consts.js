const CONSTANTS = {
    WRONG_CREDENTIAL_NOTIFICATION: 'Неверный логин или пароль',
    CREDENTIALS: {
        invalidCredentials: {
            login: 'Login Name',
            password: 'Password'
        }
    }
}

async function clickWithJS() {
    await browser.execute(() => {
        document.querySelector().click()
    })
}
export { CONSTANTS }