var countDownDate = new Date("June 14, 2017 6:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML =  hours;
  document.getElementById("minute").innerHTML = + minutes;
  document.getElementById("second").innerHTML = seconds;

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("day").innerHTML = "X";
    document.getElementById("hour").innerHTML = "X";
    document.getElementById("minute").innerHTML = "X";
    document.getElementById("second").innerHTML = "X";
  }
}, 1000);



// function myFunction() {
//     var y = document.getElementById('slideout');
//     var x = document.getElementById('emailbox');
//     if (x.style.display === 'none') {
//         x.style.display = 'block';
//         y.style.display = 'none';
//     } else {
//         x.style.display = 'none';
//     }
// }