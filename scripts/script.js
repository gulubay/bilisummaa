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


ecwidMessages = {
"ProductBrowser.ModernButton.add_to_bag":"Coming Soon"
}


// $(document).ready(function() {

//  function checkWidth() {
//         var windowsize = $window.width();
//         if (windowsize >= 700) {
//           function openNav() {
//               document.getElementById("menu-tabs").style.marginLeft = "0%";
//               // document.getElementById("mainWrapper").style.marginLeft ="90%";
//               document.getElementsByTagName("body")[0].style.overflow  = "hidden"; 
//               // document.getElementById("home-image").style.marginLeft = "90%";
//           }

//           function closeNav() {
//             document.getElementById("menu-tabs").style.marginLeft = "-30%";
//             // document.getElementById("mainWrapper").style.marginLeft = "0";
//             document.getElementsByTagName("body")[0].style.overflow  = "visible";
//           };
//         }

// checkWidth();
//  $(window).resize(checkWidth);

// });

// var countDownDate = new Date("June 14, 2017 6:00:00").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get todays date and time
//   var now = new Date().getTime();

//   // Find the distance between now an the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("day").innerHTML = days;
//   document.getElementById("hour").innerHTML =  hours;
//   document.getElementById("minute").innerHTML = + minutes;
//   document.getElementById("second").innerHTML = seconds;

//   // If the count down is finished, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("day").innerHTML = "X";
//     document.getElementById("hour").innerHTML = "X";
//     document.getElementById("minute").innerHTML = "X";
//     document.getElementById("second").innerHTML = "X";
//   }
// }, 1000);



// // function myFunction() {
// //     var y = document.getElementById('slideout');
// //     var x = document.getElementById('emailbox');
// //     if (x.style.display === 'none') {
// //         x.style.display = 'block';
// //         y.style.display = 'none';
// //     } else {
// //         x.style.display = 'none';
// //     }
// // }


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

//   var nextButton = document.getElementById('next-feeds');
//     var imgs = [];              // store the images for caching
//     var images = [];
//     var currentPage = 1;

//   var feed = new Instafeed({
//   get: 'user',
//   userId: '4792937054',
//   accessToken: '4792937054.a746536.81c1584fa94844b9af47fbbf92526372',
//   limit: 8,
//   sortBy: 'most-liked',
//   template: '<div class="col-6 col-lg-3 col-xl-3 col-md-3 col-sm-6 instafeed-img"><a href="{{link}}" target="_blank"><img src="{{image}}" class="img-responsive" /></a></div>',
//   resolution: 'low_resolution'

// cachedNext: function () {   // read the cached instagram data
//             var nextImages = imgs.slice((currentPage - 1) * feed.options.limit, (currentPage) * feed.options.limit);
//             $("#instafeed").html(nextImages);
//         },
//         after: function () {
//             if (images.length < 300)
//             {
//                 feed.next();
//             }
//             else
//             {
//                 var result;
//                 images.sort(compare);
//                 for (i = 0; i < images.length; i++) {
//                     image = images[i];
//                     result = this._makeTemplate(this.options.template, {
//                         model: image,
//                         id: image.id,
//                         link: image.link,
//                         image: image.images[this.options.resolution].url,
//                         likeCount: image.likes.count
//                     });
//                     imgs.push(result);
//                 }
//                 var imgsPerPage = imgs.slice((currentPage - 1) * feed.options.limit, (currentPage) * feed.options.limit);
//                 $("#instafeed").html(imgsPerPage);
//             }
//         },
//         success: function (data) {
//             images.push.apply(images, data.data);
//         }
//     });

//     feed.run();

//     // bind the next button
//     nextButton.addEventListener('click', function () {
//         $("#instafeed").fadeOut(100);
//         $("#instafeed").empty();
//         $("#instafeed").fadeIn(100);
//         currentPage++;

//         feed.options.cachedNext();
//     });

//     function compare(a, b) {
//         // alert(a.likes.count);
//         if (a.likes.count < b.likes.count)
//             return -1;
//         if (a.likes.count > b.likes.count)
//             return 1;
//         return 0;
//     }