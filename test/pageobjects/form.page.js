    class FormPage {

        // seletores

        get menuForm() { return $("~Forms") }
        get campoTexto() { return $("~text-input") }
        get labelResultado() { return $("~input-text-result") }
        get dropdown() { return $("~Dropdown") }

        // Métodos

        async abrirMenuForm() { await this.menuForm.click() }

        async preencherTexto(texto) { await this.campoTexto.addValue(texto) }

        async validarTexto(texto) { return await this.labelResultado.getText() }

    async selecionarOpcao(textoEsperado) {
        const opcao = await $(`android=new UiSelector().text("${textoEsperado}")`)
        return await opcao.isDisplayed()
    }
    }
    export default new FormPage()