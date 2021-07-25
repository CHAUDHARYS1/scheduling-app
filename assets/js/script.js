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

var scheudle = [{
    time: '8:00AM',
    description: '',
    hour: 8
}, ];

var displayTimeblocks = function() {
    // for(var i = 0; i < timeblocks.length; i++ ){
    // select entire container
    var containerEL = document.querySelector(".container");
    // create a div with a call name of 'time-block'
    var divEl = document.createElement("div");
    divEl.className = "individual-timeblock";

    // create a span that shows the time from 9am to 5pm 
    var timeEl = document.createElement("span");
    timeEl.className = "time-span";
    timeEl.textContent = "Test";
    divEl.appendChild(timeEl);

    // create a text field that users can write on 
    var inputEl = document.createElement("input");
    inputEl.className = "input";
    divEl.appendChild(inputEl);

    // create button to save to localstorage
    var saveBtnEl = document.createElement("button");
    saveBtnEl.className = "saveBtn";
    saveBtnEl.setAttribute('type', 'submit')
    saveBtnEl.innerText = "Submit";
    divEl.appendChild(saveBtnEl);

    containerEL.appendChild(divEl);
// }
}

displayTimeblocks();

