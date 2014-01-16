<%@ Page Language="C#" %>

<%@ Import Namespace="edu.neu.ccis.rasala" %>
<%@ Import Namespace="edu.neu.ccis.fell" %>
<%@ Import Namespace="System.IO" %>
<%@ Import Namespace="System.Text" %>


<!DOCTYPE html>

<script runat="server">
    static string myXMLfile = "myXMLfile.xml";


    void Feedback()
    {
        content.InnerText += "\n";
        
        content.InnerText += "<myXML>MINE</myXML>";
    }

     void MakeMYXMLFile()
    {
        string data = "<myXML>MINE</myXML>";

        Files.MakeFile(this.Server, myXMLfile, data);

        content.InnerText += "Created: " + "myXMLfile" + "\n";
    }

    protected void Page_Load(object sender, EventArgs e)
    {
        content.InnerText = "";

        MakeMYXMLFile();
        
        Feedback();
    }
    
    
</script>

<html lang='en'>
<head id="head1" runat="server">
    <meta charset='utf-8' />
    <title>MAKE my XML File</title> 
    <script type="text/javascript" src="../../lib/jquery-1.7.1.min.js"></script>
   // <script type="text/javascript" src="../../lib/jquery-1.7.1.min.js"></script>
   <!-- <script type="text/javascript" src="../../javascript/modernizr.min.js"></script>  -->
    <script type="text/javascript" src="LSystemsFromXML.js"></script>
    <script type="text/javascript" src="../JSgraphics/ellipse.js"></script>
</head>
<body>
<form action="" id="getStr">
<table>
<tr><th>Start</th><th>Rules</th><th>Start</th><th>Angle</th><th>Step Size</th><th>Level</th><th>Random</th><th>Line Width</th></tr>
<tr>
<td><input type="text" id="start1" value ="F" /></td>
<td><input type="text" id="rule1" value ="F:F+F-F-F+F" /><br />
    <input type="text" id="rule2" value ="" /></td>
<td>x <input type="number" id="xval" value ="250" maxlength="3" style="width:50px" /><br />
    y <input type="number" id="yval" value ="350" maxlength="3" style="width:50px" /></td>
<td><input type="number" id="ang1" value ="90" maxlength="3" style="width:50px" /></td>
<td><input type="number" id="step1" value ="10" maxlength="3" style="width:50px" /></td>
<td><input type="number" id="level1" value ="4" maxlength="2" style="width:50px" /></td>
<td><input type="number" id="random1" value ="0" maxlength="2" style="width:50px" min="0" max="60" />%</td>
<td><input type="number" id="lineWidth1" value ="1" maxlength="2" style="width:50px" min="0" max="20" />%</td>
</tr>
</table>
<button type="button" id="submit">submit</button><br />
</form>

<table>
<tr>
<th>
<canvas id="my_canvas_id" width="500" height="500"  style="border: 1px solid black;"></canvas>
</th>
<td style="vertical-align:top;">
<ul id="myList" style="list-style: none;"><li><b>Some L-Systems</b></li></ul>
</td>
</tr>
</table>
    <form id="form1" runat="server">
    <div>

    <pre id="content" runat="server" enableviewstate="false"></pre>
    
    </div>
    </form>
</body>
</html>
