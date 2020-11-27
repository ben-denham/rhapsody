// Compiled by ClojureScript 1.10.773 {}
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
var G__1218 = arguments.length;
switch (G__1218) {
case 2:
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2 = (function (input,output){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),input,new cljs.core.Keyword(null,"output","output",-1105869043),output], null);
}));

(cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1 = (function (singleton){
return cljs_bach.synthesis.subgraph.call(null,singleton,singleton);
}));

(cljs_bach.synthesis.subgraph.cljs$lang$maxFixedArity = 2);

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
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__1220 = context.createGain();
cljs_bach.synthesis.plug.call(null,G__1220.gain,level,context,at,duration);

return G__1220;
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
var args__4742__auto__ = [];
var len__4736__auto___1228 = arguments.length;
var i__4737__auto___1229 = (0);
while(true){
if((i__4737__auto___1229 < len__4736__auto___1228)){
args__4742__auto__.push((arguments[i__4737__auto___1229]));

var G__1230 = (i__4737__auto___1229 + (1));
i__4737__auto___1229 = G__1230;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic = (function (corners){
return (function (context,at,duration){
var audio_node = context.createGain();
audio_node.gain.setValueAtTime((0),at);

var x_1231 = at;
var coordinates_1232 = corners;
while(true){
var temp__4657__auto___1233 = coordinates_1232;
if(cljs.core.truth_(temp__4657__auto___1233)){
var vec__1222_1234 = temp__4657__auto___1233;
var seq__1223_1235 = cljs.core.seq.call(null,vec__1222_1234);
var first__1224_1236 = cljs.core.first.call(null,seq__1223_1235);
var seq__1223_1237__$1 = cljs.core.next.call(null,seq__1223_1235);
var vec__1225_1238 = first__1224_1236;
var dx_1239 = cljs.core.nth.call(null,vec__1225_1238,(0),null);
var y_1240 = cljs.core.nth.call(null,vec__1225_1238,(1),null);
var remaining_1241 = seq__1223_1237__$1;
audio_node.gain.linearRampToValueAtTime(y_1240,(x_1231 + dx_1239));

var G__1242 = (dx_1239 + x_1231);
var G__1243 = remaining_1241;
x_1231 = G__1242;
coordinates_1232 = G__1243;
continue;
} else {
}
break;
}

return cljs_bach.synthesis.subgraph.call(null,audio_node);
});
}));

(cljs_bach.synthesis.envelope.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs_bach.synthesis.envelope.cljs$lang$applyTo = (function (seq1221){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1221));
}));

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
var hold = (function (){var x__4214__auto__ = 0.0;
var y__4215__auto__ = remainder;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
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
var args__4742__auto__ = [];
var len__4736__auto___1247 = arguments.length;
var i__4737__auto___1248 = (0);
while(true){
if((i__4737__auto___1248 < len__4736__auto___1247)){
args__4742__auto__.push((arguments[i__4737__auto___1248]));

var G__1249 = (i__4737__auto___1248 + (1));
i__4737__auto___1248 = G__1249;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs_bach.synthesis.update_graph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs_bach.synthesis.update_graph.cljs$core$IFn$_invoke$arity$variadic = (function (f,synths){
return (function (context,at,duration){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,(function (p1__1244_SHARP_){
return cljs_bach.synthesis.run_with.call(null,p1__1244_SHARP_,context,at,duration);
}),synths));
});
}));

(cljs_bach.synthesis.update_graph.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_bach.synthesis.update_graph.cljs$lang$applyTo = (function (seq1245){
var G__1246 = cljs.core.first.call(null,seq1245);
var seq1245__$1 = cljs.core.next.call(null,seq1245);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1246,seq1245__$1);
}));

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
var args__4742__auto__ = [];
var len__4736__auto___1251 = arguments.length;
var i__4737__auto___1252 = (0);
while(true){
if((i__4737__auto___1252 < len__4736__auto___1251)){
args__4742__auto__.push((arguments[i__4737__auto___1252]));

var G__1253 = (i__4737__auto___1252 + (1));
i__4737__auto___1252 = G__1253;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
return cljs.core.reduce.call(null,cljs_bach.synthesis.connect,nodes);
}));

(cljs_bach.synthesis.connect__GT_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs_bach.synthesis.connect__GT_.cljs$lang$applyTo = (function (seq1250){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1250));
}));

/**
 * Join the graphs in parallel, with upstream and downstream as the source and sink.
 */
cljs_bach.synthesis.join = (function cljs_bach$synthesis$join(var_args){
var args__4742__auto__ = [];
var len__4736__auto___1261 = arguments.length;
var i__4737__auto___1262 = (0);
while(true){
if((i__4737__auto___1262 < len__4736__auto___1261)){
args__4742__auto__.push((arguments[i__4737__auto___1262]));

var G__1263 = (i__4737__auto___1262 + (1));
i__4737__auto___1262 = G__1263;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs_bach.synthesis.join.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs_bach.synthesis.join.cljs$core$IFn$_invoke$arity$variadic = (function (upstream,downstream,graphs){
var seq__1257_1264 = cljs.core.seq.call(null,graphs);
var chunk__1258_1265 = null;
var count__1259_1266 = (0);
var i__1260_1267 = (0);
while(true){
if((i__1260_1267 < count__1259_1266)){
var graph_1268 = cljs.core._nth.call(null,chunk__1258_1265,i__1260_1267);
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph_1268).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_1268))){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(upstream).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_1268));
} else {
}


var G__1269 = seq__1257_1264;
var G__1270 = chunk__1258_1265;
var G__1271 = count__1259_1266;
var G__1272 = (i__1260_1267 + (1));
seq__1257_1264 = G__1269;
chunk__1258_1265 = G__1270;
count__1259_1266 = G__1271;
i__1260_1267 = G__1272;
continue;
} else {
var temp__4657__auto___1273 = cljs.core.seq.call(null,seq__1257_1264);
if(temp__4657__auto___1273){
var seq__1257_1274__$1 = temp__4657__auto___1273;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1257_1274__$1)){
var c__4556__auto___1275 = cljs.core.chunk_first.call(null,seq__1257_1274__$1);
var G__1276 = cljs.core.chunk_rest.call(null,seq__1257_1274__$1);
var G__1277 = c__4556__auto___1275;
var G__1278 = cljs.core.count.call(null,c__4556__auto___1275);
var G__1279 = (0);
seq__1257_1264 = G__1276;
chunk__1258_1265 = G__1277;
count__1259_1266 = G__1278;
i__1260_1267 = G__1279;
continue;
} else {
var graph_1280 = cljs.core.first.call(null,seq__1257_1274__$1);
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph_1280).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_1280))){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(upstream).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_1280));
} else {
}


var G__1281 = cljs.core.next.call(null,seq__1257_1274__$1);
var G__1282 = null;
var G__1283 = (0);
var G__1284 = (0);
seq__1257_1264 = G__1281;
chunk__1258_1265 = G__1282;
count__1259_1266 = G__1283;
i__1260_1267 = G__1284;
continue;
}
} else {
}
}
break;
}

return cljs_bach.synthesis.subgraph.call(null,new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(upstream),new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(downstream));
}));

(cljs_bach.synthesis.join.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs_bach.synthesis.join.cljs$lang$applyTo = (function (seq1254){
var G__1255 = cljs.core.first.call(null,seq1254);
var seq1254__$1 = cljs.core.next.call(null,seq1254);
var G__1256 = cljs.core.first.call(null,seq1254__$1);
var seq1254__$2 = cljs.core.next.call(null,seq1254__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1255,G__1256,seq1254__$2);
}));

/**
 * Add together synths by connecting them all to the same upstream and downstream gains.
 */
cljs_bach.synthesis.add = (function cljs_bach$synthesis$add(var_args){
var args__4742__auto__ = [];
var len__4736__auto___1286 = arguments.length;
var i__4737__auto___1287 = (0);
while(true){
if((i__4737__auto___1287 < len__4736__auto___1286)){
args__4742__auto__.push((arguments[i__4737__auto___1287]));

var G__1288 = (i__4737__auto___1287 + (1));
i__4737__auto___1287 = G__1288;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic = (function (synths){
return cljs.core.apply.call(null,cljs_bach.synthesis.update_graph,cljs_bach.synthesis.join,cljs_bach.synthesis.pass_through,cljs_bach.synthesis.pass_through,synths);
}));

(cljs_bach.synthesis.add.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs_bach.synthesis.add.cljs$lang$applyTo = (function (seq1285){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1285));
}));

cljs_bach.synthesis.raw_buffer = (function cljs_bach$synthesis$raw_buffer(generate_bit_BANG_,context,duration){
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = context.createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var seq__1289_1293 = cljs.core.seq.call(null,cljs.core.range.call(null,sample_rate));
var chunk__1290_1294 = null;
var count__1291_1295 = (0);
var i__1292_1296 = (0);
while(true){
if((i__1292_1296 < count__1291_1295)){
var i_1297 = cljs.core._nth.call(null,chunk__1290_1294,i__1292_1296);
(data[i_1297] = generate_bit_BANG_.call(null,i_1297));


var G__1298 = seq__1289_1293;
var G__1299 = chunk__1290_1294;
var G__1300 = count__1291_1295;
var G__1301 = (i__1292_1296 + (1));
seq__1289_1293 = G__1298;
chunk__1290_1294 = G__1299;
count__1291_1295 = G__1300;
i__1292_1296 = G__1301;
continue;
} else {
var temp__4657__auto___1302 = cljs.core.seq.call(null,seq__1289_1293);
if(temp__4657__auto___1302){
var seq__1289_1303__$1 = temp__4657__auto___1302;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1289_1303__$1)){
var c__4556__auto___1304 = cljs.core.chunk_first.call(null,seq__1289_1303__$1);
var G__1305 = cljs.core.chunk_rest.call(null,seq__1289_1303__$1);
var G__1306 = c__4556__auto___1304;
var G__1307 = cljs.core.count.call(null,c__4556__auto___1304);
var G__1308 = (0);
seq__1289_1293 = G__1305;
chunk__1290_1294 = G__1306;
count__1291_1295 = G__1307;
i__1292_1296 = G__1308;
continue;
} else {
var i_1309 = cljs.core.first.call(null,seq__1289_1303__$1);
(data[i_1309] = generate_bit_BANG_.call(null,i_1309));


var G__1310 = cljs.core.next.call(null,seq__1289_1303__$1);
var G__1311 = null;
var G__1312 = (0);
var G__1313 = (0);
seq__1289_1293 = G__1310;
chunk__1290_1294 = G__1311;
count__1291_1295 = G__1312;
i__1292_1296 = G__1313;
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
return cljs_bach.synthesis.source.call(null,(function (){var G__1314 = context.createBufferSource();
(G__1314.buffer = cljs_bach.synthesis.buffer.call(null,generate_bit_BANG_,context,(duration + 1.0)));

G__1314.start(at);

return G__1314;
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
return cljs_bach.synthesis.source.call(null,(function (){var G__1315 = context.createOscillator();
(G__1315.frequency.value = (0));

cljs_bach.synthesis.plug.call(null,G__1315.frequency,freq,context,at,duration);

(G__1315.type = type);

G__1315.start(at);

G__1315.stop(((at + duration) + 1.0));

return G__1315;
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
var G__1317 = arguments.length;
switch (G__1317) {
case 2:
return cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$2 = (function (type,freq){
return cljs_bach.synthesis.biquad_filter.call(null,type,freq,1.0);
}));

(cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3 = (function (type,freq,q){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__1318 = context.createBiquadFilter();
(G__1318.frequency.value = (0));

cljs_bach.synthesis.plug.call(null,G__1318.frequency,freq,context,at,duration);

cljs_bach.synthesis.plug.call(null,G__1318.Q,q,context,at,duration);

(G__1318.type = type);

return G__1318;
})());
});
}));

(cljs_bach.synthesis.biquad_filter.cljs$lang$maxFixedArity = 3);

cljs_bach.synthesis.low_pass = cljs.core.partial.call(null,cljs_bach.synthesis.biquad_filter,"lowpass");
cljs_bach.synthesis.high_pass = cljs.core.partial.call(null,cljs_bach.synthesis.biquad_filter,"highpass");
/**
 * Pan the signal left (-1) or right (1).
 */
cljs_bach.synthesis.stereo_panner = (function cljs_bach$synthesis$stereo_panner(pan){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__1320 = context.createStereoPanner();
cljs_bach.synthesis.plug.call(null,G__1320.pan,pan,context,at,duration);

return G__1320;
})());
});
});
/**
 * Delay the signal.
 */
cljs_bach.synthesis.delay_line = (function cljs_bach$synthesis$delay_line(seconds){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var maximum = (5);
var G__1321 = context.createDelay(maximum);
cljs_bach.synthesis.plug.call(null,G__1321.delayTime,seconds,context,at,duration);

return G__1321;
})());
});
});
/**
 * Linear convolution.
 */
cljs_bach.synthesis.convolver = (function cljs_bach$synthesis$convolver(generate_bit_BANG_){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__1322 = context.createConvolver();
(G__1322.buffer = cljs_bach.synthesis.buffer.call(null,generate_bit_BANG_,context,(duration + 1.0)));

return G__1322;
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
var logarithmic_decay = (function (i){
return (((Math.random(i) * 2.0) - 1.0) * Math.pow(((1) - (i / length)),decay));
});
return cljs_bach.synthesis.convolver.call(null,logarithmic_decay);
})();
/**
 * Mix the original signal with one with the effect applied.
 */
cljs_bach.synthesis.enhance = (function cljs_bach$synthesis$enhance(effect,level){
return cljs_bach.synthesis.add.call(null,cljs_bach.synthesis.pass_through,cljs_bach.synthesis.connect__GT_.call(null,effect,cljs_bach.synthesis.gain.call(null,level)));
});

//# sourceMappingURL=synthesis.js.map
