// Compiled by ClojureScript 1.9.293 {}
goog.provide('crate.util');
goog.require('cljs.core');
goog.require('clojure.string');
crate.util._STAR_base_url_STAR_ = null;
crate.util.as_str = (function crate$util$as_str(var_args){
var args22595 = [];
var len__21638__auto___22600 = arguments.length;
var i__21639__auto___22601 = (0);
while(true){
if((i__21639__auto___22601 < len__21638__auto___22600)){
args22595.push((arguments[i__21639__auto___22601]));

var G__22602 = (i__21639__auto___22601 + (1));
i__21639__auto___22601 = G__22602;
continue;
} else {
}
break;
}

var G__22599 = args22595.length;
switch (G__22599) {
case 0:
return crate.util.as_str.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return crate.util.as_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__21657__auto__ = (new cljs.core.IndexedSeq(args22595.slice((1)),(0),null));
return crate.util.as_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21657__auto__);

}
});

crate.util.as_str.cljs$core$IFn$_invoke$arity$0 = (function (){
return "";
});

crate.util.as_str.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(((x instanceof cljs.core.Symbol)) || ((x instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,x);
} else {
return [cljs.core.str(x)].join('');
}
});

crate.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (x,xs){
return (function (s,more){
while(true){
if(cljs.core.truth_(more)){
var G__22604 = [cljs.core.str(s),cljs.core.str(crate.util.as_str.call(null,cljs.core.first.call(null,more)))].join('');
var G__22605 = cljs.core.next.call(null,more);
s = G__22604;
more = G__22605;
continue;
} else {
return s;
}
break;
}
}).call(null,crate.util.as_str.call(null,x),xs);
});

crate.util.as_str.cljs$lang$applyTo = (function (seq22596){
var G__22597 = cljs.core.first.call(null,seq22596);
var seq22596__$1 = cljs.core.next.call(null,seq22596);
return crate.util.as_str.cljs$core$IFn$_invoke$arity$variadic(G__22597,seq22596__$1);
});

crate.util.as_str.cljs$lang$maxFixedArity = (1);

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
return [cljs.core.str(crate.util._STAR_base_url_STAR_),cljs.core.str(uri)].join('');
}
});
crate.util.url_encode_component = (function crate$util$url_encode_component(s){

return encodeURIComponent(crate.util.as_str.call(null,s));
});
/**
 * Turn a map of parameters into a urlencoded string.
 */
crate.util.url_encode = (function crate$util$url_encode(params){
return clojure.string.join.call(null,"&",(function (){var iter__21313__auto__ = (function crate$util$url_encode_$_iter__22622(s__22623){
return (new cljs.core.LazySeq(null,(function (){
var s__22623__$1 = s__22623;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22623__$1);
if(temp__4657__auto__){
var s__22623__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22623__$2)){
var c__21311__auto__ = cljs.core.chunk_first.call(null,s__22623__$2);
var size__21312__auto__ = cljs.core.count.call(null,c__21311__auto__);
var b__22625 = cljs.core.chunk_buffer.call(null,size__21312__auto__);
if((function (){var i__22624 = (0);
while(true){
if((i__22624 < size__21312__auto__)){
var vec__22632 = cljs.core._nth.call(null,c__21311__auto__,i__22624);
var k = cljs.core.nth.call(null,vec__22632,(0),null);
var v = cljs.core.nth.call(null,vec__22632,(1),null);
cljs.core.chunk_append.call(null,b__22625,[cljs.core.str(crate.util.url_encode_component.call(null,k)),cljs.core.str("="),cljs.core.str(crate.util.url_encode_component.call(null,v))].join(''));

var G__22638 = (i__22624 + (1));
i__22624 = G__22638;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22625),crate$util$url_encode_$_iter__22622.call(null,cljs.core.chunk_rest.call(null,s__22623__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22625),null);
}
} else {
var vec__22635 = cljs.core.first.call(null,s__22623__$2);
var k = cljs.core.nth.call(null,vec__22635,(0),null);
var v = cljs.core.nth.call(null,vec__22635,(1),null);
return cljs.core.cons.call(null,[cljs.core.str(crate.util.url_encode_component.call(null,k)),cljs.core.str("="),cljs.core.str(crate.util.url_encode_component.call(null,v))].join(''),crate$util$url_encode_$_iter__22622.call(null,cljs.core.rest.call(null,s__22623__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21313__auto__.call(null,params);
})());
});
/**
 * Creates a URL string from a variable list of arguments and an optional
 *   parameter map as the last argument. For example:
 *  (url "/group/" 4 "/products" {:page 9})
 *  => "/group/4/products?page=9"
 */
crate.util.url = (function crate$util$url(var_args){
var args__21645__auto__ = [];
var len__21638__auto___22640 = arguments.length;
var i__21639__auto___22641 = (0);
while(true){
if((i__21639__auto___22641 < len__21638__auto___22640)){
args__21645__auto__.push((arguments[i__21639__auto___22641]));

var G__22642 = (i__21639__auto___22641 + (1));
i__21639__auto___22641 = G__22642;
continue;
} else {
}
break;
}

var argseq__21646__auto__ = ((((0) < args__21645__auto__.length))?(new cljs.core.IndexedSeq(args__21645__auto__.slice((0)),(0),null)):null);
return crate.util.url.cljs$core$IFn$_invoke$arity$variadic(argseq__21646__auto__);
});

crate.util.url.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var params = cljs.core.last.call(null,args);
var args__$1 = cljs.core.butlast.call(null,args);
return [cljs.core.str(crate.util.to_uri.call(null,[cljs.core.str(cljs.core.apply.call(null,cljs.core.str,args__$1)),cljs.core.str(((cljs.core.map_QMARK_.call(null,params))?[cljs.core.str("?"),cljs.core.str(crate.util.url_encode.call(null,params))].join(''):params))].join('')))].join('');
});

crate.util.url.cljs$lang$maxFixedArity = (0);

crate.util.url.cljs$lang$applyTo = (function (seq22639){
return crate.util.url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22639));
});


//# sourceMappingURL=util.js.map?rel=1482038774224