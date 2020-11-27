// Compiled by ClojureScript 1.10.773 {}
goog.provide('leipzig.melody');
goog.require('cljs.core');
goog.require('leipzig.scale');
/**
 * Returns a function that translates a beat number into seconds.
 *   e.g. ((bpm 90) 5)
 */
leipzig.melody.bpm = (function leipzig$melody$bpm(beats){
return (function (beat){
return ((beat / beats) * (60));
});
});
/**
 * Zips an arbitrary quality onto a melody.
 *   e.g. (->> (rhythm [1 1/2]) (having :drum [:kick :snare]))
 */
leipzig.melody.having = (function leipzig$melody$having(k,values,notes){
return cljs.core.map.call(null,(function (p1__1332_SHARP_,p2__1333_SHARP_){
return cljs.core.assoc.call(null,p1__1332_SHARP_,k,p2__1333_SHARP_);
}),notes,values);
});
leipzig.melody.utter = (function leipzig$melody$utter(object,time,duration,velocity){
if(typeof object === 'number'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pitch","pitch",1495126700),object,new cljs.core.Keyword(null,"time","time",1385887882),time,new cljs.core.Keyword(null,"duration","duration",1444101068),duration,new cljs.core.Keyword(null,"velocity","velocity",-581524355),velocity], null)], null);
} else {
if(cljs.core.sequential_QMARK_.call(null,object)){
return cljs.core.mapcat.call(null,(function (p1__1334_SHARP_){
return leipzig.melody.utter.call(null,p1__1334_SHARP_,time,duration,velocity);
}),object);
} else {
if(cljs.core.map_QMARK_.call(null,object)){
return leipzig.melody.utter.call(null,cljs.core.sort.call(null,cljs.core.vals.call(null,object)),time,duration,velocity);
} else {
if((object == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"time","time",1385887882),time,new cljs.core.Keyword(null,"duration","duration",1444101068),duration], null)], null);
} else {
return null;
}
}
}
}
});
/**
 * Translates a sequence of durations and pitches into a melody.
 *   nil pitches signify rests, vectors represent clusters, and maps
 *   represent chords. Vector durations represent repeated notes.
 *   e.g. (phrase [1/2 1/2 3/2 3/2] [0 1 nil 4])
 *   (phrase [1 1 2] [4 3 [0 2]])
 *   (phrase [1 [1 2]] [4 3])
 *   (phrase (repeat 4) (map #(-> triad (root %))) [0 3 4 3])
 */
leipzig.melody.phrase = (function leipzig$melody$phrase(var_args){
var G__1337 = arguments.length;
switch (G__1337) {
case 3:
return leipzig.melody.phrase.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return leipzig.melody.phrase.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(leipzig.melody.phrase.cljs$core$IFn$_invoke$arity$3 = (function (durations,pitches,velocities){
var wrap = (function (x){
if(cljs.core.sequential_QMARK_.call(null,x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
});
var counts = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.count,wrap),durations);
var normalised_pitches = cljs.core.mapcat.call(null,cljs.core.repeat,counts,pitches);
var normalised_durations = cljs.core.mapcat.call(null,wrap,durations);
var times = cljs.core.reductions.call(null,cljs.core._PLUS_,(0),normalised_durations);
return cljs.core.mapcat.call(null,leipzig.melody.utter,normalised_pitches,times,normalised_durations,velocities);
}));

(leipzig.melody.phrase.cljs$core$IFn$_invoke$arity$2 = (function (durations,pitches){
return cljs.core.map.call(null,(function (p1__1335_SHARP_){
return cljs.core.dissoc.call(null,p1__1335_SHARP_,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
}),leipzig.melody.phrase.call(null,durations,pitches,cljs.core.repeat.call(null,null)));
}));

(leipzig.melody.phrase.cljs$lang$maxFixedArity = 3);

/**
 * Translates a sequence of durations into a rhythm.
 *   e.g. (rhythm [1 1 2])
 */
leipzig.melody.rhythm = (function leipzig$melody$rhythm(durations){
return leipzig.melody.phrase.call(null,durations,cljs.core.repeat.call(null,null));
});
/**
 * Synonym for constantly.
 *   e.g. (->> notes (wherever (comp not :part), :part (is :bass)))
 */
leipzig.melody.is = cljs.core.constantly;
leipzig.melody.if_applicable = (function leipzig$melody$if_applicable(applies_QMARK_,f){
return (function (x){
if(cljs.core.truth_(applies_QMARK_.call(null,x))){
return f.call(null,x);
} else {
return x;
}
});
});
/**
 * Applies f to the k key of each note wherever condition? returns true.
 *   e.g. (->> notes (wherever (comp not :part), :part (is :piano))
 */
leipzig.melody.wherever = (function leipzig$melody$wherever(applies_QMARK_,k,f,notes){
return cljs.core.map.call(null,leipzig.melody.if_applicable.call(null,applies_QMARK_,(function (p1__1339_SHARP_){
return cljs.core.update_in.call(null,p1__1339_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),f);
})),notes);
});
/**
 * Applies f to the k key of each note in notes, ignoring missing keys.
 *   e.g. (->> notes (where :time (bpm 90)))
 */
leipzig.melody.where = (function leipzig$melody$where(k,f,notes){
return leipzig.melody.wherever.call(null,(function (p1__1340_SHARP_){
return cljs.core.contains_QMARK_.call(null,p1__1340_SHARP_,k);
}),k,f,notes);
});
/**
 * Sets a constant value for each note of a melody.
 *   e.g. (->> notes (all :part :drum))
 */
leipzig.melody.all = (function leipzig$melody$all(k,v,notes){
return leipzig.melody.wherever.call(null,leipzig.melody.is.call(null,true),k,leipzig.melody.is.call(null,v),notes);
});
/**
 * Delay notes by wait.
 *   e.g. (->> melody (after 3))
 */
leipzig.melody.after = (function leipzig$melody$after(wait,notes){
return leipzig.melody.where.call(null,new cljs.core.Keyword(null,"time","time",1385887882),leipzig.scale.from.call(null,wait),notes);
});
leipzig.melody.before_QMARK_ = (function leipzig$melody$before_QMARK_(a,b){
return (new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(a) <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(b));
});
/**
 * Blends melodies.
 *   e.g. (->> melody (with bass drums))
 */
leipzig.melody.with$ = (function leipzig$melody$with(var_args){
var G__1345 = arguments.length;
switch (G__1345) {
case 2:
return leipzig.melody.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___1355 = arguments.length;
var i__4737__auto___1356 = (0);
while(true){
if((i__4737__auto___1356 < len__4736__auto___1355)){
args_arr__4757__auto__.push((arguments[i__4737__auto___1356]));

var G__1357 = (i__4737__auto___1356 + (1));
i__4737__auto___1356 = G__1357;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return leipzig.melody.with$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(leipzig.melody.with$.cljs$core$IFn$_invoke$arity$2 = (function (p__1346,p__1347){
var vec__1348 = p__1346;
var seq__1349 = cljs.core.seq.call(null,vec__1348);
var first__1350 = cljs.core.first.call(null,seq__1349);
var seq__1349__$1 = cljs.core.next.call(null,seq__1349);
var a = first__1350;
var other_as = seq__1349__$1;
var as = vec__1348;
var vec__1351 = p__1347;
var seq__1352 = cljs.core.seq.call(null,vec__1351);
var first__1353 = cljs.core.first.call(null,seq__1352);
var seq__1352__$1 = cljs.core.next.call(null,seq__1352);
var b = first__1353;
var other_bs = seq__1352__$1;
var bs = vec__1351;
if(cljs.core.empty_QMARK_.call(null,as)){
return bs;
} else {
if(cljs.core.empty_QMARK_.call(null,bs)){
return as;
} else {
if(leipzig.melody.before_QMARK_.call(null,a,b)){
return cljs.core.cons.call(null,a,(new cljs.core.LazySeq(null,(function (){
return leipzig.melody.with$.call(null,other_as,bs);
}),null,null)));
} else {
return cljs.core.cons.call(null,b,(new cljs.core.LazySeq(null,(function (){
return leipzig.melody.with$.call(null,as,other_bs);
}),null,null)));

}
}
}
}));

(leipzig.melody.with$.cljs$core$IFn$_invoke$arity$variadic = (function (as,bs,others){
return cljs.core.reduce.call(null,leipzig.melody.with$,cljs.core.cons.call(null,as,cljs.core.cons.call(null,bs,others)));
}));

/** @this {Function} */
(leipzig.melody.with$.cljs$lang$applyTo = (function (seq1342){
var G__1343 = cljs.core.first.call(null,seq1342);
var seq1342__$1 = cljs.core.next.call(null,seq1342);
var G__1344 = cljs.core.first.call(null,seq1342__$1);
var seq1342__$2 = cljs.core.next.call(null,seq1342__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1343,G__1344,seq1342__$2);
}));

(leipzig.melody.with$.cljs$lang$maxFixedArity = (2));

/**
 * Replaces part of a melody with another.
 *   e.g. (->> notes (but 2 4 variation))
 */
leipzig.melody.but = (function leipzig$melody$but(start,end,variation,notes){
var starts_in_QMARK_ = (function (p__1358){
var map__1359 = p__1358;
var map__1359__$1 = (((((!((map__1359 == null))))?(((((map__1359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1359):map__1359);
var time = cljs.core.get.call(null,map__1359__$1,new cljs.core.Keyword(null,"time","time",1385887882));
return (((start <= time)) && ((time < end)));
});
var clip = (function (p__1361){
var map__1362 = p__1361;
var map__1362__$1 = (((((!((map__1362 == null))))?(((((map__1362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1362):map__1362);
var note = map__1362__$1;
var time = cljs.core.get.call(null,map__1362__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__1362__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if((((time < start)) && ((start <= (time + duration))))){
return cljs.core.assoc.call(null,note,new cljs.core.Keyword(null,"duration","duration",1444101068),(start - time));
} else {
return note;
}
});
return leipzig.melody.with$.call(null,leipzig.melody.after.call(null,start,variation),cljs.core.map.call(null,clip,cljs.core.filter.call(null,cljs.core.complement.call(null,starts_in_QMARK_),notes)));
});
/**
 * Returns the total duration of notes.
 *   e.g. (->> melody duration)
 */
leipzig.melody.duration = (function leipzig$melody$duration(notes){
var length = (function (p__1364){
var map__1365 = p__1364;
var map__1365__$1 = (((((!((map__1365 == null))))?(((((map__1365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1365):map__1365);
var time = cljs.core.get.call(null,map__1365__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__1365__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
return (time + duration);
});
return cljs.core.reduce.call(null,cljs.core.max,(0),cljs.core.map.call(null,length,notes));
});
/**
 * Sequences later after earlier.
 *   e.g. (->> call (then response))
 */
leipzig.melody.then = (function leipzig$melody$then(later,earlier){
return leipzig.melody.with$.call(null,earlier,leipzig.melody.after.call(null,leipzig.melody.duration.call(null,earlier),later));
});
leipzig.melody.mapthen = (function leipzig$melody$mapthen(var_args){
var args__4742__auto__ = [];
var len__4736__auto___1371 = arguments.length;
var i__4737__auto___1372 = (0);
while(true){
if((i__4737__auto___1372 < len__4736__auto___1371)){
args__4742__auto__.push((arguments[i__4737__auto___1372]));

var G__1373 = (i__4737__auto___1372 + (1));
i__4737__auto___1372 = G__1373;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return leipzig.melody.mapthen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(leipzig.melody.mapthen.cljs$core$IFn$_invoke$arity$variadic = (function (f,melodies){

return cljs.core.reduce.call(null,(function (p1__1368_SHARP_,p2__1367_SHARP_){
return leipzig.melody.then.call(null,p2__1367_SHARP_,p1__1368_SHARP_);
}),cljs.core.apply.call(null,cljs.core.map,f,melodies));
}));

(leipzig.melody.mapthen.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(leipzig.melody.mapthen.cljs$lang$applyTo = (function (seq1369){
var G__1370 = cljs.core.first.call(null,seq1369);
var seq1369__$1 = cljs.core.next.call(null,seq1369);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1370,seq1369__$1);
}));

/**
 * Repeats notes n times.
 *   e.g. (->> bassline (times 4))
 */
leipzig.melody.times = (function leipzig$melody$times(n,notes){
return leipzig.melody.mapthen.call(null,cljs.core.identity,cljs.core.repeat.call(null,n,notes));
});
/**
 * Transform both :time and :duration according to timing.
 *   e.g. (->> notes (tempo (bpm 120)))
 */
leipzig.melody.tempo = (function leipzig$melody$tempo(timing,notes){
return leipzig.melody.where.call(null,new cljs.core.Keyword(null,"time","time",1385887882),timing,cljs.core.map.call(null,(function (p__1374){
var map__1375 = p__1374;
var map__1375__$1 = (((((!((map__1375 == null))))?(((((map__1375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1375):map__1375);
var note = map__1375__$1;
var start = cljs.core.get.call(null,map__1375__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__1375__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
return cljs.core.assoc.call(null,note,new cljs.core.Keyword(null,"duration","duration",1444101068),(timing.call(null,(start + duration)) - timing.call(null,start)));
}),notes));
});
/**
 * Linearly interpolated change between from and to.
 *   e.g. (->> notes (tempo (accelerando 0 4 3/2))))
 */
leipzig.melody.accelerando = (function leipzig$melody$accelerando(from,to,by){
return (function leipzig$melody$accelerando_$_rate(t){
if((from >= t)){
return t;
} else {
if((to >= t)){
var duration = (to - from);
var position = (t - from);
var completion = (position / duration);
var extent = (by - (1));
var base = t;
var extra = (((position * 0.5) * completion) * extent);
return (base + extra);
} else {
return (leipzig$melody$accelerando_$_rate.call(null,to) + (by * (t - to)));

}
}
});
});

//# sourceMappingURL=melody.js.map
