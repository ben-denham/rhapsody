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
var seq__10765 = cljs.core.seq.call(null,content);
var chunk__10766 = null;
var count__10767 = (0);
var i__10768 = (0);
while(true){
if((i__10768 < count__10767)){
var c = cljs.core._nth.call(null,chunk__10766,i__10768);
var child_10769 = (((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?crate.compiler.as_content.call(null,parent,c):(cljs.core.truth_(crate.binding.binding_coll_QMARK_.call(null,c))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"coll","coll",1647737163),c);

return crate.compiler.as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})()
:(cljs.core.truth_(crate.binding.binding_QMARK_.call(null,c))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),c);

return crate.compiler.as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})()
:(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get((0)):goog.dom.createTextNode([cljs.core.str(c)].join(''))
)))))))));
if(cljs.core.truth_(child_10769)){
goog.dom.appendChild(parent,child_10769);
} else {
}

var G__10770 = seq__10765;
var G__10771 = chunk__10766;
var G__10772 = count__10767;
var G__10773 = (i__10768 + (1));
seq__10765 = G__10770;
chunk__10766 = G__10771;
count__10767 = G__10772;
i__10768 = G__10773;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10765);
if(temp__4657__auto__){
var seq__10765__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10765__$1)){
var c__7752__auto__ = cljs.core.chunk_first.call(null,seq__10765__$1);
var G__10774 = cljs.core.chunk_rest.call(null,seq__10765__$1);
var G__10775 = c__7752__auto__;
var G__10776 = cljs.core.count.call(null,c__7752__auto__);
var G__10777 = (0);
seq__10765 = G__10774;
chunk__10766 = G__10775;
count__10767 = G__10776;
i__10768 = G__10777;
continue;
} else {
var c = cljs.core.first.call(null,seq__10765__$1);
var child_10778 = (((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?crate.compiler.as_content.call(null,parent,c):(cljs.core.truth_(crate.binding.binding_coll_QMARK_.call(null,c))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"coll","coll",1647737163),c);

return crate.compiler.as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})()
:(cljs.core.truth_(crate.binding.binding_QMARK_.call(null,c))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),c);

return crate.compiler.as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})()
:(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get((0)):goog.dom.createTextNode([cljs.core.str(c)].join(''))
)))))))));
if(cljs.core.truth_(child_10778)){
goog.dom.appendChild(parent,child_10778);
} else {
}

var G__10779 = cljs.core.next.call(null,seq__10765__$1);
var G__10780 = null;
var G__10781 = (0);
var G__10782 = (0);
seq__10765 = G__10779;
chunk__10766 = G__10780;
count__10767 = G__10781;
i__10768 = G__10782;
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
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (_,p__10783,elem){
var vec__10784 = p__10783;
var k = cljs.core.nth.call(null,vec__10784,(0),null);
var b = cljs.core.nth.call(null,vec__10784,(1),null);
return crate.binding.on_change.call(null,b,((function (vec__10784,k,b){
return (function (v){
return crate.compiler.dom_attr.call(null,elem,k,v);
});})(vec__10784,k,b))
);
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"style","style",-496642736),(function (_,p__10787,elem){
var vec__10788 = p__10787;
var k = cljs.core.nth.call(null,vec__10788,(0),null);
var b = cljs.core.nth.call(null,vec__10788,(1),null);
return crate.binding.on_change.call(null,b,((function (vec__10788,k,b){
return (function (v){
if(cljs.core.truth_(k)){
return crate.compiler.dom_style.call(null,elem,k,v);
} else {
return crate.compiler.dom_style.call(null,elem,v);
}
});})(vec__10788,k,b))
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
var pred__10791 = cljs.core._EQ_;
var expr__10792 = type;
if(cljs.core.truth_(pred__10791.call(null,new cljs.core.Keyword(null,"add","add",235287739),expr__10792))){
return crate.compiler.dom_add.call(null,bc,parent,elem,v);
} else {
if(cljs.core.truth_(pred__10791.call(null,new cljs.core.Keyword(null,"remove","remove",-131428414),expr__10792))){
return crate.compiler.dom_remove.call(null,bc,elem);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10792)].join('')));
}
}
}));
}));
crate.compiler.handle_bindings = (function crate$compiler$handle_bindings(bs,elem){
var seq__10804 = cljs.core.seq.call(null,bs);
var chunk__10805 = null;
var count__10806 = (0);
var i__10807 = (0);
while(true){
if((i__10807 < count__10806)){
var vec__10808 = cljs.core._nth.call(null,chunk__10805,i__10807);
var type = cljs.core.nth.call(null,vec__10808,(0),null);
var b = cljs.core.nth.call(null,vec__10808,(1),null);
crate.compiler.dom_binding.call(null,type,b,elem);

var G__10814 = seq__10804;
var G__10815 = chunk__10805;
var G__10816 = count__10806;
var G__10817 = (i__10807 + (1));
seq__10804 = G__10814;
chunk__10805 = G__10815;
count__10806 = G__10816;
i__10807 = G__10817;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10804);
if(temp__4657__auto__){
var seq__10804__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10804__$1)){
var c__7752__auto__ = cljs.core.chunk_first.call(null,seq__10804__$1);
var G__10818 = cljs.core.chunk_rest.call(null,seq__10804__$1);
var G__10819 = c__7752__auto__;
var G__10820 = cljs.core.count.call(null,c__7752__auto__);
var G__10821 = (0);
seq__10804 = G__10818;
chunk__10805 = G__10819;
count__10806 = G__10820;
i__10807 = G__10821;
continue;
} else {
var vec__10811 = cljs.core.first.call(null,seq__10804__$1);
var type = cljs.core.nth.call(null,vec__10811,(0),null);
var b = cljs.core.nth.call(null,vec__10811,(1),null);
crate.compiler.dom_binding.call(null,type,b,elem);

var G__10822 = cljs.core.next.call(null,seq__10804__$1);
var G__10823 = null;
var G__10824 = (0);
var G__10825 = (0);
seq__10804 = G__10822;
chunk__10805 = G__10823;
count__10806 = G__10824;
i__10807 = G__10825;
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
var args10826 = [];
var len__8046__auto___10839 = arguments.length;
var i__8047__auto___10840 = (0);
while(true){
if((i__8047__auto___10840 < len__8046__auto___10839)){
args10826.push((arguments[i__8047__auto___10840]));

var G__10841 = (i__8047__auto___10840 + (1));
i__8047__auto___10840 = G__10841;
continue;
} else {
}
break;
}

var G__10828 = args10826.length;
switch (G__10828) {
case 2:
return crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10826.length)].join('')));

}
});

crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$2 = (function (elem,v){
if(typeof v === 'string'){
elem.setAttribute("style",v);
} else {
if(cljs.core.map_QMARK_.call(null,v)){
var seq__10829_10843 = cljs.core.seq.call(null,v);
var chunk__10830_10844 = null;
var count__10831_10845 = (0);
var i__10832_10846 = (0);
while(true){
if((i__10832_10846 < count__10831_10845)){
var vec__10833_10847 = cljs.core._nth.call(null,chunk__10830_10844,i__10832_10846);
var k_10848 = cljs.core.nth.call(null,vec__10833_10847,(0),null);
var v_10849__$1 = cljs.core.nth.call(null,vec__10833_10847,(1),null);
crate.compiler.dom_style.call(null,elem,k_10848,v_10849__$1);

var G__10850 = seq__10829_10843;
var G__10851 = chunk__10830_10844;
var G__10852 = count__10831_10845;
var G__10853 = (i__10832_10846 + (1));
seq__10829_10843 = G__10850;
chunk__10830_10844 = G__10851;
count__10831_10845 = G__10852;
i__10832_10846 = G__10853;
continue;
} else {
var temp__4657__auto___10854 = cljs.core.seq.call(null,seq__10829_10843);
if(temp__4657__auto___10854){
var seq__10829_10855__$1 = temp__4657__auto___10854;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10829_10855__$1)){
var c__7752__auto___10856 = cljs.core.chunk_first.call(null,seq__10829_10855__$1);
var G__10857 = cljs.core.chunk_rest.call(null,seq__10829_10855__$1);
var G__10858 = c__7752__auto___10856;
var G__10859 = cljs.core.count.call(null,c__7752__auto___10856);
var G__10860 = (0);
seq__10829_10843 = G__10857;
chunk__10830_10844 = G__10858;
count__10831_10845 = G__10859;
i__10832_10846 = G__10860;
continue;
} else {
var vec__10836_10861 = cljs.core.first.call(null,seq__10829_10855__$1);
var k_10862 = cljs.core.nth.call(null,vec__10836_10861,(0),null);
var v_10863__$1 = cljs.core.nth.call(null,vec__10836_10861,(1),null);
crate.compiler.dom_style.call(null,elem,k_10862,v_10863__$1);

var G__10864 = cljs.core.next.call(null,seq__10829_10855__$1);
var G__10865 = null;
var G__10866 = (0);
var G__10867 = (0);
seq__10829_10843 = G__10864;
chunk__10830_10844 = G__10865;
count__10831_10845 = G__10866;
i__10832_10846 = G__10867;
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
var args10868 = [];
var len__8046__auto___10881 = arguments.length;
var i__8047__auto___10882 = (0);
while(true){
if((i__8047__auto___10882 < len__8046__auto___10881)){
args10868.push((arguments[i__8047__auto___10882]));

var G__10883 = (i__8047__auto___10882 + (1));
i__8047__auto___10882 = G__10883;
continue;
} else {
}
break;
}

var G__10870 = args10868.length;
switch (G__10870) {
case 2:
return crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10868.length)].join('')));

}
});

crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$2 = (function (elem,attrs){
if(cljs.core.truth_(elem)){
if(!(cljs.core.map_QMARK_.call(null,attrs))){
return elem.getAttribute(cljs.core.name.call(null,attrs));
} else {
var seq__10871_10885 = cljs.core.seq.call(null,attrs);
var chunk__10872_10886 = null;
var count__10873_10887 = (0);
var i__10874_10888 = (0);
while(true){
if((i__10874_10888 < count__10873_10887)){
var vec__10875_10889 = cljs.core._nth.call(null,chunk__10872_10886,i__10874_10888);
var k_10890 = cljs.core.nth.call(null,vec__10875_10889,(0),null);
var v_10891 = cljs.core.nth.call(null,vec__10875_10889,(1),null);
crate.compiler.dom_attr.call(null,elem,k_10890,v_10891);

var G__10892 = seq__10871_10885;
var G__10893 = chunk__10872_10886;
var G__10894 = count__10873_10887;
var G__10895 = (i__10874_10888 + (1));
seq__10871_10885 = G__10892;
chunk__10872_10886 = G__10893;
count__10873_10887 = G__10894;
i__10874_10888 = G__10895;
continue;
} else {
var temp__4657__auto___10896 = cljs.core.seq.call(null,seq__10871_10885);
if(temp__4657__auto___10896){
var seq__10871_10897__$1 = temp__4657__auto___10896;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10871_10897__$1)){
var c__7752__auto___10898 = cljs.core.chunk_first.call(null,seq__10871_10897__$1);
var G__10899 = cljs.core.chunk_rest.call(null,seq__10871_10897__$1);
var G__10900 = c__7752__auto___10898;
var G__10901 = cljs.core.count.call(null,c__7752__auto___10898);
var G__10902 = (0);
seq__10871_10885 = G__10899;
chunk__10872_10886 = G__10900;
count__10873_10887 = G__10901;
i__10874_10888 = G__10902;
continue;
} else {
var vec__10878_10903 = cljs.core.first.call(null,seq__10871_10897__$1);
var k_10904 = cljs.core.nth.call(null,vec__10878_10903,(0),null);
var v_10905 = cljs.core.nth.call(null,vec__10878_10903,(1),null);
crate.compiler.dom_attr.call(null,elem,k_10904,v_10905);

var G__10906 = cljs.core.next.call(null,seq__10871_10897__$1);
var G__10907 = null;
var G__10908 = (0);
var G__10909 = (0);
seq__10871_10885 = G__10906;
chunk__10872_10886 = G__10907;
count__10873_10887 = G__10908;
i__10874_10888 = G__10909;
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
var v_10910__$1 = (cljs.core.truth_(crate.binding.binding_QMARK_.call(null,v))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

return crate.binding.value.call(null,v);
})()
:v);
elem.setAttribute(cljs.core.name.call(null,k),v_10910__$1);
}

return elem;
});

crate.compiler.dom_attr.cljs$lang$maxFixedArity = 3;

/**
 * Regular expression that parses a CSS-style id and class from a tag name.
 */
crate.compiler.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
crate.compiler.normalize_map_attrs = (function crate$compiler$normalize_map_attrs(map_attrs){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__10915){
var vec__10916 = p__10915;
var n = cljs.core.nth.call(null,vec__10916,(0),null);
var v = cljs.core.nth.call(null,vec__10916,(1),null);
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
crate.compiler.normalize_element = (function crate$compiler$normalize_element(p__10920){
var vec__10933 = p__10920;
var seq__10934 = cljs.core.seq.call(null,vec__10933);
var first__10935 = cljs.core.first.call(null,seq__10934);
var seq__10934__$1 = cljs.core.next.call(null,seq__10934);
var tag = first__10935;
var content = seq__10934__$1;
if(!(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string'))){
throw [cljs.core.str(tag),cljs.core.str(" is not a valid tag name.")].join('');
} else {
}

var vec__10936 = cljs.core.re_matches.call(null,crate.compiler.re_tag,cljs.core.name.call(null,tag));
var _ = cljs.core.nth.call(null,vec__10936,(0),null);
var tag__$1 = cljs.core.nth.call(null,vec__10936,(1),null);
var id = cljs.core.nth.call(null,vec__10936,(2),null);
var class$ = cljs.core.nth.call(null,vec__10936,(3),null);
var vec__10939 = (function (){var vec__10942 = clojure.string.split.call(null,tag__$1,/:/);
var nsp = cljs.core.nth.call(null,vec__10942,(0),null);
var t = cljs.core.nth.call(null,vec__10942,(1),null);
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
var nsp = cljs.core.nth.call(null,vec__10939,(0),null);
var tag__$2 = cljs.core.nth.call(null,vec__10939,(1),null);
var tag_attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (vec__10936,_,tag__$1,id,class$,vec__10939,nsp,tag__$2,vec__10933,seq__10934,first__10935,seq__10934__$1,tag,content){
return (function (p1__10919_SHARP_){
return !((cljs.core.second.call(null,p1__10919_SHARP_) == null));
});})(vec__10936,_,tag__$1,id,class$,vec__10939,nsp,tag__$2,vec__10933,seq__10934,first__10935,seq__10934__$1,tag,content))
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
var bindings10949 = crate.compiler.bindings;
crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);

try{var vec__10950 = crate.compiler.normalize_element.call(null,tag_def);
var nsp = cljs.core.nth.call(null,vec__10950,(0),null);
var tag = cljs.core.nth.call(null,vec__10950,(1),null);
var attrs = cljs.core.nth.call(null,vec__10950,(2),null);
var content = cljs.core.nth.call(null,vec__10950,(3),null);
var elem = crate.compiler.create_elem.call(null,nsp,tag);
crate.compiler.dom_attr.call(null,elem,attrs);

crate.compiler.as_content.call(null,elem,content);

crate.compiler.handle_bindings.call(null,cljs.core.deref.call(null,crate.compiler.bindings),elem);

return elem;
}finally {crate.compiler.bindings = bindings10949;
}});
/**
 * Add an optional attribute argument to a function that returns a vector tag.
 */
crate.compiler.add_optional_attrs = (function crate$compiler$add_optional_attrs(func){
return (function() { 
var G__10959__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__10956 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__10957 = cljs.core.seq.call(null,vec__10956);
var first__10958 = cljs.core.first.call(null,seq__10957);
var seq__10957__$1 = cljs.core.next.call(null,seq__10957);
var tag = first__10958;
var body = seq__10957__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__10959 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10960__i = 0, G__10960__a = new Array(arguments.length -  0);
while (G__10960__i < G__10960__a.length) {G__10960__a[G__10960__i] = arguments[G__10960__i + 0]; ++G__10960__i;}
  args = new cljs.core.IndexedSeq(G__10960__a,0);
} 
return G__10959__delegate.call(this,args);};
G__10959.cljs$lang$maxFixedArity = 0;
G__10959.cljs$lang$applyTo = (function (arglist__10961){
var args = cljs.core.seq(arglist__10961);
return G__10959__delegate(args);
});
G__10959.cljs$core$IFn$_invoke$arity$variadic = G__10959__delegate;
return G__10959;
})()
;
});

//# sourceMappingURL=compiler.js.map