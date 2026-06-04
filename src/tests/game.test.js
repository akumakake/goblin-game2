/**
 * @jest-environment jsdom
 */

import Game from '../src/js/Game';

describe('Game', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="game-field" id="game-field"></div>
      <div class="score-board">
        <div>Score: <span id="score">0</span></div>
        <div>Missed: <span id="missed">0</span></div>
      </div>
      <div class="game-over" id="game-over" style="display: none;">
        <h2>Game Over!</h2>
        <p>Your score: <span id="final-score">0</span></p>
        <button id="restart-btn">Play Again</button>
      </div>
    `;
  });

  test('should create game board with 16 cells', () => {
    const game = new Game();
    const cells = document.querySelectorAll('.cell');
    expect(cells.length).toBe(16);
  });

  test('should update score on hit', () => {
    const game = new Game();
    const scoreElement = document.getElementById('score');
    
    game.scoreBoard.addScore();
    expect(scoreElement.textContent).toBe('1');
  });

  test('should end game after 5 misses', () => {
    const game = new Game();
    
    for (let i = 0; i < 5; i++) {
      game.scoreBoard.addMiss();
    }
    
    expect(game.scoreBoard.isGameOver()).toBe(true);
  });
});