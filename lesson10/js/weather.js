const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=b8742c188920a878864d65320f0abb62';
fetch (apiURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);

    const weather = jsObject['weather'];

    let summary= document.createElement('section');
   
    let temp = document.createElement('temp');
    let humidity= document.createElement('humidity');
    let windSpeed = document.createElement('windSpeed');

    
    temp.textContent= `Temp: ${weather.main.temp}&deg; F`;
    humidity.textContent = `Humidity ${weather.main.humidity}`;
    windSpeed.textContent = `Wind Speed: ${weather.wind.speed} MPH`;

    summary.appendChild(temp);
    summary.appendChild(humidity);
    summary.appendChild(windSpeed);

    document.querySelector('.summary').appendChild(summary);


    

});
