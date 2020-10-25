$(function () {
    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
    });

    $('.story_vid').venobox({
        spinner: 'wave',
    });

    $('.quote_inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
    });

//    mixitup filter start
    
    var containerEl = document.querySelector('.mix_item');

    var mixer = mixitup(containerEl);

})


function form_valid() {
    if (names.value == '') {
        names_err.innerHTML = 'Fill your full name';
        names_err.style = 'color: red;';
        names.style = 'border: 1px solid red;';
        names.focus();

        return false;
    } else if (emails.value == '') {
        emails_err.innerHTML = 'Fill your email address';
        emails_err.style = 'color: red;';
        emails.style = 'border: 1px solid red;';
        emails.focus();

        return false;
    } else if (!email_rgx.test(emails.value)) {
        emails_err.innerHTML = 'Please put a valid email address';
        emails_err.style = 'color: red;';
        emails.style = 'border: 1px solid red;';
        emails.focus();

        return false;
    } else if (subs.value == '') {
        subs_err.innerHTML = 'Put a subject';
        subs_err.style = 'color: red;';
        subs.style = 'border: 1px solid red;';
        subs.focus();

        return false;
    } else if (msgs.value == '') {
        msgs_err.innerHTML = 'Write your massage';
        msgs_err.style = 'color: red;';
        msgs.style = 'border: 1px solid red;';
        msgs.focus();

        return false;
    }
}

function remove() {
    if (names.value != '') {
        names_err.innerHTML = '';
        names.style = 'border: 1px solid inherit;';
    }

    if (emails.value != '') {
        emails_err.innerHTML = '';
        emails.style = 'border: 1px solid inherit;';
    }

    if (subs.value != '') {
        subs_err.innerHTML = '';
        subs.style = 'border: 1px solid inherit;';
    }
}

names.addEventListener('blur', remove);

emails.addEventListener('blur', remove);

subs.addEventListener('blur', remove);
