// Compiled by ClojureScript 1.10.773 {}
goog.provide('rhapsody.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cemerick.url');
goog.require('dommy.core');
goog.require('crate.core');
rhapsody.core.namespace__GT_parts = (function rhapsody$core$namespace__GT_parts(namespace){
return clojure.string.split.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(namespace),".");
});
rhapsody.core.namespace__GT_link = (function rhapsody$core$namespace__GT_link(namespace){
var title = cljs.core.first.call(null,rhapsody.core.namespace__GT_parts.call(null,namespace));
var href = [clojure.string.replace.call(null,title,"-","_"),"/play.html"].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null),title], null);
});
rhapsody.core.composition_namespace_QMARK_ = (function rhapsody$core$composition_namespace_QMARK_(namespace){
return cljs.core._EQ_.call(null,"composition",cljs.core.last.call(null,rhapsody.core.namespace__GT_parts.call(null,namespace)));
});
rhapsody.core.render_menu = (function rhapsody$core$render_menu(){
return dommy.core.replace_contents_BANG_.call(null,document.getElementById("app"),crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map.call(null,(function (namespace){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),rhapsody.core.namespace__GT_link.call(null,namespace)], null);
}),cljs.core.filter.call(null,rhapsody.core.composition_namespace_QMARK_,cljs.core.list(new cljs.core.Symbol(null,"demo.composition","demo.composition",-1734442115,null),new cljs.core.Symbol(null,"gravity-falls.composition","gravity-falls.composition",-1946212928,null),new cljs.core.Symbol(null,"winter.composition","winter.composition",-1274752877,null))))], null)));
});
rhapsody.core.render_menu.call(null);

//# sourceMappingURL=core.js.map
