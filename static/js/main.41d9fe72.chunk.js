(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(32)},28:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(12),c=n.n(a),i=n(1),u=n(5),l=n(3),d=function(e){return{type:"ACTION_MOVE",payload:e}},m=function(){return{type:"ACTION_NEW_GAME",payload:null}},s=function(){return{type:"ACTION_RESET",payload:null}},p=function(){return{type:"ACTION_TICK",payload:null}},v=n(8),f=function(e,t,n){var r=e.slice().map(function(e){return e.slice()}),o=Object(v.a)(t,2),a=o[0],c=o[1],i=Object(v.a)(n,2),u=i[0],l=i[1],d=r[a][c].coord;return r[a][c].coord=r[u][l].coord,r[u][l].coord=d,r},O=function(){var e={};return e.emptyCoord=[b(0,4),b(0,4)],e.grid=function(e){for(var t=new Array(15).fill(0).map(function(e,t){return t+1}),n=[],r=!1,o=0;o<4;o++){n[o]=[];for(var a=0;a<4;a++)n[o][a]={coord:[o,a],value:0},r||e[0]!==o||e[1]!==a?n[o][a].value=t.splice(b(0,t.length),1):r=!0}return n}(e.emptyCoord),e};function b(e,t){return Math.floor(Math.random()*(t-e))+e}var y=Object(l.a)({started:!1,time:0,moves:0},O()),E=n(14),j=n(15),C=n(17),N=n(16),g=n(18),h=(n(28),function(e){function t(){return Object(E.a)(this,t),Object(C.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval(function(){e.props.doTick()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this.props,t=e.grid,n=e.moves,r=e.time,a=e.doMove,c=e.doNewGame,i=e.doReset;return o.a.createElement("div",{className:"app"},o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){c()}},"New game")," ",o.a.createElement("button",{onClick:function(){i()}},"Reset")),"Moves: ",n,", time: ",r,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"grid"},t.map(function(e,t){return e.map(function(e,n){return o.a.createElement("div",{key:"item:"+t+":"+n,className:"grid-item "+(e.value?"":"grid-item--empty"),style:(r=e.coord,{top:60*r[0]+"px",left:60*r[1]+"px"}),onClick:function(){e.value&&a(e.coord)}},o.a.createElement("span",{className:"grid-item__inner"},e.value||""));var r})}))))}}]),t}(o.a.Component)),T=Object(u.b)(function(e){return{grid:e.grid,moves:e.moves,time:e.time}},function(e){return{doMove:Object(i.a)(d,e),doNewGame:Object(i.a)(m,e),doReset:Object(i.a)(s,e),doTick:Object(i.a)(p,e)}})(h),I=(n(30),Object(i.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ACTION_MOVE":var n=t.payload,r=e.emptyCoord;return console.log("empty coord: ",r),Object(l.a)({},e,{started:!0,grid:f(e.grid,n,r),emptyCoord:n,moves:e.moves+1});case"ACTION_NEW_GAME":return Object(l.a)({},y,{started:!1},O());case"ACTION_RESET":return Object(l.a)({},y);case"ACTION_TICK":return Object(l.a)({},e,{time:e.started&&e.time+1||e.time});default:return Object(l.a)({},e)}}));c.a.render(o.a.createElement(u.a,{store:I},o.a.createElement(T,null)),document.getElementById("root"))}},[[19,2,1]]]);
//# sourceMappingURL=main.41d9fe72.chunk.js.map