import{Oa as c,R as s,ja as v,pa as d,qa as a,ra as r,sa as p,ta as m,ua as f,va as l,wa as E,xa as u}from"./chunk-IE6KAZOR.js";var S=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275cmp=s({type:o,selectors:[["app-webxr-ar"]],standalone:!0,features:[u],decls:6,vars:0,consts:[["embedded","","arjs",""],["preset","hiro"],["position","0 0.5 0","material","color: red;"],["camera","","position","0 0 5"]],template:function(e,i){e&1&&(l(0,"test "),d(1,"aframe")(2,"a-scene",0)(3,"a-marker",1),r(4,"a-box",2),a(),r(5,"a-entity",3),a()())},dependencies:[c]})}return o})();var y=["viewer"],C=["audioElement"],O=(()=>{class o{viewer;audio;audioEnabled=!1;deviceOS="";ngAfterViewInit(){this.detectDeviceOS();let t=this.viewer.nativeElement,e=this.audio.nativeElement;t.addEventListener("ar-status",i=>{i.detail.status==="session-started"&&this.audioEnabled?this.playAudio():i.detail.status==="not-presenting"&&e.pause()})}playAudio(){let t=this.audio.nativeElement;setTimeout(()=>{t.paused&&(t.play(),this.audioEnabled=!0)},100)}onARStatus(t){let e=t.detail.status;if(console.log("AR Status:",e),e==="session-started"&&this.audioEnabled){let i=this.audio.nativeElement;i&&i.play().catch(n=>{console.error("Error al reproducir el audio:",n),alert("No se pudo reproducir el audio. Por favor, int\xE9ntalo de nuevo.")})}}detectDeviceOS(){let t=navigator.userAgent;/android/i.test(t)?this.deviceOS="Android":/iPad|iPhone|iPod/i.test(t)?this.deviceOS="iOS":/Windows NT/i.test(t)?this.deviceOS="Windows":this.deviceOS="Unknown",console.log("Sistema operativo detectado:",this.deviceOS)}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=s({type:o,selectors:[["app-ar"]],viewQuery:function(e,i){if(e&1&&(p(y,5),p(C,5)),e&2){let n;m(n=f())&&(i.viewer=n.first),m(n=f())&&(i.audio=n.first)}},standalone:!0,features:[u],decls:3,vars:1,template:function(e,i){e&1&&(d(0,"p"),l(1),a(),r(2,"app-webxr-ar")),e&2&&(v(),E("Hola prueba N#57 ",i.deviceOS,""))},dependencies:[c,S],styles:[".canvas[_ngcontent-%COMP%]{width:100%;height:100%;display:block}.hotspot-button[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#000000b3;color:#fff;border:none;padding:10px;border-radius:8px;font-size:16px;cursor:pointer;z-index:1000}"]})}return o})();export{O as ArComponent};
