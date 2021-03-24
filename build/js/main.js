// fixed and absolute social menu
$(document).ready(function(){
    if($(window).width() > 767){

        $(window).scroll(function(){
            var scroll = $(window).scrollTop();
            var newsTop = $("#newsLetter").offset().top;
            var socialHeight = $("#socialMenu").outerHeight();
            var showPoint = $("#blogContent").offset().top;
            var hidePoint = newsTop - socialHeight;

            if( scroll > showPoint && scroll < hidePoint){
                $("#socialMenu").removeClass("socialMenuScroll").addClass("socialMenuFixed");
            }
            else{
                $("#socialMenu").removeClass("socialMenuFixed").addClass('socialMenuScroll');
            }
        });
    }
});

// show and hide floating footer
$(window).scroll(function(){
    var deviceHeight = $( window ).height();
    var scroll = $(window).scrollTop();
    var footer = $("#footer").offset().top;
    var footerTop = footer - deviceHeight

    if( scroll > 100 && footerTop > scroll){
        $("#floadingFooter").removeClass("hidden").addClass("fixed");
    }
    else{
        $("#floadingFooter").addClass("hidden").removeClass("fixed");
    }
});

// activating owl carousel
$('.recContainer.owl-carousel').owlCarousel({
    loop:true,
    dots: false,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        767:{
            items:2,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})