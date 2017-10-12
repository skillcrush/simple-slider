var SimpleSlider = (function ($) {

  var slider = {},
    $container;

  // set slider config defaults
  slider.config = {
    containerId: 'simpleSlider',
    showArrows: true,
    slideDuration: 5000
  };

  // initialize slider with config
  slider.init = function(config){
    if(config && typeof(config) == 'object') {
      $.extend(slider.config, config);
    }

    // TODOS
    // Get slider element
    $container = $(slider.config.containerId);

    // get next button element
    // get prev button element
    // get dots container element

    console.log(slider.config);
  };

  // REQUIREMENTS
  // Slide Automatically
  autoNext = function(){

  };

  // Navigate to next slide
  slider.next = function(){

  };

  // Navigate to previous slide
  slider.prev = function(){

  };

  // Navigate to slide by index
  slider.setSlideByIndex = function(index){

  };

  // Track current slide

  return slider;
}(jQuery)); //pass in any needed global variables

// initialize slider with config overrides
SimpleSlider.init({
  showArrows: false
});
