const { browser } = require('@wdio/globals')

module.exports = class Base {
    async navigate(endpoint = '') {
        return browser.url(`https://www.onliner.by/${endpoint}`)
    }
}
