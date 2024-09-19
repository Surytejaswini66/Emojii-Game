import React from 'react';
import './index.css';

const EmojiCard = ({ emoji, onEmojiClick }) => {
  const { id, emojiName, emojiUrl } = emoji;

  const handleClick = () => {
    onEmojiClick(id);
  };

  return (
    <li className="emoji-card">
      <button type="button" className="emoji-button" onClick={handleClick}>
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  );
};

export default EmojiCard;
