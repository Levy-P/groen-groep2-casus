const c = document.getElementById('canvas');
const ctx = c.getContext('2d');

setInterval(() => {
    c.width = window.innerWidth;
}, 50);