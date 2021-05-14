function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }


  const sliderImages = document.querySelectorAll('.slide-in');


  function checkSlide(e){
    console.log(e);
    sliderImages.forEach(sliderImage => {
      // half the image 
      const slideInAt= (window.scrollY + window.innerHeight);
      sliderImage.height / 2;
      //buttom of the image
      const imageButtom = sliderImage.offsetTop + sliderImage.height;
      // half shown
      const isHalfShown = slideInAt > sliderImage.offsetTop;
      // Nor Shown In window
      const isNotScrolledPast = window.scrollY < imageButtom;
      if (isHalfShown && isNotScrolledPast) {
        sliderImage.classList.add('active');
      } else {
        sliderImage.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll',debounce(checkSlide));
