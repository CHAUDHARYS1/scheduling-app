// select current date
var currentDay = document.querySelector("#currentDay");

// active luxon library
const DateTime = luxon.DateTime;
var now = DateTime.now();

// today's date format variable
var newFormat = {
    ...DateTime.DATE_SHORT,
    weekday: 'long',
    month: 'long',
    day: 'numeric'
};

currentDay.innerHTML = now.toLocaleString(newFormat);

