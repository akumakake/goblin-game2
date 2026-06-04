import Board from './Board';
import Goblin from './Goblin';
import ScoreBoard from './ScoreBoard';

export default class Game {
  constructor() {
    this.board = new Board(4);
    this.goblin = new Goblin();
    this.scoreBoard = new ScoreBoard();
    this.timeout = null;
    this.isPlaying = false;

    this.init();
  }

  init() {
    this.board.addClickListener(this.handleCellClick.bind(this));
    this.start();
  }

  start() {
    this.isPlaying = true;
    this.scoreBoard.reset();
    this.scheduleGoblin();
  }

  scheduleGoblin() {
    if (!this.isPlaying) return;

    const randomCell = this.board.getRandomCell();
    this.goblin.placeInCell(randomCell);

    this.timeout = setTimeout(() => {
      if (this.isPlaying) {
        this.missGoblin();
      }
    }, 1000);
  }

  handleCellClick(cell) {
    if (!this.isPlaying) return;

    if (cell === this.goblin.currentCell) {
      this.hitGoblin();
    }
  }

  hitGoblin() {
    clearTimeout(this.timeout);
    this.scoreBoard.addScore();
    this.goblin.remove();
    this.scheduleGoblin();
  }

  missGoblin() {
    this.scoreBoard.addMiss();
    this.goblin.remove();

    if (this.scoreBoard.isGameOver()) {
      this.endGame();
    } else {
      this.scheduleGoblin();
    }
  }

  endGame() {
    this.isPlaying = false;
    this.goblin.remove();
    clearTimeout(this.timeout);
    alert(`Game Over! Your score: ${this.scoreBoard.score}`);
  }
}