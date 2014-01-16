var deg = Math.PI/180;  // For converting degrees to radians

// Draws turtle path
// F for forward distance theStep
// +, - for turn by ang degrees
function drawStringPath(c, str  ) {
    c.save();           // Save current transformation
    var theStep = -50;
    var ang = 90;
    //str = "F+F-FFF";

    c.beginPath(); // Start a new path 
    c.translate(250, 250);
    c.moveTo(0, 0);

    // parse string
    for (i = 0; i <= str.length; i = i + 1) {
        if (str.charAt(i) == "F") {
            c.lineTo(0, theStep)
            c.translate(0, theStep);
        }
        else if (str.charAt(i) == "+") {
            c.rotate(ang * deg);
        }
        else if (str.charAt(i) == "-") {
            c.rotate(-ang * deg);
        }
    }
    c.stroke(); // Stroke two sides of the triangle
    c.restore();           // Restore the former transformation
}
