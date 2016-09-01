$(document).ready(function () {
	loadnav();
});

function loadnav()
{
	var lihtml = "";
	lihtml += "<li>";
	lihtml += "	<a href='#'><i class='fa fa-fw fa-file'></i>开发心得<span class='fa arrow'></span></a>";
	lihtml += "	<ul class='nav nav-second-level'>";
	lihtml += "		<li><a href='experience.html'>总览</a></li>";
	lihtml += "		<li><a href='about-me.html'>简说自己</a></li>";
	lihtml += "		<li><a href='start-linux.html'>Linux开始</a></li>";
	lihtml += "		<li><a href='start-github.html'>从Github开始</a></li>";
	lihtml += "	</ul>";
	lihtml += "</li>";
	lihtml += "<li>";
	lihtml += "	<a href='#'><i class='fa fa-dashboard'></i>HTML细说<span class='fa arrow'></span></a>";
	lihtml += "	<ul class='nav nav-second-level'>";
	lihtml += "		<li><a href='#'>总览</a></li>";
	lihtml += "		<li><a href='#'>HTML XXX</a></li>";
	lihtml += "		<li><a href='#'>HTML XXX</a></li>"; 
	lihtml += "	</ul>";
	lihtml += "</li>"; 
	lihtml += "<li>";
	lihtml += "	<a href='#'><i class='fa fa-dashboard'></i>问题集锦<span class='fa arrow'></span></a>";
	lihtml += "	<ul class='nav nav-second-level'>";
	lihtml += "		<li><a href='#'>总览</a></li>";
	lihtml += "		<li><a href='#'>问题集锦1</a></li>";
	lihtml += "		<li><a href='#'>问题集锦2</a></li>"; 
	lihtml += "	</ul>";
	lihtml += "</li>"; 
	$("#main-menu").html(lihtml);
}