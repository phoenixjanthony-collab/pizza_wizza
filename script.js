const gamesContainer = document.getElementById('games-grid');
const modal = document.getElementById('gameModal');
const closeBtn = document.querySelector('.close');

function displayGames(gamesToShow = games) {
  gamesContainer.innerHTML = '';
  gamesToShow.forEach(game => {
    const gameCard = document.createElement('div');
    gameCard.className = 'game-card';
    gameCard.innerHTML = `
      <h3>${game.title}</h3>
      <p>${game.description}</p>
      <button onclick="openGame('${game.id}', '${game.title}')">Play</button>
    `;
    gamesContainer.appendChild(gameCard);
  });
}

function openGame(gameId, gameTitle) {
  document.getElementById('modalTitle').textContent = gameTitle;
  document.getElementById('modalDescription').textContent = 'Click Play Now to launch the game';
  document.getElementById('comingSoon').style.display = 'block';
  modal.style.display = 'block';
}

function showCategory(category) {
  if (category === 'all') {
    displayGames(games);
  } else {
    const filtered = games.filter(g => g.category === category);
    displayGames(filtered);
  }
}

closeBtn.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}

displayGames();