//	LSystemsDraw.js
//	Harriet Fell March 2012

var deg = Math.PI / 180;  // For converting degrees to radians
var canvas;
var c;
var submit;

// This fills an ellipse with bright green to serve as a leaf.
function makeleaf(ww, hh) {
    c.beginPath();
    ellipse(c, 0, -hh+2, ww, hh, 0);
    c.moveTo(0, -hh);
    c.closePath();
    c.fill();
    c.beginPath();
}

// Uppercase Letter for draw forward - distance theStep
// Lowercase Letter for move forward  - distance theStep
// +, - for turn by ang degrees
// [ and ] for save and restore 
// Since [ and ] are used to make tree-like shapes, leaves are automatically drawn just before each ] causes a restore - usually at the end of a twig.
function drawStringPath(c, start, xval, yval, ang, theStep, lineWidth, rndm, lev, rule1, rule2) {
    // drawStringPath(c, getStart(), getXval(), getYval(), getAng(), getStep(), getLineWidth(), getRandom(), getLevel(), getRule1(), getRule2());

    c.save();           // Save current transformation

    c.beginPath();      // Start a new path 
    c.translate(xval, yval);
    c.moveTo(0, 0);
    c.lineWidth = lineWidth;
    // Note that this needs code to check on the presence of rule1 and that any rules are well-formed:
    // Left side a single letter, [A..Z,a..z]
    // Second character is a ":"
    // Right side is a string from these characters [A..Z,a..z,+,-,[,]] and the brackets are properly nested and closed.
    // This error checking is not yet implemented.
    // As it is, only badly matched brackets seem to mess things of beyond the current drawing.  
    // If the brackets are not matched the context is left with the wrong transformation.
    // Reload saves the day.
    var lhs1 = rule1.charAt(0); // symbol on the left side of the :
    var rhs1 = rule1.substring(2); // string to the right of the :
    var lhs2;
    var rhs2;
    if (rule2.length > 0) {
        lhs2 = rule2.charAt(0); // symbol on the left side of the :
        rhs2 = rule2.substring(2); // string to the right of the :
    }
    drawStringRec(c, start, lev);

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

        var chNext = "0";  // zero
        if (str.length > 1) {
            chNext = str.charAt(1);
        }

        switch (true) {
            case ((("A" <= ch) && (ch <= "Z")) || (("a" <= ch) && (ch <= "z"))):  // uppercase or lowercase letter
                if ((lev > 1) && (ch === lhs1)) {
                    if (thinning === "true") {
                        c.lineWidth = c.lineWidth - .5;
                    }
                    drawStringRec(c, rhs1, lev - 1);
                    c.stroke();
                    drawStringRec(c, str.substring(1), lev);
                }
                else if ((lev > 1) && (rule2.length > 0) && (ch === lhs2)) {
                    if (thinning === "true") {
                        c.lineWidth = c.lineWidth - .5;
                    }
                    drawStringRec(c, rhs2, lev - 1);
                    c.stroke();
                    drawStringRec(c, str.substring(1), lev);
                }
                else {
                    rrr = (1 + Math.random() * rndm / 100);
                    if (letter.test(ch)) {    // draw on uppercase
                        c.lineTo(0, theStep * rrr);
                        c.stroke();
                        if (chNext === "]") {                       
                         //  makeleaf(.8 * lineWidth, 1.6 * lineWidth);
                        }
                    }
                    else {                   // move on lowercase
                        c.moveTo(0, theStep * rrr);
                    }
                    c.translate(0, theStep * rrr);
                    drawStringRec(c, str.substring(1), lev);
                }
                break;
            case (ch === "+"):
                rrr = (1 + Math.random() * rndm / 100);
                c.rotate(ang * deg * rrr);
                drawStringRec(c, str.substring(1), lev);
                break;
            case (ch === "-"):
                rrr = (1 + Math.random() * rndm / 100);
                c.rotate(-ang * deg * rrr);
                drawStringRec(c, str.substring(1), lev);
                break;
            case (ch === "["):
                c.save();
                drawStringRec(c, str.substring(1), lev);
                break;
            case (ch === "]"):
                makeleaf(.8 * lineWidth, 2 * lineWidth);
                c.restore();
                c.moveTo(0, 0);
                drawStringRec(c, str.substring(1), lev);
                break;
            default:
                c.stroke();
        } // end switch        
    }
}