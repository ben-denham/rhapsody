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
var args8177 = [];
var len__8046__auto___8180 = arguments.length;
var i__8047__auto___8181 = (0);
while(true){
if((i__8047__auto___8181 < len__8046__auto___8180)){
args8177.push((arguments[i__8047__auto___8181]));

var G__8182 = (i__8047__auto___8181 + (1));
i__8047__auto___8181 = G__8182;
continue;
} else {
}
break;
}

var G__8179 = args8177.length;
switch (G__8179) {
case 2:
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8177.length)].join('')));

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
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__8185 = context.createGain();
cljs_bach.synthesis.plug.call(null,G__8185.gain,level,context,at,duration);

return G__8185;
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
var len__8046__auto___8193 = arguments.length;
var i__8047__auto___8194 = (0);
while(true){
if((i__8047__auto___8194 < len__8046__auto___8193)){
args__8053__auto__.push((arguments[i__8047__auto___8194]));

var G__8195 = (i__8047__auto___8194 + (1));
i__8047__auto___8194 = G__8195;
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

var x_8196 = at;
var coordinates_8197 = corners;
while(true){
var temp__4657__auto___8198 = coordinates_8197;
if(cljs.core.truth_(temp__4657__auto___8198)){
var vec__8187_8199 = temp__4657__auto___8198;
var seq__8188_8200 = cljs.core.seq.call(null,vec__8187_8199);
var first__8189_8201 = cljs.core.first.call(null,seq__8188_8200);
var seq__8188_8202__$1 = cljs.core.next.call(null,seq__8188_8200);
var vec__8190_8203 = first__8189_8201;
var dx_8204 = cljs.core.nth.call(null,vec__8190_8203,(0),null);
var y_8205 = cljs.core.nth.call(null,vec__8190_8203,(1),null);
var remaining_8206 = seq__8188_8202__$1;
audio_node.gain.linearRampToValueAtTime(y_8205,(x_8196 + dx_8204));

var G__8207 = (dx_8204 + x_8196);
var G__8208 = remaining_8206;
x_8196 = G__8207;
coordinates_8197 = G__8208;
continue;
} else {
}
break;
}

return cljs_bach.synthesis.subgraph.call(null,audio_node);
});
});

cljs_bach.synthesis.envelope.cljs$lang$maxFixedArity = (0);

cljs_bach.synthesis.envelope.cljs$lang$applyTo = (function (seq8186){
return cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8186));
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
var len__8046__auto___8212 = arguments.length;
var i__8047__auto___8213 = (0);
while(true){
if((i__8047__auto___8213 < len__8046__auto___8212)){
args__8053__auto__.push((arguments[i__8047__auto___8213]));

var G__8214 = (i__8047__auto___8213 + (1));
i__8047__auto___8213 = G__8214;
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
return cljs.core.apply.call(null,f,cljs.core.map.call(null,(function (p1__8209_SHARP_){
return cljs_bach.synthesis.run_with.call(null,p1__8209_SHARP_,context,at,duration);
}),synths));
});
});

cljs_bach.synthesis.update_graph.cljs$lang$maxFixedArity = (1);

cljs_bach.synthesis.update_graph.cljs$lang$applyTo = (function (seq8210){
var G__8211 = cljs.core.first.call(null,seq8210);
var seq8210__$1 = cljs.core.next.call(null,seq8210);
return cljs_bach.synthesis.update_graph.cljs$core$IFn$_invoke$arity$variadic(G__8211,seq8210__$1);
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
var len__8046__auto___8216 = arguments.length;
var i__8047__auto___8217 = (0);
while(true){
if((i__8047__auto___8217 < len__8046__auto___8216)){
args__8053__auto__.push((arguments[i__8047__auto___8217]));

var G__8218 = (i__8047__auto___8217 + (1));
i__8047__auto___8217 = G__8218;
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

cljs_bach.synthesis.connect__GT_.cljs$lang$applyTo = (function (seq8215){
return cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8215));
});

/**
 * Join the graphs in parallel, with upstream and downstream as the source and sink.
 */
cljs_bach.synthesis.join = (function cljs_bach$synthesis$join(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8226 = arguments.length;
var i__8047__auto___8227 = (0);
while(true){
if((i__8047__auto___8227 < len__8046__auto___8226)){
args__8053__auto__.push((arguments[i__8047__auto___8227]));

var G__8228 = (i__8047__auto___8227 + (1));
i__8047__auto___8227 = G__8228;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((2) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((2)),(0),null)):null);
return cljs_bach.synthesis.join.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8054__auto__);
});

cljs_bach.synthesis.join.cljs$core$IFn$_invoke$arity$variadic = (function (upstream,downstream,graphs){
var seq__8222_8229 = cljs.core.seq.call(null,graphs);
var chunk__8223_8230 = null;
var count__8224_8231 = (0);
var i__8225_8232 = (0);
while(true){
if((i__8225_8232 < count__8224_8231)){
var graph_8233 = cljs.core._nth.call(null,chunk__8223_8230,i__8225_8232);
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph_8233).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_8233))){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(upstream).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_8233));
} else {
}

var G__8234 = seq__8222_8229;
var G__8235 = chunk__8223_8230;
var G__8236 = count__8224_8231;
var G__8237 = (i__8225_8232 + (1));
seq__8222_8229 = G__8234;
chunk__8223_8230 = G__8235;
count__8224_8231 = G__8236;
i__8225_8232 = G__8237;
continue;
} else {
var temp__4657__auto___8238 = cljs.core.seq.call(null,seq__8222_8229);
if(temp__4657__auto___8238){
var seq__8222_8239__$1 = temp__4657__auto___8238;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8222_8239__$1)){
var c__7752__auto___8240 = cljs.core.chunk_first.call(null,seq__8222_8239__$1);
var G__8241 = cljs.core.chunk_rest.call(null,seq__8222_8239__$1);
var G__8242 = c__7752__auto___8240;
var G__8243 = cljs.core.count.call(null,c__7752__auto___8240);
var G__8244 = (0);
seq__8222_8229 = G__8241;
chunk__8223_8230 = G__8242;
count__8224_8231 = G__8243;
i__8225_8232 = G__8244;
continue;
} else {
var graph_8245 = cljs.core.first.call(null,seq__8222_8239__$1);
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph_8245).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_8245))){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(upstream).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_8245));
} else {
}

var G__8246 = cljs.core.next.call(null,seq__8222_8239__$1);
var G__8247 = null;
var G__8248 = (0);
var G__8249 = (0);
seq__8222_8229 = G__8246;
chunk__8223_8230 = G__8247;
count__8224_8231 = G__8248;
i__8225_8232 = G__8249;
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

cljs_bach.synthesis.join.cljs$lang$applyTo = (function (seq8219){
var G__8220 = cljs.core.first.call(null,seq8219);
var seq8219__$1 = cljs.core.next.call(null,seq8219);
var G__8221 = cljs.core.first.call(null,seq8219__$1);
var seq8219__$2 = cljs.core.next.call(null,seq8219__$1);
return cljs_bach.synthesis.join.cljs$core$IFn$_invoke$arity$variadic(G__8220,G__8221,seq8219__$2);
});

/**
 * Add together synths by connecting them all to the same upstream and downstream gains.
 */
cljs_bach.synthesis.add = (function cljs_bach$synthesis$add(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8251 = arguments.length;
var i__8047__auto___8252 = (0);
while(true){
if((i__8047__auto___8252 < len__8046__auto___8251)){
args__8053__auto__.push((arguments[i__8047__auto___8252]));

var G__8253 = (i__8047__auto___8252 + (1));
i__8047__auto___8252 = G__8253;
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

cljs_bach.synthesis.add.cljs$lang$applyTo = (function (seq8250){
return cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8250));
});

cljs_bach.synthesis.raw_buffer = (function cljs_bach$synthesis$raw_buffer(generate_bit_BANG_,context,duration){
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = context.createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var seq__8258_8262 = cljs.core.seq.call(null,cljs.core.range.call(null,sample_rate));
var chunk__8259_8263 = null;
var count__8260_8264 = (0);
var i__8261_8265 = (0);
while(true){
if((i__8261_8265 < count__8260_8264)){
var i_8266 = cljs.core._nth.call(null,chunk__8259_8263,i__8261_8265);
(data[i_8266] = generate_bit_BANG_.call(null,i_8266));

var G__8267 = seq__8258_8262;
var G__8268 = chunk__8259_8263;
var G__8269 = count__8260_8264;
var G__8270 = (i__8261_8265 + (1));
seq__8258_8262 = G__8267;
chunk__8259_8263 = G__8268;
count__8260_8264 = G__8269;
i__8261_8265 = G__8270;
continue;
} else {
var temp__4657__auto___8271 = cljs.core.seq.call(null,seq__8258_8262);
if(temp__4657__auto___8271){
var seq__8258_8272__$1 = temp__4657__auto___8271;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8258_8272__$1)){
var c__7752__auto___8273 = cljs.core.chunk_first.call(null,seq__8258_8272__$1);
var G__8274 = cljs.core.chunk_rest.call(null,seq__8258_8272__$1);
var G__8275 = c__7752__auto___8273;
var G__8276 = cljs.core.count.call(null,c__7752__auto___8273);
var G__8277 = (0);
seq__8258_8262 = G__8274;
chunk__8259_8263 = G__8275;
count__8260_8264 = G__8276;
i__8261_8265 = G__8277;
continue;
} else {
var i_8278 = cljs.core.first.call(null,seq__8258_8272__$1);
(data[i_8278] = generate_bit_BANG_.call(null,i_8278));

var G__8279 = cljs.core.next.call(null,seq__8258_8272__$1);
var G__8280 = null;
var G__8281 = (0);
var G__8282 = (0);
seq__8258_8262 = G__8279;
chunk__8259_8263 = G__8280;
count__8260_8264 = G__8281;
i__8261_8265 = G__8282;
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
return cljs_bach.synthesis.source.call(null,(function (){var G__8284 = context.createBufferSource();
G__8284.buffer = cljs_bach.synthesis.buffer.call(null,generate_bit_BANG_,context,(duration + 1.0));

G__8284.start(at);

return G__8284;
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
return cljs_bach.synthesis.source.call(null,(function (){var G__8286 = context.createOscillator();
G__8286.frequency.value = (0);

cljs_bach.synthesis.plug.call(null,G__8286.frequency,freq,context,at,duration);

G__8286.type = type;

G__8286.start(at);

G__8286.stop(((at + duration) + 1.0));

return G__8286;
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
var args8287 = [];
var len__8046__auto___8291 = arguments.length;
var i__8047__auto___8292 = (0);
while(true){
if((i__8047__auto___8292 < len__8046__auto___8291)){
args8287.push((arguments[i__8047__auto___8292]));

var G__8293 = (i__8047__auto___8292 + (1));
i__8047__auto___8292 = G__8293;
continue;
} else {
}
break;
}

var G__8289 = args8287.length;
switch (G__8289) {
case 2:
return cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8287.length)].join('')));

}
});

cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$2 = (function (type,freq){
return cljs_bach.synthesis.biquad_filter.call(null,type,freq,1.0);
});

cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3 = (function (type,freq,q){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__8290 = context.createBiquadFilter();
G__8290.frequency.value = (0);

cljs_bach.synthesis.plug.call(null,G__8290.frequency,freq,context,at,duration);

cljs_bach.synthesis.plug.call(null,G__8290.Q,q,context,at,duration);

G__8290.type = type;

return G__8290;
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
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__8296 = context.createStereoPanner();
cljs_bach.synthesis.plug.call(null,G__8296.pan,pan,context,at,duration);

return G__8296;
})());
});
});
/**
 * Delay the signal.
 */
cljs_bach.synthesis.delay_line = (function cljs_bach$synthesis$delay_line(seconds){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var maximum = (5);
var G__8298 = context.createDelay(maximum);
cljs_bach.synthesis.plug.call(null,G__8298.delayTime,seconds,context,at,duration);

return G__8298;
})());
});
});
/**
 * Linear convolution.
 */
cljs_bach.synthesis.convolver = (function cljs_bach$synthesis$convolver(generate_bit_BANG_){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__8300 = context.createConvolver();
G__8300.buffer = cljs_bach.synthesis.buffer.call(null,generate_bit_BANG_,context,(duration + 1.0));

return G__8300;
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