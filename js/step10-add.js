// get active slide
const activeSlide = $slides.filter('.activeText');
// get active dot
const activeDot = $dots.filter('.active');
// remove active class from active slide & dot
activeSlide.removeClass('activeText');
activeDot.removeClass('active');
// make slide at given index active
$($slides[index]).addClass('activeText');
// make slide at given index active
$($dots[index]).addClass('active');

////////////////

$dots.each( (i, dot) => {
  $(dot).click( () => {
    slider.setSlideByIndex($dots.index(dot));
  });
});
