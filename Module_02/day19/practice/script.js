const heading = document.querySelector("h1");
heading.textContent = "welcome to the city";
heading.classList.toggle("active");
// #2
const cities=["addis ababa","jimma","bahirdar"]
const list=document.querySelector("ul");

for (const city of cities){
    const li = document.createElement("li");
    li.textContent=city;
    list.append=city;
}
// #3
const button = document.querySelector("button");
const container=document.querySelector("div");
button.addEventListener("click",(event)=>{
    console.log(event.target);
});
container.addEventListener("click",()=>{
    console.log("clicked");
})
// #4
const list=document.querySelector("ul");
list.addEventListener("click",(event)=>{
    if (event.target.tagName ==="button"){
        event.target.parentElement.remove();
    }
});
// #5
const form = document.querySelector("form");
const input = document.querySelector("input");
const list= document.querySelector("ul")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const li = document.createElement("li");
    li.textContent = input.value;
    list.append(li);
    input.value = "";
});