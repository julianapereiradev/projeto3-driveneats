let nomePrato = ""
let nomeBebida = ""
let nomeSobremesa = ""
let stringPrecoPrato = ""
let stringPrecoBebida = ""
let stringPrecoSobremesa = ""
let precoPrato = 0
let precoBebida = 0
let precoSobremesa = 0
let nome = ''
let endereco = ''
let totalPTBR = ''

var modal = document.getElementById("myModal");

// -- Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// -- Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// -- When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// -- When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// -- When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

function buttonFechar() {
    let button = document.getElementsByClassName("close")[0];
    modal.style.display = 'none'

}

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

    stringPrecoPrato = stringPrecoPrato.replace(",", ".")

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

    stringPrecoBebida = stringPrecoBebida.replace(",", ".")

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

    stringPrecoSobremesa = stringPrecoSobremesa.replace(",", ".")

    precoSobremesa = Number(stringPrecoSobremesa)

    const botaoSelecionadoAnteriormente = document.querySelector('.row-caixas-sobremesas .selecionado')

    if (botaoSelecionadoAnteriormente !== null) {

        botaoSelecionadoAnteriormente.classList.remove('selecionado')
    }
    botao.classList.add('selecionado')

    verificaSelecao()
}


function pedidoCompleto() {
    let total = (precoPrato + precoBebida + precoSobremesa)
    let duasCasasDecimais = Math.round(total * 1e2) / 1e2
    totalPTBR = duasCasasDecimais.toLocaleString('pt-BR')

    // const resposta = `Olá, gostaria de fazer o pedido: \n- Prato: ${nomePrato} \n - Bebida: ${nomeBebida}  \n - Sobremesa: ${nomeSobremesa}  \n Total: R$ ${totalPTBR}`

    // texto = window.encodeURIComponent(resposta)

    // window.open(`https://wa.me/5521982892679?text=${texto}`)
     nome = prompt("Qual o seu nome?")
     endereco = prompt("Qual o seu endereço?")

    modal.style.display = "block";

    const finalNomePrato = document.querySelector('.nome-prato-confirme')
 
    finalNomePrato.innerHTML = nomePrato

    const finalPrecoPrato = document.querySelector('.preco-prato-confirme')
 
    finalPrecoPrato.innerHTML = precoPrato


    const finalNomeBebida = document.querySelector('.nome-bebida-confirme')
 
    finalNomeBebida.innerHTML = nomeBebida

    const finalPrecoBebida = document.querySelector('.preco-bebida-confirme')
 
    finalPrecoBebida.innerHTML = precoBebida


    const finalNomeSobremesa = document.querySelector('.nome-sobremesa-confirme')
 
    finalNomeSobremesa.innerHTML = nomeSobremesa

    const finalPrecoSobremesa = document.querySelector('.preco-sobremesa-confirme')
 
    finalPrecoSobremesa.innerHTML = precoSobremesa


    const finalPrecoTotal = document.querySelector('.preco-total-confirme')
 
    finalPrecoTotal.innerHTML = `R$ ${totalPTBR}`
    
}

function tudoCerto() {
    const resposta = `Olá, gostaria de fazer o pedido: \n- Prato: ${nomePrato} \n - Bebida: ${nomeBebida}  \n - Sobremesa: ${nomeSobremesa}  \n Total: R$ ${totalPTBR} \n \n Nome: ${nome} \n Endereço: ${endereco}`

    texto = window.encodeURIComponent(resposta)

    window.open(`https://wa.me/5521982892679?text=${texto}`)
}