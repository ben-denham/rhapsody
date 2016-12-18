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
var args22377 = [];
var len__21638__auto___22380 = arguments.length;
var i__21639__auto___22381 = (0);
while(true){
if((i__21639__auto___22381 < len__21638__auto___22380)){
args22377.push((arguments[i__21639__auto___22381]));

var G__22382 = (i__21639__auto___22381 + (1));
i__21639__auto___22381 = G__22382;
continue;
} else {
}
break;
}

var G__22379 = args22377.length;
switch (G__22379) {
case 2:
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22377.length)].join('')));

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
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__22385 = context.createGain();
cljs_bach.synthesis.plug.call(null,G__22385.gain,level,context,at,duration);

return G__22385;
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
var args__21645__auto__ = [];
var len__21638__auto___22393 = arguments.length;
var i__21639__auto___22394 = (0);
while(true){
if((i__21639__auto___22394 < len__21638__auto___22393)){
args__21645__auto__.push((arguments[i__21639__auto___22394]));

var G__22395 = (i__21639__auto___22394 + (1));
i__21639__auto___22394 = G__22395;
continue;
} else {
}
break;
}

var argseq__21646__auto__ = ((((0) < args__21645__auto__.length))?(new cljs.core.IndexedSeq(args__21645__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(argseq__21646__auto__);
});

cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic = (function (corners){
return (function (context,at,duration){
var audio_node = context.createGain();
audio_node.gain.setValueAtTime((0),at);

var x_22396 = at;
var coordinates_22397 = corners;
while(true){
var temp__4657__auto___22398 = coordinates_22397;
if(cljs.core.truth_(temp__4657__auto___22398)){
var vec__22387_22399 = temp__4657__auto___22398;
var seq__22388_22400 = cljs.core.seq.call(null,vec__22387_22399);
var first__22389_22401 = cljs.core.first.call(null,seq__22388_22400);
var seq__22388_22402__$1 = cljs.core.next.call(null,seq__22388_22400);
var vec__22390_22403 = first__22389_22401;
var dx_22404 = cljs.core.nth.call(null,vec__22390_22403,(0),null);
var y_22405 = cljs.core.nth.call(null,vec__22390_22403,(1),null);
var remaining_22406 = seq__22388_22402__$1;
audio_node.gain.linearRampToValueAtTime(y_22405,(x_22396 + dx_22404));

var G__22407 = (dx_22404 + x_22396);
var G__22408 = remaining_22406;
x_22396 = G__22407;
coordinates_22397 = G__22408;
continue;
} else {
}
break;
}

return cljs_bach.synthesis.subgraph.call(null,audio_node);
});
});

cljs_bach.synthesis.envelope.cljs$lang$maxFixedArity = (0);

cljs_bach.synthesis.envelope.cljs$lang$applyTo = (function (seq22386){
return cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22386));
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
var hold = (function (){var x__20861__auto__ = 0.0;
var y__20862__auto__ = remainder;
return ((x__20861__auto__ > y__20862__auto__) ? x__20861__auto__ : y__20862__auto__);
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
var args__21645__auto__ = [];
var len__21638__auto___22412 = arguments.length;
var i__21639__auto___22413 = (0);
while(true){
if((i__21639__auto___22413 < len__21638__auto___22412)){
args__21645__auto__.push((arguments[i__21639__auto___22413]));

var G__22414 = (i__21639__auto___22413 + (1));
i__21639__auto___22413 = G__22414;
continue;
} else {
}
break;
}

var argseq__21646__auto__ = ((((1) < args__21645__auto__.length))?(new cljs.core.IndexedSeq(args__21645__auto__.slice((1)),(0),null)):null);
return cljs_bach.synthesis.update_graph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21646__auto__);
});

cljs_bach.synthesis.update_graph.cljs$core$IFn$_invoke$arity$variadic = (function (f,synths){
return (function (context,at,duration){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,(function (p1__22409_SHARP_){
return cljs_bach.synthesis.run_with.call(null,p1__22409_SHARP_,context,at,duration);
}),synths));
});
});

cljs_bach.synthesis.update_graph.cljs$lang$maxFixedArity = (1);

cljs_bach.synthesis.update_graph.cljs$lang$applyTo = (function (seq22410){
var G__22411 = cljs.core.first.call(null,seq22410);
var seq22410__$1 = cljs.core.next.call(null,seq22410);
return cljs_bach.synthesis.update_graph.cljs$core$IFn$_invoke$arity$variadic(G__22411,seq22410__$1);
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
var args__21645__auto__ = [];
var len__21638__auto___22416 = arguments.length;
var i__21639__auto___22417 = (0);
while(true){
if((i__21639__auto___22417 < len__21638__auto___22416)){
args__21645__auto__.push((arguments[i__21639__auto___22417]));

var G__22418 = (i__21639__auto___22417 + (1));
i__21639__auto___22417 = G__22418;
continue;
} else {
}
break;
}

var argseq__21646__auto__ = ((((0) < args__21645__auto__.length))?(new cljs.core.IndexedSeq(args__21645__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__21646__auto__);
});

cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
return cljs.core.reduce.call(null,cljs_bach.synthesis.connect,nodes);
});

cljs_bach.synthesis.connect__GT_.cljs$lang$maxFixedArity = (0);

cljs_bach.synthesis.connect__GT_.cljs$lang$applyTo = (function (seq22415){
return cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22415));
});

/**
 * Join the graphs in parallel, with upstream and downstream as the source and sink.
 */
cljs_bach.synthesis.join = (function cljs_bach$synthesis$join(var_args){
var args__21645__auto__ = [];
var len__21638__auto___22426 = arguments.length;
var i__21639__auto___22427 = (0);
while(true){
if((i__21639__auto___22427 < len__21638__auto___22426)){
args__21645__auto__.push((arguments[i__21639__auto___22427]));

var G__22428 = (i__21639__auto___22427 + (1));
i__21639__auto___22427 = G__22428;
continue;
} else {
}
break;
}

var argseq__21646__auto__ = ((((2) < args__21645__auto__.length))?(new cljs.core.IndexedSeq(args__21645__auto__.slice((2)),(0),null)):null);
return cljs_bach.synthesis.join.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21646__auto__);
});

cljs_bach.synthesis.join.cljs$core$IFn$_invoke$arity$variadic = (function (upstream,downstream,graphs){
var seq__22422_22429 = cljs.core.seq.call(null,graphs);
var chunk__22423_22430 = null;
var count__22424_22431 = (0);
var i__22425_22432 = (0);
while(true){
if((i__22425_22432 < count__22424_22431)){
var graph_22433 = cljs.core._nth.call(null,chunk__22423_22430,i__22425_22432);
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph_22433).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_22433))){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(upstream).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_22433));
} else {
}

var G__22434 = seq__22422_22429;
var G__22435 = chunk__22423_22430;
var G__22436 = count__22424_22431;
var G__22437 = (i__22425_22432 + (1));
seq__22422_22429 = G__22434;
chunk__22423_22430 = G__22435;
count__22424_22431 = G__22436;
i__22425_22432 = G__22437;
continue;
} else {
var temp__4657__auto___22438 = cljs.core.seq.call(null,seq__22422_22429);
if(temp__4657__auto___22438){
var seq__22422_22439__$1 = temp__4657__auto___22438;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22422_22439__$1)){
var c__21344__auto___22440 = cljs.core.chunk_first.call(null,seq__22422_22439__$1);
var G__22441 = cljs.core.chunk_rest.call(null,seq__22422_22439__$1);
var G__22442 = c__21344__auto___22440;
var G__22443 = cljs.core.count.call(null,c__21344__auto___22440);
var G__22444 = (0);
seq__22422_22429 = G__22441;
chunk__22423_22430 = G__22442;
count__22424_22431 = G__22443;
i__22425_22432 = G__22444;
continue;
} else {
var graph_22445 = cljs.core.first.call(null,seq__22422_22439__$1);
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph_22445).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_22445))){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(upstream).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_22445));
} else {
}

var G__22446 = cljs.core.next.call(null,seq__22422_22439__$1);
var G__22447 = null;
var G__22448 = (0);
var G__22449 = (0);
seq__22422_22429 = G__22446;
chunk__22423_22430 = G__22447;
count__22424_22431 = G__22448;
i__22425_22432 = G__22449;
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

cljs_bach.synthesis.join.cljs$lang$applyTo = (function (seq22419){
var G__22420 = cljs.core.first.call(null,seq22419);
var seq22419__$1 = cljs.core.next.call(null,seq22419);
var G__22421 = cljs.core.first.call(null,seq22419__$1);
var seq22419__$2 = cljs.core.next.call(null,seq22419__$1);
return cljs_bach.synthesis.join.cljs$core$IFn$_invoke$arity$variadic(G__22420,G__22421,seq22419__$2);
});

/**
 * Add together synths by connecting them all to the same upstream and downstream gains.
 */
cljs_bach.synthesis.add = (function cljs_bach$synthesis$add(var_args){
var args__21645__auto__ = [];
var len__21638__auto___22451 = arguments.length;
var i__21639__auto___22452 = (0);
while(true){
if((i__21639__auto___22452 < len__21638__auto___22451)){
args__21645__auto__.push((arguments[i__21639__auto___22452]));

var G__22453 = (i__21639__auto___22452 + (1));
i__21639__auto___22452 = G__22453;
continue;
} else {
}
break;
}

var argseq__21646__auto__ = ((((0) < args__21645__auto__.length))?(new cljs.core.IndexedSeq(args__21645__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(argseq__21646__auto__);
});

cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic = (function (synths){
return cljs.core.apply.call(null,cljs_bach.synthesis.update_graph,cljs_bach.synthesis.join,cljs_bach.synthesis.pass_through,cljs_bach.synthesis.pass_through,synths);
});

cljs_bach.synthesis.add.cljs$lang$maxFixedArity = (0);

cljs_bach.synthesis.add.cljs$lang$applyTo = (function (seq22450){
return cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22450));
});

cljs_bach.synthesis.raw_buffer = (function cljs_bach$synthesis$raw_buffer(generate_bit_BANG_,context,duration){
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = context.createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var seq__22458_22462 = cljs.core.seq.call(null,cljs.core.range.call(null,sample_rate));
var chunk__22459_22463 = null;
var count__22460_22464 = (0);
var i__22461_22465 = (0);
while(true){
if((i__22461_22465 < count__22460_22464)){
var i_22466 = cljs.core._nth.call(null,chunk__22459_22463,i__22461_22465);
(data[i_22466] = generate_bit_BANG_.call(null,i_22466));

var G__22467 = seq__22458_22462;
var G__22468 = chunk__22459_22463;
var G__22469 = count__22460_22464;
var G__22470 = (i__22461_22465 + (1));
seq__22458_22462 = G__22467;
chunk__22459_22463 = G__22468;
count__22460_22464 = G__22469;
i__22461_22465 = G__22470;
continue;
} else {
var temp__4657__auto___22471 = cljs.core.seq.call(null,seq__22458_22462);
if(temp__4657__auto___22471){
var seq__22458_22472__$1 = temp__4657__auto___22471;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22458_22472__$1)){
var c__21344__auto___22473 = cljs.core.chunk_first.call(null,seq__22458_22472__$1);
var G__22474 = cljs.core.chunk_rest.call(null,seq__22458_22472__$1);
var G__22475 = c__21344__auto___22473;
var G__22476 = cljs.core.count.call(null,c__21344__auto___22473);
var G__22477 = (0);
seq__22458_22462 = G__22474;
chunk__22459_22463 = G__22475;
count__22460_22464 = G__22476;
i__22461_22465 = G__22477;
continue;
} else {
var i_22478 = cljs.core.first.call(null,seq__22458_22472__$1);
(data[i_22478] = generate_bit_BANG_.call(null,i_22478));

var G__22479 = cljs.core.next.call(null,seq__22458_22472__$1);
var G__22480 = null;
var G__22481 = (0);
var G__22482 = (0);
seq__22458_22462 = G__22479;
chunk__22459_22463 = G__22480;
count__22460_22464 = G__22481;
i__22461_22465 = G__22482;
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
return cljs_bach.synthesis.source.call(null,(function (){var G__22484 = context.createBufferSource();
G__22484.buffer = cljs_bach.synthesis.buffer.call(null,generate_bit_BANG_,context,(duration + 1.0));

G__22484.start(at);

return G__22484;
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
return cljs_bach.synthesis.source.call(null,(function (){var G__22486 = context.createOscillator();
G__22486.frequency.value = (0);

cljs_bach.synthesis.plug.call(null,G__22486.frequency,freq,context,at,duration);

G__22486.type = type;

G__22486.start(at);

G__22486.stop(((at + duration) + 1.0));

return G__22486;
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
var args22487 = [];
var len__21638__auto___22491 = arguments.length;
var i__21639__auto___22492 = (0);
while(true){
if((i__21639__auto___22492 < len__21638__auto___22491)){
args22487.push((arguments[i__21639__auto___22492]));

var G__22493 = (i__21639__auto___22492 + (1));
i__21639__auto___22492 = G__22493;
continue;
} else {
}
break;
}

var G__22489 = args22487.length;
switch (G__22489) {
case 2:
return cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22487.length)].join('')));

}
});

cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$2 = (function (type,freq){
return cljs_bach.synthesis.biquad_filter.call(null,type,freq,1.0);
});

cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3 = (function (type,freq,q){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__22490 = context.createBiquadFilter();
G__22490.frequency.value = (0);

cljs_bach.synthesis.plug.call(null,G__22490.frequency,freq,context,at,duration);

cljs_bach.synthesis.plug.call(null,G__22490.Q,q,context,at,duration);

G__22490.type = type;

return G__22490;
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
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__22496 = context.createStereoPanner();
cljs_bach.synthesis.plug.call(null,G__22496.pan,pan,context,at,duration);

return G__22496;
})());
});
});
/**
 * Delay the signal.
 */
cljs_bach.synthesis.delay_line = (function cljs_bach$synthesis$delay_line(seconds){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var maximum = (5);
var G__22498 = context.createDelay(maximum);
cljs_bach.synthesis.plug.call(null,G__22498.delayTime,seconds,context,at,duration);

return G__22498;
})());
});
});
/**
 * Linear convolution.
 */
cljs_bach.synthesis.convolver = (function cljs_bach$synthesis$convolver(generate_bit_BANG_){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__22500 = context.createConvolver();
G__22500.buffer = cljs_bach.synthesis.buffer.call(null,generate_bit_BANG_,context,(duration + 1.0));

return G__22500;
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

//# sourceMappingURL=synthesis.js.map?rel=1482038773945