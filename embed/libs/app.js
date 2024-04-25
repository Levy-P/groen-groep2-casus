import { Question } from './modules/questions.js';

// template literal question, answers, questionType(default = multiple choice | open = text area)
// questionType: 0 = multiple choice, 1 = multiple choice with answers, 2 = slider
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

    reden_gegroeid: new Question(1, 'Dit komt door', [
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

    hoger_niveau: new Question(1, 'Wij willen graag', [
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

    heeft_te_maken_met: new Question(1, 'En willen dit', [
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

    is_goed_zoal_is: new Question(1, 'Want: (vink aan wat van toepassing)', [  // TODO: * Meerkeuze Vraag met zin invullen
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
};

Question.startQuestions();