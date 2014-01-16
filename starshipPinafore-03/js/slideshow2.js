$(document).ready(function() {
  rotatePics(1);
});

function rotatePics(currentPhoto) {
  var numberOfPhotos = $('#rooms img').length;
  currentPhoto = currentPhoto % numberOfPhotos;
	
  $('#rooms img').eq(currentPhoto).fadeOut(function() {
    // re-order the z-index
    $('#rooms img').each(function(i) {
      $(this).css(
        'zIndex', ((numberOfPhotos - i) + currentPhoto) % numberOfPhotos
      );
    });
    $(this).show();
    setTimeout(function() {rotatePics(++currentPhoto);}, 2000);
  });
}
