
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

    let total = 0;

    items.forEach((item) => {
        const cartItemElement = document.createElement('div')
        cartItemElement.classList.add('cart-item')
        
        const subtotal = item.quantity * item.price
        const subtotalFormatada = formatCurreny(subtotal)
        total += subtotal

        cartItemElement.innerHTML = `
            <div>
                <span class="title">${item.title}</span>
                <span class="subtotal">${subtotalFormatada}</span>
            </div>
            <span class="price">${item.quantity} x ${formatCurreny(item.price)}</span>
        `

        cartItemsElemento.appendChild(cartItemElement)
    });

    // apresentar o total
    const totalElemento = document.querySelector('.cart-summary strong')
    
    totalElemento.textContent = formatCurreny(total)
}