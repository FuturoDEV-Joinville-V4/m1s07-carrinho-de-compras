
/** 
 * items = > 
 * id: number
 * title: string
 * quantity: number
 */
const cartItemsElemento = document.querySelector('.cart-items')

function formatCurreny(valor) {
    return Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL'
    }).format(valor)
}

export function renderCart(items) {
    cartItemsElemento.innerHTML = ""

    if(!items || items.length === 0) {
        cartItemsElemento.innerHTML = '<p class="empty-message">Seu carrinho está vazio, adicione um produto!</p>'
    }

    items.forEach((item) => {
        const cartItemElement = document.createElement('div')
        cartItemElement.classList.add('cart-item')
        
        const subtotal = formatCurreny(item.quantity * item.price)

        cartItemElement.innerHTML = `
            <div>
                <span class="title">${item.title}</span>
                <span class="subtotal">${subtotal}</span>
            </div>
            <span class="price">${item.quantity} x ${formatCurreny(item.price)}</span>
        `

        cartItemsElemento.appendChild(cartItemElement)
    });
    // console.log('renderizando carrinho')
}