"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[701],{1442:function(t,e,n){n.d(e,{HI:function(){return l},Jh:function(){return v},XT:function(){return x},_r:function(){return y},a2:function(){return p}});var r=n(5861),c=n(7757),a=n.n(c),u=n(4569),o=n.n(u);o().defaults.baseURL="https://api.themoviedb.org/3";var s="movie",i="70cddabccebaf467901819a0b3b6e799";function p(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o().get("/trending/".concat(s,"/").concat("day","?api_key=").concat(i));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o().get("/movie/".concat(e,"?api_key=").concat(i));case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function v(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o().get("/movie/".concat(e,"/credits?api_key=").concat(i));case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function y(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o().get("/movie/".concat(e,"/reviews?api_key=").concat(i));case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function x(t){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o().get("/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(e,"&page=1"));case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}},7701:function(t,e,n){n.r(e),n.d(e,{default:function(){return l}});var r=n(5861),c=n(885),a=n(7757),u=n.n(a),o=n(2791),s=n(501),i=n(1442),p=n(184);function f(){var t=(0,o.useState)([]),e=(0,c.Z)(t,2),n=e[0],a=e[1];return(0,o.useEffect)((function(){function t(){return(t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.a2)();case 2:e=t.sent,a(e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),n.length>0&&(0,p.jsx)("ul",{children:n.map((function(t){return(0,p.jsx)("li",{children:(0,p.jsx)(s.rU,{to:"movies/".concat(t.id),state:{from:"/home"},children:t.title})},t.id)}))})}function l(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h1",{children:"Trending today "}),(0,p.jsx)(f,{})]})}}}]);
//# sourceMappingURL=701.a356448f.chunk.js.map