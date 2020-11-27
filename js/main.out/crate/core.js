// Compiled by ClojureScript 1.10.773 {}
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
var args__4742__auto__ = [];
var len__4736__auto___2638 = arguments.length;
var i__4737__auto___2639 = (0);
while(true){
if((i__4737__auto___2639 < len__4736__auto___2638)){
args__4742__auto__.push((arguments[i__4737__auto___2639]));

var G__2640 = (i__4737__auto___2639 + (1));
i__4737__auto___2639 = G__2640;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return crate.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(crate.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (tags){
var res = cljs.core.map.call(null,crate.compiler.elem_factory,tags);
if(cljs.core.truth_(cljs.core.second.call(null,res))){
return res;
} else {
return cljs.core.first.call(null,res);
}
}));

(crate.core.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(crate.core.html.cljs$lang$applyTo = (function (seq2637){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2637));
}));

/**
 * Alias for crate.util/escape-html
 */
crate.core.h = crate.util.escape_html;

//# sourceMappingURL=core.js.map
