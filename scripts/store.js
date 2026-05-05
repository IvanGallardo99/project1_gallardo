"use strict";
let cart = [];


// get buttons
let buttons = document.querySelectorAll("input[type='button']");

// get display areas
let totalBox = document.getElementById("cartTotal");
let orderSummary = document.getElementById("orderSummary");

// loop through buttons
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", addToCart);
}

// function to add item
function addToCart() {
    let name = this.getAttribute("data-name");
    let price = parseFloat(this.getAttribute("data-price"));

    let item = {
        name: name,
        price: price,
        qty: 1
    };

    cart.push(item);
    alert(name + " added to cart!");
    displayCart();
}

function displayCart() {
    let table = document.getElementById("cartTable");

    table.innerHTML = `
        <tr>
            <th>Item</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Remove</th>
        </tr>
    `;

    let total = 0;
    let summaryText = "";

    for (let i = 0; i < cart.length; i++) {
        let row = table.insertRow();

        row.insertCell().textContent = cart[i].name;

        let qtyCell = row.insertCell();
        let qtyInput = document.createElement("input");
        qtyInput.type = "number";
        qtyInput.min = 1;
        qtyInput.value = cart[i].qty;

        qtyInput.onchange = function () {
            cart[i].qty = Number(this.value);
            displayCart();
        };

        qtyCell.appendChild(qtyInput);

        row.insertCell().textContent = "$" + (cart[i].price * cart[i].qty).toFixed(2);

        let removeCell = row.insertCell();
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";

        removeBtn.onclick = function () {
            cart.splice(i, 1);
            displayCart();
        };

        removeCell.appendChild(removeBtn);
        total += cart[i].price * cart[i].qty;
        summaryText += cart[i].name + " x" + cart[i].qty + " - $" + (cart[i].price * cart[i].qty).toFixed(2) + "\n";
    }

    totalBox.textContent = "$" + total.toFixed(2);
    orderSummary.value = summaryText + "\nTotal: $" + total.toFixed(2);
}

// get form + error box
let form = document.getElementById("storeForm");
let errorBox = document.getElementById("storeError");

// run validation on submit
form.addEventListener("submit", validateForm);

function validateForm(evt) {
    let first = document.getElementById("firstName");
    let last = document.getElementById("lastName");
    let email = document.getElementById("email");
    let billingAddress = document.getElementById("billingAddress");
    let billingCity = document.getElementById("billingCity");
    let billingZip = document.getElementById("billingZip");

    errorBox.textContent = "";

    first.style.backgroundColor = "";
    last.style.backgroundColor = "";
    email.style.backgroundColor = "";
    billingAddress.style.backgroundColor = "";
    billingCity.style.backgroundColor = "";
    billingZip.style.backgroundColor = "";

    if (
        first.value === "" ||
        last.value === "" ||
        email.value === "" ||
        billingAddress.value === "" ||
        billingCity.value === "" ||
        billingZip.value === ""
    ) {
        evt.preventDefault();

        errorBox.textContent = "Please complete all required fields";

        if (first.value === "") {
            first.style.backgroundColor = "#ffcccc";
        }

        if (last.value === "") {
            last.style.backgroundColor = "#ffcccc";
        }

        if (email.value === "") {
            email.style.backgroundColor = "#ffcccc";
        }

        if (billingAddress.value === "") {
            billingAddress.style.backgroundColor = "#ffcccc";
        }

        if (billingCity.value === "") {
            billingCity.style.backgroundColor = "#ffcccc";
        }

        if (billingZip.value === "") {
            billingZip.style.backgroundColor = "#ffcccc";
        }
    }
}

// bonus: copy billing information to shipping
let sameShipping = document.getElementById("sameShipping");

sameShipping.addEventListener("click", copyBillingToShipping);

function copyBillingToShipping() {
    if (sameShipping.checked) {
        document.getElementById("shippingAddress").value =
            document.getElementById("billingAddress").value;

        document.getElementById("shippingCity").value =
            document.getElementById("billingCity").value;

        document.getElementById("shippingZip").value =
            document.getElementById("billingZip").value;
    }
}