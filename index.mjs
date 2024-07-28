// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-eps@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.2-esm/index.mjs";function i(t,r,i){var d,m,o,a;if(s(t)||s(r)||s(i)||r<=0||i<=0)return NaN;m=1,o=1,a=0;do{m+=d=0===(o*=t*i/(a+=1))?0:o*e(1+a/r)}while(d/m>n);return m}function d(t,i){return s(t)||s(i)||t<=0||i<=0?r(NaN):function(r){var d,m,o,a;if(s(r))return NaN;m=1,o=1,a=0;do{m+=d=0===(o*=r*i/(a+=1))?0:o*e(1+a/t)}while(d/m>n);return m}}t(i,"factory",d);export{i as default,d as factory};
//# sourceMappingURL=index.mjs.map
