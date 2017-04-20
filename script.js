// Chrome gave me an error when I put this in the html file:
//
// Refused to execute inline script because it violates the following Content Security Policy directive:
// "script-src 'self' blob: filesystem: chrome-extension-resource:".
//
// That's dumb. :/

var img = ["girls","deer","fish_shop","shore","rainbow_dog","take_away","sakura","river","pets","calm_train","boat","busy_train"];
var rnd = Math.floor(Math.random()*img.length);
document.querySelector("#bg").style.backgroundImage = "url(gifs/"+img[rnd]+".gif)";