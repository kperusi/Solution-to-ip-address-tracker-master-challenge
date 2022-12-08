const element = document.querySelector(".ip-input");
const clickElement = document.querySelector(".arrow-wrap");
const ipAddressDisplay = document.querySelector(".ip-address");
const locationRegionDisplay = document.querySelector(".location-region");
const locationCityDisplay = document.querySelector(".location-city");
const timeDisplay = document.querySelector(".time");
const ispDisplay = document.querySelector(".isp");


var map = L.map("map").setView([51.505, -0.09], 15);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);


let myOption = {
  iconUrl:'./images/icon-location.svg',
  iconSize:[30,40]
}

let myIcon =L.icon(myOption)
let markers = L.marker([51.505, -0.09],{icon:myIcon})
markers.addTo(map)


clickElement.addEventListener("click", () => {

var api_key = "at_BihrAczzpt0w10MxpdIuneJsKtUwU";
let val = element.value
let ip = val
$(function () {
  $.ajax({
    url: "https://geo.ipify.org/api/v1",
    data: { apiKey: api_key, domain: ip },
    success: function (data) {
      console.log(JSON.stringify(data, "", 2));
      locationCityDisplay.innerHTML = data.location.city;
      locationRegionDisplay.innerHTML = data.location.region;
      ipAddressDisplay.innerHTML = data.ip;
      ispDisplay.innerHTML = data.isp;
      timeDisplay.innerHTML = data.location.timezone;
      // console.log(data.location.lat);
      var locPalm = new L.LatLng(data.location.lat, data.location.lng);
      L.marker([data.location.lat,data.location.lng],{icon:myIcon}).addTo(map)
      map.setView(locPalm, map.getZoom());
      
      
    },
  });

});


 
});
element.addEventListener('keydown',(event)=>{
  if(event.keyCode ===13){
    console.log('yes')
    clickElement.click()

  }
})

