const apiKey = '70b6dc136d49c6cbef27f17e0458281e';
const weatherInfoElement = document.getElementById('weather-info');

function getWeather() {
    const locationInput = document.getElementById('location');
    const location = locationInput.value;

    if (!location) {
        alert('Please enter a location.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}

function displayWeather(data) {
    const { name, main, weather } = data;

    const weatherInfo = `
        <h2>${name}</h2>
        <p>Temperature: ${main.temp} &#8451;</p>
        <p>Weather: ${weather[0].description}</p>
        <p>Humidity: ${main.humidity}%</p>
    `;

    weatherInfoElement.innerHTML = weatherInfo;
}
