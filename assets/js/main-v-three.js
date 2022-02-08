jQuery.noConflict();
(function ($) {
    //justifiedGallery
    $("#gallery-nivedita").justifiedGallery({
        rowHeight: 250,
        lastRow: 'justify',
        border: -5,
        maxRowsCount: 0,
        margins: 0
    });
    /*
     * Plugin intialization
     */
    $('#pagepiling').pagepiling({
        menu: '#menu-nivedita',
        direction: 'horizontal',
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
        afterRender: function () {
            $('#pp-nav').addClass('custom');
        },
        afterLoad: function (anchorLink, index) {
            if (index > 1) {
                $('#pp-nav').removeClass('custom');
            } else {
                $('#pp-nav').addClass('custom');
            }
        }
    });
    $('.menu-nivedita-active li').click(function () {
        $('li').removeClass("active");
        $(this).addClass("active");
    });

    return false;
})(jQuery);