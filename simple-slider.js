var SimpleSlider = (function ($) {

  var slider = {};

  // set slider config defaults
  slider.config = {
    showArrows: true,
    slideDuration: 5000
  };

  // initialize slider with config
  slider.init = function(config){
    if(config && typeof(config) == 'object') {
      $.extend(slider.config, config);
    }
    console.log(slider.config);
  };

  // REQUIREMENTS
  // Slide Automatically
  // Track current slide
  // Navigate to next slide
  // Navigate to previous slide
  // Navigate to slide by index

  // TODOS
  // Get slider element
  // get next button element
  // get prev button element
  // get dots container element


  return slider;
}(jQuery)); //pass in any needed global variables

// initialize slider with config overrides
SimpleSlider.init({
  showArrows: false
});
