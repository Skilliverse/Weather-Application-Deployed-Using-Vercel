async function searchWeather() {
    const city = document.getElementById('search').value;
    const apiKey = '567979c61ebf191c0b3711e96b3e1fca';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      document.getElementById('location').textContent = `Location: ${data.name}`;
      document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
      document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
      document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
      document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }
  