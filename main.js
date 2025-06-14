const info = document.getElementById("info");
const why = document.getElementById("why");
const close_info = document.getElementById("close-info");
const discount_2de = document.getElementById("discount-2de");
const cart_2de = document.getElementById("cart-2de");
const items = [];

items.push({
    name: "2DE",
    discount: "0",
});

discount_2de.textContent = items[0].discount + "% OFF";

cart_2de.onclick = function (event) {
    info.style.visibility = "visible";
    why.textContent = "You cannot buy this item right now because the item is unavailable.";
};

close_info.onclick = function (event) {
    info.style.visibility = "hidden";
    why.textContent = "";
};

// Copyright (C) Rise LLC 2025