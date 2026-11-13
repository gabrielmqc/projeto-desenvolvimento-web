// const produtos = require("../data/produtos");
const produtoRepository   = require("../repositories/produtoRepository");
function listarProdutos() {
    return produtoRepository.findAll();
}

function buscarProdutoPorId(id) {
    return produtoRepository.findById(id);
}

function cadastrarProduto(dados) {
    const novoProduto = {
        name: dados.nome,
        price: dados.preco
    };

    return produtoRepository.create(novoProduto);
}

function atualizarProduto(id, dados) {
    const produto = produtoRepository.findById(id);

    if (!produto) {
        return null;
    }

    produto.name = dados.nome;
    produto.price = dados.preco;

    return produto;
}

function excluirProduto(id) {
    return produtoRepository.delete(id);
}

module.exports = {
    listarProdutos,
    buscarProdutoPorId,
    cadastrarProduto,
    atualizarProduto,
    excluirProduto
};