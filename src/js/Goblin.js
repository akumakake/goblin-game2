import goblinImg from '../img/goblin.png';

export default class Goblin {
  constructor() {
    this.element = document.createElement('img');
    this.element.src = goblinImg;
    this.element.classList.add('goblin');
    this.element.alt = 'Goblin';
    this.currentCell = null;
  }

  placeInCell(cell) {
    this.remove();
    cell.appendChild(this.element);
    cell.classList.add('has-goblin');
    this.currentCell = cell;
  }

  remove() {
    if (this.currentCell) {
      if (this.element.parentNode) {
        this.element.remove();
      }
      this.currentCell.classList.remove('has-goblin');
      this.currentCell = null;
    }
  }
}