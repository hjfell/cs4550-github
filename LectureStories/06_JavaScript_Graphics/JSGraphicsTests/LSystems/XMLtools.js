//	XMLtools.js
//	Harriet Fell March 2012
//  based on code in http://www.w3schools.com/xml/xml_parser.asp

var xmlDoc;
var xmlDc;

function loadXMLDoc(dname) {
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET", dname, false);
    xhttp.send();
    return xhttp.responseXML;
}

function loadXMLfromString(txt) {
    //Print.printEncoded(txt);
    if (window.DOMParser) {
        parser = new DOMParser();
        xmlDc = parser.parseFromString(txt, "text/xml");
    }
    else // Internet Explorer
    {
        xmlDc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDc.async = false;
        xmlDc.loadXML(txt);
    }
    return xmlDc;
}
