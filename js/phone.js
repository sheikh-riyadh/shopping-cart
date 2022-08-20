document.getElementById('phone-plus-btn').addEventListener('click', function () {
    const newInputValue = getIncreaseDecrease('phone-input-field', true);

    /* Calculate phone price with quantity */
    calculatePrice('phone-price', newInputValue)
    /* Call totalPrice function */
    totalPrice('phone-price', 'case-price')
})

document.getElementById('phone-minus-btn').addEventListener('click', function () {
    /* Call getIncreaseDecrease function */
    const newInputValue = getIncreaseDecrease('phone-input-field', false);
    /* Calculate phone price with quantity */
    calculatePrice('phone-price', newInputValue)

    totalPrice('phone-price', 'case-price')


})