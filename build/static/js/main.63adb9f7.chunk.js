(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{27:function(A,e,t){},28:function(A,e,t){},30:function(A,e,t){"use strict";t.r(e);var n=t(0),r=t.n(n),a=t(12),c=t.n(a),s=t(3),u=t(7),l=t(2),i=t(6),o=t(9),b=t(5),v=(t(27),t(28),t.p+"static/media/link.27b599f9.png"),j=t(1),d=function(){var A=Object(l.e)(),e=Object(l.f)(),t=Object(b.c)((function(A){return A.routes.currentPage})),r=Object(n.useState)({title:"",path:""}),a=Object(i.a)(r,2),c=a[0],u=a[1],d=Object(b.b)();return Object(j.jsx)(j.Fragment,{children:Object.keys(t).length>0&&Object(j.jsxs)("div",{className:"view_page",scheme:t.nodes.length>0?"wa":"fb",children:[Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("span",{className:"header_title",children:t.title}),"/"!=A.pathname&&Object(j.jsx)("button",{className:"header_button",onClick:function(){var t=A.pathname.split("/");if(2==t.length)return e("/");t=(t=t.splice(0,t.length-1)).join("/"),e(t)},children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u043c\u0443 \u0443\u0437\u043b\u0443"})]}),Object(j.jsxs)("div",{className:"main_content",children:[Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"new_tree",children:[Object(j.jsx)("span",{className:"title",children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0443\u0437\u043b\u0430"}),Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),d({type:"INSERTNEWPATH",payload:{title:c.title,path:c.path,currentPath:A,navigate:e}}),u({title:"",path:""})},children:[Object(j.jsx)("input",{autoComplete:"off",value:c.title,onChange:function(A){return u(Object(s.a)(Object(s.a)({},c),{},{title:A.currentTarget.value.replace(/[^a-zA-Z\u0430-\u044f\u0410-\u042f\u0401\u04510-9 \W]/g,"")}))},required:!0,name:"title",className:"input_title",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(j.jsx)("input",{autoComplete:"off",value:c.path,onChange:function(A){return u(Object(s.a)(Object(s.a)({},c),{},{path:A.currentTarget.value.replace(/[^a-zA-Z0-9_-]/g,"")}))},required:!0,name:"path",className:"input_path",type:"text",placeholder:"\u041f\u0443\u0442\u044c ( \u0431\u0435\u0437 / )"}),Object(j.jsx)("input",{className:"create",type:"submit",value:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})]})}),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"url_list",children:[Object(j.jsx)("span",{className:"title",children:"\u0414\u043e\u0447\u0435\u0440\u043d\u0438\u0435 \u0443\u0437\u043b\u044b"}),t.nodes.length>0?t.nodes.map((function(e){return Object(j.jsx)(o.b,{to:"/"==A.pathname?e.route:A.pathname+e.route,children:Object(j.jsxs)("div",{className:"block",children:[Object(j.jsx)("div",{className:"block_before",children:Object(j.jsx)("img",{src:v})}),Object(j.jsxs)("div",{className:"block_content",children:[Object(j.jsx)("span",{className:"block_content_main",children:e.title}),Object(j.jsxs)("span",{className:"block_content_desc",children:["\u041f\u0443\u0442\u044c : ",e.route]})]}),Object(j.jsx)("div",{className:"block_after",children:Object(j.jsx)("img",{src:"data:image/png;base64,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"})})]})})})):Object(j.jsx)("span",{className:"url_no_found",children:"\u0414\u043e\u0447\u0435\u0440\u043d\u0438\u0435 \u0443\u0437\u043b\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b"})]})})]})]})})},p=function(){var A=Object(b.b)(),e=Object(b.c)((function(A){return A.routes.tree})),t=Object(l.e)(),r=Object(l.f)();return Object(n.useEffect)((function(){!function(t){var n=t.pathname.split("/");n=0==n.length?n.splice(1,1):n.splice(1,n.length);var a=t.pathname;if("/"!==a){if(n.length<2){var c=e[0].nodes.findIndex((function(A,e){return A.route==a}));return-1==c?void r("/"):void A({type:"CHANGECURRENTPAGE",payload:e[0].nodes[c]})}for(var l=0,i=Object(u.a)(e[0].nodes),o=function(e){if(null==i)return{v:void 0};if(0==l){var t=i.findIndex((function(A,t){return A.route=="/"+n[e]}));-1==t?(r("/"),i=null):i=Object(s.a)({},i[t])}else{var a=i.nodes.findIndex((function(A,t){return A.route=="/"+n[e]}));-1==a?(r("/"),i=null):i=Object(s.a)({},i.nodes[a])}return(l+=1)==n.length?(A({type:"CHANGECURRENTPAGE",payload:i}),{v:i}):void 0},b=0;b<n.length;b++){var v=o(b);if("object"===typeof v)return v.v}}else A({type:"CHANGECURRENTPAGE",payload:e[0]})}(t)}),[t]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(l.c,{children:Object(j.jsx)(l.a,{path:t.pathname,exact:!0,element:Object(j.jsx)(d,{})})})})},g=function(){return Object(j.jsx)(o.a,{children:Object(j.jsx)(p,{})})},E=t(11),f={tree:[{route:"/",nodes:[],title:"\u0414\u043e\u043c\u0430\u0448\u043d\u044f\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"}],currentPage:{}},h=function(A,e,t){var n=A.pathname.split("/");n=0==n.length?n.splice(1,1):n.splice(1,n.length);var r=A.pathname;if("/"===r)return e[0].nodes=[].concat(Object(u.a)(e[0].nodes),[t]),{routes:e,current:e[0]};if(n.length<2){var a=e[0].nodes.findIndex((function(A,e){return A.route==r}));return-1!=a&&(e[0].nodes[a].nodes=[].concat(Object(u.a)(e[0].nodes[a].nodes),[t]),{routes:e,current:e[0].nodes[a]})}for(var c=0,l=Object(u.a)(e[0].nodes),i=[],o=function(A){if(null==l)return{v:!1};if(0==c){var r=l.findIndex((function(e,t){return e.route=="/"+n[A]}));-1==r?l=null:(i.push(r),l=Object(s.a)({},l[r]))}else{var a=l.nodes.findIndex((function(e,t){return e.route=="/"+n[A]}));-1==a?l=null:(i.push(a),l=Object(s.a)({},l.nodes[a]))}if((c+=1)==n.length){l.nodes=[].concat(Object(u.a)(l.nodes),[t]);for(var o=Object(s.a)({},e[0].nodes),b=0;b<=i.length;b++)Number.isInteger(i[b])?o=o[i[b]].nodes:o.push(t);return{v:{routes:e,current:l}}}},b=0;b<n.length;b++){var v=o(b);if("object"===typeof v)return v.v}},O=Object(E.b)({routes:function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"INSERTNEWPATH":var t=h(e.payload.currentPath,A.tree,{route:"/"+e.payload.path.replace("/","").replace(/\s/g,""),title:e.payload.title,nodes:[]});return 0==t?A:Object(s.a)(Object(s.a)({},A),{},{tree:t.routes,currentPage:t.current});case"CHANGECURRENTPAGE":return Object(s.a)(Object(s.a)({},A),{},{currentPage:e.payload});default:return A}}}),m=t(16),Q=Object(E.c)(O,Object(E.a)(m.a));c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(b.a,{store:Q,children:Object(j.jsx)(g,{})})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.63adb9f7.chunk.js.map