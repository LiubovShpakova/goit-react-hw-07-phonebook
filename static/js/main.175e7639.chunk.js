(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{17:function(t,e,n){t.exports={contact_list:"ContactList_contact_list__3ih7w",contact__container:"ContactList_contact__container__1tD2j"}},21:function(t,e,n){t.exports={input:"Filter_input__-fqMC"}},44:function(t,e,n){},65:function(t,e,n){},67:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(10),o=n.n(r),u=n(6),i=(n(44),n(3)),s=n(12),b=n(13),l=n(16),j=n(15),f=n(20),d=n.n(f),h=n(31),m=n(9),O=n.n(m),p=n(68),C=n(2),v=Object(C.b)("contacts/fetchContactsRequest"),x=Object(C.b)("contacts/fetchContactsSuccess"),_=Object(C.b)("contacts/fetchContactsError"),g=Object(C.b)("contacts/addContactRequest"),y=Object(C.b)("contacts/addContactSuccess"),N=Object(C.b)("contacts/addContactError"),w=Object(C.b)("contacts/deleteContactRequest"),I=Object(C.b)("contacts/deleteContactSuccess"),k=Object(C.b)("contacts/deleteContactError"),S=Object(C.b)("contacts/changeFilter");O.a.defaults.baseURL="http://localhost:4040";var F=n(11),A=function(t){return t.contacts.filter},q=function(t){return t.contacts.items},L=Object(F.a)([q,A],(function(t,e){console.log("\u0421\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e \u043d\u043e\u0432\u044b\u0439 \u043c\u0430\u0441\u0441\u0438\u0432 \u0432\u0438\u0434\u0438\u043c\u044b\u0445 \u0442\u0443\u0434\u0443");var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),z=n(7),D=n.n(z),R=n(1),E=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.nameInputId=Object(p.a)(),t.numberInputId=Object(p.a)(),t.handleChange=function(e){var n=e.currentTarget,c=n.name,a=n.value;t.setState(Object(i.a)({},c,a))},t.createContact=function(){var e=t.state,n=e.name,c=e.number,a=t.props,r=a.onSubmit,o=a.items,u=o.find((function(t){return t.name.toLowerCase()===n.toLowerCase()})),i=o.find((function(t){return t.number===c}));u||i?alert("".concat(n," or ").concat(c," is already in contacts")):r(n,c)},t.handleSubmit=function(e){e.preventDefault(),t.createContact(),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(b.a)(n,[{key:"render",value:function(){return Object(R.jsxs)("form",{className:D.a.form,onSubmit:this.handleSubmit,children:[Object(R.jsxs)("label",{htmlFor:this.nameInputId,className:D.a.label,children:["Name",Object(R.jsx)("input",{type:"text",id:this.nameInputId,className:D.a.input,name:"name",value:this.state.name,onChange:this.handleChange,placeholder:"enter contact name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(R.jsxs)("label",{htmlFor:this.numberInputId,className:D.a.label,children:["Number",Object(R.jsx)("input",{type:"text",id:this.numberInputId,className:D.a.input,name:"number",value:this.state.number,onChange:this.handleChange,placeholder:"enter contact number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12  \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(R.jsx)("button",{type:"submit",className:D.a.button,children:"Add contact"})]})}}]),n}(c.Component),J=Object(u.b)((function(t){return{items:q(t)}}),(function(t){return{onSubmit:function(e,n){return t(function(t,e){return function(n){var c={id:Object(p.a)(),name:t,number:e};n(g()),O.a.post("/contacts",c).then((function(t){var e=t.data;return n(y(e))})).catch((function(t){return n(N(t))}))}}(e,n))}}}))(E),M=n(21),U=n.n(M),B=function(t){var e=t.value,n=t.onChange;return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("h3",{children:"Find Contacts By Name"}),Object(R.jsx)("label",{className:U.a.label,children:Object(R.jsx)("input",{className:U.a.input,type:"text",value:e,onChange:n})})]})};B.defaultProps={value:""};var Z,P,T=Object(u.b)((function(t){return{value:A(t)}}),(function(t){return{onChange:function(e){return t(S(e.target.value))}}}))(B),$=n(17),G=n.n($),H=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){var t=this.props,e=t.items,n=t.onDeleteContact;return e.length>0&&Object(R.jsx)("ul",{className:G.a.contact__container,children:e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(R.jsxs)("li",{className:G.a.contact_list,children:[c,": ",a,Object(R.jsx)("button",{type:"button",onClick:function(){return n(e)},className:G.a.button,children:"Delete"})]},e)}))})}}]),n}(c.Component),K=Object(u.b)((function(t){return{items:L(t)}}),(function(t){return{onDeleteContact:function(e){return t(function(t){return function(e){e(w()),O.a.delete("/contacts/".concat(t)).then((function(){return e(I(t))})).catch((function(t){return e(k(t))}))}}(e))},fetchContacts:function(){return t(function(){var t=Object(h.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(v()),O.a.get("/contacts").then((function(t){var n=t.data;return e(x(n))})).catch((function(t){return e(_(t))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}}))(H),Q=(n(65),function(){return Object(R.jsxs)("div",{children:[Object(R.jsx)("h1",{children:"Phonebook"}),Object(R.jsx)(J,{}),Object(R.jsx)("h2",{children:"Contacts"}),Object(R.jsx)(T,{}),Object(R.jsx)(K,{})]})}),V=n(14),W=n(32),X=n.n(W),Y=n(8),tt=n(4),et=Object(C.c)([],(Z={},Object(i.a)(Z,x,(function(t,e){return e.payload})),Object(i.a)(Z,y,(function(t,e){var n=e.payload;return[].concat(Object(V.a)(t),[n])})),Object(i.a)(Z,I,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),Z)),nt=Object(C.c)(!1,(P={},Object(i.a)(P,v,(function(){return!0})),Object(i.a)(P,x,(function(){return!1})),Object(i.a)(P,_,(function(){return!1})),Object(i.a)(P,g,(function(){return!0})),Object(i.a)(P,y,(function(){return!1})),Object(i.a)(P,N,(function(){return!1})),Object(i.a)(P,w,(function(){return!0})),Object(i.a)(P,I,(function(){return!1})),Object(i.a)(P,k,(function(){return!1})),P)),ct=Object(C.c)("",Object(i.a)({},S,(function(t,e){return e.payload}))),at=Object(C.c)(null,{}),rt=Object(tt.b)({items:et,filter:ct,loading:nt,error:at}),ot=[].concat(Object(V.a)(Object(C.d)({serializableCheck:{ignoredActions:[Y.a,Y.f,Y.b,Y.c,Y.d,Y.e]}})),[X.a]),ut=Object(C.a)({reducer:{contacts:rt},middleware:ot});o.a.render(Object(R.jsx)(a.a.StrictMode,{children:Object(R.jsx)(u.a,{store:ut,children:Object(R.jsx)(Q,{})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={form:"Form_form__3RqOJ",label:"Form_label__UkU2u",input:"Form_input__2CzUS"}}},[[67,1,2]]]);
//# sourceMappingURL=main.175e7639.chunk.js.map