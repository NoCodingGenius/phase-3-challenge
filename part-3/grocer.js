const modal = document.getElementsByClassName('modal')[0];
const openModal = document.getElementById('cart-button');
const closeModal = document.getElementsByClassName('close-modal')[0];
const clearModal = document.getElementsByClassName('clear-modal')[0];
const divContent = document.getElementsByClassName('modal-item-name')[0];
const div2Content = document.getElementsByClassName('modal-item-price')[0];

const addToCartButton = document.getElementsByClassName('add-to-cart');
const cartItemCount = document.getElementById('cart-item-count');
let itemCount = 0;
let cartItemNames = [];
let cartItemPrices = [];

//Add To Cart
for (var i = 0; i < addToCartButton.length; i++) {
  addToCartButton[i].addEventListener('click', addToCart);
};

function addToCart(addToCartButton) {
  itemCount++;
  cartItemCount.innerHTML = `(${itemCount})`;

  let element = addToCartButton.target
  let itemPrice = element.previousElementSibling.innerHTML;
  let itemName = element.previousElementSibling.previousElementSibling.innerHTML;
  cartItemNames.push(itemName);
  cartItemPrices.push(itemPrice);

  let divElement = document.createElement('div');

  for (var i = 0; i < cartItemNames.length; i++) {
    divElement.textContent = cartItemNames[i];
    divContent.appendChild(divElement);
  }

  let div2Element = document.createElement('div');

  for (var i = 0; i < cartItemPrices.length; i++) {
    div2Element.textContent = cartItemPrices[i];
    div2Content.appendChild(div2Element);
  }
}

//Cart Modal
openModal.addEventListener('click', function () {
  modal.style.display = 'block';
})

closeModal.addEventListener('click', function () {
  modal.style.display = 'none';
})

//Clear Cart
clearModal.addEventListener('click', function () {
  while (divContent.firstChild && div2Content.firstChild) {
    divContent.firstChild.remove();
    div2Content.firstChild.remove();
  }
  itemCount = 0;
  cartItemCount.innerHTML = `(${itemCount})`;
  cartItemNames = [];
  cartItemPrices = [];
})
