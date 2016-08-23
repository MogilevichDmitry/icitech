$(document).ready(function () {

    _papersheet = $(".papersheet");
    _trigger = $(".papersheet__trigger");

    _trigger.click(function () {

        if (_papersheet.hasClass("opened")) {
            $(this).parent(".papersheet").stop().removeClass("opened");
        } else {
            $(this).parent(".papersheet").stop().addClass("opened");
        }
    });
});