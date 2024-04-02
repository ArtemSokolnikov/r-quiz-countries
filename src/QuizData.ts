export interface QuizData {
  questions: Question[];
}

export interface Question {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
}

export const mockQuizData: QuizData = {
  questions: [
    {
      questionText: 'flag_USA.png',
      options: ['גיניאה ביסאו', 'ארצות הברית', 'טובאלו', 'טוגו'],
      correctAnswerIndex: 1,
    },
    {
      questionText: 'Flag_Guinea-Bissau.png',
      options: ['גיניאה ביסאו', 'טוגו', 'טובאלו', 'איטליה'],
      correctAnswerIndex: 0,
    },
    {
      questionText: 'Flag_Togo.png',
      options: ['סלובקיה',  'טובאלו', 'טוגו','גרמניה' ],
      correctAnswerIndex: 2,
    },
    {
      questionText: 'Flag_Tajikistan.png',
      options: ['צרפת', 'טגיקיסטן', 'ספרד', 'טוגו'],
      correctAnswerIndex: 1,
    },
    {
      questionText: 'Flag_Tuvalu.png',
      options: ['אירלנד', 'קנדה', 'רוסיה', 'טובאלו'],
      correctAnswerIndex: 3,
    },
  ],
};
