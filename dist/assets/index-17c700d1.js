var Gf=Object.defineProperty;var Wf=(i,e,t)=>e in i?Gf(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Vt=(i,e,t)=>(Wf(i,typeof e!="symbol"?e+"":e,t),t),wc=(i,e,t)=>{if(!e.has(i))throw TypeError("Cannot "+t)};var Mt=(i,e,t)=>(wc(i,e,"read from private field"),t?t.call(i):e.get(i)),hi=(i,e,t)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,t)},Yi=(i,e,t,n)=>(wc(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zl="158",qf=0,Mc=1,Xf=2,Kh=1,jf=2,ni=3,Ti=0,tn=1,ri=2,wi=0,_s=1,Ro=2,bc=3,Tc=4,Yf=5,Bi=100,$f=101,Kf=102,Ac=103,Rc=104,Zf=200,Jf=201,Qf=202,ep=203,cl=204,ul=205,tp=206,np=207,ip=208,sp=209,rp=210,op=211,ap=212,lp=213,cp=214,up=0,hp=1,dp=2,Co=3,fp=4,pp=5,mp=6,gp=7,Zh=0,_p=1,vp=2,Mi=0,yp=1,xp=2,Sp=3,Ep=4,wp=5,Jh=300,Ss=301,Es=302,hl=303,dl=304,zo=306,dr=1e3,An=1001,fl=1002,Zt=1003,Cc=1004,ua=1005,fn=1006,Mp=1007,fr=1008,bi=1009,bp=1010,Tp=1011,kl=1012,Qh=1013,xi=1014,Si=1015,pr=1016,ed=1017,td=1018,Hi=1020,Ap=1021,Rn=1023,Rp=1024,Cp=1025,Gi=1026,ws=1027,Pp=1028,nd=1029,Lp=1030,id=1031,sd=1033,ha=33776,da=33777,fa=33778,pa=33779,Pc=35840,Lc=35841,Nc=35842,Ic=35843,Np=36196,Dc=37492,Uc=37496,Fc=37808,Oc=37809,Bc=37810,zc=37811,kc=37812,Vc=37813,Hc=37814,Gc=37815,Wc=37816,qc=37817,Xc=37818,jc=37819,Yc=37820,$c=37821,ma=36492,Kc=36494,Zc=36495,Ip=36283,Jc=36284,Qc=36285,eu=36286,rd=3e3,Wi=3001,Dp=3200,Up=3201,Fp=0,Op=1,gn="",Ht="srgb",li="srgb-linear",Vl="display-p3",ko="display-p3-linear",Po="linear",dt="srgb",Lo="rec709",No="p3",$i=7680,tu=519,Bp=512,zp=513,kp=514,Vp=515,Hp=516,Gp=517,Wp=518,qp=519,nu=35044,iu="300 es",pl=1035,oi=2e3,Io=2001;class Cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let o=0,a=s.length;o<a;o++)s[o].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let su=1234567;const ir=Math.PI/180,mr=180/Math.PI;function Ps(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function Jt(i,e,t){return Math.max(e,Math.min(t,i))}function Hl(i,e){return(i%e+e)%e}function Xp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function jp(i,e,t){return i!==e?(t-i)/(e-i):0}function sr(i,e,t){return(1-t)*i+t*e}function Yp(i,e,t,n){return sr(i,e,1-Math.exp(-t*n))}function $p(i,e=1){return e-Math.abs(Hl(i,e*2)-e)}function Kp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Zp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Jp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Qp(i,e){return i+Math.random()*(e-i)}function em(i){return i*(.5-Math.random())}function tm(i){i!==void 0&&(su=i);let e=su+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nm(i){return i*ir}function im(i){return i*mr}function ml(i){return(i&i-1)===0&&i!==0}function sm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Do(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rm(i,e,t,n,s){const o=Math.cos,a=Math.sin,l=o(t/2),c=a(t/2),u=o((e+n)/2),h=a((e+n)/2),f=o((e-n)/2),d=a((e-n)/2),g=o((n-e)/2),_=a((n-e)/2);switch(s){case"XYX":i.set(l*h,c*f,c*d,l*u);break;case"YZY":i.set(c*d,l*h,c*f,l*u);break;case"ZXZ":i.set(c*f,c*d,l*h,l*u);break;case"XZX":i.set(l*h,c*_,c*g,l*u);break;case"YXY":i.set(c*g,l*h,c*_,l*u);break;case"ZYZ":i.set(c*_,c*g,l*h,l*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ps(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const om={DEG2RAD:ir,RAD2DEG:mr,generateUUID:Ps,clamp:Jt,euclideanModulo:Hl,mapLinear:Xp,inverseLerp:jp,lerp:sr,damp:Yp,pingpong:$p,smoothstep:Kp,smootherstep:Zp,randInt:Jp,randFloat:Qp,randFloatSpread:em,seededRandom:tm,degToRad:nm,radToDeg:im,isPowerOfTwo:ml,ceilPowerOfTwo:sm,floorPowerOfTwo:Do,setQuaternionFromProperEuler:rm,normalize:Yt,denormalize:ps};class it{constructor(e=0,t=0){it.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),o=this.x-e.x,a=this.y-e.y;return this.x=o*n-a*s+e.x,this.y=o*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,n,s,o,a,l,c,u){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,a,l,c,u)}set(e,t,n,s,o,a,l,c,u){const h=this.elements;return h[0]=e,h[1]=s,h[2]=l,h[3]=t,h[4]=o,h[5]=c,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,a=n[0],l=n[3],c=n[6],u=n[1],h=n[4],f=n[7],d=n[2],g=n[5],_=n[8],v=s[0],m=s[3],p=s[6],y=s[1],x=s[4],E=s[7],b=s[2],R=s[5],C=s[8];return o[0]=a*v+l*y+c*b,o[3]=a*m+l*x+c*R,o[6]=a*p+l*E+c*C,o[1]=u*v+h*y+f*b,o[4]=u*m+h*x+f*R,o[7]=u*p+h*E+f*C,o[2]=d*v+g*y+_*b,o[5]=d*m+g*x+_*R,o[8]=d*p+g*E+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8];return t*a*h-t*l*u-n*o*h+n*l*c+s*o*u-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8],f=h*a-l*u,d=l*c-h*o,g=u*o-a*c,_=t*f+n*d+s*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(s*u-h*n)*v,e[2]=(l*n-s*a)*v,e[3]=d*v,e[4]=(h*t-s*c)*v,e[5]=(s*o-l*t)*v,e[6]=g*v,e[7]=(n*c-u*t)*v,e[8]=(a*t-n*o)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,o,a,l){const c=Math.cos(o),u=Math.sin(o);return this.set(n*c,n*u,-n*(c*a+u*l)+a+e,-s*u,s*c,-s*(-u*a+c*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(ga.makeScale(e,t)),this}rotate(e){return this.premultiply(ga.makeRotation(-e)),this}translate(e,t){return this.premultiply(ga.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ga=new We;function od(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function am(){const i=gr("canvas");return i.style.display="block",i}const ru={};function rr(i){i in ru||(ru[i]=!0,console.warn(i))}const ou=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),au=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fr={[li]:{transfer:Po,primaries:Lo,toReference:i=>i,fromReference:i=>i},[Ht]:{transfer:dt,primaries:Lo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ko]:{transfer:Po,primaries:No,toReference:i=>i.applyMatrix3(au),fromReference:i=>i.applyMatrix3(ou)},[Vl]:{transfer:dt,primaries:No,toReference:i=>i.convertSRGBToLinear().applyMatrix3(au),fromReference:i=>i.applyMatrix3(ou).convertLinearToSRGB()}},lm=new Set([li,ko]),rt={enabled:!0,_workingColorSpace:li,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!lm.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Fr[e].toReference,s=Fr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Fr[i].primaries},getTransfer:function(i){return i===gn?Po:Fr[i].transfer}};function vs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _a(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ki;class ad{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ki===void 0&&(Ki=gr("canvas")),Ki.width=e.width,Ki.height=e.height;const n=Ki.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),o=s.data;for(let a=0;a<o.length;a++)o[a]=vs(o[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vs(t[n]/255)*255):t[n]=vs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cm=0;class ld{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=Ps(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?o.push(va(s[a].image)):o.push(va(s[a]))}else o=va(s);n.url=o}return t||(e.images[this.uuid]=n),n}}function va(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ad.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let um=0;class nn extends Cs{constructor(e=nn.DEFAULT_IMAGE,t=nn.DEFAULT_MAPPING,n=An,s=An,o=fn,a=fr,l=Rn,c=bi,u=nn.DEFAULT_ANISOTROPY,h=gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=Ps(),this.name="",this.source=new ld(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Wi?Ht:gn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dr:e.x=e.x-Math.floor(e.x);break;case An:e.x=e.x<0?0:1;break;case fl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dr:e.y=e.y-Math.floor(e.y);break;case An:e.y=e.y<0?0:1;break;case fl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ht?Wi:rd}set encoding(e){rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Wi?Ht:gn}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Jh;nn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,t=0,n=0,s=1){zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*o,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*o,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*o,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,o;const c=e.elements,u=c[0],h=c[4],f=c[8],d=c[1],g=c[5],_=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(u+g+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,E=(g+1)/2,b=(p+1)/2,R=(h+d)/4,C=(f+v)/4,k=(_+m)/4;return x>E&&x>b?x<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(x),s=R/n,o=C/n):E>b?E<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(E),n=R/s,o=k/s):b<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(b),n=C/o,s=k/o),this.set(n,s,o,t),this}let y=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(f-v)/y,this.z=(d-h)/y,this.w=Math.acos((u+g+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hm extends Cs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(rr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Wi?Ht:gn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new nn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ld(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends hm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class cd extends nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dm extends nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Er=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,o,a,l){let c=n[s+0],u=n[s+1],h=n[s+2],f=n[s+3];const d=o[a+0],g=o[a+1],_=o[a+2],v=o[a+3];if(l===0){e[t+0]=c,e[t+1]=u,e[t+2]=h,e[t+3]=f;return}if(l===1){e[t+0]=d,e[t+1]=g,e[t+2]=_,e[t+3]=v;return}if(f!==v||c!==d||u!==g||h!==_){let m=1-l;const p=c*d+u*g+h*_+f*v,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const b=Math.sqrt(x),R=Math.atan2(b,p*y);m=Math.sin(m*R)/b,l=Math.sin(l*R)/b}const E=l*y;if(c=c*m+d*E,u=u*m+g*E,h=h*m+_*E,f=f*m+v*E,m===1-l){const b=1/Math.sqrt(c*c+u*u+h*h+f*f);c*=b,u*=b,h*=b,f*=b}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,o,a){const l=n[s],c=n[s+1],u=n[s+2],h=n[s+3],f=o[a],d=o[a+1],g=o[a+2],_=o[a+3];return e[t]=l*_+h*f+c*g-u*d,e[t+1]=c*_+h*d+u*f-l*g,e[t+2]=u*_+h*g+l*d-c*f,e[t+3]=h*_-l*f-c*d-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,s=e._y,o=e._z,a=e._order,l=Math.cos,c=Math.sin,u=l(n/2),h=l(s/2),f=l(o/2),d=c(n/2),g=c(s/2),_=c(o/2);switch(a){case"XYZ":this._x=d*h*f+u*g*_,this._y=u*g*f-d*h*_,this._z=u*h*_+d*g*f,this._w=u*h*f-d*g*_;break;case"YXZ":this._x=d*h*f+u*g*_,this._y=u*g*f-d*h*_,this._z=u*h*_-d*g*f,this._w=u*h*f+d*g*_;break;case"ZXY":this._x=d*h*f-u*g*_,this._y=u*g*f+d*h*_,this._z=u*h*_+d*g*f,this._w=u*h*f-d*g*_;break;case"ZYX":this._x=d*h*f-u*g*_,this._y=u*g*f+d*h*_,this._z=u*h*_-d*g*f,this._w=u*h*f+d*g*_;break;case"YZX":this._x=d*h*f+u*g*_,this._y=u*g*f+d*h*_,this._z=u*h*_-d*g*f,this._w=u*h*f-d*g*_;break;case"XZY":this._x=d*h*f-u*g*_,this._y=u*g*f-d*h*_,this._z=u*h*_+d*g*f,this._w=u*h*f+d*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],o=t[8],a=t[1],l=t[5],c=t[9],u=t[2],h=t[6],f=t[10],d=n+l+f;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(h-c)*g,this._y=(o-u)*g,this._z=(a-s)*g}else if(n>l&&n>f){const g=2*Math.sqrt(1+n-l-f);this._w=(h-c)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(o+u)/g}else if(l>f){const g=2*Math.sqrt(1+l-n-f);this._w=(o-u)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(c+h)/g}else{const g=2*Math.sqrt(1+f-n-l);this._w=(a-s)/g,this._x=(o+u)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,o=e._z,a=e._w,l=t._x,c=t._y,u=t._z,h=t._w;return this._x=n*h+a*l+s*u-o*c,this._y=s*h+a*c+o*l-n*u,this._z=o*h+a*u+n*c-s*l,this._w=a*h-n*l-s*c-o*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,o=this._z,a=this._w;let l=a*e._w+n*e._x+s*e._y+o*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=a,this._x=n,this._y=s,this._z=o,this;const c=1-l*l;if(c<=Number.EPSILON){const g=1-t;return this._w=g*a+t*this._w,this._x=g*n+t*this._x,this._y=g*s+t*this._y,this._z=g*o+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(c),h=Math.atan2(u,l),f=Math.sin((1-t)*h)/u,d=Math.sin(t*h)/u;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=o*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(o),n*Math.cos(o),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*s,this.y=o[1]*t+o[4]*n+o[7]*s,this.z=o[2]*t+o[5]*n+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=e.elements,a=1/(o[3]*t+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*s+o[12])*a,this.y=(o[1]*t+o[5]*n+o[9]*s+o[13])*a,this.z=(o[2]*t+o[6]*n+o[10]*s+o[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,o=e.x,a=e.y,l=e.z,c=e.w,u=2*(a*s-l*n),h=2*(l*t-o*s),f=2*(o*n-a*t);return this.x=t+c*u+a*f-l*h,this.y=n+c*h+l*u-o*f,this.z=s+c*f+o*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s,this.y=o[1]*t+o[5]*n+o[9]*s,this.z=o[2]*t+o[6]*n+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,o=e.z,a=t.x,l=t.y,c=t.z;return this.x=s*c-o*l,this.y=o*a-n*c,this.z=n*l-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ya.copy(this).projectOnVector(e),this.sub(ya)}reflect(e){return this.sub(ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ya=new U,lu=new Er;class Ls{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=o.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,xn):xn.fromBufferAttribute(o,a),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Or.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Or.copy(n.boundingBox)),Or.applyMatrix4(e.matrixWorld),this.union(Or)}const s=e.children;for(let o=0,a=s.length;o<a;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ks),Br.subVectors(this.max,ks),Zi.subVectors(e.a,ks),Ji.subVectors(e.b,ks),Qi.subVectors(e.c,ks),di.subVectors(Ji,Zi),fi.subVectors(Qi,Ji),Li.subVectors(Zi,Qi);let t=[0,-di.z,di.y,0,-fi.z,fi.y,0,-Li.z,Li.y,di.z,0,-di.x,fi.z,0,-fi.x,Li.z,0,-Li.x,-di.y,di.x,0,-fi.y,fi.x,0,-Li.y,Li.x,0];return!xa(t,Zi,Ji,Qi,Br)||(t=[1,0,0,0,1,0,0,0,1],!xa(t,Zi,Ji,Qi,Br))?!1:(zr.crossVectors(di,fi),t=[zr.x,zr.y,zr.z],xa(t,Zi,Ji,Qi,Br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xn=[new U,new U,new U,new U,new U,new U,new U,new U],xn=new U,Or=new Ls,Zi=new U,Ji=new U,Qi=new U,di=new U,fi=new U,Li=new U,ks=new U,Br=new U,zr=new U,Ni=new U;function xa(i,e,t,n,s){for(let o=0,a=i.length-3;o<=a;o+=3){Ni.fromArray(i,o);const l=s.x*Math.abs(Ni.x)+s.y*Math.abs(Ni.y)+s.z*Math.abs(Ni.z),c=e.dot(Ni),u=t.dot(Ni),h=n.dot(Ni);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>l)return!1}return!0}const fm=new Ls,Vs=new U,Sa=new U;let wr=class{constructor(e=new U,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):fm.setFromPoints(e).getCenter(n);let s=0;for(let o=0,a=e.length;o<a;o++)s=Math.max(s,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vs.subVectors(e,this.center);const t=Vs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Vs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vs.copy(e.center).add(Sa)),this.expandByPoint(Vs.copy(e.center).sub(Sa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};const jn=new U,Ea=new U,kr=new U,pi=new U,wa=new U,Vr=new U,Ma=new U;let Vo=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ea.copy(e).add(t).multiplyScalar(.5),kr.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(Ea);const o=e.distanceTo(t)*.5,a=-this.direction.dot(kr),l=pi.dot(this.direction),c=-pi.dot(kr),u=pi.lengthSq(),h=Math.abs(1-a*a);let f,d,g,_;if(h>0)if(f=a*c-l,d=a*l-c,_=o*h,f>=0)if(d>=-_)if(d<=_){const v=1/h;f*=v,d*=v,g=f*(f+a*d+2*l)+d*(a*f+d+2*c)+u}else d=o,f=Math.max(0,-(a*d+l)),g=-f*f+d*(d+2*c)+u;else d=-o,f=Math.max(0,-(a*d+l)),g=-f*f+d*(d+2*c)+u;else d<=-_?(f=Math.max(0,-(-a*o+l)),d=f>0?-o:Math.min(Math.max(-o,-c),o),g=-f*f+d*(d+2*c)+u):d<=_?(f=0,d=Math.min(Math.max(-o,-c),o),g=d*(d+2*c)+u):(f=Math.max(0,-(a*o+l)),d=f>0?o:Math.min(Math.max(-o,-c),o),g=-f*f+d*(d+2*c)+u);else d=a>0?-o:o,f=Math.max(0,-(a*d+l)),g=-f*f+d*(d+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ea).addScaledVector(kr,d),g}intersectSphere(e,t){jn.subVectors(e.center,this.origin);const n=jn.dot(this.direction),s=jn.dot(jn)-n*n,o=e.radius*e.radius;if(s>o)return null;const a=Math.sqrt(o-s),l=n-a,c=n+a;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,o,a,l,c;const u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(n=(e.min.x-d.x)*u,s=(e.max.x-d.x)*u):(n=(e.max.x-d.x)*u,s=(e.min.x-d.x)*u),h>=0?(o=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(o=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||o>s||((o>n||isNaN(n))&&(n=o),(a<s||isNaN(s))&&(s=a),f>=0?(l=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(l=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||l>s)||((l>n||n!==n)&&(n=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,n,s,o){wa.subVectors(t,e),Vr.subVectors(n,e),Ma.crossVectors(wa,Vr);let a=this.direction.dot(Ma),l;if(a>0){if(s)return null;l=1}else if(a<0)l=-1,a=-a;else return null;pi.subVectors(this.origin,e);const c=l*this.direction.dot(Vr.crossVectors(pi,Vr));if(c<0)return null;const u=l*this.direction.dot(wa.cross(pi));if(u<0||c+u>a)return null;const h=-l*pi.dot(Ma);return h<0?null:this.at(h/a,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Ct{constructor(e,t,n,s,o,a,l,c,u,h,f,d,g,_,v,m){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,a,l,c,u,h,f,d,g,_,v,m)}set(e,t,n,s,o,a,l,c,u,h,f,d,g,_,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=o,p[5]=a,p[9]=l,p[13]=c,p[2]=u,p[6]=h,p[10]=f,p[14]=d,p[3]=g,p[7]=_,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/es.setFromMatrixColumn(e,0).length(),o=1/es.setFromMatrixColumn(e,1).length(),a=1/es.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,o=e.z,a=Math.cos(n),l=Math.sin(n),c=Math.cos(s),u=Math.sin(s),h=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const d=a*h,g=a*f,_=l*h,v=l*f;t[0]=c*h,t[4]=-c*f,t[8]=u,t[1]=g+_*u,t[5]=d-v*u,t[9]=-l*c,t[2]=v-d*u,t[6]=_+g*u,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,g=c*f,_=u*h,v=u*f;t[0]=d+v*l,t[4]=_*l-g,t[8]=a*u,t[1]=a*f,t[5]=a*h,t[9]=-l,t[2]=g*l-_,t[6]=v+d*l,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,g=c*f,_=u*h,v=u*f;t[0]=d-v*l,t[4]=-a*f,t[8]=_+g*l,t[1]=g+_*l,t[5]=a*h,t[9]=v-d*l,t[2]=-a*u,t[6]=l,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,g=a*f,_=l*h,v=l*f;t[0]=c*h,t[4]=_*u-g,t[8]=d*u+v,t[1]=c*f,t[5]=v*u+d,t[9]=g*u-_,t[2]=-u,t[6]=l*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,g=a*u,_=l*c,v=l*u;t[0]=c*h,t[4]=v-d*f,t[8]=_*f+g,t[1]=f,t[5]=a*h,t[9]=-l*h,t[2]=-u*h,t[6]=g*f+_,t[10]=d-v*f}else if(e.order==="XZY"){const d=a*c,g=a*u,_=l*c,v=l*u;t[0]=c*h,t[4]=-f,t[8]=u*h,t[1]=d*f+v,t[5]=a*h,t[9]=g*f-_,t[2]=_*f-g,t[6]=l*h,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pm,e,mm)}lookAt(e,t,n){const s=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),mi.crossVectors(n,an),mi.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),mi.crossVectors(n,an)),mi.normalize(),Hr.crossVectors(an,mi),s[0]=mi.x,s[4]=Hr.x,s[8]=an.x,s[1]=mi.y,s[5]=Hr.y,s[9]=an.y,s[2]=mi.z,s[6]=Hr.z,s[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,a=n[0],l=n[4],c=n[8],u=n[12],h=n[1],f=n[5],d=n[9],g=n[13],_=n[2],v=n[6],m=n[10],p=n[14],y=n[3],x=n[7],E=n[11],b=n[15],R=s[0],C=s[4],k=s[8],w=s[12],A=s[1],H=s[5],j=s[9],B=s[13],L=s[2],I=s[6],D=s[10],W=s[14],Z=s[3],$=s[7],J=s[11],O=s[15];return o[0]=a*R+l*A+c*L+u*Z,o[4]=a*C+l*H+c*I+u*$,o[8]=a*k+l*j+c*D+u*J,o[12]=a*w+l*B+c*W+u*O,o[1]=h*R+f*A+d*L+g*Z,o[5]=h*C+f*H+d*I+g*$,o[9]=h*k+f*j+d*D+g*J,o[13]=h*w+f*B+d*W+g*O,o[2]=_*R+v*A+m*L+p*Z,o[6]=_*C+v*H+m*I+p*$,o[10]=_*k+v*j+m*D+p*J,o[14]=_*w+v*B+m*W+p*O,o[3]=y*R+x*A+E*L+b*Z,o[7]=y*C+x*H+E*I+b*$,o[11]=y*k+x*j+E*D+b*J,o[15]=y*w+x*B+E*W+b*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],o=e[12],a=e[1],l=e[5],c=e[9],u=e[13],h=e[2],f=e[6],d=e[10],g=e[14],_=e[3],v=e[7],m=e[11],p=e[15];return _*(+o*c*f-s*u*f-o*l*d+n*u*d+s*l*g-n*c*g)+v*(+t*c*g-t*u*d+o*a*d-s*a*g+s*u*h-o*c*h)+m*(+t*u*f-t*l*g-o*a*f+n*a*g+o*l*h-n*u*h)+p*(-s*l*h-t*c*f+t*l*d+s*a*f-n*a*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8],f=e[9],d=e[10],g=e[11],_=e[12],v=e[13],m=e[14],p=e[15],y=f*m*u-v*d*u+v*c*g-l*m*g-f*c*p+l*d*p,x=_*d*u-h*m*u-_*c*g+a*m*g+h*c*p-a*d*p,E=h*v*u-_*f*u+_*l*g-a*v*g-h*l*p+a*f*p,b=_*f*c-h*v*c-_*l*d+a*v*d+h*l*m-a*f*m,R=t*y+n*x+s*E+o*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=y*C,e[1]=(v*d*o-f*m*o-v*s*g+n*m*g+f*s*p-n*d*p)*C,e[2]=(l*m*o-v*c*o+v*s*u-n*m*u-l*s*p+n*c*p)*C,e[3]=(f*c*o-l*d*o-f*s*u+n*d*u+l*s*g-n*c*g)*C,e[4]=x*C,e[5]=(h*m*o-_*d*o+_*s*g-t*m*g-h*s*p+t*d*p)*C,e[6]=(_*c*o-a*m*o-_*s*u+t*m*u+a*s*p-t*c*p)*C,e[7]=(a*d*o-h*c*o+h*s*u-t*d*u-a*s*g+t*c*g)*C,e[8]=E*C,e[9]=(_*f*o-h*v*o-_*n*g+t*v*g+h*n*p-t*f*p)*C,e[10]=(a*v*o-_*l*o+_*n*u-t*v*u-a*n*p+t*l*p)*C,e[11]=(h*l*o-a*f*o-h*n*u+t*f*u+a*n*g-t*l*g)*C,e[12]=b*C,e[13]=(h*v*s-_*f*s+_*n*d-t*v*d-h*n*m+t*f*m)*C,e[14]=(_*l*s-a*v*s-_*n*c+t*v*c+a*n*m-t*l*m)*C,e[15]=(a*f*s-h*l*s+h*n*c-t*f*c-a*n*d+t*l*d)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,o=e.z;return t[0]*=n,t[4]*=s,t[8]*=o,t[1]*=n,t[5]*=s,t[9]*=o,t[2]*=n,t[6]*=s,t[10]*=o,t[3]*=n,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),o=1-n,a=e.x,l=e.y,c=e.z,u=o*a,h=o*l;return this.set(u*a+n,u*l-s*c,u*c+s*l,0,u*l+s*c,h*l+n,h*c-s*a,0,u*c-s*l,h*c+s*a,o*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,o,a){return this.set(1,n,o,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,o=t._x,a=t._y,l=t._z,c=t._w,u=o+o,h=a+a,f=l+l,d=o*u,g=o*h,_=o*f,v=a*h,m=a*f,p=l*f,y=c*u,x=c*h,E=c*f,b=n.x,R=n.y,C=n.z;return s[0]=(1-(v+p))*b,s[1]=(g+E)*b,s[2]=(_-x)*b,s[3]=0,s[4]=(g-E)*R,s[5]=(1-(d+p))*R,s[6]=(m+y)*R,s[7]=0,s[8]=(_+x)*C,s[9]=(m-y)*C,s[10]=(1-(d+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let o=es.set(s[0],s[1],s[2]).length();const a=es.set(s[4],s[5],s[6]).length(),l=es.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],Sn.copy(this);const u=1/o,h=1/a,f=1/l;return Sn.elements[0]*=u,Sn.elements[1]*=u,Sn.elements[2]*=u,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=f,Sn.elements[9]*=f,Sn.elements[10]*=f,t.setFromRotationMatrix(Sn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,o,a,l=oi){const c=this.elements,u=2*o/(t-e),h=2*o/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s);let g,_;if(l===oi)g=-(a+o)/(a-o),_=-2*a*o/(a-o);else if(l===Io)g=-a/(a-o),_=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,o,a,l=oi){const c=this.elements,u=1/(t-e),h=1/(n-s),f=1/(a-o),d=(t+e)*u,g=(n+s)*h;let _,v;if(l===oi)_=(a+o)*f,v=-2*f;else if(l===Io)_=o*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=v,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const es=new U,Sn=new Ct,pm=new U(0,0,0),mm=new U(1,1,1),mi=new U,Hr=new U,an=new U,cu=new Ct,uu=new Er;class Ai{constructor(e=0,t=0,n=0,s=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,o=s[0],a=s[4],l=s[8],c=s[1],u=s[5],h=s[9],f=s[2],d=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return cu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uu.setFromEuler(this),this.setFromQuaternion(uu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class ud{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gm=0;const hu=new U,ts=new Er,Yn=new Ct,Gr=new U,Hs=new U,_m=new U,vm=new Er,du=new U(1,0,0),fu=new U(0,1,0),pu=new U(0,0,1),ym={type:"added"},xm={type:"removed"};class Qt extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=Ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new U,t=new Ai,n=new Er,s=new U(1,1,1);function o(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ct},normalMatrix:{value:new We}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ud,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(du,e)}rotateY(e){return this.rotateOnAxis(fu,e)}rotateZ(e){return this.rotateOnAxis(pu,e)}translateOnAxis(e,t){return hu.copy(e).applyQuaternion(this.quaternion),this.position.add(hu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(du,e)}translateY(e){return this.translateOnAxis(fu,e)}translateZ(e){return this.translateOnAxis(pu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Gr.copy(e):Gr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Hs,Gr,this.up):Yn.lookAt(Gr,Hs,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),ts.setFromRotationMatrix(Yn),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ym)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xm)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let s=0,o=this.children.length;s<o;s++){const a=this.children[s].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,e,_m),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,vm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const o=t[n];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++){const l=s[o];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function o(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const f=c[u];o(e.shapes,f)}else o(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(o(e.materials,this.material[c]));s.material=l}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];s.animations.push(o(e.animations,c))}}if(t){const l=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),g=a(e.animations),_=a(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),g.length>0&&(n.animations=g),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(l){const c=[];for(const u in l){const h=l[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Qt.DEFAULT_UP=new U(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new U,$n=new U,ba=new U,Kn=new U,ns=new U,is=new U,mu=new U,Ta=new U,Aa=new U,Ra=new U;let Wr=!1;class Tn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),En.subVectors(e,t),s.cross(En);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,n,s,o){En.subVectors(s,t),$n.subVectors(n,t),ba.subVectors(e,t);const a=En.dot(En),l=En.dot($n),c=En.dot(ba),u=$n.dot($n),h=$n.dot(ba),f=a*u-l*l;if(f===0)return o.set(-2,-1,-1);const d=1/f,g=(u*c-l*h)*d,_=(a*h-l*c)*d;return o.set(1-g-_,_,g)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Kn),Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getUV(e,t,n,s,o,a,l,c){return Wr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wr=!0),this.getInterpolation(e,t,n,s,o,a,l,c)}static getInterpolation(e,t,n,s,o,a,l,c){return this.getBarycoord(e,t,n,s,Kn),c.setScalar(0),c.addScaledVector(o,Kn.x),c.addScaledVector(a,Kn.y),c.addScaledVector(l,Kn.z),c}static isFrontFacing(e,t,n,s){return En.subVectors(n,t),$n.subVectors(e,t),En.cross($n).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),En.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,o){return Wr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wr=!0),Tn.getInterpolation(e,this.a,this.b,this.c,t,n,s,o)}getInterpolation(e,t,n,s,o){return Tn.getInterpolation(e,this.a,this.b,this.c,t,n,s,o)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,o=this.c;let a,l;ns.subVectors(s,n),is.subVectors(o,n),Ta.subVectors(e,n);const c=ns.dot(Ta),u=is.dot(Ta);if(c<=0&&u<=0)return t.copy(n);Aa.subVectors(e,s);const h=ns.dot(Aa),f=is.dot(Aa);if(h>=0&&f<=h)return t.copy(s);const d=c*f-h*u;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(ns,a);Ra.subVectors(e,o);const g=ns.dot(Ra),_=is.dot(Ra);if(_>=0&&g<=_)return t.copy(o);const v=g*u-c*_;if(v<=0&&u>=0&&_<=0)return l=u/(u-_),t.copy(n).addScaledVector(is,l);const m=h*_-g*f;if(m<=0&&f-h>=0&&g-_>=0)return mu.subVectors(o,s),l=(f-h)/(f-h+(g-_)),t.copy(s).addScaledVector(mu,l);const p=1/(m+v+d);return a=v*p,l=d*p,t.copy(n).addScaledVector(ns,a).addScaledVector(is,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},qr={h:0,s:0,l:0};function Ca(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=rt.workingColorSpace){if(e=Hl(e,1),t=Jt(t,0,1),n=Jt(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,a=2*n-o;this.r=Ca(a,o,e+1/3),this.g=Ca(a,o,e),this.b=Ca(a,o,e-1/3)}return rt.toWorkingColorSpace(this,s),this}setStyle(e,t=Ht){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){const n=hd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}copyLinearToSRGB(e){return this.r=_a(e.r),this.g=_a(e.g),this.b=_a(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return rt.fromWorkingColorSpace(Wt.copy(this),e),Math.round(Jt(Wt.r*255,0,255))*65536+Math.round(Jt(Wt.g*255,0,255))*256+Math.round(Jt(Wt.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Wt.copy(this),t);const n=Wt.r,s=Wt.g,o=Wt.b,a=Math.max(n,s,o),l=Math.min(n,s,o);let c,u;const h=(l+a)/2;if(l===a)c=0,u=0;else{const f=a-l;switch(u=h<=.5?f/(a+l):f/(2-a-l),a){case n:c=(s-o)/f+(s<o?6:0);break;case s:c=(o-n)/f+2;break;case o:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Ht){rt.fromWorkingColorSpace(Wt.copy(this),e);const t=Wt.r,n=Wt.g,s=Wt.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(gi),this.setHSL(gi.h+e,gi.s+t,gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gi),e.getHSL(qr);const n=sr(gi.h,qr.h,t),s=sr(gi.s,qr.s,t),o=sr(gi.l,qr.l,t);return this.setHSL(n,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*s,this.g=o[1]*t+o[4]*n+o[7]*s,this.b=o[2]*t+o[5]*n+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new Xe;Xe.NAMES=hd;let Sm=0,Ns=class extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=Ps(),this.name="",this.type="Material",this.blending=_s,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cl,this.blendDst=ul,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(n.blending=this.blending),this.side!==Ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cl&&(n.blendSrc=this.blendSrc),this.blendDst!==ul&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Co&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const a=[];for(const l in o){const c=o[l];delete c.metadata,a.push(c)}return a}if(t){const o=s(e.textures),a=s(e.images);o.length>0&&(n.textures=o),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};class tt extends Ns{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new U,Xr=new it;class vn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=nu,this.updateRange={offset:0,count:-1},this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xr.fromBufferAttribute(this,t),Xr.applyMatrix3(e),this.setXY(t,Xr.x,Xr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ps(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ps(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ps(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ps(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ps(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array),s=Yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array),s=Yt(s,this.array),o=Yt(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class dd extends vn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class fd extends vn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ot extends vn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Em=0;const hn=new Ct,Pa=new Qt,ss=new U,ln=new Ls,Gs=new Ls,Ot=new U;class sn extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=Ps(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(od(e)?fd:dd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new We().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this}scale(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this}lookAt(e){return Pa.lookAt(e),Pa.updateMatrix(),this.applyMatrix4(Pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const o=e[n];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new ot(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const o=t[n];ln.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let o=0,a=t.length;o<a;o++){const l=t[o];Gs.setFromBufferAttribute(l),this.morphTargetsRelative?(Ot.addVectors(ln.min,Gs.min),ln.expandByPoint(Ot),Ot.addVectors(ln.max,Gs.max),ln.expandByPoint(Ot)):(ln.expandByPoint(Gs.min),ln.expandByPoint(Gs.max))}ln.getCenter(n);let s=0;for(let o=0,a=e.count;o<a;o++)Ot.fromBufferAttribute(e,o),s=Math.max(s,n.distanceToSquared(Ot));if(t)for(let o=0,a=t.length;o<a;o++){const l=t[o],c=this.morphTargetsRelative;for(let u=0,h=l.count;u<h;u++)Ot.fromBufferAttribute(l,u),c&&(ss.fromBufferAttribute(e,u),Ot.add(ss)),s=Math.max(s,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,o=t.normal.array,a=t.uv.array,l=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*l),4));const c=this.getAttribute("tangent").array,u=[],h=[];for(let A=0;A<l;A++)u[A]=new U,h[A]=new U;const f=new U,d=new U,g=new U,_=new it,v=new it,m=new it,p=new U,y=new U;function x(A,H,j){f.fromArray(s,A*3),d.fromArray(s,H*3),g.fromArray(s,j*3),_.fromArray(a,A*2),v.fromArray(a,H*2),m.fromArray(a,j*2),d.sub(f),g.sub(f),v.sub(_),m.sub(_);const B=1/(v.x*m.y-m.x*v.y);isFinite(B)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(g,-v.y).multiplyScalar(B),y.copy(g).multiplyScalar(v.x).addScaledVector(d,-m.x).multiplyScalar(B),u[A].add(p),u[H].add(p),u[j].add(p),h[A].add(y),h[H].add(y),h[j].add(y))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let A=0,H=E.length;A<H;++A){const j=E[A],B=j.start,L=j.count;for(let I=B,D=B+L;I<D;I+=3)x(n[I+0],n[I+1],n[I+2])}const b=new U,R=new U,C=new U,k=new U;function w(A){C.fromArray(o,A*3),k.copy(C);const H=u[A];b.copy(H),b.sub(C.multiplyScalar(C.dot(H))).normalize(),R.crossVectors(k,H);const B=R.dot(h[A])<0?-1:1;c[A*4]=b.x,c[A*4+1]=b.y,c[A*4+2]=b.z,c[A*4+3]=B}for(let A=0,H=E.length;A<H;++A){const j=E[A],B=j.start,L=j.count;for(let I=B,D=B+L;I<D;I+=3)w(n[I+0]),w(n[I+1]),w(n[I+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,g=n.count;d<g;d++)n.setXYZ(d,0,0,0);const s=new U,o=new U,a=new U,l=new U,c=new U,u=new U,h=new U,f=new U;if(e)for(let d=0,g=e.count;d<g;d+=3){const _=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,o),f.subVectors(s,o),h.cross(f),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,m),l.add(h),c.add(h),u.add(h),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,g=t.count;d<g;d+=3)s.fromBufferAttribute(t,d+0),o.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,o),f.subVectors(s,o),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(l,c){const u=l.array,h=l.itemSize,f=l.normalized,d=new u.constructor(c.length*h);let g=0,_=0;for(let v=0,m=c.length;v<m;v++){l.isInterleavedBufferAttribute?g=c[v]*l.data.stride+l.offset:g=c[v]*h;for(let p=0;p<h;p++)d[_++]=u[g++]}return new vn(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,n=this.index.array,s=this.attributes;for(const l in s){const c=s[l],u=e(c,n);t.setAttribute(l,u)}const o=this.morphAttributes;for(const l in o){const c=[],u=o[l];for(let h=0,f=u.length;h<f;h++){const d=u[h],g=e(d,n);c.push(g)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,c=a.length;l<c;l++){const u=a[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const s={};let o=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let f=0,d=u.length;f<d;f++){const g=u[f];h.push(g.toJSON(e.data))}h.length>0&&(s[c]=h,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const u in s){const h=s[u];this.setAttribute(u,h.clone(t))}const o=e.morphAttributes;for(const u in o){const h=[],f=o[u];for(let d=0,g=f.length;d<g;d++)h.push(f[d].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gu=new Ct,Ii=new Vo,jr=new wr,_u=new U,rs=new U,os=new U,as=new U,La=new U,Yr=new U,$r=new it,Kr=new it,Zr=new it,vu=new U,yu=new U,xu=new U,Jr=new U,Qr=new U;class Pe extends Qt{constructor(e=new sn,t=new tt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const l=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const l=this.morphTargetInfluences;if(o&&l){Yr.set(0,0,0);for(let c=0,u=o.length;c<u;c++){const h=l[c],f=o[c];h!==0&&(La.fromBufferAttribute(f,e),a?Yr.addScaledVector(La,h):Yr.addScaledVector(La.sub(t),h))}t.add(Yr)}return t}raycast(e,t){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(o),Ii.copy(e.ray).recast(e.near),!(jr.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(jr,_u)===null||Ii.origin.distanceToSquared(_u)>(e.far-e.near)**2))&&(gu.copy(o).invert(),Ii.copy(e.ray).applyMatrix4(gu),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,n){let s;const o=this.geometry,a=this.material,l=o.index,c=o.attributes.position,u=o.attributes.uv,h=o.attributes.uv1,f=o.attributes.normal,d=o.groups,g=o.drawRange;if(l!==null)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){const m=d[_],p=a[m.materialIndex],y=Math.max(m.start,g.start),x=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let E=y,b=x;E<b;E+=3){const R=l.getX(E),C=l.getX(E+1),k=l.getX(E+2);s=eo(this,p,e,n,u,h,f,R,C,k),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,g.start),v=Math.min(l.count,g.start+g.count);for(let m=_,p=v;m<p;m+=3){const y=l.getX(m),x=l.getX(m+1),E=l.getX(m+2);s=eo(this,a,e,n,u,h,f,y,x,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){const m=d[_],p=a[m.materialIndex],y=Math.max(m.start,g.start),x=Math.min(c.count,Math.min(m.start+m.count,g.start+g.count));for(let E=y,b=x;E<b;E+=3){const R=E,C=E+1,k=E+2;s=eo(this,p,e,n,u,h,f,R,C,k),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,g.start),v=Math.min(c.count,g.start+g.count);for(let m=_,p=v;m<p;m+=3){const y=m,x=m+1,E=m+2;s=eo(this,a,e,n,u,h,f,y,x,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function wm(i,e,t,n,s,o,a,l){let c;if(e.side===tn?c=n.intersectTriangle(a,o,s,!0,l):c=n.intersectTriangle(s,o,a,e.side===Ti,l),c===null)return null;Qr.copy(l),Qr.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(Qr);return u<t.near||u>t.far?null:{distance:u,point:Qr.clone(),object:i}}function eo(i,e,t,n,s,o,a,l,c,u){i.getVertexPosition(l,rs),i.getVertexPosition(c,os),i.getVertexPosition(u,as);const h=wm(i,e,t,n,rs,os,as,Jr);if(h){s&&($r.fromBufferAttribute(s,l),Kr.fromBufferAttribute(s,c),Zr.fromBufferAttribute(s,u),h.uv=Tn.getInterpolation(Jr,rs,os,as,$r,Kr,Zr,new it)),o&&($r.fromBufferAttribute(o,l),Kr.fromBufferAttribute(o,c),Zr.fromBufferAttribute(o,u),h.uv1=Tn.getInterpolation(Jr,rs,os,as,$r,Kr,Zr,new it),h.uv2=h.uv1),a&&(vu.fromBufferAttribute(a,l),yu.fromBufferAttribute(a,c),xu.fromBufferAttribute(a,u),h.normal=Tn.getInterpolation(Jr,rs,os,as,vu,yu,xu,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:l,b:c,c:u,normal:new U,materialIndex:0};Tn.getNormal(rs,os,as,f.normal),h.face=f}return h}class ft extends sn{constructor(e=1,t=1,n=1,s=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:o,depthSegments:a};const l=this;s=Math.floor(s),o=Math.floor(o),a=Math.floor(a);const c=[],u=[],h=[],f=[];let d=0,g=0;_("z","y","x",-1,-1,n,t,e,a,o,0),_("z","y","x",1,-1,n,t,-e,a,o,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,o,4),_("x","y","z",-1,-1,e,t,-n,s,o,5),this.setIndex(c),this.setAttribute("position",new ot(u,3)),this.setAttribute("normal",new ot(h,3)),this.setAttribute("uv",new ot(f,2));function _(v,m,p,y,x,E,b,R,C,k,w){const A=E/C,H=b/k,j=E/2,B=b/2,L=R/2,I=C+1,D=k+1;let W=0,Z=0;const $=new U;for(let J=0;J<D;J++){const O=J*H-B;for(let z=0;z<I;z++){const ue=z*A-j;$[v]=ue*y,$[m]=O*x,$[p]=L,u.push($.x,$.y,$.z),$[v]=0,$[m]=0,$[p]=R>0?1:-1,h.push($.x,$.y,$.z),f.push(z/C),f.push(1-J/k),W+=1}}for(let J=0;J<k;J++)for(let O=0;O<C;O++){const z=d+O+I*J,ue=d+O+I*(J+1),de=d+(O+1)+I*(J+1),me=d+(O+1)+I*J;c.push(z,ue,me),c.push(ue,de,me),Z+=6}l.addGroup(g,Z,w),g+=Z,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ft(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ms(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function $t(i){const e={};for(let t=0;t<i.length;t++){const n=Ms(i[t]);for(const s in n)e[s]=n[s]}return e}function Mm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function pd(i){return i.getRenderTarget()===null?i.outputColorSpace:rt.workingColorSpace}const bm={clone:Ms,merge:$t};var Tm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Am=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends Ns{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tm,this.fragmentShader=Am,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ms(e.uniforms),this.uniformsGroups=Mm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class md extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=oi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class pn extends md{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mr*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,o,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ir*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,o=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;o+=a.offsetX*s/c,t-=a.offsetY*n/u,s*=a.width/c,n*=a.height/u}const l=this.filmOffset;l!==0&&(o+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ls=-90,cs=1;class Rm extends Qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new pn(ls,cs,e,t);s.layers=this.layers,this.add(s);const o=new pn(ls,cs,e,t);o.layers=this.layers,this.add(o);const a=new pn(ls,cs,e,t);a.layers=this.layers,this.add(a);const l=new pn(ls,cs,e,t);l.layers=this.layers,this.add(l);const c=new pn(ls,cs,e,t);c.layers=this.layers,this.add(c);const u=new pn(ls,cs,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,o,a,l,c]=t;for(const u of t)this.remove(u);if(e===oi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Io)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,a,l,c,u,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,o),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,l),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,u),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,d,g),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class gd extends nn{constructor(e,t,n,s,o,a,l,c,u,h){e=e!==void 0?e:[],t=t!==void 0?t:Ss,super(e,t,n,s,o,a,l,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cm extends qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(rr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Wi?Ht:gn),this.texture=new gd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ft(5,5,5),o=new ci({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:wi});o.uniforms.tEquirect.value=t;const a=new Pe(s,o),l=t.minFilter;return t.minFilter===fr&&(t.minFilter=fn),new Rm(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(o)}}const Na=new U,Pm=new U,Lm=new We;let Fi=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Na.subVectors(n,t).cross(Pm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Na),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Lm.getNormalMatrix(e),s=this.coplanarPoint(Na).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Di=new wr,to=new U;class _d{constructor(e=new Fi,t=new Fi,n=new Fi,s=new Fi,o=new Fi,a=new Fi){this.planes=[e,t,n,s,o,a]}set(e,t,n,s,o,a){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(o),l[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=oi){const n=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],g=s[8],_=s[9],v=s[10],m=s[11],p=s[12],y=s[13],x=s[14],E=s[15];if(n[0].setComponents(c-o,d-u,m-g,E-p).normalize(),n[1].setComponents(c+o,d+u,m+g,E+p).normalize(),n[2].setComponents(c+a,d+h,m+_,E+y).normalize(),n[3].setComponents(c-a,d-h,m-_,E-y).normalize(),n[4].setComponents(c-l,d-f,m-v,E-x).normalize(),t===oi)n[5].setComponents(c+l,d+f,m+v,E+x).normalize();else if(t===Io)n[5].setComponents(l,f,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(to.x=s.normal.x>0?e.max.x:e.min.x,to.y=s.normal.y>0?e.max.y:e.min.y,to.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(to)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vd(){let i=null,e=!1,t=null,n=null;function s(o,a){t(o,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function Nm(i,e){const t=e.isWebGL2,n=new WeakMap;function s(u,h){const f=u.array,d=u.usage,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,f,d),u.onUploadCallback();let _;if(f instanceof Float32Array)_=i.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=i.SHORT;else if(f instanceof Uint32Array)_=i.UNSIGNED_INT;else if(f instanceof Int32Array)_=i.INT;else if(f instanceof Int8Array)_=i.BYTE;else if(f instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function o(u,h,f){const d=h.array,g=h.updateRange;i.bindBuffer(f,u),g.count===-1?i.bufferSubData(f,0,d):(t?i.bufferSubData(f,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count):i.bufferSubData(f,g.offset*d.BYTES_PER_ELEMENT,d.subarray(g.offset,g.offset+g.count)),g.count=-1),h.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function l(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=n.get(u);h&&(i.deleteBuffer(h.buffer),n.delete(u))}function c(u,h){if(u.isGLBufferAttribute){const d=n.get(u);(!d||d.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=n.get(u);f===void 0?n.set(u,s(u,h)):f.version<u.version&&(o(f.buffer,u,h),f.version=u.version)}return{get:a,remove:l,update:c}}class Mr extends sn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const o=e/2,a=t/2,l=Math.floor(n),c=Math.floor(s),u=l+1,h=c+1,f=e/l,d=t/c,g=[],_=[],v=[],m=[];for(let p=0;p<h;p++){const y=p*d-a;for(let x=0;x<u;x++){const E=x*f-o;_.push(E,-y,0),v.push(0,0,1),m.push(x/l),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<l;y++){const x=y+u*p,E=y+u*(p+1),b=y+1+u*(p+1),R=y+1+u*p;g.push(x,E,R),g.push(E,b,R)}this.setIndex(g),this.setAttribute("position",new ot(_,3)),this.setAttribute("normal",new ot(v,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Im=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Um=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Om=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Bm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,km=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Wm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Km=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Qm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,eg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ng=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ig=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,og=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ag="gl_FragColor = linearToOutputTexel( gl_FragColor );",lg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,cg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ug=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_g=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Mg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ag=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Pg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Lg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ng=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ig=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ug=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Og=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Bg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Xg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,jg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Yg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$g=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,e_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,t_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,n_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,i_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,s_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,r_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,o_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,a_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,l_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,c_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,u_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,h_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,d_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,f_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,p_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,m_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,g_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,__=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,v_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,y_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,x_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,E_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,M_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,b_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,T_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,A_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,R_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,C_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const P_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,L_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,O_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,B_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,z_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,k_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,V_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,G_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,W_=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,q_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Z_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,J_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,t0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,r0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,l0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,c0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:Im,alphahash_pars_fragment:Dm,alphamap_fragment:Um,alphamap_pars_fragment:Fm,alphatest_fragment:Om,alphatest_pars_fragment:Bm,aomap_fragment:zm,aomap_pars_fragment:km,begin_vertex:Vm,beginnormal_vertex:Hm,bsdfs:Gm,iridescence_fragment:Wm,bumpmap_pars_fragment:qm,clipping_planes_fragment:Xm,clipping_planes_pars_fragment:jm,clipping_planes_pars_vertex:Ym,clipping_planes_vertex:$m,color_fragment:Km,color_pars_fragment:Zm,color_pars_vertex:Jm,color_vertex:Qm,common:eg,cube_uv_reflection_fragment:tg,defaultnormal_vertex:ng,displacementmap_pars_vertex:ig,displacementmap_vertex:sg,emissivemap_fragment:rg,emissivemap_pars_fragment:og,colorspace_fragment:ag,colorspace_pars_fragment:lg,envmap_fragment:cg,envmap_common_pars_fragment:ug,envmap_pars_fragment:hg,envmap_pars_vertex:dg,envmap_physical_pars_fragment:Mg,envmap_vertex:fg,fog_vertex:pg,fog_pars_vertex:mg,fog_fragment:gg,fog_pars_fragment:_g,gradientmap_pars_fragment:vg,lightmap_fragment:yg,lightmap_pars_fragment:xg,lights_lambert_fragment:Sg,lights_lambert_pars_fragment:Eg,lights_pars_begin:wg,lights_toon_fragment:bg,lights_toon_pars_fragment:Tg,lights_phong_fragment:Ag,lights_phong_pars_fragment:Rg,lights_physical_fragment:Cg,lights_physical_pars_fragment:Pg,lights_fragment_begin:Lg,lights_fragment_maps:Ng,lights_fragment_end:Ig,logdepthbuf_fragment:Dg,logdepthbuf_pars_fragment:Ug,logdepthbuf_pars_vertex:Fg,logdepthbuf_vertex:Og,map_fragment:Bg,map_pars_fragment:zg,map_particle_fragment:kg,map_particle_pars_fragment:Vg,metalnessmap_fragment:Hg,metalnessmap_pars_fragment:Gg,morphcolor_vertex:Wg,morphnormal_vertex:qg,morphtarget_pars_vertex:Xg,morphtarget_vertex:jg,normal_fragment_begin:Yg,normal_fragment_maps:$g,normal_pars_fragment:Kg,normal_pars_vertex:Zg,normal_vertex:Jg,normalmap_pars_fragment:Qg,clearcoat_normal_fragment_begin:e_,clearcoat_normal_fragment_maps:t_,clearcoat_pars_fragment:n_,iridescence_pars_fragment:i_,opaque_fragment:s_,packing:r_,premultiplied_alpha_fragment:o_,project_vertex:a_,dithering_fragment:l_,dithering_pars_fragment:c_,roughnessmap_fragment:u_,roughnessmap_pars_fragment:h_,shadowmap_pars_fragment:d_,shadowmap_pars_vertex:f_,shadowmap_vertex:p_,shadowmask_pars_fragment:m_,skinbase_vertex:g_,skinning_pars_vertex:__,skinning_vertex:v_,skinnormal_vertex:y_,specularmap_fragment:x_,specularmap_pars_fragment:S_,tonemapping_fragment:E_,tonemapping_pars_fragment:w_,transmission_fragment:M_,transmission_pars_fragment:b_,uv_pars_fragment:T_,uv_pars_vertex:A_,uv_vertex:R_,worldpos_vertex:C_,background_vert:P_,background_frag:L_,backgroundCube_vert:N_,backgroundCube_frag:I_,cube_vert:D_,cube_frag:U_,depth_vert:F_,depth_frag:O_,distanceRGBA_vert:B_,distanceRGBA_frag:z_,equirect_vert:k_,equirect_frag:V_,linedashed_vert:H_,linedashed_frag:G_,meshbasic_vert:W_,meshbasic_frag:q_,meshlambert_vert:X_,meshlambert_frag:j_,meshmatcap_vert:Y_,meshmatcap_frag:$_,meshnormal_vert:K_,meshnormal_frag:Z_,meshphong_vert:J_,meshphong_frag:Q_,meshphysical_vert:e0,meshphysical_frag:t0,meshtoon_vert:n0,meshtoon_frag:i0,points_vert:s0,points_frag:r0,shadow_vert:o0,shadow_frag:a0,sprite_vert:l0,sprite_frag:c0},he={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Un={basic:{uniforms:$t([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:$t([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Xe(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:$t([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:$t([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:$t([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Xe(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:$t([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:$t([he.points,he.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:$t([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:$t([he.common,he.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:$t([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:$t([he.sprite,he.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:$t([he.common,he.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:$t([he.lights,he.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Un.physical={uniforms:$t([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const no={r:0,b:0,g:0};function u0(i,e,t,n,s,o,a){const l=new Xe(0);let c=o===!0?0:1,u,h,f=null,d=0,g=null;function _(m,p){let y=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?v(l,c):x&&x.isColor&&(v(x,1),y=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===zo)?(h===void 0&&(h=new Pe(new ft(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:Ms(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=rt.getTransfer(x.colorSpace)!==dt,(f!==x||d!==x.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,f=x,d=x.version,g=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new Pe(new Mr(2,2),new ci({name:"BackgroundMaterial",uniforms:Ms(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=rt.getTransfer(x.colorSpace)!==dt,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||d!==x.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,f=x,d=x.version,g=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function v(m,p){m.getRGB(no,pd(i)),n.buffers.color.setClear(no.r,no.g,no.b,p,a)}return{getClearColor:function(){return l},setClearColor:function(m,p=1){l.set(m),c=p,v(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,v(l,c)},render:_}}function h0(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),o=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||o!==null,l={},c=m(null);let u=c,h=!1;function f(L,I,D,W,Z){let $=!1;if(a){const J=v(W,D,I);u!==J&&(u=J,g(u.object)),$=p(L,W,D,Z),$&&y(L,W,D,Z)}else{const J=I.wireframe===!0;(u.geometry!==W.id||u.program!==D.id||u.wireframe!==J)&&(u.geometry=W.id,u.program=D.id,u.wireframe=J,$=!0)}Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,k(L,I,D,W),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function d(){return n.isWebGL2?i.createVertexArray():o.createVertexArrayOES()}function g(L){return n.isWebGL2?i.bindVertexArray(L):o.bindVertexArrayOES(L)}function _(L){return n.isWebGL2?i.deleteVertexArray(L):o.deleteVertexArrayOES(L)}function v(L,I,D){const W=D.wireframe===!0;let Z=l[L.id];Z===void 0&&(Z={},l[L.id]=Z);let $=Z[I.id];$===void 0&&($={},Z[I.id]=$);let J=$[W];return J===void 0&&(J=m(d()),$[W]=J),J}function m(L){const I=[],D=[],W=[];for(let Z=0;Z<s;Z++)I[Z]=0,D[Z]=0,W[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:D,attributeDivisors:W,object:L,attributes:{},index:null}}function p(L,I,D,W){const Z=u.attributes,$=I.attributes;let J=0;const O=D.getAttributes();for(const z in O)if(O[z].location>=0){const de=Z[z];let me=$[z];if(me===void 0&&(z==="instanceMatrix"&&L.instanceMatrix&&(me=L.instanceMatrix),z==="instanceColor"&&L.instanceColor&&(me=L.instanceColor)),de===void 0||de.attribute!==me||me&&de.data!==me.data)return!0;J++}return u.attributesNum!==J||u.index!==W}function y(L,I,D,W){const Z={},$=I.attributes;let J=0;const O=D.getAttributes();for(const z in O)if(O[z].location>=0){let de=$[z];de===void 0&&(z==="instanceMatrix"&&L.instanceMatrix&&(de=L.instanceMatrix),z==="instanceColor"&&L.instanceColor&&(de=L.instanceColor));const me={};me.attribute=de,de&&de.data&&(me.data=de.data),Z[z]=me,J++}u.attributes=Z,u.attributesNum=J,u.index=W}function x(){const L=u.newAttributes;for(let I=0,D=L.length;I<D;I++)L[I]=0}function E(L){b(L,0)}function b(L,I){const D=u.newAttributes,W=u.enabledAttributes,Z=u.attributeDivisors;D[L]=1,W[L]===0&&(i.enableVertexAttribArray(L),W[L]=1),Z[L]!==I&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,I),Z[L]=I)}function R(){const L=u.newAttributes,I=u.enabledAttributes;for(let D=0,W=I.length;D<W;D++)I[D]!==L[D]&&(i.disableVertexAttribArray(D),I[D]=0)}function C(L,I,D,W,Z,$,J){J===!0?i.vertexAttribIPointer(L,I,D,Z,$):i.vertexAttribPointer(L,I,D,W,Z,$)}function k(L,I,D,W){if(n.isWebGL2===!1&&(L.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const Z=W.attributes,$=D.getAttributes(),J=I.defaultAttributeValues;for(const O in $){const z=$[O];if(z.location>=0){let ue=Z[O];if(ue===void 0&&(O==="instanceMatrix"&&L.instanceMatrix&&(ue=L.instanceMatrix),O==="instanceColor"&&L.instanceColor&&(ue=L.instanceColor)),ue!==void 0){const de=ue.normalized,me=ue.itemSize,Ee=t.get(ue);if(Ee===void 0)continue;const Fe=Ee.buffer,be=Ee.type,Ne=Ee.bytesPerElement,at=n.isWebGL2===!0&&(be===i.INT||be===i.UNSIGNED_INT||ue.gpuType===Qh);if(ue.isInterleavedBufferAttribute){const Ue=ue.data,G=Ue.stride,kt=ue.offset;if(Ue.isInstancedInterleavedBuffer){for(let Se=0;Se<z.locationSize;Se++)b(z.location+Se,Ue.meshPerAttribute);L.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let Se=0;Se<z.locationSize;Se++)E(z.location+Se);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let Se=0;Se<z.locationSize;Se++)C(z.location+Se,me/z.locationSize,be,de,G*Ne,(kt+me/z.locationSize*Se)*Ne,at)}else{if(ue.isInstancedBufferAttribute){for(let Ue=0;Ue<z.locationSize;Ue++)b(z.location+Ue,ue.meshPerAttribute);L.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ue=0;Ue<z.locationSize;Ue++)E(z.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let Ue=0;Ue<z.locationSize;Ue++)C(z.location+Ue,me/z.locationSize,be,de,me*Ne,me/z.locationSize*Ue*Ne,at)}}else if(J!==void 0){const de=J[O];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(z.location,de);break;case 3:i.vertexAttrib3fv(z.location,de);break;case 4:i.vertexAttrib4fv(z.location,de);break;default:i.vertexAttrib1fv(z.location,de)}}}}R()}function w(){j();for(const L in l){const I=l[L];for(const D in I){const W=I[D];for(const Z in W)_(W[Z].object),delete W[Z];delete I[D]}delete l[L]}}function A(L){if(l[L.id]===void 0)return;const I=l[L.id];for(const D in I){const W=I[D];for(const Z in W)_(W[Z].object),delete W[Z];delete I[D]}delete l[L.id]}function H(L){for(const I in l){const D=l[I];if(D[L.id]===void 0)continue;const W=D[L.id];for(const Z in W)_(W[Z].object),delete W[Z];delete D[L.id]}}function j(){B(),h=!0,u!==c&&(u=c,g(u.object))}function B(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:j,resetDefaultState:B,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:H,initAttributes:x,enableAttribute:E,disableUnusedAttributes:R}}function d0(i,e,t,n){const s=n.isWebGL2;let o;function a(u){o=u}function l(u,h){i.drawArrays(o,u,h),t.update(h,o,1)}function c(u,h,f){if(f===0)return;let d,g;if(s)d=i,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](o,u,h,f),t.update(h,o,f)}this.setMode=a,this.render=l,this.renderInstances=c}function f0(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let l=t.precision!==void 0?t.precision:"highp";const c=o(l);c!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const u=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,E=a||e.has("OES_texture_float"),b=x&&E,R=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:s,getMaxPrecision:o,precision:l,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:E,floatVertexTextures:b,maxSamples:R}}function p0(i){const e=this;let t=null,n=0,s=!1,o=!1;const a=new Fi,l=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const g=f.length!==0||d||n!==0||s;return s=d,n=f.length,g},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,g){const _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||_===null||_.length===0||o&&!m)o?h(null):u();else{const y=o?0:n,x=y*4;let E=p.clippingState||null;c.value=E,E=h(_,d,x,g);for(let b=0;b!==x;++b)E[b]=t[b];p.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,g,_){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=c.value,_!==!0||m===null){const p=g+v*4,y=d.matrixWorldInverse;l.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,E=g;x!==v;++x,E+=4)a.copy(f[x]).applyMatrix4(y,l),a.normal.toArray(m,E),m[E+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function m0(i){let e=new WeakMap;function t(a,l){return l===hl?a.mapping=Ss:l===dl&&(a.mapping=Es),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const l=a.mapping;if(l===hl||l===dl)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new Cm(c.height/2);return u.fromEquirectangularTexture(i,a),e.set(a,u),a.addEventListener("dispose",s),t(u.texture,a.mapping)}else return null}}return a}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class g0 extends md{constructor(e=-1,t=1,n=1,s=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-e,a=n+e,l=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,a=o+u*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(o,a,l,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const gs=4,Su=[.125,.215,.35,.446,.526,.582],zi=20,Ia=new g0,Eu=new Xe;let Da=null,Ua=0,Fa=0;const Oi=(1+Math.sqrt(5))/2,us=1/Oi,wu=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Oi,us),new U(0,Oi,-us),new U(us,0,Oi),new U(-us,0,Oi),new U(Oi,us,0),new U(-Oi,us,0)];class Mu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Da=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,s,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Da,Ua,Fa),e.scissorTest=!1,io(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ss||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Da=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:pr,format:Rn,colorSpace:li,depthBuffer:!1},s=bu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bu(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_0(o)),this._blurMaterial=v0(o,e,t)}return s}_compileMaterial(e){const t=new Pe(this._lodPlanes[0],e);this._renderer.compile(t,Ia)}_sceneToCubeUV(e,t,n,s){const l=new pn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Eu),h.toneMapping=Mi,h.autoClear=!1;const g=new tt({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),_=new Pe(new ft,g);let v=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,v=!0):(g.color.copy(Eu),v=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(l.up.set(0,c[p],0),l.lookAt(u[p],0,0)):y===1?(l.up.set(0,0,c[p]),l.lookAt(0,u[p],0)):(l.up.set(0,c[p],0),l.lookAt(0,0,u[p]));const x=this._cubeSize;io(s,y*x,p>2?x:0,x,x),h.setRenderTarget(s),v&&h.render(_,l),h.render(e,l)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ss||e.mapping===Es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Au()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tu());const o=s?this._cubemapMaterial:this._equirectMaterial,a=new Pe(this._lodPlanes[0],o),l=o.uniforms;l.envMap.value=e;const c=this._cubeSize;io(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ia)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=wu[(s-1)%wu.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,s,o){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",o),this._halfBlur(a,e,n,n,s,"longitudinal",o)}_halfBlur(e,t,n,s,o,a,l){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Pe(this._lodPlanes[s],u),d=u.uniforms,g=this._sizeLods[n]-1,_=isFinite(o)?Math.PI/(2*g):2*Math.PI/(2*zi-1),v=o/_,m=isFinite(o)?1+Math.floor(h*v):zi;m>zi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);const p=[];let y=0;for(let C=0;C<zi;++C){const k=C/v,w=Math.exp(-k*k/2);p.push(w),C===0?y+=w:C<m&&(y+=2*w)}for(let C=0;C<p.length;C++)p[C]=p[C]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",l&&(d.poleAxis.value=l);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-n;const E=this._sizeLods[s],b=3*E*(s>x-gs?s-x+gs:0),R=4*(this._cubeSize-E);io(t,b,R,3*E,2*E),c.setRenderTarget(t),c.render(f,Ia)}}function _0(i){const e=[],t=[],n=[];let s=i;const o=i-gs+1+Su.length;for(let a=0;a<o;a++){const l=Math.pow(2,s);t.push(l);let c=1/l;a>i-gs?c=Su[a-i+gs-1]:a===0&&(c=0),n.push(c);const u=1/(l-2),h=-u,f=1+u,d=[h,h,f,h,f,f,h,h,f,f,h,f],g=6,_=6,v=3,m=2,p=1,y=new Float32Array(v*_*g),x=new Float32Array(m*_*g),E=new Float32Array(p*_*g);for(let R=0;R<g;R++){const C=R%3*2/3-1,k=R>2?0:-1,w=[C,k,0,C+2/3,k,0,C+2/3,k+1,0,C,k,0,C+2/3,k+1,0,C,k+1,0];y.set(w,v*_*R),x.set(d,m*_*R);const A=[R,R,R,R,R,R];E.set(A,p*_*R)}const b=new sn;b.setAttribute("position",new vn(y,v)),b.setAttribute("uv",new vn(x,m)),b.setAttribute("faceIndex",new vn(E,p)),e.push(b),s>gs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function bu(i,e,t){const n=new qi(i,e,t);return n.texture.mapping=zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function io(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function v0(i,e,t){const n=new Float32Array(zi),s=new U(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Tu(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Au(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Gl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function y0(i){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const c=l.mapping,u=c===hl||c===dl,h=c===Ss||c===Es;if(u||h)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let f=e.get(l);return t===null&&(t=new Mu(i)),f=u?t.fromEquirectangular(l,f):t.fromCubemap(l,f),e.set(l,f),f.texture}else{if(e.has(l))return e.get(l).texture;{const f=l.image;if(u&&f&&f.height>0||h&&f&&s(f)){t===null&&(t=new Mu(i));const d=u?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,d),l.addEventListener("dispose",o),d.texture}else return null}}}return l}function s(l){let c=0;const u=6;for(let h=0;h<u;h++)l[h]!==void 0&&c++;return c===u}function o(l){const c=l.target;c.removeEventListener("dispose",o);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function x0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function S0(i,e,t,n){const s={},o=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const v=d.morphAttributes[_];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",a),delete s[d.id];const g=o.get(d);g&&(e.remove(g),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function l(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const _ in d)e.update(d[_],i.ARRAY_BUFFER);const g=f.morphAttributes;for(const _ in g){const v=g[_];for(let m=0,p=v.length;m<p;m++)e.update(v[m],i.ARRAY_BUFFER)}}function u(f){const d=[],g=f.index,_=f.attributes.position;let v=0;if(g!==null){const y=g.array;v=g.version;for(let x=0,E=y.length;x<E;x+=3){const b=y[x+0],R=y[x+1],C=y[x+2];d.push(b,R,R,C,C,b)}}else if(_!==void 0){const y=_.array;v=_.version;for(let x=0,E=y.length/3-1;x<E;x+=3){const b=x+0,R=x+1,C=x+2;d.push(b,R,R,C,C,b)}}else return;const m=new(od(d)?fd:dd)(d,1);m.version=v;const p=o.get(f);p&&e.remove(p),o.set(f,m)}function h(f){const d=o.get(f);if(d){const g=f.index;g!==null&&d.version<g.version&&u(f)}else u(f);return o.get(f)}return{get:l,update:c,getWireframeAttribute:h}}function E0(i,e,t,n){const s=n.isWebGL2;let o;function a(d){o=d}let l,c;function u(d){l=d.type,c=d.bytesPerElement}function h(d,g){i.drawElements(o,g,l,d*c),t.update(g,o,1)}function f(d,g,_){if(_===0)return;let v,m;if(s)v=i,m="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](o,g,l,d*c,_),t.update(g,o,_)}this.setMode=a,this.setIndex=u,this.render=h,this.renderInstances=f}function w0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,a,l){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=l*(o/3);break;case i.LINES:t.lines+=l*(o/2);break;case i.LINE_STRIP:t.lines+=l*(o-1);break;case i.LINE_LOOP:t.lines+=l*o;break;case i.POINTS:t.points+=l*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function M0(i,e){return i[0]-e[0]}function b0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function T0(i,e,t){const n={},s=new Float32Array(8),o=new WeakMap,a=new zt,l=[];for(let u=0;u<8;u++)l[u]=[u,0];function c(u,h,f){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let m=o.get(h);if(m===void 0||m.count!==v){let I=function(){B.dispose(),o.delete(h),h.removeEventListener("dispose",I)};var g=I;m!==void 0&&m.texture.dispose();const x=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],k=h.morphAttributes.color||[];let w=0;x===!0&&(w=1),E===!0&&(w=2),b===!0&&(w=3);let A=h.attributes.position.count*w,H=1;A>e.maxTextureSize&&(H=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const j=new Float32Array(A*H*4*v),B=new cd(j,A,H,v);B.type=Si,B.needsUpdate=!0;const L=w*4;for(let D=0;D<v;D++){const W=R[D],Z=C[D],$=k[D],J=A*H*4*D;for(let O=0;O<W.count;O++){const z=O*L;x===!0&&(a.fromBufferAttribute(W,O),j[J+z+0]=a.x,j[J+z+1]=a.y,j[J+z+2]=a.z,j[J+z+3]=0),E===!0&&(a.fromBufferAttribute(Z,O),j[J+z+4]=a.x,j[J+z+5]=a.y,j[J+z+6]=a.z,j[J+z+7]=0),b===!0&&(a.fromBufferAttribute($,O),j[J+z+8]=a.x,j[J+z+9]=a.y,j[J+z+10]=a.z,j[J+z+11]=$.itemSize===4?a.w:1)}}m={count:v,texture:B,size:new it(A,H)},o.set(h,m),h.addEventListener("dispose",I)}let p=0;for(let x=0;x<d.length;x++)p+=d[x];const y=h.morphTargetsRelative?1:1-p;f.getUniforms().setValue(i,"morphTargetBaseInfluence",y),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const _=d===void 0?0:d.length;let v=n[h.id];if(v===void 0||v.length!==_){v=[];for(let E=0;E<_;E++)v[E]=[E,0];n[h.id]=v}for(let E=0;E<_;E++){const b=v[E];b[0]=E,b[1]=d[E]}v.sort(b0);for(let E=0;E<8;E++)E<_&&v[E][1]?(l[E][0]=v[E][0],l[E][1]=v[E][1]):(l[E][0]=Number.MAX_SAFE_INTEGER,l[E][1]=0);l.sort(M0);const m=h.morphAttributes.position,p=h.morphAttributes.normal;let y=0;for(let E=0;E<8;E++){const b=l[E],R=b[0],C=b[1];R!==Number.MAX_SAFE_INTEGER&&C?(m&&h.getAttribute("morphTarget"+E)!==m[R]&&h.setAttribute("morphTarget"+E,m[R]),p&&h.getAttribute("morphNormal"+E)!==p[R]&&h.setAttribute("morphNormal"+E,p[R]),s[E]=C,y+=C):(m&&h.hasAttribute("morphTarget"+E)===!0&&h.deleteAttribute("morphTarget"+E),p&&h.hasAttribute("morphNormal"+E)===!0&&h.deleteAttribute("morphNormal"+E),s[E]=0)}const x=h.morphTargetsRelative?1:1-y;f.getUniforms().setValue(i,"morphTargetBaseInfluence",x),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function A0(i,e,t,n){let s=new WeakMap;function o(c){const u=n.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return f}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const yd=new nn,xd=new cd,Sd=new dm,Ed=new gd,Ru=[],Cu=[],Pu=new Float32Array(16),Lu=new Float32Array(9),Nu=new Float32Array(4);function Is(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let o=Ru[s];if(o===void 0&&(o=new Float32Array(s),Ru[s]=o),e!==0){n.toArray(o,0);for(let a=1,l=0;a!==e;++a)l+=t,i[a].toArray(o,l)}return o}function Dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ho(i,e){let t=Cu[e];t===void 0&&(t=new Int32Array(e),Cu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function R0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function C0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2fv(this.addr,e),Ut(t,e)}}function P0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;i.uniform3fv(this.addr,e),Ut(t,e)}}function L0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4fv(this.addr,e),Ut(t,e)}}function N0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;Nu.set(n),i.uniformMatrix2fv(this.addr,!1,Nu),Ut(t,n)}}function I0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;Lu.set(n),i.uniformMatrix3fv(this.addr,!1,Lu),Ut(t,n)}}function D0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;Pu.set(n),i.uniformMatrix4fv(this.addr,!1,Pu),Ut(t,n)}}function U0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function F0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2iv(this.addr,e),Ut(t,e)}}function O0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3iv(this.addr,e),Ut(t,e)}}function B0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4iv(this.addr,e),Ut(t,e)}}function z0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function k0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2uiv(this.addr,e),Ut(t,e)}}function V0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3uiv(this.addr,e),Ut(t,e)}}function H0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4uiv(this.addr,e),Ut(t,e)}}function G0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||yd,s)}function W0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Sd,s)}function q0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ed,s)}function X0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||xd,s)}function j0(i){switch(i){case 5126:return R0;case 35664:return C0;case 35665:return P0;case 35666:return L0;case 35674:return N0;case 35675:return I0;case 35676:return D0;case 5124:case 35670:return U0;case 35667:case 35671:return F0;case 35668:case 35672:return O0;case 35669:case 35673:return B0;case 5125:return z0;case 36294:return k0;case 36295:return V0;case 36296:return H0;case 35678:case 36198:case 36298:case 36306:case 35682:return G0;case 35679:case 36299:case 36307:return W0;case 35680:case 36300:case 36308:case 36293:return q0;case 36289:case 36303:case 36311:case 36292:return X0}}function Y0(i,e){i.uniform1fv(this.addr,e)}function $0(i,e){const t=Is(e,this.size,2);i.uniform2fv(this.addr,t)}function K0(i,e){const t=Is(e,this.size,3);i.uniform3fv(this.addr,t)}function Z0(i,e){const t=Is(e,this.size,4);i.uniform4fv(this.addr,t)}function J0(i,e){const t=Is(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Q0(i,e){const t=Is(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ev(i,e){const t=Is(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function tv(i,e){i.uniform1iv(this.addr,e)}function nv(i,e){i.uniform2iv(this.addr,e)}function iv(i,e){i.uniform3iv(this.addr,e)}function sv(i,e){i.uniform4iv(this.addr,e)}function rv(i,e){i.uniform1uiv(this.addr,e)}function ov(i,e){i.uniform2uiv(this.addr,e)}function av(i,e){i.uniform3uiv(this.addr,e)}function lv(i,e){i.uniform4uiv(this.addr,e)}function cv(i,e,t){const n=this.cache,s=e.length,o=Ho(t,s);Dt(n,o)||(i.uniform1iv(this.addr,o),Ut(n,o));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||yd,o[a])}function uv(i,e,t){const n=this.cache,s=e.length,o=Ho(t,s);Dt(n,o)||(i.uniform1iv(this.addr,o),Ut(n,o));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Sd,o[a])}function hv(i,e,t){const n=this.cache,s=e.length,o=Ho(t,s);Dt(n,o)||(i.uniform1iv(this.addr,o),Ut(n,o));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Ed,o[a])}function dv(i,e,t){const n=this.cache,s=e.length,o=Ho(t,s);Dt(n,o)||(i.uniform1iv(this.addr,o),Ut(n,o));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||xd,o[a])}function fv(i){switch(i){case 5126:return Y0;case 35664:return $0;case 35665:return K0;case 35666:return Z0;case 35674:return J0;case 35675:return Q0;case 35676:return ev;case 5124:case 35670:return tv;case 35667:case 35671:return nv;case 35668:case 35672:return iv;case 35669:case 35673:return sv;case 5125:return rv;case 36294:return ov;case 36295:return av;case 36296:return lv;case 35678:case 36198:case 36298:case 36306:case 35682:return cv;case 35679:case 36299:case 36307:return uv;case 35680:case 36300:case 36308:case 36293:return hv;case 36289:case 36303:case 36311:case 36292:return dv}}class pv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=j0(t.type)}}class mv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=fv(t.type)}}class gv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let o=0,a=s.length;o!==a;++o){const l=s[o];l.setValue(e,t[l.id],n)}}}const Oa=/(\w+)(\])?(\[|\.)?/g;function Iu(i,e){i.seq.push(e),i.map[e.id]=e}function _v(i,e,t){const n=i.name,s=n.length;for(Oa.lastIndex=0;;){const o=Oa.exec(n),a=Oa.lastIndex;let l=o[1];const c=o[2]==="]",u=o[3];if(c&&(l=l|0),u===void 0||u==="["&&a+2===s){Iu(t,u===void 0?new pv(l,i,e):new mv(l,i,e));break}else{let f=t.map[l];f===void 0&&(f=new gv(l),Iu(t,f)),t=f}}}class yo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=e.getActiveUniform(t,s),a=e.getUniformLocation(t,o.name);_v(o,a,this)}}setValue(e,t,n,s){const o=this.map[t];o!==void 0&&o.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let o=0,a=t.length;o!==a;++o){const l=t[o],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,o=e.length;s!==o;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Du(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const vv=37297;let yv=0;function xv(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let a=s;a<o;a++){const l=a+1;n.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return n.join(`
`)}function Sv(i){const e=rt.getPrimaries(rt.workingColorSpace),t=rt.getPrimaries(i);let n;switch(e===t?n="":e===No&&t===Lo?n="LinearDisplayP3ToLinearSRGB":e===Lo&&t===No&&(n="LinearSRGBToLinearDisplayP3"),i){case li:case ko:return[n,"LinearTransferOETF"];case Ht:case Vl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Uu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+xv(i.getShaderSource(e),a)}else return s}function Ev(i,e){const t=Sv(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function wv(i,e){let t;switch(e){case yp:t="Linear";break;case xp:t="Reinhard";break;case Sp:t="OptimizedCineon";break;case Ep:t="ACESFilmic";break;case wp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Mv(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(tr).join(`
`)}function bv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Tv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(e,s),a=o.name;let l=1;o.type===i.FLOAT_MAT2&&(l=2),o.type===i.FLOAT_MAT3&&(l=3),o.type===i.FLOAT_MAT4&&(l=4),t[a]={type:o.type,location:i.getAttribLocation(e,a),locationSize:l}}return t}function tr(i){return i!==""}function Fu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ou(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Av=/^[ \t]*#include +<([\w\d./]+)>/gm;function gl(i){return i.replace(Av,Cv)}const Rv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Cv(i,e){let t=He[e];if(t===void 0){const n=Rv.get(e);if(n!==void 0)t=He[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return gl(t)}const Pv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bu(i){return i.replace(Pv,Lv)}function Lv(i,e,t,n){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function zu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Nv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Kh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===jf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function Iv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ss:case Es:e="ENVMAP_TYPE_CUBE";break;case zo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Dv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Es:e="ENVMAP_MODE_REFRACTION";break}return e}function Uv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Zh:e="ENVMAP_BLENDING_MULTIPLY";break;case _p:e="ENVMAP_BLENDING_MIX";break;case vp:e="ENVMAP_BLENDING_ADD";break}return e}function Fv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ov(i,e,t,n){const s=i.getContext(),o=t.defines;let a=t.vertexShader,l=t.fragmentShader;const c=Nv(t),u=Iv(t),h=Dv(t),f=Uv(t),d=Fv(t),g=t.isWebGL2?"":Mv(t),_=bv(o),v=s.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(tr).join(`
`),m.length>0&&(m+=`
`),p=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(tr).join(`
`),p.length>0&&(p+=`
`)):(m=[zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),p=[g,zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?He.tonemapping_pars_fragment:"",t.toneMapping!==Mi?wv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Ev("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(tr).join(`
`)),a=gl(a),a=Fu(a,t),a=Ou(a,t),l=gl(l),l=Fu(l,t),l=Ou(l,t),a=Bu(a),l=Bu(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+m+a,E=y+p+l,b=Du(s,s.VERTEX_SHADER,x),R=Du(s,s.FRAGMENT_SHADER,E);s.attachShader(v,b),s.attachShader(v,R),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(H){if(i.debug.checkShaderErrors){const j=s.getProgramInfoLog(v).trim(),B=s.getShaderInfoLog(b).trim(),L=s.getShaderInfoLog(R).trim();let I=!0,D=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(I=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,b,R);else{const W=Uu(s,b,"vertex"),Z=Uu(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Program Info Log: `+j+`
`+W+`
`+Z)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(B===""||L==="")&&(D=!1);D&&(H.diagnostics={runnable:I,programLog:j,vertexShader:{log:B,prefix:m},fragmentShader:{log:L,prefix:p}})}s.deleteShader(b),s.deleteShader(R),k=new yo(s,v),w=Tv(s,v)}let k;this.getUniforms=function(){return k===void 0&&C(this),k};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(v,vv)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=R,this}let Bv=0;class zv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new kv(e),t.set(e,n)),n}}class kv{constructor(e){this.id=Bv++,this.code=e,this.usedTimes=0}}function Vv(i,e,t,n,s,o,a){const l=new ud,c=new zv,u=[],h=s.isWebGL2,f=s.logarithmicDepthBuffer,d=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return w===0?"uv":`uv${w}`}function m(w,A,H,j,B){const L=j.fog,I=B.geometry,D=w.isMeshStandardMaterial?j.environment:null,W=(w.isMeshStandardMaterial?t:e).get(w.envMap||D),Z=W&&W.mapping===zo?W.image.height:null,$=_[w.type];w.precision!==null&&(g=s.getMaxPrecision(w.precision),g!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const J=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,O=J!==void 0?J.length:0;let z=0;I.morphAttributes.position!==void 0&&(z=1),I.morphAttributes.normal!==void 0&&(z=2),I.morphAttributes.color!==void 0&&(z=3);let ue,de,me,Ee;if($){const Et=Un[$];ue=Et.vertexShader,de=Et.fragmentShader}else ue=w.vertexShader,de=w.fragmentShader,c.update(w),me=c.getVertexShaderID(w),Ee=c.getFragmentShaderID(w);const Fe=i.getRenderTarget(),be=B.isInstancedMesh===!0,Ne=!!w.map,at=!!w.matcap,Ue=!!W,G=!!w.aoMap,kt=!!w.lightMap,Se=!!w.bumpMap,Te=!!w.normalMap,Ae=!!w.displacementMap,lt=!!w.emissiveMap,Oe=!!w.metalnessMap,Ve=!!w.roughnessMap,nt=w.anisotropy>0,xt=w.clearcoat>0,St=w.iridescence>0,P=w.sheen>0,M=w.transmission>0,q=nt&&!!w.anisotropyMap,re=xt&&!!w.clearcoatMap,ne=xt&&!!w.clearcoatNormalMap,se=xt&&!!w.clearcoatRoughnessMap,ye=St&&!!w.iridescenceMap,ae=St&&!!w.iridescenceThicknessMap,fe=P&&!!w.sheenColorMap,Le=P&&!!w.sheenRoughnessMap,Ke=!!w.specularMap,oe=!!w.specularColorMap,st=!!w.specularIntensityMap,Be=M&&!!w.transmissionMap,Ie=M&&!!w.thicknessMap,Me=!!w.gradientMap,ve=!!w.alphaMap,Ye=w.alphaTest>0,F=!!w.alphaHash,pe=!!w.extensions,le=!!I.attributes.uv1,Q=!!I.attributes.uv2,ce=!!I.attributes.uv3;let Re=Mi;return w.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(Re=i.toneMapping),{isWebGL2:h,shaderID:$,shaderType:w.type,shaderName:w.name,vertexShader:ue,fragmentShader:de,defines:w.defines,customVertexShaderID:me,customFragmentShaderID:Ee,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,instancing:be,instancingColor:be&&B.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Fe===null?i.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:li,map:Ne,matcap:at,envMap:Ue,envMapMode:Ue&&W.mapping,envMapCubeUVHeight:Z,aoMap:G,lightMap:kt,bumpMap:Se,normalMap:Te,displacementMap:d&&Ae,emissiveMap:lt,normalMapObjectSpace:Te&&w.normalMapType===Op,normalMapTangentSpace:Te&&w.normalMapType===Fp,metalnessMap:Oe,roughnessMap:Ve,anisotropy:nt,anisotropyMap:q,clearcoat:xt,clearcoatMap:re,clearcoatNormalMap:ne,clearcoatRoughnessMap:se,iridescence:St,iridescenceMap:ye,iridescenceThicknessMap:ae,sheen:P,sheenColorMap:fe,sheenRoughnessMap:Le,specularMap:Ke,specularColorMap:oe,specularIntensityMap:st,transmission:M,transmissionMap:Be,thicknessMap:Ie,gradientMap:Me,opaque:w.transparent===!1&&w.blending===_s,alphaMap:ve,alphaTest:Ye,alphaHash:F,combine:w.combine,mapUv:Ne&&v(w.map.channel),aoMapUv:G&&v(w.aoMap.channel),lightMapUv:kt&&v(w.lightMap.channel),bumpMapUv:Se&&v(w.bumpMap.channel),normalMapUv:Te&&v(w.normalMap.channel),displacementMapUv:Ae&&v(w.displacementMap.channel),emissiveMapUv:lt&&v(w.emissiveMap.channel),metalnessMapUv:Oe&&v(w.metalnessMap.channel),roughnessMapUv:Ve&&v(w.roughnessMap.channel),anisotropyMapUv:q&&v(w.anisotropyMap.channel),clearcoatMapUv:re&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:ne&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Le&&v(w.sheenRoughnessMap.channel),specularMapUv:Ke&&v(w.specularMap.channel),specularColorMapUv:oe&&v(w.specularColorMap.channel),specularIntensityMapUv:st&&v(w.specularIntensityMap.channel),transmissionMapUv:Be&&v(w.transmissionMap.channel),thicknessMapUv:Ie&&v(w.thicknessMap.channel),alphaMapUv:ve&&v(w.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Te||nt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUv1s:le,vertexUv2s:Q,vertexUv3s:ce,pointsUvs:B.isPoints===!0&&!!I.attributes.uv&&(Ne||ve),fog:!!L,useFog:w.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:B.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:z,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:Re,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ne&&w.map.isVideoTexture===!0&&rt.getTransfer(w.map.colorSpace)===dt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ri,flipSided:w.side===tn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:pe&&w.extensions.derivatives===!0,extensionFragDepth:pe&&w.extensions.fragDepth===!0,extensionDrawBuffers:pe&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&w.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function p(w){const A=[];if(w.shaderID?A.push(w.shaderID):(A.push(w.customVertexShaderID),A.push(w.customFragmentShaderID)),w.defines!==void 0)for(const H in w.defines)A.push(H),A.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(y(A,w),x(A,w),A.push(i.outputColorSpace)),A.push(w.customProgramCacheKey),A.join()}function y(w,A){w.push(A.precision),w.push(A.outputColorSpace),w.push(A.envMapMode),w.push(A.envMapCubeUVHeight),w.push(A.mapUv),w.push(A.alphaMapUv),w.push(A.lightMapUv),w.push(A.aoMapUv),w.push(A.bumpMapUv),w.push(A.normalMapUv),w.push(A.displacementMapUv),w.push(A.emissiveMapUv),w.push(A.metalnessMapUv),w.push(A.roughnessMapUv),w.push(A.anisotropyMapUv),w.push(A.clearcoatMapUv),w.push(A.clearcoatNormalMapUv),w.push(A.clearcoatRoughnessMapUv),w.push(A.iridescenceMapUv),w.push(A.iridescenceThicknessMapUv),w.push(A.sheenColorMapUv),w.push(A.sheenRoughnessMapUv),w.push(A.specularMapUv),w.push(A.specularColorMapUv),w.push(A.specularIntensityMapUv),w.push(A.transmissionMapUv),w.push(A.thicknessMapUv),w.push(A.combine),w.push(A.fogExp2),w.push(A.sizeAttenuation),w.push(A.morphTargetsCount),w.push(A.morphAttributeCount),w.push(A.numDirLights),w.push(A.numPointLights),w.push(A.numSpotLights),w.push(A.numSpotLightMaps),w.push(A.numHemiLights),w.push(A.numRectAreaLights),w.push(A.numDirLightShadows),w.push(A.numPointLightShadows),w.push(A.numSpotLightShadows),w.push(A.numSpotLightShadowsWithMaps),w.push(A.numLightProbes),w.push(A.shadowMapType),w.push(A.toneMapping),w.push(A.numClippingPlanes),w.push(A.numClipIntersection),w.push(A.depthPacking)}function x(w,A){l.disableAll(),A.isWebGL2&&l.enable(0),A.supportsVertexTextures&&l.enable(1),A.instancing&&l.enable(2),A.instancingColor&&l.enable(3),A.matcap&&l.enable(4),A.envMap&&l.enable(5),A.normalMapObjectSpace&&l.enable(6),A.normalMapTangentSpace&&l.enable(7),A.clearcoat&&l.enable(8),A.iridescence&&l.enable(9),A.alphaTest&&l.enable(10),A.vertexColors&&l.enable(11),A.vertexAlphas&&l.enable(12),A.vertexUv1s&&l.enable(13),A.vertexUv2s&&l.enable(14),A.vertexUv3s&&l.enable(15),A.vertexTangents&&l.enable(16),A.anisotropy&&l.enable(17),A.alphaHash&&l.enable(18),w.push(l.mask),l.disableAll(),A.fog&&l.enable(0),A.useFog&&l.enable(1),A.flatShading&&l.enable(2),A.logarithmicDepthBuffer&&l.enable(3),A.skinning&&l.enable(4),A.morphTargets&&l.enable(5),A.morphNormals&&l.enable(6),A.morphColors&&l.enable(7),A.premultipliedAlpha&&l.enable(8),A.shadowMapEnabled&&l.enable(9),A.useLegacyLights&&l.enable(10),A.doubleSided&&l.enable(11),A.flipSided&&l.enable(12),A.useDepthPacking&&l.enable(13),A.dithering&&l.enable(14),A.transmission&&l.enable(15),A.sheen&&l.enable(16),A.opaque&&l.enable(17),A.pointsUvs&&l.enable(18),A.decodeVideoTexture&&l.enable(19),w.push(l.mask)}function E(w){const A=_[w.type];let H;if(A){const j=Un[A];H=bm.clone(j.uniforms)}else H=w.uniforms;return H}function b(w,A){let H;for(let j=0,B=u.length;j<B;j++){const L=u[j];if(L.cacheKey===A){H=L,++H.usedTimes;break}}return H===void 0&&(H=new Ov(i,A,w,o),u.push(H)),H}function R(w){if(--w.usedTimes===0){const A=u.indexOf(w);u[A]=u[u.length-1],u.pop(),w.destroy()}}function C(w){c.remove(w)}function k(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:b,releaseProgram:R,releaseShaderCache:C,programs:u,dispose:k}}function Hv(){let i=new WeakMap;function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function t(o){i.delete(o)}function n(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Gv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ku(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Vu(){const i=[];let e=0;const t=[],n=[],s=[];function o(){e=0,t.length=0,n.length=0,s.length=0}function a(f,d,g,_,v,m){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:g,groupOrder:_,renderOrder:f.renderOrder,z:v,group:m},i[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=g,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=v,p.group=m),e++,p}function l(f,d,g,_,v,m){const p=a(f,d,g,_,v,m);g.transmission>0?n.push(p):g.transparent===!0?s.push(p):t.push(p)}function c(f,d,g,_,v,m){const p=a(f,d,g,_,v,m);g.transmission>0?n.unshift(p):g.transparent===!0?s.unshift(p):t.unshift(p)}function u(f,d){t.length>1&&t.sort(f||Gv),n.length>1&&n.sort(d||ku),s.length>1&&s.sort(d||ku)}function h(){for(let f=e,d=i.length;f<d;f++){const g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:o,push:l,unshift:c,finish:h,sort:u}}function Wv(){let i=new WeakMap;function e(n,s){const o=i.get(n);let a;return o===void 0?(a=new Vu,i.set(n,[a])):s>=o.length?(a=new Vu,o.push(a)):a=o[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function qv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Xe};break;case"SpotLight":t={position:new U,direction:new U,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function Xv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let jv=0;function Yv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function $v(i,e){const t=new qv,n=Xv(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new U);const o=new U,a=new Ct,l=new Ct;function c(h,f){let d=0,g=0,_=0;for(let j=0;j<9;j++)s.probe[j].set(0,0,0);let v=0,m=0,p=0,y=0,x=0,E=0,b=0,R=0,C=0,k=0,w=0;h.sort(Yv);const A=f===!0?Math.PI:1;for(let j=0,B=h.length;j<B;j++){const L=h[j],I=L.color,D=L.intensity,W=L.distance,Z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=I.r*D*A,g+=I.g*D*A,_+=I.b*D*A;else if(L.isLightProbe){for(let $=0;$<9;$++)s.probe[$].addScaledVector(L.sh.coefficients[$],D);w++}else if(L.isDirectionalLight){const $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity*A),L.castShadow){const J=L.shadow,O=n.get(L);O.shadowBias=J.bias,O.shadowNormalBias=J.normalBias,O.shadowRadius=J.radius,O.shadowMapSize=J.mapSize,s.directionalShadow[v]=O,s.directionalShadowMap[v]=Z,s.directionalShadowMatrix[v]=L.shadow.matrix,E++}s.directional[v]=$,v++}else if(L.isSpotLight){const $=t.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(I).multiplyScalar(D*A),$.distance=W,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,s.spot[p]=$;const J=L.shadow;if(L.map&&(s.spotLightMap[C]=L.map,C++,J.updateMatrices(L),L.castShadow&&k++),s.spotLightMatrix[p]=J.matrix,L.castShadow){const O=n.get(L);O.shadowBias=J.bias,O.shadowNormalBias=J.normalBias,O.shadowRadius=J.radius,O.shadowMapSize=J.mapSize,s.spotShadow[p]=O,s.spotShadowMap[p]=Z,R++}p++}else if(L.isRectAreaLight){const $=t.get(L);$.color.copy(I).multiplyScalar(D),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),s.rectArea[y]=$,y++}else if(L.isPointLight){const $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity*A),$.distance=L.distance,$.decay=L.decay,L.castShadow){const J=L.shadow,O=n.get(L);O.shadowBias=J.bias,O.shadowNormalBias=J.normalBias,O.shadowRadius=J.radius,O.shadowMapSize=J.mapSize,O.shadowCameraNear=J.camera.near,O.shadowCameraFar=J.camera.far,s.pointShadow[m]=O,s.pointShadowMap[m]=Z,s.pointShadowMatrix[m]=L.shadow.matrix,b++}s.point[m]=$,m++}else if(L.isHemisphereLight){const $=t.get(L);$.skyColor.copy(L.color).multiplyScalar(D*A),$.groundColor.copy(L.groundColor).multiplyScalar(D*A),s.hemi[x]=$,x++}}y>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=he.LTC_FLOAT_1,s.rectAreaLTC2=he.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=he.LTC_HALF_1,s.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=g,s.ambient[2]=_;const H=s.hash;(H.directionalLength!==v||H.pointLength!==m||H.spotLength!==p||H.rectAreaLength!==y||H.hemiLength!==x||H.numDirectionalShadows!==E||H.numPointShadows!==b||H.numSpotShadows!==R||H.numSpotMaps!==C||H.numLightProbes!==w)&&(s.directional.length=v,s.spot.length=p,s.rectArea.length=y,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=b,s.pointShadowMap.length=b,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=b,s.spotLightMatrix.length=R+C-k,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=w,H.directionalLength=v,H.pointLength=m,H.spotLength=p,H.rectAreaLength=y,H.hemiLength=x,H.numDirectionalShadows=E,H.numPointShadows=b,H.numSpotShadows=R,H.numSpotMaps=C,H.numLightProbes=w,s.version=jv++)}function u(h,f){let d=0,g=0,_=0,v=0,m=0;const p=f.matrixWorldInverse;for(let y=0,x=h.length;y<x;y++){const E=h[y];if(E.isDirectionalLight){const b=s.directional[d];b.direction.setFromMatrixPosition(E.matrixWorld),o.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(p),d++}else if(E.isSpotLight){const b=s.spot[_];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(E.matrixWorld),o.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(p),_++}else if(E.isRectAreaLight){const b=s.rectArea[v];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(p),l.identity(),a.copy(E.matrixWorld),a.premultiply(p),l.extractRotation(a),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(l),b.halfHeight.applyMatrix4(l),v++}else if(E.isPointLight){const b=s.point[g];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(p),g++}else if(E.isHemisphereLight){const b=s.hemi[m];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:c,setupView:u,state:s}}function Hu(i,e){const t=new $v(i,e),n=[],s=[];function o(){n.length=0,s.length=0}function a(f){n.push(f)}function l(f){s.push(f)}function c(f){t.setup(n,f)}function u(f){t.setupView(n,f)}return{init:o,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:u,pushLight:a,pushShadow:l}}function Kv(i,e){let t=new WeakMap;function n(o,a=0){const l=t.get(o);let c;return l===void 0?(c=new Hu(i,e),t.set(o,[c])):a>=l.length?(c=new Hu(i,e),l.push(c)):c=l[a],c}function s(){t=new WeakMap}return{get:n,dispose:s}}class Zv extends Ns{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jv extends Ns{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Qv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ey=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ty(i,e,t){let n=new _d;const s=new it,o=new it,a=new zt,l=new Zv({depthPacking:Up}),c=new Jv,u={},h=t.maxTextureSize,f={[Ti]:tn,[tn]:Ti,[ri]:ri},d=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:Qv,fragmentShader:ey}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const _=new sn;_.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Pe(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kh;let p=this.type;this.render=function(b,R,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const k=i.getRenderTarget(),w=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),H=i.state;H.setBlending(wi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const j=p!==ni&&this.type===ni,B=p===ni&&this.type!==ni;for(let L=0,I=b.length;L<I;L++){const D=b[L],W=D.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const Z=W.getFrameExtents();if(s.multiply(Z),o.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/Z.x),s.x=o.x*Z.x,W.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/Z.y),s.y=o.y*Z.y,W.mapSize.y=o.y)),W.map===null||j===!0||B===!0){const J=this.type!==ni?{minFilter:Zt,magFilter:Zt}:{};W.map!==null&&W.map.dispose(),W.map=new qi(s.x,s.y,J),W.map.texture.name=D.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const $=W.getViewportCount();for(let J=0;J<$;J++){const O=W.getViewport(J);a.set(o.x*O.x,o.y*O.y,o.x*O.z,o.y*O.w),H.viewport(a),W.updateMatrices(D,J),n=W.getFrustum(),E(R,C,W.camera,D,this.type)}W.isPointLightShadow!==!0&&this.type===ni&&y(W,C),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(k,w,A)};function y(b,R){const C=e.update(v);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,g.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new qi(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(R,null,C,d,v,null),g.uniforms.shadow_pass.value=b.mapPass.texture,g.uniforms.resolution.value=b.mapSize,g.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(R,null,C,g,v,null)}function x(b,R,C,k){let w=null;const A=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(A!==void 0)w=A;else if(w=C.isPointLight===!0?c:l,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const H=w.uuid,j=R.uuid;let B=u[H];B===void 0&&(B={},u[H]=B);let L=B[j];L===void 0&&(L=w.clone(),B[j]=L),w=L}if(w.visible=R.visible,w.wireframe=R.wireframe,k===ni?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:f[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,C.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const H=i.properties.get(w);H.light=C}return w}function E(b,R,C,k,w){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&w===ni)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const j=e.update(b),B=b.material;if(Array.isArray(B)){const L=j.groups;for(let I=0,D=L.length;I<D;I++){const W=L[I],Z=B[W.materialIndex];if(Z&&Z.visible){const $=x(b,Z,k,w);i.renderBufferDirect(C,null,j,$,b,W)}}}else if(B.visible){const L=x(b,B,k,w);i.renderBufferDirect(C,null,j,L,b,null)}}const H=b.children;for(let j=0,B=H.length;j<B;j++)E(H[j],R,C,k,w)}}function ny(i,e,t){const n=t.isWebGL2;function s(){let F=!1;const pe=new zt;let le=null;const Q=new zt(0,0,0,0);return{setMask:function(ce){le!==ce&&!F&&(i.colorMask(ce,ce,ce,ce),le=ce)},setLocked:function(ce){F=ce},setClear:function(ce,Re,Ze,Et,un){un===!0&&(ce*=Et,Re*=Et,Ze*=Et),pe.set(ce,Re,Ze,Et),Q.equals(pe)===!1&&(i.clearColor(ce,Re,Ze,Et),Q.copy(pe))},reset:function(){F=!1,le=null,Q.set(-1,0,0,0)}}}function o(){let F=!1,pe=null,le=null,Q=null;return{setTest:function(ce){ce?Ne(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(ce){pe!==ce&&!F&&(i.depthMask(ce),pe=ce)},setFunc:function(ce){if(le!==ce){switch(ce){case up:i.depthFunc(i.NEVER);break;case hp:i.depthFunc(i.ALWAYS);break;case dp:i.depthFunc(i.LESS);break;case Co:i.depthFunc(i.LEQUAL);break;case fp:i.depthFunc(i.EQUAL);break;case pp:i.depthFunc(i.GEQUAL);break;case mp:i.depthFunc(i.GREATER);break;case gp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=ce}},setLocked:function(ce){F=ce},setClear:function(ce){Q!==ce&&(i.clearDepth(ce),Q=ce)},reset:function(){F=!1,pe=null,le=null,Q=null}}}function a(){let F=!1,pe=null,le=null,Q=null,ce=null,Re=null,Ze=null,Et=null,un=null;return{setTest:function(ct){F||(ct?Ne(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(ct){pe!==ct&&!F&&(i.stencilMask(ct),pe=ct)},setFunc:function(ct,Xt,Pn){(le!==ct||Q!==Xt||ce!==Pn)&&(i.stencilFunc(ct,Xt,Pn),le=ct,Q=Xt,ce=Pn)},setOp:function(ct,Xt,Pn){(Re!==ct||Ze!==Xt||Et!==Pn)&&(i.stencilOp(ct,Xt,Pn),Re=ct,Ze=Xt,Et=Pn)},setLocked:function(ct){F=ct},setClear:function(ct){un!==ct&&(i.clearStencil(ct),un=ct)},reset:function(){F=!1,pe=null,le=null,Q=null,ce=null,Re=null,Ze=null,Et=null,un=null}}}const l=new s,c=new o,u=new a,h=new WeakMap,f=new WeakMap;let d={},g={},_=new WeakMap,v=[],m=null,p=!1,y=null,x=null,E=null,b=null,R=null,C=null,k=null,w=new Xe(0,0,0),A=0,H=!1,j=null,B=null,L=null,I=null,D=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,$=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(J)[1]),Z=$>=1):J.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Z=$>=2);let O=null,z={};const ue=i.getParameter(i.SCISSOR_BOX),de=i.getParameter(i.VIEWPORT),me=new zt().fromArray(ue),Ee=new zt().fromArray(de);function Fe(F,pe,le,Q){const ce=new Uint8Array(4),Re=i.createTexture();i.bindTexture(F,Re),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ze=0;Ze<le;Ze++)n&&(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)?i.texImage3D(pe,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(pe+Ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return Re}const be={};be[i.TEXTURE_2D]=Fe(i.TEXTURE_2D,i.TEXTURE_2D,1),be[i.TEXTURE_CUBE_MAP]=Fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(be[i.TEXTURE_2D_ARRAY]=Fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),be[i.TEXTURE_3D]=Fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),l.setClear(0,0,0,1),c.setClear(1),u.setClear(0),Ne(i.DEPTH_TEST),c.setFunc(Co),Oe(!1),Ve(Mc),Ne(i.CULL_FACE),Ae(wi);function Ne(F){d[F]!==!0&&(i.enable(F),d[F]=!0)}function at(F){d[F]!==!1&&(i.disable(F),d[F]=!1)}function Ue(F,pe){return g[F]!==pe?(i.bindFramebuffer(F,pe),g[F]=pe,n&&(F===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=pe),F===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=pe)),!0):!1}function G(F,pe){let le=v,Q=!1;if(F)if(le=_.get(pe),le===void 0&&(le=[],_.set(pe,le)),F.isWebGLMultipleRenderTargets){const ce=F.texture;if(le.length!==ce.length||le[0]!==i.COLOR_ATTACHMENT0){for(let Re=0,Ze=ce.length;Re<Ze;Re++)le[Re]=i.COLOR_ATTACHMENT0+Re;le.length=ce.length,Q=!0}}else le[0]!==i.COLOR_ATTACHMENT0&&(le[0]=i.COLOR_ATTACHMENT0,Q=!0);else le[0]!==i.BACK&&(le[0]=i.BACK,Q=!0);Q&&(t.isWebGL2?i.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function kt(F){return m!==F?(i.useProgram(F),m=F,!0):!1}const Se={[Bi]:i.FUNC_ADD,[$f]:i.FUNC_SUBTRACT,[Kf]:i.FUNC_REVERSE_SUBTRACT};if(n)Se[Ac]=i.MIN,Se[Rc]=i.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(Se[Ac]=F.MIN_EXT,Se[Rc]=F.MAX_EXT)}const Te={[Zf]:i.ZERO,[Jf]:i.ONE,[Qf]:i.SRC_COLOR,[cl]:i.SRC_ALPHA,[rp]:i.SRC_ALPHA_SATURATE,[ip]:i.DST_COLOR,[tp]:i.DST_ALPHA,[ep]:i.ONE_MINUS_SRC_COLOR,[ul]:i.ONE_MINUS_SRC_ALPHA,[sp]:i.ONE_MINUS_DST_COLOR,[np]:i.ONE_MINUS_DST_ALPHA,[op]:i.CONSTANT_COLOR,[ap]:i.ONE_MINUS_CONSTANT_COLOR,[lp]:i.CONSTANT_ALPHA,[cp]:i.ONE_MINUS_CONSTANT_ALPHA};function Ae(F,pe,le,Q,ce,Re,Ze,Et,un,ct){if(F===wi){p===!0&&(at(i.BLEND),p=!1);return}if(p===!1&&(Ne(i.BLEND),p=!0),F!==Yf){if(F!==y||ct!==H){if((x!==Bi||R!==Bi)&&(i.blendEquation(i.FUNC_ADD),x=Bi,R=Bi),ct)switch(F){case _s:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ro:i.blendFunc(i.ONE,i.ONE);break;case bc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case _s:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ro:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case bc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}E=null,b=null,C=null,k=null,w.set(0,0,0),A=0,y=F,H=ct}return}ce=ce||pe,Re=Re||le,Ze=Ze||Q,(pe!==x||ce!==R)&&(i.blendEquationSeparate(Se[pe],Se[ce]),x=pe,R=ce),(le!==E||Q!==b||Re!==C||Ze!==k)&&(i.blendFuncSeparate(Te[le],Te[Q],Te[Re],Te[Ze]),E=le,b=Q,C=Re,k=Ze),(Et.equals(w)===!1||un!==A)&&(i.blendColor(Et.r,Et.g,Et.b,un),w.copy(Et),A=un),y=F,H=!1}function lt(F,pe){F.side===ri?at(i.CULL_FACE):Ne(i.CULL_FACE);let le=F.side===tn;pe&&(le=!le),Oe(le),F.blending===_s&&F.transparent===!1?Ae(wi):Ae(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),c.setFunc(F.depthFunc),c.setTest(F.depthTest),c.setMask(F.depthWrite),l.setMask(F.colorWrite);const Q=F.stencilWrite;u.setTest(Q),Q&&(u.setMask(F.stencilWriteMask),u.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),u.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),xt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Ne(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(F){j!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),j=F)}function Ve(F){F!==qf?(Ne(i.CULL_FACE),F!==B&&(F===Mc?i.cullFace(i.BACK):F===Xf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),B=F}function nt(F){F!==L&&(Z&&i.lineWidth(F),L=F)}function xt(F,pe,le){F?(Ne(i.POLYGON_OFFSET_FILL),(I!==pe||D!==le)&&(i.polygonOffset(pe,le),I=pe,D=le)):at(i.POLYGON_OFFSET_FILL)}function St(F){F?Ne(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function P(F){F===void 0&&(F=i.TEXTURE0+W-1),O!==F&&(i.activeTexture(F),O=F)}function M(F,pe,le){le===void 0&&(O===null?le=i.TEXTURE0+W-1:le=O);let Q=z[le];Q===void 0&&(Q={type:void 0,texture:void 0},z[le]=Q),(Q.type!==F||Q.texture!==pe)&&(O!==le&&(i.activeTexture(le),O=le),i.bindTexture(F,pe||be[F]),Q.type=F,Q.texture=pe)}function q(){const F=z[O];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function re(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ke(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function st(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Be(F){me.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),me.copy(F))}function Ie(F){Ee.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Ee.copy(F))}function Me(F,pe){let le=f.get(pe);le===void 0&&(le=new WeakMap,f.set(pe,le));let Q=le.get(F);Q===void 0&&(Q=i.getUniformBlockIndex(pe,F.name),le.set(F,Q))}function ve(F,pe){const Q=f.get(pe).get(F);h.get(pe)!==Q&&(i.uniformBlockBinding(pe,Q,F.__bindingPointIndex),h.set(pe,Q))}function Ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},O=null,z={},g={},_=new WeakMap,v=[],m=null,p=!1,y=null,x=null,E=null,b=null,R=null,C=null,k=null,w=new Xe(0,0,0),A=0,H=!1,j=null,B=null,L=null,I=null,D=null,me.set(0,0,i.canvas.width,i.canvas.height),Ee.set(0,0,i.canvas.width,i.canvas.height),l.reset(),c.reset(),u.reset()}return{buffers:{color:l,depth:c,stencil:u},enable:Ne,disable:at,bindFramebuffer:Ue,drawBuffers:G,useProgram:kt,setBlending:Ae,setMaterial:lt,setFlipSided:Oe,setCullFace:Ve,setLineWidth:nt,setPolygonOffset:xt,setScissorTest:St,activeTexture:P,bindTexture:M,unbindTexture:q,compressedTexImage2D:re,compressedTexImage3D:ne,texImage2D:oe,texImage3D:st,updateUBOMapping:Me,uniformBlockBinding:ve,texStorage2D:Le,texStorage3D:Ke,texSubImage2D:se,texSubImage3D:ye,compressedTexSubImage2D:ae,compressedTexSubImage3D:fe,scissor:Be,viewport:Ie,reset:Ye}}function iy(i,e,t,n,s,o,a){const l=s.isWebGL2,c=s.maxTextures,u=s.maxCubemapSize,h=s.maxTextureSize,f=s.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let v;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(P,M){return p?new OffscreenCanvas(P,M):gr("canvas")}function x(P,M,q,re){let ne=1;if((P.width>re||P.height>re)&&(ne=re/Math.max(P.width,P.height)),ne<1||M===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const se=M?Do:Math.floor,ye=se(ne*P.width),ae=se(ne*P.height);v===void 0&&(v=y(ye,ae));const fe=q?y(ye,ae):v;return fe.width=ye,fe.height=ae,fe.getContext("2d").drawImage(P,0,0,ye,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+ye+"x"+ae+")."),fe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function E(P){return ml(P.width)&&ml(P.height)}function b(P){return l?!1:P.wrapS!==An||P.wrapT!==An||P.minFilter!==Zt&&P.minFilter!==fn}function R(P,M){return P.generateMipmaps&&M&&P.minFilter!==Zt&&P.minFilter!==fn}function C(P){i.generateMipmap(P)}function k(P,M,q,re,ne=!1){if(l===!1)return M;if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let se=M;if(M===i.RED&&(q===i.FLOAT&&(se=i.R32F),q===i.HALF_FLOAT&&(se=i.R16F),q===i.UNSIGNED_BYTE&&(se=i.R8)),M===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(se=i.R8UI),q===i.UNSIGNED_SHORT&&(se=i.R16UI),q===i.UNSIGNED_INT&&(se=i.R32UI),q===i.BYTE&&(se=i.R8I),q===i.SHORT&&(se=i.R16I),q===i.INT&&(se=i.R32I)),M===i.RG&&(q===i.FLOAT&&(se=i.RG32F),q===i.HALF_FLOAT&&(se=i.RG16F),q===i.UNSIGNED_BYTE&&(se=i.RG8)),M===i.RGBA){const ye=ne?Po:rt.getTransfer(re);q===i.FLOAT&&(se=i.RGBA32F),q===i.HALF_FLOAT&&(se=i.RGBA16F),q===i.UNSIGNED_BYTE&&(se=ye===dt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function w(P,M,q){return R(P,q)===!0||P.isFramebufferTexture&&P.minFilter!==Zt&&P.minFilter!==fn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function A(P){return P===Zt||P===Cc||P===ua?i.NEAREST:i.LINEAR}function H(P){const M=P.target;M.removeEventListener("dispose",H),B(M),M.isVideoTexture&&_.delete(M)}function j(P){const M=P.target;M.removeEventListener("dispose",j),I(M)}function B(P){const M=n.get(P);if(M.__webglInit===void 0)return;const q=P.source,re=m.get(q);if(re){const ne=re[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&L(P),Object.keys(re).length===0&&m.delete(q)}n.remove(P)}function L(P){const M=n.get(P);i.deleteTexture(M.__webglTexture);const q=P.source,re=m.get(q);delete re[M.__cacheKey],a.memory.textures--}function I(P){const M=P.texture,q=n.get(P),re=n.get(M);if(re.__webglTexture!==void 0&&(i.deleteTexture(re.__webglTexture),a.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(q.__webglFramebuffer[ne]))for(let se=0;se<q.__webglFramebuffer[ne].length;se++)i.deleteFramebuffer(q.__webglFramebuffer[ne][se]);else i.deleteFramebuffer(q.__webglFramebuffer[ne]);q.__webglDepthbuffer&&i.deleteRenderbuffer(q.__webglDepthbuffer[ne])}else{if(Array.isArray(q.__webglFramebuffer))for(let ne=0;ne<q.__webglFramebuffer.length;ne++)i.deleteFramebuffer(q.__webglFramebuffer[ne]);else i.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&i.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&i.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let ne=0;ne<q.__webglColorRenderbuffer.length;ne++)q.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(q.__webglColorRenderbuffer[ne]);q.__webglDepthRenderbuffer&&i.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ne=0,se=M.length;ne<se;ne++){const ye=n.get(M[ne]);ye.__webglTexture&&(i.deleteTexture(ye.__webglTexture),a.memory.textures--),n.remove(M[ne])}n.remove(M),n.remove(P)}let D=0;function W(){D=0}function Z(){const P=D;return P>=c&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+c),D+=1,P}function $(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function J(P,M){const q=n.get(P);if(P.isVideoTexture&&xt(P),P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){const re=P.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(q,P,M);return}}t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+M)}function O(P,M){const q=n.get(P);if(P.version>0&&q.__version!==P.version){Ne(q,P,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+M)}function z(P,M){const q=n.get(P);if(P.version>0&&q.__version!==P.version){Ne(q,P,M);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+M)}function ue(P,M){const q=n.get(P);if(P.version>0&&q.__version!==P.version){at(q,P,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+M)}const de={[dr]:i.REPEAT,[An]:i.CLAMP_TO_EDGE,[fl]:i.MIRRORED_REPEAT},me={[Zt]:i.NEAREST,[Cc]:i.NEAREST_MIPMAP_NEAREST,[ua]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[Mp]:i.LINEAR_MIPMAP_NEAREST,[fr]:i.LINEAR_MIPMAP_LINEAR},Ee={[Bp]:i.NEVER,[qp]:i.ALWAYS,[zp]:i.LESS,[Vp]:i.LEQUAL,[kp]:i.EQUAL,[Wp]:i.GEQUAL,[Hp]:i.GREATER,[Gp]:i.NOTEQUAL};function Fe(P,M,q){if(q?(i.texParameteri(P,i.TEXTURE_WRAP_S,de[M.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,de[M.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,de[M.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,me[M.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,me[M.minFilter])):(i.texParameteri(P,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(P,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==An||M.wrapT!==An)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(P,i.TEXTURE_MAG_FILTER,A(M.magFilter)),i.texParameteri(P,i.TEXTURE_MIN_FILTER,A(M.minFilter)),M.minFilter!==Zt&&M.minFilter!==fn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Ee[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Zt||M.minFilter!==ua&&M.minFilter!==fr||M.type===Si&&e.has("OES_texture_float_linear")===!1||l===!1&&M.type===pr&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(P,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function be(P,M){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",H));const re=M.source;let ne=m.get(re);ne===void 0&&(ne={},m.set(re,ne));const se=$(M);if(se!==P.__cacheKey){ne[se]===void 0&&(ne[se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),ne[se].usedTimes++;const ye=ne[P.__cacheKey];ye!==void 0&&(ne[P.__cacheKey].usedTimes--,ye.usedTimes===0&&L(M)),P.__cacheKey=se,P.__webglTexture=ne[se].texture}return q}function Ne(P,M,q){let re=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=i.TEXTURE_3D);const ne=be(P,M),se=M.source;t.bindTexture(re,P.__webglTexture,i.TEXTURE0+q);const ye=n.get(se);if(se.version!==ye.__version||ne===!0){t.activeTexture(i.TEXTURE0+q);const ae=rt.getPrimaries(rt.workingColorSpace),fe=M.colorSpace===gn?null:rt.getPrimaries(M.colorSpace),Le=M.colorSpace===gn||ae===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Ke=b(M)&&E(M.image)===!1;let oe=x(M.image,Ke,!1,h);oe=St(M,oe);const st=E(oe)||l,Be=o.convert(M.format,M.colorSpace);let Ie=o.convert(M.type),Me=k(M.internalFormat,Be,Ie,M.colorSpace,M.isVideoTexture);Fe(re,M,st);let ve;const Ye=M.mipmaps,F=l&&M.isVideoTexture!==!0,pe=ye.__version===void 0||ne===!0,le=w(M,oe,st);if(M.isDepthTexture)Me=i.DEPTH_COMPONENT,l?M.type===Si?Me=i.DEPTH_COMPONENT32F:M.type===xi?Me=i.DEPTH_COMPONENT24:M.type===Hi?Me=i.DEPTH24_STENCIL8:Me=i.DEPTH_COMPONENT16:M.type===Si&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Gi&&Me===i.DEPTH_COMPONENT&&M.type!==kl&&M.type!==xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=xi,Ie=o.convert(M.type)),M.format===ws&&Me===i.DEPTH_COMPONENT&&(Me=i.DEPTH_STENCIL,M.type!==Hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Hi,Ie=o.convert(M.type))),pe&&(F?t.texStorage2D(i.TEXTURE_2D,1,Me,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,Me,oe.width,oe.height,0,Be,Ie,null));else if(M.isDataTexture)if(Ye.length>0&&st){F&&pe&&t.texStorage2D(i.TEXTURE_2D,le,Me,Ye[0].width,Ye[0].height);for(let Q=0,ce=Ye.length;Q<ce;Q++)ve=Ye[Q],F?t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ve.width,ve.height,Be,Ie,ve.data):t.texImage2D(i.TEXTURE_2D,Q,Me,ve.width,ve.height,0,Be,Ie,ve.data);M.generateMipmaps=!1}else F?(pe&&t.texStorage2D(i.TEXTURE_2D,le,Me,oe.width,oe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe.width,oe.height,Be,Ie,oe.data)):t.texImage2D(i.TEXTURE_2D,0,Me,oe.width,oe.height,0,Be,Ie,oe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){F&&pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,Me,Ye[0].width,Ye[0].height,oe.depth);for(let Q=0,ce=Ye.length;Q<ce;Q++)ve=Ye[Q],M.format!==Rn?Be!==null?F?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ve.width,ve.height,oe.depth,Be,ve.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Me,ve.width,ve.height,oe.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ve.width,ve.height,oe.depth,Be,Ie,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,Me,ve.width,ve.height,oe.depth,0,Be,Ie,ve.data)}else{F&&pe&&t.texStorage2D(i.TEXTURE_2D,le,Me,Ye[0].width,Ye[0].height);for(let Q=0,ce=Ye.length;Q<ce;Q++)ve=Ye[Q],M.format!==Rn?Be!==null?F?t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,ve.width,ve.height,Be,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,Me,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ve.width,ve.height,Be,Ie,ve.data):t.texImage2D(i.TEXTURE_2D,Q,Me,ve.width,ve.height,0,Be,Ie,ve.data)}else if(M.isDataArrayTexture)F?(pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,Me,oe.width,oe.height,oe.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Be,Ie,oe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,oe.width,oe.height,oe.depth,0,Be,Ie,oe.data);else if(M.isData3DTexture)F?(pe&&t.texStorage3D(i.TEXTURE_3D,le,Me,oe.width,oe.height,oe.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Be,Ie,oe.data)):t.texImage3D(i.TEXTURE_3D,0,Me,oe.width,oe.height,oe.depth,0,Be,Ie,oe.data);else if(M.isFramebufferTexture){if(pe)if(F)t.texStorage2D(i.TEXTURE_2D,le,Me,oe.width,oe.height);else{let Q=oe.width,ce=oe.height;for(let Re=0;Re<le;Re++)t.texImage2D(i.TEXTURE_2D,Re,Me,Q,ce,0,Be,Ie,null),Q>>=1,ce>>=1}}else if(Ye.length>0&&st){F&&pe&&t.texStorage2D(i.TEXTURE_2D,le,Me,Ye[0].width,Ye[0].height);for(let Q=0,ce=Ye.length;Q<ce;Q++)ve=Ye[Q],F?t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Be,Ie,ve):t.texImage2D(i.TEXTURE_2D,Q,Me,Be,Ie,ve);M.generateMipmaps=!1}else F?(pe&&t.texStorage2D(i.TEXTURE_2D,le,Me,oe.width,oe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Be,Ie,oe)):t.texImage2D(i.TEXTURE_2D,0,Me,Be,Ie,oe);R(M,st)&&C(re),ye.__version=se.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function at(P,M,q){if(M.image.length!==6)return;const re=be(P,M),ne=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+q);const se=n.get(ne);if(ne.version!==se.__version||re===!0){t.activeTexture(i.TEXTURE0+q);const ye=rt.getPrimaries(rt.workingColorSpace),ae=M.colorSpace===gn?null:rt.getPrimaries(M.colorSpace),fe=M.colorSpace===gn||ye===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Le=M.isCompressedTexture||M.image[0].isCompressedTexture,Ke=M.image[0]&&M.image[0].isDataTexture,oe=[];for(let Q=0;Q<6;Q++)!Le&&!Ke?oe[Q]=x(M.image[Q],!1,!0,u):oe[Q]=Ke?M.image[Q].image:M.image[Q],oe[Q]=St(M,oe[Q]);const st=oe[0],Be=E(st)||l,Ie=o.convert(M.format,M.colorSpace),Me=o.convert(M.type),ve=k(M.internalFormat,Ie,Me,M.colorSpace),Ye=l&&M.isVideoTexture!==!0,F=se.__version===void 0||re===!0;let pe=w(M,st,Be);Fe(i.TEXTURE_CUBE_MAP,M,Be);let le;if(Le){Ye&&F&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,ve,st.width,st.height);for(let Q=0;Q<6;Q++){le=oe[Q].mipmaps;for(let ce=0;ce<le.length;ce++){const Re=le[ce];M.format!==Rn?Ie!==null?Ye?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,0,0,Re.width,Re.height,Ie,Re.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,ve,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,0,0,Re.width,Re.height,Ie,Me,Re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,ve,Re.width,Re.height,0,Ie,Me,Re.data)}}}else{le=M.mipmaps,Ye&&F&&(le.length>0&&pe++,t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,ve,oe[0].width,oe[0].height));for(let Q=0;Q<6;Q++)if(Ke){Ye?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,oe[Q].width,oe[Q].height,Ie,Me,oe[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ve,oe[Q].width,oe[Q].height,0,Ie,Me,oe[Q].data);for(let ce=0;ce<le.length;ce++){const Ze=le[ce].image[Q].image;Ye?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,0,0,Ze.width,Ze.height,Ie,Me,Ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,ve,Ze.width,Ze.height,0,Ie,Me,Ze.data)}}else{Ye?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ie,Me,oe[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ve,Ie,Me,oe[Q]);for(let ce=0;ce<le.length;ce++){const Re=le[ce];Ye?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,0,0,Ie,Me,Re.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,ve,Ie,Me,Re.image[Q])}}}R(M,Be)&&C(i.TEXTURE_CUBE_MAP),se.__version=ne.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Ue(P,M,q,re,ne,se){const ye=o.convert(q.format,q.colorSpace),ae=o.convert(q.type),fe=k(q.internalFormat,ye,ae,q.colorSpace);if(!n.get(M).__hasExternalTextures){const Ke=Math.max(1,M.width>>se),oe=Math.max(1,M.height>>se);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,se,fe,Ke,oe,M.depth,0,ye,ae,null):t.texImage2D(ne,se,fe,Ke,oe,0,ye,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),nt(M)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,ne,n.get(q).__webglTexture,0,Ve(M)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,ne,n.get(q).__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function G(P,M,q){if(i.bindRenderbuffer(i.RENDERBUFFER,P),M.depthBuffer&&!M.stencilBuffer){let re=l===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(q||nt(M)){const ne=M.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Si?re=i.DEPTH_COMPONENT32F:ne.type===xi&&(re=i.DEPTH_COMPONENT24));const se=Ve(M);nt(M)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,re,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,se,re,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,re,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,P)}else if(M.depthBuffer&&M.stencilBuffer){const re=Ve(M);q&&nt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,i.DEPTH24_STENCIL8,M.width,M.height):nt(M)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,P)}else{const re=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ne=0;ne<re.length;ne++){const se=re[ne],ye=o.convert(se.format,se.colorSpace),ae=o.convert(se.type),fe=k(se.internalFormat,ye,ae,se.colorSpace),Le=Ve(M);q&&nt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,fe,M.width,M.height):nt(M)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le,fe,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,fe,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function kt(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),J(M.depthTexture,0);const re=n.get(M.depthTexture).__webglTexture,ne=Ve(M);if(M.depthTexture.format===Gi)nt(M)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(M.depthTexture.format===ws)nt(M)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Se(P){const M=n.get(P),q=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");kt(M.__webglFramebuffer,P)}else if(q){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]=i.createRenderbuffer(),G(M.__webglDepthbuffer[re],P,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),G(M.__webglDepthbuffer,P,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(P,M,q){const re=n.get(P);M!==void 0&&Ue(re.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Se(P)}function Ae(P){const M=P.texture,q=n.get(P),re=n.get(M);P.addEventListener("dispose",j),P.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=M.version,a.memory.textures++);const ne=P.isWebGLCubeRenderTarget===!0,se=P.isWebGLMultipleRenderTargets===!0,ye=E(P)||l;if(ne){q.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(l&&M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer[ae]=[];for(let fe=0;fe<M.mipmaps.length;fe++)q.__webglFramebuffer[ae][fe]=i.createFramebuffer()}else q.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(l&&M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer=[];for(let ae=0;ae<M.mipmaps.length;ae++)q.__webglFramebuffer[ae]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(se)if(s.drawBuffers){const ae=P.texture;for(let fe=0,Le=ae.length;fe<Le;fe++){const Ke=n.get(ae[fe]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&P.samples>0&&nt(P)===!1){const ae=se?M:[M];q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let fe=0;fe<ae.length;fe++){const Le=ae[fe];q.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[fe]);const Ke=o.convert(Le.format,Le.colorSpace),oe=o.convert(Le.type),st=k(Le.internalFormat,Ke,oe,Le.colorSpace,P.isXRRenderTarget===!0),Be=Ve(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,st,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,q.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),G(q.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,M,ye);for(let ae=0;ae<6;ae++)if(l&&M.mipmaps&&M.mipmaps.length>0)for(let fe=0;fe<M.mipmaps.length;fe++)Ue(q.__webglFramebuffer[ae][fe],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,fe);else Ue(q.__webglFramebuffer[ae],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);R(M,ye)&&C(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){const ae=P.texture;for(let fe=0,Le=ae.length;fe<Le;fe++){const Ke=ae[fe],oe=n.get(Ke);t.bindTexture(i.TEXTURE_2D,oe.__webglTexture),Fe(i.TEXTURE_2D,Ke,ye),Ue(q.__webglFramebuffer,P,Ke,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,0),R(Ke,ye)&&C(i.TEXTURE_2D)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(l?ae=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,re.__webglTexture),Fe(ae,M,ye),l&&M.mipmaps&&M.mipmaps.length>0)for(let fe=0;fe<M.mipmaps.length;fe++)Ue(q.__webglFramebuffer[fe],P,M,i.COLOR_ATTACHMENT0,ae,fe);else Ue(q.__webglFramebuffer,P,M,i.COLOR_ATTACHMENT0,ae,0);R(M,ye)&&C(ae),t.unbindTexture()}P.depthBuffer&&Se(P)}function lt(P){const M=E(P)||l,q=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let re=0,ne=q.length;re<ne;re++){const se=q[re];if(R(se,M)){const ye=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ae=n.get(se).__webglTexture;t.bindTexture(ye,ae),C(ye),t.unbindTexture()}}}function Oe(P){if(l&&P.samples>0&&nt(P)===!1){const M=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],q=P.width,re=P.height;let ne=i.COLOR_BUFFER_BIT;const se=[],ye=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(P),fe=P.isWebGLMultipleRenderTargets===!0;if(fe)for(let Le=0;Le<M.length;Le++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let Le=0;Le<M.length;Le++){se.push(i.COLOR_ATTACHMENT0+Le),P.depthBuffer&&se.push(ye);const Ke=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(Ke===!1&&(P.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),fe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[Le]),Ke===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ye]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ye])),fe){const oe=n.get(M[Le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,q,re,0,0,q,re,ne,i.NEAREST),g&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let Le=0;Le<M.length;Le++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,ae.__webglColorRenderbuffer[Le]);const Ke=n.get(M[Le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,Ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Ve(P){return Math.min(f,P.samples)}function nt(P){const M=n.get(P);return l&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function xt(P){const M=a.render.frame;_.get(P)!==M&&(_.set(P,M),P.update())}function St(P,M){const q=P.colorSpace,re=P.format,ne=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===pl||q!==li&&q!==gn&&(rt.getTransfer(q)===dt?l===!1?e.has("EXT_sRGB")===!0&&re===Rn?(P.format=pl,P.minFilter=fn,P.generateMipmaps=!1):M=ad.sRGBToLinear(M):(re!==Rn||ne!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),M}this.allocateTextureUnit=Z,this.resetTextureUnits=W,this.setTexture2D=J,this.setTexture2DArray=O,this.setTexture3D=z,this.setTextureCube=ue,this.rebindTextures=Te,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=nt}function sy(i,e,t){const n=t.isWebGL2;function s(o,a=gn){let l;const c=rt.getTransfer(a);if(o===bi)return i.UNSIGNED_BYTE;if(o===ed)return i.UNSIGNED_SHORT_4_4_4_4;if(o===td)return i.UNSIGNED_SHORT_5_5_5_1;if(o===bp)return i.BYTE;if(o===Tp)return i.SHORT;if(o===kl)return i.UNSIGNED_SHORT;if(o===Qh)return i.INT;if(o===xi)return i.UNSIGNED_INT;if(o===Si)return i.FLOAT;if(o===pr)return n?i.HALF_FLOAT:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(o===Ap)return i.ALPHA;if(o===Rn)return i.RGBA;if(o===Rp)return i.LUMINANCE;if(o===Cp)return i.LUMINANCE_ALPHA;if(o===Gi)return i.DEPTH_COMPONENT;if(o===ws)return i.DEPTH_STENCIL;if(o===pl)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(o===Pp)return i.RED;if(o===nd)return i.RED_INTEGER;if(o===Lp)return i.RG;if(o===id)return i.RG_INTEGER;if(o===sd)return i.RGBA_INTEGER;if(o===ha||o===da||o===fa||o===pa)if(c===dt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(o===ha)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===da)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===fa)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===pa)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(o===ha)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===da)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===fa)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===pa)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Pc||o===Lc||o===Nc||o===Ic)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(o===Pc)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Lc)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Nc)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Ic)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Np)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Dc||o===Uc)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(o===Dc)return c===dt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(o===Uc)return c===dt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Fc||o===Oc||o===Bc||o===zc||o===kc||o===Vc||o===Hc||o===Gc||o===Wc||o===qc||o===Xc||o===jc||o===Yc||o===$c)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(o===Fc)return c===dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Oc)return c===dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Bc)return c===dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===zc)return c===dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===kc)return c===dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Vc)return c===dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Hc)return c===dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Gc)return c===dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Wc)return c===dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===qc)return c===dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Xc)return c===dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===jc)return c===dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Yc)return c===dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===$c)return c===dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===ma||o===Kc||o===Zc)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(o===ma)return c===dt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===Kc)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Zc)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===Ip||o===Jc||o===Qc||o===eu)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(o===ma)return l.COMPRESSED_RED_RGTC1_EXT;if(o===Jc)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Qc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===eu)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Hi?n?i.UNSIGNED_INT_24_8:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):i[o]!==void 0?i[o]:null}return{convert:s}}class ry extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vi extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oy={type:"move"};class Ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,o=null,a=null;const l=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(u,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=h.position.distanceTo(f.position),g=.02,_=.005;u.inputState.pinching&&d>g+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=g-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(oy)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Vi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ay extends nn{constructor(e,t,n,s,o,a,l,c,u,h){if(h=h!==void 0?h:Gi,h!==Gi&&h!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Gi&&(n=xi),n===void 0&&h===ws&&(n=Hi),super(null,s,o,a,l,c,h,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:Zt,this.minFilter=c!==void 0?c:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ly extends Cs{constructor(e,t){super();const n=this;let s=null,o=1,a=null,l="local-floor",c=1,u=null,h=null,f=null,d=null,g=null,_=null;const v=t.getContextAttributes();let m=null,p=null;const y=[],x=[],E=new pn;E.layers.enable(1),E.viewport=new zt;const b=new pn;b.layers.enable(2),b.viewport=new zt;const R=[E,b],C=new ry;C.layers.enable(1),C.layers.enable(2);let k=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let z=y[O];return z===void 0&&(z=new Ba,y[O]=z),z.getTargetRaySpace()},this.getControllerGrip=function(O){let z=y[O];return z===void 0&&(z=new Ba,y[O]=z),z.getGripSpace()},this.getHand=function(O){let z=y[O];return z===void 0&&(z=new Ba,y[O]=z),z.getHandSpace()};function A(O){const z=x.indexOf(O.inputSource);if(z===-1)return;const ue=y[z];ue!==void 0&&(ue.update(O.inputSource,O.frame,u||a),ue.dispatchEvent({type:O.type,data:O.inputSource}))}function H(){s.removeEventListener("select",A),s.removeEventListener("selectstart",A),s.removeEventListener("selectend",A),s.removeEventListener("squeeze",A),s.removeEventListener("squeezestart",A),s.removeEventListener("squeezeend",A),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",j);for(let O=0;O<y.length;O++){const z=x[O];z!==null&&(x[O]=null,y[O].disconnect(z))}k=null,w=null,e.setRenderTarget(m),g=null,d=null,f=null,s=null,p=null,J.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){o=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){l=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(O){u=O},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",A),s.addEventListener("selectstart",A),s.addEventListener("selectend",A),s.addEventListener("squeeze",A),s.addEventListener("squeezestart",A),s.addEventListener("squeezeend",A),s.addEventListener("end",H),s.addEventListener("inputsourceschange",j),v.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const z={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:o};g=new XRWebGLLayer(s,t,z),s.updateRenderState({baseLayer:g}),p=new qi(g.framebufferWidth,g.framebufferHeight,{format:Rn,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let z=null,ue=null,de=null;v.depth&&(de=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,z=v.stencil?ws:Gi,ue=v.stencil?Hi:xi);const me={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:o};f=new XRWebGLBinding(s,t),d=f.createProjectionLayer(me),s.updateRenderState({layers:[d]}),p=new qi(d.textureWidth,d.textureHeight,{format:Rn,type:bi,depthTexture:new ay(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Ee=e.properties.get(p);Ee.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await s.requestReferenceSpace(l),J.setContext(s),J.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function j(O){for(let z=0;z<O.removed.length;z++){const ue=O.removed[z],de=x.indexOf(ue);de>=0&&(x[de]=null,y[de].disconnect(ue))}for(let z=0;z<O.added.length;z++){const ue=O.added[z];let de=x.indexOf(ue);if(de===-1){for(let Ee=0;Ee<y.length;Ee++)if(Ee>=x.length){x.push(ue),de=Ee;break}else if(x[Ee]===null){x[Ee]=ue,de=Ee;break}if(de===-1)break}const me=y[de];me&&me.connect(ue)}}const B=new U,L=new U;function I(O,z,ue){B.setFromMatrixPosition(z.matrixWorld),L.setFromMatrixPosition(ue.matrixWorld);const de=B.distanceTo(L),me=z.projectionMatrix.elements,Ee=ue.projectionMatrix.elements,Fe=me[14]/(me[10]-1),be=me[14]/(me[10]+1),Ne=(me[9]+1)/me[5],at=(me[9]-1)/me[5],Ue=(me[8]-1)/me[0],G=(Ee[8]+1)/Ee[0],kt=Fe*Ue,Se=Fe*G,Te=de/(-Ue+G),Ae=Te*-Ue;z.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Ae),O.translateZ(Te),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const lt=Fe+Te,Oe=be+Te,Ve=kt-Ae,nt=Se+(de-Ae),xt=Ne*be/Oe*lt,St=at*be/Oe*lt;O.projectionMatrix.makePerspective(Ve,nt,xt,St,lt,Oe),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function D(O,z){z===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(z.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;C.near=b.near=E.near=O.near,C.far=b.far=E.far=O.far,(k!==C.near||w!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),k=C.near,w=C.far);const z=O.parent,ue=C.cameras;D(C,z);for(let de=0;de<ue.length;de++)D(ue[de],z);ue.length===2?I(C,E,b):C.projectionMatrix.copy(E.projectionMatrix),W(O,C,z)};function W(O,z,ue){ue===null?O.matrix.copy(z.matrixWorld):(O.matrix.copy(ue.matrixWorld),O.matrix.invert(),O.matrix.multiply(z.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(z.projectionMatrix),O.projectionMatrixInverse.copy(z.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=mr*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&g===null))return c},this.setFoveation=function(O){c=O,d!==null&&(d.fixedFoveation=O),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=O)};let Z=null;function $(O,z){if(h=z.getViewerPose(u||a),_=z,h!==null){const ue=h.views;g!==null&&(e.setRenderTargetFramebuffer(p,g.framebuffer),e.setRenderTarget(p));let de=!1;ue.length!==C.cameras.length&&(C.cameras.length=0,de=!0);for(let me=0;me<ue.length;me++){const Ee=ue[me];let Fe=null;if(g!==null)Fe=g.getViewport(Ee);else{const Ne=f.getViewSubImage(d,Ee);Fe=Ne.viewport,me===0&&(e.setRenderTargetTextures(p,Ne.colorTexture,d.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(p))}let be=R[me];be===void 0&&(be=new pn,be.layers.enable(me),be.viewport=new zt,R[me]=be),be.matrix.fromArray(Ee.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(Ee.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),me===0&&(C.matrix.copy(be.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),de===!0&&C.cameras.push(be)}}for(let ue=0;ue<y.length;ue++){const de=x[ue],me=y[ue];de!==null&&me!==void 0&&me.update(de,z,u||a)}Z&&Z(O,z),z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:z}),_=null}const J=new vd;J.setAnimationLoop($),this.setAnimationLoop=function(O){Z=O},this.dispose=function(){}}}function cy(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,pd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,x,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),f(m,p)):p.isMeshPhongMaterial?(o(m,p),h(m,p)):p.isMeshStandardMaterial?(o(m,p),d(m,p),p.isMeshPhysicalMaterial&&g(m,p,E)):p.isMeshMatcapMaterial?(o(m,p),_(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),v(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&l(m,p)):p.isPointsMaterial?c(m,p,y,x):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function l(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function g(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function uy(i,e,t,n){let s={},o={},a=[];const l=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,x){const E=x.program;n.uniformBlockBinding(y,E)}function u(y,x){let E=s[y.id];E===void 0&&(_(y),E=h(y),s[y.id]=E,y.addEventListener("dispose",m));const b=x.program;n.updateUBOMapping(y,b);const R=e.render.frame;o[y.id]!==R&&(d(y),o[y.id]=R)}function h(y){const x=f();y.__bindingPointIndex=x;const E=i.createBuffer(),b=y.__size,R=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,b,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,E),E}function f(){for(let y=0;y<l;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=s[y.id],E=y.uniforms,b=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let R=0,C=E.length;R<C;R++){const k=E[R];if(g(k,R,b)===!0){const w=k.__offset,A=Array.isArray(k.value)?k.value:[k.value];let H=0;for(let j=0;j<A.length;j++){const B=A[j],L=v(B);typeof B=="number"?(k.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,w+H,k.__data)):B.isMatrix3?(k.__data[0]=B.elements[0],k.__data[1]=B.elements[1],k.__data[2]=B.elements[2],k.__data[3]=B.elements[0],k.__data[4]=B.elements[3],k.__data[5]=B.elements[4],k.__data[6]=B.elements[5],k.__data[7]=B.elements[0],k.__data[8]=B.elements[6],k.__data[9]=B.elements[7],k.__data[10]=B.elements[8],k.__data[11]=B.elements[0]):(B.toArray(k.__data,H),H+=L.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,w,k.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(y,x,E){const b=y.value;if(E[x]===void 0){if(typeof b=="number")E[x]=b;else{const R=Array.isArray(b)?b:[b],C=[];for(let k=0;k<R.length;k++)C.push(R[k].clone());E[x]=C}return!0}else if(typeof b=="number"){if(E[x]!==b)return E[x]=b,!0}else{const R=Array.isArray(E[x])?E[x]:[E[x]],C=Array.isArray(b)?b:[b];for(let k=0;k<R.length;k++){const w=R[k];if(w.equals(C[k])===!1)return w.copy(C[k]),!0}}return!1}function _(y){const x=y.uniforms;let E=0;const b=16;let R=0;for(let C=0,k=x.length;C<k;C++){const w=x[C],A={boundary:0,storage:0},H=Array.isArray(w.value)?w.value:[w.value];for(let j=0,B=H.length;j<B;j++){const L=H[j],I=v(L);A.boundary+=I.boundary,A.storage+=I.storage}if(w.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=E,C>0){R=E%b;const j=b-R;R!==0&&j-A.boundary<0&&(E+=b-R,w.__offset=E)}E+=A.storage}return R=E%b,R>0&&(E+=b-R),y.__size=E,y.__cache={},this}function v(y){const x={boundary:0,storage:0};return typeof y=="number"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const E=a.indexOf(x.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete o[x.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},o={}}return{bind:c,update:u,dispose:p}}class wd{constructor(e={}){const{canvas:t=am(),context:n=null,depth:s=!0,stencil:o=!0,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const g=new Uint32Array(4),_=new Int32Array(4);let v=null,m=null;const p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ht,this._useLegacyLights=!1,this.toneMapping=Mi,this.toneMappingExposure=1;const x=this;let E=!1,b=0,R=0,C=null,k=-1,w=null;const A=new zt,H=new zt;let j=null;const B=new Xe(0);let L=0,I=t.width,D=t.height,W=1,Z=null,$=null;const J=new zt(0,0,I,D),O=new zt(0,0,I,D);let z=!1;const ue=new _d;let de=!1,me=!1,Ee=null;const Fe=new Ct,be=new it,Ne=new U,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return C===null?W:1}let G=n;function kt(T,V){for(let X=0;X<T.length;X++){const Y=T[X],K=t.getContext(Y,V);if(K!==null)return K}return null}try{const T={alpha:!0,depth:s,stencil:o,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zl}`),t.addEventListener("webglcontextlost",Ye,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",pe,!1),G===null){const V=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&V.shift(),G=kt(V,T),G===null)throw kt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Se,Te,Ae,lt,Oe,Ve,nt,xt,St,P,M,q,re,ne,se,ye,ae,fe,Le,Ke,oe,st,Be,Ie;function Me(){Se=new x0(G),Te=new f0(G,Se,e),Se.init(Te),st=new sy(G,Se,Te),Ae=new ny(G,Se,Te),lt=new w0(G),Oe=new Hv,Ve=new iy(G,Se,Ae,Oe,Te,st,lt),nt=new m0(x),xt=new y0(x),St=new Nm(G,Te),Be=new h0(G,Se,St,Te),P=new S0(G,St,lt,Be),M=new A0(G,P,St,lt),Le=new T0(G,Te,Ve),ye=new p0(Oe),q=new Vv(x,nt,xt,Se,Te,Be,ye),re=new cy(x,Oe),ne=new Wv,se=new Kv(Se,Te),fe=new u0(x,nt,xt,Ae,M,d,c),ae=new ty(x,M,Te),Ie=new uy(G,lt,Te,Ae),Ke=new d0(G,Se,lt,Te),oe=new E0(G,Se,lt,Te),lt.programs=q.programs,x.capabilities=Te,x.extensions=Se,x.properties=Oe,x.renderLists=ne,x.shadowMap=ae,x.state=Ae,x.info=lt}Me();const ve=new ly(x,G);this.xr=ve,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const T=Se.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Se.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(I,D,!1))},this.getSize=function(T){return T.set(I,D)},this.setSize=function(T,V,X=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=T,D=V,t.width=Math.floor(T*W),t.height=Math.floor(V*W),X===!0&&(t.style.width=T+"px",t.style.height=V+"px"),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(I*W,D*W).floor()},this.setDrawingBufferSize=function(T,V,X){I=T,D=V,W=X,t.width=Math.floor(T*X),t.height=Math.floor(V*X),this.setViewport(0,0,T,V)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(J)},this.setViewport=function(T,V,X,Y){T.isVector4?J.set(T.x,T.y,T.z,T.w):J.set(T,V,X,Y),Ae.viewport(A.copy(J).multiplyScalar(W).floor())},this.getScissor=function(T){return T.copy(O)},this.setScissor=function(T,V,X,Y){T.isVector4?O.set(T.x,T.y,T.z,T.w):O.set(T,V,X,Y),Ae.scissor(H.copy(O).multiplyScalar(W).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(T){Ae.setScissorTest(z=T)},this.setOpaqueSort=function(T){Z=T},this.setTransparentSort=function(T){$=T},this.getClearColor=function(T){return T.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor.apply(fe,arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha.apply(fe,arguments)},this.clear=function(T=!0,V=!0,X=!0){let Y=0;if(T){let K=!1;if(C!==null){const ge=C.texture.format;K=ge===sd||ge===id||ge===nd}if(K){const ge=C.texture.type,xe=ge===bi||ge===xi||ge===kl||ge===Hi||ge===ed||ge===td,Ce=fe.getClearColor(),De=fe.getClearAlpha(),Ge=Ce.r,ze=Ce.g,ke=Ce.b;xe?(g[0]=Ge,g[1]=ze,g[2]=ke,g[3]=De,G.clearBufferuiv(G.COLOR,0,g)):(_[0]=Ge,_[1]=ze,_[2]=ke,_[3]=De,G.clearBufferiv(G.COLOR,0,_))}else Y|=G.COLOR_BUFFER_BIT}V&&(Y|=G.DEPTH_BUFFER_BIT),X&&(Y|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ye,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),ne.dispose(),se.dispose(),Oe.dispose(),nt.dispose(),xt.dispose(),M.dispose(),Be.dispose(),Ie.dispose(),q.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",un),ve.removeEventListener("sessionend",ct),Ee&&(Ee.dispose(),Ee=null),Xt.stop()};function Ye(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const T=lt.autoReset,V=ae.enabled,X=ae.autoUpdate,Y=ae.needsUpdate,K=ae.type;Me(),lt.autoReset=T,ae.enabled=V,ae.autoUpdate=X,ae.needsUpdate=Y,ae.type=K}function pe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function le(T){const V=T.target;V.removeEventListener("dispose",le),Q(V)}function Q(T){ce(T),Oe.remove(T)}function ce(T){const V=Oe.get(T).programs;V!==void 0&&(V.forEach(function(X){q.releaseProgram(X)}),T.isShaderMaterial&&q.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,X,Y,K,ge){V===null&&(V=at);const xe=K.isMesh&&K.matrixWorld.determinant()<0,Ce=zf(T,V,X,Y,K);Ae.setMaterial(Y,xe);let De=X.index,Ge=1;if(Y.wireframe===!0){if(De=P.getWireframeAttribute(X),De===void 0)return;Ge=2}const ze=X.drawRange,ke=X.attributes.position;let yt=ze.start*Ge,rn=(ze.start+ze.count)*Ge;ge!==null&&(yt=Math.max(yt,ge.start*Ge),rn=Math.min(rn,(ge.start+ge.count)*Ge)),De!==null?(yt=Math.max(yt,0),rn=Math.min(rn,De.count)):ke!=null&&(yt=Math.max(yt,0),rn=Math.min(rn,ke.count));const Ft=rn-yt;if(Ft<0||Ft===1/0)return;Be.setup(K,Y,Ce,X,De);let qn,mt=Ke;if(De!==null&&(qn=St.get(De),mt=oe,mt.setIndex(qn)),K.isMesh)Y.wireframe===!0?(Ae.setLineWidth(Y.wireframeLinewidth*Ue()),mt.setMode(G.LINES)):mt.setMode(G.TRIANGLES);else if(K.isLine){let qe=Y.linewidth;qe===void 0&&(qe=1),Ae.setLineWidth(qe*Ue()),K.isLineSegments?mt.setMode(G.LINES):K.isLineLoop?mt.setMode(G.LINE_LOOP):mt.setMode(G.LINE_STRIP)}else K.isPoints?mt.setMode(G.POINTS):K.isSprite&&mt.setMode(G.TRIANGLES);if(K.isInstancedMesh)mt.renderInstances(yt,Ft,K.count);else if(X.isInstancedBufferGeometry){const qe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,oa=Math.min(X.instanceCount,qe);mt.renderInstances(yt,Ft,oa)}else mt.render(yt,Ft)};function Re(T,V,X){T.transparent===!0&&T.side===ri&&T.forceSinglePass===!1?(T.side=tn,T.needsUpdate=!0,Ur(T,V,X),T.side=Ti,T.needsUpdate=!0,Ur(T,V,X),T.side=ri):Ur(T,V,X)}this.compile=function(T,V,X=null){X===null&&(X=T),m=se.get(X),m.init(),y.push(m),X.traverseVisible(function(K){K.isLight&&K.layers.test(V.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),T!==X&&T.traverseVisible(function(K){K.isLight&&K.layers.test(V.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),m.setupLights(x._useLegacyLights);const Y=new Set;return T.traverse(function(K){const ge=K.material;if(ge)if(Array.isArray(ge))for(let xe=0;xe<ge.length;xe++){const Ce=ge[xe];Re(Ce,X,K),Y.add(Ce)}else Re(ge,X,K),Y.add(ge)}),y.pop(),m=null,Y},this.compileAsync=function(T,V,X=null){const Y=this.compile(T,V,X);return new Promise(K=>{function ge(){if(Y.forEach(function(xe){Oe.get(xe).currentProgram.isReady()&&Y.delete(xe)}),Y.size===0){K(T);return}setTimeout(ge,10)}Se.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Ze=null;function Et(T){Ze&&Ze(T)}function un(){Xt.stop()}function ct(){Xt.start()}const Xt=new vd;Xt.setAnimationLoop(Et),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(T){Ze=T,ve.setAnimationLoop(T),T===null?Xt.stop():Xt.start()},ve.addEventListener("sessionstart",un),ve.addEventListener("sessionend",ct),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(V),V=ve.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,V,C),m=se.get(T,y.length),m.init(),y.push(m),Fe.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),ue.setFromProjectionMatrix(Fe),me=this.localClippingEnabled,de=ye.init(this.clippingPlanes,me),v=ne.get(T,p.length),v.init(),p.push(v),Pn(T,V,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(Z,$),this.info.render.frame++,de===!0&&ye.beginShadows();const X=m.state.shadowsArray;if(ae.render(X,T,V),de===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),fe.render(v,T),m.setupLights(x._useLegacyLights),V.isArrayCamera){const Y=V.cameras;for(let K=0,ge=Y.length;K<ge;K++){const xe=Y[K];_c(v,T,xe,xe.viewport)}}else _c(v,T,V);C!==null&&(Ve.updateMultisampleRenderTarget(C),Ve.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(x,T,V),Be.resetDefaultState(),k=-1,w=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Pn(T,V,X,Y){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ue.intersectsSprite(T)){Y&&Ne.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Fe);const xe=M.update(T),Ce=T.material;Ce.visible&&v.push(T,xe,Ce,X,Ne.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ue.intersectsObject(T))){const xe=M.update(T),Ce=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ne.copy(T.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ne.copy(xe.boundingSphere.center)),Ne.applyMatrix4(T.matrixWorld).applyMatrix4(Fe)),Array.isArray(Ce)){const De=xe.groups;for(let Ge=0,ze=De.length;Ge<ze;Ge++){const ke=De[Ge],yt=Ce[ke.materialIndex];yt&&yt.visible&&v.push(T,xe,yt,X,Ne.z,ke)}}else Ce.visible&&v.push(T,xe,Ce,X,Ne.z,null)}}const ge=T.children;for(let xe=0,Ce=ge.length;xe<Ce;xe++)Pn(ge[xe],V,X,Y)}function _c(T,V,X,Y){const K=T.opaque,ge=T.transmissive,xe=T.transparent;m.setupLightsView(X),de===!0&&ye.setGlobalState(x.clippingPlanes,X),ge.length>0&&Bf(K,ge,V,X),Y&&Ae.viewport(A.copy(Y)),K.length>0&&Dr(K,V,X),ge.length>0&&Dr(ge,V,X),xe.length>0&&Dr(xe,V,X),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Bf(T,V,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const ge=Te.isWebGL2;Ee===null&&(Ee=new qi(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?pr:bi,minFilter:fr,samples:ge?4:0})),x.getDrawingBufferSize(be),ge?Ee.setSize(be.x,be.y):Ee.setSize(Do(be.x),Do(be.y));const xe=x.getRenderTarget();x.setRenderTarget(Ee),x.getClearColor(B),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const Ce=x.toneMapping;x.toneMapping=Mi,Dr(T,X,Y),Ve.updateMultisampleRenderTarget(Ee),Ve.updateRenderTargetMipmap(Ee);let De=!1;for(let Ge=0,ze=V.length;Ge<ze;Ge++){const ke=V[Ge],yt=ke.object,rn=ke.geometry,Ft=ke.material,qn=ke.group;if(Ft.side===ri&&yt.layers.test(Y.layers)){const mt=Ft.side;Ft.side=tn,Ft.needsUpdate=!0,vc(yt,X,Y,rn,Ft,qn),Ft.side=mt,Ft.needsUpdate=!0,De=!0}}De===!0&&(Ve.updateMultisampleRenderTarget(Ee),Ve.updateRenderTargetMipmap(Ee)),x.setRenderTarget(xe),x.setClearColor(B,L),x.toneMapping=Ce}function Dr(T,V,X){const Y=V.isScene===!0?V.overrideMaterial:null;for(let K=0,ge=T.length;K<ge;K++){const xe=T[K],Ce=xe.object,De=xe.geometry,Ge=Y===null?xe.material:Y,ze=xe.group;Ce.layers.test(X.layers)&&vc(Ce,V,X,De,Ge,ze)}}function vc(T,V,X,Y,K,ge){T.onBeforeRender(x,V,X,Y,K,ge),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),K.onBeforeRender(x,V,X,Y,T,ge),K.transparent===!0&&K.side===ri&&K.forceSinglePass===!1?(K.side=tn,K.needsUpdate=!0,x.renderBufferDirect(X,V,Y,K,T,ge),K.side=Ti,K.needsUpdate=!0,x.renderBufferDirect(X,V,Y,K,T,ge),K.side=ri):x.renderBufferDirect(X,V,Y,K,T,ge),T.onAfterRender(x,V,X,Y,K,ge)}function Ur(T,V,X){V.isScene!==!0&&(V=at);const Y=Oe.get(T),K=m.state.lights,ge=m.state.shadowsArray,xe=K.state.version,Ce=q.getParameters(T,K.state,ge,V,X),De=q.getProgramCacheKey(Ce);let Ge=Y.programs;Y.environment=T.isMeshStandardMaterial?V.environment:null,Y.fog=V.fog,Y.envMap=(T.isMeshStandardMaterial?xt:nt).get(T.envMap||Y.environment),Ge===void 0&&(T.addEventListener("dispose",le),Ge=new Map,Y.programs=Ge);let ze=Ge.get(De);if(ze!==void 0){if(Y.currentProgram===ze&&Y.lightsStateVersion===xe)return xc(T,Ce),ze}else Ce.uniforms=q.getUniforms(T),T.onBuild(X,Ce,x),T.onBeforeCompile(Ce,x),ze=q.acquireProgram(Ce,De),Ge.set(De,ze),Y.uniforms=Ce.uniforms;const ke=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ke.clippingPlanes=ye.uniform),xc(T,Ce),Y.needsLights=Vf(T),Y.lightsStateVersion=xe,Y.needsLights&&(ke.ambientLightColor.value=K.state.ambient,ke.lightProbe.value=K.state.probe,ke.directionalLights.value=K.state.directional,ke.directionalLightShadows.value=K.state.directionalShadow,ke.spotLights.value=K.state.spot,ke.spotLightShadows.value=K.state.spotShadow,ke.rectAreaLights.value=K.state.rectArea,ke.ltc_1.value=K.state.rectAreaLTC1,ke.ltc_2.value=K.state.rectAreaLTC2,ke.pointLights.value=K.state.point,ke.pointLightShadows.value=K.state.pointShadow,ke.hemisphereLights.value=K.state.hemi,ke.directionalShadowMap.value=K.state.directionalShadowMap,ke.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ke.spotShadowMap.value=K.state.spotShadowMap,ke.spotLightMatrix.value=K.state.spotLightMatrix,ke.spotLightMap.value=K.state.spotLightMap,ke.pointShadowMap.value=K.state.pointShadowMap,ke.pointShadowMatrix.value=K.state.pointShadowMatrix),Y.currentProgram=ze,Y.uniformsList=null,ze}function yc(T){if(T.uniformsList===null){const V=T.currentProgram.getUniforms();T.uniformsList=yo.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function xc(T,V){const X=Oe.get(T);X.outputColorSpace=V.outputColorSpace,X.instancing=V.instancing,X.instancingColor=V.instancingColor,X.skinning=V.skinning,X.morphTargets=V.morphTargets,X.morphNormals=V.morphNormals,X.morphColors=V.morphColors,X.morphTargetsCount=V.morphTargetsCount,X.numClippingPlanes=V.numClippingPlanes,X.numIntersection=V.numClipIntersection,X.vertexAlphas=V.vertexAlphas,X.vertexTangents=V.vertexTangents,X.toneMapping=V.toneMapping}function zf(T,V,X,Y,K){V.isScene!==!0&&(V=at),Ve.resetTextureUnits();const ge=V.fog,xe=Y.isMeshStandardMaterial?V.environment:null,Ce=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:li,De=(Y.isMeshStandardMaterial?xt:nt).get(Y.envMap||xe),Ge=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ze=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),ke=!!X.morphAttributes.position,yt=!!X.morphAttributes.normal,rn=!!X.morphAttributes.color;let Ft=Mi;Y.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ft=x.toneMapping);const qn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,mt=qn!==void 0?qn.length:0,qe=Oe.get(Y),oa=m.state.lights;if(de===!0&&(me===!0||T!==w)){const on=T===w&&Y.id===k;ye.setState(Y,T,on)}let wt=!1;Y.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==oa.state.version||qe.outputColorSpace!==Ce||K.isInstancedMesh&&qe.instancing===!1||!K.isInstancedMesh&&qe.instancing===!0||K.isSkinnedMesh&&qe.skinning===!1||!K.isSkinnedMesh&&qe.skinning===!0||K.isInstancedMesh&&qe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&qe.instancingColor===!1&&K.instanceColor!==null||qe.envMap!==De||Y.fog===!0&&qe.fog!==ge||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==ye.numPlanes||qe.numIntersection!==ye.numIntersection)||qe.vertexAlphas!==Ge||qe.vertexTangents!==ze||qe.morphTargets!==ke||qe.morphNormals!==yt||qe.morphColors!==rn||qe.toneMapping!==Ft||Te.isWebGL2===!0&&qe.morphTargetsCount!==mt)&&(wt=!0):(wt=!0,qe.__version=Y.version);let Ci=qe.currentProgram;wt===!0&&(Ci=Ur(Y,V,K));let Sc=!1,zs=!1,aa=!1;const jt=Ci.getUniforms(),Pi=qe.uniforms;if(Ae.useProgram(Ci.program)&&(Sc=!0,zs=!0,aa=!0),Y.id!==k&&(k=Y.id,zs=!0),Sc||w!==T){jt.setValue(G,"projectionMatrix",T.projectionMatrix),jt.setValue(G,"viewMatrix",T.matrixWorldInverse);const on=jt.map.cameraPosition;on!==void 0&&on.setValue(G,Ne.setFromMatrixPosition(T.matrixWorld)),Te.logarithmicDepthBuffer&&jt.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&jt.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),w!==T&&(w=T,zs=!0,aa=!0)}if(K.isSkinnedMesh){jt.setOptional(G,K,"bindMatrix"),jt.setOptional(G,K,"bindMatrixInverse");const on=K.skeleton;on&&(Te.floatVertexTextures?(on.boneTexture===null&&on.computeBoneTexture(),jt.setValue(G,"boneTexture",on.boneTexture,Ve),jt.setValue(G,"boneTextureSize",on.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const la=X.morphAttributes;if((la.position!==void 0||la.normal!==void 0||la.color!==void 0&&Te.isWebGL2===!0)&&Le.update(K,X,Ci),(zs||qe.receiveShadow!==K.receiveShadow)&&(qe.receiveShadow=K.receiveShadow,jt.setValue(G,"receiveShadow",K.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Pi.envMap.value=De,Pi.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),zs&&(jt.setValue(G,"toneMappingExposure",x.toneMappingExposure),qe.needsLights&&kf(Pi,aa),ge&&Y.fog===!0&&re.refreshFogUniforms(Pi,ge),re.refreshMaterialUniforms(Pi,Y,W,D,Ee),yo.upload(G,yc(qe),Pi,Ve)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(yo.upload(G,yc(qe),Pi,Ve),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&jt.setValue(G,"center",K.center),jt.setValue(G,"modelViewMatrix",K.modelViewMatrix),jt.setValue(G,"normalMatrix",K.normalMatrix),jt.setValue(G,"modelMatrix",K.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const on=Y.uniformsGroups;for(let ca=0,Hf=on.length;ca<Hf;ca++)if(Te.isWebGL2){const Ec=on[ca];Ie.update(Ec,Ci),Ie.bind(Ec,Ci)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ci}function kf(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function Vf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,V,X){Oe.get(T.texture).__webglTexture=V,Oe.get(T.depthTexture).__webglTexture=X;const Y=Oe.get(T);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,V){const X=Oe.get(T);X.__webglFramebuffer=V,X.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,X=0){C=T,b=V,R=X;let Y=!0,K=null,ge=!1,xe=!1;if(T){const De=Oe.get(T);De.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(G.FRAMEBUFFER,null),Y=!1):De.__webglFramebuffer===void 0?Ve.setupRenderTarget(T):De.__hasExternalTextures&&Ve.rebindTextures(T,Oe.get(T.texture).__webglTexture,Oe.get(T.depthTexture).__webglTexture);const Ge=T.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(xe=!0);const ze=Oe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ze[V])?K=ze[V][X]:K=ze[V],ge=!0):Te.isWebGL2&&T.samples>0&&Ve.useMultisampledRTT(T)===!1?K=Oe.get(T).__webglMultisampledFramebuffer:Array.isArray(ze)?K=ze[X]:K=ze,A.copy(T.viewport),H.copy(T.scissor),j=T.scissorTest}else A.copy(J).multiplyScalar(W).floor(),H.copy(O).multiplyScalar(W).floor(),j=z;if(Ae.bindFramebuffer(G.FRAMEBUFFER,K)&&Te.drawBuffers&&Y&&Ae.drawBuffers(T,K),Ae.viewport(A),Ae.scissor(H),Ae.setScissorTest(j),ge){const De=Oe.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+V,De.__webglTexture,X)}else if(xe){const De=Oe.get(T.texture),Ge=V||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,De.__webglTexture,X||0,Ge)}k=-1},this.readRenderTargetPixels=function(T,V,X,Y,K,ge,xe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xe!==void 0&&(Ce=Ce[xe]),Ce){Ae.bindFramebuffer(G.FRAMEBUFFER,Ce);try{const De=T.texture,Ge=De.format,ze=De.type;if(Ge!==Rn&&st.convert(Ge)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=ze===pr&&(Se.has("EXT_color_buffer_half_float")||Te.isWebGL2&&Se.has("EXT_color_buffer_float"));if(ze!==bi&&st.convert(ze)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===Si&&(Te.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-Y&&X>=0&&X<=T.height-K&&G.readPixels(V,X,Y,K,st.convert(Ge),st.convert(ze),ge)}finally{const De=C!==null?Oe.get(C).__webglFramebuffer:null;Ae.bindFramebuffer(G.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(T,V,X=0){const Y=Math.pow(2,-X),K=Math.floor(V.image.width*Y),ge=Math.floor(V.image.height*Y);Ve.setTexture2D(V,0),G.copyTexSubImage2D(G.TEXTURE_2D,X,0,0,T.x,T.y,K,ge),Ae.unbindTexture()},this.copyTextureToTexture=function(T,V,X,Y=0){const K=V.image.width,ge=V.image.height,xe=st.convert(X.format),Ce=st.convert(X.type);Ve.setTexture2D(X,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,X.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,X.unpackAlignment),V.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Y,T.x,T.y,K,ge,xe,Ce,V.image.data):V.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Y,T.x,T.y,V.mipmaps[0].width,V.mipmaps[0].height,xe,V.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,Y,T.x,T.y,xe,Ce,V.image),Y===0&&X.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(T,V,X,Y,K=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=T.max.x-T.min.x+1,xe=T.max.y-T.min.y+1,Ce=T.max.z-T.min.z+1,De=st.convert(Y.format),Ge=st.convert(Y.type);let ze;if(Y.isData3DTexture)Ve.setTexture3D(Y,0),ze=G.TEXTURE_3D;else if(Y.isDataArrayTexture)Ve.setTexture2DArray(Y,0),ze=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const ke=G.getParameter(G.UNPACK_ROW_LENGTH),yt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),rn=G.getParameter(G.UNPACK_SKIP_PIXELS),Ft=G.getParameter(G.UNPACK_SKIP_ROWS),qn=G.getParameter(G.UNPACK_SKIP_IMAGES),mt=X.isCompressedTexture?X.mipmaps[0]:X.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,mt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,mt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,T.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,T.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,T.min.z),X.isDataTexture||X.isData3DTexture?G.texSubImage3D(ze,K,V.x,V.y,V.z,ge,xe,Ce,De,Ge,mt.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(ze,K,V.x,V.y,V.z,ge,xe,Ce,De,mt.data)):G.texSubImage3D(ze,K,V.x,V.y,V.z,ge,xe,Ce,De,Ge,mt),G.pixelStorei(G.UNPACK_ROW_LENGTH,ke),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,yt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,rn),G.pixelStorei(G.UNPACK_SKIP_ROWS,Ft),G.pixelStorei(G.UNPACK_SKIP_IMAGES,qn),K===0&&Y.generateMipmaps&&G.generateMipmap(ze),Ae.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Ve.setTextureCube(T,0):T.isData3DTexture?Ve.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ve.setTexture2DArray(T,0):Ve.setTexture2D(T,0),Ae.unbindTexture()},this.resetState=function(){b=0,R=0,C=null,Ae.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Vl?"display-p3":"srgb",t.unpackColorSpace=rt.workingColorSpace===ko?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ht?Wi:rd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Wi?Ht:li}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class hy extends wd{}hy.prototype.isWebGL1Renderer=!0;class dy extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Wl extends Ns{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Gu=new U,Wu=new U,qu=new Ct,za=new Vo,so=new wr;class Md extends Qt{constructor(e=new sn,t=new Wl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,o=t.count;s<o;s++)Gu.fromBufferAttribute(t,s-1),Wu.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Gu.distanceTo(Wu);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(s),so.radius+=o,e.ray.intersectsSphere(so)===!1)return;qu.copy(s).invert(),za.copy(e.ray).applyMatrix4(qu);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=new U,h=new U,f=new U,d=new U,g=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const p=Math.max(0,a.start),y=Math.min(_.count,a.start+a.count);for(let x=p,E=y-1;x<E;x+=g){const b=_.getX(x),R=_.getX(x+1);if(u.fromBufferAttribute(m,b),h.fromBufferAttribute(m,R),za.distanceSqToSegment(u,h,d,f)>c)continue;d.applyMatrix4(this.matrixWorld);const k=e.ray.origin.distanceTo(d);k<e.near||k>e.far||t.push({distance:k,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let x=p,E=y-1;x<E;x+=g){if(u.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),za.distanceSqToSegment(u,h,d,f)>c)continue;d.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const l=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}const Xu=new U,ju=new U;class fy extends Md{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,o=t.count;s<o;s+=2)Xu.fromBufferAttribute(t,s),ju.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Xu.distanceTo(ju);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class py extends Ns{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yu=new Ct,_l=new Vo,ro=new wr,oo=new U;class bd extends Qt{constructor(e=new sn,t=new py){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,o=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(s),ro.radius+=o,e.ray.intersectsSphere(ro)===!1)return;Yu.copy(s).invert(),_l.copy(e.ray).applyMatrix4(Yu);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=d,v=g;_<v;_++){const m=u.getX(_);oo.fromBufferAttribute(f,m),$u(oo,m,c,s,e,t,this)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=d,v=g;_<v;_++)oo.fromBufferAttribute(f,_),$u(oo,_,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const l=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function $u(i,e,t,n,s,o,a){const l=_l.distanceSqToPoint(i);if(l<t){const c=new U;_l.closestPointToPoint(i,c),c.applyMatrix4(n);const u=s.ray.origin.distanceTo(c);if(u<s.near||u>s.far)return;o.push({distance:u,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,object:a})}}class Ri extends sn{constructor(e=1,t=32,n=16,s=0,o=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:o,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+l,Math.PI);let u=0;const h=[],f=new U,d=new U,g=[],_=[],v=[],m=[];for(let p=0;p<=n;p++){const y=[],x=p/n;let E=0;p===0&&a===0?E=.5/t:p===n&&c===Math.PI&&(E=-.5/t);for(let b=0;b<=t;b++){const R=b/t;f.x=-e*Math.cos(s+R*o)*Math.sin(a+x*l),f.y=e*Math.cos(a+x*l),f.z=e*Math.sin(s+R*o)*Math.sin(a+x*l),_.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(R+E,1-x),y.push(u++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const x=h[p][y+1],E=h[p][y],b=h[p+1][y],R=h[p+1][y+1];(p!==0||a>0)&&g.push(x,E,R),(p!==n-1||c<Math.PI)&&g.push(E,b,R)}this.setIndex(g),this.setAttribute("position",new ot(_,3)),this.setAttribute("normal",new ot(v,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ri(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const Ku={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Td{constructor(e,t,n){const s=this;let o=!1,a=0,l=0,c;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,o===!1&&s.onStart!==void 0&&s.onStart(h,a,l),o=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,l),a===l&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return u.push(h,f),this},this.removeHandler=function(h){const f=u.indexOf(h);return f!==-1&&u.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=u.length;f<d;f+=2){const g=u[f],_=u[f+1];if(g.global&&(g.lastIndex=0),g.test(h))return _}return null}}}const my=new Td;class ql{constructor(e){this.manager=e!==void 0?e:my,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,o){n.load(e,s,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ql.DEFAULT_MATERIAL_NAME="__DEFAULT";class gy extends ql{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,a=Ku.get(e);if(a!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(a),o.manager.itemEnd(e)},0),a;const l=gr("img");function c(){h(),Ku.add(e,this),t&&t(this),o.manager.itemEnd(e)}function u(f){h(),s&&s(f),o.manager.itemError(e),o.manager.itemEnd(e)}function h(){l.removeEventListener("load",c,!1),l.removeEventListener("error",u,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),o.manager.itemStart(e),l.src=e,l}}class br extends ql{constructor(e){super(e)}load(e,t,n,s){const o=new nn,a=new gy(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(l){o.image=l,o.needsUpdate=!0,t!==void 0&&t(o)},n,s),o}}const ao=new Ls;class _y extends fy{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(8*3),o=new sn;o.setIndex(new vn(n,1)),o.setAttribute("position",new vn(s,3)),super(o,new Wl({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&ao.setFromObject(this.object),ao.isEmpty())return;const t=ao.min,n=ao.max,s=this.geometry.attributes.position,o=s.array;o[0]=n.x,o[1]=n.y,o[2]=n.z,o[3]=t.x,o[4]=n.y,o[5]=n.z,o[6]=t.x,o[7]=t.y,o[8]=n.z,o[9]=n.x,o[10]=t.y,o[11]=n.z,o[12]=n.x,o[13]=n.y,o[14]=t.z,o[15]=t.x,o[16]=n.y,o[17]=t.z,o[18]=t.x,o[19]=t.y,o[20]=t.z,o[21]=n.x,o[22]=t.y,o[23]=t.z,s.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zl);class Cn{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new S);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new S);const n=this.elements,s=e.x,o=e.y,a=e.z;return t.x=n[0]*s+n[1]*o+n[2]*a,t.y=n[3]*s+n[4]*o+n[5]*a,t.z=n[6]*s+n[7]*o+n[8]*a,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new Cn);const n=this.elements,s=e.elements,o=t.elements,a=n[0],l=n[1],c=n[2],u=n[3],h=n[4],f=n[5],d=n[6],g=n[7],_=n[8],v=s[0],m=s[1],p=s[2],y=s[3],x=s[4],E=s[5],b=s[6],R=s[7],C=s[8];return o[0]=a*v+l*y+c*b,o[1]=a*m+l*x+c*R,o[2]=a*p+l*E+c*C,o[3]=u*v+h*y+f*b,o[4]=u*m+h*x+f*R,o[5]=u*p+h*E+f*C,o[6]=d*v+g*y+_*b,o[7]=d*m+g*x+_*R,o[8]=d*p+g*E+_*C,t}scale(e,t){t===void 0&&(t=new Cn);const n=this.elements,s=t.elements;for(let o=0;o!==3;o++)s[3*o+0]=e.x*n[3*o+0],s[3*o+1]=e.y*n[3*o+1],s[3*o+2]=e.z*n[3*o+2];return t}solve(e,t){t===void 0&&(t=new S);const n=3,s=4,o=[];let a,l;for(a=0;a<n*s;a++)o.push(0);for(a=0;a<3;a++)for(l=0;l<3;l++)o[a+s*l]=this.elements[a+3*l];o[3+4*0]=e.x,o[3+4*1]=e.y,o[3+4*2]=e.z;let c=3;const u=c;let h;const f=4;let d;do{if(a=u-c,o[a+s*a]===0){for(l=a+1;l<u;l++)if(o[a+s*l]!==0){h=f;do d=f-h,o[d+s*a]+=o[d+s*l];while(--h);break}}if(o[a+s*a]!==0)for(l=a+1;l<u;l++){const g=o[a+s*l]/o[a+s*a];h=f;do d=f-h,o[d+s*l]=d<=a?0:o[d+s*l]-o[d+s*a]*g;while(--h)}}while(--c);if(t.z=o[2*s+3]/o[2*s+2],t.y=(o[1*s+3]-o[1*s+2]*t.z)/o[1*s+1],t.x=(o[0*s+3]-o[0*s+2]*t.z-o[0*s+1]*t.y)/o[0*s+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let n=0;n<9;n++)e+=this.elements[n]+t;return e}reverse(e){e===void 0&&(e=new Cn);const t=3,n=6,s=vy;let o,a;for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+n*a]=this.elements[o+3*a];s[3+6*0]=1,s[3+6*1]=0,s[3+6*2]=0,s[4+6*0]=0,s[4+6*1]=1,s[4+6*2]=0,s[5+6*0]=0,s[5+6*1]=0,s[5+6*2]=1;let l=3;const c=l;let u;const h=n;let f;do{if(o=c-l,s[o+n*o]===0){for(a=o+1;a<c;a++)if(s[o+n*a]!==0){u=h;do f=h-u,s[f+n*o]+=s[f+n*a];while(--u);break}}if(s[o+n*o]!==0)for(a=o+1;a<c;a++){const d=s[o+n*a]/s[o+n*o];u=h;do f=h-u,s[f+n*a]=f<=o?0:s[f+n*a]-s[f+n*o]*d;while(--u)}}while(--l);o=2;do{a=o-1;do{const d=s[o+n*a]/s[o+n*o];u=n;do f=n-u,s[f+n*a]=s[f+n*a]-s[f+n*o]*d;while(--u)}while(a--)}while(--o);o=2;do{const d=1/s[o+n*o];u=n;do f=n-u,s[f+n*o]=s[f+n*o]*d;while(--u)}while(o--);o=2;do{a=2;do{if(f=s[t+a+n*o],isNaN(f)||f===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(o,a,f)}while(a--)}while(o--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,s=e.z,o=e.w,a=t+t,l=n+n,c=s+s,u=t*a,h=t*l,f=t*c,d=n*l,g=n*c,_=s*c,v=o*a,m=o*l,p=o*c,y=this.elements;return y[3*0+0]=1-(d+_),y[3*0+1]=h-p,y[3*0+2]=f+m,y[3*1+0]=h+p,y[3*1+1]=1-(u+_),y[3*1+2]=g-v,y[3*2+0]=f-m,y[3*2+1]=g+v,y[3*2+2]=1-(u+d),this}transpose(e){e===void 0&&(e=new Cn);const t=this.elements,n=e.elements;let s;return n[0]=t[0],n[4]=t[4],n[8]=t[8],s=t[1],n[1]=t[3],n[3]=s,s=t[2],n[2]=t[6],n[6]=s,s=t[5],n[5]=t[7],n[7]=s,e}}const vy=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class S{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new S);const n=e.x,s=e.y,o=e.z,a=this.x,l=this.y,c=this.z;return t.x=l*o-c*s,t.y=c*n-a*o,t.z=a*s-l*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new S(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new S(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new Cn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,s=Math.sqrt(e*e+t*t+n*n);if(s>0){const o=1/s;this.x*=o,this.y*=o,this.z*=o}else this.x=0,this.y=0,this.z=0;return s}unit(e){e===void 0&&(e=new S);const t=this.x,n=this.y,s=this.z;let o=Math.sqrt(t*t+n*n+s*s);return o>0?(o=1/o,e.x=t*o,e.y=n*o,e.z=s*o):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,s=this.z,o=e.x,a=e.y,l=e.z;return Math.sqrt((o-t)*(o-t)+(a-n)*(a-n)+(l-s)*(l-s))}distanceSquared(e){const t=this.x,n=this.y,s=this.z,o=e.x,a=e.y,l=e.z;return(o-t)*(o-t)+(a-n)*(a-n)+(l-s)*(l-s)}scale(e,t){t===void 0&&(t=new S);const n=this.x,s=this.y,o=this.z;return t.x=e*n,t.y=e*s,t.z=e*o,t}vmul(e,t){return t===void 0&&(t=new S),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new S),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new S),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const s=yy,o=1/n;s.set(this.x*o,this.y*o,this.z*o);const a=xy;Math.abs(s.x)<.9?(a.set(1,0,0),s.cross(a,e)):(a.set(0,1,0),s.cross(a,e)),s.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const s=this.x,o=this.y,a=this.z;n.x=s+(e.x-s)*t,n.y=o+(e.y-o)*t,n.z=a+(e.z-a)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(Zu),Zu.almostEquals(e,t)}clone(){return new S(this.x,this.y,this.z)}}S.ZERO=new S(0,0,0);S.UNIT_X=new S(1,0,0);S.UNIT_Y=new S(0,1,0);S.UNIT_Z=new S(0,0,1);const yy=new S,xy=new S,Zu=new S;class cn{constructor(e){e===void 0&&(e={}),this.lowerBound=new S,this.upperBound=new S,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,s){const o=this.lowerBound,a=this.upperBound,l=n;o.copy(e[0]),l&&l.vmult(o,o),a.copy(o);for(let c=1;c<e.length;c++){let u=e[c];l&&(l.vmult(u,Ju),u=Ju),u.x>a.x&&(a.x=u.x),u.x<o.x&&(o.x=u.x),u.y>a.y&&(a.y=u.y),u.y<o.y&&(o.y=u.y),u.z>a.z&&(a.z=u.z),u.z<o.z&&(o.z=u.z)}return t&&(t.vadd(o,o),t.vadd(a,a)),s&&(o.x-=s,o.y-=s,o.z-=s,a.x+=s,a.y+=s,a.z+=s),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new cn().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,s=e.lowerBound,o=e.upperBound,a=s.x<=n.x&&n.x<=o.x||t.x<=o.x&&o.x<=n.x,l=s.y<=n.y&&n.y<=o.y||t.y<=o.y&&o.y<=n.y,c=s.z<=n.z&&n.z<=o.z||t.z<=o.z&&o.z<=n.z;return a&&l&&c}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,s=e.lowerBound,o=e.upperBound;return t.x<=s.x&&n.x>=o.x&&t.y<=s.y&&n.y>=o.y&&t.z<=s.z&&n.z>=o.z}getCorners(e,t,n,s,o,a,l,c){const u=this.lowerBound,h=this.upperBound;e.copy(u),t.set(h.x,u.y,u.z),n.set(h.x,h.y,u.z),s.set(u.x,h.y,h.z),o.set(h.x,u.y,h.z),a.set(u.x,h.y,u.z),l.set(u.x,u.y,h.z),c.copy(h)}toLocalFrame(e,t){const n=Qu,s=n[0],o=n[1],a=n[2],l=n[3],c=n[4],u=n[5],h=n[6],f=n[7];this.getCorners(s,o,a,l,c,u,h,f);for(let d=0;d!==8;d++){const g=n[d];e.pointToLocal(g,g)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=Qu,s=n[0],o=n[1],a=n[2],l=n[3],c=n[4],u=n[5],h=n[6],f=n[7];this.getCorners(s,o,a,l,c,u,h,f);for(let d=0;d!==8;d++){const g=n[d];e.pointToWorld(g,g)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,s=1/t.x,o=1/t.y,a=1/t.z,l=(this.lowerBound.x-n.x)*s,c=(this.upperBound.x-n.x)*s,u=(this.lowerBound.y-n.y)*o,h=(this.upperBound.y-n.y)*o,f=(this.lowerBound.z-n.z)*a,d=(this.upperBound.z-n.z)*a,g=Math.max(Math.max(Math.min(l,c),Math.min(u,h)),Math.min(f,d)),_=Math.min(Math.min(Math.max(l,c),Math.max(u,h)),Math.max(f,d));return!(_<0||g>_)}}const Ju=new S,Qu=[new S,new S,new S,new S,new S,new S,new S,new S];class eh{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:s}=t;if(s>n){const o=s;s=n,n=o}return this.matrix[(n*(n+1)>>1)+s-1]}set(e,t,n){let{index:s}=e,{index:o}=t;if(o>s){const a=o;o=s,s=a}this.matrix[(s*(s+1)>>1)+o-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class Ad{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const n=this._listeners;if(n[e]===void 0)return this;const s=n[e].indexOf(t);return s!==-1&&n[e].splice(s,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let s=0,o=n.length;s<o;s++)n[s].call(this,e)}return this}}class At{constructor(e,t,n,s){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),s===void 0&&(s=1),this.x=e,this.y=t,this.z=n,this.w=s}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new S),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=Sy,s=Ey;e.tangents(n,s),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new At);const n=this.x,s=this.y,o=this.z,a=this.w,l=e.x,c=e.y,u=e.z,h=e.w;return t.x=n*h+a*l+s*u-o*c,t.y=s*h+a*c+o*l-n*u,t.z=o*h+a*u+n*c-s*l,t.w=a*h-n*l-s*c-o*u,t}inverse(e){e===void 0&&(e=new At);const t=this.x,n=this.y,s=this.z,o=this.w;this.conjugate(e);const a=1/(t*t+n*n+s*s+o*o);return e.x*=a,e.y*=a,e.z*=a,e.w*=a,e}conjugate(e){return e===void 0&&(e=new At),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new S);const n=e.x,s=e.y,o=e.z,a=this.x,l=this.y,c=this.z,u=this.w,h=u*n+l*o-c*s,f=u*s+c*n-a*o,d=u*o+a*s-l*n,g=-a*n-l*s-c*o;return t.x=h*u+g*-a+f*-c-d*-l,t.y=f*u+g*-l+d*-a-h*-c,t.z=d*u+g*-c+h*-l-f*-a,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,s,o;const a=this.x,l=this.y,c=this.z,u=this.w;switch(t){case"YZX":const h=a*l+c*u;if(h>.499&&(n=2*Math.atan2(a,u),s=Math.PI/2,o=0),h<-.499&&(n=-2*Math.atan2(a,u),s=-Math.PI/2,o=0),n===void 0){const f=a*a,d=l*l,g=c*c;n=Math.atan2(2*l*u-2*a*c,1-2*d-2*g),s=Math.asin(2*h),o=Math.atan2(2*a*u-2*l*c,1-2*f-2*g)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=s,e.x=o}setFromEuler(e,t,n,s){s===void 0&&(s="XYZ");const o=Math.cos(e/2),a=Math.cos(t/2),l=Math.cos(n/2),c=Math.sin(e/2),u=Math.sin(t/2),h=Math.sin(n/2);return s==="XYZ"?(this.x=c*a*l+o*u*h,this.y=o*u*l-c*a*h,this.z=o*a*h+c*u*l,this.w=o*a*l-c*u*h):s==="YXZ"?(this.x=c*a*l+o*u*h,this.y=o*u*l-c*a*h,this.z=o*a*h-c*u*l,this.w=o*a*l+c*u*h):s==="ZXY"?(this.x=c*a*l-o*u*h,this.y=o*u*l+c*a*h,this.z=o*a*h+c*u*l,this.w=o*a*l-c*u*h):s==="ZYX"?(this.x=c*a*l-o*u*h,this.y=o*u*l+c*a*h,this.z=o*a*h-c*u*l,this.w=o*a*l+c*u*h):s==="YZX"?(this.x=c*a*l+o*u*h,this.y=o*u*l+c*a*h,this.z=o*a*h-c*u*l,this.w=o*a*l-c*u*h):s==="XZY"&&(this.x=c*a*l-o*u*h,this.y=o*u*l-c*a*h,this.z=o*a*h+c*u*l,this.w=o*a*l+c*u*h),this}clone(){return new At(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new At);const s=this.x,o=this.y,a=this.z,l=this.w;let c=e.x,u=e.y,h=e.z,f=e.w,d,g,_,v,m;return g=s*c+o*u+a*h+l*f,g<0&&(g=-g,c=-c,u=-u,h=-h,f=-f),1-g>1e-6?(d=Math.acos(g),_=Math.sin(d),v=Math.sin((1-t)*d)/_,m=Math.sin(t*d)/_):(v=1-t,m=t),n.x=v*s+m*c,n.y=v*o+m*u,n.z=v*a+m*h,n.w=v*l+m*f,n}integrate(e,t,n,s){s===void 0&&(s=new At);const o=e.x*n.x,a=e.y*n.y,l=e.z*n.z,c=this.x,u=this.y,h=this.z,f=this.w,d=t*.5;return s.x+=d*(o*f+a*h-l*u),s.y+=d*(a*f+l*c-o*h),s.z+=d*(l*f+o*u-a*c),s.w+=d*(-o*c-a*u-l*h),s}}const Sy=new S,Ey=new S,wy={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class _e{constructor(e){e===void 0&&(e={}),this.id=_e.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,s){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}_e.idCounter=0;_e.types=wy;class Je{constructor(e){e===void 0&&(e={}),this.position=new S,this.quaternion=new At,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return Je.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return Je.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new S),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,s){return s===void 0&&(s=new S),n.vsub(e,s),t.conjugate(th),th.vmult(s,s),s}static pointToWorldFrame(e,t,n,s){return s===void 0&&(s=new S),t.vmult(n,s),s.vadd(e,s),s}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new S),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,s){return s===void 0&&(s=new S),t.w*=-1,t.vmult(n,s),t.w*=-1,s}}const th=new At;class or extends _e{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:n=[],normals:s=[],axes:o,boundingSphereRadius:a}=e;super({type:_e.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=s,this.faceNormals.length===0&&this.computeNormals(),a?this.boundingSphereRadius=a:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=o?o.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;const s=new S;for(let o=0;o!==e.length;o++){const a=e[o],l=a.length;for(let c=0;c!==l;c++){const u=(c+1)%l;t[a[c]].vsub(t[a[u]],s),s.normalize();let h=!1;for(let f=0;f!==n.length;f++)if(n[f].almostEquals(s)||n[f].almostEquals(s)){h=!0;break}h||n.push(s.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let s=0;s<this.faces[e].length;s++)if(!this.vertices[this.faces[e][s]])throw new Error(`Vertex ${this.faces[e][s]} not found!`);const t=this.faceNormals[e]||new S;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let s=0;s<this.faces[e].length;s++)console.warn(`.vertices[${this.faces[e][s]}] = Vec3(${this.vertices[this.faces[e][s]].toString()})`)}}}getFaceNormal(e,t){const n=this.faces[e],s=this.vertices[n[0]],o=this.vertices[n[1]],a=this.vertices[n[2]];or.computeNormal(s,o,a,t)}static computeNormal(e,t,n,s){const o=new S,a=new S;t.vsub(e,a),n.vsub(t,o),o.cross(a,s),s.isZero()||s.normalize()}clipAgainstHull(e,t,n,s,o,a,l,c,u){const h=new S;let f=-1,d=-Number.MAX_VALUE;for(let _=0;_<n.faces.length;_++){h.copy(n.faceNormals[_]),o.vmult(h,h);const v=h.dot(a);v>d&&(d=v,f=_)}const g=[];for(let _=0;_<n.faces[f].length;_++){const v=n.vertices[n.faces[f][_]],m=new S;m.copy(v),o.vmult(m,m),s.vadd(m,m),g.push(m)}f>=0&&this.clipFaceAgainstHull(a,e,t,g,l,c,u)}findSeparatingAxis(e,t,n,s,o,a,l,c){const u=new S,h=new S,f=new S,d=new S,g=new S,_=new S;let v=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let p=0;p!==m.uniqueAxes.length;p++){n.vmult(m.uniqueAxes[p],u);const y=m.testSepAxis(u,e,t,n,s,o);if(y===!1)return!1;y<v&&(v=y,a.copy(u))}else{const p=l?l.length:m.faces.length;for(let y=0;y<p;y++){const x=l?l[y]:y;u.copy(m.faceNormals[x]),n.vmult(u,u);const E=m.testSepAxis(u,e,t,n,s,o);if(E===!1)return!1;E<v&&(v=E,a.copy(u))}}if(e.uniqueAxes)for(let p=0;p!==e.uniqueAxes.length;p++){o.vmult(e.uniqueAxes[p],h);const y=m.testSepAxis(h,e,t,n,s,o);if(y===!1)return!1;y<v&&(v=y,a.copy(h))}else{const p=c?c.length:e.faces.length;for(let y=0;y<p;y++){const x=c?c[y]:y;h.copy(e.faceNormals[x]),o.vmult(h,h);const E=m.testSepAxis(h,e,t,n,s,o);if(E===!1)return!1;E<v&&(v=E,a.copy(h))}}for(let p=0;p!==m.uniqueEdges.length;p++){n.vmult(m.uniqueEdges[p],d);for(let y=0;y!==e.uniqueEdges.length;y++)if(o.vmult(e.uniqueEdges[y],g),d.cross(g,_),!_.almostZero()){_.normalize();const x=m.testSepAxis(_,e,t,n,s,o);if(x===!1)return!1;x<v&&(v=x,a.copy(_))}}return s.vsub(t,f),f.dot(a)>0&&a.negate(a),!0}testSepAxis(e,t,n,s,o,a){const l=this;or.project(l,e,n,s,ka),or.project(t,e,o,a,Va);const c=ka[0],u=ka[1],h=Va[0],f=Va[1];if(c<f||h<u)return!1;const d=c-f,g=h-u;return d<g?d:g}calculateLocalInertia(e,t){const n=new S,s=new S;this.computeLocalAABB(s,n);const o=n.x-s.x,a=n.y-s.y,l=n.z-s.z;t.x=1/12*e*(2*a*2*a+2*l*2*l),t.y=1/12*e*(2*o*2*o+2*l*2*l),t.z=1/12*e*(2*a*2*a+2*o*2*o)}getPlaneConstantOfFace(e){const t=this.faces[e],n=this.faceNormals[e],s=this.vertices[t[0]];return-n.dot(s)}clipFaceAgainstHull(e,t,n,s,o,a,l){const c=new S,u=new S,h=new S,f=new S,d=new S,g=new S,_=new S,v=new S,m=this,p=[],y=s,x=p;let E=-1,b=Number.MAX_VALUE;for(let A=0;A<m.faces.length;A++){c.copy(m.faceNormals[A]),n.vmult(c,c);const H=c.dot(e);H<b&&(b=H,E=A)}if(E<0)return;const R=m.faces[E];R.connectedFaces=[];for(let A=0;A<m.faces.length;A++)for(let H=0;H<m.faces[A].length;H++)R.indexOf(m.faces[A][H])!==-1&&A!==E&&R.connectedFaces.indexOf(A)===-1&&R.connectedFaces.push(A);const C=R.length;for(let A=0;A<C;A++){const H=m.vertices[R[A]],j=m.vertices[R[(A+1)%C]];H.vsub(j,u),h.copy(u),n.vmult(h,h),t.vadd(h,h),f.copy(this.faceNormals[E]),n.vmult(f,f),t.vadd(f,f),h.cross(f,d),d.negate(d),g.copy(H),n.vmult(g,g),t.vadd(g,g);const B=R.connectedFaces[A];_.copy(this.faceNormals[B]);const L=this.getPlaneConstantOfFace(B);v.copy(_),n.vmult(v,v);const I=L-v.dot(t);for(this.clipFaceAgainstPlane(y,x,v,I);y.length;)y.shift();for(;x.length;)y.push(x.shift())}_.copy(this.faceNormals[E]);const k=this.getPlaneConstantOfFace(E);v.copy(_),n.vmult(v,v);const w=k-v.dot(t);for(let A=0;A<y.length;A++){let H=v.dot(y[A])+w;if(H<=o&&(console.log(`clamped: depth=${H} to minDist=${o}`),H=o),H<=a){const j=y[A];if(H<=1e-6){const B={point:j,normal:v,depth:H};l.push(B)}}}}clipFaceAgainstPlane(e,t,n,s){let o,a;const l=e.length;if(l<2)return t;let c=e[e.length-1],u=e[0];o=n.dot(c)+s;for(let h=0;h<l;h++){if(u=e[h],a=n.dot(u)+s,o<0)if(a<0){const f=new S;f.copy(u),t.push(f)}else{const f=new S;c.lerp(u,o/(o-a),f),t.push(f)}else if(a<0){const f=new S;c.lerp(u,o/(o-a),f),t.push(f),t.push(u)}c=u,o=a}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new S);const n=this.vertices,s=this.worldVertices;for(let o=0;o!==this.vertices.length;o++)t.vmult(n[o],s[o]),e.vadd(s[o],s[o]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let s=0;s<this.vertices.length;s++){const o=n[s];o.x<e.x?e.x=o.x:o.x>t.x&&(t.x=o.x),o.y<e.y?e.y=o.y:o.y>t.y&&(t.y=o.y),o.z<e.z?e.z=o.z:o.z>t.z&&(t.z=o.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new S);const n=this.faceNormals,s=this.worldFaceNormals;for(let o=0;o!==t;o++)e.vmult(n[o],s[o]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let n=0;n!==t.length;n++){const s=t[n].lengthSquared();s>e&&(e=s)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,s){const o=this.vertices;let a,l,c,u,h,f,d=new S;for(let g=0;g<o.length;g++){d.copy(o[g]),t.vmult(d,d),e.vadd(d,d);const _=d;(a===void 0||_.x<a)&&(a=_.x),(u===void 0||_.x>u)&&(u=_.x),(l===void 0||_.y<l)&&(l=_.y),(h===void 0||_.y>h)&&(h=_.y),(c===void 0||_.z<c)&&(c=_.z),(f===void 0||_.z>f)&&(f=_.z)}n.set(a,l,c),s.set(u,h,f)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new S);const t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const n=this.vertices.length,s=this.vertices;if(t){for(let o=0;o<n;o++){const a=s[o];t.vmult(a,a)}for(let o=0;o<this.faceNormals.length;o++){const a=this.faceNormals[o];t.vmult(a,a)}}if(e)for(let o=0;o<n;o++){const a=s[o];a.vadd(e,a)}}pointIsInside(e){const t=this.vertices,n=this.faces,s=this.faceNormals,o=null,a=new S;this.getAveragePointLocal(a);for(let l=0;l<this.faces.length;l++){let c=s[l];const u=t[n[l][0]],h=new S;e.vsub(u,h);const f=c.dot(h),d=new S;a.vsub(u,d);const g=c.dot(d);if(f<0&&g>0||f>0&&g<0)return!1}return o?1:-1}static project(e,t,n,s,o){const a=e.vertices.length,l=My;let c=0,u=0;const h=by,f=e.vertices;h.setZero(),Je.vectorToLocalFrame(n,s,t,l),Je.pointToLocalFrame(n,s,h,h);const d=h.dot(l);u=c=f[0].dot(l);for(let g=1;g<a;g++){const _=f[g].dot(l);_>c&&(c=_),_<u&&(u=_)}if(u-=d,c-=d,u>c){const g=u;u=c,c=g}o[0]=c,o[1]=u}}const ka=[],Va=[];new S;const My=new S,by=new S;class Kt extends _e{constructor(e){super({type:_e.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,s=S,o=[new s(-e,-t,-n),new s(e,-t,-n),new s(e,t,-n),new s(-e,t,-n),new s(-e,-t,n),new s(e,-t,n),new s(e,t,n),new s(-e,t,n)],a=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],l=[new s(0,0,1),new s(0,1,0),new s(1,0,0)],c=new or({vertices:o,faces:a,axes:l});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new S),Kt.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){const s=e;n.x=1/12*t*(2*s.y*2*s.y+2*s.z*2*s.z),n.y=1/12*t*(2*s.x*2*s.x+2*s.z*2*s.z),n.z=1/12*t*(2*s.y*2*s.y+2*s.x*2*s.x)}getSideNormals(e,t){const n=e,s=this.halfExtents;if(n[0].set(s.x,0,0),n[1].set(0,s.y,0),n[2].set(0,0,s.z),n[3].set(-s.x,0,0),n[4].set(0,-s.y,0),n[5].set(0,0,-s.z),t!==void 0)for(let o=0;o!==n.length;o++)t.vmult(n[o],n[o]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){const s=this.halfExtents,o=[[s.x,s.y,s.z],[-s.x,s.y,s.z],[-s.x,-s.y,s.z],[-s.x,-s.y,-s.z],[s.x,-s.y,-s.z],[s.x,s.y,-s.z],[-s.x,s.y,-s.z],[s.x,-s.y,s.z]];for(let a=0;a<o.length;a++)_i.set(o[a][0],o[a][1],o[a][2]),t.vmult(_i,_i),e.vadd(_i,_i),n(_i.x,_i.y,_i.z)}calculateWorldAABB(e,t,n,s){const o=this.halfExtents;Ln[0].set(o.x,o.y,o.z),Ln[1].set(-o.x,o.y,o.z),Ln[2].set(-o.x,-o.y,o.z),Ln[3].set(-o.x,-o.y,-o.z),Ln[4].set(o.x,-o.y,-o.z),Ln[5].set(o.x,o.y,-o.z),Ln[6].set(-o.x,o.y,-o.z),Ln[7].set(o.x,-o.y,o.z);const a=Ln[0];t.vmult(a,a),e.vadd(a,a),s.copy(a),n.copy(a);for(let l=1;l<8;l++){const c=Ln[l];t.vmult(c,c),e.vadd(c,c);const u=c.x,h=c.y,f=c.z;u>s.x&&(s.x=u),h>s.y&&(s.y=h),f>s.z&&(s.z=f),u<n.x&&(n.x=u),h<n.y&&(n.y=h),f<n.z&&(n.z=f)}}}const _i=new S,Ln=[new S,new S,new S,new S,new S,new S,new S,new S],Xl={DYNAMIC:1,STATIC:2,KINEMATIC:4},jl={AWAKE:0,SLEEPY:1,SLEEPING:2};class ie extends Ad{constructor(e){e===void 0&&(e={}),super(),this.id=ie.idCounter++,this.index=-1,this.world=null,this.vlambda=new S,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new S,this.previousPosition=new S,this.interpolatedPosition=new S,this.initPosition=new S,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new S,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new S,this.force=new S;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?ie.STATIC:ie.DYNAMIC,typeof e.type==typeof ie.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=ie.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new S,this.quaternion=new At,this.initQuaternion=new At,this.previousQuaternion=new At,this.interpolatedQuaternion=new At,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new S,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new S,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new S,this.invInertia=new S,this.invInertiaWorld=new Cn,this.invMassSolve=0,this.invInertiaSolve=new S,this.invInertiaWorldSolve=new Cn,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new S(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new S(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new cn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new S,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=ie.AWAKE,this.wakeUpAfterNarrowphase=!1,e===ie.SLEEPING&&this.dispatchEvent(ie.wakeupEvent)}sleep(){this.sleepState=ie.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),s=this.sleepSpeedLimit**2;t===ie.AWAKE&&n<s?(this.sleepState=ie.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(ie.sleepyEvent)):t===ie.SLEEPY&&n>s?this.wakeUp():t===ie.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(ie.sleepEvent))}}updateSolveMassProperties(){this.sleepState===ie.SLEEPING||this.type===ie.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new S),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new S),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new S),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new S),this.quaternion.vmult(e,t),t}addShape(e,t,n){const s=new S,o=new At;return t&&s.copy(t),n&&o.copy(n),this.shapes.push(e),this.shapeOffsets.push(s),this.shapeOrientations.push(o),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,n=e.length;let s=0;for(let o=0;o!==n;o++){const a=e[o];a.updateBoundingSphereRadius();const l=t[o].length(),c=a.boundingSphereRadius;l+c>s&&(s=l+c)}this.boundingRadius=s}updateAABB(){const e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,s=e.length,o=Ty,a=Ay,l=this.quaternion,c=this.aabb,u=Ry;for(let h=0;h!==s;h++){const f=e[h];l.vmult(t[h],o),o.vadd(this.position,o),l.mult(n[h],a),f.calculateWorldAABB(o,a,u.lowerBound,u.upperBound),h===0?c.copy(u):c.extend(u)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const n=Cy,s=Py;n.setRotationFromQuaternion(this.quaternion),n.transpose(s),n.scale(t,n),n.mmult(s,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new S),this.type!==ie.DYNAMIC)return;this.sleepState===ie.SLEEPING&&this.wakeUp();const n=Ny;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new S),this.type!==ie.DYNAMIC)return;const n=Iy,s=Dy;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,s),this.applyForce(n,s)}applyTorque(e){this.type===ie.DYNAMIC&&(this.sleepState===ie.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new S),this.type!==ie.DYNAMIC)return;this.sleepState===ie.SLEEPING&&this.wakeUp();const n=t,s=Uy;s.copy(e),s.scale(this.invMass,s),this.velocity.vadd(s,this.velocity);const o=Fy;n.cross(e,o),this.invInertiaWorld.vmult(o,o),this.angularVelocity.vadd(o,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new S),this.type!==ie.DYNAMIC)return;const n=Oy,s=By;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,s),this.applyImpulse(n,s)}updateMassProperties(){const e=zy;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Kt.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const n=new S;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===ie.DYNAMIC||this.type===ie.KINEMATIC)||this.sleepState===ie.SLEEPING)return;const s=this.velocity,o=this.angularVelocity,a=this.position,l=this.force,c=this.torque,u=this.quaternion,h=this.invMass,f=this.invInertiaWorld,d=this.linearFactor,g=h*e;s.x+=l.x*g*d.x,s.y+=l.y*g*d.y,s.z+=l.z*g*d.z;const _=f.elements,v=this.angularFactor,m=c.x*v.x,p=c.y*v.y,y=c.z*v.z;o.x+=e*(_[0]*m+_[1]*p+_[2]*y),o.y+=e*(_[3]*m+_[4]*p+_[5]*y),o.z+=e*(_[6]*m+_[7]*p+_[8]*y),a.x+=s.x*e,a.y+=s.y*e,a.z+=s.z*e,u.integrate(this.angularVelocity,e,this.angularFactor,u),t&&(n?u.normalizeFast():u.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}ie.idCounter=0;ie.COLLIDE_EVENT_NAME="collide";ie.DYNAMIC=Xl.DYNAMIC;ie.STATIC=Xl.STATIC;ie.KINEMATIC=Xl.KINEMATIC;ie.AWAKE=jl.AWAKE;ie.SLEEPY=jl.SLEEPY;ie.SLEEPING=jl.SLEEPING;ie.wakeupEvent={type:"wakeup"};ie.sleepyEvent={type:"sleepy"};ie.sleepEvent={type:"sleep"};const Ty=new S,Ay=new At,Ry=new cn,Cy=new Cn,Py=new Cn,Ly=new Cn,Ny=new S,Iy=new S,Dy=new S,Uy=new S,Fy=new S,Oy=new S,By=new S,zy=new S;class ky{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!(!(e.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&e.collisionFilterMask)||(e.type&ie.STATIC||e.sleepState===ie.SLEEPING)&&(t.type&ie.STATIC||t.sleepState===ie.SLEEPING))}intersectionTest(e,t,n,s){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,s):this.doBoundingSphereBroadphase(e,t,n,s)}doBoundingSphereBroadphase(e,t,n,s){const o=Vy;t.position.vsub(e.position,o);const a=(e.boundingRadius+t.boundingRadius)**2;o.lengthSquared()<a&&(n.push(e),s.push(t))}doBoundingBoxBroadphase(e,t,n,s){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),s.push(t))}makePairsUnique(e,t){const n=Hy,s=Gy,o=Wy,a=e.length;for(let l=0;l!==a;l++)s[l]=e[l],o[l]=t[l];e.length=0,t.length=0;for(let l=0;l!==a;l++){const c=s[l].id,u=o[l].id,h=c<u?`${c},${u}`:`${u},${c}`;n[h]=l,n.keys.push(h)}for(let l=0;l!==n.keys.length;l++){const c=n.keys.pop(),u=n[c];e.push(s[u]),t.push(o[u]),delete n[c]}}setWorld(e){}static boundingSphereCheck(e,t){const n=new S;e.position.vsub(t.position,n);const s=e.shapes[0],o=t.shapes[0];return Math.pow(s.boundingSphereRadius+o.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Vy=new S;new S;new At;new S;const Hy={keys:[]},Gy=[],Wy=[];new S;new S;new S;class Rd extends ky{constructor(){super()}collisionPairs(e,t,n){const s=e.bodies,o=s.length;let a,l;for(let c=0;c!==o;c++)for(let u=0;u!==c;u++)a=s[c],l=s[u],this.needBroadphaseCollision(a,l)&&this.intersectionTest(a,l,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let s=0;s<e.bodies.length;s++){const o=e.bodies[s];o.aabbNeedsUpdate&&o.updateAABB(),o.aabb.overlaps(t)&&n.push(o)}return n}}class Uo{constructor(){this.rayFromWorld=new S,this.rayToWorld=new S,this.hitNormalWorld=new S,this.hitPointWorld=new S,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,s,o,a,l){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(s),this.shape=o,this.body=a,this.distance=l}}let Cd,Pd,Ld,Nd,Id,Dd,Ud;const Yl={CLOSEST:1,ANY:2,ALL:4};Cd=_e.types.SPHERE;Pd=_e.types.PLANE;Ld=_e.types.BOX;Nd=_e.types.CYLINDER;Id=_e.types.CONVEXPOLYHEDRON;Dd=_e.types.HEIGHTFIELD;Ud=_e.types.TRIMESH;class Tt{get[Cd](){return this._intersectSphere}get[Pd](){return this._intersectPlane}get[Ld](){return this._intersectBox}get[Nd](){return this._intersectConvex}get[Id](){return this._intersectConvex}get[Dd](){return this._intersectHeightfield}get[Ud](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new S),t===void 0&&(t=new S),this.from=e.clone(),this.to=t.clone(),this.direction=new S,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Tt.ANY,this.result=new Uo,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||Tt.ANY,this.result=t.result||new Uo,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(nh),Ha.length=0,e.broadphase.aabbQuery(e,nh,Ha),this.intersectBodies(Ha),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||!(this.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&this.collisionFilterMask))return;const s=qy,o=Xy;for(let a=0,l=e.shapes.length;a<l;a++){const c=e.shapes[a];if(!(n&&!c.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[a],o),e.quaternion.vmult(e.shapeOffsets[a],s),s.vadd(e.position,s),this.intersectShape(c,o,s,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,s=e.length;!this.result.shouldStop&&n<s;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,s){const o=this.from;if(ox(o,this.direction,n)>e.boundingSphereRadius)return;const l=this[e.type];l&&l.call(this,e,t,n,s,e)}_intersectBox(e,t,n,s,o){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,s,o)}_intersectPlane(e,t,n,s,o){const a=this.from,l=this.to,c=this.direction,u=new S(0,0,1);t.vmult(u,u);const h=new S;a.vsub(n,h);const f=h.dot(u);l.vsub(n,h);const d=h.dot(u);if(f*d>0||a.distanceTo(l)<f)return;const g=u.dot(c);if(Math.abs(g)<this.precision)return;const _=new S,v=new S,m=new S;a.vsub(n,_);const p=-u.dot(_)/g;c.scale(p,v),a.vadd(v,m),this.reportIntersection(u,m,o,s,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,s=this.to,o=this.from;t.x=Math.min(s.x,o.x),t.y=Math.min(s.y,o.y),t.z=Math.min(s.z,o.z),n.x=Math.max(s.x,o.x),n.y=Math.max(s.y,o.y),n.z=Math.max(s.z,o.z)}_intersectHeightfield(e,t,n,s,o){e.data,e.elementSize;const a=jy;a.from.copy(this.from),a.to.copy(this.to),Je.pointToLocalFrame(n,t,a.from,a.from),Je.pointToLocalFrame(n,t,a.to,a.to),a.updateDirection();const l=Yy;let c,u,h,f;c=u=0,h=f=e.data.length-1;const d=new cn;a.getAABB(d),e.getIndexOfPosition(d.lowerBound.x,d.lowerBound.y,l,!0),c=Math.max(c,l[0]),u=Math.max(u,l[1]),e.getIndexOfPosition(d.upperBound.x,d.upperBound.y,l,!0),h=Math.min(h,l[0]+1),f=Math.min(f,l[1]+1);for(let g=c;g<h;g++)for(let _=u;_<f;_++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(g,_,d),!!d.overlapsRay(a)){if(e.getConvexTrianglePillar(g,_,!1),Je.pointToWorldFrame(n,t,e.pillarOffset,lo),this._intersectConvex(e.pillarConvex,t,lo,s,o,ih),this.result.shouldStop)return;e.getConvexTrianglePillar(g,_,!0),Je.pointToWorldFrame(n,t,e.pillarOffset,lo),this._intersectConvex(e.pillarConvex,t,lo,s,o,ih)}}}_intersectSphere(e,t,n,s,o){const a=this.from,l=this.to,c=e.radius,u=(l.x-a.x)**2+(l.y-a.y)**2+(l.z-a.z)**2,h=2*((l.x-a.x)*(a.x-n.x)+(l.y-a.y)*(a.y-n.y)+(l.z-a.z)*(a.z-n.z)),f=(a.x-n.x)**2+(a.y-n.y)**2+(a.z-n.z)**2-c**2,d=h**2-4*u*f,g=$y,_=Ky;if(!(d<0))if(d===0)a.lerp(l,d,g),g.vsub(n,_),_.normalize(),this.reportIntersection(_,g,o,s,-1);else{const v=(-h-Math.sqrt(d))/(2*u),m=(-h+Math.sqrt(d))/(2*u);if(v>=0&&v<=1&&(a.lerp(l,v,g),g.vsub(n,_),_.normalize(),this.reportIntersection(_,g,o,s,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(a.lerp(l,m,g),g.vsub(n,_),_.normalize(),this.reportIntersection(_,g,o,s,-1))}}_intersectConvex(e,t,n,s,o,a){const l=Zy,c=sh,u=a&&a.faceList||null,h=e.faces,f=e.vertices,d=e.faceNormals,g=this.direction,_=this.from,v=this.to,m=_.distanceTo(v),p=u?u.length:h.length,y=this.result;for(let x=0;!y.shouldStop&&x<p;x++){const E=u?u[x]:x,b=h[E],R=d[E],C=t,k=n;c.copy(f[b[0]]),C.vmult(c,c),c.vadd(k,c),c.vsub(_,c),C.vmult(R,l);const w=g.dot(l);if(Math.abs(w)<this.precision)continue;const A=l.dot(c)/w;if(!(A<0)){g.scale(A,en),en.vadd(_,en),wn.copy(f[b[0]]),C.vmult(wn,wn),k.vadd(wn,wn);for(let H=1;!y.shouldStop&&H<b.length-1;H++){Nn.copy(f[b[H]]),In.copy(f[b[H+1]]),C.vmult(Nn,Nn),C.vmult(In,In),k.vadd(Nn,Nn),k.vadd(In,In);const j=en.distanceTo(_);!(Tt.pointInTriangle(en,wn,Nn,In)||Tt.pointInTriangle(en,Nn,wn,In))||j>m||this.reportIntersection(l,en,o,s,E)}}}}_intersectTrimesh(e,t,n,s,o,a){const l=Jy,c=sx,u=rx,h=sh,f=Qy,d=ex,g=tx,_=ix,v=nx,m=e.indices;e.vertices;const p=this.from,y=this.to,x=this.direction;u.position.copy(n),u.quaternion.copy(t),Je.vectorToLocalFrame(n,t,x,f),Je.pointToLocalFrame(n,t,p,d),Je.pointToLocalFrame(n,t,y,g),g.x*=e.scale.x,g.y*=e.scale.y,g.z*=e.scale.z,d.x*=e.scale.x,d.y*=e.scale.y,d.z*=e.scale.z,g.vsub(d,f),f.normalize();const E=d.distanceSquared(g);e.tree.rayQuery(this,u,c);for(let b=0,R=c.length;!this.result.shouldStop&&b!==R;b++){const C=c[b];e.getNormal(C,l),e.getVertex(m[C*3],wn),wn.vsub(d,h);const k=f.dot(l),w=l.dot(h)/k;if(w<0)continue;f.scale(w,en),en.vadd(d,en),e.getVertex(m[C*3+1],Nn),e.getVertex(m[C*3+2],In);const A=en.distanceSquared(d);!(Tt.pointInTriangle(en,Nn,wn,In)||Tt.pointInTriangle(en,wn,Nn,In))||A>E||(Je.vectorToWorldFrame(t,l,v),Je.pointToWorldFrame(n,t,en,_),this.reportIntersection(v,_,o,s,C))}c.length=0}reportIntersection(e,t,n,s,o){const a=this.from,l=this.to,c=a.distanceTo(t),u=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(u.hitFaceIndex=typeof o<"u"?o:-1,this.mode){case Tt.ALL:this.hasHit=!0,u.set(a,l,e,t,n,s,c),u.hasHit=!0,this.callback(u);break;case Tt.CLOSEST:(c<u.distance||!u.hasHit)&&(this.hasHit=!0,u.hasHit=!0,u.set(a,l,e,t,n,s,c));break;case Tt.ANY:this.hasHit=!0,u.hasHit=!0,u.set(a,l,e,t,n,s,c),u.shouldStop=!0;break}}static pointInTriangle(e,t,n,s){s.vsub(t,ki),n.vsub(t,Ws),e.vsub(t,Ga);const o=ki.dot(ki),a=ki.dot(Ws),l=ki.dot(Ga),c=Ws.dot(Ws),u=Ws.dot(Ga);let h,f;return(h=c*l-a*u)>=0&&(f=o*u-a*l)>=0&&h+f<o*c-a*a}}Tt.CLOSEST=Yl.CLOSEST;Tt.ANY=Yl.ANY;Tt.ALL=Yl.ALL;const nh=new cn,Ha=[],Ws=new S,Ga=new S,qy=new S,Xy=new At,en=new S,wn=new S,Nn=new S,In=new S;new S;new Uo;const ih={faceList:[0]},lo=new S,jy=new Tt,Yy=[],$y=new S,Ky=new S,Zy=new S;new S;new S;const sh=new S,Jy=new S,Qy=new S,ex=new S,tx=new S,nx=new S,ix=new S;new cn;const sx=[],rx=new Je,ki=new S,co=new S;function ox(i,e,t){t.vsub(i,ki);const n=ki.dot(e);return e.scale(n,co),co.vadd(i,co),t.distanceTo(co)}class ax{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}}class rh{constructor(){this.spatial=new S,this.rotational=new S}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class Tr{constructor(e,t,n,s){n===void 0&&(n=-1e6),s===void 0&&(s=1e6),this.id=Tr.idCounter++,this.minForce=n,this.maxForce=s,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new rh,this.jacobianElementB=new rh,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){const s=t,o=e,a=n;this.a=4/(a*(1+4*s)),this.b=4*s/(1+4*s),this.eps=4/(a*a*o*(1+4*s))}computeB(e,t,n){const s=this.computeGW(),o=this.computeGq(),a=this.computeGiMf();return-o*e-s*t-a*n}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,s=this.bj,o=n.position,a=s.position;return e.spatial.dot(o)+t.spatial.dot(a)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,s=this.bj,o=n.velocity,a=s.velocity,l=n.angularVelocity,c=s.angularVelocity;return e.multiplyVectors(o,l)+t.multiplyVectors(a,c)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,s=this.bj,o=n.vlambda,a=s.vlambda,l=n.wlambda,c=s.wlambda;return e.multiplyVectors(o,l)+t.multiplyVectors(a,c)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,s=this.bj,o=n.force,a=n.torque,l=s.force,c=s.torque,u=n.invMassSolve,h=s.invMassSolve;return o.scale(u,oh),l.scale(h,ah),n.invInertiaWorldSolve.vmult(a,lh),s.invInertiaWorldSolve.vmult(c,ch),e.multiplyVectors(oh,lh)+t.multiplyVectors(ah,ch)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,s=this.bj,o=n.invMassSolve,a=s.invMassSolve,l=n.invInertiaWorldSolve,c=s.invInertiaWorldSolve;let u=o+a;return l.vmult(e.rotational,uo),u+=uo.dot(e.rotational),c.vmult(t.rotational,uo),u+=uo.dot(t.rotational),u}addToWlambda(e){const t=this.jacobianElementA,n=this.jacobianElementB,s=this.bi,o=this.bj,a=lx;s.vlambda.addScaledVector(s.invMassSolve*e,t.spatial,s.vlambda),o.vlambda.addScaledVector(o.invMassSolve*e,n.spatial,o.vlambda),s.invInertiaWorldSolve.vmult(t.rotational,a),s.wlambda.addScaledVector(e,a,s.wlambda),o.invInertiaWorldSolve.vmult(n.rotational,a),o.wlambda.addScaledVector(e,a,o.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Tr.idCounter=0;const oh=new S,ah=new S,lh=new S,ch=new S,uo=new S,lx=new S;class cx extends Tr{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new S,this.rj=new S,this.ni=new S}computeB(e){const t=this.a,n=this.b,s=this.bi,o=this.bj,a=this.ri,l=this.rj,c=ux,u=hx,h=s.velocity,f=s.angularVelocity;s.force,s.torque;const d=o.velocity,g=o.angularVelocity;o.force,o.torque;const _=dx,v=this.jacobianElementA,m=this.jacobianElementB,p=this.ni;a.cross(p,c),l.cross(p,u),p.negate(v.spatial),c.negate(v.rotational),m.spatial.copy(p),m.rotational.copy(u),_.copy(o.position),_.vadd(l,_),_.vsub(s.position,_),_.vsub(a,_);const y=p.dot(_),x=this.restitution+1,E=x*d.dot(p)-x*h.dot(p)+g.dot(u)-f.dot(c),b=this.computeGiMf();return-y*t-E*n-e*b}getImpactVelocityAlongNormal(){const e=fx,t=px,n=mx,s=gx,o=_x;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,s),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(s,t),e.vsub(t,o),this.ni.dot(o)}}const ux=new S,hx=new S,dx=new S,fx=new S,px=new S,mx=new S,gx=new S,_x=new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;class uh extends Tr{constructor(e,t,n){super(e,t,-n,n),this.ri=new S,this.rj=new S,this.t=new S}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.ri,s=this.rj,o=vx,a=yx,l=this.t;n.cross(l,o),s.cross(l,a);const c=this.jacobianElementA,u=this.jacobianElementB;l.negate(c.spatial),o.negate(c.rotational),u.spatial.copy(l),u.rotational.copy(a);const h=this.computeGW(),f=this.computeGiMf();return-h*t-e*f}}const vx=new S,yx=new S;class Go{constructor(e,t,n){n=ax.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Go.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Go.idCounter=0;class Fn{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=Fn.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}Fn.idCounter=0;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new Tt;new S;new S;new S;new S(1,0,0),new S(0,1,0),new S(0,0,1);new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;class vl extends _e{constructor(e){if(super({type:_e.types.SPHERE}),this.radius=e!==void 0?e:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(e,t){t===void 0&&(t=new S);const n=2*e*this.radius*this.radius/5;return t.x=n,t.y=n,t.z=n,t}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(e,t,n,s){const o=this.radius,a=["x","y","z"];for(let l=0;l<a.length;l++){const c=a[l];n[c]=e[c]-o,s[c]=e[c]+o}}}new S;new S;new S;new S;new S;new S;new S;new S;new S;class xx extends _e{constructor(){super({type:_e.types.PLANE}),this.worldNormal=new S,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){const t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new S),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,n,s){Zn.set(0,0,1),t.vmult(Zn,Zn);const o=Number.MAX_VALUE;n.set(-o,-o,-o),s.set(o,o,o),Zn.x===1?s.x=e.x:Zn.x===-1&&(n.x=e.x),Zn.y===1?s.y=e.y:Zn.y===-1&&(n.y=e.y),Zn.z===1?s.z=e.z:Zn.z===-1&&(n.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const Zn=new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new cn;new S;new cn;new S;new S;new S;new S;new S;new S;new S;new cn;new S;new Je;new cn;class Fd{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}}class Od extends Fd{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0;const s=this.iterations,o=this.tolerance*this.tolerance,a=this.equations,l=a.length,c=t.bodies,u=c.length,h=e;let f,d,g,_,v,m;if(l!==0)for(let E=0;E!==u;E++)c[E].updateSolveMassProperties();const p=Ex,y=wx,x=Sx;p.length=l,y.length=l,x.length=l;for(let E=0;E!==l;E++){const b=a[E];x[E]=0,y[E]=b.computeB(h),p[E]=1/b.computeC()}if(l!==0){for(let R=0;R!==u;R++){const C=c[R],k=C.vlambda,w=C.wlambda;k.set(0,0,0),w.set(0,0,0)}for(n=0;n!==s;n++){_=0;for(let R=0;R!==l;R++){const C=a[R];f=y[R],d=p[R],m=x[R],v=C.computeGWlambda(),g=d*(f-v-C.eps*m),m+g<C.minForce?g=C.minForce-m:m+g>C.maxForce&&(g=C.maxForce-m),x[R]+=g,_+=g>0?g:-g,C.addToWlambda(g)}if(_*_<o)break}for(let R=0;R!==u;R++){const C=c[R],k=C.velocity,w=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),k.vadd(C.vlambda,k),C.wlambda.vmul(C.angularFactor,C.wlambda),w.vadd(C.wlambda,w)}let E=a.length;const b=1/h;for(;E--;)a[E].multiplier=x[E]*b}return n}}const Sx=[],Ex=[],wx=[];class Mx extends Fd{constructor(e){for(super(),this.iterations=10,this.tolerance=1e-7,this.subsolver=e,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}createNode(){return{body:null,children:[],eqs:[],visited:!1}}solve(e,t){const n=bx,s=this.nodePool,o=t.bodies,a=this.equations,l=a.length,c=o.length,u=this.subsolver;for(;s.length<c;)s.push(this.createNode());n.length=c;for(let _=0;_<c;_++)n[_]=s[_];for(let _=0;_!==c;_++){const v=n[_];v.body=o[_],v.children.length=0,v.eqs.length=0,v.visited=!1}for(let _=0;_!==l;_++){const v=a[_],m=o.indexOf(v.bi),p=o.indexOf(v.bj),y=n[m],x=n[p];y.children.push(x),y.eqs.push(v),x.children.push(y),x.eqs.push(v)}let h,f=0,d=Tx;u.tolerance=this.tolerance,u.iterations=this.iterations;const g=Ax;for(;h=Bd(n);){d.length=0,g.bodies.length=0,Cx(h,Px,g.bodies,d);const _=d.length;d=d.sort(Lx);for(let v=0;v!==_;v++)u.addEquation(d[v]);u.solve(e,g),u.removeAllEquations(),f++}return f}}const bx=[],Tx=[],Ax={bodies:[]},Rx=ie.STATIC;function Bd(i){const e=i.length;for(let t=0;t!==e;t++){const n=i[t];if(!n.visited&&!(n.body.type&Rx))return n}return!1}const ho=[];function Cx(i,e,t,n){for(ho.push(i),i.visited=!0,e(i,t,n);ho.length;){const s=ho.pop();let o;for(;o=Bd(s.children);)o.visited=!0,e(o,t,n),ho.push(o)}}function Px(i,e,t){e.push(i.body);const n=i.eqs.length;for(let s=0;s!==n;s++){const o=i.eqs[s];t.includes(o)||t.push(o)}}function Lx(i,e){return e.id-i.id}class Nx{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class Ix extends Nx{constructor(){super(...arguments),this.type=S}constructObject(){return new S}}const ht={sphereSphere:_e.types.SPHERE,spherePlane:_e.types.SPHERE|_e.types.PLANE,boxBox:_e.types.BOX|_e.types.BOX,sphereBox:_e.types.SPHERE|_e.types.BOX,planeBox:_e.types.PLANE|_e.types.BOX,convexConvex:_e.types.CONVEXPOLYHEDRON,sphereConvex:_e.types.SPHERE|_e.types.CONVEXPOLYHEDRON,planeConvex:_e.types.PLANE|_e.types.CONVEXPOLYHEDRON,boxConvex:_e.types.BOX|_e.types.CONVEXPOLYHEDRON,sphereHeightfield:_e.types.SPHERE|_e.types.HEIGHTFIELD,boxHeightfield:_e.types.BOX|_e.types.HEIGHTFIELD,convexHeightfield:_e.types.CONVEXPOLYHEDRON|_e.types.HEIGHTFIELD,sphereParticle:_e.types.PARTICLE|_e.types.SPHERE,planeParticle:_e.types.PLANE|_e.types.PARTICLE,boxParticle:_e.types.BOX|_e.types.PARTICLE,convexParticle:_e.types.PARTICLE|_e.types.CONVEXPOLYHEDRON,cylinderCylinder:_e.types.CYLINDER,sphereCylinder:_e.types.SPHERE|_e.types.CYLINDER,planeCylinder:_e.types.PLANE|_e.types.CYLINDER,boxCylinder:_e.types.BOX|_e.types.CYLINDER,convexCylinder:_e.types.CONVEXPOLYHEDRON|_e.types.CYLINDER,heightfieldCylinder:_e.types.HEIGHTFIELD|_e.types.CYLINDER,particleCylinder:_e.types.PARTICLE|_e.types.CYLINDER,sphereTrimesh:_e.types.SPHERE|_e.types.TRIMESH,planeTrimesh:_e.types.PLANE|_e.types.TRIMESH};class Dx{get[ht.sphereSphere](){return this.sphereSphere}get[ht.spherePlane](){return this.spherePlane}get[ht.boxBox](){return this.boxBox}get[ht.sphereBox](){return this.sphereBox}get[ht.planeBox](){return this.planeBox}get[ht.convexConvex](){return this.convexConvex}get[ht.sphereConvex](){return this.sphereConvex}get[ht.planeConvex](){return this.planeConvex}get[ht.boxConvex](){return this.boxConvex}get[ht.sphereHeightfield](){return this.sphereHeightfield}get[ht.boxHeightfield](){return this.boxHeightfield}get[ht.convexHeightfield](){return this.convexHeightfield}get[ht.sphereParticle](){return this.sphereParticle}get[ht.planeParticle](){return this.planeParticle}get[ht.boxParticle](){return this.boxParticle}get[ht.convexParticle](){return this.convexParticle}get[ht.cylinderCylinder](){return this.convexConvex}get[ht.sphereCylinder](){return this.sphereConvex}get[ht.planeCylinder](){return this.planeConvex}get[ht.boxCylinder](){return this.boxConvex}get[ht.convexCylinder](){return this.convexConvex}get[ht.heightfieldCylinder](){return this.heightfieldCylinder}get[ht.particleCylinder](){return this.particleCylinder}get[ht.sphereTrimesh](){return this.sphereTrimesh}get[ht.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Ix,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,s,o,a){let l;this.contactPointPool.length?(l=this.contactPointPool.pop(),l.bi=e,l.bj=t):l=new cx(e,t),l.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&s.collisionResponse;const c=this.currentContactMaterial;l.restitution=c.restitution,l.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);const u=n.material||e.material,h=s.material||t.material;return u&&h&&u.restitution>=0&&h.restitution>=0&&(l.restitution=u.restitution*h.restitution),l.si=o||n,l.sj=a||s,l}createFrictionEquationsFromContact(e,t){const n=e.bi,s=e.bj,o=e.si,a=e.sj,l=this.world,c=this.currentContactMaterial;let u=c.friction;const h=o.material||n.material,f=a.material||s.material;if(h&&f&&h.friction>=0&&f.friction>=0&&(u=h.friction*f.friction),u>0){const d=u*(l.frictionGravity||l.gravity).length();let g=n.invMass+s.invMass;g>0&&(g=1/g);const _=this.frictionEquationPool,v=_.length?_.pop():new uh(n,s,d*g),m=_.length?_.pop():new uh(n,s,d*g);return v.bi=m.bi=n,v.bj=m.bj=s,v.minForce=m.minForce=-d*g,v.maxForce=m.maxForce=d*g,v.ri.copy(e.ri),v.rj.copy(e.rj),m.ri.copy(e.ri),m.rj.copy(e.rj),e.ni.tangents(v.t,m.t),v.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,l.dt),m.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,l.dt),v.enabled=m.enabled=e.enabled,t.push(v,m),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const n=this.frictionResult[this.frictionResult.length-2],s=this.frictionResult[this.frictionResult.length-1];Ui.setZero(),hs.setZero(),ds.setZero();const o=t.bi;t.bj;for(let l=0;l!==e;l++)t=this.result[this.result.length-1-l],t.bi!==o?(Ui.vadd(t.ni,Ui),hs.vadd(t.ri,hs),ds.vadd(t.rj,ds)):(Ui.vsub(t.ni,Ui),hs.vadd(t.rj,hs),ds.vadd(t.ri,ds));const a=1/e;hs.scale(a,n.ri),ds.scale(a,n.rj),s.ri.copy(n.ri),s.rj.copy(n.rj),Ui.normalize(),Ui.tangents(n.t,s.t)}getContacts(e,t,n,s,o,a,l){this.contactPointPool=o,this.frictionEquationPool=l,this.result=s,this.frictionResult=a;const c=Ox,u=Bx,h=Ux,f=Fx;for(let d=0,g=e.length;d!==g;d++){const _=e[d],v=t[d];let m=null;_.material&&v.material&&(m=n.getContactMaterial(_.material,v.material)||null);const p=_.type&ie.KINEMATIC&&v.type&ie.STATIC||_.type&ie.STATIC&&v.type&ie.KINEMATIC||_.type&ie.KINEMATIC&&v.type&ie.KINEMATIC;for(let y=0;y<_.shapes.length;y++){_.quaternion.mult(_.shapeOrientations[y],c),_.quaternion.vmult(_.shapeOffsets[y],h),h.vadd(_.position,h);const x=_.shapes[y];for(let E=0;E<v.shapes.length;E++){v.quaternion.mult(v.shapeOrientations[E],u),v.quaternion.vmult(v.shapeOffsets[E],f),f.vadd(v.position,f);const b=v.shapes[E];if(!(x.collisionFilterMask&b.collisionFilterGroup&&b.collisionFilterMask&x.collisionFilterGroup)||h.distanceTo(f)>x.boundingSphereRadius+b.boundingSphereRadius)continue;let R=null;x.material&&b.material&&(R=n.getContactMaterial(x.material,b.material)||null),this.currentContactMaterial=R||m||n.defaultContactMaterial;const C=x.type|b.type,k=this[C];if(k){let w=!1;x.type<b.type?w=k.call(this,x,b,h,f,c,u,_,v,x,b,p):w=k.call(this,b,x,f,h,u,c,v,_,x,b,p),w&&p&&(n.shapeOverlapKeeper.set(x.id,b.id),n.bodyOverlapKeeper.set(_.id,v.id))}}}}}sphereSphere(e,t,n,s,o,a,l,c,u,h,f){if(f)return n.distanceSquared(s)<(e.radius+t.radius)**2;const d=this.createContactEquation(l,c,e,t,u,h);s.vsub(n,d.ni),d.ni.normalize(),d.ri.copy(d.ni),d.rj.copy(d.ni),d.ri.scale(e.radius,d.ri),d.rj.scale(-t.radius,d.rj),d.ri.vadd(n,d.ri),d.ri.vsub(l.position,d.ri),d.rj.vadd(s,d.rj),d.rj.vsub(c.position,d.rj),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}spherePlane(e,t,n,s,o,a,l,c,u,h,f){const d=this.createContactEquation(l,c,e,t,u,h);if(d.ni.set(0,0,1),a.vmult(d.ni,d.ni),d.ni.negate(d.ni),d.ni.normalize(),d.ni.scale(e.radius,d.ri),n.vsub(s,fo),d.ni.scale(d.ni.dot(fo),hh),fo.vsub(hh,d.rj),-fo.dot(d.ni)<=e.radius){if(f)return!0;const g=d.ri,_=d.rj;g.vadd(n,g),g.vsub(l.position,g),_.vadd(s,_),_.vsub(c.position,_),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}}boxBox(e,t,n,s,o,a,l,c,u,h,f){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,s,o,a,l,c,e,t,f)}sphereBox(e,t,n,s,o,a,l,c,u,h,f){const d=this.v3pool,g=uS;n.vsub(s,po),t.getSideNormals(g,a);const _=e.radius;let v=!1;const m=dS,p=fS,y=pS;let x=null,E=0,b=0,R=0,C=null;for(let D=0,W=g.length;D!==W&&v===!1;D++){const Z=aS;Z.copy(g[D]);const $=Z.length();Z.normalize();const J=po.dot(Z);if(J<$+_&&J>0){const O=lS,z=cS;O.copy(g[(D+1)%3]),z.copy(g[(D+2)%3]);const ue=O.length(),de=z.length();O.normalize(),z.normalize();const me=po.dot(O),Ee=po.dot(z);if(me<ue&&me>-ue&&Ee<de&&Ee>-de){const Fe=Math.abs(J-$-_);if((C===null||Fe<C)&&(C=Fe,b=me,R=Ee,x=$,m.copy(Z),p.copy(O),y.copy(z),E++,f))return!0}}}if(E){v=!0;const D=this.createContactEquation(l,c,e,t,u,h);m.scale(-_,D.ri),D.ni.copy(m),D.ni.negate(D.ni),m.scale(x,m),p.scale(b,p),m.vadd(p,m),y.scale(R,y),m.vadd(y,D.rj),D.ri.vadd(n,D.ri),D.ri.vsub(l.position,D.ri),D.rj.vadd(s,D.rj),D.rj.vsub(c.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}let k=d.get();const w=hS;for(let D=0;D!==2&&!v;D++)for(let W=0;W!==2&&!v;W++)for(let Z=0;Z!==2&&!v;Z++)if(k.set(0,0,0),D?k.vadd(g[0],k):k.vsub(g[0],k),W?k.vadd(g[1],k):k.vsub(g[1],k),Z?k.vadd(g[2],k):k.vsub(g[2],k),s.vadd(k,w),w.vsub(n,w),w.lengthSquared()<_*_){if(f)return!0;v=!0;const $=this.createContactEquation(l,c,e,t,u,h);$.ri.copy(w),$.ri.normalize(),$.ni.copy($.ri),$.ri.scale(_,$.ri),$.rj.copy(k),$.ri.vadd(n,$.ri),$.ri.vsub(l.position,$.ri),$.rj.vadd(s,$.rj),$.rj.vsub(c.position,$.rj),this.result.push($),this.createFrictionEquationsFromContact($,this.frictionResult)}d.release(k),k=null;const A=d.get(),H=d.get(),j=d.get(),B=d.get(),L=d.get(),I=g.length;for(let D=0;D!==I&&!v;D++)for(let W=0;W!==I&&!v;W++)if(D%3!==W%3){g[W].cross(g[D],A),A.normalize(),g[D].vadd(g[W],H),j.copy(n),j.vsub(H,j),j.vsub(s,j);const Z=j.dot(A);A.scale(Z,B);let $=0;for(;$===D%3||$===W%3;)$++;L.copy(n),L.vsub(B,L),L.vsub(H,L),L.vsub(s,L);const J=Math.abs(Z),O=L.length();if(J<g[$].length()&&O<_){if(f)return!0;v=!0;const z=this.createContactEquation(l,c,e,t,u,h);H.vadd(B,z.rj),z.rj.copy(z.rj),L.negate(z.ni),z.ni.normalize(),z.ri.copy(z.rj),z.ri.vadd(s,z.ri),z.ri.vsub(n,z.ri),z.ri.normalize(),z.ri.scale(_,z.ri),z.ri.vadd(n,z.ri),z.ri.vsub(l.position,z.ri),z.rj.vadd(s,z.rj),z.rj.vsub(c.position,z.rj),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}}d.release(A,H,j,B,L)}planeBox(e,t,n,s,o,a,l,c,u,h,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,s,o,a,l,c,e,t,f)}convexConvex(e,t,n,s,o,a,l,c,u,h,f,d,g){const _=CS;if(!(n.distanceTo(s)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,o,s,a,_,d,g)){const v=[],m=PS;e.clipAgainstHull(n,o,t,s,a,_,-100,100,v);let p=0;for(let y=0;y!==v.length;y++){if(f)return!0;const x=this.createContactEquation(l,c,e,t,u,h),E=x.ri,b=x.rj;_.negate(x.ni),v[y].normal.negate(m),m.scale(v[y].depth,m),v[y].point.vadd(m,E),b.copy(v[y].point),E.vsub(n,E),b.vsub(s,b),E.vadd(n,E),E.vsub(l.position,E),b.vadd(s,b),b.vsub(c.position,b),this.result.push(x),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(e,t,n,s,o,a,l,c,u,h,f){const d=this.v3pool;n.vsub(s,mS);const g=t.faceNormals,_=t.faces,v=t.vertices,m=e.radius;let p=!1;for(let y=0;y!==v.length;y++){const x=v[y],E=yS;a.vmult(x,E),s.vadd(E,E);const b=vS;if(E.vsub(n,b),b.lengthSquared()<m*m){if(f)return!0;p=!0;const R=this.createContactEquation(l,c,e,t,u,h);R.ri.copy(b),R.ri.normalize(),R.ni.copy(R.ri),R.ri.scale(m,R.ri),E.vsub(s,R.rj),R.ri.vadd(n,R.ri),R.ri.vsub(l.position,R.ri),R.rj.vadd(s,R.rj),R.rj.vsub(c.position,R.rj),this.result.push(R),this.createFrictionEquationsFromContact(R,this.frictionResult);return}}for(let y=0,x=_.length;y!==x&&p===!1;y++){const E=g[y],b=_[y],R=xS;a.vmult(E,R);const C=SS;a.vmult(v[b[0]],C),C.vadd(s,C);const k=ES;R.scale(-m,k),n.vadd(k,k);const w=wS;k.vsub(C,w);const A=w.dot(R),H=MS;if(n.vsub(C,H),A<0&&H.dot(R)>0){const j=[];for(let B=0,L=b.length;B!==L;B++){const I=d.get();a.vmult(v[b[B]],I),s.vadd(I,I),j.push(I)}if(oS(j,R,n)){if(f)return!0;p=!0;const B=this.createContactEquation(l,c,e,t,u,h);R.scale(-m,B.ri),R.negate(B.ni);const L=d.get();R.scale(-A,L);const I=d.get();R.scale(-m,I),n.vsub(s,B.rj),B.rj.vadd(I,B.rj),B.rj.vadd(L,B.rj),B.rj.vadd(s,B.rj),B.rj.vsub(c.position,B.rj),B.ri.vadd(n,B.ri),B.ri.vsub(l.position,B.ri),d.release(L),d.release(I),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult);for(let D=0,W=j.length;D!==W;D++)d.release(j[D]);return}else for(let B=0;B!==b.length;B++){const L=d.get(),I=d.get();a.vmult(v[b[(B+1)%b.length]],L),a.vmult(v[b[(B+2)%b.length]],I),s.vadd(L,L),s.vadd(I,I);const D=gS;I.vsub(L,D);const W=_S;D.unit(W);const Z=d.get(),$=d.get();n.vsub(L,$);const J=$.dot(W);W.scale(J,Z),Z.vadd(L,Z);const O=d.get();if(Z.vsub(n,O),J>0&&J*J<D.lengthSquared()&&O.lengthSquared()<m*m){if(f)return!0;const z=this.createContactEquation(l,c,e,t,u,h);Z.vsub(s,z.rj),Z.vsub(n,z.ni),z.ni.normalize(),z.ni.scale(m,z.ri),z.rj.vadd(s,z.rj),z.rj.vsub(c.position,z.rj),z.ri.vadd(n,z.ri),z.ri.vsub(l.position,z.ri),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult);for(let ue=0,de=j.length;ue!==de;ue++)d.release(j[ue]);d.release(L),d.release(I),d.release(Z),d.release(O),d.release($);return}d.release(L),d.release(I),d.release(Z),d.release(O),d.release($)}for(let B=0,L=j.length;B!==L;B++)d.release(j[B])}}}planeConvex(e,t,n,s,o,a,l,c,u,h,f){const d=bS,g=TS;g.set(0,0,1),o.vmult(g,g);let _=0;const v=AS;for(let m=0;m!==t.vertices.length;m++)if(d.copy(t.vertices[m]),a.vmult(d,d),s.vadd(d,d),d.vsub(n,v),g.dot(v)<=0){if(f)return!0;const y=this.createContactEquation(l,c,e,t,u,h),x=RS;g.scale(g.dot(v),x),d.vsub(x,x),x.vsub(n,y.ri),y.ni.copy(g),d.vsub(s,y.rj),y.ri.vadd(n,y.ri),y.ri.vsub(l.position,y.ri),y.rj.vadd(s,y.rj),y.rj.vsub(c.position,y.rj),this.result.push(y),_++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&_&&this.createFrictionFromAverage(_)}boxConvex(e,t,n,s,o,a,l,c,u,h,f){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,s,o,a,l,c,e,t,f)}sphereHeightfield(e,t,n,s,o,a,l,c,u,h,f){const d=t.data,g=e.radius,_=t.elementSize,v=HS,m=VS;Je.pointToLocalFrame(s,a,n,m);let p=Math.floor((m.x-g)/_)-1,y=Math.ceil((m.x+g)/_)+1,x=Math.floor((m.y-g)/_)-1,E=Math.ceil((m.y+g)/_)+1;if(y<0||E<0||p>d.length||x>d[0].length)return;p<0&&(p=0),y<0&&(y=0),x<0&&(x=0),E<0&&(E=0),p>=d.length&&(p=d.length-1),y>=d.length&&(y=d.length-1),E>=d[0].length&&(E=d[0].length-1),x>=d[0].length&&(x=d[0].length-1);const b=[];t.getRectMinMax(p,x,y,E,b);const R=b[0],C=b[1];if(m.z-g>C||m.z+g<R)return;const k=this.result;for(let w=p;w<y;w++)for(let A=x;A<E;A++){const H=k.length;let j=!1;if(t.getConvexTrianglePillar(w,A,!1),Je.pointToWorldFrame(s,a,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(j=this.sphereConvex(e,t.pillarConvex,n,v,o,a,l,c,e,t,f)),f&&j||(t.getConvexTrianglePillar(w,A,!0),Je.pointToWorldFrame(s,a,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(j=this.sphereConvex(e,t.pillarConvex,n,v,o,a,l,c,e,t,f)),f&&j))return!0;if(k.length-H>2)return}}boxHeightfield(e,t,n,s,o,a,l,c,u,h,f){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,s,o,a,l,c,e,t,f)}convexHeightfield(e,t,n,s,o,a,l,c,u,h,f){const d=t.data,g=t.elementSize,_=e.boundingSphereRadius,v=zS,m=kS,p=BS;Je.pointToLocalFrame(s,a,n,p);let y=Math.floor((p.x-_)/g)-1,x=Math.ceil((p.x+_)/g)+1,E=Math.floor((p.y-_)/g)-1,b=Math.ceil((p.y+_)/g)+1;if(x<0||b<0||y>d.length||E>d[0].length)return;y<0&&(y=0),x<0&&(x=0),E<0&&(E=0),b<0&&(b=0),y>=d.length&&(y=d.length-1),x>=d.length&&(x=d.length-1),b>=d[0].length&&(b=d[0].length-1),E>=d[0].length&&(E=d[0].length-1);const R=[];t.getRectMinMax(y,E,x,b,R);const C=R[0],k=R[1];if(!(p.z-_>k||p.z+_<C))for(let w=y;w<x;w++)for(let A=E;A<b;A++){let H=!1;if(t.getConvexTrianglePillar(w,A,!1),Je.pointToWorldFrame(s,a,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(H=this.convexConvex(e,t.pillarConvex,n,v,o,a,l,c,null,null,f,m,null)),f&&H||(t.getConvexTrianglePillar(w,A,!0),Je.pointToWorldFrame(s,a,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(H=this.convexConvex(e,t.pillarConvex,n,v,o,a,l,c,null,null,f,m,null)),f&&H))return!0}}sphereParticle(e,t,n,s,o,a,l,c,u,h,f){const d=DS;if(d.set(0,0,1),s.vsub(n,d),d.lengthSquared()<=e.radius*e.radius){if(f)return!0;const _=this.createContactEquation(c,l,t,e,u,h);d.normalize(),_.rj.copy(d),_.rj.scale(e.radius,_.rj),_.ni.copy(d),_.ni.negate(_.ni),_.ri.set(0,0,0),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}planeParticle(e,t,n,s,o,a,l,c,u,h,f){const d=LS;d.set(0,0,1),l.quaternion.vmult(d,d);const g=NS;if(s.vsub(l.position,g),d.dot(g)<=0){if(f)return!0;const v=this.createContactEquation(c,l,t,e,u,h);v.ni.copy(d),v.ni.negate(v.ni),v.ri.set(0,0,0);const m=IS;d.scale(d.dot(s),m),s.vsub(m,m),v.rj.copy(m),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(e,t,n,s,o,a,l,c,u,h,f){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,s,o,a,l,c,e,t,f)}convexParticle(e,t,n,s,o,a,l,c,u,h,f){let d=-1;const g=FS,_=OS;let v=null;const m=US;if(m.copy(s),m.vsub(n,m),o.conjugate(dh),dh.vmult(m,m),e.pointIsInside(m)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,o),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(o);for(let p=0,y=e.faces.length;p!==y;p++){const x=[e.worldVertices[e.faces[p][0]]],E=e.worldFaceNormals[p];s.vsub(x[0],fh);const b=-E.dot(fh);if(v===null||Math.abs(b)<Math.abs(v)){if(f)return!0;v=b,d=p,g.copy(E)}}if(d!==-1){const p=this.createContactEquation(c,l,t,e,u,h);g.scale(v,_),_.vadd(s,_),_.vsub(n,_),p.rj.copy(_),g.negate(p.ni),p.ri.set(0,0,0);const y=p.ri,x=p.rj;y.vadd(s,y),y.vsub(c.position,y),x.vadd(n,x),x.vsub(l.position,x),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,s,o,a,l,c,u,h,f){return this.convexHeightfield(t,e,s,n,a,o,c,l,u,h,f)}particleCylinder(e,t,n,s,o,a,l,c,u,h,f){return this.convexParticle(t,e,s,n,a,o,c,l,u,h,f)}sphereTrimesh(e,t,n,s,o,a,l,c,u,h,f){const d=Xx,g=jx,_=Yx,v=$x,m=Kx,p=Zx,y=tS,x=qx,E=Gx,b=nS;Je.pointToLocalFrame(s,a,n,m);const R=e.radius;y.lowerBound.set(m.x-R,m.y-R,m.z-R),y.upperBound.set(m.x+R,m.y+R,m.z+R),t.getTrianglesInAABB(y,b);const C=Wx,k=e.radius*e.radius;for(let B=0;B<b.length;B++)for(let L=0;L<3;L++)if(t.getVertex(t.indices[b[B]*3+L],C),C.vsub(m,E),E.lengthSquared()<=k){if(x.copy(C),Je.pointToWorldFrame(s,a,x,C),C.vsub(n,E),f)return!0;let I=this.createContactEquation(l,c,e,t,u,h);I.ni.copy(E),I.ni.normalize(),I.ri.copy(I.ni),I.ri.scale(e.radius,I.ri),I.ri.vadd(n,I.ri),I.ri.vsub(l.position,I.ri),I.rj.copy(C),I.rj.vsub(c.position,I.rj),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}for(let B=0;B<b.length;B++)for(let L=0;L<3;L++){t.getVertex(t.indices[b[B]*3+L],d),t.getVertex(t.indices[b[B]*3+(L+1)%3],g),g.vsub(d,_),m.vsub(g,p);const I=p.dot(_);m.vsub(d,p);let D=p.dot(_);if(D>0&&I<0&&(m.vsub(d,p),v.copy(_),v.normalize(),D=p.dot(v),v.scale(D,p),p.vadd(d,p),p.distanceTo(m)<e.radius)){if(f)return!0;const Z=this.createContactEquation(l,c,e,t,u,h);p.vsub(m,Z.ni),Z.ni.normalize(),Z.ni.scale(e.radius,Z.ri),Z.ri.vadd(n,Z.ri),Z.ri.vsub(l.position,Z.ri),Je.pointToWorldFrame(s,a,p,p),p.vsub(c.position,Z.rj),Je.vectorToWorldFrame(a,Z.ni,Z.ni),Je.vectorToWorldFrame(a,Z.ri,Z.ri),this.result.push(Z),this.createFrictionEquationsFromContact(Z,this.frictionResult)}}const w=Jx,A=Qx,H=eS,j=Hx;for(let B=0,L=b.length;B!==L;B++){t.getTriangleVertices(b[B],w,A,H),t.getNormal(b[B],j),m.vsub(w,p);let I=p.dot(j);if(j.scale(I,p),m.vsub(p,p),I=p.distanceTo(m),Tt.pointInTriangle(p,w,A,H)&&I<e.radius){if(f)return!0;let D=this.createContactEquation(l,c,e,t,u,h);p.vsub(m,D.ni),D.ni.normalize(),D.ni.scale(e.radius,D.ri),D.ri.vadd(n,D.ri),D.ri.vsub(l.position,D.ri),Je.pointToWorldFrame(s,a,p,p),p.vsub(c.position,D.rj),Je.vectorToWorldFrame(a,D.ni,D.ni),Je.vectorToWorldFrame(a,D.ri,D.ri),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}}b.length=0}planeTrimesh(e,t,n,s,o,a,l,c,u,h,f){const d=new S,g=zx;g.set(0,0,1),o.vmult(g,g);for(let _=0;_<t.vertices.length/3;_++){t.getVertex(_,d);const v=new S;v.copy(d),Je.pointToWorldFrame(s,a,v,d);const m=kx;if(d.vsub(n,m),g.dot(m)<=0){if(f)return!0;const y=this.createContactEquation(l,c,e,t,u,h);y.ni.copy(g);const x=Vx;g.scale(m.dot(g),x),d.vsub(x,x),y.ri.copy(x),y.ri.vsub(l.position,y.ri),y.rj.copy(d),y.rj.vsub(c.position,y.rj),this.result.push(y),this.createFrictionEquationsFromContact(y,this.frictionResult)}}}}const Ui=new S,hs=new S,ds=new S,Ux=new S,Fx=new S,Ox=new At,Bx=new At,zx=new S,kx=new S,Vx=new S,Hx=new S,Gx=new S;new S;const Wx=new S,qx=new S,Xx=new S,jx=new S,Yx=new S,$x=new S,Kx=new S,Zx=new S,Jx=new S,Qx=new S,eS=new S,tS=new cn,nS=[],fo=new S,hh=new S,iS=new S,sS=new S,rS=new S;function oS(i,e,t){let n=null;const s=i.length;for(let o=0;o!==s;o++){const a=i[o],l=iS;i[(o+1)%s].vsub(a,l);const c=sS;l.cross(e,c);const u=rS;t.vsub(a,u);const h=c.dot(u);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const po=new S,aS=new S,lS=new S,cS=new S,uS=[new S,new S,new S,new S,new S,new S],hS=new S,dS=new S,fS=new S,pS=new S,mS=new S,gS=new S,_S=new S,vS=new S,yS=new S,xS=new S,SS=new S,ES=new S,wS=new S,MS=new S;new S;new S;const bS=new S,TS=new S,AS=new S,RS=new S,CS=new S,PS=new S,LS=new S,NS=new S,IS=new S,DS=new S,dh=new At,US=new S;new S;const FS=new S,fh=new S,OS=new S,BS=new S,zS=new S,kS=[0],VS=new S,HS=new S;class ph{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const n=t;t=e,e=n}return e<<16|t}set(e,t){const n=this.getKey(e,t),s=this.current;let o=0;for(;n>s[o];)o++;if(n!==s[o]){for(let a=s.length-1;a>=o;a--)s[a+1]=s[a];s[o]=n}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const n=this.current,s=this.previous,o=n.length,a=s.length;let l=0;for(let c=0;c<o;c++){let u=!1;const h=n[c];for(;h>s[l];)l++;u=h===s[l],u||mh(e,h)}l=0;for(let c=0;c<a;c++){let u=!1;const h=s[c];for(;h>n[l];)l++;u=n[l]===h,u||mh(t,h)}}}function mh(i,e){i.push((e&4294901760)>>16,e&65535)}const Wa=(i,e)=>i<e?`${i}-${e}`:`${e}-${i}`;class GS{constructor(){this.data={keys:[]}}get(e,t){const n=Wa(e,t);return this.data[n]}set(e,t,n){const s=Wa(e,t);this.get(e,t)||this.data.keys.push(s),this.data[s]=n}delete(e,t){const n=Wa(e,t),s=this.data.keys.indexOf(n);s!==-1&&this.data.keys.splice(s,1),delete this.data[n]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const n=t.pop();delete e[n]}}}class WS extends Ad{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new S,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new S,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new Rd,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new Od,this.constraints=[],this.narrowphase=new Dx(this),this.collisionMatrix=new eh,this.collisionMatrixPrevious=new eh,this.bodyOverlapKeeper=new ph,this.shapeOverlapKeeper=new ph,this.contactmaterials=[],this.contactMaterialTable=new GS,this.defaultMaterial=new Fn("default"),this.defaultContactMaterial=new Go(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof Uo?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,s){return n===void 0&&(n={}),n.mode=Tt.ALL,n.from=e,n.to=t,n.callback=s,qa.intersectWorld(this,n)}raycastAny(e,t,n,s){return n===void 0&&(n={}),n.mode=Tt.ANY,n.from=e,n.to=t,n.result=s,qa.intersectWorld(this,n)}raycastClosest(e,t,n,s){return n===void 0&&(n={}),n.mode=Tt.CLOSEST,n.from=e,n.to=t,n.result=s,qa.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof ie&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,n=this.bodies,s=n.indexOf(e);if(s!==-1){n.splice(s,1);for(let o=0;o!==n.length;o++)n[o].index=o;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let n=0;n<t.length;n++){const s=t[n].shapes;for(let o=0;o<s.length;o++){const a=s[o];if(a.id===e)return a}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const n=Lt.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const s=n-this.lastCallTime;this.step(e,s,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const s=Lt.now();let o=0;for(;this.accumulator>=e&&o<n&&(this.internalStep(e),this.accumulator-=e,o++,!(Lt.now()-s>e*1e3)););this.accumulator=this.accumulator%e;const a=this.accumulator/e;for(let l=0;l!==this.bodies.length;l++){const c=this.bodies[l];c.previousPosition.lerp(c.position,a,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,a,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,n=$S,s=KS,o=this.bodies.length,a=this.bodies,l=this.solver,c=this.gravity,u=this.doProfiling,h=this.profile,f=ie.DYNAMIC;let d=-1/0;const g=this.constraints,_=YS;c.length();const v=c.x,m=c.y,p=c.z;let y=0;for(u&&(d=Lt.now()),y=0;y!==o;y++){const B=a[y];if(B.type===f){const L=B.force,I=B.mass;L.x+=I*v,L.y+=I*m,L.z+=I*p}}for(let B=0,L=this.subsystems.length;B!==L;B++)this.subsystems[B].update();u&&(d=Lt.now()),n.length=0,s.length=0,this.broadphase.collisionPairs(this,n,s),u&&(h.broadphase=Lt.now()-d);let x=g.length;for(y=0;y!==x;y++){const B=g[y];if(!B.collideConnected)for(let L=n.length-1;L>=0;L-=1)(B.bodyA===n[L]&&B.bodyB===s[L]||B.bodyB===n[L]&&B.bodyA===s[L])&&(n.splice(L,1),s.splice(L,1))}this.collisionMatrixTick(),u&&(d=Lt.now());const E=jS,b=t.length;for(y=0;y!==b;y++)E.push(t[y]);t.length=0;const R=this.frictionEquations.length;for(y=0;y!==R;y++)_.push(this.frictionEquations[y]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,s,this,t,E,this.frictionEquations,_),u&&(h.narrowphase=Lt.now()-d),u&&(d=Lt.now()),y=0;y<this.frictionEquations.length;y++)l.addEquation(this.frictionEquations[y]);const C=t.length;for(let B=0;B!==C;B++){const L=t[B],I=L.bi,D=L.bj,W=L.si,Z=L.sj;let $;if(I.material&&D.material?$=this.getContactMaterial(I.material,D.material)||this.defaultContactMaterial:$=this.defaultContactMaterial,$.friction,I.material&&D.material&&(I.material.friction>=0&&D.material.friction>=0&&I.material.friction*D.material.friction,I.material.restitution>=0&&D.material.restitution>=0&&(L.restitution=I.material.restitution*D.material.restitution)),l.addEquation(L),I.allowSleep&&I.type===ie.DYNAMIC&&I.sleepState===ie.SLEEPING&&D.sleepState===ie.AWAKE&&D.type!==ie.STATIC){const J=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),O=D.sleepSpeedLimit**2;J>=O*2&&(I.wakeUpAfterNarrowphase=!0)}if(D.allowSleep&&D.type===ie.DYNAMIC&&D.sleepState===ie.SLEEPING&&I.sleepState===ie.AWAKE&&I.type!==ie.STATIC){const J=I.velocity.lengthSquared()+I.angularVelocity.lengthSquared(),O=I.sleepSpeedLimit**2;J>=O*2&&(D.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(I,D,!0),this.collisionMatrixPrevious.get(I,D)||(qs.body=D,qs.contact=L,I.dispatchEvent(qs),qs.body=I,D.dispatchEvent(qs)),this.bodyOverlapKeeper.set(I.id,D.id),this.shapeOverlapKeeper.set(W.id,Z.id)}for(this.emitContactEvents(),u&&(h.makeContactConstraints=Lt.now()-d,d=Lt.now()),y=0;y!==o;y++){const B=a[y];B.wakeUpAfterNarrowphase&&(B.wakeUp(),B.wakeUpAfterNarrowphase=!1)}for(x=g.length,y=0;y!==x;y++){const B=g[y];B.update();for(let L=0,I=B.equations.length;L!==I;L++){const D=B.equations[L];l.addEquation(D)}}l.solve(e,this),u&&(h.solve=Lt.now()-d),l.removeAllEquations();const k=Math.pow;for(y=0;y!==o;y++){const B=a[y];if(B.type&f){const L=k(1-B.linearDamping,e),I=B.velocity;I.scale(L,I);const D=B.angularVelocity;if(D){const W=k(1-B.angularDamping,e);D.scale(W,D)}}}this.dispatchEvent(XS),u&&(d=Lt.now());const A=this.stepnumber%(this.quatNormalizeSkip+1)===0,H=this.quatNormalizeFast;for(y=0;y!==o;y++)a[y].integrate(e,A,H);this.clearForces(),this.broadphase.dirty=!0,u&&(h.integrate=Lt.now()-d),this.stepnumber+=1,this.dispatchEvent(qS);let j=!0;if(this.allowSleep)for(j=!1,y=0;y!==o;y++){const B=a[y];B.sleepTick(this.time),B.sleepState!==ie.SLEEPING&&(j=!0)}this.hasActiveBodies=j}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(Jn,Qn),e){for(let o=0,a=Jn.length;o<a;o+=2)Xs.bodyA=this.getBodyById(Jn[o]),Xs.bodyB=this.getBodyById(Jn[o+1]),this.dispatchEvent(Xs);Xs.bodyA=Xs.bodyB=null}if(t){for(let o=0,a=Qn.length;o<a;o+=2)js.bodyA=this.getBodyById(Qn[o]),js.bodyB=this.getBodyById(Qn[o+1]),this.dispatchEvent(js);js.bodyA=js.bodyB=null}Jn.length=Qn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),s=this.hasAnyEventListener("endShapeContact");if((n||s)&&this.shapeOverlapKeeper.getDiff(Jn,Qn),n){for(let o=0,a=Jn.length;o<a;o+=2){const l=this.getShapeById(Jn[o]),c=this.getShapeById(Jn[o+1]);ei.shapeA=l,ei.shapeB=c,l&&(ei.bodyA=l.body),c&&(ei.bodyB=c.body),this.dispatchEvent(ei)}ei.bodyA=ei.bodyB=ei.shapeA=ei.shapeB=null}if(s){for(let o=0,a=Qn.length;o<a;o+=2){const l=this.getShapeById(Qn[o]),c=this.getShapeById(Qn[o+1]);ti.shapeA=l,ti.shapeB=c,l&&(ti.bodyA=l.body),c&&(ti.bodyB=c.body),this.dispatchEvent(ti)}ti.bodyA=ti.bodyB=ti.shapeA=ti.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let n=0;n!==t;n++){const s=e[n];s.force,s.torque,s.force.set(0,0,0),s.torque.set(0,0,0)}}}new cn;const qa=new Tt,Lt=globalThis.performance||{};if(!Lt.now){let i=Date.now();Lt.timing&&Lt.timing.navigationStart&&(i=Lt.timing.navigationStart),Lt.now=()=>Date.now()-i}new S;const qS={type:"postStep"},XS={type:"preStep"},qs={type:ie.COLLIDE_EVENT_NAME,body:null,contact:null},jS=[],YS=[],$S=[],KS=[],Jn=[],Qn=[],Xs={type:"beginContact",bodyA:null,bodyB:null},js={type:"endContact",bodyA:null,bodyB:null},ei={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},ti={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};/*!
 * Circle Progress - v1.0.0-beta.0 - 2023-07-17
 * https://tigrr.github.io/circle-progress/
 * Copyright (c) Tigran Sargsyan
 * Licensed MIT
 */var yr,xr,ys,xs;class yl extends HTMLElement{constructor(){super();hi(this,yr,{});hi(this,xr,{});hi(this,ys,new Set);hi(this,xs,!1);const t=this.attachShadow({mode:"open"}),{styles:n}=this.constructor;if(n){const o=document.createElement("style");o.textContent=n,t.append(o)}const{props:s}=this.constructor;if(s)for(const[o,a]of Object.entries(s))a.attribute&&(Mt(this,yr)[o]=a.attribute,Mt(this,xr)[a.attribute]=o),a.type===Boolean&&Mt(this,ys).add(o)}attributeUpdated(t,n){}_attrNameToProp(t){return Mt(this,xr)[t]??t}_propToAttrName(t){return Mt(this,yr)[t]??t}_attrValToProp(t,n){return Mt(this,ys).has(t)?n!==null:n}attributeChangedCallback(t,n,s){var o;if(Mt(this,xs)){Yi(this,xs,!1);return}(o=this.attributeUpdated)==null||o.call(this,this._attrNameToProp(t),this._attrValToProp(t,s))}reflectPropToAttribute(t){const n=this[t];Yi(this,xs,!0);const s=this._propToAttrName(t);Mt(this,ys).has(t)?n?this.setAttribute(s,""):this.removeAttribute(s):typeof n=="function"?this.removeAttribute(s):this.setAttribute(s,String(n))}}yr=new WeakMap,xr=new WeakMap,ys=new WeakMap,xs=new WeakMap,Vt(yl,"styles",""),Vt(yl,"props",{});const ZS=function(i,e,t,n){n=n||document;const s=Object.create(JS);if(typeof i=="string"&&(i=n.querySelector(i)),!i)return;const o=n.createElementNS("http://www.w3.org/2000/svg","svg");return o.setAttribute("version","1.1"),e&&o.setAttribute("width",String(e)),t&&o.setAttribute("height",String(t)),e&&t&&o.setAttribute("viewBox","0 0 "+e+" "+t),i.appendChild(o),s.svg=o,s},JS={element:function(i,e,t,n){const s=QS(this,i,e,n);return t&&(s.el.innerHTML=t),s}},QS=function(i,e,t,n,s){s=s||document;const o=Object.create(eE);return o.el=s.createElementNS("http://www.w3.org/2000/svg",e),o.attr(t),(n?"el"in n?n.el:n:i.svg).appendChild(o.el),o},eE={attr:function(i,e){if(i===void 0)return this;if(typeof i=="object"){for(let t in i)this.attr(t,i[t]);return this}return e===void 0?this.el.getAttributeNS(null,i):(this.el.setAttribute(i,e),this)},content:function(i){return this.el.innerHTML=i,this}},tE=function(i,e,t,n,s){const o=typeof i=="string"?zd[i]:i;let a,l;const c=function(u){a||(a=u),u-=a,u=Math.min(u,n);const h=o(u,e,t,n);s(h),u<n?l=requestAnimationFrame(c):s(e+t)};return l=requestAnimationFrame(c),{cancel:()=>{cancelAnimationFrame(l)}}},zd={linear:function(i,e,t,n){return t*i/n+e},easeInQuad:function(i,e,t,n){return i/=n,t*i*i+e},easeOutQuad:function(i,e,t,n){return i/=n,-t*i*(i-2)+e},easeInOutQuad:function(i,e,t,n){return i/=n/2,i<1?t/2*i*i+e:(i--,-t/2*(i*(i-2)-1)+e)},easeInCubic:function(i,e,t,n){return i/=n,t*i*i*i+e},easeOutCubic:function(i,e,t,n){return i/=n,i--,t*(i*i*i+1)+e},easeInOutCubic:function(i,e,t,n){return i/=n/2,i<1?t/2*i*i*i+e:(i-=2,t/2*(i*i*i+2)+e)},easeInQuart:function(i,e,t,n){return i/=n,t*i*i*i*i+e},easeOutQuart:function(i,e,t,n){return i/=n,i--,-t*(i*i*i*i-1)+e},easeInOutQuart:function(i,e,t,n){return i/=n/2,i<1?t/2*i*i*i*i+e:(i-=2,-t/2*(i*i*i*i-2)+e)},easeInQuint:function(i,e,t,n){return i/=n,t*i*i*i*i*i+e},easeOutQuint:function(i,e,t,n){return i/=n,i--,t*(i*i*i*i*i+1)+e},easeInOutQuint:function(i,e,t,n){return i/=n/2,i<1?t/2*i*i*i*i*i+e:(i-=2,t/2*(i*i*i*i*i+2)+e)},easeInSine:function(i,e,t,n){return-t*Math.cos(i/n*(Math.PI/2))+t+e},easeOutSine:function(i,e,t,n){return t*Math.sin(i/n*(Math.PI/2))+e},easeInOutSine:function(i,e,t,n){return-t/2*(Math.cos(Math.PI*i/n)-1)+e},easeInExpo:function(i,e,t,n){return t*Math.pow(2,10*(i/n-1))+e},easeOutExpo:function(i,e,t,n){return t*(-Math.pow(2,-10*i/n)+1)+e},easeInOutExpo:function(i,e,t,n){return i/=n/2,i<1?t/2*Math.pow(2,10*(i-1))+e:(i--,t/2*(-Math.pow(2,-10*i)+2)+e)},easeInCirc:function(i,e,t,n){return i/=n,-t*(Math.sqrt(1-i*i)-1)+e},easeOutCirc:function(i,e,t,n){return i/=n,i--,t*Math.sqrt(1-i*i)+e},easeInOutCirc:function(i,e,t,n){return i/=n/2,i<1?-t/2*(Math.sqrt(1-i*i)-1)+e:(i-=2,t/2*(Math.sqrt(1-i*i)+1)+e)}},xl=(i,e)=>({x:i*Math.cos(e*Math.PI/180),y:i*Math.sin(e*Math.PI/180)}),Xa=(i,e,t,n,s,o=!1)=>{s>0&&s<.3?s=0:s>359.999&&(s=359.999);const a=n+s*(+o*2-1),l=xl(t,n),c=xl(t,a),u=i+l.x,h=i+c.x,f=e+l.y,d=e+c.y;return["M",u,f,"A",t,t,0,+(s>180),+o,h,d].join(" ")};var nE=`
	:host(:not([hidden])) {
		display: inline-block;
	}

	.circle {
		fill: none;
		stroke: #ddd;
	}

	.value {
		fill: none;
		stroke: #00E699;
	}

	.text {
		font: 16px Arial, sans-serif;
		text-anchor: middle;
		fill: #999;
	}

	:host([text-format="valueOnCircle"]) .text-value {
		font-size: 12px;
		fill: #fff;
	}

	:host([text-format="valueOnCircle"]) .text-max {
		font-size: 22px;
		font-weight: bold;
		fill: #ddd;
	}

	:host([text-format="vertical"]) .text-separator {
		font-family: Arial, sans-serif !important;
	}
`;const ja={value:"aria-valuenow",min:"aria-valuemin",max:"aria-valuemax"};var ii,si,Sr;const yi=class yi extends yl{constructor(t={}){super();Vt(this,"value");Vt(this,"min");Vt(this,"max");Vt(this,"startAngle");Vt(this,"anticlockwise");Vt(this,"unconstrained");Vt(this,"indeterminateText");Vt(this,"textFormat");Vt(this,"animation");Vt(this,"animationDuration");hi(this,ii,{});hi(this,si,null);Vt(this,"updateComplete",null);hi(this,Sr,null);Object.defineProperties(this,Object.keys(yi.props).reduce((s,o)=>(s[o]={get(){return this._get(o)},set(a){this.attr(o,a)}},s),{}));let n;t={...yi.defaults,...t},n=t.textFormat==="valueOnCircle"?16:8,this.graph={paper:ZS(this.shadowRoot,100,100),value:0},this.graph.paper.svg.setAttribute("class","base"),this.graph.paper.svg.setAttribute("part","base"),this.graph.paper.svg.setAttribute("role","progressbar"),this.graph.circle=this.graph.paper.element("circle").attr({class:"circle",part:"circle",cx:50,cy:50,r:50-n/2,"stroke-width":n}),this.graph.sector=this.graph.paper.element("path").attr({d:Xa(50,50,50-n/2,0,0),class:"value",part:"value","stroke-width":n}),this.graph.text=this.graph.paper.element("text",{class:"text",part:"text",x:50,y:50}),this._initText(),Object.keys(yi.props).forEach(s=>s in t&&this._set(s,t[s]))}static get observedAttributes(){return Object.entries(this.props).map(([t,n])=>n&&typeof n=="object"&&n.attribute||t)}attributeUpdated(t,n){this._set(t,n)}attr(t){if(!["string","object"].includes(typeof t))throw new TypeError(`Wrong argument passed to attr. Expected object, got "${typeof t}"`);if(typeof t=="string"){if(arguments.length===1)return this._get(t);t=[[t,arguments[1]]]}return Array.isArray(t)||(t=Object.keys(t).map(n=>[n,t[n]])),t.forEach(([n,s])=>this._set(n,s)),this}_get(t){return this._flushBatch(),Mt(this,ii)[t]}_set(t,n){if(n=this._formatValue(t,n),n===void 0)throw new TypeError(`Failed to set the ${t} property on CircleProgress: The provided value is non-finite.`);this._scheduleUpdate(t,n)}_scheduleUpdate(t,n){Mt(this,si)||(Yi(this,si,{}),this.updateComplete=Promise.resolve().then(()=>this._flushBatch())),Mt(this,si)[t]=n}_flushBatch(){if(!Mt(this,si))return;const t=Mt(this,si);Yi(this,si,null);let n=t.min??Mt(this,ii).min,s=t.max??Mt(this,ii).max;"min"in t&&t.min>=s&&(n=t.min=s),"max"in t&&t.max<=n&&(s=t.max=n),"value"in t&&!(t.unconstrained??Mt(this,ii).unconstrained)&&(n!=null&&t.value<n&&(t.value=n),s!=null&&t.value>s&&(t.value=s));for(const[o,a]of Object.entries(t))if(Mt(this,ii)[o]!==a){if(Mt(this,ii)[o]=a,o in ja&&(a!==void 0?this.graph.paper.svg.setAttribute(ja[o],a):this.graph.paper.svg.removeAttribute(ja[o])),["min","max","unconstrained"].includes(o)&&(this.value>this.max||this.value<this.min)&&(this.value=Math.min(this.max,Math.max(this.min,this.value))),o==="textFormat"){this._initText();const l=a==="valueOnCircle"?16:8;this.graph.sector.attr("stroke-width",l),this.graph.circle.attr("stroke-width",l)}this.reflectPropToAttribute(o)}this.updateGraph()}_formatValue(t,n){switch(t){case"value":case"min":case"max":n=Number(n),Number.isFinite(n)||(n=void 0);break;case"startAngle":n=Number(n),Number.isFinite(n)?n=Math.max(0,Math.min(360,n)):n=void 0;break;case"anticlockwise":case"unconstrained":n=!!n;break;case"indeterminateText":n=String(n);break;case"textFormat":if(typeof n!="function"&&!["valueOnCircle","horizontal","vertical","percent","value","none"].includes(n))throw new Error(`Failed to set the "textFormat" property on CircleProgress: the provided value "${n}" is not a legal textFormat identifier.`);break;case"animation":if(typeof n!="string"&&typeof n!="function")throw new TypeError(`Failed to set "animation" property on CircleProgress: the value must be either string or function, ${typeof n} passed.`);if(typeof n=="string"&&n!=="none"&&!zd[n])throw new Error(`Failed to set "animation" on CircleProgress: the provided value ${n} is not a legal easing function name.`);break}return n}_valueToAngle(t=this.value){return Math.min(360,Math.max(0,(t-this.min)/(this.max-this.min)*360))}_isIndeterminate(){return["value","max","min"].some(t=>typeof this[t]!="number")}_positionValueText(t,n){const s=xl(n,t);this.graph.textVal.attr({x:50+s.x,y:50+s.y})}_initText(){const t=this.textFormat;switch(this.graph.text.content(""),typeof t=="string"&&["valueOnCircle","horizontal","vertical"].includes(t)&&(this.graph.textVal=this.graph.paper.element("tspan",{class:"text-value",part:"text-value"},"",this.graph.text),["horizontal","vertical"].includes(t)&&(this.graph.textSeparator=this.graph.paper.element("tspan",{class:"text-separator",part:"text-separator"},"",this.graph.text)),this.graph.textMax=this.graph.paper.element("tspan",{class:"text-max",part:"text-max"},"",this.graph.text)),t){case"valueOnCircle":this.graph.textVal.attr({x:0,y:0,dy:"0.4em"}),this.graph.textMax.attr({x:50,y:50,dy:"0.4em"});break;case"horizontal":this.graph.textSeparator.content("/");break;case"vertical":this.graph.textVal.attr({x:50,dy:"-0.25em"}),this.graph.textSeparator.attr({x:50,dy:"0.1em"}).content("___"),this.graph.textMax.attr({x:50,dy:"1.2em"});break}this.graph.text.attr("dy",t==="vertical"?"":"0.4em")}updateGraph(){var s;const t=this.startAngle-90,n=this.getRadius();if((s=Mt(this,Sr))==null||s.cancel(),this._isIndeterminate())this._updateText(this.value,t,n);else{const o=!this.anticlockwise;let a=this._valueToAngle();this.graph.circle.attr("r",n),this.animation!=="none"&&this.value!==this.graph.value?Yi(this,Sr,tE(this.animation,this.graph.value,this.value-this.graph.value,this.animationDuration,l=>{a=this._valueToAngle(l),this.graph.sector.attr("d",Xa(50,50,n,t,a,o)),this._updateText(l===this.value?l:Math.round(l),(2*t+a)/2,n)})):(this.graph.sector.attr("d",Xa(50,50,n,t,a,o)),this._updateText(this.value,(2*t+a)/2,n)),this.graph.value=this.value}}_updateText(t,n,s){if(typeof this.textFormat=="function"){this.graph.text.content(this.textFormat(t,this.max));return}switch(this.textFormat){case"value":this.graph.text.el.textContent=t!==void 0?t:this.indeterminateText;break;case"percent":this.graph.text.el.textContent=(t!==void 0&&this.max!=null?Math.round(t/this.max*100):this.indeterminateText)+"%";break;case"none":this.graph.text.el.textContent="";break;default:this.graph.textVal.el.textContent=t!==void 0?t:this.indeterminateText,this.graph.textMax.el.textContent=this.max!==void 0?this.max:this.indeterminateText,this.textFormat==="valueOnCircle"&&this._positionValueText(n,s)}}getRadius(){return 50-Math.max(this._getStrokeWidth(this.graph.circle.el),this._getStrokeWidth(this.graph.sector.el))/2}_getStrokeWidth(t){var n;return Number.parseFloat(((n=this.ownerDocument.defaultView)==null?void 0:n.getComputedStyle(t)["stroke-width"])||0)}};ii=new WeakMap,si=new WeakMap,Sr=new WeakMap,Vt(yi,"styles",nE),Vt(yi,"props",{value:!0,min:!0,max:!0,startAngle:{attribute:"start-angle"},anticlockwise:{type:Boolean},unconstrained:{type:Boolean},indeterminateText:{attribute:"indeterminate-text"},textFormat:{attribute:"text-format"},animation:!0,animationDuration:{attribute:"animation-duration"}}),Vt(yi,"defaults",{startAngle:0,min:0,max:1,unconstrained:!1,indeterminateText:"?",anticlockwise:!1,textFormat:"horizontal",animation:"easeInOutCubic",animationDuration:600});let Sl=yi;customElements.define("circle-progress",Sl);const iE=`
uniform float pointMultiplier;

attribute float size;
attribute float angle;
attribute vec4 colour;

varying vec4 vColour;
varying vec2 vAngle;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = size * pointMultiplier / gl_Position.w;

  vAngle = vec2(cos(angle), sin(angle));
  vColour = colour;
}`,sE=`

uniform sampler2D diffuseTexture;

varying vec4 vColour;
varying vec2 vAngle;

void main() {
  vec2 coords = (gl_PointCoord - 0.5) * mat2(vAngle.x, vAngle.y, -vAngle.y, vAngle.x) + 0.5;
  gl_FragColor = texture2D(diffuseTexture, coords) * vColour;
}`;let Ya=class{constructor(e){this._points=[],this._lerp=e}AddPoint(e,t){this._points.push([e,t])}Get(e){let t=0;for(let s=0;s<this._points.length&&!(this._points[s][0]>=e);s++)t=s;const n=Math.min(this._points.length-1,t+1);return t==n?this._points[t][1]:this._lerp((e-this._points[t][0])/(this._points[n][0]-this._points[t][0]),this._points[t][1],this._points[n][1])}},rE=class{constructor(e){const t={diffuseTexture:{value:new br().load("./assets/fire.png")},pointMultiplier:{value:window.innerHeight/(.5*Math.tan(30*Math.PI/90))}};this._material=new ci({uniforms:t,vertexShader:iE,fragmentShader:sE,blending:Ro,depthTest:!0,depthWrite:!1,transparent:!0,vertexColors:!0}),this._camera=e.camera,this._particles=[],this._geometry=new sn,this._geometry.setAttribute("position",new ot([],3)),this._geometry.setAttribute("size",new ot([],5)),this._geometry.setAttribute("colour",new ot([],4)),this._geometry.setAttribute("angle",new ot([],1)),this._points=new bd(this._geometry,this._material),this.parent=e.parent,e.parent.add(this._points),this._alphaSpline=new Ya((n,s,o)=>s+n*(o-s)),this._alphaSpline.AddPoint(0,0),this._alphaSpline.AddPoint(.1,1),this._alphaSpline.AddPoint(.6,1),this._alphaSpline.AddPoint(1,0),this._colourSpline=new Ya((n,s,o)=>s.clone().lerp(o,n)),this._colourSpline.AddPoint(0,new Xe(16777215)),this._colourSpline.AddPoint(1,new Xe(16755268)),this._sizeSpline=new Ya((n,s,o)=>s+n*(o-s)),this._sizeSpline.AddPoint(0,1),this._sizeSpline.AddPoint(.5,5),this._sizeSpline.AddPoint(1,1),this._UpdateGeometry()}_AddParticles(e){this.gdfsghk||(this.gdfsghk=0),this.gdfsghk+=e;const t=Math.floor(this.gdfsghk*75);this.gdfsghk-=t/75;for(let n=0;n<t;n++)this._particles.push({position:new U(0,0,0),size:1,colour:new Xe,alpha:1,life:.075,maxLife:.075,rotation:Math.random()*2*Math.PI,velocity:new U().copy(this.parent.userData.body.velocity).negate()})}_UpdateGeometry(){const e=[],t=[],n=[],s=[];for(let o of this._particles)e.push(o.position.x,o.position.y,o.position.z),n.push(o.colour.r,o.colour.g,o.colour.b,o.alpha),t.push(o.currentSize),s.push(o.rotation);this._geometry.setAttribute("position",new ot(e,3)),this._geometry.setAttribute("size",new ot(t,1)),this._geometry.setAttribute("colour",new ot(n,4)),this._geometry.setAttribute("angle",new ot(s,1)),this._geometry.attributes.position.needsUpdate=!0,this._geometry.attributes.size.needsUpdate=!0,this._geometry.attributes.colour.needsUpdate=!0,this._geometry.attributes.angle.needsUpdate=!0}_UpdateParticles(e){for(let t of this._particles)t.life-=e;this._particles=this._particles.filter(t=>t.life>0);for(let t of this._particles){const n=1-t.life/t.maxLife;t.rotation+=e*.5,t.alpha=this._alphaSpline.Get(n),t.currentSize=t.size*this._sizeSpline.Get(n),t.colour.copy(this._colourSpline.Get(n)),t.position.add(t.velocity.clone().multiplyScalar(e));const s=t.velocity.clone();s.multiplyScalar(e*.1),s.x=Math.sign(t.velocity.x)*Math.min(Math.abs(s.x),Math.abs(t.velocity.x)),s.y=Math.sign(t.velocity.y)*Math.min(Math.abs(s.y),Math.abs(t.velocity.y)),s.z=Math.sign(t.velocity.z)*Math.min(Math.abs(s.z),Math.abs(t.velocity.z)),t.velocity.sub(s)}this._particles.sort((t,n)=>{const s=this._camera.position.distanceTo(t.position),o=this._camera.position.distanceTo(n.position);return s>o?-1:s<o?1:0})}Step(e){this._AddParticles(e),this._UpdateParticles(e),this._UpdateGeometry()}};const oE=`
uniform float pointMultiplier;

attribute float size;
attribute float angle;
attribute vec4 colour;

varying vec4 vColour;
varying vec2 vAngle;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = size * pointMultiplier / gl_Position.w;

  vAngle = vec2(cos(angle), sin(angle));
  vColour = colour;
}`,aE=`

uniform sampler2D diffuseTexture;

varying vec4 vColour;
varying vec2 vAngle;

void main() {
  vec2 coords = (gl_PointCoord - 0.5) * mat2(vAngle.x, vAngle.y, -vAngle.y, vAngle.x) + 0.5;
  gl_FragColor = texture2D(diffuseTexture, coords) * vColour;
}`;class $a{constructor(e){this._points=[],this._lerp=e}AddPoint(e,t){this._points.push([e,t])}Get(e){let t=0;for(let s=0;s<this._points.length&&!(this._points[s][0]>=e);s++)t=s;const n=Math.min(this._points.length-1,t+1);return t==n?this._points[t][1]:this._lerp((e-this._points[t][0])/(this._points[n][0]-this._points[t][0]),this._points[t][1],this._points[n][1])}}class lE{constructor(e){const t={diffuseTexture:{value:new br().load("https://sl-gaming.s3.amazonaws.com/pvpassets/dot.png")},pointMultiplier:{value:window.innerHeight/(.5*Math.tan(30*Math.PI/90))}};this._material=new ci({uniforms:t,vertexShader:oE,fragmentShader:aE,blending:Ro,depthTest:!0,depthWrite:!1,transparent:!0,vertexColors:!0}),this._camera=e.camera,this._particles=[],this._geometry=new sn,this._geometry.setAttribute("position",new ot([],3)),this._geometry.setAttribute("size",new ot([],5)),this._geometry.setAttribute("colour",new ot([],4)),this._geometry.setAttribute("angle",new ot([],1)),this._points=new bd(this._geometry,this._material),this.parent=e.parent,e.parent.add(this._points),this._alphaSpline=new $a((n,s,o)=>s+n*(o-s)),this._alphaSpline.AddPoint(0,0),this._alphaSpline.AddPoint(.1,1),this._alphaSpline.AddPoint(.6,1),this._alphaSpline.AddPoint(1,0),this._colourSpline=new $a((n,s,o)=>s.clone().lerp(o,n)),this._colourSpline.AddPoint(0,new Xe(16777215)),this._colourSpline.AddPoint(1,new Xe(16755268)),this._sizeSpline=new $a((n,s,o)=>s+n*(o-s)),this._sizeSpline.AddPoint(0,1),this._sizeSpline.AddPoint(.5,2),this._sizeSpline.AddPoint(1,1),this._UpdateGeometry()}_AddParticles(e){this.gdfsghk||(this.gdfsghk=0),this.gdfsghk+=e;const t=Math.floor(this.gdfsghk*75);this.gdfsghk-=t/75;for(let n=0;n<t;n++){let s=new U(0,0,0);const o=.25;this._particles.push({position:s,size:.15,colour:new Xe,alpha:1,life:o,maxLife:o,rotation:Math.random()*2*Math.PI,velocity:new U().copy(this.parent.userData.body.velocity).negate()})}}_UpdateGeometry(){const e=[],t=[],n=[],s=[];for(let o of this._particles)e.push(o.position.x,o.position.y,o.position.z),n.push(o.colour.r,o.colour.g,o.colour.b,o.alpha),t.push(o.currentSize),s.push(o.rotation);this._geometry.setAttribute("position",new ot(e,3)),this._geometry.setAttribute("size",new ot(t,1)),this._geometry.setAttribute("colour",new ot(n,4)),this._geometry.setAttribute("angle",new ot(s,1)),this._geometry.attributes.position.needsUpdate=!0,this._geometry.attributes.size.needsUpdate=!0,this._geometry.attributes.colour.needsUpdate=!0,this._geometry.attributes.angle.needsUpdate=!0}_UpdateParticles(e){for(let t of this._particles)t.life-=e;this._particles=this._particles.filter(t=>t.life>0);for(let t of this._particles){const n=1-t.life/t.maxLife;t.rotation+=e*.5,t.alpha=this._alphaSpline.Get(n),t.currentSize=t.size*this._sizeSpline.Get(n),t.colour.copy(this._colourSpline.Get(n)),t.position.add(t.velocity.clone().multiplyScalar(e));const s=t.velocity.clone();s.multiplyScalar(e*.3),s.x=Math.sign(t.velocity.x)*Math.min(Math.abs(s.x),Math.abs(t.velocity.x)),s.y=Math.sign(t.velocity.y)*Math.min(Math.abs(s.y),Math.abs(t.velocity.y)),s.z=Math.sign(t.velocity.z)*Math.min(Math.abs(s.z),Math.abs(t.velocity.z)),t.velocity.sub(s)}this._particles.sort((t,n)=>{const s=this._camera.position.distanceTo(t.position),o=this._camera.position.distanceTo(n.position);return s>o?-1:s<o?1:0})}Step(e){this._AddParticles(e),this._UpdateParticles(e),this._UpdateGeometry()}}let cE=[2201331,38536,9159498,16771899,16733986,15406156];class uE{constructor(e){this.class="player",this.id=e,this.speed=.1,this.acc=20,this.hp=10,this.mesh,this.body,this.face="default",this.jump_multiplier=1.75,this.dodge_distance=50,this.dodge_cooldown=1e3,this.time_since_last_dodge=Date.now(),this.parry_cooldown=1e3,this.time_since_last_parry=0,this.parry_window=300,this.perfect_parry_window=100,this.time_since_last_shoot=Date.now(),this.shoot_cooldown=1500,this.projectile_speed=100,this.super_speed=200,this.power=4,this.move_player=this.move_player.bind(this)}dodge(e){this.body.velocity.addScaledVector(this.dodge_distance,e,this.body.velocity),this.time_since_last_dodge=Date.now()}set_body(e){this.body=e}move_player(e){let t=this.body.velocity.y;this.body.velocity.addScaledVector(this.acc,e,this.body.velocity),this.body.velocity.y=t}take_damage(e){this.hp=this.hp-this.armor.take_damage(e)}createProjectile(e,t=0){let n=new Ri(.5),s=new tt({color:cE[t]}),o=new Pe(n,s);o.userData.parryLevel=t;let a=new vl(1),l=new ie({shape:a,mass:5,linearDamping:.05}),c=new U;this.mesh.children[1].children[0].getWorldPosition(c),l.position.set(c.x,c.y,c.z),o.position.copy(l.position);let u=new U;e.getWorldPosition(u);let h=new U;h.subVectors(o.position,u),console.log("SUB VECTOR: ",h);let f=new U;e.getWorldDirection(f);let d=new S(h.x,h.y,h.z),g=new S;d.scale(this.projectile_speed,g),l.userData={mesh:o,cc:"playerProjectile",createdAt:Date.now(),owner:this.id},l.velocity.copy(g),o.userData.body=l,l.addEventListener("collide",v=>{console.log(v),v.body.userData.cc=="onlineEnemyPlayer"&&console.log(`player [${this.id}]   ->   player [${v.body.userData.playerID}]`),v.body.userData.createdAt-=1e3,v.target.userData.createdAt-=1e3});let _=new lE({parent:o,camera:e});return{mesh:o,body:l,ps:_,deleteAfter:3e3,isSuper:!1}}createSuper(e,t=1){let n=new Ri(1),s=new tt({color:16711680}),o=new Pe(n,s);o.userData.parryLevel=t;let a=new vl(2),l=new ie({shape:a,mass:20,linearDamping:.01}),c=new U;this.mesh.children[1].children[0].getWorldPosition(c),l.position.set(c.x,c.y,c.z),o.position.copy(l.position);let u=new U;e.getWorldDirection(u);let h=new S(u.x,u.y,u.z);h.normalize();let f=new S;h.scale(this.super_speed,f),l.userData={mesh:o,cc:"playerProjectile",createdAt:Date.now(),owner:this.id},l.velocity.copy(f),o.userData.body=l,l.addEventListener("collide",g=>{console.log(g),g.body.userData.cc=="onlineEnemyPlayer"&&console.log(`player [${this.id}]   ->   player [${g.body.userData.playerID}]`),g.body.userData.createdAt-=1e3,g.target.userData.createdAt-=1e3});let d=new rE({parent:o,camera:e});return{mesh:o,body:l,ps:d,deleteAfter:5e3,isSuper:!0}}}function gh(i,e,t){return i===null||(i.point.applyMatrix4(e.matrixWorld),i.distance=i.point.distanceTo(t.ray.origin),i.object=e,i.distance<t.near||i.distance>t.far)?null:i}const Ka=new Vo,_h=new Ct,hE=Pe.prototype.raycast;function dE(i,e){if(this.geometry.boundsTree){if(this.material===void 0)return;_h.copy(this.matrixWorld).invert(),Ka.copy(i.ray).applyMatrix4(_h);const t=this.geometry.boundsTree;if(i.firstHitOnly===!0){const n=gh(t.raycastFirst(Ka,this.material),this,i);n&&e.push(n)}else{const n=t.raycast(Ka,this.material);for(let s=0,o=n.length;s<o;s++){const a=gh(n[s],this,i);a&&e.push(a)}}}else hE.call(this,i,e)}function fE(i,e){var t=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(t!=null){var n,s,o,a,l=[],c=!0,u=!1;try{if(o=(t=t.call(i)).next,e===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=o.call(t)).done)&&(l.push(n.value),l.length!==e);c=!0);}catch(h){u=!0,s=h}finally{try{if(!c&&t.return!=null&&(a=t.return(),Object(a)!==a))return}finally{if(u)throw s}}return l}}function bs(i){"@babel/helpers - typeof";return bs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},bs(i)}function Hn(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function vh(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,Vd(n.key),n)}}function Gn(i,e,t){return e&&vh(i.prototype,e),t&&vh(i,t),Object.defineProperty(i,"prototype",{writable:!1}),i}function _t(i,e,t){return e=Vd(e),e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function pE(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),Object.defineProperty(i,"prototype",{writable:!1}),e&&El(i,e)}function Fo(i){return Fo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Fo(i)}function El(i,e){return El=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,s){return n.__proto__=s,n},El(i,e)}function mE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function kd(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function gE(i,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return kd(i)}function _E(i){var e=mE();return function(){var n=Fo(i),s;if(e){var o=Fo(this).constructor;s=Reflect.construct(n,arguments,o)}else s=n.apply(this,arguments);return gE(this,s)}}function wl(i,e){return vE(i)||fE(i,e)||yE(i,e)||xE()}function vE(i){if(Array.isArray(i))return i}function yE(i,e){if(i){if(typeof i=="string")return yh(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return yh(i,e)}}function yh(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function xE(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function SE(i,e){if(typeof i!="object"||i===null)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function Vd(i){var e=SE(i,"string");return typeof e=="symbol"?e:String(e)}var Ml=function(){function i(e,t,n,s){Hn(this,i),_t(this,"p",void 0),this.p=[e,t,n,s]}return Gn(i,[{key:"genValue",value:function(t){var n=t*t,s=t*t*t,o=1-t,a=o*o,l=a*o;return this.p[0]*l+this.p[1]*a*t*3+this.p[2]*o*n*3+this.p[3]*s}},{key:"derivativeCoefficients",value:function(t){for(var n=[],s=t,o=s.length-1;o>0;o--){for(var a=[],l=0;l<o;l++){var c=o*(s[l+1]-s[l]);a.push(c)}n.push(a),s=a}return n}},{key:"getSlope",value:function(t){var n=this.derivativeCoefficients(this.p)[0],s=1-t,o=s*s,a=s*t*2,l=t*t;return o*n[0]+a*n[1]+l*n[2]}},{key:"controlCurve",value:function(t,n){this.p[1]=t/3+this.p[0],this.p[2]=this.p[3]-n/3}},{key:"hull",value:function(t){var n=this.p,s=[],o,a=0,l=0,c=0,u=[];for(u[a++]=n[0],u[a++]=n[1],u[a++]=n[2],u[a++]=n[3];n.length>1;){for(s=[],l=0,c=n.length-1;l<c;l++)o=t*n[l]+(1-t)*n[l+1],u[a++]=o,s.push(o);n=s}return u}},{key:"split",value:function(t){var n=this.hull(t),s={left:new i(n[0],n[4],n[7],n[9]),right:new i(n[9],n[8],n[6],n[3]),span:n};return s}},{key:"clone",value:function(){return new i(this.p[0],this.p[1],this.p[2],this.p[3])}},{key:"toJSON",value:function(){return{p0:this.p[0],p1:this.p[1],p2:this.p[2],p3:this.p[3]}}}],[{key:"fromJSON",value:function(t){return new i(t.p0,t.p1,t.p2,t.p3)}}]),i}();new U;new zt;var xh=function(){function i(e){Hn(this,i),_t(this,"type",void 0),this.value=e,this.type="value"}return Gn(i,[{key:"genValue",value:function(){return this.value}},{key:"toJSON",value:function(){return{type:"ConstantValue",value:this.value}}},{key:"clone",value:function(){return new i(this.value)}}],[{key:"fromJSON",value:function(t){return new i(t.value)}}]),i}(),EE=function(){function i(e,t){Hn(this,i),_t(this,"type",void 0),this.a=e,this.b=t,this.type="value"}return Gn(i,[{key:"genValue",value:function(){return om.lerp(this.a,this.b,Math.random())}},{key:"toJSON",value:function(){return{type:"IntervalValue",a:this.a,b:this.b}}},{key:"clone",value:function(){return new i(this.a,this.b)}}],[{key:"fromJSON",value:function(t){return new i(t.a,t.b)}}]),i}(),wE=function(){function i(){Hn(this,i),_t(this,"functions",void 0),this.functions=new Array}return Gn(i,[{key:"findFunction",value:function(t){for(var n=0,s=0,o=this.functions.length-1;s+1<o;)if(n=Math.floor((s+o)/2),t<this.getStartX(n))o=n-1;else if(t>this.getEndX(n))s=n+1;else return n;for(var a=s;a<=o;a++)if(t>=this.functions[a][1]&&t<=this.getEndX(a))return a;return-1}},{key:"getStartX",value:function(t){return this.functions[t][1]}},{key:"setStartX",value:function(t,n){t>0&&(this.functions[t][1]=n)}},{key:"getEndX",value:function(t){return t+1<this.functions.length?this.functions[t+1][1]:1}},{key:"setEndX",value:function(t,n){t+1<this.functions.length&&(this.functions[t+1][1]=n)}},{key:"insertFunction",value:function(t,n){var s=this.findFunction(t);this.functions.splice(s+1,0,[n,t])}},{key:"removeFunction",value:function(t){return this.functions.splice(t,1)[0][0]}},{key:"getFunction",value:function(t){return this.functions[t][0]}},{key:"setFunction",value:function(t,n){this.functions[t][0]=n}},{key:"numOfFunctions",get:function(){return this.functions.length}}]),i}(),ME=function(i){pE(t,i);var e=_E(t);function t(){var n,s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[[new Ml(0,.3333333333333333,.6666666666666666,1),0]];return Hn(this,t),n=e.call(this),_t(kd(n),"type",void 0),n.type="function",n.functions=s,n}return Gn(t,[{key:"genValue",value:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,o=this.findFunction(s);return o===-1?0:this.functions[o][0].genValue((s-this.getStartX(o))/(this.getEndX(o)-this.getStartX(o)))}},{key:"toSVG",value:function(s,o){if(o<1)return"";for(var a=["M",0,this.functions[0][0].p[0]].join(" "),l=1/o;l<=1;l+=1/o)a=[a,"L",l*s,this.genValue(l)].join(" ");return a}},{key:"toJSON",value:function(){return{type:"PiecewiseBezier",functions:this.functions.map(function(s){var o=wl(s,2),a=o[0],l=o[1];return{function:a.toJSON(),start:l}})}}},{key:"clone",value:function(){return new t(this.functions.map(function(s){var o=wl(s,2),a=o[0],l=o[1];return[a.clone(),l]}))}}],[{key:"fromJSON",value:function(s){return new t(s.functions.map(function(o){return[Ml.fromJSON(o.function),o.start]}))}}]),t}(wE);function bE(i){switch(i.type){case"ConstantValue":return xh.fromJSON(i);case"IntervalValue":return EE.fromJSON(i);case"PiecewiseBezier":return ME.fromJSON(i);default:return new xh(0)}}new U(0,0,1);new U(0,0,1);new U(1,1,1);new U(0,0,1);new U;var Sh=function(){function i(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:new U;Hn(this,i),_t(this,"locations",[]),this.scaleX=e,this.scaleY=t,this.position=n}return Gn(i,[{key:"transform",value:function(t,n){t.x=this.locations[n%this.locations.length].x*this.scaleX+this.position.x,t.y=this.locations[n%this.locations.length].y*this.scaleY+this.position.y,t.z=this.position.z}},{key:"clone",value:function(){var t=new i(this.scaleX,this.scaleY,this.position.clone());return t.locations=this.locations.map(function(n){return n.clone()}),t}},{key:"toJSON",value:function(){return{scaleX:this.scaleX,scaleY:this.scaleY,position:this.position,locations:this.locations.map(function(t){return{x:t.x,y:t.y}})}}},{key:"fromImage",value:function(t,n){var s=document.createElement("canvas");s.width=t.width,s.height=t.height;var o=s.getContext("2d");if(o){o.drawImage(t,0,0);var a=o.getImageData(0,0,s.width,s.height,{colorSpace:"srgb"});s.remove(),this.locations.length=0;for(var l=0;l<a.height;l++)for(var c=0;c<a.width;c++)a.data[(l*a.width+c)*4+3]>n&&this.locations.push(new it(c,a.height-l))}}}],[{key:"fromJSON",value:function(t){var n=new i(t.scaleX,t.scaleY,new U(t.position[0],t.position[1],t.position[2]));return n.locations=t.locations.map(function(s){return new it(s.x,s.y)}),n}}]),i}();function TE(i){switch(i.type){case"TextureSequencer":return Sh.fromJSON(i);default:return new Sh}}var AE=function(){function i(e){Hn(this,i),_t(this,"type","ApplySequences"),_t(this,"sequencers",[]),_t(this,"time",0),_t(this,"index",0),_t(this,"pCount",0),_t(this,"delay",void 0),_t(this,"tempV",new U),this.delay=e}return Gn(i,[{key:"initialize",value:function(t){t.id=this.pCount,t.dst=new U,t.begin=new U,t.inMotion=!1,this.pCount++}},{key:"reset",value:function(){this.time=0,this.index=0,this.pCount=0}},{key:"update",value:function(t,n){var s=this.sequencers[this.index],o=t.id*this.delay;this.time>=s[0].a+o&&this.time<=s[0].b+o?(t.inMotion||(t.inMotion=!0,t.begin.copy(t.position),s[1].transform(t.dst,t.id)),t.position.lerpVectors(t.begin,t.dst,i.BEZIER.genValue((this.time-s[0].a-o)/(s[0].b-s[0].a)))):this.time>s[0].b+o&&(t.inMotion=!1)}},{key:"frameUpdate",value:function(t){for(;this.index+1<this.sequencers.length&&this.time>=this.sequencers[this.index+1][0].a;)this.index++;this.time+=t}},{key:"appendSequencer",value:function(t,n){this.sequencers.push([t,n])}},{key:"toJSON",value:function(){return{type:this.type,delay:this.delay,sequencers:this.sequencers.map(function(t){var n=wl(t,2),s=n[0],o=n[1];return{range:s.toJSON(),sequencer:o.toJSON()}})}}},{key:"clone",value:function(){var t=new i(this.delay);return t.sequencers=this.sequencers.map(function(n){return[n[0].clone(),n[1].clone()]}),t}}],[{key:"fromJSON",value:function(t){var n=new i(t.delay);return t.sequencers.forEach(function(s){n.sequencers.push([bE(s.range),TE(s.sequencer)])}),n}}]),i}();_t(AE,"BEZIER",new Ml(0,0,1,1));new U(0,0,1);new U;new U;new U;new Mr(1,1,1,1);new U(0,0,1);new U(0,0,1);var N=function(i){return i[i.Number=0]="Number",i[i.Vec2=1]="Vec2",i[i.Vec3=2]="Vec3",i[i.Vec4=3]="Vec4",i[i.Boolean=4]="Boolean",i[i.AnyType=5]="AnyType",i[i.NullableAnyType=6]="NullableAnyType",i[i.EventStream=7]="EventStream",i}({}),RE=Gn(function i(e,t,n,s){Hn(this,i),_t(this,"input",void 0),_t(this,"inputIndex",void 0),_t(this,"output",void 0),_t(this,"outputIndex",void 0),this.input=e,this.inputIndex=t,this.input.outputs[t].push(this),this.output=n,this.outputIndex=s,this.output.inputs[s]=this}),CE=function(){function i(){Hn(this,i),_t(this,"visited",new Set),i.Instance=this}return Gn(i,[{key:"buildExecutionOrder",value:function(t,n){t.nodesInOrder.length=0,this.visited.clear();for(var s=0;s<t.outputNodes.length;s++){var o=t.outputNodes[s];o.inputs[0]!==void 0&&this._traverse(o,t,n)}t.compiled=!0}},{key:"_traverse",value:function(t,n,s){this.visited.add(t.id);for(var o=0;o<t.inputs.length;o++)if(t.inputs[o]instanceof RE){var a=t.inputs[o].input;this.visited.has(a.id)||this._traverse(a,n,s)}else t.inputs[o];n.nodesInOrder.push(t)}}]),i}();_t(CE,"Instance",void 0);var we=function(){function i(e){Hn(this,i),_t(this,"name",void 0),_t(this,"nodeTypeSignatures",[]),this.name=e}return Gn(i,[{key:"addSignature",value:function(t,n,s){this.nodeTypeSignatures.push({inputTypes:t,outputTypes:n,func:s})}}]),i}(),Wo=new we("add");Wo.addSignature([N.Number,N.Number],[N.Number],function(i,e,t,n){n[0]=t[0]+t[1]});Wo.addSignature([N.Vec2,N.Vec2],[N.Vec2],function(i,e,t,n){n[0].addVectors(t[0],t[1])});Wo.addSignature([N.Vec3,N.Vec3],[N.Vec3],function(i,e,t,n){n[0].addVectors(t[0],t[1])});Wo.addSignature([N.Vec4,N.Vec4],[N.Vec4],function(i,e,t,n){n[0].addVectors(t[0],t[1])});var qo=new we("sub");qo.addSignature([N.Number,N.Number],[N.Number],function(i,e,t,n){n[0]=t[0]-t[1]});qo.addSignature([N.Vec2,N.Vec2],[N.Vec2],function(i,e,t,n){n[0].subVectors(t[0],t[1])});qo.addSignature([N.Vec3,N.Vec3],[N.Vec3],function(i,e,t,n){n[0].subVectors(t[0],t[1])});qo.addSignature([N.Vec4,N.Vec4],[N.Vec4],function(i,e,t,n){n[0].subVectors(t[0],t[1])});var Xo=new we("mul");Xo.addSignature([N.Number,N.Number],[N.Number],function(i,e,t,n){n[0]=t[0]*t[1]});Xo.addSignature([N.Vec2,N.Number],[N.Vec2],function(i,e,t,n){n[0].copy(t[0]).multiplyScalar(t[1])});Xo.addSignature([N.Vec3,N.Number],[N.Vec3],function(i,e,t,n){n[0].copy(t[0]).multiplyScalar(t[1])});Xo.addSignature([N.Vec4,N.Number],[N.Vec4],function(i,e,t,n){n[0].copy(t[0]).multiplyScalar(t[1])});var jo=new we("div");jo.addSignature([N.Number,N.Number],[N.Number],function(i,e,t,n){n[0]=t[0]/t[1]});jo.addSignature([N.Vec2,N.Number],[N.Vec2],function(i,e,t,n){n[0].copy(t[0]).divideScalar(t[1])});jo.addSignature([N.Vec3,N.Number],[N.Vec3],function(i,e,t,n){n[0].copy(t[0]).divideScalar(t[1])});jo.addSignature([N.Vec4,N.Number],[N.Vec4],function(i,e,t,n){n[0].copy(t[0]).divideScalar(t[1])});var PE=new we("sin");PE.addSignature([N.Number],[N.Number],function(i,e,t,n){n[0]=Math.sin(t[0])});var LE=new we("cos");LE.addSignature([N.Number],[N.Number],function(i,e,t,n){n[0]=Math.cos(t[0])});var NE=new we("tan");NE.addSignature([N.Number],[N.Number],function(i,e,t,n){n[0]=Math.tan(t[0])});var IE=new we("abs");IE.addSignature([N.Number],[N.Number],function(i,e,t,n){n[0]=Math.abs(t[0])});var DE=new we("min");DE.addSignature([N.Number,N.Number],[N.Number],function(i,e,t,n){n[0]=Math.min(t[0],t[1])});var UE=new we("max");UE.addSignature([N.Number,N.Number],[N.Number],function(i,e,t,n){n[0]=Math.max(t[0],t[1])});var $l=new we("dot");$l.addSignature([N.Vec2,N.Vec2],[N.Number],function(i,e,t,n){n[0]=t[0].dot(t[1])});$l.addSignature([N.Vec3,N.Vec3],[N.Number],function(i,e,t,n){n[0]=t[0].dot(t[1])});$l.addSignature([N.Vec4,N.Vec4],[N.Number],function(i,e,t,n){n[0]=t[0].dot(t[1])});var FE=new we("cross");FE.addSignature([N.Vec3,N.Vec3],[N.Vec3],function(i,e,t,n){n[0].crossVectors(t[0],t[1])});var Kl=new we("length");Kl.addSignature([N.Vec2],[N.Number],function(i,e,t,n){n[0]=t[0].length()});Kl.addSignature([N.Vec3],[N.Number],function(i,e,t,n){n[0]=t[0].length()});Kl.addSignature([N.Vec4],[N.Number],function(i,e,t,n){n[0]=t[0].length()});var Zl=new we("lengthSq");Zl.addSignature([N.Vec2],[N.Number],function(i,e,t,n){n[0]=t[0].lengthSq()});Zl.addSignature([N.Vec3],[N.Number],function(i,e,t,n){n[0]=t[0].lengthSq()});Zl.addSignature([N.Vec4],[N.Number],function(i,e,t,n){n[0]=t[0].lengthSq()});var Jl=new we("normalize");Jl.addSignature([N.Vec2],[N.Vec2],function(i,e,t,n){n[0].copy(t[0]).normalize()});Jl.addSignature([N.Vec3],[N.Vec3],function(i,e,t,n){n[0].copy(t[0]).normalize()});Jl.addSignature([N.Vec4],[N.Vec4],function(i,e,t,n){n[0].copy(t[0]).normalize()});var Hd=new we("distance");Hd.addSignature([N.Vec2,N.Vec2],[N.Number],function(i,e,t,n){n[0]=t[0].distanceTo(t[1])});Hd.addSignature([N.Vec3,N.Vec3],[N.Number],function(i,e,t,n){n[0]=t[0].distanceTo(t[1])});var OE=new we("and");OE.addSignature([N.Boolean,N.Boolean],[N.Boolean],function(i,e,t,n){n[0]=t[0]&&t[1]});var BE=new we("or");BE.addSignature([N.Boolean,N.Boolean],[N.Boolean],function(i,e,t,n){n[0]=t[0]||t[1]});var zE=new we("not");zE.addSignature([N.Boolean],[N.Boolean],function(i,e,t,n){n[0]=!t[0]});var Yo=new we("equal");Yo.addSignature([N.Number,N.Number],[N.Boolean],function(i,e,t,n){n[0]=t[0]===t[1]});Yo.addSignature([N.Vec2,N.Vec2],[N.Boolean],function(i,e,t,n){n[0]=t[0].equals(t[1])});Yo.addSignature([N.Vec3,N.Vec3],[N.Boolean],function(i,e,t,n){n[0]=t[0].equals(t[1])});Yo.addSignature([N.Vec4,N.Vec4],[N.Boolean],function(i,e,t,n){n[0]=t[0].equals(t[1])});var kE=new we("lessThan");kE.addSignature([N.Number,N.Number],[N.Boolean],function(i,e,t,n){n[0]=t[0]<t[1]});var VE=new we("greaterThan");VE.addSignature([N.Number,N.Number],[N.Boolean],function(i,e,t,n){n[0]=t[0]>t[1]});var HE=new we("lessThanOrEqual");HE.addSignature([N.Number,N.Number],[N.Boolean],function(i,e,t,n){n[0]=t[0]<=t[1]});var GE=new we("greaterThanOrEqual");GE.addSignature([N.Number,N.Number],[N.Boolean],function(i,e,t,n){n[0]=t[0]>=t[1]});var WE=new we("if");WE.addSignature([N.Boolean,N.AnyType,N.AnyType],[N.AnyType],function(i,e,t,n){n[0]=t[0]?t[1]:t[2]});var qE=new we("number");qE.addSignature([],[N.Number],function(i,e,t,n){n[0]=e.value});var XE=new we("vec2");XE.addSignature([N.Number,N.Number],[N.Vec2],function(i,e,t,n){n[0].x=t[0],n[0].y=t[1]});var jE=new we("vec3");jE.addSignature([N.Number,N.Number,N.Number],[N.Vec3],function(i,e,t,n){n[0].x=t[0],n[0].y=t[1],n[0].z=t[2]});var YE=new we("vec4");YE.addSignature([N.Number,N.Number,N.Number,N.Number],[N.Vec4],function(i,e,t,n){n[0].x=t[0],n[0].y=t[1],n[0].z=t[2],n[0].w=t[3]});var $E=new we("splitVec2");$E.addSignature([N.Vec2],[N.Number,N.Number],function(i,e,t,n){n[0]=t[0].x,n[1]=t[0].y});var KE=new we("splitVec3");KE.addSignature([N.Vec3],[N.Number,N.Number,N.Number],function(i,e,t,n){n[0]=t[0].x,n[1]=t[0].y,n[2]=t[0].z});var ZE=new we("splitVec4");ZE.addSignature([N.Vec4],[N.Number,N.Number,N.Number,N.Number],function(i,e,t,n){n[0]=t[0].x,n[1]=t[0].y,n[2]=t[0].z,n[3]=t[0].w});var JE=new we("bool");JE.addSignature([],[N.Boolean],function(i,e,t,n){n[0]=e.value});var QE=new we("particleProperty");QE.addSignature([N.NullableAnyType],[N.NullableAnyType],function(i,e,t,n){t[0]!==void 0&&(bs(t[0])==="object"?i.particle[e.property].copy(t[0]):i.particle[e.property]=t[0]),i.particle[e.property]!==void 0&&(bs(n[0])==="object"?n[0].copy(i.particle[e.property]):n[0]=i.particle[e.property])});var ew=new we("emit");ew.addSignature([N.EventStream],[],function(i,e,t,n){for(var s=t[0],o=0;o<s.length;o++)i.signal(o,s[o])});var tw=new we("graphProperty");tw.addSignature([N.NullableAnyType],[N.NullableAnyType],function(i,e,t,n){t[0]!==void 0&&(bs(t[0])==="object"?i.graph[e.property].copy(t[0]):i.graph[e.property]=t[0]),i.graph[e.property]!==void 0&&(bs(n[0])==="object"?n[0].copy(i.graph[e.property]):n[0]=i.graph[e.property])});var nw=new we("startEvent");nw.addSignature([],[N.EventStream],function(i,e,t,n){n[0]=[{type:"start"}]});var iw=new we("repeater");iw.addSignature([N.EventStream,N.Number],[N.EventStream],function(i,e,t,n){for(var s=t[0],o=t[1],a=[],l=0;l<s.length;l++)for(var c=0;c<o;c++)a.push(s[l]);n[0]=a});var sw=new we("time");sw.addSignature([],[N.Number],function(i,e,t,n){n[0]=i.emissionState.time});var rw=new we("delta");rw.addSignature([],[N.Number],function(i,e,t,n){n[0]=i.delta});var Ar=new we("output");Ar.addSignature([N.Number],[N.Number],function(i,e,t,n){n[0]=t[0]});Ar.addSignature([N.Vec2],[N.Vec2],function(i,e,t,n){n[0]=t[0]});Ar.addSignature([N.Vec3],[N.Vec3],function(i,e,t,n){n[0]=t[0]});Ar.addSignature([N.Vec4],[N.Vec4],function(i,e,t,n){n[0]=t[0]});Ar.addSignature([N.Boolean],[N.Boolean],function(i,e,t,n){n[0]=t[0]});var $o=new we("lerp");$o.addSignature([N.Number,N.Number,N.Number],[N.Number],function(i,e,t,n){n[0]=t[0]*(1-t[2])+t[1]*t[2]});$o.addSignature([N.Vec2,N.Vec2,N.Number],[N.Vec2],function(i,e,t,n){n[0].lerpVectors(t[0],t[1],t[2])});$o.addSignature([N.Vec3,N.Vec3,N.Number],[N.Vec3],function(i,e,t,n){n[0].lerpVectors(t[0],t[1],t[2])});$o.addSignature([N.Vec4,N.Vec4,N.Number],[N.Vec4],function(i,e,t,n){n[0].lerpVectors(t[0],t[1],t[2])});var ow=function(e){return 1/Math.sqrt(2*Math.PI)*Math.exp(e*e*-.5)},aw=new we("normDistrib");aw.addSignature([N.Number],[N.Number],function(i,e,t,n){n[0]=ow(t[0])});var lw=new we("normcdf");lw.addSignature([N.Number],[N.Number],function(i,e,t,n){var s=t[0],o=.254829592,a=-.284496736,l=1.421413741,c=-1.453152027,u=1.061405429,h=.3275911,f=1;s<0&&(f=-1),s=Math.abs(s)/Math.sqrt(2);var d=1/(1+h*s),g=1-((((u*d+c)*d+l)*d+a)*d+o)*d*Math.exp(-s*s);n[0]=.5*(1+f*g)});var cw=new we("normcdfInv"),Eh=function(e){var t=[2.515517,.802853,.010328],n=[1.432788,.189269,.001308];return e-((t[2]*e+t[1])*e+t[0])/(((n[2]*e+n[1])*e+n[0])*e+1)},On=function(e){return e<.5?-Eh(Math.sqrt(-2*Math.log(e))):Eh(Math.sqrt(-2*Math.log(1-e)))};cw.addSignature([N.Number],[N.Number],function(i,e,t,n){n[0]=On(t[0])});var uw=new we("clamp");uw.addSignature([N.Number,N.Number,N.Number],[N.Number],function(i,e,t,n){n[0]=Math.max(Math.min(t[0],t[2]),t[1])});var hw=new we("smoothstep");hw.addSignature([N.Number,N.Number,N.Number],[N.Number],function(i,e,t,n){var s=Math.max(Math.min(t[0],t[2]),t[1]);n[0]=s*s*(3-2*s)});var Ko=new we("random");Ko.addSignature([N.Number,N.Number],[N.Number],function(i,e,t,n){n[0]=Math.random()*(t[1]-t[0])+t[0]});Ko.addSignature([N.Vec2,N.Vec2],[N.Vec2],function(i,e,t,n){var s=Math.random();n[0].lerpVectors(t[0],t[1],s)});Ko.addSignature([N.Vec3,N.Vec3],[N.Vec3],function(i,e,t,n){var s=Math.random();n[0].lerpVectors(t[0],t[1],s)});Ko.addSignature([N.Vec4,N.Vec4],[N.Vec4],function(i,e,t,n){var s=Math.random();n[0].lerpVectors(t[0],t[1],s)});var Ql=new we("vrand");Ql.addSignature([],[N.Vec2],function(i,e,t,n){var s=On(Math.random()),o=On(Math.random()),a=Math.sqrt(s*s+o*o);n[0].set(s/a,o/a)});Ql.addSignature([],[N.Vec3],function(i,e,t,n){var s=On(Math.random()),o=On(Math.random()),a=On(Math.random()),l=Math.sqrt(s*s+o*o+a*a);n[0].set(s/l,o/l,a/l)});Ql.addSignature([],[N.Vec4],function(i,e,t,n){var s=On(Math.random()),o=On(Math.random()),a=On(Math.random()),l=On(Math.random()),c=Math.sqrt(s*s+o*o+a*a+l*l);n[0].set(s/c,o/c,a/c,l/c)});var dw=new we("bsdf");dw.addSignature([N.Vec3,N.Vec3,N.Vec3,N.Number],[],function(i,e,t,n){});new U(0,0,1);new U;new U;new Mr(1,1,1,1);console.log("%c Particle system powered by three.quarks. https://quarks.art/","font-size: 16px; font-weight: bold;");const fw=()=>{let i=new ft(.05,.003,.01),e=new ft(.0035,.05,.01),t=new tt({color:16711935}),n=new Vi,s=new Pe(e,t),o=new Pe(i,t);return n.add(s,o),n},ec=(i,e=!1,t=!1,n="droop_face_01.png")=>{let s=[15761536,15965202,15158332,10840509,6139362,3066993,15844367,2899536],o=new ft(1.75,3,1.75),a=new ft(.75,2,.75),l=new ft(.75,2,.75),c=new tt({color:s[i]||16737928,wireframe:t}),u=new tt({color:16737928,wireframe:t}),h=new tt({color:16737928,wireframe:t}),f=new Pe(o,c),d=new Pe(a,u),g=new Pe(a,u),_=new Pe(l,h),v=new Pe(l,h);const m=new Td,p=new br(m);let y=new ft(2,2,2),x=[new tt({color:3855}),new tt({color:3855}),new tt({color:3855}),new tt({color:3855}),new tt({color:3855}),new tt({map:p.load("../assets/droop_face_01.png")})],E=new Pe(y,x),b=new Ri(.5),R=new tt({color:10062079,wireframe:!0}),C=new Pe(b,R),k=fw();E.add(k);let w=new Vi;if(w.add(f,E,d,g,_,v),w.children.forEach(A=>{A.add(new _y(A,0))}),w.add(C),E.position.setY(2.5),d.position.setX(1.3),g.position.setX(-1.3),_.position.set(.4,-2.5,0),v.position.set(-.4,-2.5,0),k.position.set(0,0,-1.3),e){let A=new Pe(new ft(2.5,6,2.5),new tt({color:16711935,wireframe:!0}));w.add(A)}return w},pw=()=>{let i=new ft(10,10,1),e=new tt({color:65280}),t=new Kt(new S(5,5,.5)),n=new Fn("wallBodyMaterial");n.friction=.1,n.restitution=.1;let s=new Pe(i,e);s.userData.cc="wall";let o=new Pe(i,e);o.userData.cc="wall";let a=new ie({shape:t,mass:0});a.material=n,a.userData={cc:"wall"};let l=new ie({shape:t,mass:0});l.material=n,l.userData={cc:"wall"};let c=new ft(9.9,14.3,1),u=new tt({color:255}),h=new Kt(new S(4.95,7.15,.5)),f=new Fn("rampBodyMaterial");f.friction=.05,f.restitution=.9;let d=new Pe(c,u);d.userData.cc="floor";let g=new ie({shape:h,mass:0});g.material=f,g.userData={cc:"floor"};let _=new Pe(c,u);_.userData.cc="floor";let v=new ie({shape:h,mass:0});v.material=f,v.userData={cc:"floor"};let m=new ft(100,40,1),p=new tt({color:65280}),y=new Kt(new S(50,20,.5)),x=new Pe(m,p);x.userData.cc="wall";let E=new ie({shape:y,mass:0});E.material=n,E.userData={cc:"wall"};let b=new Pe(m,p);b.userData.cc="wall";let R=new ie({shape:y,mass:0});R.material=n,R.userData={cc:"wall"};let C=new ft(60,40,1),k=new tt({color:65280}),w=new Kt(new S(30,20,.5)),A=new Pe(C,k);A.userData.cc="wall";let H=new ie({shape:w,mass:0});H.material=n,H.userData={cc:"wall"};let j=new Pe(C,k);j.userData.cc="wall";let B=new ie({shape:w,mass:0});B.material=n,B.userData={cc:"wall"};let L=new ft(20,1,100),I=new tt({color:3888756}),D=new Kt(new S(10,.5,50)),W=new Fn("floorBodyMaterial");W.friction=.05,W.restitution=0;let Z=new Pe(L,I);Z.userData.cc="floor";let $=new ie({shape:D,mass:0});$.material=W,$.userData={cc:"floor"};let J=new Pe(L,I);J.userData.cc="floor";let O=new ie({shape:D,mass:0});O.material=W,O.userData={cc:"floor"};let z=new ft(50,1,40),ue=new Kt(new S(20,.5,20)),de=new Pe(z,I);de.userData.cc="floor";let me=new ie({shape:ue,mass:0});me.material=W,me.userData={cc:"floor"};let Ee=new Pe(z,I);Ee.userData.cc="floor";let Fe=new ie({shape:ue,mass:0});Fe.material=W,Fe.userData={cc:"floor"};let be=new ft(20,20,1),Ne=new tt({color:65280}),at=new Kt(new S(10,10,.5)),Ue=new Pe(be,Ne);Ue.userData.cc="box";let G=new ie({shape:at,mass:0});G.material=n,G.userData={cc:"wall"};let kt=new Pe(be,Ne);kt.userData.cc="box";let Se=new ie({shape:at,mass:0});Se.material=n,Se.userData={cc:"wall"};let Te=new Pe(be,Ne);Te.userData.cc="box";let Ae=new ie({shape:at,mass:0});Ae.material=n,Ae.userData={cc:"wall"};let lt=new Pe(be,Ne);lt.userData.cc="box";let Oe=new ie({shape:at,mass:0});Oe.material=n,Oe.userData={cc:"wall"};let Ve=new ft(19.9,5,19.9),nt=new tt({color:16711680}),xt=new Kt(new S(9.9,2.5,9.9)),St=new Fn("deathboxBodyMaterial");St.friction=.05,St.restitution=0;let P=new Pe(Ve,nt);lt.userData.cc="deathbox";let M=new ie({shape:xt,mass:0});M.material=St,M.userData={cc:"deathbox"};let q=new ft(9.9,60,1),re=new Kt(new S(4.95,30,.5)),ne=new Pe(q,u);ne.userData.cc="floor";let se=new ie({shape:re,mass:0});se.material=f,se.userData={cc:"floor"};let ye=new Pe(q,u);ye.userData.cc="floor";let ae=new ie({shape:re,mass:0});ae.material=f,ae.userData={cc:"floor"};let fe=new Vi;fe.add(s,o,d,_,x,b,A,j,Z,J,de,Ee,Ue,kt,Te,lt,P,ne,ye);let Le=[a,l,g,v,E,R,H,B,$,O,me,Fe,G,Se,Ae,Oe,M,se,ae];return s.position.set(-20,5,-20),o.position.set(-20,5,20),d.rotateX(Math.PI/4),d.position.set(-20,4.75,-25.1),_.rotateX(-(Math.PI/4)),_.position.set(-20,4.75,25.1),x.position.set(-50,0,0),x.rotateY(Math.PI/2),b.position.set(10,0,0),b.rotateY(Math.PI/2),A.position.set(-20,0,-50),j.position.set(-20,0,50),Z.position.set(0,0,0),J.position.set(-40,0,0),de.position.set(-20,0,-30),Ee.position.set(-20,0,30),Ue.rotateY(Math.PI/2),Ue.position.set(-9.5,-10.5,0),kt.position.set(-19.5,-10.5,10),Te.rotateY(Math.PI/2),Te.position.set(-29.5,-10.5,0),lt.position.set(-19.5,-10.5,-10),P.position.set(-20,-15,0),ne.position.set(-30,-2,-55),ne.rotateY(Math.PI/2),ne.rotateX(Math.PI/4),ye.position.set(-30,-2,55),ye.rotateY(Math.PI/2),ye.rotateX(Math.PI/4),[fe,Le]};function Gd(i,e){return function(){return i.apply(e,arguments)}}const{toString:mw}=Object.prototype,{getPrototypeOf:tc}=Object,Zo=(i=>e=>{const t=mw.call(e);return i[t]||(i[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),Wn=i=>(i=i.toLowerCase(),e=>Zo(e)===i),Jo=i=>e=>typeof e===i,{isArray:Ds}=Array,_r=Jo("undefined");function gw(i){return i!==null&&!_r(i)&&i.constructor!==null&&!_r(i.constructor)&&yn(i.constructor.isBuffer)&&i.constructor.isBuffer(i)}const Wd=Wn("ArrayBuffer");function _w(i){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(i):e=i&&i.buffer&&Wd(i.buffer),e}const vw=Jo("string"),yn=Jo("function"),qd=Jo("number"),Qo=i=>i!==null&&typeof i=="object",yw=i=>i===!0||i===!1,xo=i=>{if(Zo(i)!=="object")return!1;const e=tc(i);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in i)&&!(Symbol.iterator in i)},xw=Wn("Date"),Sw=Wn("File"),Ew=Wn("Blob"),ww=Wn("FileList"),Mw=i=>Qo(i)&&yn(i.pipe),bw=i=>{let e;return i&&(typeof FormData=="function"&&i instanceof FormData||yn(i.append)&&((e=Zo(i))==="formdata"||e==="object"&&yn(i.toString)&&i.toString()==="[object FormData]"))},Tw=Wn("URLSearchParams"),Aw=i=>i.trim?i.trim():i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Rr(i,e,{allOwnKeys:t=!1}={}){if(i===null||typeof i>"u")return;let n,s;if(typeof i!="object"&&(i=[i]),Ds(i))for(n=0,s=i.length;n<s;n++)e.call(null,i[n],n,i);else{const o=t?Object.getOwnPropertyNames(i):Object.keys(i),a=o.length;let l;for(n=0;n<a;n++)l=o[n],e.call(null,i[l],l,i)}}function Xd(i,e){e=e.toLowerCase();const t=Object.keys(i);let n=t.length,s;for(;n-- >0;)if(s=t[n],e===s.toLowerCase())return s;return null}const jd=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Yd=i=>!_r(i)&&i!==jd;function bl(){const{caseless:i}=Yd(this)&&this||{},e={},t=(n,s)=>{const o=i&&Xd(e,s)||s;xo(e[o])&&xo(n)?e[o]=bl(e[o],n):xo(n)?e[o]=bl({},n):Ds(n)?e[o]=n.slice():e[o]=n};for(let n=0,s=arguments.length;n<s;n++)arguments[n]&&Rr(arguments[n],t);return e}const Rw=(i,e,t,{allOwnKeys:n}={})=>(Rr(e,(s,o)=>{t&&yn(s)?i[o]=Gd(s,t):i[o]=s},{allOwnKeys:n}),i),Cw=i=>(i.charCodeAt(0)===65279&&(i=i.slice(1)),i),Pw=(i,e,t,n)=>{i.prototype=Object.create(e.prototype,n),i.prototype.constructor=i,Object.defineProperty(i,"super",{value:e.prototype}),t&&Object.assign(i.prototype,t)},Lw=(i,e,t,n)=>{let s,o,a;const l={};if(e=e||{},i==null)return e;do{for(s=Object.getOwnPropertyNames(i),o=s.length;o-- >0;)a=s[o],(!n||n(a,i,e))&&!l[a]&&(e[a]=i[a],l[a]=!0);i=t!==!1&&tc(i)}while(i&&(!t||t(i,e))&&i!==Object.prototype);return e},Nw=(i,e,t)=>{i=String(i),(t===void 0||t>i.length)&&(t=i.length),t-=e.length;const n=i.indexOf(e,t);return n!==-1&&n===t},Iw=i=>{if(!i)return null;if(Ds(i))return i;let e=i.length;if(!qd(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=i[e];return t},Dw=(i=>e=>i&&e instanceof i)(typeof Uint8Array<"u"&&tc(Uint8Array)),Uw=(i,e)=>{const n=(i&&i[Symbol.iterator]).call(i);let s;for(;(s=n.next())&&!s.done;){const o=s.value;e.call(i,o[0],o[1])}},Fw=(i,e)=>{let t;const n=[];for(;(t=i.exec(e))!==null;)n.push(t);return n},Ow=Wn("HTMLFormElement"),Bw=i=>i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,n,s){return n.toUpperCase()+s}),wh=(({hasOwnProperty:i})=>(e,t)=>i.call(e,t))(Object.prototype),zw=Wn("RegExp"),$d=(i,e)=>{const t=Object.getOwnPropertyDescriptors(i),n={};Rr(t,(s,o)=>{let a;(a=e(s,o,i))!==!1&&(n[o]=a||s)}),Object.defineProperties(i,n)},kw=i=>{$d(i,(e,t)=>{if(yn(i)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const n=i[t];if(yn(n)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},Vw=(i,e)=>{const t={},n=s=>{s.forEach(o=>{t[o]=!0})};return Ds(i)?n(i):n(String(i).split(e)),t},Hw=()=>{},Gw=(i,e)=>(i=+i,Number.isFinite(i)?i:e),Za="abcdefghijklmnopqrstuvwxyz",Mh="0123456789",Kd={DIGIT:Mh,ALPHA:Za,ALPHA_DIGIT:Za+Za.toUpperCase()+Mh},Ww=(i=16,e=Kd.ALPHA_DIGIT)=>{let t="";const{length:n}=e;for(;i--;)t+=e[Math.random()*n|0];return t};function qw(i){return!!(i&&yn(i.append)&&i[Symbol.toStringTag]==="FormData"&&i[Symbol.iterator])}const Xw=i=>{const e=new Array(10),t=(n,s)=>{if(Qo(n)){if(e.indexOf(n)>=0)return;if(!("toJSON"in n)){e[s]=n;const o=Ds(n)?[]:{};return Rr(n,(a,l)=>{const c=t(a,s+1);!_r(c)&&(o[l]=c)}),e[s]=void 0,o}}return n};return t(i,0)},jw=Wn("AsyncFunction"),Yw=i=>i&&(Qo(i)||yn(i))&&yn(i.then)&&yn(i.catch),ee={isArray:Ds,isArrayBuffer:Wd,isBuffer:gw,isFormData:bw,isArrayBufferView:_w,isString:vw,isNumber:qd,isBoolean:yw,isObject:Qo,isPlainObject:xo,isUndefined:_r,isDate:xw,isFile:Sw,isBlob:Ew,isRegExp:zw,isFunction:yn,isStream:Mw,isURLSearchParams:Tw,isTypedArray:Dw,isFileList:ww,forEach:Rr,merge:bl,extend:Rw,trim:Aw,stripBOM:Cw,inherits:Pw,toFlatObject:Lw,kindOf:Zo,kindOfTest:Wn,endsWith:Nw,toArray:Iw,forEachEntry:Uw,matchAll:Fw,isHTMLForm:Ow,hasOwnProperty:wh,hasOwnProp:wh,reduceDescriptors:$d,freezeMethods:kw,toObjectSet:Vw,toCamelCase:Bw,noop:Hw,toFiniteNumber:Gw,findKey:Xd,global:jd,isContextDefined:Yd,ALPHABET:Kd,generateString:Ww,isSpecCompliantForm:qw,toJSONObject:Xw,isAsyncFn:jw,isThenable:Yw};function $e(i,e,t,n,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=i,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),n&&(this.request=n),s&&(this.response=s)}ee.inherits($e,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ee.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Zd=$e.prototype,Jd={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(i=>{Jd[i]={value:i}});Object.defineProperties($e,Jd);Object.defineProperty(Zd,"isAxiosError",{value:!0});$e.from=(i,e,t,n,s,o)=>{const a=Object.create(Zd);return ee.toFlatObject(i,a,function(c){return c!==Error.prototype},l=>l!=="isAxiosError"),$e.call(a,i.message,e,t,n,s),a.cause=i,a.name=i.name,o&&Object.assign(a,o),a};const $w=null;function Tl(i){return ee.isPlainObject(i)||ee.isArray(i)}function Qd(i){return ee.endsWith(i,"[]")?i.slice(0,-2):i}function bh(i,e,t){return i?i.concat(e).map(function(s,o){return s=Qd(s),!t&&o?"["+s+"]":s}).join(t?".":""):e}function Kw(i){return ee.isArray(i)&&!i.some(Tl)}const Zw=ee.toFlatObject(ee,{},null,function(e){return/^is[A-Z]/.test(e)});function ea(i,e,t){if(!ee.isObject(i))throw new TypeError("target must be an object");e=e||new FormData,t=ee.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,m){return!ee.isUndefined(m[v])});const n=t.metaTokens,s=t.visitor||h,o=t.dots,a=t.indexes,c=(t.Blob||typeof Blob<"u"&&Blob)&&ee.isSpecCompliantForm(e);if(!ee.isFunction(s))throw new TypeError("visitor must be a function");function u(_){if(_===null)return"";if(ee.isDate(_))return _.toISOString();if(!c&&ee.isBlob(_))throw new $e("Blob is not supported. Use a Buffer instead.");return ee.isArrayBuffer(_)||ee.isTypedArray(_)?c&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function h(_,v,m){let p=_;if(_&&!m&&typeof _=="object"){if(ee.endsWith(v,"{}"))v=n?v:v.slice(0,-2),_=JSON.stringify(_);else if(ee.isArray(_)&&Kw(_)||(ee.isFileList(_)||ee.endsWith(v,"[]"))&&(p=ee.toArray(_)))return v=Qd(v),p.forEach(function(x,E){!(ee.isUndefined(x)||x===null)&&e.append(a===!0?bh([v],E,o):a===null?v:v+"[]",u(x))}),!1}return Tl(_)?!0:(e.append(bh(m,v,o),u(_)),!1)}const f=[],d=Object.assign(Zw,{defaultVisitor:h,convertValue:u,isVisitable:Tl});function g(_,v){if(!ee.isUndefined(_)){if(f.indexOf(_)!==-1)throw Error("Circular reference detected in "+v.join("."));f.push(_),ee.forEach(_,function(p,y){(!(ee.isUndefined(p)||p===null)&&s.call(e,p,ee.isString(y)?y.trim():y,v,d))===!0&&g(p,v?v.concat(y):[y])}),f.pop()}}if(!ee.isObject(i))throw new TypeError("data must be an object");return g(i),e}function Th(i){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g,function(n){return e[n]})}function nc(i,e){this._pairs=[],i&&ea(i,this,e)}const ef=nc.prototype;ef.append=function(e,t){this._pairs.push([e,t])};ef.toString=function(e){const t=e?function(n){return e.call(this,n,Th)}:Th;return this._pairs.map(function(s){return t(s[0])+"="+t(s[1])},"").join("&")};function Jw(i){return encodeURIComponent(i).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function tf(i,e,t){if(!e)return i;const n=t&&t.encode||Jw,s=t&&t.serialize;let o;if(s?o=s(e,t):o=ee.isURLSearchParams(e)?e.toString():new nc(e,t).toString(n),o){const a=i.indexOf("#");a!==-1&&(i=i.slice(0,a)),i+=(i.indexOf("?")===-1?"?":"&")+o}return i}class Qw{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){ee.forEach(this.handlers,function(n){n!==null&&e(n)})}}const Ah=Qw,nf={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},eM=typeof URLSearchParams<"u"?URLSearchParams:nc,tM=typeof FormData<"u"?FormData:null,nM=typeof Blob<"u"?Blob:null,iM={isBrowser:!0,classes:{URLSearchParams:eM,FormData:tM,Blob:nM},protocols:["http","https","file","blob","url","data"]},sf=typeof window<"u"&&typeof document<"u",sM=(i=>sf&&["ReactNative","NativeScript","NS"].indexOf(i)<0)(typeof navigator<"u"&&navigator.product),rM=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),oM=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:sf,hasStandardBrowserEnv:sM,hasStandardBrowserWebWorkerEnv:rM},Symbol.toStringTag,{value:"Module"})),Bn={...oM,...iM};function aM(i,e){return ea(i,new Bn.classes.URLSearchParams,Object.assign({visitor:function(t,n,s,o){return Bn.isNode&&ee.isBuffer(t)?(this.append(n,t.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},e))}function lM(i){return ee.matchAll(/\w+|\[(\w*)]/g,i).map(e=>e[0]==="[]"?"":e[1]||e[0])}function cM(i){const e={},t=Object.keys(i);let n;const s=t.length;let o;for(n=0;n<s;n++)o=t[n],e[o]=i[o];return e}function rf(i){function e(t,n,s,o){let a=t[o++];const l=Number.isFinite(+a),c=o>=t.length;return a=!a&&ee.isArray(s)?s.length:a,c?(ee.hasOwnProp(s,a)?s[a]=[s[a],n]:s[a]=n,!l):((!s[a]||!ee.isObject(s[a]))&&(s[a]=[]),e(t,n,s[a],o)&&ee.isArray(s[a])&&(s[a]=cM(s[a])),!l)}if(ee.isFormData(i)&&ee.isFunction(i.entries)){const t={};return ee.forEachEntry(i,(n,s)=>{e(lM(n),s,t,0)}),t}return null}function uM(i,e,t){if(ee.isString(i))try{return(e||JSON.parse)(i),ee.trim(i)}catch(n){if(n.name!=="SyntaxError")throw n}return(t||JSON.stringify)(i)}const ic={transitional:nf,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",s=n.indexOf("application/json")>-1,o=ee.isObject(e);if(o&&ee.isHTMLForm(e)&&(e=new FormData(e)),ee.isFormData(e))return s&&s?JSON.stringify(rf(e)):e;if(ee.isArrayBuffer(e)||ee.isBuffer(e)||ee.isStream(e)||ee.isFile(e)||ee.isBlob(e))return e;if(ee.isArrayBufferView(e))return e.buffer;if(ee.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let l;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return aM(e,this.formSerializer).toString();if((l=ee.isFileList(e))||n.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return ea(l?{"files[]":e}:e,c&&new c,this.formSerializer)}}return o||s?(t.setContentType("application/json",!1),uM(e)):e}],transformResponse:[function(e){const t=this.transitional||ic.transitional,n=t&&t.forcedJSONParsing,s=this.responseType==="json";if(e&&ee.isString(e)&&(n&&!this.responseType||s)){const a=!(t&&t.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(l){if(a)throw l.name==="SyntaxError"?$e.from(l,$e.ERR_BAD_RESPONSE,this,null,this.response):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Bn.classes.FormData,Blob:Bn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};ee.forEach(["delete","get","head","post","put","patch"],i=>{ic.headers[i]={}});const sc=ic,hM=ee.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),dM=i=>{const e={};let t,n,s;return i&&i.split(`
`).forEach(function(a){s=a.indexOf(":"),t=a.substring(0,s).trim().toLowerCase(),n=a.substring(s+1).trim(),!(!t||e[t]&&hM[t])&&(t==="set-cookie"?e[t]?e[t].push(n):e[t]=[n]:e[t]=e[t]?e[t]+", "+n:n)}),e},Rh=Symbol("internals");function Ys(i){return i&&String(i).trim().toLowerCase()}function So(i){return i===!1||i==null?i:ee.isArray(i)?i.map(So):String(i)}function fM(i){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=t.exec(i);)e[n[1]]=n[2];return e}const pM=i=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());function Ja(i,e,t,n,s){if(ee.isFunction(n))return n.call(this,e,t);if(s&&(e=t),!!ee.isString(e)){if(ee.isString(n))return e.indexOf(n)!==-1;if(ee.isRegExp(n))return n.test(e)}}function mM(i){return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}function gM(i,e){const t=ee.toCamelCase(" "+e);["get","set","has"].forEach(n=>{Object.defineProperty(i,n+t,{value:function(s,o,a){return this[n].call(this,e,s,o,a)},configurable:!0})})}class ta{constructor(e){e&&this.set(e)}set(e,t,n){const s=this;function o(l,c,u){const h=Ys(c);if(!h)throw new Error("header name must be a non-empty string");const f=ee.findKey(s,h);(!f||s[f]===void 0||u===!0||u===void 0&&s[f]!==!1)&&(s[f||c]=So(l))}const a=(l,c)=>ee.forEach(l,(u,h)=>o(u,h,c));return ee.isPlainObject(e)||e instanceof this.constructor?a(e,t):ee.isString(e)&&(e=e.trim())&&!pM(e)?a(dM(e),t):e!=null&&o(t,e,n),this}get(e,t){if(e=Ys(e),e){const n=ee.findKey(this,e);if(n){const s=this[n];if(!t)return s;if(t===!0)return fM(s);if(ee.isFunction(t))return t.call(this,s,n);if(ee.isRegExp(t))return t.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Ys(e),e){const n=ee.findKey(this,e);return!!(n&&this[n]!==void 0&&(!t||Ja(this,this[n],n,t)))}return!1}delete(e,t){const n=this;let s=!1;function o(a){if(a=Ys(a),a){const l=ee.findKey(n,a);l&&(!t||Ja(n,n[l],l,t))&&(delete n[l],s=!0)}}return ee.isArray(e)?e.forEach(o):o(e),s}clear(e){const t=Object.keys(this);let n=t.length,s=!1;for(;n--;){const o=t[n];(!e||Ja(this,this[o],o,e,!0))&&(delete this[o],s=!0)}return s}normalize(e){const t=this,n={};return ee.forEach(this,(s,o)=>{const a=ee.findKey(n,o);if(a){t[a]=So(s),delete t[o];return}const l=e?mM(o):String(o).trim();l!==o&&delete t[o],t[l]=So(s),n[l]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return ee.forEach(this,(n,s)=>{n!=null&&n!==!1&&(t[s]=e&&ee.isArray(n)?n.join(", "):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach(s=>n.set(s)),n}static accessor(e){const n=(this[Rh]=this[Rh]={accessors:{}}).accessors,s=this.prototype;function o(a){const l=Ys(a);n[l]||(gM(s,a),n[l]=!0)}return ee.isArray(e)?e.forEach(o):o(e),this}}ta.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);ee.reduceDescriptors(ta.prototype,({value:i},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>i,set(n){this[t]=n}}});ee.freezeMethods(ta);const ai=ta;function Qa(i,e){const t=this||sc,n=e||t,s=ai.from(n.headers);let o=n.data;return ee.forEach(i,function(l){o=l.call(t,o,s.normalize(),e?e.status:void 0)}),s.normalize(),o}function of(i){return!!(i&&i.__CANCEL__)}function Cr(i,e,t){$e.call(this,i??"canceled",$e.ERR_CANCELED,e,t),this.name="CanceledError"}ee.inherits(Cr,$e,{__CANCEL__:!0});function _M(i,e,t){const n=t.config.validateStatus;!t.status||!n||n(t.status)?i(t):e(new $e("Request failed with status code "+t.status,[$e.ERR_BAD_REQUEST,$e.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}const vM=Bn.hasStandardBrowserEnv?{write(i,e,t,n,s,o){const a=[i+"="+encodeURIComponent(e)];ee.isNumber(t)&&a.push("expires="+new Date(t).toGMTString()),ee.isString(n)&&a.push("path="+n),ee.isString(s)&&a.push("domain="+s),o===!0&&a.push("secure"),document.cookie=a.join("; ")},read(i){const e=document.cookie.match(new RegExp("(^|;\\s*)("+i+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(i){this.write(i,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function yM(i){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(i)}function xM(i,e){return e?i.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):i}function af(i,e){return i&&!yM(e)?xM(i,e):e}const SM=Bn.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function s(o){let a=o;return e&&(t.setAttribute("href",a),a=t.href),t.setAttribute("href",a),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return n=s(window.location.href),function(a){const l=ee.isString(a)?s(a):a;return l.protocol===n.protocol&&l.host===n.host}}():function(){return function(){return!0}}();function EM(i){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(i);return e&&e[1]||""}function wM(i,e){i=i||10;const t=new Array(i),n=new Array(i);let s=0,o=0,a;return e=e!==void 0?e:1e3,function(c){const u=Date.now(),h=n[o];a||(a=u),t[s]=c,n[s]=u;let f=o,d=0;for(;f!==s;)d+=t[f++],f=f%i;if(s=(s+1)%i,s===o&&(o=(o+1)%i),u-a<e)return;const g=h&&u-h;return g?Math.round(d*1e3/g):void 0}}function Ch(i,e){let t=0;const n=wM(50,250);return s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,l=o-t,c=n(l),u=o<=a;t=o;const h={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:s};h[e?"download":"upload"]=!0,i(h)}}const MM=typeof XMLHttpRequest<"u",bM=MM&&function(i){return new Promise(function(t,n){let s=i.data;const o=ai.from(i.headers).normalize();let{responseType:a,withXSRFToken:l}=i,c;function u(){i.cancelToken&&i.cancelToken.unsubscribe(c),i.signal&&i.signal.removeEventListener("abort",c)}let h;if(ee.isFormData(s)){if(Bn.hasStandardBrowserEnv||Bn.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((h=o.getContentType())!==!1){const[v,...m]=h?h.split(";").map(p=>p.trim()).filter(Boolean):[];o.setContentType([v||"multipart/form-data",...m].join("; "))}}let f=new XMLHttpRequest;if(i.auth){const v=i.auth.username||"",m=i.auth.password?unescape(encodeURIComponent(i.auth.password)):"";o.set("Authorization","Basic "+btoa(v+":"+m))}const d=af(i.baseURL,i.url);f.open(i.method.toUpperCase(),tf(d,i.params,i.paramsSerializer),!0),f.timeout=i.timeout;function g(){if(!f)return;const v=ai.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),p={data:!a||a==="text"||a==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:v,config:i,request:f};_M(function(x){t(x),u()},function(x){n(x),u()},p),f=null}if("onloadend"in f?f.onloadend=g:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(g)},f.onabort=function(){f&&(n(new $e("Request aborted",$e.ECONNABORTED,i,f)),f=null)},f.onerror=function(){n(new $e("Network Error",$e.ERR_NETWORK,i,f)),f=null},f.ontimeout=function(){let m=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const p=i.transitional||nf;i.timeoutErrorMessage&&(m=i.timeoutErrorMessage),n(new $e(m,p.clarifyTimeoutError?$e.ETIMEDOUT:$e.ECONNABORTED,i,f)),f=null},Bn.hasStandardBrowserEnv&&(l&&ee.isFunction(l)&&(l=l(i)),l||l!==!1&&SM(d))){const v=i.xsrfHeaderName&&i.xsrfCookieName&&vM.read(i.xsrfCookieName);v&&o.set(i.xsrfHeaderName,v)}s===void 0&&o.setContentType(null),"setRequestHeader"in f&&ee.forEach(o.toJSON(),function(m,p){f.setRequestHeader(p,m)}),ee.isUndefined(i.withCredentials)||(f.withCredentials=!!i.withCredentials),a&&a!=="json"&&(f.responseType=i.responseType),typeof i.onDownloadProgress=="function"&&f.addEventListener("progress",Ch(i.onDownloadProgress,!0)),typeof i.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",Ch(i.onUploadProgress)),(i.cancelToken||i.signal)&&(c=v=>{f&&(n(!v||v.type?new Cr(null,i,f):v),f.abort(),f=null)},i.cancelToken&&i.cancelToken.subscribe(c),i.signal&&(i.signal.aborted?c():i.signal.addEventListener("abort",c)));const _=EM(d);if(_&&Bn.protocols.indexOf(_)===-1){n(new $e("Unsupported protocol "+_+":",$e.ERR_BAD_REQUEST,i));return}f.send(s||null)})},Al={http:$w,xhr:bM};ee.forEach(Al,(i,e)=>{if(i){try{Object.defineProperty(i,"name",{value:e})}catch{}Object.defineProperty(i,"adapterName",{value:e})}});const Ph=i=>`- ${i}`,TM=i=>ee.isFunction(i)||i===null||i===!1,lf={getAdapter:i=>{i=ee.isArray(i)?i:[i];const{length:e}=i;let t,n;const s={};for(let o=0;o<e;o++){t=i[o];let a;if(n=t,!TM(t)&&(n=Al[(a=String(t)).toLowerCase()],n===void 0))throw new $e(`Unknown adapter '${a}'`);if(n)break;s[a||"#"+o]=n}if(!n){const o=Object.entries(s).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=e?o.length>1?`since :
`+o.map(Ph).join(`
`):" "+Ph(o[0]):"as no adapter specified";throw new $e("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return n},adapters:Al};function el(i){if(i.cancelToken&&i.cancelToken.throwIfRequested(),i.signal&&i.signal.aborted)throw new Cr(null,i)}function Lh(i){return el(i),i.headers=ai.from(i.headers),i.data=Qa.call(i,i.transformRequest),["post","put","patch"].indexOf(i.method)!==-1&&i.headers.setContentType("application/x-www-form-urlencoded",!1),lf.getAdapter(i.adapter||sc.adapter)(i).then(function(n){return el(i),n.data=Qa.call(i,i.transformResponse,n),n.headers=ai.from(n.headers),n},function(n){return of(n)||(el(i),n&&n.response&&(n.response.data=Qa.call(i,i.transformResponse,n.response),n.response.headers=ai.from(n.response.headers))),Promise.reject(n)})}const Nh=i=>i instanceof ai?i.toJSON():i;function Ts(i,e){e=e||{};const t={};function n(u,h,f){return ee.isPlainObject(u)&&ee.isPlainObject(h)?ee.merge.call({caseless:f},u,h):ee.isPlainObject(h)?ee.merge({},h):ee.isArray(h)?h.slice():h}function s(u,h,f){if(ee.isUndefined(h)){if(!ee.isUndefined(u))return n(void 0,u,f)}else return n(u,h,f)}function o(u,h){if(!ee.isUndefined(h))return n(void 0,h)}function a(u,h){if(ee.isUndefined(h)){if(!ee.isUndefined(u))return n(void 0,u)}else return n(void 0,h)}function l(u,h,f){if(f in e)return n(u,h);if(f in i)return n(void 0,u)}const c={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l,headers:(u,h)=>s(Nh(u),Nh(h),!0)};return ee.forEach(Object.keys(Object.assign({},i,e)),function(h){const f=c[h]||s,d=f(i[h],e[h],h);ee.isUndefined(d)&&f!==l||(t[h]=d)}),t}const cf="1.6.3",rc={};["object","boolean","number","function","string","symbol"].forEach((i,e)=>{rc[i]=function(n){return typeof n===i||"a"+(e<1?"n ":" ")+i}});const Ih={};rc.transitional=function(e,t,n){function s(o,a){return"[Axios v"+cf+"] Transitional option '"+o+"'"+a+(n?". "+n:"")}return(o,a,l)=>{if(e===!1)throw new $e(s(a," has been removed"+(t?" in "+t:"")),$e.ERR_DEPRECATED);return t&&!Ih[a]&&(Ih[a]=!0,console.warn(s(a," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(o,a,l):!0}};function AM(i,e,t){if(typeof i!="object")throw new $e("options must be an object",$e.ERR_BAD_OPTION_VALUE);const n=Object.keys(i);let s=n.length;for(;s-- >0;){const o=n[s],a=e[o];if(a){const l=i[o],c=l===void 0||a(l,o,i);if(c!==!0)throw new $e("option "+o+" must be "+c,$e.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new $e("Unknown option "+o,$e.ERR_BAD_OPTION)}}const Rl={assertOptions:AM,validators:rc},vi=Rl.validators;class Oo{constructor(e){this.defaults=e,this.interceptors={request:new Ah,response:new Ah}}request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=Ts(this.defaults,t);const{transitional:n,paramsSerializer:s,headers:o}=t;n!==void 0&&Rl.assertOptions(n,{silentJSONParsing:vi.transitional(vi.boolean),forcedJSONParsing:vi.transitional(vi.boolean),clarifyTimeoutError:vi.transitional(vi.boolean)},!1),s!=null&&(ee.isFunction(s)?t.paramsSerializer={serialize:s}:Rl.assertOptions(s,{encode:vi.function,serialize:vi.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let a=o&&ee.merge(o.common,o[t.method]);o&&ee.forEach(["delete","get","head","post","put","patch","common"],_=>{delete o[_]}),t.headers=ai.concat(a,o);const l=[];let c=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(t)===!1||(c=c&&v.synchronous,l.unshift(v.fulfilled,v.rejected))});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let h,f=0,d;if(!c){const _=[Lh.bind(this),void 0];for(_.unshift.apply(_,l),_.push.apply(_,u),d=_.length,h=Promise.resolve(t);f<d;)h=h.then(_[f++],_[f++]);return h}d=l.length;let g=t;for(f=0;f<d;){const _=l[f++],v=l[f++];try{g=_(g)}catch(m){v.call(this,m);break}}try{h=Lh.call(this,g)}catch(_){return Promise.reject(_)}for(f=0,d=u.length;f<d;)h=h.then(u[f++],u[f++]);return h}getUri(e){e=Ts(this.defaults,e);const t=af(e.baseURL,e.url);return tf(t,e.params,e.paramsSerializer)}}ee.forEach(["delete","get","head","options"],function(e){Oo.prototype[e]=function(t,n){return this.request(Ts(n||{},{method:e,url:t,data:(n||{}).data}))}});ee.forEach(["post","put","patch"],function(e){function t(n){return function(o,a,l){return this.request(Ts(l||{},{method:e,headers:n?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}Oo.prototype[e]=t(),Oo.prototype[e+"Form"]=t(!0)});const Eo=Oo;class oc{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(o){t=o});const n=this;this.promise.then(s=>{if(!n._listeners)return;let o=n._listeners.length;for(;o-- >0;)n._listeners[o](s);n._listeners=null}),this.promise.then=s=>{let o;const a=new Promise(l=>{n.subscribe(l),o=l}).then(s);return a.cancel=function(){n.unsubscribe(o)},a},e(function(o,a,l){n.reason||(n.reason=new Cr(o,a,l),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}static source(){let e;return{token:new oc(function(s){e=s}),cancel:e}}}const RM=oc;function CM(i){return function(t){return i.apply(null,t)}}function PM(i){return ee.isObject(i)&&i.isAxiosError===!0}const Cl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Cl).forEach(([i,e])=>{Cl[e]=i});const LM=Cl;function uf(i){const e=new Eo(i),t=Gd(Eo.prototype.request,e);return ee.extend(t,Eo.prototype,e,{allOwnKeys:!0}),ee.extend(t,e,null,{allOwnKeys:!0}),t.create=function(s){return uf(Ts(i,s))},t}const Pt=uf(sc);Pt.Axios=Eo;Pt.CanceledError=Cr;Pt.CancelToken=RM;Pt.isCancel=of;Pt.VERSION=cf;Pt.toFormData=ea;Pt.AxiosError=$e;Pt.Cancel=Pt.CanceledError;Pt.all=function(e){return Promise.all(e)};Pt.spread=CM;Pt.isAxiosError=PM;Pt.mergeConfig=Ts;Pt.AxiosHeaders=ai;Pt.formToJSON=i=>rf(ee.isHTMLForm(i)?new FormData(i):i);Pt.getAdapter=lf.getAdapter;Pt.HttpStatusCode=LM;Pt.default=Pt;const hf=Pt,Vn=Object.create(null);Vn.open="0";Vn.close="1";Vn.ping="2";Vn.pong="3";Vn.message="4";Vn.upgrade="5";Vn.noop="6";const wo=Object.create(null);Object.keys(Vn).forEach(i=>{wo[Vn[i]]=i});const Pl={type:"error",data:"parser error"},df=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",ff=typeof ArrayBuffer=="function",pf=i=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(i):i&&i.buffer instanceof ArrayBuffer,ac=({type:i,data:e},t,n)=>df&&e instanceof Blob?t?n(e):Dh(e,n):ff&&(e instanceof ArrayBuffer||pf(e))?t?n(e):Dh(new Blob([e]),n):n(Vn[i]+(e||"")),Dh=(i,e)=>{const t=new FileReader;return t.onload=function(){const n=t.result.split(",")[1];e("b"+(n||""))},t.readAsDataURL(i)};function Uh(i){return i instanceof Uint8Array?i:i instanceof ArrayBuffer?new Uint8Array(i):new Uint8Array(i.buffer,i.byteOffset,i.byteLength)}let tl;function NM(i,e){if(df&&i.data instanceof Blob)return i.data.arrayBuffer().then(Uh).then(e);if(ff&&(i.data instanceof ArrayBuffer||pf(i.data)))return e(Uh(i.data));ac(i,!1,t=>{tl||(tl=new TextEncoder),e(tl.encode(t))})}const Fh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",nr=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let i=0;i<Fh.length;i++)nr[Fh.charCodeAt(i)]=i;const IM=i=>{let e=i.length*.75,t=i.length,n,s=0,o,a,l,c;i[i.length-1]==="="&&(e--,i[i.length-2]==="="&&e--);const u=new ArrayBuffer(e),h=new Uint8Array(u);for(n=0;n<t;n+=4)o=nr[i.charCodeAt(n)],a=nr[i.charCodeAt(n+1)],l=nr[i.charCodeAt(n+2)],c=nr[i.charCodeAt(n+3)],h[s++]=o<<2|a>>4,h[s++]=(a&15)<<4|l>>2,h[s++]=(l&3)<<6|c&63;return u},DM=typeof ArrayBuffer=="function",lc=(i,e)=>{if(typeof i!="string")return{type:"message",data:mf(i,e)};const t=i.charAt(0);return t==="b"?{type:"message",data:UM(i.substring(1),e)}:wo[t]?i.length>1?{type:wo[t],data:i.substring(1)}:{type:wo[t]}:Pl},UM=(i,e)=>{if(DM){const t=IM(i);return mf(t,e)}else return{base64:!0,data:i}},mf=(i,e)=>{switch(e){case"blob":return i instanceof Blob?i:new Blob([i]);case"arraybuffer":default:return i instanceof ArrayBuffer?i:i.buffer}},gf=String.fromCharCode(30),FM=(i,e)=>{const t=i.length,n=new Array(t);let s=0;i.forEach((o,a)=>{ac(o,!1,l=>{n[a]=l,++s===t&&e(n.join(gf))})})},OM=(i,e)=>{const t=i.split(gf),n=[];for(let s=0;s<t.length;s++){const o=lc(t[s],e);if(n.push(o),o.type==="error")break}return n};function BM(){return new TransformStream({transform(i,e){NM(i,t=>{const n=t.length;let s;if(n<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,n);else if(n<65536){s=new Uint8Array(3);const o=new DataView(s.buffer);o.setUint8(0,126),o.setUint16(1,n)}else{s=new Uint8Array(9);const o=new DataView(s.buffer);o.setUint8(0,127),o.setBigUint64(1,BigInt(n))}i.data&&typeof i.data!="string"&&(s[0]|=128),e.enqueue(s),e.enqueue(t)})}})}let nl;function mo(i){return i.reduce((e,t)=>e+t.length,0)}function go(i,e){if(i[0].length===e)return i.shift();const t=new Uint8Array(e);let n=0;for(let s=0;s<e;s++)t[s]=i[0][n++],n===i[0].length&&(i.shift(),n=0);return i.length&&n<i[0].length&&(i[0]=i[0].slice(n)),t}function zM(i,e){nl||(nl=new TextDecoder);const t=[];let n=0,s=-1,o=!1;return new TransformStream({transform(a,l){for(t.push(a);;){if(n===0){if(mo(t)<1)break;const c=go(t,1);o=(c[0]&128)===128,s=c[0]&127,s<126?n=3:s===126?n=1:n=2}else if(n===1){if(mo(t)<2)break;const c=go(t,2);s=new DataView(c.buffer,c.byteOffset,c.length).getUint16(0),n=3}else if(n===2){if(mo(t)<8)break;const c=go(t,8),u=new DataView(c.buffer,c.byteOffset,c.length),h=u.getUint32(0);if(h>Math.pow(2,53-32)-1){l.enqueue(Pl);break}s=h*Math.pow(2,32)+u.getUint32(4),n=3}else{if(mo(t)<s)break;const c=go(t,s);l.enqueue(lc(o?c:nl.decode(c),e)),n=0}if(s===0||s>i){l.enqueue(Pl);break}}}})}const _f=4;function Rt(i){if(i)return kM(i)}function kM(i){for(var e in Rt.prototype)i[e]=Rt.prototype[e];return i}Rt.prototype.on=Rt.prototype.addEventListener=function(i,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+i]=this._callbacks["$"+i]||[]).push(e),this};Rt.prototype.once=function(i,e){function t(){this.off(i,t),e.apply(this,arguments)}return t.fn=e,this.on(i,t),this};Rt.prototype.off=Rt.prototype.removeListener=Rt.prototype.removeAllListeners=Rt.prototype.removeEventListener=function(i,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+i];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+i],this;for(var n,s=0;s<t.length;s++)if(n=t[s],n===e||n.fn===e){t.splice(s,1);break}return t.length===0&&delete this._callbacks["$"+i],this};Rt.prototype.emit=function(i){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+i],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(t){t=t.slice(0);for(var n=0,s=t.length;n<s;++n)t[n].apply(this,e)}return this};Rt.prototype.emitReserved=Rt.prototype.emit;Rt.prototype.listeners=function(i){return this._callbacks=this._callbacks||{},this._callbacks["$"+i]||[]};Rt.prototype.hasListeners=function(i){return!!this.listeners(i).length};const mn=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())();function vf(i,...e){return e.reduce((t,n)=>(i.hasOwnProperty(n)&&(t[n]=i[n]),t),{})}const VM=mn.setTimeout,HM=mn.clearTimeout;function na(i,e){e.useNativeTimers?(i.setTimeoutFn=VM.bind(mn),i.clearTimeoutFn=HM.bind(mn)):(i.setTimeoutFn=mn.setTimeout.bind(mn),i.clearTimeoutFn=mn.clearTimeout.bind(mn))}const GM=1.33;function WM(i){return typeof i=="string"?qM(i):Math.ceil((i.byteLength||i.size)*GM)}function qM(i){let e=0,t=0;for(let n=0,s=i.length;n<s;n++)e=i.charCodeAt(n),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(n++,t+=4);return t}function XM(i){let e="";for(let t in i)i.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(i[t]));return e}function jM(i){let e={},t=i.split("&");for(let n=0,s=t.length;n<s;n++){let o=t[n].split("=");e[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return e}class YM extends Error{constructor(e,t,n){super(e),this.description=t,this.context=n,this.type="TransportError"}}class cc extends Rt{constructor(e){super(),this.writable=!1,na(this,e),this.opts=e,this.query=e.query,this.socket=e.socket}onError(e,t,n){return super.emitReserved("error",new YM(e,t,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=lc(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const t=XM(e);return t.length?"?"+t:""}}const yf="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),Ll=64,$M={};let Oh=0,_o=0,Bh;function zh(i){let e="";do e=yf[i%Ll]+e,i=Math.floor(i/Ll);while(i>0);return e}function xf(){const i=zh(+new Date);return i!==Bh?(Oh=0,Bh=i):i+"."+zh(Oh++)}for(;_o<Ll;_o++)$M[yf[_o]]=_o;let Sf=!1;try{Sf=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const KM=Sf;function Ef(i){const e=i.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||KM))return new XMLHttpRequest}catch{}if(!e)try{return new mn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function ZM(){}const JM=function(){return new Ef({xdomain:!1}).responseType!=null}();class QM extends cc{constructor(e){if(super(e),this.polling=!1,typeof location<"u"){const n=location.protocol==="https:";let s=location.port;s||(s=n?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||s!==e.port}const t=e&&e.forceBase64;this.supportsBinary=JM&&!t,this.opts.withCredentials&&(this.cookieJar=void 0)}get name(){return"polling"}doOpen(){this.poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let n=0;this.polling&&(n++,this.once("pollComplete",function(){--n||t()})),this.writable||(n++,this.once("drain",function(){--n||t()}))}else t()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};OM(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this.polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,FM(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=xf()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}request(e={}){return Object.assign(e,{xd:this.xd,cookieJar:this.cookieJar},this.opts),new kn(this.uri(),e)}doWrite(e,t){const n=this.request({method:"POST",data:e});n.on("success",t),n.on("error",(s,o)=>{this.onError("xhr post error",s,o)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,n)=>{this.onError("xhr poll error",t,n)}),this.pollXhr=e}}class kn extends Rt{constructor(e,t){super(),na(this,t),this.opts=t,this.method=t.method||"GET",this.uri=e,this.data=t.data!==void 0?t.data:null,this.create()}create(){var e;const t=vf(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this.opts.xd;const n=this.xhr=new Ef(t);try{n.open(this.method,this.uri,!0);try{if(this.opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let s in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(s)&&n.setRequestHeader(s,this.opts.extraHeaders[s])}}catch{}if(this.method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(e=this.opts.cookieJar)===null||e===void 0||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(n.timeout=this.opts.requestTimeout),n.onreadystatechange=()=>{var s;n.readyState===3&&((s=this.opts.cookieJar)===null||s===void 0||s.parseCookies(n)),n.readyState===4&&(n.status===200||n.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof n.status=="number"?n.status:0)},0))},n.send(this.data)}catch(s){this.setTimeoutFn(()=>{this.onError(s)},0);return}typeof document<"u"&&(this.index=kn.requestsCount++,kn.requests[this.index]=this)}onError(e){this.emitReserved("error",e,this.xhr),this.cleanup(!0)}cleanup(e){if(!(typeof this.xhr>"u"||this.xhr===null)){if(this.xhr.onreadystatechange=ZM,e)try{this.xhr.abort()}catch{}typeof document<"u"&&delete kn.requests[this.index],this.xhr=null}}onLoad(){const e=this.xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}kn.requestsCount=0;kn.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",kh);else if(typeof addEventListener=="function"){const i="onpagehide"in mn?"pagehide":"unload";addEventListener(i,kh,!1)}}function kh(){for(let i in kn.requests)kn.requests.hasOwnProperty(i)&&kn.requests[i].abort()}const uc=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0))(),vo=mn.WebSocket||mn.MozWebSocket,Vh=!0,eb="arraybuffer",Hh=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class tb extends cc{constructor(e){super(e),this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const e=this.uri(),t=this.opts.protocols,n=Hh?{}:vf(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=Vh&&!Hh?t?new vo(e,t):new vo(e):new vo(e,t,n)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],s=t===e.length-1;ac(n,this.supportsBinary,o=>{const a={};try{Vh&&this.ws.send(o)}catch{}s&&uc(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=xf()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}check(){return!!vo}}class nb extends cc{get name(){return"webtransport"}doOpen(){typeof WebTransport=="function"&&(this.transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name]),this.transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this.transport.ready.then(()=>{this.transport.createBidirectionalStream().then(e=>{const t=zM(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(t).getReader(),s=BM();s.readable.pipeTo(e.writable),this.writer=s.writable.getWriter();const o=()=>{n.read().then(({done:l,value:c})=>{l||(this.onPacket(c),o())}).catch(l=>{})};o();const a={type:"open"};this.query.sid&&(a.data=`{"sid":"${this.query.sid}"}`),this.writer.write(a).then(()=>this.onOpen())})}))}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],s=t===e.length-1;this.writer.write(n).then(()=>{s&&uc(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this.transport)===null||e===void 0||e.close()}}const ib={websocket:tb,webtransport:nb,polling:QM},sb=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,rb=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Nl(i){if(i.length>2e3)throw"URI too long";const e=i,t=i.indexOf("["),n=i.indexOf("]");t!=-1&&n!=-1&&(i=i.substring(0,t)+i.substring(t,n).replace(/:/g,";")+i.substring(n,i.length));let s=sb.exec(i||""),o={},a=14;for(;a--;)o[rb[a]]=s[a]||"";return t!=-1&&n!=-1&&(o.source=e,o.host=o.host.substring(1,o.host.length-1).replace(/;/g,":"),o.authority=o.authority.replace("[","").replace("]","").replace(/;/g,":"),o.ipv6uri=!0),o.pathNames=ob(o,o.path),o.queryKey=ab(o,o.query),o}function ob(i,e){const t=/\/{2,9}/g,n=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&n.splice(0,1),e.slice(-1)=="/"&&n.splice(n.length-1,1),n}function ab(i,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,s,o){s&&(t[s]=o)}),t}let wf=class ms extends Rt{constructor(e,t={}){super(),this.binaryType=eb,this.writeBuffer=[],e&&typeof e=="object"&&(t=e,e=null),e?(e=Nl(e),t.hostname=e.host,t.secure=e.protocol==="https"||e.protocol==="wss",t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=Nl(t.host).host),na(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=t.transports||["polling","websocket","webtransport"],this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=jM(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=_f,t.transport=e,this.id&&(t.sid=this.id);const n=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new ib[e](n)}open(){let e;if(this.opts.rememberUpgrade&&ms.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)e="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else e=this.transports[0];this.readyState="opening";try{e=this.createTransport(e)}catch{this.transports.shift(),this.open();return}e.open(),this.setTransport(e)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",t=>this.onClose("transport close",t))}probe(e){let t=this.createTransport(e),n=!1;ms.priorWebsocketSuccess=!1;const s=()=>{n||(t.send([{type:"ping",data:"probe"}]),t.once("packet",f=>{if(!n)if(f.type==="pong"&&f.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;ms.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(h(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const d=new Error("probe error");d.transport=t.name,this.emitReserved("upgradeError",d)}}))};function o(){n||(n=!0,h(),t.close(),t=null)}const a=f=>{const d=new Error("probe error: "+f);d.transport=t.name,o(),this.emitReserved("upgradeError",d)};function l(){a("transport closed")}function c(){a("socket closed")}function u(f){t&&f.name!==t.name&&o()}const h=()=>{t.removeListener("open",s),t.removeListener("error",a),t.removeListener("close",l),this.off("close",c),this.off("upgrading",u)};t.once("open",s),t.once("error",a),t.once("close",l),this.once("close",c),this.once("upgrading",u),this.upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{n||t.open()},200):t.open()}onOpen(){if(this.readyState="open",ms.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade){let e=0;const t=this.upgrades.length;for(;e<t;e++)this.probe(this.upgrades[e])}}onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),this.resetPingTimeout(),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const t=new Error("server error");t.code=e.data,this.onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this.getWritablePackets();this.transport.send(e),this.prevBufferLen=e.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let n=0;n<this.writeBuffer.length;n++){const s=this.writeBuffer[n].data;if(s&&(t+=WM(s)),n>0&&t>this.maxPayload)return this.writeBuffer.slice(0,n);t+=2}return this.writeBuffer}write(e,t,n){return this.sendPacket("message",e,t,n),this}send(e,t,n){return this.sendPacket("message",e,t,n),this}sendPacket(e,t,n,s){if(typeof t=="function"&&(s=t,t=void 0),typeof n=="function"&&(s=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const o={type:e,data:t,options:n};this.emitReserved("packetCreate",o),this.writeBuffer.push(o),s&&this.once("flush",s),this.flush()}close(){const e=()=>{this.onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},n=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}onError(e){ms.priorWebsocketSuccess=!1,this.emitReserved("error",e),this.onClose("transport error",e)}onClose(e,t){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(e){const t=[];let n=0;const s=e.length;for(;n<s;n++)~this.transports.indexOf(e[n])&&t.push(e[n]);return t}};wf.protocol=_f;function lb(i,e="",t){let n=i;t=t||typeof location<"u"&&location,i==null&&(i=t.protocol+"//"+t.host),typeof i=="string"&&(i.charAt(0)==="/"&&(i.charAt(1)==="/"?i=t.protocol+i:i=t.host+i),/^(https?|wss?):\/\//.test(i)||(typeof t<"u"?i=t.protocol+"//"+i:i="https://"+i),n=Nl(i)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const o=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+o+":"+n.port+e,n.href=n.protocol+"://"+o+(t&&t.port===n.port?"":":"+n.port),n}const cb=typeof ArrayBuffer=="function",ub=i=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(i):i.buffer instanceof ArrayBuffer,Mf=Object.prototype.toString,hb=typeof Blob=="function"||typeof Blob<"u"&&Mf.call(Blob)==="[object BlobConstructor]",db=typeof File=="function"||typeof File<"u"&&Mf.call(File)==="[object FileConstructor]";function hc(i){return cb&&(i instanceof ArrayBuffer||ub(i))||hb&&i instanceof Blob||db&&i instanceof File}function Mo(i,e){if(!i||typeof i!="object")return!1;if(Array.isArray(i)){for(let t=0,n=i.length;t<n;t++)if(Mo(i[t]))return!0;return!1}if(hc(i))return!0;if(i.toJSON&&typeof i.toJSON=="function"&&arguments.length===1)return Mo(i.toJSON(),!0);for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t)&&Mo(i[t]))return!0;return!1}function fb(i){const e=[],t=i.data,n=i;return n.data=Il(t,e),n.attachments=e.length,{packet:n,buffers:e}}function Il(i,e){if(!i)return i;if(hc(i)){const t={_placeholder:!0,num:e.length};return e.push(i),t}else if(Array.isArray(i)){const t=new Array(i.length);for(let n=0;n<i.length;n++)t[n]=Il(i[n],e);return t}else if(typeof i=="object"&&!(i instanceof Date)){const t={};for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=Il(i[n],e));return t}return i}function pb(i,e){return i.data=Dl(i.data,e),delete i.attachments,i}function Dl(i,e){if(!i)return i;if(i&&i._placeholder===!0){if(typeof i.num=="number"&&i.num>=0&&i.num<e.length)return e[i.num];throw new Error("illegal attachments")}else if(Array.isArray(i))for(let t=0;t<i.length;t++)i[t]=Dl(i[t],e);else if(typeof i=="object")for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&(i[t]=Dl(i[t],e));return i}const mb=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],gb=5;var je;(function(i){i[i.CONNECT=0]="CONNECT",i[i.DISCONNECT=1]="DISCONNECT",i[i.EVENT=2]="EVENT",i[i.ACK=3]="ACK",i[i.CONNECT_ERROR=4]="CONNECT_ERROR",i[i.BINARY_EVENT=5]="BINARY_EVENT",i[i.BINARY_ACK=6]="BINARY_ACK"})(je||(je={}));class _b{constructor(e){this.replacer=e}encode(e){return(e.type===je.EVENT||e.type===je.ACK)&&Mo(e)?this.encodeAsBinary({type:e.type===je.EVENT?je.BINARY_EVENT:je.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===je.BINARY_EVENT||e.type===je.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=fb(e),n=this.encodeAsString(t.packet),s=t.buffers;return s.unshift(n),s}}function Gh(i){return Object.prototype.toString.call(i)==="[object Object]"}class dc extends Rt{constructor(e){super(),this.reviver=e}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const n=t.type===je.BINARY_EVENT;n||t.type===je.BINARY_ACK?(t.type=n?je.EVENT:je.ACK,this.reconstructor=new vb(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else if(hc(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const n={type:Number(e.charAt(0))};if(je[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===je.BINARY_EVENT||n.type===je.BINARY_ACK){const o=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const a=e.substring(o,t);if(a!=Number(a)||e.charAt(t)!=="-")throw new Error("Illegal attachments");n.attachments=Number(a)}if(e.charAt(t+1)==="/"){const o=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););n.nsp=e.substring(o,t)}else n.nsp="/";const s=e.charAt(t+1);if(s!==""&&Number(s)==s){const o=t+1;for(;++t;){const a=e.charAt(t);if(a==null||Number(a)!=a){--t;break}if(t===e.length)break}n.id=Number(e.substring(o,t+1))}if(e.charAt(++t)){const o=this.tryParse(e.substr(t));if(dc.isPayloadValid(n.type,o))n.data=o;else throw new Error("invalid payload")}return n}tryParse(e){try{return JSON.parse(e,this.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case je.CONNECT:return Gh(t);case je.DISCONNECT:return t===void 0;case je.CONNECT_ERROR:return typeof t=="string"||Gh(t);case je.EVENT:case je.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&mb.indexOf(t[0])===-1);case je.ACK:case je.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class vb{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=pb(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const yb=Object.freeze(Object.defineProperty({__proto__:null,Decoder:dc,Encoder:_b,get PacketType(){return je},protocol:gb},Symbol.toStringTag,{value:"Module"}));function bn(i,e,t){return i.on(e,t),function(){i.off(e,t)}}const xb=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class bf extends Rt{constructor(e,t,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[bn(e,"open",this.onopen.bind(this)),bn(e,"packet",this.onpacket.bind(this)),bn(e,"error",this.onerror.bind(this)),bn(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){if(xb.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const n={type:je.EVENT,data:t};if(n.options={},n.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const a=this.ids++,l=t.pop();this._registerAckCallback(a,l),n.id=a}const s=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!s||!this.connected)||(this.connected?(this.notifyOutgoingListeners(n),this.packet(n)):this.sendBuffer.push(n)),this.flags={},this}_registerAckCallback(e,t){var n;const s=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(s===void 0){this.acks[e]=t;return}const o=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===e&&this.sendBuffer.splice(a,1);t.call(this,new Error("operation has timed out"))},s);this.acks[e]=(...a)=>{this.io.clearTimeoutFn(o),t.apply(this,[null,...a])}}emitWithAck(e,...t){const n=this.flags.timeout!==void 0||this._opts.ackTimeout!==void 0;return new Promise((s,o)=>{t.push((a,l)=>n?a?o(a):s(l):s(a)),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((s,...o)=>n!==this._queue[0]?void 0:(s!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(s)):(this._queue.shift(),t&&t(null,...o)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:je.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t)}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case je.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case je.EVENT:case je.BINARY_EVENT:this.onevent(e);break;case je.ACK:case je.BINARY_ACK:this.onack(e);break;case je.DISCONNECT:this.ondisconnect();break;case je.CONNECT_ERROR:this.destroy();const n=new Error(e.data.message);n.data=e.data.data,this.emitReserved("connect_error",n);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const n of t)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let n=!1;return function(...s){n||(n=!0,t.packet({type:je.ACK,id:e,data:s}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(t.apply(this,e.data),delete this.acks[e.id])}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:je.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const n of t)n.apply(this,e.data)}}}function Us(i){i=i||{},this.ms=i.min||100,this.max=i.max||1e4,this.factor=i.factor||2,this.jitter=i.jitter>0&&i.jitter<=1?i.jitter:0,this.attempts=0}Us.prototype.duration=function(){var i=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*i);i=Math.floor(e*10)&1?i+t:i-t}return Math.min(i,this.max)|0};Us.prototype.reset=function(){this.attempts=0};Us.prototype.setMin=function(i){this.ms=i};Us.prototype.setMax=function(i){this.max=i};Us.prototype.setJitter=function(i){this.jitter=i};class Ul extends Rt{constructor(e,t){var n;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,na(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((n=t.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new Us({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const s=t.parser||yb;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new wf(this.uri,this.opts);const t=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const s=bn(t,"open",function(){n.onopen(),e&&e()}),o=l=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",l),e?e(l):this.maybeReconnectOnOpen()},a=bn(t,"error",o);if(this._timeout!==!1){const l=this._timeout,c=this.setTimeoutFn(()=>{s(),o(new Error("timeout")),t.close()},l);this.opts.autoUnref&&c.unref(),this.subs.push(()=>{this.clearTimeoutFn(c)})}return this.subs.push(s),this.subs.push(a),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(bn(e,"ping",this.onping.bind(this)),bn(e,"data",this.ondata.bind(this)),bn(e,"error",this.onerror.bind(this)),bn(e,"close",this.onclose.bind(this)),bn(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){uc(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new bf(this,e,t),this.nsps[e]=n),n}_destroy(e){const t=Object.keys(this.nsps);for(const n of t)if(this.nsps[n].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let n=0;n<t.length;n++)this.engine.write(t[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e,t){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(s=>{s?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",s)):e.onreconnect()}))},t);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const $s={};function bo(i,e){typeof i=="object"&&(e=i,i=void 0),e=e||{};const t=lb(i,e.path||"/socket.io"),n=t.source,s=t.id,o=t.path,a=$s[s]&&o in $s[s].nsps,l=e.forceNew||e["force new connection"]||e.multiplex===!1||a;let c;return l?c=new Ul(n,e):($s[s]||($s[s]=new Ul(n,e)),c=$s[s]),t.query&&!e.query&&(e.query=t.queryKey),c.socket(t.path,e)}Object.assign(bo,{Manager:Ul,Socket:bf,io:bo,connect:bo});let Fl=!1,Ol=!1,Tf=[],Sb=[],fc=!0,ut,ui,Eb=!0,wb={volume:"20",sensitivity:"0.002",showHitboxes:"true",keybinds:{forward:"w",backward:"s",left:"a",right:"d",jump:"Space",shoot:"mb0",dodge:"mb2",parry:"e",menu:"Tab"}},Qe={keybinds:{}},te=new uE("steve"),Bo=(i=!1)=>{i?(Mn.requestPointerLock=Mn.requestPointerLock||Mn.mozRequestPointerLock||Mn.webkitRequestPointerLock,Mn.requestPointerLock()):lr?document.exitPointerLock():(Mn.requestPointerLock=Mn.requestPointerLock||Mn.mozRequestPointerLock||Mn.webkitRequestPointerLock,Mn.requestPointerLock())};const vt=new dy;let It=new pn(75,window.innerWidth/window.innerHeight,.1,1e3);It.position.set(2,5,0);const Pr=new wd({powerPreference:"high-performance",antialias:!0});Pr.setSize(window.innerWidth,window.innerHeight);Pr.getContext().linewidth=6;document.body.appendChild(Pr.domElement);Pr.domElement.id="canvas";let Mn=document.getElementById("canvas"),pt=new WS;pt.quatNormalizeSkip=0;pt.quatNormalizeFast=!1;pt.defaultContactMaterial.contactEquationStiffness=1e9;pt.defaultContactMaterial.contactEquationRelaxation=4;pt.gravity.set(0,-20,0);pt.broadphase=new Rd;let pc=new Od;pc.iterations=7;pc.tolerance=.1;pt.solver=new Mx(pc);pt.solver.iterations=7;let il=[0,3,0],Mb=i=>{let e=new Kt(new S(1.25,3,1.25)),t=new ie({shape:e,mass:50,fixedRotation:!0,linearDamping:.99}),n=new Fn("playerMaterial");n.friction=.05,n.restitution=.1,t.material=n,t.position.set(il[0],il[1],il[2]),t.collisionFilterGroup=1,t.collisionFilterMask=1,t.userData={cc:"player",id:`${i.id}`},t.addEventListener("collide",bb),i.set_body(t),pt.addBody(t)},bb=i=>{if(i.body.userData.cc=="enemyProjectile")if(te.time_since_last_parry+te.perfect_parry_window>Date.now())Xh(i.body,!0),te.power+=1,Ir();else if(te.time_since_last_parry+te.parry_window>Date.now())Xh(i.body,!1);else{let e=document.getElementById("damage");e.classList.add("damage"),e.hidden=!1,setTimeout(()=>{e.classList.remove("damage"),e.hidden=!0},250)}else i.body.userData.cc=="floor"?Fl=!1:i.body.userData.cc=="deathbox"&&(te.hp=0,sa())},Tb=()=>{let i=ec("steve",Qe.showHitboxes,!0);i.userData.cc="player",Mb(te),te.mesh=i,vt.add(te.mesh)};document.getElementById("greyout").onclick=i=>{Bo(!0)};Mn.onclick=i=>{Bo(!0)};const Af={};document.addEventListener("keydown",i=>{Af[i.key]=!0});document.addEventListener("keyup",i=>{Af[i.key]=!1});let gt={},Ab=i=>{switch(i.key){case Qe.keybinds.forward:gt.W=!0;break;case Qe.keybinds.left:gt.A=!0;break;case Qe.keybinds.backward:gt.S=!0;break;case Qe.keybinds.right:gt.D=!0;break;case Qe.keybinds.reload:break;case Qe.keybinds.jump:Vb();break;case"q":vT();break;case"f":interact();break;case"k":console.log(pt.bodies);break;case"p":Ib();break;case"o":override=!override;break;case"j":Ol=!Ol;break;case Qe.keybinds.parry:jb();break;case Qe.keybinds.menu:Pf(i);break;case"x":xT();break;case"u":te.hp-=1,sa();break}},Rb=i=>{switch(i.key){case Qe.keybinds.forward:gt.W=!1;break;case Qe.keybinds.left:gt.A=!1;break;case Qe.keybinds.backward:gt.S=!1;break;case Qe.keybinds.right:gt.D=!1;break}};window.addEventListener("keydown",Ab);window.addEventListener("keyup",Rb);let Cb=()=>{if(fc){let i=new U,e=new U;e.set(0,0,0),gt.W&&(e.z-=1),gt.A&&(e.x-=1),gt.S&&(e.z+=1),gt.D&&(e.x+=1),e.normalize();const t=new Ai(0,It.rotation.y,0,"XYZ");i.copy(e).applyEuler(t).multiplyScalar(te.speed);let n=new S().copy(i);te.move_player(n)}};const Ks=new Ai(0,0,0,"YXZ");document.addEventListener("mousemove",i=>{Ks.x-=i.movementY*Qe.sensitivity,Ks.y-=i.movementX*Qe.sensitivity,Ks.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,Ks.x)),It.rotation.copy(Ks),te.mesh.rotation.y=It.rotation.y,te.mesh.children[1].rotation.x=It.rotation.x,i.movementX,i.movementY});let Pb=()=>{te.mesh.position.copy(te.body.position),It.position.copy(te.body.position),It.position.y+=Ol==!0?10:2.5,new ie().velocity.addScaledVector,te.body.velocity.y<0&&(te.body.velocity.y-=1),gt.W?(te.mesh.children[2].rotation.x=Ei(-(Math.abs(te.body.velocity.x)+Math.abs(te.body.velocity.z))*2),te.mesh.children[3].rotation.x=Ei(-(Math.abs(te.body.velocity.x)+Math.abs(te.body.velocity.z))*2)):gt.S?(te.mesh.children[2].rotation.x=Ei((Math.abs(te.body.velocity.x)+Math.abs(te.body.velocity.z))*2),te.mesh.children[3].rotation.x=Ei((Math.abs(te.body.velocity.x)+Math.abs(te.body.velocity.z))*2)):(te.mesh.children[2].rotation.x>0&&(te.mesh.children[2].rotation.x-=.005),te.mesh.children[3].rotation.x>0&&(te.mesh.children[3].rotation.x-=.005),te.mesh.children[2].rotation.x<0&&(te.mesh.children[2].rotation.x+=.005),te.mesh.children[3].rotation.x<0&&(te.mesh.children[3].rotation.x+=.005))},Lb=(i,e)=>{i&&(pt.remove(i),Tf.splice(e,1))},Nb=(i,e)=>{i&&(vt.remove(i),shapesToRemove.splice(e,1))},Ib=()=>{console.log(`
player's current location:`),console.log(`x: ${te.body.position.x}`),console.log(`y: ${te.body.position.y}`),console.log(`z: ${te.body.position.z}`),console.log(`-- -- -- -- -- -- --
`)};Pe.prototype.raycast=dE;window.addEventListener("mousedown",i=>{Db(i.button)});let Db=i=>{if(i==Qe.keybinds.dodge[2]&&te.time_since_last_dodge+te.dodge_cooldown<Date.now())if(gt.W||gt.A||gt.S||gt.D){let e=new U,t=new U;t.set(0,0,0),gt.W&&(t.z-=1),gt.A&&(t.x-=1),gt.S&&(t.z+=1),gt.D&&(t.x+=1),t.normalize();const n=new Ai(0,It.rotation.y,0,"XYZ");e.copy(t).applyEuler(n).multiplyScalar(te.acc),te.dodge(e,Wh(te.body.position,e.normalize(),te.dodge_distance))}else{let e=new U,t=new U;t.set(0,0,-1),t.normalize();const n=new Ai(0,It.rotation.y,0,"XYZ");e.copy(t).applyEuler(n).multiplyScalar(te.acc),te.dodge(e,Wh(te.body.position,e.normalize(),te.dodge_distance))}else if(i==Qe.keybinds.shoot[2]&&te.time_since_last_shoot+te.shoot_cooldown<Date.now()&&!lr){let e=te.createProjectile(It);Nt.push(e),vt.add(e.mesh),pt.addBody(e.body),te.time_since_last_shoot=Date.now()}},Wh=(i,e,t)=>{var n=new sn().setFromPoints([new U(i.x,i.y,i.z),new U(i.x+e.x*t,i.y,i.z+e.z*t)]),s=new Wl({color:16711680}),o=new Md(n,s);return vt.add(o),setTimeout(()=>{vt.remove(o)},50),te.dodge_distance};const Ub=new br,ia=Ub.load("https://sl-gaming.s3.amazonaws.com/pvpassets/floor.png");ia.wrapS=dr;ia.wrapT=dr;const Fb=500,Ob=500;ia.repeat.set(Fb,Ob);let Bb=new xx,ji=new ie({shape:Bb,mass:0,collisionFilterGroup:1,collisionFilterMask:-1}),mc=new Fn("floorBodyMaterial");mc.friction=.05;mc.restitution=0;ji.material=mc;ji.quaternion.setFromAxisAngle(new S(1,0,0),-Math.PI/2);ji.position.set(0,0,0);pt.addBody(ji);const zb=new ft(1e3,1e3,0,100,100),kb=new tt({map:ia,wireframe:!1}),Lr=new Pe(zb,kb);Lr.quaternion.copy(ji.quaternion);Lr.position.copy(ji.position);Lr.userData.cc="floor";ji.userData={mesh:Lr,cc:"floor"};vt.add(Lr);let Rf=new Pe(new ft(50,.1,50),new tt({color:10182143}));Rf.position.set(0,0,0);vt.add(Rf);let[ar,sl]=pw();ar.position.set(80,20,0);vt.add(ar);for(let i=0;i<ar.children.length;i++){let e=new U;ar.children[i].getWorldPosition(e),sl[i].position.set(e.x,e.y,e.z),sl[i].quaternion.copy(ar.children[i].quaternion),pt.addBody(sl[i])}let Vb=()=>{Fl||(Fl=!0,te.body.velocity.y=10*te.jump_multiplier)},Cf=[2201331,38536,9159498,16771899,16733986,15406156],Hb=[2201331,16771899,16733986,15406156,9323693,0],Nt=[];class Gb{constructor(e,t){this.mesh=e,this.body=t,this.fr=2e3,this.damage=10,this.speed=100,setInterval(()=>{},this.fr)}shootProjectile(){let e=new Ri(.5),t=new tt({color:2201331}),n=new Pe(e,t);n.userData.parryLevel=0;let s=new vl(1),o=new ie({shape:s,mass:1,linearDamping:.05});o.position.set(this.body.position.x,this.body.position.y+4,this.body.position.z),pt.addBody(o),n.position.copy(o.position),vt.add(n),ut!=null?Nt.push({mesh:n,body:o,deleteAfter:3e3,owner:"bot"}):Nt.push({mesh:n,body:o,deleteAfter:3e3,owner:null});let a=new S;new S(It.position.x,It.position.y,It.position.z).vsub(o.position,a),a.normalize();let c=new S;a.scale(this.speed,c),o.userData={mesh:n,cc:"enemyProjectile",createdAt:Date.now()},o.velocity.copy(c),o.addEventListener("collide",u=>{u.body.userData.cc=="onlineEnemyPlayer"&&console.log("ENEMY PLAYER HIT"),u.body.userData.createdAt-=1e3,u.target.userData.createdAt-=1e3})}}let Wb=new ft(2,4,2),qb=new tt({color:16776960}),gc=new Pe(Wb,qb),Xb=new Kt(new S(1,2,1)),Nr=new ie({shape:Xb,mass:0});Nr.userData={cc:"enemy"};Nr.position.set(20,2,20);gc.position.copy(Nr.position);vt.add(gc);pt.addBody(Nr);new Gb(gc,Nr);let jb=()=>{te.time_since_last_parry+te.parry_cooldown<Date.now()&&(te.time_since_last_parry=Date.now())},Yb=i=>{let e=document.getElementById("winner-banner");e.hidden=!1,e.innerText=`PLAYER ${i} WINS`,setTimeout(()=>{e.hidden=!0,e.innerText=""},2900)},zn=document.getElementById("headsup"),qh=(i=!1)=>{if(i){let e=document.createElement("div");e.innerText="perfect!",zn.appendChild(e),e.classList.add("grow","perfect"),setTimeout(()=>{zn.removeChild(e)},450)}else{let e=document.createElement("div");e.innerText="parry!",zn.appendChild(e),e.classList.add("grow","parry"),setTimeout(()=>{zn.removeChild(e)},450)}},$b=()=>{let i=document.createElement("div");i.innerText="hit!",zn.appendChild(i),i.classList.add("grow","hit"),setTimeout(()=>{zn.removeChild(i)},450)},Kb=()=>{let i=document.createElement("div");i.innerText="super!",i.classList.add("grow","supertext"),zn.appendChild(i),setTimeout(()=>{zn.removeChild(i)},450)},Zb=()=>{let i=document.createElement("div");i.innerText="false hit!",zn.appendChild(i),i.classList.add("grow","enemyparry"),setTimeout(()=>{zn.removeChild(i)},450)},Jb=i=>100+i*20,Xh=(i,e=!1)=>{if(e){te.time_since_last_parry=0,i.userData.createdAt=Date.now();let t=Jb(i.userData.mesh.userData.parryLevel),n=new U;It.getWorldDirection(n);let s=new U;te.mesh.children[1].children[0].getWorldPosition(s),i.position.set(s.x,s.y,s.z),i.velocity.set(n.x*t,n.y,n.z*t),i.userData.mesh.userData.parryLevel+=1,i.userData.mesh.material.color.setHex(Cf[i.userData.mesh.userData.parryLevel]),qh(!0)}else{i.userData.createdAt=Date.now();let t=new U;It.getWorldDirection(t);let n=new U;te.mesh.children[1].children[0].getWorldPosition(n),i.position.set(n.x,n.y,n.z),i.velocity.set(t.x*75,t.y,t.z*75),qh(!1)}},Qb=i=>{document.getElementById("greyout").hidden=!0,fc=!0,te.power=0,te.hp=10,sa(),Ir(),te.body.position.set(i[ut][0],i[ut][1],i[ut][2])},eT=()=>{vr&&(console.log(`player ${ut} loses`),et.emit("checkforwinner",ui))},tT=()=>{fc=!1,document.getElementById("greyout").hidden=!1},sa=(i="n/a")=>{document.getElementById("hearts").innerText="❤️".repeat(te.hp),te.hp<=0&&(vr&&et.emit("playerstatus",ui,ut,"dead"),eT(),tT())},nT=document.getElementById("dodge-cooldown-wrapper");const Fs=document.createElement("circle-progress");Fs.classList.add("dodge-circle");Fs.max=100;Fs.value=0;Fs.textFormat=i=>i==100?"[RM]":(te.dodge_cooldown/1e3-i/100*te.dodge_cooldown/1e3).toFixed(1)+"s";nT.appendChild(Fs);let iT=document.getElementById("parry-cooldown-wrapper");const Os=document.createElement("circle-progress");Os.classList.add("parry-circle");Os.max=100;Os.value=0;Os.textFormat=i=>i==100?"[E]":(te.parry_cooldown/1e3-i/100*te.parry_cooldown/1e3).toFixed(1)+"s";iT.appendChild(Os);let sT=document.getElementById("reload-cooldown-wrapper");const Bs=document.createElement("circle-progress");Bs.classList.add("reload-circle");Bs.max=100;Bs.value=0;Bs.textFormat=i=>i==100?"[LM]":(te.shoot_cooldown/1e3-i/100*te.shoot_cooldown/1e3).toFixed(1)+"s";sT.appendChild(Bs);setInterval(()=>{let i=(Date.now()-te.time_since_last_dodge)/te.dodge_cooldown*100;Fs.value=i;let e=(Date.now()-te.time_since_last_parry)/te.parry_cooldown*100;Os.value=e;let t=(Date.now()-te.time_since_last_shoot)/te.shoot_cooldown*100;Bs.value=t},50);let rT=()=>{if(Nt.length>0)for(let i=0;i<Nt.length;i++)Nt[i].mesh.position.copy(Nt[i].body.position),Nt[i].ps!=null&&Nt[i].ps.Step(.01),Nt[i].body.userData.createdAt+Nt[i].deleteAfter<Date.now()&&(et&&et.emit("deleteprojectile",{pid:`p${ut}-${Nt[i].mesh.uuid}`},ui),vt.remove(Nt[i].mesh),pt.removeBody(Nt[i].body),Nt.splice(i,1),i--)},oT=(i,e)=>{et.emit("playerhit",ui,ut,i,e)},Bt={},aT=(i,e)=>{let t=ec(i,Qe.showHitboxes);t.userData.playerID=i;let n=new Kt(new S(1.25,3,1.25)),s=new ie({shape:n,mass:50});s.userData={cc:"onlineEnemyPlayer",playerID:i},s.addEventListener("collide",o=>{o.body.userData.cc=="playerProjectile"&&(oT(o.target.userData.playerID,`p${ut}-${o.body.userData.mesh.uuid}`),o.body.userData.createdAt-=3e3,$b())}),t.position.set(e.position.x,e.position.y,e.position.z),s.position.copy(t.position),vt.add(t),pt.addBody(s),Bt[i]={playerID:i,mesh:t,body:s}},lT=i=>{let e=Object.keys(i);for(let t=0;t<e.length;t++)Bt[e[t]]!=null?e[t]==ut||(console.log(i[e[t]]),Bt[e[t]].mesh.position.set(i[e[t]].data.position.x,i[e[t]].data.position.y,i[e[t]].data.position.z),Bt[e[t]].mesh.quaternion.set(i[e[t]].data.quaternion[0],i[e[t]].data.quaternion[1],i[e[t]].data.quaternion[2],i[e[t]].data.quaternion[3]),Bt[e[t]].mesh.children[1].quaternion.set(i[e[t]].data.head_quaternion[0],i[e[t]].data.head_quaternion[1],i[e[t]].data.head_quaternion[2],i[e[t]].data.head_quaternion[3]),Bt[e[t]].body.position.set(i[e[t]].data.position.x,i[e[t]].data.position.y,i[e[t]].data.position.z),Bt[e[t]].mesh.children[2].quaternion.set(i[e[t]].data.left_arm_quaternion[0],i[e[t]].data.left_arm_quaternion[1],i[e[t]].data.left_arm_quaternion[2],i[e[t]].data.left_arm_quaternion[3]),Bt[e[t]].mesh.children[3].quaternion.set(i[e[t]].data.right_arm_quaternion[0],i[e[t]].data.right_arm_quaternion[1],i[e[t]].data.right_arm_quaternion[2],i[e[t]].data.right_arm_quaternion[3]),Bt[e[t]].mesh.children[4].quaternion.set(i[e[t]].data.left_leg_quaternion[0],i[e[t]].data.left_leg_quaternion[1],i[e[t]].data.left_leg_quaternion[2],i[e[t]].data.left_leg_quaternion[3]),Bt[e[t]].mesh.children[5].quaternion.set(i[e[t]].data.right_leg_quaternion[0],i[e[t]].data.right_leg_quaternion[1],i[e[t]].data.right_leg_quaternion[2],i[e[t]].data.right_leg_quaternion[3])):e[t]==ut||aT(e[t],i[e[t]].data)},cT=()=>{Object.keys(Bt).forEach(i=>{vt.remove(Bt[i].mesh),pt.removeBody(Bt[i].body)}),Bt={}},dn={},uT=(i,e,t,n)=>{let s=new Ri(.5),o=new tt({color:Cf[t]}),a=new Pe(s,o);return a.position.set(i.x,i.y,i.z),a.userData.pid=e,a.userData.parryLevel=t,a.userData.owner=n,vt.add(a),a},hT=(i,e,t,n)=>{let s=new Ri(2),o=new tt({color:Hb[t]}),a=new Pe(s,o);return a.position.set(i.x,i.y,i.z),a.userData.pid=e,a.userData.parryLevel=t,a.userData.owner=n,vt.add(a),a},dT=i=>{let e=Object.keys(i);for(let t=0;t<e.length;t++)i[e[t]].owner!=ut&&(dn[i[e[t]].pid]!=null?dn[i[e[t]].pid].mesh.position.set(i[e[t]].position.x,i[e[t]].position.y,i[e[t]].position.z):(console.log("NEW PROJECTILE: ",i[e[t]]),i[e[t]].isSuper?dn[i[e[t]].pid]={mesh:hT(i[e[t]].position,i[e[t]].pid,i[e[t]].parryLevel,i[e[t]].owner)}:dn[i[e[t]].pid]={mesh:uT(i[e[t]].position,i[e[t]].pid,i[e[t]].parryLevel,i[e[t]].owner)}));Object.keys(dn).forEach(t=>{i[t]==null&&(vt.remove(dn[t].mesh),delete dn[t])})};document.getElementById("tab-close-button").addEventListener("click",i=>{Pf(i)});let lr=!1,rl=document.getElementById("tab-menu"),Pf=i=>{i.preventDefault(),lr?(rl.close(),lr=!1,cr&&(document.getElementById("settings-menu").close(),cr=!1),As&&(document.getElementById("login-dialog").close(),As=!1),Rs&&(document.getElementById("online-dialog").close(),Rs=!1),ur&&(document.getElementById("keybinds-menu").close(),ur=!1),ra(),Bo()):(rl.showModal(),lr=!0,Bo(),rl.focus())};document.getElementById("settings-button").addEventListener("click",i=>{Lf()});document.getElementById("settings-close-button").addEventListener("click",i=>{Lf(),ra()});let cr=!1,ol=document.getElementById("settings-menu"),Lf=()=>{cr?(ol.close(),cr=!1):(ol.showModal(),cr=!0,ol.focus())};document.getElementById("keybinds-button").addEventListener("click",i=>{Nf()});document.getElementById("keybinds-close-button").addEventListener("click",i=>{Nf(),ra()});let ur=!1,al=document.getElementById("keybinds-menu"),Nf=()=>{ur?(al.close(),ur=!1):(al.showModal(),ur=!0,al.focus())},qt=i=>{i.key!=null?(i.preventDefault(),i.target.value=i.key,console.log(i.key)):i.target.value=`mb${i.button}`};document.getElementById("key-forward-value").addEventListener("keydown",qt);document.getElementById("key-backward-value").addEventListener("keydown",qt);document.getElementById("key-left-value").addEventListener("keydown",qt);document.getElementById("key-right-value").addEventListener("keydown",qt);document.getElementById("key-jump-value").addEventListener("keydown",qt);document.getElementById("key-shoot-value").addEventListener("keydown",qt);document.getElementById("key-dodge-value").addEventListener("keydown",qt);document.getElementById("key-parry-value").addEventListener("keydown",qt);document.getElementById("key-forward-value").addEventListener("mousedown",qt);document.getElementById("key-backward-value").addEventListener("mousedown",qt);document.getElementById("key-left-value").addEventListener("mousedown",qt);document.getElementById("key-right-value").addEventListener("mousedown",qt);document.getElementById("key-jump-value").addEventListener("mousedown",qt);document.getElementById("key-shoot-value").addEventListener("mousedown",qt);document.getElementById("key-dodge-value").addEventListener("mousedown",qt);document.getElementById("key-parry-value").addEventListener("mousedown",qt);let ra=()=>{Qe.volume=document.getElementById("volume-value").value=="Space"?" ":document.getElementById("volume-value").value,Qe.sensitivity=document.getElementById("sensitivity-value").value=="Space"?" ":document.getElementById("sensitivity-value").value,Qe.showHitboxes=document.getElementById("hitbox-value").checked,Qe.keybinds.forward=document.getElementById("key-forward-value").value=="Space"?" ":document.getElementById("key-forward-value").value,Qe.keybinds.backward=document.getElementById("key-backward-value").value=="Space"?" ":document.getElementById("key-backward-value").value,Qe.keybinds.left=document.getElementById("key-left-value").value=="Space"?" ":document.getElementById("key-left-value").value,Qe.keybinds.right=document.getElementById("key-right-value").value=="Space"?" ":document.getElementById("key-right-value").value,Qe.keybinds.jump=document.getElementById("key-jump-value").value=="Space"?" ":document.getElementById("key-jump-value").value,Qe.keybinds.shoot=document.getElementById("key-shoot-value").value=="Space"?" ":document.getElementById("key-shoot-value").value,Qe.keybinds.dodge=document.getElementById("key-dodge-value").value=="Space"?" ":document.getElementById("key-dodge-value").value,Qe.keybinds.parry=document.getElementById("key-parry-value").value=="Space"?" ":document.getElementById("key-parry-value").value,Qe.keybinds.menu=document.getElementById("key-menu-value").value=="Space"?" ":document.getElementById("key-menu-value").value,window.localStorage.setItem("playersettings",JSON.stringify(Qe))},If=()=>{let i=window.localStorage.getItem("playersettings");if(i!=null){let e=JSON.parse(i);document.getElementById("volume-value").value=e.volume,document.getElementById("sensitivity-value").value=e.sensitivity,document.getElementById("hitbox-value").checked=e.showHitboxes,document.getElementById("key-forward-value").value=e.keybinds.forward==" "?"Space":e.keybinds.forward,document.getElementById("key-backward-value").value=e.keybinds.backward==" "?"Space":e.keybinds.backward,document.getElementById("key-left-value").value=e.keybinds.left==" "?"Space":e.keybinds.left,document.getElementById("key-right-value").value=e.keybinds.right==" "?"Space":e.keybinds.right,document.getElementById("key-jump-value").value=e.keybinds.jump==" "?"Space":e.keybinds.jump,document.getElementById("key-shoot-value").value=e.keybinds.shoot==" "?"Space":e.keybinds.shoot,document.getElementById("key-dodge-value").value=e.keybinds.dodge==" "?"Space":e.keybinds.dodge,document.getElementById("key-parry-value").value=e.keybinds.parry==" "?"Space":e.keybinds.parry,document.getElementById("key-menu-value").value=e.keybinds.menu==" "?"Space":e.keybinds.menu}else window.localStorage.setItem("playersettings",JSON.stringify(wb))};If();let Df=document.getElementById("login-dialog"),Uf=document.getElementById("online-dialog");document.getElementById("connect");let jh=document.getElementById("disconnect"),ll=document.getElementById("makeroom"),Xi=document.getElementById("roomid-label"),To=document.getElementById("roomid"),hr=document.getElementById("joinroom"),Ao=document.getElementById("leaveroom"),Yh=document.getElementById("room-errors");To.addEventListener("keydown",i=>{i.key=="Enter"&&hr.click()});Xi.addEventListener("click",()=>{navigator.clipboard.writeText(ui)});let et,vr=!1,As=!1,Rs=!1;document.getElementById("login-close-button").addEventListener("click",i=>{As&&(As=!1,Df.close())});document.getElementById("online-close-button").addEventListener("click",i=>{Rs&&(Rs=!1,Uf.close())});document.getElementById("login").addEventListener("click",i=>{hf.post("http://localhost:4000/login?username=steve&password=12345").then(e=>{console.log(e),r.textContent=e.data}).catch(e=>{console.log(e)})});document.getElementById("signup").addEventListener("click",i=>{hf.post("http://localhost:4000/signup?username=steve&password=12345").then(e=>{console.log(e),r.textContent=e.data}).catch(e=>{console.log(e)})});document.getElementById("connect").addEventListener("click",i=>{et=bo("http://34.239.48.37/"),et.on("roomid",(e,t)=>{console.log(et),ut=t,Yh.textContent="",vr=!0,Xi.textContent=e,ui=e,Ao.classList.remove("unclickable"),hr.classList.add("unclickable")}),et.on("roomjoinfail",e=>{Yh.textContent=`failed to join room: ${e}`}),et.on("leaveroom",()=>{Xi.textContent="00000",vr=!1,ut=void 0}),et.on("allpositions",e=>{lT(e)}),et.on("roomprojectiles",e=>{dT(e)}),et.on("takehit",(e,t)=>{e==ut&&mT(t)}),et.on("reset",e=>{Qb(e)}),et.on("winner",e=>{Yb(e)}),et.on("removeplayer",e=>{console.log("REMOVING PLAYER",e),vt.remove(Bt[e].mesh),pt.removeBody(Bt[e].body),delete Bt[e]}),et.on("parry",e=>{console.log("THE ENEMY HAS PARRIED",e),e==ut&&Zb()})});window.onclose=()=>{et.emit("playerdisconnect",Xi.innerText,ut)};document.getElementById("disconnect").addEventListener("click",i=>{et.emit("playerdisconnect",Xi.innerText,ut),et.close()});document.getElementById("makeroom").addEventListener("click",i=>{et.emit("makeroom",{maxPlayers:4,map:"arena2"})});document.getElementById("joinroom").addEventListener("click",i=>{let e=document.getElementById("roomid").value;console.log(e),et.emit("joinroom",e)});document.getElementById("leaveroom").addEventListener("click",i=>{Object.keys(Bt).length>0&&cT(),et&&et.emit("leaveroom",ui,ut)});let fs=document.getElementById("ld-connected"),$h=document.getElementById("ld-playernumber"),fT=document.getElementById("ld-fps"),pT=document.getElementById("ld-ping");setInterval(()=>{if(et)if(et.connected){const i=Date.now();et.volatile.emit("ping",()=>{const e=Date.now()-i;pT.innerText=`ping: ${e}ms`}),fs.innerText="connected: true",fs.classList.remove("ld-false"),fs.classList.add("ld-true"),$h.innerText=`player number: ${ut}`,document.getElementById("connect").classList.add("connection-valid"),jh.classList.remove("unclickable"),vr?([ll,hr].forEach(e=>{e.classList.add("unclickable")}),To.classList.add("no-input"),Ao.classList.remove("unclickable")):([ll,hr].forEach(e=>{e.classList.remove("unclickable")}),To.classList.remove("no-input"),Ao.classList.add("unclickable"))}else fs.innerText="connected: false",fs.classList.remove("ld-true"),fs.classList.add("ld-false"),$h.innerText="player number: n/a",document.getElementById("connect").classList.remove("connection-valid"),[jh,ll,hr,Ao].forEach(i=>{i.classList.add("unclickable")}),To.classList.add("no-input")},500);document.getElementById("login-button").addEventListener("click",i=>{As||(As=!0,Df.showModal())});document.getElementById("online-button").addEventListener("click",i=>{Rs||(Rs=!0,Uf.showModal())});let mT=i=>{if(et.emit("deleteprojectile",i,Xi.innerText),te.time_since_last_parry+te.perfect_parry_window>Date.now()){et.emit("parry",ui,dn[i].mesh.userData.owner);let e=te.createProjectile(It,dn[i].mesh.userData.parryLevel+1);vt.add(e.mesh),pt.addBody(e.body),Nt.push(e),te.power+=1,Ir()}else if(te.time_since_last_parry+te.parry_window>Date.now()){let e=te.createProjectile(It,dn[i].mesh.userData.parryLevel);vt.add(e.mesh),pt.addBody(e.body),Nt.push(e)}else{te.hp-=Number(dn[i].mesh.userData.parryLevel)+1,sa(dn[i].mesh.userData.owner);let e=document.getElementById("damage");e.classList.add("damage"),e.hidden=!1,setTimeout(()=>{e.classList.remove("damage"),e.hidden=!0},250)}},gT=()=>{ut!=null&&et.emit("playerposition",Xi.innerText,ut,Ff(te))},_T=()=>{if(ut!=null){let i=[];Nt.forEach(e=>{i.push({position:e.body.position,pid:`p${ut}-${e.mesh.uuid}`,owner:ut,parryLevel:e.mesh.userData.parryLevel,isSuper:e.isSuper})}),et.emit("projectiles",i,ut,ui)}},Dn=document.getElementById("super-wrapper"),Zs=document.getElementById("cell1"),Js=document.getElementById("cell2"),Qs=document.getElementById("cell3"),er=document.getElementById("cell4"),Ir=()=>{te.power>=4?(Zs.classList.remove("hidden"),Js.classList.remove("hidden"),Qs.classList.remove("hidden"),er.classList.remove("hidden"),Dn.classList.remove("not-full"),Dn.classList.add("full")):te.power==3?(Zs.classList.remove("hidden"),Js.classList.remove("hidden"),Qs.classList.remove("hidden"),er.classList.add("hidden"),Dn.classList.remove("full"),Dn.classList.add("not-full")):te.power==2?(Zs.classList.remove("hidden"),Js.classList.remove("hidden"),Qs.classList.add("hidden"),er.classList.add("hidden"),Dn.classList.remove("full"),Dn.classList.add("not-full")):te.power==1?(Zs.classList.remove("hidden"),Js.classList.add("hidden"),Qs.classList.add("hidden"),er.classList.add("hidden"),Dn.classList.remove("full"),Dn.classList.add("not-full")):(Zs.classList.add("hidden"),Js.classList.add("hidden"),Qs.classList.add("hidden"),er.classList.add("hidden"),Dn.classList.remove("full"),Dn.classList.add("not-full"))};Ir();let vT=()=>{if(te.power>=4){Kb();let i=te.createSuper(It);Nt.push(i),vt.add(i.mesh),pt.addBody(i.body),te.power=0,Ir()}};setInterval(()=>{},500);let Bl=0;setInterval(()=>{fT.innerText="μFPS: "+Bl,Bl=0},1e3);let Ff=i=>(i.body.position,i.mesh.rotation,i.mesh.children[1].rotation,{position:i.body.position,quaternion:i.mesh.quaternion,head_quaternion:i.mesh.children[1].quaternion,left_arm_quaternion:i.mesh.children[2].quaternion,right_arm_quaternion:i.mesh.children[3].quaternion,left_leg_quaternion:i.mesh.children[4].quaternion,right_leg_quaternion:i.mesh.children[5].quaternion});setTimeout(()=>{Ff(te)},1e3);let yT=new br;yT.load("./assets/face_01.png",i=>{let e=new ft(2,2,2),t=new Array(5).fill(new tt({color:16777215}));t.unshift(new tt({map:i})),console.log(t);let n=new Pe(e,t);n.rotateY(-Math.PI/2),n.position.set(-10,2,-10)});let _n=ec();_n.position.set(10,4,-5);_n.rotateY(Math.PI/2);vt.add(_n);let Ei=i=>Math.PI/360*i;_n.children[2].rotation.x=Ei(-75);_n.children[2].rotation.z=Ei(75);_n.children[3].rotation.x=Ei(-75);_n.children[3].rotation.z=Ei(-75);let xT=()=>{console.log(_n);let i=Date.now(),e=setInterval(()=>{_n.children[_n.children.length-1].scale.add(new U(.75,1,.4)),Date.now()-i>200&&(clearInterval(e),_n.children[_n.children.length-1].scale.set(1,1,1))},20)};If();ra();Tb();const Of=()=>{let i=.016666666666666666;pt.step(i,i,10),Cb(),Pb(),rT(),gT(),_T(),Tf.forEach(Lb),Sb.forEach(Nb),Pr.render(vt,It),Bl++};setInterval(()=>{(!document.webkitHidden||Eb)&&requestAnimationFrame(Of)},1e3/60);Of();
