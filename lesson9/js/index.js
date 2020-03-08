const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function (jsonObject){
        //console.table(jsonObject);
        const towns= jsonObject['towns'];

        for (let i= 0; i < towns.length; i++ ){
        if (towns[i].name == "Fish Haven" ||  towns[i].name == "Soda Springs" || towns[i].name == "Preston"){
          
            let card= document.createElement('section');
            let h2 = document.createElement('h2');
            let motto= document.createElement('motto');
            let year= document.createElement('year');
            let pop= document.createElement('pop');
            let fall= document.createElement('fall');
            let img= document.createElement('img');

            

            h2.textContent= towns[i].name;
            motto.textContent= '"' + towns[i].motto + '"';
            year.textContent= 'Year Founded: ' + towns[i].yearFounded;
            pop.textContent= 'Population: ' + towns[i].currentPopulation;
            fall.textContent= 'Annual Rainfall: ' + towns[i].averageRainfall + '"';

          img.setAttribute('src', "images/");
          img.setAttribute('alt', towns[i].photo) ;
           
            card.appendChild(h2);
            card.appendChild(motto);
            card.appendChild(year);
            card.appendChild(pop);
            card.appendChild(fall);
            card.appendChild(img);

            document.querySelector('.cards').appendChild(card);
            } 
        }

    });