let currentCity = "";
let API = 'b953fd1506cd776c7f6b755564e6c8af';




$(document).ready(function () {

    $(".searchBtn").on("click", function() {
    let searchCity = $("#search-city").val();
    currentCity =  $("#search-city").val();
    let weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=" + API;
    fetch(weatherURL)
    .then(function(response) {
        return response.json();
    })
    })
})






