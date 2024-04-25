class Keyframe {
    constructor(keyframe, duration=1, loop=true, easing=false) {
        this.keyframe = keyframe;
        this.duration = duration;
        this.iterationCount = loop ? 'infinite' : 1;
        this.easing = easing ? easing : 'linear';
    }

    play(html) {
        html.style.animation = `${this.keyframe} ${this.easing} ${this.iterationCount} ${this.duration}s`;
        html.classList.add('keyframe-'+this.keyframe);
        console.log('playing animation: '+this.keyframe)
        this.animate(html);
    }

    animate(html) {
        setTimeout(() => {
            html.style.animation = 'none';
            html.
            html.style.animation = '';
        }, this.duration*1000);
    }
}

const h1 = document.getElementsByTagName('h1')[0];
const anim = new Keyframe('blinking',2,false);
anim.play(h1);