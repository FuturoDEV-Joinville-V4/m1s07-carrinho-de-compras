import { getProducts } from './api.js'
import { Product } from './product.js'

const listaProducts = document.getElementById('list-products')

async function iniciarProjeto() {

    try {
        const produtos = await getProducts()
        produtos.forEach((produto) => {
            const produtoInstancia = new Product(produto) // criando uma instância

            const produtoElemento = produtoInstancia.produtoElemento()

            listaProducts.appendChild(produtoElemento)
        });
    } catch (error) {
        alert('Error ao carregar os produtos')
    }
   
}

/** 
 * Evento de quando carregar todo o documento
 */
document.addEventListener('DOMContentLoaded', iniciarProjeto)