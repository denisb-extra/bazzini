$(document).ready(function ($) {
    window.addEventListener('scroll', onScroll);
    function onScroll(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop;
            shrinkOn = 30;
        if (distanceY > shrinkOn) {
            $("header" ).addClass("scrolled");
        } else {
            $("header" ).removeClass("scrolled");
        }
    }
    onScroll();
    
    
    $(".mobile_menu").simpleMobileMenu({
        "menuStyle": "slide",
    });

    $("[scroll-to]").on("click", function(){
        var trgt = $(this).attr('scroll-to');
        $('html, body').animate({
            scrollTop: $(trgt).offset().top
        }, 1000);
    });

    $(".menu-line .item").on("click", function(){
		let items = $(this).closest(".menu-line").find(".items");
		$(".item", items).removeClass("active");
		$(this).addClass("active");
	});
	
    if($(window).width() <= 950) {
		$(".menu-line .title-mobile").on("click", function(){
			let items = $(this).closest(".menu-line").find(".items");
			items.slideToggle();
		});
		$(".menu-line .item").on("click", function(){
			let items = $(this).closest(".menu-line").find(".items");
			let titleMobile = $(this).closest(".menu-line").find(".title-mobile");
			let title = $(this).find("span").text();
			titleMobile.find("span").text(title);
			items.slideToggle();
		});
	}

    document.addEventListener( 'wpcf7mailsent', function( event ) {
        var inputs = event.detail.inputs;
        thankyouPage = getFieldValueByName(inputs, "thankyou-page");
        if(thankyouPage) window.location = thankyouPage;
    }, false );
});

function getFieldValueByName(ar, name){
    var result = "";
    ar.forEach(function(item) {
        if(item.name == name) result = item.value;
    });
    return result;
}



