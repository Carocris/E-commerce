// Función para recuperar los elementos del carrito de compras del LocalStorage
function getCart() {
    var cart = localStorage.getItem("cart");
    if (cart) {
      return JSON.parse(cart);
    } else {
      return [];
    }
  }



  function showCart() {
    var cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      for (var i = 0; i < cart.length; i++) {
        var row = document.createElement("tr");
        var nameCell = document.createElement("td");
        nameCell.textContent = cart[i].nombre;
        var sizeCell = document.createElement("td");
        sizeCell.textContent = cart[i].talla;
        var priceCell = document.createElement("td");
        priceCell.textContent = "$" + cart[i].precio;
        row.appendChild(nameCell);
        row.appendChild(sizeCell);
        row.appendChild(priceCell);
        document.getElementById("cart-items").appendChild(row);
      }
      showTotal();
    } else {
      document.getElementById("cart-items").innerHTML = "<tr><td colspan='3'>No hay productos en el carrito.</td></tr>";
    }
  }
  
  function showTotal() {
    var cart = JSON.parse(localStorage.getItem("cart"));
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
      total += parseFloat(cart[i].precio);
    }
    document.getElementById("cart-total").textContent = "$" + total.toFixed(2);
  }
  
  
  // Función para mostrar el total de la compra
  function showTotal() {
    var cart = getCart();
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
      total += parseFloat(cart[i].precio);
    }
    document.getElementById("cart-total").textContent = "$" + total.toFixed(2);
  }
  
  // Función para agregar un elemento al carrito de compras
  function addToCart(producto, talla, precio) {
    var cart = getCart();
    cart.push({producto: producto, talla: talla, precio: precio});
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  
  // Función para borrar el carrito de compras
  function clearCart() {
    localStorage.removeItem("cart");
    location.reload();
  }
  
  var trackingNumber = Date.now().toString() + Math.floor(Math.random() * 1000000).toString();

  // Función para procesar el pago
  function checkout() {
    var cart = getCart();
    var usuario = {
      nombre: document.getElementById("nombre").value,
      direccion: document.getElementById("direccion").value,
      tarjeta: document.getElementById("tarjeta").value
    };
    var fecha = new Date().toLocaleString();
    var seguimiento = "12345"; // número de seguimiento simulado
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
      total += parseFloat(cart[i].precio);
    }
    var checkout = {
      fecha: fecha,
      carrito: cart,
      total: total.toFixed(2),
      direccion: usuario.direccion,
      seguimiento: seguimiento
    };
    localStorage.setItem("checkout", JSON.stringify(checkout));
    localStorage.removeItem("cart");
    location.href = "confirmacion.html";
  }

  function showOrderHistory() {
    var orderHistory = JSON.parse(localStorage.getItem("orderHistory"));
    if (orderHistory) {
      for (var i = 0; i < orderHistory.length; i++) {
        var row = document.createElement("tr");
        
        var dateCell = document.createElement("td");
        dateCell.textContent = orderHistory[i].fecha;
        row.appendChild(dateCell);
        
        var productsCell = document.createElement("td");
        var products = "";
        for (var j = 0; j < orderHistory[i].carrito.length; j++) {
          products += orderHistory[i].carrito[j].nombre + " (Talla: " + orderHistory[i].carrito[j].talla + "), ";
        }
        products = products.substring(0, products.length - 2); // Eliminar la última coma y el espacio
        productsCell.textContent = products;
        row.appendChild(productsCell);
        
        var totalCell = document.createElement("td");
        totalCell.textContent = "$" + orderHistory[i].total;
        row.appendChild(totalCell);
        
        var addressCell = document.createElement("td");
        addressCell.textContent = orderHistory[i].direccion;
        row.appendChild(addressCell);
        
        var trackingCell = document.createElement("td");
        trackingCell.textContent = orderHistory[i].seguimiento;
        row.appendChild(trackingCell);
        
        document.getElementById("history-table").appendChild(row);
      }
    }
  }
  
  
  // Función para mostrar los detalles del pedido
  function showOrderDetails() {
    var checkout = JSON.parse(localStorage.getItem("checkout"));
    document.getElementById("fecha").textContent = checkout.fecha;
    document.getElementById("total").textContent = "$" + checkout.total;
    document.getElementById("direccion").textContent = checkout.direccion;
    document.getElementById("seguimiento").textContent = checkout.seguimiento;
    for (var i = 0; i < checkout.carrito.length; i++) {
      var row = document.createElement("tr");
      var productCell = document.createElement("td");
      productCell.textContent = checkout.carrito[i].producto;
      var sizeCell = document.createElement("td");
      sizeCell.textContent = checkout.carrito[i].talla;
      var priceCell = document.createElement("td");
      priceCell.textContent = "$" + checkout.carrito[i].precio;
      row.appendChild(productCell);
      row.appendChild(sizeCell);
      row.appendChild(priceCell);
      document.getElementById("order-details").appendChild(row);
    }
  }
  


  
// Función para mostrar el historial de pedidos
function showOrderHistory() {
    var orderHistory = JSON.parse(localStorage.getItem("orderHistory"));
    if (orderHistory) {
      var tableBody = document.querySelector("#history-table tbody");
      for (var i = 0; i < orderHistory.length; i++) {
        var row = document.createElement("tr");
  
        var dateCell = document.createElement("td");
        dateCell.textContent = orderHistory[i].fecha;
        row.appendChild(dateCell);
  
        var productsCell = document.createElement("td");
        var products = "";
        for (var j = 0; j < orderHistory[i].carrito.length; j++) {
          products += orderHistory[i].carrito[j].nombre + " x" + orderHistory[i].carrito[j].cantidad + "<br>";
        }
        productsCell.innerHTML = products;
        row.appendChild(productsCell);
  
        var totalCell = document.createElement("td");
        totalCell.textContent = "$" + orderHistory[i].total;
        row.appendChild(totalCell);
  
        var addressCell = document.createElement("td");
        addressCell.textContent = orderHistory[i].direccion;
        row.appendChild(addressCell);
  
        var trackingCell = document.createElement("td");
        trackingCell.textContent = orderHistory[i].seguimiento;
        row.appendChild(trackingCell);
  
        tableBody.appendChild(row);
      }
    }
  }
  
  // Función para guardar el pedido en el historial de pedidos
 // Función para mostrar el historial de pedidos
function showOrderHistory() {
    var history = JSON.parse(localStorage.getItem("orderHistory"));
    if (history) {
      var tableBody = document.getElementById("history-table-body");
      tableBody.innerHTML = ""; // Limpiar contenido anterior de la tabla
      for (var i = 0; i < history.length; i++) {
        var row = document.createElement("tr");
        
        var dateCell = document.createElement("td");
        dateCell.textContent = history[i].fecha;
        row.appendChild(dateCell);
        
        var productsCell = document.createElement("td");
        var products = "";
        for (var j = 0; j < history[i].carrito.length; j++) {
          products += history[i].carrito[j].nombre + " (" + history[i].carrito[j].precio + "), ";
        }
        products = products.slice(0, -2); // Eliminar la última coma y espacio
        productsCell.textContent = products;
        row.appendChild(productsCell);
        
        var totalCell = document.createElement("td");
        totalCell.textContent = "$" + history[i].total;
        row.appendChild(totalCell);
        
        var addressCell = document.createElement("td");
        addressCell.textContent = history[i].direccion;
        row.appendChild(addressCell);
        
        var trackingCell = document.createElement("td");
        trackingCell.textContent = history[i].seguimiento;
        row.appendChild(trackingCell);
        
        tableBody.appendChild(row);
      }
    }
  }
  
  // Función para guardar el pedido en el historial de pedidos
  function saveOrderToHistory(checkout) {
    var orderHistory = JSON.parse(localStorage.getItem("orderHistory")) || [];
    orderHistory.push(checkout);
    localStorage.setItem("orderHistory", JSON.stringify(orderHistory));
  }
  
  // Función para procesar la compra
  function checkout() {
    var cart = getCart();
    var usuario = {
      nombre: document.getElementById("nombre").value,
      direccion: document.getElementById("direccion").value,
      tarjeta: document.getElementById("tarjeta").value
    };
    var fecha = new Date().toLocaleString();
    var seguimiento = "12345"; // número de seguimiento simulado
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
      total += parseFloat(cart[i].precio);
    }
    var checkout = {
      fecha: fecha,
      carrito: cart,
      total: total.toFixed(2),
      direccion: usuario.direccion,
      seguimiento: seguimiento
    };
    saveOrderToHistory(checkout); // Guardar pedido en historial de pedidos
    localStorage.setItem("checkout", JSON.stringify(checkout)); // Guardar datos del pedido actual
    window.location.href = "confirmacion.html"; // Redirigir a página de confirmación
  }
  