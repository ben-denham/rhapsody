// Compiled by ClojureScript 1.10.773 {}
goog.provide('rhapsody.live');
goog.require('cljs.core');
goog.require('leipzig.temperament');
goog.require('leipzig.melody');
goog.require('leipzig.chord');
goog.require('leipzig.scale');
goog.require('cljs_bach.synthesis');
goog.require('rhapsody.lib.web_audio');
goog.require('rhapsody.lib.midi');
rhapsody.live.run_with = cljs_bach.synthesis.run_with;

rhapsody.live.destination = cljs_bach.synthesis.destination;

rhapsody.live.current_time = cljs_bach.synthesis.current_time;

rhapsody.live.connect__GT_ = cljs_bach.synthesis.connect__GT_;

rhapsody.live.add = cljs_bach.synthesis.add;

rhapsody.live.high_pass = cljs_bach.synthesis.high_pass;

rhapsody.live.low_pass = cljs_bach.synthesis.low_pass;

rhapsody.live.sawtooth = cljs_bach.synthesis.sawtooth;

rhapsody.live.sine = cljs_bach.synthesis.sine;

rhapsody.live.square = cljs_bach.synthesis.square;

rhapsody.live.triangle = cljs_bach.synthesis.triangle;

rhapsody.live.white_noise = cljs_bach.synthesis.white_noise;

rhapsody.live.constant = cljs_bach.synthesis.constant;

rhapsody.live.adsr = cljs_bach.synthesis.adsr;

rhapsody.live.gain = cljs_bach.synthesis.gain;

rhapsody.live.percussive = cljs_bach.synthesis.percussive;

rhapsody.live.adshr = cljs_bach.synthesis.adshr;

rhapsody.live.envelope = cljs_bach.synthesis.envelope;

rhapsody.live.stereo_panner = cljs_bach.synthesis.stereo_panner;

rhapsody.live.reverb = cljs_bach.synthesis.reverb;

rhapsody.live.delay_line = cljs_bach.synthesis.delay_line;

rhapsody.live.enhance = cljs_bach.synthesis.enhance;

rhapsody.live.A = leipzig.scale.A;

rhapsody.live.B = leipzig.scale.B;

rhapsody.live.C = leipzig.scale.C;

rhapsody.live.D = leipzig.scale.D;

rhapsody.live.E = leipzig.scale.E;

rhapsody.live.F = leipzig.scale.F;

rhapsody.live.G = leipzig.scale.G;

rhapsody.live.flat = leipzig.scale.flat;

rhapsody.live.high = leipzig.scale.high;

rhapsody.live.low = leipzig.scale.low;

rhapsody.live.sharp = leipzig.scale.sharp;

rhapsody.live.major = leipzig.scale.major;

rhapsody.live.minor = leipzig.scale.minor;

rhapsody.live.ionian = leipzig.scale.ionian;

rhapsody.live.dorian = leipzig.scale.dorian;

rhapsody.live.phrygian = leipzig.scale.phrygian;

rhapsody.live.lydian = leipzig.scale.lydian;

rhapsody.live.mixolydian = leipzig.scale.mixolydian;

rhapsody.live.aeolian = leipzig.scale.aeolian;

rhapsody.live.locrian = leipzig.scale.locrian;

rhapsody.live.blues = leipzig.scale.blues;

rhapsody.live.pentatonic = leipzig.scale.pentatonic;

rhapsody.live.raise = leipzig.scale.raise;

rhapsody.live.lower = leipzig.scale.lower;

rhapsody.live.triad = leipzig.chord.triad;

rhapsody.live.seventh = leipzig.chord.seventh;

rhapsody.live.ninth = leipzig.chord.ninth;

rhapsody.live.inversion = leipzig.chord.inversion;

rhapsody.live.root = leipzig.chord.root;

rhapsody.live.augment = leipzig.chord.augment;

rhapsody.live.phrase = leipzig.melody.phrase;

rhapsody.live.then = leipzig.melody.then;

rhapsody.live.times = leipzig.melody.times;

rhapsody.live.with$ = leipzig.melody.with$;

rhapsody.live.rhythm = leipzig.melody.rhythm;

rhapsody.live.having = leipzig.melody.having;

rhapsody.live.all = leipzig.melody.all;

rhapsody.live.bpm = leipzig.melody.bpm;

rhapsody.live.tempo = leipzig.melody.tempo;

rhapsody.live.where = leipzig.melody.where;

rhapsody.live.after = leipzig.melody.after;

rhapsody.live.wherever = leipzig.melody.wherever;

rhapsody.live.duration = leipzig.melody.duration;

rhapsody.live.temp_equal = leipzig.temperament.equal;

rhapsody.live.temp_five_limit_just = leipzig.temperament.five_limit_just;

rhapsody.live.temp_just = leipzig.temperament.just;

rhapsody.live.temp_meantone = leipzig.temperament.meantone;

rhapsody.live.temp_pythagorean = leipzig.temperament.pythagorean;

rhapsody.live.temp_pythagorean_comma = leipzig.temperament.pythagorean_comma;

rhapsody.live.temp_seven_limit_just = leipzig.temperament.seven_limit_just;

rhapsody.live.temp_well = leipzig.temperament.well;

rhapsody.live.temp_werckmeister_i = leipzig.temperament.werckmeister_i;

rhapsody.live.temp_werckmeister_ii = leipzig.temperament.werckmeister_ii;

rhapsody.live.temp_werckmeister_iii = leipzig.temperament.werckmeister_iii;

rhapsody.live.audio_context = rhapsody.lib.web_audio.audio_context;

rhapsody.live.pause_BANG_ = rhapsody.lib.web_audio.pause_BANG_;

rhapsody.live.play_BANG_ = rhapsody.lib.web_audio.play_BANG_;

rhapsody.live.play_notes_BANG_ = rhapsody.lib.web_audio.play_notes_BANG_;

rhapsody.live.now = rhapsody.lib.web_audio.now;

rhapsody.live.loop_BANG_ = rhapsody.lib.web_audio.loop_BANG_;

rhapsody.live.resume_BANG_ = rhapsody.lib.web_audio.resume_BANG_;

rhapsody.live.make_input_BANG_ = rhapsody.lib.web_audio.make_input_BANG_;

rhapsody.live.set_input_BANG_ = rhapsody.lib.web_audio.set_input_BANG_;

rhapsody.live.lin_ramp_input_BANG_ = rhapsody.lib.web_audio.lin_ramp_input_BANG_;

rhapsody.live.exp_ramp_input_BANG_ = rhapsody.lib.web_audio.exp_ramp_input_BANG_;

rhapsody.live.jack = rhapsody.lib.web_audio.jack;

rhapsody.live.set_midi_listener_BANG_ = rhapsody.lib.midi.set_midi_listener_BANG_;

//# sourceMappingURL=live.js.map
