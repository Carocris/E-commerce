function addToCart(productName, productPrice, productSize) {
    // Crea un objeto que represente el producto
    const product = {
      name: productName,
      price: productPrice,
      size: productSize,
    };
  
    // Carga el carrito del almacenamiento local o crea un carrito vacío si no existe
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Añade el producto al carrito
    cart.push(product);
  
    // Guarda el carrito actualizado en el almacenamiento local
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // Redirige a la página del carrito
    window.location.href = 'cart.html';
  }