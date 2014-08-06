/**
 * Created by vgrafe on 8/6/14.
 */
describe('scanprintMobile login scenarios', function () {

    var ptor;

    beforeEach(function () {
        browser.get('http://m.scanprint.net/');
        ptor = protractor.getInstance();
    });

    it('should not log random user', function () {
        expect(browser.getTitle()).toEqual('http://m.scanprint.net/');
    });

    it('should not display an error message', function () {
        expect(ptor.isElementPresent(by.id('errorMessage'))).toBe(false);
    });

    describe('when loggin a wrong user', function () {

        beforeEach(function () {
            element(by.model('vm.credentials.login')).sendKeys('oisajoaij sdioj');
            element(by.model('vm.credentials.password')).sendKeys('asdasd');
            element(by.id('loginButton')).click();
        });

        it('should display an error message', function () {
            expect(ptor.isElementPresent(by.id('errorMessage'))).toBe(true);
        });
    });
});