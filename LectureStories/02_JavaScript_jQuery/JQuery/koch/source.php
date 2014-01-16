<code><span style="color: #000000">
&lt;!DOCTYPE&nbsp;html&gt;<br />&lt;html&nbsp;lang="en"&gt;<br />&lt;head&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;meta&nbsp;charset="utf-8"&nbsp;/&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Koch&nbsp;Snowflake&lt;/title&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;script&nbsp;type="text/javascript"&nbsp;src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"&gt;&lt;/script&gt;<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;script&nbsp;src="koch.js"&gt;&lt;/script&gt;<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;script&nbsp;type="text/javascript"&nbsp;src="radioButtons.js"&gt;&lt;/script&gt;<br /><br />&lt;/head&gt;<br /><br />&lt;body&gt;<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;h3&gt;Koch&nbsp;Snowflakes&lt;/h3&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;canvas&nbsp;id="koch_snowflake_id"&nbsp;width="300"&nbsp;height="300"&nbsp;style="border:3px&nbsp;solid&nbsp;gray;"&gt;&lt;/canvas&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<br />&lt;script&gt;<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;var&nbsp;canvas&nbsp;=&nbsp;document.getElementById("koch_snowflake_id");<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;var&nbsp;c&nbsp;=&nbsp;canvas.getContext('2d');<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;Start&nbsp;a&nbsp;new&nbsp;path<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;c.beginPath();<br /><br /><br /><br />&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;Set&nbsp;some&nbsp;properties&nbsp;that&nbsp;control&nbsp;how&nbsp;the&nbsp;graphics&nbsp;will&nbsp;look<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;c.fillStyle&nbsp;=&nbsp;"#ccc";&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;Light&nbsp;gray&nbsp;interiors<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;c.strokeStyle&nbsp;=&nbsp;"#99F";&nbsp;&nbsp;//&nbsp;outlined&nbsp;with&nbsp;light&nbsp;blue&nbsp;lines<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;c.lineWidth&nbsp;=&nbsp;3;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;five&nbsp;pixels&nbsp;wide.<br />&lt;/script&gt;&nbsp;<br /><br />&lt;p&gt;Select&nbsp;a&nbsp;level&nbsp;of&nbsp;snowflake&nbsp;to&nbsp;draw.&lt;/p&gt;<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;form&nbsp;action=""&gt;<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input&nbsp;type="radio"&nbsp;name="level"&nbsp;value="0"&gt;0&lt;/input&gt;<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input&nbsp;type="radio"&nbsp;name="level"&nbsp;value="1"&gt;1&lt;/input&gt;<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input&nbsp;type="radio"&nbsp;name="level"&nbsp;value="2"&gt;2&lt;/input&gt;<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input&nbsp;type="radio"&nbsp;name="level"&nbsp;value="3"&gt;3&lt;/input&gt;<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input&nbsp;type="radio"&nbsp;name="level"&nbsp;value="4"&gt;4&lt;/input&gt;<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input&nbsp;type="radio"&nbsp;name="level"&nbsp;value="5"&gt;5&lt;/input&gt;<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;/form&gt;<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;button&nbsp;onclick="c.clearRect(0,&nbsp;0,&nbsp;canvas.width,&nbsp;canvas.height);&nbsp;c.beginPath();"&gt;clear&lt;/button&gt;<br /><br />&nbsp;<br /><br /><span style="color: #0000BB">&lt;?php<br />&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #007700">include&nbsp;</span><span style="color: #DD0000">'../../../../php/showSource.php'</span><span style="color: #007700">;<br />&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #0000BB">showSource</span><span style="color: #007700">(</span><span style="color: #0000BB">$_SERVER</span><span style="color: #007700">[</span><span style="color: #DD0000">"PHP_SELF"</span><span style="color: #007700">]);<br /></span><span style="color: #0000BB">?&gt;<br /></span><br />&lt;p&gt;&lt;a&nbsp;href="source.php"&nbsp;target=_blank"&gt;show&nbsp;source&lt;/a&gt;&lt;/p&gt;<br /><br />&lt;p&gt;&lt;a&nbsp;href="radioButtons.js"&nbsp;target="_blank"&gt;radioButtons.js&lt;/a&gt;&lt;/p&gt;<br /><br />&lt;p&gt;&lt;a&nbsp;href="koch.js"&nbsp;target="_blank"&gt;koch.js&lt;/a&gt;&lt;/p&gt;<br /><br /><br /><br />&lt;/body&gt;<br /><br />&lt;/html&gt;<br /><br /></span>
</code>