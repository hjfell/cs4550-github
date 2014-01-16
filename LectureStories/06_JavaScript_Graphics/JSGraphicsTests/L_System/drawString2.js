var deg = Math.PI / 180;  // For converting degrees to radians
var canvas;
var c;
var string1;
var start1;
var rule1;
var rule2;
var xval;
var yval;
var arg1;
var step1;
var level1;
var submit;

function makeStringPath(start, rule1, rule2, level) {
    var lhs1 = rule1.charAt(0); // synbol on the left side of the rule
    var rhs1 = rule1.substring(2);
    var lhs2;
    var rhs2;
    if (rule2.length > 0) {
        lhs2 = rule2.charAt(0); // synbol on the left side of the rule
        rhs2 = rule2.substring(2);
    }
    //document.writeln(rhs2);
    var str = start;  // set to start string
    var len = str.length;
    var newstr = "";
    if (level == 1) {
        return start;
    }
    for (V = 2; V <= level; V = V + 1) {
        newstr = "";
        for (i = 0; i <= len; i = i + 1) {
            if (str.charAt(i) == lhs1) {
                newstr = newstr + rhs1;
            }
            else if ((rule2.length > 0) && (str.charAt(i) == lhs2)) {
                newstr = newstr + rhs2;
            }
            else {
                newstr = newstr + str.charAt(i);
            }
        }
        str = newstr;
        len = str.length;
    }
   //document.writeln(newstr);
    return newstr;
}

// Draws turtle path
// F for forward distance theStep
// +, - for turn by ang degrees
function drawStringPath2(c, str, xval, yval, ang, theStep) {
    c.save();           // Save current transformation
    //var theStep = -50;
    //var ang = 90;
    //str = "F+F-FFF";

    c.beginPath(); // Start a new path 
    c.translate(xval, yval);
    //c.translate(250, 350);
    c.moveTo(0, 0);

    // parse string
    for (i = 0; i <= str.length; i = i + 1) {
        var letter = new RegExp("[A-Z]");
        var let = new RegExp("[a-z]");
       // document.write(patt1.test("The best things in life are free"));
        if (letter.test(str.charAt(i))) {
        //if (str.charAt(i) == "F") {
            c.lineTo(0, theStep)
            c.translate(0, theStep);
        }
        else if (let.test(str.charAt(i))) {
            c.moveTo(0, theStep)
            c.translate(0, theStep);
        }
        else if (str.charAt(i) == "+") {
            c.rotate(ang * deg);
        }
        else if (str.charAt(i) == "-") {
            c.rotate(-ang * deg);
        }
        else if (str.charAt(i) == "[") {
            c.save();
        }
        else if (str.charAt(i) == "]") {
            c.restore();
            c.moveTo(0, 0);
        }
    }
    c.stroke(); // Stroke two sides of the triangle
    c.restore();           // Restore the former transformation
}

function init() {
    canvas = document.getElementById("my_canvas_id");
    c = canvas.getContext('2d');
    start1 = document.getElementById("start1");
    rule1 = document.getElementById("rule1");
    rule2 = document.getElementById("rule2");
    xval = document.getElementById("xval");
    yval = document.getElementById("yval");
    arg1 = document.getElementById("ang1");
    step1 = document.getElementById("step1");
    level1 = document.getElementById("level1");
    $("#submit").click(press);
}

function press() {
    c.clearRect(0, 0, canvas.width, canvas.height);
   // drawStringPath2(c, "FFF+F", 90, 50);   
    drawStringPath2(c, makeStringPath(getStart(), getRule1(), getRule2(), getLevel()), getXval(), getYval(), getAng(), getStep());
}

function getStart() {
    return start1.value;
}
function getRule1() {
    return rule1.value;
}
function getRule2() {
    return rule2.value;
}
function getXval() {
    return xval.value;
}
function getYval() {
    return yval.value;
}
function getAng() {
    return arg1.value
}
function getStep() {
    return -step1.value
}
function getLevel() {
    return level1.value
}

$(init);