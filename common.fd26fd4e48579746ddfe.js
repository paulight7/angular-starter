(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+Qka":function(n,t,l){var i=l("fmRc"),e=l("t2Dn"),o=l("cq/+"),a=l("T1AV"),r=l("GoyQ"),u=l("mTTR"),d=l("itsj");n.exports=function n(t,l,s,c,p){t!==l&&o(l,function(o,u){if(r(o))p||(p=new i),a(t,l,u,s,n,c,p);else{var f=c?c(d(t,u),o,u+"",t,l,p):void 0;void 0===f&&(f=o),e(t,u,f)}},u)}},"1FRO":function(n,t,l){"use strict";var i=l("CcnG"),e=l("ioCk"),o=l("7AdY"),a=l("Ip0R");l("313c"),l.d(t,"a",function(){return r}),l.d(t,"b",function(){return p});var r=i["\u0275crt"]({encapsulation:0,styles:[["pre[_ngcontent-%COMP%]{padding:.5rem;background:#fff}.mat-expansion-panel[_ngcontent-%COMP%]{background:#ffeeef;box-shadow:none}"]],data:{}});function u(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),i["\u0275eld"](1,0,null,null,0,"i",[["class","fa fa-spinner fa-spin"]],null,null,null,null,null)),(n()(),i["\u0275ted"](-1,null,[" Loading..."]))],null,null)}function d(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,4,null,null,null,null,null,null,null)),(n()(),i["\u0275eld"](1,0,null,null,3,"app-error",[],null,null,null,e.b,e.a)),i["\u0275did"](2,114688,null,0,o.a,[],{error:[0,"error"],canClose:[1,"canClose"]},null),i["\u0275pid"](0,a.h,[]),(n()(),i["\u0275ted"](4,0,[" "," "]))],function(n,t){var l=t.component;n(t,2,0,i["\u0275unv"](t,2,0,i["\u0275nov"](t,3).transform(l.state.error||l.state.errorModifying)),!1)},function(n,t){var l=t.component;n(t,4,0,(null==l.state?null:null==l.state.error?null:l.state.error.message)||(null==l.state?null:null==l.state.errorModifying?null:l.state.errorModifying.message))})}function s(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,1,null,null,null,null,null,null,null)),i["\u0275ncd"](null,0),(n()(),i["\u0275and"](0,null,null,0))],null,null)}function c(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,6,null,null,null,null,null,null,null)),(n()(),i["\u0275and"](16777216,null,null,1,null,u)),i["\u0275did"](2,16384,null,0,a.n,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),i["\u0275and"](16777216,null,null,1,null,d)),i["\u0275did"](4,16384,null,0,a.n,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),i["\u0275and"](16777216,null,null,1,null,s)),i["\u0275did"](6,16384,null,0,a.n,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),i["\u0275and"](0,null,null,0))],function(n,t){var l=t.component;n(t,2,0,l.state.loading),n(t,4,0,l.errorShow&&(l.state.error||l.state.errorModifying)),n(t,6,0,!(null!=l.state&&l.state.loading||null!=l.state&&l.state.error))},null)}function p(n){return i["\u0275vid"](2,[(n()(),i["\u0275and"](16777216,null,null,1,null,c)),i["\u0275did"](1,16384,null,0,a.n,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,t){n(t,1,0,t.component.state)},null)}},"3B+W":function(n,t,l){"use strict";l.d(t,"a",function(){return i});var i=function(){return function(){}}()},"3L66":function(n,t,l){var i=l("MMmD"),e=l("ExA7");n.exports=function(n){return e(n)&&i(n)}},"4DFU":function(n,t,l){var i=l("+Qka"),e=l("GoyQ");n.exports=function n(t,l,o,a,r,u){return e(t)&&e(l)&&(u.set(l,t),i(t,l,void 0,n,u),u.delete(l)),t}},"9B2W":function(n,t,l){"use strict";l.d(t,"a",function(){return e});var i=l("CcnG"),e=function(){function n(){this.listingSelected=new i.EventEmitter}return n.prototype.ngOnInit=function(){},n}()},"CE6+":function(n,t,l){"use strict";l.d(t,"a",function(){return i});var i=function(){function n(){}return n.prototype.addMarkers=function(n,t){if(t){var l=this.createMarker(t);return l.forEach(function(t){return t.addTo(n)}),l}},n.prototype.mapFitBounds=function(n,t){t&&t.length&&setTimeout(function(){n.rotateTo(0,{duration:500}),setTimeout(function(){var l=new window.mapboxgl.LngLatBounds;t.forEach(function(n){l.extend(n.getLngLat())}),n.fitBounds(l)},500)},100)},n.prototype.flyToLocation=function(n,t){setTimeout(function(){n.rotateTo(0,{duration:500}),setTimeout(function(){n.flyTo({center:t,zoom:10,pitch:0,speed:2.2,curve:1.42,easing:function(n){return n}})},500)},100)},n.prototype.createMarker=function(n){var t=this;return n.map(function(n){if(n.latitude&&n.longitude){var l=document.createElement("div");l.className=n.metadata&&n.metadata.iconClass?n.metadata.iconClass:"marker";var i=new window.mapboxgl.Marker(l).setLngLat([n.longitude,n.latitude]);return n.metadata&&n.metadata.title&&t.createPopup(i,n),i}})},n.prototype.createPopup=function(n,t){var l="";t.metadata&&t.metadata.title&&(l+="<h3>"+t.metadata.title+"</h3>"),t.metadata&&t.metadata.description&&(l+="<div>"+t.metadata.description+"</div>"),n.setPopup(new window.mapboxgl.Popup({offset:25}).setHTML(l))},n}()},JBE3:function(n,t,l){var i=l("+Qka"),e=l("LsHQ")(function(n,t,l,e){i(n,t,l,e)});n.exports=e},L6tT:function(n,t,l){"use strict";l.d(t,"a",function(){return o});var i=l("CcnG"),e=l("26FU"),o=function(){function n(){this.listingSelected=new i.EventEmitter,this.locations$=new e.a(null),this.pageIndex=0,this.pageSize=10}return n.prototype.ngOnInit=function(){},n.prototype.ngOnChanges=function(){this.locations&&(this.pageIndex=0),this.locations$.next(this.locationsFilter(this.locations,this.pageIndex,this.pageSize))},n.prototype.pageChanged=function(n){this.pageIndex=n.pageIndex,this.pageSize=n.pageSize,this.locations$.next(this.locationsFilter(this.locations,this.pageIndex,this.pageSize))},n.prototype.modalLaunch=function(){},n.prototype.locationsFilter=function(n,t,l){if(n){var i=t*l,e=(t+1)*l-1;return n.filter(function(n,t){return t>=i&&t<=e})}},n}()},LsHQ:function(n,t,l){var i=l("EA7m"),e=l("mv/X");n.exports=function(n){return i(function(t,l){var i=-1,o=l.length,a=o>1?l[o-1]:void 0,r=o>2?l[2]:void 0;for(a=n.length>3&&"function"==typeof a?(o--,a):void 0,r&&e(l[0],l[1],r)&&(a=o<3?void 0:a,o=1),t=Object(t);++i<o;){var u=l[i];u&&n(t,u,i,a)}return t})}},NpCv:function(n,t,l){"use strict";l.d(t,"a",function(){return e});var i=l("CcnG"),e=function(){function n(){this.heatMap=!0,this.submit=new i.EventEmitter,this.listingSelected=new i.EventEmitter,this.toggleSelected=new i.EventEmitter}return n.prototype.ngOnInit=function(){},n.prototype.submitForm=function(n){this.submit.emit(this.formSearch.value),n.stopPropagation(),n.preventDefault()},n}()},P4Tr:function(n,t,l){var i=l("heNW"),e=l("EA7m"),o=l("4DFU"),a=l("JBE3"),r=e(function(n){return n.push(void 0,o),i(a,void 0,n)});n.exports=r},T1AV:function(n,t,l){var i=l("t2Dn"),e=l("5Tg0"),o=l("yP5f"),a=l("Q1l4"),r=l("+iFO"),u=l("03A+"),d=l("Z0cm"),s=l("3L66"),c=l("DSRE"),p=l("lSCD"),f=l("GoyQ"),m=l("YO3V"),g=l("c6wG"),h=l("itsj"),v=l("jeLo");n.exports=function(n,t,l,b,x,y,w){var C=h(n,l),I=h(t,l),_=w.get(I);if(_)i(n,l,_);else{var R=y?y(C,I,l+"",n,t,w):void 0,k=void 0===R;if(k){var T=d(I),O=!T&&c(I),S=!T&&!O&&g(I);R=I,T||O||S?d(C)?R=C:s(C)?R=a(C):O?(k=!1,R=e(I,!0)):S?(k=!1,R=o(I,!0)):R=[]:m(I)||u(I)?(R=C,u(C)?R=v(C):f(C)&&!p(C)||(R=r(I))):k=!1}k&&(w.set(I,R),x(R,I,b,y,w),w.delete(I)),i(n,l,R)}}},YO3V:function(n,t,l){var i=l("NykK"),e=l("LcsW"),o=l("ExA7"),a=Function.prototype,r=Object.prototype,u=a.toString,d=r.hasOwnProperty,s=u.call(Object);n.exports=function(n){if(!o(n)||"[object Object]"!=i(n))return!1;var t=e(n);if(null===t)return!0;var l=d.call(t,"constructor")&&t.constructor;return"function"==typeof l&&l instanceof l&&u.call(l)==s}},cyqa:function(n,t,l){"use strict";l.d(t,"a",function(){return o});var i=l("idnu"),e=function(){return(e=Object.assign||function(n){for(var t,l=1,i=arguments.length;l<i;l++)for(var e in t=arguments[l])Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n}).apply(this,arguments)},o=function(){function n(n,t,l,i){this.fb=n,this.http=t,this.dialog=l,this.ref=i,this.sidebarMobileShow=!1,this.listingsShowAll=!0}return n.prototype.ngOnInit=function(){var n=this;this.formSearch=this.fb.group({zip:["",[]],priceLow:["",[]],priceHigh:["",[]],bedroomsMin:["",[]],bedroomsMax:["",[]],homeTypes:["",[]],sqFootageMin:["",[]],sqFootageMax:["",[]],is_single_family:[!1,[]],is_multi_family:[!1,[]],is_townhouse:[!1,[]],is_condo:[!1,[]]}),this.http.get("assets/mock-data/properties.json").subscribe(function(t){n.locationsOriginal=t.map(function(n){var t=n.office_name.toLowerCase().replace(/[^A-Z0-9]/gi,"");return e({},n,{metadata:{title:n.display_address,description:n.city+", "+n.county+" "+n.zip_code,iconClass:-1!==t.indexOf("realtyonegroup")?"marker rog":null,isRog:-1!==t.indexOf("realtyonegroup")},latitude:n.display_lat,longitude:n.display_lng})}),n.locationsOriginal.length=500,n.ref.markForCheck()})},n.prototype.listingSelected=function(n){this.listingModal=this.dialog.open(i.a,{width:"90%",data:n})},n.prototype.locationsSearch=function(){this.locations=this.locationsOriginal.slice(),this.sidebarMobileShow=!1,this.ref.markForCheck()},n.prototype.toggleSelected=function(n){console.log(n),this.toggleRogListings()},n.prototype.toggleRogListings=function(){var n=this;this.locations=this.locationsOriginal.filter(function(t){return!!(n.listingsShowAll&&t.metadata.isRog||!n.listingsShowAll)}),this.listingsShowAll=!this.listingsShowAll},n}()},idnu:function(n,t,l){"use strict";l.d(t,"a",function(){return i});var i=function(){function n(n,t,l){this.dialogRef=n,this.data=t,this.dataAlt=l}return n.prototype.ngOnInit=function(){},n.prototype.submit=function(){this.dialogRef.close(this.dataAlt||this.data)},n}()},itsj:function(n,t){n.exports=function(n,t){if("__proto__"!=t)return n[t]}},j7vV:function(n,t,l){"use strict";l.d(t,"a",function(){return i});var i=function(){return function(){}}()},jeLo:function(n,t,l){var i=l("juv8"),e=l("mTTR");n.exports=function(n){return i(n,e(n))}},lzlj:function(n,t,l){"use strict";l.d(t,"a",function(){return e}),l.d(t,"b",function(){return o});var i=l("CcnG"),e=(l("FVSy"),l("Fzqc"),l("Wf4p"),l("ZYjt"),i["\u0275crt"]({encapsulation:2,styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:16px;border-radius:4px}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}@media screen and (-ms-high-contrast:active){.mat-card{outline:solid 1px}}.mat-card-actions,.mat-card-content,.mat-card-subtitle{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px 0}@media (max-width:599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card-content>:first-child,.mat-card>:first-child{margin-top:0}.mat-card-content>:last-child:not(.mat-card-footer),.mat-card>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child{margin-left:0;margin-right:0}.mat-card-title{margin-bottom:8px}.mat-card-subtitle:not(:first-child),.mat-card-title:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],data:{}}));function o(n){return i["\u0275vid"](2,[i["\u0275ncd"](null,0),i["\u0275ncd"](null,1)],null,null)}},"mv/X":function(n,t,l){var i=l("ljhN"),e=l("MMmD"),o=l("wJg7"),a=l("GoyQ");n.exports=function(n,t,l){if(!a(l))return!1;var r=typeof t;return!!("number"==r?e(l)&&o(t,l.length):"string"==r&&t in l)&&i(l[t],n)}},t2Dn:function(n,t,l){var i=l("hypo"),e=l("ljhN");n.exports=function(n,t,l){(void 0===l||e(n[t],l))&&(void 0!==l||t in n)||i(n,t,l)}},"vo+j":function(n,t,l){"use strict";var i=l("CcnG"),e=l("Ip0R"),o=l("seP3"),a=l("gIcY"),r=l("dJrM"),u=l("Wf4p"),d=l("Fzqc"),s=l("dWZg"),c=l("wFw1"),p=l("b716"),f=l("/VYK");l("gO3X"),l.d(t,"a",function(){return m}),l.d(t,"b",function(){return y});var m=i["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{width:100%}.field-icon[_ngcontent-%COMP%]{position:absolute;right:0;top:5px;z-index:3}"]],data:{}});function g(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-thumbs-up green field-icon anim-bounce-in"]],null,null,null,null,null))],null,null)}function h(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-warning red field-icon anim-bounce-in"]],null,null,null,null,null))],null,null)}function v(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,4,null,null,null,null,null,null,null)),(n()(),i["\u0275and"](16777216,null,null,1,null,g)),i["\u0275did"](2,16384,null,0,e.n,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),i["\u0275and"](16777216,null,null,1,null,h)),i["\u0275did"](4,16384,null,0,e.n,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),i["\u0275and"](0,null,null,0))],function(n,t){var l=t.component;n(t,2,0,!l.status.invalid&&l.status.hasValue),n(t,4,0,l.status.invalid)},null)}function b(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,4,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),i["\u0275did"](1,16384,[[4,4]],0,o.b,[],null,null),(n()(),i["\u0275ted"](2,null,[" "," is "])),(n()(),i["\u0275eld"](3,0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),i["\u0275ted"](-1,null,["required"]))],null,function(n,t){var l=t.component;n(t,0,0,i["\u0275nov"](t,1).id),n(t,2,0,l.placeholder)})}function x(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,30,"form",[["class","w-100"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,t,l){var e=!0;return"submit"===t&&(e=!1!==i["\u0275nov"](n,2).onSubmit(l)&&e),"reset"===t&&(e=!1!==i["\u0275nov"](n,2).onReset()&&e),e},null,null)),i["\u0275did"](1,16384,null,0,a.v,[],null,null),i["\u0275did"](2,540672,null,0,a.i,[[8,null],[8,null]],{form:[0,"form"]},null),i["\u0275prd"](2048,null,a.d,null,[a.i]),i["\u0275did"](4,16384,null,0,a.o,[[4,a.d]],null,null),(n()(),i["\u0275eld"](5,0,null,null,25,"mat-form-field",[["appearance","outline"],["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,r.b,r.a)),i["\u0275did"](6,7389184,null,7,o.c,[i.ElementRef,i.ChangeDetectorRef,[2,u.h],[2,d.b],[2,o.a],s.a,i.NgZone,[2,c.a]],{appearance:[0,"appearance"]},null),i["\u0275qud"](335544320,1,{_control:0}),i["\u0275qud"](335544320,2,{_placeholderChild:0}),i["\u0275qud"](335544320,3,{_labelChild:0}),i["\u0275qud"](603979776,4,{_errorChildren:1}),i["\u0275qud"](603979776,5,{_hintChildren:1}),i["\u0275qud"](603979776,6,{_prefixChildren:1}),i["\u0275qud"](603979776,7,{_suffixChildren:1}),(n()(),i["\u0275eld"](14,0,null,3,2,"mat-label",[],null,null,null,null,null)),i["\u0275did"](15,16384,[[3,4]],0,o.f,[],null,null),(n()(),i["\u0275ted"](16,null,["",""])),(n()(),i["\u0275and"](16777216,null,1,1,null,v)),i["\u0275did"](18,16384,null,0,e.n,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),i["\u0275eld"](19,0,null,1,9,"input",[["class","mat-input-element mat-form-field-autofill-control"],["matInput",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],function(n,t,l){var e=!0;return"input"===t&&(e=!1!==i["\u0275nov"](n,20)._handleInput(l.target.value)&&e),"blur"===t&&(e=!1!==i["\u0275nov"](n,20).onTouched()&&e),"compositionstart"===t&&(e=!1!==i["\u0275nov"](n,20)._compositionStart()&&e),"compositionend"===t&&(e=!1!==i["\u0275nov"](n,20)._compositionEnd(l.target.value)&&e),"blur"===t&&(e=!1!==i["\u0275nov"](n,27)._focusChanged(!1)&&e),"focus"===t&&(e=!1!==i["\u0275nov"](n,27)._focusChanged(!0)&&e),"input"===t&&(e=!1!==i["\u0275nov"](n,27)._onInput()&&e),e},null,null)),i["\u0275did"](20,16384,null,0,a.e,[i.Renderer2,i.ElementRef,[2,a.a]],null,null),i["\u0275did"](21,16384,null,0,a.s,[],{required:[0,"required"]},null),i["\u0275prd"](1024,null,a.k,function(n){return[n]},[a.s]),i["\u0275prd"](1024,null,a.l,function(n){return[n]},[a.e]),i["\u0275did"](24,671744,null,0,a.h,[[3,a.d],[6,a.k],[8,null],[6,a.l],[2,a.x]],{name:[0,"name"]},null),i["\u0275prd"](2048,null,a.m,null,[a.h]),i["\u0275did"](26,16384,null,0,a.n,[[4,a.m]],null,null),i["\u0275did"](27,999424,null,0,p.a,[i.ElementRef,s.a,[6,a.m],[2,a.p],[2,a.i],u.b,[8,null],f.a,i.NgZone],{required:[0,"required"]},null),i["\u0275prd"](2048,[[1,4]],o.d,null,[p.a]),(n()(),i["\u0275and"](16777216,null,5,1,null,b)),i["\u0275did"](30,16384,null,0,e.n,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,t){var l=t.component;n(t,2,0,l.formGroup),n(t,6,0,"outline"),n(t,18,0,l.status.dirty),n(t,21,0,l.required),n(t,24,0,l.controlName),n(t,27,0,l.required),n(t,30,0,l.status.invalid)},function(n,t){var l=t.component;n(t,0,0,i["\u0275nov"](t,4).ngClassUntouched,i["\u0275nov"](t,4).ngClassTouched,i["\u0275nov"](t,4).ngClassPristine,i["\u0275nov"](t,4).ngClassDirty,i["\u0275nov"](t,4).ngClassValid,i["\u0275nov"](t,4).ngClassInvalid,i["\u0275nov"](t,4).ngClassPending),n(t,5,1,["standard"==i["\u0275nov"](t,6).appearance,"fill"==i["\u0275nov"](t,6).appearance,"outline"==i["\u0275nov"](t,6).appearance,"legacy"==i["\u0275nov"](t,6).appearance,i["\u0275nov"](t,6)._control.errorState,i["\u0275nov"](t,6)._canLabelFloat,i["\u0275nov"](t,6)._shouldLabelFloat(),i["\u0275nov"](t,6)._hideControlPlaceholder(),i["\u0275nov"](t,6)._control.disabled,i["\u0275nov"](t,6)._control.autofilled,i["\u0275nov"](t,6)._control.focused,"accent"==i["\u0275nov"](t,6).color,"warn"==i["\u0275nov"](t,6).color,i["\u0275nov"](t,6)._shouldForward("untouched"),i["\u0275nov"](t,6)._shouldForward("touched"),i["\u0275nov"](t,6)._shouldForward("pristine"),i["\u0275nov"](t,6)._shouldForward("dirty"),i["\u0275nov"](t,6)._shouldForward("valid"),i["\u0275nov"](t,6)._shouldForward("invalid"),i["\u0275nov"](t,6)._shouldForward("pending"),!i["\u0275nov"](t,6)._animationsEnabled]),n(t,16,0,l.placeholder),n(t,19,1,[i["\u0275nov"](t,21).required?"":null,i["\u0275nov"](t,26).ngClassUntouched,i["\u0275nov"](t,26).ngClassTouched,i["\u0275nov"](t,26).ngClassPristine,i["\u0275nov"](t,26).ngClassDirty,i["\u0275nov"](t,26).ngClassValid,i["\u0275nov"](t,26).ngClassInvalid,i["\u0275nov"](t,26).ngClassPending,i["\u0275nov"](t,27)._isServer,i["\u0275nov"](t,27).id,i["\u0275nov"](t,27).placeholder,i["\u0275nov"](t,27).disabled,i["\u0275nov"](t,27).required,i["\u0275nov"](t,27).readonly&&!i["\u0275nov"](t,27)._isNativeSelect||null,i["\u0275nov"](t,27)._ariaDescribedby||null,i["\u0275nov"](t,27).errorState,i["\u0275nov"](t,27).required.toString()])})}function y(n){return i["\u0275vid"](2,[(n()(),i["\u0275and"](16777216,null,null,1,null,x)),i["\u0275did"](1,16384,null,0,e.n,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,t){var l=t.component;n(t,1,0,l.formGroup&&l.controlName)},null)}},vzWj:function(n,t,l){"use strict";l.d(t,"a",function(){return i}),l("ygIs");var i=function(){return function(){}}()},ygIs:function(n,t,l){"use strict";l.d(t,"a",function(){return e}),l("CE6+");var i="pk.eyJ1Ijoicm9ndXNlciIsImEiOiJjanB1YzFrMmwwZjZnNDNxbGkwY28wdnI5In0.Xe4QgRnvsvP3WAncobSxqg",e=function(){function n(n){var t=this;this.mapObjects=n,this.apiKey=i,this.zoom=15.5,this.isLoaded=!1,this.uniqueId="map-box"+Math.floor(1e6*Math.random()),this.isRotating=!0,this.rotateTo=function(n){t.map.rotateTo(n/300%360,{duration:0}),t.isRotating&&requestAnimationFrame(t.rotateTo)}}return n.prototype.ngOnInit=function(){},n.prototype.ngOnChanges=function(n){n.locations&&this.isLoaded&&(this.locationsAdd(),this.isRotating=!1)},n.prototype.ngAfterViewInit=function(){this.scriptsLoad()},n.prototype.scriptsLoad=function(){var n=this;if(window.mapboxgl)this.mapInit(),this.isLoaded=!0;else{var t=document.createElement("script");t.type="text/javascript",t.src="https://api.mapbox.com/mapbox-gl-js/v0.52.0/mapbox-gl.js",t.onload=function(){n.mapInit(),n.isLoaded=!0},document.head.appendChild(t)}},n.prototype.mapInit=function(){var n=this;!this.map&&document.getElementById(this.uniqueId)&&(window.mapboxgl.accessToken=this.apiKey,navigator.geolocation.getCurrentPosition(function(t){n.mapCreate([t.coords.longitude,t.coords.latitude])},function(t){console.log(t),n.mapCreate([-115.172813,36.114647])}))},n.prototype.mapCreate=function(n){var t=this;this.map=new window.mapboxgl.Map({container:this.uniqueId,style:"mapbox://styles/mapbox/dark-v9",zoom:this.zoom,center:n,pitch:65}),this.locations||(this.locations=[{latitude:n[1],longitude:n[0]}]),this.locationsAdd(),this.map.on("load",function(){t.rotateTo(0);for(var n=t.map.getStyle().layers,l=0;l<n.length;l++)"symbol"===n[l].type&&n[l].layout["text-field"]&&t.map.removeLayer(n[l].id);t.map.addLayer({id:"3d-buildings",source:"composite","source-layer":"building",filter:["==","extrude","true"],type:"fill-extrusion",minzoom:15,paint:{"fill-extrusion-color":"#aaa","fill-extrusion-height":["interpolate",["linear"],["zoom"],15,0,15.05,["get","height"]],"fill-extrusion-base":["interpolate",["linear"],["zoom"],15,0,15.05,["get","min_height"]],"fill-extrusion-opacity":.6}})})},n.prototype.locationsAdd=function(){this.locations&&this.locations.length?(this.locationsRemove(),this.markers=this.mapObjects.addMarkers(this.map,this.locations),this.mapObjects.mapFitBounds(this.map,this.markers)):this.locationsRemove()},n.prototype.locationsRemove=function(){this.markers&&this.markers.length&&this.markers.forEach(function(n){return n.remove()})},n}()}}]);