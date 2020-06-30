
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal  
 span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//WEATHER ELEMENT SELECTION
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

//App Data
const weather = {};

weather.temperature = {
    unit : "celsius"
}

//APP CONST AND VAR
const KELVIN = 273;

//GET WEATHER FROM API PROVIDER
let api = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=58f7d7efc511295e668e8a970f146c5a';
    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
            // console.log(data);
        })
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function(){
            displayWeather();
        })
        .catch(err=>console.log(err));

//DISPLAY WEATHER TO UI
function displayWeather(){
    iconElement.innerHTML = `<img src="${weather.iconID}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}<sup>0</sup><span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}

 