(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),i=(n(14),n(8)),s=n(1),u=n(2),l=n(4),o=n(3),m=n(5),p=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(){this.props.inputElement.current.focus()}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.props.addItem},r.a.createElement("input",{placeholder:"Task",ref:this.props.inputElement,value:this.props.currentItem.text,onChange:this.props.handleInput}),r.a.createElement("button",{class:"btn-floating btn-large waves-effect waves",type:"submit"},r.a.createElement("i",{class:"material-icons"},"add")))}}]),t}(a.Component),d=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).createTasks=function(e){return r.a.createElement("li",{key:e.key,onClick:function(){return n.props.deleteItem(e.key)}},e.text)},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.entries.map(this.createTasks);return r.a.createElement("ul",{className:"list"},e)}}]),t}(a.Component),h=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(o.a)(t).call(this))).inputElement=r.a.createRef(),e.deleteItem=function(t){var n=e.state.items.filter(function(e){return e.key!==t});e.setState({items:n})},e.handleInput=function(t){var n={text:t.target.value,key:Date.now()};e.setState({currentItem:n})},e.addItem=function(t){t.preventDefault();var n=e.state.currentItem;if(""!==n.text){var a=Object(i.a)(e.state.items).concat([n]);e.setState({items:a,currentItem:{text:"",key:""}})}},e.state={items:[],currentItem:{text:"",key:""}},e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("h4",null,"Todo App"),r.a.createElement(p,{addItem:this.addItem,inputElement:this.inputElement,handleInput:this.handleInput,currentItem:this.state.currentItem}),r.a.createElement(d,{entries:this.state.items,deleteItem:this.deleteItem}))}}]),t}(a.Component);Object(c.render)(r.a.createElement(h,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,2,1]]]);
//# sourceMappingURL=main.ff1178ae.chunk.js.map