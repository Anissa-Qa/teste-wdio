import formPage from '../pageobjects/form.page';

describe('Funcionalidade: Tela de Formulário', () => {

    beforeEach(async () => {
        formPage.abrirMenuForm()
    });

    it('Deve validar se o texto foi preenchido corretamente', async () => {
        await formPage.preencherTexto('Teste de preenchimento')
        expect(await formPage.validarTexto()).toEqual('Teste de preenchimento')
        await driver.pause(5000)
    });

    //arrumar esse teste que está quebrando
    it('Validar a seleção do dropdown', async () => {
        await formPage.abrirMenuForm()
        await formPage.selecionarOpcao('Appium is awesome')

        expect(await formPage.validarOpcao()).toEqual('Appium is awesome')
        await driver.pause(5000)
    })
    it('Deve trocar o botão de on para off ', async () => {

        const el1 = await driver.$('android=new UiSelector().className("android.widget.Switch")')
        await el1.click();
        await driver.pause(5000)

    });

});