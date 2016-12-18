// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs_music.lib.midi');
goog.require('cljs.core');
cljs_music.lib.midi.midi_listener = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs_music.lib.midi.midi_handler = (function cljs_music$lib$midi$midi_handler(type,midi_event){
var event_map = cljs.core.js__GT_clj.call(null,midi_event,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var listener = cljs.core.get.call(null,cljs.core.deref.call(null,cljs_music.lib.midi.midi_listener),type);
return listener.call(null,event_map);
});
cljs_music.lib.midi.midi_init_BANG_ = (function cljs_music$lib$midi$midi_init_BANG_(type){
return WebMidi.enable((function (){
var inputs = WebMidi.inputs;
var seq__22353 = cljs.core.seq.call(null,inputs);
var chunk__22354 = null;
var count__22355 = (0);
var i__22356 = (0);
while(true){
if((i__22356 < count__22355)){
var input = cljs.core._nth.call(null,chunk__22354,i__22356);
input.addListener(type,"all",((function (seq__22353,chunk__22354,count__22355,i__22356,input,inputs){
return (function (p1__22348_SHARP_){
return cljs_music.lib.midi.midi_handler.call(null,type,p1__22348_SHARP_);
});})(seq__22353,chunk__22354,count__22355,i__22356,input,inputs))
);

var G__22357 = seq__22353;
var G__22358 = chunk__22354;
var G__22359 = count__22355;
var G__22360 = (i__22356 + (1));
seq__22353 = G__22357;
chunk__22354 = G__22358;
count__22355 = G__22359;
i__22356 = G__22360;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22353);
if(temp__4657__auto__){
var seq__22353__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22353__$1)){
var c__21344__auto__ = cljs.core.chunk_first.call(null,seq__22353__$1);
var G__22361 = cljs.core.chunk_rest.call(null,seq__22353__$1);
var G__22362 = c__21344__auto__;
var G__22363 = cljs.core.count.call(null,c__21344__auto__);
var G__22364 = (0);
seq__22353 = G__22361;
chunk__22354 = G__22362;
count__22355 = G__22363;
i__22356 = G__22364;
continue;
} else {
var input = cljs.core.first.call(null,seq__22353__$1);
input.addListener(type,"all",((function (seq__22353,chunk__22354,count__22355,i__22356,input,seq__22353__$1,temp__4657__auto__,inputs){
return (function (p1__22348_SHARP_){
return cljs_music.lib.midi.midi_handler.call(null,type,p1__22348_SHARP_);
});})(seq__22353,chunk__22354,count__22355,i__22356,input,seq__22353__$1,temp__4657__auto__,inputs))
);

var G__22365 = cljs.core.next.call(null,seq__22353__$1);
var G__22366 = null;
var G__22367 = (0);
var G__22368 = (0);
seq__22353 = G__22365;
chunk__22354 = G__22366;
count__22355 = G__22367;
i__22356 = G__22368;
continue;
}
} else {
return null;
}
}
break;
}
}));
});
cljs_music.lib.midi.set_midi_listener_BANG_ = (function cljs_music$lib$midi$set_midi_listener_BANG_(type,listener){
if(cljs.core.not.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,cljs_music.lib.midi.midi_listener),type))){
cljs_music.lib.midi.midi_init_BANG_.call(null,type);
} else {
}

return cljs.core.swap_BANG_.call(null,cljs_music.lib.midi.midi_listener,cljs.core.assoc,type,listener);
});

//# sourceMappingURL=midi.js.map?rel=1482038773740