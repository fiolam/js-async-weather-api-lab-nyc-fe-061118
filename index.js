const API_KEY = "YOUR API KEY"
const BASE_URL= 'https://api.openweathermap.org/data/2.5/weather?'

function handleFormSubmit (event) {
  let city =document.getElementById("city").value
  getWeatherFromApi(city)
}

  //next i need to send a qeb request to this url : api.openweathermap.org/data/2.5/weather?q=London
  //i need to substitute london with another city
}


function getTheWeatherFromApi(city) {
  fetch("https://api.openweathermap.org/data/2.5/weather?" + city)
}



document.addEventListener('DOMContentLoaded', function() {
  //add event listener here for form submission
let cityForm =document.getElementById("cityForm");
cityForm.addEventListener("submit", HanndleFormSubmit)
})