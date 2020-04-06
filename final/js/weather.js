let apiURL = 'https://api.openweathermap.org/data/2.5/weather?zip=83549,us&units=imperial&APPID=b8742c188920a878864d65320f0abb62';
fetch(apiURL)
.then((response)=> response.json())
.then((jsObject)=>{
    console.log(jsObject);

    const main= jsObject['main'];
    const wind= jsObject['wind'];
    const weather= jsObject['weather'];
   

    let summary= document.createElement('section');
    let h2= document.createElement('h2');

    let currently= document.createElement('p');
    let temp= document.createElement('p');
    let humidity= document.createElement('p');
    let windSpeed= document.createElement('p');
    
   

    h2.textContent= `Weather Summary`;
    currently.textContent= `Currently: ${weather[0].main}`;
    temp.textContent= `Temp: ${main.temp}° F`;
    humidity.textContent= `Humidity: ${main.humidity}%`;
    windSpeed.textContent= `Wind Speed: ${wind.speed} MPH`;

   

    summary.appendChild(h2);
    summary.appendChild(currently);
    summary.appendChild(temp);
    summary.appendChild(humidity);
    summary.appendChild(windSpeed);

    document.querySelector('.summary').appendChild(summary);

});