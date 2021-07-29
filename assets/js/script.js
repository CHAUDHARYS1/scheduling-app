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

var saveBtn = document.getElementsByClassName("saveBtn");

console.log(saveBtn);
var savedTask = function(e){
    var time = e.target.getAttribute("data-hours");
    console.log(time);

    var tasks = document.getElementById(time).value;
    console.log(tasks);
}
var saveTaskDataToLocalStorage = function(){
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

for (const button of saveBtn) {
    button.addEventListener('click', savedTask);
}
