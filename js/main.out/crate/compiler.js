// Compiled by ClojureScript 1.9.293 {}
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
var seq__8488 = cljs.core.seq.call(null,content);
var chunk__8489 = null;
var count__8490 = (0);
var i__8491 = (0);
while(true){
if((i__8491 < count__8490)){
var c = cljs.core._nth.call(null,chunk__8489,i__8491);
var child_8492 = (((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?crate.compiler.as_content.call(null,parent,c):(cljs.core.truth_(crate.binding.binding_coll_QMARK_.call(null,c))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"coll","coll",1647737163),c);

return crate.compiler.as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})()
:(cljs.core.truth_(crate.binding.binding_QMARK_.call(null,c))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),c);

return crate.compiler.as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})()
:(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get((0)):goog.dom.createTextNode([cljs.core.str(c)].join(''))
)))))))));
if(cljs.core.truth_(child_8492)){
goog.dom.appendChild(parent,child_8492);
} else {
}

var G__8493 = seq__8488;
var G__8494 = chunk__8489;
var G__8495 = count__8490;
var G__8496 = (i__8491 + (1));
seq__8488 = G__8493;
chunk__8489 = G__8494;
count__8490 = G__8495;
i__8491 = G__8496;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8488);
if(temp__4657__auto__){
var seq__8488__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8488__$1)){
var c__7752__auto__ = cljs.core.chunk_first.call(null,seq__8488__$1);
var G__8497 = cljs.core.chunk_rest.call(null,seq__8488__$1);
var G__8498 = c__7752__auto__;
var G__8499 = cljs.core.count.call(null,c__7752__auto__);
var G__8500 = (0);
seq__8488 = G__8497;
chunk__8489 = G__8498;
count__8490 = G__8499;
i__8491 = G__8500;
continue;
} else {
var c = cljs.core.first.call(null,seq__8488__$1);
var child_8501 = (((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?crate.compiler.as_content.call(null,parent,c):(cljs.core.truth_(crate.binding.binding_coll_QMARK_.call(null,c))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"coll","coll",1647737163),c);

return crate.compiler.as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})()
:(cljs.core.truth_(crate.binding.binding_QMARK_.call(null,c))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),c);

return crate.compiler.as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})()
:(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get((0)):goog.dom.createTextNode([cljs.core.str(c)].join(''))
)))))))));
if(cljs.core.truth_(child_8501)){
goog.dom.appendChild(parent,child_8501);
} else {
}

var G__8502 = cljs.core.next.call(null,seq__8488__$1);
var G__8503 = null;
var G__8504 = (0);
var G__8505 = (0);
seq__8488 = G__8502;
chunk__8489 = G__8503;
count__8490 = G__8504;
i__8491 = G__8505;
continue;
}
} else {
return null;
}
}
break;
}
});
if(typeof crate.compiler.dom_binding !== 'undefined'){
} else {
crate.compiler.dom_binding = (function (){var method_table__7866__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7867__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7868__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7869__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7870__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"crate.compiler","dom-binding"),((function (method_table__7866__auto__,prefer_table__7867__auto__,method_cache__7868__auto__,cached_hierarchy__7869__auto__,hierarchy__7870__auto__){
return (function (type,_,___$1){
return type;
});})(method_table__7866__auto__,prefer_table__7867__auto__,method_cache__7868__auto__,cached_hierarchy__7869__auto__,hierarchy__7870__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7870__auto__,method_table__7866__auto__,prefer_table__7867__auto__,method_cache__7868__auto__,cached_hierarchy__7869__auto__));
})();
}
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"text","text",-1790561697),(function (_,b,elem){
return crate.binding.on_change.call(null,b,(function (v){
goog.dom.removeChildren(elem);

return crate.compiler.as_content.call(null,elem,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null));
}));
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (_,p__8506,elem){
var vec__8507 = p__8506;
var k = cljs.core.nth.call(null,vec__8507,(0),null);
var b = cljs.core.nth.call(null,vec__8507,(1),null);
return crate.binding.on_change.call(null,b,((function (vec__8507,k,b){
return (function (v){
return crate.compiler.dom_attr.call(null,elem,k,v);
});})(vec__8507,k,b))
);
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"style","style",-496642736),(function (_,p__8510,elem){
var vec__8511 = p__8510;
var k = cljs.core.nth.call(null,vec__8511,(0),null);
var b = cljs.core.nth.call(null,vec__8511,(1),null);
return crate.binding.on_change.call(null,b,((function (vec__8511,k,b){
return (function (v){
if(cljs.core.truth_(k)){
return crate.compiler.dom_style.call(null,elem,k,v);
} else {
return crate.compiler.dom_style.call(null,elem,v);
}
});})(vec__8511,k,b))
);
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
var pred__8514 = cljs.core._EQ_;
var expr__8515 = type;
if(cljs.core.truth_(pred__8514.call(null,new cljs.core.Keyword(null,"add","add",235287739),expr__8515))){
return crate.compiler.dom_add.call(null,bc,parent,elem,v);
} else {
if(cljs.core.truth_(pred__8514.call(null,new cljs.core.Keyword(null,"remove","remove",-131428414),expr__8515))){
return crate.compiler.dom_remove.call(null,bc,elem);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__8515)].join('')));
}
}
}));
}));
crate.compiler.handle_bindings = (function crate$compiler$handle_bindings(bs,elem){
var seq__8527 = cljs.core.seq.call(null,bs);
var chunk__8528 = null;
var count__8529 = (0);
var i__8530 = (0);
while(true){
if((i__8530 < count__8529)){
var vec__8531 = cljs.core._nth.call(null,chunk__8528,i__8530);
var type = cljs.core.nth.call(null,vec__8531,(0),null);
var b = cljs.core.nth.call(null,vec__8531,(1),null);
crate.compiler.dom_binding.call(null,type,b,elem);

var G__8537 = seq__8527;
var G__8538 = chunk__8528;
var G__8539 = count__8529;
var G__8540 = (i__8530 + (1));
seq__8527 = G__8537;
chunk__8528 = G__8538;
count__8529 = G__8539;
i__8530 = G__8540;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8527);
if(temp__4657__auto__){
var seq__8527__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8527__$1)){
var c__7752__auto__ = cljs.core.chunk_first.call(null,seq__8527__$1);
var G__8541 = cljs.core.chunk_rest.call(null,seq__8527__$1);
var G__8542 = c__7752__auto__;
var G__8543 = cljs.core.count.call(null,c__7752__auto__);
var G__8544 = (0);
seq__8527 = G__8541;
chunk__8528 = G__8542;
count__8529 = G__8543;
i__8530 = G__8544;
continue;
} else {
var vec__8534 = cljs.core.first.call(null,seq__8527__$1);
var type = cljs.core.nth.call(null,vec__8534,(0),null);
var b = cljs.core.nth.call(null,vec__8534,(1),null);
crate.compiler.dom_binding.call(null,type,b,elem);

var G__8545 = cljs.core.next.call(null,seq__8527__$1);
var G__8546 = null;
var G__8547 = (0);
var G__8548 = (0);
seq__8527 = G__8545;
chunk__8528 = G__8546;
count__8529 = G__8547;
i__8530 = G__8548;
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
var args8549 = [];
var len__8046__auto___8562 = arguments.length;
var i__8047__auto___8563 = (0);
while(true){
if((i__8047__auto___8563 < len__8046__auto___8562)){
args8549.push((arguments[i__8047__auto___8563]));

var G__8564 = (i__8047__auto___8563 + (1));
i__8047__auto___8563 = G__8564;
continue;
} else {
}
break;
}

var G__8551 = args8549.length;
switch (G__8551) {
case 2:
return crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8549.length)].join('')));

}
});

crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$2 = (function (elem,v){
if(typeof v === 'string'){
elem.setAttribute("style",v);
} else {
if(cljs.core.map_QMARK_.call(null,v)){
var seq__8552_8566 = cljs.core.seq.call(null,v);
var chunk__8553_8567 = null;
var count__8554_8568 = (0);
var i__8555_8569 = (0);
while(true){
if((i__8555_8569 < count__8554_8568)){
var vec__8556_8570 = cljs.core._nth.call(null,chunk__8553_8567,i__8555_8569);
var k_8571 = cljs.core.nth.call(null,vec__8556_8570,(0),null);
var v_8572__$1 = cljs.core.nth.call(null,vec__8556_8570,(1),null);
crate.compiler.dom_style.call(null,elem,k_8571,v_8572__$1);

var G__8573 = seq__8552_8566;
var G__8574 = chunk__8553_8567;
var G__8575 = count__8554_8568;
var G__8576 = (i__8555_8569 + (1));
seq__8552_8566 = G__8573;
chunk__8553_8567 = G__8574;
count__8554_8568 = G__8575;
i__8555_8569 = G__8576;
continue;
} else {
var temp__4657__auto___8577 = cljs.core.seq.call(null,seq__8552_8566);
if(temp__4657__auto___8577){
var seq__8552_8578__$1 = temp__4657__auto___8577;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8552_8578__$1)){
var c__7752__auto___8579 = cljs.core.chunk_first.call(null,seq__8552_8578__$1);
var G__8580 = cljs.core.chunk_rest.call(null,seq__8552_8578__$1);
var G__8581 = c__7752__auto___8579;
var G__8582 = cljs.core.count.call(null,c__7752__auto___8579);
var G__8583 = (0);
seq__8552_8566 = G__8580;
chunk__8553_8567 = G__8581;
count__8554_8568 = G__8582;
i__8555_8569 = G__8583;
continue;
} else {
var vec__8559_8584 = cljs.core.first.call(null,seq__8552_8578__$1);
var k_8585 = cljs.core.nth.call(null,vec__8559_8584,(0),null);
var v_8586__$1 = cljs.core.nth.call(null,vec__8559_8584,(1),null);
crate.compiler.dom_style.call(null,elem,k_8585,v_8586__$1);

var G__8587 = cljs.core.next.call(null,seq__8552_8578__$1);
var G__8588 = null;
var G__8589 = (0);
var G__8590 = (0);
seq__8552_8566 = G__8587;
chunk__8553_8567 = G__8588;
count__8554_8568 = G__8589;
i__8555_8569 = G__8590;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(crate.binding.binding_QMARK_.call(null,v))){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,v], null));

crate.compiler.dom_style.call(null,elem,crate.binding.value.call(null,v));
} else {
}
}
}

return elem;
});

crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var v__$1 = (cljs.core.truth_(crate.binding.binding_QMARK_.call(null,v))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

return crate.binding.value.call(null,v);
})()
:v);
return goog.style.setStyle(elem,cljs.core.name.call(null,k),v__$1);
});

crate.compiler.dom_style.cljs$lang$maxFixedArity = 3;

crate.compiler.dom_attr = (function crate$compiler$dom_attr(var_args){
var args8591 = [];
var len__8046__auto___8604 = arguments.length;
var i__8047__auto___8605 = (0);
while(true){
if((i__8047__auto___8605 < len__8046__auto___8604)){
args8591.push((arguments[i__8047__auto___8605]));

var G__8606 = (i__8047__auto___8605 + (1));
i__8047__auto___8605 = G__8606;
continue;
} else {
}
break;
}

var G__8593 = args8591.length;
switch (G__8593) {
case 2:
return crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8591.length)].join('')));

}
});

crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$2 = (function (elem,attrs){
if(cljs.core.truth_(elem)){
if(!(cljs.core.map_QMARK_.call(null,attrs))){
return elem.getAttribute(cljs.core.name.call(null,attrs));
} else {
var seq__8594_8608 = cljs.core.seq.call(null,attrs);
var chunk__8595_8609 = null;
var count__8596_8610 = (0);
var i__8597_8611 = (0);
while(true){
if((i__8597_8611 < count__8596_8610)){
var vec__8598_8612 = cljs.core._nth.call(null,chunk__8595_8609,i__8597_8611);
var k_8613 = cljs.core.nth.call(null,vec__8598_8612,(0),null);
var v_8614 = cljs.core.nth.call(null,vec__8598_8612,(1),null);
crate.compiler.dom_attr.call(null,elem,k_8613,v_8614);

var G__8615 = seq__8594_8608;
var G__8616 = chunk__8595_8609;
var G__8617 = count__8596_8610;
var G__8618 = (i__8597_8611 + (1));
seq__8594_8608 = G__8615;
chunk__8595_8609 = G__8616;
count__8596_8610 = G__8617;
i__8597_8611 = G__8618;
continue;
} else {
var temp__4657__auto___8619 = cljs.core.seq.call(null,seq__8594_8608);
if(temp__4657__auto___8619){
var seq__8594_8620__$1 = temp__4657__auto___8619;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8594_8620__$1)){
var c__7752__auto___8621 = cljs.core.chunk_first.call(null,seq__8594_8620__$1);
var G__8622 = cljs.core.chunk_rest.call(null,seq__8594_8620__$1);
var G__8623 = c__7752__auto___8621;
var G__8624 = cljs.core.count.call(null,c__7752__auto___8621);
var G__8625 = (0);
seq__8594_8608 = G__8622;
chunk__8595_8609 = G__8623;
count__8596_8610 = G__8624;
i__8597_8611 = G__8625;
continue;
} else {
var vec__8601_8626 = cljs.core.first.call(null,seq__8594_8620__$1);
var k_8627 = cljs.core.nth.call(null,vec__8601_8626,(0),null);
var v_8628 = cljs.core.nth.call(null,vec__8601_8626,(1),null);
crate.compiler.dom_attr.call(null,elem,k_8627,v_8628);

var G__8629 = cljs.core.next.call(null,seq__8594_8620__$1);
var G__8630 = null;
var G__8631 = (0);
var G__8632 = (0);
seq__8594_8608 = G__8629;
chunk__8595_8609 = G__8630;
count__8596_8610 = G__8631;
i__8597_8611 = G__8632;
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
});

crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"style","style",-496642736))){
crate.compiler.dom_style.call(null,elem,v);
} else {
var v_8633__$1 = (cljs.core.truth_(crate.binding.binding_QMARK_.call(null,v))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

return crate.binding.value.call(null,v);
})()
:v);
elem.setAttribute(cljs.core.name.call(null,k),v_8633__$1);
}

return elem;
});

crate.compiler.dom_attr.cljs$lang$maxFixedArity = 3;

/**
 * Regular expression that parses a CSS-style id and class from a tag name.
 */
crate.compiler.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
crate.compiler.normalize_map_attrs = (function crate$compiler$normalize_map_attrs(map_attrs){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__8638){
var vec__8639 = p__8638;
var n = cljs.core.nth.call(null,vec__8639,(0),null);
var v = cljs.core.nth.call(null,vec__8639,(1),null);
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
crate.compiler.normalize_element = (function crate$compiler$normalize_element(p__8643){
var vec__8656 = p__8643;
var seq__8657 = cljs.core.seq.call(null,vec__8656);
var first__8658 = cljs.core.first.call(null,seq__8657);
var seq__8657__$1 = cljs.core.next.call(null,seq__8657);
var tag = first__8658;
var content = seq__8657__$1;
if(!(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string'))){
throw [cljs.core.str(tag),cljs.core.str(" is not a valid tag name.")].join('');
} else {
}

var vec__8659 = cljs.core.re_matches.call(null,crate.compiler.re_tag,cljs.core.name.call(null,tag));
var _ = cljs.core.nth.call(null,vec__8659,(0),null);
var tag__$1 = cljs.core.nth.call(null,vec__8659,(1),null);
var id = cljs.core.nth.call(null,vec__8659,(2),null);
var class$ = cljs.core.nth.call(null,vec__8659,(3),null);
var vec__8662 = (function (){var vec__8665 = clojure.string.split.call(null,tag__$1,/:/);
var nsp = cljs.core.nth.call(null,vec__8665,(0),null);
var t = cljs.core.nth.call(null,vec__8665,(1),null);
var ns_xmlns = crate.compiler.xmlns.call(null,cljs.core.keyword.call(null,nsp));
if(cljs.core.truth_(t)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__6938__auto__ = ns_xmlns;
if(cljs.core.truth_(or__6938__auto__)){
return or__6938__auto__;
} else {
return nsp;
}
})(),t], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhtml","xhtml",1912943770).cljs$core$IFn$_invoke$arity$1(crate.compiler.xmlns),nsp], null);
}
})();
var nsp = cljs.core.nth.call(null,vec__8662,(0),null);
var tag__$2 = cljs.core.nth.call(null,vec__8662,(1),null);
var tag_attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (vec__8659,_,tag__$1,id,class$,vec__8662,nsp,tag__$2,vec__8656,seq__8657,first__8658,seq__8657__$1,tag,content){
return (function (p1__8642_SHARP_){
return !((cljs.core.second.call(null,p1__8642_SHARP_) == null));
});})(vec__8659,_,tag__$1,id,class$,vec__8662,nsp,tag__$2,vec__8656,seq__8657,first__8658,seq__8657__$1,tag,content))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__6938__auto__ = id;
if(cljs.core.truth_(or__6938__auto__)){
return or__6938__auto__;
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
var bindings8672 = crate.compiler.bindings;
crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);

try{var vec__8673 = crate.compiler.normalize_element.call(null,tag_def);
var nsp = cljs.core.nth.call(null,vec__8673,(0),null);
var tag = cljs.core.nth.call(null,vec__8673,(1),null);
var attrs = cljs.core.nth.call(null,vec__8673,(2),null);
var content = cljs.core.nth.call(null,vec__8673,(3),null);
var elem = crate.compiler.create_elem.call(null,nsp,tag);
crate.compiler.dom_attr.call(null,elem,attrs);

crate.compiler.as_content.call(null,elem,content);

crate.compiler.handle_bindings.call(null,cljs.core.deref.call(null,crate.compiler.bindings),elem);

return elem;
}finally {crate.compiler.bindings = bindings8672;
}});
/**
 * Add an optional attribute argument to a function that returns a vector tag.
 */
crate.compiler.add_optional_attrs = (function crate$compiler$add_optional_attrs(func){
return (function() { 
var G__8682__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__8679 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__8680 = cljs.core.seq.call(null,vec__8679);
var first__8681 = cljs.core.first.call(null,seq__8680);
var seq__8680__$1 = cljs.core.next.call(null,seq__8680);
var tag = first__8681;
var body = seq__8680__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__8682 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8683__i = 0, G__8683__a = new Array(arguments.length -  0);
while (G__8683__i < G__8683__a.length) {G__8683__a[G__8683__i] = arguments[G__8683__i + 0]; ++G__8683__i;}
  args = new cljs.core.IndexedSeq(G__8683__a,0);
} 
return G__8682__delegate.call(this,args);};
G__8682.cljs$lang$maxFixedArity = 0;
G__8682.cljs$lang$applyTo = (function (arglist__8684){
var args = cljs.core.seq(arglist__8684);
return G__8682__delegate(args);
});
G__8682.cljs$core$IFn$_invoke$arity$variadic = G__8682__delegate;
return G__8682;
})()
;
});

//# sourceMappingURL=compiler.js.map