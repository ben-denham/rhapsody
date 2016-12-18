// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs_music.live');
goog.require('cljs.core');
goog.require('leipzig.temperament');
goog.require('leipzig.melody');
goog.require('leipzig.chord');
goog.require('leipzig.scale');
goog.require('cljs_bach.synthesis');
goog.require('cljs_music.lib.web_audio');
goog.require('cljs_music.lib.midi');
cljs_music.live.run_with = cljs_bach.synthesis.run_with;

cljs_music.live.destination = cljs_bach.synthesis.destination;

cljs_music.live.current_time = cljs_bach.synthesis.current_time;

cljs_music.live.connect__GT_ = cljs_bach.synthesis.connect__GT_;

cljs_music.live.add = cljs_bach.synthesis.add;

cljs_music.live.high_pass = cljs_bach.synthesis.high_pass;

cljs_music.live.low_pass = cljs_bach.synthesis.low_pass;

cljs_music.live.sawtooth = cljs_bach.synthesis.sawtooth;

cljs_music.live.sine = cljs_bach.synthesis.sine;

cljs_music.live.square = cljs_bach.synthesis.square;

cljs_music.live.triangle = cljs_bach.synthesis.triangle;

cljs_music.live.white_noise = cljs_bach.synthesis.white_noise;

cljs_music.live.constant = cljs_bach.synthesis.constant;

cljs_music.live.adsr = cljs_bach.synthesis.adsr;

cljs_music.live.gain = cljs_bach.synthesis.gain;

cljs_music.live.percussive = cljs_bach.synthesis.percussive;

cljs_music.live.adshr = cljs_bach.synthesis.adshr;

cljs_music.live.envelope = cljs_bach.synthesis.envelope;

cljs_music.live.stereo_panner = cljs_bach.synthesis.stereo_panner;

cljs_music.live.reverb = cljs_bach.synthesis.reverb;

cljs_music.live.delay_line = cljs_bach.synthesis.delay_line;

cljs_music.live.enhance = cljs_bach.synthesis.enhance;

cljs_music.live.A = leipzig.scale.A;

cljs_music.live.B = leipzig.scale.B;

cljs_music.live.C = leipzig.scale.C;

cljs_music.live.D = leipzig.scale.D;

cljs_music.live.E = leipzig.scale.E;

cljs_music.live.F = leipzig.scale.F;

cljs_music.live.G = leipzig.scale.G;

cljs_music.live.flat = leipzig.scale.flat;

cljs_music.live.high = leipzig.scale.high;

cljs_music.live.low = leipzig.scale.low;

cljs_music.live.sharp = leipzig.scale.sharp;

cljs_music.live.major = leipzig.scale.major;

cljs_music.live.minor = leipzig.scale.minor;

cljs_music.live.ionian = leipzig.scale.ionian;

cljs_music.live.dorian = leipzig.scale.dorian;

cljs_music.live.phrygian = leipzig.scale.phrygian;

cljs_music.live.lydian = leipzig.scale.lydian;

cljs_music.live.mixolydian = leipzig.scale.mixolydian;

cljs_music.live.aeolian = leipzig.scale.aeolian;

cljs_music.live.locrian = leipzig.scale.locrian;

cljs_music.live.blues = leipzig.scale.blues;

cljs_music.live.pentatonic = leipzig.scale.pentatonic;

cljs_music.live.raise = leipzig.scale.raise;

cljs_music.live.lower = leipzig.scale.lower;

cljs_music.live.triad = leipzig.chord.triad;

cljs_music.live.seventh = leipzig.chord.seventh;

cljs_music.live.ninth = leipzig.chord.ninth;

cljs_music.live.inversion = leipzig.chord.inversion;

cljs_music.live.root = leipzig.chord.root;

cljs_music.live.augment = leipzig.chord.augment;

cljs_music.live.phrase = leipzig.melody.phrase;

cljs_music.live.then = leipzig.melody.then;

cljs_music.live.times = leipzig.melody.times;

cljs_music.live.with$ = leipzig.melody.with$;

cljs_music.live.rhythm = leipzig.melody.rhythm;

cljs_music.live.having = leipzig.melody.having;

cljs_music.live.all = leipzig.melody.all;

cljs_music.live.bpm = leipzig.melody.bpm;

cljs_music.live.tempo = leipzig.melody.tempo;

cljs_music.live.where = leipzig.melody.where;

cljs_music.live.after = leipzig.melody.after;

cljs_music.live.wherever = leipzig.melody.wherever;

cljs_music.live.duration = leipzig.melody.duration;

cljs_music.live.temp_equal = leipzig.temperament.equal;

cljs_music.live.temp_five_limit_just = leipzig.temperament.five_limit_just;

cljs_music.live.temp_just = leipzig.temperament.just;

cljs_music.live.temp_meantone = leipzig.temperament.meantone;

cljs_music.live.temp_pythagorean = leipzig.temperament.pythagorean;

cljs_music.live.temp_pythagorean_comma = leipzig.temperament.pythagorean_comma;

cljs_music.live.temp_seven_limit_just = leipzig.temperament.seven_limit_just;

cljs_music.live.temp_well = leipzig.temperament.well;

cljs_music.live.temp_werckmeister_i = leipzig.temperament.werckmeister_i;

cljs_music.live.temp_werckmeister_ii = leipzig.temperament.werckmeister_ii;

cljs_music.live.temp_werckmeister_iii = leipzig.temperament.werckmeister_iii;

cljs_music.live.audio_context = cljs_music.lib.web_audio.audio_context;

cljs_music.live.pause_BANG_ = cljs_music.lib.web_audio.pause_BANG_;

cljs_music.live.play_BANG_ = cljs_music.lib.web_audio.play_BANG_;

cljs_music.live.play_notes_BANG_ = cljs_music.lib.web_audio.play_notes_BANG_;

cljs_music.live.now = cljs_music.lib.web_audio.now;

cljs_music.live.loop_BANG_ = cljs_music.lib.web_audio.loop_BANG_;

cljs_music.live.resume_BANG_ = cljs_music.lib.web_audio.resume_BANG_;

cljs_music.live.set_midi_listener_BANG_ = cljs_music.lib.midi.set_midi_listener_BANG_;

//# sourceMappingURL=live.js.map?rel=1482038775658