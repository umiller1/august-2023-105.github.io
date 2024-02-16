// give cards random colors on load
$(document).ready(function(){

    var colors = ["#004d5a", "#4a0500", "#c87b00", "#008871", "#468800"];
    
    $('body').each(function(){
      var new_color = colors[Math.floor(Math.random()*colors.length)];
      $(this).css('background-color',new_color);
    });
   
  });