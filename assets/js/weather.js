let apiKey = 'b953fd1506cd776c7f6b755564e6c8af';
let searchCity = document.querySelector('#search-city');
let searchForm = document.querySelector('.search-form');
let searched = document.querySelector("#city-date");
let currentDate = document.querySelector('.today');

let searchCurrentCity = function(event) {
    event.preventDefault();
let cityName = searchCity.value.trim();

if (cityName) {
    searched.textContent = cityName
    currentDate.textContent = moment(new Date()).format("MM/DD/YYYY");
    searchCity.value = "";
    getCurrentWeather(cityName);
} else {
    ('Please enter a valid city name');
}
console.log(event);
};

searchForm.addEventListener("submit", searchCurrentCity);

function getCurrentWeather(city) {
       let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=` + city + `&appid=b953fd1506cd776c7f6b755564e6c8af&units=imperial`;
       
       fetch(apiUrl).then(function(response) {
       response.json().then(function(data) {
       console.log(data,city);

       $("#current-temp").text(data.main.temp);
       $("#wind").text(data.wind.speed);
       $("#Humidity").text(data.main.humidity);
       });
    })}


