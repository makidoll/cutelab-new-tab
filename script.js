// Chrome gave me an error when I put this in the html file:
//
// Refused to execute inline script because it violates the following Content Security Policy directive:
// "script-src 'self' blob: filesystem: chrome-extension-resource:".
//
// That's dumb. :/

var img = ["girls","deer","fish_shop","shore","rainbow_dog","take_away","sakura","river","pets","calm_train","boat","busy_train"];
var rnd = Math.floor(Math.random()*img.length);
document.querySelector("#bg").style.backgroundImage = "url(gifs/"+img[rnd]+".gif)";

// Animated logo

var p1 = document.querySelector("#maki-logo>path:nth-child(1)").getTotalLength();
var p2 = document.querySelector("#maki-logo>path:nth-child(2)").getTotalLength();
var p3 = document.querySelector("#maki-logo>path:nth-child(3)").getTotalLength();

document.querySelector("#maki-css").innerHTML +=
	"@keyframes p1 { from { stroke-dashoffset: "+p1+"; } to { stroke-dashoffset: "+p1*2+"; } }"+
	"@keyframes p2 { from { stroke-dashoffset: "+p2+"; } to { stroke-dashoffset: "+0   +"; } }"+
	"@keyframes p3 { from { stroke-dashoffset: "+p3+"; } to { stroke-dashoffset: "+p3*2+"; } }"+

	"#maki-logo>path:nth-child(1) { stroke-dashoffset: "+p1+"; stroke-dasharray: "+p1+"; animation-name: p1; animation-duration: 1400ms; animation-delay: 0ms; } "+
	"#maki-logo>path:nth-child(2) { stroke-dashoffset: "+p2+"; stroke-dasharray: "+p2+"; animation-name: p2; animation-duration: 1000ms; animation-delay: 1000ms; } "+
	"#maki-logo>path:nth-child(3) { stroke-dashoffset: "+p3+"; stroke-dasharray: "+p3+"; animation-name: p3; animation-duration: 1000ms; animation-delay: 1000ms; } ";	