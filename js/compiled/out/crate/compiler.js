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
var seq__22934 = cljs.core.seq.call(null,content);
var chunk__22935 = null;
var count__22936 = (0);
var i__22937 = (0);
while(true){
if((i__22937 < count__22936)){
var c = cljs.core._nth.call(null,chunk__22935,i__22937);
var child_22938 = (((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?crate.compiler.as_content.call(null,parent,c):(cljs.core.truth_(crate.binding.binding_coll_QMARK_.call(null,c))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"coll","coll",1647737163),c);

return crate.compiler.as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})()
:(cljs.core.truth_(crate.binding.binding_QMARK_.call(null,c))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),c);

return crate.compiler.as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})()
:(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get((0)):goog.dom.createTextNode([cljs.core.str(c)].join(''))
)))))))));
if(cljs.core.truth_(child_22938)){
goog.dom.appendChild(parent,child_22938);
} else {
}

var G__22939 = seq__22934;
var G__22940 = chunk__22935;
var G__22941 = count__22936;
var G__22942 = (i__22937 + (1));
seq__22934 = G__22939;
chunk__22935 = G__22940;
count__22936 = G__22941;
i__22937 = G__22942;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22934);
if(temp__4657__auto__){
var seq__22934__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22934__$1)){
var c__21344__auto__ = cljs.core.chunk_first.call(null,seq__22934__$1);
var G__22943 = cljs.core.chunk_rest.call(null,seq__22934__$1);
var G__22944 = c__21344__auto__;
var G__22945 = cljs.core.count.call(null,c__21344__auto__);
var G__22946 = (0);
seq__22934 = G__22943;
chunk__22935 = G__22944;
count__22936 = G__22945;
i__22937 = G__22946;
continue;
} else {
var c = cljs.core.first.call(null,seq__22934__$1);
var child_22947 = (((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?crate.compiler.as_content.call(null,parent,c):(cljs.core.truth_(crate.binding.binding_coll_QMARK_.call(null,c))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"coll","coll",1647737163),c);

return crate.compiler.as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})()
:(cljs.core.truth_(crate.binding.binding_QMARK_.call(null,c))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),c);

return crate.compiler.as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})()
:(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get((0)):goog.dom.createTextNode([cljs.core.str(c)].join(''))
)))))))));
if(cljs.core.truth_(child_22947)){
goog.dom.appendChild(parent,child_22947);
} else {
}

var G__22948 = cljs.core.next.call(null,seq__22934__$1);
var G__22949 = null;
var G__22950 = (0);
var G__22951 = (0);
seq__22934 = G__22948;
chunk__22935 = G__22949;
count__22936 = G__22950;
i__22937 = G__22951;
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
crate.compiler.dom_binding = (function (){var method_table__21458__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21459__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21460__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21461__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21462__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"crate.compiler","dom-binding"),((function (method_table__21458__auto__,prefer_table__21459__auto__,method_cache__21460__auto__,cached_hierarchy__21461__auto__,hierarchy__21462__auto__){
return (function (type,_,___$1){
return type;
});})(method_table__21458__auto__,prefer_table__21459__auto__,method_cache__21460__auto__,cached_hierarchy__21461__auto__,hierarchy__21462__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21462__auto__,method_table__21458__auto__,prefer_table__21459__auto__,method_cache__21460__auto__,cached_hierarchy__21461__auto__));
})();
}
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"text","text",-1790561697),(function (_,b,elem){
return crate.binding.on_change.call(null,b,(function (v){
goog.dom.removeChildren(elem);

return crate.compiler.as_content.call(null,elem,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null));
}));
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (_,p__22952,elem){
var vec__22953 = p__22952;
var k = cljs.core.nth.call(null,vec__22953,(0),null);
var b = cljs.core.nth.call(null,vec__22953,(1),null);
return crate.binding.on_change.call(null,b,((function (vec__22953,k,b){
return (function (v){
return crate.compiler.dom_attr.call(null,elem,k,v);
});})(vec__22953,k,b))
);
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"style","style",-496642736),(function (_,p__22956,elem){
var vec__22957 = p__22956;
var k = cljs.core.nth.call(null,vec__22957,(0),null);
var b = cljs.core.nth.call(null,vec__22957,(1),null);
return crate.binding.on_change.call(null,b,((function (vec__22957,k,b){
return (function (v){
if(cljs.core.truth_(k)){
return crate.compiler.dom_style.call(null,elem,k,v);
} else {
return crate.compiler.dom_style.call(null,elem,v);
}
});})(vec__22957,k,b))
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
var pred__22960 = cljs.core._EQ_;
var expr__22961 = type;
if(cljs.core.truth_(pred__22960.call(null,new cljs.core.Keyword(null,"add","add",235287739),expr__22961))){
return crate.compiler.dom_add.call(null,bc,parent,elem,v);
} else {
if(cljs.core.truth_(pred__22960.call(null,new cljs.core.Keyword(null,"remove","remove",-131428414),expr__22961))){
return crate.compiler.dom_remove.call(null,bc,elem);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__22961)].join('')));
}
}
}));
}));
crate.compiler.handle_bindings = (function crate$compiler$handle_bindings(bs,elem){
var seq__22973 = cljs.core.seq.call(null,bs);
var chunk__22974 = null;
var count__22975 = (0);
var i__22976 = (0);
while(true){
if((i__22976 < count__22975)){
var vec__22977 = cljs.core._nth.call(null,chunk__22974,i__22976);
var type = cljs.core.nth.call(null,vec__22977,(0),null);
var b = cljs.core.nth.call(null,vec__22977,(1),null);
crate.compiler.dom_binding.call(null,type,b,elem);

var G__22983 = seq__22973;
var G__22984 = chunk__22974;
var G__22985 = count__22975;
var G__22986 = (i__22976 + (1));
seq__22973 = G__22983;
chunk__22974 = G__22984;
count__22975 = G__22985;
i__22976 = G__22986;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22973);
if(temp__4657__auto__){
var seq__22973__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22973__$1)){
var c__21344__auto__ = cljs.core.chunk_first.call(null,seq__22973__$1);
var G__22987 = cljs.core.chunk_rest.call(null,seq__22973__$1);
var G__22988 = c__21344__auto__;
var G__22989 = cljs.core.count.call(null,c__21344__auto__);
var G__22990 = (0);
seq__22973 = G__22987;
chunk__22974 = G__22988;
count__22975 = G__22989;
i__22976 = G__22990;
continue;
} else {
var vec__22980 = cljs.core.first.call(null,seq__22973__$1);
var type = cljs.core.nth.call(null,vec__22980,(0),null);
var b = cljs.core.nth.call(null,vec__22980,(1),null);
crate.compiler.dom_binding.call(null,type,b,elem);

var G__22991 = cljs.core.next.call(null,seq__22973__$1);
var G__22992 = null;
var G__22993 = (0);
var G__22994 = (0);
seq__22973 = G__22991;
chunk__22974 = G__22992;
count__22975 = G__22993;
i__22976 = G__22994;
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
var args22995 = [];
var len__21638__auto___23008 = arguments.length;
var i__21639__auto___23009 = (0);
while(true){
if((i__21639__auto___23009 < len__21638__auto___23008)){
args22995.push((arguments[i__21639__auto___23009]));

var G__23010 = (i__21639__auto___23009 + (1));
i__21639__auto___23009 = G__23010;
continue;
} else {
}
break;
}

var G__22997 = args22995.length;
switch (G__22997) {
case 2:
return crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22995.length)].join('')));

}
});

crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$2 = (function (elem,v){
if(typeof v === 'string'){
elem.setAttribute("style",v);
} else {
if(cljs.core.map_QMARK_.call(null,v)){
var seq__22998_23012 = cljs.core.seq.call(null,v);
var chunk__22999_23013 = null;
var count__23000_23014 = (0);
var i__23001_23015 = (0);
while(true){
if((i__23001_23015 < count__23000_23014)){
var vec__23002_23016 = cljs.core._nth.call(null,chunk__22999_23013,i__23001_23015);
var k_23017 = cljs.core.nth.call(null,vec__23002_23016,(0),null);
var v_23018__$1 = cljs.core.nth.call(null,vec__23002_23016,(1),null);
crate.compiler.dom_style.call(null,elem,k_23017,v_23018__$1);

var G__23019 = seq__22998_23012;
var G__23020 = chunk__22999_23013;
var G__23021 = count__23000_23014;
var G__23022 = (i__23001_23015 + (1));
seq__22998_23012 = G__23019;
chunk__22999_23013 = G__23020;
count__23000_23014 = G__23021;
i__23001_23015 = G__23022;
continue;
} else {
var temp__4657__auto___23023 = cljs.core.seq.call(null,seq__22998_23012);
if(temp__4657__auto___23023){
var seq__22998_23024__$1 = temp__4657__auto___23023;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22998_23024__$1)){
var c__21344__auto___23025 = cljs.core.chunk_first.call(null,seq__22998_23024__$1);
var G__23026 = cljs.core.chunk_rest.call(null,seq__22998_23024__$1);
var G__23027 = c__21344__auto___23025;
var G__23028 = cljs.core.count.call(null,c__21344__auto___23025);
var G__23029 = (0);
seq__22998_23012 = G__23026;
chunk__22999_23013 = G__23027;
count__23000_23014 = G__23028;
i__23001_23015 = G__23029;
continue;
} else {
var vec__23005_23030 = cljs.core.first.call(null,seq__22998_23024__$1);
var k_23031 = cljs.core.nth.call(null,vec__23005_23030,(0),null);
var v_23032__$1 = cljs.core.nth.call(null,vec__23005_23030,(1),null);
crate.compiler.dom_style.call(null,elem,k_23031,v_23032__$1);

var G__23033 = cljs.core.next.call(null,seq__22998_23024__$1);
var G__23034 = null;
var G__23035 = (0);
var G__23036 = (0);
seq__22998_23012 = G__23033;
chunk__22999_23013 = G__23034;
count__23000_23014 = G__23035;
i__23001_23015 = G__23036;
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
var args23037 = [];
var len__21638__auto___23050 = arguments.length;
var i__21639__auto___23051 = (0);
while(true){
if((i__21639__auto___23051 < len__21638__auto___23050)){
args23037.push((arguments[i__21639__auto___23051]));

var G__23052 = (i__21639__auto___23051 + (1));
i__21639__auto___23051 = G__23052;
continue;
} else {
}
break;
}

var G__23039 = args23037.length;
switch (G__23039) {
case 2:
return crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23037.length)].join('')));

}
});

crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$2 = (function (elem,attrs){
if(cljs.core.truth_(elem)){
if(!(cljs.core.map_QMARK_.call(null,attrs))){
return elem.getAttribute(cljs.core.name.call(null,attrs));
} else {
var seq__23040_23054 = cljs.core.seq.call(null,attrs);
var chunk__23041_23055 = null;
var count__23042_23056 = (0);
var i__23043_23057 = (0);
while(true){
if((i__23043_23057 < count__23042_23056)){
var vec__23044_23058 = cljs.core._nth.call(null,chunk__23041_23055,i__23043_23057);
var k_23059 = cljs.core.nth.call(null,vec__23044_23058,(0),null);
var v_23060 = cljs.core.nth.call(null,vec__23044_23058,(1),null);
crate.compiler.dom_attr.call(null,elem,k_23059,v_23060);

var G__23061 = seq__23040_23054;
var G__23062 = chunk__23041_23055;
var G__23063 = count__23042_23056;
var G__23064 = (i__23043_23057 + (1));
seq__23040_23054 = G__23061;
chunk__23041_23055 = G__23062;
count__23042_23056 = G__23063;
i__23043_23057 = G__23064;
continue;
} else {
var temp__4657__auto___23065 = cljs.core.seq.call(null,seq__23040_23054);
if(temp__4657__auto___23065){
var seq__23040_23066__$1 = temp__4657__auto___23065;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23040_23066__$1)){
var c__21344__auto___23067 = cljs.core.chunk_first.call(null,seq__23040_23066__$1);
var G__23068 = cljs.core.chunk_rest.call(null,seq__23040_23066__$1);
var G__23069 = c__21344__auto___23067;
var G__23070 = cljs.core.count.call(null,c__21344__auto___23067);
var G__23071 = (0);
seq__23040_23054 = G__23068;
chunk__23041_23055 = G__23069;
count__23042_23056 = G__23070;
i__23043_23057 = G__23071;
continue;
} else {
var vec__23047_23072 = cljs.core.first.call(null,seq__23040_23066__$1);
var k_23073 = cljs.core.nth.call(null,vec__23047_23072,(0),null);
var v_23074 = cljs.core.nth.call(null,vec__23047_23072,(1),null);
crate.compiler.dom_attr.call(null,elem,k_23073,v_23074);

var G__23075 = cljs.core.next.call(null,seq__23040_23066__$1);
var G__23076 = null;
var G__23077 = (0);
var G__23078 = (0);
seq__23040_23054 = G__23075;
chunk__23041_23055 = G__23076;
count__23042_23056 = G__23077;
i__23043_23057 = G__23078;
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
var v_23079__$1 = (cljs.core.truth_(crate.binding.binding_QMARK_.call(null,v))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

return crate.binding.value.call(null,v);
})()
:v);
elem.setAttribute(cljs.core.name.call(null,k),v_23079__$1);
}

return elem;
});

crate.compiler.dom_attr.cljs$lang$maxFixedArity = 3;

/**
 * Regular expression that parses a CSS-style id and class from a tag name.
 */
crate.compiler.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
crate.compiler.normalize_map_attrs = (function crate$compiler$normalize_map_attrs(map_attrs){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__23084){
var vec__23085 = p__23084;
var n = cljs.core.nth.call(null,vec__23085,(0),null);
var v = cljs.core.nth.call(null,vec__23085,(1),null);
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
crate.compiler.normalize_element = (function crate$compiler$normalize_element(p__23089){
var vec__23102 = p__23089;
var seq__23103 = cljs.core.seq.call(null,vec__23102);
var first__23104 = cljs.core.first.call(null,seq__23103);
var seq__23103__$1 = cljs.core.next.call(null,seq__23103);
var tag = first__23104;
var content = seq__23103__$1;
if(!(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string'))){
throw [cljs.core.str(tag),cljs.core.str(" is not a valid tag name.")].join('');
} else {
}

var vec__23105 = cljs.core.re_matches.call(null,crate.compiler.re_tag,cljs.core.name.call(null,tag));
var _ = cljs.core.nth.call(null,vec__23105,(0),null);
var tag__$1 = cljs.core.nth.call(null,vec__23105,(1),null);
var id = cljs.core.nth.call(null,vec__23105,(2),null);
var class$ = cljs.core.nth.call(null,vec__23105,(3),null);
var vec__23108 = (function (){var vec__23111 = clojure.string.split.call(null,tag__$1,/:/);
var nsp = cljs.core.nth.call(null,vec__23111,(0),null);
var t = cljs.core.nth.call(null,vec__23111,(1),null);
var ns_xmlns = crate.compiler.xmlns.call(null,cljs.core.keyword.call(null,nsp));
if(cljs.core.truth_(t)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__20530__auto__ = ns_xmlns;
if(cljs.core.truth_(or__20530__auto__)){
return or__20530__auto__;
} else {
return nsp;
}
})(),t], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhtml","xhtml",1912943770).cljs$core$IFn$_invoke$arity$1(crate.compiler.xmlns),nsp], null);
}
})();
var nsp = cljs.core.nth.call(null,vec__23108,(0),null);
var tag__$2 = cljs.core.nth.call(null,vec__23108,(1),null);
var tag_attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (vec__23105,_,tag__$1,id,class$,vec__23108,nsp,tag__$2,vec__23102,seq__23103,first__23104,seq__23103__$1,tag,content){
return (function (p1__23088_SHARP_){
return !((cljs.core.second.call(null,p1__23088_SHARP_) == null));
});})(vec__23105,_,tag__$1,id,class$,vec__23108,nsp,tag__$2,vec__23102,seq__23103,first__23104,seq__23103__$1,tag,content))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__20530__auto__ = id;
if(cljs.core.truth_(or__20530__auto__)){
return or__20530__auto__;
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
var bindings23118 = crate.compiler.bindings;
crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);

try{var vec__23119 = crate.compiler.normalize_element.call(null,tag_def);
var nsp = cljs.core.nth.call(null,vec__23119,(0),null);
var tag = cljs.core.nth.call(null,vec__23119,(1),null);
var attrs = cljs.core.nth.call(null,vec__23119,(2),null);
var content = cljs.core.nth.call(null,vec__23119,(3),null);
var elem = crate.compiler.create_elem.call(null,nsp,tag);
crate.compiler.dom_attr.call(null,elem,attrs);

crate.compiler.as_content.call(null,elem,content);

crate.compiler.handle_bindings.call(null,cljs.core.deref.call(null,crate.compiler.bindings),elem);

return elem;
}finally {crate.compiler.bindings = bindings23118;
}});
/**
 * Add an optional attribute argument to a function that returns a vector tag.
 */
crate.compiler.add_optional_attrs = (function crate$compiler$add_optional_attrs(func){
return (function() { 
var G__23128__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__23125 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__23126 = cljs.core.seq.call(null,vec__23125);
var first__23127 = cljs.core.first.call(null,seq__23126);
var seq__23126__$1 = cljs.core.next.call(null,seq__23126);
var tag = first__23127;
var body = seq__23126__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__23128 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23129__i = 0, G__23129__a = new Array(arguments.length -  0);
while (G__23129__i < G__23129__a.length) {G__23129__a[G__23129__i] = arguments[G__23129__i + 0]; ++G__23129__i;}
  args = new cljs.core.IndexedSeq(G__23129__a,0);
} 
return G__23128__delegate.call(this,args);};
G__23128.cljs$lang$maxFixedArity = 0;
G__23128.cljs$lang$applyTo = (function (arglist__23130){
var args = cljs.core.seq(arglist__23130);
return G__23128__delegate(args);
});
G__23128.cljs$core$IFn$_invoke$arity$variadic = G__23128__delegate;
return G__23128;
})()
;
});

//# sourceMappingURL=compiler.js.map?rel=1482038774771