,
$container,
  $slides,
  $prev,
  $next,
  $dots;

////////////////////////////

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
