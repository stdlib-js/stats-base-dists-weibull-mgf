// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(r){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,e=Object.prototype,u=e.toString,o=e.__defineGetter__,f=e.__defineSetter__,i=e.__lookupGetter__,a=e.__lookupSetter__,c=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(i.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,v="set"in t,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,t.get),v&&f&&f.call(r,n,t.set),r};function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function y(r){return r!=r}var v=Math.floor;function p(r){return v(r)===r}var b=Number.NEGATIVE_INFINITY;function s(r){return Math.abs(r)}var w,d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),_=Object.prototype.toString,A=Object.prototype.hasOwnProperty,h="function"==typeof Symbol?Symbol.toStringTag:"",m=d&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,o;if(null==r)return _.call(r);t=r[h],o=h,n=null!=(u=r)&&A.call(u,o);try{r[h]=void 0}catch(n){return _.call(r)}return e=_.call(r),n?r[h]=t:delete r[h],e}:function(r){return _.call(r)},N="function"==typeof Uint32Array,U="function"==typeof Uint32Array?Uint32Array:null,g="function"==typeof Uint32Array?Uint32Array:void 0;w=function(){var r,n,t;if("function"!=typeof U)return!1;try{n=new U(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(N&&t instanceof Uint32Array||"[object Uint32Array]"===m(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?g:function(){throw new Error("not implemented")};var j,I=w,O="function"==typeof Float64Array,S="function"==typeof Float64Array?Float64Array:null,E="function"==typeof Float64Array?Float64Array:void 0;j=function(){var r,n,t;if("function"!=typeof S)return!1;try{n=new S([1,3.14,-3.14,NaN]),t=n,r=(O&&t instanceof Float64Array||"[object Float64Array]"===m(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?E:function(){throw new Error("not implemented")};var F,T=j,H="function"==typeof Uint8Array,G="function"==typeof Uint8Array?Uint8Array:null,P="function"==typeof Uint8Array?Uint8Array:void 0;F=function(){var r,n,t;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,256,257]),t=n,r=(H&&t instanceof Uint8Array||"[object Uint8Array]"===m(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?P:function(){throw new Error("not implemented")};var M,x=F,L="function"==typeof Uint16Array,V="function"==typeof Uint16Array?Uint16Array:null,W="function"==typeof Uint16Array?Uint16Array:void 0;M=function(){var r,n,t;if("function"!=typeof V)return!1;try{n=new V(n=[1,3.14,-3.14,65536,65537]),t=n,r=(L&&t instanceof Uint16Array||"[object Uint16Array]"===m(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?W:function(){throw new Error("not implemented")};var k,Y={uint16:M,uint8:x};(k=new Y.uint16(1))[0]=4660;var q=52===new Y.uint8(k.buffer)[0],C=!0===q?1:0,z=new T(1),B=new I(z.buffer);function D(r){return z[0]=r,B[C]}function J(r,n){var t,e,u,o;return u=(o=r*r)*o,e=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(u=1-(t=.5*o))+(1-u-t+(o*e-r*n))}var K=-.16666666666666632;function Q(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(K+u*t):r-(u*(.5*n-e*t)-n-e*K)}var R,X,Z=!0===q?0:1,$=new T(1),rr=new I($.buffer);!0===q?(R=1,X=0):(R=0,X=1);var nr={HIGH:R,LOW:X},tr=new T(1),er=new I(tr.buffer),ur=nr.HIGH,or=nr.LOW;function fr(r,n){return er[ur]=r,er[or]=n,tr[0]}var ir,ar,cr=Number.POSITIVE_INFINITY,lr=1023;function yr(r){return r===cr||r===b}!0===q?(ir=1,ar=0):(ir=0,ar=1);var vr={HIGH:ir,LOW:ar},pr=new T(1),br=new I(pr.buffer),sr=vr.HIGH,wr=vr.LOW;function dr(r,n){return pr[0]=n,r[0]=br[sr],r[1]=br[wr],r}function _r(r,n){return 1===arguments.length?dr([0,0],r):dr(r,n)}var Ar=[0,0];function hr(r,n){var t,e;return _r(Ar,r),t=Ar[0],t&=2147483647,e=D(n),fr(t|=e&=2147483648,Ar[1])}function mr(r,n,t,e){return y(r)||yr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&s(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}l((function(r){return mr(r,[0,0],1,0)}),"assign",mr);var Nr=[0,0],Ur=[0,0];function gr(r,n){var t,e;return 0===n||0===r||y(r)||yr(r)?r:(mr(r,Nr,1,0),n+=Nr[1],n+=function(r){var n=D(r);return(n=(2146435072&n)>>>20)-lr|0}(r=Nr[0]),n<-1074?hr(0,r):n>1023?r<0?b:cr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,_r(Ur,r),t=Ur[0],t&=2148532223,e*fr(t|=n+lr<<20,Ur[1])))}function jr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Ir=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Or=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Sr=16777216,Er=5.960464477539063e-8,Fr=jr(20),Tr=jr(20),Hr=jr(20),Gr=jr(20);function Pr(r,n,t,e,u,o,f,i,a){var c,l,y,p,b,s,w,d,_;for(p=o,_=e[t],d=t,b=0;d>0;b++)l=Er*_|0,Gr[b]=_-Sr*l|0,_=e[d-1]+l,d-=1;if(_=gr(_,u),_-=8*v(.125*_),_-=w=0|_,y=0,u>0?(w+=b=Gr[t-1]>>24-u,Gr[t-1]-=b<<24-u,y=Gr[t-1]>>23-u):0===u?y=Gr[t-1]>>23:_>=.5&&(y=2),y>0){for(w+=1,c=0,b=0;b<t;b++)d=Gr[b],0===c?0!==d&&(c=1,Gr[b]=16777216-d):Gr[b]=16777215-d;if(u>0)switch(u){case 1:Gr[t-1]&=8388607;break;case 2:Gr[t-1]&=4194303}2===y&&(_=1-_,0!==c&&(_-=gr(1,u)))}if(0===_){for(d=0,b=t-1;b>=o;b--)d|=Gr[b];if(0===d){for(s=1;0===Gr[o-s];s++);for(b=t+1;b<=t+s;b++){for(a[i+b]=Ir[f+b],l=0,d=0;d<=i;d++)l+=r[d]*a[i+(b-d)];e[b]=l}return Pr(r,n,t+=s,e,u,o,f,i,a)}}if(0===_)for(t-=1,u-=24;0===Gr[t];)t-=1,u-=24;else(_=gr(_,-u))>=Sr?(l=Er*_|0,Gr[t]=_-Sr*l|0,u+=24,Gr[t+=1]=l):Gr[t]=0|_;for(l=gr(1,u),b=t;b>=0;b--)e[b]=l*Gr[b],l*=Er;for(b=t;b>=0;b--){for(l=0,s=0;s<=p&&s<=t-b;s++)l+=Or[s]*e[b+s];Hr[t-b]=l}for(l=0,b=t;b>=0;b--)l+=Hr[b];for(n[0]=0===y?l:-l,l=Hr[0]-l,b=1;b<=t;b++)l+=Hr[b];return n[1]=0===y?l:-l,7&w}function Mr(r,n,t,e){var u,o,f,i,a,c,l;for((o=(t-3)/24|0)<0&&(o=0),i=t-24*(o+1),c=o-(f=e-1),l=f+4,a=0;a<=l;a++)Fr[a]=c<0?0:Ir[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=f;c++)u+=r[c]*Fr[f+(a-c)];Tr[a]=u}return Pr(r,n,4,Tr,i,4,o,f,Fr)}var xr=Math.round;function Lr(r,n,t){var e,u,o,f,i;return o=r-1.5707963267341256*(e=xr(.6366197723675814*r)),f=6077100506506192e-26*e,i=n>>20|0,t[0]=o-f,i-(D(t[0])>>20&2047)>16&&(f=20222662487959506e-37*e-((u=o)-(o=u-(f=6077100506303966e-26*e))-f),t[0]=o-f,i-(D(t[0])>>20&2047)>49&&(f=84784276603689e-45*e-((u=o)-(o=u-(f=20222662487111665e-37*e))-f),t[0]=o-f)),t[1]=o-t[0]-f,e}var Vr=1.5707963267341256,Wr=6077100506506192e-26,kr=2*Wr,Yr=3*Wr,qr=4*Wr,Cr=[0,0,0],zr=[0,0];function Br(r,n){var t,e,u,o,f,i,a;if((u=2147483647&D(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Lr(r,u,n):u<=1073928572?r>0?(a=r-Vr,n[0]=a-Wr,n[1]=a-n[0]-Wr,1):(a=r+Vr,n[0]=a+Wr,n[1]=a-n[0]+Wr,-1):r>0?(a=r-2*Vr,n[0]=a-kr,n[1]=a-n[0]-kr,2):(a=r+2*Vr,n[0]=a+kr,n[1]=a-n[0]+kr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Lr(r,u,n):r>0?(a=r-3*Vr,n[0]=a-Yr,n[1]=a-n[0]-Yr,3):(a=r+3*Vr,n[0]=a+Yr,n[1]=a-n[0]+Yr,-3):1075388923===u?Lr(r,u,n):r>0?(a=r-4*Vr,n[0]=a-qr,n[1]=a-n[0]-qr,4):(a=r+4*Vr,n[0]=a+qr,n[1]=a-n[0]+qr,-4);if(u<1094263291)return Lr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return $[0]=r,rr[Z]}(r),a=fr(u-((e=(u>>20)-1046)<<20|0),t),f=0;f<2;f++)Cr[f]=0|a,a=16777216*(a-Cr[f]);for(Cr[2]=a,o=3;0===Cr[o-1];)o-=1;return i=Mr(Cr,zr,e,o),r<0?(n[0]=-zr[0],n[1]=-zr[1],-i):(n[0]=zr[0],n[1]=zr[1],i)}var Dr=[0,0],Jr=3.141592653589793;function Kr(r){return p(r/2)}function Qr(r){return Kr(r>0?r-1:r+1)}var Rr=Math.sqrt,Xr=!0===q?0:1,Zr=new T(1),$r=new I(Zr.buffer);function rn(r,n){return Zr[0]=r,$r[Xr]=n>>>0,Zr[0]}function nn(r){return 0|r}var tn=!0===q?1:0,en=new T(1),un=new I(en.buffer);function on(r,n){return en[0]=r,un[tn]=n>>>0,en[0]}var fn=1048576,an=[1,1.5],cn=[0,.5849624872207642],ln=[0,1.350039202129749e-8],yn=2147483647,vn=1048575,pn=1048576,bn=2147483647,sn=1083179008,wn=1e300,dn=1e-300,_n=[0,0],An=[0,0];function hn(r,n){var t,e,u,o,f,i,a,c,l,v,w,d,_,A;if(y(r)||y(n))return NaN;if(_r(_n,n),f=_n[0],0===_n[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Rr(r);if(-.5===n)return 1/Rr(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(yr(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:s(r)<1==(n===cr)?0:cr}(r,n)}if(_r(_n,r),o=_n[0],0===_n[1]){if(0===o)return function(r,n){return n===b?cr:n===cr?0:n>0?Qr(n)?r:0:Qr(n)?hr(cr,r):cr}(r,n);if(1===r)return 1;if(-1===r&&Qr(n))return-1;if(yr(r))return r===b?hn(-0,-n):n<0?0:cr}if(r<0&&!1===p(n))return(r-r)/(r-r);if(u=s(r),t=o&bn|0,e=f&bn|0,a=f>>>31|0,i=(i=o>>>31|0)&&Qr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&D(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?i*wn*wn:i*dn*dn;if(t>1072693248)return 0===a?i*wn*wn:i*dn*dn;w=function(r,n){var t,e,u,o,f,i;return t=(f=1.9259629911266175e-8*(u=n-1)-u*u*(0===(i=u)?.5:.5+i*(.25*i-.3333333333333333))*1.4426950408889634)-((e=rn(e=(o=1.4426950216293335*u)+f,0))-o),r[0]=e,r[1]=t,r}(An,u)}else w=function(r,n,t){var e,u,o,f,i,a,c,l,y,v,p,b,s,w,d,_,A,h,m,N,U;return h=0,t<fn&&(h-=53,t=D(n*=9007199254740992)),h+=(t>>20)-lr|0,t=1072693248|(m=1048575&t|0),m<=235662?N=0:m<767610?N=1:(N=0,h+=1,t-=fn),f=rn(u=(_=(n=on(n,t))-(c=an[N]))*(A=1/(n+c)),0),e=524288+(t>>1|536870912),a=on(0,e+=N<<18),d=(o=u*u)*o*(0===(U=o)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=rn(a=3+(o=f*f)+(d+=(i=A*(_-f*a-f*(n-(a-c))))*(f+u)),0),s=(p=-7.028461650952758e-9*(y=rn(y=(_=f*a)+(A=i*a+(d-(a-3-o))*u),0))+.9617966939259756*(A-(y-_))+ln[N])-((b=rn(b=(v=.9617967009544373*y)+p+(l=cn[N])+(w=h),0))-w-l-v),r[0]=b,r[1]=s,r}(An,u,t);if(v=(n-(c=rn(n,0)))*w[0]+n*w[1],l=c*w[0],_r(_n,d=v+l),_=nn(_n[0]),A=nn(_n[1]),_>=sn){if(0!=(_-sn|A))return i*wn*wn;if(v+8008566259537294e-32>d-l)return i*wn*wn}else if((_&bn)>=1083231232){if(0!=(_-3230714880|A))return i*dn*dn;if(v<=d-l)return i*dn*dn}return d=function(r,n,t){var e,u,o,f,i,a,c,l,y,v;return y=((l=r&yn|0)>>20)-lr|0,c=0,l>1071644672&&(u=on(0,((c=r+(pn>>y+1)>>>0)&~(vn>>(y=((c&yn)>>20)-lr|0)))>>>0),c=(c&vn|pn)>>20-y>>>0,r<0&&(c=-c),n-=u),r=nn(r=D(a=1-((a=(o=.6931471824645996*(u=rn(u=t+n,0)))+(f=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(v=u)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((i=f-(a-o))+a*i)-a))),(r+=c<<20>>>0)>>20<=0?gr(a,c):on(a,r)}(_,l,v),i*d}var mn=Math.ceil;function Nn(r){return r<0?mn(r):v(r)}var Un=1.4426950408889634,gn=1/(1<<28);function jn(r){var n;return y(r)||r===cr?r:r===b?0:r>709.782712893384?cr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<gn?1+r:function(r,n,t){var e,u,o,f;return gr(1-(n-(e=r-n)*(o=e-(u=e*e)*(0===(f=u)?.16666666666666602:.16666666666666602+f*(f*(6613756321437934e-20+f*(4.1381367970572385e-8*f-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-.6931471803691238*(n=Nn(r<0?Un*r-.5:Un*r+.5)),1.9082149292705877e-10*n,n)}function In(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=jn(r),2.5066282746310007*(t=r>143.01608?(e=hn(r,.5*r-.25))*(e/t):hn(r,r-.5)/t)*n}function On(r,n){return n/((1+.5772156649015329*r)*r)}function Sn(r){var n,t,e,u;if(p(r)&&r<0||r===b||y(r))return NaN;if(0===r)return function(r){return 0===r&&1/r===b}(r)?b:cr;if(r>171.61447887182297)return cr;if(r<-170.5674972726612)return 0;if((t=s(r))>33)return r>=0?In(r):(n=0==(1&(e=v(t)))?-1:1,(u=t-e)>.5&&(u=t-(e+=1)),u=t*function(r){var n;if(n=D(r),(n&=2147483647)<=1072243195)return n<1045430272?r:Q(r,0);if(n>=2146435072)return NaN;switch(3&Br(r,Dr)){case 0:return Q(Dr[0],Dr[1]);case 1:return J(Dr[0],Dr[1]);case 2:return-Q(Dr[0],Dr[1]);default:return-J(Dr[0],Dr[1])}}(Jr*u),n*Jr/(s(u)*In(t)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return On(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return On(r,u);u/=r,r+=1}return 2===r?u:u*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(r-=2)}var En=2220446049250313e-31;function Fn(r,n,t){var e,u,o,f;if(y(r)||y(n)||y(t)||n<=0||t<=0)return NaN;u=1,o=1,f=0;do{u+=e=0==(o*=r*t/(f+=1))?0:o*Sn(1+f/n)}while(e/u>En);return u}function Tn(r,n){return y(r)||y(n)||r<=0||n<=0?(t=NaN,function(){return t}):function(t){var e,u,o,f;if(y(t))return NaN;u=1,o=1,f=0;do{e=0==(o*=t*n/(f+=1))?0:o*Sn(1+f/r),u+=e}while(e/u>En);return u};var t}l(Fn,"factory",Tn),r.default=Fn,r.factory=Tn,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((r="undefined"!=typeof globalThis?globalThis:r||self).mgf={});
//# sourceMappingURL=index.js.map
