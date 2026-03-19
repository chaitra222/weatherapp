const apiKey = "232353696c0df7f3d6dbda689a2fc3ed";

function getWeather() {
    const city = document.getElementById("cityInput").value;
    const error = document.getElementById("error");

    if (city === "") {
        error.innerText = "Please enter a city name";
        return;
    }

    error.innerText = "";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                error.innerText = "City not found";
                return;
            }

            document.getElementById("city").innerText = data.name;
            document.getElementById("temp").innerText = `🌡 Temperature: ${data.main.temp} °C`;
            document.getElementById("condition").innerText = `☁ Condition: ${data.weather[0].main}`;
            document.getElementById("humidity").innerText = `💧 Humidity: ${data.main.humidity}%`;
            document.getElementById("wind").innerText = `🌬 Wind: ${data.wind.speed} m/s`;
        })
        .catch(() => {
            error.innerText = "Something went wrong";
        });
}
