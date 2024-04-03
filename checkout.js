document.addEventListener('DOMContentLoaded', function () {
    if (sessionStorage.getItem('productName') && sessionStorage.getItem('price')) {
        var productName = sessionStorage.getItem('productName');
        var price = sessionStorage.getItem('price');

        var selectedProducts = document.getElementById('selected-products');
        var totalPrice = document.getElementById('total-price');

        var listItem = document.createElement('li');
        listItem.textContent = productName + ' - ' + price;
        selectedProducts.appendChild(listItem);

        var currentTotal = parseFloat(totalPrice.textContent.replace('R$ ', '').replace(',', '.'));
        var productPrice = parseFloat(price.replace('R$ ', '').replace(',', '.'));
        var newTotal = currentTotal + productPrice;
        totalPrice.textContent = 'R$ ' + newTotal.toFixed(2);

        sessionStorage.removeItem('productName');
        sessionStorage.removeItem('price');
    }
});
