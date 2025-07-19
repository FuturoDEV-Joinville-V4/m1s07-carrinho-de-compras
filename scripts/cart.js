
export class Cart {
    #key = "shop365cart:carrinho"

    items = []
    
    constructor() {
        this.items = this.loadFromLocalStorage()
    }
    // adicionar um item ao carrinho
    addItem(product) {
        const existsItem = this.items.find(item => item.id === product.id)

        if(existsItem) {
            existsItem.quantity += 1;
        } else {
            this.items.push(product)
        }

        this.saveToLocalStorage()
    }
    // remover item no carrinho

    // total do carrinho

    // salvar no localstorage
    saveToLocalStorage() {
        const parsedList = JSON.stringify(this.items)

        localStorage.setItem(this.#key, parsedList)
        console.log('Carrinho salvo no localStorage')
    }
    // carregar os dados do localstorage

    loadFromLocalStorage() {
        const cartStorage = localStorage.getItem(this.#key)

        if(cartStorage) {
            const cart = JSON.parse(cartStorage)

            return cart;
        } // early return

        return []
    }

    getItems() {
        return this.items;
    }
}