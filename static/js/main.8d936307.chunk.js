(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(3),o=n.n(c),r=n(4),a=n(5),s=n(7),d=n(6),l=n(1),i=n.n(l),u=(n(12),n(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={selectedGood:["Jam"]},e.addGood=function(t){var n=e.state.selectedGood;if(n.includes(t)){var c=n.indexOf(t);n.splice(c,1)}else n.push(t);e.setState((function(){return{selectedGood:n}}))},e.goToZero=function(){var t=e.state.selectedGood;t.length=0,e.setState({selectedGood:t})},e.renderTitle=function(){var t,n=e.state.selectedGood;switch(!0){case 0===n.length:t="No selected goods";break;case 1===n.length:t="".concat(n.join("")," is selected");break;case 2===n.length:t="".concat(n.join(" and ")," are selected");break;case n.length>2:t=n.reduce((function(e,t,n,c){return 0===n?t+e:n===c.length-1?"".concat(e," and ").concat(t," are selected"):"".concat(e,", ").concat(t)}),"")}return t},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this;return Object(u.jsxs)(u.Fragment,{children:[0!==this.state.selectedGood.length&&Object(u.jsx)("button",{type:"button",onClick:function(){e.goToZero()},children:"X"}),Object(u.jsx)("h1",{children:this.renderTitle()}),Object(u.jsx)("ul",{children:h.map((function(t){var n=e.state.selectedGood.includes(t);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("li",{children:t},t),Object(u.jsx)("button",{type:"button",onClick:function(){e.addGood(t)},children:n?"Hide":"Select"})]})}))})]})}}]),n}(i.a.Component),b=j;o.a.render(Object(u.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.8d936307.chunk.js.map