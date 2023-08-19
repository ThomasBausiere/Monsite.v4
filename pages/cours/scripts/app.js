let text = document.getElementById('text');
let hill1 = document.getElementById('hill1');
let hill2 = document.getElementById('hill2');
let hill3 = document.getElementById('hill3');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let hill6 = document.getElementById('hill6');
let hill7 = document.getElementById('hill7');

let sun = document.getElementById('sun');
let sky = document.getElementById('sky');
const maxHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener('scroll',  () => {
    let value =window.scrollY;
        // Limiter le défilement pour ne pas avoir une page avec scroll infini
        if (value > maxHeight) {
            window.scrollTo(0, maxHeight);
            return;
        }
    text.style.marginTop = value * 2.5 + 'px';
    hill1.style.top = value * -1.2 + 'px';
    hill2.style.top = value * -1 + 'px';
    hill3.style.top = value * -0.7 + 'px';
    hill4.style.top = value * -0.6 + 'px';
    hill5.style.top = value * -0.5 + 'px';
    hill6.style.top = value * -0.4 + 'px';
    hill7.style.top = value * -0.3 + 'px';
    sun.style.top = value * -.3 + 'px';





     
});

