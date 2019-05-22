function initMap() {
  // The location of Athens
  var athens = { lat: 37.98, lng: 23.72 };
  // The map, centered at Athens
  var map = new google.maps.Map(document.getElementById("googleMap"), {
    zoom: 15,
    center: athens
  });
  // The marker, positioned at Athens
  var marker = new google.maps.Marker({ position: athens, map: map });
}

var slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
