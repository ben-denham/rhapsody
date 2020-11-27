// Compiled by ClojureScript 1.10.773 {}
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
});
(crate.binding.SubAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
}));

(crate.binding.SubAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path);
}));

(crate.binding.SubAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write.call(null,writer,["#<SubAtom: ",cljs.core.pr_str.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path)),">"].join(''));
}));

(crate.binding.SubAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__2246 = cljs.core.seq.call(null,self__.watches);
var chunk__2247 = null;
var count__2248 = (0);
var i__2249 = (0);
while(true){
if((i__2249 < count__2248)){
var vec__2256 = cljs.core._nth.call(null,chunk__2247,i__2249);
var key__$1 = cljs.core.nth.call(null,vec__2256,(0),null);
var f = cljs.core.nth.call(null,vec__2256,(1),null);
f.call(null,key__$1,this$__$1,oldval,newval);


var G__2262 = seq__2246;
var G__2263 = chunk__2247;
var G__2264 = count__2248;
var G__2265 = (i__2249 + (1));
seq__2246 = G__2262;
chunk__2247 = G__2263;
count__2248 = G__2264;
i__2249 = G__2265;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__2246);
if(temp__4657__auto__){
var seq__2246__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2246__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__2246__$1);
var G__2266 = cljs.core.chunk_rest.call(null,seq__2246__$1);
var G__2267 = c__4556__auto__;
var G__2268 = cljs.core.count.call(null,c__4556__auto__);
var G__2269 = (0);
seq__2246 = G__2266;
chunk__2247 = G__2267;
count__2248 = G__2268;
i__2249 = G__2269;
continue;
} else {
var vec__2259 = cljs.core.first.call(null,seq__2246__$1);
var key__$1 = cljs.core.nth.call(null,vec__2259,(0),null);
var f = cljs.core.nth.call(null,vec__2259,(1),null);
f.call(null,key__$1,this$__$1,oldval,newval);


var G__2270 = cljs.core.next.call(null,seq__2246__$1);
var G__2271 = null;
var G__2272 = (0);
var G__2273 = (0);
seq__2246 = G__2270;
chunk__2247 = G__2271;
count__2248 = G__2272;
i__2249 = G__2273;
continue;
}
} else {
return null;
}
}
break;
}
}));

(crate.binding.SubAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(f)){
return (this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f));
} else {
return null;
}
}));

(crate.binding.SubAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){
var self__ = this;
var this$__$1 = this;
return (this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1));
}));

(crate.binding.SubAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
}));

(crate.binding.SubAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atm","atm",-1963551835,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"prevhash","prevhash",1446045952,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"key","key",124488940,null)], null);
}));

(crate.binding.SubAtom.cljs$lang$type = true);

(crate.binding.SubAtom.cljs$lang$ctorStr = "crate.binding/SubAtom");

(crate.binding.SubAtom.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"crate.binding/SubAtom");
}));

/**
 * Positional factory function for crate.binding/SubAtom.
 */
crate.binding.__GT_SubAtom = (function crate$binding$__GT_SubAtom(atm,path,prevhash,watches,key){
return (new crate.binding.SubAtom(atm,path,prevhash,watches,key));
});

crate.binding.subatom = (function crate$binding$subatom(atm,path){
var path__$1 = ((cljs.core.coll_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var vec__2274 = (((atm instanceof crate.binding.SubAtom))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm.atm,cljs.core.concat.call(null,atm.path,path__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path__$1], null));
var atm__$1 = cljs.core.nth.call(null,vec__2274,(0),null);
var path__$2 = cljs.core.nth.call(null,vec__2274,(1),null);
var k = cljs.core.gensym.call(null,"subatom");
var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,atm__$1),path__$2)),null,k));
cljs.core.add_watch.call(null,atm__$1,k,(function (_,___$1,ov,nv){
var latest = cljs.core.get_in.call(null,nv,path__$2);
var prev = cljs.core.get_in.call(null,ov,path__$2);
var latest_hash = cljs.core.hash.call(null,latest);
if(((cljs.core.not_EQ_.call(null,sa.prevhash,latest_hash)) && (cljs.core.not_EQ_.call(null,prev,latest)))){
(sa.prevhash = latest_hash);

return cljs.core._notify_watches.call(null,sa,cljs.core.get_in.call(null,ov,path__$2),latest);
} else {
return null;
}
}));

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
var G__2284 = arguments.length;
switch (G__2284) {
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
var args_arr__4757__auto__ = [];
var len__4736__auto___2286 = arguments.length;
var i__4737__auto___2287 = (0);
while(true){
if((i__4737__auto___2287 < len__4736__auto___2286)){
args_arr__4757__auto__.push((arguments[i__4737__auto___2287]));

var G__2288 = (i__4737__auto___2287 + (1));
i__4737__auto___2287 = G__2288;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((5)),(0),null));
return crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4758__auto__);

}
});

(crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (sa,f){
return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa)));
}));

(crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (sa,f,x){
return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x));
}));

(crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (sa,f,x,y){
return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y));
}));

(crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (sa,f,x,y,z){
return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y,z));
}));

(crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (sa,f,x,y,z,more){
return crate.binding.sub_reset_BANG_.call(null,sa,cljs.core.apply.call(null,f,cljs.core.deref.call(null,sa),x,y,z,more));
}));

/** @this {Function} */
(crate.binding.sub_swap_BANG_.cljs$lang$applyTo = (function (seq2278){
var G__2279 = cljs.core.first.call(null,seq2278);
var seq2278__$1 = cljs.core.next.call(null,seq2278);
var G__2280 = cljs.core.first.call(null,seq2278__$1);
var seq2278__$2 = cljs.core.next.call(null,seq2278__$1);
var G__2281 = cljs.core.first.call(null,seq2278__$2);
var seq2278__$3 = cljs.core.next.call(null,seq2278__$2);
var G__2282 = cljs.core.first.call(null,seq2278__$3);
var seq2278__$4 = cljs.core.next.call(null,seq2278__$3);
var G__2283 = cljs.core.first.call(null,seq2278__$4);
var seq2278__$5 = cljs.core.next.call(null,seq2278__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2279,G__2280,G__2281,G__2282,G__2283,seq2278__$5);
}));

(crate.binding.sub_swap_BANG_.cljs$lang$maxFixedArity = (5));

crate.binding.sub_destroy_BANG_ = (function crate$binding$sub_destroy_BANG_(sa){
cljs.core.remove_watch.call(null,sa.atm,sa.key);

(sa.watches = null);

return (sa.atm = null);
});

/**
 * @interface
 */
crate.binding.computable = function(){};

var crate$binding$computable$_compute$dyn_2289 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (crate.binding._compute[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (crate.binding._compute["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"computable.-compute",this$);
}
}
});
/**
 * compute the latest value
 */
crate.binding._compute = (function crate$binding$_compute(this$){
if((((!((this$ == null)))) && ((!((this$.crate$binding$computable$_compute$arity$1 == null)))))){
return this$.crate$binding$computable$_compute$arity$1(this$);
} else {
return crate$binding$computable$_compute$dyn_2289.call(null,this$);
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
});
(crate.binding.Computed.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
}));

(crate.binding.Computed.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
}));

(crate.binding.Computed.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write.call(null,writer,["#<Computed: ",cljs.core.pr_str.call(null,self__.value),">"].join(''));
}));

(crate.binding.Computed.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__2290 = cljs.core.seq.call(null,self__.watches);
var chunk__2291 = null;
var count__2292 = (0);
var i__2293 = (0);
while(true){
if((i__2293 < count__2292)){
var vec__2300 = cljs.core._nth.call(null,chunk__2291,i__2293);
var key__$1 = cljs.core.nth.call(null,vec__2300,(0),null);
var f = cljs.core.nth.call(null,vec__2300,(1),null);
f.call(null,key__$1,this$__$1,oldval,newval);


var G__2306 = seq__2290;
var G__2307 = chunk__2291;
var G__2308 = count__2292;
var G__2309 = (i__2293 + (1));
seq__2290 = G__2306;
chunk__2291 = G__2307;
count__2292 = G__2308;
i__2293 = G__2309;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__2290);
if(temp__4657__auto__){
var seq__2290__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2290__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__2290__$1);
var G__2310 = cljs.core.chunk_rest.call(null,seq__2290__$1);
var G__2311 = c__4556__auto__;
var G__2312 = cljs.core.count.call(null,c__4556__auto__);
var G__2313 = (0);
seq__2290 = G__2310;
chunk__2291 = G__2311;
count__2292 = G__2312;
i__2293 = G__2313;
continue;
} else {
var vec__2303 = cljs.core.first.call(null,seq__2290__$1);
var key__$1 = cljs.core.nth.call(null,vec__2303,(0),null);
var f = cljs.core.nth.call(null,vec__2303,(1),null);
f.call(null,key__$1,this$__$1,oldval,newval);


var G__2314 = cljs.core.next.call(null,seq__2290__$1);
var G__2315 = null;
var G__2316 = (0);
var G__2317 = (0);
seq__2290 = G__2314;
chunk__2291 = G__2315;
count__2292 = G__2316;
i__2293 = G__2317;
continue;
}
} else {
return null;
}
}
break;
}
}));

(crate.binding.Computed.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(f)){
return (this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f));
} else {
return null;
}
}));

(crate.binding.Computed.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){
var self__ = this;
var this$__$1 = this;
return (this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1));
}));

(crate.binding.Computed.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
}));

(crate.binding.Computed.prototype.crate$binding$computable$ = cljs.core.PROTOCOL_SENTINEL);

(crate.binding.Computed.prototype.crate$binding$computable$_compute$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var old = this$__$1.value;
(this$__$1.value = cljs.core.apply.call(null,self__.func,cljs.core.map.call(null,cljs.core.deref,self__.atms)));

return cljs.core._notify_watches.call(null,this$__$1,old,this$__$1.value);
}));

(crate.binding.Computed.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atms","atms",-855465715,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"key","key",124488940,null)], null);
}));

(crate.binding.Computed.cljs$lang$type = true);

(crate.binding.Computed.cljs$lang$ctorStr = "crate.binding/Computed");

(crate.binding.Computed.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"crate.binding/Computed");
}));

/**
 * Positional factory function for crate.binding/Computed.
 */
crate.binding.__GT_Computed = (function crate$binding$__GT_Computed(atms,value,func,watches,key){
return (new crate.binding.Computed(atms,value,func,watches,key));
});

crate.binding.computed = (function crate$binding$computed(atms,func){
var k = cljs.core.gensym.call(null,"computed");
var neue = (new crate.binding.Computed(atms,null,func,null,k));
crate.binding._compute.call(null,neue);

var seq__2318_2322 = cljs.core.seq.call(null,atms);
var chunk__2319_2323 = null;
var count__2320_2324 = (0);
var i__2321_2325 = (0);
while(true){
if((i__2321_2325 < count__2320_2324)){
var atm_2326 = cljs.core._nth.call(null,chunk__2319_2323,i__2321_2325);
cljs.core.add_watch.call(null,atm_2326,k,((function (seq__2318_2322,chunk__2319_2323,count__2320_2324,i__2321_2325,atm_2326,k,neue){
return (function (_,___$1,___$2,___$3){
return crate.binding._compute.call(null,neue);
});})(seq__2318_2322,chunk__2319_2323,count__2320_2324,i__2321_2325,atm_2326,k,neue))
);


var G__2327 = seq__2318_2322;
var G__2328 = chunk__2319_2323;
var G__2329 = count__2320_2324;
var G__2330 = (i__2321_2325 + (1));
seq__2318_2322 = G__2327;
chunk__2319_2323 = G__2328;
count__2320_2324 = G__2329;
i__2321_2325 = G__2330;
continue;
} else {
var temp__4657__auto___2331 = cljs.core.seq.call(null,seq__2318_2322);
if(temp__4657__auto___2331){
var seq__2318_2332__$1 = temp__4657__auto___2331;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2318_2332__$1)){
var c__4556__auto___2333 = cljs.core.chunk_first.call(null,seq__2318_2332__$1);
var G__2334 = cljs.core.chunk_rest.call(null,seq__2318_2332__$1);
var G__2335 = c__4556__auto___2333;
var G__2336 = cljs.core.count.call(null,c__4556__auto___2333);
var G__2337 = (0);
seq__2318_2322 = G__2334;
chunk__2319_2323 = G__2335;
count__2320_2324 = G__2336;
i__2321_2325 = G__2337;
continue;
} else {
var atm_2338 = cljs.core.first.call(null,seq__2318_2332__$1);
cljs.core.add_watch.call(null,atm_2338,k,((function (seq__2318_2322,chunk__2319_2323,count__2320_2324,i__2321_2325,atm_2338,seq__2318_2332__$1,temp__4657__auto___2331,k,neue){
return (function (_,___$1,___$2,___$3){
return crate.binding._compute.call(null,neue);
});})(seq__2318_2322,chunk__2319_2323,count__2320_2324,i__2321_2325,atm_2338,seq__2318_2332__$1,temp__4657__auto___2331,k,neue))
);


var G__2339 = cljs.core.next.call(null,seq__2318_2332__$1);
var G__2340 = null;
var G__2341 = (0);
var G__2342 = (0);
seq__2318_2322 = G__2339;
chunk__2319_2323 = G__2340;
count__2320_2324 = G__2341;
i__2321_2325 = G__2342;
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
return cljs.core.filter.call(null,(function (p1__2343_SHARP_){
return (p1__2343_SHARP_ > (100));
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

var crate$binding$bindable$_value$dyn_2344 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (crate.binding._value[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (crate.binding._value["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"bindable.-value",this$);
}
}
});
/**
 * get the current value of this binding
 */
crate.binding._value = (function crate$binding$_value(this$){
if((((!((this$ == null)))) && ((!((this$.crate$binding$bindable$_value$arity$1 == null)))))){
return this$.crate$binding$bindable$_value$arity$1(this$);
} else {
return crate$binding$bindable$_value$dyn_2344.call(null,this$);
}
});

var crate$binding$bindable$_on_change$dyn_2345 = (function (this$,func){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (crate.binding._on_change[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,func);
} else {
var m__4426__auto__ = (crate.binding._on_change["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,func);
} else {
throw cljs.core.missing_protocol.call(null,"bindable.-on-change",this$);
}
}
});
/**
 * On change of this binding execute func
 */
crate.binding._on_change = (function crate$binding$_on_change(this$,func){
if((((!((this$ == null)))) && ((!((this$.crate$binding$bindable$_on_change$arity$2 == null)))))){
return this$.crate$binding$bindable$_on_change$arity$2(this$,func);
} else {
return crate$binding$bindable$_on_change$dyn_2345.call(null,this$,func);
}
});


/**
* @constructor
 * @implements {crate.binding.bindable}
*/
crate.binding.atom_binding = (function (atm,value_func){
this.atm = atm;
this.value_func = value_func;
});
(crate.binding.atom_binding.prototype.crate$binding$bindable$ = cljs.core.PROTOCOL_SENTINEL);

(crate.binding.atom_binding.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.value_func.call(null,cljs.core.deref.call(null,self__.atm));
}));

(crate.binding.atom_binding.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){
var self__ = this;
var this$__$1 = this;
return cljs.core.add_watch.call(null,self__.atm,cljs.core.gensym.call(null,"atom-binding"),(function (){
return func.call(null,crate.binding._value.call(null,this$__$1));
}));
}));

(crate.binding.atom_binding.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atm","atm",-1963551835,null),new cljs.core.Symbol(null,"value-func","value-func",2077951825,null)], null);
}));

(crate.binding.atom_binding.cljs$lang$type = true);

(crate.binding.atom_binding.cljs$lang$ctorStr = "crate.binding/atom-binding");

(crate.binding.atom_binding.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"crate.binding/atom-binding");
}));

/**
 * Positional factory function for crate.binding/atom-binding.
 */
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
});
(crate.binding.notifier.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__2346 = cljs.core.seq.call(null,self__.watches);
var chunk__2347 = null;
var count__2348 = (0);
var i__2349 = (0);
while(true){
if((i__2349 < count__2348)){
var vec__2356 = cljs.core._nth.call(null,chunk__2347,i__2349);
var key = cljs.core.nth.call(null,vec__2356,(0),null);
var f = cljs.core.nth.call(null,vec__2356,(1),null);
f.call(null,key,this$__$1,oldval,newval);


var G__2362 = seq__2346;
var G__2363 = chunk__2347;
var G__2364 = count__2348;
var G__2365 = (i__2349 + (1));
seq__2346 = G__2362;
chunk__2347 = G__2363;
count__2348 = G__2364;
i__2349 = G__2365;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__2346);
if(temp__4657__auto__){
var seq__2346__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2346__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__2346__$1);
var G__2366 = cljs.core.chunk_rest.call(null,seq__2346__$1);
var G__2367 = c__4556__auto__;
var G__2368 = cljs.core.count.call(null,c__4556__auto__);
var G__2369 = (0);
seq__2346 = G__2366;
chunk__2347 = G__2367;
count__2348 = G__2368;
i__2349 = G__2369;
continue;
} else {
var vec__2359 = cljs.core.first.call(null,seq__2346__$1);
var key = cljs.core.nth.call(null,vec__2359,(0),null);
var f = cljs.core.nth.call(null,vec__2359,(1),null);
f.call(null,key,this$__$1,oldval,newval);


var G__2370 = cljs.core.next.call(null,seq__2346__$1);
var G__2371 = null;
var G__2372 = (0);
var G__2373 = (0);
seq__2346 = G__2370;
chunk__2347 = G__2371;
count__2348 = G__2372;
i__2349 = G__2373;
continue;
}
} else {
return null;
}
}
break;
}
}));

(crate.binding.notifier.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return (this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f));
}));

(crate.binding.notifier.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key));
}));

(crate.binding.notifier.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"watches","watches",1367433992,null)], null);
}));

(crate.binding.notifier.cljs$lang$type = true);

(crate.binding.notifier.cljs$lang$ctorStr = "crate.binding/notifier");

(crate.binding.notifier.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"crate.binding/notifier");
}));

/**
 * Positional factory function for crate.binding/notifier.
 */
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
});
(crate.binding.bound_collection.prototype.crate$binding$bindable_coll$ = cljs.core.PROTOCOL_SENTINEL);

(crate.binding.bound_collection.prototype.crate$binding$bindable$ = cljs.core.PROTOCOL_SENTINEL);

(crate.binding.bound_collection.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.map.call(null,new cljs.core.Keyword(null,"elem","elem",618631056),cljs.core.vals.call(null,this$__$1.stuff));
}));

(crate.binding.bound_collection.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){
var self__ = this;
var this$__$1 = this;
return cljs.core.add_watch.call(null,self__.notif,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,p__2374){
var vec__2375 = p__2374;
var event = cljs.core.nth.call(null,vec__2375,(0),null);
var el = cljs.core.nth.call(null,vec__2375,(1),null);
var v = cljs.core.nth.call(null,vec__2375,(2),null);
return func.call(null,event,el,v);
}));
}));

(crate.binding.bound_collection.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atm","atm",-1963551835,null),new cljs.core.Symbol(null,"notif","notif",-1551848296,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"stuff","stuff",-411032116,null)], null);
}));

(crate.binding.bound_collection.cljs$lang$type = true);

(crate.binding.bound_collection.cljs$lang$ctorStr = "crate.binding/bound-collection");

(crate.binding.bound_collection.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"crate.binding/bound-collection");
}));

/**
 * Positional factory function for crate.binding/bound-collection.
 */
crate.binding.__GT_bound_collection = (function crate$binding$__GT_bound_collection(atm,notif,opts,stuff){
return (new crate.binding.bound_collection(atm,notif,opts,stuff));
});

crate.binding.opt = (function crate$binding$opt(bc,k){
return bc.opts.call(null,k);
});
crate.binding.bc_add = (function crate$binding$bc_add(bc,path,key){
var sa = crate.binding.subatom.call(null,bc.atm,path);
var elem = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"as","as",1148689641)).call(null,sa);
(bc.stuff = cljs.core.assoc.call(null,bc.stuff,key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",618631056),elem,new cljs.core.Keyword(null,"subatom","subatom",-95454370),sa], null)));

return crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add","add",235287739),elem,cljs.core.deref.call(null,sa)], null));
});
crate.binding.bc_remove = (function crate$binding$bc_remove(bc,key){
var notif = bc.notif;
var prev = bc.stuff.call(null,key);
(bc.stuff = cljs.core.dissoc.call(null,bc.stuff,key));

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
var args__4742__auto__ = [];
var len__4736__auto___2380 = arguments.length;
var i__4737__auto___2381 = (0);
while(true){
if((i__4737__auto___2381 < len__4736__auto___2380)){
args__4742__auto__.push((arguments[i__4737__auto___2381]));

var G__2382 = (i__4737__auto___2381 + (1));
i__4737__auto___2381 = G__2382;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return crate.binding.__GT_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(crate.binding.__GT_path.cljs$core$IFn$_invoke$arity$variadic = (function (bc,segs){
return cljs.core.concat.call(null,(function (){var or__4126__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),segs);
}));

(crate.binding.__GT_path.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(crate.binding.__GT_path.cljs$lang$applyTo = (function (seq2378){
var G__2379 = cljs.core.first.call(null,seq2378);
var seq2378__$1 = cljs.core.next.call(null,seq2378);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2379,seq2378__$1);
}));

crate.binding.bc_compare = (function crate$binding$bc_compare(bc,neue){
var prev = bc.stuff;
var pset = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,prev));
var nset = crate.binding.__GT_keyed.call(null,neue,crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"keyfn","keyfn",780060332)));
var added = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,nset,pset));
var removed = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,pset,nset));
var seq__2383_2391 = cljs.core.seq.call(null,added);
var chunk__2384_2392 = null;
var count__2385_2393 = (0);
var i__2386_2394 = (0);
while(true){
if((i__2386_2394 < count__2385_2393)){
var a_2395 = cljs.core._nth.call(null,chunk__2384_2392,i__2386_2394);
crate.binding.bc_add.call(null,bc,a_2395,a_2395);


var G__2396 = seq__2383_2391;
var G__2397 = chunk__2384_2392;
var G__2398 = count__2385_2393;
var G__2399 = (i__2386_2394 + (1));
seq__2383_2391 = G__2396;
chunk__2384_2392 = G__2397;
count__2385_2393 = G__2398;
i__2386_2394 = G__2399;
continue;
} else {
var temp__4657__auto___2400 = cljs.core.seq.call(null,seq__2383_2391);
if(temp__4657__auto___2400){
var seq__2383_2401__$1 = temp__4657__auto___2400;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2383_2401__$1)){
var c__4556__auto___2402 = cljs.core.chunk_first.call(null,seq__2383_2401__$1);
var G__2403 = cljs.core.chunk_rest.call(null,seq__2383_2401__$1);
var G__2404 = c__4556__auto___2402;
var G__2405 = cljs.core.count.call(null,c__4556__auto___2402);
var G__2406 = (0);
seq__2383_2391 = G__2403;
chunk__2384_2392 = G__2404;
count__2385_2393 = G__2405;
i__2386_2394 = G__2406;
continue;
} else {
var a_2407 = cljs.core.first.call(null,seq__2383_2401__$1);
crate.binding.bc_add.call(null,bc,a_2407,a_2407);


var G__2408 = cljs.core.next.call(null,seq__2383_2401__$1);
var G__2409 = null;
var G__2410 = (0);
var G__2411 = (0);
seq__2383_2391 = G__2408;
chunk__2384_2392 = G__2409;
count__2385_2393 = G__2410;
i__2386_2394 = G__2411;
continue;
}
} else {
}
}
break;
}

var seq__2387 = cljs.core.seq.call(null,removed);
var chunk__2388 = null;
var count__2389 = (0);
var i__2390 = (0);
while(true){
if((i__2390 < count__2389)){
var r = cljs.core._nth.call(null,chunk__2388,i__2390);
crate.binding.bc_remove.call(null,bc,r);


var G__2412 = seq__2387;
var G__2413 = chunk__2388;
var G__2414 = count__2389;
var G__2415 = (i__2390 + (1));
seq__2387 = G__2412;
chunk__2388 = G__2413;
count__2389 = G__2414;
i__2390 = G__2415;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__2387);
if(temp__4657__auto__){
var seq__2387__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2387__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__2387__$1);
var G__2416 = cljs.core.chunk_rest.call(null,seq__2387__$1);
var G__2417 = c__4556__auto__;
var G__2418 = cljs.core.count.call(null,c__4556__auto__);
var G__2419 = (0);
seq__2387 = G__2416;
chunk__2388 = G__2417;
count__2389 = G__2418;
i__2390 = G__2419;
continue;
} else {
var r = cljs.core.first.call(null,seq__2387__$1);
crate.binding.bc_remove.call(null,bc,r);


var G__2420 = cljs.core.next.call(null,seq__2387__$1);
var G__2421 = null;
var G__2422 = (0);
var G__2423 = (0);
seq__2387 = G__2420;
chunk__2388 = G__2421;
count__2389 = G__2422;
i__2390 = G__2423;
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
var args__4742__auto__ = [];
var len__4736__auto___2433 = arguments.length;
var i__4737__auto___2434 = (0);
while(true){
if((i__4737__auto___2434 < len__4736__auto___2433)){
args__4742__auto__.push((arguments[i__4737__auto___2434]));

var G__2435 = (i__4737__auto___2434 + (1));
i__4737__auto___2434 = G__2435;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return crate.binding.bound_coll.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(crate.binding.bound_coll.cljs$core$IFn$_invoke$arity$variadic = (function (atm,p__2426){
var vec__2427 = p__2426;
var path = cljs.core.nth.call(null,vec__2427,(0),null);
var opts = cljs.core.nth.call(null,vec__2427,(1),null);
var vec__2430 = (cljs.core.truth_(opts)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null));
var path__$1 = cljs.core.nth.call(null,vec__2430,(0),null);
var opts__$1 = cljs.core.nth.call(null,vec__2430,(1),null);
var atm__$1 = ((cljs.core.not.call(null,path__$1))?atm:crate.binding.subatom.call(null,atm,path__$1));
var opts__$2 = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"path","path",-188191168),path__$1);
var opts__$3 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.first):cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));
var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map.call(null)));
cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,neue){
return crate.binding.bc_compare.call(null,bc,neue);
}));

crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));

return bc;
}));

(crate.binding.bound_coll.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(crate.binding.bound_coll.cljs$lang$applyTo = (function (seq2424){
var G__2425 = cljs.core.first.call(null,seq2424);
var seq2424__$1 = cljs.core.next.call(null,seq2424);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2425,seq2424__$1);
}));

crate.binding.map_bound = (function crate$binding$map_bound(var_args){
var args__4742__auto__ = [];
var len__4736__auto___2443 = arguments.length;
var i__4737__auto___2444 = (0);
while(true){
if((i__4737__auto___2444 < len__4736__auto___2443)){
args__4742__auto__.push((arguments[i__4737__auto___2444]));

var G__2445 = (i__4737__auto___2444 + (1));
i__4737__auto___2444 = G__2445;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return crate.binding.map_bound.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(crate.binding.map_bound.cljs$core$IFn$_invoke$arity$variadic = (function (as,atm,p__2439){
var vec__2440 = p__2439;
var opts = cljs.core.nth.call(null,vec__2440,(0),null);
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"as","as",1148689641),as);
var atm__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom.call(null,atm,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts__$1)));
var opts__$2 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.first):cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));
var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map.call(null)));
cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,neue){
return crate.binding.bc_compare.call(null,bc,neue);
}));

crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));

return bc;
}));

(crate.binding.map_bound.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(crate.binding.map_bound.cljs$lang$applyTo = (function (seq2436){
var G__2437 = cljs.core.first.call(null,seq2436);
var seq2436__$1 = cljs.core.next.call(null,seq2436);
var G__2438 = cljs.core.first.call(null,seq2436__$1);
var seq2436__$2 = cljs.core.next.call(null,seq2436__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2437,G__2438,seq2436__$2);
}));

crate.binding.binding_QMARK_ = (function crate$binding$binding_QMARK_(b){
if((!((b == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === b.crate$binding$bindable$)))){
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
if((!((b == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === b.crate$binding$bindable_coll$)))){
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
if((!((atm == null)))){
if((((atm.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === atm.cljs$core$IDeref$)))){
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
var args__4742__auto__ = [];
var len__4736__auto___2455 = arguments.length;
var i__4737__auto___2456 = (0);
while(true){
if((i__4737__auto___2456 < len__4736__auto___2455)){
args__4742__auto__.push((arguments[i__4737__auto___2456]));

var G__2457 = (i__4737__auto___2456 + (1));
i__4737__auto___2456 = G__2457;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return crate.binding.bound.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(crate.binding.bound.cljs$core$IFn$_invoke$arity$variadic = (function (atm,p__2451){
var vec__2452 = p__2451;
var func = cljs.core.nth.call(null,vec__2452,(0),null);
var func__$1 = (function (){var or__4126__auto__ = func;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.identity;
}
})();
return (new crate.binding.atom_binding(atm,func__$1));
}));

(crate.binding.bound.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(crate.binding.bound.cljs$lang$applyTo = (function (seq2449){
var G__2450 = cljs.core.first.call(null,seq2449);
var seq2449__$1 = cljs.core.next.call(null,seq2449);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2450,seq2449__$1);
}));


//# sourceMappingURL=binding.js.map
