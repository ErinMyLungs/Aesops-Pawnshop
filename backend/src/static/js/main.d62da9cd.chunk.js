(this["webpackJsonpaesops-pawnshop-frontend"]=this["webpackJsonpaesops-pawnshop-frontend"]||[]).push([[0],{140:function(e,t,a){e.exports=a(252)},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},252:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),o=a(120),r=a.n(o),l=(a(145),a(146),a(121)),c=a(122),s=a(135),d=a(123),u=a(136),h=a(264),m=a(266),p=a(265),f=a(270),g=a(262),v=(a(147),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={data:[{model:"760",nonTiPrice:69,tiPrice:0}]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"fetchAggregateData",value:function(){var e=this;fetch("./api/v0.1/model").then((function(e){return e.json()})).then((function(t){e.setState({data:t})}))}},{key:"render",value:function(){return 1===this.state.data.length&&this.fetchAggregateData(),i.a.createElement("div",{className:"base-grouped-chart",style:{display:"flex"}},i.a.createElement("h3",null,"Average GPU Price in Dollars"),i.a.createElement(h.a,{title:"Average GPU Price in Dolalrs",domainPadding:{x:10}},i.a.createElement(m.a,{dependentAxis:!0,label:"Average Price ($USD",tickFormat:function(e){return"$".concat(e)},style:{axisLabel:{fontSize:10,padding:30},tickLabels:{fontSize:7,padding:5}}}),i.a.createElement(m.a,{dependentAxis:!1,label:"GPU Models (Arranged by Generation)",tickLabelComponent:i.a.createElement(p.a,{dy:-3}),style:{axisLabel:{fontSize:10,padding:30,angle:0},tickLabels:{fontSize:7,padding:10,angle:-90}}}),i.a.createElement(f.a,{offset:5,colorScale:"qualitative",style:{data:{width:5}}},i.a.createElement(g.a,{data:this.state.data,x:"model",y:"tiPrice"}),i.a.createElement(g.a,{data:this.state.data,x:"model",y:"nonTiPrice"}))))}}]),t}(n.Component));var b=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Used GPU Market on /r/hardwareswap"),i.a.createElement("p",null," A visualization dashboard to look at used GPU pricing for NVidia GPUs. "),i.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[140,1,2]]]);
//# sourceMappingURL=main.d62da9cd.chunk.js.map