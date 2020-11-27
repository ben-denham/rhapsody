// Compiled by ClojureScript 1.10.773 {}
goog.provide('rhapsody.lib.web_audio');
goog.require('cljs.core');
goog.require('leipzig.temperament');
goog.require('leipzig.melody');
goog.require('cljs_bach.synthesis');
goog.require('web_audio.constant_source_node');
ConstantSourceNode.polyfill();
rhapsody.lib.web_audio._STAR_debug_STAR_ = false;
if((typeof rhapsody !== 'undefined') && (typeof rhapsody.lib !== 'undefined') && (typeof rhapsody.lib.web_audio !== 'undefined') && (typeof rhapsody.lib.web_audio.audio_context !== 'undefined')){
} else {
rhapsody.lib.web_audio.audio_context = cljs_bach.synthesis.audio_context.call(null);
}
rhapsody.lib.web_audio.default_delay_secs = 0.05;
rhapsody.lib.web_audio.now = (function rhapsody$lib$web_audio$now(){
return rhapsody.lib.web_audio.audio_context.currentTime;
});
rhapsody.lib.web_audio.play_BANG_ = (function rhapsody$lib$web_audio$play_BANG_(var_args){
var G__1380 = arguments.length;
switch (G__1380) {
case 2:
return rhapsody.lib.web_audio.play_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rhapsody.lib.web_audio.play_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rhapsody.lib.web_audio.play_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (sound_source,duration){
return rhapsody.lib.web_audio.play_BANG_.call(null,sound_source,duration,(rhapsody.lib.web_audio.default_delay_secs + rhapsody.lib.web_audio.now.call(null)));
}));

(rhapsody.lib.web_audio.play_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (sound_source,duration,at){
var connected_instance = cljs_bach.synthesis.connect.call(null,sound_source,cljs_bach.synthesis.destination);
var adjusted_duration = (duration - (1));
return connected_instance.call(null,rhapsody.lib.web_audio.audio_context,at,adjusted_duration);
}));

(rhapsody.lib.web_audio.play_BANG_.cljs$lang$maxFixedArity = 3);

rhapsody.lib.web_audio.play_notes_BANG_ = (function rhapsody$lib$web_audio$play_notes_BANG_(var_args){
var G__1383 = arguments.length;
switch (G__1383) {
case 1:
return rhapsody.lib.web_audio.play_notes_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rhapsody.lib.web_audio.play_notes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rhapsody.lib.web_audio.play_notes_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rhapsody.lib.web_audio.play_notes_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (notes){
return rhapsody.lib.web_audio.play_notes_BANG_.call(null,notes,null);
}));

(rhapsody.lib.web_audio.play_notes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (notes,default_instrument){
return rhapsody.lib.web_audio.play_notes_BANG_.call(null,notes,default_instrument,(rhapsody.lib.web_audio.default_delay_secs + rhapsody.lib.web_audio.now.call(null)));
}));

(rhapsody.lib.web_audio.play_notes_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (notes,default_instrument,at){
if(cljs.core.truth_(rhapsody.lib.web_audio._STAR_debug_STAR_)){
console.log("--- play! ---");

console.log("Now: ",rhapsody.lib.web_audio.now.call(null));

console.log("Scheduled start: ",at);

console.log("Time until scheduled start: ",(at - rhapsody.lib.web_audio.now.call(null)));

console.log("Notes duration: ",leipzig.melody.duration.call(null,notes));
} else {
}

var seq__1384_1397 = cljs.core.seq.call(null,notes);
var chunk__1385_1398 = null;
var count__1386_1399 = (0);
var i__1387_1400 = (0);
while(true){
if((i__1387_1400 < count__1386_1399)){
var map__1392_1401 = cljs.core._nth.call(null,chunk__1385_1398,i__1387_1400);
var map__1392_1402__$1 = (((((!((map__1392_1401 == null))))?(((((map__1392_1401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1392_1401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1392_1401):map__1392_1401);
var note_1403 = map__1392_1402__$1;
var time_1404 = cljs.core.get.call(null,map__1392_1402__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration_1405 = cljs.core.get.call(null,map__1392_1402__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var instrument_1406 = cljs.core.get.call(null,map__1392_1402__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var temp__4655__auto___1407 = (function (){var or__4126__auto__ = instrument_1406;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default_instrument;
}
})();
if(cljs.core.truth_(temp__4655__auto___1407)){
var inst_1408 = temp__4655__auto___1407;
rhapsody.lib.web_audio.play_BANG_.call(null,inst_1408.call(null,cljs.core.dissoc.call(null,cljs.core.update.call(null,note_1403,new cljs.core.Keyword(null,"pitch","pitch",1495126700),leipzig.temperament.equal),new cljs.core.Keyword(null,"time","time",1385887882))),duration_1405,(time_1404 + at));
} else {
}

if(cljs.core.truth_(rhapsody.lib.web_audio._STAR_debug_STAR_)){
console.log("Skipping note with no instrument");
} else {
}


var G__1409 = seq__1384_1397;
var G__1410 = chunk__1385_1398;
var G__1411 = count__1386_1399;
var G__1412 = (i__1387_1400 + (1));
seq__1384_1397 = G__1409;
chunk__1385_1398 = G__1410;
count__1386_1399 = G__1411;
i__1387_1400 = G__1412;
continue;
} else {
var temp__4657__auto___1413 = cljs.core.seq.call(null,seq__1384_1397);
if(temp__4657__auto___1413){
var seq__1384_1414__$1 = temp__4657__auto___1413;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1384_1414__$1)){
var c__4556__auto___1415 = cljs.core.chunk_first.call(null,seq__1384_1414__$1);
var G__1416 = cljs.core.chunk_rest.call(null,seq__1384_1414__$1);
var G__1417 = c__4556__auto___1415;
var G__1418 = cljs.core.count.call(null,c__4556__auto___1415);
var G__1419 = (0);
seq__1384_1397 = G__1416;
chunk__1385_1398 = G__1417;
count__1386_1399 = G__1418;
i__1387_1400 = G__1419;
continue;
} else {
var map__1394_1420 = cljs.core.first.call(null,seq__1384_1414__$1);
var map__1394_1421__$1 = (((((!((map__1394_1420 == null))))?(((((map__1394_1420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1394_1420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1394_1420):map__1394_1420);
var note_1422 = map__1394_1421__$1;
var time_1423 = cljs.core.get.call(null,map__1394_1421__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration_1424 = cljs.core.get.call(null,map__1394_1421__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var instrument_1425 = cljs.core.get.call(null,map__1394_1421__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var temp__4655__auto___1426 = (function (){var or__4126__auto__ = instrument_1425;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default_instrument;
}
})();
if(cljs.core.truth_(temp__4655__auto___1426)){
var inst_1427 = temp__4655__auto___1426;
rhapsody.lib.web_audio.play_BANG_.call(null,inst_1427.call(null,cljs.core.dissoc.call(null,cljs.core.update.call(null,note_1422,new cljs.core.Keyword(null,"pitch","pitch",1495126700),leipzig.temperament.equal),new cljs.core.Keyword(null,"time","time",1385887882))),duration_1424,(time_1423 + at));
} else {
}

if(cljs.core.truth_(rhapsody.lib.web_audio._STAR_debug_STAR_)){
console.log("Skipping note with no instrument");
} else {
}


var G__1428 = cljs.core.next.call(null,seq__1384_1414__$1);
var G__1429 = null;
var G__1430 = (0);
var G__1431 = (0);
seq__1384_1397 = G__1428;
chunk__1385_1398 = G__1429;
count__1386_1399 = G__1430;
i__1387_1400 = G__1431;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(rhapsody.lib.web_audio._STAR_debug_STAR_)){
return console.log("Scheduling finished: ",rhapsody.lib.web_audio.now.call(null));
} else {
return null;
}
}));

(rhapsody.lib.web_audio.play_notes_BANG_.cljs$lang$maxFixedArity = 3);

rhapsody.lib.web_audio.loop_BANG_ = (function rhapsody$lib$web_audio$loop_BANG_(var_args){
var G__1433 = arguments.length;
switch (G__1433) {
case 1:
return rhapsody.lib.web_audio.loop_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return rhapsody.lib.web_audio.loop_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rhapsody.lib.web_audio.loop_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (live_fn){
var delay = leipzig.melody.duration.call(null,live_fn.call(null,cljs.core.PersistentVector.EMPTY));
return rhapsody.lib.web_audio.loop_BANG_.call(null,live_fn,cljs.core.PersistentVector.EMPTY,(rhapsody.lib.web_audio.now.call(null) + delay));
}));

(rhapsody.lib.web_audio.loop_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (live_fn,prev_notes,at){
var notes = live_fn.call(null,prev_notes);
var notes_dur = leipzig.melody.duration.call(null,notes);
var next_at = (at + notes_dur);
var next_loop = (at + (notes_dur / (2)));
var loop_delay = (next_loop - rhapsody.lib.web_audio.now.call(null));
var loop_delay_ms = ((1000) * loop_delay);
rhapsody.lib.web_audio.play_notes_BANG_.call(null,notes,null,at);

return setTimeout((function (){
return rhapsody.lib.web_audio.loop_BANG_.call(null,live_fn,notes,next_at);
}),loop_delay_ms);
}));

(rhapsody.lib.web_audio.loop_BANG_.cljs$lang$maxFixedArity = 3);

rhapsody.lib.web_audio.pause_BANG_ = (function rhapsody$lib$web_audio$pause_BANG_(){
return rhapsody.lib.web_audio.audio_context.suspend();
});
rhapsody.lib.web_audio.resume_BANG_ = (function rhapsody$lib$web_audio$resume_BANG_(){
return rhapsody.lib.web_audio.audio_context.resume();
});
rhapsody.lib.web_audio.set_input_BANG_ = (function rhapsody$lib$web_audio$set_input_BANG_(input,val){

return (input.offset.value = val);
});
rhapsody.lib.web_audio.make_input_BANG_ = (function rhapsody$lib$web_audio$make_input_BANG_(context,init_val){

var input = context.createConstantSource();
var G__1435 = input;
G__1435.start();

rhapsody.lib.web_audio.set_input_BANG_.call(null,G__1435,init_val);

return G__1435;
});
rhapsody.lib.web_audio.ramp_end_time = (function rhapsody$lib$web_audio$ramp_end_time(input,target,vel){

var now = input.context.currentTime;
var current_val = input.offset.value;
var val_diff = Math.abs((current_val - target));
var ramp_duration = (val_diff / vel);
return (now + ramp_duration);
});
rhapsody.lib.web_audio.lin_ramp_input_BANG_ = (function rhapsody$lib$web_audio$lin_ramp_input_BANG_(input,target,vel){

var end_time = rhapsody.lib.web_audio.ramp_end_time.call(null,input,target,vel);
return input.offset.linearRampToValueAtTime(target,end_time);
});
rhapsody.lib.web_audio.exp_ramp_input_BANG_ = (function rhapsody$lib$web_audio$exp_ramp_input_BANG_(input,target,vel){

var end_time = rhapsody.lib.web_audio.ramp_end_time.call(null,input,target,vel);
return input.offset.exponentialRampToValueAtTime(target,end_time);
});
rhapsody.lib.web_audio.jack = (function rhapsody$lib$web_audio$jack(input){

return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,input);
});
});

//# sourceMappingURL=web_audio.js.map
