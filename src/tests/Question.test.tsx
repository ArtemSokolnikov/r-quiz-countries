import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Question from '../components/Question';

const mockQuestion =
  'What is the name of the toy construction set consisting of colorful interlocking plastic bricks?';
const mockOptions = ['LEGO', 'Mega Bloks', 'KNex', 'Tinkertoys'];
const mockCorrectAnswerIndex = 0;

const mockHandleAnswerSelect = jest.fn();

describe('Question component', () => {
  test('Renders question and options correctly', () => {
    render(
      <Question
        question={mockQuestion}
        options={mockOptions}
        correctAnswerIndex={mockCorrectAnswerIndex}
        selectedAnswerIndex={null}
        onAnswerSelect={mockHandleAnswerSelect}
      />
    );

    const questionText = screen.getByText(mockQuestion);
    expect(questionText).toBeInTheDocument();

    mockOptions.forEach((option) => {
      const optionElement = screen.getByText(option);
      expect(optionElement).toBeInTheDocument();
    });
  });

  test('Calls onAnswerSelect with the selected answer index', () => {
    render(
      <Question
        question={mockQuestion}
        options={mockOptions}
        correctAnswerIndex={mockCorrectAnswerIndex}
        selectedAnswerIndex={null}
        onAnswerSelect={mockHandleAnswerSelect}
      />
    );

    const optionIndex = 1;
    const optionElement = screen.getByText(mockOptions[optionIndex]);
    fireEvent.click(optionElement);
    expect(mockHandleAnswerSelect).toHaveBeenCalledWith(optionIndex);
  });
});
