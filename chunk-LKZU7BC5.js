import{Oa as p,R as a,ja as f,pa as s,qa as r,ra as d,sa as u,ta as m,ua as h,va as l,wa as v,xa as c}from"./chunk-IE6KAZOR.js";var g=(()=>{class n{lightshipInstance;apiKey="2b7X5w9YvqmpFUPVwt1kSSOW6lZl63kEp9IF1YuyASRz1Z3hHdP763bY3rkQVEpsG9tErL";ngOnInit(){this.initializeAR()}ngOnDestroy(){this.lightshipInstance&&this.lightshipInstance.destroy()}initializeAR(){this.lightshipInstance=new Lightship.WebAR({apiKey:this.apiKey,modelUrl:"./Jorge_Rausch_animated.glb",onStart:()=>{console.log("AR iniciado")},onStop:()=>{console.log("AR detenido")},onError:e=>{console.error("Error en AR:",e)}}),this.lightshipInstance.start()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=a({type:n,selectors:[["app-webxr-ar"]],standalone:!0,features:[c],decls:3,vars:0,consts:[["id","ar-container"],["id","ar-canvas"]],template:function(t,i){t&1&&(l(0,`test
`),s(1,"div",0),d(2,"canvas",1),r())},dependencies:[p],styles:["#ar-container[_ngcontent-%COMP%]{position:relative;width:100%;height:100vh}#ar-canvas[_ngcontent-%COMP%]{width:100%;height:100%}"]})}return n})();var E=["viewer"],S=["audioElement"],O=(()=>{class n{viewer;audio;audioEnabled=!1;deviceOS="";ngAfterViewInit(){this.detectDeviceOS();let e=this.viewer.nativeElement,t=this.audio.nativeElement;e.addEventListener("ar-status",i=>{i.detail.status==="session-started"&&this.audioEnabled?this.playAudio():i.detail.status==="not-presenting"&&t.pause()})}playAudio(){let e=this.audio.nativeElement;setTimeout(()=>{e.paused&&(e.play(),this.audioEnabled=!0)},100)}onARStatus(e){let t=e.detail.status;if(console.log("AR Status:",t),t==="session-started"&&this.audioEnabled){let i=this.audio.nativeElement;i&&i.play().catch(o=>{console.error("Error al reproducir el audio:",o),alert("No se pudo reproducir el audio. Por favor, int\xE9ntalo de nuevo.")})}}detectDeviceOS(){let e=navigator.userAgent;/android/i.test(e)?this.deviceOS="Android":/iPad|iPhone|iPod/i.test(e)?this.deviceOS="iOS":/Windows NT/i.test(e)?this.deviceOS="Windows":this.deviceOS="Unknown",console.log("Sistema operativo detectado:",this.deviceOS)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=a({type:n,selectors:[["app-ar"]],viewQuery:function(t,i){if(t&1&&(u(E,5),u(S,5)),t&2){let o;m(o=h())&&(i.viewer=o.first),m(o=h())&&(i.audio=o.first)}},standalone:!0,features:[c],decls:3,vars:1,template:function(t,i){t&1&&(s(0,"p"),l(1),r(),d(2,"app-webxr-ar")),t&2&&(f(),v("Hola prueba N#47 ",i.deviceOS,""))},dependencies:[p,g],styles:[".canvas[_ngcontent-%COMP%]{width:100%;height:100%;display:block}.hotspot-button[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#000000b3;color:#fff;border:none;padding:10px;border-radius:8px;font-size:16px;cursor:pointer;z-index:1000}"]})}return n})();export{O as ArComponent};
