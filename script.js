let nomePrato = ""
let nomeBebida = ""
let nomeSobremesa = ""
let stringPrecoPrato = ""
let stringPrecoBebida = ""
let stringPrecoSobremesa = ""
let precoPrato = 0
let precoBebida = 0
let precoSobremesa = 0

function verificaSelecao() {
    if (nomePrato !== '') {
        //
        if (nomeBebida !== '') {
            //
            if (nomeSobremesa !== '') {
                const botaoContinuar = document.querySelector('.botao-continuar')
               
                botaoContinuar.classList.add('continuar')
                botaoContinuar.removeAttribute('disabled')
                botaoContinuar.innerHTML = 'Fechar pedido'
                botaoContinuar.style.background = "#32B72F"
            }
        }
    }
}


function selecionarPrato(botao) {

    nomePrato = botao.querySelector('.caixa-titulo').innerHTML

    let stringPrecoPrato = botao.querySelector('.caixa-preco').innerHTML

    precoPrato = precoPrato + Number(stringPrecoPrato)

    const botaoSelecionadoAnteriormente = document.querySelector('.row-caixas-pratos .selecionado')

    if (botaoSelecionadoAnteriormente !== null) {
        botaoSelecionadoAnteriormente.classList.remove('selecionado')
    }

    botao.classList.add('selecionado')

    verificaSelecao()
}

function selecionarBebida(botao) {

    nomeBebida = botao.querySelector('.caixa-titulo').innerHTML

    let stringPrecoBebida = botao.querySelector('.caixa-preco').innerHTML

    precoBebida = precoBebida + Number(stringPrecoBebida)

    const botaoSelecionadoAnteriormente = document.querySelector('.row-caixas-bebidas .selecionado')

    if (botaoSelecionadoAnteriormente !== null) {
        botaoSelecionadoAnteriormente.classList.remove('selecionado')
    }

    botao.classList.add('selecionado')

    verificaSelecao()
}


function selecionarSobremesa(botao) {

    nomeSobremesa = botao.querySelector('.caixa-titulo').innerHTML

    let stringPrecoSobremesa = botao.querySelector('.caixa-preco').innerHTML

    precoSobremesa = precoSobremesa + Number(stringPrecoSobremesa)

    const botaoSelecionadoAnteriormente = document.querySelector('.row-caixas-sobremesas .selecionado')
   
    if (botaoSelecionadoAnteriormente !== null) {

        botaoSelecionadoAnteriormente.classList.remove('selecionado')
    }
    botao.classList.add('selecionado')

    verificaSelecao()
}


function pedidoCompleto() {
    const resposta = `Olá, gostaria de fazer o pedido: \n- Prato: ${nomePrato} \n - Bebida: ${nomeBebida}  \n - Sobremesa: ${nomeSobremesa}  \n Total: ${(precoPrato + precoBebida + precoSobremesa).toFixed(2)}`

    texto = window.encodeURIComponent(resposta)

    window.open(`https://wa.me/5521982892679?text=${texto}`)
}
