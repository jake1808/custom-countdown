const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('form');
const dateEl = document.getElementById('date-picker');

let countdownTitle = '';
let countdownDate = '';

// set date input min with today's date
let today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);


// Take values from form input
function updateCountdown(e) {
    e.preventDefault();
    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElement[1].value;

}

// Event listener
countdownForm.addEventListener('submit', updateCountdown);