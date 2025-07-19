import { getProducts } from './api.js'
import { Product } from './product.js'
import { Cart } from './cart.js'
import { renderCart } from './ui.js'

const listaProducts = document.getElementById('list-products')
const carrinho = new Cart()

var produtos;

function adicionarProdutoAoCarrinho(produto) {
    let itemCart = {
        id: produto.id,
        title: produto.title,
        price: produto.price,
        quantity: 1,
    }

    carrinho.addItem(itemCart)    
    renderCart(carrinho.getItems())
}

/** 
 * Explicação de localStorage
 */
// const test = [1,2,3]
// const parsed = JSON.stringify(test)
// localStorage.setItem('carrinho', parsed)

// localStorage.removeItem('carrinho')
// localStorage.clear()
// const carrinhoString = localStorage.getItem('carrinho')
// const objJs = JSON.parse(carrinhoString)

// console.log("RECUPERANDO O VALOR",objJs )

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
        //alert('Error ao carregar os produtos')
    }
   
    // Carregar ui do carrinho
    
    renderCart(carrinho.getItems())

    const buttonFinalizarCompra = document.querySelector('.cart-summary button')

    buttonFinalizarCompra.addEventListener('click', () => {
        if(carrinho.getItems().length > 0) {
            location.href = './compra-sucesso.html'
        }
    })
}

/** 
 * Evento de quando carregar todo o documento
 */
document.addEventListener('DOMContentLoaded', iniciarProjeto)