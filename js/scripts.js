$(document).ready(function() {
  $(".bg-info").click(function() {
    $("body").toggleClass("background-color")
    $("body").toggleClass("text-color")
  });
  $(".click").click(function(){
    $(".click").toggleClass("box")
    $(".click").toggleClass("highlight")
  });
});
