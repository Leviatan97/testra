import{Aa as m,Ba as p,Ca as v,Da as f,Ea as A,R as h,Va as b,Y as d,Z as l,ka as g,ma as w,sa as C,ta as S,ua as a,va as s,wa as r,xa as y,ya as c,za as u}from"./chunk-I2OX424Z.js";var E=["viewer"],O=["audioElement"];function x(o,_){if(o&1){let e=y();a(0,"p",10),f(1," Para activar la Realidad Aumentada (RA), toca el bot\xF3n del cubo en la esquina inferior derecha del visor. Luego, sigue las instrucciones en pantalla para colocar el modelo en tu entorno. "),s(),a(2,"model-viewer",11,1),c("ar-status",function(t){d(e);let n=u();return l(n.onARStatus(t))}),a(4,"button",12),c("click",function(){d(e);let t=u();return l(t.playAudio())}),f(5," \u{1F50A} Activar Sonido "),s()()}}function M(o,_){o&1&&r(0,"iframe",13)}function R(o,_){o&1&&r(0,"iframe",13)}var P=(()=>{class o{viewer;audio;audioEnabled=!1;deviceOS="";ngOnInit(){this.detectDeviceOS()}ngAfterViewInit(){if(this.viewer&&this.audio){let e=this.viewer.nativeElement,i=this.audio.nativeElement;e.addEventListener("ar-status",t=>{t.detail.status==="session-started"&&this.audioEnabled?this.playAudio():t.detail.status==="not-presenting"&&i.pause()})}}playAudio(){let e=this.audio.nativeElement;setTimeout(()=>{e.paused&&(e.play(),this.audioEnabled=!0)},100)}onARStatus(e){if(e.detail.status==="session-started"&&this.audioEnabled){let t=this.audio.nativeElement;t&&t.play().catch(n=>{console.error("Error al reproducir el audio:",n),alert("No se pudo reproducir el audio. Por favor, int\xE9ntalo de nuevo.")})}}detectDeviceOS(){if(typeof navigator<"u"){let e=navigator.userAgent;/android/i.test(e)?this.deviceOS="Android":/iPad|iPhone|iPod/i.test(e)?this.deviceOS="iOS":/Windows NT/i.test(e)?this.deviceOS="Windows":this.deviceOS="Unknown",console.log("Sistema operativo detectado:",this.deviceOS)}else console.log("navigator no est\xE1 disponible en este entorno."),this.deviceOS="Unknown"}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=h({type:o,selectors:[["app-ar"]],viewQuery:function(i,t){if(i&1&&(m(E,5),m(O,5)),i&2){let n;p(n=v())&&(t.viewer=n.first),p(n=v())&&(t.audio=n.first)}},standalone:!0,features:[A],decls:12,vars:1,consts:[["audioElement",""],["viewer",""],[1,"navbar","navbar-expand-lg","bg-body-tertiary"],[1,"container-fluid","align-items-center","justify-content-center"],["src","./LOGO-KIKES.avif","alt","Ambiente consultores"],[1,"container"],[1,"row","justify-content-center","align-items-center","g-2"],[1,"col-12"],["src","https://teamdeveloperinnovatechvr.github.io/HuevosKike/","frameborder","0"],["src","./audio_Rausch_edit_2.mp3","preload","auto"],[1,"text-justify","my-2","px-3"],["src","./Jorge_Rausch_animated.glb","ios-src","./Jorge_Rausch_animated.usdz","alt","A 3D model","ar","","auto-rotate","","camera-controls","",3,"ar-status"],["slot","hotspot","data-position","0 0 0","data-normal","0 1 0","type","button",1,"btn","btn-secondary",3,"click"],["src",g`https://teamdeveloperinnovatechvr.github.io/HuevosKike/`,"frameborder","0"]],template:function(i,t){if(i&1&&(a(0,"nav",2)(1,"div",3),r(2,"img",4),s()(),a(3,"div",5)(4,"div",6),r(5,"div",7),a(6,"div",7),C(7,x,6,0)(8,M,1,0,"iframe",8)(9,R,1,0,"iframe",8),s()()(),r(10,"audio",9,0)),i&2){let n;w(7),S((n=t.deviceOS)==="Android"?7:n==="iOS"?8:9)}},dependencies:[b],styles:["img[_ngcontent-%COMP%]{width:120px}.navbar[_ngcontent-%COMP%]{background-color:#17a90c!important;color:#fff;padding:10px}model-viewer[_ngcontent-%COMP%]{width:100%;height:500px}iframe[_ngcontent-%COMP%]{width:100%;height:500px}"]})}return o})();export{P as ArComponent};
