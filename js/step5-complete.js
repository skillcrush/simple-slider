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
    // hook up next button
    // hook up dots nav
    // activate first slide
    // activate first dot
    // Slide Automatically or Nah...
  };

  // Slide Automatically
  // private function
  function autoNext() {
  }

  // Navigate to next slide
  // public method
  slider.next = () => {

  };

  // Navigate to previous slide
  slider.prev = () => {

  };

  // Navigate to slide by index
  slider.setSlideByIndex = index => {

  };

  // return the slider object with public methods
  return slider;
}(jQuery)); //pass in any needed global variables
