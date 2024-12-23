import image from '../src/images/goblin.png';

document.addEventListener('DOMContentLoaded', () => {
    const board = document.createElement('div');
    board.classList.add('board');

    for (let i = 0; i < 16; i++) {
        const boardCell = document.createElement('div');
        boardCell.classList.add('board-cell');
        board.append(boardCell);
    }

    document.body.append(board);

    const goblin = document.createElement("img");
    goblin.src = image;

    function movingPicture() {
        const board = document.querySelector('.board');
        const randomCell = board.children[Math.floor(Math.random() * board.children.length)];
        randomCell.append(goblin);
    }
    
    setInterval(movingPicture, 1000);

});