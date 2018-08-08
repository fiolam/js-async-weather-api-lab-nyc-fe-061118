const API_KEY = "5357d0ee7dd6ec614e764228b9249e29"
const BASE_URL='https://api.openweathermap.org/data/2.5/weather?'

function handleFormSubmit(event){
  event.preventDefault();
  let city =document.getElementById("city").value
  getWeatherFromApi(city)
}

  //next i need to send a qeb request to this url : api.openweathermap.org/data/2.5/weather?q=London
  //i need to substitute london with another city
//}


function getWeatherFromApi(city) {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + API_KEY + "&units=imperial")
  .then(response => response.json())
  .then(displayWeather)
}
function displayWeather(weatherJson){

  let temp = weatherJson.main.temp
  let tempRow = document.getElementById("temp")
  temp.Row.innerHTML = temp
}


document.addEventListener('DOMContentLoaded', function() {
  //add event listener here for form submission
let cityForm =document.getElementById("cityForm");
cityForm.addEventListener("submit", handleFormSubmit)
})
