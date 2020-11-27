// Compiled by ClojureScript 1.10.773 {}
goog.provide('winter.composition');
goog.require('cljs.core');
goog.require('rhapsody.live');
if((typeof winter !== 'undefined') && (typeof winter.composition !== 'undefined') && (typeof winter.composition.live !== 'undefined')){
} else {
winter.composition.live = (function (){
winter.composition.run_with = cljs_bach.synthesis.run_with;

winter.composition.destination = cljs_bach.synthesis.destination;

winter.composition.current_time = cljs_bach.synthesis.current_time;

winter.composition.connect__GT_ = cljs_bach.synthesis.connect__GT_;

winter.composition.add = cljs_bach.synthesis.add;

winter.composition.high_pass = cljs_bach.synthesis.high_pass;

winter.composition.low_pass = cljs_bach.synthesis.low_pass;

winter.composition.sawtooth = cljs_bach.synthesis.sawtooth;

winter.composition.sine = cljs_bach.synthesis.sine;

winter.composition.square = cljs_bach.synthesis.square;

winter.composition.triangle = cljs_bach.synthesis.triangle;

winter.composition.white_noise = cljs_bach.synthesis.white_noise;

winter.composition.constant = cljs_bach.synthesis.constant;

winter.composition.adsr = cljs_bach.synthesis.adsr;

winter.composition.gain = cljs_bach.synthesis.gain;

winter.composition.percussive = cljs_bach.synthesis.percussive;

winter.composition.adshr = cljs_bach.synthesis.adshr;

winter.composition.envelope = cljs_bach.synthesis.envelope;

winter.composition.stereo_panner = cljs_bach.synthesis.stereo_panner;

winter.composition.reverb = cljs_bach.synthesis.reverb;

winter.composition.delay_line = cljs_bach.synthesis.delay_line;

winter.composition.enhance = cljs_bach.synthesis.enhance;

winter.composition.A = leipzig.scale.A;

winter.composition.B = leipzig.scale.B;

winter.composition.C = leipzig.scale.C;

winter.composition.D = leipzig.scale.D;

winter.composition.E = leipzig.scale.E;

winter.composition.F = leipzig.scale.F;

winter.composition.G = leipzig.scale.G;

winter.composition.flat = leipzig.scale.flat;

winter.composition.high = leipzig.scale.high;

winter.composition.low = leipzig.scale.low;

winter.composition.sharp = leipzig.scale.sharp;

winter.composition.major = leipzig.scale.major;

winter.composition.minor = leipzig.scale.minor;

winter.composition.ionian = leipzig.scale.ionian;

winter.composition.dorian = leipzig.scale.dorian;

winter.composition.phrygian = leipzig.scale.phrygian;

winter.composition.lydian = leipzig.scale.lydian;

winter.composition.mixolydian = leipzig.scale.mixolydian;

winter.composition.aeolian = leipzig.scale.aeolian;

winter.composition.locrian = leipzig.scale.locrian;

winter.composition.blues = leipzig.scale.blues;

winter.composition.pentatonic = leipzig.scale.pentatonic;

winter.composition.raise = leipzig.scale.raise;

winter.composition.lower = leipzig.scale.lower;

winter.composition.triad = leipzig.chord.triad;

winter.composition.seventh = leipzig.chord.seventh;

winter.composition.ninth = leipzig.chord.ninth;

winter.composition.inversion = leipzig.chord.inversion;

winter.composition.root = leipzig.chord.root;

winter.composition.augment = leipzig.chord.augment;

winter.composition.phrase = leipzig.melody.phrase;

winter.composition.then = leipzig.melody.then;

winter.composition.times = leipzig.melody.times;

winter.composition.with$ = leipzig.melody.with$;

winter.composition.rhythm = leipzig.melody.rhythm;

winter.composition.having = leipzig.melody.having;

winter.composition.all = leipzig.melody.all;

winter.composition.bpm = leipzig.melody.bpm;

winter.composition.tempo = leipzig.melody.tempo;

winter.composition.where = leipzig.melody.where;

winter.composition.after = leipzig.melody.after;

winter.composition.wherever = leipzig.melody.wherever;

winter.composition.duration = leipzig.melody.duration;

winter.composition.temp_equal = leipzig.temperament.equal;

winter.composition.temp_five_limit_just = leipzig.temperament.five_limit_just;

winter.composition.temp_just = leipzig.temperament.just;

winter.composition.temp_meantone = leipzig.temperament.meantone;

winter.composition.temp_pythagorean = leipzig.temperament.pythagorean;

winter.composition.temp_pythagorean_comma = leipzig.temperament.pythagorean_comma;

winter.composition.temp_seven_limit_just = leipzig.temperament.seven_limit_just;

winter.composition.temp_well = leipzig.temperament.well;

winter.composition.temp_werckmeister_i = leipzig.temperament.werckmeister_i;

winter.composition.temp_werckmeister_ii = leipzig.temperament.werckmeister_ii;

winter.composition.temp_werckmeister_iii = leipzig.temperament.werckmeister_iii;

winter.composition.audio_context = rhapsody.lib.web_audio.audio_context;

winter.composition.pause_BANG_ = rhapsody.lib.web_audio.pause_BANG_;

winter.composition.play_BANG_ = rhapsody.lib.web_audio.play_BANG_;

winter.composition.play_notes_BANG_ = rhapsody.lib.web_audio.play_notes_BANG_;

winter.composition.now = rhapsody.lib.web_audio.now;

winter.composition.loop_BANG_ = rhapsody.lib.web_audio.loop_BANG_;

winter.composition.resume_BANG_ = rhapsody.lib.web_audio.resume_BANG_;

winter.composition.make_input_BANG_ = rhapsody.lib.web_audio.make_input_BANG_;

winter.composition.set_input_BANG_ = rhapsody.lib.web_audio.set_input_BANG_;

winter.composition.lin_ramp_input_BANG_ = rhapsody.lib.web_audio.lin_ramp_input_BANG_;

winter.composition.exp_ramp_input_BANG_ = rhapsody.lib.web_audio.exp_ramp_input_BANG_;

winter.composition.jack = rhapsody.lib.web_audio.jack;

return (
winter.composition.set_midi_listener_BANG_ = rhapsody.lib.midi.set_midi_listener_BANG_)
;
})()
;
}
winter.composition.bass_inst = (function winter$composition$bass_inst(note){
var multiple_gain = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),0.1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),0.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.2], null)], null);
return winter.composition.connect__GT_.call(null,cljs.core.apply.call(null,winter.composition.add,cljs.core.map.call(null,(function (p__1578){
var vec__1579 = p__1578;
var multiple = cljs.core.nth.call(null,vec__1579,(0),null);
var gain_val = cljs.core.nth.call(null,vec__1579,(1),null);
return winter.composition.connect__GT_.call(null,winter.composition.sine.call(null,(multiple * new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(note))),winter.composition.gain.call(null,gain_val));
}),multiple_gain)),winter.composition.high_pass.call(null,(180)),winter.composition.adsr.call(null,0.15,(new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(note) - 0.15),(0),0.1),winter.composition.gain.call(null,0.8));
});
winter.composition.I = winter.composition.triad;
winter.composition.IV = winter.composition.root.call(null,winter.composition.triad,(3));
winter.composition.V = winter.composition.root.call(null,winter.composition.triad,(4));
winter.composition.vi = winter.composition.root.call(null,winter.composition.triad,(5));
winter.composition.progression = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [winter.composition.I,winter.composition.V,winter.composition.vi,winter.composition.IV], null);
winter.composition.bass_rhythm = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.5,0.5,(1)], null);
winter.composition.bass_arpeg = (function winter$composition$bass_arpeg(chord){
return cljs.core.map.call(null,(function (p1__1582_SHARP_){
return cljs.core.nth.call(null,cljs.core.sort.call(null,chord),p1__1582_SHARP_);
}),cljs.core.apply.call(null,cljs.core.concat,cljs.core.repeat.call(null,(2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null))));
});
winter.composition.bass = winter.composition.all.call(null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),winter.composition.bass_inst,winter.composition.where.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),winter.composition.lower,winter.composition.phrase.call(null,cljs.core.cycle.call(null,winter.composition.bass_rhythm),cljs.core.mapcat.call(null,winter.composition.bass_arpeg,winter.composition.progression))));
winter.composition.bass_fin = winter.composition.all.call(null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),winter.composition.bass_inst,winter.composition.where.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),winter.composition.lower,winter.composition.phrase.call(null,cljs.core.concat.call(null,winter.composition.bass_rhythm,winter.composition.bass_rhythm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)),cljs.core.concat.call(null,winter.composition.bass_arpeg.call(null,winter.composition.V),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)))));
winter.composition.piece = (function winter$composition$piece(){
return winter.composition.tempo.call(null,winter.composition.bpm.call(null,(90)),winter.composition.where.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),cljs.core.comp.call(null,winter.composition.D,winter.composition.major),winter.composition.then.call(null,winter.composition.bass_fin,winter.composition.then.call(null,winter.composition.bass,winter.composition.bass))));
});
winter.composition.midi_note_on = (function winter$composition$midi_note_on(e){
var note = new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(e);
var freq = winter.composition.temp_equal.call(null,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(note));
return winter.composition.play_BANG_.call(null,winter.composition.connect__GT_.call(null,winter.composition.bass_inst.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pitch","pitch",1495126700),freq], null)),winter.composition.gain.call(null,(3))),(1));
});
winter.composition.run = (function winter$composition$run(){
winter.composition.set_midi_listener_BANG_.call(null,"noteon",new cljs.core.Var(function(){return winter.composition.midi_note_on;},new cljs.core.Symbol("winter.composition","midi-note-on","winter.composition/midi-note-on",1006494823,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"winter.composition","winter.composition",-1274752877,null),new cljs.core.Symbol(null,"midi-note-on","midi-note-on",-1622733728,null),"/home/ben/.boot/cache/tmp/home/ben/src/rhapsody/h2j/-thxrk9/winter/composition.cljs",19,1,57,57,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null)),null,(cljs.core.truth_(winter.composition.midi_note_on)?winter.composition.midi_note_on.cljs$lang$test:null)])));

return winter.composition.play_notes_BANG_.call(null,winter.composition.piece.call(null));
});
goog.exportSymbol('winter.composition.run', winter.composition.run);

//# sourceMappingURL=composition.js.map
