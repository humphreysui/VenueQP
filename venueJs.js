
// get data
var date = document.getElementById("date");
var time = document.getElementById("time");
var vaxTime = document.getElementById("vaxTime");
//two parts of time
var ts = document.getElementById("ts");
var ms = document.getElementById("ms");
// 
var venueDisplay = document.getElementById("location");

// display date 
const displayDate = () =>{
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  day = String(d.getDate()).padStart(2, '0');

  return  year + "年" + month + "月" + day + "日";
}
// display time and sec 
function displayTS() {
  const d = new Date();
  const h = d.getHours();
  const m = d.getMinutes();
  const s = d.getSeconds();
  ts.innerHTML = h + "时" + m + "分" + s + "秒";
   
}
setInterval(displayTS, 1000);
// display millisec
function displayMS() {
  const d = new Date();
  const mis = d.getMilliseconds();
  ms.innerHTML = mis;
}
setInterval(displayMS, 1);
// display vax date
const displayVaxDate = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  day = String(d.getDate()).padStart(2, '0');

  return year + "-" + month + "-" + day;
}
// add into to html
date.innerHTML = displayDate();
vaxTime.innerHTML = displayVaxDate();



/* 
// onload prep
window.onload = displayTS(); */
 