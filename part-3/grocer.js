const modal = document.getElementsByClassName('modal')[0];
const openModal = document.getElementById('cart-button');
const closeModal = document.getElementsByClassName('close-modal')[0];
const clearModal = document.getElementsByClassName('clear-modal')[0];
const itemNameDiv = document.getElementsByClassName('modal-item-name')[0];
const itemPriceDiv = document.getElementsByClassName('modal-item-price')[0];
const total = document.getElementsByClassName('total')[0];

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
    itemNameDiv.appendChild(divElement);
  }

  let div2Element = document.createElement('div');

  for (var i = 0; i < cartItemPrices.length; i++) {
    div2Element.textContent = cartItemPrices[i];
    itemPriceDiv.appendChild(div2Element);

    cartItemPrices[i] = cartItemPrices[i].replace(/\$/g, '');
  }

  let dollarSignRemoved = cartItemPrices.map(Number);

  function getSum(total, num) {
    return total + num;
  }
  total.innerHTML = `Total: $${dollarSignRemoved.reduce(getSum)}`
}

//Cart Modal
openModal.addEventListener('click', function() {
  modal.style.display = 'block';
})

closeModal.addEventListener('click', function() {
  modal.style.display = 'none';
})

//Clear Cart
clearModal.addEventListener('click', function() {
  while (itemNameDiv.firstChild && itemPriceDiv.firstChild) {
    itemNameDiv.firstChild.remove();
    itemPriceDiv.firstChild.remove();
  }
  itemCount = 0;
  cartItemCount.innerHTML = `(${itemCount})`;
  cartItemNames = [];
  cartItemPrices = [];
  total.innerHTML = `Total: $0.00`
});
