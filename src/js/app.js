import image from '../images/goblin.png';
import Game from './Game.js';

document.addEventListener('DOMContentLoaded', () => {
    // const scoreboard = `
    // <div class="score">
    //     <p class="Killed-score">Попаданий:
    //         <span class="Killed">0</span>
    //     </p>
    //      <p class="failed-score">Промахов:
    //         <span class="failed">0</span>
    //      </p>
    // </div>`
    
    // document.body.innerHTML = scoreboard;

    const Killed = document.createElement('span');
    Killed.classList.add('killed');
    Killed.textContent = 0;

    const failed = document.createElement('span');
    failed.classList.add('failed');
    failed.textContent = 0;

    const score = document.createElement('div');
    score.classList.add('score');

    document.body.append(score);
    score.appendChild(failed);
    score.appendChild(Killed);

    console.log(Killed);
    console.log(failed);
    console.log(score);
    

    const goblin = document.createElement('img');
    goblin.src = image;
    goblin.classList.add('goblin');

    console.log(goblin);
    

    function createBoard() {
        const board = document.createElement('div');
        board.classList.add('board');

        for (let i = 0; i < 16; i++) {
            const boardCell = document.createElement('div');
            boardCell.classList.add('board-cell');
            board.append(boardCell);
        }
    
        document.body.append(board);
    }

    createBoard();

    function movingPicture() {
        const board = document.querySelector('.board');
        const randomCell = board.children[Math.floor(Math.random() * board.children.length)];
        randomCell.append(goblin);
    }
    
    setInterval(movingPicture, 1000);

    document.addEventListener('click', (event) => {
        const game = new Game(event.target);

        if(event.target.classList.contains('goblin')) {
            game.killGoblin();
        } else {
            game.failToKillGoblin;
        }
    });

});