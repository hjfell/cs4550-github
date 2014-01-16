function showemail(d,u)
{var email = u + "@" + d;
document.write("<a href=mailto:"+email+">");
document.write(email);
document.write("</a>");
}

function linkemail(d,u,m)
{var email = u + "@" + d;
document.write("<a href=mailto:"+email+">");
document.write(m);
document.write("</a>");
}