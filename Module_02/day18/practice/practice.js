// #1
const prices = [300,500,800,400,2500,1000];
const withVat = prices.map(price=>price*1.15);
const undervalue= withVat.filter(price=>price<1000);
const grandtotal= undervalue.reduce((total,price)=>total+price,0);
console.log(withVat);
console.log(undervalue);
console.log(grandtotal);
// #2

const customer ={
    name:"roba",
    city:"addis ababa",
    balance:1000
}
for(const [key,value] of Object.entries(customer)){
    console.log(key,value)
}
// #3
const {name,city}=customer;
console.log(name);
console.log(city);
// #4
const updatedcustomer= {
    ...customer,
    city:"jimma",
    phone:"0912345632"
}
console.log(customer);
console.log(updatedcustomer);