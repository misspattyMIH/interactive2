console.log(572 + 32);

// Flashlight Function
$("body").mousemove(function(event){
	$(".flashlight").css("top", event.clientY-175).css("left", event.clientX-150);
});

// Boo Interaction

$(".surprise").mouseleave(function(){
	$(this).animate({bottom: 80},150).delay(880).animate({bottom: -400},1000);
	$("body").css("background","black");
	$("h1").css("color","black");
});

// Clue/switch
$(".clue").click(function(){
	$("body").css("background", "white");
	
});