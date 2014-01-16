// drawStringPath3.js
// Harriet Fell February 2012
var deg = Math.PI / 180;  // For converting degrees to radians
var canvas;
var c;
var string1;
var arg1;
var step1;
var submit;

// Draws turtle path
// F for forward distance theStep
// +, - for turn by ang degrees
function drawStringPath2(c,str,ang,theStep) {
    c.save();           // Save current transformation
    //var theStep = -50;
    //var ang = 90;
    //str = "F+F-FFF";

    c.beginPath(); // Start a new path 
    c.translate(250, 250);
    c.moveTo(0, 0);

    // parse string
    for (i = 0; i <= str.length; i = i + 1) {
        var letter = new RegExp("[A-Z]");
       // document.write(patt1.test("The best things in life are free"));
        if (letter.test(str.charAt(i))) {
        //if (str.charAt(i) == "F") {
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

function init() {
    canvas = document.getElementById("my_canvas_id");
    c = canvas.getContext('2d');
    string1 = document.getElementById("string1");
    arg1 = document.getElementById("ang1");
    step1 = document.getElementById("step1");
    $("#submit").click(press);
}

function press() {
    c.clearRect(0, 0, canvas.width, canvas.height);
   // drawStringPath2(c, "FFF+F", 90, 50);
    drawStringPath2(c, getString(), getAng(), getStep());
}

function getString() {
    return string1.value;
}
function getAng() {
    return arg1.value
}
function getStep() {
    return -step1.value
}

$(init);