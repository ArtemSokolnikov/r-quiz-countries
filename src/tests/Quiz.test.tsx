import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Quiz from '../components/Quiz';
import { mockQuizData } from '../QuizData';

describe('Quiz component', () => {
  test('Renders correctly', () => {
    render(<Quiz quizData={mockQuizData} onSubmit={() => {}} />);

    const firstQuestion = screen.getByText(
      'What is the name of the toy construction set consisting of colorful interlocking plastic bricks?'
    );
    expect(firstQuestion).toBeInTheDocument();

    const firstQuestionRadioButton = screen.getByLabelText('LEGO');
    fireEvent.click(firstQuestionRadioButton);
    expect(firstQuestionRadioButton).toBeChecked();

    const nextButton = screen.getByText('Next');
    expect(nextButton).toBeInTheDocument();
  });

  test('Navigates to the next question', () => {
    render(<Quiz quizData={mockQuizData} onSubmit={() => {}} />);

    const radioButton = screen.getByLabelText('LEGO');
    fireEvent.click(radioButton);

    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);

    const secondQuestion = screen.getByText(
      'Who is the creator of the Harry Potter book series?'
    );
    expect(secondQuestion).toBeInTheDocument();
  });

  test('Navigates to the previous question', () => {
    render(<Quiz quizData={mockQuizData} onSubmit={() => {}} />);

    const radioButton = screen.getByLabelText('LEGO');
    fireEvent.click(radioButton);

    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);

    const previousButton = screen.getByText('Previous');
    fireEvent.click(previousButton);

    const firstQuestion = screen.getByText(
      'What is the name of the toy construction set consisting of colorful interlocking plastic bricks?'
    );
    expect(firstQuestion).toBeInTheDocument();
  });
});
