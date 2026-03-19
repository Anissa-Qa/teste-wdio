class DragPage {

    // MENU
    get menuDrag() { return $("~Drag") }

    // RESULTADO FINAL
    get mensagem() { return $('~Congratulations') }
    get botaoRetry() { return $('~Retry') }

    async abrirTelaDrag() {
        await this.menuDrag.waitForDisplayed({ timeout: 10000 })
        await this.menuDrag.click()
    }

    async arrastar(origem, destino) {
    console.log(`Arrastando ${origem} -> ${destino}`)

    const elOrigem = await $(`~${origem}`)
    const elDestino = await $(`~${destino}`)

    await elOrigem.waitForDisplayed({ timeout: 10000 })
    await elDestino.waitForDisplayed({ timeout: 10000 })

    await elOrigem.dragAndDrop(elDestino)

    await driver.pause(800)
}

    async arrastar(origem, destino) {
        const elOrigem = await $(`~${origem}`)
        const elDestino = await $(`~${destino}`)

        await elOrigem.waitForDisplayed({ timeout: 10000 })
        await elDestino.waitForDisplayed({ timeout: 10000 })

        await elOrigem.dragAndDrop(elDestino)

        await driver.pause(500) // 👈 estabilidade
    }

    async completarDrag() {
        await this.arrastar('drag-l2', 'drop-l2')
        await this.arrastar('drag-r3', 'drop-r3')
        await this.arrastar('drag-r1', 'drop-r1')
        await this.arrastar('drag-c1', 'drop-c1')
        await this.arrastar('drag-c3', 'drop-c3')
        await this.arrastar('drag-r2', 'drop-r2')
        await this.arrastar('drag-c2', 'drop-c2')
        await this.arrastar('drag-l1', 'drop-l1')
        await this.arrastar('drag-l3', 'drop-l3')
    }
}

export default new DragPage()