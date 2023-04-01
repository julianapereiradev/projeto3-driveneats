let nomePrato = ""
let nomeBebida = ""
let nomeSobremesa = ""
let precoPrato = ""
let precoBebida = ""
let precoSobremesa = ""
let numeroPrato = 0
let numeroBebida = 0
let numeroSobremesa = 0

function verificaSelecao() {
    if (nomePrato !== '') {
        //
        if (nomeBebida !== '') {
            //
            if (nomeSobremesa !== '') {
                const botaoContinuar = document.querySelector('.botao-continuar')
                console.log('botaoContinuar aqui::', botaoContinuar)
                botaoContinuar.classList.add('continuar')
                botaoContinuar.removeAttribute('disabled')
                botaoContinuar.innerHTML = 'Fechar pedido'
                botaoContinuar.style.background = "#32B72F"
            }
        }
    }
}


function selecionarPrato(botao) {

    // nomePrato = botao.querySelector(nomePrato + '.caixa-titulo');
    // nomeTitulo = nomePrato.innerHTML
    // console.log('nomePrato', nomePrato)
    // console.log('nomeTitulo', nomeTitulo)

    nomePrato = botao.querySelector('.caixa-titulo').innerHTML
    console.log('nomePrato',nomePrato)

    let precoPrato = botao.querySelector('.caixa-preco').innerHTML

    // precoPrato = Number(precoPrato)

    // console.log('dpeois::', precoPrato)

 numeroPrato = numeroPrato + Number(precoPrato)
 console.log('numeroPrato', numeroPrato)

    const botaoSelecionadoAnteriormente = document.querySelector('.row-caixas-pratos .selecionado')
    console.log('botaoSelecionadoAnteriormente em prato' , botaoSelecionadoAnteriormente)

    if (botaoSelecionadoAnteriormente !== null) {
        botaoSelecionadoAnteriormente.classList.remove('selecionado')
    }


    botao.classList.add('selecionado')

    verificaSelecao()

}

function selecionarBebida(botao) {

    
    nomeBebida = botao.querySelector('.caixa-titulo').innerHTML
    console.log('nomeBebida',nomeBebida)

    let precoBebida = botao.querySelector('.caixa-preco').innerHTML

    // precoBebida = Number(precoBebida)

    // console.log('dpeois::', precoBebida)

 numeroBebida = numeroBebida + Number(precoBebida)
 console.log('numeroBebida', numeroBebida)


    const botaoSelecionadoAnteriormente = document.querySelector('.row-caixas-bebidas .selecionado')
    console.log('botaoSelecionadoAnteriormente em sbebeida' , botaoSelecionadoAnteriormente)

    if (botaoSelecionadoAnteriormente !== null) {
        botaoSelecionadoAnteriormente.classList.remove('selecionado')
    }

    botao.classList.add('selecionado')

    verificaSelecao()
}

function selecionarSobremesa(botao) {
    // nomeSobremesa = botao.innerHTML;

    nomeSobremesa = botao.querySelector('.caixa-titulo').innerHTML
    console.log('nomeSobremesa',nomeSobremesa)

    let precoSobremesa = botao.querySelector('.caixa-preco').innerHTML

    // precoSobremesa = Number(precoSobremesa)

    // console.log('dpeois::', precoSobremesa)

 numeroSobremesa = numeroSobremesa + Number(precoSobremesa)
 console.log('numeroSobremesa', numeroSobremesa)

    //primeiro vou verificar se existe botao ja selecionado
    //buscar o botao com a classe selecionada
    const botaoSelecionadoAnteriormente = document.querySelector('.row-caixas-sobremesas .selecionado')
    console.log('botaoSelecionadoAnteriormente em sobremesa' , botaoSelecionadoAnteriormente)
    //se existir botao selecionado,
    if (botaoSelecionadoAnteriormente !== null) {
        //remove a classe selecionado desse botao
        botaoSelecionadoAnteriormente.classList.remove('selecionado')
    }

    //adiciona a classe selecionado
    botao.classList.add('selecionado')

    verificaSelecao()
}

console.log(`Ola, tudo bem`)


function pedidoCompleto() {
    const resposta = `Olá, gostaria de fazer o pedido: \n- Prato: ${nomePrato} \n - Bebida: ${nomeBebida}  \n - Sobremesa: ${nomeSobremesa}  \n Total: ${(numeroPrato+numeroBebida+numeroSobremesa).toFixed(2)}`
    
    texto = window.encodeURIComponent(resposta)

    window.open(`https://wa.me/5521982892679?text=${texto}`)
}


//fazer a parte dos teste automaticos (ver video)
//ver se consigo mudar o icon

