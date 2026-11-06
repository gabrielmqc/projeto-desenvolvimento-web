const produtoService = require("../services/produtoService");

function listar(req, res) {
    const produtos = produtoService.listarProdutos();

    res.status(200).json(produtos);
}

function buscarPorId(req, res) {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            mensagem: "ID inválido"
        });
    }

    const produto = produtoService.buscarProdutoPorId(id);

    if (!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    res.status(200).json(produto);
}

function cadastrar(req, res) {
    const novoProduto = produtoService.cadastrarProduto(req.body);

    res.status(201).json(novoProduto);
}

function atualizar(req, res) {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            mensagem: "ID inválido"
        });
    }

    const produto = produtoService.atualizarProduto(
        id,
        req.body
    );

    if (!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    res.status(200).json(produto);
}

function excluir(req, res) {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            mensagem: "ID inválido"
        });
    }

    const produto = produtoService.excluirProduto(id);

    if (!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    res.status(200).json({
        mensagem: "Produto excluído com sucesso",
        produto
    });
}

module.exports = {
    listar,
    buscarPorId,
    cadastrar,
    atualizar,
    excluir
};