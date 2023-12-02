function searchWeather() {
    const locationInput = document.getElementById('locationInput');
    const cityName = locationInput.value;

    const apiKey = 'c143a0179deec5064ed72df015c30c1c';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('City not found');
            } else {
                updateWeatherInfo(data);
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function updateWeatherInfo(data) {
    const weatherName = document.getElementById('weatherName');
    const weatherCountry = document.getElementById('weatherCountry');
    const weatherTem = document.getElementById('weatherTem');
    const weatherTem_min = document.getElementById('weatherTem_min');
    const weatherTem_max = document.getElementById('weatherTem_max');
    const weatherHum = document.getElementById('weatherHum');
    const weatherWind_speed = document.getElementById('weatherWind_speed');

    weatherName.innerText = `City: ${data.name}`;
    weatherCountry.innerText = `Country: ${data.sys.country}`;
    weatherTem.innerText = `Temperature: ${data.main.temp} ℉`;
    weatherTem_min.innerText = `Min Temperature: ${data.main.temp_min} ℉`;
    weatherTem_max.innerText = `Max Temperature: ${data.main.temp_max} ℉`;
    weatherHum.innerText = `Humidity: ${data.main.humidity} %`;
    weatherWind_speed.innerText = `Wind Speed: ${data.wind.speed} m/s`;

    const images = document.querySelectorAll('.box2 img');
    images.forEach(img => {
        img.style.display = 'block';
    });
} 
