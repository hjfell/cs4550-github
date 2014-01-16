//	LSystemsfromXML.js
//	Harriet Fell March 2012

var deg = Math.PI / 180;  // For converting degrees to radians
var canvas;
var c;
var submit;
var myLSystems;
var xmlDoc;
var xmlDc;
var w;
var x;
var y;
var numSystems;
var string1;
var start1;
var rule1;
var rule2;
var xval;
var yval;
var ang1;
var step1;
var level1;
var submit;
var random1;
var lineWidth1;
var sysName;
var sysId;

function makeleaf(ww, hh) {
    c.beginPath();
    ellipse(c, 0, -hh+2, ww, hh, 0);
    c.moveTo(0, -hh);
    c.closePath();
    c.fill();
    c.beginPath();
}

function save() {
    //localStorage.clear;
    if (typeof (Storage) !== "undefined") {
        if (localStorage.save) {
            var lsystems = localStorage.save;
            var newlsystems = lsystems + LSystemData;
            localStorage.save = newlsystems;
            //document.getElementById("result").innerHTML = "<b>Your old stored LSystem data:</b> " + lsystems + "<br />" + "<b>Your new stored LSystem data:</b> " + newlsystems;
        }
        else {
            localStorage.save = LSystemData;
            //document.getElementById("result").innerHTML = "<b>Your first stored LSystem data:</b> " + localStorage.save;
        }
    }
    else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

function init() {
    numSystems = 0;
    canvas = document.getElementById("my_canvas_id");
    c = canvas.getContext('2d');
    myLSystems = new Array();
    xmlDoc = loadXMLDoc("LSystems.xml");
    loadLSystemData(xmlDoc);
    //Print.print(numSystems);
    if (localStorage.save) {
        xmlDc = loadXMLfromString("<myLSystems>" + localStorage.save + "</myLSystems>");
        //Print.printEncoded("<myLSystems>" + localStorage.save + "</myLSystems>");
        loadLSystemData(xmlDc);
    }
    //Print.print(numSystems);
    makeButtons();
    start1 = document.getElementById("start1");
    rule1 = document.getElementById("rule1");
    rule2 = document.getElementById("rule2");
    xval = document.getElementById("xval");
    yval = document.getElementById("yval");
    ang1 = document.getElementById("ang1");
    step1 = document.getElementById("step1");
    level1 = document.getElementById("level1");
    random1 = document.getElementById("random1");
    lineWidth1 = document.getElementById("lineWidth1");
    sysName = document.getElementById("sysName");
    sysId = document.getElementById("sysId");
    thinning = false;

    $("#submit").click(press);
    $("#save").click(press2);
}

function LSystem2String(title, id, start, rule1, rule2, angle, level, xval, yval, step, lineWidth, color, random, thinning) {
    var lsys = "<Lsystem>";
    //document.write(lsys);
    lsys += "<title>" + title + "</title>";
    lsys += "<id>" + id + "</id>";
    lsys += "<start>" + start + "</start>";
    lsys += "<rules><rule1>" + rule1 + "</rule1><rule2>" + rule2 + "</rule2></rules>";
    lsys += "<angle>" + angle + "</angle>";
    lsys += "<level>" + level + "</level>";
    lsys += "<xval>" + xval + "</xval>";
    lsys += "<yval>" + yval + "</yval>";
    lsys += "<step>" + -step + "</step>";
    lsys += "<lineWidth>" + lineWidth + "</lineWidth>";
    lsys += "<color>" + color + "</color>";
    lsys += "<random>" + random + "</random>";
    lsys += "<thinning>" + thinning + "</thinning>";
    lsys += "</Lsystem>";
    return lsys;
}

function LSystem(title, id, start, rules, angle, level, xval, yval, step, lineWidth, color, random) {
    var lsys = new Object();
    //document.write(title);
    lsys.title = title;
    lsys.id = id;
    lsys.start = start;
    lsys.rules = rules;
    lsys.angle = angle;
    lsys.level = level;
    lsys.xval = xval;
    lsys.yval = yval;
    lsys.step = step;
    lsys.lineWidth = lineWidth;
    lsys.color = color;
    lsys.random = random;
    lsys.thinning = thinning;
    return lsys;
}

function loadLSystemData(xDoc) {
    w = xDoc.documentElement.childNodes;
    //document.write(numSystems);
    for (i = 0; i <  w.length; i++) { //w.length; i++) {
        xbase = xDoc.getElementsByTagName("Lsystem")[i];
        //Print.print(i + "   " + xbase + "<br />");
        if (xbase != undefined)
        if (xbase.nodeType == 1) {
            x = xbase.childNodes;
            y = xbase.firstChild;

            for (j = 0; j < x.length; j++) {
                // document.write(j + "   " + y.nodeType + "   ");
                if (y.nodeType == 1) {//Process only element nodes (type 1)
                    switch (y.nodeName) {
                        case "title":
                            title = y.childNodes[0].nodeValue;
                            //document.write("<br >" + title + "<br >");
                            break;
                        case "id":
                            id = y.childNodes[0].nodeValue;
                            break;
                        case "start":
                            start = y.childNodes[0].nodeValue;
                            break;
                        case "rules":
                            rules = new Array();
                            rulenum = 0;
                            z = y.childNodes;
                            for (k = 0; k < z.length; k++) {
                                if (z[k].nodeType == 1) {
                                    //document.write("<br >" + k + "  " + z[k].nodeName + "  " + z[k].childNodes[0]);
                                    if (z[k].childNodes[0] !== undefined)
                                        rules[rulenum] = z[k].childNodes[0].nodeValue;
                                    else rules[rulenum] = "";
                                    //document.write("<br >" + rules[rulenum] + "<br >");
                                    rulenum++;
                                }
                            }
                            break;
                        case "angle":
                            angle = y.childNodes[0].nodeValue;
                            break;
                        case "level":
                            level = y.childNodes[0].nodeValue;
                            break;
                        case "xval":
                            xval = y.childNodes[0].nodeValue;
                            break;
                        case "yval":
                            yval = y.childNodes[0].nodeValue;
                            break;
                        case "step":
                            step = y.childNodes[0].nodeValue;
                            break;
                        case "lineWidth":
                            lineWidth = y.childNodes[0].nodeValue;
                            break;
                        case "color":
                            color = y.childNodes[0].nodeValue;
                            break;
                        case "random":
                            random = y.childNodes[0].nodeValue;
                            break;
                        case "thinning":
                            thinning = y.childNodes[0].nodeValue;
                            break;
                        default:
                    }
                }
                y = y.nextSibling;
            }
            myLSystems[numSystems + i] = LSystem(title, id, start, rules, angle, level, xval, yval, step, lineWidth, color, random);
        }
    }
    numSystems = myLSystems.length;
}

function makeButtons() {
    //document.write(myLSystems.length);
    for (i = 0; i < myLSystems.length; i++) {
        var node = document.createElement("LI");
        elem = document.createElement("input");
        elem.id = myLSystems[i].id;
        elem.value = myLSystems[i].title;
        elem.type = 'button';
        elem.onclick = function () { setValues(this.id) };
        node.appendChild(elem);
        if (i >= 8) {
            delem = document.createElement("input");
            delem.id = "del" + myLSystems[i].id;
            delem.value = "delete";
            delem.type = 'button';
            delem.style.backgroundColor = '#f00'
            delem.onclick = function () { delValues(this.id) };
            node.appendChild(elem);
            node.appendChild(delem);
        }
        if (node !== "undefined") {
            document.getElementById("myList").appendChild(node);
           // document.write(elem.value);
        }
        else
            document.write(i);
    }
}

function delValues(el_id) {
    Print.print("deleting");
    var k;
    realid = el_id.substr(3, el_id.length - 3);
    for (i = 0; i < myLSystems.length; i++) {
        if (myLSystems[i].id === realid) {
            k = i;
            break;
        }
    }

    string2go = LSystem2String(myLSystems[k].title, myLSystems[k].id, myLSystems[k].start, myLSystems[k].rules[0], myLSystems[k].rules[1], myLSystems[k].angle, myLSystems[k].level, myLSystems[k].xval, myLSystems[k].yval, -myLSystems[k].step, myLSystems[k].lineWidth, myLSystems[k].color, myLSystems[k].random, myLSystems[k].thinning);
   // Print.printEncoded(string2go + "\n");
    newstring = localStorage.save;
    localStorage.save = newstring.replace(string2go, "");
    
   // Print.printEncoded(newstring);
   sss = "<Lsystem><title>TriTri</title><id>LS873</id><start>F</start><rules><rule1>F:F+F-F-F+F</rule1><rule2></rule2></rules><angle>120</angle><level>5</level><xval>50</xval><yval>450</yval><step>25</step><lineWidth>1</lineWidth><color>#000000</color><random>0</random><thinning>false</thinning></Lsystem>";
   ttt = "<Lsystem><title>TriTri</title><id>LS873</id><start>F</start><rules><rule1>F:F+F-F-F+F</rule1><rule2></rule2></rules><angle>120</angle><level>5</level><xval>50</xval><yval>450</yval><step>25</step><lineWidth>1</lineWidth><color>#000000</color><random>0</random><thinning>false</thinning></Lsystem>";
   //Print.printEncoded(ttt.replace("<title>TriTri</title><id>LS873</id><start>F</start><rules><rule1>F:F+F-F-F+F</rule1><rule2></rule2></rules><angle>120</angle><level>5</level><xval>50</xval><yval>450</yval><step>25</step><lineWidth>1</lineWidth><color>#000000</color><random>0</random><thinning>false</thinning></Lsystem>", ""));
   Print.printEncoded(newstring.replace(string2go, ""));
}

function setValues(el_id) {
    for (i = 0; i < myLSystems.length; i++) {
        if (myLSystems[i].id === el_id) {
            start1.value = myLSystems[i].start;
            xval.value = myLSystems[i].xval;
            yval.value = myLSystems[i].yval;
            ang1.value = myLSystems[i].angle;
            step1.value = myLSystems[i].step;
            level1.value = myLSystems[i].level;
            lineWidth1.value = myLSystems[i].lineWidth;
            rule1.value = myLSystems[i].rules[0];
            if (myLSystems[i].rules.length > 1) {
                rule2.value = myLSystems[i].rules[1];
            }
            else {
                rule2.value = "";
            }
            random1.value = myLSystems[i].random;
            c.strokeStyle = myLSystems[i].color;  // dark green outlines
            c.fillStyle = "#0F0";    // green interiors
            thinning = myLSystems[i].thinning;
            //Print.print(thinning);
        }
    }
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

function press() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    drawStringPath(c, getStart(), getXval(), getYval(), getAng(), getStep(), getLineWidth(), getRandom(), getLevel(), getRule1(), getRule2());
}

function press2() {
    LSystemData = LSystem2String(getSysName(), myLSystems[numSystems - 1].id + Math.floor(Math.random() * 99), getStart(), getRule1(), getRule2(), getAng(), getLevel(), getXval(), getYval(), getStep(), getLineWidth(), c.strokeStyle, getRandom(), thinning);
    //Print.printEncoded(LSystemData);
    save();
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
    return ang1.value
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
function getSysName() {
    return sysName.value
}
//function getSysId() {
//    return sysId.value
//}

$(init);
