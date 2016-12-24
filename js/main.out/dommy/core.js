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
var args11165 = [];
var len__8046__auto___11168 = arguments.length;
var i__8047__auto___11169 = (0);
while(true){
if((i__8047__auto___11169 < len__8046__auto___11168)){
args11165.push((arguments[i__8047__auto___11169]));

var G__11170 = (i__8047__auto___11169 + (1));
i__8047__auto___11169 = G__11170;
continue;
} else {
}
break;
}

var G__11167 = args11165.length;
switch (G__11167) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11165.length)].join('')));

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
var args11172 = [];
var len__8046__auto___11175 = arguments.length;
var i__8047__auto___11176 = (0);
while(true){
if((i__8047__auto___11176 < len__8046__auto___11175)){
args11172.push((arguments[i__8047__auto___11176]));

var G__11177 = (i__8047__auto___11176 + (1));
i__8047__auto___11176 = G__11177;
continue;
} else {
}
break;
}

var G__11174 = args11172.length;
switch (G__11174) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11172.length)].join('')));

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
var args11180 = [];
var len__8046__auto___11183 = arguments.length;
var i__8047__auto___11184 = (0);
while(true){
if((i__8047__auto___11184 < len__8046__auto___11183)){
args11180.push((arguments[i__8047__auto___11184]));

var G__11185 = (i__8047__auto___11184 + (1));
i__8047__auto___11184 = G__11185;
continue;
} else {
}
break;
}

var G__11182 = args11180.length;
switch (G__11182) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11180.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__11179_SHARP_){
return !((p1__11179_SHARP_ === base));
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
var len__8046__auto___11199 = arguments.length;
var i__8047__auto___11200 = (0);
while(true){
if((i__8047__auto___11200 < len__8046__auto___11199)){
args__8053__auto__.push((arguments[i__8047__auto___11200]));

var G__11201 = (i__8047__auto___11200 + (1));
i__8047__auto___11200 = G__11201;
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
var seq__11189_11202 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__11190_11203 = null;
var count__11191_11204 = (0);
var i__11192_11205 = (0);
while(true){
if((i__11192_11205 < count__11191_11204)){
var vec__11193_11206 = cljs.core._nth.call(null,chunk__11190_11203,i__11192_11205);
var k_11207 = cljs.core.nth.call(null,vec__11193_11206,(0),null);
var v_11208 = cljs.core.nth.call(null,vec__11193_11206,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_11207),v_11208);

var G__11209 = seq__11189_11202;
var G__11210 = chunk__11190_11203;
var G__11211 = count__11191_11204;
var G__11212 = (i__11192_11205 + (1));
seq__11189_11202 = G__11209;
chunk__11190_11203 = G__11210;
count__11191_11204 = G__11211;
i__11192_11205 = G__11212;
continue;
} else {
var temp__4657__auto___11213 = cljs.core.seq.call(null,seq__11189_11202);
if(temp__4657__auto___11213){
var seq__11189_11214__$1 = temp__4657__auto___11213;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11189_11214__$1)){
var c__7752__auto___11215 = cljs.core.chunk_first.call(null,seq__11189_11214__$1);
var G__11216 = cljs.core.chunk_rest.call(null,seq__11189_11214__$1);
var G__11217 = c__7752__auto___11215;
var G__11218 = cljs.core.count.call(null,c__7752__auto___11215);
var G__11219 = (0);
seq__11189_11202 = G__11216;
chunk__11190_11203 = G__11217;
count__11191_11204 = G__11218;
i__11192_11205 = G__11219;
continue;
} else {
var vec__11196_11220 = cljs.core.first.call(null,seq__11189_11214__$1);
var k_11221 = cljs.core.nth.call(null,vec__11196_11220,(0),null);
var v_11222 = cljs.core.nth.call(null,vec__11196_11220,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_11221),v_11222);

var G__11223 = cljs.core.next.call(null,seq__11189_11214__$1);
var G__11224 = null;
var G__11225 = (0);
var G__11226 = (0);
seq__11189_11202 = G__11223;
chunk__11190_11203 = G__11224;
count__11191_11204 = G__11225;
i__11192_11205 = G__11226;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq11187){
var G__11188 = cljs.core.first.call(null,seq11187);
var seq11187__$1 = cljs.core.next.call(null,seq11187);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11188,seq11187__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__8053__auto__ = [];
var len__8046__auto___11233 = arguments.length;
var i__8047__auto___11234 = (0);
while(true){
if((i__8047__auto___11234 < len__8046__auto___11233)){
args__8053__auto__.push((arguments[i__8047__auto___11234]));

var G__11235 = (i__8047__auto___11234 + (1));
i__8047__auto___11234 = G__11235;
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
var seq__11229_11236 = cljs.core.seq.call(null,keywords);
var chunk__11230_11237 = null;
var count__11231_11238 = (0);
var i__11232_11239 = (0);
while(true){
if((i__11232_11239 < count__11231_11238)){
var kw_11240 = cljs.core._nth.call(null,chunk__11230_11237,i__11232_11239);
style.removeProperty(dommy.utils.as_str.call(null,kw_11240));

var G__11241 = seq__11229_11236;
var G__11242 = chunk__11230_11237;
var G__11243 = count__11231_11238;
var G__11244 = (i__11232_11239 + (1));
seq__11229_11236 = G__11241;
chunk__11230_11237 = G__11242;
count__11231_11238 = G__11243;
i__11232_11239 = G__11244;
continue;
} else {
var temp__4657__auto___11245 = cljs.core.seq.call(null,seq__11229_11236);
if(temp__4657__auto___11245){
var seq__11229_11246__$1 = temp__4657__auto___11245;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11229_11246__$1)){
var c__7752__auto___11247 = cljs.core.chunk_first.call(null,seq__11229_11246__$1);
var G__11248 = cljs.core.chunk_rest.call(null,seq__11229_11246__$1);
var G__11249 = c__7752__auto___11247;
var G__11250 = cljs.core.count.call(null,c__7752__auto___11247);
var G__11251 = (0);
seq__11229_11236 = G__11248;
chunk__11230_11237 = G__11249;
count__11231_11238 = G__11250;
i__11232_11239 = G__11251;
continue;
} else {
var kw_11252 = cljs.core.first.call(null,seq__11229_11246__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_11252));

var G__11253 = cljs.core.next.call(null,seq__11229_11246__$1);
var G__11254 = null;
var G__11255 = (0);
var G__11256 = (0);
seq__11229_11236 = G__11253;
chunk__11230_11237 = G__11254;
count__11231_11238 = G__11255;
i__11232_11239 = G__11256;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq11227){
var G__11228 = cljs.core.first.call(null,seq11227);
var seq11227__$1 = cljs.core.next.call(null,seq11227);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11228,seq11227__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__8053__auto__ = [];
var len__8046__auto___11269 = arguments.length;
var i__8047__auto___11270 = (0);
while(true){
if((i__8047__auto___11270 < len__8046__auto___11269)){
args__8053__auto__.push((arguments[i__8047__auto___11270]));

var G__11271 = (i__8047__auto___11270 + (1));
i__8047__auto___11270 = G__11271;
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

var seq__11259_11272 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__11260_11273 = null;
var count__11261_11274 = (0);
var i__11262_11275 = (0);
while(true){
if((i__11262_11275 < count__11261_11274)){
var vec__11263_11276 = cljs.core._nth.call(null,chunk__11260_11273,i__11262_11275);
var k_11277 = cljs.core.nth.call(null,vec__11263_11276,(0),null);
var v_11278 = cljs.core.nth.call(null,vec__11263_11276,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_11277,[cljs.core.str(v_11278),cljs.core.str("px")].join(''));

var G__11279 = seq__11259_11272;
var G__11280 = chunk__11260_11273;
var G__11281 = count__11261_11274;
var G__11282 = (i__11262_11275 + (1));
seq__11259_11272 = G__11279;
chunk__11260_11273 = G__11280;
count__11261_11274 = G__11281;
i__11262_11275 = G__11282;
continue;
} else {
var temp__4657__auto___11283 = cljs.core.seq.call(null,seq__11259_11272);
if(temp__4657__auto___11283){
var seq__11259_11284__$1 = temp__4657__auto___11283;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11259_11284__$1)){
var c__7752__auto___11285 = cljs.core.chunk_first.call(null,seq__11259_11284__$1);
var G__11286 = cljs.core.chunk_rest.call(null,seq__11259_11284__$1);
var G__11287 = c__7752__auto___11285;
var G__11288 = cljs.core.count.call(null,c__7752__auto___11285);
var G__11289 = (0);
seq__11259_11272 = G__11286;
chunk__11260_11273 = G__11287;
count__11261_11274 = G__11288;
i__11262_11275 = G__11289;
continue;
} else {
var vec__11266_11290 = cljs.core.first.call(null,seq__11259_11284__$1);
var k_11291 = cljs.core.nth.call(null,vec__11266_11290,(0),null);
var v_11292 = cljs.core.nth.call(null,vec__11266_11290,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_11291,[cljs.core.str(v_11292),cljs.core.str("px")].join(''));

var G__11293 = cljs.core.next.call(null,seq__11259_11284__$1);
var G__11294 = null;
var G__11295 = (0);
var G__11296 = (0);
seq__11259_11272 = G__11293;
chunk__11260_11273 = G__11294;
count__11261_11274 = G__11295;
i__11262_11275 = G__11296;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq11257){
var G__11258 = cljs.core.first.call(null,seq11257);
var seq11257__$1 = cljs.core.next.call(null,seq11257);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11258,seq11257__$1);
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
var args11297 = [];
var len__8046__auto___11316 = arguments.length;
var i__8047__auto___11317 = (0);
while(true){
if((i__8047__auto___11317 < len__8046__auto___11316)){
args11297.push((arguments[i__8047__auto___11317]));

var G__11318 = (i__8047__auto___11317 + (1));
i__8047__auto___11317 = G__11318;
continue;
} else {
}
break;
}

var G__11303 = args11297.length;
switch (G__11303) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__8065__auto__ = (new cljs.core.IndexedSeq(args11297.slice((3)),(0),null));
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
var G__11304 = elem;
(G__11304[k__$1] = v);

return G__11304;
} else {
var G__11305 = elem;
G__11305.setAttribute(k__$1,v);

return G__11305;
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

var seq__11306_11320 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__11307_11321 = null;
var count__11308_11322 = (0);
var i__11309_11323 = (0);
while(true){
if((i__11309_11323 < count__11308_11322)){
var vec__11310_11324 = cljs.core._nth.call(null,chunk__11307_11321,i__11309_11323);
var k_11325__$1 = cljs.core.nth.call(null,vec__11310_11324,(0),null);
var v_11326__$1 = cljs.core.nth.call(null,vec__11310_11324,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_11325__$1,v_11326__$1);

var G__11327 = seq__11306_11320;
var G__11328 = chunk__11307_11321;
var G__11329 = count__11308_11322;
var G__11330 = (i__11309_11323 + (1));
seq__11306_11320 = G__11327;
chunk__11307_11321 = G__11328;
count__11308_11322 = G__11329;
i__11309_11323 = G__11330;
continue;
} else {
var temp__4657__auto___11331 = cljs.core.seq.call(null,seq__11306_11320);
if(temp__4657__auto___11331){
var seq__11306_11332__$1 = temp__4657__auto___11331;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11306_11332__$1)){
var c__7752__auto___11333 = cljs.core.chunk_first.call(null,seq__11306_11332__$1);
var G__11334 = cljs.core.chunk_rest.call(null,seq__11306_11332__$1);
var G__11335 = c__7752__auto___11333;
var G__11336 = cljs.core.count.call(null,c__7752__auto___11333);
var G__11337 = (0);
seq__11306_11320 = G__11334;
chunk__11307_11321 = G__11335;
count__11308_11322 = G__11336;
i__11309_11323 = G__11337;
continue;
} else {
var vec__11313_11338 = cljs.core.first.call(null,seq__11306_11332__$1);
var k_11339__$1 = cljs.core.nth.call(null,vec__11313_11338,(0),null);
var v_11340__$1 = cljs.core.nth.call(null,vec__11313_11338,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_11339__$1,v_11340__$1);

var G__11341 = cljs.core.next.call(null,seq__11306_11332__$1);
var G__11342 = null;
var G__11343 = (0);
var G__11344 = (0);
seq__11306_11320 = G__11341;
chunk__11307_11321 = G__11342;
count__11308_11322 = G__11343;
i__11309_11323 = G__11344;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq11298){
var G__11299 = cljs.core.first.call(null,seq11298);
var seq11298__$1 = cljs.core.next.call(null,seq11298);
var G__11300 = cljs.core.first.call(null,seq11298__$1);
var seq11298__$2 = cljs.core.next.call(null,seq11298__$1);
var G__11301 = cljs.core.first.call(null,seq11298__$2);
var seq11298__$3 = cljs.core.next.call(null,seq11298__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11299,G__11300,G__11301,seq11298__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args11345 = [];
var len__8046__auto___11355 = arguments.length;
var i__8047__auto___11356 = (0);
while(true){
if((i__8047__auto___11356 < len__8046__auto___11355)){
args11345.push((arguments[i__8047__auto___11356]));

var G__11357 = (i__8047__auto___11356 + (1));
i__8047__auto___11356 = G__11357;
continue;
} else {
}
break;
}

var G__11350 = args11345.length;
switch (G__11350) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8065__auto__ = (new cljs.core.IndexedSeq(args11345.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8065__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_11359__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_11359__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_11359__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__11351_11360 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__11352_11361 = null;
var count__11353_11362 = (0);
var i__11354_11363 = (0);
while(true){
if((i__11354_11363 < count__11353_11362)){
var k_11364__$1 = cljs.core._nth.call(null,chunk__11352_11361,i__11354_11363);
dommy.core.remove_attr_BANG_.call(null,elem,k_11364__$1);

var G__11365 = seq__11351_11360;
var G__11366 = chunk__11352_11361;
var G__11367 = count__11353_11362;
var G__11368 = (i__11354_11363 + (1));
seq__11351_11360 = G__11365;
chunk__11352_11361 = G__11366;
count__11353_11362 = G__11367;
i__11354_11363 = G__11368;
continue;
} else {
var temp__4657__auto___11369 = cljs.core.seq.call(null,seq__11351_11360);
if(temp__4657__auto___11369){
var seq__11351_11370__$1 = temp__4657__auto___11369;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11351_11370__$1)){
var c__7752__auto___11371 = cljs.core.chunk_first.call(null,seq__11351_11370__$1);
var G__11372 = cljs.core.chunk_rest.call(null,seq__11351_11370__$1);
var G__11373 = c__7752__auto___11371;
var G__11374 = cljs.core.count.call(null,c__7752__auto___11371);
var G__11375 = (0);
seq__11351_11360 = G__11372;
chunk__11352_11361 = G__11373;
count__11353_11362 = G__11374;
i__11354_11363 = G__11375;
continue;
} else {
var k_11376__$1 = cljs.core.first.call(null,seq__11351_11370__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_11376__$1);

var G__11377 = cljs.core.next.call(null,seq__11351_11370__$1);
var G__11378 = null;
var G__11379 = (0);
var G__11380 = (0);
seq__11351_11360 = G__11377;
chunk__11352_11361 = G__11378;
count__11353_11362 = G__11379;
i__11354_11363 = G__11380;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq11346){
var G__11347 = cljs.core.first.call(null,seq11346);
var seq11346__$1 = cljs.core.next.call(null,seq11346);
var G__11348 = cljs.core.first.call(null,seq11346__$1);
var seq11346__$2 = cljs.core.next.call(null,seq11346__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11347,G__11348,seq11346__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args11381 = [];
var len__8046__auto___11384 = arguments.length;
var i__8047__auto___11385 = (0);
while(true){
if((i__8047__auto___11385 < len__8046__auto___11384)){
args11381.push((arguments[i__8047__auto___11385]));

var G__11386 = (i__8047__auto___11385 + (1));
i__8047__auto___11385 = G__11386;
continue;
} else {
}
break;
}

var G__11383 = args11381.length;
switch (G__11383) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11381.length)].join('')));

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
var args11388 = [];
var len__8046__auto___11406 = arguments.length;
var i__8047__auto___11407 = (0);
while(true){
if((i__8047__auto___11407 < len__8046__auto___11406)){
args11388.push((arguments[i__8047__auto___11407]));

var G__11408 = (i__8047__auto___11407 + (1));
i__8047__auto___11407 = G__11408;
continue;
} else {
}
break;
}

var G__11393 = args11388.length;
switch (G__11393) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8065__auto__ = (new cljs.core.IndexedSeq(args11388.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8065__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___11410 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___11410)){
var class_list_11411 = temp__4655__auto___11410;
var seq__11394_11412 = cljs.core.seq.call(null,classes__$1);
var chunk__11395_11413 = null;
var count__11396_11414 = (0);
var i__11397_11415 = (0);
while(true){
if((i__11397_11415 < count__11396_11414)){
var c_11416 = cljs.core._nth.call(null,chunk__11395_11413,i__11397_11415);
class_list_11411.add(c_11416);

var G__11417 = seq__11394_11412;
var G__11418 = chunk__11395_11413;
var G__11419 = count__11396_11414;
var G__11420 = (i__11397_11415 + (1));
seq__11394_11412 = G__11417;
chunk__11395_11413 = G__11418;
count__11396_11414 = G__11419;
i__11397_11415 = G__11420;
continue;
} else {
var temp__4657__auto___11421 = cljs.core.seq.call(null,seq__11394_11412);
if(temp__4657__auto___11421){
var seq__11394_11422__$1 = temp__4657__auto___11421;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11394_11422__$1)){
var c__7752__auto___11423 = cljs.core.chunk_first.call(null,seq__11394_11422__$1);
var G__11424 = cljs.core.chunk_rest.call(null,seq__11394_11422__$1);
var G__11425 = c__7752__auto___11423;
var G__11426 = cljs.core.count.call(null,c__7752__auto___11423);
var G__11427 = (0);
seq__11394_11412 = G__11424;
chunk__11395_11413 = G__11425;
count__11396_11414 = G__11426;
i__11397_11415 = G__11427;
continue;
} else {
var c_11428 = cljs.core.first.call(null,seq__11394_11422__$1);
class_list_11411.add(c_11428);

var G__11429 = cljs.core.next.call(null,seq__11394_11422__$1);
var G__11430 = null;
var G__11431 = (0);
var G__11432 = (0);
seq__11394_11412 = G__11429;
chunk__11395_11413 = G__11430;
count__11396_11414 = G__11431;
i__11397_11415 = G__11432;
continue;
}
} else {
}
}
break;
}
} else {
var seq__11398_11433 = cljs.core.seq.call(null,classes__$1);
var chunk__11399_11434 = null;
var count__11400_11435 = (0);
var i__11401_11436 = (0);
while(true){
if((i__11401_11436 < count__11400_11435)){
var c_11437 = cljs.core._nth.call(null,chunk__11399_11434,i__11401_11436);
var class_name_11438 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_11438,c_11437))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_11438 === ""))?c_11437:[cljs.core.str(class_name_11438),cljs.core.str(" "),cljs.core.str(c_11437)].join('')));
}

var G__11439 = seq__11398_11433;
var G__11440 = chunk__11399_11434;
var G__11441 = count__11400_11435;
var G__11442 = (i__11401_11436 + (1));
seq__11398_11433 = G__11439;
chunk__11399_11434 = G__11440;
count__11400_11435 = G__11441;
i__11401_11436 = G__11442;
continue;
} else {
var temp__4657__auto___11443 = cljs.core.seq.call(null,seq__11398_11433);
if(temp__4657__auto___11443){
var seq__11398_11444__$1 = temp__4657__auto___11443;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11398_11444__$1)){
var c__7752__auto___11445 = cljs.core.chunk_first.call(null,seq__11398_11444__$1);
var G__11446 = cljs.core.chunk_rest.call(null,seq__11398_11444__$1);
var G__11447 = c__7752__auto___11445;
var G__11448 = cljs.core.count.call(null,c__7752__auto___11445);
var G__11449 = (0);
seq__11398_11433 = G__11446;
chunk__11399_11434 = G__11447;
count__11400_11435 = G__11448;
i__11401_11436 = G__11449;
continue;
} else {
var c_11450 = cljs.core.first.call(null,seq__11398_11444__$1);
var class_name_11451 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_11451,c_11450))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_11451 === ""))?c_11450:[cljs.core.str(class_name_11451),cljs.core.str(" "),cljs.core.str(c_11450)].join('')));
}

var G__11452 = cljs.core.next.call(null,seq__11398_11444__$1);
var G__11453 = null;
var G__11454 = (0);
var G__11455 = (0);
seq__11398_11433 = G__11452;
chunk__11399_11434 = G__11453;
count__11400_11435 = G__11454;
i__11401_11436 = G__11455;
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
var seq__11402_11456 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__11403_11457 = null;
var count__11404_11458 = (0);
var i__11405_11459 = (0);
while(true){
if((i__11405_11459 < count__11404_11458)){
var c_11460 = cljs.core._nth.call(null,chunk__11403_11457,i__11405_11459);
dommy.core.add_class_BANG_.call(null,elem,c_11460);

var G__11461 = seq__11402_11456;
var G__11462 = chunk__11403_11457;
var G__11463 = count__11404_11458;
var G__11464 = (i__11405_11459 + (1));
seq__11402_11456 = G__11461;
chunk__11403_11457 = G__11462;
count__11404_11458 = G__11463;
i__11405_11459 = G__11464;
continue;
} else {
var temp__4657__auto___11465 = cljs.core.seq.call(null,seq__11402_11456);
if(temp__4657__auto___11465){
var seq__11402_11466__$1 = temp__4657__auto___11465;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11402_11466__$1)){
var c__7752__auto___11467 = cljs.core.chunk_first.call(null,seq__11402_11466__$1);
var G__11468 = cljs.core.chunk_rest.call(null,seq__11402_11466__$1);
var G__11469 = c__7752__auto___11467;
var G__11470 = cljs.core.count.call(null,c__7752__auto___11467);
var G__11471 = (0);
seq__11402_11456 = G__11468;
chunk__11403_11457 = G__11469;
count__11404_11458 = G__11470;
i__11405_11459 = G__11471;
continue;
} else {
var c_11472 = cljs.core.first.call(null,seq__11402_11466__$1);
dommy.core.add_class_BANG_.call(null,elem,c_11472);

var G__11473 = cljs.core.next.call(null,seq__11402_11466__$1);
var G__11474 = null;
var G__11475 = (0);
var G__11476 = (0);
seq__11402_11456 = G__11473;
chunk__11403_11457 = G__11474;
count__11404_11458 = G__11475;
i__11405_11459 = G__11476;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq11389){
var G__11390 = cljs.core.first.call(null,seq11389);
var seq11389__$1 = cljs.core.next.call(null,seq11389);
var G__11391 = cljs.core.first.call(null,seq11389__$1);
var seq11389__$2 = cljs.core.next.call(null,seq11389__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11390,G__11391,seq11389__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args11477 = [];
var len__8046__auto___11487 = arguments.length;
var i__8047__auto___11488 = (0);
while(true){
if((i__8047__auto___11488 < len__8046__auto___11487)){
args11477.push((arguments[i__8047__auto___11488]));

var G__11489 = (i__8047__auto___11488 + (1));
i__8047__auto___11488 = G__11489;
continue;
} else {
}
break;
}

var G__11482 = args11477.length;
switch (G__11482) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8065__auto__ = (new cljs.core.IndexedSeq(args11477.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8065__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___11491 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___11491)){
var class_list_11492 = temp__4655__auto___11491;
class_list_11492.remove(c__$1);
} else {
var class_name_11493 = dommy.core.class$.call(null,elem);
var new_class_name_11494 = dommy.utils.remove_class_str.call(null,class_name_11493,c__$1);
if((class_name_11493 === new_class_name_11494)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_11494);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__11483 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__11484 = null;
var count__11485 = (0);
var i__11486 = (0);
while(true){
if((i__11486 < count__11485)){
var c = cljs.core._nth.call(null,chunk__11484,i__11486);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__11495 = seq__11483;
var G__11496 = chunk__11484;
var G__11497 = count__11485;
var G__11498 = (i__11486 + (1));
seq__11483 = G__11495;
chunk__11484 = G__11496;
count__11485 = G__11497;
i__11486 = G__11498;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11483);
if(temp__4657__auto__){
var seq__11483__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11483__$1)){
var c__7752__auto__ = cljs.core.chunk_first.call(null,seq__11483__$1);
var G__11499 = cljs.core.chunk_rest.call(null,seq__11483__$1);
var G__11500 = c__7752__auto__;
var G__11501 = cljs.core.count.call(null,c__7752__auto__);
var G__11502 = (0);
seq__11483 = G__11499;
chunk__11484 = G__11500;
count__11485 = G__11501;
i__11486 = G__11502;
continue;
} else {
var c = cljs.core.first.call(null,seq__11483__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__11503 = cljs.core.next.call(null,seq__11483__$1);
var G__11504 = null;
var G__11505 = (0);
var G__11506 = (0);
seq__11483 = G__11503;
chunk__11484 = G__11504;
count__11485 = G__11505;
i__11486 = G__11506;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq11478){
var G__11479 = cljs.core.first.call(null,seq11478);
var seq11478__$1 = cljs.core.next.call(null,seq11478);
var G__11480 = cljs.core.first.call(null,seq11478__$1);
var seq11478__$2 = cljs.core.next.call(null,seq11478__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11479,G__11480,seq11478__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args11507 = [];
var len__8046__auto___11510 = arguments.length;
var i__8047__auto___11511 = (0);
while(true){
if((i__8047__auto___11511 < len__8046__auto___11510)){
args11507.push((arguments[i__8047__auto___11511]));

var G__11512 = (i__8047__auto___11511 + (1));
i__8047__auto___11511 = G__11512;
continue;
} else {
}
break;
}

var G__11509 = args11507.length;
switch (G__11509) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11507.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___11514 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___11514)){
var class_list_11515 = temp__4655__auto___11514;
class_list_11515.toggle(c__$1);
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
var args11516 = [];
var len__8046__auto___11519 = arguments.length;
var i__8047__auto___11520 = (0);
while(true){
if((i__8047__auto___11520 < len__8046__auto___11519)){
args11516.push((arguments[i__8047__auto___11520]));

var G__11521 = (i__8047__auto___11520 + (1));
i__8047__auto___11520 = G__11521;
continue;
} else {
}
break;
}

var G__11518 = args11516.length;
switch (G__11518) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11516.length)].join('')));

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
var args11523 = [];
var len__8046__auto___11526 = arguments.length;
var i__8047__auto___11527 = (0);
while(true){
if((i__8047__auto___11527 < len__8046__auto___11526)){
args11523.push((arguments[i__8047__auto___11527]));

var G__11528 = (i__8047__auto___11527 + (1));
i__8047__auto___11527 = G__11528;
continue;
} else {
}
break;
}

var G__11525 = args11523.length;
switch (G__11525) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11523.length)].join('')));

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
var args11530 = [];
var len__8046__auto___11541 = arguments.length;
var i__8047__auto___11542 = (0);
while(true){
if((i__8047__auto___11542 < len__8046__auto___11541)){
args11530.push((arguments[i__8047__auto___11542]));

var G__11543 = (i__8047__auto___11542 + (1));
i__8047__auto___11542 = G__11543;
continue;
} else {
}
break;
}

var G__11535 = args11530.length;
switch (G__11535) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8065__auto__ = (new cljs.core.IndexedSeq(args11530.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8065__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__11536 = parent;
G__11536.appendChild(child);

return G__11536;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__11537_11545 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__11538_11546 = null;
var count__11539_11547 = (0);
var i__11540_11548 = (0);
while(true){
if((i__11540_11548 < count__11539_11547)){
var c_11549 = cljs.core._nth.call(null,chunk__11538_11546,i__11540_11548);
dommy.core.append_BANG_.call(null,parent,c_11549);

var G__11550 = seq__11537_11545;
var G__11551 = chunk__11538_11546;
var G__11552 = count__11539_11547;
var G__11553 = (i__11540_11548 + (1));
seq__11537_11545 = G__11550;
chunk__11538_11546 = G__11551;
count__11539_11547 = G__11552;
i__11540_11548 = G__11553;
continue;
} else {
var temp__4657__auto___11554 = cljs.core.seq.call(null,seq__11537_11545);
if(temp__4657__auto___11554){
var seq__11537_11555__$1 = temp__4657__auto___11554;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11537_11555__$1)){
var c__7752__auto___11556 = cljs.core.chunk_first.call(null,seq__11537_11555__$1);
var G__11557 = cljs.core.chunk_rest.call(null,seq__11537_11555__$1);
var G__11558 = c__7752__auto___11556;
var G__11559 = cljs.core.count.call(null,c__7752__auto___11556);
var G__11560 = (0);
seq__11537_11545 = G__11557;
chunk__11538_11546 = G__11558;
count__11539_11547 = G__11559;
i__11540_11548 = G__11560;
continue;
} else {
var c_11561 = cljs.core.first.call(null,seq__11537_11555__$1);
dommy.core.append_BANG_.call(null,parent,c_11561);

var G__11562 = cljs.core.next.call(null,seq__11537_11555__$1);
var G__11563 = null;
var G__11564 = (0);
var G__11565 = (0);
seq__11537_11545 = G__11562;
chunk__11538_11546 = G__11563;
count__11539_11547 = G__11564;
i__11540_11548 = G__11565;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq11531){
var G__11532 = cljs.core.first.call(null,seq11531);
var seq11531__$1 = cljs.core.next.call(null,seq11531);
var G__11533 = cljs.core.first.call(null,seq11531__$1);
var seq11531__$2 = cljs.core.next.call(null,seq11531__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11532,G__11533,seq11531__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args11566 = [];
var len__8046__auto___11577 = arguments.length;
var i__8047__auto___11578 = (0);
while(true){
if((i__8047__auto___11578 < len__8046__auto___11577)){
args11566.push((arguments[i__8047__auto___11578]));

var G__11579 = (i__8047__auto___11578 + (1));
i__8047__auto___11578 = G__11579;
continue;
} else {
}
break;
}

var G__11571 = args11566.length;
switch (G__11571) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8065__auto__ = (new cljs.core.IndexedSeq(args11566.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8065__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__11572 = parent;
G__11572.insertBefore(child,parent.firstChild);

return G__11572;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__11573_11581 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__11574_11582 = null;
var count__11575_11583 = (0);
var i__11576_11584 = (0);
while(true){
if((i__11576_11584 < count__11575_11583)){
var c_11585 = cljs.core._nth.call(null,chunk__11574_11582,i__11576_11584);
dommy.core.prepend_BANG_.call(null,parent,c_11585);

var G__11586 = seq__11573_11581;
var G__11587 = chunk__11574_11582;
var G__11588 = count__11575_11583;
var G__11589 = (i__11576_11584 + (1));
seq__11573_11581 = G__11586;
chunk__11574_11582 = G__11587;
count__11575_11583 = G__11588;
i__11576_11584 = G__11589;
continue;
} else {
var temp__4657__auto___11590 = cljs.core.seq.call(null,seq__11573_11581);
if(temp__4657__auto___11590){
var seq__11573_11591__$1 = temp__4657__auto___11590;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11573_11591__$1)){
var c__7752__auto___11592 = cljs.core.chunk_first.call(null,seq__11573_11591__$1);
var G__11593 = cljs.core.chunk_rest.call(null,seq__11573_11591__$1);
var G__11594 = c__7752__auto___11592;
var G__11595 = cljs.core.count.call(null,c__7752__auto___11592);
var G__11596 = (0);
seq__11573_11581 = G__11593;
chunk__11574_11582 = G__11594;
count__11575_11583 = G__11595;
i__11576_11584 = G__11596;
continue;
} else {
var c_11597 = cljs.core.first.call(null,seq__11573_11591__$1);
dommy.core.prepend_BANG_.call(null,parent,c_11597);

var G__11598 = cljs.core.next.call(null,seq__11573_11591__$1);
var G__11599 = null;
var G__11600 = (0);
var G__11601 = (0);
seq__11573_11581 = G__11598;
chunk__11574_11582 = G__11599;
count__11575_11583 = G__11600;
i__11576_11584 = G__11601;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq11567){
var G__11568 = cljs.core.first.call(null,seq11567);
var seq11567__$1 = cljs.core.next.call(null,seq11567);
var G__11569 = cljs.core.first.call(null,seq11567__$1);
var seq11567__$2 = cljs.core.next.call(null,seq11567__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11568,G__11569,seq11567__$2);
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
var temp__4655__auto___11602 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___11602)){
var next_11603 = temp__4655__auto___11602;
dommy.core.insert_before_BANG_.call(null,elem,next_11603);
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
var args11604 = [];
var len__8046__auto___11608 = arguments.length;
var i__8047__auto___11609 = (0);
while(true){
if((i__8047__auto___11609 < len__8046__auto___11608)){
args11604.push((arguments[i__8047__auto___11609]));

var G__11610 = (i__8047__auto___11609 + (1));
i__8047__auto___11609 = G__11610;
continue;
} else {
}
break;
}

var G__11606 = args11604.length;
switch (G__11606) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11604.length)].join('')));

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
var G__11607 = p;
G__11607.removeChild(elem);

return G__11607;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__11612){
var vec__11613 = p__11612;
var special_mouse_event = cljs.core.nth.call(null,vec__11613,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__11613,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__11613,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__11613,special_mouse_event,real_mouse_event){
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
;})(vec__11613,special_mouse_event,real_mouse_event))
});})(vec__11613,special_mouse_event,real_mouse_event))
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
var len__8046__auto___11619 = arguments.length;
var i__8047__auto___11620 = (0);
while(true){
if((i__8047__auto___11620 < len__8046__auto___11619)){
args__8053__auto__.push((arguments[i__8047__auto___11620]));

var G__11621 = (i__8047__auto___11620 + (1));
i__8047__auto___11620 = G__11621;
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

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq11616){
var G__11617 = cljs.core.first.call(null,seq11616);
var seq11616__$1 = cljs.core.next.call(null,seq11616);
var G__11618 = cljs.core.first.call(null,seq11616__$1);
var seq11616__$2 = cljs.core.next.call(null,seq11616__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11617,G__11618,seq11616__$2);
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
var len__8046__auto___11661 = arguments.length;
var i__8047__auto___11662 = (0);
while(true){
if((i__8047__auto___11662 < len__8046__auto___11661)){
args__8053__auto__.push((arguments[i__8047__auto___11662]));

var G__11663 = (i__8047__auto___11662 + (1));
i__8047__auto___11662 = G__11663;
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

var vec__11624_11664 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_11665 = cljs.core.nth.call(null,vec__11624_11664,(0),null);
var selector_11666 = cljs.core.nth.call(null,vec__11624_11664,(1),null);
var seq__11627_11667 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__11634_11668 = null;
var count__11635_11669 = (0);
var i__11636_11670 = (0);
while(true){
if((i__11636_11670 < count__11635_11669)){
var vec__11643_11671 = cljs.core._nth.call(null,chunk__11634_11668,i__11636_11670);
var orig_type_11672 = cljs.core.nth.call(null,vec__11643_11671,(0),null);
var f_11673 = cljs.core.nth.call(null,vec__11643_11671,(1),null);
var seq__11637_11674 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11672,cljs.core.PersistentArrayMap.fromArray([orig_type_11672,cljs.core.identity], true, false)));
var chunk__11639_11675 = null;
var count__11640_11676 = (0);
var i__11641_11677 = (0);
while(true){
if((i__11641_11677 < count__11640_11676)){
var vec__11646_11678 = cljs.core._nth.call(null,chunk__11639_11675,i__11641_11677);
var actual_type_11679 = cljs.core.nth.call(null,vec__11646_11678,(0),null);
var factory_11680 = cljs.core.nth.call(null,vec__11646_11678,(1),null);
var canonical_f_11681 = (cljs.core.truth_(selector_11666)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11665,selector_11666):cljs.core.identity).call(null,factory_11680.call(null,f_11673));
dommy.core.update_event_listeners_BANG_.call(null,elem_11665,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11666,actual_type_11679,f_11673], null),canonical_f_11681);

if(cljs.core.truth_(elem_11665.addEventListener)){
elem_11665.addEventListener(cljs.core.name.call(null,actual_type_11679),canonical_f_11681);
} else {
elem_11665.attachEvent(cljs.core.name.call(null,actual_type_11679),canonical_f_11681);
}

var G__11682 = seq__11637_11674;
var G__11683 = chunk__11639_11675;
var G__11684 = count__11640_11676;
var G__11685 = (i__11641_11677 + (1));
seq__11637_11674 = G__11682;
chunk__11639_11675 = G__11683;
count__11640_11676 = G__11684;
i__11641_11677 = G__11685;
continue;
} else {
var temp__4657__auto___11686 = cljs.core.seq.call(null,seq__11637_11674);
if(temp__4657__auto___11686){
var seq__11637_11687__$1 = temp__4657__auto___11686;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11637_11687__$1)){
var c__7752__auto___11688 = cljs.core.chunk_first.call(null,seq__11637_11687__$1);
var G__11689 = cljs.core.chunk_rest.call(null,seq__11637_11687__$1);
var G__11690 = c__7752__auto___11688;
var G__11691 = cljs.core.count.call(null,c__7752__auto___11688);
var G__11692 = (0);
seq__11637_11674 = G__11689;
chunk__11639_11675 = G__11690;
count__11640_11676 = G__11691;
i__11641_11677 = G__11692;
continue;
} else {
var vec__11649_11693 = cljs.core.first.call(null,seq__11637_11687__$1);
var actual_type_11694 = cljs.core.nth.call(null,vec__11649_11693,(0),null);
var factory_11695 = cljs.core.nth.call(null,vec__11649_11693,(1),null);
var canonical_f_11696 = (cljs.core.truth_(selector_11666)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11665,selector_11666):cljs.core.identity).call(null,factory_11695.call(null,f_11673));
dommy.core.update_event_listeners_BANG_.call(null,elem_11665,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11666,actual_type_11694,f_11673], null),canonical_f_11696);

if(cljs.core.truth_(elem_11665.addEventListener)){
elem_11665.addEventListener(cljs.core.name.call(null,actual_type_11694),canonical_f_11696);
} else {
elem_11665.attachEvent(cljs.core.name.call(null,actual_type_11694),canonical_f_11696);
}

var G__11697 = cljs.core.next.call(null,seq__11637_11687__$1);
var G__11698 = null;
var G__11699 = (0);
var G__11700 = (0);
seq__11637_11674 = G__11697;
chunk__11639_11675 = G__11698;
count__11640_11676 = G__11699;
i__11641_11677 = G__11700;
continue;
}
} else {
}
}
break;
}

var G__11701 = seq__11627_11667;
var G__11702 = chunk__11634_11668;
var G__11703 = count__11635_11669;
var G__11704 = (i__11636_11670 + (1));
seq__11627_11667 = G__11701;
chunk__11634_11668 = G__11702;
count__11635_11669 = G__11703;
i__11636_11670 = G__11704;
continue;
} else {
var temp__4657__auto___11705 = cljs.core.seq.call(null,seq__11627_11667);
if(temp__4657__auto___11705){
var seq__11627_11706__$1 = temp__4657__auto___11705;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11627_11706__$1)){
var c__7752__auto___11707 = cljs.core.chunk_first.call(null,seq__11627_11706__$1);
var G__11708 = cljs.core.chunk_rest.call(null,seq__11627_11706__$1);
var G__11709 = c__7752__auto___11707;
var G__11710 = cljs.core.count.call(null,c__7752__auto___11707);
var G__11711 = (0);
seq__11627_11667 = G__11708;
chunk__11634_11668 = G__11709;
count__11635_11669 = G__11710;
i__11636_11670 = G__11711;
continue;
} else {
var vec__11652_11712 = cljs.core.first.call(null,seq__11627_11706__$1);
var orig_type_11713 = cljs.core.nth.call(null,vec__11652_11712,(0),null);
var f_11714 = cljs.core.nth.call(null,vec__11652_11712,(1),null);
var seq__11628_11715 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11713,cljs.core.PersistentArrayMap.fromArray([orig_type_11713,cljs.core.identity], true, false)));
var chunk__11630_11716 = null;
var count__11631_11717 = (0);
var i__11632_11718 = (0);
while(true){
if((i__11632_11718 < count__11631_11717)){
var vec__11655_11719 = cljs.core._nth.call(null,chunk__11630_11716,i__11632_11718);
var actual_type_11720 = cljs.core.nth.call(null,vec__11655_11719,(0),null);
var factory_11721 = cljs.core.nth.call(null,vec__11655_11719,(1),null);
var canonical_f_11722 = (cljs.core.truth_(selector_11666)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11665,selector_11666):cljs.core.identity).call(null,factory_11721.call(null,f_11714));
dommy.core.update_event_listeners_BANG_.call(null,elem_11665,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11666,actual_type_11720,f_11714], null),canonical_f_11722);

if(cljs.core.truth_(elem_11665.addEventListener)){
elem_11665.addEventListener(cljs.core.name.call(null,actual_type_11720),canonical_f_11722);
} else {
elem_11665.attachEvent(cljs.core.name.call(null,actual_type_11720),canonical_f_11722);
}

var G__11723 = seq__11628_11715;
var G__11724 = chunk__11630_11716;
var G__11725 = count__11631_11717;
var G__11726 = (i__11632_11718 + (1));
seq__11628_11715 = G__11723;
chunk__11630_11716 = G__11724;
count__11631_11717 = G__11725;
i__11632_11718 = G__11726;
continue;
} else {
var temp__4657__auto___11727__$1 = cljs.core.seq.call(null,seq__11628_11715);
if(temp__4657__auto___11727__$1){
var seq__11628_11728__$1 = temp__4657__auto___11727__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11628_11728__$1)){
var c__7752__auto___11729 = cljs.core.chunk_first.call(null,seq__11628_11728__$1);
var G__11730 = cljs.core.chunk_rest.call(null,seq__11628_11728__$1);
var G__11731 = c__7752__auto___11729;
var G__11732 = cljs.core.count.call(null,c__7752__auto___11729);
var G__11733 = (0);
seq__11628_11715 = G__11730;
chunk__11630_11716 = G__11731;
count__11631_11717 = G__11732;
i__11632_11718 = G__11733;
continue;
} else {
var vec__11658_11734 = cljs.core.first.call(null,seq__11628_11728__$1);
var actual_type_11735 = cljs.core.nth.call(null,vec__11658_11734,(0),null);
var factory_11736 = cljs.core.nth.call(null,vec__11658_11734,(1),null);
var canonical_f_11737 = (cljs.core.truth_(selector_11666)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11665,selector_11666):cljs.core.identity).call(null,factory_11736.call(null,f_11714));
dommy.core.update_event_listeners_BANG_.call(null,elem_11665,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11666,actual_type_11735,f_11714], null),canonical_f_11737);

if(cljs.core.truth_(elem_11665.addEventListener)){
elem_11665.addEventListener(cljs.core.name.call(null,actual_type_11735),canonical_f_11737);
} else {
elem_11665.attachEvent(cljs.core.name.call(null,actual_type_11735),canonical_f_11737);
}

var G__11738 = cljs.core.next.call(null,seq__11628_11728__$1);
var G__11739 = null;
var G__11740 = (0);
var G__11741 = (0);
seq__11628_11715 = G__11738;
chunk__11630_11716 = G__11739;
count__11631_11717 = G__11740;
i__11632_11718 = G__11741;
continue;
}
} else {
}
}
break;
}

var G__11742 = cljs.core.next.call(null,seq__11627_11706__$1);
var G__11743 = null;
var G__11744 = (0);
var G__11745 = (0);
seq__11627_11667 = G__11742;
chunk__11634_11668 = G__11743;
count__11635_11669 = G__11744;
i__11636_11670 = G__11745;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq11622){
var G__11623 = cljs.core.first.call(null,seq11622);
var seq11622__$1 = cljs.core.next.call(null,seq11622);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11623,seq11622__$1);
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
var len__8046__auto___11785 = arguments.length;
var i__8047__auto___11786 = (0);
while(true){
if((i__8047__auto___11786 < len__8046__auto___11785)){
args__8053__auto__.push((arguments[i__8047__auto___11786]));

var G__11787 = (i__8047__auto___11786 + (1));
i__8047__auto___11786 = G__11787;
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

var vec__11748_11788 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_11789 = cljs.core.nth.call(null,vec__11748_11788,(0),null);
var selector_11790 = cljs.core.nth.call(null,vec__11748_11788,(1),null);
var seq__11751_11791 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__11758_11792 = null;
var count__11759_11793 = (0);
var i__11760_11794 = (0);
while(true){
if((i__11760_11794 < count__11759_11793)){
var vec__11767_11795 = cljs.core._nth.call(null,chunk__11758_11792,i__11760_11794);
var orig_type_11796 = cljs.core.nth.call(null,vec__11767_11795,(0),null);
var f_11797 = cljs.core.nth.call(null,vec__11767_11795,(1),null);
var seq__11761_11798 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11796,cljs.core.PersistentArrayMap.fromArray([orig_type_11796,cljs.core.identity], true, false)));
var chunk__11763_11799 = null;
var count__11764_11800 = (0);
var i__11765_11801 = (0);
while(true){
if((i__11765_11801 < count__11764_11800)){
var vec__11770_11802 = cljs.core._nth.call(null,chunk__11763_11799,i__11765_11801);
var actual_type_11803 = cljs.core.nth.call(null,vec__11770_11802,(0),null);
var __11804 = cljs.core.nth.call(null,vec__11770_11802,(1),null);
var keys_11805 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11790,actual_type_11803,f_11797], null);
var canonical_f_11806 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11789),keys_11805);
dommy.core.update_event_listeners_BANG_.call(null,elem_11789,dommy.utils.dissoc_in,keys_11805);

if(cljs.core.truth_(elem_11789.removeEventListener)){
elem_11789.removeEventListener(cljs.core.name.call(null,actual_type_11803),canonical_f_11806);
} else {
elem_11789.detachEvent(cljs.core.name.call(null,actual_type_11803),canonical_f_11806);
}

var G__11807 = seq__11761_11798;
var G__11808 = chunk__11763_11799;
var G__11809 = count__11764_11800;
var G__11810 = (i__11765_11801 + (1));
seq__11761_11798 = G__11807;
chunk__11763_11799 = G__11808;
count__11764_11800 = G__11809;
i__11765_11801 = G__11810;
continue;
} else {
var temp__4657__auto___11811 = cljs.core.seq.call(null,seq__11761_11798);
if(temp__4657__auto___11811){
var seq__11761_11812__$1 = temp__4657__auto___11811;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11761_11812__$1)){
var c__7752__auto___11813 = cljs.core.chunk_first.call(null,seq__11761_11812__$1);
var G__11814 = cljs.core.chunk_rest.call(null,seq__11761_11812__$1);
var G__11815 = c__7752__auto___11813;
var G__11816 = cljs.core.count.call(null,c__7752__auto___11813);
var G__11817 = (0);
seq__11761_11798 = G__11814;
chunk__11763_11799 = G__11815;
count__11764_11800 = G__11816;
i__11765_11801 = G__11817;
continue;
} else {
var vec__11773_11818 = cljs.core.first.call(null,seq__11761_11812__$1);
var actual_type_11819 = cljs.core.nth.call(null,vec__11773_11818,(0),null);
var __11820 = cljs.core.nth.call(null,vec__11773_11818,(1),null);
var keys_11821 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11790,actual_type_11819,f_11797], null);
var canonical_f_11822 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11789),keys_11821);
dommy.core.update_event_listeners_BANG_.call(null,elem_11789,dommy.utils.dissoc_in,keys_11821);

if(cljs.core.truth_(elem_11789.removeEventListener)){
elem_11789.removeEventListener(cljs.core.name.call(null,actual_type_11819),canonical_f_11822);
} else {
elem_11789.detachEvent(cljs.core.name.call(null,actual_type_11819),canonical_f_11822);
}

var G__11823 = cljs.core.next.call(null,seq__11761_11812__$1);
var G__11824 = null;
var G__11825 = (0);
var G__11826 = (0);
seq__11761_11798 = G__11823;
chunk__11763_11799 = G__11824;
count__11764_11800 = G__11825;
i__11765_11801 = G__11826;
continue;
}
} else {
}
}
break;
}

var G__11827 = seq__11751_11791;
var G__11828 = chunk__11758_11792;
var G__11829 = count__11759_11793;
var G__11830 = (i__11760_11794 + (1));
seq__11751_11791 = G__11827;
chunk__11758_11792 = G__11828;
count__11759_11793 = G__11829;
i__11760_11794 = G__11830;
continue;
} else {
var temp__4657__auto___11831 = cljs.core.seq.call(null,seq__11751_11791);
if(temp__4657__auto___11831){
var seq__11751_11832__$1 = temp__4657__auto___11831;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11751_11832__$1)){
var c__7752__auto___11833 = cljs.core.chunk_first.call(null,seq__11751_11832__$1);
var G__11834 = cljs.core.chunk_rest.call(null,seq__11751_11832__$1);
var G__11835 = c__7752__auto___11833;
var G__11836 = cljs.core.count.call(null,c__7752__auto___11833);
var G__11837 = (0);
seq__11751_11791 = G__11834;
chunk__11758_11792 = G__11835;
count__11759_11793 = G__11836;
i__11760_11794 = G__11837;
continue;
} else {
var vec__11776_11838 = cljs.core.first.call(null,seq__11751_11832__$1);
var orig_type_11839 = cljs.core.nth.call(null,vec__11776_11838,(0),null);
var f_11840 = cljs.core.nth.call(null,vec__11776_11838,(1),null);
var seq__11752_11841 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11839,cljs.core.PersistentArrayMap.fromArray([orig_type_11839,cljs.core.identity], true, false)));
var chunk__11754_11842 = null;
var count__11755_11843 = (0);
var i__11756_11844 = (0);
while(true){
if((i__11756_11844 < count__11755_11843)){
var vec__11779_11845 = cljs.core._nth.call(null,chunk__11754_11842,i__11756_11844);
var actual_type_11846 = cljs.core.nth.call(null,vec__11779_11845,(0),null);
var __11847 = cljs.core.nth.call(null,vec__11779_11845,(1),null);
var keys_11848 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11790,actual_type_11846,f_11840], null);
var canonical_f_11849 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11789),keys_11848);
dommy.core.update_event_listeners_BANG_.call(null,elem_11789,dommy.utils.dissoc_in,keys_11848);

if(cljs.core.truth_(elem_11789.removeEventListener)){
elem_11789.removeEventListener(cljs.core.name.call(null,actual_type_11846),canonical_f_11849);
} else {
elem_11789.detachEvent(cljs.core.name.call(null,actual_type_11846),canonical_f_11849);
}

var G__11850 = seq__11752_11841;
var G__11851 = chunk__11754_11842;
var G__11852 = count__11755_11843;
var G__11853 = (i__11756_11844 + (1));
seq__11752_11841 = G__11850;
chunk__11754_11842 = G__11851;
count__11755_11843 = G__11852;
i__11756_11844 = G__11853;
continue;
} else {
var temp__4657__auto___11854__$1 = cljs.core.seq.call(null,seq__11752_11841);
if(temp__4657__auto___11854__$1){
var seq__11752_11855__$1 = temp__4657__auto___11854__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11752_11855__$1)){
var c__7752__auto___11856 = cljs.core.chunk_first.call(null,seq__11752_11855__$1);
var G__11857 = cljs.core.chunk_rest.call(null,seq__11752_11855__$1);
var G__11858 = c__7752__auto___11856;
var G__11859 = cljs.core.count.call(null,c__7752__auto___11856);
var G__11860 = (0);
seq__11752_11841 = G__11857;
chunk__11754_11842 = G__11858;
count__11755_11843 = G__11859;
i__11756_11844 = G__11860;
continue;
} else {
var vec__11782_11861 = cljs.core.first.call(null,seq__11752_11855__$1);
var actual_type_11862 = cljs.core.nth.call(null,vec__11782_11861,(0),null);
var __11863 = cljs.core.nth.call(null,vec__11782_11861,(1),null);
var keys_11864 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11790,actual_type_11862,f_11840], null);
var canonical_f_11865 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11789),keys_11864);
dommy.core.update_event_listeners_BANG_.call(null,elem_11789,dommy.utils.dissoc_in,keys_11864);

if(cljs.core.truth_(elem_11789.removeEventListener)){
elem_11789.removeEventListener(cljs.core.name.call(null,actual_type_11862),canonical_f_11865);
} else {
elem_11789.detachEvent(cljs.core.name.call(null,actual_type_11862),canonical_f_11865);
}

var G__11866 = cljs.core.next.call(null,seq__11752_11855__$1);
var G__11867 = null;
var G__11868 = (0);
var G__11869 = (0);
seq__11752_11841 = G__11866;
chunk__11754_11842 = G__11867;
count__11755_11843 = G__11868;
i__11756_11844 = G__11869;
continue;
}
} else {
}
}
break;
}

var G__11870 = cljs.core.next.call(null,seq__11751_11832__$1);
var G__11871 = null;
var G__11872 = (0);
var G__11873 = (0);
seq__11751_11791 = G__11870;
chunk__11758_11792 = G__11871;
count__11759_11793 = G__11872;
i__11760_11794 = G__11873;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq11746){
var G__11747 = cljs.core.first.call(null,seq11746);
var seq11746__$1 = cljs.core.next.call(null,seq11746);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11747,seq11746__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__8053__auto__ = [];
var len__8046__auto___11889 = arguments.length;
var i__8047__auto___11890 = (0);
while(true){
if((i__8047__auto___11890 < len__8046__auto___11889)){
args__8053__auto__.push((arguments[i__8047__auto___11890]));

var G__11891 = (i__8047__auto___11890 + (1));
i__8047__auto___11890 = G__11891;
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

var vec__11876_11892 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_11893 = cljs.core.nth.call(null,vec__11876_11892,(0),null);
var selector_11894 = cljs.core.nth.call(null,vec__11876_11892,(1),null);
var seq__11879_11895 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__11880_11896 = null;
var count__11881_11897 = (0);
var i__11882_11898 = (0);
while(true){
if((i__11882_11898 < count__11881_11897)){
var vec__11883_11899 = cljs.core._nth.call(null,chunk__11880_11896,i__11882_11898);
var type_11900 = cljs.core.nth.call(null,vec__11883_11899,(0),null);
var f_11901 = cljs.core.nth.call(null,vec__11883_11899,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_11900,((function (seq__11879_11895,chunk__11880_11896,count__11881_11897,i__11882_11898,vec__11883_11899,type_11900,f_11901,vec__11876_11892,elem_11893,selector_11894){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_11900,dommy$core$this_fn);

return f_11901.call(null,e);
});})(seq__11879_11895,chunk__11880_11896,count__11881_11897,i__11882_11898,vec__11883_11899,type_11900,f_11901,vec__11876_11892,elem_11893,selector_11894))
);

var G__11902 = seq__11879_11895;
var G__11903 = chunk__11880_11896;
var G__11904 = count__11881_11897;
var G__11905 = (i__11882_11898 + (1));
seq__11879_11895 = G__11902;
chunk__11880_11896 = G__11903;
count__11881_11897 = G__11904;
i__11882_11898 = G__11905;
continue;
} else {
var temp__4657__auto___11906 = cljs.core.seq.call(null,seq__11879_11895);
if(temp__4657__auto___11906){
var seq__11879_11907__$1 = temp__4657__auto___11906;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11879_11907__$1)){
var c__7752__auto___11908 = cljs.core.chunk_first.call(null,seq__11879_11907__$1);
var G__11909 = cljs.core.chunk_rest.call(null,seq__11879_11907__$1);
var G__11910 = c__7752__auto___11908;
var G__11911 = cljs.core.count.call(null,c__7752__auto___11908);
var G__11912 = (0);
seq__11879_11895 = G__11909;
chunk__11880_11896 = G__11910;
count__11881_11897 = G__11911;
i__11882_11898 = G__11912;
continue;
} else {
var vec__11886_11913 = cljs.core.first.call(null,seq__11879_11907__$1);
var type_11914 = cljs.core.nth.call(null,vec__11886_11913,(0),null);
var f_11915 = cljs.core.nth.call(null,vec__11886_11913,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_11914,((function (seq__11879_11895,chunk__11880_11896,count__11881_11897,i__11882_11898,vec__11886_11913,type_11914,f_11915,seq__11879_11907__$1,temp__4657__auto___11906,vec__11876_11892,elem_11893,selector_11894){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_11914,dommy$core$this_fn);

return f_11915.call(null,e);
});})(seq__11879_11895,chunk__11880_11896,count__11881_11897,i__11882_11898,vec__11886_11913,type_11914,f_11915,seq__11879_11907__$1,temp__4657__auto___11906,vec__11876_11892,elem_11893,selector_11894))
);

var G__11916 = cljs.core.next.call(null,seq__11879_11907__$1);
var G__11917 = null;
var G__11918 = (0);
var G__11919 = (0);
seq__11879_11895 = G__11916;
chunk__11880_11896 = G__11917;
count__11881_11897 = G__11918;
i__11882_11898 = G__11919;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq11874){
var G__11875 = cljs.core.first.call(null,seq11874);
var seq11874__$1 = cljs.core.next.call(null,seq11874);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11875,seq11874__$1);
});


//# sourceMappingURL=core.js.map