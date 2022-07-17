(function(){"use strict";var t={302:function(t,s,a){var e=a(144),o=a(998),i=a(6232),r=a(5550),n=a(6570),l=a(2118),c=a(9223),p=a(8271),u=a(5808),v=a(5942),d=a(4525),f=a(7820),m=a(3059),Z=a(2954),h=a(3687),_=a(7953),g=function(){var t=this,s=t._self._c;return s(o.Z,[s(Z.Z,{attrs:{app:"",clipped:""},model:{value:t.drawer,callback:function(s){t.drawer=s},expression:"drawer"}},[s(l.Z,[s(d.Z,[s(f.km,[s(f.V9,{staticClass:"title grey--text ext--darken-2"},[t._v(" Navigation Lists ")])],1)],1),s(c.Z),s(u.Z,{attrs:{dense:"",nav:""}},t._l(t.nav_lists,(function(a){return s(v.Z,{key:a.name,attrs:{"prepend-icon":a.icon,"no-action":"","append-icon":a.lists?void 0:""},scopedSlots:t._u([{key:"activator",fn:function(){return[s(f.km,[s(f.V9,[t._v(t._s(a.name))])],1)]},proxy:!0}],null,!0)},t._l(a.lists,(function(a){return s(d.Z,{key:a},[s(f.km,[s(f.V9,[t._v(t._s(a))])],1)],1)})),1)})),1)],1)],1),s(i.Z,{attrs:{color:"primary",dark:"",app:"","clipped-left":""}},[s(r.Z,{on:{click:function(s){t.drawer=!t.drawer}}}),s(_.qW,[t._v("Potofolio Site")]),s(h.Z),s(_.lj,[s(n.Z,{attrs:{id:"profile_nav",text:""}},[t._v("Profile")]),s(n.Z,{attrs:{id:"work_nav",text:""}},[t._v("Work")]),s(n.Z,{attrs:{id:"background_nav",text:""}},[t._v("Background")]),s(n.Z,{attrs:{id:"likes_nav",text:""}},[t._v("Likes")]),s(n.Z,{attrs:{id:"skill_nav",text:""}},[t._v("Skill")]),s(n.Z,{attrs:{id:"portofolio_nav",text:""}},[t._v("Portofolio")]),s(n.Z,{attrs:{id:"services_nav",text:""}},[t._v("Service")]),s(n.Z,{attrs:{href:"https://tarao96.github.io/myportofolio-vue/",text:""}},[t._v("Source")])],1)],1),s(m.Z,{staticClass:"brown lighten-5"},[s("router-view")],1),s(p.Z,{attrs:{color:"primary",dark:"",app:""}},[t._v(" Portofolio Site ")])],1)},C=[],b=a(9755),k=a.n(b),w={data(){return{drawer:null,supports:["iSara","Lancers","LIKSON"],nav_lists:[{name:"Profile",icon:"mdi-vuetify"},{name:"Skill",icon:"mdi-remote-desktop",lists:["HTML","CSS","JavaScript","PHP","Laravel","Vue.js","Nuxt.js","Sass","jQuery","Bootstrap","Vuetify","WordPress"]},{name:"Work",icon:"mdi-briefcase",lists:["iSara","Lancers","LIKSON"]},{name:"Service",icon:"mdi-account-wrench",lists:["Coding","WordPress","Web Development"]},{name:"Source",icon:"mdi-github"}]}},mounted:function(){var t=k()("#profile_locate").offset().top,s=k()("#work_locate").offset().top,a=k()("#background_locate").offset().top,e=k()("#likes_locate").offset().top,o=k()("#skill_locate").offset().top,i=k()("#portofolio_locate").offset().top,r=k()("#services_locate").offset().top;k()("#profile_nav").click((function(){k()(window).scrollTop(t-150)})),k()("#work_nav").click((function(){k()(window).scrollTop(s-150)})),k()("#background_nav").click((function(){k()(window).scrollTop(a-150)})),k()("#likes_nav").click((function(){k()(window).scrollTop(e-150)})),k()("#skill_nav").click((function(){k()(window).scrollTop(o-150)})),k()("#portofolio_nav").click((function(){k()(window).scrollTop(i-150)})),k()("#services_nav").click((function(){k()(window).scrollTop(r)})),k()(".work-item").hover((function(){k()(".caption",this).animate({top:"200px"},500)}),(function(){k()(".caption",this).animate({top:"350px"},500)}))}},y=w,S=a(1001),x=(0,S.Z)(y,g,C,!1,null,null,null),P=x.exports,I=a(8345),O=a(266),j=a(4324),L=a(1713),T=function(){var t=this,s=t._self._c;return s(l.Z,[s("div",{staticClass:"article mt-10 mb-10"},[s(L.Z,[s(h.Z),s(O.Z,{staticClass:"grey lighten-4 text-center rounded-lg heading",attrs:{cols:"6"}},[s("p",{staticClass:"mt-3 text-h6"},[t._v("Hello, thank you for visiting the site."),s("br"),t._v(" I'm a web app developer based in Japan!")])]),s(h.Z)],1),s(L.Z,{staticClass:"mt-10",attrs:{id:"profile_locate"}},[s(h.Z),s(O.Z,{staticClass:"text-left",attrs:{cols:"4"}},[s("h1",{staticClass:"myname"},[t._v("Keito Shitara")]),s("p",{staticClass:"text-h6"},[t._v("(Developer)")]),s("p",{staticClass:"text-h6 mt-3"},[t._v(" I'm a web developer in Tokyo."),s("br"),t._v(" This is my self-introduction site, made with Vue.js and Vuetify.")])]),s(O.Z,{staticClass:"mt-2",attrs:{cols:"2"}},[s("img",{staticClass:"profile_img rounded-circle",attrs:{src:a(2519),alt:"プロフィール画像"}})]),s(h.Z)],1),s(L.Z,{staticClass:"mt-10",attrs:{id:"work_locate"}},[s(h.Z),s(O.Z,{staticClass:"work",attrs:{cols:"6"}},[s("h2",{staticClass:"pl-2"},[t._v("Work")]),s("p",{staticClass:"mt-2 font-weight-medium"},[t._v(" I'm an full-stack developer based in Tokyo with a passion for building digital services he wants."),s("br"),t._v(" I'm a fledgling developer who has just joined an in-house development company, and in the past I have built systems for e-commerce sites."),s("br"),t._v(" I'm now developing SEO analysis tools in-house, and I'm learning every day to catch up on my development work."),s("br"),t._v(" In my private life, I am active mainly in web production and development.")]),s(n.Z,[s("router-link",{staticClass:"text-decoration-none black--text",attrs:{to:"/works"}},[t._v("Works")])],1)],1),s(h.Z)],1),s(L.Z,{staticClass:"mt-10",attrs:{id:"background_locate"}},[s(h.Z),s(O.Z,{staticClass:"bio",attrs:{cols:"6"}},[s("h2",{staticClass:"pl-2"},[t._v("Background")])]),s(h.Z)],1),s(L.Z,[s(h.Z),s(O.Z,{staticClass:"bio-contents",attrs:{cols:"2"}},[s("h3",{staticClass:"pl-2"},[t._v("1996")])]),s(O.Z,{attrs:{cols:"4"}},[s("p",{staticClass:"mt-1"},[t._v("Born in Nagoya(名古屋), Japan")])]),s(h.Z)],1),s(L.Z,{staticClass:"mt-0"},[s(h.Z),s(O.Z,{staticClass:"bio-contents",attrs:{cols:"2"}},[s("h3",{staticClass:"pl-2"},[t._v("2015")])]),s(O.Z,{attrs:{cols:"4"}},[s("p",{staticClass:"mt-1"},[t._v("Graduated from Nagoya Institute of Technology with a Master's degree in Materials Science and Engineering.")])]),s(h.Z)],1),s(L.Z,{staticClass:"mt-0"},[s(h.Z),s(O.Z,{staticClass:"bio-contents",attrs:{cols:"2"}},[s("h3",{staticClass:"pl-2"},[t._v("2019")])]),s(O.Z,{attrs:{cols:"4"}},[s("p",{staticClass:"mt-1"},[t._v("Joined a Toyota Group company as a material developer")])]),s(h.Z)],1),s(L.Z,{staticClass:"mt-0"},[s(h.Z),s(O.Z,{staticClass:"bio-contents",attrs:{cols:"2"}},[s("h3",{staticClass:"pl-2"},[t._v("2022")])]),s(O.Z,{attrs:{cols:"4"}},[s("p",{staticClass:"mt-1"},[t._v("Worked as a web developer in the product development section of a company engaged in DM business.")])]),s(h.Z)],1),s(L.Z,{attrs:{id:"likes_locate"}},[s(h.Z),s(O.Z,{staticClass:"likes",attrs:{cols:"6"}},[s("h2",{staticClass:"pl-2"},[t._v("Likes🖤")])]),s(h.Z)],1),s(L.Z,[s(h.Z),s(O.Z,{staticClass:"like-contents",attrs:{cols:"6"}},[s("p",{staticClass:"pl-2"},[t._v("Music, Web Development, Youtube, Commics, Anime, Apex, Movie, Japanese Chess")])]),s(h.Z)],1),s(L.Z,{attrs:{id:"skill_locate"}},[s(h.Z),s(O.Z,{staticClass:"skill",attrs:{cols:"6"}},[s("h2",{staticClass:"pl-2"},[t._v("Skill")])]),s(h.Z)],1),s(L.Z,[s(h.Z),s(O.Z,{staticClass:"skill-contents",attrs:{cols:"6"}},[s("p",{staticClass:"pl-2"},[t._v("HTML, CSS, JavaScript, jQuery, Sass, Bootstrap, Vue.js, Nuxt.js, Vuetify, PHP, Laravel, WordPress")]),s("p",{staticClass:"font-weight-medium"},[t._v(" I usually use PHP and Laravel for backend development at work, so PHP and Laravel web development is my specialty. "),s("br"),t._v(" I also sometimes work on front-end development, in which case I mainly use Vue.js and Nuxt.js.")])]),s(h.Z)],1),s(L.Z,{attrs:{id:"portofolio_locate"}},[s(h.Z),s(O.Z,{staticClass:"portofolio",attrs:{cols:"6"}},[s("h2",{staticClass:"pl-2"},[t._v("Website Production Portfolio")])]),s(h.Z)],1),s(L.Z,[s(h.Z),s(O.Z,{staticClass:"portofolio-contents",attrs:{cols:"6"}},[s("div",{staticClass:"portofolio-contents-heading"},[s("h3",{staticClass:"text-center"},[t._v("iSara")])]),s("div",{staticClass:"work-item"},[s("a",{attrs:{href:"https://tarao96.github.io/iSara/"}},[s("img",{attrs:{src:a(5136),alt:"iSaraのwebページ"}})]),s("a",{staticClass:"caption",attrs:{href:"https://tarao96.github.io/iSara/"}},[t._v("iSara模写")])])]),s(h.Z)],1),s(L.Z,[s(h.Z),s(O.Z,{staticClass:"portofolio-contents",attrs:{cols:"6"}},[s("div",{staticClass:"portofolio-contents-heading"},[s("h3",{staticClass:"text-center"},[t._v("SEO Consulting")])]),s("div",{staticClass:"work-item"},[s("a",{attrs:{href:"https://tarao96.github.io/Lancers/"}},[s("img",{attrs:{src:a(3989),alt:"SEOのwebページ"}})]),s("a",{staticClass:"caption",attrs:{href:"https://tarao96.github.io/Lancers/"}},[t._v("Lancers案件模写")])])]),s(h.Z)],1),s(L.Z,[s(h.Z),s(O.Z,{staticClass:"portofolio-contents",attrs:{cols:"6"}},[s("div",{staticClass:"portofolio-contents-heading"},[s("h3",{staticClass:"text-center"},[t._v("LIKSON")])]),s("div",{staticClass:"work-item"},[s("a",{attrs:{href:"https://tarao96.github.io/LIKSON/"}},[s("img",{attrs:{src:a(2187),alt:"LIKSONのwebページ"}})]),s("a",{staticClass:"caption",attrs:{href:"https://tarao96.github.io/LIKSON/"}},[t._v("LIKSON模写")])])]),s(h.Z)],1),s(L.Z,{attrs:{id:"services_locate"}},[s(h.Z),s(O.Z,{staticClass:"services",attrs:{cols:"6"}},[s("h2",{staticClass:"pl-2"},[t._v("Services")])]),s(h.Z)],1),s(L.Z,{staticClass:"mt-10"},[s(h.Z),s(O.Z,{staticClass:"grey lighten-4",attrs:{cols:"2"}},[s("h3",{staticClass:"pl-2"},[s(j.Z,{staticClass:"mr-2"},[t._v("mdi-xml")]),t._v("Coding")],1)]),s(O.Z,{staticClass:"grey lighten-4",attrs:{cols:"4"}},[s("p",{staticClass:"mt-1 font-weight-medium"},[t._v(" I perform appropriate coding based on the design. We also provide SEO-conscious coding that is compatible with responsive design."),s("br"),t._v(" We also handle modifications appropriately.")])]),s(h.Z)],1),s(L.Z,{staticClass:"mt-10"},[s(h.Z),s(O.Z,{staticClass:"services-contents grey lighten-4",attrs:{cols:"2"}},[s("h3",{staticClass:"pl-2"},[s(j.Z,{staticClass:"mr-2"},[t._v("mdi-wordpress")]),t._v("WordPress")],1)]),s(O.Z,{staticClass:"grey lighten-4",attrs:{cols:"4"}},[s("p",{staticClass:"mt-1 font-weight-medium"},[t._v(" We can install WordPress or convert your existing site to WordPress."),s("br"),t._v(" Also, we can help you to customize the theme and set up forms, etc.")])]),s(h.Z)],1),s(L.Z,{staticClass:"mt-10"},[s(h.Z),s(O.Z,{staticClass:"services-contents grey lighten-4",attrs:{cols:"3"}},[s("h3",{staticClass:"pl-2"},[s(j.Z,{staticClass:"mr-2"},[t._v("mdi-remote-desktop")]),t._v("Web Development")],1)]),s(O.Z,{staticClass:"grey lighten-4",attrs:{cols:"3"}},[s("p",{staticClass:"mt-1 font-weight-medium"},[t._v(" I can do web development programming."),s("br"),t._v(" The main development languages are PHP and JavaScript."),s("br"),t._v(" I am also proficient in Laravel and Vue.js as frameworks.")])]),s(h.Z)],1)],1)])},W=[],N={},V=N,M=(0,S.Z)(V,T,W,!1,null,"9adf3be8",null),K=M.exports,H=function(){var t=this;t._self._c;return t._m(0)},J=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"hello"},[s("h1",[t._v("This is Work Page.")])])}],E={},B=E,D=(0,S.Z)(B,H,J,!1,null,null,null),A=D.exports;e.ZP.use(I.Z);var G=new I.Z({mode:"history",base:"",routes:[{path:"/",component:K},{path:"/works",component:A}]}),Q=a(8864);e.ZP.use(Q.Z);var q=new Q.Z({});e.ZP.config.productionTip=!1,new e.ZP({router:G,vuetify:q,render:t=>t(P)}).$mount("#app")},2187:function(t,s,a){t.exports=a.p+"img/LIKSON.8089ee53.png"},3989:function(t,s,a){t.exports=a.p+"img/Lancers.fcd4867f.jpeg"},2519:function(t,s,a){t.exports=a.p+"img/Profile_Image.fcbb5a3d.jpg"},5136:function(t,s,a){t.exports=a.p+"img/iSara.d6c70b10.jpeg"}},s={};function a(e){var o=s[e];if(void 0!==o)return o.exports;var i=s[e]={exports:{}};return t[e].call(i.exports,i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(s,e,o,i){if(!e){var r=1/0;for(p=0;p<t.length;p++){e=t[p][0],o=t[p][1],i=t[p][2];for(var n=!0,l=0;l<e.length;l++)(!1&i||r>=i)&&Object.keys(a.O).every((function(t){return a.O[t](e[l])}))?e.splice(l--,1):(n=!1,i<r&&(r=i));if(n){t.splice(p--,1);var c=o();void 0!==c&&(s=c)}}return s}i=i||0;for(var p=t.length;p>0&&t[p-1][2]>i;p--)t[p]=t[p-1];t[p]=[e,o,i]}}(),function(){a.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(s,{a:s}),s}}(),function(){a.d=function(t,s){for(var e in s)a.o(s,e)&&!a.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:s[e]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p=""}(),function(){var t={143:0};a.O.j=function(s){return 0===t[s]};var s=function(s,e){var o,i,r=e[0],n=e[1],l=e[2],c=0;if(r.some((function(s){return 0!==t[s]}))){for(o in n)a.o(n,o)&&(a.m[o]=n[o]);if(l)var p=l(a)}for(s&&s(e);c<r.length;c++)i=r[c],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(p)},e=self["webpackChunkmyportofolio"]=self["webpackChunkmyportofolio"]||[];e.forEach(s.bind(null,0)),e.push=s.bind(null,e.push.bind(e))}();var e=a.O(void 0,[998],(function(){return a(302)}));e=a.O(e)})();
//# sourceMappingURL=app.13d03211.js.map