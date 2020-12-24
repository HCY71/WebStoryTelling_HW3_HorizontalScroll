// //For debug
// $(window).scroll(function (e) {
// 	console.log("walker height: ", $(".walker").css("height"));
// 	console.log("container height: ", $(".container").css("height"));
// 	console.log("page_position: ", $(window).scrollTop());
// });

//Change .walker height
var menu_width = $(".menu").outerWidth();
$(".walker").css("height", menu_width - $(".menu").outerHeight());

$(window).scroll(function (e) {
	var page_position = $(window).scrollTop();
	var walker_top = $(".walker").offset().top;

	//Move .menu horizontally
	var move = page_position - walker_top;
	console.log("move: ", move);
	if (move >= 0 && move <= menu_width - $(window).width()) {
		$(".menu").css("left", -move);
	}
});

//Scroller
var s = skrollr.init();