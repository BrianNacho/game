$(document).ready(function() {
  $(".wall .dot").removeClass(".active");
  $(".end").hide();
});

var dot_selector = $(".wall .dot");

var points = 0;
var time = 30;

function countDown() {
  setInterval(function () {
    time -= 1;
    $(".time span").html("00:" + time);
    }, 1000);
    updateTime(function () {
      if (time > 0) {
      $(".time span").html("00:" + time);
      } else {
      $(".time span").html("00:00");
      clearInterval(updateTime);
      };
    });
};

function randomDot() {

};

function updateScore() {

};

$(".start button").click(function() {
  countDown();
  randomDot();
  updateScore();
});