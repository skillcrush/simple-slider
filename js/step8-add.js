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

////////////////////////

$prev.click(slider.prev);
