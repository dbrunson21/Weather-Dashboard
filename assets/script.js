var APIkey = "ee034ec3b950f3aea2b5e988f1cfd6d4";

//function for city input with current weather
function getWeather(city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey + "&units=imperial")
        .then(function (response) {
            console.log(response)
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            //data for current weather
            getForcast(data.coord.lat, data.coord.lon)
            document.querySelector("#cityname").textContent = data.name + " (" + new Date(data.dt * 1000).toLocaleDateString() + ")"
            document.querySelector("#temp").textContent = "Temperature: " + data.main.temp + " F";
            document.querySelector("#wind").textContent = "Wind: " + data.wind.speed + " MPH";
            document.querySelector("#humidity").textContent = "Humidity: " + data.main.humidity + " %";
        })

}

//display city on page

//function for latitude and longitude for 5 day forcasts
function getForcast(lat, lon) {
    fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIkey + "&units=imperial")
        .then(function (response) {
            console.log(response)
            return response.json()
        })
        .then(function (data) {
            console.log(data)

            //data for 5 day forcast
            for (let i = 0; i < data.list.length; i++) {
                const element = data.list[i];
                if (element.dt_txt.includes("12:00:00")) {
                    console.log(element)
                    var temp = document.createElement("p")
                    temp.textContent = element.main.temp
                    document.querySelector(".forcast").append(temp)
                    var speed = document.createElement("p")
                    speed.textContent = element.main.speed
                    document.querySelector(".forcast").append(humidity)
                    var humidity = document.createElement("p")
                    humidity.textContent = element.main.humidity
                    document.querySelector(".forcast").append(humidity)
                    
                }

            }
        })
}

//Event Listener for button
var searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", function() {
    fetchData();
    
    //Make border appear around content after search is clicked
    var currentWeather = document.querySelector('.currentWeather')
    currentWeather.classList.add('border');
});

function fetchData() {
    var searchInput = document.getElementById("search")
    console.log(searchInput.value)
    getWeather(searchInput.value)
}