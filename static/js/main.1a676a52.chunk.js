(this["webpackJsonpcard-app"]=this["webpackJsonpcard-app"]||[]).push([[0],{45:function(e,t,n){e.exports=n(98)},50:function(e,t,n){},51:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(24),o=n.n(r),c=(n(50),n(1)),s=n(2),u=n(4),l=n(3),p=n(5),m=(n(51),n(10)),h=Object.freeze({IS_LOGGED_IN:"isLoggedIn"}),d=function(){return"true"===localStorage.getItem(h.IS_LOGGED_IN)},f=function(e,t,n){e.meta.AUTH_ONLY&&!d()&&n.redirect("/login"),n()},g=n(26),v=n(14),b=Object(v.a)(),y=n(12),E=n(6),O=n(7),j=(n(57),n(9)),C=n.n(j),S=n(17);var I=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).logout=n.logout.bind(Object(O.a)(n)),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"logout",value:function(){this.props.logoutAction(),this.props.history.push("login")}},{key:"render",value:function(){var e=this.props.isLoggedIn;return i.a.createElement("div",{className:"component-wrapper"},i.a.createElement("div",{className:"nav"},i.a.createElement("h3",null,"Logo"),i.a.createElement("ul",{className:"nav-links"},i.a.createElement("li",null,i.a.createElement(E.b,{to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(E.b,{to:"/clock"},"Clock")),i.a.createElement("li",null,i.a.createElement(E.b,{to:"/puzzle"},"Puzzle")),i.a.createElement("li",null,i.a.createElement(E.b,{to:"/card"},"Card"))),e&&i.a.createElement("button",{onClick:this.logout,style:{color:"black"}},"Log out")))}}]),t}(i.a.Component);I.propsType={logoutAction:C.a.func.isRequired};var w=Object(S.d)(y.g,Object(m.b)((function(e){return{isLoggedIn:e.auth.isLoggedIn}}),{logoutAction:function(){return function(e){localStorage.removeItem(h.IS_LOGGED_IN),e({type:"logout",isLoggedIn:d()})}}}))(I),k=(n(58),n(59),n(60),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"piece-".concat(this.props.id),className:"puzzle-piece",draggable:this.props.draggable},i.a.createElement("h1",null,this.props.id))}}]),t}(i.a.Component)),L=(n(61),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"createPuzzlePiece",value:function(){var e=this.props.pieceId;if(null!==e)return i.a.createElement(k,{key:e,id:e,draggable:!1})}},{key:"render",value:function(){return i.a.createElement("div",{id:"slot-".concat(this.props.id),className:"puzzle-grid__slot"},this.createPuzzlePiece())}}]),t}(i.a.Component)),_=(n(62),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e)))._isMounted=!1,n._stopSubscribe=!1,n.subscribeCount=function(){n.props.updateCount((function(e){n._stopSubscribe||e===n.state.count||(n.setState((function(t){return t.count=e})),0===e&&(n._stopSubscribe=!0))}))},n.state={subscribeTimer:0,count:e.swapChanceCount},n.startSubscribe.bind(Object(O.a)(n)),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this._isMounted&&this.startSubscribe()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this._stopSubscribe=!0}},{key:"startSubscribe",value:function(){var e=this;setInterval((function(){return e.setState({subscribeTimer:e.state.subscribeTimer+1})}),50)}},{key:"render",value:function(){var e=this;return this._stopSubscribe||setTimeout((function(){return e.subscribeCount()}),0),i.a.createElement("div",{className:"component-wrapper ".concat(this.props.className)},i.a.createElement("p",null,"Swap chance: ",this.state.count))}}]),t}(i.a.Component)),N=(n(63),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e)))._isMounted=!1,n._isStopped=!1,n.subscribeStop=function(){n.props.updateStop((function(e){e&&!n._isStopped&&(n.stopTimer(),n._isStopped=!0,n.props.emitTime(n.state.time))}))},n.state={time:0,isOn:!1,start:0},n.startTimer=n.startTimer.bind(Object(O.a)(n)),n.stopTimer=n.stopTimer.bind(Object(O.a)(n)),n.resetTimer=n.resetTimer.bind(Object(O.a)(n)),n.upTimingFunc=n.upTimingFunc.bind(Object(O.a)(n)),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this._isMounted&&this.startTimer()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.stopTimer()}},{key:"startTimer",value:function(){var e=this;this.setState({isOn:!0,time:this.state.time,start:Date.now()-this.state.time}),this.timer=setInterval((function(){return e.setState({time:Date.now()-e.state.start})}),10)}},{key:"stopTimer",value:function(){this.setState({isOn:!1}),clearInterval(this.timer)}},{key:"resetTimer",value:function(){this.setState({time:0,isOn:!1})}},{key:"upTimingFunc",value:function(){this.startTimer()}},{key:"downTimingFunc",value:function(e){}},{key:"render",value:function(){var e=this;if(this._isStopped||setTimeout((function(){return e.subscribeStop()}),0),this.props.upTimer)return i.a.createElement("div",{className:"component-wrapper"});0===this.state.time&&i.a.createElement("button",{onClick:this.startTimer},"start"),0!==this.state.time&&this.state.isOn&&i.a.createElement("button",{onClick:this.stopTimer},"stop"),0===this.state.time||this.state.isOn||i.a.createElement("button",{onClick:this.startTimer},"resume"),0===this.state.time||this.state.isOn||i.a.createElement("button",{onClick:this.resetTimer},"reset");return i.a.createElement("div",{className:"component-wrapper ".concat(this.props.className)},i.a.createElement("h3",null,"timer: ",Math.floor(this.state.time/10)/100," s"))}}]),t}(i.a.Component)),W={GRID_SIZE_LV1:{height:3,width:3},GRID_SIZE_LV2:{height:4,width:4},config:{CARD_API_URL:"https://5e9e56abfb467500166c3dce.mockapi.io/react-misc/"}};n(33);var M=function(e){return+e.id.split("-")[1]},z=function(e){var t=[];return e.forEach((function(e){var n=M(e);t.push(n)})),t},T=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=[],a=0;a<e-t;a++)n.push(a);return n},G=function(e){var t=Math.floor(100*Math.random()%e.length);return e.splice(t,1)[0]},D=function(e){var t=[];return e.forEach((function(e){e.hasChildNodes()||t.push(e)})),t},R=function(e,t){e.forEach((function(e){return e.style.backgroundColor=t}))},P=function(e,t,n){var a=[],i=z(t);return e.forEach((function(e){var r=M(e),o=!1;t.forEach((function(t){i.includes(r)||o||(A(e,t,n)?(e.firstElementChild.draggable=!0,o=!0):e.firstElementChild.draggable=!1)})),a.push(e)})),a},A=function(e,t,n){var a=M(e),i=M(t);return a===i+1&&Math.floor(a/n)===Math.floor(i/n)||a===i-1&&Math.floor(a/n)===Math.floor(i/n)||a===i+n||a===i-n},x=function(e,t,n){if(e.hasChildNodes&&t.hasChildNodes&&A(e,t,n)){var a=e.cloneNode(!0),i=t.cloneNode(!0);return a.replaceChild(e.firstElementChild,a.childNodes[0]),i.replaceChild(t.firstElementChild,i.childNodes[0]),e.appendChild(i.firstElementChild),t.appendChild(a.firstElementChild),!0}return!1},U=function(){return{getPieceIdSet:T,getRandomPieceId:G,getIdNumber:M,getIdNumbers:z,findEmptySlots:D,coloringEmptySlots:R,transformSlots:P,isAdjacent:A,swapPieces:x}},B=U(),V=function(e){var t=160,n=160;return(e.width>3||e.height>3)&&(t=120,n=120),{width:t,height:n}},Z=10*W.GRID_SIZE_LV1.width,q=10*W.GRID_SIZE_LV1.height,H={width:"".concat(W.GRID_SIZE_LV1.width*V(W.GRID_SIZE_LV1).width+Z,"px"),height:"".concat(W.GRID_SIZE_LV1.height*V(W.GRID_SIZE_LV1).height+q,"px"),gridTemplateColumns:"repeat(".concat(W.GRID_SIZE_LV1.width,", ").concat(V(W.GRID_SIZE_LV1).width,"px)"),gridTemplateRows:"repeat(".concat(W.GRID_SIZE_LV1.height,", ").concat(V(W.GRID_SIZE_LV1).height,"px)"),gridGap:"".concat(10,"px"),border:"1px solid wheat"},Q=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).emptySlotBg="rgba(255, 255, 255, 0.3)",n.slotBg="rgba(255, 255, 255, 1)",n.hoveredSlotBg="rgba(255, 255, 255, .6)",n.swapChanceCount=1,n._isMounted=!1,n.isWin=!1,n.subscribeWinning=function(e){n.isWin=n.props.isWin,e(n.isWin)},n.getEmittedTime=function(e){console.log("get time");var t={playedTime:e,playerName:"Unknown player",level:n.props.gameLevel.level};n.props.setWinningInfo(t)},n.announceWinning=n.announceWinning.bind(Object(O.a)(n)),n.getSwapChanceCount=n.getSwapChanceCount.bind(Object(O.a)(n)),n.gameSettings={emptySlotQuantity:e.gameLevel.emptySlotQuantity,arraySize:e.gameLevel.arraySize},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!!e.isUpdated}},{key:"componentDidMount",value:function(){this.initDraggingEnvironment()}},{key:"componentWillUnmount",value:function(){this.props.restartGame()}},{key:"createEmptySlotIds",value:function(e,t){for(var n=[],a=0;a<t;){var i=Math.floor(100*Math.random()%e);n.includes(i)||(n.push(i),a++)}return n}},{key:"createGridSlots",value:function(e){for(var t=[],n=W.GRID_SIZE_LV1.height*W.GRID_SIZE_LV1.width,a=this.createEmptySlotIds(n,e),r=B.getPieceIdSet(n,e),o=0;o<n;o++){var c=null;a.includes(o)||(c=B.getRandomPieceId(r)),t.push(i.a.createElement(L,{id:o,key:o,pieceId:c}))}return t}},{key:"getSwapChanceCount",value:function(e){e(this.swapChanceCount)}},{key:"initDraggingEnvironment",value:function(){var e=this,t=Array.from(document.querySelectorAll(".puzzle-grid__slot")),n=B.findEmptySlots(t),a=B.transformSlots(t,n,this.gameSettings.arraySize),i=Array.from(document.querySelectorAll(".puzzle-piece"));B.coloringEmptySlots(n,this.emptySlotBg);var r=null,o=null;i.forEach((function(i){i.addEventListener("dragstart",(function(){o=i.parentElement,r=i,setTimeout((function(){r.style.display="none"}))})),i.addEventListener("dragend",(function(){setTimeout((function(){r.style.display="flex",r=null}))})),t.forEach((function(i){var c=i.style.backgroundColor;i.addEventListener("dragover",(function(e){e.preventDefault()})),i.addEventListener("dragenter",(function(t){t.preventDefault(),o.id===i.id||i.hasChildNodes()||(i.style.backgroundColor=e.hoveredSlotBg)})),i.addEventListener("dragleave",(function(t){t.preventDefault();var a=B.getIdNumbers(n),r=B.getIdNumber(i);a.includes(r)?i.style.backgroundColor=e.emptySlotBg:i.style.backgroundColor=e.slotBg})),i.addEventListener("drop",(function(o){var s=r.parentNode,u=B.getIdNumber(i),l=B.getIdNumber(s);if(!i.hasChildNodes()&&B.isAdjacent(i,s,e.gameSettings.arraySize))r.style.display="flex",i.append(r),i.style.backgroundColor=e.slotBg,t=Array.from(document.querySelectorAll(".puzzle-grid__slot")),n=B.findEmptySlots(t),B.coloringEmptySlots(n,e.emptySlotBg),a=B.transformSlots(t,n,e.gameSettings.arraySize),setTimeout((function(){e.checkWiningCondition(a,n)&&e.announceWinning()}),100);else if(i.hasChildNodes()&&e.swapChanceCount>0){var p=B.swapPieces(s,i,e.gameSettings.arraySize);i.firstElementChild.style.display="flex",a=B.transformSlots(t,n,e.gameSettings.arraySize),p&&e.swapChanceCount--}else u!==l&&(i.style.backgroundColor=c)}))}))}))}},{key:"checkWiningCondition",value:function(e,t){var n=0,a=e.length-t.length;return e.forEach((function(e){var t=e.firstElementChild,a=B.getIdNumber(e),i=null;t&&(i=B.getIdNumber(t)),a===i&&n++})),n===a}},{key:"announceWinning",value:function(){var e=this;this.props.broadcastWinning(),setTimeout((function(){console.log("You win the game",e.props.isWin),alert("Congratulation! You win the game")}),100)}},{key:"render",value:function(){var e=this.createGridSlots(this.gameSettings.emptySlotQuantity);return i.a.createElement("div",{className:"component-wrapper puzzle-wrapper"},i.a.createElement("div",{className:"puzzle-grid",style:H},e.map((function(e){return e}))),i.a.createElement(N,{className:"timer-pos",stop:this.isWin,updateStop:this.subscribeWinning,emitTime:this.getEmittedTime}),i.a.createElement(_,{className:"text-pos",updateCount:this.getSwapChanceCount,swapChanceCount:this.swapChanceCount}))}}]),t}(i.a.Component);Q.propsType={broadcastWinning:C.a.func.isRequired,restartGame:C.a.func.isRequired,setWinningInfo:C.a.func.isRequired};var F=Object(m.b)((function(e){return{isUpdated:!1,isWin:e.puzzle.isWin,gameLevel:e.puzzle.gameLevel}}),{broadcastWinning:function(){return function(e){e({type:"broadcastWinning",isWin:!0})}},restartGame:function(){return function(e){e({type:"broadcastWinning",isWin:!1})}},setWinningInfo:function(e){return function(t){t({type:"setWinningInfo",winningInfo:e})}}})(Q),Y=(n(65),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"component-wrapper"},i.a.createElement("ul",{className:"puzzle-menu"},i.a.createElement("li",null,i.a.createElement(E.b,{to:"/puzzle/game"},"Start Game")),i.a.createElement("li",null,i.a.createElement(E.b,{to:"/puzzle/score-board"},"Score Board")),i.a.createElement("li",null,i.a.createElement(E.b,{to:"/puzzle/setting"},"Setting"))))}}]),t}(i.a.Component)),X=(n(66),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).change=function(e){n.props.changeGameLevel(e.target.value)},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"component-wrapper"},i.a.createElement("ul",{className:"puzzle-setting"},i.a.createElement("div",{className:"setting-option-wrapper"},i.a.createElement("label",{htmlFor:"level",style:{marginRight:"10px"}},"Game Level:"),i.a.createElement("select",{name:"level",id:"level",onChange:this.change,value:this.props.level},i.a.createElement("option",{value:"Easy"},"Easy"),i.a.createElement("option",{value:"Normal"},"Normal"),i.a.createElement("option",{value:"Hard"},"Hard"))),i.a.createElement("li",null,i.a.createElement(E.b,{to:"/puzzle"},"Back"))))}}]),t}(i.a.Component));X.propsType={changeGameLevel:C.a.func.isRequired};var J=Object(m.b)((function(e){return{isUpdated:!1,level:e.puzzle.gameLevel.level}}),{changeGameLevel:function(e){return function(t){t({type:"changeGameLevel",level:e})}}})(X),$=(n(67),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.winningInfo.sort((function(e,t){return e.playedTime-t.playedTime}));return i.a.createElement("div",{className:"component-wrapper"},i.a.createElement("ul",{className:"puzzle-menu"},e.map((function(t){var n=e.indexOf(t);return i.a.createElement("p",{key:n},n+1,". ",t.playerName,": ",+t.playedTime/1e3,"s (",t.level,")")})),i.a.createElement("li",null,i.a.createElement(E.b,{to:"/puzzle"},"Back"))))}}]),t}(i.a.Component)),K=Object(m.b)((function(e){return{isUpdated:!1,winningInfo:e.puzzle.winningInfo}}),{})($),ee=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"component-wrapper"},i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement(y.d,null,i.a.createElement(y.b,{path:"/puzzle",exact:!0,component:Y}),i.a.createElement(y.b,{path:"/puzzle/game",exact:!0,component:F}),i.a.createElement(y.b,{path:"/puzzle/setting",exact:!0,component:J}),i.a.createElement(y.b,{path:"/puzzle/score-board",exact:!0,component:K})))))}}]),t}(i.a.Component),te=function(){return i.a.createElement(y.b,{path:"/puzzle",component:ee})},ne=(n(68),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"component-wrapper"},i.a.createElement("h1",null,"HomePage"))}}]),t}(i.a.Component)),ae=function(){return i.a.createElement(g.b,{path:"/",exact:!0,component:ne,meta:{AUTH_ONLY:!0}})},ie=(n(69),n(70),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.hour,t=this.props.minute,n=this.props.second;return i.a.createElement("div",{className:"component-wrapper"},i.a.createElement("div",{className:"clock-wrapper"},i.a.createElement("div",{className:"clock"},i.a.createElement("div",{className:"hand hour-hand",style:{transform:"rotate(".concat(30*e+t/2+n/120-90,"deg)")}}),i.a.createElement("div",{className:"hand minute-hand",style:{transform:"rotate(".concat(6*t+n/10-90,"deg)")}}),i.a.createElement("div",{className:"hand second-hand",style:{transform:"rotate(".concat(6*n-90,"deg)")}}))),i.a.createElement("div",{className:"timer"},e,":",t<10?"0"+t:t,":",n<10?"0"+n:n))}}]),t}(i.a.Component)),re=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this)))._isMounted=!1,e.state={time:new Date},e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0,this._isMounted&&(this.clock=setInterval((function(){e.setState((function(e){return e.time=new Date}))}),1e3))}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,clearInterval(this.clock)}},{key:"render",value:function(){var e=this.state.time.getHours(),t=this.state.time.getMinutes(),n=this.state.time.getSeconds();return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement(ie,{hour:e,minute:t,second:n})))}}]),t}(i.a.Component),oe=function(){return i.a.createElement(y.b,{path:"/clock",component:re})},ce=(n(71),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).login=n.login.bind(Object(O.a)(n)),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"login",value:function(){this.props.loginAction()}},{key:"render",value:function(){return this.props.isLoggedIn?i.a.createElement(y.a,{to:"/"}):i.a.createElement("div",{className:"component-wrapper"},i.a.createElement("button",{onClick:this.login},"Log in"))}}]),t}(i.a.Component)),se=Object(m.b)((function(e){return{isLoggedIn:e.auth.isLoggedIn}}),{loginAction:function(){return function(e){localStorage.setItem(h.IS_LOGGED_IN,"true"),e({type:"login",isLoggedIn:d()})}}})(ce),ue=function(){return i.a.createElement(y.b,{path:"/login",component:se})},le=(n(72),n(73),n(20)),pe=(n(74),n(19)),me=n.n(pe),he=n(21),de=n(23),fe=n.n(de);function ge(e,t){return ve.apply(this,arguments)}function ve(){return(ve=Object(he.a)(me.a.mark((function e(t,n){var a,i,r=arguments;return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>2&&void 0!==r[2]?r[2]:"GET",i=r.length>3?r[3]:void 0,e.abrupt("return",fe()({method:a,url:"".concat(t,"/").concat(n),data:i}).catch((function(e){console.log(e)})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var be=W.config;function ye(){return function(e){e({type:"broadcastWinning",isWin:!0})}}function Ee(e){return function(t){t({type:"setWinningInfo",winningInfo:e})}}function Oe(e,t){return e+t}var je={updateWinningInfo:function(e){fe.a.post("https://5e9e56abfb467500166c3dce.mockapi.io/react-misc/card-score",{winningInfo:e}).then((function(e){console.log(e.data)})).catch((function(e){return console.log(e)}))},getWinningInfo:function(){var e=Object(he.a)(me.a.mark((function e(){return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fe()({method:"GET",url:"https://5e9e56abfb467500166c3dce.mockapi.io/react-misc/card-score"}).catch((function(e){return console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},Ce=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this))).flipCardUp=n.flipCardUp.bind(Object(O.a)(n)),n.setWinningInfo=n.setWinningInfo.bind(Object(O.a)(n)),n.checkWiningCondition=n.checkWiningCondition.bind(Object(O.a)(n)),n.announceWinning=n.announceWinning.bind(Object(O.a)(n)),n.shiftArrayByCase=n.shiftArrayByCase.bind(Object(O.a)(n)),n.shiftArrayNightmare=n.shiftArrayNightmare.bind(Object(O.a)(n)),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"setWinningInfo",value:function(e){this.props.setWinningInfo(e)}},{key:"updateWinningInfo",value:function(e){je.updateWinningInfo(e)}},{key:"isPairMatching",value:function(){var e=document.getElementsByClassName("flip-up unmatched");return e[0].getAttribute("name")===e[1].getAttribute("name")}},{key:"disableFlip",value:function(){var e=document.getElementsByClassName("flip-up unmatched"),t=e[0],n=e[1];t.classList.remove("unmatched"),t.classList.add("matched"),n.classList.remove("unmatched"),n.classList.add("matched")}},{key:"isEven",value:function(e){return e%2===0}},{key:"shiftArrayToLeft",value:function(e,t){return e=e.concat(e.splice(0,t))}},{key:"shiftArrayToRight",value:function(e,t){return e=e.concat(e.splice(0,e.length-t))}},{key:"changeCardsPosition",value:function(){var e=document.getElementsByClassName("card-grid__slot"),t=[],n=[],a=!0,i=!1,r=void 0;try{for(var o,c=e[Symbol.iterator]();!(a=(o=c.next()).done);a=!0){var s=o.value,u=s.firstChild;u.classList.contains("unmatched")&&(n.push(u),t.push(s))}}catch(h){i=!0,r=h}finally{try{a||null==c.return||c.return()}finally{if(i)throw r}}n="Nightmare"===this.props.gameLevel.level?this.shiftArrayNightmare(n):this.shiftArrayByCase(n,this.props.gameLevel.shiftCase);for(var l=0;l<t.length;l++){var p=t[l],m=p.firstChild;m&&p.removeChild(m),p.appendChild(n[l])}}},{key:"shiftArrayByCase",value:function(e,t){switch(t){case 1:return e=this.shiftArrayToLeft(e,2);case 2:return e=this.shiftArrayToRight(e,2);default:return e}}},{key:"shiftArrayNightmare",value:function(e){var t=this.props.gameLevel.toggle;return(this.props.moveCount+2)%10===0&&this.props.toggleShiftMode(t),e=t?this.shiftArrayToRight(e,2):this.shiftArrayToLeft(e,2)}},{key:"flipCardUp",value:function(){var e=this,t=document.querySelector("#piece-".concat(this.props.id));if(t.classList.contains("unmatched")&&!this.props.isWaiting&&!t.classList.contains("flip-up")&&(t.classList.add("flip-up"),this.props.increaseMoveCount(this.props.moveCount),this.isEven(this.props.moveCount+1))){if(this.isPairMatching()){if("Nightmare"===this.props.gameLevel.level&&this.props.resetUnsuccessfulMoveCount(),this.props.alterMatchedPairCount(this.props.matchedPairs,1),this.disableFlip(),this.checkWiningCondition()){var n={moves:this.props.moveCount+1,playerName:"Unknown player",level:this.props.gameLevel.level};this.announceWinning(),this.updateWinningInfo(n)}}else"Nightmare"===this.props.gameLevel.level&&(this.props.increaseUnsuccessfulMoveCount(this.props.gameLevel.unsuccessfulMoves),console.log(this.props.gameLevel.unsuccessfulMoves+2)),this.props.setWait(!0),setTimeout((function(){return e.flipCardsDown()}),1e3);if("Hard"!==this.props.gameLevel.level&&"Nightmare"!==this.props.gameLevel.level||setTimeout((function(){return e.changeCardsPosition()}),1001),"Nightmare"===this.props.gameLevel.level&&this.props.gameLevel.unsuccessfulMoves+2>=12&&(this.props.gameLevel.unsuccessfulMoves+2-12)%4===0){var a=Object(le.a)(document.getElementsByClassName("flip-up matched"));a.length>1?(this.props.alterMatchedPairCount(this.props.matchedPairs,-1),this.flipMatchedCardsDown(a)):this.props.resetUnsuccessfulMoveCount()}}}},{key:"flipCardsDown",value:function(){var e=Object(le.a)(document.getElementsByClassName("flip-up unmatched")),t=!0,n=!1,a=void 0;try{for(var i,r=e[Symbol.iterator]();!(t=(i=r.next()).done);t=!0){var o=i.value;o.classList.contains("unmatched")&&o.classList.contains("flip-up")&&o.classList.remove("flip-up")}}catch(c){n=!0,a=c}finally{try{t||null==r.return||r.return()}finally{if(n)throw a}}this.props.setWait(!1)}},{key:"flipMatchedCardsDown",value:function(e){var t=e[0];e.splice(0,1);var n=e.find((function(e){return e.getAttribute("name")===t.getAttribute("name")}));t.classList.remove("matched","flip-up"),t.classList.add("unmatched"),n.classList.remove("matched","flip-up"),n.classList.add("unmatched")}},{key:"checkWiningCondition",value:function(){var e=this.props.gameLevel.arraySize;return this.props.matchedPairs+1===e*e/2}},{key:"announceWinning",value:function(){var e=this;this.props.broadcastWinning(),setTimeout((function(){console.log("You win the game",e.props.isWin),alert("Congratulation! You win the game")}),100)}},{key:"render",value:function(){return i.a.createElement("div",{className:"component-wrapper card-wrapper h-full unmatched",name:this.props.name,id:"piece-".concat(this.props.id),onClick:this.flipCardUp},i.a.createElement("div",{id:"piece-".concat(this.props.id,"-front"),className:"card-piece card-front"},i.a.createElement("h1",null,this.props.name)),i.a.createElement("div",{id:"piece-".concat(this.props.id,"-back"),className:"card-piece card-back"}))}}]),t}(i.a.Component);Ce.propsType={countMoves:C.a.func.isRequired,countMatchedPairs:C.a.func.isRequired,setWait:C.a.func.isRequired,broadcastWinning:C.a.func.isRequired};var Se=Object(m.b)((function(e){return{moveCount:e.card.moveCount,matchedPairs:e.card.matchedPairs,isWaiting:e.card.isWaiting,gameLevel:e.card.gameLevel,winningInfo:e.card.winningInfo}}),{increaseMoveCount:function(e){return function(t){t({type:"increaseMoveCount",moveCount:Oe(e,1)})}},alterMatchedPairCount:function(e,t){return function(n){n({type:"alterMatchedPairCount",matchedPairs:Oe(e,t)})}},setWait:function(e){return function(t){t({type:"setWait",isWaiting:e})}},broadcastWinning:ye,setWinningInfo:Ee,toggleShiftMode:function(e){return{type:"toggleShiftMode",toggle:!e}},increaseUnsuccessfulMoveCount:function(e){return function(t){t({type:"alterUnsuccessfulMoveCount",unsuccessfulMoves:Oe(e,2)})}},resetUnsuccessfulMoveCount:function(){return function(e){e({type:"alterUnsuccessfulMoveCount",unsuccessfulMoves:0})}}})(Ce),Ie=(n(93),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"createCardPiece",value:function(){var e=this.props.pieceId,t=this.props.name;if(null!==e)return i.a.createElement(Se,{key:e,id:e,name:t})}},{key:"render",value:function(){return i.a.createElement("div",{id:"slot-".concat(this.props.id),className:"card-grid__slot"},this.createCardPiece())}}]),t}(i.a.Component)),we=(n(94),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e)))._isMounted=!1,n._stopSubscribe=!1,n.subscribeCount=function(){n.props.updateCount((function(e){n._stopSubscribe||e===n.state.count||n.setState((function(t){return t.count=e}))}))},n.state={subscribeTimer:0,count:e.count},n.startSubscribe.bind(Object(O.a)(n)),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this._isMounted&&this.startSubscribe()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this._stopSubscribe=!0}},{key:"startSubscribe",value:function(){var e=this;setInterval((function(){return e.setState({subscribeTimer:e.state.subscribeTimer+1})}),50)}},{key:"render",value:function(){var e=this;return this._stopSubscribe||setTimeout((function(){return e.subscribeCount()}),0),i.a.createElement("div",{className:"component-wrapper ".concat(this.props.className)},i.a.createElement("p",null,this.props.label,": ",this.state.count))}}]),t}(i.a.Component)),ke=function(e){var t=Math.floor(100*Math.random()%e.length);return e.splice(t,1)[0]},Le=function(){return{getRandomPieceName:ke}},_e=U(),Ne=Le(),We=function(e){var t=160,n=160;return(e.width>3||e.height>3)&&(t=120,n=120),{width:t,height:n}},Me=10*W.GRID_SIZE_LV2.width,ze=10*W.GRID_SIZE_LV2.height,Te={width:"".concat(W.GRID_SIZE_LV2.width*We(W.GRID_SIZE_LV2).width+Me,"px"),height:"".concat(W.GRID_SIZE_LV2.height*We(W.GRID_SIZE_LV2).height+ze,"px"),gridTemplateColumns:"repeat(".concat(W.GRID_SIZE_LV2.width,", ").concat(We(W.GRID_SIZE_LV2).width,"px)"),gridTemplateRows:"repeat(".concat(W.GRID_SIZE_LV2.height,", ").concat(We(W.GRID_SIZE_LV2).height,"px)"),gridGap:"".concat(10,"px"),border:"1px solid wheat"},Ge=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).emptySlotBg="rgba(255, 255, 255, 0.3)",n.slotBg="rgba(255, 255, 255, 1)",n.hoveredSlotBg="rgba(255, 255, 255, .6)",n._isMounted=!1,n.isWin=!1,n.subscribeWinning=function(e){n.isWin=n.props.isWin,e(n.isWin)},n.getEmittedTime=function(e){console.log("get time");var t={playedTime:e,playerName:"Unknown player",level:n.props.gameLevel.level};n.props.setWinningInfo(t)},n.getMoveCount=n.getMoveCount.bind(Object(O.a)(n)),n.getMatchedPairs=n.getMatchedPairs.bind(Object(O.a)(n)),n.gameSettings={emptySlotQuantity:e.gameLevel.emptySlotQuantity,arraySize:e.gameLevel.arraySize},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!!e.isUpdated}},{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){this.props.restartGame()}},{key:"createGridSlots",value:function(){for(var e=[],t=W.GRID_SIZE_LV2.height*W.GRID_SIZE_LV2.width,n=_e.getPieceIdSet(t),a=["A","A","B","B","C","C","D","D","E","E","F","F","G","G","H","H"],r=0;r<t;r++){var o=Ne.getRandomPieceName(a),c=_e.getRandomPieceId(n);e.push(i.a.createElement(Ie,{id:r,key:r,pieceId:c,name:o}))}return e}},{key:"getMoveCount",value:function(e){e(this.props.moveCount)}},{key:"getMatchedPairs",value:function(e){e(this.props.matchedPairs)}},{key:"render",value:function(){var e=this.createGridSlots(this.gameSettings.emptySlotQuantity);return i.a.createElement("div",{className:"component-wrapper card-wrapper"},i.a.createElement("div",{className:"card-grid",style:Te},e.map((function(e){return e}))),i.a.createElement(we,{className:"text-pos",label:"Moves",updateCount:this.getMoveCount,count:this.props.moveCount}),i.a.createElement(we,{className:"text-pos-2",label:"Matches",updateCount:this.getMatchedPairs,count:this.props.matchedPairs}))}}]),t}(i.a.Component);Ge.propsType={broadcastWinning:C.a.func.isRequired,restartGame:C.a.func.isRequired,setWinningInfo:C.a.func.isRequired};var De=Object(m.b)((function(e){return{isUpdated:!1,isWin:e.card.isWin,gameLevel:e.card.gameLevel,moveCount:e.card.moveCount,matchedPairs:e.card.matchedPairs}}),{broadcastWinning:ye,restartGame:function(){return function(e){e({type:"restartGame",isWin:!1,moveCount:0,matchedPairs:0})}},setWinningInfo:Ee})(Ge),Re=(n(95),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"component-wrapper"},i.a.createElement("ul",{className:"card-menu"},i.a.createElement("li",null,i.a.createElement(E.b,{to:"/card/game"},"Start Game")),i.a.createElement("li",null,i.a.createElement(E.b,{to:"/card/score-board"},"Score Board")),i.a.createElement("li",null,i.a.createElement(E.b,{to:"/card/setting"},"Setting"))))}}]),t}(i.a.Component)),Pe=(n(96),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).change=function(e){n.props.changeGameLevel(e.target.value)},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"component-wrapper"},i.a.createElement("ul",{className:"card-setting"},i.a.createElement("div",{className:"setting-option-wrapper"},i.a.createElement("label",{htmlFor:"level",style:{marginRight:"10px"}},"Game Level:"),i.a.createElement("select",{name:"level",id:"level",onChange:this.change,value:this.props.level},i.a.createElement("option",{value:"Normal"},"Normal"),i.a.createElement("option",{value:"Hard"},"Hard"),i.a.createElement("option",{value:"Nightmare"},"Nightmare"))),i.a.createElement("li",null,i.a.createElement(E.b,{to:"/card"},"Back"))))}}]),t}(i.a.Component));Pe.propsType={changeGameLevel:C.a.func.isRequired};var Ae=Object(m.b)((function(e){return{isUpdated:!1,level:e.card.gameLevel.level}}),{changeGameLevel:function(e){return function(t){t({type:"changeGameLevel",level:e})}}})(Pe),xe=(n(97),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).state={winningInfo:{}},e.getWinningInfo=e.getWinningInfo.bind(Object(O.a)(e)),e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.getWinningInfo()}},{key:"getWinningInfo",value:function(){this.props.fetchScores()}},{key:"render",value:function(){var e=this.props.winningInfo,t=null;return e.length>0&&(t=e.map((function(t){var n=e.indexOf(t),a=t.winningInfo;return i.a.createElement("p",{key:n},n+1,". ",a.playerName,": ",+a.moves," moves (",a.level,")")}))),i.a.createElement("div",{className:"component-wrapper"},i.a.createElement("ul",{className:"card-menu"},t,i.a.createElement("li",null,i.a.createElement(E.b,{to:"/card"},"Back"))))}}]),t}(i.a.Component)),Ue=Object(m.b)((function(e){return{isUpdated:!1,winningInfo:e.card.winningInfo}}),{fetchScores:function(){return function(){var e=Object(he.a)(me.a.mark((function e(t){return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ge(be.CARD_API_URL,"card-score","GET",null).then((function(e){var n=e.data.sort((function(e,t){return e.winningInfo.moves-t.winningInfo.moves}));t({type:"saveScores",winningInfo:n})})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(xe),Be=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"component-wrapper"},i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement(y.d,null,i.a.createElement(y.b,{path:"/card",exact:!0,component:Re}),i.a.createElement(y.b,{path:"/card/game",exact:!0,component:De}),i.a.createElement(y.b,{path:"/card/setting",exact:!0,component:Ae}),i.a.createElement(y.b,{path:"/card/score-board",exact:!0,component:Ue})))))}}]),t}(i.a.Component),Ve=function(){return i.a.createElement(y.b,{path:"/card",component:Be})},Ze=[f],qe=function(){return i.a.createElement(E.a,{history:b},i.a.createElement(w,null),i.a.createElement(g.a,{guards:Ze,loading:"Loading..."},i.a.createElement(y.d,null,ae(),oe(),te(),Ve(),ue())))},He=n(44),Qe=n(11),Fe={isLoggedIn:d()},Ye={isWin:!1,gameLevel:{level:"Normal",emptySlotQuantity:2,arraySize:3},winningInfo:[]},Xe=function(e){switch(e){case"Easy":return{level:e,emptySlotQuantity:3,arraySize:3};case"Normal":return{level:e,emptySlotQuantity:2,arraySize:3};case"Hard":return{level:e,emptySlotQuantity:1,arraySize:3};default:return{level:2,emptySlotQuantity:2,arraySize:3}}},Je={moveCount:0,matchedPairs:0,isWaiting:!1,isWin:!1,gameLevel:{level:"Hard",arraySize:4,shiftCase:Ke(2)},winningInfo:[]};function $e(e){switch(e){case"Normal":return{level:e,arraySize:4};case"Hard":return{level:e,arraySize:4,shiftCase:Ke(2)};case"Nightmare":return{level:e,arraySize:4,toggle:!1,unsuccessfulMoves:0};default:return{level:"Normal",arraySize:4}}}function Ke(e){return Math.floor(Math.random()*Math.floor(e))+1}var et=Object(S.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login":case"logout":return Object(Qe.a)({},e,{isLoggedIn:t.isLoggedIn});default:return e}},puzzle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"broadcastWinning":return Object(Qe.a)({},e,{isWin:t.isWin});case"changeGameLevel":return Object(Qe.a)({},e,{gameLevel:Xe(t.level)});case"setWinningInfo":return console.log(e.winningInfo),console.log(t.winningInfo),Object(Qe.a)({},e,{winningInfo:[].concat(Object(le.a)(e.winningInfo),[t.winningInfo])});default:return e}},card:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"broadcastWinning":return Object(Qe.a)({},e,{isWin:t.isWin});case"changeGameLevel":return Object(Qe.a)({},e,{gameLevel:$e(t.level)});case"setWinningInfo":return Object(Qe.a)({},e,{winningInfo:[].concat(Object(le.a)(e.winningInfo),[t.winningInfo])});case"increaseMoveCount":return Object(Qe.a)({},e,{moveCount:t.moveCount});case"setWait":return Object(Qe.a)({},e,{isWaiting:t.isWaiting});case"alterMatchedPairCount":return Object(Qe.a)({},e,{matchedPairs:t.matchedPairs});case"restartGame":return Object(Qe.a)({},e,{isWin:t.isWin,moveCount:t.moveCount,matchedPairs:t.matchedPairs});case"saveScores":return Object(Qe.a)({},e,{winningInfo:t.winningInfo});case"toggleShiftMode":return Object(Qe.a)({},e,{gameLevel:{level:e.gameLevel.level,arraySize:e.gameLevel.arraySize,toggle:t.toggle,unsuccessfulMoves:e.gameLevel.unsuccessfulMoves}});case"alterUnsuccessfulMoveCount":return Object(Qe.a)({},e,{gameLevel:{level:e.gameLevel.level,arraySize:e.gameLevel.arraySize,toggle:e.gameLevel.toggle,unsuccessfulMoves:t.unsuccessfulMoves}});default:return e}}}),tt=[He.a],nt=(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Object(S.e)(et,{},Object(S.d)(S.a.apply(void 0,tt)))),at=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"component-wrapper"},i.a.createElement(m.a,{store:nt},i.a.createElement(qe,null)))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(at,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.1a676a52.chunk.js.map