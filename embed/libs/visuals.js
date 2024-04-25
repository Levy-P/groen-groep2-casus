const c = document.getElementById('canvas');
const ctx = c.getContext('2d');
const img = {
    train: new Image(),
    track: new Image()
}

for (svg in img) {
    img[svg] = document.getElementById('svg-'+svg);
}


setInterval(() => {
    w_width = c.width = window.innerWidth;
    w_height = window.innerHeight

    ctx.drawImage(img.train,0,0,50,50);
}, 50);