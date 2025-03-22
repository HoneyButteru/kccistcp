$(".bh_tab_btn").click(function() {
    var _this = $(this);
    var bh_tab_wrap = _this.closest(".bh_tab_wrap")
    bh_tab_wrap.find(".bh_tab_btn").removeClass('active');
    _this.addClass('active');
    bh_tab_wrap.find(".bh_tab_li").removeClass('on');
    bh_tab_wrap.find("." + $(this).data('li')).addClass('on');
});


$("#quick_menu").click(function() {
	$("#quick_menu").toggleClass('on');
});


const $counters = $(".counter");
const exposurePercentage = 100;
const duration = 2000;
const addCommas = true;

$(window).scroll(function() {
	$counters.each(function() {
		const $el = $(this);
		if (!$el.data('scrolled')) {
			const rect = $el[0].getBoundingClientRect();
			const winHeight = window.innerHeight;
			const contentHeight = rect.bottom - rect.top;
			if (rect.top <= winHeight - (contentHeight * exposurePercentage / 100) && rect.bottom >= (contentHeight * exposurePercentage / 100)) {
				const start = parseInt($el.data("start"));
				const end = parseInt($el.data("end"));
				updateCounter($el, start, end);
				$el.data('scrolled', true);
			}
		}
	});
});





function updateCounter($el, start, end) {
	let startTime;
	function animateCounter(timestamp) {
		if (!startTime) startTime = timestamp;
		const progress = (timestamp - startTime) / duration;
		const current = Math.round(start + progress * (end - start));
		const formattedNumber = addCommas ? current.toLocaleString() : current;
		$el.text(formattedNumber);
		
		if (progress < 1) {
			requestAnimationFrame(animateCounter);
		} else {
			$el.text(addCommas ? end.toLocaleString() : end);
		}
	}
	requestAnimationFrame(animateCounter);
}

/*
$(".bh_toggle").click(function(){
	var _this = $(this).parent();

	if (_this.hasClass('active')){
		_this.children('.bh_toggle_content').stop().slideUp(200, function() {
			_this.removeClass('active');
		});
	} else {
		$(".bh_toggle").parent().children('.bh_toggle_content').stop().slideUp(200, function() {
			$(".bh_toggle").parent().removeClass('active');
		});
		_this.children('.bh_toggle_content').stop().slideDown(200, function() {
			_this.addClass('active');
		});
	}
});
*/
$(".bh_toggle").click(function(){
	$(".bh_toggle_content").toggleClass('on');
});

jQuery(function($){

	$(function(){
		//$('#header').load("header.html");
		//$('#footer').load("footer.html");
		//$('#quick_menu').load("quick_menu.html");
	})

});
$(window).scroll(function(){
	var Pin  = $(document).scrollTop();
	if(Pin > 0){
		$('.header_wrap').addClass('on');
		$('.header_wrap .logo_img.d_ver').addClass('on');
		$('.header_wrap .logo_img.w_ver').removeClass('on');
	}
	else if(Pin  == 0){
		$('.header_wrap').removeClass('on');
        $('.header_wrap .logo_img.w_ver').addClass('on');
		$('.header_wrap .logo_img.d_ver').removeClass('on');
	}
});


$(function() {
    //input을 datepicker로 선언
    $(".datepicker").datepicker({
     dateFormat: 'yy-mm-dd',
     prevText: '이전 달',
     nextText: '다음 달',
     monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
     monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
     dayNames: ['일', '월', '화', '수', '목', '금', '토'],
     dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
     dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
     showMonthAfterYear: true,
     yearSuffix: '년',
     onSelect: function(dateText, inst) {
         $(this).addClass('on');
     }
    });                    
});
