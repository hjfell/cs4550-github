<code><span style="color: #000000">
&lt;!DOCTYPE&nbsp;html&gt;<br />&lt;html&nbsp;lang="en"&gt;<br />&lt;head&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;meta&nbsp;charset="utf-8"&nbsp;/&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Simple&nbsp;HTML&nbsp;Form&lt;/title&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;!--&nbsp;Labels&nbsp;will&nbsp;be&nbsp;bold&nbsp;and&nbsp;deep&nbsp;blue&nbsp;--&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;style&nbsp;type="text/css"&nbsp;title="text/css"&nbsp;media="all"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;label&nbsp;{<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font-weight:&nbsp;bold;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color:&nbsp;#300ACC;<br />&nbsp;&nbsp;&nbsp;&nbsp;}<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;/style&gt;<br />&lt;/head&gt;<br />&lt;body&gt;<br />&lt;!--&nbsp;PHP&nbsp;and&nbsp;MySQL&nbsp;for&nbsp;Dynamic&nbsp;Web&nbsp;Sites:&nbsp;Visual&nbsp;QuickPro&nbsp;Guide&nbsp;(4th&nbsp;Edition)&nbsp;by&nbsp;Larry&nbsp;E.&nbsp;Ullman&nbsp;--&gt;<br />&lt;!--&nbsp;Script&nbsp;2.1&nbsp;-&nbsp;form.html&nbsp;--&gt;<br /><br />&lt;form&nbsp;action="handle_form.php"&nbsp;method="get"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;!--&nbsp;fieldset&nbsp;and&nbsp;legend&nbsp;HTML&nbsp;tags&nbsp;add&nbsp;a&nbsp;box&nbsp;around&nbsp;the&nbsp;form&nbsp;with&nbsp;a&nbsp;title&nbsp;at&nbsp;the&nbsp;top&nbsp;--&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;fieldset&gt;&lt;legend&gt;Enter&nbsp;your&nbsp;information&nbsp;in&nbsp;the&nbsp;form&nbsp;below:&lt;/legend&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;!--&nbsp;simple&nbsp;text&nbsp;inputs&nbsp;for&nbsp;Name&nbsp;and&nbsp;Email&nbsp;Address&nbsp;--&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;&lt;label&gt;Name:&nbsp;&lt;input&nbsp;type="text"&nbsp;name="name"&nbsp;size="20"&nbsp;maxlength="40"&nbsp;/&gt;&lt;/label&gt;&lt;/p&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;&lt;label&gt;Email&nbsp;Address:&nbsp;&lt;input&nbsp;type="text"&nbsp;name="email"&nbsp;size="40"&nbsp;maxlength="60"&nbsp;/&gt;&lt;/label&gt;&lt;/p&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;!--&nbsp;radio&nbsp;buttons&nbsp;for&nbsp;gender&nbsp;--&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;&lt;label&nbsp;for="gender"&gt;Gender:&nbsp;&lt;/label&gt;&lt;input&nbsp;type="radio"&nbsp;name="gender"&nbsp;value="M"&nbsp;/&gt;&nbsp;Male&nbsp;&lt;input&nbsp;type="radio"&nbsp;name="gender"&nbsp;value="F"&nbsp;/&gt;&nbsp;Female&lt;/p&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;!--&nbsp;pull-down&nbsp;menu&nbsp;for&nbsp;age&nbsp;--&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;&lt;label&gt;Age:<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;select&nbsp;name="age"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;option&nbsp;value="0-29"&gt;Under&nbsp;30&lt;/option&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;option&nbsp;value="30-60"&gt;Between&nbsp;30&nbsp;and&nbsp;60&lt;/option&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;option&nbsp;value="60+"&gt;Over&nbsp;60&lt;/option&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;/select&gt;&lt;/label&gt;&lt;/p&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;!--&nbsp;text&nbsp;area&nbsp;for&nbsp;comments&nbsp;--&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;&lt;label&gt;Comments:&nbsp;&lt;textarea&nbsp;name="comments"&nbsp;rows="3"&nbsp;cols="40"&gt;&lt;/textarea&gt;&lt;/label&gt;&lt;/p&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;/fieldset&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&nbsp;style="text-align:center;"&gt;&lt;input&nbsp;type="submit"&nbsp;name="submit"&nbsp;value="Submit&nbsp;My&nbsp;Information"&nbsp;/&gt;&lt;/p&gt;<br /><br />&lt;/form&gt;<br /><br />&lt;!--&lt;p&gt;and&nbsp;this&nbsp;is&nbsp;the&nbsp;source&nbsp;of&nbsp;this&nbsp;page&lt;/p&gt;--&gt;<br /><br /><span style="color: #0000BB">&lt;?php<br />&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #007700">include&nbsp;</span><span style="color: #DD0000">'../../../php/showSource2.php'</span><span style="color: #007700">;<br />&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #0000BB">showSource</span><span style="color: #007700">(</span><span style="color: #0000BB">$_SERVER</span><span style="color: #007700">[</span><span style="color: #DD0000">"PHP_SELF"</span><span style="color: #007700">],</span><span style="color: #DD0000">"form_out.php"</span><span style="color: #007700">);<br /></span><span style="color: #0000BB">?&gt;<br /></span><br />&lt;p&gt;&lt;a&nbsp;href="form_out.php"&nbsp;target="_blank"&gt;show&nbsp;source&lt;/a&gt;&lt;/p&gt;<br /><br /><span style="color: #0000BB">&lt;?php<br />&nbsp;&nbsp;&nbsp;&nbsp;showSource</span><span style="color: #007700">(</span><span style="color: #DD0000">"handle_form.php"</span><span style="color: #007700">,&nbsp;</span><span style="color: #DD0000">"handle_form_out.php"</span><span style="color: #007700">);<br /></span><span style="color: #0000BB">?&gt;<br /></span><br />&lt;p&gt;&lt;a&nbsp;href="handle_form_out.php"&nbsp;target="_blank"&gt;show&nbsp;handle_form.php&lt;/a&gt;&lt;/p&gt;<br /><br />&lt;p&gt;based&nbsp;on&nbsp;code&nbsp;in&nbsp;&lt;em&gt;PHP&nbsp;and&nbsp;MySQL&nbsp;for&nbsp;Dynamic&nbsp;Web&nbsp;Sites:&nbsp;Visual&nbsp;QuickPro&nbsp;Guide&nbsp;(4th&nbsp;Edition)&lt;/em&gt;&nbsp;by&nbsp;Larry&nbsp;E.&nbsp;Ullman'&lt;/p&gt;<br />&lt;/body&gt;<br />&lt;/html&gt;</span>
</code>