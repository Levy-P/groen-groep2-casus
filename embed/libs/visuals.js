const c = document.getElementById('canvas');
const ctx = c.getContext('2d');
const frame = document.querySelector('main');

ctx.webkitImageSmoothingEnabled = false;
ctx.mozImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;

const img = {
    train: {
        src: new Image(),
        svg: true,
        width: 698,
        height: 66
    },
    rail: {
        src: new Image(),
        svg: true,
        width: 100,
        height: 26
    },
    user: {
        src: new Image(),
        svg: false,
        width: 512,
        height: 512
    }
}

for (key in img) {
    img[key].src = document.getElementById(((img[key].svg) ?'svg-':'asset-')+key);
}

let trainX = 0,
    scale;

let w_width, w_height;
setInterval(() => {
    const bound = frame.getBoundingClientRect();
    c.height = bound.height/4; 
    scale = c.height/100;

    let width, height;
    w_width = bound.width;
    c.width = w_width;
    w_height = c.height;

    let track = img.rail;
    width = track.width;
    height = track.height;

    let tracks = Math.ceil(w_width/width/scale)

    for (let i = 0; i < tracks; i++) {
        drawImg(
            track.src,
            i*width,
            (w_height/scale) - height,
            width, 
            height
        );
    }

    let train = img.train;
    width = train.width;
    height = train.height;

    let person = img.user.src,
        trainPos = trainX - width;

    let doors = [139,251,320,377,535];
    for (let i = 0; i < 5; i++) {
        doors[i] += trainPos;
    }

    for (let i = 0; i < 5; i++) {
        drawImg(person, doors[i], 0, 25, 25);
    }

    drawImg(
        train.src,
        trainX-width,
        w_height/scale - height - 6,
        width,
        height
    );
}, 5);

function drawImg(src,x,y,w,h) {
    ctx.drawImage(src,x*scale,y*scale,w*scale,h*scale);
}

const train = {
    move: function(){
        let speed = 0;
        const maxSpeed = 14;
        const animation = setInterval(() => {
            speed += (maxSpeed-speed)/22;
            trainX += speed;
            if (trainX > w_width+img.train.width) {
                trainX = 0;
                clearInterval(animation);
            }
        }, 10)
    },

    arrive: function() {
        const trainWidth = img.train.width;
        let destination = (trainWidth + w_width/scale) / 2
        const animation = setInterval(() => {
            trainX += (destination-trainX)/60;
            if (trainX >= destination-1) {
                trainX = destination;
                clearInterval(animation);
            }
        }, 10)
    },
    
    center: function() {
        const trainWidth = img.train.width;
        trainX = (trainWidth + w_width/scale) / 2
    },
    
    left: function() {
        trainX = img.train.width;
    }
}

function sliderChange() {
    const sliderInput = document.getElementById('slider-input');
    const value = parseInt(sliderInput.value);

    sliderInput.classList.remove('input-min')
    sliderInput.classList.remove('input-max')

    switch(value) {
        case 0: {
            sliderInput.classList.add('input-min')
            break;
        }
        case 1250: {
            sliderInput.classList.add('input-max')
            break;
        }
    }

    console.log(value)
}

function startQuestions() {
    train.arrive();
}