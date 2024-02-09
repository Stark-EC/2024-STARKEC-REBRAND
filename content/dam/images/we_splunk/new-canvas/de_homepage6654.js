$(window).on('load',function(){
if (window.innerWidth >= 768) {
    var s = document.createElement("script");
s.type = "text/javascript";
s.src = "/content/dam/images/we_splunk/new-canvas/de_de/desktop_marketecture_de.js?v2";
$("body").append(s);
}else{
    var s = document.createElement("script");
s.type = "text/javascript";
s.src = "/content/dam/images/we_splunk/new-canvas/de_de/mobile_marketecture_de.js?v2";
$("body").append(s);
}
});


