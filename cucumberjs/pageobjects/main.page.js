const { $ } = require('@wdio/globals')
const Base = require('./base');
const header = require('./components/header');
const cookies = require('./components/cookies')

class MainPage extends Base {
    constructor() {
        super();
        this.header = header;
        this.cookies = cookies;
    }
}

module.exports = new MainPage();
