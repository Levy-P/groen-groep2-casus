const vraagContainer = document.getElementById('vraag');
const antwoordContainer = document.getElementById('antworden');


export class Questions {
    constructor(questionType, question, answers, custom=false) {
        this.question = question;
        this.answers = answers;
        this.questionType = questionType;
        // this.nextQuestion = nextQuestion;
    }

    appendQuestion() {
        switch (this.questionType) {
            case 0:
                'true or false';
            case 1:
                'multiple choice';
            case 2:
                'open vraag';
            default:
                console.log('Geen vraagtype geselecteerd');
                break;
        }
        vraagContainer.innerHTML = this.question;
        this.answers.forEach(answer => {
            const answerTag = document.createElement('a');
            answerTag.textContent = answer;
            antwoordContainer.appendChild(answerTag);
        });
    }
}