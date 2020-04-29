$('.main-nav').on('click', '.main-nav__search-button__icon', function (e) {
    var selector = $(this).data('selector');

    $(selector).toggleClass('show').find('.main-nav__search-box__input').focus();
    $(this).toggleClass('active');

    e.preventDefault();
});

//tab custom js

$.fn.responsiveTabs = function () {

    return this.each(function () {
        var el = $(this),
            tabs = el.find('.dev-tabs__title'),
            content = el.find('.dev-tabs__content'),
            placeholder = $('<div class="dev-tabs__placeholder max-w-screen-xl mx-auto pt-20 pb-20 lg:pb-32 px-2"></div>').insertAfter(el);

        tabs.on('click', function () {
            var tab = $(this);

            tabs.not(tab).removeClass('active');
            tab.addClass('active');

            placeholder.html(tab.next().html());
        });

        tabs.filter(':first').trigger('click');
    });
}

$('.dev-tabs').responsiveTabs();

AOS.init();
