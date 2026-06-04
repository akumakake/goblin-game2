export default class ScoreBoard {
  constructor() {
    this.score = 0;
    this.missed = 0;
    this.maxMissed = 5;
    this.scoreElement = document.getElementById('score');
    this.missedElement = document.getElementById('missed');
  }

  addScore() {
    this.score++;
    this.updateDisplay();
  }

  addMiss() {
    this.missed++;
    this.updateDisplay();
  }

  isGameOver() {
    return this.missed >= this.maxMissed;
  }

  updateDisplay() {
    this.scoreElement.textContent = this.score;
    this.missedElement.textContent = this.missed;
  }

  reset() {
    this.score = 0;
    this.missed = 0;
    this.updateDisplay();
  }
}
