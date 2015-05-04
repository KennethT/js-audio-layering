//=require timer

$(document).ready(function() {
  $digi1 = document.getElementById("didgi4");

  $(".record").on("click", function() {
    $('#stopwatch').timer();

    $(".record").toggleClass("rotate");

    if ($(".record").hasClass("rotate")===false) {
      $('#stopwatch').timer('pause');
    }


    if($(".record").hasClass('rotate')) {
      $('audio')[0].currentTime = 5;
      $('audio')[0].play();

    }
    else if($('.record').hasClass('rotate') === false) {
        $('audio')[0].pause();
    }


  });
});
