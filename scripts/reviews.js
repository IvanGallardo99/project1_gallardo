/* 
   This script displays guest reviews using arrays
   It loops through each review and builds the HTML dynamically
*/

let reviewers = ["Sarah M.", "James T.", "Olivia R.", "Daniel K."];

let reviewType = ["P", "N", "", ""];
// P = prime (green), N = new (blue), empty = normal

let stars = [5, 4, 5, 3];

let reviewDates = ["04/01/2026", "03/28/2026", "03/24/2026", "03/20/2026"];

let reviews = [
    "Our stay was peaceful and relaxing. The breakfast was amazing.",
    "The room was clean and comfortable. Really enjoyed the stay.",
    "Beautiful place and great views. Would come back again.",
    "Nice experience overall but could improve breakfast options."
];

let reviewTitles = [
    "Perfect Weekend Getaway",
    "Comfortable Stay",
    "Beautiful Place",
    "Nice Experience"
];


// loop through each review
for (let i = 0; i < reviewers.length; i++) {

    // start empty string for each review
    let reviewCode = "";

    // decide table style based on type
    if (reviewType[i] === "P") {
        reviewCode += "<table class='prime'>";
    } else if (reviewType[i] === "N") {
        reviewCode += "<table class='new'>";
    } else {
        reviewCode += "<table>";
    }

    // add title
    reviewCode += "<caption>" + reviewTitles[i] + "</caption>";

    // add reviewer name
    reviewCode += "<tr><th>By</th><td>" + reviewers[i] + "</td></tr>";

    // add date
    reviewCode += "<tr><th>Review Date</th><td>" + reviewDates[i] + "</td></tr>";

    // add star rating (calls function below)
    reviewCode += "<tr><th>Rating</th><td>" + starImages(stars[i]) + "</td></tr>";

    // add review text
    reviewCode += "<tr><td colspan='2'>" + reviews[i] + "</td></tr>";

    // close table
    reviewCode += "</table>";

    // insert into page
    document.getElementById("reviewSection")
        .insertAdjacentHTML("beforeend", reviewCode);
}


/* 
   function to create star images
   loops based on rating and adds star.png each time
*/
function starImages(rating) {
    let imageText = "";

    for (let i = 1; i <= rating; i++) {
        imageText += "<img src='images/star.png' alt='star' width='20'>";
    }

    return imageText;
}