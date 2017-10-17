// SimpleSlider is an immediately invoked function expression (IIFE)
// It returns an object with public methods and properties that can be used to configure and control the slider without modifying the source code
// it obscures private functions and variables
const SimpleSlider = (function ($) {

  // initialize "global" variables
  let slider = {};

  // initialize slider with config
  // this sets everything up
  slider.init = config => {
    // if config provided, merge it with default config
    // get slider element
    // get slides
    // get prev button element
    // get next button element
    // get dots container element
    // hook up prev button
    // hook up next button
    // hook up dots nav
    // activate first slide
    // activate first dot
    // Slide Automatically or Nah...
  };

  // return the slider object with public methods
  return slider;

}(jQuery)); //pass in any needed global variables
