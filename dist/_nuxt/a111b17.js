(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{414:function(e,n,t){"use strict";t.r(n);var r=t(16),o=(t(51),{asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function n(){var t,r,o,c,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.$content,r=e.params,o=e.app,c=e.error,n.next=3,t(o.i18n.locale,"homepage",r.slug).fetch().catch((function(){c({statusCode:404,message:"Page not found"})}));case 3:return l=n.sent,n.abrupt("return",{homepage:l});case 5:case"end":return n.stop()}}),n)})))()},data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(e){this.sliding=!0},onSlideEnd:function(e){this.sliding=!1}}}),c=t(55),component=Object(c.a)(o,(function(){var e=this,n=e._self._c;return n("div",{attrs:{id:"accueil"}},[n("b-carousel",{attrs:{id:"carousel-1",fade:"",interval:4e3,controls:"",indicators:"",background:"#FFF"},model:{value:e.slide,callback:function(n){e.slide=n},expression:"slide"}},e._l(e.homepage.slider,(function(t){return n("b-carousel-slide",{key:t.id,attrs:{caption:t.client,text:t.titre,"img-src":t.image}},[n("NuxtLink",{attrs:{to:"agence"}},[e._v("Voir le projet")])],1)})),1),e._v(" "),n("h2",[e._v(e._s(e.homepage.slogan))]),e._v(" "),n("h4",[e._v(e._s(e.homepage.soustitre))]),e._v(" "),n("p",[e._v(e._s(e.homepage.quisommesnous))]),e._v(" "),n("ul",e._l(e.homepage.CommunicationMenu,(function(menu){return n("li",{key:menu.id},[e._v("\n      "+e._s(menu)+"\n    ")])})),0)],1)}),[],!1,null,null,null);n.default=component.exports}}]);