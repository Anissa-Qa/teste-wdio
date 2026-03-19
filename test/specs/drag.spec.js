import dragPage from '../pageobjects/drag.page.js'

describe('Funcionalidade: Drag and Drop', () => {

    beforeEach(async () => {
        await dragPage.abrirTelaDrag()
    })

    it('Deve arrastar todas as peças corretamente', async () => {

        await dragPage.completarDrag()
        const mensagem = await $('//*[contains(@text, "Congratulations")]')
        await mensagem.waitForDisplayed({ timeout: 20000 })

    })

})