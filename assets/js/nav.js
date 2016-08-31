$(document).ready(function () {
	loadnav();
});

function loadnav()
{
	var lihtml = "";
	lihtml += "<li>";
	lihtml +="<a href='#'><i class='fa fa-dashboard'></i>基础入门<span class='fa arrow'></span></a>";
	lihtml += "<ul class='nav nav-second-level'>";
	lihtml += "<li><a href='start.html'>入门心得</a></li>";
	lihtml += "<li><a href='#'>问题集锦</a></li>";
	lihtml += "<li>";
	lihtml += "<a href='#'>Second Level Link<span class='fa arrow'></span></a>";
	lihtml += "<ul class='nav nav-third-level'>";
	lihtml += "<li><a href='#'>Third Level Link</a></li>";
	lihtml += "<li><a href='#'>Third Level Link</a></li>";
	lihtml += "</ul>";
	lihtml += "</li>";
	lihtml += "</ul>";
	lihtml += "</li>";
	lihtml += "<li><a href='empty.html'><i class='fa fa-fw fa-file'></i> Empty Page</a></li>"; 
	$("#main-menu").html(lihtml);
}