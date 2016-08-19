$( document ).ready(function() {
    $(function () {
        $("#typed-tagline").typed({
            strings: [
                "Imagine. Create. Improve.",
            ],
            typeSpeed: 40,
        });
    });
    $(function () {
        setTimeout(
            function() {
                $(".typed-cursor").hide()
            }, 3000);
    });
});