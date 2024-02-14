// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(o):t(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===a.call(r.specifier)?a.call(t):o.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(r){return"string"==typeof r}var c=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,v=/^(\d+)$/,d=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,w,"$1e"),t=p.call(t,h,"e"),t=p.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,y,"e+0$1"),t=p.call(t,g,"e-0$1"),r.alternate&&(t=p.call(t,v,"$1."),t=p.call(t,d,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):l.call(t)}function I(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function N(r,e,n){var t=e-r.length;return t<0?r:r=n?r+I(t):I(t)+r}var S=String.fromCharCode,A=isNaN,T=Array.isArray;function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function _(r){var e,n,t,o,a,c,l,s,p;if(!T(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",l=1,s=0;s<r.length;s++)if(f(t=r[s]))c+=t;else{if(e=void 0!==t.precision,!(t=E(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(o=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,A(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,A(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!A(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=A(a)?String(t.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=N(t.arg,t.width,t.padRight)),c+=t.arg||"",l+=1}return c}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function V(r){var e,n,t,i;for(n=[],i=0,t=F.exec(r);t;)(e=r.slice(i,F.lastIndex-t[0].length)).length&&n.push(e),n.push(U(t)),i=F.lastIndex,t=F.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function j(r){return"string"==typeof r}function O(r){var e,n;if(!j(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[V(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return _.apply(null,e)}var k=Object.prototype,x=k.toString,G=k.__defineGetter__,P=k.__defineSetter__,Y=k.__lookupGetter__,$=k.__lookupSetter__,H=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===x.call(r))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===x.call(n))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(Y.call(r,e)||$.call(r,e)?(t=r.__proto__,r.__proto__=k,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&G&&G.call(r,e,n.get),a&&P&&P.call(r,e,n.set),r};function W(r,e,n){H(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function C(r){return r!=r}var L=Math.floor;function M(r){return L(r)===r}var R=Number.NEGATIVE_INFINITY;function Z(r){return Math.abs(r)}var X=2147483647,q=2146435072;function z(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var B=z(),D=Object.prototype.toString,J=Object.prototype.hasOwnProperty;function K(r,e){return null!=r&&J.call(r,e)}var Q,rr="function"==typeof Symbol?Symbol:void 0,er="function"==typeof rr?rr.toStringTag:"",nr=B&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t;if(null==r)return D.call(r);n=r[er],e=K(r,er);try{r[er]=void 0}catch(e){return D.call(r)}return t=D.call(r),e?r[er]=n:delete r[er],t}:function(r){return D.call(r)},tr="function"==typeof Uint32Array,ir="function"==typeof Uint32Array?Uint32Array:null,or="function"==typeof Uint32Array?Uint32Array:void 0;Q=function(){var r,e,n;if("function"!=typeof ir)return!1;try{e=new ir(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(tr&&n instanceof Uint32Array||"[object Uint32Array]"===nr(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ar,ur=Q,fr=z(),cr=Object.prototype.toString,lr="function"==typeof Symbol?Symbol:void 0,sr="function"==typeof lr?lr.toStringTag:"",pr=fr&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t;if(null==r)return cr.call(r);n=r[sr],e=K(r,sr);try{r[sr]=void 0}catch(e){return cr.call(r)}return t=cr.call(r),e?r[sr]=n:delete r[sr],t}:function(r){return cr.call(r)},yr="function"==typeof Float64Array,gr="function"==typeof Float64Array?Float64Array:null,vr="function"==typeof Float64Array?Float64Array:void 0;ar=function(){var r,e,n;if("function"!=typeof gr)return!1;try{e=new gr([1,3.14,-3.14,NaN]),n=e,r=(yr&&n instanceof Float64Array||"[object Float64Array]"===pr(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var dr,br=ar,hr=z(),wr=Object.prototype.toString,mr="function"==typeof Symbol?Symbol:void 0,Ir="function"==typeof mr?mr.toStringTag:"",Nr=hr&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t;if(null==r)return wr.call(r);n=r[Ir],e=K(r,Ir);try{r[Ir]=void 0}catch(e){return wr.call(r)}return t=wr.call(r),e?r[Ir]=n:delete r[Ir],t}:function(r){return wr.call(r)},Sr="function"==typeof Uint8Array,Ar="function"==typeof Uint8Array?Uint8Array:null,Tr="function"==typeof Uint8Array?Uint8Array:void 0;dr=function(){var r,e,n;if("function"!=typeof Ar)return!1;try{e=new Ar(e=[1,3.14,-3.14,256,257]),n=e,r=(Sr&&n instanceof Uint8Array||"[object Uint8Array]"===Nr(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Tr:function(){throw new Error("not implemented")};var Er,_r=dr,Fr=z(),Ur=Object.prototype.toString,Vr="function"==typeof Symbol?Symbol:void 0,jr="function"==typeof Vr?Vr.toStringTag:"",Or=Fr&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t;if(null==r)return Ur.call(r);n=r[jr],e=K(r,jr);try{r[jr]=void 0}catch(e){return Ur.call(r)}return t=Ur.call(r),e?r[jr]=n:delete r[jr],t}:function(r){return Ur.call(r)},kr="function"==typeof Uint16Array,xr="function"==typeof Uint16Array?Uint16Array:null,Gr="function"==typeof Uint16Array?Uint16Array:void 0;Er=function(){var r,e,n;if("function"!=typeof xr)return!1;try{e=new xr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(kr&&n instanceof Uint16Array||"[object Uint16Array]"===Or(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Gr:function(){throw new Error("not implemented")};var Pr,Yr={uint16:Er,uint8:_r};(Pr=new Yr.uint16(1))[0]=4660;var $r=52===new Yr.uint8(Pr.buffer)[0],Hr=!0===$r?1:0,Wr=new br(1),Cr=new ur(Wr.buffer);function Lr(r){return Wr[0]=r,Cr[Hr]}function Mr(r,e){var n,t,i,o;return i=(o=r*r)*o,t=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(i=1-(n=.5*o))+(1-i-n+(o*t-r*e))}var Rr=-.16666666666666632;function Zr(r,e){var n,t,i;return n=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*r,0===e?r+t*(Rr+i*n):r-(i*(.5*e-t*n)-e-t*Rr)}var Xr,qr,zr=1048575,Br=!0===$r?0:1,Dr=new br(1),Jr=new ur(Dr.buffer);!0===$r?(Xr=1,qr=0):(Xr=0,qr=1);var Kr={HIGH:Xr,LOW:qr},Qr=new br(1),re=new ur(Qr.buffer),ee=Kr.HIGH,ne=Kr.LOW;function te(r,e){return re[ee]=r,re[ne]=e,Qr[0]}var ie,oe,ae=Number.POSITIVE_INFINITY,ue=Number.NEGATIVE_INFINITY,fe=1023,ce=Number.POSITIVE_INFINITY,le=Number.NEGATIVE_INFINITY;function se(r){return r===ce||r===le}!0===$r?(ie=1,oe=0):(ie=0,oe=1);var pe={HIGH:ie,LOW:oe},ye=new br(1),ge=new ur(ye.buffer),ve=pe.HIGH,de=pe.LOW;function be(r,e,n,t){return ye[0]=r,e[t]=ge[ve],e[t+n]=ge[de],e}function he(r){return be(r,[0,0],1,0)}W(he,"assign",be);var we=[0,0];function me(r,e){var n,t;return he.assign(r,we,1,0),n=we[0],n&=X,t=Lr(e),te(n|=t&=2147483648,we[1])}function Ie(r,e,n,t){return C(r)||se(r)?(e[t]=r,e[t+n]=0,e):0!==r&&Z(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}W((function(r){return Ie(r,[0,0],1,0)}),"assign",Ie);var Ne=[0,0],Se=[0,0];function Ae(r,e){var n,t;return 0===e||0===r||C(r)||se(r)?r:(Ie(r,Ne,1,0),e+=Ne[1],e+=function(r){var e=Lr(r);return(e=(e&q)>>>20)-fe|0}(r=Ne[0]),e<-1074?me(0,r):e>1023?r<0?ue:ae:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,he.assign(r,Se,1,0),n=Se[0],n&=2148532223,t*te(n|=e+fe<<20,Se[1])))}function Te(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var Ee=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],_e=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Fe=16777216,Ue=5.960464477539063e-8,Ve=Te(20),je=Te(20),Oe=Te(20),ke=Te(20);function xe(r,e,n,t,i,o,a,u,f){var c,l,s,p,y,g,v,d,b;for(p=o,b=t[n],d=n,y=0;d>0;y++)l=Ue*b|0,ke[y]=b-Fe*l|0,b=t[d-1]+l,d-=1;if(b=Ae(b,i),b-=8*L(.125*b),b-=v=0|b,s=0,i>0?(v+=y=ke[n-1]>>24-i,ke[n-1]-=y<<24-i,s=ke[n-1]>>23-i):0===i?s=ke[n-1]>>23:b>=.5&&(s=2),s>0){for(v+=1,c=0,y=0;y<n;y++)d=ke[y],0===c?0!==d&&(c=1,ke[y]=16777216-d):ke[y]=16777215-d;if(i>0)switch(i){case 1:ke[n-1]&=8388607;break;case 2:ke[n-1]&=4194303}2===s&&(b=1-b,0!==c&&(b-=Ae(1,i)))}if(0===b){for(d=0,y=n-1;y>=o;y--)d|=ke[y];if(0===d){for(g=1;0===ke[o-g];g++);for(y=n+1;y<=n+g;y++){for(f[u+y]=Ee[a+y],l=0,d=0;d<=u;d++)l+=r[d]*f[u+(y-d)];t[y]=l}return xe(r,e,n+=g,t,i,o,a,u,f)}}if(0===b)for(n-=1,i-=24;0===ke[n];)n-=1,i-=24;else(b=Ae(b,-i))>=Fe?(l=Ue*b|0,ke[n]=b-Fe*l|0,i+=24,ke[n+=1]=l):ke[n]=0|b;for(l=Ae(1,i),y=n;y>=0;y--)t[y]=l*ke[y],l*=Ue;for(y=n;y>=0;y--){for(l=0,g=0;g<=p&&g<=n-y;g++)l+=_e[g]*t[y+g];Oe[n-y]=l}for(l=0,y=n;y>=0;y--)l+=Oe[y];for(e[0]=0===s?l:-l,l=Oe[0]-l,y=1;y<=n;y++)l+=Oe[y];return e[1]=0===s?l:-l,7&v}function Ge(r,e,n,t){var i,o,a,u,f,c,l;for((o=(n-3)/24|0)<0&&(o=0),u=n-24*(o+1),c=o-(a=t-1),l=a+4,f=0;f<=l;f++)Ve[f]=c<0?0:Ee[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=a;c++)i+=r[c]*Ve[a+(f-c)];je[f]=i}return xe(r,e,4,je,u,4,o,a,Ve)}var Pe=Math.round;function Ye(r,e,n){var t,i,o,a,u;return o=r-1.5707963267341256*(t=Pe(.6366197723675814*r)),a=6077100506506192e-26*t,u=e>>20|0,n[0]=o-a,u-(Lr(n[0])>>20&2047)>16&&(a=20222662487959506e-37*t-((i=o)-(o=i-(a=6077100506303966e-26*t))-a),n[0]=o-a,u-(Lr(n[0])>>20&2047)>49&&(a=84784276603689e-45*t-((i=o)-(o=i-(a=20222662487111665e-37*t))-a),n[0]=o-a)),n[1]=o-n[0]-a,t}var $e=1.5707963267341256,He=6077100506506192e-26,We=2*He,Ce=3*He,Le=4*He,Me=[0,0,0],Re=[0,0];function Ze(r,e){var n,t,i,o,a,u,f;if((i=Lr(r)&X|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(i&zr)?Ye(r,i,e):i<=1073928572?r>0?(f=r-$e,e[0]=f-He,e[1]=f-e[0]-He,1):(f=r+$e,e[0]=f+He,e[1]=f-e[0]+He,-1):r>0?(f=r-2*$e,e[0]=f-We,e[1]=f-e[0]-We,2):(f=r+2*$e,e[0]=f+We,e[1]=f-e[0]+We,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?Ye(r,i,e):r>0?(f=r-3*$e,e[0]=f-Ce,e[1]=f-e[0]-Ce,3):(f=r+3*$e,e[0]=f+Ce,e[1]=f-e[0]+Ce,-3):1075388923===i?Ye(r,i,e):r>0?(f=r-4*$e,e[0]=f-Le,e[1]=f-e[0]-Le,4):(f=r+4*$e,e[0]=f+Le,e[1]=f-e[0]+Le,-4);if(i<1094263291)return Ye(r,i,e);if(i>=q)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return Dr[0]=r,Jr[Br]}(r),f=te(i-((t=(i>>20)-1046)<<20|0),n),a=0;a<2;a++)Me[a]=0|f,f=16777216*(f-Me[a]);for(Me[2]=f,o=3;0===Me[o-1];)o-=1;return u=Ge(Me,Re,t,o),r<0?(e[0]=-Re[0],e[1]=-Re[1],-u):(e[0]=Re[0],e[1]=Re[1],u)}var Xe=[0,0],qe=Number.POSITIVE_INFINITY,ze=Number.NEGATIVE_INFINITY,Be=3.141592653589793;function De(r){return M(r/2)}function Je(r){return De(r>0?r-1:r+1)}var Ke=Math.sqrt,Qe=!0===$r?0:1,rn=new br(1),en=new ur(rn.buffer);function nn(r,e){return rn[0]=r,en[Qe]=e>>>0,rn[0]}function tn(r){return 0|r}var on=Number.NEGATIVE_INFINITY,an=Number.POSITIVE_INFINITY,un=!0===$r?1:0,fn=new br(1),cn=new ur(fn.buffer);function ln(r,e){return fn[0]=r,cn[un]=e>>>0,fn[0]}var sn=1048576,pn=[1,1.5],yn=[0,.5849624872207642],gn=[0,1.350039202129749e-8],vn=1048576,dn=1083179008,bn=1e300,hn=1e-300,wn=[0,0],mn=[0,0];function In(r,e){var n,t,i,o,a,u,f,c,l,s,p,y,g,v;if(C(r)||C(e))return NaN;if(he.assign(e,wn,1,0),a=wn[0],0===wn[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return Ke(r);if(-.5===e)return 1/Ke(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(se(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:Z(r)<1==(e===an)?0:an}(r,e)}if(he.assign(r,wn,1,0),o=wn[0],0===wn[1]){if(0===o)return function(r,e){return e===on?an:e===an?0:e>0?Je(e)?r:0:Je(e)?me(an,r):an}(r,e);if(1===r)return 1;if(-1===r&&Je(e))return-1;if(se(r))return r===on?In(-0,-e):e<0?0:an}if(r<0&&!1===M(e))return(r-r)/(r-r);if(i=Z(r),n=o&X|0,t=a&X|0,f=a>>>31|0,u=(u=o>>>31|0)&&Je(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(Lr(r)&X)<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===f?u*bn*bn:u*hn*hn;if(n>1072693248)return 0===f?u*bn*bn:u*hn*hn;p=function(r,e){var n,t,i,o,a,u;return n=(a=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=nn(t=(o=1.4426950216293335*i)+a,0))-o),r[0]=t,r[1]=n,r}(mn,i)}else p=function(r,e,n){var t,i,o,a,u,f,c,l,s,p,y,g,v,d,b,h,w,m,I,N,S;return m=0,n<sn&&(m-=53,n=Lr(e*=9007199254740992)),m+=(n>>20)-fe|0,n=1072693248|(I=1048575&n|0),I<=235662?N=0:I<767610?N=1:(N=0,m+=1,n-=sn),a=nn(i=(h=(e=ln(e,n))-(c=pn[N]))*(w=1/(e+c)),0),t=524288+(n>>1|536870912),f=ln(0,t+=N<<18),b=(o=i*i)*o*(0===(S=o)?.5999999999999946:.5999999999999946+S*(.4285714285785502+S*(.33333332981837743+S*(.272728123808534+S*(.23066074577556175+.20697501780033842*S))))),f=nn(f=3+(o=a*a)+(b+=(u=w*(h-a*f-a*(e-(f-c))))*(a+i)),0),v=(y=-7.028461650952758e-9*(s=nn(s=(h=a*f)+(w=u*f+(b-(f-3-o))*i),0))+.9617966939259756*(w-(s-h))+gn[N])-((g=nn(g=(p=.9617967009544373*s)+y+(l=yn[N])+(d=m),0))-d-l-p),r[0]=g,r[1]=v,r}(mn,i,n);if(y=(s=(e-(c=nn(e,0)))*p[0]+e*p[1])+(l=c*p[0]),he.assign(y,wn,1,0),g=tn(wn[0]),v=tn(wn[1]),g>=dn){if(0!=(g-dn|v))return u*bn*bn;if(s+8008566259537294e-32>y-l)return u*bn*bn}else if((g&X)>=1083231232){if(0!=(g-3230714880|v))return u*hn*hn;if(s<=y-l)return u*hn*hn}return y=function(r,e,n){var t,i,o,a,u,f,c,l,s,p;return s=((l=r&X|0)>>20)-fe|0,c=0,l>1071644672&&(i=ln(0,((c=r+(vn>>s+1)>>>0)&~(zr>>(s=((c&X)>>20)-fe|0)))>>>0),c=(c&zr|vn)>>20-s>>>0,r<0&&(c=-c),e-=i),r=tn(r=Lr(f=1-((f=(o=.6931471824645996*(i=nn(i=n+e,0)))+(a=.6931471805599453*(n-(i-e))+-1.904654299957768e-9*i))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?Ae(f,c):ln(f,r)}(g,l,s),u*y}var Nn=Math.ceil;function Sn(r){return r<0?Nn(r):L(r)}var An=Number.NEGATIVE_INFINITY,Tn=Number.POSITIVE_INFINITY,En=1.4426950408889634,_n=1/(1<<28);function Fn(r){var e;return C(r)||r===Tn?r:r===An?0:r>709.782712893384?Tn:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<_n?1+r:function(r,e,n){var t,i,o,a;return Ae(1-(e-(t=r-e)*(o=t-(i=t*t)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),n)}(r-.6931471803691238*(e=Sn(r<0?En*r-.5:En*r+.5)),1.9082149292705877e-10*e,e)}function Un(r){var e,n,t;return e=1+(e=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(e),n=Fn(r),2.5066282746310007*(n=r>143.01608?(t=In(r,.5*r-.25))*(t/n):In(r,r-.5)/n)*e}function Vn(r,e){return e/((1+.5772156649015329*r)*r)}function jn(r){var e,n,t,i;if(M(r)&&r<0||r===ze||C(r))return NaN;if(0===r)return function(r){return 0===r&&1/r===R}(r)?ze:qe;if(r>171.61447887182297)return qe;if(r<-170.5674972726612)return 0;if((n=Z(r))>33)return r>=0?Un(r):(e=0==(1&(t=L(n)))?-1:1,(i=n-t)>.5&&(i=n-(t+=1)),i=n*function(r){var e;if(e=Lr(r),(e&=X)<=1072243195)return e<1045430272?r:Zr(r,0);if(e>=q)return NaN;switch(3&Ze(r,Xe)){case 0:return Zr(Xe[0],Xe[1]);case 1:return Mr(Xe[0],Xe[1]);case 2:return-Zr(Xe[0],Xe[1]);default:return-Mr(Xe[0],Xe[1])}}(Be*i),e*Be/(Z(i)*Un(n)));for(i=1;r>=3;)i*=r-=1;for(;r<0;){if(r>-1e-9)return Vn(r,i);i/=r,r+=1}for(;r<2;){if(r<1e-9)return Vn(r,i);i/=r,r+=1}return 2===r?i:i*function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),n=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(e=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),n=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),e/n)}(r-=2)}var On=2220446049250313e-31;function kn(r,e,n){var t,i,o,a;if(C(r)||C(e)||C(n)||e<=0||n<=0)return NaN;i=1,o=1,a=0;do{i+=t=0==(o*=r*n/(a+=1))?0:o*jn(1+a/e)}while(t/i>On);return i}return W(kn,"factory",(function(r,e){return C(r)||C(e)||r<=0||e<=0?(n=NaN,function(){return n}):function(n){var t,i,o,a;if(C(n))return NaN;i=1,o=1,a=0;do{t=0==(o*=n*e/(a+=1))?0:o*jn(1+a/r),i+=t}while(t/i>On);return i};var n})),kn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).mgf=e();
//# sourceMappingURL=browser.js.map
