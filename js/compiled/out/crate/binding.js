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
var seq__22718 = cljs.core.seq.call(null,self__.watches);
var chunk__22719 = null;
var count__22720 = (0);
var i__22721 = (0);
while(true){
if((i__22721 < count__22720)){
var vec__22722 = cljs.core._nth.call(null,chunk__22719,i__22721);
var key__$1 = cljs.core.nth.call(null,vec__22722,(0),null);
var f = cljs.core.nth.call(null,vec__22722,(1),null);
f.call(null,key__$1,this$__$1,oldval,newval);

var G__22728 = seq__22718;
var G__22729 = chunk__22719;
var G__22730 = count__22720;
var G__22731 = (i__22721 + (1));
seq__22718 = G__22728;
chunk__22719 = G__22729;
count__22720 = G__22730;
i__22721 = G__22731;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22718);
if(temp__4657__auto__){
var seq__22718__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22718__$1)){
var c__21344__auto__ = cljs.core.chunk_first.call(null,seq__22718__$1);
var G__22732 = cljs.core.chunk_rest.call(null,seq__22718__$1);
var G__22733 = c__21344__auto__;
var G__22734 = cljs.core.count.call(null,c__21344__auto__);
var G__22735 = (0);
seq__22718 = G__22732;
chunk__22719 = G__22733;
count__22720 = G__22734;
i__22721 = G__22735;
continue;
} else {
var vec__22725 = cljs.core.first.call(null,seq__22718__$1);
var key__$1 = cljs.core.nth.call(null,vec__22725,(0),null);
var f = cljs.core.nth.call(null,vec__22725,(1),null);
f.call(null,key__$1,this$__$1,oldval,newval);

var G__22736 = cljs.core.next.call(null,seq__22718__$1);
var G__22737 = null;
var G__22738 = (0);
var G__22739 = (0);
seq__22718 = G__22736;
chunk__22719 = G__22737;
count__22720 = G__22738;
i__22721 = G__22739;
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

crate.binding.SubAtom.cljs$lang$ctorPrWriter = (function (this__21136__auto__,writer__21137__auto__,opt__21138__auto__){
return cljs.core._write.call(null,writer__21137__auto__,"crate.binding/SubAtom");
});

crate.binding.__GT_SubAtom = (function crate$binding$__GT_SubAtom(atm,path,prevhash,watches,key){
return (new crate.binding.SubAtom(atm,path,prevhash,watches,key));
});

crate.binding.subatom = (function crate$binding$subatom(atm,path){
var path__$1 = ((cljs.core.coll_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var vec__22743 = (((atm instanceof crate.binding.SubAtom))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm.atm,cljs.core.concat.call(null,atm.path,path__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path__$1], null));
var atm__$1 = cljs.core.nth.call(null,vec__22743,(0),null);
var path__$2 = cljs.core.nth.call(null,vec__22743,(1),null);
var k = cljs.core.gensym.call(null,"subatom");
var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,atm__$1),path__$2)),null,k));
cljs.core.add_watch.call(null,atm__$1,k,((function (path__$1,vec__22743,atm__$1,path__$2,k,sa){
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
});})(path__$1,vec__22743,atm__$1,path__$2,k,sa))
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
var args22746 = [];
var len__21638__auto___22755 = arguments.length;
var i__21639__auto___22756 = (0);
while(true){
if((i__21639__auto___22756 < len__21638__auto___22755)){
args22746.push((arguments[i__21639__auto___22756]));

var G__22757 = (i__21639__auto___22756 + (1));
i__21639__auto___22756 = G__22757;
continue;
} else {
}
break;
}

var G__22754 = args22746.length;
switch (G__22754) {
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
var argseq__21657__auto__ = (new cljs.core.IndexedSeq(args22746.slice((5)),(0),null));
return crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__21657__auto__);

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

crate.binding.sub_swap_BANG_.cljs$lang$applyTo = (function (seq22747){
var G__22748 = cljs.core.first.call(null,seq22747);
var seq22747__$1 = cljs.core.next.call(null,seq22747);
var G__22749 = cljs.core.first.call(null,seq22747__$1);
var seq22747__$2 = cljs.core.next.call(null,seq22747__$1);
var G__22750 = cljs.core.first.call(null,seq22747__$2);
var seq22747__$3 = cljs.core.next.call(null,seq22747__$2);
var G__22751 = cljs.core.first.call(null,seq22747__$3);
var seq22747__$4 = cljs.core.next.call(null,seq22747__$3);
var G__22752 = cljs.core.first.call(null,seq22747__$4);
var seq22747__$5 = cljs.core.next.call(null,seq22747__$4);
return crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22748,G__22749,G__22750,G__22751,G__22752,seq22747__$5);
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
var x__21193__auto__ = (((this$ == null))?null:this$);
var m__21194__auto__ = (crate.binding._compute[goog.typeOf(x__21193__auto__)]);
if(!((m__21194__auto__ == null))){
return m__21194__auto__.call(null,this$);
} else {
var m__21194__auto____$1 = (crate.binding._compute["_"]);
if(!((m__21194__auto____$1 == null))){
return m__21194__auto____$1.call(null,this$);
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
var seq__22759 = cljs.core.seq.call(null,self__.watches);
var chunk__22760 = null;
var count__22761 = (0);
var i__22762 = (0);
while(true){
if((i__22762 < count__22761)){
var vec__22763 = cljs.core._nth.call(null,chunk__22760,i__22762);
var key__$1 = cljs.core.nth.call(null,vec__22763,(0),null);
var f = cljs.core.nth.call(null,vec__22763,(1),null);
f.call(null,key__$1,this$__$1,oldval,newval);

var G__22769 = seq__22759;
var G__22770 = chunk__22760;
var G__22771 = count__22761;
var G__22772 = (i__22762 + (1));
seq__22759 = G__22769;
chunk__22760 = G__22770;
count__22761 = G__22771;
i__22762 = G__22772;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22759);
if(temp__4657__auto__){
var seq__22759__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22759__$1)){
var c__21344__auto__ = cljs.core.chunk_first.call(null,seq__22759__$1);
var G__22773 = cljs.core.chunk_rest.call(null,seq__22759__$1);
var G__22774 = c__21344__auto__;
var G__22775 = cljs.core.count.call(null,c__21344__auto__);
var G__22776 = (0);
seq__22759 = G__22773;
chunk__22760 = G__22774;
count__22761 = G__22775;
i__22762 = G__22776;
continue;
} else {
var vec__22766 = cljs.core.first.call(null,seq__22759__$1);
var key__$1 = cljs.core.nth.call(null,vec__22766,(0),null);
var f = cljs.core.nth.call(null,vec__22766,(1),null);
f.call(null,key__$1,this$__$1,oldval,newval);

var G__22777 = cljs.core.next.call(null,seq__22759__$1);
var G__22778 = null;
var G__22779 = (0);
var G__22780 = (0);
seq__22759 = G__22777;
chunk__22760 = G__22778;
count__22761 = G__22779;
i__22762 = G__22780;
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

crate.binding.Computed.cljs$lang$ctorPrWriter = (function (this__21136__auto__,writer__21137__auto__,opt__21138__auto__){
return cljs.core._write.call(null,writer__21137__auto__,"crate.binding/Computed");
});

crate.binding.__GT_Computed = (function crate$binding$__GT_Computed(atms,value,func,watches,key){
return (new crate.binding.Computed(atms,value,func,watches,key));
});

crate.binding.computed = (function crate$binding$computed(atms,func){
var k = cljs.core.gensym.call(null,"computed");
var neue = (new crate.binding.Computed(atms,null,func,null,k));
crate.binding._compute.call(null,neue);

var seq__22785_22789 = cljs.core.seq.call(null,atms);
var chunk__22786_22790 = null;
var count__22787_22791 = (0);
var i__22788_22792 = (0);
while(true){
if((i__22788_22792 < count__22787_22791)){
var atm_22793 = cljs.core._nth.call(null,chunk__22786_22790,i__22788_22792);
cljs.core.add_watch.call(null,atm_22793,k,((function (seq__22785_22789,chunk__22786_22790,count__22787_22791,i__22788_22792,atm_22793,k,neue){
return (function (_,___$1,___$2,___$3){
return crate.binding._compute.call(null,neue);
});})(seq__22785_22789,chunk__22786_22790,count__22787_22791,i__22788_22792,atm_22793,k,neue))
);

var G__22794 = seq__22785_22789;
var G__22795 = chunk__22786_22790;
var G__22796 = count__22787_22791;
var G__22797 = (i__22788_22792 + (1));
seq__22785_22789 = G__22794;
chunk__22786_22790 = G__22795;
count__22787_22791 = G__22796;
i__22788_22792 = G__22797;
continue;
} else {
var temp__4657__auto___22798 = cljs.core.seq.call(null,seq__22785_22789);
if(temp__4657__auto___22798){
var seq__22785_22799__$1 = temp__4657__auto___22798;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22785_22799__$1)){
var c__21344__auto___22800 = cljs.core.chunk_first.call(null,seq__22785_22799__$1);
var G__22801 = cljs.core.chunk_rest.call(null,seq__22785_22799__$1);
var G__22802 = c__21344__auto___22800;
var G__22803 = cljs.core.count.call(null,c__21344__auto___22800);
var G__22804 = (0);
seq__22785_22789 = G__22801;
chunk__22786_22790 = G__22802;
count__22787_22791 = G__22803;
i__22788_22792 = G__22804;
continue;
} else {
var atm_22805 = cljs.core.first.call(null,seq__22785_22799__$1);
cljs.core.add_watch.call(null,atm_22805,k,((function (seq__22785_22789,chunk__22786_22790,count__22787_22791,i__22788_22792,atm_22805,seq__22785_22799__$1,temp__4657__auto___22798,k,neue){
return (function (_,___$1,___$2,___$3){
return crate.binding._compute.call(null,neue);
});})(seq__22785_22789,chunk__22786_22790,count__22787_22791,i__22788_22792,atm_22805,seq__22785_22799__$1,temp__4657__auto___22798,k,neue))
);

var G__22806 = cljs.core.next.call(null,seq__22785_22799__$1);
var G__22807 = null;
var G__22808 = (0);
var G__22809 = (0);
seq__22785_22789 = G__22806;
chunk__22786_22790 = G__22807;
count__22787_22791 = G__22808;
i__22788_22792 = G__22809;
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
return cljs.core.filter.call(null,(function (p1__22810_SHARP_){
return (p1__22810_SHARP_ > (100));
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
var x__21193__auto__ = (((this$ == null))?null:this$);
var m__21194__auto__ = (crate.binding._value[goog.typeOf(x__21193__auto__)]);
if(!((m__21194__auto__ == null))){
return m__21194__auto__.call(null,this$);
} else {
var m__21194__auto____$1 = (crate.binding._value["_"]);
if(!((m__21194__auto____$1 == null))){
return m__21194__auto____$1.call(null,this$);
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
var x__21193__auto__ = (((this$ == null))?null:this$);
var m__21194__auto__ = (crate.binding._on_change[goog.typeOf(x__21193__auto__)]);
if(!((m__21194__auto__ == null))){
return m__21194__auto__.call(null,this$,func);
} else {
var m__21194__auto____$1 = (crate.binding._on_change["_"]);
if(!((m__21194__auto____$1 == null))){
return m__21194__auto____$1.call(null,this$,func);
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

crate.binding.atom_binding.cljs$lang$ctorPrWriter = (function (this__21136__auto__,writer__21137__auto__,opt__21138__auto__){
return cljs.core._write.call(null,writer__21137__auto__,"crate.binding/atom-binding");
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
var seq__22811 = cljs.core.seq.call(null,self__.watches);
var chunk__22812 = null;
var count__22813 = (0);
var i__22814 = (0);
while(true){
if((i__22814 < count__22813)){
var vec__22815 = cljs.core._nth.call(null,chunk__22812,i__22814);
var key = cljs.core.nth.call(null,vec__22815,(0),null);
var f = cljs.core.nth.call(null,vec__22815,(1),null);
f.call(null,key,this$__$1,oldval,newval);

var G__22821 = seq__22811;
var G__22822 = chunk__22812;
var G__22823 = count__22813;
var G__22824 = (i__22814 + (1));
seq__22811 = G__22821;
chunk__22812 = G__22822;
count__22813 = G__22823;
i__22814 = G__22824;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22811);
if(temp__4657__auto__){
var seq__22811__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22811__$1)){
var c__21344__auto__ = cljs.core.chunk_first.call(null,seq__22811__$1);
var G__22825 = cljs.core.chunk_rest.call(null,seq__22811__$1);
var G__22826 = c__21344__auto__;
var G__22827 = cljs.core.count.call(null,c__21344__auto__);
var G__22828 = (0);
seq__22811 = G__22825;
chunk__22812 = G__22826;
count__22813 = G__22827;
i__22814 = G__22828;
continue;
} else {
var vec__22818 = cljs.core.first.call(null,seq__22811__$1);
var key = cljs.core.nth.call(null,vec__22818,(0),null);
var f = cljs.core.nth.call(null,vec__22818,(1),null);
f.call(null,key,this$__$1,oldval,newval);

var G__22829 = cljs.core.next.call(null,seq__22811__$1);
var G__22830 = null;
var G__22831 = (0);
var G__22832 = (0);
seq__22811 = G__22829;
chunk__22812 = G__22830;
count__22813 = G__22831;
i__22814 = G__22832;
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

crate.binding.notifier.cljs$lang$ctorPrWriter = (function (this__21136__auto__,writer__21137__auto__,opt__21138__auto__){
return cljs.core._write.call(null,writer__21137__auto__,"crate.binding/notifier");
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
return (function (_,___$1,___$2,p__22833){
var vec__22834 = p__22833;
var event = cljs.core.nth.call(null,vec__22834,(0),null);
var el = cljs.core.nth.call(null,vec__22834,(1),null);
var v = cljs.core.nth.call(null,vec__22834,(2),null);
return func.call(null,event,el,v);
});})(this$__$1))
);
});

crate.binding.bound_collection.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atm","atm",-1963551835,null),new cljs.core.Symbol(null,"notif","notif",-1551848296,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"stuff","stuff",-411032116,null)], null);
});

crate.binding.bound_collection.cljs$lang$type = true;

crate.binding.bound_collection.cljs$lang$ctorStr = "crate.binding/bound-collection";

crate.binding.bound_collection.cljs$lang$ctorPrWriter = (function (this__21136__auto__,writer__21137__auto__,opt__21138__auto__){
return cljs.core._write.call(null,writer__21137__auto__,"crate.binding/bound-collection");
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
var args__21645__auto__ = [];
var len__21638__auto___22839 = arguments.length;
var i__21639__auto___22840 = (0);
while(true){
if((i__21639__auto___22840 < len__21638__auto___22839)){
args__21645__auto__.push((arguments[i__21639__auto___22840]));

var G__22841 = (i__21639__auto___22840 + (1));
i__21639__auto___22840 = G__22841;
continue;
} else {
}
break;
}

var argseq__21646__auto__ = ((((1) < args__21645__auto__.length))?(new cljs.core.IndexedSeq(args__21645__auto__.slice((1)),(0),null)):null);
return crate.binding.__GT_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21646__auto__);
});

crate.binding.__GT_path.cljs$core$IFn$_invoke$arity$variadic = (function (bc,segs){
return cljs.core.concat.call(null,(function (){var or__20530__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_(or__20530__auto__)){
return or__20530__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),segs);
});

crate.binding.__GT_path.cljs$lang$maxFixedArity = (1);

crate.binding.__GT_path.cljs$lang$applyTo = (function (seq22837){
var G__22838 = cljs.core.first.call(null,seq22837);
var seq22837__$1 = cljs.core.next.call(null,seq22837);
return crate.binding.__GT_path.cljs$core$IFn$_invoke$arity$variadic(G__22838,seq22837__$1);
});

crate.binding.bc_compare = (function crate$binding$bc_compare(bc,neue){
var prev = bc.stuff;
var pset = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,prev));
var nset = crate.binding.__GT_keyed.call(null,neue,crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"keyfn","keyfn",780060332)));
var added = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,nset,pset));
var removed = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,pset,nset));
var seq__22850_22858 = cljs.core.seq.call(null,added);
var chunk__22851_22859 = null;
var count__22852_22860 = (0);
var i__22853_22861 = (0);
while(true){
if((i__22853_22861 < count__22852_22860)){
var a_22862 = cljs.core._nth.call(null,chunk__22851_22859,i__22853_22861);
crate.binding.bc_add.call(null,bc,a_22862,a_22862);

var G__22863 = seq__22850_22858;
var G__22864 = chunk__22851_22859;
var G__22865 = count__22852_22860;
var G__22866 = (i__22853_22861 + (1));
seq__22850_22858 = G__22863;
chunk__22851_22859 = G__22864;
count__22852_22860 = G__22865;
i__22853_22861 = G__22866;
continue;
} else {
var temp__4657__auto___22867 = cljs.core.seq.call(null,seq__22850_22858);
if(temp__4657__auto___22867){
var seq__22850_22868__$1 = temp__4657__auto___22867;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22850_22868__$1)){
var c__21344__auto___22869 = cljs.core.chunk_first.call(null,seq__22850_22868__$1);
var G__22870 = cljs.core.chunk_rest.call(null,seq__22850_22868__$1);
var G__22871 = c__21344__auto___22869;
var G__22872 = cljs.core.count.call(null,c__21344__auto___22869);
var G__22873 = (0);
seq__22850_22858 = G__22870;
chunk__22851_22859 = G__22871;
count__22852_22860 = G__22872;
i__22853_22861 = G__22873;
continue;
} else {
var a_22874 = cljs.core.first.call(null,seq__22850_22868__$1);
crate.binding.bc_add.call(null,bc,a_22874,a_22874);

var G__22875 = cljs.core.next.call(null,seq__22850_22868__$1);
var G__22876 = null;
var G__22877 = (0);
var G__22878 = (0);
seq__22850_22858 = G__22875;
chunk__22851_22859 = G__22876;
count__22852_22860 = G__22877;
i__22853_22861 = G__22878;
continue;
}
} else {
}
}
break;
}

var seq__22854 = cljs.core.seq.call(null,removed);
var chunk__22855 = null;
var count__22856 = (0);
var i__22857 = (0);
while(true){
if((i__22857 < count__22856)){
var r = cljs.core._nth.call(null,chunk__22855,i__22857);
crate.binding.bc_remove.call(null,bc,r);

var G__22879 = seq__22854;
var G__22880 = chunk__22855;
var G__22881 = count__22856;
var G__22882 = (i__22857 + (1));
seq__22854 = G__22879;
chunk__22855 = G__22880;
count__22856 = G__22881;
i__22857 = G__22882;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22854);
if(temp__4657__auto__){
var seq__22854__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22854__$1)){
var c__21344__auto__ = cljs.core.chunk_first.call(null,seq__22854__$1);
var G__22883 = cljs.core.chunk_rest.call(null,seq__22854__$1);
var G__22884 = c__21344__auto__;
var G__22885 = cljs.core.count.call(null,c__21344__auto__);
var G__22886 = (0);
seq__22854 = G__22883;
chunk__22855 = G__22884;
count__22856 = G__22885;
i__22857 = G__22886;
continue;
} else {
var r = cljs.core.first.call(null,seq__22854__$1);
crate.binding.bc_remove.call(null,bc,r);

var G__22887 = cljs.core.next.call(null,seq__22854__$1);
var G__22888 = null;
var G__22889 = (0);
var G__22890 = (0);
seq__22854 = G__22887;
chunk__22855 = G__22888;
count__22856 = G__22889;
i__22857 = G__22890;
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
var args__21645__auto__ = [];
var len__21638__auto___22900 = arguments.length;
var i__21639__auto___22901 = (0);
while(true){
if((i__21639__auto___22901 < len__21638__auto___22900)){
args__21645__auto__.push((arguments[i__21639__auto___22901]));

var G__22902 = (i__21639__auto___22901 + (1));
i__21639__auto___22901 = G__22902;
continue;
} else {
}
break;
}

var argseq__21646__auto__ = ((((1) < args__21645__auto__.length))?(new cljs.core.IndexedSeq(args__21645__auto__.slice((1)),(0),null)):null);
return crate.binding.bound_coll.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21646__auto__);
});

crate.binding.bound_coll.cljs$core$IFn$_invoke$arity$variadic = (function (atm,p__22893){
var vec__22894 = p__22893;
var path = cljs.core.nth.call(null,vec__22894,(0),null);
var opts = cljs.core.nth.call(null,vec__22894,(1),null);
var vec__22897 = (cljs.core.truth_(opts)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null));
var path__$1 = cljs.core.nth.call(null,vec__22897,(0),null);
var opts__$1 = cljs.core.nth.call(null,vec__22897,(1),null);
var atm__$1 = ((cljs.core.not.call(null,path__$1))?atm:crate.binding.subatom.call(null,atm,path__$1));
var opts__$2 = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"path","path",-188191168),path__$1);
var opts__$3 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.first):cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));
var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map.call(null)));
cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (vec__22897,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__22894,path,opts){
return (function (_,___$1,___$2,neue){
return crate.binding.bc_compare.call(null,bc,neue);
});})(vec__22897,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__22894,path,opts))
);

crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));

return bc;
});

crate.binding.bound_coll.cljs$lang$maxFixedArity = (1);

crate.binding.bound_coll.cljs$lang$applyTo = (function (seq22891){
var G__22892 = cljs.core.first.call(null,seq22891);
var seq22891__$1 = cljs.core.next.call(null,seq22891);
return crate.binding.bound_coll.cljs$core$IFn$_invoke$arity$variadic(G__22892,seq22891__$1);
});

crate.binding.map_bound = (function crate$binding$map_bound(var_args){
var args__21645__auto__ = [];
var len__21638__auto___22910 = arguments.length;
var i__21639__auto___22911 = (0);
while(true){
if((i__21639__auto___22911 < len__21638__auto___22910)){
args__21645__auto__.push((arguments[i__21639__auto___22911]));

var G__22912 = (i__21639__auto___22911 + (1));
i__21639__auto___22911 = G__22912;
continue;
} else {
}
break;
}

var argseq__21646__auto__ = ((((2) < args__21645__auto__.length))?(new cljs.core.IndexedSeq(args__21645__auto__.slice((2)),(0),null)):null);
return crate.binding.map_bound.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21646__auto__);
});

crate.binding.map_bound.cljs$core$IFn$_invoke$arity$variadic = (function (as,atm,p__22906){
var vec__22907 = p__22906;
var opts = cljs.core.nth.call(null,vec__22907,(0),null);
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"as","as",1148689641),as);
var atm__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom.call(null,atm,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts__$1)));
var opts__$2 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.first):cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));
var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map.call(null)));
cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (opts__$1,atm__$1,opts__$2,bc,vec__22907,opts){
return (function (_,___$1,___$2,neue){
return crate.binding.bc_compare.call(null,bc,neue);
});})(opts__$1,atm__$1,opts__$2,bc,vec__22907,opts))
);

crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));

return bc;
});

crate.binding.map_bound.cljs$lang$maxFixedArity = (2);

crate.binding.map_bound.cljs$lang$applyTo = (function (seq22903){
var G__22904 = cljs.core.first.call(null,seq22903);
var seq22903__$1 = cljs.core.next.call(null,seq22903);
var G__22905 = cljs.core.first.call(null,seq22903__$1);
var seq22903__$2 = cljs.core.next.call(null,seq22903__$1);
return crate.binding.map_bound.cljs$core$IFn$_invoke$arity$variadic(G__22904,G__22905,seq22903__$2);
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
var args__21645__auto__ = [];
var len__21638__auto___22925 = arguments.length;
var i__21639__auto___22926 = (0);
while(true){
if((i__21639__auto___22926 < len__21638__auto___22925)){
args__21645__auto__.push((arguments[i__21639__auto___22926]));

var G__22927 = (i__21639__auto___22926 + (1));
i__21639__auto___22926 = G__22927;
continue;
} else {
}
break;
}

var argseq__21646__auto__ = ((((1) < args__21645__auto__.length))?(new cljs.core.IndexedSeq(args__21645__auto__.slice((1)),(0),null)):null);
return crate.binding.bound.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21646__auto__);
});

crate.binding.bound.cljs$core$IFn$_invoke$arity$variadic = (function (atm,p__22921){
var vec__22922 = p__22921;
var func = cljs.core.nth.call(null,vec__22922,(0),null);
var func__$1 = (function (){var or__20530__auto__ = func;
if(cljs.core.truth_(or__20530__auto__)){
return or__20530__auto__;
} else {
return cljs.core.identity;
}
})();
return (new crate.binding.atom_binding(atm,func__$1));
});

crate.binding.bound.cljs$lang$maxFixedArity = (1);

crate.binding.bound.cljs$lang$applyTo = (function (seq22919){
var G__22920 = cljs.core.first.call(null,seq22919);
var seq22919__$1 = cljs.core.next.call(null,seq22919);
return crate.binding.bound.cljs$core$IFn$_invoke$arity$variadic(G__22920,seq22919__$1);
});


//# sourceMappingURL=binding.js.map?rel=1482038774598