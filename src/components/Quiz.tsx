import React, { useState } from 'react';
import Question from './Question';
import Button from '@mui/material/Button';

interface QuizProps {
  quizData: {
    questions: {
      questionText: string;
      options: string[];
      correctAnswerIndex: number;
    }[];
  };
  onSubmit: (score: number) => void;
}

const Quiz: React.FC<QuizProps> = ({ quizData, onSubmit }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(Array(quizData.questions.length).fill(null));

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleAnswerSelect = (selectedOptionIndex: number) => {
    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[currentQuestionIndex] = selectedOptionIndex;
    setSelectedAnswers(updatedSelectedAnswers);
  };

  const handleSubmit = () => {
    const score = selectedAnswers.filter((answer, index) => answer === quizData.questions[index].correctAnswerIndex).length;
    onSubmit(score);
  };

  return (
    <div className="quiz-container">
      <Question
        question={quizData.questions[currentQuestionIndex].questionText}
        options={quizData.questions[currentQuestionIndex].options}
        correctAnswerIndex={quizData.questions[currentQuestionIndex].correctAnswerIndex}
        selectedAnswerIndex={selectedAnswers[currentQuestionIndex]}
        onAnswerSelect={handleAnswerSelect}
      />
      <div className="navigation-buttons">
        {currentQuestionIndex > 0 && (
        <Button className='navButtons' onClick={handlePreviousQuestion} variant="contained">Previous</Button>
        )}
        <Button className='navButtons' onClick={currentQuestionIndex === quizData.questions.length - 1 ? handleSubmit : handleNextQuestion} variant="contained" disabled={selectedAnswers[currentQuestionIndex] === null}>
          {currentQuestionIndex === quizData.questions.length - 1 ? 'Submit' : 'Next'}
        </Button>
      </div>
    </div>
  );
};

export default Quiz;
