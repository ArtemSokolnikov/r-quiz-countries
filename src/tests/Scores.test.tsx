import React from 'react';
import { render, screen } from '@testing-library/react';
import Scores from '../components/Scores';

describe('Scores component', () => {
  test('renders "Quiz Completed!" message', () => {
    render(<Scores totalQuestions={5} correctAnswers={4} />);

    const quizCompletedMessage = screen.getByText('Quiz Completed!');
    expect(quizCompletedMessage).toBeInTheDocument();
  });

  test('renders correct percentage for 4 out of 5 questions', () => {
    render(<Scores totalQuestions={5} correctAnswers={4} />);

    const scorePercentage = screen.getByText(/80%/);
    expect(scorePercentage).toBeInTheDocument();
  });
});
