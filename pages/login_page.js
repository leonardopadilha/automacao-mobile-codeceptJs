const { I } = inject();

module.exports = {

  fields: {
    email: '~email',
    password: '~senha',
  },

  button: {
    enter: '~entrar',
  },

  messages: {
    login_error: '~lognFail',
  },

  doLogin(emailUser, passwordUser) {
    I.fillField(this.fields.email, emailUser);
    I.fillField(this.fields.password, passwordUser);
    I.tap(this.button.enter);
  },

  checkLoginError(message) {
    I.waitForElement(this.messages.login_error, 5);
    I.seeElement(this.messages.login_error, message);
  }
}
