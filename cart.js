// script.js
let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById("cartCounter").textContent = cartCount;
}
// script.js
function placeOrder() {
    // Perform any necessary order processing or API calls here
    
    // Display a confirmation message
    alert("Your order has been placed!");
  }
  