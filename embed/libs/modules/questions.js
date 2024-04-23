const vraagContainer = document.getElementById('vraag');
const antwoordenContainer = document.getElementById('antwoorden');


let idCounter = 0;

export class Questions {
    constructor(question, answers=null, questionType='default') {
        this.question = question;
        this.answers = answers;
        this.questionType = questionType;
        this.id = `question-${idCounter++}`;
    }

    appendQuestion() {
        if (this.answers === null && this.questionType === 'default') {
            throw new Error('Answers are required for this question type');
        }

        if (this.questionType === 'default') {
            vraagContainer.innerHTML = this.question;
            this.answers.forEach((answer, index) => {
                const antwoord = document.createElement('a');
                antwoord.innerHTML = answer;
                antwoord.classList.add('antwoord');
                antwoord.id = `${this.id}-answer-${index + 1}`;
                antwoordenContainer.appendChild(antwoord);
            });
        }

        if (this.questionType === 'open') {
            vraagContainer.innerHTML = this.question;
            const textArea = document.createElement('textarea');
            textArea.placeholder = 'Typ hier je antwoord';
            textArea.id = `${this.id}-textarea`;
            textArea.classList.add('antwoord-textarea');
            antwoordenContainer.appendChild(textArea);

            const submitBtn = document.createElement('a');
            submitBtn.innerHTML = 'Submit';
            submitBtn.classList.add('antwoord');
            submitBtn.id = `${this.id}-answer-submit`;
            antwoordenContainer.appendChild(submitBtn);
        }
    }

    showNextQuestion() {
        // Clear previous question and answers
        vraagContainer.innerHTML = '';
        antwoordenContainer.innerHTML = '';

        // Show the next question and answers
        // Replace the following code with your logic to determine the next question
        const nextQuestion = getNextQuestion();
        nextQuestion.appendQuestion();
    }

    getNextQuestion() {}
}