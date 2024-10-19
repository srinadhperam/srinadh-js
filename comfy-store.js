
let cartCount = 0;
let totalPrice = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        let price = parseInt(this.getAttribute('data-price'));
        cartCount++;
        totalPrice += price;

        document.getElementById('cart-count').textContent = cartCount;
        document.getElementById('total-items').textContent = cartCount;
        document.getElementById('total-price').textContent = totalPrice;
    });
});
