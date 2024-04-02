import { useState } from 'react';
import './App.css';
import './styles.css';
import Quiz from './components/Quiz';
import Scores from './components/Scores';
import { mockQuizData } from './QuizData';

function App() {
  const [showScores, setShowScores] = useState<boolean>(false);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);

  const handleQuizSubmit = (score: number) => {
    setCorrectAnswers(score);
    setShowScores(true);
  };
  const handleRestart  = () =>{
    setShowScores(false);
    setCorrectAnswers(0);
  }

  return (
    <div className="app-container">
      <h1>Which country's flag</h1>
      <div className="content-container">
        {!showScores ? (
          <Quiz quizData={mockQuizData} onSubmit={handleQuizSubmit} />
        ) : (
          <Scores onRestart = {handleRestart} totalQuestions={mockQuizData.questions.length} correctAnswers={correctAnswers} />
        )}
      </div>
    </div>
  );
}

export default App;
