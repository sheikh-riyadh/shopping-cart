/* Input field value increase and decrease */
function getIncreaseDecrease(inputFieldID, isIncrease) {
    /* get input field */
    const inputField = document.getElementById(inputFieldID);
    /* Convert string to number input filed value */
    const inputFieldValue = parseInt(inputField.value);
    let newInputValue;
    /* Check plus button is click or not */
    if (isIncrease) {
        newInputValue = inputFieldValue + 1;
    } else {
        newInputValue = inputFieldValue - 1;
    }
    /* Set new value input field */
    inputField.value = newInputValue;
    return newInputValue;
}

/* Calculate price */
function calculatePrice(priceID, newInputValue) {
    const previouPrice = document.getElementById(priceID);
    /* Check if id is phone price then multiplicaton with 1219 */
    if (priceID === 'phone-price') {
        previouPrice.innerText = newInputValue * 1219;
    }
    /* Otherwise multiplication with case-price */
    else {
        previouPrice.innerText = newInputValue * 59;
    }
}
/* Calculate total price and sum total phone and case price and set total-sum into sub total field  */
function totalPrice(phonePrice, casePrice) {
    /* get total phone price */
    const totalPhonePrice = document.getElementById(phonePrice);
    /* Get total case price */
    const totalCasePrice = document.getElementById(casePrice);
    /* Get sub total */
    const subTotal = document.getElementById('sub-total');

    const sum1 = parseInt(totalPhonePrice.innerText);
    const sum2 = parseInt(totalCasePrice.innerText);

    /* Sum total phone and case price and set total price into sub-total section */
    const totalPrice = sum1 + sum2;
    subTotal.innerText = totalPrice;

    /* Get tax field */
    const taxAmount = document.getElementById('tax-amount');
    const totalTax = totalPrice * 0.1;
    taxAmount.innerText = parseFloat(totalTax.toFixed(2));

    /* Get final total price */
    const finalTotal = document.getElementById('final-total')
    finalTotal.innerText = totalTax + totalPrice;


}