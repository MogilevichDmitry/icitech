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
});