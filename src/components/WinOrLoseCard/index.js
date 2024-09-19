import React from 'react';
import './index.css';

const WinOrLoseCard = ({ isGameWon, score, onPlayAgain }) => {
  const imageUrl = isGameWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png';

  const message = isGameWon ? 'You Won' : 'You Lose';
  const scoreMessage = isGameWon ? 'Best Score' : 'Score';

  return (
    <div className="win-or-lose-card">
      <img src={imageUrl} alt="win or lose" className="win-lose-image" />
      <div className="details-container">
        <h1 className="message">{message}</h1>
        <p className="score-message">{scoreMessage}</p>
        <p className="score">{score}/12</p>
        <button type="button" className="play-again-button" onClick={onPlayAgain}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default WinOrLoseCard;
