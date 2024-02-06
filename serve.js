import Fastify from "fastify";
import { produtoService } from "./services/produtos.service.js";

const fastify = Fastify({
    logger:false
})

const PORT = 5005 

fastify.get('/', (req, res) => {
    res.send('Servido rodando')
  })
fastify.get(`/produtos`, produtoService.buscarProdutos)
fastify.get(`/produto/:id`, produtoService.buscaProtudosID)
fastify.post(`/produto`, produtoService.criarProtudo)
fastify.patch(`/produto/:id`, produtoService.atualizarProtudo)
fastify.delete(`/produto/:id`,produtoService.deletarProtudo)

fastify.listen({ port:PORT }, (err, address) => {
    if (err){
      console.error('Erro ao subir servidor', err);
      return 
    }
    console.log(`Server is now listening on ${address}`);
  })