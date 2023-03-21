function addToCart(productName, productPrice, productSize) {

    const product = {
      name: productName,
      price: productPrice,
      size: productSize,
    };
  
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    cart.push(product);
  
    localStorage.setItem('cart', JSON.stringify(cart));
  
    window.location.href = 'cart.html';
  }
  
  function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    let cartTotal = 0;
  
    cart.forEach((product) => {
      const row = document.createElement('tr');
  
      const nameCell = document.createElement('td');
      nameCell.textContent = product.name;
      row.appendChild(nameCell);
  
      const sizeCell = document.createElement('td');
      sizeCell.textContent = product.size;
      row.appendChild(sizeCell);
  
      const priceCell = document.createElement('td');
      priceCell.textContent = `$${product.price}`;
      row.appendChild(priceCell);
  
      cartItemsElement.appendChild(row);
  
      cartTotal += product.price;
    });
  
    cartTotalElement.textContent = `$${cartTotal}`;

  }
  
  function deleteCart() {
    localStorage.removeItem('cart');
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    while (cartItemsElement.firstChild) {
      cartItemsElement.removeChild(cartItemsElement.firstChild);
    }
    cartTotalElement.textContent = '$0';
  }
  
  window.addEventListener('DOMContentLoaded', loadCart);
  
  const deleteButton = document.getElementById('delete-btn');
  deleteButton.addEventListener('click', deleteCart);
  


  function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    let cartTotal = 0;
  
    cart.forEach((product) => {
      const row = document.createElement('tr');
  
      const nameCell = document.createElement('td');
      nameCell.textContent = product.name;
      row.appendChild(nameCell);
  
      const sizeCell = document.createElement('td');
      sizeCell.textContent = product.size;
      row.appendChild(sizeCell);
  
      const priceCell = document.createElement('td');
      priceCell.textContent = `$${product.price}`;
      row.appendChild(priceCell);
  
      cartItemsElement.appendChild(row);
  
      cartTotal += product.price;
    });
  
    cartTotalElement.textContent = `$${cartTotal}`;
  }
  
  