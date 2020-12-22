$target = $(".slider").first();
currentPosition = parseInt($target.css("transform").split(",")[4]);

moveBy = function (scrolledBy) {
	currentPosition += scrolledBy;
	$target.css("transform", "translateX(" + currentPosition + "px)");
};

lastScrollTop = 0;

currentPosition = isNaN(currentPosition) ? 0 : currentPosition;

$(window).bind("scroll", function (e) {
	var scrolledBy = $(window).scrollTop() - lastScrollTop;
	moveBy(-scrolledBy);
	lastScrollTop = $(window).scrollTop();
});

$(window).scroll(function () {
	console.log($(window).scrollTop());
});