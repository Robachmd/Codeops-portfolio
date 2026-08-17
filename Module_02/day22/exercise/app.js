const  state={
    rates:{},
    currencies:[],
    amount:"",
    fromCurrency:"ETB",
    toCurrency:"USD",
    watchlist:[],
    status:"idle"

};

const status = document.getElementById("status");
const form = document.getElementById("converterForm");
const amountInput=document.getElementById("amount");
const fromCurrency=document.getElementById("fromCurrency");
const toCurrency=document.getElementById("toCurrency");
const result=document.getElementById("result");
const watchlist=document.getElementById("watchlist");

const API="https://open.er-api.com/v6/latest/ETB"
// state.rates={
//     ETB:1,
//     USD:0.006,
//     EUR:0.003,
//     GBP:0.004
// }
// state.currencies=Object.keys(state.rates)
// console.log(state.currencies)

function renderCurrency(){
    fromCurrency.innerHTML="";
    toCurrency.innerHTML="";
    state.currencies.forEach(currency =>{
        const fromOption=document.createElement("option");
        fromOption.value=currency;
        fromOption.textContent=currency;
        fromCurrency.appendChild(fromOption);
        const toOption=document.createElement("option");
        toOption.value=currency;
        toOption.textContent=currency;
        toCurrency.appendChild(toOption);
    })
}


async function fetchRates(){
    try{
        status.textContent="Loading currencies...";
        const response= await fetch(API);
        if (!response.ok){
            throw new Error("fail to fetch currency");
        }
        const data =await response.json();
        state.rates=data.rates;
        state.currencies=Object.keys(state.rates);
        status.textContent="currencies loaded successfully"
        renderCurrency();   
        fromCurrency.value = state.fromCurrency;
        toCurrency.value = state.toCurrency;
        amountInput.value = state.amount;
    }catch(error){
        status.textContent="Failed to load currencies"
    }

}


form.addEventListener("submit",function(event){
    event.preventDefault();
    const amount= Number(amountInput.value);
    state.amount = amount;
    const from = fromCurrency.value;
    state.fromCurrency = from;
    const to = toCurrency.value;
    state.toCurrency = to;
    if (!amount||amount<=0){
        result.textContent="please enter valid only greater than 0!";
        return;
    }
    const fromRate=state.rates[from];
    const toRate=state.rates[to]
    let convertedAmount;
    if (from===to){
        convertedAmount=amount;
    }else{
        const amountInETB=amount/fromRate;
        convertedAmount=amountInETB*toRate
    }
    result.textContent=`${amount}${from}=${convertedAmount.toFixed(2)} ${to}`
    if (!state.watchlist.includes(to)){
        state.watchlist.push(to);
    }
    saveState();
    renderWatchlist();
})

function renderWatchlist(){
    watchlist.innerHTML="";
    state.watchlist.forEach(currency=>{
        const li= document.createElement("li");
        li.textContent= currency + "";
        const button=document.createElement("button");
        button.textContent="Remove";
        button.classList.add("remove-btn");
        button.dataset.currency=currency;
        li.appendChild(button);
        watchlist.appendChild(li);
    });
    
}
renderWatchlist()
watchlist.addEventListener("click",function(event){
    if (!event.target.classList.contains("remove-btn")){
        return;
    }
        const currency=event.target.dataset.currency;
        state.watchlist=state.watchlist.filter(item=>item!==currency);
    
    saveState();
    renderWatchlist();
})
function saveState(){
    const data={
        watchlist:state.watchlist,
        fromCurrency:state.fromCurrency,
        toCurrency:state.toCurrency,
        amount:state.amount
    };
    localStorage.setItem("currencyConverter",JSON.stringify(data));
}
function loadState(){
    const saved = localStorage.getItem("currencyConverter");
    if (!saved){
        return;
    }
    const data=JSON.parse(saved);
    state.watchlist=data.watchlist||[];
    state.fromCurrency=data.fromCurrency||"ETB";
    state.toCurrency=data.toCurrency||"USD";
    state.amount=data.amount||"";
    
}
loadState();
renderWatchlist();
fetchRates();