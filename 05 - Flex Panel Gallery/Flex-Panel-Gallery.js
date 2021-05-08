const panels = document.querySelectorAll('.panel');

function toggleOpen(){
  this.classList.toggle('open');

}

function toggleActiv(e){
  if(e.propertyName.includes('flex')){
    this.classList.toggle('open-active');
  }
}

panels.forEach(penal => penal.addEventListener('click', toggleOpen))
panels.forEach(penal => penal.addEventListener('transitionend', toggleActiv))