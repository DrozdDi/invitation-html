$(document).ready(function(){

    $('.about__toggle').click(function(event){
        event.preventDefault();
        console.log('click');

        $('.about-content__box').hide();
        
    

        var href = $(this).attr('href');
        
        $(href).fadeIn();

    });

    var windowHeight = $(window).height();

    $(window).scroll(function(){

        if($(this).scrollTop() > windowHeight){
            $('#scrollToTop').fadeIn();
        }
        else{
            $('#scrollToTop').fadeOut();
        }

    });

    

    $('#scrollToTop').click(function(event){
        event.preventDefault();
        $('html').animate({scrollTop: 0}, 800)
    });

});