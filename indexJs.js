// getting data
var venues ={ 
  '1': ["华强城二期", "HuaQiangCheng 2 Qi"],
  '2': ["沈北华强广场", "Living Mall"],
  '3': ["沈阳金拱门食品有限公司道义南大街华强得来速餐厅", "Mcdonald's LivingMall"],
  '4': ["沈阳市沈北新区美滋滋便利店", "Lawson HuaQiang1Qi"],
  '5': ["沈北万达", "Wanda Shenbei"],
  '6': ["汇置尚都六期物业服务中心", "Huiland"],
  '7': ["沈北吾悦广场", "Wu Yue Plaza"],
  '8': ["沈北新区政务服务中心", "ShenBei Gov Service"],
  '9': ["#", "#"],
    
 

    

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
  setInterval(displayTS, 1000);
  setInterval(displayMS, 1);
  date.innerHTML = displayDate();
  vaxTime.innerHTML = displayVaxDate();
}

 