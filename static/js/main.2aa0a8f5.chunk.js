(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={contact_list:"ContactList_contact_list__3ih7w",contact__container:"ContactList_contact__container__1tD2j"}},13:function(t,e,n){t.exports={input:"Filter_input__-fqMC"}},33:function(t,e,n){},35:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(8),o=n.n(r),i=n(5),s=(n(33),n(15)),u=n(6),l=n(16),b=n(17),d=n(21),m=n(20),j=n(40),h=n(3),f=Object(h.b)("contacts/add",(function(t,e){return{payload:{id:Object(j.a)(),name:t,number:e}}})),p=Object(h.b)("contacts/delete"),O=Object(h.b)("contacts/filter"),x=n(7),C=n.n(x),_=n(1),v=function(t){Object(d.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=Object(j.a)(),t.numberInputId=Object(j.a)(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(u.a)({},a,c))},t.createContact=function(){var e=t.state,n=e.name,a=e.number,c=t.props,r=c.onSubmit,o=c.items,i=o.find((function(t){return t.name.toLowerCase()===n.toLowerCase()})),s=o.find((function(t){return t.number===a}));i||s?alert("".concat(n," or ").concat(a," is already in contacts")):r(n,a)},t.handleSubmit=function(e){e.preventDefault(),t.createContact(),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(b.a)(n,[{key:"render",value:function(){return Object(_.jsxs)("form",{className:C.a.form,onSubmit:this.handleSubmit,children:[Object(_.jsxs)("label",{htmlFor:this.nameInputId,className:C.a.label,children:["Name",Object(_.jsx)("input",{type:"text",id:this.nameInputId,className:C.a.input,name:"name",value:this.state.name,onChange:this.handleChange,placeholder:"enter contact name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(_.jsxs)("label",{htmlFor:this.numberInputId,className:C.a.label,children:["Number",Object(_.jsx)("input",{type:"text",id:this.numberInputId,className:C.a.input,name:"number",value:this.state.number,onChange:this.handleChange,placeholder:"enter contact number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12  \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(_.jsx)("button",{type:"submit",className:C.a.button,children:"Add contact"})]})}}]),n}(a.Component),g=Object(i.b)((function(t){return{items:t.contacts.items}}),(function(t){return{onSubmit:function(e,n){return t(f(e,n))}}}))(v),y=n(13),N=n.n(y),I=function(t){var e=t.value,n=t.onChange;return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("h3",{children:"Find Contacts By Name"}),Object(_.jsx)("label",{className:N.a.label,children:Object(_.jsx)("input",{className:N.a.input,type:"text",value:e,onChange:n})})]})};I.defaultProps={value:""};var k,w=Object(i.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChange:function(e){return t(O(e.target.value))}}}))(I),S=n(10),A=n.n(S),F=Object(i.b)((function(t){var e=t.contacts;return{items:function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}(e.items,e.filter)}}),(function(t){return{onDeleteContact:function(e){return t(p(e))}}}))((function(t){var e=t.items,n=t.onDeleteContact;return e.length>0&&Object(_.jsx)("ul",{className:A.a.contact__container,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(_.jsxs)("li",{className:A.a.contact_list,children:[a,": ",c,Object(_.jsx)("button",{type:"button",onClick:function(){return n(e)},className:A.a.button,children:"Delete"})]},e)}))})})),z=(n(35),function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)("h1",{children:"Phonebook"}),Object(_.jsx)(g,{}),Object(_.jsx)("h2",{children:"Contacts"}),Object(_.jsx)(w,{}),Object(_.jsx)(F,{})]})}),L=n(9),D=n(18),q=n.n(D),J=n(4),B=n(19),M=n.n(B),U=n(2),Z=Object(h.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(k={},Object(u.a)(k,f,(function(t,e){var n=e.payload;return[].concat(Object(L.a)(t),[n])})),Object(u.a)(k,p,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),k)),E=Object(h.c)("",Object(u.a)({},O,(function(t,e){return e.payload}))),P=Object(U.b)({items:Z,filter:E}),R=[].concat(Object(L.a)(Object(h.d)({serializableCheck:{ignoredActions:[J.a,J.f,J.b,J.c,J.d,J.e]}})),[q.a]),T={key:"contacts",storage:M.a,blacklist:["filter"]},H=Object(h.a)({reducer:{contacts:Object(J.g)(T,P)},middleware:R,devTools:!1}),K={store:H,persistor:Object(J.h)(H)};o.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(i.a,{store:K.store,children:Object(_.jsx)(s.a,{loading:null,persistor:K.persistor,children:Object(_.jsx)(z,{})})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={form:"Form_form__3RqOJ",label:"Form_label__UkU2u",input:"Form_input__2CzUS"}}},[[39,1,2]]]);
//# sourceMappingURL=main.2aa0a8f5.chunk.js.map