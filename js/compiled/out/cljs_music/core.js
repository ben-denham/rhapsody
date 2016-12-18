// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs_music.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cemerick.url');
goog.require('dommy.core');
goog.require('crate.core');
cljs_music.core.namespace__GT_link = (function cljs_music$core$namespace__GT_link(namespace){
var href = [cljs.core.str("?ns="),cljs.core.str(namespace)].join('');
var title = cljs.core.last.call(null,clojure.string.split.call(null,[cljs.core.str(namespace)].join(''),"."));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null),title], null);
});
cljs_music.core.render_menu = (function cljs_music$core$render_menu(){
return dommy.core.replace_contents_BANG_.call(null,document.getElementById("app"),crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map.call(null,(function (namespace){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs_music.core.namespace__GT_link.call(null,namespace)], null);
}),cljs.core.list(new cljs.core.Symbol(null,"cljs-music.compositions.demo","cljs-music.compositions.demo",-1970412451,null)))], null)));
});
var page_url_24091 = cemerick.url.url.call(null,window.location.href);
var temp__4655__auto___24092 = cljs.core.get_in.call(null,page_url_24091,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),"ns"], null));
if(cljs.core.truth_(temp__4655__auto___24092)){
var namespace_24093 = temp__4655__auto___24092;
var goog_namespace_24094 = clojure.string.replace.call(null,namespace_24093,"-","_");
goog.require(goog_namespace_24094);
} else {
cljs_music.core.render_menu.call(null);
}

//# sourceMappingURL=core.js.map?rel=1482038775601