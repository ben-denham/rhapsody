// Compiled by ClojureScript 1.9.293 {}
goog.provide('demo.composition');
goog.require('cljs.core');
goog.require('rhapsody.live');
if(typeof demo.composition.live !== 'undefined'){
} else {
demo.composition.live = (function (){
demo.composition.run_with = cljs_bach.synthesis.run_with;

demo.composition.destination = cljs_bach.synthesis.destination;

demo.composition.current_time = cljs_bach.synthesis.current_time;

demo.composition.connect__GT_ = cljs_bach.synthesis.connect__GT_;

demo.composition.add = cljs_bach.synthesis.add;

demo.composition.high_pass = cljs_bach.synthesis.high_pass;

demo.composition.low_pass = cljs_bach.synthesis.low_pass;

demo.composition.sawtooth = cljs_bach.synthesis.sawtooth;

demo.composition.sine = cljs_bach.synthesis.sine;

demo.composition.square = cljs_bach.synthesis.square;

demo.composition.triangle = cljs_bach.synthesis.triangle;

demo.composition.white_noise = cljs_bach.synthesis.white_noise;

demo.composition.constant = cljs_bach.synthesis.constant;

demo.composition.adsr = cljs_bach.synthesis.adsr;

demo.composition.gain = cljs_bach.synthesis.gain;

demo.composition.percussive = cljs_bach.synthesis.percussive;

demo.composition.adshr = cljs_bach.synthesis.adshr;

demo.composition.envelope = cljs_bach.synthesis.envelope;

demo.composition.stereo_panner = cljs_bach.synthesis.stereo_panner;

demo.composition.reverb = cljs_bach.synthesis.reverb;

demo.composition.delay_line = cljs_bach.synthesis.delay_line;

demo.composition.enhance = cljs_bach.synthesis.enhance;

demo.composition.A = leipzig.scale.A;

demo.composition.B = leipzig.scale.B;

demo.composition.C = leipzig.scale.C;

demo.composition.D = leipzig.scale.D;

demo.composition.E = leipzig.scale.E;

demo.composition.F = leipzig.scale.F;

demo.composition.G = leipzig.scale.G;

demo.composition.flat = leipzig.scale.flat;

demo.composition.high = leipzig.scale.high;

demo.composition.low = leipzig.scale.low;

demo.composition.sharp = leipzig.scale.sharp;

demo.composition.major = leipzig.scale.major;

demo.composition.minor = leipzig.scale.minor;

demo.composition.ionian = leipzig.scale.ionian;

demo.composition.dorian = leipzig.scale.dorian;

demo.composition.phrygian = leipzig.scale.phrygian;

demo.composition.lydian = leipzig.scale.lydian;

demo.composition.mixolydian = leipzig.scale.mixolydian;

demo.composition.aeolian = leipzig.scale.aeolian;

demo.composition.locrian = leipzig.scale.locrian;

demo.composition.blues = leipzig.scale.blues;

demo.composition.pentatonic = leipzig.scale.pentatonic;

demo.composition.raise = leipzig.scale.raise;

demo.composition.lower = leipzig.scale.lower;

demo.composition.triad = leipzig.chord.triad;

demo.composition.seventh = leipzig.chord.seventh;

demo.composition.ninth = leipzig.chord.ninth;

demo.composition.inversion = leipzig.chord.inversion;

demo.composition.root = leipzig.chord.root;

demo.composition.augment = leipzig.chord.augment;

demo.composition.phrase = leipzig.melody.phrase;

demo.composition.then = leipzig.melody.then;

demo.composition.times = leipzig.melody.times;

demo.composition.with$ = leipzig.melody.with$;

demo.composition.rhythm = leipzig.melody.rhythm;

demo.composition.having = leipzig.melody.having;

demo.composition.all = leipzig.melody.all;

demo.composition.bpm = leipzig.melody.bpm;

demo.composition.tempo = leipzig.melody.tempo;

demo.composition.where = leipzig.melody.where;

demo.composition.after = leipzig.melody.after;

demo.composition.wherever = leipzig.melody.wherever;

demo.composition.duration = leipzig.melody.duration;

demo.composition.temp_equal = leipzig.temperament.equal;

demo.composition.temp_five_limit_just = leipzig.temperament.five_limit_just;

demo.composition.temp_just = leipzig.temperament.just;

demo.composition.temp_meantone = leipzig.temperament.meantone;

demo.composition.temp_pythagorean = leipzig.temperament.pythagorean;

demo.composition.temp_pythagorean_comma = leipzig.temperament.pythagorean_comma;

demo.composition.temp_seven_limit_just = leipzig.temperament.seven_limit_just;

demo.composition.temp_well = leipzig.temperament.well;

demo.composition.temp_werckmeister_i = leipzig.temperament.werckmeister_i;

demo.composition.temp_werckmeister_ii = leipzig.temperament.werckmeister_ii;

demo.composition.temp_werckmeister_iii = leipzig.temperament.werckmeister_iii;

demo.composition.audio_context = rhapsody.lib.web_audio.audio_context;

demo.composition.pause_BANG_ = rhapsody.lib.web_audio.pause_BANG_;

demo.composition.play_BANG_ = rhapsody.lib.web_audio.play_BANG_;

demo.composition.play_notes_BANG_ = rhapsody.lib.web_audio.play_notes_BANG_;

demo.composition.now = rhapsody.lib.web_audio.now;

demo.composition.loop_BANG_ = rhapsody.lib.web_audio.loop_BANG_;

demo.composition.resume_BANG_ = rhapsody.lib.web_audio.resume_BANG_;

return (
demo.composition.set_midi_listener_BANG_ = rhapsody.lib.midi.set_midi_listener_BANG_)
;
})()
;
}
demo.composition.ping = (function demo$composition$ping(note){
return demo.composition.connect__GT_.call(null,demo.composition.sawtooth.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(note)),demo.composition.adsr.call(null,0.01,0.1,(1),(1)),demo.composition.low_pass.call(null,((5) * new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(note))),demo.composition.gain.call(null,0.1));
});
demo.composition.bell = (function demo$composition$bell(note){
return demo.composition.connect__GT_.call(null,demo.composition.sawtooth.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(note)),demo.composition.adsr.call(null,0.01,0.1,(1),0.5),demo.composition.low_pass.call(null,((5) * new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(note))),demo.composition.gain.call(null,0.3));
});
demo.composition.bass_inst = (function demo$composition$bass_inst(note){
return demo.composition.connect__GT_.call(null,demo.composition.add.call(null,demo.composition.sine.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(note)),demo.composition.sine.call(null,(new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(note) / (2)))),demo.composition.adsr.call(null,0.5,0.5,0.5,(16)),demo.composition.gain.call(null,0.1));
});
demo.composition.harmony = (function demo$composition$harmony(prev){
return demo.composition.all.call(null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),demo.composition.ping,demo.composition.phrase.call(null,cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)),cljs.core.map.call(null,(function (p1__8508_SHARP_){
return demo.composition.root.call(null,demo.composition.triad,p1__8508_SHARP_);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(5),(3)], null))));
});
demo.composition.melody = (function demo$composition$melody(prev){
return demo.composition.all.call(null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),demo.composition.bell,demo.composition.phrase.call(null,cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5], null)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(4),(0),(5),(7),(3),(5)], null)));
});
demo.composition.bass = (function demo$composition$bass(prev){
return demo.composition.all.call(null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),demo.composition.bass_inst,demo.composition.phrase.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)));
});
demo.composition.live_fn = (function demo$composition$live_fn(prev){
return demo.composition.where.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),cljs.core.comp.call(null,demo.composition.C,demo.composition.major),demo.composition.tempo.call(null,demo.composition.bpm.call(null,(80)),demo.composition.with$.call(null,demo.composition.bass.call(null,prev),demo.composition.with$.call(null,demo.composition.melody.call(null,prev),demo.composition.harmony.call(null,prev)))));
});
if(typeof demo.composition.jam !== 'undefined'){
} else {
demo.composition.jam = demo.composition.loop_BANG_.call(null,new cljs.core.Var(function(){return demo.composition.live_fn;},new cljs.core.Symbol("demo.composition","live-fn","demo.composition/live-fn",-748576144,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"demo.composition","demo.composition",-1734442115,null),new cljs.core.Symbol(null,"live-fn","live-fn",1838457875,null),"/home/ben/.boot/cache/tmp/home/ben/src/rhapsody/l93/r3nb31/demo/composition.cljs",14,1,48,48,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prev","prev",43462301,null)], null)),null,(cljs.core.truth_(demo.composition.live_fn)?demo.composition.live_fn.cljs$lang$test:null)])));
}
demo.composition.midi_note_on = (function demo$composition$midi_note_on(e){
var note = new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(e);
var freq = demo.composition.temp_equal.call(null,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(note));
return demo.composition.play_BANG_.call(null,demo.composition.connect__GT_.call(null,demo.composition.ping.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pitch","pitch",1495126700),freq], null)),demo.composition.gain.call(null,(3))),(1));
});
demo.composition.set_midi_listener_BANG_.call(null,"noteon",new cljs.core.Var(function(){return demo.composition.midi_note_on;},new cljs.core.Symbol("demo.composition","midi-note-on","demo.composition/midi-note-on",1973030401,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"demo.composition","demo.composition",-1734442115,null),new cljs.core.Symbol(null,"midi-note-on","midi-note-on",-1622733728,null),"/home/ben/.boot/cache/tmp/home/ben/src/rhapsody/l93/r3nb31/demo/composition.cljs",19,1,59,59,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null)),null,(cljs.core.truth_(demo.composition.midi_note_on)?demo.composition.midi_note_on.cljs$lang$test:null)])));

//# sourceMappingURL=composition.js.map