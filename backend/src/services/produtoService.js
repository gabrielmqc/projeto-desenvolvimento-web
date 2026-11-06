const produtos = require("../data/produtos");

function listarProdutos() {
    return produtos;
}

function buscarProdutoPorId(id) {
    return produtos.find(p => p.id === id);
}

function cadastrarProduto(dados) {
    const novoProduto = {
        id: produtos.length > 0
            ? Math.max(...produtos.map(p => p.id)) + 1
            : 1,
        nome: dados.nome,
        preco: dados.preco
    };

    produtos.push(novoProduto);

    return novoProduto;
}

function atualizarProduto(id, dados) {
    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return null;
    }

    produto.nome = dados.nome;
    produto.preco = dados.preco;

    return produto;
}

function excluirProduto(id) {
    const indice = produtos.findIndex(p => p.id === id);

    if (indice === -1) {
        return null;
    }

    return produtos.splice(indice, 1)[0];
}

module.exports = {
    listarProdutos,
    buscarProdutoPorId,
    cadastrarProduto,
    atualizarProduto,
    excluirProduto
};