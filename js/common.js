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

    $("#form").submit(function(event) {

        event.preventDefault();
        
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "contact.php",
			data: str,
			success: function(msg) {
				if(msg == 'ok') {
                    $(':input','#form').not(':button, :submit, :reset, :hidden').val('').removeAttr('selected');
				}
				else {
					alert("error");
				}
			}
		});
		return false;
	});

});