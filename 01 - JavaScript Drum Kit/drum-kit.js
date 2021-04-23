  let melody = [];
  
  //Functions 
  function playSounds(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    melody.push(e.key);
    if(!audio) return; //Stop function from runing
    audio.currentTime = 0; //rewind to the start
    audio.play();
    key.classList.add('playing');
  }

  function removeTransition (e) {
    if(e.propertyName !== 'transform') return; 
    this.classList.remove('playing');
  }

  function download() {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(melody));
    element.setAttribute('download', "melody.txt");

    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();

    document.body.removeChild(element);
  }

  //Get Keys using DOM 
  const keys = document.querySelectorAll('.key');

  //Event Listener 
  window.addEventListener('keydown', playSounds);
  keys.forEach(key => key.addEventListener('transitionend',removeTransition) );
  document.getElementById("btn").addEventListener("click", download)