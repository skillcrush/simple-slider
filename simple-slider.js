var SimpleSlider = (function ($) {

  var slider = {},
    $container,
    $slides;

  // set slider config defaults
  slider.config = {
    containerSelector: '#simpleSlider',
    showArrows: true,
    slideDuration: 5000
  };

  // initialize slider with config
  slider.init = function(config){
    if(config && typeof(config) == 'object') {
      $.extend(slider.config, config);
    }

    // TODOS
    // get slider element
    $container = $(slider.config.containerSelector);
    console.log($container);
    // get slides
    $slides = $container.find('.slide');
    console.log($slides);

    // get next button element
    // get prev button element
    // get dots container element

  };

  // REQUIREMENTS
  // Slide Automatically
  autoNext = function(){

  };

  // Navigate to next slide
  slider.next = function(){
    var currentIndex;
    // get all slides
    // find active slide
    var $activeSlide = $slides.filter(function(index){
      if($(this).hasClass('active')){
        currentIndex = index;
      }
      return $(this).hasClass('active');
    });
    // remove active class from active slide
    $activeSlide.removeClass('active');
    // apply active class to next slide
    // handle when next slide is first slide
    if($slides.length === currentIndex+1){
      $($slides[0]).addClass('active');
    }else{
      $($slides[currentIndex+1]).addClass('active');
    }
  };

  // Navigate to previous slide
  slider.prev = function(){
    var currentIndex;
    // get all slides
    // find active slide
    var $activeSlide = $slides.filter(function(index){
      if($(this).hasClass('active')){
        currentIndex = index;
      }
      return $(this).hasClass('active');
    });
    // remove active class from active slide
    $activeSlide.removeClass('active');
    // apply active class to prev slide
    // handle when prev slide is last slide
    if(currentIndex === 0){
      $($slides[$slides.length-1]).addClass('active');
    }else{
      $($slides[currentIndex-1]).addClass('active');
    }
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

SimpleSlider.next();
SimpleSlider.next();
SimpleSlider.prev();
SimpleSlider.prev();
SimpleSlider.prev();
SimpleSlider.prev();
