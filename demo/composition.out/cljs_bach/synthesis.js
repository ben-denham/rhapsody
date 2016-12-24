// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs_bach.synthesis');
goog.require('cljs.core');
/**
 * Construct an audio context in a way that works even if it's prefixed.
 */
cljs_bach.synthesis.audio_context = (function cljs_bach$synthesis$audio_context(){
if(cljs.core.truth_(window.AudioContext)){
return (new window.AudioContext());
} else {
return (new window.webkitAudioContext());
}
});
/**
 * Return the current time as recorded by the audio context.
 */
cljs_bach.synthesis.current_time = (function cljs_bach$synthesis$current_time(context){
return context.currentTime;
});
cljs_bach.synthesis.subgraph = (function cljs_bach$synthesis$subgraph(var_args){
var args10405 = [];
var len__8046__auto___10408 = arguments.length;
var i__8047__auto___10409 = (0);
while(true){
if((i__8047__auto___10409 < len__8046__auto___10408)){
args10405.push((arguments[i__8047__auto___10409]));

var G__10410 = (i__8047__auto___10409 + (1));
i__8047__auto___10409 = G__10410;
continue;
} else {
}
break;
}

var G__10407 = args10405.length;
switch (G__10407) {
case 2:
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10405.length)].join('')));

}
});

cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2 = (function (input,output){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),input,new cljs.core.Keyword(null,"output","output",-1105869043),output], null);
});

cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1 = (function (singleton){
return cljs_bach.synthesis.subgraph.call(null,singleton,singleton);
});

cljs_bach.synthesis.subgraph.cljs$lang$maxFixedArity = 2;

/**
 * A graph of synthesis nodes without an input, so another graph can't connect to it.
 */
cljs_bach.synthesis.source = (function cljs_bach$synthesis$source(node){
return cljs_bach.synthesis.subgraph.call(null,null,node);
});
/**
 * A graph of synthesis nodes without an output, so it can't connect to another graph.
 */
cljs_bach.synthesis.sink = (function cljs_bach$synthesis$sink(node){
return cljs_bach.synthesis.subgraph.call(null,node,null);
});
/**
 * Convert a synth (actually a reader fn) into a concrete subgraph by supplying context and timing.
 */
cljs_bach.synthesis.run_with = (function cljs_bach$synthesis$run_with(synth,context,at,duration){
return synth.call(null,context,at,duration);
});
/**
 * The destination of the audio context i.e. the speakers.
 */
cljs_bach.synthesis.destination = (function cljs_bach$synthesis$destination(context,at,duration){
return cljs_bach.synthesis.sink.call(null,context.destination);
});
cljs_bach.synthesis.plug = (function cljs_bach$synthesis$plug(param,input,context,at,duration){

if(typeof input === 'number'){
return param.setValueAtTime(input,at);
} else {
return new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(cljs_bach.synthesis.run_with.call(null,input,context,at,duration)).connect(param);
}
});
/**
 * Multiply the signal by level.
 */
cljs_bach.synthesis.gain = (function cljs_bach$synthesis$gain(level){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__10413 = context.createGain();
cljs_bach.synthesis.plug.call(null,G__10413.gain,level,context,at,duration);

return G__10413;
})());
});
});
/**
 * Pass the signal through unaltered.
 */
cljs_bach.synthesis.pass_through = cljs_bach.synthesis.gain.call(null,1.0);
/**
 * Build an envelope out of [segment-duration final-level] coordinates.
 */
cljs_bach.synthesis.envelope = (function cljs_bach$synthesis$envelope(var_args){
var args__8053__auto__ = [];
var len__8046__auto___10421 = arguments.length;
var i__8047__auto___10422 = (0);
while(true){
if((i__8047__auto___10422 < len__8046__auto___10421)){
args__8053__auto__.push((arguments[i__8047__auto___10422]));

var G__10423 = (i__8047__auto___10422 + (1));
i__8047__auto___10422 = G__10423;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});

cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic = (function (corners){
return (function (context,at,duration){
var audio_node = context.createGain();
audio_node.gain.setValueAtTime((0),at);

var x_10424 = at;
var coordinates_10425 = corners;
while(true){
var temp__4657__auto___10426 = coordinates_10425;
if(cljs.core.truth_(temp__4657__auto___10426)){
var vec__10415_10427 = temp__4657__auto___10426;
var seq__10416_10428 = cljs.core.seq.call(null,vec__10415_10427);
var first__10417_10429 = cljs.core.first.call(null,seq__10416_10428);
var seq__10416_10430__$1 = cljs.core.next.call(null,seq__10416_10428);
var vec__10418_10431 = first__10417_10429;
var dx_10432 = cljs.core.nth.call(null,vec__10418_10431,(0),null);
var y_10433 = cljs.core.nth.call(null,vec__10418_10431,(1),null);
var remaining_10434 = seq__10416_10430__$1;
audio_node.gain.linearRampToValueAtTime(y_10433,(x_10424 + dx_10432));

var G__10435 = (dx_10432 + x_10424);
var G__10436 = remaining_10434;
x_10424 = G__10435;
coordinates_10425 = G__10436;
continue;
} else {
}
break;
}

return cljs_bach.synthesis.subgraph.call(null,audio_node);
});
});

cljs_bach.synthesis.envelope.cljs$lang$maxFixedArity = (0);

cljs_bach.synthesis.envelope.cljs$lang$applyTo = (function (seq10414){
return cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10414));
});

/**
 * An ADSR envelope that also lets you specify the hold duration.
 */
cljs_bach.synthesis.adshr = (function cljs_bach$synthesis$adshr(attack,decay,sustain,hold,release){
return cljs_bach.synthesis.envelope.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attack,1.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decay,sustain], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hold,sustain], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [release,(0)], null));
});
/**
 * A four-stage envelope.
 */
cljs_bach.synthesis.adsr = (function cljs_bach$synthesis$adsr(attack,decay,sustain,release){
return (function (context,at,duration){
var remainder = (((duration - attack) - decay) - sustain);
var hold = (function (){var x__7269__auto__ = 0.0;
var y__7270__auto__ = remainder;
return ((x__7269__auto__ > y__7270__auto__) ? x__7269__auto__ : y__7270__auto__);
})();
var node = cljs_bach.synthesis.adshr.call(null,attack,decay,sustain,hold,release);
return cljs_bach.synthesis.run_with.call(null,node,context,at,duration);
});
});
/**
 * A simple envelope.
 */
cljs_bach.synthesis.percussive = (function cljs_bach$synthesis$percussive(attack,decay){
return cljs_bach.synthesis.envelope.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attack,1.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decay,0.0], null));
});
/**
 * Like update-in, but for the node graph a synth will return (and variadic).
 */
cljs_bach.synthesis.update_graph = (function cljs_bach$synthesis$update_graph(var_args){
var args__8053__auto__ = [];
var len__8046__auto___10440 = arguments.length;
var i__8047__auto___10441 = (0);
while(true){
if((i__8047__auto___10441 < len__8046__auto___10440)){
args__8053__auto__.push((arguments[i__8047__auto___10441]));

var G__10442 = (i__8047__auto___10441 + (1));
i__8047__auto___10441 = G__10442;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((1) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((1)),(0),null)):null);
return cljs_bach.synthesis.update_graph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8054__auto__);
});

cljs_bach.synthesis.update_graph.cljs$core$IFn$_invoke$arity$variadic = (function (f,synths){
return (function (context,at,duration){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,(function (p1__10437_SHARP_){
return cljs_bach.synthesis.run_with.call(null,p1__10437_SHARP_,context,at,duration);
}),synths));
});
});

cljs_bach.synthesis.update_graph.cljs$lang$maxFixedArity = (1);

cljs_bach.synthesis.update_graph.cljs$lang$applyTo = (function (seq10438){
var G__10439 = cljs.core.first.call(null,seq10438);
var seq10438__$1 = cljs.core.next.call(null,seq10438);
return cljs_bach.synthesis.update_graph.cljs$core$IFn$_invoke$arity$variadic(G__10439,seq10438__$1);
});

/**
 * Use the output of one synth as the input to another.
 */
cljs_bach.synthesis.connect = (function cljs_bach$synthesis$connect(upstream_synth,downstream_synth){
return cljs_bach.synthesis.update_graph.call(null,(function (graph1,graph2){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph1).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph2));

return cljs_bach.synthesis.subgraph.call(null,new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph1),new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph2));
}),upstream_synth,downstream_synth);
});
/**
 * Connect synths in series.
 */
cljs_bach.synthesis.connect__GT_ = (function cljs_bach$synthesis$connect__GT_(var_args){
var args__8053__auto__ = [];
var len__8046__auto___10444 = arguments.length;
var i__8047__auto___10445 = (0);
while(true){
if((i__8047__auto___10445 < len__8046__auto___10444)){
args__8053__auto__.push((arguments[i__8047__auto___10445]));

var G__10446 = (i__8047__auto___10445 + (1));
i__8047__auto___10445 = G__10446;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});

cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
return cljs.core.reduce.call(null,cljs_bach.synthesis.connect,nodes);
});

cljs_bach.synthesis.connect__GT_.cljs$lang$maxFixedArity = (0);

cljs_bach.synthesis.connect__GT_.cljs$lang$applyTo = (function (seq10443){
return cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10443));
});

/**
 * Join the graphs in parallel, with upstream and downstream as the source and sink.
 */
cljs_bach.synthesis.join = (function cljs_bach$synthesis$join(var_args){
var args__8053__auto__ = [];
var len__8046__auto___10454 = arguments.length;
var i__8047__auto___10455 = (0);
while(true){
if((i__8047__auto___10455 < len__8046__auto___10454)){
args__8053__auto__.push((arguments[i__8047__auto___10455]));

var G__10456 = (i__8047__auto___10455 + (1));
i__8047__auto___10455 = G__10456;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((2) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((2)),(0),null)):null);
return cljs_bach.synthesis.join.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8054__auto__);
});

cljs_bach.synthesis.join.cljs$core$IFn$_invoke$arity$variadic = (function (upstream,downstream,graphs){
var seq__10450_10457 = cljs.core.seq.call(null,graphs);
var chunk__10451_10458 = null;
var count__10452_10459 = (0);
var i__10453_10460 = (0);
while(true){
if((i__10453_10460 < count__10452_10459)){
var graph_10461 = cljs.core._nth.call(null,chunk__10451_10458,i__10453_10460);
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph_10461).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_10461))){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(upstream).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_10461));
} else {
}

var G__10462 = seq__10450_10457;
var G__10463 = chunk__10451_10458;
var G__10464 = count__10452_10459;
var G__10465 = (i__10453_10460 + (1));
seq__10450_10457 = G__10462;
chunk__10451_10458 = G__10463;
count__10452_10459 = G__10464;
i__10453_10460 = G__10465;
continue;
} else {
var temp__4657__auto___10466 = cljs.core.seq.call(null,seq__10450_10457);
if(temp__4657__auto___10466){
var seq__10450_10467__$1 = temp__4657__auto___10466;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10450_10467__$1)){
var c__7752__auto___10468 = cljs.core.chunk_first.call(null,seq__10450_10467__$1);
var G__10469 = cljs.core.chunk_rest.call(null,seq__10450_10467__$1);
var G__10470 = c__7752__auto___10468;
var G__10471 = cljs.core.count.call(null,c__7752__auto___10468);
var G__10472 = (0);
seq__10450_10457 = G__10469;
chunk__10451_10458 = G__10470;
count__10452_10459 = G__10471;
i__10453_10460 = G__10472;
continue;
} else {
var graph_10473 = cljs.core.first.call(null,seq__10450_10467__$1);
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph_10473).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_10473))){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(upstream).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_10473));
} else {
}

var G__10474 = cljs.core.next.call(null,seq__10450_10467__$1);
var G__10475 = null;
var G__10476 = (0);
var G__10477 = (0);
seq__10450_10457 = G__10474;
chunk__10451_10458 = G__10475;
count__10452_10459 = G__10476;
i__10453_10460 = G__10477;
continue;
}
} else {
}
}
break;
}

return cljs_bach.synthesis.subgraph.call(null,new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(upstream),new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(downstream));
});

cljs_bach.synthesis.join.cljs$lang$maxFixedArity = (2);

cljs_bach.synthesis.join.cljs$lang$applyTo = (function (seq10447){
var G__10448 = cljs.core.first.call(null,seq10447);
var seq10447__$1 = cljs.core.next.call(null,seq10447);
var G__10449 = cljs.core.first.call(null,seq10447__$1);
var seq10447__$2 = cljs.core.next.call(null,seq10447__$1);
return cljs_bach.synthesis.join.cljs$core$IFn$_invoke$arity$variadic(G__10448,G__10449,seq10447__$2);
});

/**
 * Add together synths by connecting them all to the same upstream and downstream gains.
 */
cljs_bach.synthesis.add = (function cljs_bach$synthesis$add(var_args){
var args__8053__auto__ = [];
var len__8046__auto___10479 = arguments.length;
var i__8047__auto___10480 = (0);
while(true){
if((i__8047__auto___10480 < len__8046__auto___10479)){
args__8053__auto__.push((arguments[i__8047__auto___10480]));

var G__10481 = (i__8047__auto___10480 + (1));
i__8047__auto___10480 = G__10481;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((0) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(argseq__8054__auto__);
});

cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic = (function (synths){
return cljs.core.apply.call(null,cljs_bach.synthesis.update_graph,cljs_bach.synthesis.join,cljs_bach.synthesis.pass_through,cljs_bach.synthesis.pass_through,synths);
});

cljs_bach.synthesis.add.cljs$lang$maxFixedArity = (0);

cljs_bach.synthesis.add.cljs$lang$applyTo = (function (seq10478){
return cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10478));
});

cljs_bach.synthesis.raw_buffer = (function cljs_bach$synthesis$raw_buffer(generate_bit_BANG_,context,duration){
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = context.createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var seq__10486_10490 = cljs.core.seq.call(null,cljs.core.range.call(null,sample_rate));
var chunk__10487_10491 = null;
var count__10488_10492 = (0);
var i__10489_10493 = (0);
while(true){
if((i__10489_10493 < count__10488_10492)){
var i_10494 = cljs.core._nth.call(null,chunk__10487_10491,i__10489_10493);
(data[i_10494] = generate_bit_BANG_.call(null,i_10494));

var G__10495 = seq__10486_10490;
var G__10496 = chunk__10487_10491;
var G__10497 = count__10488_10492;
var G__10498 = (i__10489_10493 + (1));
seq__10486_10490 = G__10495;
chunk__10487_10491 = G__10496;
count__10488_10492 = G__10497;
i__10489_10493 = G__10498;
continue;
} else {
var temp__4657__auto___10499 = cljs.core.seq.call(null,seq__10486_10490);
if(temp__4657__auto___10499){
var seq__10486_10500__$1 = temp__4657__auto___10499;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10486_10500__$1)){
var c__7752__auto___10501 = cljs.core.chunk_first.call(null,seq__10486_10500__$1);
var G__10502 = cljs.core.chunk_rest.call(null,seq__10486_10500__$1);
var G__10503 = c__7752__auto___10501;
var G__10504 = cljs.core.count.call(null,c__7752__auto___10501);
var G__10505 = (0);
seq__10486_10490 = G__10502;
chunk__10487_10491 = G__10503;
count__10488_10492 = G__10504;
i__10489_10493 = G__10505;
continue;
} else {
var i_10506 = cljs.core.first.call(null,seq__10486_10500__$1);
(data[i_10506] = generate_bit_BANG_.call(null,i_10506));

var G__10507 = cljs.core.next.call(null,seq__10486_10500__$1);
var G__10508 = null;
var G__10509 = (0);
var G__10510 = (0);
seq__10486_10490 = G__10507;
chunk__10487_10491 = G__10508;
count__10488_10492 = G__10509;
i__10489_10493 = G__10510;
continue;
}
} else {
}
}
break;
}

return buffer;
});
cljs_bach.synthesis.buffer = cljs.core.memoize.call(null,cljs_bach.synthesis.raw_buffer);
/**
 * Make noise according to the supplied strategy for creating bits.
 */
cljs_bach.synthesis.noise = (function cljs_bach$synthesis$noise(generate_bit_BANG_){
return (function (context,at,duration){
return cljs_bach.synthesis.source.call(null,(function (){var G__10512 = context.createBufferSource();
G__10512.buffer = cljs_bach.synthesis.buffer.call(null,generate_bit_BANG_,context,(duration + 1.0));

G__10512.start(at);

return G__10512;
})());
});
});
/**
 * Random noise.
 */
cljs_bach.synthesis.white_noise = (function (){var white = (function (_){
return ((Math.random() * 2.0) - 1.0);
});
return cljs_bach.synthesis.noise.call(null,white);
})();
/**
 * Make a constant value by creating noise with a fixed value.
 */
cljs_bach.synthesis.constant = (function cljs_bach$synthesis$constant(x){
return cljs_bach.synthesis.noise.call(null,cljs.core.constantly.call(null,x));
});
/**
 * A periodic wave.
 */
cljs_bach.synthesis.oscillator = (function cljs_bach$synthesis$oscillator(type,freq){
return (function (context,at,duration){
return cljs_bach.synthesis.source.call(null,(function (){var G__10514 = context.createOscillator();
G__10514.frequency.value = (0);

cljs_bach.synthesis.plug.call(null,G__10514.frequency,freq,context,at,duration);

G__10514.type = type;

G__10514.start(at);

G__10514.stop(((at + duration) + 1.0));

return G__10514;
})());
});
});
cljs_bach.synthesis.sine = cljs.core.partial.call(null,cljs_bach.synthesis.oscillator,"sine");
cljs_bach.synthesis.sawtooth = cljs.core.partial.call(null,cljs_bach.synthesis.oscillator,"sawtooth");
cljs_bach.synthesis.square = cljs.core.partial.call(null,cljs_bach.synthesis.oscillator,"square");
cljs_bach.synthesis.triangle = cljs.core.partial.call(null,cljs_bach.synthesis.oscillator,"triangle");
/**
 * Attenuate frequencies beyond the cutoff, and intensify the cutoff frequency based on the value of q.
 */
cljs_bach.synthesis.biquad_filter = (function cljs_bach$synthesis$biquad_filter(var_args){
var args10515 = [];
var len__8046__auto___10519 = arguments.length;
var i__8047__auto___10520 = (0);
while(true){
if((i__8047__auto___10520 < len__8046__auto___10519)){
args10515.push((arguments[i__8047__auto___10520]));

var G__10521 = (i__8047__auto___10520 + (1));
i__8047__auto___10520 = G__10521;
continue;
} else {
}
break;
}

var G__10517 = args10515.length;
switch (G__10517) {
case 2:
return cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10515.length)].join('')));

}
});

cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$2 = (function (type,freq){
return cljs_bach.synthesis.biquad_filter.call(null,type,freq,1.0);
});

cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3 = (function (type,freq,q){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__10518 = context.createBiquadFilter();
G__10518.frequency.value = (0);

cljs_bach.synthesis.plug.call(null,G__10518.frequency,freq,context,at,duration);

cljs_bach.synthesis.plug.call(null,G__10518.Q,q,context,at,duration);

G__10518.type = type;

return G__10518;
})());
});
});

cljs_bach.synthesis.biquad_filter.cljs$lang$maxFixedArity = 3;

cljs_bach.synthesis.low_pass = cljs.core.partial.call(null,cljs_bach.synthesis.biquad_filter,"lowpass");
cljs_bach.synthesis.high_pass = cljs.core.partial.call(null,cljs_bach.synthesis.biquad_filter,"highpass");
/**
 * Pan the signal left (-1) or right (1).
 */
cljs_bach.synthesis.stereo_panner = (function cljs_bach$synthesis$stereo_panner(pan){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__10524 = context.createStereoPanner();
cljs_bach.synthesis.plug.call(null,G__10524.pan,pan,context,at,duration);

return G__10524;
})());
});
});
/**
 * Delay the signal.
 */
cljs_bach.synthesis.delay_line = (function cljs_bach$synthesis$delay_line(seconds){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var maximum = (5);
var G__10526 = context.createDelay(maximum);
cljs_bach.synthesis.plug.call(null,G__10526.delayTime,seconds,context,at,duration);

return G__10526;
})());
});
});
/**
 * Linear convolution.
 */
cljs_bach.synthesis.convolver = (function cljs_bach$synthesis$convolver(generate_bit_BANG_){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__10528 = context.createConvolver();
G__10528.buffer = cljs_bach.synthesis.buffer.call(null,generate_bit_BANG_,context,(duration + 1.0));

return G__10528;
})());
});
});
/**
 * Crude reverb.
 */
cljs_bach.synthesis.reverb = (function (){var duration = (5);
var decay = (3);
var sample_rate = (44100);
var length = (sample_rate * (duration + 1.0));
var logarithmic_decay = ((function (duration,decay,sample_rate,length){
return (function (i){
return (((Math.random(i) * 2.0) - 1.0) * Math.pow(((1) - (i / length)),decay));
});})(duration,decay,sample_rate,length))
;
return cljs_bach.synthesis.convolver.call(null,logarithmic_decay);
})();
/**
 * Mix the original signal with one with the effect applied.
 */
cljs_bach.synthesis.enhance = (function cljs_bach$synthesis$enhance(effect,level){
return cljs_bach.synthesis.add.call(null,cljs_bach.synthesis.pass_through,cljs_bach.synthesis.connect__GT_.call(null,effect,cljs_bach.synthesis.gain.call(null,level)));
});

//# sourceMappingURL=synthesis.js.map