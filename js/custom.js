$('.main-nav').on('click', '.main-nav__search-button__icon', function (e) {
    var selector = $(this).data('selector');

    $(selector).toggleClass('show').find('.main-nav__search-box__input').focus();
    $(this).toggleClass('active');

    e.preventDefault();
});