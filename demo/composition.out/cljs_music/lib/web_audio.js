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
var args11194 = [];
var len__8046__auto___11197 = arguments.length;
var i__8047__auto___11198 = (0);
while(true){
if((i__8047__auto___11198 < len__8046__auto___11197)){
args11194.push((arguments[i__8047__auto___11198]));

var G__11199 = (i__8047__auto___11198 + (1));
i__8047__auto___11198 = G__11199;
continue;
} else {
}
break;
}

var G__11196 = args11194.length;
switch (G__11196) {
case 2:
return cljs_music.lib.web_audio.play_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_music.lib.web_audio.play_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11194.length)].join('')));

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
var args11201 = [];
var len__8046__auto___11212 = arguments.length;
var i__8047__auto___11213 = (0);
while(true){
if((i__8047__auto___11213 < len__8046__auto___11212)){
args11201.push((arguments[i__8047__auto___11213]));

var G__11214 = (i__8047__auto___11213 + (1));
i__8047__auto___11213 = G__11214;
continue;
} else {
}
break;
}

var G__11203 = args11201.length;
switch (G__11203) {
case 1:
return cljs_music.lib.web_audio.play_notes_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_music.lib.web_audio.play_notes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11201.length)].join('')));

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

var seq__11204 = cljs.core.seq.call(null,notes);
var chunk__11205 = null;
var count__11206 = (0);
var i__11207 = (0);
while(true){
if((i__11207 < count__11206)){
var map__11208 = cljs.core._nth.call(null,chunk__11205,i__11207);
var map__11208__$1 = ((((!((map__11208 == null)))?((((map__11208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11208.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11208):map__11208);
var note = map__11208__$1;
var time = cljs.core.get.call(null,map__11208__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__11208__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var instrument = cljs.core.get.call(null,map__11208__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
cljs_music.lib.web_audio.play_BANG_.call(null,instrument.call(null,cljs.core.dissoc.call(null,cljs.core.update.call(null,note,new cljs.core.Keyword(null,"pitch","pitch",1495126700),leipzig.temperament.equal),new cljs.core.Keyword(null,"time","time",1385887882))),duration,(time + at));

var G__11216 = seq__11204;
var G__11217 = chunk__11205;
var G__11218 = count__11206;
var G__11219 = (i__11207 + (1));
seq__11204 = G__11216;
chunk__11205 = G__11217;
count__11206 = G__11218;
i__11207 = G__11219;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11204);
if(temp__4657__auto__){
var seq__11204__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11204__$1)){
var c__7752__auto__ = cljs.core.chunk_first.call(null,seq__11204__$1);
var G__11220 = cljs.core.chunk_rest.call(null,seq__11204__$1);
var G__11221 = c__7752__auto__;
var G__11222 = cljs.core.count.call(null,c__7752__auto__);
var G__11223 = (0);
seq__11204 = G__11220;
chunk__11205 = G__11221;
count__11206 = G__11222;
i__11207 = G__11223;
continue;
} else {
var map__11210 = cljs.core.first.call(null,seq__11204__$1);
var map__11210__$1 = ((((!((map__11210 == null)))?((((map__11210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11210.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11210):map__11210);
var note = map__11210__$1;
var time = cljs.core.get.call(null,map__11210__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__11210__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var instrument = cljs.core.get.call(null,map__11210__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
cljs_music.lib.web_audio.play_BANG_.call(null,instrument.call(null,cljs.core.dissoc.call(null,cljs.core.update.call(null,note,new cljs.core.Keyword(null,"pitch","pitch",1495126700),leipzig.temperament.equal),new cljs.core.Keyword(null,"time","time",1385887882))),duration,(time + at));

var G__11224 = cljs.core.next.call(null,seq__11204__$1);
var G__11225 = null;
var G__11226 = (0);
var G__11227 = (0);
seq__11204 = G__11224;
chunk__11205 = G__11225;
count__11206 = G__11226;
i__11207 = G__11227;
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
var args11228 = [];
var len__8046__auto___11231 = arguments.length;
var i__8047__auto___11232 = (0);
while(true){
if((i__8047__auto___11232 < len__8046__auto___11231)){
args11228.push((arguments[i__8047__auto___11232]));

var G__11233 = (i__8047__auto___11232 + (1));
i__8047__auto___11232 = G__11233;
continue;
} else {
}
break;
}

var G__11230 = args11228.length;
switch (G__11230) {
case 1:
return cljs_music.lib.web_audio.loop_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return cljs_music.lib.web_audio.loop_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11228.length)].join('')));

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

//# sourceMappingURL=web_audio.js.map