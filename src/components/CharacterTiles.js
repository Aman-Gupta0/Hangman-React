import React from 'react';
import { Button } from 'antd';

const styles = {
  common: {
    fontSize: '32px',
    padding: '10px',
    margin: '10px',
    borderRadius: '30%',
    width: '100px'
  },
  characterTiles: {
    backgroundColor: 'aqua',
    cursor: 'grab'
  },
  disabledStyle: {
    backgroundColor: 'gray',
    cursor: 'not-allowed'
  }
};

const CharacterTiles = ({
  word,
  character,
  gameStatus,
  alreadyGuessed,
  handleCorrectGuess,
  handleInCorrectGuess
}) => {
  const CapitalWord = word.toUpperCase();
  const CapitalCharacter = character.toUpperCase();
  const checkDisabled =
    gameStatus !== 'OnGoing' || alreadyGuessed.includes(CapitalCharacter);

  const handleClick = () => {
    const isGuessCorrect = CapitalWord.indexOf(CapitalCharacter) !== -1;
    if (isGuessCorrect) {
      handleCorrectGuess(CapitalCharacter);
    } else {
      handleInCorrectGuess(CapitalCharacter);
    }
  };

  return (
    <Button
      style={
        checkDisabled
          ? {
              ...styles.common,
              ...styles.disabledStyle
            }
          : {
              ...styles.common,
              ...styles.characterTiles
            }
      }
      onClick={handleClick}
      disabled={checkDisabled}
    >
      {CapitalCharacter}
    </Button>
  );
};

export default CharacterTiles;
