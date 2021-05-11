const pressed = [];
const secretCode = 'norahsuhail';
window.addEventListener('keyup', (e) => {
    pressed.push(e.key);
    console.log(pressed);
    if(pressed.join('').includes(secretCode)){
        console.log("WoW!");
        cornify_add();
    }
    pressed.splice(-secretCode.length -1, pressed.length - secretCode.length);
})