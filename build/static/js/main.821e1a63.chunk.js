(this.webpackJsonp100msproject=this.webpackJsonp100msproject||[]).push([[0],{68:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(8),s=c.n(a),o=c(6),r=c(4),i=c(3),j=c(11),l=c.p+"static/media/bg.7345163b.mp4",b=c(2),d=function(){var e=Object(o.m)(),t=Object(n.useState)({name:"",token:""}),c=Object(j.a)(t,2),a=c[0],s=c[1],d=function(e){s((function(t){return Object(i.a)(Object(i.a)({},t),{},Object(r.a)({},e.target.name,e.target.value))}))};return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"showcase",children:[Object(b.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,children:Object(b.jsx)("source",{src:l,type:"video/mp4"})}),Object(b.jsx)("div",{className:"overlay"}),Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.join({userName:a.name,authToken:a.token})},children:[Object(b.jsx)("h2",{className:"heading",children:"Join Room"}),Object(b.jsx)("div",{className:"input-container",children:Object(b.jsx)("input",{className:"inputfield",value:a.name,onChange:d,id:"name",type:"text",name:"name",placeholder:"Your name"})}),Object(b.jsx)("div",{className:"input-container",children:Object(b.jsx)("input",{className:"inputfield",value:a.token,onChange:d,id:"token",type:"text",name:"token",placeholder:"Auth token"})}),Object(b.jsx)("button",{className:"btn-primary",children:"Join"})]})]})})},u=(c(68),function(e){var t=e.peer,c=Object(n.useRef)(null),a=Object(o.m)(),s=Object(o.o)(Object(o.l)(t.id));return Object(n.useEffect)((function(){c.current&&s&&(s.enabled?a.attachVideo(s.id,c.current):a.detachVideo(s.id,c.current))}),[s,a]),Object(b.jsxs)("div",{className:"peer-container",children:[Object(b.jsx)("video",{ref:c,className:"peer-video ".concat(t.isLocal?"local":""),autoPlay:!0,muted:!0}),Object(b.jsxs)("div",{className:"peer-name",children:[t.name," ",t.isLocal?"(You)":""]})]})}),m=c(17),O=c.n(m),x=c(29),h=(c(70),c(22)),p=c(71),v=c(72);h.extend(p),h.extend(v);var f=function(){var e=Object(o.m)(),t=Object(o.o)(o.d),c=Object(n.useState)(""),a=Object(j.a)(c,2),s=a[0],r=a[1],i=function(){var t=Object(x.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.sendBroadcastMessage(s);case 2:r("");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"chat",children:[Object(b.jsx)("div",{className:"chat-title",children:Object(b.jsx)("h2",{children:" Inbox "})}),Object(b.jsx)("div",{className:"messages",children:Object(b.jsx)("div",{className:"messages-content scrollbar ",children:t.map((function(e){return console.log(e),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"message-sender",children:[e.senderName,Object(b.jsx)("div",{className:"date",children:h(e.time).format("LT")})]},e.id),Object(b.jsxs)("div",{className:"message ",children:[e.message," "]})]})})}))})}),Object(b.jsxs)("div",{className:"message-box",children:[Object(b.jsx)("textarea",{type:"text",className:"message-input",placeholder:"Type a message . . .",value:s,onChange:function(e){return r(e.target.value)}}),Object(b.jsx)("button",{className:"message-submit",type:"button",onClick:i,children:"Send"})]})]})})},N=c(12),g=c(51),k=function(e){e.peer,Object(o.o)(o.k),Object(o.o)(o.i);var t=Object(o.o)(o.h),c=Object(o.o)(o.f),a=Object(o.m)(),s=Object(o.o)(o.e),r=(Object(o.o)(o.g),Object(o.o)(o.j),Object(n.useState)(!0)),i=Object(j.a)(r,2),l=i[0],d=i[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"control-bar",children:[Object(b.jsx)("button",{className:"chatbox-btn",onClick:function(){return d(!l)},children:"In-call Messages"}),l?Object(b.jsx)(f,{}):null,Object(b.jsxs)("div",{className:"center-buttons",children:[Object(b.jsxs)("nav",{children:[Object(b.jsx)("button",{className:"btn-control",onClick:function(){a.setLocalAudioEnabled(!c)},children:c?Object(b.jsx)(N.a,{size:"1.8em"}):Object(b.jsx)(N.b,{size:"1.8em"})}),Object(b.jsx)("button",{className:"btn-control",alt:"Leave Room",onClick:function(){a.setLocalVideoEnabled(!t)},children:t?Object(b.jsx)(N.c,{size:"1.8em"}):Object(b.jsx)(N.d,{size:"1.8em"})})]}),s&&Object(b.jsx)(g.a,{size:"2em",id:"leave-btn",className:"btn-danger",onClick:function(){return a.leave()}})]}),Object(b.jsx)("div",{className:"App-name",children:"VidChat"})]})})},E=(c(73),function(){var e=Object(o.o)(o.k),t=Object(n.useState)(!0),c=Object(j.a)(t,2),a=c[0],s=c[1];return Object(b.jsxs)("div",{className:"grid-container",style:{backgroundColor:"#1B2156"},children:[Object(b.jsx)("div",{className:"peers-container",children:e.map((function(e){return Object(b.jsx)(u,{peer:e},e.id)}))}),Object(b.jsxs)("div",{className:"chatbox-container",children:[Object(b.jsx)("button",{className:"chatbox-btn",onClick:function(){return s(!a)},children:"In-call Messages"}),a?Object(b.jsx)(f,{}):null]})]})}),y=function(){var e=Object(o.n)();return Object(n.useEffect)((function(){if(e)switch(console.log("notification type",e.type),console.log("data",e.data),e.type){case o.a.PEER_JOINED:console.log("".concat(e.data.name," joined"));break;case o.a.PEER_LEFT:console.log("".concat(e.data.name," left"));break;case o.a.NEW_MESSAGE:console.log("".concat(e.data.message," received from ").concat(e.data.senderName));break;case o.a.ERROR:console.log("[Error]",e.data),console.log("[Error Code]",e.data.code);break;case o.a.RECONNECTING:console.log("[Reconnecting]",e.data);break;case o.a.RECONNECTED:console.log("[Reconnected]")}}),[e]),Object(b.jsx)("div",{className:"notification-bar",children:null===e||void 0===e?void 0:e.type})},C=function(){var e=Object(o.o)(o.e),t=Object(o.m)();return Object(n.useEffect)((function(){window.onunload=function(){e&&t.leave()}}),[t,e]),Object(b.jsx)("div",{className:"App",children:e?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(y,{}),Object(b.jsx)(E,{}),Object(b.jsx)(k,{})]}):Object(b.jsx)(d,{})})},R=document.getElementById("root");s.a.render(Object(b.jsx)(o.b,{children:Object(b.jsx)(o.c,{appBuilder:{theme:"dark"},children:Object(b.jsx)(C,{})})}),R)}},[[76,1,2]]]);
//# sourceMappingURL=main.821e1a63.chunk.js.map