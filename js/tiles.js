const tilesContainer = document.querySelector('#tiles');
export const gameOver = () => {
  document.body.innerHTML += `<div id="toast" class="lost">Good effort. Better luck next time.</div> <div id="playagain"><button id="playagainbutton" onClick="window.location.reload(true)">*** CLICK HERE TO PLAY AGAIN ***</button></div>`;
  document.querySelector('input').setAttribute('disabled', true);
};

export const gameWon = (word) => {
  word.split('').forEach((c) => addTile(c.toUpperCase(), 'green'));
  document.body.innerHTML += `<div id="toast" class="won">Great Work! The word was: ${word}</div><div id="playagain"><button id="playagainbutton" onClick="window.location.reload(true)">*** CLICK HERE TO PLAY AGAIN ***</button></div>`;
  document.querySelector('input').setAttribute('disabled', true);
};

export const addTile = (str, color) => {
  tilesContainer.innerHTML += `<div class="tile ${color}">${str.toUpperCase()}</div>`;
};
