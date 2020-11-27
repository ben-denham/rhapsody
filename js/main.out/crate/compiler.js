// Compiled by ClojureScript 1.10.773 {}
goog.provide('crate.compiler');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('crate.binding');
crate.compiler.xmlns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xhtml","xhtml",1912943770),"http://www.w3.org/1999/xhtml",new cljs.core.Keyword(null,"svg","svg",856789142),"http://www.w3.org/2000/svg"], null);


crate.compiler.group_id = cljs.core.atom.call(null,(0));
crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
crate.compiler.capture_binding = (function crate$compiler$capture_binding(tag,b){
return cljs.core.swap_BANG_.call(null,crate.compiler.bindings,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,b], null));
});
crate.compiler.as_content = (function crate$compiler$as_content(parent,content){
var seq__2460 = cljs.core.seq.call(null,content);
var chunk__2461 = null;
var count__2462 = (0);
var i__2463 = (0);
while(true){
if((i__2463 < count__2462)){
var c = cljs.core._nth.call(null,chunk__2461,i__2463);
var child_2464 = (((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?crate.compiler.as_content.call(null,parent,c):((crate.binding.binding_coll_QMARK_.call(null,c))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"coll","coll",1647737163),c);

return crate.compiler.as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})()
:((crate.binding.binding_QMARK_.call(null,c))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),c);

return crate.compiler.as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})()
:(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get((0)):goog.dom.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(c))
)))))))));
if(cljs.core.truth_(child_2464)){
goog.dom.appendChild(parent,child_2464);
} else {
}


var G__2465 = seq__2460;
var G__2466 = chunk__2461;
var G__2467 = count__2462;
var G__2468 = (i__2463 + (1));
seq__2460 = G__2465;
chunk__2461 = G__2466;
count__2462 = G__2467;
i__2463 = G__2468;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__2460);
if(temp__4657__auto__){
var seq__2460__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2460__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__2460__$1);
var G__2469 = cljs.core.chunk_rest.call(null,seq__2460__$1);
var G__2470 = c__4556__auto__;
var G__2471 = cljs.core.count.call(null,c__4556__auto__);
var G__2472 = (0);
seq__2460 = G__2469;
chunk__2461 = G__2470;
count__2462 = G__2471;
i__2463 = G__2472;
continue;
} else {
var c = cljs.core.first.call(null,seq__2460__$1);
var child_2473 = (((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?crate.compiler.as_content.call(null,parent,c):((crate.binding.binding_coll_QMARK_.call(null,c))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"coll","coll",1647737163),c);

return crate.compiler.as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})()
:((crate.binding.binding_QMARK_.call(null,c))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),c);

return crate.compiler.as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})()
:(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get((0)):goog.dom.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(c))
)))))))));
if(cljs.core.truth_(child_2473)){
goog.dom.appendChild(parent,child_2473);
} else {
}


var G__2474 = cljs.core.next.call(null,seq__2460__$1);
var G__2475 = null;
var G__2476 = (0);
var G__2477 = (0);
seq__2460 = G__2474;
chunk__2461 = G__2475;
count__2462 = G__2476;
i__2463 = G__2477;
continue;
}
} else {
return null;
}
}
break;
}
});
if((typeof crate !== 'undefined') && (typeof crate.compiler !== 'undefined') && (typeof crate.compiler.dom_binding !== 'undefined')){
} else {
crate.compiler.dom_binding = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"crate.compiler","dom-binding"),(function (type,_,___$1){
return type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"text","text",-1790561697),(function (_,b,elem){
return crate.binding.on_change.call(null,b,(function (v){
goog.dom.removeChildren(elem);

return crate.compiler.as_content.call(null,elem,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null));
}));
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (_,p__2478,elem){
var vec__2479 = p__2478;
var k = cljs.core.nth.call(null,vec__2479,(0),null);
var b = cljs.core.nth.call(null,vec__2479,(1),null);
return crate.binding.on_change.call(null,b,(function (v){
return crate.compiler.dom_attr.call(null,elem,k,v);
}));
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"style","style",-496642736),(function (_,p__2482,elem){
var vec__2483 = p__2482;
var k = cljs.core.nth.call(null,vec__2483,(0),null);
var b = cljs.core.nth.call(null,vec__2483,(1),null);
return crate.binding.on_change.call(null,b,(function (v){
if(cljs.core.truth_(k)){
return crate.compiler.dom_style.call(null,elem,k,v);
} else {
return crate.compiler.dom_style.call(null,elem,v);
}
}));
}));
crate.compiler.dom_add = (function crate$compiler$dom_add(bc,parent,elem,v){
var temp__4655__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"add","add",235287739));
if(cljs.core.truth_(temp__4655__auto__)){
var adder = temp__4655__auto__;
return adder.call(null,parent,elem,v);
} else {
return goog.dom.appendChild(parent,elem);
}
});
crate.compiler.dom_remove = (function crate$compiler$dom_remove(bc,elem){
var temp__4655__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"remove","remove",-131428414));
if(cljs.core.truth_(temp__4655__auto__)){
var remover = temp__4655__auto__;
return remover.call(null,elem);
} else {
return goog.dom.removeNode(elem);
}
});
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"coll","coll",1647737163),(function (_,bc,parent){
return crate.binding.on_change.call(null,bc,(function (type,elem,v){
var pred__2486 = cljs.core._EQ_;
var expr__2487 = type;
if(cljs.core.truth_(pred__2486.call(null,new cljs.core.Keyword(null,"add","add",235287739),expr__2487))){
return crate.compiler.dom_add.call(null,bc,parent,elem,v);
} else {
if(cljs.core.truth_(pred__2486.call(null,new cljs.core.Keyword(null,"remove","remove",-131428414),expr__2487))){
return crate.compiler.dom_remove.call(null,bc,elem);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__2487)].join('')));
}
}
}));
}));
crate.compiler.handle_bindings = (function crate$compiler$handle_bindings(bs,elem){
var seq__2489 = cljs.core.seq.call(null,bs);
var chunk__2490 = null;
var count__2491 = (0);
var i__2492 = (0);
while(true){
if((i__2492 < count__2491)){
var vec__2499 = cljs.core._nth.call(null,chunk__2490,i__2492);
var type = cljs.core.nth.call(null,vec__2499,(0),null);
var b = cljs.core.nth.call(null,vec__2499,(1),null);
crate.compiler.dom_binding.call(null,type,b,elem);


var G__2505 = seq__2489;
var G__2506 = chunk__2490;
var G__2507 = count__2491;
var G__2508 = (i__2492 + (1));
seq__2489 = G__2505;
chunk__2490 = G__2506;
count__2491 = G__2507;
i__2492 = G__2508;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__2489);
if(temp__4657__auto__){
var seq__2489__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2489__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__2489__$1);
var G__2509 = cljs.core.chunk_rest.call(null,seq__2489__$1);
var G__2510 = c__4556__auto__;
var G__2511 = cljs.core.count.call(null,c__4556__auto__);
var G__2512 = (0);
seq__2489 = G__2509;
chunk__2490 = G__2510;
count__2491 = G__2511;
i__2492 = G__2512;
continue;
} else {
var vec__2502 = cljs.core.first.call(null,seq__2489__$1);
var type = cljs.core.nth.call(null,vec__2502,(0),null);
var b = cljs.core.nth.call(null,vec__2502,(1),null);
crate.compiler.dom_binding.call(null,type,b,elem);


var G__2513 = cljs.core.next.call(null,seq__2489__$1);
var G__2514 = null;
var G__2515 = (0);
var G__2516 = (0);
seq__2489 = G__2513;
chunk__2490 = G__2514;
count__2491 = G__2515;
i__2492 = G__2516;
continue;
}
} else {
return null;
}
}
break;
}
});
crate.compiler.dom_style = (function crate$compiler$dom_style(var_args){
var G__2518 = arguments.length;
switch (G__2518) {
case 2:
return crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$2 = (function (elem,v){
if(typeof v === 'string'){
elem.setAttribute("style",v);
} else {
if(cljs.core.map_QMARK_.call(null,v)){
var seq__2519_2536 = cljs.core.seq.call(null,v);
var chunk__2520_2537 = null;
var count__2521_2538 = (0);
var i__2522_2539 = (0);
while(true){
if((i__2522_2539 < count__2521_2538)){
var vec__2529_2540 = cljs.core._nth.call(null,chunk__2520_2537,i__2522_2539);
var k_2541 = cljs.core.nth.call(null,vec__2529_2540,(0),null);
var v_2542__$1 = cljs.core.nth.call(null,vec__2529_2540,(1),null);
crate.compiler.dom_style.call(null,elem,k_2541,v_2542__$1);


var G__2543 = seq__2519_2536;
var G__2544 = chunk__2520_2537;
var G__2545 = count__2521_2538;
var G__2546 = (i__2522_2539 + (1));
seq__2519_2536 = G__2543;
chunk__2520_2537 = G__2544;
count__2521_2538 = G__2545;
i__2522_2539 = G__2546;
continue;
} else {
var temp__4657__auto___2547 = cljs.core.seq.call(null,seq__2519_2536);
if(temp__4657__auto___2547){
var seq__2519_2548__$1 = temp__4657__auto___2547;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2519_2548__$1)){
var c__4556__auto___2549 = cljs.core.chunk_first.call(null,seq__2519_2548__$1);
var G__2550 = cljs.core.chunk_rest.call(null,seq__2519_2548__$1);
var G__2551 = c__4556__auto___2549;
var G__2552 = cljs.core.count.call(null,c__4556__auto___2549);
var G__2553 = (0);
seq__2519_2536 = G__2550;
chunk__2520_2537 = G__2551;
count__2521_2538 = G__2552;
i__2522_2539 = G__2553;
continue;
} else {
var vec__2532_2554 = cljs.core.first.call(null,seq__2519_2548__$1);
var k_2555 = cljs.core.nth.call(null,vec__2532_2554,(0),null);
var v_2556__$1 = cljs.core.nth.call(null,vec__2532_2554,(1),null);
crate.compiler.dom_style.call(null,elem,k_2555,v_2556__$1);


var G__2557 = cljs.core.next.call(null,seq__2519_2548__$1);
var G__2558 = null;
var G__2559 = (0);
var G__2560 = (0);
seq__2519_2536 = G__2557;
chunk__2520_2537 = G__2558;
count__2521_2538 = G__2559;
i__2522_2539 = G__2560;
continue;
}
} else {
}
}
break;
}
} else {
if(crate.binding.binding_QMARK_.call(null,v)){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,v], null));

crate.compiler.dom_style.call(null,elem,crate.binding.value.call(null,v));
} else {
}
}
}

return elem;
}));

(crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var v__$1 = ((crate.binding.binding_QMARK_.call(null,v))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

return crate.binding.value.call(null,v);
})()
:v);
return goog.style.setStyle(elem,cljs.core.name.call(null,k),v__$1);
}));

(crate.compiler.dom_style.cljs$lang$maxFixedArity = 3);

crate.compiler.dom_attr = (function crate$compiler$dom_attr(var_args){
var G__2562 = arguments.length;
switch (G__2562) {
case 2:
return crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$2 = (function (elem,attrs){
if(cljs.core.truth_(elem)){
if((!(cljs.core.map_QMARK_.call(null,attrs)))){
return elem.getAttribute(cljs.core.name.call(null,attrs));
} else {
var seq__2563_2580 = cljs.core.seq.call(null,attrs);
var chunk__2564_2581 = null;
var count__2565_2582 = (0);
var i__2566_2583 = (0);
while(true){
if((i__2566_2583 < count__2565_2582)){
var vec__2573_2584 = cljs.core._nth.call(null,chunk__2564_2581,i__2566_2583);
var k_2585 = cljs.core.nth.call(null,vec__2573_2584,(0),null);
var v_2586 = cljs.core.nth.call(null,vec__2573_2584,(1),null);
crate.compiler.dom_attr.call(null,elem,k_2585,v_2586);


var G__2587 = seq__2563_2580;
var G__2588 = chunk__2564_2581;
var G__2589 = count__2565_2582;
var G__2590 = (i__2566_2583 + (1));
seq__2563_2580 = G__2587;
chunk__2564_2581 = G__2588;
count__2565_2582 = G__2589;
i__2566_2583 = G__2590;
continue;
} else {
var temp__4657__auto___2591 = cljs.core.seq.call(null,seq__2563_2580);
if(temp__4657__auto___2591){
var seq__2563_2592__$1 = temp__4657__auto___2591;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2563_2592__$1)){
var c__4556__auto___2593 = cljs.core.chunk_first.call(null,seq__2563_2592__$1);
var G__2594 = cljs.core.chunk_rest.call(null,seq__2563_2592__$1);
var G__2595 = c__4556__auto___2593;
var G__2596 = cljs.core.count.call(null,c__4556__auto___2593);
var G__2597 = (0);
seq__2563_2580 = G__2594;
chunk__2564_2581 = G__2595;
count__2565_2582 = G__2596;
i__2566_2583 = G__2597;
continue;
} else {
var vec__2576_2598 = cljs.core.first.call(null,seq__2563_2592__$1);
var k_2599 = cljs.core.nth.call(null,vec__2576_2598,(0),null);
var v_2600 = cljs.core.nth.call(null,vec__2576_2598,(1),null);
crate.compiler.dom_attr.call(null,elem,k_2599,v_2600);


var G__2601 = cljs.core.next.call(null,seq__2563_2592__$1);
var G__2602 = null;
var G__2603 = (0);
var G__2604 = (0);
seq__2563_2580 = G__2601;
chunk__2564_2581 = G__2602;
count__2565_2582 = G__2603;
i__2566_2583 = G__2604;
continue;
}
} else {
}
}
break;
}

return elem;
}
} else {
return null;
}
}));

(crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"style","style",-496642736))){
crate.compiler.dom_style.call(null,elem,v);
} else {
var v_2605__$1 = ((crate.binding.binding_QMARK_.call(null,v))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

return crate.binding.value.call(null,v);
})()
:v);
elem.setAttribute(cljs.core.name.call(null,k),v_2605__$1);
}

return elem;
}));

(crate.compiler.dom_attr.cljs$lang$maxFixedArity = 3);

/**
 * Regular expression that parses a CSS-style id and class from a tag name.
 */
crate.compiler.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
crate.compiler.normalize_map_attrs = (function crate$compiler$normalize_map_attrs(map_attrs){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__2606){
var vec__2607 = p__2606;
var n = cljs.core.nth.call(null,vec__2607,(0),null);
var v = cljs.core.nth.call(null,vec__2607,(1),null);
if(v === true){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.name.call(null,n)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,v], null);
}
}),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.boolean$,cljs.core.second),map_attrs)));
});
/**
 * Ensure a tag vector is of the form [tag-name attrs content].
 */
crate.compiler.normalize_element = (function crate$compiler$normalize_element(p__2611){
var vec__2612 = p__2611;
var seq__2613 = cljs.core.seq.call(null,vec__2612);
var first__2614 = cljs.core.first.call(null,seq__2613);
var seq__2613__$1 = cljs.core.next.call(null,seq__2613);
var tag = first__2614;
var content = seq__2613__$1;
if((!((((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string'))))){
throw [cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," is not a valid tag name."].join('');
} else {
}

var vec__2615 = cljs.core.re_matches.call(null,crate.compiler.re_tag,cljs.core.name.call(null,tag));
var _ = cljs.core.nth.call(null,vec__2615,(0),null);
var tag__$1 = cljs.core.nth.call(null,vec__2615,(1),null);
var id = cljs.core.nth.call(null,vec__2615,(2),null);
var class$ = cljs.core.nth.call(null,vec__2615,(3),null);
var vec__2618 = (function (){var vec__2621 = clojure.string.split.call(null,tag__$1,/:/);
var nsp = cljs.core.nth.call(null,vec__2621,(0),null);
var t = cljs.core.nth.call(null,vec__2621,(1),null);
var ns_xmlns = crate.compiler.xmlns.call(null,cljs.core.keyword.call(null,nsp));
if(cljs.core.truth_(t)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4126__auto__ = ns_xmlns;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return nsp;
}
})(),t], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhtml","xhtml",1912943770).cljs$core$IFn$_invoke$arity$1(crate.compiler.xmlns),nsp], null);
}
})();
var nsp = cljs.core.nth.call(null,vec__2618,(0),null);
var tag__$2 = cljs.core.nth.call(null,vec__2618,(1),null);
var tag_attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__2610_SHARP_){
return (!((cljs.core.second.call(null,p1__2610_SHARP_) == null)));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__4126__auto__ = id;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return null;
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(class$)?clojure.string.replace.call(null,class$,/\./," "):null)], null)));
var map_attrs = cljs.core.first.call(null,content);
if(cljs.core.map_QMARK_.call(null,map_attrs)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nsp,tag__$2,cljs.core.merge.call(null,tag_attrs,crate.compiler.normalize_map_attrs.call(null,map_attrs)),cljs.core.next.call(null,content)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nsp,tag__$2,tag_attrs,content], null);
}
});
crate.compiler.parse_content = (function crate$compiler$parse_content(elem,content){
var attrs = cljs.core.first.call(null,content);
if(cljs.core.map_QMARK_.call(null,attrs)){
crate.compiler.dom_attr.call(null,elem,attrs);

return cljs.core.rest.call(null,content);
} else {
return content;
}
});
crate.compiler.create_elem = (cljs.core.truth_(document.createElementNS)?(function (nsp,tag){
return document.createElementNS(nsp,tag);
}):(function (_,tag){
return document.createElement(tag);
}));
crate.compiler.elem_factory = (function crate$compiler$elem_factory(tag_def){
var bindings_orig_val__2624 = crate.compiler.bindings;
var bindings_temp_val__2625 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(crate.compiler.bindings = bindings_temp_val__2625);

try{var vec__2626 = crate.compiler.normalize_element.call(null,tag_def);
var nsp = cljs.core.nth.call(null,vec__2626,(0),null);
var tag = cljs.core.nth.call(null,vec__2626,(1),null);
var attrs = cljs.core.nth.call(null,vec__2626,(2),null);
var content = cljs.core.nth.call(null,vec__2626,(3),null);
var elem = crate.compiler.create_elem.call(null,nsp,tag);
crate.compiler.dom_attr.call(null,elem,attrs);

crate.compiler.as_content.call(null,elem,content);

crate.compiler.handle_bindings.call(null,cljs.core.deref.call(null,crate.compiler.bindings),elem);

return elem;
}finally {(crate.compiler.bindings = bindings_orig_val__2624);
}});
/**
 * Add an optional attribute argument to a function that returns a vector tag.
 */
crate.compiler.add_optional_attrs = (function crate$compiler$add_optional_attrs(func){
return (function() { 
var G__2632__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__2629 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__2630 = cljs.core.seq.call(null,vec__2629);
var first__2631 = cljs.core.first.call(null,seq__2630);
var seq__2630__$1 = cljs.core.next.call(null,seq__2630);
var tag = first__2631;
var body = seq__2630__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__2632 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2633__i = 0, G__2633__a = new Array(arguments.length -  0);
while (G__2633__i < G__2633__a.length) {G__2633__a[G__2633__i] = arguments[G__2633__i + 0]; ++G__2633__i;}
  args = new cljs.core.IndexedSeq(G__2633__a,0,null);
} 
return G__2632__delegate.call(this,args);};
G__2632.cljs$lang$maxFixedArity = 0;
G__2632.cljs$lang$applyTo = (function (arglist__2634){
var args = cljs.core.seq(arglist__2634);
return G__2632__delegate(args);
});
G__2632.cljs$core$IFn$_invoke$arity$variadic = G__2632__delegate;
return G__2632;
})()
;
});

//# sourceMappingURL=compiler.js.map
