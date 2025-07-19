
export class Product {
    // dto => data transfer object
    constructor(data) {
        this.id = data.id
        this.title = data.title
        this.price = data.price
        this.description = data.description
        this.image = data.images[0]
    }

    // ações | funções => metodos

    criarElementoImagem() {
        const imgElemento = document.createElement('img');
        imgElemento.setAttribute('src', this.image); // Pega a primeira imagem do array
        imgElemento.setAttribute('alt', this.title); // Alt text para acessibilidade
        imgElemento.setAttribute('height', '236'); // Mantém a altura fixa como no exemplo

        return imgElemento
    }

    criarElementoDetalhesProduto() {
        const productDetailsDiv = document.createElement('div');
        productDetailsDiv.classList.add('product-details');

        const titleStrong = document.createElement('strong');
        titleStrong.textContent = this.title; // Título do produto

        const descriptionSpan = document.createElement('span');
        descriptionSpan.textContent = this.description; // Descrição do produto

        productDetailsDiv.appendChild(titleStrong);
        productDetailsDiv.appendChild(descriptionSpan);

        return productDetailsDiv;
    }

    /**
     * Responsavel por montar o elemento HTML
     * JSDOC
     * @param {Function} onAddCart - Função responsavel por executar evento de clique
     */
    produtoElemento(onAddCart) {
        /** Container */
        const cardElemento = document.createElement('div');
        cardElemento.classList.add('product-item');
         /** Imagem do Produto */
        const imageElemento = this.criarElementoImagem()

        /** Div Principal de Detalhes e Preço */
        const detailsWrapper = document.createElement('div'); 

        /** Detalhes do Produto (Título e Descrição) */
       const elementoDetalhesProduto = this.criarElementoDetalhesProduto()

        /** Preço e Botão de Compra */
        const productPriceDiv = document.createElement('div');
        productPriceDiv.classList.add('product-price');

        const priceStrong = document.createElement('strong');
        // Formata o preço para moeda brasileira
        const valorReal = Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: "BRL"
        }).format(this.price)

        priceStrong.textContent = valorReal
        // `R$ ${this.price.toFixed(2).replace('.', ',')}`; 

        /** Button */
        const buttonElement = document.createElement('button');
        buttonElement.setAttribute('data-id', this.id)
        buttonElement.addEventListener('click', onAddCart)

        /** iCONE DO BUTTON */
        const cartIcon = document.createElement('img');
        cartIcon.setAttribute('src', './assets/icons/cart.svg'); // Caminho do ícone do carrinho
        cartIcon.setAttribute('height', '20');
        cartIcon.setAttribute('alt', 'Ícone de carrinho');

        buttonElement.appendChild(cartIcon);

        productPriceDiv.appendChild(priceStrong);
        productPriceDiv.appendChild(buttonElement);

        /** Montando a Estrutura Completa do Card */
        detailsWrapper.appendChild(elementoDetalhesProduto);
        detailsWrapper.appendChild(productPriceDiv);

        cardElemento.appendChild(imageElemento);
        cardElemento.appendChild(detailsWrapper);

        return cardElemento;
    }

}