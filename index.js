const API_KEY = "YOUR API KEY"
const API_URL= "http://api.openweathermap.org/data/2.5/weather?"

function handleFormSubmit(event) {
  alert("thanks for submitting the form")
  debugger;
  //next i need to send a qeb request to this url : api.openweathermap.org/data/2.5/weather?q=London
  //i need to substitute london with another city
}

function fetchCurrentWeather(city) {
  //fetch current weather based on city
}

function displayCurrentWeather(json) {
  //render current weather data to the DOM using provided IDs and json from API
}


function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
}

function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
}

document.addEventListener('DOMContentLoaded', function() {
  //add event listener here for form submission
let cityForm =document.getElementById("cityForm");
cityForm.addEventListener("submit", HanndleFormSubmit)
})