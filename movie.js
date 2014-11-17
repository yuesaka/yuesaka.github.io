
var containers = new Array();
var numItems = 10;
for (var i = 0; i < numItems; i++) {
	var container = new Group().addTo(stage);

	var numCircles = 10;

	var xLoc = Math.floor(Math.random() * (800 - 0 + 1)) + 0;
	var yLoc = Math.floor(Math.random() * (800 - 0 + 1)) + 0;
	for (var r = 0; r < numCircles; ++r) {
		// console.log("new cirlce radius " + r*10);
	    new Circle(xLoc, yLoc, numCircles*10 - r*10).addTo(container).fill('random');
	}	
	containers.push(container);
}


function anim() {
	for(var i = 0; i < containers.length; i++) {
	  // Move the container to random locations
	  containers[i].animate('1s', {
	    x: Math.random() * 500, y: Math.random() * 200
	  }, {
	    onEnd: anim, easing: 'elasticInOut'
	  });
	}
}

anim();