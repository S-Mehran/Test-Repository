function showweatherDetails(event) {
    event.preventDefault(); // Prevents the form from reloading the page

    const city = document.getElementById('city').value.trim(); // Get user input
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const apiKey = '22727311f1c3550c593700e80e2be271'; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error("City not found");
        }
        return response.json();
    })
    .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                 <p>Temperature: ${data.main.temp} &#8451;</p>
                                 <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    });
}

// Attach the event listener correctly
document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
