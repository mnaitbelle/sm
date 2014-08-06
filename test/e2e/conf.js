exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'http://m.scanprint.net/',
    specs: [
        'login.scenario.js'
    ]
}

/*
use:
 start selenium server with "webdriver-manager start"
 start e2e tests "protractor test/e2e/conf.js"

 tuto : https://github.com/angular/protractor/blob/master/docs/tutorial.md
 */