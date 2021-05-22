(this.webpackJsonpuser_hub_react=this.webpackJsonpuser_hub_react||[]).push([[0],{34:function(e,t,r){},41:function(e,t,r){},42:function(e,t,r){},62:function(e,t,r){"use strict";r.r(t);var n=r(9),c=r(0),s=r(28),a=r.n(s),o=r(12),u=r(2);r(34);var i=r(1),j=function(e){var t=e.currentUser,r=e.setCurrentUser,s=e.userList,a=Object(c.useState)(),u=Object(n.a)(a,2),j=u[0],l=u[1];Object(c.useEffect)((function(){l(s[0])}),[s]);return Object(i.jsxs)("header",{children:[Object(i.jsx)("h1",{children:"Welcome to UserHub"}),Object(i.jsx)("form",{className:"user-select",onSubmit:function(e){e.preventDefault()},children:t?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o.b,{to:"/posts",activeClassName:"current",children:"POSTS"}),Object(i.jsx)(o.b,{to:"/todos",activeClassName:"current",children:"TODOS"}),Object(i.jsxs)("button",{onClick:function(e){l(s[0]),localStorage.removeItem("currentUser"),r(null)},children:["LOG OUT, ",t.username]})]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("select",{onChange:function(e){var t=e.target.value,r=s.find((function(e){return e.id==t}));l(r)},children:s.map((function(e){return Object(i.jsx)("option",{value:e.id,children:e.username},e.id)}))}),Object(i.jsx)("button",{onClick:function(e){var t;t=j,localStorage.setItem("currentUser",JSON.stringify(t)),r(j)},children:"LOG IN"})]})})]})},l=(r(41),function(e){var t=e.currentUser,r=e.userPosts;return Object(i.jsxs)("div",{className:"user-posts",children:[Object(i.jsxs)("h2",{children:["Posts By ",t.username]}),r.map((function(e){var t=e.id,r=e.title,n=e.body;return Object(i.jsxs)("div",{className:"post",children:[Object(i.jsx)("h3",{children:r}),Object(i.jsx)("p",{children:n})]},t)}))]})}),h=(r(42),function(e){var t=e.currentUser,r=e.userTodos;return Object(i.jsxs)("div",{className:"user-todos",children:[Object(i.jsxs)("h2",{children:["Todos By ",t.username]}),r.map((function(e){var t=e.id,r=e.title,n=e.completed;return Object(i.jsx)("div",{className:"todo",children:Object(i.jsx)("h3",{style:{textDecoration:n?"line-through":"none"},children:r})},t)}))]})}),d=r(10),b=r.n(d),O=r(13),p=r(14),f=r.n(p),x="https://jsonplace-univclone.herokuapp.com";function v(){return(v=Object(O.a)(b.a.mark((function e(){var t,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat(x,"/users"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function m(){return(m=Object(O.a)(b.a.mark((function e(t){var r,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat(x,"/users/").concat(t,"/posts"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function g(){return(g=Object(O.a)(b.a.mark((function e(t){var r,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat(x,"/users/").concat(t,"/todos"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var y=function(){var e=Object(c.useState)([]),t=Object(n.a)(e,2),r=t[0],s=t[1],a=Object(c.useState)(JSON.parse(localStorage.getItem("currentUser"))),d=Object(n.a)(a,2),b=d[0],O=d[1],p=Object(c.useState)([]),f=Object(n.a)(p,2),x=f[0],y=f[1],U=Object(c.useState)([]),S=Object(n.a)(U,2),w=S[0],N=S[1];return Object(c.useEffect)((function(){(function(){return v.apply(this,arguments)})().then((function(e){s(e)})).catch((function(e){console.log("Error on useEffect getUsers...")}))}),[]),Object(c.useEffect)((function(){if(!b)return y([]),void N([]);(function(e){return m.apply(this,arguments)})(b.id).then((function(e){y(e)})).catch((function(e){console.log("Error on getPostsByUser...")})),function(e){return g.apply(this,arguments)}(b.id).then((function(e){N(e)})).catch((function(e){console.log("Error on getTodosByUser...")}))}),[b]),Object(i.jsx)(o.a,{children:Object(i.jsxs)("div",{id:"App",children:[Object(i.jsx)(j,{userList:r,currentUser:b,setCurrentUser:O}),b?Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(u.d,{children:[Object(i.jsx)(u.b,{path:"/posts",children:Object(i.jsx)(l,{userPosts:x,currentUser:b})}),Object(i.jsx)(u.b,{path:"/todos",children:Object(i.jsx)(h,{userTodos:w,currentUser:b})}),Object(i.jsx)(u.b,{exact:!0,path:"/",children:Object(i.jsxs)("h2",{style:{padding:".5em"},children:["Welcome, ",b.username,"!"]})}),Object(i.jsx)(u.a,{to:"/"})]})}):Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(u.d,{children:[Object(i.jsx)(u.b,{exact:!0,path:"/",children:Object(i.jsx)("h2",{style:{padding:".5em"},children:"Please log in, above."})}),Object(i.jsx)(u.a,{to:"/"})]})})]})})};a.a.render(Object(i.jsx)(y,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.3a2d6fd4.chunk.js.map