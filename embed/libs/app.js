import { Question } from './modules/questions.js';

// template literal question, answers, questionType(default = multiple choice | open = text area)
export const scanResults = [];
export const vragen = {
    0: new Question(2, 'Hoeveel FTE', {
        range: [0,1250],
        event: 'it_dienstverlening'
    }),

    it_dienstverlening: new Question(1, 'De IT dienstverlening binnen mijn organisatie', [
        {
            text:'Is uit zijn jasje gegroeid!',
            value:'gegroeid',
            event:'open'
        },
        {
            text:'Kan naar een hoger niveau',
            value:'hoger',
            event:0
        },
        {
            text:'Heeft te maken met (nieuwe) wet en regelgeving',
            value:'',
            event:0
        },
        {
            text:'Is goed zoals het is',
            value:'utrecht',
            event:0
        }
    ]),

    reden_gegroeid: new Question,

    willen_graag: new Question,

    willen_dit: new Question,

    is_goed_want: new Question
};

Question.startQuestions();