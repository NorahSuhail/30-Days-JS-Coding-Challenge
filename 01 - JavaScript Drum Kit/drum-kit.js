  //Functions 
  function playSounds(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //Stop function from runing
    audio.currentTime = 0; //rewind to the start
    audio.play();
    key.classList.add('playing');
  }

  function removeTransition (e) {
    if(e.propertyName !== 'transform') return; 
    this.classList.remove('playing');
  }

  //Get Keys using DOM 
  const keys = document.querySelectorAll('.key');

  //Event Listener 
  window.addEventListener('keydown', playSounds);
  keys.forEach(key => key.addEventListener('transitionend',removeTransition));
