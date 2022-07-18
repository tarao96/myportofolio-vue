(function(){"use strict";var t={4471:function(t,s,e){var o=e(144),i=e(998),a=e(6232),l=e(5550),n=e(6570),r=e(2118),c=e(9223),m=e(8271),u=e(4324),d=e(5808),p=e(5942),f=e(4525),v=e(7820),g=e(4611),Z=e(3059),h=e(2954),_=e(3687),C=e(7953),k=function(){var t=this,s=t._self._c;return s(i.Z,[s(h.Z,{attrs:{app:"",clipped:""},model:{value:t.drawer,callback:function(s){t.drawer=s},expression:"drawer"}},[s(r.Z,[s(f.Z,[s(v.km,[s(v.V9,{staticClass:"title grey--text ext--darken-2"},[t._v(" Navigation Lists ")])],1)],1),s(c.Z),s(d.Z,{attrs:{dense:"",nav:""}},[s(f.Z,[s(g.Z,[s(u.Z,[t._v("mdi-vuetify")])],1),s(v.km,[s(v.V9,{staticClass:"list-item",on:{click:function(s){return t.scrollProfile()}}},[t._v("Profile")])],1)],1),s(f.Z,[s(g.Z,[s(u.Z,[t._v("mdi-briefcase")])],1),s(v.km,[s(v.V9,{staticClass:"list-item",on:{click:function(s){return t.scrollWork()}}},[t._v("Work")])],1)],1),s(f.Z,[s(g.Z,[s(u.Z,[t._v("mdi-format-list-bulleted-square")])],1),s(v.km,[s(v.V9,{staticClass:"list-item",on:{click:function(s){return t.scrollBackground()}}},[t._v("Background")])],1)],1),s(f.Z,[s(g.Z,[s(u.Z,[t._v("mdi-head-heart")])],1),s(v.km,[s(v.V9,{staticClass:"list-item",on:{click:function(s){return t.scrollLikes()}}},[t._v("Likes")])],1)],1),s(f.Z,[s(g.Z,[s(u.Z,[t._v("mdi-remote-desktop")])],1),s(v.km,[s(v.V9,{staticClass:"list-item",on:{click:function(s){return t.scrollSkill()}}},[t._v("Skill")])],1)],1),s(p.Z,{attrs:{"no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[s(f.Z,{staticClass:"pl-0"},[s(g.Z,[s(u.Z,[t._v("mdi-book-open-page-variant")])],1),s(v.km,[s(v.V9,{staticClass:"list-item",on:{click:function(s){return t.scrollPortofolio()}}},[t._v("Portofolio")])],1)],1)]},proxy:!0}])},[s(f.Z,[s(v.km,[s(v.V9,{staticClass:"list-item",on:{click:function(s){return t.moveIsara()}}},[t._v("iSara")])],1)],1),s(f.Z,[s(v.km,[s(v.V9,{staticClass:"list-item",on:{click:function(s){return t.moveLancers()}}},[t._v("Lancers")])],1)],1),s(f.Z,[s(v.km,[s(v.V9,{staticClass:"list-item",on:{click:function(s){return t.moveLikson()}}},[t._v("LIKSON")])],1)],1)],1),s(f.Z,[s(g.Z,[s(u.Z,[t._v("mdi-account-wrench")])],1),s(v.km,[s(v.V9,{staticClass:"list-item",on:{click:function(s){return t.scrollServices()}}},[t._v("Services")])],1)],1),s(f.Z,[s(g.Z,[s(u.Z,[t._v("mdi-github")])],1),s(v.km,[s(v.V9,{staticClass:"list-item",on:{click:function(s){return t.moveGithub()}}},[t._v("Source")])],1)],1)],1)],1)],1),s(a.Z,{attrs:{color:"primary",dark:"",app:"","clipped-left":""}},[s(l.Z,{on:{click:function(s){t.drawer=!t.drawer}}}),s(C.qW,[t._v("Potofolio Site")]),s(_.Z),s(C.lj,{staticClass:"navbar-item"},[s(n.Z,{attrs:{text:""},on:{click:function(s){return t.scrollProfile()}}},[t._v("Profile")]),s(n.Z,{attrs:{text:""},on:{click:function(s){return t.scrollWork()}}},[t._v("Work")]),s(n.Z,{attrs:{text:""},on:{click:function(s){return t.scrollBackground()}}},[t._v("Background")]),s(n.Z,{attrs:{text:""},on:{click:function(s){return t.scrollLikes()}}},[t._v("Likes")]),s(n.Z,{attrs:{text:""},on:{click:function(s){return t.scrollSkill()}}},[t._v("Skill")]),s(n.Z,{attrs:{text:""},on:{click:function(s){return t.scrollPortofolio()}}},[t._v("Portofolio")]),s(n.Z,{attrs:{text:""},on:{click:function(s){return t.scrollServices()}}},[t._v("Service")]),s(n.Z,{attrs:{href:"https://github.com/tarao96/myportofolio-vue",text:""}},[t._v("Source")])],1)],1),s(Z.Z,{staticClass:"brown lighten-5"},[s("router-view")],1),s(m.Z,{attrs:{color:"primary",dark:"",app:""}},[s(n.Z,{attrs:{id:"portofolio-top",text:""}},[t._v("Portofolio Site")])],1)],1)},x=[],b=e(9755),w=e.n(b),y={data(){return{drawer:null}},methods:{moveIsara:function(){let t="https://tarao96.github.io/iSara/";window.location.href=t},moveLancers:function(){let t="https://tarao96.github.io/Lancers/";window.location.href=t},moveLikson:function(){let t="https://tarao96.github.io/LIKSON/";window.location.href=t},moveGithub:function(){let t="https://github.com/tarao96/myportofolio-vue";window.location.href=t},scrollProfile:function(){let t=document.getElementById("profile_locate"),s=t.getBoundingClientRect(),e=s.top+window.pageYOffset-100;document.documentElement.scrollTop=e},scrollWork:function(){let t=document.getElementById("work_locate"),s=t.getBoundingClientRect(),e=s.top+window.pageYOffset-100;document.documentElement.scrollTop=e},scrollBackground:function(){let t=document.getElementById("background_locate"),s=t.getBoundingClientRect(),e=s.top+window.pageYOffset-100;document.documentElement.scrollTop=e},scrollLikes:function(){let t=document.getElementById("likes_locate"),s=t.getBoundingClientRect(),e=s.top+window.pageYOffset-100;document.documentElement.scrollTop=e},scrollSkill:function(){let t=document.getElementById("skill_locate"),s=t.getBoundingClientRect(),e=s.top+window.pageYOffset-100;document.documentElement.scrollTop=e},scrollPortofolio:function(){let t=document.getElementById("portofolio_locate"),s=t.getBoundingClientRect(),e=s.top+window.pageYOffset-100;document.documentElement.scrollTop=e},scrollServices:function(){let t=document.getElementById("services_locate"),s=t.getBoundingClientRect(),e=s.top+window.pageYOffset-100;document.documentElement.scrollTop=e}},mounted:function(){w()("#portofolio-top").click((function(){return w()("body, html").animate({scrollTop:0},500),!1})),w()(".work-item").hover((function(){w()(".caption",this).animate({top:"200px"},500)}),(function(){w()(".caption",this).animate({top:"350px"},500)}))}},S=y,P=e(1001),I=(0,P.Z)(S,k,x,!1,null,"dd8e27a2",null),O=I.exports,L=e(8345),B=e(266),T=e(1713),j=function(){var t=this,s=t._self._c;return s(r.Z,[s("div",{staticClass:"article mt-10 mb-10"},[s(T.Z,[s(_.Z),s(B.Z,{staticClass:"grey lighten-4 text-center rounded-lg heading",attrs:{cols:"10",xs:"10",sm:"10",md:"6",lg:"6",xl:"6"}},[s("p",{staticClass:"mt-3 text-sm-h6"},[t._v("Hello, thank you for visiting the site."),s("br"),t._v(" I'm a web app developer based in Japan!")])]),s(_.Z)],1),s(T.Z,{staticClass:"mt-10",attrs:{id:"profile_locate"}},[s(_.Z),s(B.Z,{staticClass:"mt-2",attrs:{cols:"10",xs:"10",sm:"10",md:"2",lg:"2",xl:"2"}},[s("img",{staticClass:"profile_img rounded-circle ml-5",attrs:{src:e(2519),alt:"プロフィール画像"}})]),s(B.Z,{staticClass:"ml-16",attrs:{cols:"10",xs:"10",sm:"10",md:"4",lg:"4",xl:"4"}},[s("h1",{staticClass:"myname"},[t._v("Keito Shitara")]),s("p",{staticClass:"text-h6"},[t._v("(Developer)")]),s("p",{staticClass:"text-sm-h6 mt-3"},[t._v(" I'm a web developer in Tokyo."),s("br"),t._v(" This is my self-introduction site, made with Vue.js and Vuetify.")])]),s(_.Z)],1),s(T.Z,{staticClass:"mt-10",attrs:{id:"work_locate"}},[s(_.Z),s(B.Z,{staticClass:"work",attrs:{cols:"10",xs:"10",sm:"10",md:"6",lg:"6",xl:"6"}},[s("h2",{staticClass:"pl-2"},[t._v("Work")]),s("p",{staticClass:"mt-2 font-weight-medium"},[t._v(" I'm an full-stack developer based in Tokyo with a passion for building digital services he wants."),s("br"),t._v(" I'm a fledgling developer who has just joined an in-house development company, and in the past I have built systems for e-commerce sites."),s("br"),t._v(" I'm now developing SEO analysis tools in-house, and I'm learning every day to catch up on my development work."),s("br"),t._v(" In my private life, I am active mainly in web production and development.")]),s(n.Z,{staticClass:"text-decoration-none black--text",on:{click:function(s){return t.scrollPortofolio()}}},[t._v("Works")])],1),s(_.Z)],1),s(T.Z,{staticClass:"mt-10",attrs:{id:"background_locate"}},[s(_.Z),s(B.Z,{staticClass:"bio",attrs:{cols:"10",xs:"10",sm:"10",md:"6",lg:"6",xl:"6"}},[s("h2",{staticClass:"pl-2"},[t._v("Background")])]),s(_.Z)],1),s(T.Z,[s(_.Z),s(B.Z,{staticClass:"bio-contents",attrs:{cols:"2",xs:"2",sm:"2",md:"2",lg:"2",xl:"2"}},[s("h3",{staticClass:"pl-2"},[t._v("1996")])]),s(B.Z,{attrs:{cols:"8",xs:"8",sm:"8",md:"4",lg:"4",xl:"4"}},[s("p",{staticClass:"mt-1"},[t._v("Born in Nagoya(名古屋), Japan")])]),s(_.Z)],1),s(T.Z,{staticClass:"mt-0"},[s(_.Z),s(B.Z,{staticClass:"bio-contents",attrs:{cols:"2",xs:"2",sm:"2",md:"2",lg:"2",xl:"2"}},[s("h3",{staticClass:"pl-2"},[t._v("2015")])]),s(B.Z,{attrs:{cols:"8",xs:"8",sm:"8",md:"4",lg:"4",xl:"4"}},[s("p",{staticClass:"mt-1"},[t._v("Graduated from Nagoya Institute of Technology with a Master's degree in Materials Science and Engineering.")])]),s(_.Z)],1),s(T.Z,{staticClass:"mt-0"},[s(_.Z),s(B.Z,{staticClass:"bio-contents",attrs:{cols:"2",xs:"2",sm:"2",md:"2",lg:"2",xl:"2"}},[s("h3",{staticClass:"pl-2"},[t._v("2019")])]),s(B.Z,{attrs:{cols:"8",xs:"8",sm:"8",md:"4",lg:"4",xl:"4"}},[s("p",{staticClass:"mt-1"},[t._v("Joined a Toyota Group company as a material developer")])]),s(_.Z)],1),s(T.Z,{staticClass:"mt-0"},[s(_.Z),s(B.Z,{staticClass:"bio-contents",attrs:{cols:"2",xs:"2",sm:"2",md:"2",lg:"2",xl:"2"}},[s("h3",{staticClass:"pl-2"},[t._v("2022")])]),s(B.Z,{attrs:{cols:"8",xs:"8",sm:"8",md:"4",lg:"4",xl:"4"}},[s("p",{staticClass:"mt-1"},[t._v("Worked as a web developer in the product development section of a company engaged in DM business.")])]),s(_.Z)],1),s(T.Z,{attrs:{id:"likes_locate"}},[s(_.Z),s(B.Z,{staticClass:"likes",attrs:{cols:"10",xs:"10",sm:"10",md:"6",lg:"6",xl:"6"}},[s("h2",{staticClass:"pl-2"},[t._v("Likes🖤")])]),s(_.Z)],1),s(T.Z,[s(_.Z),s(B.Z,{staticClass:"like-contents",attrs:{cols:"10",xs:"10",sm:"10",md:"6",lg:"6",xl:"6"}},[s("p",{staticClass:"pl-2"},[t._v("Music, Web Development, Youtube, Commics, Anime, Apex, Movie, Japanese Chess")])]),s(_.Z)],1),s(T.Z,{attrs:{id:"skill_locate"}},[s(_.Z),s(B.Z,{staticClass:"skill",attrs:{cols:"10",xs:"10",sm:"10",md:"6",lg:"6",xl:"6"}},[s("h2",{staticClass:"pl-2"},[t._v("Skill")])]),s(_.Z)],1),s(T.Z,[s(_.Z),s(B.Z,{staticClass:"skill-contents",attrs:{cols:"10",xs:"10",sm:"10",md:"6",lg:"6",xl:"6"}},[s("p",{staticClass:"pl-2"},[t._v("HTML, CSS, JavaScript, jQuery, Sass, Bootstrap, Vue.js, Nuxt.js, Vuetify, PHP, Laravel, WordPress")]),s("p",{staticClass:"font-weight-medium"},[t._v(" I usually use PHP and Laravel for backend development at work, so PHP and Laravel web development is my specialty. "),s("br"),t._v(" I also sometimes work on front-end development, in which case I mainly use Vue.js and Nuxt.js.")])]),s(_.Z)],1),s(T.Z,{attrs:{id:"portofolio_locate"}},[s(_.Z),s(B.Z,{staticClass:"portofolio",attrs:{cols:"10",xs:"10",sm:"10",md:"6",lg:"6",xl:"6"}},[s("h2",{staticClass:"pl-2"},[t._v("Website Production Portfolio")])]),s(_.Z)],1),s(T.Z,[s(_.Z),s(B.Z,{staticClass:"portofolio-contents text-center",attrs:{cols:"10",xs:"10",sm:"10",md:"6",lg:"6",xl:"6"}},[s("div",{staticClass:"portofolio-contents-heading"},[s("h3",{staticClass:"text-center"},[t._v("iSara")])]),s("div",{staticClass:"work-item"},[s("a",{attrs:{href:"https://tarao96.github.io/iSara/"}},[s("img",{attrs:{src:e(5136),alt:"iSaraのwebページ"}})]),s("a",{staticClass:"caption",attrs:{href:"https://tarao96.github.io/iSara/"}},[t._v("iSara模写")])])]),s(_.Z)],1),s(T.Z,[s(_.Z),s(B.Z,{staticClass:"portofolio-contents text-center",attrs:{cols:"10",xs:"10",sm:"10",md:"6",lg:"6",xl:"6"}},[s("div",{staticClass:"portofolio-contents-heading"},[s("h3",{staticClass:"text-center"},[t._v("SEO Consulting")])]),s("div",{staticClass:"work-item"},[s("a",{attrs:{href:"https://tarao96.github.io/Lancers/"}},[s("img",{attrs:{src:e(3989),alt:"SEOのwebページ"}})]),s("a",{staticClass:"caption",attrs:{href:"https://tarao96.github.io/Lancers/"}},[t._v("Lancers案件模写")])])]),s(_.Z)],1),s(T.Z,[s(_.Z),s(B.Z,{staticClass:"portofolio-contents text-center",attrs:{cols:"10",xs:"10",sm:"10",md:"6",lg:"6",xl:"6"}},[s("div",{staticClass:"portofolio-contents-heading"},[s("h3",{staticClass:"text-center"},[t._v("LIKSON")])]),s("div",{staticClass:"work-item"},[s("a",{attrs:{href:"https://tarao96.github.io/LIKSON/"}},[s("img",{attrs:{src:e(2187),alt:"LIKSONのwebページ"}})]),s("a",{staticClass:"caption",attrs:{href:"https://tarao96.github.io/LIKSON/"}},[t._v("LIKSON模写")])])]),s(_.Z)],1),s(T.Z,{attrs:{id:"services_locate"}},[s(_.Z),s(B.Z,{staticClass:"services",attrs:{cols:"10",xs:"10",sm:"10",md:"6",lg:"6",xl:"6"}},[s("h2",{staticClass:"pl-2"},[t._v("Services")])]),s(_.Z)],1),s(T.Z,{staticClass:"mt-10"},[s(_.Z),s(B.Z,{staticClass:"grey lighten-4",attrs:{cols:"4",xs:"4",sm:"4",md:"2",lg:"2",xl:"2"}},[s("h3",{staticClass:"pl-2"},[s(u.Z,{staticClass:"mr-2"},[t._v("mdi-xml")]),t._v("Coding")],1)]),s(B.Z,{staticClass:"grey lighten-4",attrs:{cols:"8",xs:"8",sm:"8",md:"4",lg:"4",xl:"4"}},[s("p",{staticClass:"mt-1 font-weight-medium"},[t._v(" I perform appropriate coding based on the design. We also provide SEO-conscious coding that is compatible with responsive design."),s("br"),t._v(" We also handle modifications appropriately.")])]),s(_.Z)],1),s(T.Z,{staticClass:"mt-10"},[s(_.Z),s(B.Z,{staticClass:"services-contents grey lighten-4",attrs:{cols:"5",xs:"5",sm:"5",md:"2",lg:"2",xl:"2"}},[s("h3",{staticClass:"pl-2"},[s(u.Z,{staticClass:"mr-2"},[t._v("mdi-wordpress")]),t._v("WordPress")],1)]),s(B.Z,{staticClass:"grey lighten-4",attrs:{cols:"7",xs:"7",sm:"7",md:"4",lg:"4",xl:"4"}},[s("p",{staticClass:"mt-1 font-weight-medium"},[t._v(" We can install WordPress or convert your existing site to WordPress."),s("br"),t._v(" Also, we can help you to customize the theme and set up forms, etc.")])]),s(_.Z)],1),s(T.Z,{staticClass:"mt-10"},[s(_.Z),s(B.Z,{staticClass:"services-contents grey lighten-4",attrs:{cols:"5",xs:"5",sm:"5",md:"2",lg:"2",xl:"2"}},[s("h3",{staticClass:"pl-2"},[s(u.Z,{staticClass:"mr-2"},[t._v("mdi-remote-desktop")]),t._v("Web Development")],1)]),s(B.Z,{staticClass:"grey lighten-4",attrs:{cols:"7",xs:"7",sm:"7",md:"4",lg:"4",xl:"4"}},[s("p",{staticClass:"mt-1 font-weight-medium"},[t._v(" I can do web development programming."),s("br"),t._v(" The main development languages are PHP and JavaScript."),s("br"),t._v(" I am also proficient in Laravel and Vue.js as frameworks.")])]),s(_.Z)],1)],1)])},E=[],W={methods:{scrollPortofolio:function(){var t=w()("#portofolio_locate").offset().top;w()(window).scrollTop(t-150)}}},V=W,N=(0,P.Z)(V,j,E,!1,null,"9fe525aa",null),K=N.exports,M=function(){var t=this;t._self._c;return t._m(0)},Y=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"hello"},[s("h1",[t._v("This is Work Page.")])])}],R={},H=R,J=(0,P.Z)(H,M,Y,!1,null,null,null),D=J.exports;o.ZP.use(L.Z);var G=new L.Z({mode:"history",base:"/myportofolio-vue/",routes:[{path:"/",component:K},{path:"/works",component:D}]}),A=e(8864);o.ZP.use(A.Z);var q=new A.Z({});o.ZP.config.productionTip=!1,new o.ZP({router:G,vuetify:q,render:t=>t(O)}).$mount("#app")},2187:function(t,s,e){t.exports=e.p+"src/img/LIKSON.8089ee53.png"},3989:function(t,s,e){t.exports=e.p+"src/img/Lancers.fcd4867f.jpeg"},2519:function(t,s,e){t.exports=e.p+"src/img/Profile_Image.fcbb5a3d.jpg"},5136:function(t,s,e){t.exports=e.p+"src/img/iSara.d6c70b10.jpeg"}},s={};function e(o){var i=s[o];if(void 0!==i)return i.exports;var a=s[o]={exports:{}};return t[o].call(a.exports,a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(s,o,i,a){if(!o){var l=1/0;for(m=0;m<t.length;m++){o=t[m][0],i=t[m][1],a=t[m][2];for(var n=!0,r=0;r<o.length;r++)(!1&a||l>=a)&&Object.keys(e.O).every((function(t){return e.O[t](o[r])}))?o.splice(r--,1):(n=!1,a<l&&(l=a));if(n){t.splice(m--,1);var c=i();void 0!==c&&(s=c)}}return s}a=a||0;for(var m=t.length;m>0&&t[m-1][2]>a;m--)t[m]=t[m-1];t[m]=[o,i,a]}}(),function(){e.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(s,{a:s}),s}}(),function(){e.d=function(t,s){for(var o in s)e.o(s,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:s[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/myportofolio-vue/"}(),function(){var t={143:0};e.O.j=function(s){return 0===t[s]};var s=function(s,o){var i,a,l=o[0],n=o[1],r=o[2],c=0;if(l.some((function(s){return 0!==t[s]}))){for(i in n)e.o(n,i)&&(e.m[i]=n[i]);if(r)var m=r(e)}for(s&&s(o);c<l.length;c++)a=l[c],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(m)},o=self["webpackChunkmyportofolio"]=self["webpackChunkmyportofolio"]||[];o.forEach(s.bind(null,0)),o.push=s.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(4471)}));o=e.O(o)})();
//# sourceMappingURL=app.0443793a.js.map