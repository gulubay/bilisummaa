function openNav() {
  document.getElementById("menu-tabs").style.marginLeft = "0%";
  // document.getElementById("mainWrapper").style.marginLeft ="90%";
  document.getElementsByTagName("body")[0].style.overflow  = "hidden"; 
  // document.getElementById("home-image").style.marginLeft = "90%";
}

function closeNav() {
  document.getElementById("menu-tabs").style.marginLeft = "-90%";
  // document.getElementById("mainWrapper").style.marginLeft = "0";
  document.getElementsByTagName("body")[0].style.overflow  = "visible";
};








//////////   SNIPCART ADDITIIONS *********



// SIZES
$(document).ready(function () {
$('#my-size').change(function() {
    $('#my-button').data('item-custom2-value', $(this).val());
});
 });




//////////   INSTAGRAM *********


    
  var feed = new Instafeed({
	get: 'user',
	userId: '4792937054',
	accessToken: '4792937054.a746536.81c1584fa94844b9af47fbbf92526372',
	limit: 60,
	sortBy: 'most-liked',
	template: '<div class="col-6 col-lg-3 col-xl-3 col-md-3 col-sm-6 instafeed-img"><a href="{{link}}" target="_blank"><img src="{{image}}" class="img-responsive" /></a></div>',
	resolution: 'low_resolution',
	
      after: function () {
        var images = $("#instafeed").children();
        $(images.slice(8, images.length)).remove();
    }
});
	feed.run();



 // //////////// LIGHTBOX ************

//  function openModal() {
//   document.getElementById('myModal').style.display = "block";
// }

// function closeModal() {
//   document.getElementById('myModal').style.display = "none";
// }

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
