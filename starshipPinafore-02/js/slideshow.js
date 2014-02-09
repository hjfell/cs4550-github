// from EARLE CASTLEDINE & CRAIG SHARKIE jQuery: Novice to Ninja - Chapter 4/06
$(document).ready(function(){
  slideShow();
});

function slideShow() {
  var current = $('#rooms .show');
  var next = current.next().length ? current.next() : current.siblings().first();
  
  current.hide().removeClass('show');
  next.fadeIn().addClass('show');
  
  setTimeout(slideShow, 2000);
}
