function selecionarPrato(seletor) {
    const botaoSelecionadoAnteriormente = document.querySelector('.row-caixas-pratos .selecionado')
   
    if (botaoSelecionadoAnteriormente !== null) {
        botaoSelecionadoAnteriormente.classList.remove('selecionado')
    }
    
    const botao = document.querySelector(seletor)
    botao.classList.add('selecionado')
}

function selecionarBebida(seletor) {
   
    const botaoSelecionadoAnteriormente = document.querySelector('.row-caixas-bebidas .selecionado')
   
    if (botaoSelecionadoAnteriormente !== null) {
        botaoSelecionadoAnteriormente.classList.remove('selecionado')
    }
  
    const botao = document.querySelector(seletor) 
    botao.classList.add('selecionado')
}

function selecionarSobremesa(seletor) {
    //primeiro vou verificar se existe botao ja selecionado
    //buscar o botao com a classe selecionada
    const botaoSelecionadoAnteriormente = document.querySelector('.row-caixas-sobremesas .selecionado')
    console.log(botaoSelecionadoAnteriormente)
    //se existir botao selecionado,
    if (botaoSelecionadoAnteriormente !== null) {
        //remove a classe selecionado desse botao
        botaoSelecionadoAnteriormente.classList.remove('selecionado')
    }
    //buscar o novo botao clicado
    const botao = document.querySelector(seletor)

    //adiciona a classe selecionado
    botao.classList.add('selecionado')
}




