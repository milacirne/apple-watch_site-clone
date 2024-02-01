const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById('titulo-produto');
const nomeCor = document.getElementById('nome-cor-selecionada');
const imagemMiniatura0 = document.getElementById('0-imagem-miniatura');
const imagemMiniatura1 = document.getElementById('1-imagem-miniatura');
const imagemMiniatura2 = document.getElementById('2-imagem-miniatura');

const verdeCipreste = {
    nome: 'verde-cipreste',
    nomeMaiusculo: 'Verde-cipreste',
    pasta: 'imagens-verde-cipreste'
};

const azulInverno = {
    nome: 'azul-inverno',
    nomeMaiusculo: 'Azul-inverno',
    pasta: 'imagens-azul-inverno'
};

const meiaNoite = {
    nome: 'meia-noite',
    nomeMaiusculo: 'Meia-noite',
    pasta: 'imagens-meia-noite'
};

const estelar = {
    nome: 'estelar',
    nomeMaiusculo: 'Estelar',
    pasta: 'imagens-estelar'
};

const rosaClaro = {
    nome: 'rosa-claro',
    nomeMaiusculo: 'Rosa-claro',
    pasta: 'imagens-rosa-claro'
};

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ['41', '45'];

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

function trocarImagem() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src = `./imagens/opcoes-cores/imagens-${opcoesCores[corSelecionada].nome}/imagem-${imagemSelecionada}.jpeg`;
}

function trocarTamanho() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
    tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]} mm`;
    if (opcoesTamanho[tamanhoSelecionado] === '41') {
        imagemVisualizacao.classList.add('caixa-pequena');
    } else {
        imagemVisualizacao.classList.remove('caixa-pequena');
    }
}

function trocarCor() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada = idOpcaoSelecionada.charAt(0);
    tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]} mm`;
    nomeCor.innerText = `Cor - ${opcoesCores[corSelecionada].nomeMaiusculo}`;
    imagemMiniatura0.src = `./imagens/opcoes-cores/imagens-${opcoesCores[corSelecionada].nome}/imagem-0.jpeg`;
    imagemMiniatura1.src = `./imagens/opcoes-cores/imagens-${opcoesCores[corSelecionada].nome}/imagem-1.jpeg`;
    imagemMiniatura2.src = `./imagens/opcoes-cores/imagens-${opcoesCores[corSelecionada].nome}/imagem-2.jpeg`;
    imagemVisualizacao.src = `./imagens/opcoes-cores/imagens-${opcoesCores[corSelecionada].nome}/imagem-${imagemSelecionada}.jpeg`;
}