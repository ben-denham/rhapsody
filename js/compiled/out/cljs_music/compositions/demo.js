// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs_music.compositions.demo');
goog.require('cljs.core');
goog.require('cljs_music.live');
if(typeof cljs_music.compositions.demo.live !== 'undefined'){
} else {
cljs_music.compositions.demo.live = (function (){
cljs_music.compositions.demo.run_with = cljs_bach.synthesis.run_with;

cljs_music.compositions.demo.destination = cljs_bach.synthesis.destination;

cljs_music.compositions.demo.current_time = cljs_bach.synthesis.current_time;

cljs_music.compositions.demo.connect__GT_ = cljs_bach.synthesis.connect__GT_;

cljs_music.compositions.demo.add = cljs_bach.synthesis.add;

cljs_music.compositions.demo.high_pass = cljs_bach.synthesis.high_pass;

cljs_music.compositions.demo.low_pass = cljs_bach.synthesis.low_pass;

cljs_music.compositions.demo.sawtooth = cljs_bach.synthesis.sawtooth;

cljs_music.compositions.demo.sine = cljs_bach.synthesis.sine;

cljs_music.compositions.demo.square = cljs_bach.synthesis.square;

cljs_music.compositions.demo.triangle = cljs_bach.synthesis.triangle;

cljs_music.compositions.demo.white_noise = cljs_bach.synthesis.white_noise;

cljs_music.compositions.demo.constant = cljs_bach.synthesis.constant;

cljs_music.compositions.demo.adsr = cljs_bach.synthesis.adsr;

cljs_music.compositions.demo.gain = cljs_bach.synthesis.gain;

cljs_music.compositions.demo.percussive = cljs_bach.synthesis.percussive;

cljs_music.compositions.demo.adshr = cljs_bach.synthesis.adshr;

cljs_music.compositions.demo.envelope = cljs_bach.synthesis.envelope;

cljs_music.compositions.demo.stereo_panner = cljs_bach.synthesis.stereo_panner;

cljs_music.compositions.demo.reverb = cljs_bach.synthesis.reverb;

cljs_music.compositions.demo.delay_line = cljs_bach.synthesis.delay_line;

cljs_music.compositions.demo.enhance = cljs_bach.synthesis.enhance;

cljs_music.compositions.demo.A = leipzig.scale.A;

cljs_music.compositions.demo.B = leipzig.scale.B;

cljs_music.compositions.demo.C = leipzig.scale.C;

cljs_music.compositions.demo.D = leipzig.scale.D;

cljs_music.compositions.demo.E = leipzig.scale.E;

cljs_music.compositions.demo.F = leipzig.scale.F;

cljs_music.compositions.demo.G = leipzig.scale.G;

cljs_music.compositions.demo.flat = leipzig.scale.flat;

cljs_music.compositions.demo.high = leipzig.scale.high;

cljs_music.compositions.demo.low = leipzig.scale.low;

cljs_music.compositions.demo.sharp = leipzig.scale.sharp;

cljs_music.compositions.demo.major = leipzig.scale.major;

cljs_music.compositions.demo.minor = leipzig.scale.minor;

cljs_music.compositions.demo.ionian = leipzig.scale.ionian;

cljs_music.compositions.demo.dorian = leipzig.scale.dorian;

cljs_music.compositions.demo.phrygian = leipzig.scale.phrygian;

cljs_music.compositions.demo.lydian = leipzig.scale.lydian;

cljs_music.compositions.demo.mixolydian = leipzig.scale.mixolydian;

cljs_music.compositions.demo.aeolian = leipzig.scale.aeolian;

cljs_music.compositions.demo.locrian = leipzig.scale.locrian;

cljs_music.compositions.demo.blues = leipzig.scale.blues;

cljs_music.compositions.demo.pentatonic = leipzig.scale.pentatonic;

cljs_music.compositions.demo.raise = leipzig.scale.raise;

cljs_music.compositions.demo.lower = leipzig.scale.lower;

cljs_music.compositions.demo.triad = leipzig.chord.triad;

cljs_music.compositions.demo.seventh = leipzig.chord.seventh;

cljs_music.compositions.demo.ninth = leipzig.chord.ninth;

cljs_music.compositions.demo.inversion = leipzig.chord.inversion;

cljs_music.compositions.demo.root = leipzig.chord.root;

cljs_music.compositions.demo.augment = leipzig.chord.augment;

cljs_music.compositions.demo.phrase = leipzig.melody.phrase;

cljs_music.compositions.demo.then = leipzig.melody.then;

cljs_music.compositions.demo.times = leipzig.melody.times;

cljs_music.compositions.demo.with$ = leipzig.melody.with$;

cljs_music.compositions.demo.rhythm = leipzig.melody.rhythm;

cljs_music.compositions.demo.having = leipzig.melody.having;

cljs_music.compositions.demo.all = leipzig.melody.all;

cljs_music.compositions.demo.bpm = leipzig.melody.bpm;

cljs_music.compositions.demo.tempo = leipzig.melody.tempo;

cljs_music.compositions.demo.where = leipzig.melody.where;

cljs_music.compositions.demo.after = leipzig.melody.after;

cljs_music.compositions.demo.wherever = leipzig.melody.wherever;

cljs_music.compositions.demo.duration = leipzig.melody.duration;

cljs_music.compositions.demo.temp_equal = leipzig.temperament.equal;

cljs_music.compositions.demo.temp_five_limit_just = leipzig.temperament.five_limit_just;

cljs_music.compositions.demo.temp_just = leipzig.temperament.just;

cljs_music.compositions.demo.temp_meantone = leipzig.temperament.meantone;

cljs_music.compositions.demo.temp_pythagorean = leipzig.temperament.pythagorean;

cljs_music.compositions.demo.temp_pythagorean_comma = leipzig.temperament.pythagorean_comma;

cljs_music.compositions.demo.temp_seven_limit_just = leipzig.temperament.seven_limit_just;

cljs_music.compositions.demo.temp_well = leipzig.temperament.well;

cljs_music.compositions.demo.temp_werckmeister_i = leipzig.temperament.werckmeister_i;

cljs_music.compositions.demo.temp_werckmeister_ii = leipzig.temperament.werckmeister_ii;

cljs_music.compositions.demo.temp_werckmeister_iii = leipzig.temperament.werckmeister_iii;

cljs_music.compositions.demo.audio_context = cljs_music.lib.web_audio.audio_context;

cljs_music.compositions.demo.pause_BANG_ = cljs_music.lib.web_audio.pause_BANG_;

cljs_music.compositions.demo.play_BANG_ = cljs_music.lib.web_audio.play_BANG_;

cljs_music.compositions.demo.play_notes_BANG_ = cljs_music.lib.web_audio.play_notes_BANG_;

cljs_music.compositions.demo.now = cljs_music.lib.web_audio.now;

cljs_music.compositions.demo.loop_BANG_ = cljs_music.lib.web_audio.loop_BANG_;

cljs_music.compositions.demo.resume_BANG_ = cljs_music.lib.web_audio.resume_BANG_;

return (
cljs_music.compositions.demo.set_midi_listener_BANG_ = cljs_music.lib.midi.set_midi_listener_BANG_)
;
})()
;
}
cljs_music.compositions.demo.ping = (function cljs_music$compositions$demo$ping(note){
return cljs_music.compositions.demo.connect__GT_.call(null,cljs_music.compositions.demo.sawtooth.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(note)),cljs_music.compositions.demo.adsr.call(null,0.01,0.1,(1),(1)),cljs_music.compositions.demo.low_pass.call(null,((5) * new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(note))),cljs_music.compositions.demo.gain.call(null,0.1));
});
cljs_music.compositions.demo.bell = (function cljs_music$compositions$demo$bell(note){
return cljs_music.compositions.demo.connect__GT_.call(null,cljs_music.compositions.demo.sawtooth.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(note)),cljs_music.compositions.demo.adsr.call(null,0.01,0.1,(1),0.5),cljs_music.compositions.demo.low_pass.call(null,((5) * new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(note))),cljs_music.compositions.demo.gain.call(null,0.3));
});
cljs_music.compositions.demo.bass_inst = (function cljs_music$compositions$demo$bass_inst(note){
return cljs_music.compositions.demo.connect__GT_.call(null,cljs_music.compositions.demo.add.call(null,cljs_music.compositions.demo.sine.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(note)),cljs_music.compositions.demo.sine.call(null,(new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(note) / (2)))),cljs_music.compositions.demo.adsr.call(null,0.5,0.5,0.5,(16)),cljs_music.compositions.demo.gain.call(null,0.1));
});
cljs_music.compositions.demo.harmony = (function cljs_music$compositions$demo$harmony(prev){
return cljs_music.compositions.demo.all.call(null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),cljs_music.compositions.demo.ping,cljs_music.compositions.demo.phrase.call(null,cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)),cljs.core.map.call(null,(function (p1__24108_SHARP_){
return cljs_music.compositions.demo.root.call(null,cljs_music.compositions.demo.triad,p1__24108_SHARP_);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(5),(3)], null))));
});
cljs_music.compositions.demo.melody = (function cljs_music$compositions$demo$melody(prev){
return cljs_music.compositions.demo.all.call(null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),cljs_music.compositions.demo.bell,cljs_music.compositions.demo.phrase.call(null,cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5], null)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(4),(0),(5),(7),(3),(5)], null)));
});
cljs_music.compositions.demo.bass = (function cljs_music$compositions$demo$bass(prev){
return cljs_music.compositions.demo.all.call(null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),cljs_music.compositions.demo.bass_inst,cljs_music.compositions.demo.phrase.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)));
});
cljs_music.compositions.demo.live_fn = (function cljs_music$compositions$demo$live_fn(prev){
return cljs_music.compositions.demo.where.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),cljs.core.comp.call(null,cljs_music.compositions.demo.C,cljs_music.compositions.demo.major),cljs_music.compositions.demo.tempo.call(null,cljs_music.compositions.demo.bpm.call(null,(80)),cljs_music.compositions.demo.with$.call(null,cljs_music.compositions.demo.bass.call(null,prev),cljs_music.compositions.demo.with$.call(null,cljs_music.compositions.demo.melody.call(null,prev),cljs_music.compositions.demo.harmony.call(null,prev)))));
});
if(typeof cljs_music.compositions.demo.jam !== 'undefined'){
} else {
cljs_music.compositions.demo.jam = cljs_music.compositions.demo.loop_BANG_.call(null,new cljs.core.Var(function(){return cljs_music.compositions.demo.live_fn;},new cljs.core.Symbol("cljs-music.compositions.demo","live-fn","cljs-music.compositions.demo/live-fn",-956497697,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs-music.compositions.demo","cljs-music.compositions.demo",-1970412451,null),new cljs.core.Symbol(null,"live-fn","live-fn",1838457875,null),"src/cljs_music/compositions/demo.cljs",14,1,48,48,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prev","prev",43462301,null)], null)),null,(cljs.core.truth_(cljs_music.compositions.demo.live_fn)?cljs_music.compositions.demo.live_fn.cljs$lang$test:null)])));
}
cljs_music.compositions.demo.midi_note_on = (function cljs_music$compositions$demo$midi_note_on(e){
var note = new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(e);
var freq = cljs_music.compositions.demo.temp_equal.call(null,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(note));
return cljs_music.compositions.demo.play_BANG_.call(null,cljs_music.compositions.demo.connect__GT_.call(null,cljs_music.compositions.demo.ping.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pitch","pitch",1495126700),freq], null)),cljs_music.compositions.demo.gain.call(null,(3))),(1));
});
cljs_music.compositions.demo.set_midi_listener_BANG_.call(null,"noteon",new cljs.core.Var(function(){return cljs_music.compositions.demo.midi_note_on;},new cljs.core.Symbol("cljs-music.compositions.demo","midi-note-on","cljs-music.compositions.demo/midi-note-on",1782542500,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs-music.compositions.demo","cljs-music.compositions.demo",-1970412451,null),new cljs.core.Symbol(null,"midi-note-on","midi-note-on",-1622733728,null),"src/cljs_music/compositions/demo.cljs",19,1,59,59,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null)),null,(cljs.core.truth_(cljs_music.compositions.demo.midi_note_on)?cljs_music.compositions.demo.midi_note_on.cljs$lang$test:null)])));

//# sourceMappingURL=demo.js.map?rel=1482038775717