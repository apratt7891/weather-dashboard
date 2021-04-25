let searchButton = $(".searchButton");

let myApiKey = "b953fd1506cd776c7f6b755564e6c8af";

/* Forloop for data onto HMTL page */
for (var i = 0; i < localStorage.length; i++) {

    let city = localStorage.getItem(i);
    
    let cityName = $(".list-group").addClass("list-group-item");

    cityName.append("<li>" + city + "</li>");
}

let count = 0;
/* Search button for both current weather and 5 day */
searchButton.click(function () {

    let searchInput = $(".searchInput").val();

    /* current weather API call */
    let currentDay = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&Appid=" + myApiKey + "&units=imperial";
    /* 5 day forecast API call */
    let fiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchInput + "&Appid=" + myApiKey + "&units=imperial";


    if (searchInput == "") {
    } else {
        $.ajax({
            url: currentDay,
            method: "GET"
        }).then(function (response) {
            /* add text to list group*/
            
            let cityName = $(".list-group").addClass("list-group-item");
            cityName.append("<li>" + response.name + "</li>");
            
            let local = localStorage.setItem(count, response.name);
            count = count + 1;

            /* Current Weather append text */
            let currentWeather = $(".currentWeather").append("<div>").addClass("card-body");
            currentWeather.empty();
            let currentName = currentWeather.append("<p>");
            
            currentWeather.append(currentName);

            /* set Date, temp, humidity, wind */ 
            let timeUTC = new Date(response.dt * 1000);
            currentName.append(response.name + " " + timeUTC.toLocaleDateString("en-US"));
            currentName.append(`<img src="https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png">`);
            
            let currentTemp = currentName.append("<p>");
            
            currentName.append(currentTemp);
            currentTemp.append("<p>" + "Temperature: " + response.main.temp + "</p>");
            
            currentTemp.append("<p>" + "Humidity: " + response.main.humidity + "%" + "</p>");
           
            currentTemp.append("<p>" + "Wind: " + response.wind.speed + "</p>" + "mph");

            /* UV Index API call */
            let uvIndex = `https://api.openweathermap.org/data/2.5/uvi?appid=b8ecb570e32c2e5042581abd004b71bb&lat=${response.coord.lat}&lon=${response.coord.lon}`;

            
            $.ajax({
                url: uvIndex,
                method: "GET"
            }).then(function (response) {

                let currentUV = currentTemp.append("<p>" + "UV Index: " + response.value + "</p>").addClass("card-text");
                currentUV.addClass("UV");
                currentTemp.append(currentUV);

               
                
            });

        });

        /* 5-day forecast */
        $.ajax({
            url: fiveDay,
            method: "GET"
        }).then(function (response) {
            // Array for 5-days 
            let day = [0, 8, 16, 24, 32];
            let fiveDayCard = $(".fiveDayCard").addClass("card-body");
            let fiveDayDiv = $(".fiveDayOne").addClass("card-text");
            fiveDayDiv.empty();
            
            day.forEach(function (i) {
                let FiveDayTimeUTC1 = new Date(response.list[i].dt * 1000);
                FiveDayTimeUTC1 = FiveDayTimeUTC1.toLocaleDateString("en-US");

                fiveDayDiv.append("<div class=fiveDayColor>" + "<p>" + FiveDayTimeUTC1 + "</p>" + `<img src="https://openweathermap.org/img/wn/${response.list[i].weather[0].icon}@2x.png">` + "<p>" + "Temperature: " + response.list[i].main.temp + "</p>" + "<p>" + "Humidity: " + response.list[i].main.humidity + "%" + "</p>" + "</div>");


            })

        });
    }
});
