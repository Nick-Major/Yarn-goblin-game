import image from '../images/goblin.png';
import Game from './Game';

document.addEventListener('DOMContentLoaded', () => {
    const goblin = document.createElement("img");
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
        } else {
            game.failToKillGoblin;
        }
    })

});