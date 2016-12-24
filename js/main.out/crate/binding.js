// Compiled by ClojureScript 1.9.293 {}
goog.provide('crate.binding');
goog.require('cljs.core');
goog.require('clojure.set');

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
crate.binding.SubAtom = (function (atm,path,prevhash,watches,key){
this.atm = atm;
this.path = path;
this.prevhash = prevhash;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.SubAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

crate.binding.SubAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path);
});

crate.binding.SubAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#<SubAtom: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path))),cljs.core.str(">")].join(''));
});

crate.binding.SubAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__8272 = cljs.core.seq.call(null,self__.watches);
var chunk__8273 = null;
var count__8274 = (0);
var i__8275 = (0);
while(true){
if((i__8275 < count__8274)){
var vec__8276 = cljs.core._nth.call(null,chunk__8273,i__8275);
var key__$1 = cljs.core.nth.call(null,vec__8276,(0),null);
var f = cljs.core.nth.call(null,vec__8276,(1),null);
f.call(null,key__$1,this$__$1,oldval,newval);

var G__8282 = seq__8272;
var G__8283 = chunk__8273;
var G__8284 = count__8274;
var G__8285 = (i__8275 + (1));
seq__8272 = G__8282;
chunk__8273 = G__8283;
count__8274 = G__8284;
i__8275 = G__8285;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8272);
if(temp__4657__auto__){
var seq__8272__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8272__$1)){
var c__7752__auto__ = cljs.core.chunk_first.call(null,seq__8272__$1);
var G__8286 = cljs.core.chunk_rest.call(null,seq__8272__$1);
var G__8287 = c__7752__auto__;
var G__8288 = cljs.core.count.call(null,c__7752__auto__);
var G__8289 = (0);
seq__8272 = G__8286;
chunk__8273 = G__8287;
count__8274 = G__8288;
i__8275 = G__8289;
continue;
} else {
var vec__8279 = cljs.core.first.call(null,seq__8272__$1);
var key__$1 = cljs.core.nth.call(null,vec__8279,(0),null);
var f = cljs.core.nth.call(null,vec__8279,(1),null);
f.call(null,key__$1,this$__$1,oldval,newval);

var G__8290 = cljs.core.next.call(null,seq__8272__$1);
var G__8291 = null;
var G__8292 = (0);
var G__8293 = (0);
seq__8272 = G__8290;
chunk__8273 = G__8291;
count__8274 = G__8292;
i__8275 = G__8293;
continue;
}
} else {
return null;
}
}
break;
}
});

crate.binding.SubAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(f)){
return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else {
return null;
}
});

crate.binding.SubAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});

crate.binding.SubAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

crate.binding.SubAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atm","atm",-1963551835,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"prevhash","prevhash",1446045952,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"key","key",124488940,null)], null);
});

crate.binding.SubAtom.cljs$lang$type = true;

crate.binding.SubAtom.cljs$lang$ctorStr = "crate.binding/SubAtom";

crate.binding.SubAtom.cljs$lang$ctorPrWriter = (function (this__7544__auto__,writer__7545__auto__,opt__7546__auto__){
return cljs.core._write.call(null,writer__7545__auto__,"crate.binding/SubAtom");
});

crate.binding.__GT_SubAtom = (function crate$binding$__GT_SubAtom(atm,path,prevhash,watches,key){
return (new crate.binding.SubAtom(atm,path,prevhash,watches,key));
});

crate.binding.subatom = (function crate$binding$subatom(atm,path){
var path__$1 = ((cljs.core.coll_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var vec__8297 = (((atm instanceof crate.binding.SubAtom))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm.atm,cljs.core.concat.call(null,atm.path,path__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path__$1], null));
var atm__$1 = cljs.core.nth.call(null,vec__8297,(0),null);
var path__$2 = cljs.core.nth.call(null,vec__8297,(1),null);
var k = cljs.core.gensym.call(null,"subatom");
var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,atm__$1),path__$2)),null,k));
cljs.core.add_watch.call(null,atm__$1,k,((function (path__$1,vec__8297,atm__$1,path__$2,k,sa){
return (function (_,___$1,ov,nv){
var latest = cljs.core.get_in.call(null,nv,path__$2);
var prev = cljs.core.get_in.call(null,ov,path__$2);
var latest_hash = cljs.core.hash.call(null,latest);
if((cljs.core.not_EQ_.call(null,sa.prevhash,latest_hash)) && (cljs.core.not_EQ_.call(null,prev,latest))){
sa.prevhash = latest_hash;

return cljs.core._notify_watches.call(null,sa,cljs.core.get_in.call(null,ov,path__$2),latest);
} else {
return null;
}
});})(path__$1,vec__8297,atm__$1,path__$2,k,sa))
);

return sa;
});
/**
 * Sets the value of atom to newval without regard for the
 *   current value. Returns newval.
 */
crate.binding.sub_reset_BANG_ = (function crate$binding$sub_reset_BANG_(sa,new_value){
cljs.core.swap_BANG_.call(null,sa.atm,cljs.core.assoc_in,sa.path,new_value);

return new_value;
});
/**
 * Atomically swaps the value of atom to be:
 *   (apply f current-value-of-atom args). Note that f may be called
 *   multiple times, and thus should be free of side effects.  Returns
 *   the value that was swapped in.
 */
crate.binding.sub_swap_BANG_ = (function crate$binding$sub_swap_BANG_(var_args){
var args8300 = [];
var len__8046__auto___8309 = arguments.length;
var i__8047__auto___8310 = (0);
while(true){
if((i__8047__auto___8310 < len__8046__auto___8309)){
args8300.push((arguments[i__8047__auto___8310]));

var G__8311 = (i__8047__auto___8310 + (1));
i__8047__auto___8310 = G__8311;
continue;
} else {
}
break;
}

var G__8308 = args8300.length;
switch (G__8308) {
case 2:
return crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__8065__auto__ = (new cljs.core.IndexedSeq(args8300.slice((5)),(0),null));
return crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__8065__auto__);

}
});

crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (sa,f){
return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa)));
});

crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (sa,f,x){
return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x));
});

crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (sa,f,x,y){
return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y));
});

crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (sa,f,x,y,z){
return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y,z));
});

crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (sa,f,x,y,z,more){
return crate.binding.sub_reset_BANG_.call(null,sa,cljs.core.apply.call(null,f,cljs.core.deref.call(null,sa),x,y,z,more));
});

crate.binding.sub_swap_BANG_.cljs$lang$applyTo = (function (seq8301){
var G__8302 = cljs.core.first.call(null,seq8301);
var seq8301__$1 = cljs.core.next.call(null,seq8301);
var G__8303 = cljs.core.first.call(null,seq8301__$1);
var seq8301__$2 = cljs.core.next.call(null,seq8301__$1);
var G__8304 = cljs.core.first.call(null,seq8301__$2);
var seq8301__$3 = cljs.core.next.call(null,seq8301__$2);
var G__8305 = cljs.core.first.call(null,seq8301__$3);
var seq8301__$4 = cljs.core.next.call(null,seq8301__$3);
var G__8306 = cljs.core.first.call(null,seq8301__$4);
var seq8301__$5 = cljs.core.next.call(null,seq8301__$4);
return crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8302,G__8303,G__8304,G__8305,G__8306,seq8301__$5);
});

crate.binding.sub_swap_BANG_.cljs$lang$maxFixedArity = (5);

crate.binding.sub_destroy_BANG_ = (function crate$binding$sub_destroy_BANG_(sa){
cljs.core.remove_watch.call(null,sa.atm,sa.key);

sa.watches = null;

return sa.atm = null;
});

/**
 * @interface
 */
crate.binding.computable = function(){};

/**
 * compute the latest value
 */
crate.binding._compute = (function crate$binding$_compute(this$){
if((!((this$ == null))) && (!((this$.crate$binding$computable$_compute$arity$1 == null)))){
return this$.crate$binding$computable$_compute$arity$1(this$);
} else {
var x__7601__auto__ = (((this$ == null))?null:this$);
var m__7602__auto__ = (crate.binding._compute[goog.typeOf(x__7601__auto__)]);
if(!((m__7602__auto__ == null))){
return m__7602__auto__.call(null,this$);
} else {
var m__7602__auto____$1 = (crate.binding._compute["_"]);
if(!((m__7602__auto____$1 == null))){
return m__7602__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"computable.-compute",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {crate.binding.computable}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
crate.binding.Computed = (function (atms,value,func,watches,key){
this.atms = atms;
this.value = value;
this.func = func;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.Computed.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

crate.binding.Computed.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

crate.binding.Computed.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#<Computed: "),cljs.core.str(cljs.core.pr_str.call(null,self__.value)),cljs.core.str(">")].join(''));
});

crate.binding.Computed.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__8313 = cljs.core.seq.call(null,self__.watches);
var chunk__8314 = null;
var count__8315 = (0);
var i__8316 = (0);
while(true){
if((i__8316 < count__8315)){
var vec__8317 = cljs.core._nth.call(null,chunk__8314,i__8316);
var key__$1 = cljs.core.nth.call(null,vec__8317,(0),null);
var f = cljs.core.nth.call(null,vec__8317,(1),null);
f.call(null,key__$1,this$__$1,oldval,newval);

var G__8323 = seq__8313;
var G__8324 = chunk__8314;
var G__8325 = count__8315;
var G__8326 = (i__8316 + (1));
seq__8313 = G__8323;
chunk__8314 = G__8324;
count__8315 = G__8325;
i__8316 = G__8326;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8313);
if(temp__4657__auto__){
var seq__8313__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8313__$1)){
var c__7752__auto__ = cljs.core.chunk_first.call(null,seq__8313__$1);
var G__8327 = cljs.core.chunk_rest.call(null,seq__8313__$1);
var G__8328 = c__7752__auto__;
var G__8329 = cljs.core.count.call(null,c__7752__auto__);
var G__8330 = (0);
seq__8313 = G__8327;
chunk__8314 = G__8328;
count__8315 = G__8329;
i__8316 = G__8330;
continue;
} else {
var vec__8320 = cljs.core.first.call(null,seq__8313__$1);
var key__$1 = cljs.core.nth.call(null,vec__8320,(0),null);
var f = cljs.core.nth.call(null,vec__8320,(1),null);
f.call(null,key__$1,this$__$1,oldval,newval);

var G__8331 = cljs.core.next.call(null,seq__8313__$1);
var G__8332 = null;
var G__8333 = (0);
var G__8334 = (0);
seq__8313 = G__8331;
chunk__8314 = G__8332;
count__8315 = G__8333;
i__8316 = G__8334;
continue;
}
} else {
return null;
}
}
break;
}
});

crate.binding.Computed.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(f)){
return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else {
return null;
}
});

crate.binding.Computed.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});

crate.binding.Computed.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

crate.binding.Computed.prototype.crate$binding$computable$ = cljs.core.PROTOCOL_SENTINEL;

crate.binding.Computed.prototype.crate$binding$computable$_compute$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var old = this$__$1.value;
this$__$1.value = cljs.core.apply.call(null,self__.func,cljs.core.map.call(null,cljs.core.deref,self__.atms));

return cljs.core._notify_watches.call(null,this$__$1,old,this$__$1.value);
});

crate.binding.Computed.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atms","atms",-855465715,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"key","key",124488940,null)], null);
});

crate.binding.Computed.cljs$lang$type = true;

crate.binding.Computed.cljs$lang$ctorStr = "crate.binding/Computed";

crate.binding.Computed.cljs$lang$ctorPrWriter = (function (this__7544__auto__,writer__7545__auto__,opt__7546__auto__){
return cljs.core._write.call(null,writer__7545__auto__,"crate.binding/Computed");
});

crate.binding.__GT_Computed = (function crate$binding$__GT_Computed(atms,value,func,watches,key){
return (new crate.binding.Computed(atms,value,func,watches,key));
});

crate.binding.computed = (function crate$binding$computed(atms,func){
var k = cljs.core.gensym.call(null,"computed");
var neue = (new crate.binding.Computed(atms,null,func,null,k));
crate.binding._compute.call(null,neue);

var seq__8339_8343 = cljs.core.seq.call(null,atms);
var chunk__8340_8344 = null;
var count__8341_8345 = (0);
var i__8342_8346 = (0);
while(true){
if((i__8342_8346 < count__8341_8345)){
var atm_8347 = cljs.core._nth.call(null,chunk__8340_8344,i__8342_8346);
cljs.core.add_watch.call(null,atm_8347,k,((function (seq__8339_8343,chunk__8340_8344,count__8341_8345,i__8342_8346,atm_8347,k,neue){
return (function (_,___$1,___$2,___$3){
return crate.binding._compute.call(null,neue);
});})(seq__8339_8343,chunk__8340_8344,count__8341_8345,i__8342_8346,atm_8347,k,neue))
);

var G__8348 = seq__8339_8343;
var G__8349 = chunk__8340_8344;
var G__8350 = count__8341_8345;
var G__8351 = (i__8342_8346 + (1));
seq__8339_8343 = G__8348;
chunk__8340_8344 = G__8349;
count__8341_8345 = G__8350;
i__8342_8346 = G__8351;
continue;
} else {
var temp__4657__auto___8352 = cljs.core.seq.call(null,seq__8339_8343);
if(temp__4657__auto___8352){
var seq__8339_8353__$1 = temp__4657__auto___8352;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8339_8353__$1)){
var c__7752__auto___8354 = cljs.core.chunk_first.call(null,seq__8339_8353__$1);
var G__8355 = cljs.core.chunk_rest.call(null,seq__8339_8353__$1);
var G__8356 = c__7752__auto___8354;
var G__8357 = cljs.core.count.call(null,c__7752__auto___8354);
var G__8358 = (0);
seq__8339_8343 = G__8355;
chunk__8340_8344 = G__8356;
count__8341_8345 = G__8357;
i__8342_8346 = G__8358;
continue;
} else {
var atm_8359 = cljs.core.first.call(null,seq__8339_8353__$1);
cljs.core.add_watch.call(null,atm_8359,k,((function (seq__8339_8343,chunk__8340_8344,count__8341_8345,i__8342_8346,atm_8359,seq__8339_8353__$1,temp__4657__auto___8352,k,neue){
return (function (_,___$1,___$2,___$3){
return crate.binding._compute.call(null,neue);
});})(seq__8339_8343,chunk__8340_8344,count__8341_8345,i__8342_8346,atm_8359,seq__8339_8353__$1,temp__4657__auto___8352,k,neue))
);

var G__8360 = cljs.core.next.call(null,seq__8339_8353__$1);
var G__8361 = null;
var G__8362 = (0);
var G__8363 = (0);
seq__8339_8343 = G__8360;
chunk__8340_8344 = G__8361;
count__8341_8345 = G__8362;
i__8342_8346 = G__8363;
continue;
}
} else {
}
}
break;
}

return neue;
});
crate.binding.z = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
crate.binding.y = crate.binding.computed.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.z], null),(function (z){
return cljs.core.filter.call(null,cljs.core.even_QMARK_,z);
}));
crate.binding.r = crate.binding.computed.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.y], null),(function (y){
return cljs.core.filter.call(null,(function (p1__8364_SHARP_){
return (p1__8364_SHARP_ > (100));
}),y);
}));
cljs.core.swap_BANG_.call(null,crate.binding.z,cljs.core.conj,(1340));
cljs.core.deref.call(null,crate.binding.y);
cljs.core.deref.call(null,crate.binding.r);
crate.binding.notify = (function crate$binding$notify(w,o,v){
return cljs.core._notify_watches.call(null,w,o,v);
});

/**
 * @interface
 */
crate.binding.bindable_coll = function(){};


/**
 * @interface
 */
crate.binding.bindable = function(){};

/**
 * get the current value of this binding
 */
crate.binding._value = (function crate$binding$_value(this$){
if((!((this$ == null))) && (!((this$.crate$binding$bindable$_value$arity$1 == null)))){
return this$.crate$binding$bindable$_value$arity$1(this$);
} else {
var x__7601__auto__ = (((this$ == null))?null:this$);
var m__7602__auto__ = (crate.binding._value[goog.typeOf(x__7601__auto__)]);
if(!((m__7602__auto__ == null))){
return m__7602__auto__.call(null,this$);
} else {
var m__7602__auto____$1 = (crate.binding._value["_"]);
if(!((m__7602__auto____$1 == null))){
return m__7602__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"bindable.-value",this$);
}
}
}
});

/**
 * On change of this binding execute func
 */
crate.binding._on_change = (function crate$binding$_on_change(this$,func){
if((!((this$ == null))) && (!((this$.crate$binding$bindable$_on_change$arity$2 == null)))){
return this$.crate$binding$bindable$_on_change$arity$2(this$,func);
} else {
var x__7601__auto__ = (((this$ == null))?null:this$);
var m__7602__auto__ = (crate.binding._on_change[goog.typeOf(x__7601__auto__)]);
if(!((m__7602__auto__ == null))){
return m__7602__auto__.call(null,this$,func);
} else {
var m__7602__auto____$1 = (crate.binding._on_change["_"]);
if(!((m__7602__auto____$1 == null))){
return m__7602__auto____$1.call(null,this$,func);
} else {
throw cljs.core.missing_protocol.call(null,"bindable.-on-change",this$);
}
}
}
});


/**
* @constructor
 * @implements {crate.binding.bindable}
*/
crate.binding.atom_binding = (function (atm,value_func){
this.atm = atm;
this.value_func = value_func;
})
crate.binding.atom_binding.prototype.crate$binding$bindable$ = cljs.core.PROTOCOL_SENTINEL;

crate.binding.atom_binding.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.value_func.call(null,cljs.core.deref.call(null,self__.atm));
});

crate.binding.atom_binding.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){
var self__ = this;
var this$__$1 = this;
return cljs.core.add_watch.call(null,self__.atm,cljs.core.gensym.call(null,"atom-binding"),((function (this$__$1){
return (function (){
return func.call(null,crate.binding._value.call(null,this$__$1));
});})(this$__$1))
);
});

crate.binding.atom_binding.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atm","atm",-1963551835,null),new cljs.core.Symbol(null,"value-func","value-func",2077951825,null)], null);
});

crate.binding.atom_binding.cljs$lang$type = true;

crate.binding.atom_binding.cljs$lang$ctorStr = "crate.binding/atom-binding";

crate.binding.atom_binding.cljs$lang$ctorPrWriter = (function (this__7544__auto__,writer__7545__auto__,opt__7546__auto__){
return cljs.core._write.call(null,writer__7545__auto__,"crate.binding/atom-binding");
});

crate.binding.__GT_atom_binding = (function crate$binding$__GT_atom_binding(atm,value_func){
return (new crate.binding.atom_binding(atm,value_func));
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
*/
crate.binding.notifier = (function (watches){
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 2;
this.cljs$lang$protocol_mask$partition0$ = 0;
})
crate.binding.notifier.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__8365 = cljs.core.seq.call(null,self__.watches);
var chunk__8366 = null;
var count__8367 = (0);
var i__8368 = (0);
while(true){
if((i__8368 < count__8367)){
var vec__8369 = cljs.core._nth.call(null,chunk__8366,i__8368);
var key = cljs.core.nth.call(null,vec__8369,(0),null);
var f = cljs.core.nth.call(null,vec__8369,(1),null);
f.call(null,key,this$__$1,oldval,newval);

var G__8375 = seq__8365;
var G__8376 = chunk__8366;
var G__8377 = count__8367;
var G__8378 = (i__8368 + (1));
seq__8365 = G__8375;
chunk__8366 = G__8376;
count__8367 = G__8377;
i__8368 = G__8378;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8365);
if(temp__4657__auto__){
var seq__8365__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8365__$1)){
var c__7752__auto__ = cljs.core.chunk_first.call(null,seq__8365__$1);
var G__8379 = cljs.core.chunk_rest.call(null,seq__8365__$1);
var G__8380 = c__7752__auto__;
var G__8381 = cljs.core.count.call(null,c__7752__auto__);
var G__8382 = (0);
seq__8365 = G__8379;
chunk__8366 = G__8380;
count__8367 = G__8381;
i__8368 = G__8382;
continue;
} else {
var vec__8372 = cljs.core.first.call(null,seq__8365__$1);
var key = cljs.core.nth.call(null,vec__8372,(0),null);
var f = cljs.core.nth.call(null,vec__8372,(1),null);
f.call(null,key,this$__$1,oldval,newval);

var G__8383 = cljs.core.next.call(null,seq__8365__$1);
var G__8384 = null;
var G__8385 = (0);
var G__8386 = (0);
seq__8365 = G__8383;
chunk__8366 = G__8384;
count__8367 = G__8385;
i__8368 = G__8386;
continue;
}
} else {
return null;
}
}
break;
}
});

crate.binding.notifier.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});

crate.binding.notifier.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});

crate.binding.notifier.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"watches","watches",1367433992,null)], null);
});

crate.binding.notifier.cljs$lang$type = true;

crate.binding.notifier.cljs$lang$ctorStr = "crate.binding/notifier";

crate.binding.notifier.cljs$lang$ctorPrWriter = (function (this__7544__auto__,writer__7545__auto__,opt__7546__auto__){
return cljs.core._write.call(null,writer__7545__auto__,"crate.binding/notifier");
});

crate.binding.__GT_notifier = (function crate$binding$__GT_notifier(watches){
return (new crate.binding.notifier(watches));
});


/**
* @constructor
 * @implements {crate.binding.bindable}
 * @implements {crate.binding.bindable_coll}
*/
crate.binding.bound_collection = (function (atm,notif,opts,stuff){
this.atm = atm;
this.notif = notif;
this.opts = opts;
this.stuff = stuff;
})
crate.binding.bound_collection.prototype.crate$binding$bindable_coll$ = cljs.core.PROTOCOL_SENTINEL;

crate.binding.bound_collection.prototype.crate$binding$bindable$ = cljs.core.PROTOCOL_SENTINEL;

crate.binding.bound_collection.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.map.call(null,new cljs.core.Keyword(null,"elem","elem",618631056),cljs.core.vals.call(null,this$__$1.stuff));
});

crate.binding.bound_collection.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){
var self__ = this;
var this$__$1 = this;
return cljs.core.add_watch.call(null,self__.notif,cljs.core.gensym.call(null,"bound-coll"),((function (this$__$1){
return (function (_,___$1,___$2,p__8387){
var vec__8388 = p__8387;
var event = cljs.core.nth.call(null,vec__8388,(0),null);
var el = cljs.core.nth.call(null,vec__8388,(1),null);
var v = cljs.core.nth.call(null,vec__8388,(2),null);
return func.call(null,event,el,v);
});})(this$__$1))
);
});

crate.binding.bound_collection.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atm","atm",-1963551835,null),new cljs.core.Symbol(null,"notif","notif",-1551848296,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"stuff","stuff",-411032116,null)], null);
});

crate.binding.bound_collection.cljs$lang$type = true;

crate.binding.bound_collection.cljs$lang$ctorStr = "crate.binding/bound-collection";

crate.binding.bound_collection.cljs$lang$ctorPrWriter = (function (this__7544__auto__,writer__7545__auto__,opt__7546__auto__){
return cljs.core._write.call(null,writer__7545__auto__,"crate.binding/bound-collection");
});

crate.binding.__GT_bound_collection = (function crate$binding$__GT_bound_collection(atm,notif,opts,stuff){
return (new crate.binding.bound_collection(atm,notif,opts,stuff));
});

crate.binding.opt = (function crate$binding$opt(bc,k){
return bc.opts.call(null,k);
});
crate.binding.bc_add = (function crate$binding$bc_add(bc,path,key){
var sa = crate.binding.subatom.call(null,bc.atm,path);
var elem = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"as","as",1148689641)).call(null,sa);
bc.stuff = cljs.core.assoc.call(null,bc.stuff,key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",618631056),elem,new cljs.core.Keyword(null,"subatom","subatom",-95454370),sa], null));

return crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add","add",235287739),elem,cljs.core.deref.call(null,sa)], null));
});
crate.binding.bc_remove = (function crate$binding$bc_remove(bc,key){
var notif = bc.notif;
var prev = bc.stuff.call(null,key);
bc.stuff = cljs.core.dissoc.call(null,bc.stuff,key);

crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(prev),null], null));

return crate.binding.sub_destroy_BANG_.call(null,new cljs.core.Keyword(null,"subatom","subatom",-95454370).cljs$core$IFn$_invoke$arity$1(prev));
});
crate.binding.__GT_indexed = (function crate$binding$__GT_indexed(coll){
if(cljs.core.map_QMARK_.call(null,coll)){
return cljs.core.seq.call(null,coll);
} else {
if(cljs.core.set_QMARK_.call(null,coll)){
return cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.identity),coll);
} else {
return cljs.core.map_indexed.call(null,cljs.core.vector,coll);

}
}
});
crate.binding.__GT_keyed = (function crate$binding$__GT_keyed(coll,keyfn){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,keyfn,crate.binding.__GT_indexed.call(null,coll)));
});
crate.binding.__GT_path = (function crate$binding$__GT_path(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8393 = arguments.length;
var i__8047__auto___8394 = (0);
while(true){
if((i__8047__auto___8394 < len__8046__auto___8393)){
args__8053__auto__.push((arguments[i__8047__auto___8394]));

var G__8395 = (i__8047__auto___8394 + (1));
i__8047__auto___8394 = G__8395;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((1) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((1)),(0),null)):null);
return crate.binding.__GT_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8054__auto__);
});

crate.binding.__GT_path.cljs$core$IFn$_invoke$arity$variadic = (function (bc,segs){
return cljs.core.concat.call(null,(function (){var or__6938__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_(or__6938__auto__)){
return or__6938__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),segs);
});

crate.binding.__GT_path.cljs$lang$maxFixedArity = (1);

crate.binding.__GT_path.cljs$lang$applyTo = (function (seq8391){
var G__8392 = cljs.core.first.call(null,seq8391);
var seq8391__$1 = cljs.core.next.call(null,seq8391);
return crate.binding.__GT_path.cljs$core$IFn$_invoke$arity$variadic(G__8392,seq8391__$1);
});

crate.binding.bc_compare = (function crate$binding$bc_compare(bc,neue){
var prev = bc.stuff;
var pset = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,prev));
var nset = crate.binding.__GT_keyed.call(null,neue,crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"keyfn","keyfn",780060332)));
var added = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,nset,pset));
var removed = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,pset,nset));
var seq__8404_8412 = cljs.core.seq.call(null,added);
var chunk__8405_8413 = null;
var count__8406_8414 = (0);
var i__8407_8415 = (0);
while(true){
if((i__8407_8415 < count__8406_8414)){
var a_8416 = cljs.core._nth.call(null,chunk__8405_8413,i__8407_8415);
crate.binding.bc_add.call(null,bc,a_8416,a_8416);

var G__8417 = seq__8404_8412;
var G__8418 = chunk__8405_8413;
var G__8419 = count__8406_8414;
var G__8420 = (i__8407_8415 + (1));
seq__8404_8412 = G__8417;
chunk__8405_8413 = G__8418;
count__8406_8414 = G__8419;
i__8407_8415 = G__8420;
continue;
} else {
var temp__4657__auto___8421 = cljs.core.seq.call(null,seq__8404_8412);
if(temp__4657__auto___8421){
var seq__8404_8422__$1 = temp__4657__auto___8421;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8404_8422__$1)){
var c__7752__auto___8423 = cljs.core.chunk_first.call(null,seq__8404_8422__$1);
var G__8424 = cljs.core.chunk_rest.call(null,seq__8404_8422__$1);
var G__8425 = c__7752__auto___8423;
var G__8426 = cljs.core.count.call(null,c__7752__auto___8423);
var G__8427 = (0);
seq__8404_8412 = G__8424;
chunk__8405_8413 = G__8425;
count__8406_8414 = G__8426;
i__8407_8415 = G__8427;
continue;
} else {
var a_8428 = cljs.core.first.call(null,seq__8404_8422__$1);
crate.binding.bc_add.call(null,bc,a_8428,a_8428);

var G__8429 = cljs.core.next.call(null,seq__8404_8422__$1);
var G__8430 = null;
var G__8431 = (0);
var G__8432 = (0);
seq__8404_8412 = G__8429;
chunk__8405_8413 = G__8430;
count__8406_8414 = G__8431;
i__8407_8415 = G__8432;
continue;
}
} else {
}
}
break;
}

var seq__8408 = cljs.core.seq.call(null,removed);
var chunk__8409 = null;
var count__8410 = (0);
var i__8411 = (0);
while(true){
if((i__8411 < count__8410)){
var r = cljs.core._nth.call(null,chunk__8409,i__8411);
crate.binding.bc_remove.call(null,bc,r);

var G__8433 = seq__8408;
var G__8434 = chunk__8409;
var G__8435 = count__8410;
var G__8436 = (i__8411 + (1));
seq__8408 = G__8433;
chunk__8409 = G__8434;
count__8410 = G__8435;
i__8411 = G__8436;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8408);
if(temp__4657__auto__){
var seq__8408__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8408__$1)){
var c__7752__auto__ = cljs.core.chunk_first.call(null,seq__8408__$1);
var G__8437 = cljs.core.chunk_rest.call(null,seq__8408__$1);
var G__8438 = c__7752__auto__;
var G__8439 = cljs.core.count.call(null,c__7752__auto__);
var G__8440 = (0);
seq__8408 = G__8437;
chunk__8409 = G__8438;
count__8410 = G__8439;
i__8411 = G__8440;
continue;
} else {
var r = cljs.core.first.call(null,seq__8408__$1);
crate.binding.bc_remove.call(null,bc,r);

var G__8441 = cljs.core.next.call(null,seq__8408__$1);
var G__8442 = null;
var G__8443 = (0);
var G__8444 = (0);
seq__8408 = G__8441;
chunk__8409 = G__8442;
count__8410 = G__8443;
i__8411 = G__8444;
continue;
}
} else {
return null;
}
}
break;
}
});
crate.binding.bound_coll = (function crate$binding$bound_coll(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8454 = arguments.length;
var i__8047__auto___8455 = (0);
while(true){
if((i__8047__auto___8455 < len__8046__auto___8454)){
args__8053__auto__.push((arguments[i__8047__auto___8455]));

var G__8456 = (i__8047__auto___8455 + (1));
i__8047__auto___8455 = G__8456;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((1) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((1)),(0),null)):null);
return crate.binding.bound_coll.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8054__auto__);
});

crate.binding.bound_coll.cljs$core$IFn$_invoke$arity$variadic = (function (atm,p__8447){
var vec__8448 = p__8447;
var path = cljs.core.nth.call(null,vec__8448,(0),null);
var opts = cljs.core.nth.call(null,vec__8448,(1),null);
var vec__8451 = (cljs.core.truth_(opts)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null));
var path__$1 = cljs.core.nth.call(null,vec__8451,(0),null);
var opts__$1 = cljs.core.nth.call(null,vec__8451,(1),null);
var atm__$1 = ((cljs.core.not.call(null,path__$1))?atm:crate.binding.subatom.call(null,atm,path__$1));
var opts__$2 = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"path","path",-188191168),path__$1);
var opts__$3 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.first):cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));
var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map.call(null)));
cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (vec__8451,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__8448,path,opts){
return (function (_,___$1,___$2,neue){
return crate.binding.bc_compare.call(null,bc,neue);
});})(vec__8451,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__8448,path,opts))
);

crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));

return bc;
});

crate.binding.bound_coll.cljs$lang$maxFixedArity = (1);

crate.binding.bound_coll.cljs$lang$applyTo = (function (seq8445){
var G__8446 = cljs.core.first.call(null,seq8445);
var seq8445__$1 = cljs.core.next.call(null,seq8445);
return crate.binding.bound_coll.cljs$core$IFn$_invoke$arity$variadic(G__8446,seq8445__$1);
});

crate.binding.map_bound = (function crate$binding$map_bound(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8464 = arguments.length;
var i__8047__auto___8465 = (0);
while(true){
if((i__8047__auto___8465 < len__8046__auto___8464)){
args__8053__auto__.push((arguments[i__8047__auto___8465]));

var G__8466 = (i__8047__auto___8465 + (1));
i__8047__auto___8465 = G__8466;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((2) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((2)),(0),null)):null);
return crate.binding.map_bound.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8054__auto__);
});

crate.binding.map_bound.cljs$core$IFn$_invoke$arity$variadic = (function (as,atm,p__8460){
var vec__8461 = p__8460;
var opts = cljs.core.nth.call(null,vec__8461,(0),null);
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"as","as",1148689641),as);
var atm__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom.call(null,atm,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts__$1)));
var opts__$2 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.first):cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));
var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map.call(null)));
cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (opts__$1,atm__$1,opts__$2,bc,vec__8461,opts){
return (function (_,___$1,___$2,neue){
return crate.binding.bc_compare.call(null,bc,neue);
});})(opts__$1,atm__$1,opts__$2,bc,vec__8461,opts))
);

crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));

return bc;
});

crate.binding.map_bound.cljs$lang$maxFixedArity = (2);

crate.binding.map_bound.cljs$lang$applyTo = (function (seq8457){
var G__8458 = cljs.core.first.call(null,seq8457);
var seq8457__$1 = cljs.core.next.call(null,seq8457);
var G__8459 = cljs.core.first.call(null,seq8457__$1);
var seq8457__$2 = cljs.core.next.call(null,seq8457__$1);
return crate.binding.map_bound.cljs$core$IFn$_invoke$arity$variadic(G__8458,G__8459,seq8457__$2);
});

crate.binding.binding_QMARK_ = (function crate$binding$binding_QMARK_(b){
if(!((b == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === b.crate$binding$bindable$))){
return true;
} else {
if((!b.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,b);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,b);
}
});
crate.binding.binding_coll_QMARK_ = (function crate$binding$binding_coll_QMARK_(b){
if(!((b == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === b.crate$binding$bindable_coll$))){
return true;
} else {
if((!b.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,b);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,b);
}
});
crate.binding.deref_QMARK_ = (function crate$binding$deref_QMARK_(atm){
if(!((atm == null))){
if(((atm.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === atm.cljs$core$IDeref$))){
return true;
} else {
if((!atm.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,atm);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,atm);
}
});
crate.binding.value = (function crate$binding$value(b){
return crate.binding._value.call(null,b);
});
crate.binding.index = (function crate$binding$index(sub_atom){
return cljs.core.last.call(null,sub_atom.path);
});
crate.binding.on_change = (function crate$binding$on_change(b,func){
return crate.binding._on_change.call(null,b,func);
});
crate.binding.bound = (function crate$binding$bound(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8479 = arguments.length;
var i__8047__auto___8480 = (0);
while(true){
if((i__8047__auto___8480 < len__8046__auto___8479)){
args__8053__auto__.push((arguments[i__8047__auto___8480]));

var G__8481 = (i__8047__auto___8480 + (1));
i__8047__auto___8480 = G__8481;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((1) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((1)),(0),null)):null);
return crate.binding.bound.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8054__auto__);
});

crate.binding.bound.cljs$core$IFn$_invoke$arity$variadic = (function (atm,p__8475){
var vec__8476 = p__8475;
var func = cljs.core.nth.call(null,vec__8476,(0),null);
var func__$1 = (function (){var or__6938__auto__ = func;
if(cljs.core.truth_(or__6938__auto__)){
return or__6938__auto__;
} else {
return cljs.core.identity;
}
})();
return (new crate.binding.atom_binding(atm,func__$1));
});

crate.binding.bound.cljs$lang$maxFixedArity = (1);

crate.binding.bound.cljs$lang$applyTo = (function (seq8473){
var G__8474 = cljs.core.first.call(null,seq8473);
var seq8473__$1 = cljs.core.next.call(null,seq8473);
return crate.binding.bound.cljs$core$IFn$_invoke$arity$variadic(G__8474,seq8473__$1);
});


//# sourceMappingURL=binding.js.map