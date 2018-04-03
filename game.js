$(document).ready(function() {
  $(".wall .dot").removeClass("active");
  $(".end").hide();
});

var points = 0;
var time = 30;
// var newAudio = document.createElement("audio");
// newAudio.setAttribute("src","./Sound/imveryrich.mp3");

function endGame() {
  $(".wall").hide();
  $(".end").show();
}

function countDown() {
  setInterval(function () {
    if (time === 0) {
      endGame();
      return;
    }
    time -= 1;
    $(".time span").html("00:" + time);
    }, 1000);
    if (time > 0) {
      $(".time span").html("00:" + time);
    } else {
      return;
    }
};

function randomDot() {
  setInterval(function() {
    var index = Math.floor(Math.random() * $(".wall div").length);   
    $(".wall div").eq(index).removeClass("dot").addClass("active");
    // var newAudio = document.createElement("audio");
    // newAudio.setAttribute("src","./Sound/imveryrich.mp3");
    // newAudio.play();
    // setTimeout(function() {
    //   var newAudio = document.createElement("audio");
    //   newAudio.setAttribute("src", "./Sound/imveryrich.mp3");
    //   newAudio.play();
    // },1000);
    setTimeout(function() {
      $(".wall div").eq(index).removeClass("active").addClass("dot");
      // newAudio.pause();
      // newAudio.currentTime = 0;
    }, 2000);
  }, 2000);
};

$(".start button").click(function() {
  countDown();
  randomDot();
  $(this).hide();
});

$(".wall .active").click(function() {
  $(this).removeClass("active").addClass("dot");
  var audio = document.createElement("audio");
  audio.setAttribute("src", "./Sound/motherfuck.wav");
  audio.play();
  points += 1;
  $(".points span").html(points);
  $(".score span").html(points);
});

