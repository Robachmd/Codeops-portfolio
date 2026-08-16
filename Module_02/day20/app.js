const list = document.getElementById("list");
const refershButton = document.getElementById("refresh");
// const API = "https://jsonplaceholder.typicode.com/users";
const API ="https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";
async function load(){
    list.innerHTML="loading...";
    try{
        const res = await fetch(API);
        if (!res.ok){
            throw new Error("HTTP" + res.status);
        }
        const users = await res.json();
        list.innerHTML = "";
        users.meals.forEach(user => {
            const li =document.createElement("li");
            // li.textContent = `${user.name} - ${user.email} ETB`;
            li.textContent = user.strMeal;
            list.appendChild(li);
            
        });
    }catch (error){
            list.innerHTML = "could not load data";
            console.log(error)
        }
        finally{
            console.log("finished loading")
        }
    }

load();
refershButton.addEventListener("click",load);