$(document).ready(function () {
    $("input[name='phone']").mask(" +7 (999) 999-99-99");


    if ($('.homepage-banner-slider').length > 0) {
        $('.homepage-banner-slider').slick({
            dots: true
        });
    }

    if ($('[data-fancybox="cert"]').length > 0) {
        $('[data-fancybox="cert"]').fancybox({
            buttons: [
                "zoom",
                //"share",
                //"slideShow",
                //"fullScreen",
                //"download",
                //"thumbs",
                "close"
            ]
        });
    }
    if ($(".questionsAccordion").length > 0) {
        $(".questionsAccordion").accordion({
            header: ".questions__question",

            collapsible: true,
            active: false,
            heightStyle: "content",
            beforeActivate: function(event, ui) {
                // The accordion believes a panel is being opened
               if (ui.newHeader[0]) {
                   var currHeader  = ui.newHeader;
                   var currContent = currHeader.next('.ui-accordion-content');
                // The accordion believes a panel is being closed
               } else {
                   var currHeader  = ui.oldHeader;
                   var currContent = currHeader.next('.ui-accordion-content');
               }
                // Since we've changed the default behavior, this detects the actual status
               var isPanelSelected = currHeader.attr('aria-selected') == 'true';

                // Toggle the panel header
               currHeader.toggleClass('ui-corner-all',isPanelSelected).toggleClass('accordion-header-active ui-state-active ui-corner-top',!isPanelSelected).attr('aria-selected',((!isPanelSelected).toString()));

               // Toggle the panel icon
               currHeader.children('.ui-icon').toggleClass('ui-icon-triangle-1-e',isPanelSelected).toggleClass('ui-icon-triangle-1-s',!isPanelSelected);

                // Toggle the panel content
               currContent.toggleClass('accordion-content-active',!isPanelSelected)
               if (isPanelSelected) { currContent.slideUp(); }  else { currContent.slideDown(); }

               return false; // Cancel the default action
           }
        });
    }



    $('.iframe').each(function () {
       var url = $(this).attr('href');
       var thumb = Youtube.thumb(url, 'big');
       console.log(thumb);
       $(this).find('img').attr('src',thumb).show();
    });
});


var Youtube = (function () {
    'use strict';

    var video, results;

    var getThumb = function (url, size) {
        if (url === null) {
            return '';
        }
        size    = (size === null) ? 'big' : size;
        results = url.match('[\\?&]v=([^&#]*)');
        video   = (results === null) ? url : results[1];

        if (size === 'small') {
            return 'http://img.youtube.com/vi/' + video + '/2.jpg';
        }
        return 'http://img.youtube.com/vi/' + video + '/0.jpg';
    };

    return {
        thumb: getThumb
    };
}());
