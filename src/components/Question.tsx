import React from 'react';
import { FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';

interface QuestionProps {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  selectedAnswerIndex: number | null;
  onAnswerSelect: (selectedOptionIndex: number) => void;
}

const Question: React.FC<QuestionProps> = ({ question, options, correctAnswerIndex, selectedAnswerIndex, onAnswerSelect }) => {
  console.log('questio',`../images/${question}`);

  return (
    <div className="question-container">
      <img src={`/images/${question}`} alt={question} />
      <FormControl component="fieldset">
        <RadioGroup value={selectedAnswerIndex} onChange={(e) => onAnswerSelect(parseInt(e.target.value))}>
          {options.map((option, index) => (
            <FormControlLabel
              key={index}
              value={index}
              control={<Radio />}
              label={option}
              // style={{ color: correctAnswerIndex === index ? 'green' : 'inherit' }}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Question;
