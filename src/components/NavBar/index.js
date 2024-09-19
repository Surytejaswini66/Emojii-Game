import React from 'react'
import './index.css'

const NavBar = ({score, topScore, isGameOver, isGameWon}) => {
  return (
    <nav className="navbar">

      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="emoji logo"
        className="navbar-logo"
      />
      <h1>Emoji Game</h1>
      {!isGameOver && !isGameWon && (
        <div className="scores-container">
          <p className="score">Score: {score}</p>
          <p className="top-score">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
