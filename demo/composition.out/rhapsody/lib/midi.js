// Compiled by ClojureScript 1.9.293 {}
goog.provide('rhapsody.lib.midi');
goog.require('cljs.core');
goog.require('webmidi.webmidi');
rhapsody.lib.midi.midi_listener = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
rhapsody.lib.midi.midi_handler = (function rhapsody$lib$midi$midi_handler(type,midi_event){
var event_map = cljs.core.js__GT_clj.call(null,midi_event,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var listener = cljs.core.get.call(null,cljs.core.deref.call(null,rhapsody.lib.midi.midi_listener),type);
return listener.call(null,event_map);
});
rhapsody.lib.midi.midi_init_BANG_ = (function rhapsody$lib$midi$midi_init_BANG_(type){
return WebMidi.enable((function (){
var inputs = WebMidi.inputs;
var seq__8351 = cljs.core.seq.call(null,inputs);
var chunk__8352 = null;
var count__8353 = (0);
var i__8354 = (0);
while(true){
if((i__8354 < count__8353)){
var input = cljs.core._nth.call(null,chunk__8352,i__8354);
input.addListener(type,"all",((function (seq__8351,chunk__8352,count__8353,i__8354,input,inputs){
return (function (p1__8346_SHARP_){
return rhapsody.lib.midi.midi_handler.call(null,type,p1__8346_SHARP_);
});})(seq__8351,chunk__8352,count__8353,i__8354,input,inputs))
);

var G__8355 = seq__8351;
var G__8356 = chunk__8352;
var G__8357 = count__8353;
var G__8358 = (i__8354 + (1));
seq__8351 = G__8355;
chunk__8352 = G__8356;
count__8353 = G__8357;
i__8354 = G__8358;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8351);
if(temp__4657__auto__){
var seq__8351__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8351__$1)){
var c__7752__auto__ = cljs.core.chunk_first.call(null,seq__8351__$1);
var G__8359 = cljs.core.chunk_rest.call(null,seq__8351__$1);
var G__8360 = c__7752__auto__;
var G__8361 = cljs.core.count.call(null,c__7752__auto__);
var G__8362 = (0);
seq__8351 = G__8359;
chunk__8352 = G__8360;
count__8353 = G__8361;
i__8354 = G__8362;
continue;
} else {
var input = cljs.core.first.call(null,seq__8351__$1);
input.addListener(type,"all",((function (seq__8351,chunk__8352,count__8353,i__8354,input,seq__8351__$1,temp__4657__auto__,inputs){
return (function (p1__8346_SHARP_){
return rhapsody.lib.midi.midi_handler.call(null,type,p1__8346_SHARP_);
});})(seq__8351,chunk__8352,count__8353,i__8354,input,seq__8351__$1,temp__4657__auto__,inputs))
);

var G__8363 = cljs.core.next.call(null,seq__8351__$1);
var G__8364 = null;
var G__8365 = (0);
var G__8366 = (0);
seq__8351 = G__8363;
chunk__8352 = G__8364;
count__8353 = G__8365;
i__8354 = G__8366;
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
rhapsody.lib.midi.set_midi_listener_BANG_ = (function rhapsody$lib$midi$set_midi_listener_BANG_(type,listener){
if(cljs.core.not.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,rhapsody.lib.midi.midi_listener),type))){
rhapsody.lib.midi.midi_init_BANG_.call(null,type);
} else {
}

return cljs.core.swap_BANG_.call(null,rhapsody.lib.midi.midi_listener,cljs.core.assoc,type,listener);
});

//# sourceMappingURL=midi.js.map