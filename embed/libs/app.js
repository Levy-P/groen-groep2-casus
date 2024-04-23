import { Questions } from './modules/questions.js';

// template literal questionType=0 question answers custom=false
const vragen =
    new Questions(0, 'Wat is de hoofdstad van Nederland?', ['Amsterdam', 'Rotterdam', 'Den Haag', 'Utrecht']);

vragen.appendQuestion();