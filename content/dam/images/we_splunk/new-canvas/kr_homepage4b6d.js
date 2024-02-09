$(window).on('load',function(){
if (window.innerWidth >= 768) {
    var s = document.createElement("script");
s.type = "text/javascript";
s.src = "/content/dam/images/we_splunk/new-canvas/ko_kr/desktop_marketecture_kr.js?v3";
$("body").append(s);
}else{
    var s = document.createElement("script");
s.type = "text/javascript";
s.src = "/content/dam/images/we_splunk/new-canvas/ko_kr/mobile_marketecture_kr.js?v3";
$("body").append(s);
}
});


