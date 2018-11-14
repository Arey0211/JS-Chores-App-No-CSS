// line through item when clicked
$("ul").on("click", "li", function(){
	$(this).toggleClass("complete");
});

// delete item when span clicked
$("ul").on("click", "span", function(event){
	event.stopPropagation();
	$(this).parent().fadeToggle(500, function(){
		$(this).remove();
	});
});

//New Chore for Alana
$("input[type='text'].alana").keypress(function(){
	if (event.which == 13){
		var text = $(this).val();
		$(this).val("");
		$("ul.alana").append("<li><span>X</span> " + text + "</li>");
	}
});

//New Chore for Sophia
$("input[type='text'].sophia").keypress(function(){
	if (event.which == 13){
		var text = $(this).val();
		$(this).val("");
		$("ul.sophia").append("<li><span>X</span> " + text + "</li>");
	}
});

//New Chore for Lexi
$("input[type='text'].lexi").keypress(function(){
	if (event.which == 13){
		var text = $(this).val();
		$(this).val("");
		$("ul.lexi").append("<li><span>X</span> " + text + "</li>");
	}
});

//add congrats if chores done
















