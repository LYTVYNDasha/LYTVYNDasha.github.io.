
var slideNow = 1;
var slideCount = $('#slider__wrapper').children().length;
var slideInterval = 3000;
var navBtnId = 0;
var translateWidth = 0;
let scrollPos = $(window).scrollTop()
let header = $("#header")
let headerinner = $("#header__inner")
let intro = $("#intro")
let introH = intro.innerHeight()
let burger = ("#burger")
let burgerItem = ("#burger__item")
let nav = ("#nav")



$(document).ready(function() {
    var switchInterval = setInterval(nextSlide, slideInterval);

    $('#viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    $('#next-btn').click(function() {
        nextSlide();
    });

    $('#prev-btn').click(function() {
        prevSlide();
    });

    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slider__wrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',

            });
            slideNow = navBtnId + 1;
        }
    });

    function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slider__wrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slider__wrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}

function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slider__wrapper').css('transform', 'translate(0, 0)' , )

    
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slider__wrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }

}
 // smooth scroll
 $("[data-scroll]").on("click",function(event){
    event.preventDefault()

    let elementId = $(this).data('scroll')
    let elementOffset = $(elementId).offset().top

    $("html ,body").animate({
         scrollTop:elementOffset -40
    } , 700)
 })

        $(window).on("scroll load resize" , function() {
        introH = intro.innerHeight()
        scrollPos = $(this).scrollTop()

        if (scrollPos > introH) {
            header.addClass("fixed")
           

        }
        else{
            header.removeClass("fixed")
        }    

    })

    ////////////burger//////////////////

    $("#burger").on("click",function(event){
        event.preventDefault()

        $(burgerItem).toggleClass("active")
        $(nav).toggleClass("active")
        $(header).toggleClass("active")
    })

});







