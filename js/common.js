$(document).ready(function () {

    _papersheet = $(".papersheet");
    _trigger = $(".papersheet__trigger");

    _trigger.click(function () {

        if (_papersheet.hasClass("opened")) {
            $(".papersheet").stop().removeClass("opened");
        } else {
            $(".papersheet").stop().addClass("opened");
        }
    });

    $("body").keydown(function(e) {
        if (e.which == 27) {
            $(".papersheet").stop().removeClass("opened");
        }
    });
});