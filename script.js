
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
var bg = [
    "url('https://c0.wallpaperflare.com/preview/934/105/169/russia-uva-color-dark.jpg')",
    "url('https://wallpapercave.com/wp/wp6899759.jpg')",
    "url('https://image.slidesdocs.com/responsive-images/background/nature-leaf-blue-palm-leaves-dark-plant-powerpoint-background_38845910f1__960_540.jpg')",
    "url('https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGJ1c2luZXNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80')",
    "url('https://i.pinimg.com/600x315/eb/ae/4f/ebae4f0155e99b45f60b77a5cb96cca9.jpg')",
    "url('https://cdn.wallpapersafari.com/97/18/0hZEx9.jpg')",
    "url('https://images.unsplash.com/photo-1557264322-b44d383a2906?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBkYXJrfGVufDB8fDB8fA%3D%3D&w=1000&q=80')",
    "url('https://e1.pxfuel.com/desktop-wallpaper/519/371/desktop-wallpaper-cute-panda-panda-google-chrome-background.jpg')",
    "url('https://wallpapercave.com/wp/wp3725913.png')",
    "url('https://wallpaperaccess.com/full/1090703.jpg')"
]
var t = document.getElementById("moonSun")
var click  = document.getElementById("n")
var r = Math.floor(Math.random() * bg.length)
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
        t.setAttribute('class', 'fa-solid fa-moon');
        timing.innerHTML = "Night";
    }
    else if (hoursNum > "6") {
        t.setAttribute('class', 'fa-solid fa-sun');
        timing.innerHTML = "Day";
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
function newed(){
    document.getElementById("body").style.background = bg[r]
    document.getElementById("body").style.backgroundRepeat = "no-repeat"
    document.getElementById("body").style.backgroundSize = "100% 100vh"
}
click.addEventListener("click", function() {
    newed()
  });
