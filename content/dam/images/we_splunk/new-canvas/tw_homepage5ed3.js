$(window).on('load',function(){
if (window.innerWidth >= 768) {
    var s = document.createElement("script");
s.type = "text/javascript";
s.src = "/content/dam/images/we_splunk/new-canvas/zh_tw/desktop_marketecture_tw.js";
$("body").append(s);
}else{
    var s = document.createElement("script");
s.type = "text/javascript";
s.src = "/content/dam/images/we_splunk/new-canvas/zh_tw/mobile_marketecture_tw.js";
$("body").append(s);
}
});


