$('.timeline li').on('click', function(){
    $('.timeline li.activo').removeClass('activo');
    $(this).addClass('activo');
});