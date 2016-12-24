// Compiled by ClojureScript 1.9.293 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy.core.selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__6938__auto__ = elem.textContent;
if(cljs.core.truth_(or__6938__auto__)){
return or__6938__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var args8888 = [];
var len__8046__auto___8891 = arguments.length;
var i__8047__auto___8892 = (0);
while(true){
if((i__8047__auto___8892 < len__8046__auto___8891)){
args8888.push((arguments[i__8047__auto___8892]));

var G__8893 = (i__8047__auto___8892 + (1));
i__8047__auto___8892 = G__8893;
continue;
} else {
}
break;
}

var G__8890 = args8888.length;
switch (G__8890) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8888.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto__ = elem.classList;
if(cljs.core.truth_(temp__4655__auto__)){
var class_list = temp__4655__auto__;
return class_list.contains(c__$1);
} else {
var temp__4657__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4657__auto__)){
var class_name = temp__4657__auto__;
var temp__4657__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4657__auto____$1)){
var i = temp__4657__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var args8895 = [];
var len__8046__auto___8898 = arguments.length;
var i__8047__auto___8899 = (0);
while(true){
if((i__8047__auto___8899 < len__8046__auto___8898)){
args8895.push((arguments[i__8047__auto___8899]));

var G__8900 = (i__8047__auto___8899 + (1));
i__8047__auto___8899 = G__8900;
continue;
} else {
}
break;
}

var G__8897 = args8895.length;
switch (G__8897) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8895.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var args8903 = [];
var len__8046__auto___8906 = arguments.length;
var i__8047__auto___8907 = (0);
while(true){
if((i__8047__auto___8907 < len__8046__auto___8906)){
args8903.push((arguments[i__8047__auto___8907]));

var G__8908 = (i__8047__auto___8907 + (1));
i__8047__auto___8907 = G__8908;
continue;
} else {
}
break;
}

var G__8905 = args8903.length;
switch (G__8905) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8903.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__8902_SHARP_){
return !((p1__8902_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8922 = arguments.length;
var i__8047__auto___8923 = (0);
while(true){
if((i__8047__auto___8923 < len__8046__auto___8922)){
args__8053__auto__.push((arguments[i__8047__auto___8923]));

var G__8924 = (i__8047__auto___8923 + (1));
i__8047__auto___8923 = G__8924;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((1) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8054__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__8912_8925 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__8913_8926 = null;
var count__8914_8927 = (0);
var i__8915_8928 = (0);
while(true){
if((i__8915_8928 < count__8914_8927)){
var vec__8916_8929 = cljs.core._nth.call(null,chunk__8913_8926,i__8915_8928);
var k_8930 = cljs.core.nth.call(null,vec__8916_8929,(0),null);
var v_8931 = cljs.core.nth.call(null,vec__8916_8929,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_8930),v_8931);

var G__8932 = seq__8912_8925;
var G__8933 = chunk__8913_8926;
var G__8934 = count__8914_8927;
var G__8935 = (i__8915_8928 + (1));
seq__8912_8925 = G__8932;
chunk__8913_8926 = G__8933;
count__8914_8927 = G__8934;
i__8915_8928 = G__8935;
continue;
} else {
var temp__4657__auto___8936 = cljs.core.seq.call(null,seq__8912_8925);
if(temp__4657__auto___8936){
var seq__8912_8937__$1 = temp__4657__auto___8936;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8912_8937__$1)){
var c__7752__auto___8938 = cljs.core.chunk_first.call(null,seq__8912_8937__$1);
var G__8939 = cljs.core.chunk_rest.call(null,seq__8912_8937__$1);
var G__8940 = c__7752__auto___8938;
var G__8941 = cljs.core.count.call(null,c__7752__auto___8938);
var G__8942 = (0);
seq__8912_8925 = G__8939;
chunk__8913_8926 = G__8940;
count__8914_8927 = G__8941;
i__8915_8928 = G__8942;
continue;
} else {
var vec__8919_8943 = cljs.core.first.call(null,seq__8912_8937__$1);
var k_8944 = cljs.core.nth.call(null,vec__8919_8943,(0),null);
var v_8945 = cljs.core.nth.call(null,vec__8919_8943,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_8944),v_8945);

var G__8946 = cljs.core.next.call(null,seq__8912_8937__$1);
var G__8947 = null;
var G__8948 = (0);
var G__8949 = (0);
seq__8912_8925 = G__8946;
chunk__8913_8926 = G__8947;
count__8914_8927 = G__8948;
i__8915_8928 = G__8949;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq8910){
var G__8911 = cljs.core.first.call(null,seq8910);
var seq8910__$1 = cljs.core.next.call(null,seq8910);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8911,seq8910__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8956 = arguments.length;
var i__8047__auto___8957 = (0);
while(true){
if((i__8047__auto___8957 < len__8046__auto___8956)){
args__8053__auto__.push((arguments[i__8047__auto___8957]));

var G__8958 = (i__8047__auto___8957 + (1));
i__8047__auto___8957 = G__8958;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((1) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8054__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__8952_8959 = cljs.core.seq.call(null,keywords);
var chunk__8953_8960 = null;
var count__8954_8961 = (0);
var i__8955_8962 = (0);
while(true){
if((i__8955_8962 < count__8954_8961)){
var kw_8963 = cljs.core._nth.call(null,chunk__8953_8960,i__8955_8962);
style.removeProperty(dommy.utils.as_str.call(null,kw_8963));

var G__8964 = seq__8952_8959;
var G__8965 = chunk__8953_8960;
var G__8966 = count__8954_8961;
var G__8967 = (i__8955_8962 + (1));
seq__8952_8959 = G__8964;
chunk__8953_8960 = G__8965;
count__8954_8961 = G__8966;
i__8955_8962 = G__8967;
continue;
} else {
var temp__4657__auto___8968 = cljs.core.seq.call(null,seq__8952_8959);
if(temp__4657__auto___8968){
var seq__8952_8969__$1 = temp__4657__auto___8968;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8952_8969__$1)){
var c__7752__auto___8970 = cljs.core.chunk_first.call(null,seq__8952_8969__$1);
var G__8971 = cljs.core.chunk_rest.call(null,seq__8952_8969__$1);
var G__8972 = c__7752__auto___8970;
var G__8973 = cljs.core.count.call(null,c__7752__auto___8970);
var G__8974 = (0);
seq__8952_8959 = G__8971;
chunk__8953_8960 = G__8972;
count__8954_8961 = G__8973;
i__8955_8962 = G__8974;
continue;
} else {
var kw_8975 = cljs.core.first.call(null,seq__8952_8969__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_8975));

var G__8976 = cljs.core.next.call(null,seq__8952_8969__$1);
var G__8977 = null;
var G__8978 = (0);
var G__8979 = (0);
seq__8952_8959 = G__8976;
chunk__8953_8960 = G__8977;
count__8954_8961 = G__8978;
i__8955_8962 = G__8979;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq8950){
var G__8951 = cljs.core.first.call(null,seq8950);
var seq8950__$1 = cljs.core.next.call(null,seq8950);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8951,seq8950__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8992 = arguments.length;
var i__8047__auto___8993 = (0);
while(true){
if((i__8047__auto___8993 < len__8046__auto___8992)){
args__8053__auto__.push((arguments[i__8047__auto___8993]));

var G__8994 = (i__8047__auto___8993 + (1));
i__8047__auto___8993 = G__8994;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((1) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8054__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__8982_8995 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__8983_8996 = null;
var count__8984_8997 = (0);
var i__8985_8998 = (0);
while(true){
if((i__8985_8998 < count__8984_8997)){
var vec__8986_8999 = cljs.core._nth.call(null,chunk__8983_8996,i__8985_8998);
var k_9000 = cljs.core.nth.call(null,vec__8986_8999,(0),null);
var v_9001 = cljs.core.nth.call(null,vec__8986_8999,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_9000,[cljs.core.str(v_9001),cljs.core.str("px")].join(''));

var G__9002 = seq__8982_8995;
var G__9003 = chunk__8983_8996;
var G__9004 = count__8984_8997;
var G__9005 = (i__8985_8998 + (1));
seq__8982_8995 = G__9002;
chunk__8983_8996 = G__9003;
count__8984_8997 = G__9004;
i__8985_8998 = G__9005;
continue;
} else {
var temp__4657__auto___9006 = cljs.core.seq.call(null,seq__8982_8995);
if(temp__4657__auto___9006){
var seq__8982_9007__$1 = temp__4657__auto___9006;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8982_9007__$1)){
var c__7752__auto___9008 = cljs.core.chunk_first.call(null,seq__8982_9007__$1);
var G__9009 = cljs.core.chunk_rest.call(null,seq__8982_9007__$1);
var G__9010 = c__7752__auto___9008;
var G__9011 = cljs.core.count.call(null,c__7752__auto___9008);
var G__9012 = (0);
seq__8982_8995 = G__9009;
chunk__8983_8996 = G__9010;
count__8984_8997 = G__9011;
i__8985_8998 = G__9012;
continue;
} else {
var vec__8989_9013 = cljs.core.first.call(null,seq__8982_9007__$1);
var k_9014 = cljs.core.nth.call(null,vec__8989_9013,(0),null);
var v_9015 = cljs.core.nth.call(null,vec__8989_9013,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_9014,[cljs.core.str(v_9015),cljs.core.str("px")].join(''));

var G__9016 = cljs.core.next.call(null,seq__8982_9007__$1);
var G__9017 = null;
var G__9018 = (0);
var G__9019 = (0);
seq__8982_8995 = G__9016;
chunk__8983_8996 = G__9017;
count__8984_8997 = G__9018;
i__8985_8998 = G__9019;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq8980){
var G__8981 = cljs.core.first.call(null,seq8980);
var seq8980__$1 = cljs.core.next.call(null,seq8980);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8981,seq8980__$1);
});

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var args9020 = [];
var len__8046__auto___9039 = arguments.length;
var i__8047__auto___9040 = (0);
while(true){
if((i__8047__auto___9040 < len__8046__auto___9039)){
args9020.push((arguments[i__8047__auto___9040]));

var G__9041 = (i__8047__auto___9040 + (1));
i__8047__auto___9040 = G__9041;
continue;
} else {
}
break;
}

var G__9026 = args9020.length;
switch (G__9026) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__8065__auto__ = (new cljs.core.IndexedSeq(args9020.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8065__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__9027 = elem;
(G__9027[k__$1] = v);

return G__9027;
} else {
var G__9028 = elem;
G__9028.setAttribute(k__$1,v);

return G__9028;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__9029_9043 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__9030_9044 = null;
var count__9031_9045 = (0);
var i__9032_9046 = (0);
while(true){
if((i__9032_9046 < count__9031_9045)){
var vec__9033_9047 = cljs.core._nth.call(null,chunk__9030_9044,i__9032_9046);
var k_9048__$1 = cljs.core.nth.call(null,vec__9033_9047,(0),null);
var v_9049__$1 = cljs.core.nth.call(null,vec__9033_9047,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_9048__$1,v_9049__$1);

var G__9050 = seq__9029_9043;
var G__9051 = chunk__9030_9044;
var G__9052 = count__9031_9045;
var G__9053 = (i__9032_9046 + (1));
seq__9029_9043 = G__9050;
chunk__9030_9044 = G__9051;
count__9031_9045 = G__9052;
i__9032_9046 = G__9053;
continue;
} else {
var temp__4657__auto___9054 = cljs.core.seq.call(null,seq__9029_9043);
if(temp__4657__auto___9054){
var seq__9029_9055__$1 = temp__4657__auto___9054;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9029_9055__$1)){
var c__7752__auto___9056 = cljs.core.chunk_first.call(null,seq__9029_9055__$1);
var G__9057 = cljs.core.chunk_rest.call(null,seq__9029_9055__$1);
var G__9058 = c__7752__auto___9056;
var G__9059 = cljs.core.count.call(null,c__7752__auto___9056);
var G__9060 = (0);
seq__9029_9043 = G__9057;
chunk__9030_9044 = G__9058;
count__9031_9045 = G__9059;
i__9032_9046 = G__9060;
continue;
} else {
var vec__9036_9061 = cljs.core.first.call(null,seq__9029_9055__$1);
var k_9062__$1 = cljs.core.nth.call(null,vec__9036_9061,(0),null);
var v_9063__$1 = cljs.core.nth.call(null,vec__9036_9061,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_9062__$1,v_9063__$1);

var G__9064 = cljs.core.next.call(null,seq__9029_9055__$1);
var G__9065 = null;
var G__9066 = (0);
var G__9067 = (0);
seq__9029_9043 = G__9064;
chunk__9030_9044 = G__9065;
count__9031_9045 = G__9066;
i__9032_9046 = G__9067;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq9021){
var G__9022 = cljs.core.first.call(null,seq9021);
var seq9021__$1 = cljs.core.next.call(null,seq9021);
var G__9023 = cljs.core.first.call(null,seq9021__$1);
var seq9021__$2 = cljs.core.next.call(null,seq9021__$1);
var G__9024 = cljs.core.first.call(null,seq9021__$2);
var seq9021__$3 = cljs.core.next.call(null,seq9021__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9022,G__9023,G__9024,seq9021__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args9068 = [];
var len__8046__auto___9078 = arguments.length;
var i__8047__auto___9079 = (0);
while(true){
if((i__8047__auto___9079 < len__8046__auto___9078)){
args9068.push((arguments[i__8047__auto___9079]));

var G__9080 = (i__8047__auto___9079 + (1));
i__8047__auto___9079 = G__9080;
continue;
} else {
}
break;
}

var G__9073 = args9068.length;
switch (G__9073) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8065__auto__ = (new cljs.core.IndexedSeq(args9068.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8065__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_9082__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_9082__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_9082__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__9074_9083 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__9075_9084 = null;
var count__9076_9085 = (0);
var i__9077_9086 = (0);
while(true){
if((i__9077_9086 < count__9076_9085)){
var k_9087__$1 = cljs.core._nth.call(null,chunk__9075_9084,i__9077_9086);
dommy.core.remove_attr_BANG_.call(null,elem,k_9087__$1);

var G__9088 = seq__9074_9083;
var G__9089 = chunk__9075_9084;
var G__9090 = count__9076_9085;
var G__9091 = (i__9077_9086 + (1));
seq__9074_9083 = G__9088;
chunk__9075_9084 = G__9089;
count__9076_9085 = G__9090;
i__9077_9086 = G__9091;
continue;
} else {
var temp__4657__auto___9092 = cljs.core.seq.call(null,seq__9074_9083);
if(temp__4657__auto___9092){
var seq__9074_9093__$1 = temp__4657__auto___9092;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9074_9093__$1)){
var c__7752__auto___9094 = cljs.core.chunk_first.call(null,seq__9074_9093__$1);
var G__9095 = cljs.core.chunk_rest.call(null,seq__9074_9093__$1);
var G__9096 = c__7752__auto___9094;
var G__9097 = cljs.core.count.call(null,c__7752__auto___9094);
var G__9098 = (0);
seq__9074_9083 = G__9095;
chunk__9075_9084 = G__9096;
count__9076_9085 = G__9097;
i__9077_9086 = G__9098;
continue;
} else {
var k_9099__$1 = cljs.core.first.call(null,seq__9074_9093__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_9099__$1);

var G__9100 = cljs.core.next.call(null,seq__9074_9093__$1);
var G__9101 = null;
var G__9102 = (0);
var G__9103 = (0);
seq__9074_9083 = G__9100;
chunk__9075_9084 = G__9101;
count__9076_9085 = G__9102;
i__9077_9086 = G__9103;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq9069){
var G__9070 = cljs.core.first.call(null,seq9069);
var seq9069__$1 = cljs.core.next.call(null,seq9069);
var G__9071 = cljs.core.first.call(null,seq9069__$1);
var seq9069__$2 = cljs.core.next.call(null,seq9069__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9070,G__9071,seq9069__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args9104 = [];
var len__8046__auto___9107 = arguments.length;
var i__8047__auto___9108 = (0);
while(true){
if((i__8047__auto___9108 < len__8046__auto___9107)){
args9104.push((arguments[i__8047__auto___9108]));

var G__9109 = (i__8047__auto___9108 + (1));
i__8047__auto___9108 = G__9109;
continue;
} else {
}
break;
}

var G__9106 = args9104.length;
switch (G__9106) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9104.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var args9111 = [];
var len__8046__auto___9129 = arguments.length;
var i__8047__auto___9130 = (0);
while(true){
if((i__8047__auto___9130 < len__8046__auto___9129)){
args9111.push((arguments[i__8047__auto___9130]));

var G__9131 = (i__8047__auto___9130 + (1));
i__8047__auto___9130 = G__9131;
continue;
} else {
}
break;
}

var G__9116 = args9111.length;
switch (G__9116) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8065__auto__ = (new cljs.core.IndexedSeq(args9111.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8065__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___9133 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___9133)){
var class_list_9134 = temp__4655__auto___9133;
var seq__9117_9135 = cljs.core.seq.call(null,classes__$1);
var chunk__9118_9136 = null;
var count__9119_9137 = (0);
var i__9120_9138 = (0);
while(true){
if((i__9120_9138 < count__9119_9137)){
var c_9139 = cljs.core._nth.call(null,chunk__9118_9136,i__9120_9138);
class_list_9134.add(c_9139);

var G__9140 = seq__9117_9135;
var G__9141 = chunk__9118_9136;
var G__9142 = count__9119_9137;
var G__9143 = (i__9120_9138 + (1));
seq__9117_9135 = G__9140;
chunk__9118_9136 = G__9141;
count__9119_9137 = G__9142;
i__9120_9138 = G__9143;
continue;
} else {
var temp__4657__auto___9144 = cljs.core.seq.call(null,seq__9117_9135);
if(temp__4657__auto___9144){
var seq__9117_9145__$1 = temp__4657__auto___9144;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9117_9145__$1)){
var c__7752__auto___9146 = cljs.core.chunk_first.call(null,seq__9117_9145__$1);
var G__9147 = cljs.core.chunk_rest.call(null,seq__9117_9145__$1);
var G__9148 = c__7752__auto___9146;
var G__9149 = cljs.core.count.call(null,c__7752__auto___9146);
var G__9150 = (0);
seq__9117_9135 = G__9147;
chunk__9118_9136 = G__9148;
count__9119_9137 = G__9149;
i__9120_9138 = G__9150;
continue;
} else {
var c_9151 = cljs.core.first.call(null,seq__9117_9145__$1);
class_list_9134.add(c_9151);

var G__9152 = cljs.core.next.call(null,seq__9117_9145__$1);
var G__9153 = null;
var G__9154 = (0);
var G__9155 = (0);
seq__9117_9135 = G__9152;
chunk__9118_9136 = G__9153;
count__9119_9137 = G__9154;
i__9120_9138 = G__9155;
continue;
}
} else {
}
}
break;
}
} else {
var seq__9121_9156 = cljs.core.seq.call(null,classes__$1);
var chunk__9122_9157 = null;
var count__9123_9158 = (0);
var i__9124_9159 = (0);
while(true){
if((i__9124_9159 < count__9123_9158)){
var c_9160 = cljs.core._nth.call(null,chunk__9122_9157,i__9124_9159);
var class_name_9161 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_9161,c_9160))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_9161 === ""))?c_9160:[cljs.core.str(class_name_9161),cljs.core.str(" "),cljs.core.str(c_9160)].join('')));
}

var G__9162 = seq__9121_9156;
var G__9163 = chunk__9122_9157;
var G__9164 = count__9123_9158;
var G__9165 = (i__9124_9159 + (1));
seq__9121_9156 = G__9162;
chunk__9122_9157 = G__9163;
count__9123_9158 = G__9164;
i__9124_9159 = G__9165;
continue;
} else {
var temp__4657__auto___9166 = cljs.core.seq.call(null,seq__9121_9156);
if(temp__4657__auto___9166){
var seq__9121_9167__$1 = temp__4657__auto___9166;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9121_9167__$1)){
var c__7752__auto___9168 = cljs.core.chunk_first.call(null,seq__9121_9167__$1);
var G__9169 = cljs.core.chunk_rest.call(null,seq__9121_9167__$1);
var G__9170 = c__7752__auto___9168;
var G__9171 = cljs.core.count.call(null,c__7752__auto___9168);
var G__9172 = (0);
seq__9121_9156 = G__9169;
chunk__9122_9157 = G__9170;
count__9123_9158 = G__9171;
i__9124_9159 = G__9172;
continue;
} else {
var c_9173 = cljs.core.first.call(null,seq__9121_9167__$1);
var class_name_9174 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_9174,c_9173))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_9174 === ""))?c_9173:[cljs.core.str(class_name_9174),cljs.core.str(" "),cljs.core.str(c_9173)].join('')));
}

var G__9175 = cljs.core.next.call(null,seq__9121_9167__$1);
var G__9176 = null;
var G__9177 = (0);
var G__9178 = (0);
seq__9121_9156 = G__9175;
chunk__9122_9157 = G__9176;
count__9123_9158 = G__9177;
i__9124_9159 = G__9178;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__9125_9179 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__9126_9180 = null;
var count__9127_9181 = (0);
var i__9128_9182 = (0);
while(true){
if((i__9128_9182 < count__9127_9181)){
var c_9183 = cljs.core._nth.call(null,chunk__9126_9180,i__9128_9182);
dommy.core.add_class_BANG_.call(null,elem,c_9183);

var G__9184 = seq__9125_9179;
var G__9185 = chunk__9126_9180;
var G__9186 = count__9127_9181;
var G__9187 = (i__9128_9182 + (1));
seq__9125_9179 = G__9184;
chunk__9126_9180 = G__9185;
count__9127_9181 = G__9186;
i__9128_9182 = G__9187;
continue;
} else {
var temp__4657__auto___9188 = cljs.core.seq.call(null,seq__9125_9179);
if(temp__4657__auto___9188){
var seq__9125_9189__$1 = temp__4657__auto___9188;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9125_9189__$1)){
var c__7752__auto___9190 = cljs.core.chunk_first.call(null,seq__9125_9189__$1);
var G__9191 = cljs.core.chunk_rest.call(null,seq__9125_9189__$1);
var G__9192 = c__7752__auto___9190;
var G__9193 = cljs.core.count.call(null,c__7752__auto___9190);
var G__9194 = (0);
seq__9125_9179 = G__9191;
chunk__9126_9180 = G__9192;
count__9127_9181 = G__9193;
i__9128_9182 = G__9194;
continue;
} else {
var c_9195 = cljs.core.first.call(null,seq__9125_9189__$1);
dommy.core.add_class_BANG_.call(null,elem,c_9195);

var G__9196 = cljs.core.next.call(null,seq__9125_9189__$1);
var G__9197 = null;
var G__9198 = (0);
var G__9199 = (0);
seq__9125_9179 = G__9196;
chunk__9126_9180 = G__9197;
count__9127_9181 = G__9198;
i__9128_9182 = G__9199;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq9112){
var G__9113 = cljs.core.first.call(null,seq9112);
var seq9112__$1 = cljs.core.next.call(null,seq9112);
var G__9114 = cljs.core.first.call(null,seq9112__$1);
var seq9112__$2 = cljs.core.next.call(null,seq9112__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9113,G__9114,seq9112__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args9200 = [];
var len__8046__auto___9210 = arguments.length;
var i__8047__auto___9211 = (0);
while(true){
if((i__8047__auto___9211 < len__8046__auto___9210)){
args9200.push((arguments[i__8047__auto___9211]));

var G__9212 = (i__8047__auto___9211 + (1));
i__8047__auto___9211 = G__9212;
continue;
} else {
}
break;
}

var G__9205 = args9200.length;
switch (G__9205) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8065__auto__ = (new cljs.core.IndexedSeq(args9200.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8065__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___9214 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___9214)){
var class_list_9215 = temp__4655__auto___9214;
class_list_9215.remove(c__$1);
} else {
var class_name_9216 = dommy.core.class$.call(null,elem);
var new_class_name_9217 = dommy.utils.remove_class_str.call(null,class_name_9216,c__$1);
if((class_name_9216 === new_class_name_9217)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_9217);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__9206 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__9207 = null;
var count__9208 = (0);
var i__9209 = (0);
while(true){
if((i__9209 < count__9208)){
var c = cljs.core._nth.call(null,chunk__9207,i__9209);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__9218 = seq__9206;
var G__9219 = chunk__9207;
var G__9220 = count__9208;
var G__9221 = (i__9209 + (1));
seq__9206 = G__9218;
chunk__9207 = G__9219;
count__9208 = G__9220;
i__9209 = G__9221;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9206);
if(temp__4657__auto__){
var seq__9206__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9206__$1)){
var c__7752__auto__ = cljs.core.chunk_first.call(null,seq__9206__$1);
var G__9222 = cljs.core.chunk_rest.call(null,seq__9206__$1);
var G__9223 = c__7752__auto__;
var G__9224 = cljs.core.count.call(null,c__7752__auto__);
var G__9225 = (0);
seq__9206 = G__9222;
chunk__9207 = G__9223;
count__9208 = G__9224;
i__9209 = G__9225;
continue;
} else {
var c = cljs.core.first.call(null,seq__9206__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__9226 = cljs.core.next.call(null,seq__9206__$1);
var G__9227 = null;
var G__9228 = (0);
var G__9229 = (0);
seq__9206 = G__9226;
chunk__9207 = G__9227;
count__9208 = G__9228;
i__9209 = G__9229;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq9201){
var G__9202 = cljs.core.first.call(null,seq9201);
var seq9201__$1 = cljs.core.next.call(null,seq9201);
var G__9203 = cljs.core.first.call(null,seq9201__$1);
var seq9201__$2 = cljs.core.next.call(null,seq9201__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9202,G__9203,seq9201__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args9230 = [];
var len__8046__auto___9233 = arguments.length;
var i__8047__auto___9234 = (0);
while(true){
if((i__8047__auto___9234 < len__8046__auto___9233)){
args9230.push((arguments[i__8047__auto___9234]));

var G__9235 = (i__8047__auto___9234 + (1));
i__8047__auto___9234 = G__9235;
continue;
} else {
}
break;
}

var G__9232 = args9230.length;
switch (G__9232) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9230.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___9237 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___9237)){
var class_list_9238 = temp__4655__auto___9237;
class_list_9238.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var args9239 = [];
var len__8046__auto___9242 = arguments.length;
var i__8047__auto___9243 = (0);
while(true){
if((i__8047__auto___9243 < len__8046__auto___9242)){
args9239.push((arguments[i__8047__auto___9243]));

var G__9244 = (i__8047__auto___9243 + (1));
i__8047__auto___9243 = G__9244;
continue;
} else {
}
break;
}

var G__9241 = args9239.length;
switch (G__9241) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9239.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var args9246 = [];
var len__8046__auto___9249 = arguments.length;
var i__8047__auto___9250 = (0);
while(true){
if((i__8047__auto___9250 < len__8046__auto___9249)){
args9246.push((arguments[i__8047__auto___9250]));

var G__9251 = (i__8047__auto___9250 + (1));
i__8047__auto___9250 = G__9251;
continue;
} else {
}
break;
}

var G__9248 = args9246.length;
switch (G__9248) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9246.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var args9253 = [];
var len__8046__auto___9264 = arguments.length;
var i__8047__auto___9265 = (0);
while(true){
if((i__8047__auto___9265 < len__8046__auto___9264)){
args9253.push((arguments[i__8047__auto___9265]));

var G__9266 = (i__8047__auto___9265 + (1));
i__8047__auto___9265 = G__9266;
continue;
} else {
}
break;
}

var G__9258 = args9253.length;
switch (G__9258) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8065__auto__ = (new cljs.core.IndexedSeq(args9253.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8065__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__9259 = parent;
G__9259.appendChild(child);

return G__9259;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__9260_9268 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__9261_9269 = null;
var count__9262_9270 = (0);
var i__9263_9271 = (0);
while(true){
if((i__9263_9271 < count__9262_9270)){
var c_9272 = cljs.core._nth.call(null,chunk__9261_9269,i__9263_9271);
dommy.core.append_BANG_.call(null,parent,c_9272);

var G__9273 = seq__9260_9268;
var G__9274 = chunk__9261_9269;
var G__9275 = count__9262_9270;
var G__9276 = (i__9263_9271 + (1));
seq__9260_9268 = G__9273;
chunk__9261_9269 = G__9274;
count__9262_9270 = G__9275;
i__9263_9271 = G__9276;
continue;
} else {
var temp__4657__auto___9277 = cljs.core.seq.call(null,seq__9260_9268);
if(temp__4657__auto___9277){
var seq__9260_9278__$1 = temp__4657__auto___9277;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9260_9278__$1)){
var c__7752__auto___9279 = cljs.core.chunk_first.call(null,seq__9260_9278__$1);
var G__9280 = cljs.core.chunk_rest.call(null,seq__9260_9278__$1);
var G__9281 = c__7752__auto___9279;
var G__9282 = cljs.core.count.call(null,c__7752__auto___9279);
var G__9283 = (0);
seq__9260_9268 = G__9280;
chunk__9261_9269 = G__9281;
count__9262_9270 = G__9282;
i__9263_9271 = G__9283;
continue;
} else {
var c_9284 = cljs.core.first.call(null,seq__9260_9278__$1);
dommy.core.append_BANG_.call(null,parent,c_9284);

var G__9285 = cljs.core.next.call(null,seq__9260_9278__$1);
var G__9286 = null;
var G__9287 = (0);
var G__9288 = (0);
seq__9260_9268 = G__9285;
chunk__9261_9269 = G__9286;
count__9262_9270 = G__9287;
i__9263_9271 = G__9288;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq9254){
var G__9255 = cljs.core.first.call(null,seq9254);
var seq9254__$1 = cljs.core.next.call(null,seq9254);
var G__9256 = cljs.core.first.call(null,seq9254__$1);
var seq9254__$2 = cljs.core.next.call(null,seq9254__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9255,G__9256,seq9254__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args9289 = [];
var len__8046__auto___9300 = arguments.length;
var i__8047__auto___9301 = (0);
while(true){
if((i__8047__auto___9301 < len__8046__auto___9300)){
args9289.push((arguments[i__8047__auto___9301]));

var G__9302 = (i__8047__auto___9301 + (1));
i__8047__auto___9301 = G__9302;
continue;
} else {
}
break;
}

var G__9294 = args9289.length;
switch (G__9294) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8065__auto__ = (new cljs.core.IndexedSeq(args9289.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8065__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__9295 = parent;
G__9295.insertBefore(child,parent.firstChild);

return G__9295;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__9296_9304 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__9297_9305 = null;
var count__9298_9306 = (0);
var i__9299_9307 = (0);
while(true){
if((i__9299_9307 < count__9298_9306)){
var c_9308 = cljs.core._nth.call(null,chunk__9297_9305,i__9299_9307);
dommy.core.prepend_BANG_.call(null,parent,c_9308);

var G__9309 = seq__9296_9304;
var G__9310 = chunk__9297_9305;
var G__9311 = count__9298_9306;
var G__9312 = (i__9299_9307 + (1));
seq__9296_9304 = G__9309;
chunk__9297_9305 = G__9310;
count__9298_9306 = G__9311;
i__9299_9307 = G__9312;
continue;
} else {
var temp__4657__auto___9313 = cljs.core.seq.call(null,seq__9296_9304);
if(temp__4657__auto___9313){
var seq__9296_9314__$1 = temp__4657__auto___9313;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9296_9314__$1)){
var c__7752__auto___9315 = cljs.core.chunk_first.call(null,seq__9296_9314__$1);
var G__9316 = cljs.core.chunk_rest.call(null,seq__9296_9314__$1);
var G__9317 = c__7752__auto___9315;
var G__9318 = cljs.core.count.call(null,c__7752__auto___9315);
var G__9319 = (0);
seq__9296_9304 = G__9316;
chunk__9297_9305 = G__9317;
count__9298_9306 = G__9318;
i__9299_9307 = G__9319;
continue;
} else {
var c_9320 = cljs.core.first.call(null,seq__9296_9314__$1);
dommy.core.prepend_BANG_.call(null,parent,c_9320);

var G__9321 = cljs.core.next.call(null,seq__9296_9314__$1);
var G__9322 = null;
var G__9323 = (0);
var G__9324 = (0);
seq__9296_9304 = G__9321;
chunk__9297_9305 = G__9322;
count__9298_9306 = G__9323;
i__9299_9307 = G__9324;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq9290){
var G__9291 = cljs.core.first.call(null,seq9290);
var seq9290__$1 = cljs.core.next.call(null,seq9290);
var G__9292 = cljs.core.first.call(null,seq9290__$1);
var seq9290__$2 = cljs.core.next.call(null,seq9290__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9291,G__9292,seq9290__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4655__auto___9325 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___9325)){
var next_9326 = temp__4655__auto___9325;
dommy.core.insert_before_BANG_.call(null,elem,next_9326);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var args9327 = [];
var len__8046__auto___9331 = arguments.length;
var i__8047__auto___9332 = (0);
while(true){
if((i__8047__auto___9332 < len__8046__auto___9331)){
args9327.push((arguments[i__8047__auto___9332]));

var G__9333 = (i__8047__auto___9332 + (1));
i__8047__auto___9332 = G__9333;
continue;
} else {
}
break;
}

var G__9329 = args9327.length;
switch (G__9329) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9327.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__9330 = p;
G__9330.removeChild(elem);

return G__9330;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__9335){
var vec__9336 = p__9335;
var special_mouse_event = cljs.core.nth.call(null,vec__9336,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__9336,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__9336,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__9336,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__6938__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__6938__auto__)){
return or__6938__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__6926__auto__ = related_target;
if(cljs.core.truth_(and__6926__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__6926__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__9336,special_mouse_event,real_mouse_event))
});})(vec__9336,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__6926__auto__ = selected_target;
if(cljs.core.truth_(and__6926__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__6926__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__6938__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__6938__auto__)){
return or__6938__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__8053__auto__ = [];
var len__8046__auto___9342 = arguments.length;
var i__8047__auto___9343 = (0);
while(true){
if((i__8047__auto___9343 < len__8046__auto___9342)){
args__8053__auto__.push((arguments[i__8047__auto___9343]));

var G__9344 = (i__8047__auto___9343 + (1));
i__8047__auto___9343 = G__9344;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((2) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8054__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq9339){
var G__9340 = cljs.core.first.call(null,seq9339);
var seq9339__$1 = cljs.core.next.call(null,seq9339);
var G__9341 = cljs.core.first.call(null,seq9339__$1);
var seq9339__$2 = cljs.core.next.call(null,seq9339__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9340,G__9341,seq9339__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__8053__auto__ = [];
var len__8046__auto___9384 = arguments.length;
var i__8047__auto___9385 = (0);
while(true){
if((i__8047__auto___9385 < len__8046__auto___9384)){
args__8053__auto__.push((arguments[i__8047__auto___9385]));

var G__9386 = (i__8047__auto___9385 + (1));
i__8047__auto___9385 = G__9386;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((1) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8054__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__9347_9387 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_9388 = cljs.core.nth.call(null,vec__9347_9387,(0),null);
var selector_9389 = cljs.core.nth.call(null,vec__9347_9387,(1),null);
var seq__9350_9390 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__9357_9391 = null;
var count__9358_9392 = (0);
var i__9359_9393 = (0);
while(true){
if((i__9359_9393 < count__9358_9392)){
var vec__9366_9394 = cljs.core._nth.call(null,chunk__9357_9391,i__9359_9393);
var orig_type_9395 = cljs.core.nth.call(null,vec__9366_9394,(0),null);
var f_9396 = cljs.core.nth.call(null,vec__9366_9394,(1),null);
var seq__9360_9397 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9395,cljs.core.PersistentArrayMap.fromArray([orig_type_9395,cljs.core.identity], true, false)));
var chunk__9362_9398 = null;
var count__9363_9399 = (0);
var i__9364_9400 = (0);
while(true){
if((i__9364_9400 < count__9363_9399)){
var vec__9369_9401 = cljs.core._nth.call(null,chunk__9362_9398,i__9364_9400);
var actual_type_9402 = cljs.core.nth.call(null,vec__9369_9401,(0),null);
var factory_9403 = cljs.core.nth.call(null,vec__9369_9401,(1),null);
var canonical_f_9404 = (cljs.core.truth_(selector_9389)?cljs.core.partial.call(null,dommy.core.live_listener,elem_9388,selector_9389):cljs.core.identity).call(null,factory_9403.call(null,f_9396));
dommy.core.update_event_listeners_BANG_.call(null,elem_9388,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9389,actual_type_9402,f_9396], null),canonical_f_9404);

if(cljs.core.truth_(elem_9388.addEventListener)){
elem_9388.addEventListener(cljs.core.name.call(null,actual_type_9402),canonical_f_9404);
} else {
elem_9388.attachEvent(cljs.core.name.call(null,actual_type_9402),canonical_f_9404);
}

var G__9405 = seq__9360_9397;
var G__9406 = chunk__9362_9398;
var G__9407 = count__9363_9399;
var G__9408 = (i__9364_9400 + (1));
seq__9360_9397 = G__9405;
chunk__9362_9398 = G__9406;
count__9363_9399 = G__9407;
i__9364_9400 = G__9408;
continue;
} else {
var temp__4657__auto___9409 = cljs.core.seq.call(null,seq__9360_9397);
if(temp__4657__auto___9409){
var seq__9360_9410__$1 = temp__4657__auto___9409;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9360_9410__$1)){
var c__7752__auto___9411 = cljs.core.chunk_first.call(null,seq__9360_9410__$1);
var G__9412 = cljs.core.chunk_rest.call(null,seq__9360_9410__$1);
var G__9413 = c__7752__auto___9411;
var G__9414 = cljs.core.count.call(null,c__7752__auto___9411);
var G__9415 = (0);
seq__9360_9397 = G__9412;
chunk__9362_9398 = G__9413;
count__9363_9399 = G__9414;
i__9364_9400 = G__9415;
continue;
} else {
var vec__9372_9416 = cljs.core.first.call(null,seq__9360_9410__$1);
var actual_type_9417 = cljs.core.nth.call(null,vec__9372_9416,(0),null);
var factory_9418 = cljs.core.nth.call(null,vec__9372_9416,(1),null);
var canonical_f_9419 = (cljs.core.truth_(selector_9389)?cljs.core.partial.call(null,dommy.core.live_listener,elem_9388,selector_9389):cljs.core.identity).call(null,factory_9418.call(null,f_9396));
dommy.core.update_event_listeners_BANG_.call(null,elem_9388,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9389,actual_type_9417,f_9396], null),canonical_f_9419);

if(cljs.core.truth_(elem_9388.addEventListener)){
elem_9388.addEventListener(cljs.core.name.call(null,actual_type_9417),canonical_f_9419);
} else {
elem_9388.attachEvent(cljs.core.name.call(null,actual_type_9417),canonical_f_9419);
}

var G__9420 = cljs.core.next.call(null,seq__9360_9410__$1);
var G__9421 = null;
var G__9422 = (0);
var G__9423 = (0);
seq__9360_9397 = G__9420;
chunk__9362_9398 = G__9421;
count__9363_9399 = G__9422;
i__9364_9400 = G__9423;
continue;
}
} else {
}
}
break;
}

var G__9424 = seq__9350_9390;
var G__9425 = chunk__9357_9391;
var G__9426 = count__9358_9392;
var G__9427 = (i__9359_9393 + (1));
seq__9350_9390 = G__9424;
chunk__9357_9391 = G__9425;
count__9358_9392 = G__9426;
i__9359_9393 = G__9427;
continue;
} else {
var temp__4657__auto___9428 = cljs.core.seq.call(null,seq__9350_9390);
if(temp__4657__auto___9428){
var seq__9350_9429__$1 = temp__4657__auto___9428;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9350_9429__$1)){
var c__7752__auto___9430 = cljs.core.chunk_first.call(null,seq__9350_9429__$1);
var G__9431 = cljs.core.chunk_rest.call(null,seq__9350_9429__$1);
var G__9432 = c__7752__auto___9430;
var G__9433 = cljs.core.count.call(null,c__7752__auto___9430);
var G__9434 = (0);
seq__9350_9390 = G__9431;
chunk__9357_9391 = G__9432;
count__9358_9392 = G__9433;
i__9359_9393 = G__9434;
continue;
} else {
var vec__9375_9435 = cljs.core.first.call(null,seq__9350_9429__$1);
var orig_type_9436 = cljs.core.nth.call(null,vec__9375_9435,(0),null);
var f_9437 = cljs.core.nth.call(null,vec__9375_9435,(1),null);
var seq__9351_9438 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9436,cljs.core.PersistentArrayMap.fromArray([orig_type_9436,cljs.core.identity], true, false)));
var chunk__9353_9439 = null;
var count__9354_9440 = (0);
var i__9355_9441 = (0);
while(true){
if((i__9355_9441 < count__9354_9440)){
var vec__9378_9442 = cljs.core._nth.call(null,chunk__9353_9439,i__9355_9441);
var actual_type_9443 = cljs.core.nth.call(null,vec__9378_9442,(0),null);
var factory_9444 = cljs.core.nth.call(null,vec__9378_9442,(1),null);
var canonical_f_9445 = (cljs.core.truth_(selector_9389)?cljs.core.partial.call(null,dommy.core.live_listener,elem_9388,selector_9389):cljs.core.identity).call(null,factory_9444.call(null,f_9437));
dommy.core.update_event_listeners_BANG_.call(null,elem_9388,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9389,actual_type_9443,f_9437], null),canonical_f_9445);

if(cljs.core.truth_(elem_9388.addEventListener)){
elem_9388.addEventListener(cljs.core.name.call(null,actual_type_9443),canonical_f_9445);
} else {
elem_9388.attachEvent(cljs.core.name.call(null,actual_type_9443),canonical_f_9445);
}

var G__9446 = seq__9351_9438;
var G__9447 = chunk__9353_9439;
var G__9448 = count__9354_9440;
var G__9449 = (i__9355_9441 + (1));
seq__9351_9438 = G__9446;
chunk__9353_9439 = G__9447;
count__9354_9440 = G__9448;
i__9355_9441 = G__9449;
continue;
} else {
var temp__4657__auto___9450__$1 = cljs.core.seq.call(null,seq__9351_9438);
if(temp__4657__auto___9450__$1){
var seq__9351_9451__$1 = temp__4657__auto___9450__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9351_9451__$1)){
var c__7752__auto___9452 = cljs.core.chunk_first.call(null,seq__9351_9451__$1);
var G__9453 = cljs.core.chunk_rest.call(null,seq__9351_9451__$1);
var G__9454 = c__7752__auto___9452;
var G__9455 = cljs.core.count.call(null,c__7752__auto___9452);
var G__9456 = (0);
seq__9351_9438 = G__9453;
chunk__9353_9439 = G__9454;
count__9354_9440 = G__9455;
i__9355_9441 = G__9456;
continue;
} else {
var vec__9381_9457 = cljs.core.first.call(null,seq__9351_9451__$1);
var actual_type_9458 = cljs.core.nth.call(null,vec__9381_9457,(0),null);
var factory_9459 = cljs.core.nth.call(null,vec__9381_9457,(1),null);
var canonical_f_9460 = (cljs.core.truth_(selector_9389)?cljs.core.partial.call(null,dommy.core.live_listener,elem_9388,selector_9389):cljs.core.identity).call(null,factory_9459.call(null,f_9437));
dommy.core.update_event_listeners_BANG_.call(null,elem_9388,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9389,actual_type_9458,f_9437], null),canonical_f_9460);

if(cljs.core.truth_(elem_9388.addEventListener)){
elem_9388.addEventListener(cljs.core.name.call(null,actual_type_9458),canonical_f_9460);
} else {
elem_9388.attachEvent(cljs.core.name.call(null,actual_type_9458),canonical_f_9460);
}

var G__9461 = cljs.core.next.call(null,seq__9351_9451__$1);
var G__9462 = null;
var G__9463 = (0);
var G__9464 = (0);
seq__9351_9438 = G__9461;
chunk__9353_9439 = G__9462;
count__9354_9440 = G__9463;
i__9355_9441 = G__9464;
continue;
}
} else {
}
}
break;
}

var G__9465 = cljs.core.next.call(null,seq__9350_9429__$1);
var G__9466 = null;
var G__9467 = (0);
var G__9468 = (0);
seq__9350_9390 = G__9465;
chunk__9357_9391 = G__9466;
count__9358_9392 = G__9467;
i__9359_9393 = G__9468;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq9345){
var G__9346 = cljs.core.first.call(null,seq9345);
var seq9345__$1 = cljs.core.next.call(null,seq9345);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9346,seq9345__$1);
});

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__8053__auto__ = [];
var len__8046__auto___9508 = arguments.length;
var i__8047__auto___9509 = (0);
while(true){
if((i__8047__auto___9509 < len__8046__auto___9508)){
args__8053__auto__.push((arguments[i__8047__auto___9509]));

var G__9510 = (i__8047__auto___9509 + (1));
i__8047__auto___9509 = G__9510;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((1) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8054__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__9471_9511 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_9512 = cljs.core.nth.call(null,vec__9471_9511,(0),null);
var selector_9513 = cljs.core.nth.call(null,vec__9471_9511,(1),null);
var seq__9474_9514 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__9481_9515 = null;
var count__9482_9516 = (0);
var i__9483_9517 = (0);
while(true){
if((i__9483_9517 < count__9482_9516)){
var vec__9490_9518 = cljs.core._nth.call(null,chunk__9481_9515,i__9483_9517);
var orig_type_9519 = cljs.core.nth.call(null,vec__9490_9518,(0),null);
var f_9520 = cljs.core.nth.call(null,vec__9490_9518,(1),null);
var seq__9484_9521 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9519,cljs.core.PersistentArrayMap.fromArray([orig_type_9519,cljs.core.identity], true, false)));
var chunk__9486_9522 = null;
var count__9487_9523 = (0);
var i__9488_9524 = (0);
while(true){
if((i__9488_9524 < count__9487_9523)){
var vec__9493_9525 = cljs.core._nth.call(null,chunk__9486_9522,i__9488_9524);
var actual_type_9526 = cljs.core.nth.call(null,vec__9493_9525,(0),null);
var __9527 = cljs.core.nth.call(null,vec__9493_9525,(1),null);
var keys_9528 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9513,actual_type_9526,f_9520], null);
var canonical_f_9529 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9512),keys_9528);
dommy.core.update_event_listeners_BANG_.call(null,elem_9512,dommy.utils.dissoc_in,keys_9528);

if(cljs.core.truth_(elem_9512.removeEventListener)){
elem_9512.removeEventListener(cljs.core.name.call(null,actual_type_9526),canonical_f_9529);
} else {
elem_9512.detachEvent(cljs.core.name.call(null,actual_type_9526),canonical_f_9529);
}

var G__9530 = seq__9484_9521;
var G__9531 = chunk__9486_9522;
var G__9532 = count__9487_9523;
var G__9533 = (i__9488_9524 + (1));
seq__9484_9521 = G__9530;
chunk__9486_9522 = G__9531;
count__9487_9523 = G__9532;
i__9488_9524 = G__9533;
continue;
} else {
var temp__4657__auto___9534 = cljs.core.seq.call(null,seq__9484_9521);
if(temp__4657__auto___9534){
var seq__9484_9535__$1 = temp__4657__auto___9534;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9484_9535__$1)){
var c__7752__auto___9536 = cljs.core.chunk_first.call(null,seq__9484_9535__$1);
var G__9537 = cljs.core.chunk_rest.call(null,seq__9484_9535__$1);
var G__9538 = c__7752__auto___9536;
var G__9539 = cljs.core.count.call(null,c__7752__auto___9536);
var G__9540 = (0);
seq__9484_9521 = G__9537;
chunk__9486_9522 = G__9538;
count__9487_9523 = G__9539;
i__9488_9524 = G__9540;
continue;
} else {
var vec__9496_9541 = cljs.core.first.call(null,seq__9484_9535__$1);
var actual_type_9542 = cljs.core.nth.call(null,vec__9496_9541,(0),null);
var __9543 = cljs.core.nth.call(null,vec__9496_9541,(1),null);
var keys_9544 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9513,actual_type_9542,f_9520], null);
var canonical_f_9545 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9512),keys_9544);
dommy.core.update_event_listeners_BANG_.call(null,elem_9512,dommy.utils.dissoc_in,keys_9544);

if(cljs.core.truth_(elem_9512.removeEventListener)){
elem_9512.removeEventListener(cljs.core.name.call(null,actual_type_9542),canonical_f_9545);
} else {
elem_9512.detachEvent(cljs.core.name.call(null,actual_type_9542),canonical_f_9545);
}

var G__9546 = cljs.core.next.call(null,seq__9484_9535__$1);
var G__9547 = null;
var G__9548 = (0);
var G__9549 = (0);
seq__9484_9521 = G__9546;
chunk__9486_9522 = G__9547;
count__9487_9523 = G__9548;
i__9488_9524 = G__9549;
continue;
}
} else {
}
}
break;
}

var G__9550 = seq__9474_9514;
var G__9551 = chunk__9481_9515;
var G__9552 = count__9482_9516;
var G__9553 = (i__9483_9517 + (1));
seq__9474_9514 = G__9550;
chunk__9481_9515 = G__9551;
count__9482_9516 = G__9552;
i__9483_9517 = G__9553;
continue;
} else {
var temp__4657__auto___9554 = cljs.core.seq.call(null,seq__9474_9514);
if(temp__4657__auto___9554){
var seq__9474_9555__$1 = temp__4657__auto___9554;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9474_9555__$1)){
var c__7752__auto___9556 = cljs.core.chunk_first.call(null,seq__9474_9555__$1);
var G__9557 = cljs.core.chunk_rest.call(null,seq__9474_9555__$1);
var G__9558 = c__7752__auto___9556;
var G__9559 = cljs.core.count.call(null,c__7752__auto___9556);
var G__9560 = (0);
seq__9474_9514 = G__9557;
chunk__9481_9515 = G__9558;
count__9482_9516 = G__9559;
i__9483_9517 = G__9560;
continue;
} else {
var vec__9499_9561 = cljs.core.first.call(null,seq__9474_9555__$1);
var orig_type_9562 = cljs.core.nth.call(null,vec__9499_9561,(0),null);
var f_9563 = cljs.core.nth.call(null,vec__9499_9561,(1),null);
var seq__9475_9564 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9562,cljs.core.PersistentArrayMap.fromArray([orig_type_9562,cljs.core.identity], true, false)));
var chunk__9477_9565 = null;
var count__9478_9566 = (0);
var i__9479_9567 = (0);
while(true){
if((i__9479_9567 < count__9478_9566)){
var vec__9502_9568 = cljs.core._nth.call(null,chunk__9477_9565,i__9479_9567);
var actual_type_9569 = cljs.core.nth.call(null,vec__9502_9568,(0),null);
var __9570 = cljs.core.nth.call(null,vec__9502_9568,(1),null);
var keys_9571 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9513,actual_type_9569,f_9563], null);
var canonical_f_9572 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9512),keys_9571);
dommy.core.update_event_listeners_BANG_.call(null,elem_9512,dommy.utils.dissoc_in,keys_9571);

if(cljs.core.truth_(elem_9512.removeEventListener)){
elem_9512.removeEventListener(cljs.core.name.call(null,actual_type_9569),canonical_f_9572);
} else {
elem_9512.detachEvent(cljs.core.name.call(null,actual_type_9569),canonical_f_9572);
}

var G__9573 = seq__9475_9564;
var G__9574 = chunk__9477_9565;
var G__9575 = count__9478_9566;
var G__9576 = (i__9479_9567 + (1));
seq__9475_9564 = G__9573;
chunk__9477_9565 = G__9574;
count__9478_9566 = G__9575;
i__9479_9567 = G__9576;
continue;
} else {
var temp__4657__auto___9577__$1 = cljs.core.seq.call(null,seq__9475_9564);
if(temp__4657__auto___9577__$1){
var seq__9475_9578__$1 = temp__4657__auto___9577__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9475_9578__$1)){
var c__7752__auto___9579 = cljs.core.chunk_first.call(null,seq__9475_9578__$1);
var G__9580 = cljs.core.chunk_rest.call(null,seq__9475_9578__$1);
var G__9581 = c__7752__auto___9579;
var G__9582 = cljs.core.count.call(null,c__7752__auto___9579);
var G__9583 = (0);
seq__9475_9564 = G__9580;
chunk__9477_9565 = G__9581;
count__9478_9566 = G__9582;
i__9479_9567 = G__9583;
continue;
} else {
var vec__9505_9584 = cljs.core.first.call(null,seq__9475_9578__$1);
var actual_type_9585 = cljs.core.nth.call(null,vec__9505_9584,(0),null);
var __9586 = cljs.core.nth.call(null,vec__9505_9584,(1),null);
var keys_9587 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9513,actual_type_9585,f_9563], null);
var canonical_f_9588 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9512),keys_9587);
dommy.core.update_event_listeners_BANG_.call(null,elem_9512,dommy.utils.dissoc_in,keys_9587);

if(cljs.core.truth_(elem_9512.removeEventListener)){
elem_9512.removeEventListener(cljs.core.name.call(null,actual_type_9585),canonical_f_9588);
} else {
elem_9512.detachEvent(cljs.core.name.call(null,actual_type_9585),canonical_f_9588);
}

var G__9589 = cljs.core.next.call(null,seq__9475_9578__$1);
var G__9590 = null;
var G__9591 = (0);
var G__9592 = (0);
seq__9475_9564 = G__9589;
chunk__9477_9565 = G__9590;
count__9478_9566 = G__9591;
i__9479_9567 = G__9592;
continue;
}
} else {
}
}
break;
}

var G__9593 = cljs.core.next.call(null,seq__9474_9555__$1);
var G__9594 = null;
var G__9595 = (0);
var G__9596 = (0);
seq__9474_9514 = G__9593;
chunk__9481_9515 = G__9594;
count__9482_9516 = G__9595;
i__9483_9517 = G__9596;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq9469){
var G__9470 = cljs.core.first.call(null,seq9469);
var seq9469__$1 = cljs.core.next.call(null,seq9469);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9470,seq9469__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__8053__auto__ = [];
var len__8046__auto___9612 = arguments.length;
var i__8047__auto___9613 = (0);
while(true){
if((i__8047__auto___9613 < len__8046__auto___9612)){
args__8053__auto__.push((arguments[i__8047__auto___9613]));

var G__9614 = (i__8047__auto___9613 + (1));
i__8047__auto___9613 = G__9614;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((1) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8054__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__9599_9615 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_9616 = cljs.core.nth.call(null,vec__9599_9615,(0),null);
var selector_9617 = cljs.core.nth.call(null,vec__9599_9615,(1),null);
var seq__9602_9618 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__9603_9619 = null;
var count__9604_9620 = (0);
var i__9605_9621 = (0);
while(true){
if((i__9605_9621 < count__9604_9620)){
var vec__9606_9622 = cljs.core._nth.call(null,chunk__9603_9619,i__9605_9621);
var type_9623 = cljs.core.nth.call(null,vec__9606_9622,(0),null);
var f_9624 = cljs.core.nth.call(null,vec__9606_9622,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_9623,((function (seq__9602_9618,chunk__9603_9619,count__9604_9620,i__9605_9621,vec__9606_9622,type_9623,f_9624,vec__9599_9615,elem_9616,selector_9617){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_9623,dommy$core$this_fn);

return f_9624.call(null,e);
});})(seq__9602_9618,chunk__9603_9619,count__9604_9620,i__9605_9621,vec__9606_9622,type_9623,f_9624,vec__9599_9615,elem_9616,selector_9617))
);

var G__9625 = seq__9602_9618;
var G__9626 = chunk__9603_9619;
var G__9627 = count__9604_9620;
var G__9628 = (i__9605_9621 + (1));
seq__9602_9618 = G__9625;
chunk__9603_9619 = G__9626;
count__9604_9620 = G__9627;
i__9605_9621 = G__9628;
continue;
} else {
var temp__4657__auto___9629 = cljs.core.seq.call(null,seq__9602_9618);
if(temp__4657__auto___9629){
var seq__9602_9630__$1 = temp__4657__auto___9629;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9602_9630__$1)){
var c__7752__auto___9631 = cljs.core.chunk_first.call(null,seq__9602_9630__$1);
var G__9632 = cljs.core.chunk_rest.call(null,seq__9602_9630__$1);
var G__9633 = c__7752__auto___9631;
var G__9634 = cljs.core.count.call(null,c__7752__auto___9631);
var G__9635 = (0);
seq__9602_9618 = G__9632;
chunk__9603_9619 = G__9633;
count__9604_9620 = G__9634;
i__9605_9621 = G__9635;
continue;
} else {
var vec__9609_9636 = cljs.core.first.call(null,seq__9602_9630__$1);
var type_9637 = cljs.core.nth.call(null,vec__9609_9636,(0),null);
var f_9638 = cljs.core.nth.call(null,vec__9609_9636,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_9637,((function (seq__9602_9618,chunk__9603_9619,count__9604_9620,i__9605_9621,vec__9609_9636,type_9637,f_9638,seq__9602_9630__$1,temp__4657__auto___9629,vec__9599_9615,elem_9616,selector_9617){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_9637,dommy$core$this_fn);

return f_9638.call(null,e);
});})(seq__9602_9618,chunk__9603_9619,count__9604_9620,i__9605_9621,vec__9609_9636,type_9637,f_9638,seq__9602_9630__$1,temp__4657__auto___9629,vec__9599_9615,elem_9616,selector_9617))
);

var G__9639 = cljs.core.next.call(null,seq__9602_9630__$1);
var G__9640 = null;
var G__9641 = (0);
var G__9642 = (0);
seq__9602_9618 = G__9639;
chunk__9603_9619 = G__9640;
count__9604_9620 = G__9641;
i__9605_9621 = G__9642;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq9597){
var G__9598 = cljs.core.first.call(null,seq9597);
var seq9597__$1 = cljs.core.next.call(null,seq9597);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9598,seq9597__$1);
});


//# sourceMappingURL=core.js.map