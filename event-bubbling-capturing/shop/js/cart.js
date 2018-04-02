'use strict';
const itemsList = document.querySelector('.items-list');
function handler(event) {
  const button = event.target;
  if (button.classList.contains('add-to-cart')) {
    const title = button.getAttribute('data-title');
    const price = button.getAttribute('data-price');
    const item = {
      title : title,
      price : price
    };
    addToCart(item);
  }
}

itemsList.addEventListener('click', handler);
