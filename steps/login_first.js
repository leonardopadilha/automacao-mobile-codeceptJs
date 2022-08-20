Feature('login');

Scenario('Login with success', ({ I }) => {
    // fill email field
    I.fillField('~email', 'teste@teste.com');
    // fill password
    I.fillField('~senha', '123456');
    // tap on enter
    I.tap('~entrar');
    //check 
    I.waitForElement('~codigo', 5);
    I.seeElement('~codigo');
});

Scenario('Login with wrong email', ({I}) => {
    I.fillField('~email', 'error@email.com');
    I.fillField('~senha', '123456');
    I.tap('~entrar');
    I.waitForElement('~lognFail', 5);
    I.seeElement('Erro no login!', '~lognFail');
});

Scenario('Login with wrong password', ({I}) => {
    I.fillField('~email', 'teste@teste.com');
    I.fillField('~senha', '14784');
    I.tap('~entrar');
    I.waitForElement('~lognFail', 5);
    I.seeElement('~lognFail', 'Erro no login!');

})

//android.view.ViewGroup[@content-desc="salvar"]/android.view.ViewGroup
// ~codigo

//npm run test
// npx codeceptjs gpo