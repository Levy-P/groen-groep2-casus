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
            event:'reden_gegroeid'
        },
        {
            text:'Kan naar een hoger niveau',
            value:'hoger',
            event:'hoger_niveau'
        },
        {
            text:'Heeft te maken met (nieuwe) wet en regelgeving',
            value:'',
            event:'heeft_te_maken_met'
        },
        {
            text:'Is goed zoals het is',
            value:'utrecht',
            event:'is_goed_zoals_is'
        }
    ]),

    reden_gegroeid: new Question(3, 'Dit komt door', [
        {
            text:'Organische groei',
            value:'groei',
            event:0
        },
        {
            text:'Fusie',
            value:'fusie',
            event:0
        }
    ]),

    hoger_niveau: new Question(1, 'Wij willen graag', [
        {
            text:'Vergroten van wendbaarheid en beter inspelen op innovatie en technische verandering​',
            value:'vergroten',
            event:0
        },
        {
            text:'(Her) structureren van bedrijfsprocessen​',
            value:'structueren',
            event:0
        },
        {
            text:'Met IT dienstverlening beter inspelen op klantvraag​',
            value:'inspelen',
            event:0
        }
    ]),

    heeft_te_maken_met: new Question(3, 'En willen dit', [
        {
            text:'Inrichten',
            value:'inrichten',
            event:0
        },
        {
            text:'Automatiseren',
            value:'automatiseren',
            event:0
        }
    ]),

    is_goed_zoals_is: new Question(4, 'Want: (vink aan wat van toepassing is)', {
        event: 0,
        answers: [
            'Alle koppelvlakken met serviceproviders zijn geautomatiseerd',
            'Optimale samenwerking met service providers en vendoren',
            'Er wordt snel en adequaat ingespeeld op de klantvraag'
        ]
    }),
};

Question.startQuestions();
Question.giveKeys();