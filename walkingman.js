console.log('hello');

var count = 0;

$(function(){
  $('html').keydown(function(event){
    var windowWidth = $(window).width();
    var charWidth = $('.man').width();
    var key = event.keyCode;
    if (key === 39 && count <= (windowWidth - charWidth - 20)) {
      count += 10;
      var left = count+'px';
    } else if (key === 37 && count >= 20) {
      count -= 10;
      var left = count+'px';
    }
    $('.man').css({ left: left });
  })
});
