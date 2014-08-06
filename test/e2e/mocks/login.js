/**
 * Created by vgrafe on 8/6/14.
 */
var LoginPage = (function () {
    function LoginPage() {
        this.loginField = element(by.model('vm.credentials.login'));
        this.passwordField = element(by.model('vm.credentials.password'));
        this.loginButton = element(by.id('loginButton'));
        this.errorMessage = element(by.id('errorMessage'));
    }

    LoginPage.prototype.visitPage = function () {
        browser.get("/");
    };

    LoginPage.prototype.fillLogin = function (email) {
        this.loginField.sendKeys(email);
    };

    LoginPage.prototype.fillPassword = function (password) {
        if (password == null) {
            password = "password";
        }
        this.passwordField.sendKeys(password);
    };

    LoginPage.prototype.login = function () {
        this.loginButton.click();
    };

    LoginPage.prototype.hasErrorMessage = function () {
        var ptor = protractor.getInstance();
        return ptor.isElementPresent(this.errorMessage);
    };

    return LoginPage;
})();

module.exports = LoginPage;