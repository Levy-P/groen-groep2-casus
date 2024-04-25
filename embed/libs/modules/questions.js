import { vragen } from "../app.js";
import { scanResults } from "../app.js";

const vraagTekst = document.getElementById('vraag');
const vraagContainer = document.getElementById('vraag-container');
const antwoordenContainer = document.getElementById('antwoorden-container');

export class Question {
    constructor(questionType=0, question, answers=null) {
        this.question = question;
        this.answers = answers;
        this.questionType = questionType;
    }

    static getNextQuestion(answerEvent) {
        return answerEvent in vragen ? vragen[answerEvent] : null;
    }

    appendQuestion() {
        switch(this.questionType) {
            // * Meerkeuze Vraag
            case 1: {
                if (this.answers === null) throw new Error('Answers are required for this question type');

                vraagTekst.innerHTML = this.question;
                this.answers.forEach((answer, index) => {
                    const antwoord = document.createElement('a');

                    antwoord.classList.add('antwoord');
                    antwoord.innerHTML = answer.text;
                    antwoord.id = `${this.id}-${answer.value}`;
                    antwoord.setAttribute('evt',answer.event);
                    antwoordenContainer.appendChild(antwoord);
                });

                this.makeQuestionInteraction(1);
                break;
            }

            // * Slider Vraag
            case 2: {
                if (this.answers === null) throw new Error('Answers are required for this question type');
                if (!('range' in this.answers)) throw new Error('Property range must be defined with [min,max]');

                const sliderContainer = document.createElement('div'),
                      sliderInput = document.createElement('input');

                let range = this.answers.range;
                sliderInput.id = 'slide-input';
                sliderInput.classList.add('slider');
                sliderInput.classList.add('antwoord');
                sliderInput.setAttribute('type','range');

                let mean = Math.round((range[0]+range[1])/2);
                sliderInput.setAttribute('min',range[0]);
                sliderInput.setAttribute('max',range[1]);
                sliderInput.setAttribute('value',mean);
                sliderInput.setAttribute('evt',this.answers.event);

                sliderContainer.classList.add('slider-container');
                sliderContainer.appendChild(sliderInput);

                antwoordenContainer.appendChild(sliderContainer);

                this.makeQuestionInteraction(2);
                break;
            }

            // * Meerkeuze Vraag met zin invullen 
            case 3: {
                if (this.answers === null) throw new Error('Answers are required for this question type');

                vraagTekst.innerHTML = this.question;
                this.answers.forEach((answer, index) => {
                    const antwoord = document.createElement('a');

                    antwoord.classList.add('antwoord');
                    antwoord.innerHTML = answer.text;
                    antwoord.id = `${this.id}-answer-${index + 1}`;
                    antwoord.setAttribute('evt',answer.event);
                    antwoordenContainer.appendChild(antwoord);
                });

                this.makeQuestionInteraction(1);
                break;
            }

            // * Meerkeuze Vraag met meerdere antwoorden
            case 4: {
                if (this.answers === null) throw new Error('Answers are required for this question type');

                vraagTekst.innerHTML = this.question;
                this.answers.answers.forEach((answer,index) => {
                    const antwoord = document.createElement('a');

                    antwoord.classList.add('antwoord');
                    antwoord.innerHTML = answer.text;
                    antwoord.id = `${this.id}-`+answer;
                    antwoord.setAttribute('evt',answer.event)
                    antwoordenContainer.appendChild(antwoord);
                })

                this.makeQuestionInteraction(2); //TODO: meerdere antwoorden
                break;
            }

            default: throw new Error(`Questiontype '${this.questionType}' is not recognized`)
        }
    }

    makeQuestionInteraction(type) {
        switch(type) {
            case 1: {
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
                break;
            }

            case 2: {
                const submitBtn = document.createElement('a');
                submitBtn.innerText = 'Submit';
                submitBtn.id = 'submit-'+this.id;

                submitBtn.addEventListener('click', (e) => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();

                    const answerEvt = this.answers.event;
                    if (answerEvt in vragen) vragen[answerEvt].showNextQuestion();
                    else this.clearQuestions();
                });

                antwoordenContainer.appendChild(submitBtn);
            }
        }
    }

    showNextQuestion() {
        this.clearQuestions()
        if (this.id == 0) {}
        else this.appendQuestion();
    }

    clearQuestions() {
        vraagTekst.innerHTML = antwoordenContainer.innerHTML = '';
    }

    static giveKeys() {
        for (let key in vragen) {
            vragen[key].id = key;
        }
    }

    static startQuestions() {
        vragen[0].appendQuestion();
    }
}