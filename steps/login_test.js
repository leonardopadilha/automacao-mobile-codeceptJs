Feature('login').tag("login");
const { I, login_page } = inject();

BeforeSuite(() => {
    console.log("BeforeSuite => Executa antes de toda a suíte");
});

Before(() => { // Executa antes de cada cenário
    console.log("Before => Executa antes de cada cenário");
});

AfterSuite(() => {
    console.log("AfterSuite => Executa depois de toda a suíte");
});

After(() => { // Executa antes de cada cenário
    console.log("After => Executa depois de cada cenário");
});

Scenario('Login with success', ({home_page}) => {

    I.runOnIOS(() => {
        console.log("IOS");
    })

    login_page.doLogin('teste@teste.com', '123456');
    //pause(); //Debug interativo do codeceptJs
    home_page.checkLoginSuccess();
}).tag("@login_sucesso");

Scenario('Login with wrong email', () => {
    login_page.doLogin('error@email.com', '123456')
    login_page.checkLoginError('Erro no login!');
});

Scenario('Login with wrong password', () => {
    login_page.doLogin('teste@teste.com', '14784');
    login_page.checkLoginError('Erro no login!');

    pause();

    //Fazendo um scroll na página
    I.touchPerform([
        {
            action: 'longPress',
            options: { 
                x: 300,
                y: 1100
            }
        },
        {
            action: 'moveTo',
            options: {
                x: 300,
                y: 250
            }
        }, {action: 'release'}])
})

//android.view.ViewGroup[@content-desc="salvar"]/android.view.ViewGroup
// ~codigo

//npm run test --> Executar os testes
// Não esquecer de ativar o Appium também
// npx codeceptjs gpo
// npx codeceptjs gt --> Cria testes se baseado na propriededade de test em configurações
// npm run test --grep @login