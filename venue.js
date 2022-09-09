// get data
var date = document.getElementById("date");
var time = document.getElementById("time");
var vaxTime = document.getElementById("vaxTime");
// two parts of time
var ts = document.getElementById("ts");
var ms = document.getElementById("ms");
// get element on page
var venueDisplay = document.getElementById("location");
var venueName = document.getElementById("venueName");
var venueList = document.getElementById("venueList");

var btn = document.getElementById("btn");

// populate venue name list
function showList() {

  for (const key in venues) {

    var opt = `<option value="${venues[key][0]}">${venues[key][1]}</option>`;
    venueList.innerHTML += opt;

  }

}

venueDisplay.addEventListener('load', showList());

// display date on code page
const displayDate = () =>{
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  day = String(d.getDate()).padStart(2, '0');

  return  year + "年" + month + "月" + day + "日";
}

// display time and sec on code page
function displayTS() {
  const d = new Date();
  const h = d.getHours();
  const m = d.getMinutes();
  const s = d.getSeconds();
  ts.innerHTML = h + "时" + m + "分" + s + "秒";
   
}

// display millisec
function displayMS() {
  const d = new Date();
  const mis = d.getMilliseconds();
  ms.innerHTML = `${mis} <span class='mil'>毫秒</span>`;
}

// display vax date
const displayVaxDate = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  day = String(d.getDate()).padStart(2, '0');

  return year + "-" + month + "-" + day;
}

// on click display venue & date time on code
function displayVenue() {
  var selectedVenue = document.getElementById("venueList").value;
  var typedVenue = document.getElementById("vname").value;
  console.log('select:' + selectedVenue + ' and typed:' + typedVenue);
 

  if (selectedVenue != '' && selectedVenue != 'Choose here' && typedVenue == ''){
    venueName.innerHTML = `<p>${selectedVenue}<p>`;
    venueDisplay.style.visibility = 'hidden';
    setInterval(displayTS, 1000);
    setInterval(displayMS, 1);
    date.innerHTML = displayDate();
    vaxTime.innerHTML = displayVaxDate();
    console.log('selected only');
  }

  else if (typedVenue != '' && (selectedVenue == '' || selectedVenue == 'Choose here')){
    venueName.innerHTML = `<p>${typedVenue}<p>`;
    venueDisplay.style.visibility = 'hidden';
    setInterval(displayTS, 1000);
    setInterval(displayMS, 1);
    date.innerHTML = displayDate();
    vaxTime.innerHTML = displayVaxDate();
    console.log('typed only');
  }
  else if (!selectedVenue || !typedVenue) {
    alert("please select a location or type a new one!");
    console.log('no selceted or typed');
  } 
  else{
    alert("You can only select or type one at a time!")
  }
   
}

