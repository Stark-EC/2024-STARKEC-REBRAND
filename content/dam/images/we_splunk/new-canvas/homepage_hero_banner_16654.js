var createjs,AdobeAn,canvas,stage,exportRoot,anim_container,dom_overlay_container,fnStartAnimation;function init(){canvas=document.getElementById("canvas_hero"),anim_container=document.getElementById("animation_container_hero"),dom_overlay_container=document.getElementById("dom_overlay_container_hero");var e=AdobeAn.getComposition("E45E0DCC70485D45B6D6209475AD5511"),t=e.getLibrary(),i=new createjs.LoadQueue(!1);i.addEventListener("fileload",function(t){handleFileLoad(t,e)}),i.addEventListener("complete",function(t){handleComplete(t,e)});t=e.getLibrary();i.loadManifest(t.properties.manifest)}function handleFileLoad(e,t){var i=t.getImages();e&&"image"==e.item.type&&(i[e.item.id]=e.result)}function handleComplete(e,t){var n=t.getLibrary(),s=t.getSpriteSheet(),a=e.target,o=n.ssMetadata;for(i=0;i<o.length;i++)s[o[i].name]=new createjs.SpriteSheet({images:[a.getResult(o[i].name)],frames:o[i].frames});exportRoot=new n.homepage_hero_R6,stage=new n.Stage(canvas),fnStartAnimation=function(){stage.addChild(exportRoot),createjs.Ticker.framerate=n.properties.fps,createjs.Ticker.addEventListener("tick",stage)},AdobeAn.makeResponsive(!1,"both",!1,1,[canvas,anim_container,dom_overlay_container]),AdobeAn.compositionLoaded(n.properties.id),fnStartAnimation()}!function(e,t){var i,n={},s={},a={};function o(){var e=this._cloneProps(new this.constructor(this.mode,this.startPosition,this.loop,this.reversed));return e.gotoAndStop(this.currentFrame),e.paused=this.paused,e.framerate=this.framerate,e}function r(t,i,n){var s=e.extend(t,e.MovieClip);return s.clone=o,s.nominalBounds=i,s.frameBounds=n,s}n.ssMetadata=[{name:"homepage_hero_R6_atlas_1",frames:[[0,1180,338,204],[781,702,445,333],[1186,1037,233,180],[1228,702,215,183],[0,0,1440,700],[1442,0,213,159],[781,1037,403,324],[340,1180,248,193],[0,702,779,476]]}],(n.AnMovieClip=function(){this.actionFrames=[],this.ignorePause=!1,this.gotoAndPlay=function(t){e.MovieClip.prototype.gotoAndPlay.call(this,t)},this.play=function(){e.MovieClip.prototype.play.call(this)},this.gotoAndStop=function(t){e.MovieClip.prototype.gotoAndStop.call(this,t)},this.stop=function(){e.MovieClip.prototype.stop.call(this)}}).prototype=i=new e.MovieClip,(n.bar_chart=function(){this.initialize(s.homepage_hero_R6_atlas_1),this.gotoAndStop(0)}).prototype=i=new e.Sprite,(n.bar_chart_bg1=function(){this.initialize(s.homepage_hero_R6_atlas_1),this.gotoAndStop(1)}).prototype=i=new e.Sprite,(n.disconnects=function(){this.initialize(s.homepage_hero_R6_atlas_1),this.gotoAndStop(2)}).prototype=i=new e.Sprite,(n.health1=function(){this.initialize(s.homepage_hero_R6_atlas_1),this.gotoAndStop(3)}).prototype=i=new e.Sprite,(n.hpheroR1a0000600bg=function(){this.initialize(s.homepage_hero_R6_atlas_1),this.gotoAndStop(4)}).prototype=i=new e.Sprite,(n.incidents=function(){this.initialize(s.homepage_hero_R6_atlas_1),this.gotoAndStop(5)}).prototype=i=new e.Sprite,(n.map2=function(){this.initialize(s.homepage_hero_R6_atlas_1),this.gotoAndStop(6)}).prototype=i=new e.Sprite,(n.sessions=function(){this.initialize(s.homepage_hero_R6_atlas_1),this.gotoAndStop(7)}).prototype=i=new e.Sprite,(n.white_bg1=function(){this.initialize(s.homepage_hero_R6_atlas_1),this.gotoAndStop(8)}).prototype=i=new e.Sprite,(n.whitebg_move=function(t,i,n,s){null==n&&(n=!0),null==s&&(s=!1);var a=new Object;a.mode=t,a.startPosition=i,a.labels={},a.loop=n,a.reversed=s,e.MovieClip.apply(this,[a]),this.shape=new e.Shape,this.shape.graphics.f("#FFFFFF").s().p("EjVLCVGMAAAkqLMGqWAAAMAAAEqLg"),this.shape.setTransform(1364.35,954.225),this.timeline.addTween(e.Tween.get(this.shape).wait(1)),this._renderFirstFrame()}).prototype=r(n.whitebg_move,new e.Rectangle(0,0,2728.7,1908.5),null),(n.white_bg=function(t,i,s,a){null==s&&(s=!0),null==a&&(a=!1);var o=new Object;o.mode=t,o.startPosition=i,o.labels={},o.loop=s,o.reversed=a,e.MovieClip.apply(this,[o]),this.instance=new n.white_bg1,this.timeline.addTween(e.Tween.get(this.instance).wait(1)),this._renderFirstFrame()}).prototype=r(n.white_bg,new e.Rectangle(0,0,779,476),null),(n.sessions_1=function(t,i,s,a){null==s&&(s=!0),null==a&&(a=!1);var o=new Object;o.mode=t,o.startPosition=i,o.labels={},o.loop=s,o.reversed=a,e.MovieClip.apply(this,[o]),this.instance=new n.sessions,this.timeline.addTween(e.Tween.get(this.instance).wait(1)),this._renderFirstFrame()}).prototype=r(n.sessions_1,new e.Rectangle(0,0,248,193),null),(n.map=function(t,i,s,a){null==s&&(s=!0),null==a&&(a=!1);var o=new Object;o.mode=t,o.startPosition=i,o.labels={},o.loop=s,o.reversed=a,e.MovieClip.apply(this,[o]),this.instance=new n.map2,this.timeline.addTween(e.Tween.get(this.instance).wait(1)),this._renderFirstFrame()}).prototype=r(n.map,new e.Rectangle(0,0,403,324),null),(n.incidents_1=function(t,i,s,a){null==s&&(s=!0),null==a&&(a=!1);var o=new Object;o.mode=t,o.startPosition=i,o.labels={},o.loop=s,o.reversed=a,e.MovieClip.apply(this,[o]),this.instance=new n.incidents,this.timeline.addTween(e.Tween.get(this.instance).wait(1)),this._renderFirstFrame()}).prototype=r(n.incidents_1,new e.Rectangle(0,0,213,159),null),(n.health=function(t,i,s,a){null==s&&(s=!0),null==a&&(a=!1);var o=new Object;o.mode=t,o.startPosition=i,o.labels={},o.loop=s,o.reversed=a,e.MovieClip.apply(this,[o]),this.instance=new n.health1,this.timeline.addTween(e.Tween.get(this.instance).wait(1)),this._renderFirstFrame()}).prototype=r(n.health,new e.Rectangle(0,0,215,183),null),(n.disconnects_1=function(t,i,s,a){null==s&&(s=!0),null==a&&(a=!1);var o=new Object;o.mode=t,o.startPosition=i,o.labels={},o.loop=s,o.reversed=a,e.MovieClip.apply(this,[o]),this.instance=new n.disconnects,this.timeline.addTween(e.Tween.get(this.instance).wait(1)),this._renderFirstFrame()}).prototype=r(n.disconnects_1,new e.Rectangle(0,0,233,180),null),(n.bg=function(t,i,s,a){null==s&&(s=!0),null==a&&(a=!1);var o=new Object;o.mode=t,o.startPosition=i,o.labels={},o.loop=s,o.reversed=a,e.MovieClip.apply(this,[o]),this.instance=new n.hpheroR1a0000600bg,this.timeline.addTween(e.Tween.get(this.instance).wait(1)),this._renderFirstFrame()}).prototype=r(n.bg,new e.Rectangle(0,0,1440,700),null),(n.bars=function(t,i,s,a){null==s&&(s=!0),null==a&&(a=!1);var o=new Object;o.mode=t,o.startPosition=i,o.labels={},o.loop=s,o.reversed=a,e.MovieClip.apply(this,[o]),this.instance=new n.bar_chart,this.timeline.addTween(e.Tween.get(this.instance).wait(1)),this._renderFirstFrame()}).prototype=r(n.bars,new e.Rectangle(0,0,338,204),null),(n.barchart=function(t,i,s,a){null==s&&(s=!0),null==a&&(a=!1);var o=new Object;o.mode=t,o.startPosition=i,o.labels={},o.loop=s,o.reversed=a,e.MovieClip.apply(this,[o]),this.frame_79=function(){this.stop()},this.timeline.addTween(e.Tween.get(this).wait(79).call(this.frame_79).wait(1)),this.instance=new n.bars,this.instance.setTransform(212,254.25,1,.751,0,0,0,169,185.2),this.timeline.addTween(e.Tween.get(this.instance).to({scaleY:1,y:254.2},77,e.Ease.quadOut).wait(3)),this.instance_1=new n.bar_chart_bg1,this.timeline.addTween(e.Tween.get(this.instance_1).wait(80)),this._renderFirstFrame()}).prototype=i=new e.MovieClip,i.nominalBounds=new e.Rectangle(0,0,445,333),(n.homepage_hero_R6=function(t,i,s,a){null==s&&(s=!0),null==a&&(a=!1);var o=new Object;o.mode=t,o.startPosition=i,o.labels={},o.loop=s,o.reversed=a,e.MovieClip.apply(this,[o]),this.actionFrames=[95],this.frame_95=function(){this.stop()},this.timeline.addTween(e.Tween.get(this).wait(95).call(this.frame_95).wait(1)),this.instance=new n.barchart,this.instance.setTransform(1637,367.55,1,1,0,0,0,222.5,166.5),this.instance._off=!0,this.timeline.addTween(e.Tween.get(this.instance).wait(6).to({_off:!1},0).to({x:1281.5,y:345.5},28,e.Ease.quadOut).wait(62)),this.instance_1=new n.map,this.instance_1.setTransform(1606.5,377.05,1,1,0,0,0,201.5,162),this.instance_1._off=!0,this.timeline.addTween(e.Tween.get(this.instance_1).wait(11).to({_off:!1},0).to({x:931.5,y:336},30,e.Ease.quadOut).wait(55)),this.instance_2=new n.disconnects_1,this.instance_2.setTransform(1557.45,167,1,1,0,0,0,116.5,90),this.instance_2._off=!0,this.timeline.addTween(e.Tween.get(this.instance_2).wait(2).to({_off:!1},0).to({x:1387.5,y:159},29,e.Ease.quadOut).wait(65)),this.instance_3=new n.sessions_1,this.instance_3.setTransform(1578.55,171.5,1,1,0,0,0,124,96.5),this.instance_3._off=!0,this.timeline.addTween(e.Tween.get(this.instance_3).wait(2).to({_off:!1},0).to({x:1213,y:157.5},34,e.Ease.quadOut).wait(60)),this.instance_4=new n.incidents_1,this.instance_4.setTransform(1572.45,167.5,1,1,0,0,0,106.5,79.5),this.instance_4._off=!0,this.timeline.addTween(e.Tween.get(this.instance_4).wait(2).to({_off:!1},0).to({x:1034.5,y:150.5},38,e.Ease.quadOut).wait(56)),this.instance_5=new n.health,this.instance_5.setTransform(1548.45,164.5,1,1,0,0,0,107.5,91.5),this.instance_5._off=!0,this.timeline.addTween(e.Tween.get(this.instance_5).wait(2).to({_off:!1},0).to({x:876.5,y:144.5},40,e.Ease.quadOut).wait(54)),this.instance_6=new n.whitebg_move,this.instance_6.setTransform(906.75,735.2,1,1,44.9382,0,0,1364.4,954.2),this.timeline.addTween(e.Tween.get(this.instance_6).to({x:-383.15,y:1704.6},42,e.Ease.quadOut).to({_off:!0},3).wait(51)),this.instance_7=new n.white_bg,this.instance_7.setTransform(1122.5,279,1,1,0,0,0,389.5,238),this.instance_7.alpha=0,this.instance_7._off=!0,this.timeline.addTween(e.Tween.get(this.instance_7).wait(12).to({_off:!1},0).to({alpha:1},34).wait(50)),this.instance_8=new n.bg,this.instance_8.setTransform(720,351,1,1,0,0,0,720,350),this.instance_8.alpha=.2813,this.timeline.addTween(e.Tween.get(this.instance_8).to({alpha:1},92).wait(4)),this._renderFirstFrame()}).prototype=i=new n.AnMovieClip,i.nominalBounds=new e.Rectangle(-1302.9,-553.9,3849.4,3897.7000000000003),n.properties={id:"E45E0DCC70485D45B6D6209475AD5511",width:1440,height:700,fps:24,color:"#FFFFFF",opacity:1,manifest:[{src:"/content/dam/images/we_splunk/new-canvas/marketecture_images/homepage_hero_banner_1.png?imbypass=on",id:"homepage_hero_R6_atlas_1"}],preloads:[]},(n.Stage=function(e){createjs.Stage.call(this,e)}).prototype=i=new createjs.Stage,i.setAutoPlay=function(e){this.tickEnabled=e},i.play=function(){this.tickEnabled=!0,this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())},i.stop=function(e){e&&this.seek(e),this.tickEnabled=!1},i.seek=function(e){this.tickEnabled=!0,this.getChildAt(0).gotoAndStop(n.properties.fps*e/1e3)},i.getDuration=function(){return this.getChildAt(0).totalFrames/n.properties.fps*1e3},i.getTimelinePosition=function(){return this.getChildAt(0).currentFrame/n.properties.fps*1e3},t.bootcompsLoaded=t.bootcompsLoaded||[],t.bootstrapListeners||(t.bootstrapListeners=[]),t.bootstrapCallback=function(e){if(t.bootstrapListeners.push(e),t.bootcompsLoaded.length>0)for(var i=0;i<t.bootcompsLoaded.length;++i)e(t.bootcompsLoaded[i])},t.compositions=t.compositions||{},t.compositions.E45E0DCC70485D45B6D6209475AD5511={getStage:function(){return exportRoot.stage},getLibrary:function(){return n},getSpriteSheet:function(){return s},getImages:function(){return a}},t.compositionLoaded=function(e){t.bootcompsLoaded.push(e);for(var i=0;i<t.bootstrapListeners.length;i++)t.bootstrapListeners[i](e)},t.getComposition=function(e){return t.compositions[e]},t.makeResponsive=function(e,t,i,s,a){var o,r,h=1;function l(){var l=n.properties.width,c=n.properties.height,p=window.innerWidth,d=window.innerHeight,m=window.devicePixelRatio||1,w=p/l,_=d/c,u=1;e&&("width"==t&&o==p||"height"==t&&r==d?u=h:i?1==s?u=Math.min(w,_):2==s&&(u=Math.max(w,_)):(p<l||d<c)&&(u=Math.min(w,_))),a[0].width=l*m*u,a[0].height=c*m*u,a.forEach(function(e){e.style.width=l*u+"px",e.style.height=c*u+"px"}),stage.scaleX=m*u,stage.scaleY=m*u,o=p,r=d,h=u,stage.tickOnUpdate=!1,stage.update(),stage.tickOnUpdate=!0}window.addEventListener("resize",l),l()},t.handleSoundStreamOnTick=function(e){if(!e.paused){var t=stage.getChildAt(0);t.paused&&!t.ignorePause||t.syncStreamSounds()}},t.handleFilterCache=function(e){if(!e.paused){var t=e.target;if(t&&t.filterCacheList)for(var i=0;i<t.filterCacheList.length;i++){var n=t.filterCacheList[i];n.startFrame<=t.currentFrame&&t.currentFrame<=n.endFrame&&n.instance.cache(n.x,n.y,n.w,n.h)}}}}(createjs=createjs||{},AdobeAn=AdobeAn||{}),$(document).ready(function(){init()});