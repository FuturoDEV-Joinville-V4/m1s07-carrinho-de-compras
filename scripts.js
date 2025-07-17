
// list-products
//  <div class="product-item">
//               <img
//                 src="https://macfinder.co.uk/wp-content/uploads/2022/12/img-MacBook-Pro-Retina-14-Inch-72383-scaled-1250x1250.jpg"
//                 alt="Macbook Pro Retina 14 Inch"
//                 height="236"
//               />
//               <div>
//                 <div class="product-details">
//                   <strong>Macbook Pro Retina 14 Inch</strong>
//                   <span
//                     >Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Quod, delectus!</span
//                   >
//                 </div>
//                 <div class="product-price">
//                   <strong>R$ 7.999,00</strong>
//                   <button>
//                     <img
//                       src="./assets/icons/cart.svg"
//                       height="20"
//                       alt="Icone de carrinho"
//                     />
//                   </button>
//                 </div>
//               </div>
//             </div>
const listaPai = document.querySelector('#list-products')

response.products.forEach((product) => {
   /** Container principal do Card */
    const cardElemento = document.createElement('div');
    cardElemento.classList.add('product-item');

    /** Imagem do Produto */
    const imgElemento = document.createElement('img');
    imgElemento.setAttribute('src', product.images[0]); // Pega a primeira imagem do array
    imgElemento.setAttribute('alt', product.title); // Alt text para acessibilidade
    imgElemento.setAttribute('height', '236'); // Mantém a altura fixa como no exemplo

    /** Div Principal de Detalhes e Preço */
    const detailsWrapper = document.createElement('div'); // A div que engloba product-details e product-price

    /** Detalhes do Produto (Título e Descrição) */
    const productDetailsDiv = document.createElement('div');
    productDetailsDiv.classList.add('product-details');

    const titleStrong = document.createElement('strong');
    titleStrong.textContent = product.title; // Título do produto

    const descriptionSpan = document.createElement('span');
    descriptionSpan.textContent = product.description; // Descrição do produto

    productDetailsDiv.appendChild(titleStrong);
    productDetailsDiv.appendChild(descriptionSpan);

    /** Preço e Botão de Compra */
    const productPriceDiv = document.createElement('div');
    productPriceDiv.classList.add('product-price');

    const priceStrong = document.createElement('strong');
    // Formata o preço para moeda brasileira
    priceStrong.textContent = `R$ ${product.price.toFixed(2).replace('.', ',')}`; 

    const buttonElement = document.createElement('button');
    const cartIcon = document.createElement('img');
    cartIcon.setAttribute('src', './assets/icons/cart.svg'); // Caminho do ícone do carrinho
    cartIcon.setAttribute('height', '20');
    cartIcon.setAttribute('alt', 'Ícone de carrinho');

    buttonElement.appendChild(cartIcon);

    productPriceDiv.appendChild(priceStrong);
    productPriceDiv.appendChild(buttonElement);

    /** Montando a Estrutura Completa do Card */
    detailsWrapper.appendChild(productDetailsDiv);
    detailsWrapper.appendChild(productPriceDiv);

    cardElemento.appendChild(imgElemento);
    cardElemento.appendChild(detailsWrapper); // Adiciona o wrapper de detalhes e preço

    /** Adicionando o Card à Lista Pai */
    listaPai.appendChild(cardElemento);
})