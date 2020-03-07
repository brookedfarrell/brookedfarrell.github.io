const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
    .then(function(response) {
    //console.log(response);
    return response.json();
    })
    .then(function (jsonObject){
        console.table(jsonObject); //temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];
    
        prophets.forEach(prophet =>  {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
           
            let bday = document.createElement('bday');
            let bplace = document.createElement('bplace');
            let img = document.createElement('img');

            let fullname= `${prophet.name} ${prophet.lastname}`;       

            h2.textContent = fullname;
            bday.textContent=  `Date of Birth: ${prophet.birthdate}`;
            bplace.textContent= `Birthplace: ${prophet.birthplace}`;
           
            img.setAttribute('src', prophet.imageurl);
            img.setAttribute('alt', fullname)
           
            
        
            card.appendChild(h2);
            card.appendChild(bday);
            card.appendChild(bplace);
            card.appendChild(img);

            
            

       
            document.querySelector('.cards').appendChild(card);
    });
});

//const prophets = jsonObject['prophets'];