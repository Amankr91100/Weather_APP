const inputBox = document.querySelector('.input-box')
const searchBtn = document.querySelector('#searchBtn')
const weatherImg = document.querySelector('.weather-img')
const temp= document.querySelector('.temp')
const climate = document.querySelector('.climate')
const humidity = document.querySelector('#humidity')
const windSpeed = document.querySelector('#wind-speed')
const locationNotFound = document.querySelector('.location-not-found')
const weatherBody = document.querySelector('.weather-body')

 async function checkWeather(city){
    const api_key = '1be260e56827566d4f10341f91d16898';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
   
    const response = await fetch(`${url}`);
    const weather_data = await response.json()
    console.log(weather_data);
   

    if(weather_data.cod === '404'){
        locationNotFound.style.display = 'flex'; 
        weatherBody.style.display = 'none';
        console.log('error');
        return;
    }
        weatherBody.style.display = 'flex';
        locationNotFound.style.display = 'none';
        
   
    temp.innerHTML = `${Math.floor(weather_data.main.temp-273.15)}<sup>o</sup>C`;
    climate.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    windSpeed.innerHTML = `${weather_data.wind.speed}km/h`;

    switch(weather_data.weather[0].main){
        case 'Clouds': weatherImg.src = "/assets/cloud.png"
        break;
        case 'Clear': weatherImg.src="/assets/clear.png";
        break;
        case 'Rain': weatherImg.src="/assets/rain.png";
        break;
        case 'Mist': weatherImg.src="/assets/mist.png";
        break;
        case 'Snow': weatherImg.src="/assets/snow.png";
        break;
    }  
}


searchBtn.addEventListener('click',function(){

    checkWeather(inputBox.value);
})


