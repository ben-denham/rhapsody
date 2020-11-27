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
var G__1212 = arguments.length;
switch (G__1212) {
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
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__1214 = context.createGain();
cljs_bach.synthesis.plug.call(null,G__1214.gain,level,context,at,duration);

return G__1214;
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
var len__4736__auto___1222 = arguments.length;
var i__4737__auto___1223 = (0);
while(true){
if((i__4737__auto___1223 < len__4736__auto___1222)){
args__4742__auto__.push((arguments[i__4737__auto___1223]));

var G__1224 = (i__4737__auto___1223 + (1));
i__4737__auto___1223 = G__1224;
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

var x_1225 = at;
var coordinates_1226 = corners;
while(true){
var temp__4657__auto___1227 = coordinates_1226;
if(cljs.core.truth_(temp__4657__auto___1227)){
var vec__1216_1228 = temp__4657__auto___1227;
var seq__1217_1229 = cljs.core.seq.call(null,vec__1216_1228);
var first__1218_1230 = cljs.core.first.call(null,seq__1217_1229);
var seq__1217_1231__$1 = cljs.core.next.call(null,seq__1217_1229);
var vec__1219_1232 = first__1218_1230;
var dx_1233 = cljs.core.nth.call(null,vec__1219_1232,(0),null);
var y_1234 = cljs.core.nth.call(null,vec__1219_1232,(1),null);
var remaining_1235 = seq__1217_1231__$1;
audio_node.gain.linearRampToValueAtTime(y_1234,(x_1225 + dx_1233));

var G__1236 = (dx_1233 + x_1225);
var G__1237 = remaining_1235;
x_1225 = G__1236;
coordinates_1226 = G__1237;
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
(cljs_bach.synthesis.envelope.cljs$lang$applyTo = (function (seq1215){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1215));
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
var len__4736__auto___1241 = arguments.length;
var i__4737__auto___1242 = (0);
while(true){
if((i__4737__auto___1242 < len__4736__auto___1241)){
args__4742__auto__.push((arguments[i__4737__auto___1242]));

var G__1243 = (i__4737__auto___1242 + (1));
i__4737__auto___1242 = G__1243;
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
return cljs.core.apply.call(null,f,cljs.core.map.call(null,(function (p1__1238_SHARP_){
return cljs_bach.synthesis.run_with.call(null,p1__1238_SHARP_,context,at,duration);
}),synths));
});
}));

(cljs_bach.synthesis.update_graph.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_bach.synthesis.update_graph.cljs$lang$applyTo = (function (seq1239){
var G__1240 = cljs.core.first.call(null,seq1239);
var seq1239__$1 = cljs.core.next.call(null,seq1239);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1240,seq1239__$1);
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
var len__4736__auto___1245 = arguments.length;
var i__4737__auto___1246 = (0);
while(true){
if((i__4737__auto___1246 < len__4736__auto___1245)){
args__4742__auto__.push((arguments[i__4737__auto___1246]));

var G__1247 = (i__4737__auto___1246 + (1));
i__4737__auto___1246 = G__1247;
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
(cljs_bach.synthesis.connect__GT_.cljs$lang$applyTo = (function (seq1244){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1244));
}));

/**
 * Join the graphs in parallel, with upstream and downstream as the source and sink.
 */
cljs_bach.synthesis.join = (function cljs_bach$synthesis$join(var_args){
var args__4742__auto__ = [];
var len__4736__auto___1255 = arguments.length;
var i__4737__auto___1256 = (0);
while(true){
if((i__4737__auto___1256 < len__4736__auto___1255)){
args__4742__auto__.push((arguments[i__4737__auto___1256]));

var G__1257 = (i__4737__auto___1256 + (1));
i__4737__auto___1256 = G__1257;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs_bach.synthesis.join.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs_bach.synthesis.join.cljs$core$IFn$_invoke$arity$variadic = (function (upstream,downstream,graphs){
var seq__1251_1258 = cljs.core.seq.call(null,graphs);
var chunk__1252_1259 = null;
var count__1253_1260 = (0);
var i__1254_1261 = (0);
while(true){
if((i__1254_1261 < count__1253_1260)){
var graph_1262 = cljs.core._nth.call(null,chunk__1252_1259,i__1254_1261);
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph_1262).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_1262))){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(upstream).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_1262));
} else {
}


var G__1263 = seq__1251_1258;
var G__1264 = chunk__1252_1259;
var G__1265 = count__1253_1260;
var G__1266 = (i__1254_1261 + (1));
seq__1251_1258 = G__1263;
chunk__1252_1259 = G__1264;
count__1253_1260 = G__1265;
i__1254_1261 = G__1266;
continue;
} else {
var temp__4657__auto___1267 = cljs.core.seq.call(null,seq__1251_1258);
if(temp__4657__auto___1267){
var seq__1251_1268__$1 = temp__4657__auto___1267;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1251_1268__$1)){
var c__4556__auto___1269 = cljs.core.chunk_first.call(null,seq__1251_1268__$1);
var G__1270 = cljs.core.chunk_rest.call(null,seq__1251_1268__$1);
var G__1271 = c__4556__auto___1269;
var G__1272 = cljs.core.count.call(null,c__4556__auto___1269);
var G__1273 = (0);
seq__1251_1258 = G__1270;
chunk__1252_1259 = G__1271;
count__1253_1260 = G__1272;
i__1254_1261 = G__1273;
continue;
} else {
var graph_1274 = cljs.core.first.call(null,seq__1251_1268__$1);
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph_1274).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_1274))){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(upstream).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_1274));
} else {
}


var G__1275 = cljs.core.next.call(null,seq__1251_1268__$1);
var G__1276 = null;
var G__1277 = (0);
var G__1278 = (0);
seq__1251_1258 = G__1275;
chunk__1252_1259 = G__1276;
count__1253_1260 = G__1277;
i__1254_1261 = G__1278;
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
(cljs_bach.synthesis.join.cljs$lang$applyTo = (function (seq1248){
var G__1249 = cljs.core.first.call(null,seq1248);
var seq1248__$1 = cljs.core.next.call(null,seq1248);
var G__1250 = cljs.core.first.call(null,seq1248__$1);
var seq1248__$2 = cljs.core.next.call(null,seq1248__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1249,G__1250,seq1248__$2);
}));

/**
 * Add together synths by connecting them all to the same upstream and downstream gains.
 */
cljs_bach.synthesis.add = (function cljs_bach$synthesis$add(var_args){
var args__4742__auto__ = [];
var len__4736__auto___1280 = arguments.length;
var i__4737__auto___1281 = (0);
while(true){
if((i__4737__auto___1281 < len__4736__auto___1280)){
args__4742__auto__.push((arguments[i__4737__auto___1281]));

var G__1282 = (i__4737__auto___1281 + (1));
i__4737__auto___1281 = G__1282;
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
(cljs_bach.synthesis.add.cljs$lang$applyTo = (function (seq1279){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1279));
}));

cljs_bach.synthesis.raw_buffer = (function cljs_bach$synthesis$raw_buffer(generate_bit_BANG_,context,duration){
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = context.createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var seq__1283_1287 = cljs.core.seq.call(null,cljs.core.range.call(null,sample_rate));
var chunk__1284_1288 = null;
var count__1285_1289 = (0);
var i__1286_1290 = (0);
while(true){
if((i__1286_1290 < count__1285_1289)){
var i_1291 = cljs.core._nth.call(null,chunk__1284_1288,i__1286_1290);
(data[i_1291] = generate_bit_BANG_.call(null,i_1291));


var G__1292 = seq__1283_1287;
var G__1293 = chunk__1284_1288;
var G__1294 = count__1285_1289;
var G__1295 = (i__1286_1290 + (1));
seq__1283_1287 = G__1292;
chunk__1284_1288 = G__1293;
count__1285_1289 = G__1294;
i__1286_1290 = G__1295;
continue;
} else {
var temp__4657__auto___1296 = cljs.core.seq.call(null,seq__1283_1287);
if(temp__4657__auto___1296){
var seq__1283_1297__$1 = temp__4657__auto___1296;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1283_1297__$1)){
var c__4556__auto___1298 = cljs.core.chunk_first.call(null,seq__1283_1297__$1);
var G__1299 = cljs.core.chunk_rest.call(null,seq__1283_1297__$1);
var G__1300 = c__4556__auto___1298;
var G__1301 = cljs.core.count.call(null,c__4556__auto___1298);
var G__1302 = (0);
seq__1283_1287 = G__1299;
chunk__1284_1288 = G__1300;
count__1285_1289 = G__1301;
i__1286_1290 = G__1302;
continue;
} else {
var i_1303 = cljs.core.first.call(null,seq__1283_1297__$1);
(data[i_1303] = generate_bit_BANG_.call(null,i_1303));


var G__1304 = cljs.core.next.call(null,seq__1283_1297__$1);
var G__1305 = null;
var G__1306 = (0);
var G__1307 = (0);
seq__1283_1287 = G__1304;
chunk__1284_1288 = G__1305;
count__1285_1289 = G__1306;
i__1286_1290 = G__1307;
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
return cljs_bach.synthesis.source.call(null,(function (){var G__1308 = context.createBufferSource();
(G__1308.buffer = cljs_bach.synthesis.buffer.call(null,generate_bit_BANG_,context,(duration + 1.0)));

G__1308.start(at);

return G__1308;
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
return cljs_bach.synthesis.source.call(null,(function (){var G__1309 = context.createOscillator();
(G__1309.frequency.value = (0));

cljs_bach.synthesis.plug.call(null,G__1309.frequency,freq,context,at,duration);

(G__1309.type = type);

G__1309.start(at);

G__1309.stop(((at + duration) + 1.0));

return G__1309;
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
var G__1311 = arguments.length;
switch (G__1311) {
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
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__1312 = context.createBiquadFilter();
(G__1312.frequency.value = (0));

cljs_bach.synthesis.plug.call(null,G__1312.frequency,freq,context,at,duration);

cljs_bach.synthesis.plug.call(null,G__1312.Q,q,context,at,duration);

(G__1312.type = type);

return G__1312;
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
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__1314 = context.createStereoPanner();
cljs_bach.synthesis.plug.call(null,G__1314.pan,pan,context,at,duration);

return G__1314;
})());
});
});
/**
 * Delay the signal.
 */
cljs_bach.synthesis.delay_line = (function cljs_bach$synthesis$delay_line(seconds){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var maximum = (5);
var G__1315 = context.createDelay(maximum);
cljs_bach.synthesis.plug.call(null,G__1315.delayTime,seconds,context,at,duration);

return G__1315;
})());
});
});
/**
 * Linear convolution.
 */
cljs_bach.synthesis.convolver = (function cljs_bach$synthesis$convolver(generate_bit_BANG_){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__1316 = context.createConvolver();
(G__1316.buffer = cljs_bach.synthesis.buffer.call(null,generate_bit_BANG_,context,(duration + 1.0)));

return G__1316;
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
