// Compiled by ClojureScript 1.9.293 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (function adzerk$boot_reload$reload$page_uri(){
return (new goog.Uri(window.location.href));
});
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.call(null).resolve(uri).getPath();
});
/**
 * Produce the changed goog.Uri iff the (relative) path is different
 *   compared to the content of changed (a string). Return nil otherwise.
 */
adzerk.boot_reload.reload.changed_uri = (function adzerk$boot_reload$reload$changed_uri(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__10275_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__10275_SHARP_),path);
});})(path))
,changed));
if(cljs.core.truth_(temp__4657__auto__)){
var changed__$1 = temp__4657__auto__;
return goog.Uri.parse(changed__$1);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__10280 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__10281 = null;
var count__10282 = (0);
var i__10283 = (0);
while(true){
if((i__10283 < count__10282)){
var s = cljs.core._nth.call(null,chunk__10281,i__10283);
var temp__4657__auto___10284 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___10284)){
var sheet_10285 = temp__4657__auto___10284;
var temp__4657__auto___10286__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_10285.href,changed);
if(cljs.core.truth_(temp__4657__auto___10286__$1)){
var href_uri_10287 = temp__4657__auto___10286__$1;
sheet_10285.ownerNode.href = href_uri_10287.makeUnique().toString();
} else {
}
} else {
}

var G__10288 = seq__10280;
var G__10289 = chunk__10281;
var G__10290 = count__10282;
var G__10291 = (i__10283 + (1));
seq__10280 = G__10288;
chunk__10281 = G__10289;
count__10282 = G__10290;
i__10283 = G__10291;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10280);
if(temp__4657__auto__){
var seq__10280__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10280__$1)){
var c__7752__auto__ = cljs.core.chunk_first.call(null,seq__10280__$1);
var G__10292 = cljs.core.chunk_rest.call(null,seq__10280__$1);
var G__10293 = c__7752__auto__;
var G__10294 = cljs.core.count.call(null,c__7752__auto__);
var G__10295 = (0);
seq__10280 = G__10292;
chunk__10281 = G__10293;
count__10282 = G__10294;
i__10283 = G__10295;
continue;
} else {
var s = cljs.core.first.call(null,seq__10280__$1);
var temp__4657__auto___10296__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___10296__$1)){
var sheet_10297 = temp__4657__auto___10296__$1;
var temp__4657__auto___10298__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_10297.href,changed);
if(cljs.core.truth_(temp__4657__auto___10298__$2)){
var href_uri_10299 = temp__4657__auto___10298__$2;
sheet_10297.ownerNode.href = href_uri_10299.makeUnique().toString();
} else {
}
} else {
}

var G__10300 = cljs.core.next.call(null,seq__10280__$1);
var G__10301 = null;
var G__10302 = (0);
var G__10303 = (0);
seq__10280 = G__10300;
chunk__10281 = G__10301;
count__10282 = G__10302;
i__10283 = G__10303;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__10308 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__10309 = null;
var count__10310 = (0);
var i__10311 = (0);
while(true){
if((i__10311 < count__10310)){
var s = cljs.core._nth.call(null,chunk__10309,i__10311);
var temp__4657__auto___10312 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___10312)){
var image_10313 = temp__4657__auto___10312;
var temp__4657__auto___10314__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_10313.src,changed);
if(cljs.core.truth_(temp__4657__auto___10314__$1)){
var href_uri_10315 = temp__4657__auto___10314__$1;
image_10313.src = href_uri_10315.makeUnique().toString();
} else {
}
} else {
}

var G__10316 = seq__10308;
var G__10317 = chunk__10309;
var G__10318 = count__10310;
var G__10319 = (i__10311 + (1));
seq__10308 = G__10316;
chunk__10309 = G__10317;
count__10310 = G__10318;
i__10311 = G__10319;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10308);
if(temp__4657__auto__){
var seq__10308__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10308__$1)){
var c__7752__auto__ = cljs.core.chunk_first.call(null,seq__10308__$1);
var G__10320 = cljs.core.chunk_rest.call(null,seq__10308__$1);
var G__10321 = c__7752__auto__;
var G__10322 = cljs.core.count.call(null,c__7752__auto__);
var G__10323 = (0);
seq__10308 = G__10320;
chunk__10309 = G__10321;
count__10310 = G__10322;
i__10311 = G__10323;
continue;
} else {
var s = cljs.core.first.call(null,seq__10308__$1);
var temp__4657__auto___10324__$1 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___10324__$1)){
var image_10325 = temp__4657__auto___10324__$1;
var temp__4657__auto___10326__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_10325.src,changed);
if(cljs.core.truth_(temp__4657__auto___10326__$2)){
var href_uri_10327 = temp__4657__auto___10326__$2;
image_10325.src = href_uri_10327.makeUnique().toString();
} else {
}
} else {
}

var G__10328 = cljs.core.next.call(null,seq__10308__$1);
var G__10329 = null;
var G__10330 = (0);
var G__10331 = (0);
seq__10308 = G__10328;
chunk__10309 = G__10329;
count__10310 = G__10330;
i__10311 = G__10331;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__10334){
var map__10337 = p__10334;
var map__10337__$1 = ((((!((map__10337 == null)))?((((map__10337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10337.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10337):map__10337);
var on_jsload = cljs.core.get.call(null,map__10337__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__10337,map__10337__$1,on_jsload){
return (function (p1__10332_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__10332_SHARP_,".js");
});})(map__10337,map__10337__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__10337,map__10337__$1,on_jsload){
return (function (p1__10333_SHARP_){
return goog.Uri.parse(p1__10333_SHARP_).makeUnique();
});})(js_files,map__10337,map__10337__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__10337,map__10337__$1,on_jsload){
return (function() { 
var G__10339__delegate = function (_){
return on_jsload.call(null);
};
var G__10339 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__10340__i = 0, G__10340__a = new Array(arguments.length -  0);
while (G__10340__i < G__10340__a.length) {G__10340__a[G__10340__i] = arguments[G__10340__i + 0]; ++G__10340__i;}
  _ = new cljs.core.IndexedSeq(G__10340__a,0);
} 
return G__10339__delegate.call(this,_);};
G__10339.cljs$lang$maxFixedArity = 0;
G__10339.cljs$lang$applyTo = (function (arglist__10341){
var _ = cljs.core.seq(arglist__10341);
return G__10339__delegate(_);
});
G__10339.cljs$core$IFn$_invoke$arity$variadic = G__10339__delegate;
return G__10339;
})()
;})(js_files,map__10337,map__10337__$1,on_jsload))
,((function (js_files,map__10337,map__10337__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__10337,map__10337__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.call(null).getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_uri.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__10346_10350 = cljs.core.seq.call(null,things_to_log);
var chunk__10347_10351 = null;
var count__10348_10352 = (0);
var i__10349_10353 = (0);
while(true){
if((i__10349_10353 < count__10348_10352)){
var t_10354 = cljs.core._nth.call(null,chunk__10347_10351,i__10349_10353);
console.log(t_10354);

var G__10355 = seq__10346_10350;
var G__10356 = chunk__10347_10351;
var G__10357 = count__10348_10352;
var G__10358 = (i__10349_10353 + (1));
seq__10346_10350 = G__10355;
chunk__10347_10351 = G__10356;
count__10348_10352 = G__10357;
i__10349_10353 = G__10358;
continue;
} else {
var temp__4657__auto___10359 = cljs.core.seq.call(null,seq__10346_10350);
if(temp__4657__auto___10359){
var seq__10346_10360__$1 = temp__4657__auto___10359;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10346_10360__$1)){
var c__7752__auto___10361 = cljs.core.chunk_first.call(null,seq__10346_10360__$1);
var G__10362 = cljs.core.chunk_rest.call(null,seq__10346_10360__$1);
var G__10363 = c__7752__auto___10361;
var G__10364 = cljs.core.count.call(null,c__7752__auto___10361);
var G__10365 = (0);
seq__10346_10350 = G__10362;
chunk__10347_10351 = G__10363;
count__10348_10352 = G__10364;
i__10349_10353 = G__10365;
continue;
} else {
var t_10366 = cljs.core.first.call(null,seq__10346_10360__$1);
console.log(t_10366);

var G__10367 = cljs.core.next.call(null,seq__10346_10360__$1);
var G__10368 = null;
var G__10369 = (0);
var G__10370 = (0);
seq__10346_10350 = G__10367;
chunk__10347_10351 = G__10368;
count__10348_10352 = G__10369;
i__10349_10353 = G__10370;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
/**
 * Perform heuristics to check if a non-shimmed DOM is available
 */
adzerk.boot_reload.reload.has_dom_QMARK_ = (function adzerk$boot_reload$reload$has_dom_QMARK_(){
return (typeof window !== 'undefined') && (typeof window.document !== 'undefined') && (typeof window.document.documentURI !== 'undefined');
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
var changed_STAR_ = cljs.core.map.call(null,(function (p1__10371_SHARP_){
return [cljs.core.str(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(p1__10371_SHARP_)].join('');
}),changed);
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__10373 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__10373);

adzerk.boot_reload.reload.reload_css.call(null,G__10373);

adzerk.boot_reload.reload.reload_img.call(null,G__10373);

return G__10373;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map