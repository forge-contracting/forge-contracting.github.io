$(document).ready(function () {

    adjustHeaderBg();
    $(window).scroll(function(){
        adjustHeaderBg();
    });

    $(window).stellar();

	
    // Pretty photo
    $("a[data-rel^='prettyPhoto']").prettyPhoto({
        animationSpeed: 'slow',
        theme: 'light_square',
        slideshow: false,
        overlay_gallery: false,
        social_tools: false,
        deeplinking: false,
        show_title: true
    });


    // ISOTOPE
    /* activate jquery isotope */
    var $container = $('.portfolio-items').isotope({
        itemSelector: '.item',
        masonry: {
            columnWidth: '.col-sm-3'
        }
    });

    // bind filter button click
    $('.filters-group').on('click', 'a', function () {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        $('.portfolio-items').isotope({filter: filterValue});
    });

    /* For CSS animation */
    new WOW().init();

});

$(window).on("debouncedresize", function (event) {
    $('.portfolio-items').isotope();
});

function adjustHeaderBg() {
    var scrollValue = $(window).scrollTop();
    if (scrollValue > 76) {
        $(".navbar").addClass('header-overlay');
    }  else
    if ($(".navbar").hasClass('header-overlay')) {
        $(".navbar").removeClass('header-overlay');
    }
}

// The rest is for the contact form
$(function () {

    $('.contact-form').submit(submitForm);

});


function submitForm() {
    var contactForm = $(this);

    if (!$('#senderName').val() || !$('#senderEmail').val() || !$('#message').val()) {

        window.alert("Please fill in all fields in the form.");

    } else {

        $.ajax({
            url: contactForm.attr('action'),
            type: contactForm.attr('method'),
            data: contactForm.serialize(),
            success: submitFinished
        });
    }

    return false;
}

function submitFinished(response) {
    response = $.trim(response);

    if (response == "success") {

        window.alert("Thanks for sending your message! We'll get back to you shortly.");

        $('#senderName').val("");
        $('#senderEmail').val("");
        $('#message').val("");

    } else {

        window.alert("There was a problem sending your message. Please try again.");

    }
}
