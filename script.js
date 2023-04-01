let nomePrato = ""
let nomeBebida = ""
let nomeSobremesa = ""

function verificaSelecao() {
    if(nomePrato !== '') {
        //
        if(nomeBebida !== '') {
            //
            if(nomeSobremesa !== '') {
                const botaoContinuar = document.querySelector('.botao-continuar')
                console.log('botaoContinuar aqui::',botaoContinuar)
                botaoContinuar.classList.add('continuar')
                botaoContinuar.removeAttribute('disabled')
                botaoContinuar.innerHTML = 'Fechar pedido'
            }
        }
    }
}

function selecionarPrato(botao) {

    nomePrato = botao.innerHTML;

    const botaoSelecionadoAnteriormente = document.querySelector('.row-caixas-pratos .selecionado')
   
    if (botaoSelecionadoAnteriormente !== null) {
        botaoSelecionadoAnteriormente.classList.remove('selecionado')
    }
    

    botao.classList.add('selecionado')

    verificaSelecao()

}

function selecionarBebida(botao) {

    nomeBebida = botao.innerHTML;
   
    const botaoSelecionadoAnteriormente = document.querySelector('.row-caixas-bebidas .selecionado')
   
    if (botaoSelecionadoAnteriormente !== null) {
        botaoSelecionadoAnteriormente.classList.remove('selecionado')
    }
  
    botao.classList.add('selecionado')

    verificaSelecao()
}

function selecionarSobremesa(botao) {
    nomeSobremesa = botao.innerHTML;

    //primeiro vou verificar se existe botao ja selecionado
    //buscar o botao com a classe selecionada
    const botaoSelecionadoAnteriormente = document.querySelector('.row-caixas-sobremesas .selecionado')
    console.log(botaoSelecionadoAnteriormente)
    //se existir botao selecionado,
    if (botaoSelecionadoAnteriormente !== null) {
        //remove a classe selecionado desse botao
        botaoSelecionadoAnteriormente.classList.remove('selecionado')
    }

    //adiciona a classe selecionado
    botao.classList.add('selecionado')

    verificaSelecao()
}




