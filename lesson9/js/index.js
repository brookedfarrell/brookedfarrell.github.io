const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function(response){
        //console.log(response);
        return response.json();
    })
    .then(function(jsonObject){
        console.table(jsonObject);
        const towns = jsonObject['towns'];
        towns.forEach(town => {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            //let motto = document.createElement('motto');
            //let year = document.createElement('year');
           // let pop = document.createElement('pop');
            //let fall = document.createElement('fall');


            h2.textContent= `${name}`;
            //motto.textContent= `${motto}`;
            //year.textContent= `${yearFounded}`;
            //pop.textContent= `${currentPopulation}`;
            //fall.textContent= `${averageRainfall}`;

            card.appendChild(h2);
            //card.appendChild(motto);
            //card.appendChild(year);
            //card.appendChild(pop);
            //card.appendChild(fall);

            document.querySelector('.cards').appendChild(card);
        });
    });