const { browser } = require('@wdio/globals')

/**
 * Base page object with common helpers.
 */
module.exports = class Base {
    /**
     * Navigate to a path relative to the base site.
     *
     * @param {string} [endpoint=''] Relative endpoint (leading slashes are allowed).
     * @returns {Promise<import('webdriverio').Browser>} Resolves when navigation completes.
     */
    async navigate(endpoint = '') {
        return browser.url(`https://www.onliner.by/${endpoint}`)
    }
}
