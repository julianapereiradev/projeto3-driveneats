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
    
    stringPrecoPrato = stringPrecoPrato.replace(",",".")

    precoPrato = Number(stringPrecoPrato)

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

    stringPrecoBebida = stringPrecoBebida.replace(",",".")
    
    precoBebida = Number(stringPrecoBebida)

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

    stringPrecoSobremesa = stringPrecoSobremesa.replace(",",".")
    
    precoSobremesa = Number(stringPrecoSobremesa)

    const botaoSelecionadoAnteriormente = document.querySelector('.row-caixas-sobremesas .selecionado')
   
    if (botaoSelecionadoAnteriormente !== null) {

        botaoSelecionadoAnteriormente.classList.remove('selecionado')
    }
    botao.classList.add('selecionado')

    verificaSelecao()
}


function pedidoCompleto() {
    const total = (precoPrato + precoBebida + precoSobremesa)
    const duasCasasDecimais = Math.round(total * 1e2) / 1e2
    const totalPTBR = duasCasasDecimais.toLocaleString('pt-BR')

    const resposta = `Olá, gostaria de fazer o pedido: \n- Prato: ${nomePrato} \n - Bebida: ${nomeBebida}  \n - Sobremesa: ${nomeSobremesa}  \n Total: R$ ${totalPTBR}`

    texto = window.encodeURIComponent(resposta)

    window.open(`https://wa.me/5521982892679?text=${texto}`)
}
