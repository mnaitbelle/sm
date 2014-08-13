exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'http://m.scanprint.net/',
    specs: [
        'scenarios/login.scenario.js',
        '../../app/scripts/login/login.spec.js'
    ]
}

/*
use:
 start selenium server with "webdriver-manager start"
 start e2e tests "protractor test/e2e/conf.js"

 tuto : https://github.com/angular/protractor/blob/master/docs/tutorial.md
 */