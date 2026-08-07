const billInput = prompt('Enter the bill amount (ETB): ');
const partyInput = prompt('Enter the party size: ');
const paymentMethod = prompt('Enter payment method (telebirr / cbe): ');
const bill = Number(billInput);
const partySize = Number(partyInput);

let tipPercent;
if (bill > 300) {
    tipPercent = 0.10;
} else {
    tipPercent = 0.05; 
}
let tipAmount=tipPercent*bill;
let serviceFee = 0;
switch (paymentMethod) {
case 'telebirr':
    serviceFee = 2.00; 
    break;
case 'cbe':
    serviceFee = 5.00; 
    break;
default:
    serviceFee = 0.00; 
    break;
}

const totalBill = bill + tipAmount + serviceFee;
const perPerson = totalBill / partySize;
console.log(`your total bill including bill, tipAmount, serviceFee: ${totalBill}`)
console.log(`your bills for per person: ${perPerson}`)