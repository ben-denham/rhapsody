// Compiled by ClojureScript 1.10.773 {}
goog.provide('crate.util');
goog.require('cljs.core');
goog.require('clojure.string');
crate.util._STAR_base_url_STAR_ = null;
crate.util.as_str = (function crate$util$as_str(var_args){
var G__2164 = arguments.length;
switch (G__2164) {
case 0:
return crate.util.as_str.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return crate.util.as_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___2166 = arguments.length;
var i__4737__auto___2167 = (0);
while(true){
if((i__4737__auto___2167 < len__4736__auto___2166)){
args_arr__4757__auto__.push((arguments[i__4737__auto___2167]));

var G__2168 = (i__4737__auto___2167 + (1));
i__4737__auto___2167 = G__2168;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((1)),(0),null));
return crate.util.as_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4758__auto__);

}
});

(crate.util.as_str.cljs$core$IFn$_invoke$arity$0 = (function (){
return "";
}));

(crate.util.as_str.cljs$core$IFn$_invoke$arity$1 = (function (x){
if((((x instanceof cljs.core.Symbol)) || ((x instanceof cljs.core.Keyword)))){
return cljs.core.name.call(null,x);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}
}));

(crate.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (x,xs){
return (function (s,more){
while(true){
if(cljs.core.truth_(more)){
var G__2169 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),crate.util.as_str.call(null,cljs.core.first.call(null,more))].join('');
var G__2170 = cljs.core.next.call(null,more);
s = G__2169;
more = G__2170;
continue;
} else {
return s;
}
break;
}
}).call(null,crate.util.as_str.call(null,x),xs);
}));

/** @this {Function} */
(crate.util.as_str.cljs$lang$applyTo = (function (seq2162){
var G__2163 = cljs.core.first.call(null,seq2162);
var seq2162__$1 = cljs.core.next.call(null,seq2162);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2163,seq2162__$1);
}));

(crate.util.as_str.cljs$lang$maxFixedArity = (1));

/**
 * Change special characters into HTML character entities.
 */
crate.util.escape_html = (function crate$util$escape_html(text){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,crate.util.as_str.call(null,text),"&","&amp;"),"<","&lt;"),">","&gt;"),"\"","&quot;");
});
/**
 * Prepends the base-url to the supplied URI.
 */
crate.util.to_uri = (function crate$util$to_uri(uri){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/^\w+:.*/,uri))){
return uri;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(crate.util._STAR_base_url_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)].join('');
}
});
crate.util.url_encode_component = (function crate$util$url_encode_component(s){

return encodeURIComponent(crate.util.as_str.call(null,s));
});
/**
 * Turn a map of parameters into a urlencoded string.
 */
crate.util.url_encode = (function crate$util$url_encode(params){
return clojure.string.join.call(null,"&",(function (){var iter__4529__auto__ = (function crate$util$url_encode_$_iter__2171(s__2172){
return (new cljs.core.LazySeq(null,(function (){
var s__2172__$1 = s__2172;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__2172__$1);
if(temp__4657__auto__){
var s__2172__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2172__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__2172__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__2174 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__2173 = (0);
while(true){
if((i__2173 < size__4528__auto__)){
var vec__2175 = cljs.core._nth.call(null,c__4527__auto__,i__2173);
var k = cljs.core.nth.call(null,vec__2175,(0),null);
var v = cljs.core.nth.call(null,vec__2175,(1),null);
cljs.core.chunk_append.call(null,b__2174,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(crate.util.url_encode_component.call(null,k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(crate.util.url_encode_component.call(null,v))].join(''));

var G__2181 = (i__2173 + (1));
i__2173 = G__2181;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2174),crate$util$url_encode_$_iter__2171.call(null,cljs.core.chunk_rest.call(null,s__2172__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2174),null);
}
} else {
var vec__2178 = cljs.core.first.call(null,s__2172__$2);
var k = cljs.core.nth.call(null,vec__2178,(0),null);
var v = cljs.core.nth.call(null,vec__2178,(1),null);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(crate.util.url_encode_component.call(null,k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(crate.util.url_encode_component.call(null,v))].join(''),crate$util$url_encode_$_iter__2171.call(null,cljs.core.rest.call(null,s__2172__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,params);
})());
});
/**
 * Creates a URL string from a variable list of arguments and an optional
 *   parameter map as the last argument. For example:
 *  (url "/group/" 4 "/products" {:page 9})
 *  => "/group/4/products?page=9"
 */
crate.util.url = (function crate$util$url(var_args){
var args__4742__auto__ = [];
var len__4736__auto___2183 = arguments.length;
var i__4737__auto___2184 = (0);
while(true){
if((i__4737__auto___2184 < len__4736__auto___2183)){
args__4742__auto__.push((arguments[i__4737__auto___2184]));

var G__2185 = (i__4737__auto___2184 + (1));
i__4737__auto___2184 = G__2185;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return crate.util.url.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(crate.util.url.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var params = cljs.core.last.call(null,args);
var args__$1 = cljs.core.butlast.call(null,args);
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(crate.util.to_uri.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,args__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.map_QMARK_.call(null,params))?["?",crate.util.url_encode.call(null,params)].join(''):params))].join('')));
}));

(crate.util.url.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(crate.util.url.cljs$lang$applyTo = (function (seq2182){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2182));
}));


//# sourceMappingURL=util.js.map
