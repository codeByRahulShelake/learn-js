
let inputValue = document.querySelector('.city-input')
inputValue.addEventListener('change',(event) => {
    event.preventDefault()
    let city = inputValue.value

    inputValue.value = ''

    getCityWeather(city)
})

let weatherCity 
function getCityWeather(city = 'Pune'){
    weatherCity = city
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
            let wind = (data.list[0].wind.speed * 3.6).toFixed(2);
            document.querySelector('.windHumidity').innerHTML = `Humidity: ${data.list[0].main.humidity}% | Wind Speed: ${wind} km/h`
            
            setInterval(() => {
                getCityTime(city)
            },1000)
            

            // Select all elements with class "day" within the "forecast" div
            const newHours = document.querySelectorAll('.weather-container .weather-hour');

            // Loop through and remove each "day" element
            newHours.forEach(hour => hour.remove());
            
            for (const element of data.list) {

                let jsonDateStr = element.dt_txt;
                let jsonDate = new Date(jsonDateStr.replace(" ", "T"));
                if(datesAreEqual(jsonDate, today))
                {   
                    let newDiv = document.createElement('div')
                    newDiv.className = 'weather-hour'
                    let time = jsonDate.getHours()
                    let icon = getWeatherHourIcon(time)
                    let secondTime = time +3
                    let weather = `${element.main.temp} °C`
                    if(time > 12)
                        { 
                            time = (time - 12)+' PM'
                        }else{
                            if (time == 12)
                                time = 12 +' PM'
                            else if(time == 0)
                                time = 12 +' AM'
                            else
                                time = (time)+' AM'
                            
                            if(time == 0)
                                time = 12 +' AM'
                        }
                        if(secondTime > 12)
                        {
                            if (secondTime == 24)
                                secondTime = 12 +' AM'
                            else
                                secondTime = (secondTime - 12)+' PM'
                        }
                        else{
                            if (secondTime == 12)
                                secondTime = 12 +' PM'
                            else
                            secondTime = (secondTime)+' AM'
                        }

                    newDiv.innerHTML = `
                        <p>${time} to ${secondTime}</p>
                        ${icon}
                        <p>${weather}</p>`
                        
                    document.querySelector('.weather-container').appendChild(newDiv)
                        
                }
            }

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
                    let humidity = (sumHumidity / intervalCount).toFixed(2);
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
            console.log(city);
        }
    })
    .catch(error => {
        console.log('Error:');
    });
        
}

async function getCityTime(city) {
    const geocodingApiKey = '13c78181b46141b49f68d6e4fcf4385c';
    const timezoneApiKey = 'FBT7Y0FQ7NRW';

    const geocodingUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(city)}&key=${geocodingApiKey}`;

    try {
        const geoResponse = await fetch(geocodingUrl);
        const geoData = await geoResponse.json();

        if (geoData.results.length === 0) {
            throw new Error('City not found.');
        }

        const { lat, lng } = geoData.results[0].geometry;

        const timezoneUrl = `http://api.timezonedb.com/v2.1/get-time-zone?key=${timezoneApiKey}&format=json&by=position&lat=${lat}&lng=${lng}`;
        const tzResponse = await fetch(timezoneUrl);
        const tzData = await tzResponse.json();

        if (tzData.status !== 'OK') {
            throw new Error(tzData.message);
        }

        const cityTime = new Date(tzData.formatted);
        const timeString = cityTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }); // Add AM/PM format
        document.querySelector('.city-time').innerHTML = `${timeString}`;
    } catch (error) {
        console.error('Error fetching time:', error.message);
    }
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


function getWeatherHourIcon(time) {
    let icon;

    switch (time) {
        case 0:
        case 3:
            icon = '<i class="fas fa-moon"></i>'; // Cloudy moon for night
            break;

        case 6:
            icon = '<i class="fas fa-cloud-sun"></i>'; // Cloudy sun for morning
            break;

        case 9:
            icon = '<i class="fas fa-sun"></i>'; // Sun icon for morning
            break;

        case 12:
            icon = '<i class="fas fa-sun"></i>'; // Cloudy sun for afternoon
            break;

        case 15:
            icon = '<i class="fas fa-sun"></i>'; // Sun icon for noon
            break;

        case 18:
            icon = '<i class="fas fa-cloud-sun"></i>'; // Cloud icon for evening
            break;

        case 21:
            icon = '<i class="fas fa-cloud-moon"></i>'; // Cloudy moon for night
            break;

        default:
            icon = '<i class="fas fa-question-circle"></i>'; // Default icon if time range doesn't match
            break;
    }

    return icon;
}

let weatherHourForecast = document.querySelector('.forecast');

weatherHourForecast.addEventListener('click', (e) => {
    let clickedDate;

    // Check if the clicked element is a <P> or <I> tag
    if (e.target.tagName === 'P' || e.target.tagName === 'I') {
        let clickedDiv = e.target.parentNode;

        // Access the first <p> element inside .day to get the date
        const dateElement = clickedDiv.querySelector('p:first-child');
        clickedDate = dateElement.textContent;
    }
    
    // If the clicked element is a <DIV>
    if(e.target.tagName === 'DIV') {
        let clickedDiv = e.target;
        console.log(clickedDiv);

        // Access the first <p> element inside .day to get the date
        const dateElement = clickedDiv.querySelector('p:first-child');
        clickedDate = dateElement.textContent;
    }

    if(clickedDate === 'Today')
    {
        clickedDate = new Date()
    }
    else {
        // Split the clicked date to extract month, day, and year
            const [month, day, year] = clickedDate.split("/").map(Number);

            // Create a new Date object for the clicked date
            clickedDate = new Date(year, month - 1, day);  // Months are 0-indexed
    }

    const newHours = document.querySelectorAll('.weather-container .weather-hour');
    // Loop through and remove each "weather-hour" element
    newHours.forEach(hour => hour.remove());

    const apiKey = "3c723d02147517b1cbc3315b6d3a7062";  // API key
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${weatherCity}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        // Loop through the forecast data
        for (const element of data.list) {
            let jsonDateStr = element.dt_txt;
            let jsonDate = new Date(jsonDateStr.replace(" ", "T"));

            // Compare both dates using the datesAreEqual function
            if(datesAreEqual(jsonDate, clickedDate)) {
                let newDiv = document.createElement('div')
                    newDiv.className = 'weather-hour'
                    let time = jsonDate.getHours()
                    let icon = getWeatherHourIcon(time)
                    let secondTime = time +3
                    let weather = `${element.main.temp} °C`
                    if(time > 12)
                    { 
                        time = (time - 12)+' PM'
                    }else{
                        if (time == 12)
                            time = 12 +' PM'
                        else if(time == 0)
                            time = 12 +' AM'
                        else
                            time = (time)+' AM'
                        
                        if(time == 0)
                            time = 12 +' AM'
                    }
                    if(secondTime > 12)
                    {
                        if (secondTime == 24)
                            secondTime = 12 +' AM'
                        else
                            secondTime = (secondTime - 12)+' PM'
                    }
                    else{
                        if (secondTime == 12)
                            secondTime = 12 +' PM'
                        else
                        secondTime = (secondTime)+' AM'
                    }

                    newDiv.innerHTML = `
                        <p>${time} to ${secondTime}</p>
                        ${icon}
                        <p>${weather}</p>`
                        
                    document.querySelector('.weather-container').appendChild(newDiv)
                        
            }
        }
    })
    .catch(error => {
        console.log('Error:', error);
    });
});


 
 // Function to get the user's location (latitude and longitude)
 function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.error('Geolocation is not supported by this browser.');
        getCityWeather('Pune'); // Default to Pune if geolocation fails
    }
}

// Function to handle success in retrieving location
function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coords = `${latitude}, ${longitude}`;

    // Log coordinates to console 
    console.log('Coordinates:', coords);

    // Now, we will use a reverse geocoding API to convert coordinates into a city name
    reverseGeocode(latitude, longitude);
}


// Function to reverse geocode the latitude and longitude to get city name
function reverseGeocode(latitude, longitude) {
    const apiKey = '13c78181b46141b49f68d6e4fcf4385c'; //api key
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}&language=en&pretty=1`;

    // Log URL
    console.log('Request URL:', url);

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Log the entire response to the console
            console.log('Geocoding Response:', data);

            if (data.results && data.results[0]) {
                const city = data.results[0].components.city || 'Pune'; // Fallback to Pune if city is not found
                getCityWeather(city);
            } else {
                console.error('No results from geocoding. Defaulting to Pune.');
                getCityWeather('Pune');
            }
        })
        .catch(error => {
            console.error('Error in reverse geocoding:', error);
            document.getElementById("location").innerHTML = "Error retrieving location data.";
            getCityWeather('Pune')
        });
}

// Call getLocation function when the page loads
window.onload = function() {
    getLocation();
    }