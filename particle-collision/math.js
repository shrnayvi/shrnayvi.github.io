function random(min, max) {
  return Math.random() * (max - min) + min;
}

function distance(p1, p2) {
	var dx = p2.x - p1.x;
	var dy = p2.y - p1.y;
	var sqDx = Math.pow(dx, 2);
	var sqDy = Math.pow(dy, 2);

	return Math.sqrt(sqDx + sqDy);
}


function distanceSq(p1, p2) {
	var dx = p2.x - p1.x;
	var dy = p2.y - p1.y;
	var sqDx = Math.pow(dx, 2);
	var sqDy = Math.pow(dy, 2);

	return sqDx + sqDy;
}

