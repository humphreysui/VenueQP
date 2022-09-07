// getting data
var venues ={ 
  '1': ["华强城二期", "HuaQiangCheng 2 Qi"],
  '2': ["沈北华强广场", "Living Mall"],
  '3': ["沈阳金拱门食品有限公司道义南大街华强得来速餐厅", "Mcdonald's LivingMall"],
  '4': ["沈阳市沈北新区美滋滋便利店", "Lawson HuaQiang1Qi"],

}
var venueDisplay = document.getElementById("location");
var venueName = document.getElementById("venueName");
var venueList = document.getElementById("venueList");
var btn = document.getElementById("btn");

// populate list
function showList(){
  
  for (const key in venues) {
    
    var opt = `<option value="${venues[key][0]}">${venues[key][1]}</option>`;
    venueList.innerHTML += opt;

  }

}
venueDisplay.addEventListener('load', showList());

// display venue
function displayVenue() {
  var selectedVenue = document.getElementById("venueList").value;
  console.log(selectedVenue);
  venueName.innerHTML = `<p>${selectedVenue}<p>`;
  venueDisplay.style.visibility = 'hidden';
}

 