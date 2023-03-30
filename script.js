let minusButtons = document.querySelectorAll(".minus-btn");
let plusButtons = document.querySelectorAll(".plus-btn");
let deleteButtons = document.querySelectorAll(".delete-btn");



// Decrease quantity by one when "-" button is clicked
minusButtons.forEach (button => {
    button.addEventListener("click", () => {
    let input = button.parentElement.querySelector("input[type='text']");
    let currentValue = parseInt(input.value);
    if (currentValue > 1) {
		input.value = currentValue - 1;
	}
updateTotalPrice()

});
});

// Increase quantity by one when "+" button is clicked
plusButtons.forEach(button => {
button.addEventListener("click", () => {
const input = button.parentElement.querySelector("input[type='text']");
let currentValue = parseInt(input.value);
input.value = currentValue + 1
updateTotalPrice()

});

});

// Toggle heart icon color when clicked
let hearts = document.querySelectorAll(".heart");
hearts.forEach(heart => {
heart.addEventListener("click", () => {
heart.classList.toggle("active");
});
});

// Remove item from cart when "X" button is clicked
deleteButtons.forEach(button => {
    button.addEventListener("click", () => {
        let row = button.parentElement.parentElement;
        row.remove();
        updateTotalPrice()
        
    });
});

// Update total price when quantity is changed or item is deleted
// let quantityInputs = document.querySelectorAll("input[type='text']");
// quantityInputs.forEach(input => {
// input.addEventListener("change", (e) => {
//     console.log(e.target.value)
//     updateTotalPrice();
// });
// });

function updateTotalPrice() {
let rows = document.querySelectorAll("tbody tr");
let totalPrice = 0;
rows.forEach(row => {
	let price = parseFloat(row.querySelector("td:nth-child(2)").textContent.replace("$", ""));
	let quantity = parseInt(row.querySelector("input[type='text']").value);
	totalPrice += price * quantity;
});

document.querySelector(".total-price h3").textContent = "Total Price: $" + totalPrice.toFixed(2);

}