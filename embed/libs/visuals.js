const c = document.getElementById('canvas');
const ctx = c.getContext('2d');

ctx.webkitImageSmoothingEnabled = false;
ctx.mozImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;

const img = {
    train: {
        src: new Image(),
        width: 698,
        height: 66
    },
    rail: {
        src: new Image(),
        width: 100,
        height: 26
    }
}

for (svg in img) {
    img[svg].src = document.getElementById('svg-'+svg);
}

let trainX = 0, 
    scale;
let w_width, w_height;

setInterval(() => {
    c.height = window.innerHeight/5; 
    scale = c.height/100;

    let width, height;
    w_width = c.width = window.innerWidth;
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
        let destination = ((w_width*scale)/2)-15;
        const animation = setInterval(() => {
            trainX += (destination-trainX)/60;
            if (trainX >= destination-1) {
                trainX = destination;
                clearInterval(animation);
            }
        }, 10)
    }
}