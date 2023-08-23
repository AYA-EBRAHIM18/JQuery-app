//? Nav bar access
$(".open").click(function () {
  $(".nav").animate({ width: "200px" }, 100).animate({ height: "100vh" }, 200);
  $(".home-content").animate({ marginLeft: "200px" }, 100);
});

$(".nav-close").click(function () {
  $(".nav").animate({ height: "0" }, 100).animate({ width: "0" }, 200);
  $(".home-content").animate({ marginLeft: "0px" }, 50);
});

//? Nav bar access

//? Navigation
$(".nav a").click(function () {
  var navId = $(this).attr("href");
  var navSection = $(navId).offset().top;
  $("html , body").animate({ scrollTop: navSection }, 100);
  $(this).css({ color: "#5A1713" });
  $(".nav a").not($(this)).css({ color: "white" });
});
//? Navigation

//? slide

$(".down").click(function () {
  $(".toggle").slideUp(500);
  $(this).next().slideDown(500);
});

//? slide

//?Contact
let max = 100;
$("textarea").keydown(function () {
  let textLength = $(this).val().length;
  var sub = max - textLength;
  if (sub <= 0) {
    $(".word").text("you exceeded the limit.");
  } else {
    $(".count").text(sub);
  }
});

//?Contact

//?counter
var countDown = new Date("Jun 16, 2024 12:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var difference = countDown - now;

  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);

  $(".day").html(`${days} D`);
  $(".hour").html(`${hours} h`);
  $(".minute").html(`${minutes} m`);
  $(".second").html(`${seconds} s`);
}, 1000);

//?counter
