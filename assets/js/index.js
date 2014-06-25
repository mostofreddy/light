function parallax(){
    var jumboHeight = $('.paralax-up').outerHeight();
    var scrolled = $(window).scrollTop();
    $('.paralax-bg').css('height', (jumboHeight-scrolled) + 'px');
}

$(window).scroll(function(e){
    parallax();
});
