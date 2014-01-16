//	drawStringRec.js
//	Harriet Fell February 2012

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
var random1;
var lineWidth1;
var thinning;
var startLevel;

function makeleaf(ww, hh) {
    c.beginPath();
    ellipse(c, 0, -hh, ww, hh, 0);
    c.moveTo(0, -hh);
    c.closePath();
    c.fill();
    c.beginPath();
}

// Uppercase Letter for draw forward - distance theStep
// Lowercase Letter for move forward  - distance theStep
// +, - for turn by ang degrees
// [ and ] for save and restore
function drawStringPath(c, start, xval, yval, ang, theStep, lineWidth, rndm, lev, rule1, rule2) {
    // drawStringPath(c, getStart(), getXval(), getYval(), getAng(), getStep(), getLineWidth(), getRandom(), getLevel(), getRule1(), getRule2());

    c.save();           // Save current transformation

    c.beginPath();      // Start a new path 
    c.translate(xval, yval);
    c.moveTo(0, 0);
    c.lineWidth = lineWidth;
    //document.write(c.lineWidth);
    var lhs1 = rule1.charAt(0); // symbol on the left side of the rule
    var rhs1 = rule1.substring(2);
    var lhs2;
    var rhs2;
    if (rule2.length > 0) {
        lhs2 = rule2.charAt(0); // symbol on the left side of the rule
        rhs2 = rule2.substring(2);
    }
    drawStringRec(c, start, lev);

    //c.stroke();
    c.restore();           // Restore the former transformation

    function drawStringRec(c, str, lev) {
        if (str.length === 0) {
            return;
        }
        var rrr; // for randon factor
        var drawleaf = false;
        var letter = new RegExp("[A-Z]");
        var letr = new RegExp("[a-z]");

        var ch = str.charAt(0);
        //document.write(str.length);
        var chNext = "0";  // zero
        if (str.length > 1) {
            chNext = str.charAt(1);
        }
 
        switch (true) {
            case ((("A" <= ch) && (ch <= "Z")) || (("a" <= ch) && (ch <= "z"))):  // uppercase or lowercase letter
                if ((lev > 1) && (ch === lhs1)) {
                    if (thinning) {
                        c.lineWidth = c.lineWidth - .5;
                    }
                    drawStringRec(c, rhs1, lev - 1);
                    c.stroke();
                    //c.lineWidth++;
                    drawStringRec(c, str.substring(1), lev);
                }
                else if ((lev > 1) && (rule2.length > 0) && (ch === lhs2)) {
                    if (thinning) {
                        c.lineWidth = c.lineWidth - .5;
                    }
                    drawStringRec(c, rhs2, lev - 1);
                    c.stroke();
                    //c.lineWidth++;
                    drawStringRec(c, str.substring(1), lev);
                }
                else {
                    rrr = (1 + Math.random() * rndm / 100);
                    if (letter.test(ch)) {    // draw on uppercase
                        c.lineTo(0, theStep * rrr);
                        if (chNext === "]") {

                            c.stroke();
                            makeleaf(.8*lineWidth, 1.6 * lineWidth);

                        }

                    }
                    else {                   // move on lowercase
                        c.moveTo(0, theStep * rrr);
                    }
                    c.translate(0, theStep * rrr);
                    drawStringRec(c, str.substring(1), lev);
                }
                break;
            case (ch==="+"):
                rrr = (1 + Math.random() * rndm / 100);
                c.rotate(ang * deg * rrr);
                drawStringRec(c, str.substring(1), lev);
                break;
            case (ch==="-"):
                rrr = (1 + Math.random() * rndm / 100);
                c.rotate(-ang * deg * rrr);
                drawStringRec(c, str.substring(1), lev);
                break;
            case (ch==="["):
                c.save();
//                if (thinning) {
//                    c.lineWidth = Math.max(1, c.lineWidth - lev/startLevel);
//                    //document.write(lev + "  " + c.lineWidth);
//                }
                drawStringRec(c, str.substring(1), lev);
                break;
            case (ch==="]"):
                c.restore();
                
//                if (thinning) {
//                    c.lineWidth = Math.max(1, c.lineWidth + lev / startLevel);
//                    //document.write(lev + "  " + c.lineWidth);
//                }
                c.moveTo(0, 0);
                drawStringRec(c, str.substring(1), lev);
                break;
            default:
                c.stroke();
        } // end switch        
     }    
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
    startLevel = level1;
    random1 = document.getElementById("random1");
    lineWidth1 = document.getElementById("lineWidth1");
    thinning = false;

    $("#submit").click(press);
    $("#kochtriangle").click(kochtriangle);
    $("#kochsnowflake").click(kochsnowflake);
    $("#gosperC").click(gosperC);
    $("#dragon").click(dragon); sierpinskigasket
    $("#sierpinskigasket").click(sierpinskigasket); islandsandlakes
    $("#islandsandlakes").click(islandsandlakes);
    $("#tree1").click(tree1);
    $("#tree2").click(tree2);
}

function press() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    drawStringPath(c, getStart(), getXval(), getYval(), getAng(), getStep(), getLineWidth(), getRandom(), getLevel(), getRule1(), getRule2());
}

function getStart() {
    return start1.value;
}
function getRule1() {
    //document.writeln("in get rule 1: " + rule1.value);
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
function getRandom() {
    return random1.value
}
function getLineWidth() {
    return lineWidth1.value
}

function kochtriangle() {
    start1.value = "F";
    rule1.value = "F:F+F-F-F+F";
    rule2.value = "";
    xval.value = "250";
    yval.value = "350";
    arg1.value = "90";
    step1.value = "10";
    level1.value = "4";
    lineWidth1.value = "1";
    thinning = false;
}

function gosperC() {
    start1.value = "F";
    rule1.value = "F:+F--F+";
    rule2.value = "";
    xval.value = "175";
    yval.value = "370";
    arg1.value = "45";
    step1.value = "7";
    level1.value = "11";
    lineWidth1.value = "1";
    thinning = false;
}

function kochsnowflake() {
    start1.value = "F++F++F";
    rule1.value = "F:F-F++F-F";
    rule2.value = "";
    xval.value = "130";
    yval.value = "450";
    arg1.value = "60";
    step1.value = "5";
    level1.value = "5";
    lineWidth1.value = "6";
    c.strokeStyle = "#99F";
    thinning = false;
}

function dragon() {
    start1.value = "L";
    rule1.value = "L:L+R+";
    rule2.value = "R:-L-R";
    xval.value = "140";
    yval.value = "180";
    arg1.value = "90";
    step1.value = "7";
    level1.value = "12";
    lineWidth1.value = "1";
    c.strokeStyle = "#F00";
    thinning = false;
}

function sierpinskigasket() {
    start1.value = "R";
    rule1.value = "L:R+L+R";
    rule2.value = "R:L-R-L";
    xval.value = "400";
    yval.value = "450";
    arg1.value = "60";
    step1.value = "3";
    level1.value = "8";
    lineWidth1.value = "1";
    thinning = false;
}

function islandsandlakes() {
    start1.value = "F+F+F+F";
    rule1.value = "F:F+f-FF+F+FF+Ff+FF-f+FF-F-FF-Ff-FFF";
    rule2.value = "f:ffffff";
    xval.value = "125";
    yval.value = "375";
    arg1.value = "90";
    step1.value = "7";
    level1.value = "3";
    lineWidth1.value = "2";
    c.strokeStyle = "#0AF";  // dark cyan outlines
    thinning = false;
}

function tree1() {
    start1.value = "F";
    rule1.value = "F:FF-[-F+F+F]+[+F-F-F]";
    rule2.value = "";
    xval.value = "250";
    yval.value = "460";
    arg1.value = "22.5";
    step1.value = "15";
    level1.value = "4";
    lineWidth1.value = "4";
    c.strokeStyle = "#A26A42";  // dark green outlines
    c.fillStyle = "#0F0";    // green interiors
    thinning = true;
}

function tree2() {
    start1.value = "X";
    rule1.value = "X:F-[[X]+X]+F[+FX]-X";
    rule2.value = "F:FF";
    xval.value = "250";
    yval.value = "460";
    arg1.value = "22.5";
    step1.value = "10";
    level1.value = "5";
    lineWidth1.value = "4";
    c.strokeStyle = "#7A5";  // dark green outlines
    c.fillStyle = "#0F0";    // green interiors   
    thinning = true; 
}

$(init);