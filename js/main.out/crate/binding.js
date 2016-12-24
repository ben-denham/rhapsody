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
var seq__10549 = cljs.core.seq.call(null,self__.watches);
var chunk__10550 = null;
var count__10551 = (0);
var i__10552 = (0);
while(true){
if((i__10552 < count__10551)){
var vec__10553 = cljs.core._nth.call(null,chunk__10550,i__10552);
var key__$1 = cljs.core.nth.call(null,vec__10553,(0),null);
var f = cljs.core.nth.call(null,vec__10553,(1),null);
f.call(null,key__$1,this$__$1,oldval,newval);

var G__10559 = seq__10549;
var G__10560 = chunk__10550;
var G__10561 = count__10551;
var G__10562 = (i__10552 + (1));
seq__10549 = G__10559;
chunk__10550 = G__10560;
count__10551 = G__10561;
i__10552 = G__10562;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10549);
if(temp__4657__auto__){
var seq__10549__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10549__$1)){
var c__7752__auto__ = cljs.core.chunk_first.call(null,seq__10549__$1);
var G__10563 = cljs.core.chunk_rest.call(null,seq__10549__$1);
var G__10564 = c__7752__auto__;
var G__10565 = cljs.core.count.call(null,c__7752__auto__);
var G__10566 = (0);
seq__10549 = G__10563;
chunk__10550 = G__10564;
count__10551 = G__10565;
i__10552 = G__10566;
continue;
} else {
var vec__10556 = cljs.core.first.call(null,seq__10549__$1);
var key__$1 = cljs.core.nth.call(null,vec__10556,(0),null);
var f = cljs.core.nth.call(null,vec__10556,(1),null);
f.call(null,key__$1,this$__$1,oldval,newval);

var G__10567 = cljs.core.next.call(null,seq__10549__$1);
var G__10568 = null;
var G__10569 = (0);
var G__10570 = (0);
seq__10549 = G__10567;
chunk__10550 = G__10568;
count__10551 = G__10569;
i__10552 = G__10570;
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
var vec__10574 = (((atm instanceof crate.binding.SubAtom))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm.atm,cljs.core.concat.call(null,atm.path,path__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path__$1], null));
var atm__$1 = cljs.core.nth.call(null,vec__10574,(0),null);
var path__$2 = cljs.core.nth.call(null,vec__10574,(1),null);
var k = cljs.core.gensym.call(null,"subatom");
var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,atm__$1),path__$2)),null,k));
cljs.core.add_watch.call(null,atm__$1,k,((function (path__$1,vec__10574,atm__$1,path__$2,k,sa){
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
});})(path__$1,vec__10574,atm__$1,path__$2,k,sa))
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
var args10577 = [];
var len__8046__auto___10586 = arguments.length;
var i__8047__auto___10587 = (0);
while(true){
if((i__8047__auto___10587 < len__8046__auto___10586)){
args10577.push((arguments[i__8047__auto___10587]));

var G__10588 = (i__8047__auto___10587 + (1));
i__8047__auto___10587 = G__10588;
continue;
} else {
}
break;
}

var G__10585 = args10577.length;
switch (G__10585) {
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
var argseq__8065__auto__ = (new cljs.core.IndexedSeq(args10577.slice((5)),(0),null));
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

crate.binding.sub_swap_BANG_.cljs$lang$applyTo = (function (seq10578){
var G__10579 = cljs.core.first.call(null,seq10578);
var seq10578__$1 = cljs.core.next.call(null,seq10578);
var G__10580 = cljs.core.first.call(null,seq10578__$1);
var seq10578__$2 = cljs.core.next.call(null,seq10578__$1);
var G__10581 = cljs.core.first.call(null,seq10578__$2);
var seq10578__$3 = cljs.core.next.call(null,seq10578__$2);
var G__10582 = cljs.core.first.call(null,seq10578__$3);
var seq10578__$4 = cljs.core.next.call(null,seq10578__$3);
var G__10583 = cljs.core.first.call(null,seq10578__$4);
var seq10578__$5 = cljs.core.next.call(null,seq10578__$4);
return crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10579,G__10580,G__10581,G__10582,G__10583,seq10578__$5);
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
var seq__10590 = cljs.core.seq.call(null,self__.watches);
var chunk__10591 = null;
var count__10592 = (0);
var i__10593 = (0);
while(true){
if((i__10593 < count__10592)){
var vec__10594 = cljs.core._nth.call(null,chunk__10591,i__10593);
var key__$1 = cljs.core.nth.call(null,vec__10594,(0),null);
var f = cljs.core.nth.call(null,vec__10594,(1),null);
f.call(null,key__$1,this$__$1,oldval,newval);

var G__10600 = seq__10590;
var G__10601 = chunk__10591;
var G__10602 = count__10592;
var G__10603 = (i__10593 + (1));
seq__10590 = G__10600;
chunk__10591 = G__10601;
count__10592 = G__10602;
i__10593 = G__10603;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10590);
if(temp__4657__auto__){
var seq__10590__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10590__$1)){
var c__7752__auto__ = cljs.core.chunk_first.call(null,seq__10590__$1);
var G__10604 = cljs.core.chunk_rest.call(null,seq__10590__$1);
var G__10605 = c__7752__auto__;
var G__10606 = cljs.core.count.call(null,c__7752__auto__);
var G__10607 = (0);
seq__10590 = G__10604;
chunk__10591 = G__10605;
count__10592 = G__10606;
i__10593 = G__10607;
continue;
} else {
var vec__10597 = cljs.core.first.call(null,seq__10590__$1);
var key__$1 = cljs.core.nth.call(null,vec__10597,(0),null);
var f = cljs.core.nth.call(null,vec__10597,(1),null);
f.call(null,key__$1,this$__$1,oldval,newval);

var G__10608 = cljs.core.next.call(null,seq__10590__$1);
var G__10609 = null;
var G__10610 = (0);
var G__10611 = (0);
seq__10590 = G__10608;
chunk__10591 = G__10609;
count__10592 = G__10610;
i__10593 = G__10611;
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

var seq__10616_10620 = cljs.core.seq.call(null,atms);
var chunk__10617_10621 = null;
var count__10618_10622 = (0);
var i__10619_10623 = (0);
while(true){
if((i__10619_10623 < count__10618_10622)){
var atm_10624 = cljs.core._nth.call(null,chunk__10617_10621,i__10619_10623);
cljs.core.add_watch.call(null,atm_10624,k,((function (seq__10616_10620,chunk__10617_10621,count__10618_10622,i__10619_10623,atm_10624,k,neue){
return (function (_,___$1,___$2,___$3){
return crate.binding._compute.call(null,neue);
});})(seq__10616_10620,chunk__10617_10621,count__10618_10622,i__10619_10623,atm_10624,k,neue))
);

var G__10625 = seq__10616_10620;
var G__10626 = chunk__10617_10621;
var G__10627 = count__10618_10622;
var G__10628 = (i__10619_10623 + (1));
seq__10616_10620 = G__10625;
chunk__10617_10621 = G__10626;
count__10618_10622 = G__10627;
i__10619_10623 = G__10628;
continue;
} else {
var temp__4657__auto___10629 = cljs.core.seq.call(null,seq__10616_10620);
if(temp__4657__auto___10629){
var seq__10616_10630__$1 = temp__4657__auto___10629;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10616_10630__$1)){
var c__7752__auto___10631 = cljs.core.chunk_first.call(null,seq__10616_10630__$1);
var G__10632 = cljs.core.chunk_rest.call(null,seq__10616_10630__$1);
var G__10633 = c__7752__auto___10631;
var G__10634 = cljs.core.count.call(null,c__7752__auto___10631);
var G__10635 = (0);
seq__10616_10620 = G__10632;
chunk__10617_10621 = G__10633;
count__10618_10622 = G__10634;
i__10619_10623 = G__10635;
continue;
} else {
var atm_10636 = cljs.core.first.call(null,seq__10616_10630__$1);
cljs.core.add_watch.call(null,atm_10636,k,((function (seq__10616_10620,chunk__10617_10621,count__10618_10622,i__10619_10623,atm_10636,seq__10616_10630__$1,temp__4657__auto___10629,k,neue){
return (function (_,___$1,___$2,___$3){
return crate.binding._compute.call(null,neue);
});})(seq__10616_10620,chunk__10617_10621,count__10618_10622,i__10619_10623,atm_10636,seq__10616_10630__$1,temp__4657__auto___10629,k,neue))
);

var G__10637 = cljs.core.next.call(null,seq__10616_10630__$1);
var G__10638 = null;
var G__10639 = (0);
var G__10640 = (0);
seq__10616_10620 = G__10637;
chunk__10617_10621 = G__10638;
count__10618_10622 = G__10639;
i__10619_10623 = G__10640;
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
return cljs.core.filter.call(null,(function (p1__10641_SHARP_){
return (p1__10641_SHARP_ > (100));
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
var seq__10642 = cljs.core.seq.call(null,self__.watches);
var chunk__10643 = null;
var count__10644 = (0);
var i__10645 = (0);
while(true){
if((i__10645 < count__10644)){
var vec__10646 = cljs.core._nth.call(null,chunk__10643,i__10645);
var key = cljs.core.nth.call(null,vec__10646,(0),null);
var f = cljs.core.nth.call(null,vec__10646,(1),null);
f.call(null,key,this$__$1,oldval,newval);

var G__10652 = seq__10642;
var G__10653 = chunk__10643;
var G__10654 = count__10644;
var G__10655 = (i__10645 + (1));
seq__10642 = G__10652;
chunk__10643 = G__10653;
count__10644 = G__10654;
i__10645 = G__10655;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10642);
if(temp__4657__auto__){
var seq__10642__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10642__$1)){
var c__7752__auto__ = cljs.core.chunk_first.call(null,seq__10642__$1);
var G__10656 = cljs.core.chunk_rest.call(null,seq__10642__$1);
var G__10657 = c__7752__auto__;
var G__10658 = cljs.core.count.call(null,c__7752__auto__);
var G__10659 = (0);
seq__10642 = G__10656;
chunk__10643 = G__10657;
count__10644 = G__10658;
i__10645 = G__10659;
continue;
} else {
var vec__10649 = cljs.core.first.call(null,seq__10642__$1);
var key = cljs.core.nth.call(null,vec__10649,(0),null);
var f = cljs.core.nth.call(null,vec__10649,(1),null);
f.call(null,key,this$__$1,oldval,newval);

var G__10660 = cljs.core.next.call(null,seq__10642__$1);
var G__10661 = null;
var G__10662 = (0);
var G__10663 = (0);
seq__10642 = G__10660;
chunk__10643 = G__10661;
count__10644 = G__10662;
i__10645 = G__10663;
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
return (function (_,___$1,___$2,p__10664){
var vec__10665 = p__10664;
var event = cljs.core.nth.call(null,vec__10665,(0),null);
var el = cljs.core.nth.call(null,vec__10665,(1),null);
var v = cljs.core.nth.call(null,vec__10665,(2),null);
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
var len__8046__auto___10670 = arguments.length;
var i__8047__auto___10671 = (0);
while(true){
if((i__8047__auto___10671 < len__8046__auto___10670)){
args__8053__auto__.push((arguments[i__8047__auto___10671]));

var G__10672 = (i__8047__auto___10671 + (1));
i__8047__auto___10671 = G__10672;
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

crate.binding.__GT_path.cljs$lang$applyTo = (function (seq10668){
var G__10669 = cljs.core.first.call(null,seq10668);
var seq10668__$1 = cljs.core.next.call(null,seq10668);
return crate.binding.__GT_path.cljs$core$IFn$_invoke$arity$variadic(G__10669,seq10668__$1);
});

crate.binding.bc_compare = (function crate$binding$bc_compare(bc,neue){
var prev = bc.stuff;
var pset = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,prev));
var nset = crate.binding.__GT_keyed.call(null,neue,crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"keyfn","keyfn",780060332)));
var added = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,nset,pset));
var removed = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,pset,nset));
var seq__10681_10689 = cljs.core.seq.call(null,added);
var chunk__10682_10690 = null;
var count__10683_10691 = (0);
var i__10684_10692 = (0);
while(true){
if((i__10684_10692 < count__10683_10691)){
var a_10693 = cljs.core._nth.call(null,chunk__10682_10690,i__10684_10692);
crate.binding.bc_add.call(null,bc,a_10693,a_10693);

var G__10694 = seq__10681_10689;
var G__10695 = chunk__10682_10690;
var G__10696 = count__10683_10691;
var G__10697 = (i__10684_10692 + (1));
seq__10681_10689 = G__10694;
chunk__10682_10690 = G__10695;
count__10683_10691 = G__10696;
i__10684_10692 = G__10697;
continue;
} else {
var temp__4657__auto___10698 = cljs.core.seq.call(null,seq__10681_10689);
if(temp__4657__auto___10698){
var seq__10681_10699__$1 = temp__4657__auto___10698;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10681_10699__$1)){
var c__7752__auto___10700 = cljs.core.chunk_first.call(null,seq__10681_10699__$1);
var G__10701 = cljs.core.chunk_rest.call(null,seq__10681_10699__$1);
var G__10702 = c__7752__auto___10700;
var G__10703 = cljs.core.count.call(null,c__7752__auto___10700);
var G__10704 = (0);
seq__10681_10689 = G__10701;
chunk__10682_10690 = G__10702;
count__10683_10691 = G__10703;
i__10684_10692 = G__10704;
continue;
} else {
var a_10705 = cljs.core.first.call(null,seq__10681_10699__$1);
crate.binding.bc_add.call(null,bc,a_10705,a_10705);

var G__10706 = cljs.core.next.call(null,seq__10681_10699__$1);
var G__10707 = null;
var G__10708 = (0);
var G__10709 = (0);
seq__10681_10689 = G__10706;
chunk__10682_10690 = G__10707;
count__10683_10691 = G__10708;
i__10684_10692 = G__10709;
continue;
}
} else {
}
}
break;
}

var seq__10685 = cljs.core.seq.call(null,removed);
var chunk__10686 = null;
var count__10687 = (0);
var i__10688 = (0);
while(true){
if((i__10688 < count__10687)){
var r = cljs.core._nth.call(null,chunk__10686,i__10688);
crate.binding.bc_remove.call(null,bc,r);

var G__10710 = seq__10685;
var G__10711 = chunk__10686;
var G__10712 = count__10687;
var G__10713 = (i__10688 + (1));
seq__10685 = G__10710;
chunk__10686 = G__10711;
count__10687 = G__10712;
i__10688 = G__10713;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10685);
if(temp__4657__auto__){
var seq__10685__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10685__$1)){
var c__7752__auto__ = cljs.core.chunk_first.call(null,seq__10685__$1);
var G__10714 = cljs.core.chunk_rest.call(null,seq__10685__$1);
var G__10715 = c__7752__auto__;
var G__10716 = cljs.core.count.call(null,c__7752__auto__);
var G__10717 = (0);
seq__10685 = G__10714;
chunk__10686 = G__10715;
count__10687 = G__10716;
i__10688 = G__10717;
continue;
} else {
var r = cljs.core.first.call(null,seq__10685__$1);
crate.binding.bc_remove.call(null,bc,r);

var G__10718 = cljs.core.next.call(null,seq__10685__$1);
var G__10719 = null;
var G__10720 = (0);
var G__10721 = (0);
seq__10685 = G__10718;
chunk__10686 = G__10719;
count__10687 = G__10720;
i__10688 = G__10721;
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
var len__8046__auto___10731 = arguments.length;
var i__8047__auto___10732 = (0);
while(true){
if((i__8047__auto___10732 < len__8046__auto___10731)){
args__8053__auto__.push((arguments[i__8047__auto___10732]));

var G__10733 = (i__8047__auto___10732 + (1));
i__8047__auto___10732 = G__10733;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((1) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((1)),(0),null)):null);
return crate.binding.bound_coll.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8054__auto__);
});

crate.binding.bound_coll.cljs$core$IFn$_invoke$arity$variadic = (function (atm,p__10724){
var vec__10725 = p__10724;
var path = cljs.core.nth.call(null,vec__10725,(0),null);
var opts = cljs.core.nth.call(null,vec__10725,(1),null);
var vec__10728 = (cljs.core.truth_(opts)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null));
var path__$1 = cljs.core.nth.call(null,vec__10728,(0),null);
var opts__$1 = cljs.core.nth.call(null,vec__10728,(1),null);
var atm__$1 = ((cljs.core.not.call(null,path__$1))?atm:crate.binding.subatom.call(null,atm,path__$1));
var opts__$2 = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"path","path",-188191168),path__$1);
var opts__$3 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.first):cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));
var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map.call(null)));
cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (vec__10728,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__10725,path,opts){
return (function (_,___$1,___$2,neue){
return crate.binding.bc_compare.call(null,bc,neue);
});})(vec__10728,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__10725,path,opts))
);

crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));

return bc;
});

crate.binding.bound_coll.cljs$lang$maxFixedArity = (1);

crate.binding.bound_coll.cljs$lang$applyTo = (function (seq10722){
var G__10723 = cljs.core.first.call(null,seq10722);
var seq10722__$1 = cljs.core.next.call(null,seq10722);
return crate.binding.bound_coll.cljs$core$IFn$_invoke$arity$variadic(G__10723,seq10722__$1);
});

crate.binding.map_bound = (function crate$binding$map_bound(var_args){
var args__8053__auto__ = [];
var len__8046__auto___10741 = arguments.length;
var i__8047__auto___10742 = (0);
while(true){
if((i__8047__auto___10742 < len__8046__auto___10741)){
args__8053__auto__.push((arguments[i__8047__auto___10742]));

var G__10743 = (i__8047__auto___10742 + (1));
i__8047__auto___10742 = G__10743;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((2) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((2)),(0),null)):null);
return crate.binding.map_bound.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8054__auto__);
});

crate.binding.map_bound.cljs$core$IFn$_invoke$arity$variadic = (function (as,atm,p__10737){
var vec__10738 = p__10737;
var opts = cljs.core.nth.call(null,vec__10738,(0),null);
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"as","as",1148689641),as);
var atm__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom.call(null,atm,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts__$1)));
var opts__$2 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.first):cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));
var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map.call(null)));
cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (opts__$1,atm__$1,opts__$2,bc,vec__10738,opts){
return (function (_,___$1,___$2,neue){
return crate.binding.bc_compare.call(null,bc,neue);
});})(opts__$1,atm__$1,opts__$2,bc,vec__10738,opts))
);

crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));

return bc;
});

crate.binding.map_bound.cljs$lang$maxFixedArity = (2);

crate.binding.map_bound.cljs$lang$applyTo = (function (seq10734){
var G__10735 = cljs.core.first.call(null,seq10734);
var seq10734__$1 = cljs.core.next.call(null,seq10734);
var G__10736 = cljs.core.first.call(null,seq10734__$1);
var seq10734__$2 = cljs.core.next.call(null,seq10734__$1);
return crate.binding.map_bound.cljs$core$IFn$_invoke$arity$variadic(G__10735,G__10736,seq10734__$2);
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
var len__8046__auto___10756 = arguments.length;
var i__8047__auto___10757 = (0);
while(true){
if((i__8047__auto___10757 < len__8046__auto___10756)){
args__8053__auto__.push((arguments[i__8047__auto___10757]));

var G__10758 = (i__8047__auto___10757 + (1));
i__8047__auto___10757 = G__10758;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((1) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((1)),(0),null)):null);
return crate.binding.bound.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8054__auto__);
});

crate.binding.bound.cljs$core$IFn$_invoke$arity$variadic = (function (atm,p__10752){
var vec__10753 = p__10752;
var func = cljs.core.nth.call(null,vec__10753,(0),null);
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

crate.binding.bound.cljs$lang$applyTo = (function (seq10750){
var G__10751 = cljs.core.first.call(null,seq10750);
var seq10750__$1 = cljs.core.next.call(null,seq10750);
return crate.binding.bound.cljs$core$IFn$_invoke$arity$variadic(G__10751,seq10750__$1);
});


//# sourceMappingURL=binding.js.map