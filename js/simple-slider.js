
const SimpleSlider = (function () {

  let slider = {},
    container,
    slides;

  // set slider config defaults
  slider.config = {
    containerId: 'simpleSlider',
    showArrows: true,
    slideDuration: 5000,
    auto: true
  };

  // initialize slider with config
  slider.init = config => {
    if (config && typeof(config) == 'object') {
      // $.extend(slider.config, config);
      slider.config = Object.assign({}, slider.config, config);
    }

    // get slider element
    container = document.getElementById(slider.config.containerId);
    // get slides
    slides = container.getElementsByClassName('slide');
    // get next button element
    // get prev button element
    // get dots container element

    // Slide Automatically or Nah...
    if (slider.config.auto) autoNext();

  };

  // Slide Automatically
  function autoNext() {
    setInterval(slider.next, slider.config.slideDuration);
  }

  // Navigate to next slide
  slider.next = () => {
    // get all slides
    // find active slide
    const activeSlide = [...slides].filter( slide => slide.classList.contains('active') )[0];
    const currentIndex = [...slides].indexOf(activeSlide);
    // remove active class from active slide
    activeSlide.classList.remove('active');
    // apply active class to next slide
    // handle when next slide is first slide
    if (slides.length === currentIndex + 1) {
      slides[0].classList.add('active');
    } else {
      slides[currentIndex + 1].classList.add('active');
    }
  };

  // Navigate to previous slide
  slider.prev = () => {
    // get all slides
    // find active slide
    const activeSlide = [...slides].filter( slide => slide.classList.contains('active') )[0];
    const currentIndex = [...slides].indexOf(activeSlide);
    // remove active class from active slide
    activeSlide.classList.remove('active');
    // apply active class to next slide
    // handle when next slide is first slide
    if (currentIndex === 0) {
      slides[slides.length - 1].classList.add('active');
    } else {
      slides[currentIndex - 1].classList.add('active');
    }
  };

  // Navigate to slide by index
  slider.setSlideByIndex = index => {

  };

  // Track current slide

  return slider;
}()); //pass in any needed global variables
