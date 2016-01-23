
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 500) {
        $(".mynavbar").addClass("smallheader");
    }
    if (scroll <= 500) {
        $(".mynavbar").removeClass("smallheader");
    }
});

