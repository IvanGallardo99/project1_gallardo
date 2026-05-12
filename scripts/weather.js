const weather = document.getElementById("weather");

fetch("https://api.open-meteo.com/v1/forecast?latitude=35.22&longitude=-101.83&current_weather=true")
    .then(response => response.json())
    .then(data => {
        const temp = (data.current_weather.temperature * 9 / 5) + 32;
        const wind = data.current_weather.windspeed;

        weather.innerHTML =
            "Temperature: " + temp.toFixed(1) + "&deg;F";
    })
    .catch(() => {
        weather.textContent = "Unable to load weather data.";
    });