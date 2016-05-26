$(document).foundation()
$(function () {

    // Returns width of browser viewport
    var browser = $(window).width();
    // Returns width of HTML document
    var document = $(document).width();

    $('.nav .toggle-nav').click(function (e) {
        $('.nav .nav-mobile').addClass('style-mobile').slideToggle('slow');
        e.preventDefault();
    });

});



//serchbar
$(document).ready(function () {
    $(".search-wrapper input").mouseenter(function () {
        $(".search-wrapper button").css("background-color", "#4aba10");


    });
    $(".search-wrapper input").mouseout(function () {
        $(".search-wrapper button").css("background-color", "");
    });
});
