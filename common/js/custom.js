
//ページトップに戻る
$(function() {
	var topBtn = $('.top_btn');
	topBtn.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
    topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
    });
	
});
//カレント設定
$(function() {
	var id = $("body").attr("id");
	$("li." + id).addClass("active");
});
//$( document ).ready(function() {
//	var width = $(window).width();
//	$(".l_burger_icon").hide();
//	if(width <= 740){
//			
//			if($('html')[0].lang == "ja"){
//				$(".logo").show();
//				$(".l_burger_icon").show();
//				$(".l_header_title").attr("src","../common/images/mobile/poster_header.png");
//				$(".l_poster_header").attr("src","common/images/mobile/poster_header.png");
//				$(".l_header_title_sample").attr("src","common/images/mobile/poster_header.png");
//			}
//			else{
//				$(".logo").show();
//				$(".l_burger_icon").show();
//				$(".l_poster_header").attr("src","../common/images/mobile/poster_header_en.png");
//				$(".l_header_title_en").attr("src","../../common/images/mobile/poster_header_en.png");
//			}
//				$(".l_burger_icon").on("click",function(){
//					$(".overlay").show();
//					$(".l_side_contents").show();
//					$(".close_btn").show();
//				})
//				$(".close_btn").on("click",function(){
//					$(".overlay").hide();
//					$(".l_side_contents").hide();
//					$(".close_btn").hide();
//				})
//			
//		}
//		else{
//			if($('html')[0].lang == "ja"){
//				$(".l_burger_icon").hide();
//				$(".logo").hide();
//				$(".l_header_title").attr("src","../common/images/header_title.png");
//				$(".l_header_title_sample").attr("src","common/images/header_title.png");
//				$(".close_btn").hide();
//				$(".l_side_contents").show();
//			}
//			else{
//				$(".logo").hide();
//				$(".l_burger_icon").hide();
//				$(".l_header_title_en").attr("src","../../common/images/header_title_en.png");
//				$(".l_poster_header").attr("src","../common/images/poster_header.png");
//				$(".close_btn").hide();
//				$(".l_side_contents").show();
//			}
//				
//		}
//	$( window ).resize(function() {
//		var width = $(window).width();
//		if(width <= 740){
//			if($('html')[0].lang == "ja"){
//				$(".logo").show();
//				$(".l_burger_icon").show();
//				$(".l_header_title").attr("src","../common/images/mobile/poster_header.png");
//				$(".l_poster_header").attr("src","common/images/mobile/poster_header.png");
//				$(".l_header_title_sample").attr("src","common/images/mobile/poster_header.png");
//				$(".l_side_contents").hide();
//			}
//			else{
//				$(".l_burger_icon").show();
//				$(".logo").show();
//				$(".l_poster_header").attr("src","../common/images/mobile/poster_header_en.png");
//				$(".l_header_title_en").attr("src","../../common/images/mobile/poster_header_en.png");
//				$(".l_side_contents").hide();
//			}
//			$(".l_burger_icon").on("click",function(){
//				$(".overlay").show();
//				$(".l_side_contents").show();
//				$(".close_btn").show();
//			})
//			$(".close_btn").on("click",function(){
//				$(".overlay").hide();
//				$(".l_side_contents").hide();
//				$(".close_btn").hide();
//			})
//		}
//		else{
//			if($('html')[0].lang == "ja"){
//				$(".logo").hide();
//				$(".l_burger_icon").hide();
//				$(".l_header_title").attr("src","../common/images/header_title.png");
//				$(".l_poster_header").attr("src","common/images/poster_header_jp.png");
//				$(".l_header_title_sample").attr("src","common/images/header_title.png");
//				$(".close_btn").hide();
//				$(".l_side_contents").show();
//			}
//			else{
//				$(".logo").hide();
//				$(".l_burger_icon").hide();
//				$(".l_poster_header").attr("src","../common/images/poster_header.png");
//				$(".l_header_title_en").attr("src","../../common/images/header_title_en.png");
//				$(".close_btn").hide();
//				$(".l_side_contents").show();
//			}
//		}
//	
//	})		
//
//});