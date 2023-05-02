
var hours = document.getElementById("hours")
var minutes = document.getElementById("minutes")
var second = document.getElementById("second")
var day = document.getElementById("day")
var month = document.getElementById("month")
var dated = document.getElementById("date")
var status = document.getElementById("status")
var timing = document.getElementById("timingOfTheDay")
var inputField = document.getElementById("input")
var daysArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var MonthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
function update() {
    var date = new Date()
    var dayNum = date.getDay()
    var datedNum = date.getDate()
    var MonthNum = date.getMonth()
    var hoursNum = date.getHours()
    var minNum = date.getMinutes()
    var secNum = date.getSeconds()
    hours.innerHTML = hoursNum
    minutes.innerHTML = minNum
    second.innerHTML = secNum
    day.innerHTML = daysArr[dayNum]
    month.innerHTML = MonthArr[MonthNum]
    dated.innerHTML = datedNum
    if (hoursNum > "19" || hoursNum < "6") {
        timing.setAttribute('class', 'fa-solid fa-moon');
        timer.innerHTML = "Night";
    }
    else if (hoursNum > "6") {
        timing.setAttribute('class', 'fa-solid fa-sun');
        timer.innerHTML = "Day";
    }
}
setInterval(update, 1000)
function del() {
    inputField.value = ""
}
function search() {
    var inp = document.getElementById("input").value;
    var googleUrl = "https://www.google.com/search?q=" + encodeURIComponent(inp);
    window.open(googleUrl, "_blank");
}
