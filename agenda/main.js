$('.timeline li').on('click', function(){
    $('.timeline li.activo').removeClass('activo');
    $(this).addClass('activo');
});


// give cards random colors on load
$(document).ready(function(){

    var colors = ["#FFD700","#00E1FF","#FF33AE","#00E2BF","#FFC3AD","#F2FEDC"];
    
    $('.card').each(function(){
      var new_color = colors[Math.floor(Math.random()*colors.length)];
      $(this).css('background-color',new_color);
    });
   
  });