import{Aa as p,R as m,Ra as g,Sa as f,ja as u,pa as v,qa as E,ra as r,sa as s,ta as h,ua as y,va as a,wa as l,xa as d,ya as c,za as S}from"./chunk-5SSB2G73.js";var w=["miElemento"];function C(n,R){n&1&&(r(0,"div",null,0)(2,"p"),c(3,"Este es un elemento al que accedemos mediante ViewChild."),s()())}var A=(()=>{class n{miElementoRef;constructor(){}ngAfterViewInit(){this.miElementoRef?console.log(this.miElementoRef.nativeElement):console.error("miElementoRef no est\xE1 disponible")}startARSession(){navigator.xr?navigator.xr.requestSession("immersive-ar",{requiredFeatures:["hit-test"]}).then(e=>{console.log("Sesi\xF3n AR iniciada",e)}).catch(e=>{console.error("Error al iniciar la sesi\xF3n AR",e)}):console.error("WebXR no soportado en este navegador")}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=m({type:n,selectors:[["app-webxr-ar"]],viewQuery:function(t,i){if(t&1&&a(w,5),t&2){let o;l(o=d())&&(i.miElementoRef=o.first)}},standalone:!0,features:[p],decls:4,vars:1,consts:[["miElemento",""],[4,"ngIf"],[3,"click"]],template:function(t,i){t&1&&(r(0,"div"),v(1,C,4,0,"div",1),r(2,"button",2),y("click",function(){return i.startARSession()}),c(3,"Iniciar AR"),s()()),t&2&&(u(),E("ngIf",i.miElementoRef))},dependencies:[f,g]})}return n})();var x=["viewer"],_=["audioElement"],I=(()=>{class n{viewer;audio;audioEnabled=!1;deviceOS="";ngAfterViewInit(){this.detectDeviceOS();let e=this.viewer.nativeElement,t=this.audio.nativeElement;e.addEventListener("ar-status",i=>{i.detail.status==="session-started"&&this.audioEnabled?this.playAudio():i.detail.status==="not-presenting"&&t.pause()})}playAudio(){let e=this.audio.nativeElement;setTimeout(()=>{e.paused&&(e.play(),this.audioEnabled=!0)},100)}onARStatus(e){let t=e.detail.status;if(console.log("AR Status:",t),t==="session-started"){let i=this.audio.nativeElement;i&&i.play().catch(o=>{console.error("Error al reproducir el audio:",o)})}}detectDeviceOS(){let e=navigator.userAgent;/android/i.test(e)?this.deviceOS="Android":/iPad|iPhone|iPod/i.test(e)?this.deviceOS="iOS":/Windows NT/i.test(e)?this.deviceOS="Windows":this.deviceOS="Unknown",console.log("Sistema operativo detectado:",this.deviceOS)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=m({type:n,selectors:[["app-ar"]],viewQuery:function(t,i){if(t&1&&(a(x,5),a(_,5)),t&2){let o;l(o=d())&&(i.viewer=o.first),l(o=d())&&(i.audio=o.first)}},standalone:!0,features:[p],decls:3,vars:1,template:function(t,i){t&1&&(r(0,"p"),c(1),s(),h(2,"app-webxr-ar")),t&2&&(u(),S("Hola prueba N#36 ",i.deviceOS,""))},dependencies:[f,A],styles:[".canvas[_ngcontent-%COMP%]{width:100%;height:100%;display:block}.hotspot-button[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#000000b3;color:#fff;border:none;padding:10px;border-radius:8px;font-size:16px;cursor:pointer;z-index:1000}"]})}return n})();export{I as ArComponent};
