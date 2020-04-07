const requestURL = "https://brookedfarrell.github.io/final/data/guides.json";
fetch(requestURL)
    .then(function(response) {
        console.log(response);
        return response.json();
    })
    .then(function (jsonObject){
        console.table(jsonObject);
        const guides = jsonObject["guides"];

        guides.forEach(guide => {

            let card = document.createElement('section');
            let h3 = document.createElement('h3');

            let years = document.createElement('years');
            let experience = document.createElement('experience');
            let bio = document.createElement('bio');

            h3.textContent = `${guides.name}`;
            years.textContent = `Years Guiding: ${guides.years}`;
            experience.textContent = `Experience Level: ${guides.experience}`;
            bio.textContent = `${guides.bio}`;

            card.appendChild(h3);
            card.appendChild(years);
            card.appendChild(experience);
            card.appendChild(bio);

            document.querySelector('.cards').appendChild(card);

        });
    });