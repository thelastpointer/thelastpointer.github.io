var fading = false;
var idx = 0;
var arr = [
	"it already looped, sorry",
	"Please don't scroll, it fucks up the CSS",
	"just use the menu",
	"it's right there",
	"dude"
];

function fademessage()
{
	if (fading)
		return;
		
	fading = true;
	document.getElementById("home-subtitle").style.opacity = 0;
	setTimeout(function() {
		idx++;
		if (idx >= arr.length)
			idx = 0;
		document.getElementById("home-subtitle").innerHTML = arr[idx];
		document.getElementById("home-subtitle").style.opacity = 1;
		fading = false;
	}, 1000);
};

window.onscroll = function(){fademessage();};