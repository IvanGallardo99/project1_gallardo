/* Estimate page calculator
   This script calculates the total cost of a stay
   using nights, room choice, and add-on features.
*/

function formatCurrency(value) {
    return "$" + value.toFixed(2);
}

function calculateEstimate() {
    let nights = parseInt(document.getElementById("nights").value);
    let roomRate = 0;
    let totalCost = 0;

    // Check which room is selected
    if (document.getElementById("evergreenRoom").checked) {
        roomRate = 120;
    }

    if (document.getElementById("gardenRoom").checked) {
        roomRate = 130;
    }

    // Base total from nights and room rate
    totalCost = nights * roomRate;

    // Add breakfast cost
    if (document.getElementById("breakfast").checked) {
        totalCost += 20;
    }

    // Add parking cost
    if (document.getElementById("parking").checked) {
        totalCost += 15;
    }

    // Add Wi-Fi cost
    if (document.getElementById("wifi").checked) {
        totalCost += 10;
    }

    document.getElementById("totalCost").innerHTML = formatCurrency(totalCost);
}

document.getElementById("estimateButton").onclick = calculateEstimate;