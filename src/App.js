import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Spin, Divider } from 'antd';
import Title from './components/Title';
import LifeBox from './components/LifeBox';
import { TotalLives } from './constant/HangmanConstant';
import { Alphabets } from './constant/Alphabets';
import CharacterDash from './components/CharacterDash';
import CharacterTiles from './components/CharacterTiles';
import Drawing from './components/Drawing';

const App = () => {
  const [livesLeft, setLivesLeft] = useState(TotalLives);
  const [word, setWord] = useState('');
  const [loading, setLoading] = useState(true);
  const [successfulGuesses, setSuccessfulGuesses] = useState([]);
  const [failedGuesses, setFailedGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState('OnGoing');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('https://random-words-api.vercel.app/word')
      .then((res) => {
        setWord(res.data[0].word);
      })
      .catch((error) => {
        console.error('Error Found', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const lifeDecreased = () => {
    if (livesLeft === 1) {
      setGameStatus('Game Lost');
    }
    setLivesLeft(livesLeft - 1);
  };

  const handleCorrectGuess = (char) => {
    const currentCorrectGuesses = successfulGuesses.concat(char.toUpperCase());
    setSuccessfulGuesses(currentCorrectGuesses);
    for (let i = 0; i < word.length; i++) {
      if (currentCorrectGuesses.includes(word.toUpperCase().charAt(i))) {
        if (i + 1 === word.length) {
          setGameStatus('Game Won');
        }
      } else break;
    }
  };

  const handleInCorrectGuess = (char) => {
    setFailedGuesses(failedGuesses.concat(char.toUpperCase()));
    lifeDecreased();
  };

  const restart = () => {
    setLivesLeft(TotalLives);
    setSuccessfulGuesses([]);
    setFailedGuesses([]);
    setGameStatus('OnGoing');
    fetchData();
  };

  if (loading) {
    return <Spin spinning={loading} size="large" />;
  }
  return (
    <>
      <Title heading="HANGMAN" />
      <Divider />

      <Drawing livesLeft={livesLeft} />
      <LifeBox livesLeft={livesLeft} />
      <Title heading={`Successful Guesses : ${successfulGuesses}`} />
      <Title heading={`Failed Guesses : ${failedGuesses}`} />
      <Divider />

      <CharacterDash
        word={word}
        successfulGuesses={successfulGuesses}
        gameStatus={gameStatus}
      />
      <Divider />

      {Object.keys(Alphabets).map((val, i) => (
        <CharacterTiles
          key={i}
          word={word}
          character={val}
          livesLeft={livesLeft}
          gameStatus={gameStatus}
          alreadyGuessed={[...successfulGuesses, ...failedGuesses]}
          successfulGuesses={successfulGuesses}
          failedGuesses={failedGuesses}
          setSuccessfulGuesses={setSuccessfulGuesses}
          setFailedGuesses={setFailedGuesses}
          lifeDecreased={lifeDecreased}
          handleCorrectGuess={handleCorrectGuess}
          handleInCorrectGuess={handleInCorrectGuess}
        />
      ))}
      <Divider />

      <div onClick={restart}>
        {gameStatus !== 'OnGoing' ? (
          <Title heading={`${gameStatus}, Play Again`} />
        ) : null}
      </div>
    </>
  );
};

export default App;
