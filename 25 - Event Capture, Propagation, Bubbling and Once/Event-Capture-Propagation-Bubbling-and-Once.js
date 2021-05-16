const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {
    console.log(this.classList.value);
    //e.stopPropagation(); // Stop bubbling
}

document.body.addEventListener('click', logText);
divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    once: true
}));
button.addEventListener('click', () => { 
    console.log('Clicked');
    } , {
    capture: false,
    once: true
});