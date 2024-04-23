import { Questions } from './modules/questions.js';

// template literal question, answers, questionType(default = multiple choice)
const vragen =
    new Questions('Wat is de hoofdstad van Nederland?', ['Amsterdam', 'Rotterdam', 'Den Haag', 'Utrecht']);

vragen.appendQuestion();