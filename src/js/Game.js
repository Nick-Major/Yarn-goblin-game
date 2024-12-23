import rip from '../images/rip.png';

const Killed = document.querySelector('.killed');
const failed = document.querySelector('.failed');

export default class Game {
    constructor(cell) {
        this.cell = cell;
    }

    killGoblin() {
        if(this.cell.classList.contains('goblin')) {
            console.log(this.cell);
            this.cell.remove('goblin');
            Killed.textContent++;
        }

        if(Killed.textContent >= 10) {
            alert('Вы победили!');
            Killed.textContent = 0;
            failed.textContent = 0;
        }

    }

    failToKillGoblin() {
        if(this.cell.classList.contains('board-cell')) {
            failed.textContent++;
        }

        if(failed.textContent === 5) {
            alert('Вы проиграли!!!');
            Killed.textContent = 0;
            failed.textContent = 0;
        }
    }
}