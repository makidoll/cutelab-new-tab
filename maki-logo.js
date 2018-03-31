var MakiLogo = function(div) {
	this.div = (div)? div: document.body;

	// initialize svg and paths
	this.svg = (new DOMParser()).parseFromString('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 85" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"><path d="M5,80 L5,15 A10,10,0 0,1 15,5 A10,10,0 0,1 25,15 L25,70 A10,10,0 0,0 35,80 A10,10,0 0,0 45,70 L45,15 A10,10,0 0,1 55,5 A10,10,0 0,1 65,15 L65,70 A10,10,0 0,0 75,80 A10,10,0 0,0 85,70 L85,15 A10,10,0 0,1 95,5 A10,10,0 0,1 105,15 L105,70 A10,10,0 0,0 115,80 A10,10,0 0,0 125,70 L125,5 "/><path d="M 85,45 A 10,10,0 0,1 95,35 A 10,10,0 0,0 105,25 "/><path d="M 125,35 A 20,20,0 0,0 145,15 L 145,5 "/><path d="M 125,35 A 20,20,0 0,1 145,55 L 145,70 A 10,10,0 0,0 155,80 A 10,10,0 0,0 165,70 L 165,5 "/></svg>', "text/html").querySelector("svg");

	this.path = [];
	for (var i=0; i<this.svg.children.length; i++) {
		this.path[i] = this.svg.children[i];
	}

	// functions
	this.removePaths = function() {
		for (var i=0; i<this.path.length; i++) {
			this.svg.removeChild(this.path[i]);
		}
	}

	this.addPath = function(i) {
		this.svg.appendChild(this.path[i]);
	}

	this.delay = function(callback) {
		setTimeout(callback.bind(this), 20);
	}

	// starting animation
	this.intro = function() {
		this.removePaths();

		for (var i=0; i<this.path.length; i++) {
			this.path[i].style.strokeDashoffset = this.path[i].getTotalLength();
			this.path[i].style.strokeDasharray = this.path[i].getTotalLength();
			this.path[i].style.transitionTimingFunction = "cubic-bezier(0.4, 0.0, 0.2, 1)";
		}

		// first line: MA
		setTimeout(function() {
			this.addPath(0);
			this.delay(function() {
				this.path[0].style.transitionDuration = "1400ms";
				this.path[0].style.strokeDashoffset = 0;			
			});
		}.bind(this), 20);

		// third line: A
		setTimeout(function() {
			this.addPath(1);
			this.delay(function() {
				this.path[1].style.transitionDuration = "1000ms";
				this.path[1].style.strokeDashoffset = 0;
			});
		}.bind(this), 650);

		// second line: K
		setTimeout(function() {
			this.addPath(2);
			this.delay(function() {
				this.path[2].style.transitionDuration = "1000ms";
				this.path[2].style.strokeDashoffset = 0;
			});
		}.bind(this), 1050);

		// forth line: I
		setTimeout(function() {
			this.addPath(3);
			this.delay(function() {
				this.path[3].style.transitionDuration = "1000ms";
				this.path[3].style.strokeDashoffset = 0;
			});
		}.bind(this), 1050);

	}.bind(this);

	// spawn logo
	this.div.appendChild(this.svg);
}