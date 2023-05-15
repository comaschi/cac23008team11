let temperature = document.querySelector(".temp")
let summary = document.querySelector(".summary")
let loc = document.querySelector(".location")
const kelvin = 273.15;
window.addEventListener("load", () => {

    // coordenadas del lago lacar
    // -40.16662729703485, -71.35755097305004

    // id Api 
    const api_id = "6fa7c7e6255aa4bd0fa11d732da3b59c";
    const url_base = `https://api.openweathermap.org/data/2.5/weather?lat=-40.16662729703485&lon=-71.35755097305004&appid=91218df68e8baf7c2374caa9ce61e6d4`

    fetch(url_base)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            temperature.textContent = Math.floor(data.main.temp - kelvin) + "°C";
            summary.textContent = data.weather[0].description;
            loc.textContent = data.name + "," + data.sys.country;
        });
});
