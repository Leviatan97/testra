import{Qa as y,R as f,Y as l,Z as u,qa as r,ra as a,sa as _,ta as v,ua as d,va as c,wa as p,xa as m,ya as s,za as w}from"./chunk-XD53WGVD.js";var E=["viewer"],b=["audioElement"],g=(()=>{class o{viewer;audio;audioEnabled=!1;ngAfterViewInit(){let n=this.viewer.nativeElement,e=this.audio.nativeElement;n.addEventListener("ar-status",t=>{t.detail.status==="session-started"&&this.audioEnabled?e.play():t.detail.status==="not-presenting"&&e.pause()})}playAudio(){this.audio.nativeElement.play(),this.audioEnabled=!0}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=f({type:o,selectors:[["app-ar"]],viewQuery:function(e,t){if(e&1&&(c(E,5),c(b,5)),e&2){let i;p(i=m())&&(t.viewer=i.first),p(i=m())&&(t.audio=i.first)}},standalone:!0,features:[w],decls:10,vars:0,consts:[["viewer",""],["audioElement",""],["src","./Jorge_Rausch_animated.glb","ios-src","./Jorge_Rausch_animated.usdz","alt","A 3D model of an astronaut","ar","","auto-rotate","","camera-controls",""],["slot","hotspot","data-position","0 1 0","data-normal","0 1 0",1,"hotspot-button",3,"click"],["src","./audio_Rausch_edit_2.mp3","loop",""],[3,"click"]],template:function(e,t){if(e&1){let i=v();r(0,"p"),s(1,"Hola prueba N#29"),a(),r(2,"model-viewer",2,0)(4,"button",3),d("click",function(){return l(i),u(t.playAudio())}),s(5," \u{1F50A} Activar Sonido "),a()(),_(6,"audio",4,1),r(8,"button",5),d("click",function(){return l(i),u(t.playAudio())}),s(9,"\u{1F50A} Activar sonido"),a()}},dependencies:[y],styles:[".canvas[_ngcontent-%COMP%]{width:100%;height:100%;display:block}.hotspot-button[_ngcontent-%COMP%]{background:#000000b3;color:#fff;border:none;padding:8px 12px;border-radius:5px;cursor:pointer;font-size:14px}"]})}return o})();export{g as ArComponent};
