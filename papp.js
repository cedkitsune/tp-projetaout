// --------------------
// variables
// --------------------
const btn = document.querySelector(".btn");
const perso = document.querySelector(`#perso`);
 let url = `https://www.moogleapi.com/api/v1/characters/`

const api =fetch(url)
        .then(response => response.json())
        .then( data=> {
            data.map(hero => {
                let article = document.createElement(`article`);
                let img = document.createElement(`img`);
                let h2 = document.createElement(`h2`);
                let race = document.createElement(`div`);
                let age = document.createElement(`div`);
                let gender = document.createElement(`div`);
                let job = document.createElement(`div`);
                let origin = document.createElement(`div`);
                let description = document.createElement(`div`);

                race.setAttribute(`id`, `parution`);
                age.setAttribute(`id`, `console`);
                gender.setAttribute(`id`, `console`);
                job.setAttribute(`id`, `console`);
                origin.setAttribute(`id`, `console`);
                description.setAttribute(`id`, `console`);
                article.classList.add(`jeu`);
                img.setAttribute(`src`, `${hero.picture})}`);

                perso.append(article);
                article.append(img);
                article.append(h2);
                article.append(race);
                article.append(age);
                article.append(gender);
                article.append(job);
                article.append(origin);
                article.append(description);

                h2.textContent = `${hero.name}`;
                race.textContent = `Race: ${hero.race}`;
                age.textContent = `Age: ${hero.age}`;
                gender.textContent = `gender: ${hero.gender}`;
                job.textContent = `Class: ${hero.job}`;
                origin.textContent = `Game origin: ${hero.origin}`;
                description.textContent = `description: ${hero.description}`;



            })
        })

    


        .catch(error => console.error(error));