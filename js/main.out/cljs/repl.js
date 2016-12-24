// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__10062){
var map__10087 = p__10062;
var map__10087__$1 = ((((!((map__10087 == null)))?((((map__10087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10087.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10087):map__10087);
var m = map__10087__$1;
var n = cljs.core.get.call(null,map__10087__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__10087__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__10089_10111 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10090_10112 = null;
var count__10091_10113 = (0);
var i__10092_10114 = (0);
while(true){
if((i__10092_10114 < count__10091_10113)){
var f_10115 = cljs.core._nth.call(null,chunk__10090_10112,i__10092_10114);
cljs.core.println.call(null,"  ",f_10115);

var G__10116 = seq__10089_10111;
var G__10117 = chunk__10090_10112;
var G__10118 = count__10091_10113;
var G__10119 = (i__10092_10114 + (1));
seq__10089_10111 = G__10116;
chunk__10090_10112 = G__10117;
count__10091_10113 = G__10118;
i__10092_10114 = G__10119;
continue;
} else {
var temp__4657__auto___10120 = cljs.core.seq.call(null,seq__10089_10111);
if(temp__4657__auto___10120){
var seq__10089_10121__$1 = temp__4657__auto___10120;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10089_10121__$1)){
var c__7752__auto___10122 = cljs.core.chunk_first.call(null,seq__10089_10121__$1);
var G__10123 = cljs.core.chunk_rest.call(null,seq__10089_10121__$1);
var G__10124 = c__7752__auto___10122;
var G__10125 = cljs.core.count.call(null,c__7752__auto___10122);
var G__10126 = (0);
seq__10089_10111 = G__10123;
chunk__10090_10112 = G__10124;
count__10091_10113 = G__10125;
i__10092_10114 = G__10126;
continue;
} else {
var f_10127 = cljs.core.first.call(null,seq__10089_10121__$1);
cljs.core.println.call(null,"  ",f_10127);

var G__10128 = cljs.core.next.call(null,seq__10089_10121__$1);
var G__10129 = null;
var G__10130 = (0);
var G__10131 = (0);
seq__10089_10111 = G__10128;
chunk__10090_10112 = G__10129;
count__10091_10113 = G__10130;
i__10092_10114 = G__10131;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_10132 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6938__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6938__auto__)){
return or__6938__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_10132);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_10132)))?cljs.core.second.call(null,arglists_10132):arglists_10132));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__10093_10133 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10094_10134 = null;
var count__10095_10135 = (0);
var i__10096_10136 = (0);
while(true){
if((i__10096_10136 < count__10095_10135)){
var vec__10097_10137 = cljs.core._nth.call(null,chunk__10094_10134,i__10096_10136);
var name_10138 = cljs.core.nth.call(null,vec__10097_10137,(0),null);
var map__10100_10139 = cljs.core.nth.call(null,vec__10097_10137,(1),null);
var map__10100_10140__$1 = ((((!((map__10100_10139 == null)))?((((map__10100_10139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10100_10139.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10100_10139):map__10100_10139);
var doc_10141 = cljs.core.get.call(null,map__10100_10140__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10142 = cljs.core.get.call(null,map__10100_10140__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10138);

cljs.core.println.call(null," ",arglists_10142);

if(cljs.core.truth_(doc_10141)){
cljs.core.println.call(null," ",doc_10141);
} else {
}

var G__10143 = seq__10093_10133;
var G__10144 = chunk__10094_10134;
var G__10145 = count__10095_10135;
var G__10146 = (i__10096_10136 + (1));
seq__10093_10133 = G__10143;
chunk__10094_10134 = G__10144;
count__10095_10135 = G__10145;
i__10096_10136 = G__10146;
continue;
} else {
var temp__4657__auto___10147 = cljs.core.seq.call(null,seq__10093_10133);
if(temp__4657__auto___10147){
var seq__10093_10148__$1 = temp__4657__auto___10147;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10093_10148__$1)){
var c__7752__auto___10149 = cljs.core.chunk_first.call(null,seq__10093_10148__$1);
var G__10150 = cljs.core.chunk_rest.call(null,seq__10093_10148__$1);
var G__10151 = c__7752__auto___10149;
var G__10152 = cljs.core.count.call(null,c__7752__auto___10149);
var G__10153 = (0);
seq__10093_10133 = G__10150;
chunk__10094_10134 = G__10151;
count__10095_10135 = G__10152;
i__10096_10136 = G__10153;
continue;
} else {
var vec__10102_10154 = cljs.core.first.call(null,seq__10093_10148__$1);
var name_10155 = cljs.core.nth.call(null,vec__10102_10154,(0),null);
var map__10105_10156 = cljs.core.nth.call(null,vec__10102_10154,(1),null);
var map__10105_10157__$1 = ((((!((map__10105_10156 == null)))?((((map__10105_10156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10105_10156.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10105_10156):map__10105_10156);
var doc_10158 = cljs.core.get.call(null,map__10105_10157__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10159 = cljs.core.get.call(null,map__10105_10157__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10155);

cljs.core.println.call(null," ",arglists_10159);

if(cljs.core.truth_(doc_10158)){
cljs.core.println.call(null," ",doc_10158);
} else {
}

var G__10160 = cljs.core.next.call(null,seq__10093_10148__$1);
var G__10161 = null;
var G__10162 = (0);
var G__10163 = (0);
seq__10093_10133 = G__10160;
chunk__10094_10134 = G__10161;
count__10095_10135 = G__10162;
i__10096_10136 = G__10163;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__10107 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__10108 = null;
var count__10109 = (0);
var i__10110 = (0);
while(true){
if((i__10110 < count__10109)){
var role = cljs.core._nth.call(null,chunk__10108,i__10110);
var temp__4657__auto___10164__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___10164__$1)){
var spec_10165 = temp__4657__auto___10164__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_10165));
} else {
}

var G__10166 = seq__10107;
var G__10167 = chunk__10108;
var G__10168 = count__10109;
var G__10169 = (i__10110 + (1));
seq__10107 = G__10166;
chunk__10108 = G__10167;
count__10109 = G__10168;
i__10110 = G__10169;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__10107);
if(temp__4657__auto____$1){
var seq__10107__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10107__$1)){
var c__7752__auto__ = cljs.core.chunk_first.call(null,seq__10107__$1);
var G__10170 = cljs.core.chunk_rest.call(null,seq__10107__$1);
var G__10171 = c__7752__auto__;
var G__10172 = cljs.core.count.call(null,c__7752__auto__);
var G__10173 = (0);
seq__10107 = G__10170;
chunk__10108 = G__10171;
count__10109 = G__10172;
i__10110 = G__10173;
continue;
} else {
var role = cljs.core.first.call(null,seq__10107__$1);
var temp__4657__auto___10174__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___10174__$2)){
var spec_10175 = temp__4657__auto___10174__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_10175));
} else {
}

var G__10176 = cljs.core.next.call(null,seq__10107__$1);
var G__10177 = null;
var G__10178 = (0);
var G__10179 = (0);
seq__10107 = G__10176;
chunk__10108 = G__10177;
count__10109 = G__10178;
i__10110 = G__10179;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map