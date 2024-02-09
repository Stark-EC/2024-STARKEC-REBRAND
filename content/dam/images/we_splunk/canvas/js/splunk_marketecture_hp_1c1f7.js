$(window).on('load',function(){
if (window.innerWidth >= 768) {
    var s = document.createElement("script");
s.type = "text/javascript";
s.src = "/content/dam/images/we_splunk/canvas/js/homepage/desktop_marketecture_2.js?v7";
$("body").append(s);
}else{
    var s = document.createElement("script");
s.type = "text/javascript";
s.src = "/content/dam/images/we_splunk/canvas/js/homepage/mobile_marketecture.js?v2";
$("body").append(s);
}
});
