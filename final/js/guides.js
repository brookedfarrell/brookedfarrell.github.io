const requestURL = "https://brookedfarrell.github.io/final/data/guides.json";
fetch(requestURL)
    .then(function(response) {
        //console.log(response);
        return response.json();
    })
    .then(function (jsonObject){
        //console.table(jsonObject);
        const guides = jsonObject['guides'];

        guides.forEach(guide => {

            let card = document.createElement('section');
            let h3 = document.createElement('h3');

            let years = document.createElement('years');
            let experience = document.createElement('experience');
            let bio = document.createElement('bio');
            let img = document.createElement('img');

            h3.textContent = `${guide.name}`;
            years.textContent = `Years Guiding: ${guide.years}`;
            experience.textContent = `Experience Level: ${guide.experience}`;
            bio.textContent = `${guide.bio}`;

            img.setAttribute('src', guide.imageurl);
            img.setAttribute('alt', guide.name);

            card.appendChild(h3);
            card.appendChild(years);
            card.appendChild(experience);
            card.appendChild(bio);
            card.appendChild(img);

           

            document.querySelector('.cards').appendChild(card);

        });
    });