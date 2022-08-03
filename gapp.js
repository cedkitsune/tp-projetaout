// declaration des variables

const jeux = document.querySelectorAll(`#jeux`);
let url = `https://www.moogleapi.com/api/v1/games`;

const API = fetch(url)
    .then(Response => Response.json())
    .then(data => {
        data.results.map(game => {

            let article = document.createElement(`article`);
            let img = document.createElement(`img`);
            let h3 = document.createElement(`h3`);
            let parution = document.createElement(`div`);
            let console = document.createElement(`div`);

            parution.setAttribute(`id`, `parution`);
            console.setAttribute(`id`, `console`);
            article.classList.add(`jeu`);
            img.setAttribute(`src`, `${game}.img`);

            jeux.append(article);
            article.append(img);
            article.append(h3);
            article.append(parution);
            article.append(console);

            h3.textContent = `${game.title}`;
            parution.textContent = `date de parution: ${game.releaseDate}`;
            console.textContent = `Console: ${game.platform}`;


        })
    })
    .catch(error => console.error(error));