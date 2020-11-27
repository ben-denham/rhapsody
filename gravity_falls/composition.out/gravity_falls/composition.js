// Compiled by ClojureScript 1.10.773 {}
goog.provide('gravity_falls.composition');
goog.require('cljs.core');
goog.require('rhapsody.live');
if((typeof gravity_falls !== 'undefined') && (typeof gravity_falls.composition !== 'undefined') && (typeof gravity_falls.composition.live !== 'undefined')){
} else {
gravity_falls.composition.live = (function (){
gravity_falls.composition.run_with = cljs_bach.synthesis.run_with;

gravity_falls.composition.destination = cljs_bach.synthesis.destination;

gravity_falls.composition.current_time = cljs_bach.synthesis.current_time;

gravity_falls.composition.connect__GT_ = cljs_bach.synthesis.connect__GT_;

gravity_falls.composition.add = cljs_bach.synthesis.add;

gravity_falls.composition.high_pass = cljs_bach.synthesis.high_pass;

gravity_falls.composition.low_pass = cljs_bach.synthesis.low_pass;

gravity_falls.composition.sawtooth = cljs_bach.synthesis.sawtooth;

gravity_falls.composition.sine = cljs_bach.synthesis.sine;

gravity_falls.composition.square = cljs_bach.synthesis.square;

gravity_falls.composition.triangle = cljs_bach.synthesis.triangle;

gravity_falls.composition.white_noise = cljs_bach.synthesis.white_noise;

gravity_falls.composition.constant = cljs_bach.synthesis.constant;

gravity_falls.composition.adsr = cljs_bach.synthesis.adsr;

gravity_falls.composition.gain = cljs_bach.synthesis.gain;

gravity_falls.composition.percussive = cljs_bach.synthesis.percussive;

gravity_falls.composition.adshr = cljs_bach.synthesis.adshr;

gravity_falls.composition.envelope = cljs_bach.synthesis.envelope;

gravity_falls.composition.stereo_panner = cljs_bach.synthesis.stereo_panner;

gravity_falls.composition.reverb = cljs_bach.synthesis.reverb;

gravity_falls.composition.delay_line = cljs_bach.synthesis.delay_line;

gravity_falls.composition.enhance = cljs_bach.synthesis.enhance;

gravity_falls.composition.A = leipzig.scale.A;

gravity_falls.composition.B = leipzig.scale.B;

gravity_falls.composition.C = leipzig.scale.C;

gravity_falls.composition.D = leipzig.scale.D;

gravity_falls.composition.E = leipzig.scale.E;

gravity_falls.composition.F = leipzig.scale.F;

gravity_falls.composition.G = leipzig.scale.G;

gravity_falls.composition.flat = leipzig.scale.flat;

gravity_falls.composition.high = leipzig.scale.high;

gravity_falls.composition.low = leipzig.scale.low;

gravity_falls.composition.sharp = leipzig.scale.sharp;

gravity_falls.composition.major = leipzig.scale.major;

gravity_falls.composition.minor = leipzig.scale.minor;

gravity_falls.composition.ionian = leipzig.scale.ionian;

gravity_falls.composition.dorian = leipzig.scale.dorian;

gravity_falls.composition.phrygian = leipzig.scale.phrygian;

gravity_falls.composition.lydian = leipzig.scale.lydian;

gravity_falls.composition.mixolydian = leipzig.scale.mixolydian;

gravity_falls.composition.aeolian = leipzig.scale.aeolian;

gravity_falls.composition.locrian = leipzig.scale.locrian;

gravity_falls.composition.blues = leipzig.scale.blues;

gravity_falls.composition.pentatonic = leipzig.scale.pentatonic;

gravity_falls.composition.raise = leipzig.scale.raise;

gravity_falls.composition.lower = leipzig.scale.lower;

gravity_falls.composition.triad = leipzig.chord.triad;

gravity_falls.composition.seventh = leipzig.chord.seventh;

gravity_falls.composition.ninth = leipzig.chord.ninth;

gravity_falls.composition.inversion = leipzig.chord.inversion;

gravity_falls.composition.root = leipzig.chord.root;

gravity_falls.composition.augment = leipzig.chord.augment;

gravity_falls.composition.phrase = leipzig.melody.phrase;

gravity_falls.composition.then = leipzig.melody.then;

gravity_falls.composition.times = leipzig.melody.times;

gravity_falls.composition.with$ = leipzig.melody.with$;

gravity_falls.composition.rhythm = leipzig.melody.rhythm;

gravity_falls.composition.having = leipzig.melody.having;

gravity_falls.composition.all = leipzig.melody.all;

gravity_falls.composition.bpm = leipzig.melody.bpm;

gravity_falls.composition.tempo = leipzig.melody.tempo;

gravity_falls.composition.where = leipzig.melody.where;

gravity_falls.composition.after = leipzig.melody.after;

gravity_falls.composition.wherever = leipzig.melody.wherever;

gravity_falls.composition.duration = leipzig.melody.duration;

gravity_falls.composition.temp_equal = leipzig.temperament.equal;

gravity_falls.composition.temp_five_limit_just = leipzig.temperament.five_limit_just;

gravity_falls.composition.temp_just = leipzig.temperament.just;

gravity_falls.composition.temp_meantone = leipzig.temperament.meantone;

gravity_falls.composition.temp_pythagorean = leipzig.temperament.pythagorean;

gravity_falls.composition.temp_pythagorean_comma = leipzig.temperament.pythagorean_comma;

gravity_falls.composition.temp_seven_limit_just = leipzig.temperament.seven_limit_just;

gravity_falls.composition.temp_well = leipzig.temperament.well;

gravity_falls.composition.temp_werckmeister_i = leipzig.temperament.werckmeister_i;

gravity_falls.composition.temp_werckmeister_ii = leipzig.temperament.werckmeister_ii;

gravity_falls.composition.temp_werckmeister_iii = leipzig.temperament.werckmeister_iii;

gravity_falls.composition.audio_context = rhapsody.lib.web_audio.audio_context;

gravity_falls.composition.pause_BANG_ = rhapsody.lib.web_audio.pause_BANG_;

gravity_falls.composition.play_BANG_ = rhapsody.lib.web_audio.play_BANG_;

gravity_falls.composition.play_notes_BANG_ = rhapsody.lib.web_audio.play_notes_BANG_;

gravity_falls.composition.now = rhapsody.lib.web_audio.now;

gravity_falls.composition.loop_BANG_ = rhapsody.lib.web_audio.loop_BANG_;

gravity_falls.composition.resume_BANG_ = rhapsody.lib.web_audio.resume_BANG_;

gravity_falls.composition.make_input_BANG_ = rhapsody.lib.web_audio.make_input_BANG_;

gravity_falls.composition.set_input_BANG_ = rhapsody.lib.web_audio.set_input_BANG_;

gravity_falls.composition.lin_ramp_input_BANG_ = rhapsody.lib.web_audio.lin_ramp_input_BANG_;

gravity_falls.composition.exp_ramp_input_BANG_ = rhapsody.lib.web_audio.exp_ramp_input_BANG_;

gravity_falls.composition.jack = rhapsody.lib.web_audio.jack;

return (
gravity_falls.composition.set_midi_listener_BANG_ = rhapsody.lib.midi.set_midi_listener_BANG_)
;
})()
;
}
gravity_falls.composition.lead_inst = (function gravity_falls$composition$lead_inst(note){
return gravity_falls.composition.connect__GT_.call(null,cljs.core.apply.call(null,gravity_falls.composition.add,cljs.core.map.call(null,(function (p__1578){
var vec__1579 = p__1578;
var harmonic = cljs.core.nth.call(null,vec__1579,(0),null);
var amp = cljs.core.nth.call(null,vec__1579,(1),null);
return gravity_falls.composition.connect__GT_.call(null,gravity_falls.composition.sine.call(null,(harmonic * new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(note))),gravity_falls.composition.gain.call(null,amp));
}),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),0.65], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),0.35], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),0.35], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),0.15], null)], null))),gravity_falls.composition.low_pass.call(null,((2) * new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(note))),gravity_falls.composition.adsr.call(null,0.01,0.05,(1),0.2));
});
console.log("foo");
gravity_falls.composition.play_BANG_.call(null,gravity_falls.composition.connect__GT_.call(null,gravity_falls.composition.lead_inst.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pitch","pitch",1495126700),(420)], null))),(1));
gravity_falls.composition.opening = gravity_falls.composition.where.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),cljs.core.comp.call(null,gravity_falls.composition.D,gravity_falls.composition.minor),gravity_falls.composition.tempo.call(null,gravity_falls.composition.bpm.call(null,(80)),gravity_falls.composition.all.call(null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),gravity_falls.composition.lead_inst,gravity_falls.composition.phrase.call(null,cljs.core.repeat.call(null,(1)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(2),(1)], null)))));
gravity_falls.composition.live_fn = (function gravity_falls$composition$live_fn(prev){
return gravity_falls.composition.opening;
});
gravity_falls.composition.midi_note_on = (function gravity_falls$composition$midi_note_on(e){
var note = new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(e);
var freq = gravity_falls.composition.temp_equal.call(null,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(note));
return gravity_falls.composition.play_BANG_.call(null,gravity_falls.composition.connect__GT_.call(null,gravity_falls.composition.lead_inst.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pitch","pitch",1495126700),freq], null))),(1));
});
gravity_falls.composition.run = (function gravity_falls$composition$run(){
gravity_falls.composition.loop_BANG_.call(null,new cljs.core.Var(function(){return gravity_falls.composition.live_fn;},new cljs.core.Symbol("gravity-falls.composition","live-fn","gravity-falls.composition/live-fn",426456910,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"gravity-falls.composition","gravity-falls.composition",-1946212928,null),new cljs.core.Symbol(null,"live-fn","live-fn",1838457875,null),"/home/ben/.boot/cache/tmp/home/ben/src/rhapsody/h2j/-thxrk9/gravity_falls/composition.cljs",14,1,30,30,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prev","prev",43462301,null)], null)),null,(cljs.core.truth_(gravity_falls.composition.live_fn)?gravity_falls.composition.live_fn.cljs$lang$test:null)])));

return gravity_falls.composition.set_midi_listener_BANG_.call(null,"noteon",new cljs.core.Var(function(){return gravity_falls.composition.midi_note_on;},new cljs.core.Symbol("gravity-falls.composition","midi-note-on","gravity-falls.composition/midi-note-on",195861707,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"gravity-falls.composition","gravity-falls.composition",-1946212928,null),new cljs.core.Symbol(null,"midi-note-on","midi-note-on",-1622733728,null),"/home/ben/.boot/cache/tmp/home/ben/src/rhapsody/h2j/-thxrk9/gravity_falls/composition.cljs",19,1,36,36,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null)),null,(cljs.core.truth_(gravity_falls.composition.midi_note_on)?gravity_falls.composition.midi_note_on.cljs$lang$test:null)])));
});
goog.exportSymbol('gravity_falls.composition.run', gravity_falls.composition.run);

//# sourceMappingURL=composition.js.map
