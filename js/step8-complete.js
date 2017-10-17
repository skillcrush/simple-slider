// SimpleSlider is an immediately invoked function expression (IIFE)
// It returns an object with public methods and properties that can be used to configure and control the slider without modifying the source code
// it obscures private functions and variables
const SimpleSlider = (function ($) {

  // initialize "global" variables
  let slider = {},
    $container,
    $slides,
    $prev,
    $next,
    $dots;

  // set slider config defaults
  slider.config = {
    slideDuration: 5000,
    auto: true,
    containerSelector: '#simpleSlider',
    slideSelector: 'p',
    prevArrowSelector: '.arrows.prev',
    nextArrowSelector: '.arrows.next',
    dotsSelector: '.dot'
  };

  // initialize slider with config
  slider.init = config => {
    // get slider element
    $container = $(slider.config.containerSelector);
    // get slides
    $slides = $container.find(slider.config.slideSelector);
    // get prev button element
    $prev = $(slider.config.prevArrowSelector);
    // get next button element
    $next = $(slider.config.nextArrowSelector);
    // get dots container element
    $dots = $(slider.config.dotsSelector);
    // hook up prev button
    $prev.click(slider.prev);
    // hook up next button
    $next.click(slider.next);
    // hook up dots nav
    // activate first slide
    $($slides[0]).addClass('activeText');
    // activate first dot
    $($dots[0]).addClass('active');
    // Slide Automatically or Nah...
  };

  // Slide Automatically
  // private function
  function autoNext() {
  }

  // Navigate to next slide
  // public method
  slider.next = () => {
    // get active slide
    const activeSlide = $slides.filter('.activeText');
    // get active dot
    const activeDot = $dots.filter('.active');
    // get current index
    const currentIndex = $slides.index(activeSlide);
    // remove active class from active slide
    activeSlide.removeClass('activeText');
    activeDot.removeClass('active');
    // apply activeText class to next slide
    // if on last slide
    if (currentIndex === $slides.length -  1) {
      // make first slide active
      $($slides[0]).addClass('activeText');
      // make first dot active
      $($dots[0]).addClass('active');
    } else {
      // make next slide active
      $($slides[currentIndex + 1]).addClass('activeText');
      // make next slide dot
      $($dots[currentIndex + 1]).addClass('active');
    }
  };

  // Navigate to previous slide
  slider.prev = () => {
    // get active slide
    const activeSlide = $slides.filter('.activeText');
    // get active dot
    const activeDot = $dots.filter('.active');
    // get current index
    const currentIndex = $slides.index(activeSlide);
    // remove active class from active slide
    activeSlide.removeClass('activeText');
    activeDot.removeClass('active');
    // apply activeText class to next slide
    // handle when next slide is first slide
    if (currentIndex === 0) {
      // make last slide active
      $slides[$slides.length - 1].classList.add('activeText');
      // make last dot active
      $dots[$dots.length - 1].classList.add('active');
    } else {
      // make prev slide active
      $($slides[currentIndex - 1]).addClass('activeText');
      // make prev dot active
      $($dots[currentIndex - 1]).addClass('active');
    }
  };

  // Navigate to slide by index
  slider.setSlideByIndex = index => {

  };

  // return the slider object with public methods
  return slider;
}(jQuery)); //pass in any needed global variables
