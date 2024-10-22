$(function () {
  $(".nav-btn").on("click", function () {
    $(this).toggleClass("open");
  });
});

$(window).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      $("#header").addClass("glass-effect");
    } else {
      $("#header").removeClass("glass-effect");
    }
  });
});

// window.onscroll = function () {
//   const navbar = document.getElementById("navbar");

//   if (window.scrollY > 100) {
//     navbar.classList.remove("transparent");
//   } else {
//     navbar.classList.add("transparent");
//   }
// };
