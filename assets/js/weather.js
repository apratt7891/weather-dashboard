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
       

       
       $("#current-temp").text("Temp: " + data.main.temp + "°F");
       $("#wind").text("Wind: " + data.wind.speed + "mph");
       $("#Humidity").text("Humidity: " + data.main.humidity + "%");


       })})}

function fiveDay(city) {
        let fiveDayUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=b953fd1506cd776c7f6b755564e6c8af&units=imperial';
        fetch(fiveDayUrl).then(function(response) {
            response.json().then(function(data) {
            console.log(data,city);
            });
        })}