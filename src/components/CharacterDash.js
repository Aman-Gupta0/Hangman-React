import React from 'react';
import { Button } from 'antd';

const styles = {
  card: {
    fontSize: 32,
    margin: 10,
    borderRadius: '10%',
    width: 100,
    height: 100,
    fontWeight: 600
  }
};

const CharacterDash = ({ word, successfulGuesses, gameStatus }) => {
  const maskedWordArray = word.toUpperCase().split('');
  let color;
  let backgroundColor;
  if (gameStatus === 'Game Lost') {
    color = '#ffff38';
    backgroundColor = '#c73a3a';
  }
  if (gameStatus === 'Game Won') {
    color = 'green';
    backgroundColor = '#6aff00';
  }

  return (
    <div style={{ display: 'inline-flex' }}>
      {maskedWordArray.map((char) => (
        <Button type="text" style={{ ...styles.card, backgroundColor, color }}>
          {gameStatus !== 'OnGoing' ||
          successfulGuesses.includes(char.toUpperCase())
            ? char
            : '___'}
        </Button>
      ))}
    </div>
  );
};

export default CharacterDash;
