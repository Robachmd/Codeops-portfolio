const form=document.querySelector("#signup");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const emailInput = document.getElementById("email");
const nameInput = document.getElementById("name");
const errorArea=document.getElementById("error_area");
const displayCount= document.getElementById("display_count");
const StoreValue="user_data";
const saveduser=localStorage.getItem(StoreValue);
const users= saveduser ? JSON.parse(saveduser):[];
const PHONE = /^(\+2519|\+2517|09|07)\d{8}$/;
const EMAIL = /^[\w.]+@[\w.]+\.\w+$/;
errorArea.textContent = "";

form.addEventListener("submit", (event) => {
    event.preventDefault();
    errorArea.textContent = "";

    if (nameInput.value.trim().length < 2){
        errorArea.textContent = "Error: Enter valid name at least 2 characters";
        return; 
    }    
    if (!PHONE.test(phoneInput.value.trim())){
        errorArea.textContent="Error:Enter valid Ethiopian phone number format"
        return;
    }
    if (!EMAIL.test(emailInput.value.trim())){
        errorArea.textContent = "Error: Enter a valid email configuration.";
        return; 
    }    
    if (passwordInput.value.length < 8) {
        errorArea.textContent = "Error: Password must be at least 8 characters.";
        return;
    }
    const user={
        name:nameInput.value,
        phone:phoneInput.value,
        email:emailInput.value,
        password:passwordInput.value
    };
    users.push(user)
    localStorage.setItem(StoreValue,JSON.stringify(users))
    displayCount.textContent=users.length
    form.reset();
    })

