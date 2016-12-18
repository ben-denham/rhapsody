// Compiled by ClojureScript 1.9.293 {}
goog.provide('leipzig.chord');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('leipzig.scale');
leipzig.chord.update_all = (function leipzig$chord$update_all(m,p__24097,f){
var vec__24101 = p__24097;
var seq__24102 = cljs.core.seq.call(null,vec__24101);
var first__24103 = cljs.core.first.call(null,seq__24102);
var seq__24102__$1 = cljs.core.next.call(null,seq__24102);
var k = first__24103;
var ks = seq__24102__$1;
if(cljs.core.truth_(k)){
return leipzig.chord.update_all.call(null,cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),f),ks,f);
} else {
return m;
}
});
leipzig.chord.mapval = (function leipzig$chord$mapval(m,f){
return leipzig.chord.update_all.call(null,m,cljs.core.keys.call(null,m),f);
});
/**
 * Translates a chord so that its root is at tonic.
 *   e.g. (-> triad (root 4))
 */
leipzig.chord.root = (function leipzig$chord$root(chord,tonic){
return leipzig.chord.mapval.call(null,chord,leipzig.scale.from.call(null,tonic));
});
/**
 * A three-tone chord.
 */
leipzig.chord.triad = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"i","i",-1386841315),(0),new cljs.core.Keyword(null,"iii","iii",341851243),(2),new cljs.core.Keyword(null,"v","v",21465059),(4)], null);
/**
 * A four-tone chord.
 */
leipzig.chord.seventh = cljs.core.assoc.call(null,leipzig.chord.triad,new cljs.core.Keyword(null,"vii","vii",324924996),(6));
/**
 * A five-tone chord.
 */
leipzig.chord.ninth = cljs.core.assoc.call(null,leipzig.chord.seventh,new cljs.core.Keyword(null,"ix","ix",-268822678),(8));
leipzig.chord.inversion = (function leipzig$chord$inversion(chord,n){

var stable = cljs.core.set.call(null,cljs.core.take.call(null,n,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"iii","iii",341851243),new cljs.core.Keyword(null,"v","v",21465059)], null)));
var lowered = clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,chord)),stable);
return leipzig.chord.update_all.call(null,chord,cljs.core.seq.call(null,lowered),leipzig.scale.lower);
});
/**
 * Adds n to key k in the chord.
 */
leipzig.chord.augment = (function leipzig$chord$augment(chord,k,n){
return cljs.core.update_in.call(null,chord,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),leipzig.scale.from.call(null,n));
});

//# sourceMappingURL=chord.js.map?rel=1482038775625