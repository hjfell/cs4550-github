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
var lineWidth;

function makeleaf(ww,hh) {
    c.beginPath();
    ellipse(c, 0, 0, ww, hh, 0);
    c.closePath();
}


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
// Uppercase Letter for draw forward - distance theStep
// Lowercase Letter for move forward  - distance theStep
// +, - for turn by ang degrees
// [ and ] for save and restore
function drawStringPath2(c, str, xval, yval, ang, theStep, rndm) {
    c.save();           // Save current transformation

    c.beginPath();      // Start a new path 
    c.translate(xval, yval);
    c.moveTo(0, 0);
    c.lineWidth = lineWidth;

    var rrr; // for randon factor
    var drawleaf = false;

    // parse string
    for (i = 0; i <= str.length; i = i + 1) {
        var letter = new RegExp("[A-Z]");
        var let = new RegExp("[a-z]");
       
        if (letter.test(str.charAt(i))) {
            rrr = (1 + Math.random() * rndm / 100);
          
            c.lineTo(0, theStep * rrr);
            c.translate(0, theStep * rrr);

            if (((i < str.length) && (str.charAt(i + 1) == "]")) || (i === str.length)) {
                drawleaf = true;
            }
        }
        else if (let.test(str.charAt(i))) {
            rrr = (1 + Math.random() * rndm / 100);
            c.moveTo(0, theStep * rrr)
            c.translate(0, theStep * rrr);
        }
        else if (str.charAt(i) == "+") {
            rrr = (1 + Math.random() * rndm / 100);
            c.rotate(ang * deg * rrr);
        }
        else if (str.charAt(i) == "-") {
            rrr = (1 + Math.random() * rndm / 100);
            c.rotate(-ang * deg * rrr);
        }
        else if (str.charAt(i) == "[") {
            c.save();
            lineWidth -= 2;
            if (lineWidth < 1) {
                lineWidth = 1;
            }
        }
        else if (str.charAt(i) == "]") {        
            c.restore();
            c.moveTo(0, 0);
            lineWidth += 1;
        }


        if (drawleaf) {
            if (lineWidth % 2 === 1) {
                c.fillStyle = "#F00";
            }
            else {
                c.fillStyle = "#0F0"; 
            }
            c.stroke();
            makeleaf(6, 9);
            c.fill();
            drawleaf = false;
        }
        else {
            c.stroke();
        }
        c.lineWidth = lineWidth;
    }
     
    c.restore();           // Restore the former transformation
}

function init() {
    canvas = document.getElementById("my_canvas_id");
    c = canvas.getContext('2d');
    lineWidth = 1;
    c.lineWidth = lineWidth;
    start1 = document.getElementById("start1");
    rule1 = document.getElementById("rule1");
    rule2 = document.getElementById("rule2");
    xval = document.getElementById("xval");
    yval = document.getElementById("yval");
    arg1 = document.getElementById("ang1");
    step1 = document.getElementById("step1");
    level1 = document.getElementById("level1");
    random1 = document.getElementById("random1");
    
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
   // drawStringPath2(c, "FFF+F", 90, 50);   
    drawStringPath2(c, makeStringPath(getStart(), getRule1(), getRule2(), getLevel()), getXval(), getYval(), getAng(), getStep(), getRandom());
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
function getRandom() {
    return random1.value
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
    c.strokeStyle = "#99F";
    c.lineWidth = 6;
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
    c.strokeStyle = "#F00";
    lineWidth = 1;
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
    c.strokeStyle = "#0AF";  // dark cyan outlines
    lineWidth = 2;
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
    c.strokeStyle = "#0A0";  // dark green outlines
    c.fillStyle = "#0F0";    // green interiors
    lineWidth = 4;
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
    c.strokeStyle = "#7A5";  // dark green outlines
    c.fillStyle = "#0F0";    // green interiors
    lineWidth = 4;

}

$(init);