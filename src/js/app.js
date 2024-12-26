import image from '../images/goblin.png';
import Game from './Game.js';

document.addEventListener('DOMContentLoaded', () => {
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

    const goblin = document.createElement('img');
    goblin.src = image;
    goblin.classList.add('goblin');

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
        };

        if(event.target.classList.contains('board-cell')) {
            game.failToKillGoblin();
        }
    });

});