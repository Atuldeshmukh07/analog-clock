var inc = 1000;
clock();
function clock() {
  const date = new Date();
  const hours = ((date.getHours() + 11) % 12 + 1);
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;
  const h = (hours < 10) ? "0" + hours : hours;
  const m = (minutes < 10) ? "0" + minutes : minutes;
  document.querySelector('.hours').innerHTML = h;
  document.querySelector('.mins').innerHTML = m;
  document.querySelector('.hour').style.transform = `rotate(${hour}deg)`
  document.querySelector('.minute').style.transform = `rotate(${minute}deg)`
  document.querySelector('.second').style.transform = `rotate(${second}deg)`
}


var dateObj = new Date();
var dayName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var shortDayName = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October","November", "December"];
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

document.getElementById("date").innerHTML = shortDayName[dateObj.getDay()] + ", " + day + " " + monthNames[dateObj.getMonth()] + " " + year;
document.getElementById("date1").innerHTML = dayName[dateObj.getDay()] + "<br> " + day + " " + monthNames[dateObj.getMonth()] + " " + year;


setInterval(clock, inc);
