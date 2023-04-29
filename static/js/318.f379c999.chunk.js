"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[318],{7:function(n,e,t){t.d(e,{LF:function(){return l},Mb:function(){return u},SB:function(){return d},fS:function(){return c},u_:function(){return p}});var r=t(861),a=t(757),i=t.n(a),o=t(243),s="7fbdf6cf40f68e209048a77188ae45b3";o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c=function(){var n=(0,r.Z)(i().mark((function n(e,t,r){var a,c,u,p,d,l,f,h,x,v;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:a=n.sent,c=a.data,u=c.id,p=c.title,d=c.release_date,l=c.overview,f=c.vote_average,h=c.poster_path,x=c.backdrop_path,v=c.genres,t({id:u,title:p,release_date:d,overview:l,vote_average:f,poster_path:h,backdrop_path:x,genres:v}),r(!1);case 6:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(s));case 2:r=n.sent,a=r.data.results,e(function(n){return n.map((function(n){return{id:n.id,title:n.title}}))}(a)),t(!1);case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e,t,r){var a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?api_key=".concat(s,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:a=n.sent,e(function(n){return n.map((function(n){return{id:n.id,title:n.title}}))}(a.data.results)),r(!1);case 6:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e,t,r){var a,c;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:a=n.sent,c=function(n){return n.map((function(n){return{author:n.author,content:n.content,id:n.id}}))},e(c(a.data.results)),r(!1);case 6:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e,t,r){var a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:a=n.sent,e(function(n){return n.map((function(n){return{id:n.id,name:n.name,profile_path:n.profile_path}}))}(a.data.cast)),r(!1);case 6:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()},318:function(n,e,t){t.r(e),t.d(e,{default:function(){return I}});var r=t(861),a=t(439),i=t(757),o=t.n(i),s=t(689),c=t(791),u=t(7);function p(n){var e=n.genres;if(e)return e.map((function(n){return n.name})).join(", ")}function d(n){var e=n.release_date;return new Date(e).getFullYear()}function l(n){var e=n.vote_average;return(10*Number(e)).toFixed(0)+"%"}var f,h,x,v,g,m,Z,w,b,k,j,_,y=t(402),P=t(168),S=t(444),U=t(87),F=t(185),z=S.ZP.div(f||(f=(0,P.Z)(["\n  display: flex;\n  gap: 20px;\n  padding: 10px 0;\n  border-bottom: 2px solid grey;\n"]))),C=S.ZP.img(h||(h=(0,P.Z)(["\n  width: 300px;\n  height: 100%;\n"]))),D=S.ZP.div(x||(x=(0,P.Z)(["\n  padding: 30px 0px;\n"]))),L=S.ZP.p(v||(v=(0,P.Z)(["\n  font-size: 26px;\n  font-weight: 500;\n  margin-bottom: 20px;\n"]))),O=S.ZP.p(g||(g=(0,P.Z)(["\n  margin-bottom: 20px;\n"]))),R=S.ZP.p(m||(m=(0,P.Z)(["\n  font-size: 20px;\n  font-weight: 500;\n"]))),A=S.ZP.p(Z||(Z=(0,P.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n"]))),B=S.ZP.span(w||(w=(0,P.Z)(["\n  position: relative;\n"]))),G=(0,S.ZP)(U.rU)(b||(b=(0,P.Z)(["\n  font-size: 14px;\n  padding: 3px 5px 3px 40px;\n  text-decoration: none;\n  font-weight: 500;\n  background-color: rgb(192, 182, 182);\n  border-radius: 4px;\n"]))),W=(0,S.ZP)(F.And)(k||(k=(0,P.Z)(["\n  position: absolute;\n  left: 7px;\n"]))),q=(0,S.ZP)(U.OL)(j||(j=(0,P.Z)(["\n  color: black;\n  padding: 5px 10px;\n  text-decoration: none;\n  font-weight: 500;\n  background-color: rgb(192, 182, 182);\n  border-radius: 4px;\n  &.active {\n    background-color: orange;\n    color: white;\n  }\n"]))),E=S.ZP.span(_||(_=(0,P.Z)(["\n  display: flex;\n  gap: 20px;\n  padding-bottom: 20px;\n  border-bottom: 2px solid grey;\n"]))),H=t(184);function I(){var n,e=(0,s.UO)().movieId,t=(0,s.TH)(),i=(0,c.useState)({}),f=(0,a.Z)(i,2),h=f[0],x=f[1],v=(0,c.useState)(!1),g=(0,a.Z)(v,2),m=g[0],Z=g[1],w=(0,c.useRef)(null);return null!==t&&void 0!==t&&null!==(n=t.state)&&void 0!==n&&n.from&&(w.current=t.state.from),(0,c.useEffect)((function(){var n=function(){var n=(0,r.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{Z(!0),(0,u.fS)(e,x,Z)}catch(t){console.log(t)}case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[e]),(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(B,{children:[(0,H.jsx)(W,{size:22}),(0,H.jsx)(G,{to:w.current||"/",children:"Go Back"})]}),(0,H.jsxs)(z,{children:[m&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(y.s5,{strokeColor:"orange",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0}),(0,H.jsx)("span",{children:" is loading..."})]}),h.poster_path&&(0,H.jsx)(C,{src:"https://image.tmdb.org/t/p/w400".concat(h.poster_path),alt:""}),(0,H.jsxs)(D,{children:[(0,H.jsxs)(L,{children:[h.title," (",d(h),")"]}),(0,H.jsxs)(O,{children:["User Score: ",l(h)]}),(0,H.jsx)(R,{children:"Overview:"}),(0,H.jsx)("div",{children:h.overview}),(0,H.jsx)(A,{children:"Genres"}),(0,H.jsx)("div",{children:p(h)})]})]}),(0,H.jsx)("p",{children:"Additional information"}),(0,H.jsxs)(E,{children:[(0,H.jsx)(q,{to:"cast",children:"Cast"}),(0,H.jsx)(q,{to:"reviews",children:"Reviews"})]}),(0,H.jsx)(c.Suspense,{fallback:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(y.s5,{strokeColor:"orange",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0}),(0,H.jsx)("span",{children:" is loading..."})]}),children:(0,H.jsx)(s.j3,{})})]})}}}]);
//# sourceMappingURL=318.f379c999.chunk.js.map