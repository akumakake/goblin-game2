export default class Board {
  constructor(size = 4) {
    this.size = size;
    this.cells = [];
    this.gameField = document.getElementById('game-field');
    this.createBoard();
  }

  createBoard() {
    this.gameField.innerHTML = '';
    this.cells = [];

    for (let i = 0; i < this.size * this.size; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.index = i;
      this.gameField.appendChild(cell);
      this.cells.push(cell);
    }
  }

  getRandomCell() {
    const index = Math.floor(Math.random() * this.cells.length);
    return this.cells[index];
  }

  getCell(index) {
    return this.cells[index];
  }

  addClickListener(callback) {
    this.cells.forEach((cell) => {
      cell.addEventListener('click', (e) => {
        callback(e.currentTarget);
      });
    });
  }
}