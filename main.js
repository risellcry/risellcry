const info = document.getElementById("info");
const cart_2de = document.getElementById("cart-2de");

cart_2de.onclick(function (event) {
    info.style.visibility = "visible";
    why.textContent = "You cannot buy this item right now because the item is unavailable.";
};

close_info.onclick = function (event) {
    info.style.visibility = "hidden";
    why.textContent = "";
};

// Copyright (C) Rise LLC 2025