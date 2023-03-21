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

  document.getElementById("checkout-btn").addEventListener("click", function() {
    // Obtener los productos del carrito
    var cartItems = document.getElementById("cart-items").getElementsByTagName("tr");
    var cart = [];
    for (var i = 0; i < cartItems.length; i++) {
      var name = cartItems[i].getElementsByTagName("td")[0].textContent;
      var size = cartItems[i].getElementsByTagName("td")[1].textContent;
      var price = cartItems[i].getElementsByTagName("td")[2].textContent.replace("$", "");
      cart.push({
        "nombre": name,
        "talla": size,
        "precio": price
      });
    }
    
    // Almacenar los productos del carrito en el LocalStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    
    // Redirigir al usuario a la página de pago
    window.location.href = "comprar.html";
  });
  
  

  
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
  
var cart = [];

function addToCart(producto, talla, precio) {
  var item = {
    producto: producto,
    talla: talla,
    precio: precio
  };
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
}
