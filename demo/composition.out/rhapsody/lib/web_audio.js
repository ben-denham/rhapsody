// Compiled by ClojureScript 1.9.293 {}
goog.provide('rhapsody.lib.web_audio');
goog.require('cljs.core');
goog.require('leipzig.temperament');
goog.require('leipzig.melody');
goog.require('cljs_bach.synthesis');
rhapsody.lib.web_audio.debug = false;
if(typeof rhapsody.lib.web_audio.audio_context !== 'undefined'){
} else {
rhapsody.lib.web_audio.audio_context = cljs_bach.synthesis.audio_context.call(null);
}
rhapsody.lib.web_audio.default_delay_secs = 0.05;
rhapsody.lib.web_audio.now = (function rhapsody$lib$web_audio$now(){
return rhapsody.lib.web_audio.audio_context.currentTime;
});
rhapsody.lib.web_audio.play_BANG_ = (function rhapsody$lib$web_audio$play_BANG_(var_args){
var args8303 = [];
var len__8046__auto___8306 = arguments.length;
var i__8047__auto___8307 = (0);
while(true){
if((i__8047__auto___8307 < len__8046__auto___8306)){
args8303.push((arguments[i__8047__auto___8307]));

var G__8308 = (i__8047__auto___8307 + (1));
i__8047__auto___8307 = G__8308;
continue;
} else {
}
break;
}

var G__8305 = args8303.length;
switch (G__8305) {
case 2:
return rhapsody.lib.web_audio.play_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rhapsody.lib.web_audio.play_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8303.length)].join('')));

}
});

rhapsody.lib.web_audio.play_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (sound_source,duration){
return rhapsody.lib.web_audio.play_BANG_.call(null,sound_source,duration,(rhapsody.lib.web_audio.default_delay_secs + rhapsody.lib.web_audio.now.call(null)));
});

rhapsody.lib.web_audio.play_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (sound_source,duration,at){
var connected_instance = cljs_bach.synthesis.connect.call(null,sound_source,cljs_bach.synthesis.destination);
return connected_instance.call(null,rhapsody.lib.web_audio.audio_context,at,duration);
});

rhapsody.lib.web_audio.play_BANG_.cljs$lang$maxFixedArity = 3;

rhapsody.lib.web_audio.play_notes_BANG_ = (function rhapsody$lib$web_audio$play_notes_BANG_(var_args){
var args8310 = [];
var len__8046__auto___8321 = arguments.length;
var i__8047__auto___8322 = (0);
while(true){
if((i__8047__auto___8322 < len__8046__auto___8321)){
args8310.push((arguments[i__8047__auto___8322]));

var G__8323 = (i__8047__auto___8322 + (1));
i__8047__auto___8322 = G__8323;
continue;
} else {
}
break;
}

var G__8312 = args8310.length;
switch (G__8312) {
case 1:
return rhapsody.lib.web_audio.play_notes_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rhapsody.lib.web_audio.play_notes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8310.length)].join('')));

}
});

rhapsody.lib.web_audio.play_notes_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (notes){
return rhapsody.lib.web_audio.play_BANG_.call(null,notes,(rhapsody.lib.web_audio.default_delay_secs + rhapsody.lib.web_audio.now.call(null)));
});

rhapsody.lib.web_audio.play_notes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (notes,at){
if(cljs.core.truth_(rhapsody.lib.web_audio.debug)){
console.log("--- play! ---");

console.log("Now: ",rhapsody.lib.web_audio.now.call(null));

console.log("Scheduled start: ",at);

console.log("Time until scheduled start: ",(at - rhapsody.lib.web_audio.now.call(null)));

console.log("Notes duration: ",leipzig.melody.duration.call(null,notes));
} else {
}

var seq__8313 = cljs.core.seq.call(null,notes);
var chunk__8314 = null;
var count__8315 = (0);
var i__8316 = (0);
while(true){
if((i__8316 < count__8315)){
var map__8317 = cljs.core._nth.call(null,chunk__8314,i__8316);
var map__8317__$1 = ((((!((map__8317 == null)))?((((map__8317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8317.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8317):map__8317);
var note = map__8317__$1;
var time = cljs.core.get.call(null,map__8317__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__8317__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var instrument = cljs.core.get.call(null,map__8317__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
rhapsody.lib.web_audio.play_BANG_.call(null,instrument.call(null,cljs.core.dissoc.call(null,cljs.core.update.call(null,note,new cljs.core.Keyword(null,"pitch","pitch",1495126700),leipzig.temperament.equal),new cljs.core.Keyword(null,"time","time",1385887882))),duration,(time + at));

var G__8325 = seq__8313;
var G__8326 = chunk__8314;
var G__8327 = count__8315;
var G__8328 = (i__8316 + (1));
seq__8313 = G__8325;
chunk__8314 = G__8326;
count__8315 = G__8327;
i__8316 = G__8328;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8313);
if(temp__4657__auto__){
var seq__8313__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8313__$1)){
var c__7752__auto__ = cljs.core.chunk_first.call(null,seq__8313__$1);
var G__8329 = cljs.core.chunk_rest.call(null,seq__8313__$1);
var G__8330 = c__7752__auto__;
var G__8331 = cljs.core.count.call(null,c__7752__auto__);
var G__8332 = (0);
seq__8313 = G__8329;
chunk__8314 = G__8330;
count__8315 = G__8331;
i__8316 = G__8332;
continue;
} else {
var map__8319 = cljs.core.first.call(null,seq__8313__$1);
var map__8319__$1 = ((((!((map__8319 == null)))?((((map__8319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8319.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8319):map__8319);
var note = map__8319__$1;
var time = cljs.core.get.call(null,map__8319__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__8319__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var instrument = cljs.core.get.call(null,map__8319__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
rhapsody.lib.web_audio.play_BANG_.call(null,instrument.call(null,cljs.core.dissoc.call(null,cljs.core.update.call(null,note,new cljs.core.Keyword(null,"pitch","pitch",1495126700),leipzig.temperament.equal),new cljs.core.Keyword(null,"time","time",1385887882))),duration,(time + at));

var G__8333 = cljs.core.next.call(null,seq__8313__$1);
var G__8334 = null;
var G__8335 = (0);
var G__8336 = (0);
seq__8313 = G__8333;
chunk__8314 = G__8334;
count__8315 = G__8335;
i__8316 = G__8336;
continue;
}
} else {
return null;
}
}
break;
}
});

rhapsody.lib.web_audio.play_notes_BANG_.cljs$lang$maxFixedArity = 2;

rhapsody.lib.web_audio.loop_BANG_ = (function rhapsody$lib$web_audio$loop_BANG_(var_args){
var args8337 = [];
var len__8046__auto___8340 = arguments.length;
var i__8047__auto___8341 = (0);
while(true){
if((i__8047__auto___8341 < len__8046__auto___8340)){
args8337.push((arguments[i__8047__auto___8341]));

var G__8342 = (i__8047__auto___8341 + (1));
i__8047__auto___8341 = G__8342;
continue;
} else {
}
break;
}

var G__8339 = args8337.length;
switch (G__8339) {
case 1:
return rhapsody.lib.web_audio.loop_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return rhapsody.lib.web_audio.loop_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8337.length)].join('')));

}
});

rhapsody.lib.web_audio.loop_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (live_fn){
return rhapsody.lib.web_audio.loop_BANG_.call(null,live_fn,cljs.core.PersistentVector.EMPTY,(rhapsody.lib.web_audio.default_delay_secs + rhapsody.lib.web_audio.now.call(null)));
});

rhapsody.lib.web_audio.loop_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (live_fn,prev_notes,at){
var notes = live_fn.call(null,prev_notes);
var notes_dur = leipzig.melody.duration.call(null,notes);
var next_at = (at + notes_dur);
var next_loop = (at + (notes_dur / (2)));
var loop_delay = (next_loop - rhapsody.lib.web_audio.now.call(null));
var loop_delay_ms = ((1000) * loop_delay);
rhapsody.lib.web_audio.play_notes_BANG_.call(null,notes,at);

return setTimeout(((function (notes,notes_dur,next_at,next_loop,loop_delay,loop_delay_ms){
return (function (){
return rhapsody.lib.web_audio.loop_BANG_.call(null,live_fn,notes,next_at);
});})(notes,notes_dur,next_at,next_loop,loop_delay,loop_delay_ms))
,loop_delay_ms);
});

rhapsody.lib.web_audio.loop_BANG_.cljs$lang$maxFixedArity = 3;

rhapsody.lib.web_audio.pause_BANG_ = (function rhapsody$lib$web_audio$pause_BANG_(){
return rhapsody.lib.web_audio.audio_context.suspend();
});
rhapsody.lib.web_audio.resume_BANG_ = (function rhapsody$lib$web_audio$resume_BANG_(){
return rhapsody.lib.web_audio.audio_context.resume();
});

//# sourceMappingURL=web_audio.js.map