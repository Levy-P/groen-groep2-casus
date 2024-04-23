const vraagContainer = document.getElementById('vraag');
const antwoordenContainer = document.getElementById('antwoorden');


export class Questions {
    constructor(question, answers=null, questionType='default') {
        this.question = question;
        this.answers = answers;
        this.questionType = questionType;
    }

    appendQuestion() {
        if (this.answers === null && this.questionType === 'default') {
            throw new Error('Answers are required for this question type');
        }

        if (this.questionType === 'default') {
            vraagContainer.innerHTML = this.question;
            this.answers.forEach(answer => {
                const antwoord = document.createElement('a');
                antwoord.innerHTML = answer;
                antwoord.classList.add('antwoord');
                antwoordenContainer.appendChild(antwoord);
            });
        }

        vraagContainer.innerHTML = this.question;
        const textArea = document.createElement('textarea');
    }
}