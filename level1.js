$(document).ready(function() {
  $(".wall .dot").removeClass("active");
  $(".end").hide();
});

var points = 0;
var time = 30;

function endGame() {
  $(".wall").hide();
  $(".end").show();
}

var blah = 0;

function countDown() {
  setInterval(function () {
    if (time === 0) {
      endGame();
      return;
    }
    time -= 1;
    $(".time span").html("00:" + time);
     blah = time;
    }, 1000);
    if (time > 0) {
      $(".time span").html("00:" + time);
    } 
};

function randomDot() {
  setInterval(function() {
    if (blah === 0) {
    return;
    }
    var index = Math.floor(Math.random() * $(".wall div").length);
    $(".wall div").eq(index).removeClass("dot").addClass("active");
    setTimeout(function() {
      $(".wall div").eq(index).removeClass("active").addClass("dot");
    }, 2200);
    // var sounds = ["./Sound/ieatfish.mp3",
    //               "./Sound/imveryrich.mp3",
    //               "./Sound/richardyoureugly.mp3",
    //               "./Sound/this-pied-piper.wav",
    //               "./Sound/thisisyourmom.mp3"];
    // var newAudio = document.createElement("audio");
    // var randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    // newAudio.setAttribute("src", randomSound);
    // newAudio.play();
  }, 2200);
};

$(".wall .active").click(function() {
  $(this).removeClass("active").addClass("dot");
  // var yells = ["./Sound/motherfuck.wav",
  //              "./Sound/notnowjianyang.mp3",
  //             //  "./Sound/shit-fight.wav",
  //             //  "./Sound/slowboattochina.mp3"
  //             ];
  // var audio = document.createElement("audio");
  // var randomYell = yells[Math.floor(Math.random() * yells.length)];
  // audio.setAttribute("src", randomYell );
  // audio.play();
  var sounds = ["./Sound/ieatfish.mp3",
                  "./Sound/imveryrich.mp3",
                  "./Sound/richardyoureugly.mp3",
                  "./Sound/this-pied-piper.wav",
                  "./Sound/thisisyourmom.mp3"];
    var newAudio = document.createElement("audio");
    var randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    newAudio.setAttribute("src", randomSound);
    newAudio.play();
  points += 1;
  $(".points span").html(points);
  $(".score span").html(points);
});

$(".start button").click(function() {
  countDown();
  randomDot();
  $(this).hide();
});

$(".end button").click(function() {
  document.location.href = "";
});