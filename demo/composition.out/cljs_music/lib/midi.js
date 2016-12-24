// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs_music.lib.midi');
goog.require('cljs.core');
goog.require('webmidi.webmidi');
cljs_music.lib.midi.midi_listener = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs_music.lib.midi.midi_handler = (function cljs_music$lib$midi$midi_handler(type,midi_event){
var event_map = cljs.core.js__GT_clj.call(null,midi_event,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var listener = cljs.core.get.call(null,cljs.core.deref.call(null,cljs_music.lib.midi.midi_listener),type);
return listener.call(null,event_map);
});
cljs_music.lib.midi.midi_init_BANG_ = (function cljs_music$lib$midi$midi_init_BANG_(type){
return WebMidi.enable((function (){
var inputs = WebMidi.inputs;
var seq__11176 = cljs.core.seq.call(null,inputs);
var chunk__11177 = null;
var count__11178 = (0);
var i__11179 = (0);
while(true){
if((i__11179 < count__11178)){
var input = cljs.core._nth.call(null,chunk__11177,i__11179);
input.addListener(type,"all",((function (seq__11176,chunk__11177,count__11178,i__11179,input,inputs){
return (function (p1__11171_SHARP_){
return cljs_music.lib.midi.midi_handler.call(null,type,p1__11171_SHARP_);
});})(seq__11176,chunk__11177,count__11178,i__11179,input,inputs))
);

var G__11180 = seq__11176;
var G__11181 = chunk__11177;
var G__11182 = count__11178;
var G__11183 = (i__11179 + (1));
seq__11176 = G__11180;
chunk__11177 = G__11181;
count__11178 = G__11182;
i__11179 = G__11183;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11176);
if(temp__4657__auto__){
var seq__11176__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11176__$1)){
var c__7752__auto__ = cljs.core.chunk_first.call(null,seq__11176__$1);
var G__11184 = cljs.core.chunk_rest.call(null,seq__11176__$1);
var G__11185 = c__7752__auto__;
var G__11186 = cljs.core.count.call(null,c__7752__auto__);
var G__11187 = (0);
seq__11176 = G__11184;
chunk__11177 = G__11185;
count__11178 = G__11186;
i__11179 = G__11187;
continue;
} else {
var input = cljs.core.first.call(null,seq__11176__$1);
input.addListener(type,"all",((function (seq__11176,chunk__11177,count__11178,i__11179,input,seq__11176__$1,temp__4657__auto__,inputs){
return (function (p1__11171_SHARP_){
return cljs_music.lib.midi.midi_handler.call(null,type,p1__11171_SHARP_);
});})(seq__11176,chunk__11177,count__11178,i__11179,input,seq__11176__$1,temp__4657__auto__,inputs))
);

var G__11188 = cljs.core.next.call(null,seq__11176__$1);
var G__11189 = null;
var G__11190 = (0);
var G__11191 = (0);
seq__11176 = G__11188;
chunk__11177 = G__11189;
count__11178 = G__11190;
i__11179 = G__11191;
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

//# sourceMappingURL=midi.js.map