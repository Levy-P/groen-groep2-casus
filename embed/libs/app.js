import { Question } from './modules/questions.js';

// template literal question, answers, questionType(default = multiple choice | open = text area)
export const scanResults = [];
export const vragen = {
    0: new Question(2, 'Test', [0,1250]),

    test: new Question(1, 'Wat is de hoofdstad van Nederland?', [
        {text:'Amsterdam',value:'amsterdam',event:'open'},
        {text:'Rotterdam',value:'rotterdam',event:0},
        {text:'Den Haag',value:'den_haag',event:0},
        {text:'Utrecht',value:'utrecht',event:0}
    ]),
    
    
};

// vragen[0].showNextQuestion(0);
Question.startQuestions();