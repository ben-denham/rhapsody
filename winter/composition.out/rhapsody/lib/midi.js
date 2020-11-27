// Compiled by ClojureScript 1.10.773 {}
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
var seq__1439 = cljs.core.seq.call(null,inputs);
var chunk__1440 = null;
var count__1441 = (0);
var i__1442 = (0);
while(true){
if((i__1442 < count__1441)){
var input = cljs.core._nth.call(null,chunk__1440,i__1442);
input.addListener(type,"all",((function (seq__1439,chunk__1440,count__1441,i__1442,input,inputs){
return (function (p1__1438_SHARP_){
return rhapsody.lib.midi.midi_handler.call(null,type,p1__1438_SHARP_);
});})(seq__1439,chunk__1440,count__1441,i__1442,input,inputs))
);


var G__1443 = seq__1439;
var G__1444 = chunk__1440;
var G__1445 = count__1441;
var G__1446 = (i__1442 + (1));
seq__1439 = G__1443;
chunk__1440 = G__1444;
count__1441 = G__1445;
i__1442 = G__1446;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__1439);
if(temp__4657__auto__){
var seq__1439__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1439__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__1439__$1);
var G__1447 = cljs.core.chunk_rest.call(null,seq__1439__$1);
var G__1448 = c__4556__auto__;
var G__1449 = cljs.core.count.call(null,c__4556__auto__);
var G__1450 = (0);
seq__1439 = G__1447;
chunk__1440 = G__1448;
count__1441 = G__1449;
i__1442 = G__1450;
continue;
} else {
var input = cljs.core.first.call(null,seq__1439__$1);
input.addListener(type,"all",((function (seq__1439,chunk__1440,count__1441,i__1442,input,seq__1439__$1,temp__4657__auto__,inputs){
return (function (p1__1438_SHARP_){
return rhapsody.lib.midi.midi_handler.call(null,type,p1__1438_SHARP_);
});})(seq__1439,chunk__1440,count__1441,i__1442,input,seq__1439__$1,temp__4657__auto__,inputs))
);


var G__1451 = cljs.core.next.call(null,seq__1439__$1);
var G__1452 = null;
var G__1453 = (0);
var G__1454 = (0);
seq__1439 = G__1451;
chunk__1440 = G__1452;
count__1441 = G__1453;
i__1442 = G__1454;
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
