document.onkeyup = function(event)
{
if (document.activeElement.nodeName == 'TEXTAREA' || document.activeElement.nodeName == 'INPUT') return;
event = event || window.event;
switch(event.keyCode)
{
case 37:

var newerLink = document.getElementById('Blog1_blog-pager-newer-link');
if(newerLink !=null) window.location.href = newerLink.href;
break;
case 39:
var olderLink = document.getElementById('Blog1_blog-pager-older-link');
if(olderLink!=null) window.location.href = olderLink.href;
}
};

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-351931-8', 'auto');
  ga('send', 'pageview');

