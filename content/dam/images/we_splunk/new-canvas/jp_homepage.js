$(window).on('load',function(){
if (window.innerWidth >= 768) {
    var s = document.createElement("script");
s.type = "text/javascript";
s.src = "/content/dam/images/we_splunk/new-canvas/ja_jp/desktop_marketecture_jp.js?v3";
$("body").append(s);
}else{
    var s = document.createElement("script");
s.type = "text/javascript";
s.src = "/content/dam/images/we_splunk/new-canvas/ja_jp/mobile_marketecture_jp.js?v3";
$("body").append(s);
}
});


