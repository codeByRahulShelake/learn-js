
let inputValue = document.querySelector('.city-input')
inputValue.addEventListener('change',(event) => {
    event.preventDefault()
    let city = inputValue.value

    inputValue.value = ''

    getCityWeather(city)
})

function getCityWeather(city){
    console.log(city);
    
    const apiKey = "3c723d02147517b1cbc3315b6d3a7062"; // api key
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    let today = new Date()


    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.cod === '200') {
            document.querySelector('.cityName').innerHTML = `${city} City Weather`
            document.querySelector('.temp').innerHTML = `${data.list[0].main.temp} °C`
            document.querySelector('.description').innerHTML = `${data.list[0].weather[0].description}`
            document.querySelector('.windHumidity').innerHTML = `Humidity: ${data.list[0].main.humidity}% | Wind Speed: ${data.list[0].wind.speed * 3.6} km/h`

            let sumHumidity = 0
            let intervalCount = 0
            let days = 0
            
            // Select all elements with class "day" within the "forecast" div
        const newDays = document.querySelectorAll('.forecast .day');

        // Loop through and remove each "day" element
        newDays.forEach(day => day.remove());


            for (const element of data.list) 
            {
                intervalCount++
                let jsonDateStr = element.dt_txt;
                let jsonDate = new Date(jsonDateStr.replace(" ", "T"));
                let weatherDesc = element.weather[0].description
                if(datesAreEqual(jsonDate, today))
                {
                    sumHumidity = sumHumidity  + element.main.humidity
                    weatherDesc = element.weather[0].description
                }
                else 
                {
                    days++
                    let humidity = sumHumidity / intervalCount
                    intervalCount = 0
                    sumHumidity = 0
                    let newDiv = document.createElement('div')
                    newDiv.className = 'day'
                    let icon  = getWeatherIcon(weatherDesc)
                    let date
                    if(days == 1)
                    {
                        date = `<p>Today</p>`
                    }
                    else{
                        date = `<p>${jsonDate.toLocaleDateString()}</p>`
                    }
                    
                    newDiv.innerHTML = `
                    ${date}
                    ${icon}
                    <p class="humidity">Humidity: ${humidity}%</p>
                    `
                    document.querySelector('.forecast').appendChild(newDiv)
                    today.setDate(today.getDate() + 1)
                }
            }
        } else {
            // If city is not found
            alert(`${city} City not found`);
        }
    })
    .catch(error => {
        console.log('Error:');
    });
            
}

function datesAreEqual(jasonDate, today){
    return (
        jasonDate.getFullYear() === today.getFullYear() &&
        jasonDate.getMonth() === today.getMonth() && // Months are 0-indexed
        jasonDate.getDate() === today.getDate()
    );
}

function getWeatherIcon(description) {
let icon;

switch (description) {
    case "clear sky":
    case "sunny":
    icon = '<i class="fas fa-sun"></i>';
    break;

    case "partly cloudy":
    case "scattered clouds":
    icon = '<i class="fas fa-cloud-sun"></i>';
    break;

    case "overcast":
    case "broken clouds":
    case "overcast clouds":
    icon = '<i class="fas fa-cloud"></i>';
    break;

    case "light rain":
    case "moderate rain":
    case "heavy rain":
    case "showers":
    icon = '<i class="fas fa-cloud-rain"></i>';
    break;

    case "thunderstorm":
    case "lightning":
    icon = '<i class="fas fa-bolt"></i>';
    break;

    case "light snow":
    case "heavy snow":
    case "snow showers":
    icon = '<i class="fas fa-snowflake"></i>';
    break;

    case "mist":
    case "haze":
    case "fog":
    icon = '<i class="fas fa-smog"></i>';
    break;

    default:
    icon = '<i class="fas fa-question"></i>'; // Default icon
    break;
}

return icon;
}




 // Function to get the user's location (latitude and longitude)
 function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } 
    }

    // Function to handle success in retrieving location
    function showPosition(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const coords = `${latitude}, ${longitude}`;

        // Log coordinates to console for debugging
        console.log('Coordinates:', coords);

        // Now, we will use a reverse geocoding API to convert coordinates into a city name
        reverseGeocode(latitude, longitude);
    }

    
    // Function to reverse geocode the latitude and longitude to get city name
    function reverseGeocode(latitude, longitude) {
        const apiKey = '13c78181b46141b49f68d6e4fcf4385c'; // Replace with your geocoding API key (OpenCage, Google Maps, etc.)
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}&language=en&pretty=1`;

        // Log URL for debugging
        console.log('Request URL:', url);

        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Log the entire response to the console
                console.log('Geocoding Response:', data);

                if (data.results && data.results[0]) {
                    const city = data.results[0].components.city ;
                    getCityWeather(city)
                } 
            })
            .catch(error => {
                console.error('Error in reverse geocoding:', error);
                document.getElementById("location").innerHTML = "Error retrieving location data.";
            });
    }

    // Call getLocation function when the page loads
    window.onload = function() {
        getLocation();
    }