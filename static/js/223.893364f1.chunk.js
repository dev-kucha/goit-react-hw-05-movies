"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[223],{1442:function(e,t,n){n.d(t,{HI:function(){return f},Jh:function(){return h},XT:function(){return x},_r:function(){return m},a2:function(){return p}});var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),s=n.n(u);s().defaults.baseURL="https://api.themoviedb.org/3";var o="movie",i="70cddabccebaf467901819a0b3b6e799";function p(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/trending/".concat(o,"/").concat("day","?api_key=").concat(i));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function f(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/movie/".concat(t,"?api_key=").concat(i));case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function h(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/movie/".concat(t,"/credits?api_key=").concat(i));case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function m(e){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/movie/".concat(t,"/reviews?api_key=").concat(i));case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function x(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=1"));case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}},1223:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(5861),a=n(885),c=n(7757),u=n.n(c),s=n(2791),o=n(501),i=n(1442),p=n(6871),l=n(184);function f(e){var t=e.movies,n=(0,p.TH)();return(0,l.jsx)("ul",{children:t.map((function(e){var t;return(0,l.jsx)("li",{children:(0,l.jsxs)(o.rU,{to:"".concat(e.id),state:{from:n},children:[e.title," (",null===(t=e.release_date)||void 0===t?void 0:t.slice(0,4),")"]})},e.id)}))})}function v(){var e=(0,s.useState)(""),t=(0,a.Z)(e,2),n=t[0],c=t[1],p=(0,s.useState)(null),v=(0,a.Z)(p,2),h=v[0],d=v[1],m=(0,o.lr)(),y=(0,a.Z)(m,2),x=y[0],g=y[1],w=x.get("name");(0,s.useEffect)((function(){function e(){return(e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.XT)(w);case 2:t=e.sent,d(t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}w&&function(){e.apply(this,arguments)}()}),[w]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),g(""!==n?{name:n}:{})},children:[(0,l.jsx)("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)}}),(0,l.jsx)("button",{type:"submit",value:"",children:"Search"})]}),w?null!==h&&void 0!==h&&h.length?(0,l.jsx)(f,{movies:h,goBackParams:x}):(0,l.jsx)("p",{children:"We do not have any movie for this query."}):(0,l.jsx)("p",{children:"Enter your search query."})]})}}}]);
//# sourceMappingURL=223.893364f1.chunk.js.map