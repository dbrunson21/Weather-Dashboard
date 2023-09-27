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
            getForcast(data.coord.lat, data.coord.lon)
            document.querySelector("#cityname").textContent = data.name
        })
}
getWeather("Denver")

//function for latitude and longitude for 5 day forcasts
function getForcast(lat, lon) {
    fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIkey + "&units=imperial")
        .then(function (response) {
            console.log(response)
            return response.json()
        })
        .then(function (data) {
            console.log(data.main)
        })
}

//Event Listener for button
var searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", fetchData);

function fetchData() {
    var searchInput = document.getElementById("searchInput") 
}