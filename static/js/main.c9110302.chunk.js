(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{17:function(e,n,t){e.exports=t(28)},22:function(e,n,t){},23:function(e,n,t){},26:function(e,n,t){},28:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(12),o=t.n(c),u=(t(22),t(23),t(9)),i=t(3),l=t(6),m=t(13),d=t(30),b=t(1),s=t(2);function f(){var e=Object(b.a)(["\n padding: 10px;\n background-color: #33CC66;\n border: none;\n cursor: pointer;\n"]);return f=function(){return e},e}function p(){var e=Object(b.a)(["\n    display: block;\n    margin: 5px auto;\n    width: 80%;\n"]);return p=function(){return e},e}function v(){var e=Object(b.a)(["\n"]);return v=function(){return e},e}function E(){var e=Object(b.a)(["\n    text-align: center;\n"]);return E=function(){return e},e}var g=s.a.form(E()),j=s.a.label(v()),O=s.a.input(p()),h=s.a.button(f()),C={name:"",number:""},k=function(e){var n=e.contacts,t=e.addToContacts,c=Object(a.useState)(C),o=Object(i.a)(c,2),u=o[0],b=o[1],s=function(e){var n=e.target.name,t=e.target.value;b(Object(m.a)({},u,Object(l.a)({},n,t)))},f=u.name,p=u.number,v=Object(d.a)(),E=Object(d.a)();return r.a.createElement(g,{onSubmit:function(e){e.preventDefault();var a=u.name,r=u.number,c={id:Object(d.a)(),name:a,number:r};n.some((function(e){return a===e.name}))?alert("".concat(a," is already in contacts.")):(t(c),b(C))}},r.a.createElement(j,{htmlFor:v},"Name"),r.a.createElement(O,{name:"name",placeholder:"Name and Surname",value:f,onChange:s,id:v}),r.a.createElement(j,{htmlFor:E},"Number"),r.a.createElement(O,{id:E,name:"number",placeholder:"Number",value:p,onChange:s}),r.a.createElement(h,{type:"submit",disabled:!f||!p},"Add to contact"))};k.defaultTypes={contacts:[]};var y=k,w=(t(26),t(27),function(e){var n=e.id,t=e.name,a=e.number,c=e.deleteContact;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"contact__item"},r.a.createElement("span",{className:"material-icons green"},"call"),r.a.createElement("p",{className:"contact__info"},"".concat(t,": ").concat(a)),r.a.createElement("button",{className:"material-icons red button",onClick:function(){c(n)}},"delete_forever")))});function N(){var e=Object(b.a)(["\npadding-left: 12%\n"]);return N=function(){return e},e}function x(){var e=Object(b.a)(["\n    display: block;\n    width: 80%;\n    margin: 0 auto;\n"]);return x=function(){return e},e}var S=s.a.input(x()),F=s.a.label(N()),_=function(e){var n=e.filteredContacts,t=Object(a.useState)(""),c=Object(i.a)(t,2),o=c[0],u=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,null,"Find contacts by name"),r.a.createElement(S,{type:"text",placeholder:"Name",value:o,onChange:function(e){n(e.target.value),function(e){var n=e.target.value;u(n)}(e)}}))};function T(){var e=Object(b.a)(["\npadding: 0;\n"]);return T=function(){return e},e}function A(){var e=Object(b.a)(["\n    width: 50%;\n    display: inline-block;\n    padding: 10px;\n    background-color: azure;\n    border-radius: 20px;\n"]);return A=function(){return e},e}function J(){var e=Object(b.a)(["\n    text-align: center;\n"]);return J=function(){return e},e}var L=s.a.h1(J()),z=s.a.div(A()),B=s.a.ul(T()),D=function(){var e=Object(a.useState)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),n=Object(i.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)([]),l=Object(i.a)(o,2),m=l[0],d=l[1],b=function(e){var n=t.filter((function(n){return n.id!==e}));c(n),d(n)};return r.a.createElement(z,null,r.a.createElement(L,null,"Phonebook"),r.a.createElement(y,{contacts:t,addToContacts:function(e){c([].concat(Object(u.a)(t),[e])),d([].concat(Object(u.a)(t),[e]))}}),r.a.createElement(L,null,"Contacts"),r.a.createElement(_,{filteredContacts:function(e){var n=t.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));d(n)}}),r.a.createElement(B,null,(m.length?m:t).map((function(e){return r.a.createElement(w,Object.assign({key:e.id},e,{deleteContact:b}))}))))};var H=function(){return r.a.createElement(D,null)};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.c9110302.chunk.js.map