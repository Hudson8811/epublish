$(document).ready(function() {
    $("input[name='phone']").mask(" +7 (999) 999-99-99");


    if($('.homepage-banner-slider').length>0){
        $('.homepage-banner-slider').slick({
            dots: true
        });
    }

    if($('[data-fancybox="cert"]').length>0){
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

});
