// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs_music.lib.web_audio');
goog.require('cljs.core');
goog.require('leipzig.temperament');
goog.require('leipzig.melody');
goog.require('cljs_bach.synthesis');
cljs_music.lib.web_audio.debug = false;
if(typeof cljs_music.lib.web_audio.audio_context !== 'undefined'){
} else {
cljs_music.lib.web_audio.audio_context = cljs_bach.synthesis.audio_context.call(null);
}
cljs_music.lib.web_audio.default_delay_secs = 0.05;
cljs_music.lib.web_audio.now = (function cljs_music$lib$web_audio$now(){
return cljs_music.lib.web_audio.audio_context.currentTime;
});
cljs_music.lib.web_audio.play_BANG_ = (function cljs_music$lib$web_audio$play_BANG_(var_args){
var args22503 = [];
var len__21638__auto___22506 = arguments.length;
var i__21639__auto___22507 = (0);
while(true){
if((i__21639__auto___22507 < len__21638__auto___22506)){
args22503.push((arguments[i__21639__auto___22507]));

var G__22508 = (i__21639__auto___22507 + (1));
i__21639__auto___22507 = G__22508;
continue;
} else {
}
break;
}

var G__22505 = args22503.length;
switch (G__22505) {
case 2:
return cljs_music.lib.web_audio.play_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_music.lib.web_audio.play_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22503.length)].join('')));

}
});

cljs_music.lib.web_audio.play_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (sound_source,duration){
return cljs_music.lib.web_audio.play_BANG_.call(null,sound_source,duration,(cljs_music.lib.web_audio.default_delay_secs + cljs_music.lib.web_audio.now.call(null)));
});

cljs_music.lib.web_audio.play_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (sound_source,duration,at){
var connected_instance = cljs_bach.synthesis.connect.call(null,sound_source,cljs_bach.synthesis.destination);
return connected_instance.call(null,cljs_music.lib.web_audio.audio_context,at,duration);
});

cljs_music.lib.web_audio.play_BANG_.cljs$lang$maxFixedArity = 3;

cljs_music.lib.web_audio.play_notes_BANG_ = (function cljs_music$lib$web_audio$play_notes_BANG_(var_args){
var args22510 = [];
var len__21638__auto___22521 = arguments.length;
var i__21639__auto___22522 = (0);
while(true){
if((i__21639__auto___22522 < len__21638__auto___22521)){
args22510.push((arguments[i__21639__auto___22522]));

var G__22523 = (i__21639__auto___22522 + (1));
i__21639__auto___22522 = G__22523;
continue;
} else {
}
break;
}

var G__22512 = args22510.length;
switch (G__22512) {
case 1:
return cljs_music.lib.web_audio.play_notes_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_music.lib.web_audio.play_notes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22510.length)].join('')));

}
});

cljs_music.lib.web_audio.play_notes_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (notes){
return cljs_music.lib.web_audio.play_BANG_.call(null,notes,(cljs_music.lib.web_audio.default_delay_secs + cljs_music.lib.web_audio.now.call(null)));
});

cljs_music.lib.web_audio.play_notes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (notes,at){
if(cljs.core.truth_(cljs_music.lib.web_audio.debug)){
console.log("--- play! ---");

console.log("Now: ",cljs_music.lib.web_audio.now.call(null));

console.log("Scheduled start: ",at);

console.log("Time until scheduled start: ",(at - cljs_music.lib.web_audio.now.call(null)));

console.log("Notes duration: ",leipzig.melody.duration.call(null,notes));
} else {
}

var seq__22513 = cljs.core.seq.call(null,notes);
var chunk__22514 = null;
var count__22515 = (0);
var i__22516 = (0);
while(true){
if((i__22516 < count__22515)){
var map__22517 = cljs.core._nth.call(null,chunk__22514,i__22516);
var map__22517__$1 = ((((!((map__22517 == null)))?((((map__22517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22517.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22517):map__22517);
var note = map__22517__$1;
var time = cljs.core.get.call(null,map__22517__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__22517__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var instrument = cljs.core.get.call(null,map__22517__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
cljs_music.lib.web_audio.play_BANG_.call(null,instrument.call(null,cljs.core.dissoc.call(null,cljs.core.update.call(null,note,new cljs.core.Keyword(null,"pitch","pitch",1495126700),leipzig.temperament.equal),new cljs.core.Keyword(null,"time","time",1385887882))),duration,(time + at));

var G__22525 = seq__22513;
var G__22526 = chunk__22514;
var G__22527 = count__22515;
var G__22528 = (i__22516 + (1));
seq__22513 = G__22525;
chunk__22514 = G__22526;
count__22515 = G__22527;
i__22516 = G__22528;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22513);
if(temp__4657__auto__){
var seq__22513__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22513__$1)){
var c__21344__auto__ = cljs.core.chunk_first.call(null,seq__22513__$1);
var G__22529 = cljs.core.chunk_rest.call(null,seq__22513__$1);
var G__22530 = c__21344__auto__;
var G__22531 = cljs.core.count.call(null,c__21344__auto__);
var G__22532 = (0);
seq__22513 = G__22529;
chunk__22514 = G__22530;
count__22515 = G__22531;
i__22516 = G__22532;
continue;
} else {
var map__22519 = cljs.core.first.call(null,seq__22513__$1);
var map__22519__$1 = ((((!((map__22519 == null)))?((((map__22519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22519.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22519):map__22519);
var note = map__22519__$1;
var time = cljs.core.get.call(null,map__22519__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__22519__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var instrument = cljs.core.get.call(null,map__22519__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
cljs_music.lib.web_audio.play_BANG_.call(null,instrument.call(null,cljs.core.dissoc.call(null,cljs.core.update.call(null,note,new cljs.core.Keyword(null,"pitch","pitch",1495126700),leipzig.temperament.equal),new cljs.core.Keyword(null,"time","time",1385887882))),duration,(time + at));

var G__22533 = cljs.core.next.call(null,seq__22513__$1);
var G__22534 = null;
var G__22535 = (0);
var G__22536 = (0);
seq__22513 = G__22533;
chunk__22514 = G__22534;
count__22515 = G__22535;
i__22516 = G__22536;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs_music.lib.web_audio.play_notes_BANG_.cljs$lang$maxFixedArity = 2;

cljs_music.lib.web_audio.loop_BANG_ = (function cljs_music$lib$web_audio$loop_BANG_(var_args){
var args22537 = [];
var len__21638__auto___22540 = arguments.length;
var i__21639__auto___22541 = (0);
while(true){
if((i__21639__auto___22541 < len__21638__auto___22540)){
args22537.push((arguments[i__21639__auto___22541]));

var G__22542 = (i__21639__auto___22541 + (1));
i__21639__auto___22541 = G__22542;
continue;
} else {
}
break;
}

var G__22539 = args22537.length;
switch (G__22539) {
case 1:
return cljs_music.lib.web_audio.loop_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return cljs_music.lib.web_audio.loop_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22537.length)].join('')));

}
});

cljs_music.lib.web_audio.loop_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (live_fn){
return cljs_music.lib.web_audio.loop_BANG_.call(null,live_fn,cljs.core.PersistentVector.EMPTY,(cljs_music.lib.web_audio.default_delay_secs + cljs_music.lib.web_audio.now.call(null)));
});

cljs_music.lib.web_audio.loop_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (live_fn,prev_notes,at){
var notes = live_fn.call(null,prev_notes);
var notes_dur = leipzig.melody.duration.call(null,notes);
var next_at = (at + notes_dur);
var next_loop = (at + (notes_dur / (2)));
var loop_delay = (next_loop - cljs_music.lib.web_audio.now.call(null));
var loop_delay_ms = ((1000) * loop_delay);
cljs_music.lib.web_audio.play_notes_BANG_.call(null,notes,at);

return setTimeout(((function (notes,notes_dur,next_at,next_loop,loop_delay,loop_delay_ms){
return (function (){
return cljs_music.lib.web_audio.loop_BANG_.call(null,live_fn,notes,next_at);
});})(notes,notes_dur,next_at,next_loop,loop_delay,loop_delay_ms))
,loop_delay_ms);
});

cljs_music.lib.web_audio.loop_BANG_.cljs$lang$maxFixedArity = 3;

cljs_music.lib.web_audio.pause_BANG_ = (function cljs_music$lib$web_audio$pause_BANG_(){
return cljs_music.lib.web_audio.audio_context.suspend();
});
cljs_music.lib.web_audio.resume_BANG_ = (function cljs_music$lib$web_audio$resume_BANG_(){
return cljs_music.lib.web_audio.audio_context.resume();
});

//# sourceMappingURL=web_audio.js.map?rel=1482038774038