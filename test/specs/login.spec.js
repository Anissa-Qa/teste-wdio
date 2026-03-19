import LoginPage from '../pageobjects/login.page.js'

describe('Funcionalidade: Login', () => {

    beforeEach(async () => {
        await driver.terminateApp('com.wdiodemoapp')
        await driver.activateApp('com.wdiodemoapp')
    })

    it('Deve fazer login com sucesso', async () => {
        await LoginPage.abrirMenu()
        await LoginPage.preencherLogin('anissa@teste.com', '12345678')
        await driver.pause(3000)
        expect(await LoginPage.mensagemAlerta()).toEqual('You are logged in!');

    })

    it('Deve falhar ao fazer login com email invalido', async () => {
        await LoginPage.abrirMenu()
        await LoginPage.preencherLogin('anissa@teste', '12345678')
        await LoginPage.mensagemErro('Please enter a valid email address')
    })

    it('Deve falhar ao fazer login com senha inválida', async () => {
        await LoginPage.abrirMenu()
        await LoginPage.preencherLogin('anissa@teste.com', '1234')
        await LoginPage.mensagemErro('Please enter at least 8 characters')
    });
})