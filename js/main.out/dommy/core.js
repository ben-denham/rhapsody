// Compiled by ClojureScript 1.10.773 {}
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
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__4126__auto__ = elem.textContent;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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
var G__1335 = arguments.length;
switch (G__1335) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
}));

(dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
}));

(dommy.core.style.cljs$lang$maxFixedArity = 2);

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
var G__1338 = arguments.length;
switch (G__1338) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
}));

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
}));

(dommy.core.matches_pred.cljs$lang$maxFixedArity = 2);

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__1342 = arguments.length;
switch (G__1342) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__1340_SHARP_){
return (!((p1__1340_SHARP_ === base)));
}),dommy.core.ancestors.call(null,elem))));
}));

(dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
}));

(dommy.core.closest.cljs$lang$maxFixedArity = 3);

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
if((!((void 0 === elem.textContent)))){
(elem.textContent = text);
} else {
(elem.innerText = text);
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
(elem.innerHTML = html);

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
(elem.value = value);

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return (elem.className = c);
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___1362 = arguments.length;
var i__4737__auto___1363 = (0);
while(true){
if((i__4737__auto___1363 < len__4736__auto___1362)){
args__4742__auto__.push((arguments[i__4737__auto___1363]));

var G__1364 = (i__4737__auto___1363 + (1));
i__4737__auto___1363 = G__1364;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__1346_1365 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__1347_1366 = null;
var count__1348_1367 = (0);
var i__1349_1368 = (0);
while(true){
if((i__1349_1368 < count__1348_1367)){
var vec__1356_1369 = cljs.core._nth.call(null,chunk__1347_1366,i__1349_1368);
var k_1370 = cljs.core.nth.call(null,vec__1356_1369,(0),null);
var v_1371 = cljs.core.nth.call(null,vec__1356_1369,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_1370),v_1371);


var G__1372 = seq__1346_1365;
var G__1373 = chunk__1347_1366;
var G__1374 = count__1348_1367;
var G__1375 = (i__1349_1368 + (1));
seq__1346_1365 = G__1372;
chunk__1347_1366 = G__1373;
count__1348_1367 = G__1374;
i__1349_1368 = G__1375;
continue;
} else {
var temp__4657__auto___1376 = cljs.core.seq.call(null,seq__1346_1365);
if(temp__4657__auto___1376){
var seq__1346_1377__$1 = temp__4657__auto___1376;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1346_1377__$1)){
var c__4556__auto___1378 = cljs.core.chunk_first.call(null,seq__1346_1377__$1);
var G__1379 = cljs.core.chunk_rest.call(null,seq__1346_1377__$1);
var G__1380 = c__4556__auto___1378;
var G__1381 = cljs.core.count.call(null,c__4556__auto___1378);
var G__1382 = (0);
seq__1346_1365 = G__1379;
chunk__1347_1366 = G__1380;
count__1348_1367 = G__1381;
i__1349_1368 = G__1382;
continue;
} else {
var vec__1359_1383 = cljs.core.first.call(null,seq__1346_1377__$1);
var k_1384 = cljs.core.nth.call(null,vec__1359_1383,(0),null);
var v_1385 = cljs.core.nth.call(null,vec__1359_1383,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_1384),v_1385);


var G__1386 = cljs.core.next.call(null,seq__1346_1377__$1);
var G__1387 = null;
var G__1388 = (0);
var G__1389 = (0);
seq__1346_1365 = G__1386;
chunk__1347_1366 = G__1387;
count__1348_1367 = G__1388;
i__1349_1368 = G__1389;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq1344){
var G__1345 = cljs.core.first.call(null,seq1344);
var seq1344__$1 = cljs.core.next.call(null,seq1344);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1345,seq1344__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___1396 = arguments.length;
var i__4737__auto___1397 = (0);
while(true){
if((i__4737__auto___1397 < len__4736__auto___1396)){
args__4742__auto__.push((arguments[i__4737__auto___1397]));

var G__1398 = (i__4737__auto___1397 + (1));
i__4737__auto___1397 = G__1398;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__1392_1399 = cljs.core.seq.call(null,keywords);
var chunk__1393_1400 = null;
var count__1394_1401 = (0);
var i__1395_1402 = (0);
while(true){
if((i__1395_1402 < count__1394_1401)){
var kw_1403 = cljs.core._nth.call(null,chunk__1393_1400,i__1395_1402);
style.removeProperty(dommy.utils.as_str.call(null,kw_1403));


var G__1404 = seq__1392_1399;
var G__1405 = chunk__1393_1400;
var G__1406 = count__1394_1401;
var G__1407 = (i__1395_1402 + (1));
seq__1392_1399 = G__1404;
chunk__1393_1400 = G__1405;
count__1394_1401 = G__1406;
i__1395_1402 = G__1407;
continue;
} else {
var temp__4657__auto___1408 = cljs.core.seq.call(null,seq__1392_1399);
if(temp__4657__auto___1408){
var seq__1392_1409__$1 = temp__4657__auto___1408;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1392_1409__$1)){
var c__4556__auto___1410 = cljs.core.chunk_first.call(null,seq__1392_1409__$1);
var G__1411 = cljs.core.chunk_rest.call(null,seq__1392_1409__$1);
var G__1412 = c__4556__auto___1410;
var G__1413 = cljs.core.count.call(null,c__4556__auto___1410);
var G__1414 = (0);
seq__1392_1399 = G__1411;
chunk__1393_1400 = G__1412;
count__1394_1401 = G__1413;
i__1395_1402 = G__1414;
continue;
} else {
var kw_1415 = cljs.core.first.call(null,seq__1392_1409__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_1415));


var G__1416 = cljs.core.next.call(null,seq__1392_1409__$1);
var G__1417 = null;
var G__1418 = (0);
var G__1419 = (0);
seq__1392_1399 = G__1416;
chunk__1393_1400 = G__1417;
count__1394_1401 = G__1418;
i__1395_1402 = G__1419;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq1390){
var G__1391 = cljs.core.first.call(null,seq1390);
var seq1390__$1 = cljs.core.next.call(null,seq1390);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1391,seq1390__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___1438 = arguments.length;
var i__4737__auto___1439 = (0);
while(true){
if((i__4737__auto___1439 < len__4736__auto___1438)){
args__4742__auto__.push((arguments[i__4737__auto___1439]));

var G__1440 = (i__4737__auto___1439 + (1));
i__4737__auto___1439 = G__1440;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__1422_1441 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__1423_1442 = null;
var count__1424_1443 = (0);
var i__1425_1444 = (0);
while(true){
if((i__1425_1444 < count__1424_1443)){
var vec__1432_1445 = cljs.core._nth.call(null,chunk__1423_1442,i__1425_1444);
var k_1446 = cljs.core.nth.call(null,vec__1432_1445,(0),null);
var v_1447 = cljs.core.nth.call(null,vec__1432_1445,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_1446,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_1447),"px"].join(''));


var G__1448 = seq__1422_1441;
var G__1449 = chunk__1423_1442;
var G__1450 = count__1424_1443;
var G__1451 = (i__1425_1444 + (1));
seq__1422_1441 = G__1448;
chunk__1423_1442 = G__1449;
count__1424_1443 = G__1450;
i__1425_1444 = G__1451;
continue;
} else {
var temp__4657__auto___1452 = cljs.core.seq.call(null,seq__1422_1441);
if(temp__4657__auto___1452){
var seq__1422_1453__$1 = temp__4657__auto___1452;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1422_1453__$1)){
var c__4556__auto___1454 = cljs.core.chunk_first.call(null,seq__1422_1453__$1);
var G__1455 = cljs.core.chunk_rest.call(null,seq__1422_1453__$1);
var G__1456 = c__4556__auto___1454;
var G__1457 = cljs.core.count.call(null,c__4556__auto___1454);
var G__1458 = (0);
seq__1422_1441 = G__1455;
chunk__1423_1442 = G__1456;
count__1424_1443 = G__1457;
i__1425_1444 = G__1458;
continue;
} else {
var vec__1435_1459 = cljs.core.first.call(null,seq__1422_1453__$1);
var k_1460 = cljs.core.nth.call(null,vec__1435_1459,(0),null);
var v_1461 = cljs.core.nth.call(null,vec__1435_1459,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_1460,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_1461),"px"].join(''));


var G__1462 = cljs.core.next.call(null,seq__1422_1453__$1);
var G__1463 = null;
var G__1464 = (0);
var G__1465 = (0);
seq__1422_1441 = G__1462;
chunk__1423_1442 = G__1463;
count__1424_1443 = G__1464;
i__1425_1444 = G__1465;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq1420){
var G__1421 = cljs.core.first.call(null,seq1420);
var seq1420__$1 = cljs.core.next.call(null,seq1420);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1421,seq1420__$1);
}));

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
var G__1471 = arguments.length;
switch (G__1471) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___1491 = arguments.length;
var i__4737__auto___1492 = (0);
while(true){
if((i__4737__auto___1492 < len__4736__auto___1491)){
args_arr__4757__auto__.push((arguments[i__4737__auto___1492]));

var G__1493 = (i__4737__auto___1492 + (1));
i__4737__auto___1492 = G__1493;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__1472 = elem;
(G__1472[k__$1] = v);

return G__1472;
} else {
var G__1473 = elem;
G__1473.setAttribute(k__$1,v);

return G__1473;
}
} else {
return null;
}
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__1474_1494 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__1475_1495 = null;
var count__1476_1496 = (0);
var i__1477_1497 = (0);
while(true){
if((i__1477_1497 < count__1476_1496)){
var vec__1484_1498 = cljs.core._nth.call(null,chunk__1475_1495,i__1477_1497);
var k_1499__$1 = cljs.core.nth.call(null,vec__1484_1498,(0),null);
var v_1500__$1 = cljs.core.nth.call(null,vec__1484_1498,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_1499__$1,v_1500__$1);


var G__1501 = seq__1474_1494;
var G__1502 = chunk__1475_1495;
var G__1503 = count__1476_1496;
var G__1504 = (i__1477_1497 + (1));
seq__1474_1494 = G__1501;
chunk__1475_1495 = G__1502;
count__1476_1496 = G__1503;
i__1477_1497 = G__1504;
continue;
} else {
var temp__4657__auto___1505 = cljs.core.seq.call(null,seq__1474_1494);
if(temp__4657__auto___1505){
var seq__1474_1506__$1 = temp__4657__auto___1505;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1474_1506__$1)){
var c__4556__auto___1507 = cljs.core.chunk_first.call(null,seq__1474_1506__$1);
var G__1508 = cljs.core.chunk_rest.call(null,seq__1474_1506__$1);
var G__1509 = c__4556__auto___1507;
var G__1510 = cljs.core.count.call(null,c__4556__auto___1507);
var G__1511 = (0);
seq__1474_1494 = G__1508;
chunk__1475_1495 = G__1509;
count__1476_1496 = G__1510;
i__1477_1497 = G__1511;
continue;
} else {
var vec__1487_1512 = cljs.core.first.call(null,seq__1474_1506__$1);
var k_1513__$1 = cljs.core.nth.call(null,vec__1487_1512,(0),null);
var v_1514__$1 = cljs.core.nth.call(null,vec__1487_1512,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_1513__$1,v_1514__$1);


var G__1515 = cljs.core.next.call(null,seq__1474_1506__$1);
var G__1516 = null;
var G__1517 = (0);
var G__1518 = (0);
seq__1474_1494 = G__1515;
chunk__1475_1495 = G__1516;
count__1476_1496 = G__1517;
i__1477_1497 = G__1518;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq1467){
var G__1468 = cljs.core.first.call(null,seq1467);
var seq1467__$1 = cljs.core.next.call(null,seq1467);
var G__1469 = cljs.core.first.call(null,seq1467__$1);
var seq1467__$2 = cljs.core.next.call(null,seq1467__$1);
var G__1470 = cljs.core.first.call(null,seq1467__$2);
var seq1467__$3 = cljs.core.next.call(null,seq1467__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1468,G__1469,G__1470,seq1467__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__1523 = arguments.length;
switch (G__1523) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___1529 = arguments.length;
var i__4737__auto___1530 = (0);
while(true){
if((i__4737__auto___1530 < len__4736__auto___1529)){
args_arr__4757__auto__.push((arguments[i__4737__auto___1530]));

var G__1531 = (i__4737__auto___1530 + (1));
i__4737__auto___1530 = G__1531;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_1532__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_1532__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_1532__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__1524_1533 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__1525_1534 = null;
var count__1526_1535 = (0);
var i__1527_1536 = (0);
while(true){
if((i__1527_1536 < count__1526_1535)){
var k_1537__$1 = cljs.core._nth.call(null,chunk__1525_1534,i__1527_1536);
dommy.core.remove_attr_BANG_.call(null,elem,k_1537__$1);


var G__1538 = seq__1524_1533;
var G__1539 = chunk__1525_1534;
var G__1540 = count__1526_1535;
var G__1541 = (i__1527_1536 + (1));
seq__1524_1533 = G__1538;
chunk__1525_1534 = G__1539;
count__1526_1535 = G__1540;
i__1527_1536 = G__1541;
continue;
} else {
var temp__4657__auto___1542 = cljs.core.seq.call(null,seq__1524_1533);
if(temp__4657__auto___1542){
var seq__1524_1543__$1 = temp__4657__auto___1542;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1524_1543__$1)){
var c__4556__auto___1544 = cljs.core.chunk_first.call(null,seq__1524_1543__$1);
var G__1545 = cljs.core.chunk_rest.call(null,seq__1524_1543__$1);
var G__1546 = c__4556__auto___1544;
var G__1547 = cljs.core.count.call(null,c__4556__auto___1544);
var G__1548 = (0);
seq__1524_1533 = G__1545;
chunk__1525_1534 = G__1546;
count__1526_1535 = G__1547;
i__1527_1536 = G__1548;
continue;
} else {
var k_1549__$1 = cljs.core.first.call(null,seq__1524_1543__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_1549__$1);


var G__1550 = cljs.core.next.call(null,seq__1524_1543__$1);
var G__1551 = null;
var G__1552 = (0);
var G__1553 = (0);
seq__1524_1533 = G__1550;
chunk__1525_1534 = G__1551;
count__1526_1535 = G__1552;
i__1527_1536 = G__1553;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq1520){
var G__1521 = cljs.core.first.call(null,seq1520);
var seq1520__$1 = cljs.core.next.call(null,seq1520);
var G__1522 = cljs.core.first.call(null,seq1520__$1);
var seq1520__$2 = cljs.core.next.call(null,seq1520__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1521,G__1522,seq1520__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__1555 = arguments.length;
switch (G__1555) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
}));

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
}));

(dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__1561 = arguments.length;
switch (G__1561) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___1575 = arguments.length;
var i__4737__auto___1576 = (0);
while(true){
if((i__4737__auto___1576 < len__4736__auto___1575)){
args_arr__4757__auto__.push((arguments[i__4737__auto___1576]));

var G__1577 = (i__4737__auto___1576 + (1));
i__4737__auto___1576 = G__1577;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___1578 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___1578)){
var class_list_1579 = temp__4655__auto___1578;
var seq__1562_1580 = cljs.core.seq.call(null,classes__$1);
var chunk__1563_1581 = null;
var count__1564_1582 = (0);
var i__1565_1583 = (0);
while(true){
if((i__1565_1583 < count__1564_1582)){
var c_1584 = cljs.core._nth.call(null,chunk__1563_1581,i__1565_1583);
class_list_1579.add(c_1584);


var G__1585 = seq__1562_1580;
var G__1586 = chunk__1563_1581;
var G__1587 = count__1564_1582;
var G__1588 = (i__1565_1583 + (1));
seq__1562_1580 = G__1585;
chunk__1563_1581 = G__1586;
count__1564_1582 = G__1587;
i__1565_1583 = G__1588;
continue;
} else {
var temp__4657__auto___1589 = cljs.core.seq.call(null,seq__1562_1580);
if(temp__4657__auto___1589){
var seq__1562_1590__$1 = temp__4657__auto___1589;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1562_1590__$1)){
var c__4556__auto___1591 = cljs.core.chunk_first.call(null,seq__1562_1590__$1);
var G__1592 = cljs.core.chunk_rest.call(null,seq__1562_1590__$1);
var G__1593 = c__4556__auto___1591;
var G__1594 = cljs.core.count.call(null,c__4556__auto___1591);
var G__1595 = (0);
seq__1562_1580 = G__1592;
chunk__1563_1581 = G__1593;
count__1564_1582 = G__1594;
i__1565_1583 = G__1595;
continue;
} else {
var c_1596 = cljs.core.first.call(null,seq__1562_1590__$1);
class_list_1579.add(c_1596);


var G__1597 = cljs.core.next.call(null,seq__1562_1590__$1);
var G__1598 = null;
var G__1599 = (0);
var G__1600 = (0);
seq__1562_1580 = G__1597;
chunk__1563_1581 = G__1598;
count__1564_1582 = G__1599;
i__1565_1583 = G__1600;
continue;
}
} else {
}
}
break;
}
} else {
var seq__1566_1601 = cljs.core.seq.call(null,classes__$1);
var chunk__1567_1602 = null;
var count__1568_1603 = (0);
var i__1569_1604 = (0);
while(true){
if((i__1569_1604 < count__1568_1603)){
var c_1605 = cljs.core._nth.call(null,chunk__1567_1602,i__1569_1604);
var class_name_1606 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_1606,c_1605))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_1606 === ""))?c_1605:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_1606)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_1605)].join('')));
}


var G__1607 = seq__1566_1601;
var G__1608 = chunk__1567_1602;
var G__1609 = count__1568_1603;
var G__1610 = (i__1569_1604 + (1));
seq__1566_1601 = G__1607;
chunk__1567_1602 = G__1608;
count__1568_1603 = G__1609;
i__1569_1604 = G__1610;
continue;
} else {
var temp__4657__auto___1611 = cljs.core.seq.call(null,seq__1566_1601);
if(temp__4657__auto___1611){
var seq__1566_1612__$1 = temp__4657__auto___1611;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1566_1612__$1)){
var c__4556__auto___1613 = cljs.core.chunk_first.call(null,seq__1566_1612__$1);
var G__1614 = cljs.core.chunk_rest.call(null,seq__1566_1612__$1);
var G__1615 = c__4556__auto___1613;
var G__1616 = cljs.core.count.call(null,c__4556__auto___1613);
var G__1617 = (0);
seq__1566_1601 = G__1614;
chunk__1567_1602 = G__1615;
count__1568_1603 = G__1616;
i__1569_1604 = G__1617;
continue;
} else {
var c_1618 = cljs.core.first.call(null,seq__1566_1612__$1);
var class_name_1619 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_1619,c_1618))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_1619 === ""))?c_1618:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_1619)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_1618)].join('')));
}


var G__1620 = cljs.core.next.call(null,seq__1566_1612__$1);
var G__1621 = null;
var G__1622 = (0);
var G__1623 = (0);
seq__1566_1601 = G__1620;
chunk__1567_1602 = G__1621;
count__1568_1603 = G__1622;
i__1569_1604 = G__1623;
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
}));

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__1570_1624 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__1571_1625 = null;
var count__1572_1626 = (0);
var i__1573_1627 = (0);
while(true){
if((i__1573_1627 < count__1572_1626)){
var c_1628 = cljs.core._nth.call(null,chunk__1571_1625,i__1573_1627);
dommy.core.add_class_BANG_.call(null,elem,c_1628);


var G__1629 = seq__1570_1624;
var G__1630 = chunk__1571_1625;
var G__1631 = count__1572_1626;
var G__1632 = (i__1573_1627 + (1));
seq__1570_1624 = G__1629;
chunk__1571_1625 = G__1630;
count__1572_1626 = G__1631;
i__1573_1627 = G__1632;
continue;
} else {
var temp__4657__auto___1633 = cljs.core.seq.call(null,seq__1570_1624);
if(temp__4657__auto___1633){
var seq__1570_1634__$1 = temp__4657__auto___1633;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1570_1634__$1)){
var c__4556__auto___1635 = cljs.core.chunk_first.call(null,seq__1570_1634__$1);
var G__1636 = cljs.core.chunk_rest.call(null,seq__1570_1634__$1);
var G__1637 = c__4556__auto___1635;
var G__1638 = cljs.core.count.call(null,c__4556__auto___1635);
var G__1639 = (0);
seq__1570_1624 = G__1636;
chunk__1571_1625 = G__1637;
count__1572_1626 = G__1638;
i__1573_1627 = G__1639;
continue;
} else {
var c_1640 = cljs.core.first.call(null,seq__1570_1634__$1);
dommy.core.add_class_BANG_.call(null,elem,c_1640);


var G__1641 = cljs.core.next.call(null,seq__1570_1634__$1);
var G__1642 = null;
var G__1643 = (0);
var G__1644 = (0);
seq__1570_1624 = G__1641;
chunk__1571_1625 = G__1642;
count__1572_1626 = G__1643;
i__1573_1627 = G__1644;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq1558){
var G__1559 = cljs.core.first.call(null,seq1558);
var seq1558__$1 = cljs.core.next.call(null,seq1558);
var G__1560 = cljs.core.first.call(null,seq1558__$1);
var seq1558__$2 = cljs.core.next.call(null,seq1558__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1559,G__1560,seq1558__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__1649 = arguments.length;
switch (G__1649) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___1655 = arguments.length;
var i__4737__auto___1656 = (0);
while(true){
if((i__4737__auto___1656 < len__4736__auto___1655)){
args_arr__4757__auto__.push((arguments[i__4737__auto___1656]));

var G__1657 = (i__4737__auto___1656 + (1));
i__4737__auto___1656 = G__1657;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___1658 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___1658)){
var class_list_1659 = temp__4655__auto___1658;
class_list_1659.remove(c__$1);
} else {
var class_name_1660 = dommy.core.class$.call(null,elem);
var new_class_name_1661 = dommy.utils.remove_class_str.call(null,class_name_1660,c__$1);
if((class_name_1660 === new_class_name_1661)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_1661);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__1650 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__1651 = null;
var count__1652 = (0);
var i__1653 = (0);
while(true){
if((i__1653 < count__1652)){
var c = cljs.core._nth.call(null,chunk__1651,i__1653);
dommy.core.remove_class_BANG_.call(null,elem,c);


var G__1662 = seq__1650;
var G__1663 = chunk__1651;
var G__1664 = count__1652;
var G__1665 = (i__1653 + (1));
seq__1650 = G__1662;
chunk__1651 = G__1663;
count__1652 = G__1664;
i__1653 = G__1665;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__1650);
if(temp__4657__auto__){
var seq__1650__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1650__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__1650__$1);
var G__1666 = cljs.core.chunk_rest.call(null,seq__1650__$1);
var G__1667 = c__4556__auto__;
var G__1668 = cljs.core.count.call(null,c__4556__auto__);
var G__1669 = (0);
seq__1650 = G__1666;
chunk__1651 = G__1667;
count__1652 = G__1668;
i__1653 = G__1669;
continue;
} else {
var c = cljs.core.first.call(null,seq__1650__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);


var G__1670 = cljs.core.next.call(null,seq__1650__$1);
var G__1671 = null;
var G__1672 = (0);
var G__1673 = (0);
seq__1650 = G__1670;
chunk__1651 = G__1671;
count__1652 = G__1672;
i__1653 = G__1673;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq1646){
var G__1647 = cljs.core.first.call(null,seq1646);
var seq1646__$1 = cljs.core.next.call(null,seq1646);
var G__1648 = cljs.core.first.call(null,seq1646__$1);
var seq1646__$2 = cljs.core.next.call(null,seq1646__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1647,G__1648,seq1646__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__1675 = arguments.length;
switch (G__1675) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___1677 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___1677)){
var class_list_1678 = temp__4655__auto___1677;
class_list_1678.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,(!(dommy.core.has_class_QMARK_.call(null,elem,c__$1))));
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__1680 = arguments.length;
switch (G__1680) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
}));

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
}));

(dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2);

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
var G__1683 = arguments.length;
switch (G__1683) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
}));

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
}));

(dommy.core.create_element.cljs$lang$maxFixedArity = 2);

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
var G__1689 = arguments.length;
switch (G__1689) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___1696 = arguments.length;
var i__4737__auto___1697 = (0);
while(true){
if((i__4737__auto___1697 < len__4736__auto___1696)){
args_arr__4757__auto__.push((arguments[i__4737__auto___1697]));

var G__1698 = (i__4737__auto___1697 + (1));
i__4737__auto___1697 = G__1698;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__1690 = parent;
G__1690.appendChild(child);

return G__1690;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__1691_1699 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__1692_1700 = null;
var count__1693_1701 = (0);
var i__1694_1702 = (0);
while(true){
if((i__1694_1702 < count__1693_1701)){
var c_1703 = cljs.core._nth.call(null,chunk__1692_1700,i__1694_1702);
dommy.core.append_BANG_.call(null,parent,c_1703);


var G__1704 = seq__1691_1699;
var G__1705 = chunk__1692_1700;
var G__1706 = count__1693_1701;
var G__1707 = (i__1694_1702 + (1));
seq__1691_1699 = G__1704;
chunk__1692_1700 = G__1705;
count__1693_1701 = G__1706;
i__1694_1702 = G__1707;
continue;
} else {
var temp__4657__auto___1708 = cljs.core.seq.call(null,seq__1691_1699);
if(temp__4657__auto___1708){
var seq__1691_1709__$1 = temp__4657__auto___1708;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1691_1709__$1)){
var c__4556__auto___1710 = cljs.core.chunk_first.call(null,seq__1691_1709__$1);
var G__1711 = cljs.core.chunk_rest.call(null,seq__1691_1709__$1);
var G__1712 = c__4556__auto___1710;
var G__1713 = cljs.core.count.call(null,c__4556__auto___1710);
var G__1714 = (0);
seq__1691_1699 = G__1711;
chunk__1692_1700 = G__1712;
count__1693_1701 = G__1713;
i__1694_1702 = G__1714;
continue;
} else {
var c_1715 = cljs.core.first.call(null,seq__1691_1709__$1);
dommy.core.append_BANG_.call(null,parent,c_1715);


var G__1716 = cljs.core.next.call(null,seq__1691_1709__$1);
var G__1717 = null;
var G__1718 = (0);
var G__1719 = (0);
seq__1691_1699 = G__1716;
chunk__1692_1700 = G__1717;
count__1693_1701 = G__1718;
i__1694_1702 = G__1719;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq1686){
var G__1687 = cljs.core.first.call(null,seq1686);
var seq1686__$1 = cljs.core.next.call(null,seq1686);
var G__1688 = cljs.core.first.call(null,seq1686__$1);
var seq1686__$2 = cljs.core.next.call(null,seq1686__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1687,G__1688,seq1686__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__1724 = arguments.length;
switch (G__1724) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___1731 = arguments.length;
var i__4737__auto___1732 = (0);
while(true){
if((i__4737__auto___1732 < len__4736__auto___1731)){
args_arr__4757__auto__.push((arguments[i__4737__auto___1732]));

var G__1733 = (i__4737__auto___1732 + (1));
i__4737__auto___1732 = G__1733;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__1725 = parent;
G__1725.insertBefore(child,parent.firstChild);

return G__1725;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__1726_1734 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__1727_1735 = null;
var count__1728_1736 = (0);
var i__1729_1737 = (0);
while(true){
if((i__1729_1737 < count__1728_1736)){
var c_1738 = cljs.core._nth.call(null,chunk__1727_1735,i__1729_1737);
dommy.core.prepend_BANG_.call(null,parent,c_1738);


var G__1739 = seq__1726_1734;
var G__1740 = chunk__1727_1735;
var G__1741 = count__1728_1736;
var G__1742 = (i__1729_1737 + (1));
seq__1726_1734 = G__1739;
chunk__1727_1735 = G__1740;
count__1728_1736 = G__1741;
i__1729_1737 = G__1742;
continue;
} else {
var temp__4657__auto___1743 = cljs.core.seq.call(null,seq__1726_1734);
if(temp__4657__auto___1743){
var seq__1726_1744__$1 = temp__4657__auto___1743;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1726_1744__$1)){
var c__4556__auto___1745 = cljs.core.chunk_first.call(null,seq__1726_1744__$1);
var G__1746 = cljs.core.chunk_rest.call(null,seq__1726_1744__$1);
var G__1747 = c__4556__auto___1745;
var G__1748 = cljs.core.count.call(null,c__4556__auto___1745);
var G__1749 = (0);
seq__1726_1734 = G__1746;
chunk__1727_1735 = G__1747;
count__1728_1736 = G__1748;
i__1729_1737 = G__1749;
continue;
} else {
var c_1750 = cljs.core.first.call(null,seq__1726_1744__$1);
dommy.core.prepend_BANG_.call(null,parent,c_1750);


var G__1751 = cljs.core.next.call(null,seq__1726_1744__$1);
var G__1752 = null;
var G__1753 = (0);
var G__1754 = (0);
seq__1726_1734 = G__1751;
chunk__1727_1735 = G__1752;
count__1728_1736 = G__1753;
i__1729_1737 = G__1754;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq1721){
var G__1722 = cljs.core.first.call(null,seq1721);
var seq1721__$1 = cljs.core.next.call(null,seq1721);
var G__1723 = cljs.core.first.call(null,seq1721__$1);
var seq1721__$2 = cljs.core.next.call(null,seq1721__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1722,G__1723,seq1721__$2);
}));

(dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4655__auto___1755 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___1755)){
var next_1756 = temp__4655__auto___1755;
dommy.core.insert_before_BANG_.call(null,elem,next_1756);
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
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
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
var G__1758 = arguments.length;
switch (G__1758) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
}));

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__1759 = p;
G__1759.removeChild(elem);

return G__1759;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__1761){
var vec__1762 = p__1761;
var special_mouse_event = cljs.core.nth.call(null,vec__1762,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__1762,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4126__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4115__auto__ = related_target;
if(cljs.core.truth_(and__4115__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__4115__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
})])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4115__auto__ = selected_target;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4115__auto__;
}
})())){
(event.selectedTarget = selected_target);

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
var or__4126__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___1768 = arguments.length;
var i__4737__auto___1769 = (0);
while(true){
if((i__4737__auto___1769 < len__4736__auto___1768)){
args__4742__auto__.push((arguments[i__4737__auto___1769]));

var G__1770 = (i__4737__auto___1769 + (1));
i__4737__auto___1769 = G__1770;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq1765){
var G__1766 = cljs.core.first.call(null,seq1765);
var seq1765__$1 = cljs.core.next.call(null,seq1765);
var G__1767 = cljs.core.first.call(null,seq1765__$1);
var seq1765__$2 = cljs.core.next.call(null,seq1765__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1766,G__1767,seq1765__$2);
}));

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
var args__4742__auto__ = [];
var len__4736__auto___1852 = arguments.length;
var i__4737__auto___1853 = (0);
while(true){
if((i__4737__auto___1853 < len__4736__auto___1852)){
args__4742__auto__.push((arguments[i__4737__auto___1853]));

var G__1854 = (i__4737__auto___1853 + (1));
i__4737__auto___1853 = G__1854;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__1773_1855 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_1856 = cljs.core.nth.call(null,vec__1773_1855,(0),null);
var selector_1857 = cljs.core.nth.call(null,vec__1773_1855,(1),null);
var seq__1776_1858 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__1783_1859 = null;
var count__1784_1860 = (0);
var i__1785_1861 = (0);
while(true){
if((i__1785_1861 < count__1784_1860)){
var vec__1822_1862 = cljs.core._nth.call(null,chunk__1783_1859,i__1785_1861);
var orig_type_1863 = cljs.core.nth.call(null,vec__1822_1862,(0),null);
var f_1864 = cljs.core.nth.call(null,vec__1822_1862,(1),null);
var seq__1786_1865 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_1863,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_1863,cljs.core.identity])));
var chunk__1788_1866 = null;
var count__1789_1867 = (0);
var i__1790_1868 = (0);
while(true){
if((i__1790_1868 < count__1789_1867)){
var vec__1831_1869 = cljs.core._nth.call(null,chunk__1788_1866,i__1790_1868);
var actual_type_1870 = cljs.core.nth.call(null,vec__1831_1869,(0),null);
var factory_1871 = cljs.core.nth.call(null,vec__1831_1869,(1),null);
var canonical_f_1872 = (cljs.core.truth_(selector_1857)?cljs.core.partial.call(null,dommy.core.live_listener,elem_1856,selector_1857):cljs.core.identity).call(null,factory_1871.call(null,f_1864));
dommy.core.update_event_listeners_BANG_.call(null,elem_1856,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_1857,actual_type_1870,f_1864], null),canonical_f_1872);

if(cljs.core.truth_(elem_1856.addEventListener)){
elem_1856.addEventListener(cljs.core.name.call(null,actual_type_1870),canonical_f_1872);
} else {
elem_1856.attachEvent(cljs.core.name.call(null,actual_type_1870),canonical_f_1872);
}


var G__1873 = seq__1786_1865;
var G__1874 = chunk__1788_1866;
var G__1875 = count__1789_1867;
var G__1876 = (i__1790_1868 + (1));
seq__1786_1865 = G__1873;
chunk__1788_1866 = G__1874;
count__1789_1867 = G__1875;
i__1790_1868 = G__1876;
continue;
} else {
var temp__4657__auto___1877 = cljs.core.seq.call(null,seq__1786_1865);
if(temp__4657__auto___1877){
var seq__1786_1878__$1 = temp__4657__auto___1877;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1786_1878__$1)){
var c__4556__auto___1879 = cljs.core.chunk_first.call(null,seq__1786_1878__$1);
var G__1880 = cljs.core.chunk_rest.call(null,seq__1786_1878__$1);
var G__1881 = c__4556__auto___1879;
var G__1882 = cljs.core.count.call(null,c__4556__auto___1879);
var G__1883 = (0);
seq__1786_1865 = G__1880;
chunk__1788_1866 = G__1881;
count__1789_1867 = G__1882;
i__1790_1868 = G__1883;
continue;
} else {
var vec__1834_1884 = cljs.core.first.call(null,seq__1786_1878__$1);
var actual_type_1885 = cljs.core.nth.call(null,vec__1834_1884,(0),null);
var factory_1886 = cljs.core.nth.call(null,vec__1834_1884,(1),null);
var canonical_f_1887 = (cljs.core.truth_(selector_1857)?cljs.core.partial.call(null,dommy.core.live_listener,elem_1856,selector_1857):cljs.core.identity).call(null,factory_1886.call(null,f_1864));
dommy.core.update_event_listeners_BANG_.call(null,elem_1856,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_1857,actual_type_1885,f_1864], null),canonical_f_1887);

if(cljs.core.truth_(elem_1856.addEventListener)){
elem_1856.addEventListener(cljs.core.name.call(null,actual_type_1885),canonical_f_1887);
} else {
elem_1856.attachEvent(cljs.core.name.call(null,actual_type_1885),canonical_f_1887);
}


var G__1888 = cljs.core.next.call(null,seq__1786_1878__$1);
var G__1889 = null;
var G__1890 = (0);
var G__1891 = (0);
seq__1786_1865 = G__1888;
chunk__1788_1866 = G__1889;
count__1789_1867 = G__1890;
i__1790_1868 = G__1891;
continue;
}
} else {
}
}
break;
}

var G__1892 = seq__1776_1858;
var G__1893 = chunk__1783_1859;
var G__1894 = count__1784_1860;
var G__1895 = (i__1785_1861 + (1));
seq__1776_1858 = G__1892;
chunk__1783_1859 = G__1893;
count__1784_1860 = G__1894;
i__1785_1861 = G__1895;
continue;
} else {
var temp__4657__auto___1896 = cljs.core.seq.call(null,seq__1776_1858);
if(temp__4657__auto___1896){
var seq__1776_1897__$1 = temp__4657__auto___1896;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1776_1897__$1)){
var c__4556__auto___1898 = cljs.core.chunk_first.call(null,seq__1776_1897__$1);
var G__1899 = cljs.core.chunk_rest.call(null,seq__1776_1897__$1);
var G__1900 = c__4556__auto___1898;
var G__1901 = cljs.core.count.call(null,c__4556__auto___1898);
var G__1902 = (0);
seq__1776_1858 = G__1899;
chunk__1783_1859 = G__1900;
count__1784_1860 = G__1901;
i__1785_1861 = G__1902;
continue;
} else {
var vec__1837_1903 = cljs.core.first.call(null,seq__1776_1897__$1);
var orig_type_1904 = cljs.core.nth.call(null,vec__1837_1903,(0),null);
var f_1905 = cljs.core.nth.call(null,vec__1837_1903,(1),null);
var seq__1777_1906 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_1904,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_1904,cljs.core.identity])));
var chunk__1779_1907 = null;
var count__1780_1908 = (0);
var i__1781_1909 = (0);
while(true){
if((i__1781_1909 < count__1780_1908)){
var vec__1846_1910 = cljs.core._nth.call(null,chunk__1779_1907,i__1781_1909);
var actual_type_1911 = cljs.core.nth.call(null,vec__1846_1910,(0),null);
var factory_1912 = cljs.core.nth.call(null,vec__1846_1910,(1),null);
var canonical_f_1913 = (cljs.core.truth_(selector_1857)?cljs.core.partial.call(null,dommy.core.live_listener,elem_1856,selector_1857):cljs.core.identity).call(null,factory_1912.call(null,f_1905));
dommy.core.update_event_listeners_BANG_.call(null,elem_1856,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_1857,actual_type_1911,f_1905], null),canonical_f_1913);

if(cljs.core.truth_(elem_1856.addEventListener)){
elem_1856.addEventListener(cljs.core.name.call(null,actual_type_1911),canonical_f_1913);
} else {
elem_1856.attachEvent(cljs.core.name.call(null,actual_type_1911),canonical_f_1913);
}


var G__1914 = seq__1777_1906;
var G__1915 = chunk__1779_1907;
var G__1916 = count__1780_1908;
var G__1917 = (i__1781_1909 + (1));
seq__1777_1906 = G__1914;
chunk__1779_1907 = G__1915;
count__1780_1908 = G__1916;
i__1781_1909 = G__1917;
continue;
} else {
var temp__4657__auto___1918__$1 = cljs.core.seq.call(null,seq__1777_1906);
if(temp__4657__auto___1918__$1){
var seq__1777_1919__$1 = temp__4657__auto___1918__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1777_1919__$1)){
var c__4556__auto___1920 = cljs.core.chunk_first.call(null,seq__1777_1919__$1);
var G__1921 = cljs.core.chunk_rest.call(null,seq__1777_1919__$1);
var G__1922 = c__4556__auto___1920;
var G__1923 = cljs.core.count.call(null,c__4556__auto___1920);
var G__1924 = (0);
seq__1777_1906 = G__1921;
chunk__1779_1907 = G__1922;
count__1780_1908 = G__1923;
i__1781_1909 = G__1924;
continue;
} else {
var vec__1849_1925 = cljs.core.first.call(null,seq__1777_1919__$1);
var actual_type_1926 = cljs.core.nth.call(null,vec__1849_1925,(0),null);
var factory_1927 = cljs.core.nth.call(null,vec__1849_1925,(1),null);
var canonical_f_1928 = (cljs.core.truth_(selector_1857)?cljs.core.partial.call(null,dommy.core.live_listener,elem_1856,selector_1857):cljs.core.identity).call(null,factory_1927.call(null,f_1905));
dommy.core.update_event_listeners_BANG_.call(null,elem_1856,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_1857,actual_type_1926,f_1905], null),canonical_f_1928);

if(cljs.core.truth_(elem_1856.addEventListener)){
elem_1856.addEventListener(cljs.core.name.call(null,actual_type_1926),canonical_f_1928);
} else {
elem_1856.attachEvent(cljs.core.name.call(null,actual_type_1926),canonical_f_1928);
}


var G__1929 = cljs.core.next.call(null,seq__1777_1919__$1);
var G__1930 = null;
var G__1931 = (0);
var G__1932 = (0);
seq__1777_1906 = G__1929;
chunk__1779_1907 = G__1930;
count__1780_1908 = G__1931;
i__1781_1909 = G__1932;
continue;
}
} else {
}
}
break;
}

var G__1933 = cljs.core.next.call(null,seq__1776_1897__$1);
var G__1934 = null;
var G__1935 = (0);
var G__1936 = (0);
seq__1776_1858 = G__1933;
chunk__1783_1859 = G__1934;
count__1784_1860 = G__1935;
i__1785_1861 = G__1936;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq1771){
var G__1772 = cljs.core.first.call(null,seq1771);
var seq1771__$1 = cljs.core.next.call(null,seq1771);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1772,seq1771__$1);
}));

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
var args__4742__auto__ = [];
var len__4736__auto___2018 = arguments.length;
var i__4737__auto___2019 = (0);
while(true){
if((i__4737__auto___2019 < len__4736__auto___2018)){
args__4742__auto__.push((arguments[i__4737__auto___2019]));

var G__2020 = (i__4737__auto___2019 + (1));
i__4737__auto___2019 = G__2020;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__1939_2021 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_2022 = cljs.core.nth.call(null,vec__1939_2021,(0),null);
var selector_2023 = cljs.core.nth.call(null,vec__1939_2021,(1),null);
var seq__1942_2024 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__1949_2025 = null;
var count__1950_2026 = (0);
var i__1951_2027 = (0);
while(true){
if((i__1951_2027 < count__1950_2026)){
var vec__1988_2028 = cljs.core._nth.call(null,chunk__1949_2025,i__1951_2027);
var orig_type_2029 = cljs.core.nth.call(null,vec__1988_2028,(0),null);
var f_2030 = cljs.core.nth.call(null,vec__1988_2028,(1),null);
var seq__1952_2031 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_2029,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_2029,cljs.core.identity])));
var chunk__1954_2032 = null;
var count__1955_2033 = (0);
var i__1956_2034 = (0);
while(true){
if((i__1956_2034 < count__1955_2033)){
var vec__1997_2035 = cljs.core._nth.call(null,chunk__1954_2032,i__1956_2034);
var actual_type_2036 = cljs.core.nth.call(null,vec__1997_2035,(0),null);
var __2037 = cljs.core.nth.call(null,vec__1997_2035,(1),null);
var keys_2038 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_2023,actual_type_2036,f_2030], null);
var canonical_f_2039 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_2022),keys_2038);
dommy.core.update_event_listeners_BANG_.call(null,elem_2022,dommy.utils.dissoc_in,keys_2038);

if(cljs.core.truth_(elem_2022.removeEventListener)){
elem_2022.removeEventListener(cljs.core.name.call(null,actual_type_2036),canonical_f_2039);
} else {
elem_2022.detachEvent(cljs.core.name.call(null,actual_type_2036),canonical_f_2039);
}


var G__2040 = seq__1952_2031;
var G__2041 = chunk__1954_2032;
var G__2042 = count__1955_2033;
var G__2043 = (i__1956_2034 + (1));
seq__1952_2031 = G__2040;
chunk__1954_2032 = G__2041;
count__1955_2033 = G__2042;
i__1956_2034 = G__2043;
continue;
} else {
var temp__4657__auto___2044 = cljs.core.seq.call(null,seq__1952_2031);
if(temp__4657__auto___2044){
var seq__1952_2045__$1 = temp__4657__auto___2044;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1952_2045__$1)){
var c__4556__auto___2046 = cljs.core.chunk_first.call(null,seq__1952_2045__$1);
var G__2047 = cljs.core.chunk_rest.call(null,seq__1952_2045__$1);
var G__2048 = c__4556__auto___2046;
var G__2049 = cljs.core.count.call(null,c__4556__auto___2046);
var G__2050 = (0);
seq__1952_2031 = G__2047;
chunk__1954_2032 = G__2048;
count__1955_2033 = G__2049;
i__1956_2034 = G__2050;
continue;
} else {
var vec__2000_2051 = cljs.core.first.call(null,seq__1952_2045__$1);
var actual_type_2052 = cljs.core.nth.call(null,vec__2000_2051,(0),null);
var __2053 = cljs.core.nth.call(null,vec__2000_2051,(1),null);
var keys_2054 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_2023,actual_type_2052,f_2030], null);
var canonical_f_2055 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_2022),keys_2054);
dommy.core.update_event_listeners_BANG_.call(null,elem_2022,dommy.utils.dissoc_in,keys_2054);

if(cljs.core.truth_(elem_2022.removeEventListener)){
elem_2022.removeEventListener(cljs.core.name.call(null,actual_type_2052),canonical_f_2055);
} else {
elem_2022.detachEvent(cljs.core.name.call(null,actual_type_2052),canonical_f_2055);
}


var G__2056 = cljs.core.next.call(null,seq__1952_2045__$1);
var G__2057 = null;
var G__2058 = (0);
var G__2059 = (0);
seq__1952_2031 = G__2056;
chunk__1954_2032 = G__2057;
count__1955_2033 = G__2058;
i__1956_2034 = G__2059;
continue;
}
} else {
}
}
break;
}

var G__2060 = seq__1942_2024;
var G__2061 = chunk__1949_2025;
var G__2062 = count__1950_2026;
var G__2063 = (i__1951_2027 + (1));
seq__1942_2024 = G__2060;
chunk__1949_2025 = G__2061;
count__1950_2026 = G__2062;
i__1951_2027 = G__2063;
continue;
} else {
var temp__4657__auto___2064 = cljs.core.seq.call(null,seq__1942_2024);
if(temp__4657__auto___2064){
var seq__1942_2065__$1 = temp__4657__auto___2064;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1942_2065__$1)){
var c__4556__auto___2066 = cljs.core.chunk_first.call(null,seq__1942_2065__$1);
var G__2067 = cljs.core.chunk_rest.call(null,seq__1942_2065__$1);
var G__2068 = c__4556__auto___2066;
var G__2069 = cljs.core.count.call(null,c__4556__auto___2066);
var G__2070 = (0);
seq__1942_2024 = G__2067;
chunk__1949_2025 = G__2068;
count__1950_2026 = G__2069;
i__1951_2027 = G__2070;
continue;
} else {
var vec__2003_2071 = cljs.core.first.call(null,seq__1942_2065__$1);
var orig_type_2072 = cljs.core.nth.call(null,vec__2003_2071,(0),null);
var f_2073 = cljs.core.nth.call(null,vec__2003_2071,(1),null);
var seq__1943_2074 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_2072,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_2072,cljs.core.identity])));
var chunk__1945_2075 = null;
var count__1946_2076 = (0);
var i__1947_2077 = (0);
while(true){
if((i__1947_2077 < count__1946_2076)){
var vec__2012_2078 = cljs.core._nth.call(null,chunk__1945_2075,i__1947_2077);
var actual_type_2079 = cljs.core.nth.call(null,vec__2012_2078,(0),null);
var __2080 = cljs.core.nth.call(null,vec__2012_2078,(1),null);
var keys_2081 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_2023,actual_type_2079,f_2073], null);
var canonical_f_2082 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_2022),keys_2081);
dommy.core.update_event_listeners_BANG_.call(null,elem_2022,dommy.utils.dissoc_in,keys_2081);

if(cljs.core.truth_(elem_2022.removeEventListener)){
elem_2022.removeEventListener(cljs.core.name.call(null,actual_type_2079),canonical_f_2082);
} else {
elem_2022.detachEvent(cljs.core.name.call(null,actual_type_2079),canonical_f_2082);
}


var G__2083 = seq__1943_2074;
var G__2084 = chunk__1945_2075;
var G__2085 = count__1946_2076;
var G__2086 = (i__1947_2077 + (1));
seq__1943_2074 = G__2083;
chunk__1945_2075 = G__2084;
count__1946_2076 = G__2085;
i__1947_2077 = G__2086;
continue;
} else {
var temp__4657__auto___2087__$1 = cljs.core.seq.call(null,seq__1943_2074);
if(temp__4657__auto___2087__$1){
var seq__1943_2088__$1 = temp__4657__auto___2087__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1943_2088__$1)){
var c__4556__auto___2089 = cljs.core.chunk_first.call(null,seq__1943_2088__$1);
var G__2090 = cljs.core.chunk_rest.call(null,seq__1943_2088__$1);
var G__2091 = c__4556__auto___2089;
var G__2092 = cljs.core.count.call(null,c__4556__auto___2089);
var G__2093 = (0);
seq__1943_2074 = G__2090;
chunk__1945_2075 = G__2091;
count__1946_2076 = G__2092;
i__1947_2077 = G__2093;
continue;
} else {
var vec__2015_2094 = cljs.core.first.call(null,seq__1943_2088__$1);
var actual_type_2095 = cljs.core.nth.call(null,vec__2015_2094,(0),null);
var __2096 = cljs.core.nth.call(null,vec__2015_2094,(1),null);
var keys_2097 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_2023,actual_type_2095,f_2073], null);
var canonical_f_2098 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_2022),keys_2097);
dommy.core.update_event_listeners_BANG_.call(null,elem_2022,dommy.utils.dissoc_in,keys_2097);

if(cljs.core.truth_(elem_2022.removeEventListener)){
elem_2022.removeEventListener(cljs.core.name.call(null,actual_type_2095),canonical_f_2098);
} else {
elem_2022.detachEvent(cljs.core.name.call(null,actual_type_2095),canonical_f_2098);
}


var G__2099 = cljs.core.next.call(null,seq__1943_2088__$1);
var G__2100 = null;
var G__2101 = (0);
var G__2102 = (0);
seq__1943_2074 = G__2099;
chunk__1945_2075 = G__2100;
count__1946_2076 = G__2101;
i__1947_2077 = G__2102;
continue;
}
} else {
}
}
break;
}

var G__2103 = cljs.core.next.call(null,seq__1942_2065__$1);
var G__2104 = null;
var G__2105 = (0);
var G__2106 = (0);
seq__1942_2024 = G__2103;
chunk__1949_2025 = G__2104;
count__1950_2026 = G__2105;
i__1951_2027 = G__2106;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq1937){
var G__1938 = cljs.core.first.call(null,seq1937);
var seq1937__$1 = cljs.core.next.call(null,seq1937);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1938,seq1937__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___2128 = arguments.length;
var i__4737__auto___2129 = (0);
while(true){
if((i__4737__auto___2129 < len__4736__auto___2128)){
args__4742__auto__.push((arguments[i__4737__auto___2129]));

var G__2130 = (i__4737__auto___2129 + (1));
i__4737__auto___2129 = G__2130;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__2109_2131 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_2132 = cljs.core.nth.call(null,vec__2109_2131,(0),null);
var selector_2133 = cljs.core.nth.call(null,vec__2109_2131,(1),null);
var seq__2112_2134 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__2113_2135 = null;
var count__2114_2136 = (0);
var i__2115_2137 = (0);
while(true){
if((i__2115_2137 < count__2114_2136)){
var vec__2122_2138 = cljs.core._nth.call(null,chunk__2113_2135,i__2115_2137);
var type_2139 = cljs.core.nth.call(null,vec__2122_2138,(0),null);
var f_2140 = cljs.core.nth.call(null,vec__2122_2138,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_2139,((function (seq__2112_2134,chunk__2113_2135,count__2114_2136,i__2115_2137,vec__2122_2138,type_2139,f_2140,vec__2109_2131,elem_2132,selector_2133){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_2139,dommy$core$this_fn);

return f_2140.call(null,e);
});})(seq__2112_2134,chunk__2113_2135,count__2114_2136,i__2115_2137,vec__2122_2138,type_2139,f_2140,vec__2109_2131,elem_2132,selector_2133))
);


var G__2141 = seq__2112_2134;
var G__2142 = chunk__2113_2135;
var G__2143 = count__2114_2136;
var G__2144 = (i__2115_2137 + (1));
seq__2112_2134 = G__2141;
chunk__2113_2135 = G__2142;
count__2114_2136 = G__2143;
i__2115_2137 = G__2144;
continue;
} else {
var temp__4657__auto___2145 = cljs.core.seq.call(null,seq__2112_2134);
if(temp__4657__auto___2145){
var seq__2112_2146__$1 = temp__4657__auto___2145;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2112_2146__$1)){
var c__4556__auto___2147 = cljs.core.chunk_first.call(null,seq__2112_2146__$1);
var G__2148 = cljs.core.chunk_rest.call(null,seq__2112_2146__$1);
var G__2149 = c__4556__auto___2147;
var G__2150 = cljs.core.count.call(null,c__4556__auto___2147);
var G__2151 = (0);
seq__2112_2134 = G__2148;
chunk__2113_2135 = G__2149;
count__2114_2136 = G__2150;
i__2115_2137 = G__2151;
continue;
} else {
var vec__2125_2152 = cljs.core.first.call(null,seq__2112_2146__$1);
var type_2153 = cljs.core.nth.call(null,vec__2125_2152,(0),null);
var f_2154 = cljs.core.nth.call(null,vec__2125_2152,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_2153,((function (seq__2112_2134,chunk__2113_2135,count__2114_2136,i__2115_2137,vec__2125_2152,type_2153,f_2154,seq__2112_2146__$1,temp__4657__auto___2145,vec__2109_2131,elem_2132,selector_2133){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_2153,dommy$core$this_fn);

return f_2154.call(null,e);
});})(seq__2112_2134,chunk__2113_2135,count__2114_2136,i__2115_2137,vec__2125_2152,type_2153,f_2154,seq__2112_2146__$1,temp__4657__auto___2145,vec__2109_2131,elem_2132,selector_2133))
);


var G__2155 = cljs.core.next.call(null,seq__2112_2146__$1);
var G__2156 = null;
var G__2157 = (0);
var G__2158 = (0);
seq__2112_2134 = G__2155;
chunk__2113_2135 = G__2156;
count__2114_2136 = G__2157;
i__2115_2137 = G__2158;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq2107){
var G__2108 = cljs.core.first.call(null,seq2107);
var seq2107__$1 = cljs.core.next.call(null,seq2107);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2108,seq2107__$1);
}));


//# sourceMappingURL=core.js.map
