// #1
const vat= (n)=>{
    return n*0.15;
};
console.log(vat(200))
// #2
function makeCounter(){
    let count=0;
    return function(){
        count++;
        return count;
    };

}

const counter=makeCounter();
console.log(counter())
console.log(counter())

// #3

const discountby= (rate) =>{
    return amount => amount*(1-rate);
}
const memberprice=discountby(0.10);
const salesPrice=discountby(0.3);
console.log(memberprice(1000));
console.log(salesPrice(900));

// #4
function applyToAll(list,fn){
    const results = []
    for (const item of list){
        results.push(fn(item));
    }
    return results;
}
const prices=[150,123,134,145]
const addVat= price=>{
    return price*1.15;
}
const pricewithvat=applyToAll(prices,addVat)
console.log(pricewithvat)

// #5
const cities = ["Addis Ababa","Dire Dawa","Bahir Dar","Hawassa","Adama"];

cities.forEach((city, index) => {
    console.log(`${index + 1}. ${city}`);
});