import { Questions } from './modules/questions.js';

// template literal question, answers, questionType(default = multiple choice | open = text area)
const vragen = [
    new Questions('Wat is de hoofdstad van Nederland?', ['Amsterdam', 'Rotterdam', 'Den Haag', 'Utrecht']),
    new Questions('Wat is de hoofdstad van ietsanders?', [], 'open')
];

// vragen[0].appendQuestion();