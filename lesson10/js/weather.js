let apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=b8742c188920a878864d65320f0abb62';
fetch (apiURL)
.then((response) => response.json())
.then((jsObject) => {
    //console.log(jsObject);

    const main = jsObject['main'];
    const wind = jsObject['wind'];
    const weather = jsObject['weather'];

    let summary= document.createElement('section');
    let h2 = document.createElement('h3');

    let currently = document.createElement('p');
    let temp = document.createElement('p');
    let humidity= document.createElement('p');
    let windSpeed = document.createElement('p');
    let windchill= 35.74 + (0.6215 * temp)-(35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));
    

    h2.textContent= `Weather Summary`;
    currently.textContent= `Currently: ${weather[0].main}`;
    temp.textContent= `Temp: ${main.temp}° F`;
    humidity.textContent = `Humidity: ${main.humidity}%`;
    windSpeed.textContent = `Wind Speed: ${wind.speed} MPH`;
    windchill.textContent= `Wind Chill: `;
       

    summary.appendChild(h2);
    summary.appendChild(currently);
    summary.appendChild(temp);
    summary.appendChild(humidity);
    summary.appendChild(windSpeed);
    summary.appendChild(windchill);
    

    document.querySelector('.summary').appendChild(summary);

    
    

});

 apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=b8742c188920a878864d65320f0abb62';
fetch (apiURL)
.then((response) => response.json())
.then((jsObject) => {
    //console.log(jsObject);
    const weekday = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    const fivedayforecast = jsObject.list.filter (x => x.dt_txt.includes ('18:00:00'));
        //console.log(fivedayforecast);
    
        let forecastUl = document.getElementById('forecastUl');
        let content = "";
        for (const item of fivedayforecast) {
            const dow = new Date(item.dt_txt);

            content += `<li>
                        ${weekday[dow.getDay()]}                                             
                        <img class= "wicon" src="https://openweathermap.org/img/w/${item.weather[0].icon}.png" alt ="">
                                               
                        ${item.main.temp}°F
                        </li>`;
            
        }
        forecastUl.innerHTML = content;

});