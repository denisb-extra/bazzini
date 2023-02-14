(function ( $ ) {
$.fn.counters = function() {
    var mainElement = this;
    $(mainElement).find('.counter-value').each(function() {
        var $this = $(this);
        countTo = $this.attr('data-count');
        $this.find(".num").text(countTo);
        $this.find(".num").text(0);
    });
    var scrollHandlerCounters = function(){
            var oTop = $(mainElement).offset().top - window.innerHeight;
            if ($(window).scrollTop() > oTop) {
            $(mainElement).find('.counter-value').each(function() {
                var $this = $(this),
                countTo = $this.attr('data-count');
                $({
                countNum: $this.find(".num").text()
                }).animate({
                    countNum: countTo
                },

                {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        let before = $this.attr('sign-before');
                        if(!before) before = "";
                        $this.find(".num").text(numberWithCommas(Math.floor(this.countNum)) + before);
                    },
                    complete: function() {
                        let before = $this.attr('sign-before');
                        if(!before) before = "";
                        $this.find(".num").text(numberWithCommas(this.countNum) + before);
                    }

                });
            });
            $(window).off("scroll", scrollHandlerCounters);
            }
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    scrollHandlerCounters();

    $(window).scroll(scrollHandlerCounters);

};

}( jQuery ));

