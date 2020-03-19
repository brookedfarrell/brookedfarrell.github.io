const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function (jsonObject){
        //console.table(jsonObject);
        const towns = jsonObject['towns'];

        for (let i= 0; i < towns.length; i++){
            if (towns[i].name == "Fish Haven"){
                let calendar = document.createElement('calendar');
                let h2 = document.createElement('h2');
                let event1 = document.createElement('p');
                let event2= document.createElement('p');
                let event3 = document.createElement('p');
                

                h2.textContent= 'Upcoming Events';
                event1.textContent = towns[i].events[0];
                event2.textContent = towns[i].events[1];
                event3.textContent= towns[i].events[2];

                calendar.appendChild(h2);
                calendar.appendChild(event1);
                calendar.appendChild(event2);
                calendar.appendChild(event3);

                document.querySelector('.calendar').appendChild(calendar)
            }
        }
    });