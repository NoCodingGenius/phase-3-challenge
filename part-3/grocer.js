const modal = document.getElementsByClassName('modal')[0];
const openModal = document.getElementById('cart-button');
const closeModal = document.getElementsByClassName('close-modal')[0];

const addToCartButton = document.getElementsByClassName('add-to-cart');
const cartItemCount = document.getElementById('cart-item-count');
let itemCount = 0;

//Add To Cart
for (var i = 0; i < addToCartButton.length; i++) {
  addToCartButton[i].addEventListener('click', addToCart);
};

function addToCart() {
  itemCount++;
  cartItemCount.innerHTML = `(${itemCount})`;
}

//Cart Modal
openModal.addEventListener('click', function () {
  modal.style.display = 'block';
})

closeModal.addEventListener('click', function () {
  modal.style.display = 'none';
})
