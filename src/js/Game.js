import rip from '../images/rip.png';
import gob from '../images/goblin.png';

export default class Game {
    constructor(cell) {
        this.cell = cell;
        this.killed = document.querySelector('.killed');
        this.failed = document.querySelector('.failed');
    }

    killGoblin() {
        if(this.cell.classList.contains('goblin')) {
            this.cell.src = rip;
            // this.cell.src = gob;
            // this.cell.remove();
            this.killed.textContent++;


            if (this.killed.textContent == 10) {
                alert('Вы победили!');
                this.killed.textContent = 0;
                this.failed.textContent = 0;
            };
        };

    };

    failToKillGoblin() {
        if(this.cell.classList.contains('board-cell')) {
            this.failed.textContent++;

            if(this.failed.textContent == 5) {
                alert('Вы проиграли!!!');
                this.killed.textContent = 0;
                this.failed.textContent = 0;
            };
        };
    };
}


