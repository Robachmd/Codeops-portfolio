const state = {
    dishes: [],
    cart: [],
    search: ""
};
const CART_STORAGE_KEY = "restaurant-cart";

const loading = document.getElementById("loading");
const searchInput = document.getElementById("search");
const noResults = document.getElementById("no-results");
const breakfastMenu = document.getElementById("breakfast-menu");
const mainMenu = document.getElementById("main-menu");
const vegetarianMenu = document.getElementById("vegetarian-menu");
const sideMenu = document.getElementById("side-menu");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const clearCart = document.getElementById("clear-cart");
const checkoutForm =document.getElementById("checkout-form");
const customerName =document.getElementById("customer-name");
const customerPhone =document.getElementById("customer-phone");
const checkoutError =document.getElementById("checkout-error");
const orderConfirmation =document.getElementById("order-confirmation");


async function loadMenu() {
    try {
        const response = await fetch("./data/menu.json");
        if (!response.ok) {
            throw new Error("Failed to load menu");
        }
        state.dishes = await response.json();
        loading.style.display = "none";
        renderMenu();
    } catch (error) {
        console.log(error);
        loading.textContent = "Unable to load menu";
    }
}
function createDishCard(dish) {
    const card = document.createElement("article");
    card.className = "dish";
    const image = document.createElement("img");
    image.src = dish.image;
    image.alt = dish.name;
    image.loading = "lazy";
    const content = document.createElement("div");
    content.className = "dish-content";
    const name = document.createElement("h3");
    name.textContent = dish.name;
    const price = document.createElement("p");
    price.className = "price";
    price.textContent = dish.price + " ETB";
    if (dish.spicy === true) {
        const spicy = document.createElement("span");
        spicy.className = "spicy";
        spicy.textContent = "Spicy";
        content.appendChild(spicy);
    }
    const button = document.createElement("button");
    button.type = "button";
    button.className = "add";
    button.textContent = "Add to Order";
    button.addEventListener("click", function () {
        addToCart(dish.id);
    });
    content.appendChild(name);
    content.appendChild(price);
    content.appendChild(button);
    card.appendChild(image);
    card.appendChild(content);
    return card;
}
function renderMenu() {
    breakfastMenu.innerHTML = "";
    mainMenu.innerHTML = "";
    vegetarianMenu.innerHTML = "";
    sideMenu.innerHTML = "";
    let foundDishes = 0;
    for (let i = 0; i < state.dishes.length; i++) {
        const dish = state.dishes[i];
        const dishName = dish.name.toLowerCase();
        const searchText = state.search.toLowerCase();
        if (!dishName.includes(searchText)) {
            continue;
        }
        foundDishes++;
        const card = createDishCard(dish);
        if (dish.category === "Breakfast") {
            breakfastMenu.appendChild(card);
        } else if (dish.category === "Main") {
            mainMenu.appendChild(card);
        } else if (dish.category === "Vegetarian") {
            vegetarianMenu.appendChild(card);
        } else if (dish.category === "Side") {
            sideMenu.appendChild(card);
        }
    }

}
searchInput.addEventListener("input", function () {
    state.search = searchInput.value;
    renderMenu();
});
function addToCart(id) {
    const dish = state.dishes.find(function (dish) {
        return dish.id === id;
    });
    if (!dish) {
        return;
    }
    const cartItem = state.cart.find(function (item) {
        return item.id === id;
    });
    if (cartItem) {
        cartItem.quantity++;
    } else {
        state.cart.push({
            id: dish.id,
            name: dish.name,
            price: dish.price,
            quantity: 1
        });
    }
    saveCart();
    renderCart();
}
function renderCart() {
    cartItems.innerHTML = "";
    if (state.cart.length === 0) {
        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty
            </p>
        `;
        cartCount.textContent = "0 items";
        cartTotal.textContent = "0 ETB";
        return;
    }
    let totalItems = 0;
    const totalPrice = state.cart.reduce(function (total, item) {
            return total + item.price * item.quantity;
        },
        0);
    for (let i = 0; i < state.cart.length; i++) {
        const item = state.cart[i];
        totalItems += item.quantity;
        
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        const information = document.createElement("div");
        information.className = "cart-item-info";
        const name = document.createElement("h3");
        name.textContent = item.name;
        const price = document.createElement("p");
        price.textContent = item.price + " ETB";
        const quantity = document.createElement("div");
        quantity.className = "quantity";
        const minus = document.createElement("button");
        minus.type = "button";
        minus.className = "quantity-btn";
        minus.textContent = "-";
        minus.addEventListener("click", function () {
            decreaseQuantity(item.id);
        });
        const number = document.createElement("span");
        number.textContent = item.quantity;
        const plus = document.createElement("button");
        plus.type = "button";
        plus.className = "quantity-btn";
        plus.textContent = "+";
        plus.addEventListener("click", function () {
            increaseQuantity(item.id);
        });
        quantity.appendChild(minus);
        quantity.appendChild(number);
        quantity.appendChild(plus);
        const remove = document.createElement("button");
        remove.type = "button";
        remove.className = "remove-item";
        remove.textContent = "Remove";
        remove.addEventListener("click", function () {
            removeItem(item.id);
        });
        information.appendChild(name);
        information.appendChild(price);
        information.appendChild(quantity);
        cartItem.appendChild(information);
        cartItem.appendChild(remove);
        cartItems.appendChild(cartItem);
    }
    if (totalItems === 1) {
        cartCount.textContent = "1 item";
    } else {
        cartCount.textContent = totalItems + " items";
    }
    cartTotal.textContent = totalPrice + " ETB";
}
function calculateTotalPrice() {

    return state.cart.reduce(function (total, item) {

        return total + (item.price * item.quantity);

    }, 0);
}
function increaseQuantity(id) {
    const item = state.cart.find(function (item) {
        return item.id === id;
    });
    if (item) {
        item.quantity++;
    }
    saveCart();
    renderCart();
}
function decreaseQuantity(id) {
    const item = state.cart.find(function (item) {
        return item.id === id;
    });
    if (!item) {
        return;
    }
    item.quantity--;
    if (item.quantity === 0) {
        removeItem(id);
        return;
    }
    saveCart();
    renderCart();
}
function removeItem(id) {
    state.cart = state.cart.filter(function (item) {
        return item.id !== id;
    });
    saveCart();
    renderCart();
}
clearCart.addEventListener("click", function () {
    state.cart = [];
    saveCart();
    renderCart();
});

function saveCart() {

    localStorage.setItem( CART_STORAGE_KEY, JSON.stringify(state.cart));

}

function loadSavedCart() {

    const savedCart =localStorage.getItem( CART_STORAGE_KEY);
    if (!savedCart) {
        return;
    }
    try {
        state.cart = JSON.parse(savedCart);
    } catch (error) {
        console.log("Could not load saved cart");
        state.cart = [];
    }
}

function isValidPhone(phone) {

    const phonePattern = /^(09|\+2519)\d{8}$/;
    return phonePattern.test(phone);
}
checkoutForm.addEventListener("submit",function (event) {

    event.preventDefault();
    checkoutError.textContent = "";
    orderConfirmation.textContent = "";
    const name = customerName.value.trim();
    const phone = customerPhone.value.trim();

    if (!/^[\p{L} ]+$/u.test(name) || name.length < 2) {

        checkoutError.textContent = "Please enter your name.";
        customerName.focus();
        return;
    }
    if (!isValidPhone(phone)) {
        checkoutError.textContent ="Please enter a valid Ethiopian phone number.";

        customerPhone.focus();

        return;

    }

    if (state.cart.length === 0) {
        checkoutError.textContent = "Your cart is empty.";
        return;
    }
    
    let totalPrice = 0;
    for ( let i = 0; i < state.cart.length; i++) {
        const item =state.cart[i];
        totalPrice +=item.price *item.quantity;

    }

    orderConfirmation.textContent ="Thank you " + name +"! Your order of " + totalPrice + " ETB has been confirmed.";



state.cart = [];

saveCart();

renderCart();

checkoutForm.reset();

    }
);


loadSavedCart();

renderCart();

loadMenu();
