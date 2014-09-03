/**
 * Created by vgrafe on 8/6/14.
 */

var LoginPage = require("../mocks/login.js");

describe('sm.main login scenarios', function () {

    var ptor;
    var loginPage = new LoginPage();

    beforeEach(function () {
        loginPage.visitPage();
        ptor = protractor.getInstance();
    });

    it('should load the page', function () {
        expect(browser.getTitle()).toEqual('http://m.scanprint.net/#/login');
    });

    it('should not display an error message', function () {
        expect(loginPage.hasErrorMessage()).toBe(false);
    });

    describe('when loggin a wrong user', function () {

        beforeEach(function () {
            loginPage.fillLogin('asdasaa');
            loginPage.fillPassword('asdasaa');
            loginPage.login();
        });

        it('should display an error message', function () {
            expect(loginPage.hasErrorMessage()).toBe(true);
        });
    });
});