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


// var displayTimeblocks = function() {
// //     // for(var i = 0; i < timeblocks.length; i++ ){
// //     // select entire container
// //     var containerEL = document.querySelector(".container");
// //     // create a div with a call name of 'time-block'
// //     var divEl = document.createElement("div");
// //     divEl.className = "individual-timeblock";

// //     // create a span that shows the time from 9am to 5pm 
// //     var timeEl = document.createElement("span");
// //     timeEl.className = "time-span";
// //     timeEl.textContent = "Test";
// //     divEl.appendChild(timeEl);

// //     // create a text field that users can write on 
// //     var inputEl = document.createElement("input");
// //     inputEl.className = "input";
// //     divEl.appendChild(inputEl);

// //     // create button to save to localstorage
// //     var saveBtnEl = document.createElement("button");
// //     saveBtnEl.className = "saveBtn";
// //     saveBtnEl.setAttribute('type', 'submit')
// //     saveBtnEl.innerText = "Submit";
// //     divEl.appendChild(saveBtnEl);

// //     containerEL.appendChild(divEl);
// // // }
// }

// displayTimeblocks();

var saveBtn = document.getElementsByClassName("saveBtn");

console.log(saveBtn);
var savedTask = function(e){
    var time = e.target.getAttribute("data-hours");
    console.log(time);

    var tasks = document.getElementById(time).value;
    console.log(tasks);
}
var saveData = function(){
    
}

for (const button of saveBtn) {
    button.addEventListener('click', savedTask);
}
