// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__7544__auto__,writer__7545__auto__,opt__7546__auto__){
return cljs.core._write.call(null,writer__7545__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8151 = arguments.length;
var i__8047__auto___8152 = (0);
while(true){
if((i__8047__auto___8152 < len__8046__auto___8151)){
args__8053__auto__.push((arguments[i__8047__auto___8152]));

var G__8153 = (i__8047__auto___8152 + (1));
i__8047__auto___8152 = G__8153;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq8150){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8150));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8155 = arguments.length;
var i__8047__auto___8156 = (0);
while(true){
if((i__8047__auto___8156 < len__8046__auto___8155)){
args__8053__auto__.push((arguments[i__8047__auto___8156]));

var G__8157 = (i__8047__auto___8156 + (1));
i__8047__auto___8156 = G__8157;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq8154){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8154));
});

var g_QMARK__8158 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_8159 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__8158){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__8158))
,null));
var mkg_8160 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__8158,g_8159){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__8158,g_8159))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__8158,g_8159,mkg_8160){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__8158).call(null,x);
});})(g_QMARK__8158,g_8159,mkg_8160))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__8158,g_8159,mkg_8160){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_8160).call(null,gfn);
});})(g_QMARK__8158,g_8159,mkg_8160))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__8158,g_8159,mkg_8160){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_8159).call(null,generator);
});})(g_QMARK__8158,g_8159,mkg_8160))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__8122__auto___8179 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__8122__auto___8179){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8180 = arguments.length;
var i__8047__auto___8181 = (0);
while(true){
if((i__8047__auto___8181 < len__8046__auto___8180)){
args__8053__auto__.push((arguments[i__8047__auto___8181]));

var G__8182 = (i__8047__auto___8181 + (1));
i__8047__auto___8181 = G__8182;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8122__auto___8179))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8122__auto___8179){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8122__auto___8179),args);
});})(g__8122__auto___8179))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__8122__auto___8179){
return (function (seq8161){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8161));
});})(g__8122__auto___8179))
;


var g__8122__auto___8183 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__8122__auto___8183){
return (function cljs$spec$impl$gen$list(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8184 = arguments.length;
var i__8047__auto___8185 = (0);
while(true){
if((i__8047__auto___8185 < len__8046__auto___8184)){
args__8053__auto__.push((arguments[i__8047__auto___8185]));

var G__8186 = (i__8047__auto___8185 + (1));
i__8047__auto___8185 = G__8186;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8122__auto___8183))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8122__auto___8183){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8122__auto___8183),args);
});})(g__8122__auto___8183))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__8122__auto___8183){
return (function (seq8162){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8162));
});})(g__8122__auto___8183))
;


var g__8122__auto___8187 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__8122__auto___8187){
return (function cljs$spec$impl$gen$map(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8188 = arguments.length;
var i__8047__auto___8189 = (0);
while(true){
if((i__8047__auto___8189 < len__8046__auto___8188)){
args__8053__auto__.push((arguments[i__8047__auto___8189]));

var G__8190 = (i__8047__auto___8189 + (1));
i__8047__auto___8189 = G__8190;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8122__auto___8187))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8122__auto___8187){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8122__auto___8187),args);
});})(g__8122__auto___8187))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__8122__auto___8187){
return (function (seq8163){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8163));
});})(g__8122__auto___8187))
;


var g__8122__auto___8191 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__8122__auto___8191){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8192 = arguments.length;
var i__8047__auto___8193 = (0);
while(true){
if((i__8047__auto___8193 < len__8046__auto___8192)){
args__8053__auto__.push((arguments[i__8047__auto___8193]));

var G__8194 = (i__8047__auto___8193 + (1));
i__8047__auto___8193 = G__8194;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8122__auto___8191))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8122__auto___8191){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8122__auto___8191),args);
});})(g__8122__auto___8191))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__8122__auto___8191){
return (function (seq8164){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8164));
});})(g__8122__auto___8191))
;


var g__8122__auto___8195 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__8122__auto___8195){
return (function cljs$spec$impl$gen$set(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8196 = arguments.length;
var i__8047__auto___8197 = (0);
while(true){
if((i__8047__auto___8197 < len__8046__auto___8196)){
args__8053__auto__.push((arguments[i__8047__auto___8197]));

var G__8198 = (i__8047__auto___8197 + (1));
i__8047__auto___8197 = G__8198;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8122__auto___8195))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8122__auto___8195){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8122__auto___8195),args);
});})(g__8122__auto___8195))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__8122__auto___8195){
return (function (seq8165){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8165));
});})(g__8122__auto___8195))
;


var g__8122__auto___8199 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__8122__auto___8199){
return (function cljs$spec$impl$gen$vector(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8200 = arguments.length;
var i__8047__auto___8201 = (0);
while(true){
if((i__8047__auto___8201 < len__8046__auto___8200)){
args__8053__auto__.push((arguments[i__8047__auto___8201]));

var G__8202 = (i__8047__auto___8201 + (1));
i__8047__auto___8201 = G__8202;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8122__auto___8199))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8122__auto___8199){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8122__auto___8199),args);
});})(g__8122__auto___8199))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__8122__auto___8199){
return (function (seq8166){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8166));
});})(g__8122__auto___8199))
;


var g__8122__auto___8203 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__8122__auto___8203){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8204 = arguments.length;
var i__8047__auto___8205 = (0);
while(true){
if((i__8047__auto___8205 < len__8046__auto___8204)){
args__8053__auto__.push((arguments[i__8047__auto___8205]));

var G__8206 = (i__8047__auto___8205 + (1));
i__8047__auto___8205 = G__8206;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8122__auto___8203))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8122__auto___8203){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8122__auto___8203),args);
});})(g__8122__auto___8203))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__8122__auto___8203){
return (function (seq8167){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8167));
});})(g__8122__auto___8203))
;


var g__8122__auto___8207 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__8122__auto___8207){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8208 = arguments.length;
var i__8047__auto___8209 = (0);
while(true){
if((i__8047__auto___8209 < len__8046__auto___8208)){
args__8053__auto__.push((arguments[i__8047__auto___8209]));

var G__8210 = (i__8047__auto___8209 + (1));
i__8047__auto___8209 = G__8210;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8122__auto___8207))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8122__auto___8207){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8122__auto___8207),args);
});})(g__8122__auto___8207))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__8122__auto___8207){
return (function (seq8168){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8168));
});})(g__8122__auto___8207))
;


var g__8122__auto___8211 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__8122__auto___8211){
return (function cljs$spec$impl$gen$elements(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8212 = arguments.length;
var i__8047__auto___8213 = (0);
while(true){
if((i__8047__auto___8213 < len__8046__auto___8212)){
args__8053__auto__.push((arguments[i__8047__auto___8213]));

var G__8214 = (i__8047__auto___8213 + (1));
i__8047__auto___8213 = G__8214;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8122__auto___8211))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8122__auto___8211){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8122__auto___8211),args);
});})(g__8122__auto___8211))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__8122__auto___8211){
return (function (seq8169){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8169));
});})(g__8122__auto___8211))
;


var g__8122__auto___8215 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__8122__auto___8215){
return (function cljs$spec$impl$gen$bind(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8216 = arguments.length;
var i__8047__auto___8217 = (0);
while(true){
if((i__8047__auto___8217 < len__8046__auto___8216)){
args__8053__auto__.push((arguments[i__8047__auto___8217]));

var G__8218 = (i__8047__auto___8217 + (1));
i__8047__auto___8217 = G__8218;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8122__auto___8215))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8122__auto___8215){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8122__auto___8215),args);
});})(g__8122__auto___8215))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__8122__auto___8215){
return (function (seq8170){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8170));
});})(g__8122__auto___8215))
;


var g__8122__auto___8219 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__8122__auto___8219){
return (function cljs$spec$impl$gen$choose(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8220 = arguments.length;
var i__8047__auto___8221 = (0);
while(true){
if((i__8047__auto___8221 < len__8046__auto___8220)){
args__8053__auto__.push((arguments[i__8047__auto___8221]));

var G__8222 = (i__8047__auto___8221 + (1));
i__8047__auto___8221 = G__8222;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8122__auto___8219))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8122__auto___8219){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8122__auto___8219),args);
});})(g__8122__auto___8219))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__8122__auto___8219){
return (function (seq8171){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8171));
});})(g__8122__auto___8219))
;


var g__8122__auto___8223 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__8122__auto___8223){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8224 = arguments.length;
var i__8047__auto___8225 = (0);
while(true){
if((i__8047__auto___8225 < len__8046__auto___8224)){
args__8053__auto__.push((arguments[i__8047__auto___8225]));

var G__8226 = (i__8047__auto___8225 + (1));
i__8047__auto___8225 = G__8226;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8122__auto___8223))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8122__auto___8223){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8122__auto___8223),args);
});})(g__8122__auto___8223))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__8122__auto___8223){
return (function (seq8172){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8172));
});})(g__8122__auto___8223))
;


var g__8122__auto___8227 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__8122__auto___8227){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8228 = arguments.length;
var i__8047__auto___8229 = (0);
while(true){
if((i__8047__auto___8229 < len__8046__auto___8228)){
args__8053__auto__.push((arguments[i__8047__auto___8229]));

var G__8230 = (i__8047__auto___8229 + (1));
i__8047__auto___8229 = G__8230;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8122__auto___8227))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8122__auto___8227){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8122__auto___8227),args);
});})(g__8122__auto___8227))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__8122__auto___8227){
return (function (seq8173){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8173));
});})(g__8122__auto___8227))
;


var g__8122__auto___8231 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__8122__auto___8231){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8232 = arguments.length;
var i__8047__auto___8233 = (0);
while(true){
if((i__8047__auto___8233 < len__8046__auto___8232)){
args__8053__auto__.push((arguments[i__8047__auto___8233]));

var G__8234 = (i__8047__auto___8233 + (1));
i__8047__auto___8233 = G__8234;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8122__auto___8231))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8122__auto___8231){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8122__auto___8231),args);
});})(g__8122__auto___8231))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__8122__auto___8231){
return (function (seq8174){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8174));
});})(g__8122__auto___8231))
;


var g__8122__auto___8235 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__8122__auto___8235){
return (function cljs$spec$impl$gen$sample(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8236 = arguments.length;
var i__8047__auto___8237 = (0);
while(true){
if((i__8047__auto___8237 < len__8046__auto___8236)){
args__8053__auto__.push((arguments[i__8047__auto___8237]));

var G__8238 = (i__8047__auto___8237 + (1));
i__8047__auto___8237 = G__8238;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8122__auto___8235))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8122__auto___8235){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8122__auto___8235),args);
});})(g__8122__auto___8235))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__8122__auto___8235){
return (function (seq8175){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8175));
});})(g__8122__auto___8235))
;


var g__8122__auto___8239 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__8122__auto___8239){
return (function cljs$spec$impl$gen$return(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8240 = arguments.length;
var i__8047__auto___8241 = (0);
while(true){
if((i__8047__auto___8241 < len__8046__auto___8240)){
args__8053__auto__.push((arguments[i__8047__auto___8241]));

var G__8242 = (i__8047__auto___8241 + (1));
i__8047__auto___8241 = G__8242;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8122__auto___8239))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8122__auto___8239){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8122__auto___8239),args);
});})(g__8122__auto___8239))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__8122__auto___8239){
return (function (seq8176){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8176));
});})(g__8122__auto___8239))
;


var g__8122__auto___8243 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__8122__auto___8243){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8244 = arguments.length;
var i__8047__auto___8245 = (0);
while(true){
if((i__8047__auto___8245 < len__8046__auto___8244)){
args__8053__auto__.push((arguments[i__8047__auto___8245]));

var G__8246 = (i__8047__auto___8245 + (1));
i__8047__auto___8245 = G__8246;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8122__auto___8243))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8122__auto___8243){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8122__auto___8243),args);
});})(g__8122__auto___8243))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__8122__auto___8243){
return (function (seq8177){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8177));
});})(g__8122__auto___8243))
;


var g__8122__auto___8247 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__8122__auto___8247){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8248 = arguments.length;
var i__8047__auto___8249 = (0);
while(true){
if((i__8047__auto___8249 < len__8046__auto___8248)){
args__8053__auto__.push((arguments[i__8047__auto___8249]));

var G__8250 = (i__8047__auto___8249 + (1));
i__8047__auto___8249 = G__8250;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8122__auto___8247))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8122__auto___8247){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8122__auto___8247),args);
});})(g__8122__auto___8247))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__8122__auto___8247){
return (function (seq8178){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8178));
});})(g__8122__auto___8247))
;

var g__8135__auto___8272 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__8135__auto___8272){
return (function cljs$spec$impl$gen$any(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8273 = arguments.length;
var i__8047__auto___8274 = (0);
while(true){
if((i__8047__auto___8274 < len__8046__auto___8273)){
args__8053__auto__.push((arguments[i__8047__auto___8274]));

var G__8275 = (i__8047__auto___8274 + (1));
i__8047__auto___8274 = G__8275;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8135__auto___8272))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___8272){
return (function (args){
return cljs.core.deref.call(null,g__8135__auto___8272);
});})(g__8135__auto___8272))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__8135__auto___8272){
return (function (seq8251){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8251));
});})(g__8135__auto___8272))
;


var g__8135__auto___8276 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__8135__auto___8276){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8277 = arguments.length;
var i__8047__auto___8278 = (0);
while(true){
if((i__8047__auto___8278 < len__8046__auto___8277)){
args__8053__auto__.push((arguments[i__8047__auto___8278]));

var G__8279 = (i__8047__auto___8278 + (1));
i__8047__auto___8278 = G__8279;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8135__auto___8276))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___8276){
return (function (args){
return cljs.core.deref.call(null,g__8135__auto___8276);
});})(g__8135__auto___8276))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__8135__auto___8276){
return (function (seq8252){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8252));
});})(g__8135__auto___8276))
;


var g__8135__auto___8280 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__8135__auto___8280){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8281 = arguments.length;
var i__8047__auto___8282 = (0);
while(true){
if((i__8047__auto___8282 < len__8046__auto___8281)){
args__8053__auto__.push((arguments[i__8047__auto___8282]));

var G__8283 = (i__8047__auto___8282 + (1));
i__8047__auto___8282 = G__8283;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8135__auto___8280))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___8280){
return (function (args){
return cljs.core.deref.call(null,g__8135__auto___8280);
});})(g__8135__auto___8280))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__8135__auto___8280){
return (function (seq8253){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8253));
});})(g__8135__auto___8280))
;


var g__8135__auto___8284 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__8135__auto___8284){
return (function cljs$spec$impl$gen$char(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8285 = arguments.length;
var i__8047__auto___8286 = (0);
while(true){
if((i__8047__auto___8286 < len__8046__auto___8285)){
args__8053__auto__.push((arguments[i__8047__auto___8286]));

var G__8287 = (i__8047__auto___8286 + (1));
i__8047__auto___8286 = G__8287;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8135__auto___8284))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___8284){
return (function (args){
return cljs.core.deref.call(null,g__8135__auto___8284);
});})(g__8135__auto___8284))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__8135__auto___8284){
return (function (seq8254){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8254));
});})(g__8135__auto___8284))
;


var g__8135__auto___8288 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__8135__auto___8288){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8289 = arguments.length;
var i__8047__auto___8290 = (0);
while(true){
if((i__8047__auto___8290 < len__8046__auto___8289)){
args__8053__auto__.push((arguments[i__8047__auto___8290]));

var G__8291 = (i__8047__auto___8290 + (1));
i__8047__auto___8290 = G__8291;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8135__auto___8288))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___8288){
return (function (args){
return cljs.core.deref.call(null,g__8135__auto___8288);
});})(g__8135__auto___8288))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__8135__auto___8288){
return (function (seq8255){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8255));
});})(g__8135__auto___8288))
;


var g__8135__auto___8292 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__8135__auto___8292){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8293 = arguments.length;
var i__8047__auto___8294 = (0);
while(true){
if((i__8047__auto___8294 < len__8046__auto___8293)){
args__8053__auto__.push((arguments[i__8047__auto___8294]));

var G__8295 = (i__8047__auto___8294 + (1));
i__8047__auto___8294 = G__8295;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8135__auto___8292))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___8292){
return (function (args){
return cljs.core.deref.call(null,g__8135__auto___8292);
});})(g__8135__auto___8292))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__8135__auto___8292){
return (function (seq8256){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8256));
});})(g__8135__auto___8292))
;


var g__8135__auto___8296 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__8135__auto___8296){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8297 = arguments.length;
var i__8047__auto___8298 = (0);
while(true){
if((i__8047__auto___8298 < len__8046__auto___8297)){
args__8053__auto__.push((arguments[i__8047__auto___8298]));

var G__8299 = (i__8047__auto___8298 + (1));
i__8047__auto___8298 = G__8299;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8135__auto___8296))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___8296){
return (function (args){
return cljs.core.deref.call(null,g__8135__auto___8296);
});})(g__8135__auto___8296))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__8135__auto___8296){
return (function (seq8257){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8257));
});})(g__8135__auto___8296))
;


var g__8135__auto___8300 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__8135__auto___8300){
return (function cljs$spec$impl$gen$double(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8301 = arguments.length;
var i__8047__auto___8302 = (0);
while(true){
if((i__8047__auto___8302 < len__8046__auto___8301)){
args__8053__auto__.push((arguments[i__8047__auto___8302]));

var G__8303 = (i__8047__auto___8302 + (1));
i__8047__auto___8302 = G__8303;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8135__auto___8300))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___8300){
return (function (args){
return cljs.core.deref.call(null,g__8135__auto___8300);
});})(g__8135__auto___8300))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__8135__auto___8300){
return (function (seq8258){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8258));
});})(g__8135__auto___8300))
;


var g__8135__auto___8304 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__8135__auto___8304){
return (function cljs$spec$impl$gen$int(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8305 = arguments.length;
var i__8047__auto___8306 = (0);
while(true){
if((i__8047__auto___8306 < len__8046__auto___8305)){
args__8053__auto__.push((arguments[i__8047__auto___8306]));

var G__8307 = (i__8047__auto___8306 + (1));
i__8047__auto___8306 = G__8307;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8135__auto___8304))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___8304){
return (function (args){
return cljs.core.deref.call(null,g__8135__auto___8304);
});})(g__8135__auto___8304))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__8135__auto___8304){
return (function (seq8259){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8259));
});})(g__8135__auto___8304))
;


var g__8135__auto___8308 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__8135__auto___8308){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8309 = arguments.length;
var i__8047__auto___8310 = (0);
while(true){
if((i__8047__auto___8310 < len__8046__auto___8309)){
args__8053__auto__.push((arguments[i__8047__auto___8310]));

var G__8311 = (i__8047__auto___8310 + (1));
i__8047__auto___8310 = G__8311;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8135__auto___8308))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___8308){
return (function (args){
return cljs.core.deref.call(null,g__8135__auto___8308);
});})(g__8135__auto___8308))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__8135__auto___8308){
return (function (seq8260){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8260));
});})(g__8135__auto___8308))
;


var g__8135__auto___8312 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__8135__auto___8312){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8313 = arguments.length;
var i__8047__auto___8314 = (0);
while(true){
if((i__8047__auto___8314 < len__8046__auto___8313)){
args__8053__auto__.push((arguments[i__8047__auto___8314]));

var G__8315 = (i__8047__auto___8314 + (1));
i__8047__auto___8314 = G__8315;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8135__auto___8312))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___8312){
return (function (args){
return cljs.core.deref.call(null,g__8135__auto___8312);
});})(g__8135__auto___8312))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__8135__auto___8312){
return (function (seq8261){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8261));
});})(g__8135__auto___8312))
;


var g__8135__auto___8316 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__8135__auto___8316){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8317 = arguments.length;
var i__8047__auto___8318 = (0);
while(true){
if((i__8047__auto___8318 < len__8046__auto___8317)){
args__8053__auto__.push((arguments[i__8047__auto___8318]));

var G__8319 = (i__8047__auto___8318 + (1));
i__8047__auto___8318 = G__8319;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8135__auto___8316))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___8316){
return (function (args){
return cljs.core.deref.call(null,g__8135__auto___8316);
});})(g__8135__auto___8316))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__8135__auto___8316){
return (function (seq8262){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8262));
});})(g__8135__auto___8316))
;


var g__8135__auto___8320 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__8135__auto___8320){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8321 = arguments.length;
var i__8047__auto___8322 = (0);
while(true){
if((i__8047__auto___8322 < len__8046__auto___8321)){
args__8053__auto__.push((arguments[i__8047__auto___8322]));

var G__8323 = (i__8047__auto___8322 + (1));
i__8047__auto___8322 = G__8323;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8135__auto___8320))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___8320){
return (function (args){
return cljs.core.deref.call(null,g__8135__auto___8320);
});})(g__8135__auto___8320))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__8135__auto___8320){
return (function (seq8263){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8263));
});})(g__8135__auto___8320))
;


var g__8135__auto___8324 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__8135__auto___8324){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8325 = arguments.length;
var i__8047__auto___8326 = (0);
while(true){
if((i__8047__auto___8326 < len__8046__auto___8325)){
args__8053__auto__.push((arguments[i__8047__auto___8326]));

var G__8327 = (i__8047__auto___8326 + (1));
i__8047__auto___8326 = G__8327;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8135__auto___8324))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___8324){
return (function (args){
return cljs.core.deref.call(null,g__8135__auto___8324);
});})(g__8135__auto___8324))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__8135__auto___8324){
return (function (seq8264){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8264));
});})(g__8135__auto___8324))
;


var g__8135__auto___8328 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__8135__auto___8328){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8329 = arguments.length;
var i__8047__auto___8330 = (0);
while(true){
if((i__8047__auto___8330 < len__8046__auto___8329)){
args__8053__auto__.push((arguments[i__8047__auto___8330]));

var G__8331 = (i__8047__auto___8330 + (1));
i__8047__auto___8330 = G__8331;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8135__auto___8328))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___8328){
return (function (args){
return cljs.core.deref.call(null,g__8135__auto___8328);
});})(g__8135__auto___8328))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__8135__auto___8328){
return (function (seq8265){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8265));
});})(g__8135__auto___8328))
;


var g__8135__auto___8332 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__8135__auto___8332){
return (function cljs$spec$impl$gen$string(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8333 = arguments.length;
var i__8047__auto___8334 = (0);
while(true){
if((i__8047__auto___8334 < len__8046__auto___8333)){
args__8053__auto__.push((arguments[i__8047__auto___8334]));

var G__8335 = (i__8047__auto___8334 + (1));
i__8047__auto___8334 = G__8335;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8135__auto___8332))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___8332){
return (function (args){
return cljs.core.deref.call(null,g__8135__auto___8332);
});})(g__8135__auto___8332))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__8135__auto___8332){
return (function (seq8266){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8266));
});})(g__8135__auto___8332))
;


var g__8135__auto___8336 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__8135__auto___8336){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8337 = arguments.length;
var i__8047__auto___8338 = (0);
while(true){
if((i__8047__auto___8338 < len__8046__auto___8337)){
args__8053__auto__.push((arguments[i__8047__auto___8338]));

var G__8339 = (i__8047__auto___8338 + (1));
i__8047__auto___8338 = G__8339;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8135__auto___8336))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___8336){
return (function (args){
return cljs.core.deref.call(null,g__8135__auto___8336);
});})(g__8135__auto___8336))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__8135__auto___8336){
return (function (seq8267){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8267));
});})(g__8135__auto___8336))
;


var g__8135__auto___8340 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__8135__auto___8340){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8341 = arguments.length;
var i__8047__auto___8342 = (0);
while(true){
if((i__8047__auto___8342 < len__8046__auto___8341)){
args__8053__auto__.push((arguments[i__8047__auto___8342]));

var G__8343 = (i__8047__auto___8342 + (1));
i__8047__auto___8342 = G__8343;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8135__auto___8340))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___8340){
return (function (args){
return cljs.core.deref.call(null,g__8135__auto___8340);
});})(g__8135__auto___8340))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__8135__auto___8340){
return (function (seq8268){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8268));
});})(g__8135__auto___8340))
;


var g__8135__auto___8344 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__8135__auto___8344){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8345 = arguments.length;
var i__8047__auto___8346 = (0);
while(true){
if((i__8047__auto___8346 < len__8046__auto___8345)){
args__8053__auto__.push((arguments[i__8047__auto___8346]));

var G__8347 = (i__8047__auto___8346 + (1));
i__8047__auto___8346 = G__8347;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8135__auto___8344))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___8344){
return (function (args){
return cljs.core.deref.call(null,g__8135__auto___8344);
});})(g__8135__auto___8344))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__8135__auto___8344){
return (function (seq8269){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8269));
});})(g__8135__auto___8344))
;


var g__8135__auto___8348 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__8135__auto___8348){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8349 = arguments.length;
var i__8047__auto___8350 = (0);
while(true){
if((i__8047__auto___8350 < len__8046__auto___8349)){
args__8053__auto__.push((arguments[i__8047__auto___8350]));

var G__8351 = (i__8047__auto___8350 + (1));
i__8047__auto___8350 = G__8351;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8135__auto___8348))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___8348){
return (function (args){
return cljs.core.deref.call(null,g__8135__auto___8348);
});})(g__8135__auto___8348))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__8135__auto___8348){
return (function (seq8270){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8270));
});})(g__8135__auto___8348))
;


var g__8135__auto___8352 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__8135__auto___8352){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8353 = arguments.length;
var i__8047__auto___8354 = (0);
while(true){
if((i__8047__auto___8354 < len__8046__auto___8353)){
args__8053__auto__.push((arguments[i__8047__auto___8354]));

var G__8355 = (i__8047__auto___8354 + (1));
i__8047__auto___8354 = G__8355;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});})(g__8135__auto___8352))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___8352){
return (function (args){
return cljs.core.deref.call(null,g__8135__auto___8352);
});})(g__8135__auto___8352))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__8135__auto___8352){
return (function (seq8271){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8271));
});})(g__8135__auto___8352))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8358 = arguments.length;
var i__8047__auto___8359 = (0);
while(true){
if((i__8047__auto___8359 < len__8046__auto___8358)){
args__8053__auto__.push((arguments[i__8047__auto___8359]));

var G__8360 = (i__8047__auto___8359 + (1));
i__8047__auto___8359 = G__8360;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__8356_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__8356_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq8357){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8357));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__8361_SHARP_){
return (new Date(p1__8361_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map