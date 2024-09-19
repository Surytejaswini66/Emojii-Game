import React, { Component } from 'react';
import NavBar from '../NavBar';
import EmojiCard from '../EmojiCard';
import WinOrLoseCard from '../WinOrLoseCard';
import './index.css';

class EmojiGame extends Component {
  state = {
    clickedEmojis: [],
    score: 0,
    topScore: 0,
    isGameWon: false,
    isGameOver: false,
  };

  shuffleEmojis = (emojisList) => {
    return emojisList.sort(() => Math.random() - 0.5);
  };

  onEmojiClick = (id) => {
    const { clickedEmojis, score, topScore } = this.state;
    const { emojisList } = this.props;

    if (clickedEmojis.includes(id)) {
      this.setState({ isGameOver: true });
    } else {
      const newClickedEmojis = [...clickedEmojis, id];
      const newScore = score + 1;

      if (newScore === emojisList.length) {
        this.setState({
          clickedEmojis: newClickedEmojis,
          score: newScore,
          topScore: Math.max(newScore, topScore),
          isGameWon: true,
        });
      } else {
        this.setState({
          clickedEmojis: newClickedEmojis,
          score: newScore,
          topScore: Math.max(newScore, topScore),
        });
      }
    }
  };

  onPlayAgain = () => {
    this.setState({
      clickedEmojis: [],
      score: 0,
      isGameWon: false,
      isGameOver: false,
    });
  };

  renderGameView = () => {
    const { emojisList } = this.props;
    const shuffledEmojis = this.shuffleEmojis(emojisList);

    return (
      <ul className="emojis-list">
        {shuffledEmojis.map((emoji) => (
          <EmojiCard
            key={emoji.id}
            emoji={emoji}
            onEmojiClick={this.onEmojiClick}
          />
        ))}
      </ul>
    );
  };

  render() {
    const { score, topScore, isGameWon, isGameOver } = this.state;

    return (
      <div className="emoji-game-container">
        <NavBar score={score} topScore={topScore} isGameOver={isGameOver} isGameWon={isGameWon} />
        <div className="emoji-game-body">
          {isGameOver || isGameWon ? (
            <WinOrLoseCard
              isGameWon={isGameWon}
              score={score}
              onPlayAgain={this.onPlayAgain}
            />
          ) : (
            this.renderGameView()
          )}
        </div>
      </div>
    );
  }
}

export default EmojiGame;
