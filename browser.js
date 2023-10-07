// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(r){return"string"==typeof r}var c=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,v=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,y,"e+0$1"),t=p.call(t,g,"e-0$1"),r.alternate&&(t=p.call(t,v,"$1."),t=p.call(t,d,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function A(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function _(r,e,n){var t=e-r.length;return t<0?r:r=n?r+A(t):A(t)+r}var N=String.fromCharCode,E=isNaN,U=Array.isArray;function I(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,n,t,a,o,c,s,l,p;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,l=0;l<r.length;l++)if(f(t=r[l]))c+=t;else{if(e=void 0!==t.precision,!(t=I(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,E(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!E(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(o)?String(t.arg):N(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=_(t.arg,t.width,t.padRight)),c+=t.arg||"",s+=1}return c}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,n,t,i;for(n=[],i=0,t=k.exec(r);t;)(e=r.slice(i,k.lastIndex-t[0].length)).length&&n.push(e),n.push(x(t)),i=k.lastIndex,t=k.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function j(r){return"string"==typeof r}function T(r){var e,n,t;if(!j(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return S.apply(null,n)}var O=Object.prototype,V=O.toString,$=O.__defineGetter__,G=O.__defineSetter__,H=O.__lookupGetter__,W=O.__lookupSetter__,C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(H.call(r,e)||W.call(r,e)?(t=r.__proto__,r.__proto__=O,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,n.get),o&&G&&G.call(r,e,n.set),r};function L(r,e,n){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function P(r){return r!=r}var M=Math.floor;function R(r){return M(r)===r}var Z=Number.NEGATIVE_INFINITY;function X(r){return Math.abs(r)}var Y,q=2147483647,z=2146435072,B="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),D=Object.prototype.toString,J=Object.prototype.hasOwnProperty,K="function"==typeof Symbol?Symbol:void 0,Q="function"==typeof K?K.toStringTag:"",rr=B&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return D.call(r);n=r[Q],a=Q,e=null!=(i=r)&&J.call(i,a);try{r[Q]=void 0}catch(e){return D.call(r)}return t=D.call(r),e?r[Q]=n:delete r[Q],t}:function(r){return D.call(r)},er="function"==typeof Uint32Array,nr="function"==typeof Uint32Array?Uint32Array:null,tr="function"==typeof Uint32Array?Uint32Array:void 0;Y=function(){var r,e,n;if("function"!=typeof nr)return!1;try{e=new nr(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(er&&n instanceof Uint32Array||"[object Uint32Array]"===rr(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?tr:function(){throw new Error("not implemented")};var ir,ar=Y,or="function"==typeof Float64Array,ur="function"==typeof Float64Array?Float64Array:null,fr="function"==typeof Float64Array?Float64Array:void 0;ir=function(){var r,e,n;if("function"!=typeof ur)return!1;try{e=new ur([1,3.14,-3.14,NaN]),n=e,r=(or&&n instanceof Float64Array||"[object Float64Array]"===rr(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var cr,sr=ir,lr="function"==typeof Uint8Array,pr="function"==typeof Uint8Array?Uint8Array:null,yr="function"==typeof Uint8Array?Uint8Array:void 0;cr=function(){var r,e,n;if("function"!=typeof pr)return!1;try{e=new pr(e=[1,3.14,-3.14,256,257]),n=e,r=(lr&&n instanceof Uint8Array||"[object Uint8Array]"===rr(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var gr,vr=cr,dr="function"==typeof Uint16Array,hr="function"==typeof Uint16Array?Uint16Array:null,wr="function"==typeof Uint16Array?Uint16Array:void 0;gr=function(){var r,e,n;if("function"!=typeof hr)return!1;try{e=new hr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(dr&&n instanceof Uint16Array||"[object Uint16Array]"===rr(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var br,mr={uint16:gr,uint8:vr};(br=new mr.uint16(1))[0]=4660;var Ar=52===new mr.uint8(br.buffer)[0],_r=!0===Ar?1:0,Nr=new sr(1),Er=new ar(Nr.buffer);function Ur(r){return Nr[0]=r,Er[_r]}function Ir(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var Sr=-.16666666666666632;function kr(r,e){var n,t,i;return n=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*r,0===e?r+t*(Sr+i*n):r-(i*(.5*e-t*n)-e-t*Sr)}var xr,Fr,jr=1048575,Tr=!0===Ar?0:1,Or=new sr(1),Vr=new ar(Or.buffer);!0===Ar?(xr=1,Fr=0):(xr=0,Fr=1);var $r={HIGH:xr,LOW:Fr},Gr=new sr(1),Hr=new ar(Gr.buffer),Wr=$r.HIGH,Cr=$r.LOW;function Lr(r,e){return Hr[Wr]=r,Hr[Cr]=e,Gr[0]}var Pr,Mr,Rr=Number.POSITIVE_INFINITY,Zr=1023;function Xr(r){return r===Rr||r===Z}!0===Ar?(Pr=1,Mr=0):(Pr=0,Mr=1);var Yr={HIGH:Pr,LOW:Mr},qr=new sr(1),zr=new ar(qr.buffer),Br=Yr.HIGH,Dr=Yr.LOW;function Jr(r,e,n,t){return qr[0]=r,e[t]=zr[Br],e[t+n]=zr[Dr],e}function Kr(r){return Jr(r,[0,0],1,0)}L(Kr,"assign",Jr);var Qr=[0,0];function re(r,e){var n,t;return Kr.assign(r,Qr,1,0),n=Qr[0],n&=q,t=Ur(e),Lr(n|=t&=2147483648,Qr[1])}function ee(r,e,n,t){return P(r)||Xr(r)?(e[t]=r,e[t+n]=0,e):0!==r&&X(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}L((function(r){return ee(r,[0,0],1,0)}),"assign",ee);var ne=[0,0],te=[0,0];function ie(r,e){var n,t;return 0===e||0===r||P(r)||Xr(r)?r:(ee(r,ne,1,0),e+=ne[1],e+=function(r){var e=Ur(r);return(e=(e&z)>>>20)-Zr|0}(r=ne[0]),e<-1074?re(0,r):e>1023?r<0?Z:Rr:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,Kr.assign(r,te,1,0),n=te[0],n&=2148532223,t*Lr(n|=e+Zr<<20,te[1])))}function ae(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var oe=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ue=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],fe=16777216,ce=5.960464477539063e-8,se=ae(20),le=ae(20),pe=ae(20),ye=ae(20);function ge(r,e,n,t,i,a,o,u,f){var c,s,l,p,y,g,v,d,h;for(p=a,h=t[n],d=n,y=0;d>0;y++)s=ce*h|0,ye[y]=h-fe*s|0,h=t[d-1]+s,d-=1;if(h=ie(h,i),h-=8*M(.125*h),h-=v=0|h,l=0,i>0?(v+=y=ye[n-1]>>24-i,ye[n-1]-=y<<24-i,l=ye[n-1]>>23-i):0===i?l=ye[n-1]>>23:h>=.5&&(l=2),l>0){for(v+=1,c=0,y=0;y<n;y++)d=ye[y],0===c?0!==d&&(c=1,ye[y]=16777216-d):ye[y]=16777215-d;if(i>0)switch(i){case 1:ye[n-1]&=8388607;break;case 2:ye[n-1]&=4194303}2===l&&(h=1-h,0!==c&&(h-=ie(1,i)))}if(0===h){for(d=0,y=n-1;y>=a;y--)d|=ye[y];if(0===d){for(g=1;0===ye[a-g];g++);for(y=n+1;y<=n+g;y++){for(f[u+y]=oe[o+y],s=0,d=0;d<=u;d++)s+=r[d]*f[u+(y-d)];t[y]=s}return ge(r,e,n+=g,t,i,a,o,u,f)}}if(0===h)for(n-=1,i-=24;0===ye[n];)n-=1,i-=24;else(h=ie(h,-i))>=fe?(s=ce*h|0,ye[n]=h-fe*s|0,i+=24,ye[n+=1]=s):ye[n]=0|h;for(s=ie(1,i),y=n;y>=0;y--)t[y]=s*ye[y],s*=ce;for(y=n;y>=0;y--){for(s=0,g=0;g<=p&&g<=n-y;g++)s+=ue[g]*t[y+g];pe[n-y]=s}for(s=0,y=n;y>=0;y--)s+=pe[y];for(e[0]=0===l?s:-s,s=pe[0]-s,y=1;y<=n;y++)s+=pe[y];return e[1]=0===l?s:-s,7&v}function ve(r,e,n,t){var i,a,o,u,f,c,s;for((a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),c=a-(o=t-1),s=o+4,f=0;f<=s;f++)se[f]=c<0?0:oe[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=r[c]*se[o+(f-c)];le[f]=i}return ge(r,e,4,le,u,4,a,o,se)}var de=Math.round;function he(r,e,n){var t,i,a,o,u;return a=r-1.5707963267341256*(t=de(.6366197723675814*r)),o=6077100506506192e-26*t,u=e>>20|0,n[0]=a-o,u-(Ur(n[0])>>20&2047)>16&&(o=20222662487959506e-37*t-((i=a)-(a=i-(o=6077100506303966e-26*t))-o),n[0]=a-o,u-(Ur(n[0])>>20&2047)>49&&(o=84784276603689e-45*t-((i=a)-(a=i-(o=20222662487111665e-37*t))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var we=1.5707963267341256,be=6077100506506192e-26,me=2*be,Ae=3*be,_e=4*be,Ne=[0,0,0],Ee=[0,0];function Ue(r,e){var n,t,i,a,o,u,f;if((i=Ur(r)&q|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(i&jr)?he(r,i,e):i<=1073928572?r>0?(f=r-we,e[0]=f-be,e[1]=f-e[0]-be,1):(f=r+we,e[0]=f+be,e[1]=f-e[0]+be,-1):r>0?(f=r-2*we,e[0]=f-me,e[1]=f-e[0]-me,2):(f=r+2*we,e[0]=f+me,e[1]=f-e[0]+me,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?he(r,i,e):r>0?(f=r-3*we,e[0]=f-Ae,e[1]=f-e[0]-Ae,3):(f=r+3*we,e[0]=f+Ae,e[1]=f-e[0]+Ae,-3):1075388923===i?he(r,i,e):r>0?(f=r-4*we,e[0]=f-_e,e[1]=f-e[0]-_e,4):(f=r+4*we,e[0]=f+_e,e[1]=f-e[0]+_e,-4);if(i<1094263291)return he(r,i,e);if(i>=z)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return Or[0]=r,Vr[Tr]}(r),f=Lr(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)Ne[o]=0|f,f=16777216*(f-Ne[o]);for(Ne[2]=f,a=3;0===Ne[a-1];)a-=1;return u=ve(Ne,Ee,t,a),r<0?(e[0]=-Ee[0],e[1]=-Ee[1],-u):(e[0]=Ee[0],e[1]=Ee[1],u)}var Ie=[0,0],Se=3.141592653589793;function ke(r){return R(r/2)}function xe(r){return ke(r>0?r-1:r+1)}var Fe=Math.sqrt,je=!0===Ar?0:1,Te=new sr(1),Oe=new ar(Te.buffer);function Ve(r,e){return Te[0]=r,Oe[je]=e>>>0,Te[0]}function $e(r){return 0|r}var Ge=!0===Ar?1:0,He=new sr(1),We=new ar(He.buffer);function Ce(r,e){return He[0]=r,We[Ge]=e>>>0,He[0]}var Le=1048576,Pe=[1,1.5],Me=[0,.5849624872207642],Re=[0,1.350039202129749e-8],Ze=1048576,Xe=1083179008,Ye=1e300,qe=1e-300,ze=[0,0],Be=[0,0];function De(r,e){var n,t,i,a,o,u,f,c,s,l,p,y,g,v;if(P(r)||P(e))return NaN;if(Kr.assign(e,ze,1,0),o=ze[0],0===ze[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return Fe(r);if(-.5===e)return 1/Fe(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(Xr(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:X(r)<1==(e===Rr)?0:Rr}(r,e)}if(Kr.assign(r,ze,1,0),a=ze[0],0===ze[1]){if(0===a)return function(r,e){return e===Z?Rr:e===Rr?0:e>0?xe(e)?r:0:xe(e)?re(Rr,r):Rr}(r,e);if(1===r)return 1;if(-1===r&&xe(e))return-1;if(Xr(r))return r===Z?De(-0,-e):e<0?0:Rr}if(r<0&&!1===R(e))return(r-r)/(r-r);if(i=X(r),n=a&q|0,t=o&q|0,f=o>>>31|0,u=(u=a>>>31|0)&&xe(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(Ur(r)&q)<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===f?u*Ye*Ye:u*qe*qe;if(n>1072693248)return 0===f?u*Ye*Ye:u*qe*qe;p=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=Ve(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(Be,i)}else p=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,y,g,v,d,h,w,b,m,A,_,N;return m=0,n<Le&&(m-=53,n=Ur(e*=9007199254740992)),m+=(n>>20)-Zr|0,n=1072693248|(A=1048575&n|0),A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=Le),o=Ve(i=(w=(e=Ce(e,n))-(c=Pe[_]))*(b=1/(e+c)),0),t=524288+(n>>1|536870912),f=Ce(0,t+=_<<18),h=(a=i*i)*a*(0===(N=a)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),f=Ve(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),v=(y=-7.028461650952758e-9*(l=Ve(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0))+.9617966939259756*(b-(l-w))+Re[_])-((g=Ve(g=(p=.9617967009544373*l)+y+(s=Me[_])+(d=m),0))-d-s-p),r[0]=g,r[1]=v,r}(Be,i,n);if(y=(l=(e-(c=Ve(e,0)))*p[0]+e*p[1])+(s=c*p[0]),Kr.assign(y,ze,1,0),g=$e(ze[0]),v=$e(ze[1]),g>=Xe){if(0!=(g-Xe|v))return u*Ye*Ye;if(l+8008566259537294e-32>y-s)return u*Ye*Ye}else if((g&q)>=1083231232){if(0!=(g-3230714880|v))return u*qe*qe;if(l<=y-s)return u*qe*qe}return y=function(r,e,n){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&q|0)>>20)-Zr|0,c=0,s>1071644672&&(i=Ce(0,((c=r+(Ze>>l+1)>>>0)&~(jr>>(l=((c&q)>>20)-Zr|0)))>>>0),c=(c&jr|Ze)>>20-l>>>0,r<0&&(c=-c),e-=i),r=$e(r=Ur(f=1-((f=(a=.6931471824645996*(i=Ve(i=n+e,0)))+(o=.6931471805599453*(n-(i-e))+-1.904654299957768e-9*i))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?ie(f,c):Ce(f,r)}(g,s,l),u*y}var Je=Math.ceil;function Ke(r){return r<0?Je(r):M(r)}var Qe=1.4426950408889634,rn=1/(1<<28);function en(r){var e;return P(r)||r===Rr?r:r===Z?0:r>709.782712893384?Rr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<rn?1+r:function(r,e,n){var t,i,a,o;return ie(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-.6931471803691238*(e=Ke(r<0?Qe*r-.5:Qe*r+.5)),1.9082149292705877e-10*e,e)}function nn(r){var e,n,t;return e=1+(e=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(e),n=en(r),2.5066282746310007*(n=r>143.01608?(t=De(r,.5*r-.25))*(t/n):De(r,r-.5)/n)*e}function tn(r,e){return e/((1+.5772156649015329*r)*r)}function an(r){var e,n,t,i;if(R(r)&&r<0||r===Z||P(r))return NaN;if(0===r)return function(r){return 0===r&&1/r===Z}(r)?Z:Rr;if(r>171.61447887182297)return Rr;if(r<-170.5674972726612)return 0;if((n=X(r))>33)return r>=0?nn(r):(e=0==(1&(t=M(n)))?-1:1,(i=n-t)>.5&&(i=n-(t+=1)),i=n*function(r){var e;if(e=Ur(r),(e&=q)<=1072243195)return e<1045430272?r:kr(r,0);if(e>=z)return NaN;switch(3&Ue(r,Ie)){case 0:return kr(Ie[0],Ie[1]);case 1:return Ir(Ie[0],Ie[1]);case 2:return-kr(Ie[0],Ie[1]);default:return-Ir(Ie[0],Ie[1])}}(Se*i),e*Se/(X(i)*nn(n)));for(i=1;r>=3;)i*=r-=1;for(;r<0;){if(r>-1e-9)return tn(r,i);i/=r,r+=1}for(;r<2;){if(r<1e-9)return tn(r,i);i/=r,r+=1}return 2===r?i:i*function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),n=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(e=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),n=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),e/n)}(r-=2)}var on=2220446049250313e-31;function un(r,e,n){var t,i,a,o;if(P(r)||P(e)||P(n)||e<=0||n<=0)return NaN;i=1,a=1,o=0;do{i+=t=0==(a*=r*n/(o+=1))?0:a*an(1+o/e)}while(t/i>on);return i}return L(un,"factory",(function(r,e){return P(r)||P(e)||r<=0||e<=0?(n=NaN,function(){return n}):function(n){var t,i,a,o;if(P(n))return NaN;i=1,a=1,o=0;do{t=0==(a*=n*e/(o+=1))?0:a*an(1+o/r),i+=t}while(t/i>on);return i};var n})),un},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).mgf=e();
//# sourceMappingURL=browser.js.map
