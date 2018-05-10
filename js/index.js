$(document).ready(function(){
	$(window).on("load",function(){
		imgLocation();
		var imgData = {"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"},{"src":"7.jpg"},{"src":"8.jpg"},{"src":"9.jpg"}]};
		window.onscroll = function(){
			if (checkFlag()) {
				$.each(imgData.data, function(index,value) {
					var box = $("<div></div>").addClass("box").appendTo("#container");
					var boximg = $("<div></div>").addClass("box-img").appendTo(box);
					$("<img />").attr("src","./img/"+$(value).attr("src")).appendTo(boximg);
				});
				imgLocation();
			}
		}
	});
});

function checkFlag(){
	var box = $(".box");
	var lastBoxHeight = box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
	var scrollHeight = $(window).scrollTop();
	var pageHeight = $(window).height();
	return (lastBoxHeight < scrollHeight+pageHeight)?true:false;
}

function imgLocation(){
	var box = $(".box");
	var boxWidth = box.eq(0).width();
	var num = Math.floor($(document).width()/boxWidth);
	var boxArr = [];
	box.each(function(index,value){
		var boxHeight = box.eq(index).height();
		if (index < num) {
			boxArr[index] = boxHeight;
		} else{
			var boxminheight = Math.min.apply(null,boxArr);
			var boxminIndex = $.inArray(boxminheight,boxArr);
			$(value).css({
				"position": "absolute",
				"top": boxminheight+"px",
				"left": box.eq(boxminIndex).position().left
			});
			boxArr[boxminIndex] += box.eq(index).height();
		}
	})
}
