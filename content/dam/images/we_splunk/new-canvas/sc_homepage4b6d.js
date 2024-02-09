$(window).on('load',function(){
if (window.innerWidth >= 768) {
    var s = document.createElement("script");
s.type = "text/javascript";
s.src = "/content/dam/images/we_splunk/new-canvas/zh_cn/desktop_marketecture_sc.js?v3";
$("body").append(s);
}else{
    var s = document.createElement("script");
s.type = "text/javascript";
s.src = "/content/dam/images/we_splunk/new-canvas/zh_cn/mobile_marketecture_sc.js?v3";
$("body").append(s);
}
});


