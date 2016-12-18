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
var or__20530__auto__ = elem.textContent;
if(cljs.core.truth_(or__20530__auto__)){
return or__20530__auto__;
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
var args23334 = [];
var len__21638__auto___23337 = arguments.length;
var i__21639__auto___23338 = (0);
while(true){
if((i__21639__auto___23338 < len__21638__auto___23337)){
args23334.push((arguments[i__21639__auto___23338]));

var G__23339 = (i__21639__auto___23338 + (1));
i__21639__auto___23338 = G__23339;
continue;
} else {
}
break;
}

var G__23336 = args23334.length;
switch (G__23336) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23334.length)].join('')));

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
var args23341 = [];
var len__21638__auto___23344 = arguments.length;
var i__21639__auto___23345 = (0);
while(true){
if((i__21639__auto___23345 < len__21638__auto___23344)){
args23341.push((arguments[i__21639__auto___23345]));

var G__23346 = (i__21639__auto___23345 + (1));
i__21639__auto___23345 = G__23346;
continue;
} else {
}
break;
}

var G__23343 = args23341.length;
switch (G__23343) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23341.length)].join('')));

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
var args23349 = [];
var len__21638__auto___23352 = arguments.length;
var i__21639__auto___23353 = (0);
while(true){
if((i__21639__auto___23353 < len__21638__auto___23352)){
args23349.push((arguments[i__21639__auto___23353]));

var G__23354 = (i__21639__auto___23353 + (1));
i__21639__auto___23353 = G__23354;
continue;
} else {
}
break;
}

var G__23351 = args23349.length;
switch (G__23351) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23349.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__23348_SHARP_){
return !((p1__23348_SHARP_ === base));
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
var args__21645__auto__ = [];
var len__21638__auto___23368 = arguments.length;
var i__21639__auto___23369 = (0);
while(true){
if((i__21639__auto___23369 < len__21638__auto___23368)){
args__21645__auto__.push((arguments[i__21639__auto___23369]));

var G__23370 = (i__21639__auto___23369 + (1));
i__21639__auto___23369 = G__23370;
continue;
} else {
}
break;
}

var argseq__21646__auto__ = ((((1) < args__21645__auto__.length))?(new cljs.core.IndexedSeq(args__21645__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21646__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__23358_23371 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__23359_23372 = null;
var count__23360_23373 = (0);
var i__23361_23374 = (0);
while(true){
if((i__23361_23374 < count__23360_23373)){
var vec__23362_23375 = cljs.core._nth.call(null,chunk__23359_23372,i__23361_23374);
var k_23376 = cljs.core.nth.call(null,vec__23362_23375,(0),null);
var v_23377 = cljs.core.nth.call(null,vec__23362_23375,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_23376),v_23377);

var G__23378 = seq__23358_23371;
var G__23379 = chunk__23359_23372;
var G__23380 = count__23360_23373;
var G__23381 = (i__23361_23374 + (1));
seq__23358_23371 = G__23378;
chunk__23359_23372 = G__23379;
count__23360_23373 = G__23380;
i__23361_23374 = G__23381;
continue;
} else {
var temp__4657__auto___23382 = cljs.core.seq.call(null,seq__23358_23371);
if(temp__4657__auto___23382){
var seq__23358_23383__$1 = temp__4657__auto___23382;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23358_23383__$1)){
var c__21344__auto___23384 = cljs.core.chunk_first.call(null,seq__23358_23383__$1);
var G__23385 = cljs.core.chunk_rest.call(null,seq__23358_23383__$1);
var G__23386 = c__21344__auto___23384;
var G__23387 = cljs.core.count.call(null,c__21344__auto___23384);
var G__23388 = (0);
seq__23358_23371 = G__23385;
chunk__23359_23372 = G__23386;
count__23360_23373 = G__23387;
i__23361_23374 = G__23388;
continue;
} else {
var vec__23365_23389 = cljs.core.first.call(null,seq__23358_23383__$1);
var k_23390 = cljs.core.nth.call(null,vec__23365_23389,(0),null);
var v_23391 = cljs.core.nth.call(null,vec__23365_23389,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_23390),v_23391);

var G__23392 = cljs.core.next.call(null,seq__23358_23383__$1);
var G__23393 = null;
var G__23394 = (0);
var G__23395 = (0);
seq__23358_23371 = G__23392;
chunk__23359_23372 = G__23393;
count__23360_23373 = G__23394;
i__23361_23374 = G__23395;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq23356){
var G__23357 = cljs.core.first.call(null,seq23356);
var seq23356__$1 = cljs.core.next.call(null,seq23356);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23357,seq23356__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__21645__auto__ = [];
var len__21638__auto___23402 = arguments.length;
var i__21639__auto___23403 = (0);
while(true){
if((i__21639__auto___23403 < len__21638__auto___23402)){
args__21645__auto__.push((arguments[i__21639__auto___23403]));

var G__23404 = (i__21639__auto___23403 + (1));
i__21639__auto___23403 = G__23404;
continue;
} else {
}
break;
}

var argseq__21646__auto__ = ((((1) < args__21645__auto__.length))?(new cljs.core.IndexedSeq(args__21645__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21646__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__23398_23405 = cljs.core.seq.call(null,keywords);
var chunk__23399_23406 = null;
var count__23400_23407 = (0);
var i__23401_23408 = (0);
while(true){
if((i__23401_23408 < count__23400_23407)){
var kw_23409 = cljs.core._nth.call(null,chunk__23399_23406,i__23401_23408);
style.removeProperty(dommy.utils.as_str.call(null,kw_23409));

var G__23410 = seq__23398_23405;
var G__23411 = chunk__23399_23406;
var G__23412 = count__23400_23407;
var G__23413 = (i__23401_23408 + (1));
seq__23398_23405 = G__23410;
chunk__23399_23406 = G__23411;
count__23400_23407 = G__23412;
i__23401_23408 = G__23413;
continue;
} else {
var temp__4657__auto___23414 = cljs.core.seq.call(null,seq__23398_23405);
if(temp__4657__auto___23414){
var seq__23398_23415__$1 = temp__4657__auto___23414;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23398_23415__$1)){
var c__21344__auto___23416 = cljs.core.chunk_first.call(null,seq__23398_23415__$1);
var G__23417 = cljs.core.chunk_rest.call(null,seq__23398_23415__$1);
var G__23418 = c__21344__auto___23416;
var G__23419 = cljs.core.count.call(null,c__21344__auto___23416);
var G__23420 = (0);
seq__23398_23405 = G__23417;
chunk__23399_23406 = G__23418;
count__23400_23407 = G__23419;
i__23401_23408 = G__23420;
continue;
} else {
var kw_23421 = cljs.core.first.call(null,seq__23398_23415__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_23421));

var G__23422 = cljs.core.next.call(null,seq__23398_23415__$1);
var G__23423 = null;
var G__23424 = (0);
var G__23425 = (0);
seq__23398_23405 = G__23422;
chunk__23399_23406 = G__23423;
count__23400_23407 = G__23424;
i__23401_23408 = G__23425;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq23396){
var G__23397 = cljs.core.first.call(null,seq23396);
var seq23396__$1 = cljs.core.next.call(null,seq23396);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23397,seq23396__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__21645__auto__ = [];
var len__21638__auto___23438 = arguments.length;
var i__21639__auto___23439 = (0);
while(true){
if((i__21639__auto___23439 < len__21638__auto___23438)){
args__21645__auto__.push((arguments[i__21639__auto___23439]));

var G__23440 = (i__21639__auto___23439 + (1));
i__21639__auto___23439 = G__23440;
continue;
} else {
}
break;
}

var argseq__21646__auto__ = ((((1) < args__21645__auto__.length))?(new cljs.core.IndexedSeq(args__21645__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21646__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__23428_23441 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__23429_23442 = null;
var count__23430_23443 = (0);
var i__23431_23444 = (0);
while(true){
if((i__23431_23444 < count__23430_23443)){
var vec__23432_23445 = cljs.core._nth.call(null,chunk__23429_23442,i__23431_23444);
var k_23446 = cljs.core.nth.call(null,vec__23432_23445,(0),null);
var v_23447 = cljs.core.nth.call(null,vec__23432_23445,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_23446,[cljs.core.str(v_23447),cljs.core.str("px")].join(''));

var G__23448 = seq__23428_23441;
var G__23449 = chunk__23429_23442;
var G__23450 = count__23430_23443;
var G__23451 = (i__23431_23444 + (1));
seq__23428_23441 = G__23448;
chunk__23429_23442 = G__23449;
count__23430_23443 = G__23450;
i__23431_23444 = G__23451;
continue;
} else {
var temp__4657__auto___23452 = cljs.core.seq.call(null,seq__23428_23441);
if(temp__4657__auto___23452){
var seq__23428_23453__$1 = temp__4657__auto___23452;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23428_23453__$1)){
var c__21344__auto___23454 = cljs.core.chunk_first.call(null,seq__23428_23453__$1);
var G__23455 = cljs.core.chunk_rest.call(null,seq__23428_23453__$1);
var G__23456 = c__21344__auto___23454;
var G__23457 = cljs.core.count.call(null,c__21344__auto___23454);
var G__23458 = (0);
seq__23428_23441 = G__23455;
chunk__23429_23442 = G__23456;
count__23430_23443 = G__23457;
i__23431_23444 = G__23458;
continue;
} else {
var vec__23435_23459 = cljs.core.first.call(null,seq__23428_23453__$1);
var k_23460 = cljs.core.nth.call(null,vec__23435_23459,(0),null);
var v_23461 = cljs.core.nth.call(null,vec__23435_23459,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_23460,[cljs.core.str(v_23461),cljs.core.str("px")].join(''));

var G__23462 = cljs.core.next.call(null,seq__23428_23453__$1);
var G__23463 = null;
var G__23464 = (0);
var G__23465 = (0);
seq__23428_23441 = G__23462;
chunk__23429_23442 = G__23463;
count__23430_23443 = G__23464;
i__23431_23444 = G__23465;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq23426){
var G__23427 = cljs.core.first.call(null,seq23426);
var seq23426__$1 = cljs.core.next.call(null,seq23426);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23427,seq23426__$1);
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
var args23466 = [];
var len__21638__auto___23485 = arguments.length;
var i__21639__auto___23486 = (0);
while(true){
if((i__21639__auto___23486 < len__21638__auto___23485)){
args23466.push((arguments[i__21639__auto___23486]));

var G__23487 = (i__21639__auto___23486 + (1));
i__21639__auto___23486 = G__23487;
continue;
} else {
}
break;
}

var G__23472 = args23466.length;
switch (G__23472) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__21657__auto__ = (new cljs.core.IndexedSeq(args23466.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21657__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__23473 = elem;
(G__23473[k__$1] = v);

return G__23473;
} else {
var G__23474 = elem;
G__23474.setAttribute(k__$1,v);

return G__23474;
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

var seq__23475_23489 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__23476_23490 = null;
var count__23477_23491 = (0);
var i__23478_23492 = (0);
while(true){
if((i__23478_23492 < count__23477_23491)){
var vec__23479_23493 = cljs.core._nth.call(null,chunk__23476_23490,i__23478_23492);
var k_23494__$1 = cljs.core.nth.call(null,vec__23479_23493,(0),null);
var v_23495__$1 = cljs.core.nth.call(null,vec__23479_23493,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_23494__$1,v_23495__$1);

var G__23496 = seq__23475_23489;
var G__23497 = chunk__23476_23490;
var G__23498 = count__23477_23491;
var G__23499 = (i__23478_23492 + (1));
seq__23475_23489 = G__23496;
chunk__23476_23490 = G__23497;
count__23477_23491 = G__23498;
i__23478_23492 = G__23499;
continue;
} else {
var temp__4657__auto___23500 = cljs.core.seq.call(null,seq__23475_23489);
if(temp__4657__auto___23500){
var seq__23475_23501__$1 = temp__4657__auto___23500;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23475_23501__$1)){
var c__21344__auto___23502 = cljs.core.chunk_first.call(null,seq__23475_23501__$1);
var G__23503 = cljs.core.chunk_rest.call(null,seq__23475_23501__$1);
var G__23504 = c__21344__auto___23502;
var G__23505 = cljs.core.count.call(null,c__21344__auto___23502);
var G__23506 = (0);
seq__23475_23489 = G__23503;
chunk__23476_23490 = G__23504;
count__23477_23491 = G__23505;
i__23478_23492 = G__23506;
continue;
} else {
var vec__23482_23507 = cljs.core.first.call(null,seq__23475_23501__$1);
var k_23508__$1 = cljs.core.nth.call(null,vec__23482_23507,(0),null);
var v_23509__$1 = cljs.core.nth.call(null,vec__23482_23507,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_23508__$1,v_23509__$1);

var G__23510 = cljs.core.next.call(null,seq__23475_23501__$1);
var G__23511 = null;
var G__23512 = (0);
var G__23513 = (0);
seq__23475_23489 = G__23510;
chunk__23476_23490 = G__23511;
count__23477_23491 = G__23512;
i__23478_23492 = G__23513;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq23467){
var G__23468 = cljs.core.first.call(null,seq23467);
var seq23467__$1 = cljs.core.next.call(null,seq23467);
var G__23469 = cljs.core.first.call(null,seq23467__$1);
var seq23467__$2 = cljs.core.next.call(null,seq23467__$1);
var G__23470 = cljs.core.first.call(null,seq23467__$2);
var seq23467__$3 = cljs.core.next.call(null,seq23467__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23468,G__23469,G__23470,seq23467__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args23514 = [];
var len__21638__auto___23524 = arguments.length;
var i__21639__auto___23525 = (0);
while(true){
if((i__21639__auto___23525 < len__21638__auto___23524)){
args23514.push((arguments[i__21639__auto___23525]));

var G__23526 = (i__21639__auto___23525 + (1));
i__21639__auto___23525 = G__23526;
continue;
} else {
}
break;
}

var G__23519 = args23514.length;
switch (G__23519) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21657__auto__ = (new cljs.core.IndexedSeq(args23514.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21657__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_23528__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_23528__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_23528__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__23520_23529 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__23521_23530 = null;
var count__23522_23531 = (0);
var i__23523_23532 = (0);
while(true){
if((i__23523_23532 < count__23522_23531)){
var k_23533__$1 = cljs.core._nth.call(null,chunk__23521_23530,i__23523_23532);
dommy.core.remove_attr_BANG_.call(null,elem,k_23533__$1);

var G__23534 = seq__23520_23529;
var G__23535 = chunk__23521_23530;
var G__23536 = count__23522_23531;
var G__23537 = (i__23523_23532 + (1));
seq__23520_23529 = G__23534;
chunk__23521_23530 = G__23535;
count__23522_23531 = G__23536;
i__23523_23532 = G__23537;
continue;
} else {
var temp__4657__auto___23538 = cljs.core.seq.call(null,seq__23520_23529);
if(temp__4657__auto___23538){
var seq__23520_23539__$1 = temp__4657__auto___23538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23520_23539__$1)){
var c__21344__auto___23540 = cljs.core.chunk_first.call(null,seq__23520_23539__$1);
var G__23541 = cljs.core.chunk_rest.call(null,seq__23520_23539__$1);
var G__23542 = c__21344__auto___23540;
var G__23543 = cljs.core.count.call(null,c__21344__auto___23540);
var G__23544 = (0);
seq__23520_23529 = G__23541;
chunk__23521_23530 = G__23542;
count__23522_23531 = G__23543;
i__23523_23532 = G__23544;
continue;
} else {
var k_23545__$1 = cljs.core.first.call(null,seq__23520_23539__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_23545__$1);

var G__23546 = cljs.core.next.call(null,seq__23520_23539__$1);
var G__23547 = null;
var G__23548 = (0);
var G__23549 = (0);
seq__23520_23529 = G__23546;
chunk__23521_23530 = G__23547;
count__23522_23531 = G__23548;
i__23523_23532 = G__23549;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq23515){
var G__23516 = cljs.core.first.call(null,seq23515);
var seq23515__$1 = cljs.core.next.call(null,seq23515);
var G__23517 = cljs.core.first.call(null,seq23515__$1);
var seq23515__$2 = cljs.core.next.call(null,seq23515__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23516,G__23517,seq23515__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args23550 = [];
var len__21638__auto___23553 = arguments.length;
var i__21639__auto___23554 = (0);
while(true){
if((i__21639__auto___23554 < len__21638__auto___23553)){
args23550.push((arguments[i__21639__auto___23554]));

var G__23555 = (i__21639__auto___23554 + (1));
i__21639__auto___23554 = G__23555;
continue;
} else {
}
break;
}

var G__23552 = args23550.length;
switch (G__23552) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23550.length)].join('')));

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
var args23557 = [];
var len__21638__auto___23575 = arguments.length;
var i__21639__auto___23576 = (0);
while(true){
if((i__21639__auto___23576 < len__21638__auto___23575)){
args23557.push((arguments[i__21639__auto___23576]));

var G__23577 = (i__21639__auto___23576 + (1));
i__21639__auto___23576 = G__23577;
continue;
} else {
}
break;
}

var G__23562 = args23557.length;
switch (G__23562) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21657__auto__ = (new cljs.core.IndexedSeq(args23557.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21657__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___23579 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___23579)){
var class_list_23580 = temp__4655__auto___23579;
var seq__23563_23581 = cljs.core.seq.call(null,classes__$1);
var chunk__23564_23582 = null;
var count__23565_23583 = (0);
var i__23566_23584 = (0);
while(true){
if((i__23566_23584 < count__23565_23583)){
var c_23585 = cljs.core._nth.call(null,chunk__23564_23582,i__23566_23584);
class_list_23580.add(c_23585);

var G__23586 = seq__23563_23581;
var G__23587 = chunk__23564_23582;
var G__23588 = count__23565_23583;
var G__23589 = (i__23566_23584 + (1));
seq__23563_23581 = G__23586;
chunk__23564_23582 = G__23587;
count__23565_23583 = G__23588;
i__23566_23584 = G__23589;
continue;
} else {
var temp__4657__auto___23590 = cljs.core.seq.call(null,seq__23563_23581);
if(temp__4657__auto___23590){
var seq__23563_23591__$1 = temp__4657__auto___23590;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23563_23591__$1)){
var c__21344__auto___23592 = cljs.core.chunk_first.call(null,seq__23563_23591__$1);
var G__23593 = cljs.core.chunk_rest.call(null,seq__23563_23591__$1);
var G__23594 = c__21344__auto___23592;
var G__23595 = cljs.core.count.call(null,c__21344__auto___23592);
var G__23596 = (0);
seq__23563_23581 = G__23593;
chunk__23564_23582 = G__23594;
count__23565_23583 = G__23595;
i__23566_23584 = G__23596;
continue;
} else {
var c_23597 = cljs.core.first.call(null,seq__23563_23591__$1);
class_list_23580.add(c_23597);

var G__23598 = cljs.core.next.call(null,seq__23563_23591__$1);
var G__23599 = null;
var G__23600 = (0);
var G__23601 = (0);
seq__23563_23581 = G__23598;
chunk__23564_23582 = G__23599;
count__23565_23583 = G__23600;
i__23566_23584 = G__23601;
continue;
}
} else {
}
}
break;
}
} else {
var seq__23567_23602 = cljs.core.seq.call(null,classes__$1);
var chunk__23568_23603 = null;
var count__23569_23604 = (0);
var i__23570_23605 = (0);
while(true){
if((i__23570_23605 < count__23569_23604)){
var c_23606 = cljs.core._nth.call(null,chunk__23568_23603,i__23570_23605);
var class_name_23607 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_23607,c_23606))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_23607 === ""))?c_23606:[cljs.core.str(class_name_23607),cljs.core.str(" "),cljs.core.str(c_23606)].join('')));
}

var G__23608 = seq__23567_23602;
var G__23609 = chunk__23568_23603;
var G__23610 = count__23569_23604;
var G__23611 = (i__23570_23605 + (1));
seq__23567_23602 = G__23608;
chunk__23568_23603 = G__23609;
count__23569_23604 = G__23610;
i__23570_23605 = G__23611;
continue;
} else {
var temp__4657__auto___23612 = cljs.core.seq.call(null,seq__23567_23602);
if(temp__4657__auto___23612){
var seq__23567_23613__$1 = temp__4657__auto___23612;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23567_23613__$1)){
var c__21344__auto___23614 = cljs.core.chunk_first.call(null,seq__23567_23613__$1);
var G__23615 = cljs.core.chunk_rest.call(null,seq__23567_23613__$1);
var G__23616 = c__21344__auto___23614;
var G__23617 = cljs.core.count.call(null,c__21344__auto___23614);
var G__23618 = (0);
seq__23567_23602 = G__23615;
chunk__23568_23603 = G__23616;
count__23569_23604 = G__23617;
i__23570_23605 = G__23618;
continue;
} else {
var c_23619 = cljs.core.first.call(null,seq__23567_23613__$1);
var class_name_23620 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_23620,c_23619))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_23620 === ""))?c_23619:[cljs.core.str(class_name_23620),cljs.core.str(" "),cljs.core.str(c_23619)].join('')));
}

var G__23621 = cljs.core.next.call(null,seq__23567_23613__$1);
var G__23622 = null;
var G__23623 = (0);
var G__23624 = (0);
seq__23567_23602 = G__23621;
chunk__23568_23603 = G__23622;
count__23569_23604 = G__23623;
i__23570_23605 = G__23624;
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
var seq__23571_23625 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__23572_23626 = null;
var count__23573_23627 = (0);
var i__23574_23628 = (0);
while(true){
if((i__23574_23628 < count__23573_23627)){
var c_23629 = cljs.core._nth.call(null,chunk__23572_23626,i__23574_23628);
dommy.core.add_class_BANG_.call(null,elem,c_23629);

var G__23630 = seq__23571_23625;
var G__23631 = chunk__23572_23626;
var G__23632 = count__23573_23627;
var G__23633 = (i__23574_23628 + (1));
seq__23571_23625 = G__23630;
chunk__23572_23626 = G__23631;
count__23573_23627 = G__23632;
i__23574_23628 = G__23633;
continue;
} else {
var temp__4657__auto___23634 = cljs.core.seq.call(null,seq__23571_23625);
if(temp__4657__auto___23634){
var seq__23571_23635__$1 = temp__4657__auto___23634;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23571_23635__$1)){
var c__21344__auto___23636 = cljs.core.chunk_first.call(null,seq__23571_23635__$1);
var G__23637 = cljs.core.chunk_rest.call(null,seq__23571_23635__$1);
var G__23638 = c__21344__auto___23636;
var G__23639 = cljs.core.count.call(null,c__21344__auto___23636);
var G__23640 = (0);
seq__23571_23625 = G__23637;
chunk__23572_23626 = G__23638;
count__23573_23627 = G__23639;
i__23574_23628 = G__23640;
continue;
} else {
var c_23641 = cljs.core.first.call(null,seq__23571_23635__$1);
dommy.core.add_class_BANG_.call(null,elem,c_23641);

var G__23642 = cljs.core.next.call(null,seq__23571_23635__$1);
var G__23643 = null;
var G__23644 = (0);
var G__23645 = (0);
seq__23571_23625 = G__23642;
chunk__23572_23626 = G__23643;
count__23573_23627 = G__23644;
i__23574_23628 = G__23645;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq23558){
var G__23559 = cljs.core.first.call(null,seq23558);
var seq23558__$1 = cljs.core.next.call(null,seq23558);
var G__23560 = cljs.core.first.call(null,seq23558__$1);
var seq23558__$2 = cljs.core.next.call(null,seq23558__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23559,G__23560,seq23558__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args23646 = [];
var len__21638__auto___23656 = arguments.length;
var i__21639__auto___23657 = (0);
while(true){
if((i__21639__auto___23657 < len__21638__auto___23656)){
args23646.push((arguments[i__21639__auto___23657]));

var G__23658 = (i__21639__auto___23657 + (1));
i__21639__auto___23657 = G__23658;
continue;
} else {
}
break;
}

var G__23651 = args23646.length;
switch (G__23651) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21657__auto__ = (new cljs.core.IndexedSeq(args23646.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21657__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___23660 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___23660)){
var class_list_23661 = temp__4655__auto___23660;
class_list_23661.remove(c__$1);
} else {
var class_name_23662 = dommy.core.class$.call(null,elem);
var new_class_name_23663 = dommy.utils.remove_class_str.call(null,class_name_23662,c__$1);
if((class_name_23662 === new_class_name_23663)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_23663);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__23652 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__23653 = null;
var count__23654 = (0);
var i__23655 = (0);
while(true){
if((i__23655 < count__23654)){
var c = cljs.core._nth.call(null,chunk__23653,i__23655);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__23664 = seq__23652;
var G__23665 = chunk__23653;
var G__23666 = count__23654;
var G__23667 = (i__23655 + (1));
seq__23652 = G__23664;
chunk__23653 = G__23665;
count__23654 = G__23666;
i__23655 = G__23667;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23652);
if(temp__4657__auto__){
var seq__23652__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23652__$1)){
var c__21344__auto__ = cljs.core.chunk_first.call(null,seq__23652__$1);
var G__23668 = cljs.core.chunk_rest.call(null,seq__23652__$1);
var G__23669 = c__21344__auto__;
var G__23670 = cljs.core.count.call(null,c__21344__auto__);
var G__23671 = (0);
seq__23652 = G__23668;
chunk__23653 = G__23669;
count__23654 = G__23670;
i__23655 = G__23671;
continue;
} else {
var c = cljs.core.first.call(null,seq__23652__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__23672 = cljs.core.next.call(null,seq__23652__$1);
var G__23673 = null;
var G__23674 = (0);
var G__23675 = (0);
seq__23652 = G__23672;
chunk__23653 = G__23673;
count__23654 = G__23674;
i__23655 = G__23675;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq23647){
var G__23648 = cljs.core.first.call(null,seq23647);
var seq23647__$1 = cljs.core.next.call(null,seq23647);
var G__23649 = cljs.core.first.call(null,seq23647__$1);
var seq23647__$2 = cljs.core.next.call(null,seq23647__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23648,G__23649,seq23647__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args23676 = [];
var len__21638__auto___23679 = arguments.length;
var i__21639__auto___23680 = (0);
while(true){
if((i__21639__auto___23680 < len__21638__auto___23679)){
args23676.push((arguments[i__21639__auto___23680]));

var G__23681 = (i__21639__auto___23680 + (1));
i__21639__auto___23680 = G__23681;
continue;
} else {
}
break;
}

var G__23678 = args23676.length;
switch (G__23678) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23676.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___23683 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___23683)){
var class_list_23684 = temp__4655__auto___23683;
class_list_23684.toggle(c__$1);
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
var args23685 = [];
var len__21638__auto___23688 = arguments.length;
var i__21639__auto___23689 = (0);
while(true){
if((i__21639__auto___23689 < len__21638__auto___23688)){
args23685.push((arguments[i__21639__auto___23689]));

var G__23690 = (i__21639__auto___23689 + (1));
i__21639__auto___23689 = G__23690;
continue;
} else {
}
break;
}

var G__23687 = args23685.length;
switch (G__23687) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23685.length)].join('')));

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
var args23692 = [];
var len__21638__auto___23695 = arguments.length;
var i__21639__auto___23696 = (0);
while(true){
if((i__21639__auto___23696 < len__21638__auto___23695)){
args23692.push((arguments[i__21639__auto___23696]));

var G__23697 = (i__21639__auto___23696 + (1));
i__21639__auto___23696 = G__23697;
continue;
} else {
}
break;
}

var G__23694 = args23692.length;
switch (G__23694) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23692.length)].join('')));

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
var args23699 = [];
var len__21638__auto___23710 = arguments.length;
var i__21639__auto___23711 = (0);
while(true){
if((i__21639__auto___23711 < len__21638__auto___23710)){
args23699.push((arguments[i__21639__auto___23711]));

var G__23712 = (i__21639__auto___23711 + (1));
i__21639__auto___23711 = G__23712;
continue;
} else {
}
break;
}

var G__23704 = args23699.length;
switch (G__23704) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21657__auto__ = (new cljs.core.IndexedSeq(args23699.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21657__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__23705 = parent;
G__23705.appendChild(child);

return G__23705;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__23706_23714 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__23707_23715 = null;
var count__23708_23716 = (0);
var i__23709_23717 = (0);
while(true){
if((i__23709_23717 < count__23708_23716)){
var c_23718 = cljs.core._nth.call(null,chunk__23707_23715,i__23709_23717);
dommy.core.append_BANG_.call(null,parent,c_23718);

var G__23719 = seq__23706_23714;
var G__23720 = chunk__23707_23715;
var G__23721 = count__23708_23716;
var G__23722 = (i__23709_23717 + (1));
seq__23706_23714 = G__23719;
chunk__23707_23715 = G__23720;
count__23708_23716 = G__23721;
i__23709_23717 = G__23722;
continue;
} else {
var temp__4657__auto___23723 = cljs.core.seq.call(null,seq__23706_23714);
if(temp__4657__auto___23723){
var seq__23706_23724__$1 = temp__4657__auto___23723;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23706_23724__$1)){
var c__21344__auto___23725 = cljs.core.chunk_first.call(null,seq__23706_23724__$1);
var G__23726 = cljs.core.chunk_rest.call(null,seq__23706_23724__$1);
var G__23727 = c__21344__auto___23725;
var G__23728 = cljs.core.count.call(null,c__21344__auto___23725);
var G__23729 = (0);
seq__23706_23714 = G__23726;
chunk__23707_23715 = G__23727;
count__23708_23716 = G__23728;
i__23709_23717 = G__23729;
continue;
} else {
var c_23730 = cljs.core.first.call(null,seq__23706_23724__$1);
dommy.core.append_BANG_.call(null,parent,c_23730);

var G__23731 = cljs.core.next.call(null,seq__23706_23724__$1);
var G__23732 = null;
var G__23733 = (0);
var G__23734 = (0);
seq__23706_23714 = G__23731;
chunk__23707_23715 = G__23732;
count__23708_23716 = G__23733;
i__23709_23717 = G__23734;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq23700){
var G__23701 = cljs.core.first.call(null,seq23700);
var seq23700__$1 = cljs.core.next.call(null,seq23700);
var G__23702 = cljs.core.first.call(null,seq23700__$1);
var seq23700__$2 = cljs.core.next.call(null,seq23700__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23701,G__23702,seq23700__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args23735 = [];
var len__21638__auto___23746 = arguments.length;
var i__21639__auto___23747 = (0);
while(true){
if((i__21639__auto___23747 < len__21638__auto___23746)){
args23735.push((arguments[i__21639__auto___23747]));

var G__23748 = (i__21639__auto___23747 + (1));
i__21639__auto___23747 = G__23748;
continue;
} else {
}
break;
}

var G__23740 = args23735.length;
switch (G__23740) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21657__auto__ = (new cljs.core.IndexedSeq(args23735.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21657__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__23741 = parent;
G__23741.insertBefore(child,parent.firstChild);

return G__23741;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__23742_23750 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__23743_23751 = null;
var count__23744_23752 = (0);
var i__23745_23753 = (0);
while(true){
if((i__23745_23753 < count__23744_23752)){
var c_23754 = cljs.core._nth.call(null,chunk__23743_23751,i__23745_23753);
dommy.core.prepend_BANG_.call(null,parent,c_23754);

var G__23755 = seq__23742_23750;
var G__23756 = chunk__23743_23751;
var G__23757 = count__23744_23752;
var G__23758 = (i__23745_23753 + (1));
seq__23742_23750 = G__23755;
chunk__23743_23751 = G__23756;
count__23744_23752 = G__23757;
i__23745_23753 = G__23758;
continue;
} else {
var temp__4657__auto___23759 = cljs.core.seq.call(null,seq__23742_23750);
if(temp__4657__auto___23759){
var seq__23742_23760__$1 = temp__4657__auto___23759;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23742_23760__$1)){
var c__21344__auto___23761 = cljs.core.chunk_first.call(null,seq__23742_23760__$1);
var G__23762 = cljs.core.chunk_rest.call(null,seq__23742_23760__$1);
var G__23763 = c__21344__auto___23761;
var G__23764 = cljs.core.count.call(null,c__21344__auto___23761);
var G__23765 = (0);
seq__23742_23750 = G__23762;
chunk__23743_23751 = G__23763;
count__23744_23752 = G__23764;
i__23745_23753 = G__23765;
continue;
} else {
var c_23766 = cljs.core.first.call(null,seq__23742_23760__$1);
dommy.core.prepend_BANG_.call(null,parent,c_23766);

var G__23767 = cljs.core.next.call(null,seq__23742_23760__$1);
var G__23768 = null;
var G__23769 = (0);
var G__23770 = (0);
seq__23742_23750 = G__23767;
chunk__23743_23751 = G__23768;
count__23744_23752 = G__23769;
i__23745_23753 = G__23770;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq23736){
var G__23737 = cljs.core.first.call(null,seq23736);
var seq23736__$1 = cljs.core.next.call(null,seq23736);
var G__23738 = cljs.core.first.call(null,seq23736__$1);
var seq23736__$2 = cljs.core.next.call(null,seq23736__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23737,G__23738,seq23736__$2);
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
var temp__4655__auto___23771 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___23771)){
var next_23772 = temp__4655__auto___23771;
dommy.core.insert_before_BANG_.call(null,elem,next_23772);
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
var args23773 = [];
var len__21638__auto___23777 = arguments.length;
var i__21639__auto___23778 = (0);
while(true){
if((i__21639__auto___23778 < len__21638__auto___23777)){
args23773.push((arguments[i__21639__auto___23778]));

var G__23779 = (i__21639__auto___23778 + (1));
i__21639__auto___23778 = G__23779;
continue;
} else {
}
break;
}

var G__23775 = args23773.length;
switch (G__23775) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23773.length)].join('')));

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
var G__23776 = p;
G__23776.removeChild(elem);

return G__23776;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__23781){
var vec__23782 = p__23781;
var special_mouse_event = cljs.core.nth.call(null,vec__23782,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__23782,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__23782,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__23782,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__20530__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__20530__auto__)){
return or__20530__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__20518__auto__ = related_target;
if(cljs.core.truth_(and__20518__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__20518__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__23782,special_mouse_event,real_mouse_event))
});})(vec__23782,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__20518__auto__ = selected_target;
if(cljs.core.truth_(and__20518__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__20518__auto__;
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
var or__20530__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__20530__auto__)){
return or__20530__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__21645__auto__ = [];
var len__21638__auto___23788 = arguments.length;
var i__21639__auto___23789 = (0);
while(true){
if((i__21639__auto___23789 < len__21638__auto___23788)){
args__21645__auto__.push((arguments[i__21639__auto___23789]));

var G__23790 = (i__21639__auto___23789 + (1));
i__21639__auto___23789 = G__23790;
continue;
} else {
}
break;
}

var argseq__21646__auto__ = ((((2) < args__21645__auto__.length))?(new cljs.core.IndexedSeq(args__21645__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21646__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq23785){
var G__23786 = cljs.core.first.call(null,seq23785);
var seq23785__$1 = cljs.core.next.call(null,seq23785);
var G__23787 = cljs.core.first.call(null,seq23785__$1);
var seq23785__$2 = cljs.core.next.call(null,seq23785__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23786,G__23787,seq23785__$2);
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
var args__21645__auto__ = [];
var len__21638__auto___23830 = arguments.length;
var i__21639__auto___23831 = (0);
while(true){
if((i__21639__auto___23831 < len__21638__auto___23830)){
args__21645__auto__.push((arguments[i__21639__auto___23831]));

var G__23832 = (i__21639__auto___23831 + (1));
i__21639__auto___23831 = G__23832;
continue;
} else {
}
break;
}

var argseq__21646__auto__ = ((((1) < args__21645__auto__.length))?(new cljs.core.IndexedSeq(args__21645__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21646__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__23793_23833 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_23834 = cljs.core.nth.call(null,vec__23793_23833,(0),null);
var selector_23835 = cljs.core.nth.call(null,vec__23793_23833,(1),null);
var seq__23796_23836 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__23803_23837 = null;
var count__23804_23838 = (0);
var i__23805_23839 = (0);
while(true){
if((i__23805_23839 < count__23804_23838)){
var vec__23812_23840 = cljs.core._nth.call(null,chunk__23803_23837,i__23805_23839);
var orig_type_23841 = cljs.core.nth.call(null,vec__23812_23840,(0),null);
var f_23842 = cljs.core.nth.call(null,vec__23812_23840,(1),null);
var seq__23806_23843 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_23841,cljs.core.PersistentArrayMap.fromArray([orig_type_23841,cljs.core.identity], true, false)));
var chunk__23808_23844 = null;
var count__23809_23845 = (0);
var i__23810_23846 = (0);
while(true){
if((i__23810_23846 < count__23809_23845)){
var vec__23815_23847 = cljs.core._nth.call(null,chunk__23808_23844,i__23810_23846);
var actual_type_23848 = cljs.core.nth.call(null,vec__23815_23847,(0),null);
var factory_23849 = cljs.core.nth.call(null,vec__23815_23847,(1),null);
var canonical_f_23850 = (cljs.core.truth_(selector_23835)?cljs.core.partial.call(null,dommy.core.live_listener,elem_23834,selector_23835):cljs.core.identity).call(null,factory_23849.call(null,f_23842));
dommy.core.update_event_listeners_BANG_.call(null,elem_23834,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23835,actual_type_23848,f_23842], null),canonical_f_23850);

if(cljs.core.truth_(elem_23834.addEventListener)){
elem_23834.addEventListener(cljs.core.name.call(null,actual_type_23848),canonical_f_23850);
} else {
elem_23834.attachEvent(cljs.core.name.call(null,actual_type_23848),canonical_f_23850);
}

var G__23851 = seq__23806_23843;
var G__23852 = chunk__23808_23844;
var G__23853 = count__23809_23845;
var G__23854 = (i__23810_23846 + (1));
seq__23806_23843 = G__23851;
chunk__23808_23844 = G__23852;
count__23809_23845 = G__23853;
i__23810_23846 = G__23854;
continue;
} else {
var temp__4657__auto___23855 = cljs.core.seq.call(null,seq__23806_23843);
if(temp__4657__auto___23855){
var seq__23806_23856__$1 = temp__4657__auto___23855;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23806_23856__$1)){
var c__21344__auto___23857 = cljs.core.chunk_first.call(null,seq__23806_23856__$1);
var G__23858 = cljs.core.chunk_rest.call(null,seq__23806_23856__$1);
var G__23859 = c__21344__auto___23857;
var G__23860 = cljs.core.count.call(null,c__21344__auto___23857);
var G__23861 = (0);
seq__23806_23843 = G__23858;
chunk__23808_23844 = G__23859;
count__23809_23845 = G__23860;
i__23810_23846 = G__23861;
continue;
} else {
var vec__23818_23862 = cljs.core.first.call(null,seq__23806_23856__$1);
var actual_type_23863 = cljs.core.nth.call(null,vec__23818_23862,(0),null);
var factory_23864 = cljs.core.nth.call(null,vec__23818_23862,(1),null);
var canonical_f_23865 = (cljs.core.truth_(selector_23835)?cljs.core.partial.call(null,dommy.core.live_listener,elem_23834,selector_23835):cljs.core.identity).call(null,factory_23864.call(null,f_23842));
dommy.core.update_event_listeners_BANG_.call(null,elem_23834,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23835,actual_type_23863,f_23842], null),canonical_f_23865);

if(cljs.core.truth_(elem_23834.addEventListener)){
elem_23834.addEventListener(cljs.core.name.call(null,actual_type_23863),canonical_f_23865);
} else {
elem_23834.attachEvent(cljs.core.name.call(null,actual_type_23863),canonical_f_23865);
}

var G__23866 = cljs.core.next.call(null,seq__23806_23856__$1);
var G__23867 = null;
var G__23868 = (0);
var G__23869 = (0);
seq__23806_23843 = G__23866;
chunk__23808_23844 = G__23867;
count__23809_23845 = G__23868;
i__23810_23846 = G__23869;
continue;
}
} else {
}
}
break;
}

var G__23870 = seq__23796_23836;
var G__23871 = chunk__23803_23837;
var G__23872 = count__23804_23838;
var G__23873 = (i__23805_23839 + (1));
seq__23796_23836 = G__23870;
chunk__23803_23837 = G__23871;
count__23804_23838 = G__23872;
i__23805_23839 = G__23873;
continue;
} else {
var temp__4657__auto___23874 = cljs.core.seq.call(null,seq__23796_23836);
if(temp__4657__auto___23874){
var seq__23796_23875__$1 = temp__4657__auto___23874;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23796_23875__$1)){
var c__21344__auto___23876 = cljs.core.chunk_first.call(null,seq__23796_23875__$1);
var G__23877 = cljs.core.chunk_rest.call(null,seq__23796_23875__$1);
var G__23878 = c__21344__auto___23876;
var G__23879 = cljs.core.count.call(null,c__21344__auto___23876);
var G__23880 = (0);
seq__23796_23836 = G__23877;
chunk__23803_23837 = G__23878;
count__23804_23838 = G__23879;
i__23805_23839 = G__23880;
continue;
} else {
var vec__23821_23881 = cljs.core.first.call(null,seq__23796_23875__$1);
var orig_type_23882 = cljs.core.nth.call(null,vec__23821_23881,(0),null);
var f_23883 = cljs.core.nth.call(null,vec__23821_23881,(1),null);
var seq__23797_23884 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_23882,cljs.core.PersistentArrayMap.fromArray([orig_type_23882,cljs.core.identity], true, false)));
var chunk__23799_23885 = null;
var count__23800_23886 = (0);
var i__23801_23887 = (0);
while(true){
if((i__23801_23887 < count__23800_23886)){
var vec__23824_23888 = cljs.core._nth.call(null,chunk__23799_23885,i__23801_23887);
var actual_type_23889 = cljs.core.nth.call(null,vec__23824_23888,(0),null);
var factory_23890 = cljs.core.nth.call(null,vec__23824_23888,(1),null);
var canonical_f_23891 = (cljs.core.truth_(selector_23835)?cljs.core.partial.call(null,dommy.core.live_listener,elem_23834,selector_23835):cljs.core.identity).call(null,factory_23890.call(null,f_23883));
dommy.core.update_event_listeners_BANG_.call(null,elem_23834,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23835,actual_type_23889,f_23883], null),canonical_f_23891);

if(cljs.core.truth_(elem_23834.addEventListener)){
elem_23834.addEventListener(cljs.core.name.call(null,actual_type_23889),canonical_f_23891);
} else {
elem_23834.attachEvent(cljs.core.name.call(null,actual_type_23889),canonical_f_23891);
}

var G__23892 = seq__23797_23884;
var G__23893 = chunk__23799_23885;
var G__23894 = count__23800_23886;
var G__23895 = (i__23801_23887 + (1));
seq__23797_23884 = G__23892;
chunk__23799_23885 = G__23893;
count__23800_23886 = G__23894;
i__23801_23887 = G__23895;
continue;
} else {
var temp__4657__auto___23896__$1 = cljs.core.seq.call(null,seq__23797_23884);
if(temp__4657__auto___23896__$1){
var seq__23797_23897__$1 = temp__4657__auto___23896__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23797_23897__$1)){
var c__21344__auto___23898 = cljs.core.chunk_first.call(null,seq__23797_23897__$1);
var G__23899 = cljs.core.chunk_rest.call(null,seq__23797_23897__$1);
var G__23900 = c__21344__auto___23898;
var G__23901 = cljs.core.count.call(null,c__21344__auto___23898);
var G__23902 = (0);
seq__23797_23884 = G__23899;
chunk__23799_23885 = G__23900;
count__23800_23886 = G__23901;
i__23801_23887 = G__23902;
continue;
} else {
var vec__23827_23903 = cljs.core.first.call(null,seq__23797_23897__$1);
var actual_type_23904 = cljs.core.nth.call(null,vec__23827_23903,(0),null);
var factory_23905 = cljs.core.nth.call(null,vec__23827_23903,(1),null);
var canonical_f_23906 = (cljs.core.truth_(selector_23835)?cljs.core.partial.call(null,dommy.core.live_listener,elem_23834,selector_23835):cljs.core.identity).call(null,factory_23905.call(null,f_23883));
dommy.core.update_event_listeners_BANG_.call(null,elem_23834,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23835,actual_type_23904,f_23883], null),canonical_f_23906);

if(cljs.core.truth_(elem_23834.addEventListener)){
elem_23834.addEventListener(cljs.core.name.call(null,actual_type_23904),canonical_f_23906);
} else {
elem_23834.attachEvent(cljs.core.name.call(null,actual_type_23904),canonical_f_23906);
}

var G__23907 = cljs.core.next.call(null,seq__23797_23897__$1);
var G__23908 = null;
var G__23909 = (0);
var G__23910 = (0);
seq__23797_23884 = G__23907;
chunk__23799_23885 = G__23908;
count__23800_23886 = G__23909;
i__23801_23887 = G__23910;
continue;
}
} else {
}
}
break;
}

var G__23911 = cljs.core.next.call(null,seq__23796_23875__$1);
var G__23912 = null;
var G__23913 = (0);
var G__23914 = (0);
seq__23796_23836 = G__23911;
chunk__23803_23837 = G__23912;
count__23804_23838 = G__23913;
i__23805_23839 = G__23914;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq23791){
var G__23792 = cljs.core.first.call(null,seq23791);
var seq23791__$1 = cljs.core.next.call(null,seq23791);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23792,seq23791__$1);
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
var args__21645__auto__ = [];
var len__21638__auto___23954 = arguments.length;
var i__21639__auto___23955 = (0);
while(true){
if((i__21639__auto___23955 < len__21638__auto___23954)){
args__21645__auto__.push((arguments[i__21639__auto___23955]));

var G__23956 = (i__21639__auto___23955 + (1));
i__21639__auto___23955 = G__23956;
continue;
} else {
}
break;
}

var argseq__21646__auto__ = ((((1) < args__21645__auto__.length))?(new cljs.core.IndexedSeq(args__21645__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21646__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__23917_23957 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_23958 = cljs.core.nth.call(null,vec__23917_23957,(0),null);
var selector_23959 = cljs.core.nth.call(null,vec__23917_23957,(1),null);
var seq__23920_23960 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__23927_23961 = null;
var count__23928_23962 = (0);
var i__23929_23963 = (0);
while(true){
if((i__23929_23963 < count__23928_23962)){
var vec__23936_23964 = cljs.core._nth.call(null,chunk__23927_23961,i__23929_23963);
var orig_type_23965 = cljs.core.nth.call(null,vec__23936_23964,(0),null);
var f_23966 = cljs.core.nth.call(null,vec__23936_23964,(1),null);
var seq__23930_23967 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_23965,cljs.core.PersistentArrayMap.fromArray([orig_type_23965,cljs.core.identity], true, false)));
var chunk__23932_23968 = null;
var count__23933_23969 = (0);
var i__23934_23970 = (0);
while(true){
if((i__23934_23970 < count__23933_23969)){
var vec__23939_23971 = cljs.core._nth.call(null,chunk__23932_23968,i__23934_23970);
var actual_type_23972 = cljs.core.nth.call(null,vec__23939_23971,(0),null);
var __23973 = cljs.core.nth.call(null,vec__23939_23971,(1),null);
var keys_23974 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23959,actual_type_23972,f_23966], null);
var canonical_f_23975 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_23958),keys_23974);
dommy.core.update_event_listeners_BANG_.call(null,elem_23958,dommy.utils.dissoc_in,keys_23974);

if(cljs.core.truth_(elem_23958.removeEventListener)){
elem_23958.removeEventListener(cljs.core.name.call(null,actual_type_23972),canonical_f_23975);
} else {
elem_23958.detachEvent(cljs.core.name.call(null,actual_type_23972),canonical_f_23975);
}

var G__23976 = seq__23930_23967;
var G__23977 = chunk__23932_23968;
var G__23978 = count__23933_23969;
var G__23979 = (i__23934_23970 + (1));
seq__23930_23967 = G__23976;
chunk__23932_23968 = G__23977;
count__23933_23969 = G__23978;
i__23934_23970 = G__23979;
continue;
} else {
var temp__4657__auto___23980 = cljs.core.seq.call(null,seq__23930_23967);
if(temp__4657__auto___23980){
var seq__23930_23981__$1 = temp__4657__auto___23980;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23930_23981__$1)){
var c__21344__auto___23982 = cljs.core.chunk_first.call(null,seq__23930_23981__$1);
var G__23983 = cljs.core.chunk_rest.call(null,seq__23930_23981__$1);
var G__23984 = c__21344__auto___23982;
var G__23985 = cljs.core.count.call(null,c__21344__auto___23982);
var G__23986 = (0);
seq__23930_23967 = G__23983;
chunk__23932_23968 = G__23984;
count__23933_23969 = G__23985;
i__23934_23970 = G__23986;
continue;
} else {
var vec__23942_23987 = cljs.core.first.call(null,seq__23930_23981__$1);
var actual_type_23988 = cljs.core.nth.call(null,vec__23942_23987,(0),null);
var __23989 = cljs.core.nth.call(null,vec__23942_23987,(1),null);
var keys_23990 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23959,actual_type_23988,f_23966], null);
var canonical_f_23991 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_23958),keys_23990);
dommy.core.update_event_listeners_BANG_.call(null,elem_23958,dommy.utils.dissoc_in,keys_23990);

if(cljs.core.truth_(elem_23958.removeEventListener)){
elem_23958.removeEventListener(cljs.core.name.call(null,actual_type_23988),canonical_f_23991);
} else {
elem_23958.detachEvent(cljs.core.name.call(null,actual_type_23988),canonical_f_23991);
}

var G__23992 = cljs.core.next.call(null,seq__23930_23981__$1);
var G__23993 = null;
var G__23994 = (0);
var G__23995 = (0);
seq__23930_23967 = G__23992;
chunk__23932_23968 = G__23993;
count__23933_23969 = G__23994;
i__23934_23970 = G__23995;
continue;
}
} else {
}
}
break;
}

var G__23996 = seq__23920_23960;
var G__23997 = chunk__23927_23961;
var G__23998 = count__23928_23962;
var G__23999 = (i__23929_23963 + (1));
seq__23920_23960 = G__23996;
chunk__23927_23961 = G__23997;
count__23928_23962 = G__23998;
i__23929_23963 = G__23999;
continue;
} else {
var temp__4657__auto___24000 = cljs.core.seq.call(null,seq__23920_23960);
if(temp__4657__auto___24000){
var seq__23920_24001__$1 = temp__4657__auto___24000;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23920_24001__$1)){
var c__21344__auto___24002 = cljs.core.chunk_first.call(null,seq__23920_24001__$1);
var G__24003 = cljs.core.chunk_rest.call(null,seq__23920_24001__$1);
var G__24004 = c__21344__auto___24002;
var G__24005 = cljs.core.count.call(null,c__21344__auto___24002);
var G__24006 = (0);
seq__23920_23960 = G__24003;
chunk__23927_23961 = G__24004;
count__23928_23962 = G__24005;
i__23929_23963 = G__24006;
continue;
} else {
var vec__23945_24007 = cljs.core.first.call(null,seq__23920_24001__$1);
var orig_type_24008 = cljs.core.nth.call(null,vec__23945_24007,(0),null);
var f_24009 = cljs.core.nth.call(null,vec__23945_24007,(1),null);
var seq__23921_24010 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_24008,cljs.core.PersistentArrayMap.fromArray([orig_type_24008,cljs.core.identity], true, false)));
var chunk__23923_24011 = null;
var count__23924_24012 = (0);
var i__23925_24013 = (0);
while(true){
if((i__23925_24013 < count__23924_24012)){
var vec__23948_24014 = cljs.core._nth.call(null,chunk__23923_24011,i__23925_24013);
var actual_type_24015 = cljs.core.nth.call(null,vec__23948_24014,(0),null);
var __24016 = cljs.core.nth.call(null,vec__23948_24014,(1),null);
var keys_24017 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23959,actual_type_24015,f_24009], null);
var canonical_f_24018 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_23958),keys_24017);
dommy.core.update_event_listeners_BANG_.call(null,elem_23958,dommy.utils.dissoc_in,keys_24017);

if(cljs.core.truth_(elem_23958.removeEventListener)){
elem_23958.removeEventListener(cljs.core.name.call(null,actual_type_24015),canonical_f_24018);
} else {
elem_23958.detachEvent(cljs.core.name.call(null,actual_type_24015),canonical_f_24018);
}

var G__24019 = seq__23921_24010;
var G__24020 = chunk__23923_24011;
var G__24021 = count__23924_24012;
var G__24022 = (i__23925_24013 + (1));
seq__23921_24010 = G__24019;
chunk__23923_24011 = G__24020;
count__23924_24012 = G__24021;
i__23925_24013 = G__24022;
continue;
} else {
var temp__4657__auto___24023__$1 = cljs.core.seq.call(null,seq__23921_24010);
if(temp__4657__auto___24023__$1){
var seq__23921_24024__$1 = temp__4657__auto___24023__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23921_24024__$1)){
var c__21344__auto___24025 = cljs.core.chunk_first.call(null,seq__23921_24024__$1);
var G__24026 = cljs.core.chunk_rest.call(null,seq__23921_24024__$1);
var G__24027 = c__21344__auto___24025;
var G__24028 = cljs.core.count.call(null,c__21344__auto___24025);
var G__24029 = (0);
seq__23921_24010 = G__24026;
chunk__23923_24011 = G__24027;
count__23924_24012 = G__24028;
i__23925_24013 = G__24029;
continue;
} else {
var vec__23951_24030 = cljs.core.first.call(null,seq__23921_24024__$1);
var actual_type_24031 = cljs.core.nth.call(null,vec__23951_24030,(0),null);
var __24032 = cljs.core.nth.call(null,vec__23951_24030,(1),null);
var keys_24033 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23959,actual_type_24031,f_24009], null);
var canonical_f_24034 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_23958),keys_24033);
dommy.core.update_event_listeners_BANG_.call(null,elem_23958,dommy.utils.dissoc_in,keys_24033);

if(cljs.core.truth_(elem_23958.removeEventListener)){
elem_23958.removeEventListener(cljs.core.name.call(null,actual_type_24031),canonical_f_24034);
} else {
elem_23958.detachEvent(cljs.core.name.call(null,actual_type_24031),canonical_f_24034);
}

var G__24035 = cljs.core.next.call(null,seq__23921_24024__$1);
var G__24036 = null;
var G__24037 = (0);
var G__24038 = (0);
seq__23921_24010 = G__24035;
chunk__23923_24011 = G__24036;
count__23924_24012 = G__24037;
i__23925_24013 = G__24038;
continue;
}
} else {
}
}
break;
}

var G__24039 = cljs.core.next.call(null,seq__23920_24001__$1);
var G__24040 = null;
var G__24041 = (0);
var G__24042 = (0);
seq__23920_23960 = G__24039;
chunk__23927_23961 = G__24040;
count__23928_23962 = G__24041;
i__23929_23963 = G__24042;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq23915){
var G__23916 = cljs.core.first.call(null,seq23915);
var seq23915__$1 = cljs.core.next.call(null,seq23915);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23916,seq23915__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__21645__auto__ = [];
var len__21638__auto___24058 = arguments.length;
var i__21639__auto___24059 = (0);
while(true){
if((i__21639__auto___24059 < len__21638__auto___24058)){
args__21645__auto__.push((arguments[i__21639__auto___24059]));

var G__24060 = (i__21639__auto___24059 + (1));
i__21639__auto___24059 = G__24060;
continue;
} else {
}
break;
}

var argseq__21646__auto__ = ((((1) < args__21645__auto__.length))?(new cljs.core.IndexedSeq(args__21645__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21646__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__24045_24061 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_24062 = cljs.core.nth.call(null,vec__24045_24061,(0),null);
var selector_24063 = cljs.core.nth.call(null,vec__24045_24061,(1),null);
var seq__24048_24064 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__24049_24065 = null;
var count__24050_24066 = (0);
var i__24051_24067 = (0);
while(true){
if((i__24051_24067 < count__24050_24066)){
var vec__24052_24068 = cljs.core._nth.call(null,chunk__24049_24065,i__24051_24067);
var type_24069 = cljs.core.nth.call(null,vec__24052_24068,(0),null);
var f_24070 = cljs.core.nth.call(null,vec__24052_24068,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_24069,((function (seq__24048_24064,chunk__24049_24065,count__24050_24066,i__24051_24067,vec__24052_24068,type_24069,f_24070,vec__24045_24061,elem_24062,selector_24063){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_24069,dommy$core$this_fn);

return f_24070.call(null,e);
});})(seq__24048_24064,chunk__24049_24065,count__24050_24066,i__24051_24067,vec__24052_24068,type_24069,f_24070,vec__24045_24061,elem_24062,selector_24063))
);

var G__24071 = seq__24048_24064;
var G__24072 = chunk__24049_24065;
var G__24073 = count__24050_24066;
var G__24074 = (i__24051_24067 + (1));
seq__24048_24064 = G__24071;
chunk__24049_24065 = G__24072;
count__24050_24066 = G__24073;
i__24051_24067 = G__24074;
continue;
} else {
var temp__4657__auto___24075 = cljs.core.seq.call(null,seq__24048_24064);
if(temp__4657__auto___24075){
var seq__24048_24076__$1 = temp__4657__auto___24075;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24048_24076__$1)){
var c__21344__auto___24077 = cljs.core.chunk_first.call(null,seq__24048_24076__$1);
var G__24078 = cljs.core.chunk_rest.call(null,seq__24048_24076__$1);
var G__24079 = c__21344__auto___24077;
var G__24080 = cljs.core.count.call(null,c__21344__auto___24077);
var G__24081 = (0);
seq__24048_24064 = G__24078;
chunk__24049_24065 = G__24079;
count__24050_24066 = G__24080;
i__24051_24067 = G__24081;
continue;
} else {
var vec__24055_24082 = cljs.core.first.call(null,seq__24048_24076__$1);
var type_24083 = cljs.core.nth.call(null,vec__24055_24082,(0),null);
var f_24084 = cljs.core.nth.call(null,vec__24055_24082,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_24083,((function (seq__24048_24064,chunk__24049_24065,count__24050_24066,i__24051_24067,vec__24055_24082,type_24083,f_24084,seq__24048_24076__$1,temp__4657__auto___24075,vec__24045_24061,elem_24062,selector_24063){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_24083,dommy$core$this_fn);

return f_24084.call(null,e);
});})(seq__24048_24064,chunk__24049_24065,count__24050_24066,i__24051_24067,vec__24055_24082,type_24083,f_24084,seq__24048_24076__$1,temp__4657__auto___24075,vec__24045_24061,elem_24062,selector_24063))
);

var G__24085 = cljs.core.next.call(null,seq__24048_24076__$1);
var G__24086 = null;
var G__24087 = (0);
var G__24088 = (0);
seq__24048_24064 = G__24085;
chunk__24049_24065 = G__24086;
count__24050_24066 = G__24087;
i__24051_24067 = G__24088;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq24043){
var G__24044 = cljs.core.first.call(null,seq24043);
var seq24043__$1 = cljs.core.next.call(null,seq24043);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24044,seq24043__$1);
});


//# sourceMappingURL=core.js.map?rel=1482038775515