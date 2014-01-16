// Define an ellipse in canvas context c, with
// center (xCenter,yCenter); widths: xWidth, yWidth
// rotation: ang
// Note that arc() adds a line from the current point to the arc start.
// Harriet Fell January 2012
function ellipse(c,xCenter,yCenter,xWidth,yWidth,ang) {
var deg = Math.PI/180; // For converting degrees to radians
	c.save();
	c.translate(xCenter, yCenter);
	c.moveTo(0 + Math.cos(ang*deg)*xWidth,0 + Math.sin(ang*deg)*xWidth);
	c.rotate(ang*deg);
	c.scale(1,yWidth/xWidth);
	c.arc(0,0,xWidth,0,360*deg,false);
	c.restore();
}