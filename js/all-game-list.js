import games from './all-games.js';

let gameList = ``;

games.forEach((game) => {
  gameList += `
  <div class="game-list-card">
    <img src="${game.cover_image}" alt="Image Description">
    <div class="game-list-card-content">
        <h2>${game.full_gamename}</h2>
        <p>${game.description}</p>
        <div class="button-container">
            <a href="${game.link}" class="button">Highlights</a>
            <a href="${game.link}" class="button">Tips and Tricks</a>
            <a href="${game.link}" class="button">Visit Game Page</a>
        </div>
    </div>
  </div>
  `;
});

document.querySelector('#all-game-lists').innerHTML = gameList;

