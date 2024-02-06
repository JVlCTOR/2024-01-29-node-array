import { produtos } from "../db/produtos.js"

export const produtoService = {
    buscarProdutos: (req,res) => {
        return produtos
    },
    buscaProtudosID: (req,res)=>{
        let idReq = req.params.id

        return produtos.find(p => p.id === parseInt(idReq))

    }, 
    criarProtudo:(req,res)=>{
        let produto = req.body
        return produtos.push(produto)
        
    },
    atualizarProtudo:(req,res)=>{

    },
    deletarProtudo:(req,res)=>{

    },
}