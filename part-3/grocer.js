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
