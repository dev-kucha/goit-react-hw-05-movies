"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{1442:function(e,t,n){n.d(t,{HI:function(){return l},Jh:function(){return v},XT:function(){return m},_r:function(){return x},a2:function(){return p}});var r=n(5861),c=n(7757),a=n.n(c),u=n(4569),s=n.n(u);s().defaults.baseURL="https://api.themoviedb.org/3";var o="movie",i="70cddabccebaf467901819a0b3b6e799";function p(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/trending/".concat(o,"/").concat("day","?api_key=").concat(i));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function l(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/movie/".concat(t,"?api_key=").concat(i));case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function v(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/movie/".concat(t,"/credits?api_key=").concat(i));case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function x(e){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/movie/".concat(t,"/reviews?api_key=").concat(i));case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function m(e){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=1"));case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}},186:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(5861),c=n(885),a=n(7757),u=n.n(a),s=n(2791),o=n(6871),i=n(1442),p=n(184);function f(){var e=(0,o.UO)().movieId,t=(0,s.useState)(null),n=(0,c.Z)(t,2),a=n[0],f=n[1];return(0,s.useEffect)((function(){function t(){return(t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i._r)(e);case 2:n=t.sent,f(n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),(0,p.jsx)(p.Fragment,{children:(null===a||void 0===a?void 0:a.length)>0?(0,p.jsx)("ul",{children:a.map((function(e){return(0,p.jsxs)("li",{children:[(0,p.jsx)("p",{children:(0,p.jsx)("strong",{children:e.author})}),(0,p.jsx)("p",{children:e.content}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{})]},e.id)}))}):(0,p.jsx)("p",{children:"We do not have any reviews for this movie."})})}}}]);
//# sourceMappingURL=186.6912c887.chunk.js.map