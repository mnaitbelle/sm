/**
 * Created by vgrafe on 8/6/14.
 */
describe('angularjs login', function() {

    var ptor;

    beforeEach(function() {
        browser.get('http://m.scanprint.net/');
        ptor = protractor.getInstance();
    });

    it('should not log random user', function() {
        expect(browser.getTitle()).toEqual('http://m.scanprint.net/');
    });

    it('should not display error message', function() {
        expect(ptor.isElementPresent(by.id('repoform'))).toBe(false);
    });

    it('should not log random user', function() {
        element(by.model('vm.credentials.login')).sendKeys('oisajoaij sdioj');
        element(by.model('vm.credentials.password')).sendKeys('asdasd');
        element(by.id('loginButton')).click();
    });
});