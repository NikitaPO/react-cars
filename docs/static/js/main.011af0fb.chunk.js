(this["webpackJsonpreact-cars"]=this["webpackJsonpreact-cars"]||[]).push([[0],{22:function(e,t,a){e.exports=a(36)},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),i=(a(27),a(4)),o=a(5),s=a(7),m=a(6),u=a(8),h=function(e,t){return function(a){return r.a.createElement("li",{className:t},r.a.createElement(e,a))}},E=(a(28),h(function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"car__title"},e.name),r.a.createElement("p",null,"Car price: ",r.a.createElement("strong",null,e.price,"$")),r.a.createElement("p",null,"Car year: ",r.a.createElement("strong",null,e.year)),r.a.createElement("button",{className:"close",onClick:e.onDelete}))}}]),t}(r.a.Component),"car")),d=(a(29),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={hasError:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("div",{style:{border:"1px solid red",padding:"20px",color:"red"}},"Error, ssore"):this.props.children}}]),t}(n.Component)),p=function(e){return r.a.createElement("div",{className:"counter"},r.a.createElement("h2",{style:{fontSize:"12px"}},"Counter:"," ",r.a.createElement("strong",null,r.a.createElement(N.Consumer,null,(function(e){return e?"Clicked":null})))))},f=(a(30),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).counterUp=function(){a.setState({counter:a.state.counter+1})},a.counterDown=function(){a.setState((function(e){return{counter:e.counter-1}}))},a.state={counter:0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"counter"},r.a.createElement("h2",null,"Counter: ",r.a.createElement("strong",null,this.state.counter)),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{className:"def-btn",style:{width:"30px"},onClick:this.counterUp},"+"),r.a.createElement("button",{className:"def-btn",style:{width:"30px"},onClick:this.counterDown},"-")),r.a.createElement(p,null))}}]),t}(n.Component)),b=a(11),v=a(10),C=function(e){return r.a.createElement("div",{className:"header__input-wrapper"},r.a.createElement("input",{value:e.title,onChange:e.changeTitleHandler,className:"header__input"}))},g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).goToShop=function(){a.props.history.push({pathname:"/cars"})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",{className:"car-information__title"},"123"),r.a.createElement("div",{className:"car-information__block"},r.a.createElement("h3",null,"Detail information:"),r.a.createElement("ul",{className:"car-information__list"},r.a.createElement("ol",{className:"car-information__item"},"Car price ",r.a.createElement("strong",null,this.props.price)),r.a.createElement("ol",{className:"car-information__item"},"Car year ",r.a.createElement("strong",null,this.props.year)))),r.a.createElement("button",{className:"def-btn",onClick:this.goToShop},"Back to shop"))}}]),t}(r.a.Component),_=Object(v.f)(g),N=r.a.createContext(!1),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).showCarsHandler=function(){a.setState({showCars:!a.state.showCars})},a.changeTitleHandler=function(e){var t=e.target.value;a.setState({title:t})},a.deleteCarHandler=function(e){var t=a.state.cars.concat();t.splice(e,1),a.setState({cars:t})},a.state={cars:[{name:"Ford",price:1e4,year:2014},{name:"Mazda",price:11e3,year:2017},{name:"BMW",price:8600,year:2018},{name:"Audi",price:15300,year:2015},{name:"Mercedes",price:14500,year:2019},{name:"Lada",price:150,year:1990}],showCars:!0,clicked:!1,title:"Epic Cars Shop"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=null;return this.state.showCars&&(t=this.state.cars.map((function(t,a){return r.a.createElement(d,{key:a},r.a.createElement(E,{name:t.name,price:t.price,year:t.year,onDelete:e.deleteCarHandler.bind(e,a)}))}))),r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"header__title"},this.state.title),r.a.createElement("nav",{className:"navigation"},r.a.createElement("ul",null,r.a.createElement("ol",{className:"navigation__item"},r.a.createElement(b.b,{exact:!0,className:"navigation__link",activeClassName:"active-link",to:"/"},"Home")),r.a.createElement("ol",{className:"navigation__item"},r.a.createElement(b.b,{className:"navigation__link",activeClassName:"active-link",to:"/cars"},"Cars")),r.a.createElement("ol",{className:"navigation__item"},r.a.createElement(b.b,{className:"navigation__link",activeClassName:"active-link",to:{pathname:"/change-title"}},"Change title")))),r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/change-title",render:function(){return r.a.createElement(C,{title:e.state.title,changeTitleHandler:e.changeTitleHandler.bind(e)})}}),r.a.createElement(v.a,{path:"/cars",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"header__button",onClick:e.showCarsHandler},"Toggle cars"),r.a.createElement("ol",{className:"cars-list"},t))}}),r.a.createElement(v.a,{path:"/cars/:name",Component:_}),r.a.createElement(v.a,{exact:!0,path:"/",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.Provider,{value:e.state.clicked},r.a.createElement(f,null)),r.a.createElement("button",{className:"def-btn",onClick:function(){return e.setState({clicked:!0})}},"Change clicked"))}}),r.a.createElement(v.a,{render:function(){return r.a.createElement("h2",{style:{color:"red"}},"Error 404 not found")}})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=r.a.createElement(b.a,null,r.a.createElement(k,null));l.a.render(y,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.011af0fb.chunk.js.map