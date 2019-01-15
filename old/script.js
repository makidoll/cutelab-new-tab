// Chrome gave me an error when I put this in the html file:
//
// Refused to execute inline script because it violates the following Content Security Policy directive:
// "script-src 'self' blob: filesystem: chrome-extension-resource:".
//
// That's dumb. :/

var img = ["boat","busy_train","calm_train","deer","fish_pond","fish_shop","girls","girls_waiting","home","pets","rainbow_dog","river","sakura","shore","take_away"];
var rnd = Math.floor(Math.random()*img.length);
document.querySelector("#bg").style.backgroundImage = "url(gifs/"+img[rnd]+".gif)";

// Animated logo

new MakiLogo(document.getElementById("logo")).intro();