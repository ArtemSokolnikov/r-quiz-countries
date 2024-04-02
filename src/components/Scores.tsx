import { Button } from '@mui/material';
import React from 'react';

interface ScoresProps {
  totalQuestions: number;
  correctAnswers: number;
  onRestart?: () => void;
}

const Scores: React.FC<ScoresProps> = ({ totalQuestions, correctAnswers, onRestart}) => {
  const scorePercentage = (correctAnswers / totalQuestions) * 100;

  let gifUrl;
  if (scorePercentage === 100) {
    gifUrl = 'https://i.gifer.com/UwPC.gif';
  } else if (scorePercentage === 0) {
    gifUrl = 'https://i.gifer.com/Nt.gif';
  } else {
    gifUrl = 'https://i.gifer.com/22o.gif';
  }

  return (
    <div className='scores-container'>
      <h2>Quiz Completed!</h2>
      <p>Your score: {scorePercentage}%</p>
      <img src={gifUrl} alt='Score GIF' />
      {scorePercentage < 100 &&
      <Button className='restartButton' onClick={onRestart} variant="contained">Restart</Button>
      }
    </div>
  );
};

export default Scores;
