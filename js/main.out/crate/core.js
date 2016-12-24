// Compiled by ClojureScript 1.9.293 {}
goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('crate.compiler');
goog.require('crate.util');
crate.core.group_id = cljs.core.atom.call(null,(0));
crate.core.raw = (function crate$core$raw(html_str){
return goog.dom.htmlToDocumentFragment(html_str);
});
crate.core.html = (function crate$core$html(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8688 = arguments.length;
var i__8047__auto___8689 = (0);
while(true){
if((i__8047__auto___8689 < len__8046__auto___8688)){
args__8053__auto__.push((arguments[i__8047__auto___8689]));

var G__8690 = (i__8047__auto___8689 + (1));
i__8047__auto___8689 = G__8690;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return crate.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});

crate.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (tags){
var res = cljs.core.map.call(null,crate.compiler.elem_factory,tags);
if(cljs.core.truth_(cljs.core.second.call(null,res))){
return res;
} else {
return cljs.core.first.call(null,res);
}
});

crate.core.html.cljs$lang$maxFixedArity = (0);

crate.core.html.cljs$lang$applyTo = (function (seq8687){
return crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8687));
});

/**
 * Alias for crate.util/escape-html
 */
crate.core.h = crate.util.escape_html;

//# sourceMappingURL=core.js.map