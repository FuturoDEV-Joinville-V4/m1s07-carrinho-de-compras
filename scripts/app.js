import { getProducts } from './api.js'
import { Product } from './product.js'

const listaProducts = document.getElementById('list-products')
var produtos;
var carrinho = [];

function adicionarProdutoAoCarrinho(produto) {
    // adicionar ao carrinho
    // console.log('recebendo o produto', produto)
    carrinho.push(produto)

    console.log(carrinho)
}


async function iniciarProjeto() {
    try {
        produtos = await getProducts()

        produtos.forEach((produto) => {
            const produtoInstancia = new Product(produto) // criando uma instância

            const produtoElemento = produtoInstancia.produtoElemento((event) => {
                const element = event.target.parentNode // button
                const produtoId = element.getAttribute('data-id')

                if(produtoId) {
                    // estritamente igual 
                    const itemCart = produtos.find((prod) => prod.id === +produtoId)
                    
                    if(itemCart) {
                        adicionarProdutoAoCarrinho(itemCart)
                    }
                }
            })

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