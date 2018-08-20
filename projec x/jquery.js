$(document).ready(function() {
	$(".Sign_In_btn").click(function(){
		$(".background_Login").animate({left:"38%"},400);
		$(".background_Sign_up").animate({left:"61%"},400);
		$(".background_img").animate({left:"61%"},400);
		$(".fa-close").animate({left:"-100%"},400);
		$(".fa-close").css("color" , "#191717");

	});
});

$(document).ready(function() {
	$(".Sign_Up_btn").click(function() {
		$(".background_Login").animate({left:"39%"},400);
		$(".background_Sign_up").animate({left:"62%"},400);
		$(".background_img").animate({left:"39%"},400);
		$(".fa-close").animate({left:"191%"},400);
		$(".fa-close").css("color" , "#191717");
	});
});

$(document).ready(function() {
	$(".fa-close").click(function(){
		$(".background_Login").animate({left:"50%"},400);
		$(".background_Sign_up").animate({left:"50%"},400);
		$(".background_img").animate({left:"50%"},400);
		$(".fa-close").animate({left:"0%"},400);
		$(".fa-close").css("color" , "white");

	});
});