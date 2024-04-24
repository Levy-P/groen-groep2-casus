import { vragen } from "../app.js";
import { scanResults } from "../app.js";

const vraagContainer = document.getElementById('vraag');
const antwoordenContainer = document.getElementById('antwoorden');

let idCounter = 0;

export class Question {
    constructor(questionType=0, question, answers=null) {
        this.question = question;
        this.answers = answers;
        this.questionType = questionType;
        this.id = `question-${idCounter++}`;
    }

    static getNextQuestion(answerEvent) {
        return answerEvent in vragen ? vragen[answerEvent] : null;
    }

    appendQuestion() {
        switch(this.questionType) {
            // * Slider Vraag
            case 2: {
                const sliderContainer = document.createElement('div'),
                      sliderInput = document.createElement('input');

                sliderInput.classList.add('slider');
                sliderInput.classList.add('antwoord');
                sliderInput.setAttribute('type','range');

                let mean = Math.round((this.answers[0]+this.answers[1])/2);
                sliderInput.setAttribute('min',this.answers[0]);
                sliderInput.setAttribute('max',this.answers[1]);
                sliderInput.setAttribute('value',mean);

                sliderContainer.classList.add('slider-container');
                sliderContainer.appendChild(sliderInput);

                antwoordenContainer.appendChild(sliderContainer);
                break;
            }

            // * Meerkeuze Vraag
            case 1: {
                if (this.answers === null) throw new Error('Answers are required for this question type');

                vraagContainer.innerHTML = this.question;
                this.answers.forEach((answer, index) => {
                    const antwoord = document.createElement('a');

                    antwoord.classList.add('antwoord');
                    antwoord.innerHTML = answer.text;
                    antwoord.id = `${this.id}-answer-${index + 1}`;
                    antwoord.setAttribute('evt',answer.event)
                    antwoordenContainer.appendChild(antwoord);
                });
                break;
            }

            default: throw new Error(`Questiontype '${this.questionType}' is not recognized`)
        }

        const answerElements = document.querySelectorAll('.antwoord');
        answerElements.forEach(answer => {
            answer.addEventListener('click', (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();

                const answerEvt = answer.getAttribute('evt');
                if (answerEvt in vragen) vragen[answerEvt].showNextQuestion();
                else this.clearQuestions();
            });
        });
    }

    showNextQuestion() {
        scanResults.push('test');
        console.log(scanResults);
        this.clearQuestions()
        this.appendQuestion();
    }

    clearQuestions() {
        vraagContainer.innerHTML = antwoordenContainer.innerHTML = '';
    }

    static startQuestions() {
        vragen[0].appendQuestion();
    }
}