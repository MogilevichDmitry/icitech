$(document).ready(function () {

    _papersheet = $(".papersheet");
    _trigger = $(".papersheet__trigger");

    _trigger.click(function () {

        if (_papersheet.hasClass("opened")) {
            $(this).parent(".papersheet").stop().removeClass("opened");
            $(".feedback-btn").fadeIn(400);
            $(".papersheet__close-icon").fadeOut(50);
        } else {
            $(this).parent(".papersheet").stop().addClass("opened");
            $(".feedback-btn").fadeOut(50);
            $(".papersheet__close-icon").fadeIn(400);
        }
    });
});