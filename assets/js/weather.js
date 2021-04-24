let apiKey = 'b953fd1506cd776c7f6b755564e6c8af';
let searchCity = $("#search-city");


$(".searchBtn").on("click", function(event) {
   event.preventDefault();
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + searchCity + '&units=imperial&appid=' + apiKey)
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
   
let searchCity = document.querySelector('#search-city').value;
localStorage.setItem('city', JSON.stringify(searchCity));

let currentCityTempEl = document.querySelector('#current-temp')
currentCityTempEl.textContent = 'Current Temperature :' + response.maintemp + '°F';

let currentCityWindEl = document.querySelector('#wind')
currentCityWindEl.textContent = 'Wind :' + response + 'MPH';

let currentCityHumidiyEl = document.querySelector('#Humidity')
currentCityHumidiyEl.textContent = 'Humidity: ' + response + '%';

})})
