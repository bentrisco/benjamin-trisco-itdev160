//Declare greeting variables
var user = 'Mr. Bojangles!';
var salutation = 'Hello, ';
var greeting = salutation + user;
var greetingEl = document.getElementById('greeting');

// Write greeting
greetingEl.textContent = greeting;

// Declare price variables
var price = 60,
    studentDiscount = .25,
    studentPrice = price - (price * studentDiscount),
priceEl = document.getElementById('price'),
studentPriceEl = document.getElementById('student-price');

//Write price information
priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);