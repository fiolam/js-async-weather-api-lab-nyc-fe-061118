const API_KEY = "5357d0ee7dd6ec614e764228b9249e29"
const BASE_URL='https://api.openweathermap.org/data/2.5/weather?'

function handleFormSubmit(event){
  event.preventDefault();
  let city =document.getElementById("city").value
  getWeatherFromApi(city)
}
function getWeatherFromApi(city) {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + API_KEY + "&units=imperial")
  .then(response => response.json())
  .then(displayWeather)
}
function displayWeather(weatherJson){
  let temp = weatherJson.main.temp
  let tempRow = document.getElementById("temp")
  tempRow.innerHTML = temp

  let temp_min = weatherJson.main.temp_min
  let temp_minRow = document.getElementById("low")
  temp_minRow.innerHTML = temp_min
  
  let temp_max =weatherJson.main.temp_max
  let temp_maxRow =document.getElementById("high")
  temp_maxRow.innerHTML = temp_max
  
  let humidity = weatherJson.main.humidity
  let humidityRow = document.getElementById("humidity")
  humidityRow.innerHTML = humidity
  let tempClouds = weatherJson.weather.clouds.all
  let tempCloudsRow = document.getElementById("clouds")
  tempCloudsRow.innerHTML = clouds
  
}
document.addEventListener('DOMContentLoaded', function() {
  //add event listener here for form submission
let cityForm =document.getElementById("cityForm");
cityForm.addEventListener("submit", handleFormSubmit)
})
