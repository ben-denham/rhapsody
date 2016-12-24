// Compiled by ClojureScript 1.9.293 {}
goog.provide('adzerk.boot_cljs_repl');
goog.require('cljs.core');
goog.require('weasel.repl');
var repl_conn_12222 = "ws://localhost:1814";
if(cljs.core.truth_((function (){var and__6926__auto__ = repl_conn_12222;
if(cljs.core.truth_(and__6926__auto__)){
return cljs.core.not.call(null,weasel.repl.alive_QMARK_.call(null));
} else {
return and__6926__auto__;
}
})())){
weasel.repl.connect.call(null,"ws://localhost:1814",new cljs.core.Keyword(null,"print","print",1299562414),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repl","repl",-35398667),null,new cljs.core.Keyword(null,"console","console",1228072057),null], null), null));
} else {
}

//# sourceMappingURL=boot_cljs_repl.js.map