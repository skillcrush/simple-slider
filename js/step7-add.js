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

//////////////////////////////////

$next.click(slider.next);
