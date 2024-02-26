import { produtos } from "../db/produtos.js";

export const produtoService = {
  buscarProdutos: (req, res) => {
    return produtos;
  },
  buscaProtudosID: (req, res) => {
    let idReq = req.params.id;

    let produto = produtos.find((p) => p.id === parseInt(idReq));
    if (!produto) {
      res.status(404).send({ message: "ID não encontrando" });
      return;
    } else {
      return produto;
    }
  },
  criarProtudo: (req, res) => {
    let produto = req.body;
    return produtos.push(produto);
  },
  atualizarProtudo: (req, res) => {},
  atualizarProtudoParcial: (req, res) => {
    const id = req.params.id;
    let produto = produtos.find((p) => p.id === parseInt(id));
    if (!produto) {
      res.status(404).send({ message: "Produto não encontrando" });
      return;
    }

    produto.nome = req.body.nome ?? produto.nome;
    produto.valor = req.body.valor ?? produto.valor;
    produto.off = req.body.off ?? produto.off;

    res.status(201).send(produto);
  },
  deletarProtudo: (req, res) => {
    const id = req.params.id;

    const produtosIndex = produtos.findIndex((p) => p.id === parseInt(id));

    if (produtosIndex !== -1) {
      produtos.splice(produtosIndex, 1);
      return res.status(201).send(produtos[produtosIndex]);
    } else {
      return res.status(404).send("produto não encontrado");
    }
  },
  deleteAll: (req, res) => {
    produtos.splice(0);
    return res.status(200).send(produtos);
  },
};
