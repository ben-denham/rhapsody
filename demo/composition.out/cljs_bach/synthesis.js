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
var args8113 = [];
var len__8046__auto___8116 = arguments.length;
var i__8047__auto___8117 = (0);
while(true){
if((i__8047__auto___8117 < len__8046__auto___8116)){
args8113.push((arguments[i__8047__auto___8117]));

var G__8118 = (i__8047__auto___8117 + (1));
i__8047__auto___8117 = G__8118;
continue;
} else {
}
break;
}

var G__8115 = args8113.length;
switch (G__8115) {
case 2:
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8113.length)].join('')));

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
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__8121 = context.createGain();
cljs_bach.synthesis.plug.call(null,G__8121.gain,level,context,at,duration);

return G__8121;
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
var len__8046__auto___8129 = arguments.length;
var i__8047__auto___8130 = (0);
while(true){
if((i__8047__auto___8130 < len__8046__auto___8129)){
args__8053__auto__.push((arguments[i__8047__auto___8130]));

var G__8131 = (i__8047__auto___8130 + (1));
i__8047__auto___8130 = G__8131;
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

var x_8132 = at;
var coordinates_8133 = corners;
while(true){
var temp__4657__auto___8134 = coordinates_8133;
if(cljs.core.truth_(temp__4657__auto___8134)){
var vec__8123_8135 = temp__4657__auto___8134;
var seq__8124_8136 = cljs.core.seq.call(null,vec__8123_8135);
var first__8125_8137 = cljs.core.first.call(null,seq__8124_8136);
var seq__8124_8138__$1 = cljs.core.next.call(null,seq__8124_8136);
var vec__8126_8139 = first__8125_8137;
var dx_8140 = cljs.core.nth.call(null,vec__8126_8139,(0),null);
var y_8141 = cljs.core.nth.call(null,vec__8126_8139,(1),null);
var remaining_8142 = seq__8124_8138__$1;
audio_node.gain.linearRampToValueAtTime(y_8141,(x_8132 + dx_8140));

var G__8143 = (dx_8140 + x_8132);
var G__8144 = remaining_8142;
x_8132 = G__8143;
coordinates_8133 = G__8144;
continue;
} else {
}
break;
}

return cljs_bach.synthesis.subgraph.call(null,audio_node);
});
});

cljs_bach.synthesis.envelope.cljs$lang$maxFixedArity = (0);

cljs_bach.synthesis.envelope.cljs$lang$applyTo = (function (seq8122){
return cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8122));
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
var len__8046__auto___8148 = arguments.length;
var i__8047__auto___8149 = (0);
while(true){
if((i__8047__auto___8149 < len__8046__auto___8148)){
args__8053__auto__.push((arguments[i__8047__auto___8149]));

var G__8150 = (i__8047__auto___8149 + (1));
i__8047__auto___8149 = G__8150;
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
return cljs.core.apply.call(null,f,cljs.core.map.call(null,(function (p1__8145_SHARP_){
return cljs_bach.synthesis.run_with.call(null,p1__8145_SHARP_,context,at,duration);
}),synths));
});
});

cljs_bach.synthesis.update_graph.cljs$lang$maxFixedArity = (1);

cljs_bach.synthesis.update_graph.cljs$lang$applyTo = (function (seq8146){
var G__8147 = cljs.core.first.call(null,seq8146);
var seq8146__$1 = cljs.core.next.call(null,seq8146);
return cljs_bach.synthesis.update_graph.cljs$core$IFn$_invoke$arity$variadic(G__8147,seq8146__$1);
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
var len__8046__auto___8152 = arguments.length;
var i__8047__auto___8153 = (0);
while(true){
if((i__8047__auto___8153 < len__8046__auto___8152)){
args__8053__auto__.push((arguments[i__8047__auto___8153]));

var G__8154 = (i__8047__auto___8153 + (1));
i__8047__auto___8153 = G__8154;
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

cljs_bach.synthesis.connect__GT_.cljs$lang$applyTo = (function (seq8151){
return cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8151));
});

/**
 * Join the graphs in parallel, with upstream and downstream as the source and sink.
 */
cljs_bach.synthesis.join = (function cljs_bach$synthesis$join(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8162 = arguments.length;
var i__8047__auto___8163 = (0);
while(true){
if((i__8047__auto___8163 < len__8046__auto___8162)){
args__8053__auto__.push((arguments[i__8047__auto___8163]));

var G__8164 = (i__8047__auto___8163 + (1));
i__8047__auto___8163 = G__8164;
continue;
} else {
}
break;
}

var argseq__8054__auto__ = ((((2) < args__8053__auto__.length))?(new cljs.core.IndexedSeq(args__8053__auto__.slice((2)),(0),null)):null);
return cljs_bach.synthesis.join.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8054__auto__);
});

cljs_bach.synthesis.join.cljs$core$IFn$_invoke$arity$variadic = (function (upstream,downstream,graphs){
var seq__8158_8165 = cljs.core.seq.call(null,graphs);
var chunk__8159_8166 = null;
var count__8160_8167 = (0);
var i__8161_8168 = (0);
while(true){
if((i__8161_8168 < count__8160_8167)){
var graph_8169 = cljs.core._nth.call(null,chunk__8159_8166,i__8161_8168);
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph_8169).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_8169))){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(upstream).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_8169));
} else {
}

var G__8170 = seq__8158_8165;
var G__8171 = chunk__8159_8166;
var G__8172 = count__8160_8167;
var G__8173 = (i__8161_8168 + (1));
seq__8158_8165 = G__8170;
chunk__8159_8166 = G__8171;
count__8160_8167 = G__8172;
i__8161_8168 = G__8173;
continue;
} else {
var temp__4657__auto___8174 = cljs.core.seq.call(null,seq__8158_8165);
if(temp__4657__auto___8174){
var seq__8158_8175__$1 = temp__4657__auto___8174;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8158_8175__$1)){
var c__7752__auto___8176 = cljs.core.chunk_first.call(null,seq__8158_8175__$1);
var G__8177 = cljs.core.chunk_rest.call(null,seq__8158_8175__$1);
var G__8178 = c__7752__auto___8176;
var G__8179 = cljs.core.count.call(null,c__7752__auto___8176);
var G__8180 = (0);
seq__8158_8165 = G__8177;
chunk__8159_8166 = G__8178;
count__8160_8167 = G__8179;
i__8161_8168 = G__8180;
continue;
} else {
var graph_8181 = cljs.core.first.call(null,seq__8158_8175__$1);
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph_8181).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_8181))){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(upstream).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_8181));
} else {
}

var G__8182 = cljs.core.next.call(null,seq__8158_8175__$1);
var G__8183 = null;
var G__8184 = (0);
var G__8185 = (0);
seq__8158_8165 = G__8182;
chunk__8159_8166 = G__8183;
count__8160_8167 = G__8184;
i__8161_8168 = G__8185;
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

cljs_bach.synthesis.join.cljs$lang$applyTo = (function (seq8155){
var G__8156 = cljs.core.first.call(null,seq8155);
var seq8155__$1 = cljs.core.next.call(null,seq8155);
var G__8157 = cljs.core.first.call(null,seq8155__$1);
var seq8155__$2 = cljs.core.next.call(null,seq8155__$1);
return cljs_bach.synthesis.join.cljs$core$IFn$_invoke$arity$variadic(G__8156,G__8157,seq8155__$2);
});

/**
 * Add together synths by connecting them all to the same upstream and downstream gains.
 */
cljs_bach.synthesis.add = (function cljs_bach$synthesis$add(var_args){
var args__8053__auto__ = [];
var len__8046__auto___8187 = arguments.length;
var i__8047__auto___8188 = (0);
while(true){
if((i__8047__auto___8188 < len__8046__auto___8187)){
args__8053__auto__.push((arguments[i__8047__auto___8188]));

var G__8189 = (i__8047__auto___8188 + (1));
i__8047__auto___8188 = G__8189;
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

cljs_bach.synthesis.add.cljs$lang$applyTo = (function (seq8186){
return cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8186));
});

cljs_bach.synthesis.raw_buffer = (function cljs_bach$synthesis$raw_buffer(generate_bit_BANG_,context,duration){
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = context.createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var seq__8194_8198 = cljs.core.seq.call(null,cljs.core.range.call(null,sample_rate));
var chunk__8195_8199 = null;
var count__8196_8200 = (0);
var i__8197_8201 = (0);
while(true){
if((i__8197_8201 < count__8196_8200)){
var i_8202 = cljs.core._nth.call(null,chunk__8195_8199,i__8197_8201);
(data[i_8202] = generate_bit_BANG_.call(null,i_8202));

var G__8203 = seq__8194_8198;
var G__8204 = chunk__8195_8199;
var G__8205 = count__8196_8200;
var G__8206 = (i__8197_8201 + (1));
seq__8194_8198 = G__8203;
chunk__8195_8199 = G__8204;
count__8196_8200 = G__8205;
i__8197_8201 = G__8206;
continue;
} else {
var temp__4657__auto___8207 = cljs.core.seq.call(null,seq__8194_8198);
if(temp__4657__auto___8207){
var seq__8194_8208__$1 = temp__4657__auto___8207;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8194_8208__$1)){
var c__7752__auto___8209 = cljs.core.chunk_first.call(null,seq__8194_8208__$1);
var G__8210 = cljs.core.chunk_rest.call(null,seq__8194_8208__$1);
var G__8211 = c__7752__auto___8209;
var G__8212 = cljs.core.count.call(null,c__7752__auto___8209);
var G__8213 = (0);
seq__8194_8198 = G__8210;
chunk__8195_8199 = G__8211;
count__8196_8200 = G__8212;
i__8197_8201 = G__8213;
continue;
} else {
var i_8214 = cljs.core.first.call(null,seq__8194_8208__$1);
(data[i_8214] = generate_bit_BANG_.call(null,i_8214));

var G__8215 = cljs.core.next.call(null,seq__8194_8208__$1);
var G__8216 = null;
var G__8217 = (0);
var G__8218 = (0);
seq__8194_8198 = G__8215;
chunk__8195_8199 = G__8216;
count__8196_8200 = G__8217;
i__8197_8201 = G__8218;
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
return cljs_bach.synthesis.source.call(null,(function (){var G__8220 = context.createBufferSource();
G__8220.buffer = cljs_bach.synthesis.buffer.call(null,generate_bit_BANG_,context,(duration + 1.0));

G__8220.start(at);

return G__8220;
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
return cljs_bach.synthesis.source.call(null,(function (){var G__8222 = context.createOscillator();
G__8222.frequency.value = (0);

cljs_bach.synthesis.plug.call(null,G__8222.frequency,freq,context,at,duration);

G__8222.type = type;

G__8222.start(at);

G__8222.stop(((at + duration) + 1.0));

return G__8222;
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
var args8223 = [];
var len__8046__auto___8227 = arguments.length;
var i__8047__auto___8228 = (0);
while(true){
if((i__8047__auto___8228 < len__8046__auto___8227)){
args8223.push((arguments[i__8047__auto___8228]));

var G__8229 = (i__8047__auto___8228 + (1));
i__8047__auto___8228 = G__8229;
continue;
} else {
}
break;
}

var G__8225 = args8223.length;
switch (G__8225) {
case 2:
return cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8223.length)].join('')));

}
});

cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$2 = (function (type,freq){
return cljs_bach.synthesis.biquad_filter.call(null,type,freq,1.0);
});

cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3 = (function (type,freq,q){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__8226 = context.createBiquadFilter();
G__8226.frequency.value = (0);

cljs_bach.synthesis.plug.call(null,G__8226.frequency,freq,context,at,duration);

cljs_bach.synthesis.plug.call(null,G__8226.Q,q,context,at,duration);

G__8226.type = type;

return G__8226;
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
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__8232 = context.createStereoPanner();
cljs_bach.synthesis.plug.call(null,G__8232.pan,pan,context,at,duration);

return G__8232;
})());
});
});
/**
 * Delay the signal.
 */
cljs_bach.synthesis.delay_line = (function cljs_bach$synthesis$delay_line(seconds){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var maximum = (5);
var G__8234 = context.createDelay(maximum);
cljs_bach.synthesis.plug.call(null,G__8234.delayTime,seconds,context,at,duration);

return G__8234;
})());
});
});
/**
 * Linear convolution.
 */
cljs_bach.synthesis.convolver = (function cljs_bach$synthesis$convolver(generate_bit_BANG_){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__8236 = context.createConvolver();
G__8236.buffer = cljs_bach.synthesis.buffer.call(null,generate_bit_BANG_,context,(duration + 1.0));

return G__8236;
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