function _handleNative$$module$third_party$javascript$polymer$v2$polymer$lib$utils$gestures(a) {
  var b = a.type, c = a.currentTarget.__polymerGestures; if (c && (c = c[b])) {
    if (!a.__polymerGesturesHandled && (a.__polymerGesturesHandled = {}, "touch" === b.slice(0, 5))) { var d = a.changedTouches[0]; "touchstart" === b && 1 === a.touches.length && (eua = d.identifier); if (eua !== d.identifier) return; ZK || ("touchstart" === b || "touchmove" === b) && _handleTouchAction$$module$third_party$javascript$polymer$v2$polymer$lib$utils$gestures(a) } d = a.__polymerGesturesHandled;
    if (!d.skip) { for (var e = 0, g; e < kL.length; e++)g = kL[e], c[g.name] && !d[g.name] && g.flow && -1 < g.flow.start.indexOf(a.type) && g.reset && g.reset(); for (e = 0; e < kL.length; e++)g = kL[e], c[g.name] && !d[g.name] && (d[g.name] = !0, g[b](a)) }
  }
}


xk.prototype.reset=function(){this.next=this.scope=this.fn=null};
var Ck=function(a,b){zk||zca();Ak||(zk(),Ak=!0);Bk.add(a,b)},zk,zca=function()
{if(q.Promise&&q.Promise.resolve) {
  var a=q.Promise.resolve(void 0);
  zk = function () { a.then(Dk) }
} else 
  zk = function () { vk(Dk) }
}, Ak = !1, Bk = new wk, Dk = function () { for (var a; a = Bk.remove();) { try { a.fn.call(a.scope) } catch (b) { tk(b) } yk.put(a) } Ak = !1 }; var Aca = function () { this.blockSize = -1 }; var Ek = function () { this.blockSize = -1; this.blockSize = 64; this.chain_ = []; this.buf_ = []; this.W_ = []; this.pad_ = []; this.pad_[0] = 128; for (var a = 1; a < this.blockSize; ++a)this.pad_[a] = 0; this.total_ = this.inbuf_ = 0; this.reset() };