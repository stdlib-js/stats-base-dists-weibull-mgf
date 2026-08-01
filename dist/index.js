"use strict";var f=function(u,r){return function(){try{return r||u((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var q=f(function(F,o){
var v=require('@stdlib/math-base-assert-is-nan/dist'),y=require('@stdlib/math-base-special-gamma/dist'),p=require('@stdlib/constants-float64-eps/dist');function x(u,r,n){var t,e,a,i;if(v(u)||v(r)||v(n)||r<=0||n<=0)return NaN;e=1,a=1,i=0;do i+=1,a*=u*n/i,a===0?t=0:t=a*y(1+i/r),e+=t;while(t/e>p);return e}o.exports=x
});var N=f(function(O,m){
var h=require('@stdlib/utils-constant-function/dist'),c=require('@stdlib/math-base-assert-is-nan/dist'),w=require('@stdlib/math-base-special-gamma/dist'),E=require('@stdlib/constants-float64-eps/dist');function P(u,r){if(c(u)||c(r)||u<=0||r<=0)return h(NaN);return n;function n(t){var e,a,i,s;if(c(t))return NaN;a=1,i=1,s=0;do s+=1,i*=t*r/s,i===0?e=0:e=i*w(1+s/u),a+=e;while(e/a>E);return a}}m.exports=P
});var S=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=q(),d=N();S(g,"factory",d);module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
