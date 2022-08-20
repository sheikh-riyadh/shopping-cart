document.getElementById('case-plus-btn').addEventListener('click', function () {
    /* Call calculate getIncreaseDecrease function */
    const newInputValue = getIncreaseDecrease('case-input-field', true);

    /* Call calculate function */
    calculatePrice('case-price', newInputValue)

    /* Call totalPrice function */
    totalPrice('phone-price', 'case-price')
})
document.getElementById('case-minus-btn').addEventListener('click', function () {

    /* Call calculate getIncreaseDecrease function */
    const newInputValue = getIncreaseDecrease('case-input-field', false);

    /* Call calculate function */
    calculatePrice('case-price', newInputValue)

    /* Call totalPrice function */
    totalPrice('phone-price', 'case-price')
})