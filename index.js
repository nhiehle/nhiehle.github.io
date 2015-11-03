//$ is a selector, I could also select a css tag
//this function is an anonymous function: it has no name but when it gets passed
//into ready it's probably named f or something.
$(document).ready(function () {
	$("#business").click(function(){
		alert("you clicked on something!")
	})
})