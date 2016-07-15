function nextImage( currentImage ) {
  var images = document
    .getElementById( 'carousel' )
    .getElementsByClassName( 'carousel-image' );

  for( var index = 0; index < images.length; index++ ) {
    if( images.item( index ) === currentImage ) {
      return images.item( ( index + 1 ) % images.length );
    }
  }
}

function advanceImages() {
  var currentImage = document
    .getElementById( 'carousel' )
    .getElementsByClassName( 'selected' )[ 0 ];

  var next = nextImage( currentImage );

  next.classList.add( 'selected' );
  currentImage.classList.remove( 'selected' );
}

function startCarousel() {
  window.setInterval( advanceImages, 2000 );
}

startCarousel();
