(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(47),r=a.n(c),i=a(16),o=a(1);a(55);var u=function(){return l.a.createElement("nav",null,l.a.createElement("div",{id:"linkcontainer"},l.a.createElement("div",{id:"link1"},l.a.createElement(i.b,{to:"/"},"Home")),l.a.createElement("div",{id:"link2"},l.a.createElement(i.b,{to:"/saved"},"Saved"))))};a(60);var m=function(){return l.a.createElement("div",{id:"headercontainer"},l.a.createElement("div",{id:"header1"},l.a.createElement("h1",null,"Google Book Search")),l.a.createElement("div",{id:"header2"},l.a.createElement("p",null,"Try searching for a book")))},s=(a(61),a(17)),d=a(13),E=a.n(d),v=(a(79),a(19)),f=a.n(v);var b=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){E.a.get("/saved").then((function(e){c(e.data)})).catch((function(e){console.log(e)}))}),[]),l.a.createElement("div",null,a.map((function(e){return l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",{key:e._id},l.a.createElement("h2",{className:"title"},e.title),l.a.createElement("h4",{className:"author"},e.authors),l.a.createElement("div",{className:"container"},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("img",{src:e.thumbnail,alt:""})),l.a.createElement("div",null,l.a.createElement("p",null,e.description)))),l.a.createElement("div",null,l.a.createElement("button",{type:"button"},l.a.createElement("a",{href:e.link,target:"_blank"},"Buy Now")),l.a.createElement("button",{onClick:function(){var t;t=e._id,E.a.delete("/saved/".concat(t)).then((function(){return E.a.get("/saved")})).then((function(e){c(e.data)})),f.a.fire({title:"Success",text:"Book Removed",icon:"success",confirmButtonText:"OK",timer:1e3})}},"Remove")),l.a.createElement("hr",null))))})))},h=a(49),k=a.n(h);a(105),a(106);var p=function(e){return l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("h2",{className:"title"},e.books.title),l.a.createElement("h4",{className:"author"},e.books.authors),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{id:"thumbnailDiv"},l.a.createElement("img",{src:e.books.thumbnail,alt:""})),l.a.createElement("div",null,l.a.createElement("p",null,e.books.description)))),l.a.createElement("div",null,l.a.createElement("button",{type:"button"},l.a.createElement("a",{href:e.books.link,target:"_blank"},"View Book")),l.a.createElement("button",{onClick:function(){E()({method:"post",url:"/saved/add",data:{title:e.books.title,authors:e.books.authors[0],description:e.books.description,link:e.books.link,thumbnail:e.books.thumbnail}}),f.a.fire({title:"Success",text:"Book Saved",icon:"success",confirmButtonText:"Continue",timer:1e3})}},"Save")),l.a.createElement("hr",null))))};var g=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),i=Object(s.a)(r,2),o=i[0],u=i[1];Object(n.useEffect)((function(){m()}),[a]);var m=function(){k.a.search(a,(function(e,t){e?console.log(e):u(t)}))},d=o.map((function(e){return l.a.createElement(p,{key:e.id,books:e})}));return l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("div",{id:"searchLabelContainer"},l.a.createElement("label",{id:"searchText"},"Search for a book"),l.a.createElement("input",{id:"inputContainer",type:"text","aria-describedby":"emailHelp",onChange:function(e){return c(e.target.value)}}))),d)};a(107);var S=function(){return l.a.createElement("div",{id:"homecontainer"},l.a.createElement(g,null))};var x=function(){return l.a.createElement(i.a,null,l.a.createElement("div",null,l.a.createElement(u,null),l.a.createElement(m,null),l.a.createElement(o.a,{path:"/",exact:!0},l.a.createElement(S,null)),l.a.createElement(o.a,{path:"/saved",exact:!0},l.a.createElement(b,null))))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(x,null)),document.getElementById("root"))},50:function(e,t,a){e.exports=a(108)},55:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},79:function(e,t,a){},87:function(e,t){},89:function(e,t){}},[[50,1,2]]]);
//# sourceMappingURL=main.99337516.chunk.js.map