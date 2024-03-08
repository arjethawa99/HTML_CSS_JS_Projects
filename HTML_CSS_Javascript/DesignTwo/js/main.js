$(document).ready(function () {
    $(".fa-bars").click(function () {
        $(this).toggleClass("fa-times");
        $('nav').toggleClass("nav-toggle");
    });

    $(window).on("scroll load", function () {
        $(".fa-bars").removeClass("fa-times");
        $('nav').removeClass("nav-toggle");
    });

    $(".count").each(function () {
        var temp = $(this),
            countTo = temp.attr('data-count');
        $({ countNum: temp.text() }).animate({
            countNum: countTo
        },
            {
                duration: 5000,
                step: function () {
                    temp.text(Math.floor(this.countNum))
                },
                complete: function () {
                    temp.text(this.countNum + "+")
                }

            });
    });
    $(".projects").magnificPopup({
        delegate:"a",
        type:"image",
        gallery:{
            enabled:true
        }
    })

})