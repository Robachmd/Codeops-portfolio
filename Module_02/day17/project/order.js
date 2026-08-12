"use strict";

/**
 * TODO: Write subtotal(...prices) using a reduce callback.
 * Use rest parameters to accept any number of prices [2, 3].
 */
const subtotal = (...prices) => {
  // Use prices.reduce here [3]
  return prices.reduce((total,price)=>total+price,0);
};
console.log(subtotal(300,253,487));

/**
 * TODO: Write discountBy(rate) as a factory returning an arrow function.
 * This is a Higher-Order Function (HOF) that creates a closure over the rate [2, 3].
 */
const discountBy = (rate) => {
  // Return an arrow function that applies the discount [3]
  return amount=>amount*(1-rate);
  
};
const discount30 = discountBy(0.3);
console.log(discount30(800))
/**
 * TODO: Add withVat as a small pure helper.
 * It should add 15% VAT to a given amount [2, 3].
 */
const withVat = (n) => {
  // Logic: n * 1.15 [3]
  return n*1.15;
};
console.log(withVat(400))
/**
 * TODO: Add toETB as a small pure helper.
 * It should format a number to 2 decimal places followed by " ETB" [2, 3].
 */
const toETB = (n) => {
  // Logic: Use n.toFixed(2) [3]
  return n.toFixed(2) +  " ETB"
};
console.log(toETB(500))
/**
 * TODO: Build makeReceiptMaker() with a private order number.
 * This function uses a closure to maintain the state of orderNo across calls [4, 5].
 * Inside, it should pre-build a 10% member discount function using discountBy(0.10) [5].
 */
function makeReceiptMaker() {
  let orderNo = 0; // Private state [4]
  const memberOff = discountBy(0.1);

  return function (...prices) {
    // 1. Increment orderNo [5]
    // 2. Calculate subtotal of items [5]
    // 3. Compose: apply discount, then VAT [5]
    // 4. Format and return receipt string (e.g., "#1: 538.20 ETB") [5]
    orderNo++;
    const sub = subtotal(...prices);
    const discounted = memberOff(sub);
    const total = withVat(discounted);
    return `#${orderNo}: ${toETB(total)}`;
  };
}
const receipt = makeReceiptMaker();
console.log(receipt(220, 180, 120));
console.log(receipt(140, 60));

console.log(receipt(300, 200));

console.log(receipt(100));

// Export for run.js
if (typeof module !== "undefined") {
  module.exports = { subtotal, discountBy, withVat, toETB, makeReceiptMaker };
}
