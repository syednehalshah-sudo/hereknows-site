var t0=Object.defineProperty;var e0=(s,t,e)=>t in s?t0(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var zi=(s,t,e)=>()=>{if(e)throw e[0];try{return s&&(t=s(s=0)),t}catch(n){throw e=[n],n}};var n0=(s,t)=>()=>{try{return t||s((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};var Nt=(s,t,e)=>e0(s,typeof t!="symbol"?t+"":t,e);function i0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function s0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function eo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function im(){let s=eo("canvas");return s.style.display="block",s}function of(...s){let t="THREE."+s.shift();no?no("log",t,...s):console.log(t,...s)}function sm(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Yt(...s){s=sm(s);let t="THREE."+s.shift();if(no)no("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function qt(...s){s=sm(s);let t="THREE."+s.shift();if(no)no("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function rr(...s){let t=s.join(" ");t in Kd||(Kd[t]=!0,Yt(...s))}function rm(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Oa(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[s&255]+Mn[s>>8&255]+Mn[s>>16&255]+Mn[s>>24&255]+"-"+Mn[t&255]+Mn[t>>8&255]+"-"+Mn[t>>16&15|64]+Mn[t>>24&255]+"-"+Mn[e&63|128]+Mn[e>>8&255]+"-"+Mn[e>>16&255]+Mn[e>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}function ce(s,t,e){return Math.max(t,Math.min(e,s))}function r0(s,t){return(s%t+t)%t}function cu(s,t,e){return(1-e)*s+e*t}function qo(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Yn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function o0(){let s={enabled:!0,workingColorSpace:ea,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ge&&(i.r=cs(i.r),i.g=cs(i.g),i.b=cs(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ge&&(i.r=Qr(i.r),i.g=Qr(i.g),i.b=Qr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===us?na:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return rr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return rr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ea]:{primaries:t,whitePoint:n,transfer:na,toXYZ:jd,fromXYZ:tp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:t,whitePoint:n,transfer:ge,toXYZ:jd,fromXYZ:tp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}}),s}function cs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Qr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}function fu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?nc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Yt("Texture: Unable to serialize Texture."),{})}function mu(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}function bu(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){nr.fromArray(s,r);let a=i.x*Math.abs(nr.x)+i.y*Math.abs(nr.y)+i.z*Math.abs(nr.z),l=t.dot(nr),c=e.dot(nr),h=n.dot(nr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function M0(s,t,e,n,i,r,o,a){let l;if(t.side===mn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Os,a),l===null)return null;Nl.copy(a),Nl.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Nl);return c<e.near||c>e.far?null:{distance:c,point:Nl.clone(),object:s}}function Ul(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Pl),s.getVertexPosition(l,Il),s.getVertexPosition(c,Ll);let h=M0(s,t,e,n,Pl,Il,Ll,up);if(h){let d=new G;Ps.getBarycoord(up,Pl,Il,Ll,d),i&&(h.uv=Ps.getInterpolatedAttribute(i,a,l,c,d,new ne)),r&&(h.uv1=Ps.getInterpolatedAttribute(r,a,l,c,d,new ne)),o&&(h.normal=Ps.getInterpolatedAttribute(o,a,l,c,d,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new G,materialIndex:0};Ps.getNormal(Pl,Il,Ll,u.normal),h.face=u,h.barycoord=d}return h}function mp(s,t,e,n,i,r,o){let a=Uu.distanceSqToPoint(s);if(a<e){let l=new G;Uu.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}function fr(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(gp(i))i.isRenderTargetTexture?(Yt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(gp(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function wn(s){let t={};for(let e=0;e<s.length;e++){let n=fr(s[e]);for(let i in n)t[i]=n[i]}return t}function gp(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function w0(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function af(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}function Zr(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Ru(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function cm(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function C0(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function R0(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=cm(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=C0(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}function _p(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}function xp(s){try{let t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}function hf(s,t,e,n){let i=B0(n);switch(e){case nf:return s*t;case Rc:return s*t/i.components*i.byteLength;case Pc:return s*t/i.components*i.byteLength;case Vs:return s*t*2/i.components*i.byteLength;case Ic:return s*t*2/i.components*i.byteLength;case sf:return s*t*3/i.components*i.byteLength;case _i:return s*t*4/i.components*i.byteLength;case Lc:return s*t*4/i.components*i.byteLength;case Pa:case Ia:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case La:case Da:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Nc:case Fc:return Math.max(s,16)*Math.max(t,8)/4;case Dc:case Uc:return Math.max(s,8)*Math.max(t,8)/2;case Oc:case Bc:case kc:case Vc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case zc:case Na:case Gc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Hc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Wc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Xc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Yc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case qc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Zc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Jc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case $c:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Kc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Qc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case jc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case th:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case eh:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case nh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ih:case sh:case rh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case oh:case ah:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ua:case lh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function B0(s){switch(s){case Zn:case Qu:return{byteLength:1,components:1};case po:case ju:case Di:return{byteLength:2,components:1};case Ac:case Cc:return{byteLength:2,components:4};case Li:case Ec:case gi:return{byteLength:4,components:1};case tf:case ef:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}var bp,ku,Tp,Ea,wp,ho,Os,mn,mi,Ji,uo,fo,Vu,Gu,Ep,hr,Ap,Cp,Rp,Pp,Ip,Lp,Dp,Np,Hu,Wu,Up,Fp,Op,Bp,zp,kp,Vp,Gp,Hp,Xl,Yl,ql,jr,Zl,Jl,$l,Kl,Mc,Wp,Xp,Ii,Xu,Yu,qu,Aa,Zu,Ju,$u,Ku,Bs,ur,bc,Tc,Ca,Ql,Vi,jl,cn,Yp,Ra,dn,wc,zs,Zn,Qu,ju,po,Ec,Li,gi,Di,Ac,Cc,mo,tf,ef,nf,sf,_i,Gi,ks,Rc,Pc,Vs,Ic,Lc,Pa,Ia,La,Da,Dc,Nc,Uc,Fc,Oc,Bc,zc,kc,Vc,Na,Gc,Hc,Wc,Xc,Yc,qc,Zc,Jc,$c,Kc,Qc,jc,th,eh,nh,ih,sh,rh,oh,ah,Ua,lh,ta,tc,Gl,Iu,Lu,Du,Nu,qp,Fa,Zp,us,Tn,ea,na,ge,Hl,Jp,$p,Kp,Qp,ch,jp,tm,hh,em,nm,rf,Ri,to,Kd,no,om,Hi,Mn,lu,ec,uf,ne,Wi,ff,G,hu,Qd,df,$t,uu,jd,tp,le,Or,nc,a0,io,l0,du,On,pf,Ue,ic,qn,ia,sc,Sc,be,Br,wi,c0,h0,ws,yl,ti,ep,np,Xi,sa,u0,ip,zr,ss,Sl,Zo,f0,d0,sp,rp,op,ap,p0,kr,pu,tn,Pi,m0,so,am,Es,Ml,Zt,bn,ra,or,Ei,rs,gu,os,Vr,Gr,lp,_u,xu,vu,yu,Su,Mu,Ps,Yi,as,Ai,bl,Hr,Wr,Xr,As,Cs,er,Jo,Tl,wl,nr,$e,El,g0,Fn,oa,aa,Ne,_0,$o,Tu,hs,x0,pi,wu,Yr,ei,Ko,ln,pn,Eu,v0,y0,Ci,S0,qi,ls,Au,Al,Cl,la,Is,cp,ir,Rl,hp,Pl,Il,Ll,Cu,Dl,up,Nl,xe,ca,ha,qr,fp,Fl,dp,b0,Qo,jo,ua,sr,T0,Ol,ro,oo,pp,Uu,Bl,zl,fa,da,Ls,rc,pa,Zi,ma,ar,ga,_a,xa,lm,E0,A0,ni,oc,lr,Ds,va,ac,lc,Ns,cc,hc,uc,fc,ii,Us,dc,pc,mc,ya,Fs,gc,Wl,_c,hm,ao,Jr,xc,Sa,lo,Ma,Pu,vp,yp,ba,kl,Vl,ki,Ta,Rs,Sp,Mp,fn,Fu,cr,co,Ou,wa,$r,Kr,vc,yc,lf,P0,cf,I0,L0,D0,N0,U0,F0,O0,Bu,De,J1,mf,zu,gf=zi(()=>{bp=0,ku=1,Tp=2,Ea=1,wp=2,ho=3,Os=0,mn=1,mi=2,Ji=0,uo=1,fo=2,Vu=3,Gu=4,Ep=5,hr=100,Ap=101,Cp=102,Rp=103,Pp=104,Ip=200,Lp=201,Dp=202,Np=203,Hu=204,Wu=205,Up=206,Fp=207,Op=208,Bp=209,zp=210,kp=211,Vp=212,Gp=213,Hp=214,Xl=0,Yl=1,ql=2,jr=3,Zl=4,Jl=5,$l=6,Kl=7,Mc=0,Wp=1,Xp=2,Ii=0,Xu=1,Yu=2,qu=3,Aa=4,Zu=5,Ju=6,$u=7,Ku=300,Bs=301,ur=302,bc=303,Tc=304,Ca=306,Ql=1e3,Vi=1001,jl=1002,cn=1003,Yp=1004,Ra=1005,dn=1006,wc=1007,zs=1008,Zn=1009,Qu=1010,ju=1011,po=1012,Ec=1013,Li=1014,gi=1015,Di=1016,Ac=1017,Cc=1018,mo=1020,tf=35902,ef=35899,nf=1021,sf=1022,_i=1023,Gi=1026,ks=1027,Rc=1028,Pc=1029,Vs=1030,Ic=1031,Lc=1033,Pa=33776,Ia=33777,La=33778,Da=33779,Dc=35840,Nc=35841,Uc=35842,Fc=35843,Oc=36196,Bc=37492,zc=37496,kc=37488,Vc=37489,Na=37490,Gc=37491,Hc=37808,Wc=37809,Xc=37810,Yc=37811,qc=37812,Zc=37813,Jc=37814,$c=37815,Kc=37816,Qc=37817,jc=37818,th=37819,eh=37820,nh=37821,ih=36492,sh=36494,rh=36495,oh=36283,ah=36284,Ua=36285,lh=36286,ta=2300,tc=2301,Gl=2302,Iu=2303,Lu=2400,Du=2401,Nu=2402,qp=3200,Fa=0,Zp=1,us="",Tn="srgb",ea="srgb-linear",na="linear",ge="srgb",Hl=7680,Jp=519,$p=512,Kp=513,Qp=514,ch=515,jp=516,tm=517,hh=518,em=519,nm=35044,rf="300 es",Ri=2e3,to=2001;Kd={},no=null;om={[Xl]:Yl,[ql]:$l,[Zl]:Kl,[jr]:Jl,[Yl]:Xl,[$l]:ql,[Kl]:Zl,[Jl]:jr},Hi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lu=Math.PI/180,ec=180/Math.PI;uf=class uf{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};uf.prototype.isVector2=!0;ne=uf,Wi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(d!==_||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*_;m<0&&(u=-u,f=-f,g=-g,_=-_,m=-m);let p=1-a;if(m<.9995){let S=Math.acos(m),C=Math.sin(S);p=Math.sin(p*S)/C,a=Math.sin(a*S)/C,l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+_*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+_*a;let S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-a*f,t[e+2]=c*g+h*f+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),u=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Yt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ff=class ff{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Qd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return hu.copy(this).projectOnVector(t),this.sub(hu)}reflect(t){return this.sub(hu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ff.prototype.isVector3=!0;G=ff,hu=new G,Qd=new Wi,df=class df{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],S=i[1],C=i[4],y=i[7],M=i[2],b=i[5],E=i[8];return r[0]=o*_+a*S+l*M,r[3]=o*m+a*C+l*b,r[6]=o*p+a*y+l*E,r[1]=c*_+h*S+d*M,r[4]=c*m+h*C+d*b,r[7]=c*p+h*y+d*E,r[2]=u*_+f*S+g*M,r[5]=u*m+f*C+g*b,r[8]=u*p+f*y+g*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=e*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return rr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(uu.makeScale(t,e)),this}rotate(t){return rr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(uu.makeRotation(-t)),this}translate(t,e){return rr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(uu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};df.prototype.isMatrix3=!0;$t=df,uu=new $t,jd=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tp=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);le=o0();nc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Or===void 0&&(Or=eo("canvas")),Or.width=t.width,Or.height=t.height;let i=Or.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Or}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=eo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=cs(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(cs(e[n]/255)*255):e[n]=cs(e[n]);return{data:e,width:t.width,height:t.height}}else return Yt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},a0=0,io=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Oa(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(fu(i[o].image)):r.push(fu(i[o]))}else r=fu(i);n.url=r}return e||(t.images[this.uuid]=n),n}};l0=0,du=new G,On=class s extends Hi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Vi,i=Vi,r=dn,o=zs,a=_i,l=Zn,c=s.DEFAULT_ANISOTROPY,h=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=Oa(),this.name="",this.source=new io(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(du).x}get height(){return this.source.getSize(du).y}get depth(){return this.source.getSize(du).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Yt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Yt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ku)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ql:t.x=t.x-Math.floor(t.x);break;case Vi:t.x=t.x<0?0:1;break;case jl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ql:t.y=t.y-Math.floor(t.y);break;case Vi:t.y=t.y<0?0:1;break;case jl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=Ku;On.DEFAULT_ANISOTROPY=1;pf=class pf{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(c+1)/2,y=(f+1)/2,M=(p+1)/2,b=(h+u)/4,E=(d+_)/4,v=(g+m)/4;return C>y&&C>M?C<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(C),i=b/n,r=E/n):y>M?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=b/i,r=v/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=E/r,i=v/r),this.set(n,i,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-_)/S,this.z=(u-h)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};pf.prototype.isVector4=!0;Ue=pf,ic=class extends Hi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new On(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new io(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},qn=class extends ic{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ia=class extends On{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},sc=class extends On{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},Sc=class Sc{constructor(t,e,n,i,r,o,a,l,c,h,d,u,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,u,f,g,_,m)}set(t,e,n,i,r,o,a,l,c,h,d,u,f,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sc().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Br.setFromMatrixColumn(t,0).length(),r=1/Br.setFromMatrixColumn(t,1).length(),o=1/Br.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,_=c*d;e[0]=u+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-_*d}else if(t.order==="XZY"){let u=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(c0,t,h0)}lookAt(t,e,n){let i=this.elements;return ti.subVectors(t,e),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),ws.crossVectors(n,ti),ws.lengthSq()===0&&(Math.abs(n.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),ws.crossVectors(n,ti)),ws.normalize(),yl.crossVectors(ti,ws),i[0]=ws.x,i[4]=yl.x,i[8]=ti.x,i[1]=ws.y,i[5]=yl.y,i[9]=ti.y,i[2]=ws.z,i[6]=yl.z,i[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],C=n[7],y=n[11],M=n[15],b=i[0],E=i[4],v=i[8],w=i[12],R=i[1],D=i[5],L=i[9],B=i[13],I=i[2],z=i[6],q=i[10],k=i[14],j=i[3],Z=i[7],P=i[11],et=i[15];return r[0]=o*b+a*R+l*I+c*j,r[4]=o*E+a*D+l*z+c*Z,r[8]=o*v+a*L+l*q+c*P,r[12]=o*w+a*B+l*k+c*et,r[1]=h*b+d*R+u*I+f*j,r[5]=h*E+d*D+u*z+f*Z,r[9]=h*v+d*L+u*q+f*P,r[13]=h*w+d*B+u*k+f*et,r[2]=g*b+_*R+m*I+p*j,r[6]=g*E+_*D+m*z+p*Z,r[10]=g*v+_*L+m*q+p*P,r[14]=g*w+_*B+m*k+p*et,r[3]=S*b+C*R+y*I+M*j,r[7]=S*E+C*D+y*z+M*Z,r[11]=S*v+C*L+y*q+M*P,r[15]=S*w+C*B+y*k+M*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15],S=l*f-c*u,C=a*f-c*d,y=a*u-l*d,M=o*f-c*h,b=o*u-l*h,E=o*d-a*h;return e*(_*S-m*C+p*y)-n*(g*S-m*M+p*b)+i*(g*C-_*M+p*E)-r*(g*y-_*b+m*E)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],S=e*a-n*o,C=e*l-i*o,y=e*c-r*o,M=n*l-i*a,b=n*c-r*a,E=i*c-r*l,v=h*_-d*g,w=h*m-u*g,R=h*p-f*g,D=d*m-u*_,L=d*p-f*_,B=u*p-f*m,I=S*B-C*L+y*D+M*R-b*w+E*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/I;return t[0]=(a*B-l*L+c*D)*z,t[1]=(i*L-n*B-r*D)*z,t[2]=(_*E-m*b+p*M)*z,t[3]=(u*b-d*E-f*M)*z,t[4]=(l*R-o*B-c*w)*z,t[5]=(e*B-i*R+r*w)*z,t[6]=(m*y-g*E-p*C)*z,t[7]=(h*E-u*y+f*C)*z,t[8]=(o*L-a*R+c*v)*z,t[9]=(n*R-e*L-r*v)*z,t[10]=(g*b-_*y+p*S)*z,t[11]=(d*y-h*b-f*S)*z,t[12]=(a*w-o*D-l*v)*z,t[13]=(e*D-n*w+i*v)*z,t[14]=(_*C-g*M-m*S)*z,t[15]=(h*M-d*C+u*S)*z,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,_=o*h,m=o*d,p=a*d,S=l*c,C=l*h,y=l*d,M=n.x,b=n.y,E=n.z;return i[0]=(1-(_+p))*M,i[1]=(f+y)*M,i[2]=(g-C)*M,i[3]=0,i[4]=(f-y)*b,i[5]=(1-(u+p))*b,i[6]=(m+S)*b,i[7]=0,i[8]=(g+C)*E,i[9]=(m-S)*E,i[10]=(1-(u+_))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Br.set(i[0],i[1],i[2]).length(),a=Br.set(i[4],i[5],i[6]).length(),l=Br.set(i[8],i[9],i[10]).length();r<0&&(o=-o),wi.copy(this);let c=1/o,h=1/a,d=1/l;return wi.elements[0]*=c,wi.elements[1]*=c,wi.elements[2]*=c,wi.elements[4]*=h,wi.elements[5]*=h,wi.elements[6]*=h,wi.elements[8]*=d,wi.elements[9]*=d,wi.elements[10]*=d,e.setFromRotationMatrix(wi),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=Ri,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===Ri)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===to)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Ri,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===Ri)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===to)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Sc.prototype.isMatrix4=!0;be=Sc,Br=new G,wi=new be,c0=new G(0,0,0),h0=new G(1,1,1),ws=new G,yl=new G,ti=new G,ep=new be,np=new Wi,Xi=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ce(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Yt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ep.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ep,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return np.setFromEuler(this),this.setFromQuaternion(np,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xi.DEFAULT_ORDER="XYZ";sa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},u0=0,ip=new G,zr=new Wi,ss=new be,Sl=new G,Zo=new G,f0=new G,d0=new Wi,sp=new G(1,0,0),rp=new G(0,1,0),op=new G(0,0,1),ap={type:"added"},p0={type:"removed"},kr={type:"childadded",child:null},pu={type:"childremoved",child:null},tn=class s extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=Oa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new G,e=new Xi,n=new Wi,i=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new be},normalMatrix:{value:new $t}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zr.setFromAxisAngle(t,e),this.quaternion.multiply(zr),this}rotateOnWorldAxis(t,e){return zr.setFromAxisAngle(t,e),this.quaternion.premultiply(zr),this}rotateX(t){return this.rotateOnAxis(sp,t)}rotateY(t){return this.rotateOnAxis(rp,t)}rotateZ(t){return this.rotateOnAxis(op,t)}translateOnAxis(t,e){return ip.copy(t).applyQuaternion(this.quaternion),this.position.add(ip.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sp,t)}translateY(t){return this.translateOnAxis(rp,t)}translateZ(t){return this.translateOnAxis(op,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ss.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Sl.copy(t):Sl.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ss.lookAt(Zo,Sl,this.up):ss.lookAt(Sl,Zo,this.up),this.quaternion.setFromRotationMatrix(ss),i&&(ss.extractRotation(i.matrixWorld),zr.setFromRotationMatrix(ss),this.quaternion.premultiply(zr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ap),kr.child=t,this.dispatchEvent(kr),kr.child=null):qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(p0),pu.child=t,this.dispatchEvent(pu),pu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ss.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ss.multiply(t.parent.matrixWorld)),t.applyMatrix4(ss),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ap),kr.child=t,this.dispatchEvent(kr),kr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,t,f0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,d0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};tn.DEFAULT_UP=new G(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Pi=class extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},m0={type:"move"},so=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(m0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Pi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},am={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Es={h:0,s:0,l:0},Ml={h:0,s:0,l:0};Zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=le.workingColorSpace){if(t=r0(t,1),e=ce(e,0,1),n=ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=mu(o,r,t+1/3),this.g=mu(o,r,t),this.b=mu(o,r,t-1/3)}return le.colorSpaceToWorking(this,i),this}setStyle(t,e=Tn){function n(r){r!==void 0&&parseFloat(r)<1&&Yt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Yt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Yt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Tn){let n=am[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Yt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}copyLinearToSRGB(t){return this.r=Qr(t.r),this.g=Qr(t.g),this.b=Qr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Tn){return le.workingToColorSpace(bn.copy(this),t),Math.round(ce(bn.r*255,0,255))*65536+Math.round(ce(bn.g*255,0,255))*256+Math.round(ce(bn.b*255,0,255))}getHexString(t=Tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(bn.copy(this),e);let n=bn.r,i=bn.g,r=bn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(bn.copy(this),e),t.r=bn.r,t.g=bn.g,t.b=bn.b,t}getStyle(t=Tn){le.workingToColorSpace(bn.copy(this),t);let e=bn.r,n=bn.g,i=bn.b;return t!==Tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Es),this.setHSL(Es.h+t,Es.s+e,Es.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Es),t.getHSL(Ml);let n=cu(Es.h,Ml.h,e),i=cu(Es.s,Ml.s,e),r=cu(Es.l,Ml.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bn=new Zt;Zt.NAMES=am;ra=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Zt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},or=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ei=new G,rs=new G,gu=new G,os=new G,Vr=new G,Gr=new G,lp=new G,_u=new G,xu=new G,vu=new G,yu=new Ue,Su=new Ue,Mu=new Ue,Ps=class s{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ei.subVectors(t,e),i.cross(Ei);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ei.subVectors(i,e),rs.subVectors(n,e),gu.subVectors(t,e);let o=Ei.dot(Ei),a=Ei.dot(rs),l=Ei.dot(gu),c=rs.dot(rs),h=rs.dot(gu),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,os)===null?!1:os.x>=0&&os.y>=0&&os.x+os.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,os)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,os.x),l.addScaledVector(o,os.y),l.addScaledVector(a,os.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return yu.setScalar(0),Su.setScalar(0),Mu.setScalar(0),yu.fromBufferAttribute(t,e),Su.fromBufferAttribute(t,n),Mu.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(yu,r.x),o.addScaledVector(Su,r.y),o.addScaledVector(Mu,r.z),o}static isFrontFacing(t,e,n,i){return Ei.subVectors(n,e),rs.subVectors(t,e),Ei.cross(rs).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ei.subVectors(this.c,this.b),rs.subVectors(this.a,this.b),Ei.cross(rs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Vr.subVectors(i,n),Gr.subVectors(r,n),_u.subVectors(t,n);let l=Vr.dot(_u),c=Gr.dot(_u);if(l<=0&&c<=0)return e.copy(n);xu.subVectors(t,i);let h=Vr.dot(xu),d=Gr.dot(xu);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Vr,o);vu.subVectors(t,r);let f=Vr.dot(vu),g=Gr.dot(vu);if(g>=0&&f<=g)return e.copy(r);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Gr,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return lp.subVectors(r,i),a=(d-h)/(d-h+(f-g)),e.copy(i).addScaledVector(lp,a);let p=1/(m+_+u);return o=_*p,a=u*p,e.copy(n).addScaledVector(Vr,o).addScaledVector(Gr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Yi=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ai):Ai.fromBufferAttribute(r,o),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),bl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bl.copy(n.boundingBox)),bl.applyMatrix4(t.matrixWorld),this.union(bl)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Jo),Tl.subVectors(this.max,Jo),Hr.subVectors(t.a,Jo),Wr.subVectors(t.b,Jo),Xr.subVectors(t.c,Jo),As.subVectors(Wr,Hr),Cs.subVectors(Xr,Wr),er.subVectors(Hr,Xr);let e=[0,-As.z,As.y,0,-Cs.z,Cs.y,0,-er.z,er.y,As.z,0,-As.x,Cs.z,0,-Cs.x,er.z,0,-er.x,-As.y,As.x,0,-Cs.y,Cs.x,0,-er.y,er.x,0];return!bu(e,Hr,Wr,Xr,Tl)||(e=[1,0,0,0,1,0,0,0,1],!bu(e,Hr,Wr,Xr,Tl))?!1:(wl.crossVectors(As,Cs),e=[wl.x,wl.y,wl.z],bu(e,Hr,Wr,Xr,Tl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(as[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),as[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),as[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),as[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),as[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),as[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),as[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),as[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(as),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},as=[new G,new G,new G,new G,new G,new G,new G,new G],Ai=new G,bl=new Yi,Hr=new G,Wr=new G,Xr=new G,As=new G,Cs=new G,er=new G,Jo=new G,Tl=new G,wl=new G,nr=new G;$e=new G,El=new ne,g0=0,Fn=class extends Hi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:g0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=nm,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)El.fromBufferAttribute(this,e),El.applyMatrix3(t),this.setXY(e,El.x,El.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix3(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=qo(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Yn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qo(e,this.array)),e}setX(t,e){return this.normalized&&(e=Yn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qo(e,this.array)),e}setY(t,e){return this.normalized&&(e=Yn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Yn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qo(e,this.array)),e}setW(t,e){return this.normalized&&(e=Yn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Yn(e,this.array),n=Yn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Yn(e,this.array),n=Yn(n,this.array),i=Yn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Yn(e,this.array),n=Yn(n,this.array),i=Yn(i,this.array),r=Yn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}},oa=class extends Fn{constructor(t,e,n){super(new Uint16Array(t),e,n)}},aa=class extends Fn{constructor(t,e,n){super(new Uint32Array(t),e,n)}},Ne=class extends Fn{constructor(t,e,n){super(new Float32Array(t),e,n)}},_0=new Yi,$o=new G,Tu=new G,hs=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):_0.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$o.subVectors(t,this.center);let e=$o.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector($o,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Tu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($o.copy(t.center).add(Tu)),this.expandByPoint($o.copy(t.center).sub(Tu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},x0=0,pi=new be,wu=new tn,Yr=new G,ei=new Yi,Ko=new Yi,ln=new G,pn=class s extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=Oa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(i0(t)?aa:oa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return pi.makeRotationFromQuaternion(t),this.applyMatrix4(pi),this}rotateX(t){return pi.makeRotationX(t),this.applyMatrix4(pi),this}rotateY(t){return pi.makeRotationY(t),this.applyMatrix4(pi),this}rotateZ(t){return pi.makeRotationZ(t),this.applyMatrix4(pi),this}translate(t,e,n){return pi.makeTranslation(t,e,n),this.applyMatrix4(pi),this}scale(t,e,n){return pi.makeScale(t,e,n),this.applyMatrix4(pi),this}lookAt(t){return wu.lookAt(t),wu.updateMatrix(),this.applyMatrix4(wu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yr).negate(),this.translate(Yr.x,Yr.y,Yr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ne(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Yt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];ei.setFromBufferAttribute(r),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let n=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ko.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(ei.min,Ko.min),ei.expandByPoint(ln),ln.addVectors(ei.max,Ko.max),ei.expandByPoint(ln)):(ei.expandByPoint(Ko.min),ei.expandByPoint(Ko.max))}ei.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)ln.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ln));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ln.fromBufferAttribute(a,c),l&&(Yr.fromBufferAttribute(t,c),ln.add(Yr)),i=Math.max(i,n.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Fn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new G,l[v]=new G;let c=new G,h=new G,d=new G,u=new ne,f=new ne,g=new ne,_=new G,m=new G;function p(v,w,R){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,R),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,R),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),a[v].add(_),a[w].add(_),a[R].add(_),l[v].add(m),l[w].add(m),l[R].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let v=0,w=S.length;v<w;++v){let R=S[v],D=R.start,L=R.count;for(let B=D,I=D+L;B<I;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let C=new G,y=new G,M=new G,b=new G;function E(v){M.fromBufferAttribute(i,v),b.copy(M);let w=a[v];C.copy(w),C.sub(M.multiplyScalar(M.dot(w))).normalize(),y.crossVectors(b,w);let D=y.dot(l[v])<0?-1:1;o.setXYZW(v,C.x,C.y,C.z,D)}for(let v=0,w=S.length;v<w;++v){let R=S[v],D=R.start,L=R.count;for(let B=D,I=D+L;B<I;B+=3)E(t.getX(B+0)),E(t.getX(B+1)),E(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Fn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new G,r=new G,o=new G,a=new G,l=new G,c=new G,h=new G,d=new G;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ln.fromBufferAttribute(t,e),ln.normalize(),t.setXYZ(e,ln.x,ln.y,ln.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Fn(u,h,d)}if(this.index===null)return Yt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Eu=new G,v0=new G,y0=new $t,Ci=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Eu.subVectors(n,e).cross(v0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Eu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||y0.getNormalMatrix(t),i=this.coplanarPoint(Eu).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},S0=0,qi=class extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=Oa(),this.name="",this.type="Material",this.blending=uo,this.side=Os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hu,this.blendDst=Wu,this.blendEquation=hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hl,this.stencilZFail=Hl,this.stencilZPass=Hl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Yt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Yt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ci().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ne().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ne().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ls=new G,Au=new G,Al=new G,Cl=new G,la=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ls)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ls.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ls.copy(this.origin).addScaledVector(this.direction,e),ls.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Au.copy(t).add(e).multiplyScalar(.5),Al.copy(e).sub(t).normalize(),Cl.copy(this.origin).sub(Au);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Al),a=Cl.dot(this.direction),l=-Cl.dot(Al),c=Cl.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Au).addScaledVector(Al,u),f}intersectSphere(t,e){if(t.radius<0)return null;ls.subVectors(t.center,this.origin);let n=ls.dot(this.direction),i=ls.dot(ls)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ls)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,g=e.x-o.x,_=e.y-o.y,m=e.z-o.z,p=n.x-o.x,S=n.y-o.y,C=n.z-o.z,y=Math.abs(l),M=Math.abs(c),b=Math.abs(h),E,v,w,R,D,L,B,I,z,q,k,j;if(y>=M&&y>=b?(w=l,L=d,z=g,j=p,l>=0?(E=c,v=h,R=u,D=f,B=_,I=m,q=S,k=C):(E=h,v=c,R=f,D=u,B=m,I=_,q=C,k=S)):M>=b?(w=c,L=u,z=_,j=S,c>=0?(E=h,v=l,R=f,D=d,B=m,I=g,q=C,k=p):(E=l,v=h,R=d,D=f,B=g,I=m,q=p,k=C)):(w=h,L=f,z=m,j=C,h>=0?(E=l,v=c,R=d,D=u,B=g,I=_,q=p,k=S):(E=c,v=l,R=u,D=d,B=_,I=g,q=S,k=p)),w===0)return null;let Z=E/w,P=v/w,et=1/w,bt=R-Z*L,Tt=D-P*L,Ht=B-Z*z,zt=I-P*z,Wt=q-Z*j,K=k-P*j,tt=Wt*zt-K*Ht,gt=bt*K-Tt*Wt,Bt=Ht*Tt-zt*bt;if(i){if(tt<0||gt<0||Bt<0)return null}else if((tt<0||gt<0||Bt<0)&&(tt>0||gt>0||Bt>0))return null;let st=tt+gt+Bt;if(st===0)return null;let Dt=et*(tt*L+gt*z+Bt*j);return(st>0?Dt<0:Dt>0)?null:this.at(Dt/st,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Is=class extends qi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=Mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},cp=new be,ir=new la,Rl=new hs,hp=new G,Pl=new G,Il=new G,Ll=new G,Cu=new G,Dl=new G,up=new G,Nl=new G,xe=class extends tn{constructor(t=new pn,e=new Is){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Dl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Cu.fromBufferAttribute(d,t),o?Dl.addScaledVector(Cu,h):Dl.addScaledVector(Cu.sub(e),h))}e.add(Dl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rl.copy(n.boundingSphere),Rl.applyMatrix4(r),ir.copy(t.ray).recast(t.near),!(Rl.containsPoint(ir.origin)===!1&&(ir.intersectSphere(Rl,hp)===null||ir.origin.distanceToSquared(hp)>(t.far-t.near)**2))&&(cp.copy(r).invert(),ir.copy(t.ray).applyMatrix4(cp),!(n.boundingBox!==null&&ir.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ir)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let m=u[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),C=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,M=C;y<M;y+=3){let b=a.getX(y),E=a.getX(y+1),v=a.getX(y+2);i=Ul(this,p,t,n,c,h,d,b,E,v),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let S=a.getX(m),C=a.getX(m+1),y=a.getX(m+2);i=Ul(this,o,t,n,c,h,d,S,C,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let m=u[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),C=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,M=C;y<M;y+=3){let b=y,E=y+1,v=y+2;i=Ul(this,p,t,n,c,h,d,b,E,v),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let S=m,C=m+1,y=m+2;i=Ul(this,o,t,n,c,h,d,S,C,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};ca=class extends On{constructor(t=null,e=1,n=1,i,r,o,a,l,c=cn,h=cn,d,u){super(null,o,a,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ha=class extends Fn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},qr=new be,fp=new be,Fl=[],dp=new Yi,b0=new be,Qo=new xe,jo=new hs,ua=class extends xe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ha(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,b0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Yi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qr),dp.copy(t.boundingBox).applyMatrix4(qr),this.boundingBox.union(dp)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new hs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qr),jo.copy(t.boundingSphere).applyMatrix4(qr),this.boundingSphere.union(jo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Qo.geometry=this.geometry,Qo.material=this.material,Qo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jo.copy(this.boundingSphere),jo.applyMatrix4(n),t.ray.intersectsSphere(jo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,qr),fp.multiplyMatrices(n,qr),Qo.matrixWorld=fp,Qo.raycast(t,Fl);for(let o=0,a=Fl.length;o<a;o++){let l=Fl[o];l.instanceId=r,l.object=this,e.push(l)}Fl.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ha(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ca(new Float32Array(i*this.count),i,this.count,Rc,gi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},sr=new hs,T0=new ne(.5,.5),Ol=new G,ro=class{constructor(t=new Ci,e=new Ci,n=new Ci,i=new Ci,r=new Ci,o=new Ci){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ri,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],S=r[12],C=r[13],y=r[14],M=r[15];if(i[0].setComponents(c-o,f-h,p-g,M-S).normalize(),i[1].setComponents(c+o,f+h,p+g,M+S).normalize(),i[2].setComponents(c+a,f+d,p+_,M+C).normalize(),i[3].setComponents(c-a,f-d,p-_,M-C).normalize(),n)i[4].setComponents(l,u,m,y).normalize(),i[5].setComponents(c-l,f-u,p-m,M-y).normalize();else if(i[4].setComponents(c-l,f-u,p-m,M-y).normalize(),e===Ri)i[5].setComponents(c+l,f+u,p+m,M+y).normalize();else if(e===to)i[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),sr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(t){sr.center.set(0,0,0);let e=T0.distanceTo(t.center);return sr.radius=.7071067811865476+e,sr.applyMatrix4(t.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ol.x=i.normal.x>0?t.max.x:t.min.x,Ol.y=i.normal.y>0?t.max.y:t.min.y,Ol.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ol)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},oo=class extends qi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},pp=new be,Uu=new la,Bl=new hs,zl=new G,fa=class extends tn{constructor(t=new pn,e=new oo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bl.copy(n.boundingSphere),Bl.applyMatrix4(i),Bl.radius+=r,t.ray.intersectsSphere(Bl)===!1)return;pp.copy(i).invert(),Uu.copy(t.ray).applyMatrix4(pp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,_=f;g<_;g++){let m=c.getX(g);zl.fromBufferAttribute(d,m),mp(zl,m,l,i,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,_=f;g<_;g++)zl.fromBufferAttribute(d,g),mp(zl,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};da=class extends On{constructor(t=[],e=Bs,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ls=class extends On{constructor(t,e,n=Li,i,r,o,a=cn,l=cn,c,h=Gi,d=1){if(h!==Gi&&h!==ks)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new io(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},rc=class extends Ls{constructor(t,e=Li,n=Bs,i,r,o=cn,a=cn,l,c=Gi){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},pa=class extends On{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Zi=class s extends pn{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ne(c,3)),this.setAttribute("normal",new Ne(h,3)),this.setAttribute("uv",new Ne(d,2));function g(_,m,p,S,C,y,M,b,E,v,w){let R=y/E,D=M/v,L=y/2,B=M/2,I=b/2,z=E+1,q=v+1,k=0,j=0,Z=new G;for(let P=0;P<q;P++){let et=P*D-B;for(let bt=0;bt<z;bt++){let Tt=bt*R-L;Z[_]=Tt*S,Z[m]=et*C,Z[p]=I,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[p]=b>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(bt/E),d.push(1-P/v),k+=1}}for(let P=0;P<v;P++)for(let et=0;et<E;et++){let bt=u+et+z*P,Tt=u+et+z*(P+1),Ht=u+(et+1)+z*(P+1),zt=u+(et+1)+z*P;l.push(bt,Tt,zt),l.push(Tt,Ht,zt),j+=6}a.addGroup(f,j,w),f+=j,u+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ma=class s extends pn{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,_=[],m=n/2,p=0;S(),o===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(h),this.setAttribute("position",new Ne(d,3)),this.setAttribute("normal",new Ne(u,3)),this.setAttribute("uv",new Ne(f,2));function S(){let y=new G,M=new G,b=0,E=(e-t)/n;for(let v=0;v<=r;v++){let w=[],R=v/r,D=R*(e-t)+t;for(let L=0;L<=i;L++){let B=L/i,I=B*l+a,z=Math.sin(I),q=Math.cos(I);M.x=D*z,M.y=-R*n+m,M.z=D*q,d.push(M.x,M.y,M.z),y.set(z,E,q).normalize(),u.push(y.x,y.y,y.z),f.push(B,1-R),w.push(g++)}_.push(w)}for(let v=0;v<i;v++)for(let w=0;w<r;w++){let R=_[w][v],D=_[w+1][v],L=_[w+1][v+1],B=_[w][v+1];(t>0||w!==0)&&(h.push(R,D,B),b+=3),(e>0||w!==r-1)&&(h.push(D,L,B),b+=3)}c.addGroup(p,b,0),p+=b}function C(y){let M=g,b=new ne,E=new G,v=0,w=y===!0?t:e,R=y===!0?1:-1;for(let L=1;L<=i;L++)d.push(0,m*R,0),u.push(0,R,0),f.push(.5,.5),g++;let D=g;for(let L=0;L<=i;L++){let I=L/i*l+a,z=Math.cos(I),q=Math.sin(I);E.x=w*q,E.y=m*R,E.z=w*z,d.push(E.x,E.y,E.z),u.push(0,R,0),b.x=z*.5+.5,b.y=q*.5*R+.5,f.push(b.x,b.y),g++}for(let L=0;L<i;L++){let B=M+L,I=D+L;y===!0?h.push(I,I+1,B):h.push(I+1,I,B),v+=3}c.addGroup(p,v,y===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ar=class s extends pn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let S=p*u-o;for(let C=0;C<c;C++){let y=C*d-r;g.push(y,-S,0),_.push(0,0,1),m.push(C/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){let C=S+c*p,y=S+c*(p+1),M=S+1+c*(p+1),b=S+1+c*p;f.push(C,y,b),f.push(y,M,b)}this.setIndex(f),this.setAttribute("position",new Ne(g,3)),this.setAttribute("normal",new Ne(_,3)),this.setAttribute("uv",new Ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},ga=class s extends pn{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],d=t,u=(e-t)/i,f=new G,g=new ne;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let _=0;_<i;_++){let m=_*(n+1);for(let p=0;p<n;p++){let S=p+m,C=S,y=S+n+1,M=S+n+2,b=S+1;a.push(C,y,b),a.push(y,M,b)}}this.setIndex(a),this.setAttribute("position",new Ne(l,3)),this.setAttribute("normal",new Ne(c,3)),this.setAttribute("uv",new Ne(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},_a=class s extends pn{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new G,u=new G,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let S=[],C=p/n,y=o+C*a,M=t*Math.cos(y),b=Math.sqrt(t*t-M*M),E=0;p===0&&o===0?E=.5/e:p===n&&l===Math.PI&&(E=-.5/e);for(let v=0;v<=e;v++){let w=v/e,R=i+w*r;d.x=-b*Math.cos(R),d.y=M,d.z=b*Math.sin(R),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(w+E,1-C),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){let C=h[p][S+1],y=h[p][S],M=h[p+1][S],b=h[p+1][S+1];(p!==0||o>0)&&f.push(C,y,b),(p!==n-1||l<Math.PI)&&f.push(y,M,b)}this.setIndex(f),this.setAttribute("position",new Ne(g,3)),this.setAttribute("normal",new Ne(_,3)),this.setAttribute("uv",new Ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},xa=class s extends pn{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],d=[],u=new G,f=new G,g=new G;for(let _=0;_<=n;_++){let m=o+_/n*a;for(let p=0;p<=i;p++){let S=p/i*r;f.x=(t+e*Math.cos(m))*Math.cos(S),f.y=(t+e*Math.cos(m))*Math.sin(S),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(S),u.y=t*Math.sin(S),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=i;m++){let p=(i+1)*_+m-1,S=(i+1)*(_-1)+m-1,C=(i+1)*(_-1)+m,y=(i+1)*_+m;l.push(p,S,y),l.push(S,C,y)}this.setIndex(l),this.setAttribute("position",new Ne(c,3)),this.setAttribute("normal",new Ne(h,3)),this.setAttribute("uv",new Ne(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};lm={clone:fr,merge:wn},E0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,A0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ni=class extends qi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=E0,this.fragmentShader=A0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fr(t.uniforms),this.uniformsGroups=w0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Zt().setHex(i.value);break;case"v2":this.uniforms[n].value=new ne().fromArray(i.value);break;case"v3":this.uniforms[n].value=new G().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ue().fromArray(i.value);break;case"m3":this.uniforms[n].value=new $t().fromArray(i.value);break;case"m4":this.uniforms[n].value=new be().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},oc=class extends ni{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},lr=class extends qi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fa,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ds=class extends lr{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ce(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},va=class extends qi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fa,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=Mc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ac=class extends qi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},lc=class extends qi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};Ns=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},cc=class extends Ns{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lu,endingEnd:Lu}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Du:r=t,a=2*e-n;break;case Nu:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Du:o=t,l=2*n-e;break;case Nu:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),_=g*g,m=_*g,p=-u*m+2*u*_-u*g,S=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,C=(-1-f)*m+(1.5+f)*_+.5*g,y=f*m-f*_;for(let M=0;M!==a;++M)r[M]=p*o[h+M]+S*o[c+M]+C*o[l+M]+y*o[d+M];return r}},hc=class extends Ns{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},uc=class extends Ns{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},fc=class extends Ns{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(i-e),_=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*_+o[l+m]*g;return r}let u=a*2,f=t-1;for(let g=0;g!==a;++g){let _=o[c+g],m=o[l+g],p=f*u+g*2,S=d[p],C=d[p+1],y=t*u+g*2,M=h[y],b=h[y+1],E=R0(n,e,S,M,i);r[g]=cm(E,_,C,b,m)}return r}};ii=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Zr(e,this.TimeBufferType),this.values=Zr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Zr(t.times,Array),values:Zr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Ru(t.settings)&&(n.settings={inTangents:Zr(t.settings.inTangents,Array),outTangents:Zr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new uc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new hc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new cc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new fc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ta:e=this.InterpolantFactoryMethodDiscrete;break;case tc:e=this.InterpolantFactoryMethodLinear;break;case Gl:e=this.InterpolantFactoryMethodSmooth;break;case Iu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Yt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ta;case this.InterpolantFactoryMethodLinear:return tc;case this.InterpolantFactoryMethodSmooth:return Gl;case this.InterpolantFactoryMethodBezier:return Iu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Ru(this.settings)&&(_p(this.settings.inTangents,t),_p(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(qt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){qt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){qt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&s0(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){qt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Gl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let _=e[d+g];if(_!==e[u+g]||_!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Ru(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};ii.prototype.ValueTypeName="";ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=tc;Us=class extends ii{constructor(t,e,n){super(t,e,n)}};Us.prototype.ValueTypeName="bool";Us.prototype.ValueBufferType=Array;Us.prototype.DefaultInterpolation=ta;Us.prototype.InterpolantFactoryMethodLinear=void 0;Us.prototype.InterpolantFactoryMethodSmooth=void 0;dc=class extends ii{constructor(t,e,n,i){super(t,e,n,i)}};dc.prototype.ValueTypeName="color";pc=class extends ii{constructor(t,e,n,i){super(t,e,n,i)}};pc.prototype.ValueTypeName="number";mc=class extends Ns{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Wi.slerpFlat(r,0,o,c-a,o,c,l);return r}},ya=class extends ii{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new mc(this.times,this.values,this.getValueSize(),t)}};ya.prototype.ValueTypeName="quaternion";ya.prototype.InterpolantFactoryMethodSmooth=void 0;Fs=class extends ii{constructor(t,e,n){super(t,e,n)}};Fs.prototype.ValueTypeName="string";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=ta;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;gc=class extends ii{constructor(t,e,n,i){super(t,e,n,i)}};gc.prototype.ValueTypeName="vector";Wl={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(xp(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!xp(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};_c=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},hm=new _c,ao=class{constructor(t){this.manager=t!==void 0?t:hm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ao.DEFAULT_MATERIAL_NAME="__DEFAULT";Jr=new WeakMap,xc=class extends ao{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Wl.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let d=Jr.get(o);d===void 0&&(d=[],Jr.set(o,d)),d.push({onLoad:e,onError:i})}return o}let a=eo("img");function l(){h(),e&&e(this);let d=Jr.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}Jr.delete(this),r.manager.itemEnd(t)}function c(d){h(),i&&i(d),Wl.remove(`image:${t}`);let u=Jr.get(this)||[];for(let f=0;f<u.length;f++){let g=u[f];g.onError&&g.onError(d)}Jr.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Wl.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}},Sa=class extends ao{constructor(t){super(t)}load(t,e,n,i){let r=new On,o=new xc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},lo=class extends tn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ma=class extends lo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Pu=new be,vp=new G,yp=new G,ba=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.mapType=Zn,this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ro,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;vp.setFromMatrixPosition(t.matrixWorld),e.position.copy(vp),yp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yp),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Pu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Pu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===to||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Pu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},kl=new G,Vl=new Wi,ki=new G,Ta=class extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=Ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(kl,Vl,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kl,Vl,ki.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(kl,Vl,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kl,Vl,ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Rs=new G,Sp=new ne,Mp=new ne,fn=class extends Ta{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ec*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(lu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ec*2*Math.atan(Math.tan(lu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Rs.x,Rs.y).multiplyScalar(-t/Rs.z),Rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rs.x,Rs.y).multiplyScalar(-t/Rs.z)}getViewSize(t,e){return this.getViewBounds(t,Sp,Mp),e.subVectors(Mp,Sp)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(lu*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Fu=class extends ba{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0}},cr=class extends lo{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Fu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},co=class extends Ta{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ou=class extends ba{constructor(){super(new co(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},wa=class extends lo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new Ou}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},$r=-90,Kr=1,vc=class extends tn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new fn($r,Kr,t,e);i.layers=this.layers,this.add(i);let r=new fn($r,Kr,t,e);r.layers=this.layers,this.add(r);let o=new fn($r,Kr,t,e);o.layers=this.layers,this.add(o);let a=new fn($r,Kr,t,e);a.layers=this.layers,this.add(a);let l=new fn($r,Kr,t,e);l.layers=this.layers,this.add(l);let c=new fn($r,Kr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Ri)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===to)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},yc=class extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},lf="\\[\\]\\.:\\/",P0=new RegExp("["+lf+"]","g"),cf="[^"+lf+"]",I0="[^"+lf.replace("\\.","")+"]",L0=/((?:WC+[\/:])*)/.source.replace("WC",cf),D0=/(WCOD+)?/.source.replace("WCOD",I0),N0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cf),U0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cf),F0=new RegExp("^"+L0+D0+N0+U0+"$"),O0=["material","materials","bones","map"],Bu=class{constructor(t,e,n){let i=n||De.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},De=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(P0,"")}static parseTrackName(t){let e=F0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);O0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Yt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;qt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};De.Composite=Bu;De.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};De.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};De.prototype.GetterByBindingType=[De.prototype._getValue_direct,De.prototype._getValue_array,De.prototype._getValue_arrayElement,De.prototype._getValue_toArray];De.prototype.SetterByBindingTypeAndVersioning=[[De.prototype._setValue_direct,De.prototype._setValue_direct_setNeedsUpdate,De.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[De.prototype._setValue_array,De.prototype._setValue_array_setNeedsUpdate,De.prototype._setValue_array_setMatrixWorldNeedsUpdate],[De.prototype._setValue_arrayElement,De.prototype._setValue_arrayElement_setNeedsUpdate,De.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[De.prototype._setValue_fromArray,De.prototype._setValue_fromArray_setNeedsUpdate,De.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];J1=new Float32Array(1),mf=class mf{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};mf.prototype.isMatrix2=!0;zu=mf;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Yt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186")});function Lm(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function k0(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let _=d[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}function My(s,t,e,n,i,r){let o=new Zt(0),a=i===!0?0:1,l,c,h=null,d=0,u=null;function f(S){let C=S.isScene===!0?S.background:null;if(C&&C.isTexture){let y=S.backgroundBlurriness>0;C=t.get(C,y)}return C}function g(S){let C=!1,y=f(S);y===null?m(o,a):y&&y.isColor&&(m(y,1),C=!0);let M=s.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||C)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(S,C){let y=f(C);y&&(y.isCubeTexture||y.mapping===Ca)?(c===void 0&&(c=new xe(new Zi(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:fr(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Sy.makeRotationFromEuler(C.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Dm),c.material.toneMapped=le.getTransfer(y.colorSpace)!==ge,(h!==y||d!==y.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new xe(new ar(2,2),new ni({name:"BackgroundMaterial",uniforms:fr(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:Os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=le.getTransfer(y.colorSpace)!==ge,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,C){S.getRGB(uh,af(s)),e.buffers.color.setClear(uh.r,uh.g,uh.b,C,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,C=1){o.set(S),a=C,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(o,a)},render:g,addToRenderList:_,dispose:p}}function by(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,o=!1;function a(D,L,B,I,z){let q=!1,k=d(D,I,B,L);r!==k&&(r=k,c(r.object)),q=f(D,I,B,z),q&&g(D,I,B,z),z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,y(D,L,B,I),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return s.createVertexArray()}function c(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function d(D,L,B,I){let z=I.wireframe===!0,q=n[L.id];q===void 0&&(q={},n[L.id]=q);let k=D.isInstancedMesh===!0?D.id:0,j=q[k];j===void 0&&(j={},q[k]=j);let Z=j[B.id];Z===void 0&&(Z={},j[B.id]=Z);let P=Z[z];return P===void 0&&(P=u(l()),Z[z]=P),P}function u(D){let L=[],B=[],I=[];for(let z=0;z<e;z++)L[z]=0,B[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:I,object:D,attributes:{},index:null}}function f(D,L,B,I){let z=r.attributes,q=L.attributes,k=0,j=B.getAttributes();for(let Z in j)if(j[Z].location>=0){let et=z[Z],bt=q[Z];if(bt===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(bt=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(bt=D.instanceColor)),et===void 0||et.attribute!==bt||bt&&et.data!==bt.data)return!0;k++}return r.attributesNum!==k||r.index!==I}function g(D,L,B,I){let z={},q=L.attributes,k=0,j=B.getAttributes();for(let Z in j)if(j[Z].location>=0){let et=q[Z];et===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(et=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(et=D.instanceColor));let bt={};bt.attribute=et,et&&et.data&&(bt.data=et.data),z[Z]=bt,k++}r.attributes=z,r.attributesNum=k,r.index=I}function _(){let D=r.newAttributes;for(let L=0,B=D.length;L<B;L++)D[L]=0}function m(D){p(D,0)}function p(D,L){let B=r.newAttributes,I=r.enabledAttributes,z=r.attributeDivisors;B[D]=1,I[D]===0&&(s.enableVertexAttribArray(D),I[D]=1),z[D]!==L&&(s.vertexAttribDivisor(D,L),z[D]=L)}function S(){let D=r.newAttributes,L=r.enabledAttributes;for(let B=0,I=L.length;B<I;B++)L[B]!==D[B]&&(s.disableVertexAttribArray(B),L[B]=0)}function C(D,L,B,I,z,q,k){k===!0?s.vertexAttribIPointer(D,L,B,z,q):s.vertexAttribPointer(D,L,B,I,z,q)}function y(D,L,B,I){_();let z=I.attributes,q=B.getAttributes(),k=L.defaultAttributeValues;for(let j in q){let Z=q[j];if(Z.location>=0){let P=z[j];if(P===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(P=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(P=D.instanceColor)),P!==void 0){let et=P.normalized,bt=P.itemSize,Tt=t.get(P);if(Tt===void 0)continue;let Ht=Tt.buffer,zt=Tt.type,Wt=Tt.bytesPerElement,K=zt===s.INT||zt===s.UNSIGNED_INT||P.gpuType===Ec;if(P.isInterleavedBufferAttribute){let tt=P.data,gt=tt.stride,Bt=P.offset;if(tt.isInstancedInterleavedBuffer){for(let st=0;st<Z.locationSize;st++)p(Z.location+st,tt.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let st=0;st<Z.locationSize;st++)m(Z.location+st);s.bindBuffer(s.ARRAY_BUFFER,Ht);for(let st=0;st<Z.locationSize;st++)C(Z.location+st,bt/Z.locationSize,zt,et,gt*Wt,(Bt+bt/Z.locationSize*st)*Wt,K)}else{if(P.isInstancedBufferAttribute){for(let tt=0;tt<Z.locationSize;tt++)p(Z.location+tt,P.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let tt=0;tt<Z.locationSize;tt++)m(Z.location+tt);s.bindBuffer(s.ARRAY_BUFFER,Ht);for(let tt=0;tt<Z.locationSize;tt++)C(Z.location+tt,bt/Z.locationSize,zt,et,bt*Wt,bt/Z.locationSize*tt*Wt,K)}}else if(k!==void 0){let et=k[j];if(et!==void 0)switch(et.length){case 2:s.vertexAttrib2fv(Z.location,et);break;case 3:s.vertexAttrib3fv(Z.location,et);break;case 4:s.vertexAttrib4fv(Z.location,et);break;default:s.vertexAttrib1fv(Z.location,et)}}}}S()}function M(){w();for(let D in n){let L=n[D];for(let B in L){let I=L[B];for(let z in I){let q=I[z];for(let k in q)h(q[k].object),delete q[k];delete I[z]}}delete n[D]}}function b(D){if(n[D.id]===void 0)return;let L=n[D.id];for(let B in L){let I=L[B];for(let z in I){let q=I[z];for(let k in q)h(q[k].object),delete q[k];delete I[z]}}delete n[D.id]}function E(D){for(let L in n){let B=n[L];for(let I in B){let z=B[I];if(z[D.id]===void 0)continue;let q=z[D.id];for(let k in q)h(q[k].object),delete q[k];delete z[D.id]}}}function v(D){for(let L in n){let B=n[L],I=D.isInstancedMesh===!0?D.id:0,z=B[I];if(z!==void 0){for(let q in z){let k=z[q];for(let j in k)h(k[j].object),delete k[j];delete z[q]}delete B[I],Object.keys(B).length===0&&delete n[L]}}}function w(){R(),o=!0,r!==i&&(r=i,c(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:w,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function Ty(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function wy(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==_i&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let v=E===Di&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Zn&&E!==gi&&!v&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Yt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Yt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),C=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:C,maxFragmentUniforms:y,maxSamples:M,samples:b}}function Ey(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Ci,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{let S=r?0:n,C=S*4,y=p.clippingState||null;l.value=y,y=h(g,u,C,f);for(let M=0;M!==C;++M)y[M]=e[M];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let C=0,y=f;C!==_;++C,y+=4)o.copy(d[C]).applyMatrix4(S,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Iy(s){let t=[],e=[],n=s,i=s-_o+1+Ay;for(let r=0;r<i;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),_=new Float32Array(f*u*d);for(let p=0;p<d;p++){let S=p%3*2/3-1,C=p>2?0:-1,y=[S,C,0,S+2/3,C,0,S+2/3,C+1,0,S,C,0,S+2/3,C+1,0,S,C+1,0];g.set(y,f*u*p);for(let M=0;M<u;M++){let b=h[M*2]*2-1,E=h[M*2+1]*2-1;p===0?dr.set(1,E,b):p===1?dr.set(-b,1,-E):p===2?dr.set(-b,E,1):p===3?dr.set(-1,E,-b):p===4?dr.set(-b,-1,E):dr.set(b,E,-1),dr.toArray(_,(p*u+M)*f)}}let m=new pn;m.setAttribute("position",new Fn(g,f)),m.setAttribute("outputDirection",new Fn(_,f)),e.push(new xe(m,null)),n>_o&&n--}return{lodMeshes:e,sizeLods:t}}function fm(s,t,e){let n=new qn(s,t,e);return n.texture.mapping=Ca,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function go(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Ly(s,t,e){return new ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ry,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Dy(s,t,e){return new ni({name:"SphericalGaussianBlur",defines:{SAMPLES:Cy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:mh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function dm(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mh(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function pm(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function mh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ny(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===bc||f===Tc)if(t.has(u)){let g=t.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let _=new dh(g.height);return _.fromEquirectangularTexture(s,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,g=f===bc||f===Tc,_=f===Bs||f===ur;if(g||_){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new vo(s)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let S=u.image;return g&&S&&S.height>0||_&&S&&l(S)?(n===null&&(n=new vo(s)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===bc?u.mapping=Bs:f===Tc&&(u.mapping=ur),u}function l(u){let f=0,g=6;for(let _=0;_<g;_++)u[_]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function Uy(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&rr("WebGLRenderer: "+n+" extension not supported."),i}}}function Fy(s,t,e,n){let i={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete i[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],s.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,_=0;if(g===void 0)return;if(f!==null){let S=f.array;_=f.version;for(let C=0,y=S.length;C<y;C+=3){let M=S[C+0],b=S[C+1],E=S[C+2];u.push(M,b,b,E,E,M)}}else{let S=g.array;_=g.version;for(let C=0,y=S.length/3-1;C<y;C+=3){let M=C+0,b=C+1,E=C+2;u.push(M,b,b,E,E,M)}}let m=new(g.count>=65535?aa:oa)(u,1);m.version=_;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Oy(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let _=0;for(let m=0;m<f;m++)_+=u[m];e.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function By(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:qt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function zy(s,t,e){let n=new WeakMap,i=new Ue;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let w=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],C=0;f===!0&&(C=1),g===!0&&(C=2),_===!0&&(C=3);let y=a.attributes.position.count*C,M=1;y>t.maxTextureSize&&(M=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let b=new Float32Array(y*M*4*d),E=new ia(b,y,M,d);E.type=gi,E.needsUpdate=!0;let v=C*4;for(let R=0;R<d;R++){let D=m[R],L=p[R],B=S[R],I=y*M*4*R;for(let z=0;z<D.count;z++){let q=z*v;f===!0&&(i.fromBufferAttribute(D,z),b[I+q+0]=i.x,b[I+q+1]=i.y,b[I+q+2]=i.z,b[I+q+3]=0),g===!0&&(i.fromBufferAttribute(L,z),b[I+q+4]=i.x,b[I+q+5]=i.y,b[I+q+6]=i.z,b[I+q+7]=0),_===!0&&(i.fromBufferAttribute(B,z),b[I+q+8]=i.x,b[I+q+9]=i.y,b[I+q+10]=i.z,b[I+q+11]=B.itemSize===4?i.w:1)}}u={count:d,texture:E,size:new ne(y,M)},n.set(a,u),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function ky(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}function Gy(s,t,e,n,i,r){let o=new qn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new pn;c.setAttribute("position",new Ne([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ne([0,2,0,0,2,0],2));let h=new oc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new xe(c,h),u=new co(-1,1,1,-1,0,1),f=null,g=null,_=!1,m,p=null,S=[],C=!1;this.setSize=function(y,M){o.setSize(y,M),a!==null&&a.setSize(y,M),l!==null&&l.setSize(y,M);for(let b=0;b<S.length;b++){let E=S[b];E.setSize&&E.setSize(y,M)}},this.setEffects=function(y){S=y,C=S.length>0&&S[0].isRenderPass===!0;let M=o.width,b=o.height;S.length>0&&a===null&&(a=new qn(M,b,{type:Di,depthBuffer:!1,stencilBuffer:!1}),l=new qn(M,b,{type:Di,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<S.length;E++){let v=S[E];v.setSize&&v.setSize(M,b)}},this.begin=function(y,M){if(_||y.toneMapping===Ii&&S.length===0)return!1;if(p=M,M!==null){let b=M.width,E=M.height;(o.width!==b||o.height!==E)&&this.setSize(b,E)}return C===!1&&y.setRenderTarget(o),m=y.toneMapping,y.toneMapping=Ii,!0},this.hasRenderPass=function(){return C},this.end=function(y,M){y.toneMapping=m,_=!0;let b=o,E=a;for(let v=0;v<S.length;v++){let w=S[v];w.enabled!==!1&&(w.render(y,E,b,M),w.needsSwap!==!1&&(b=E,E=E===a?l:a))}if(f!==y.outputColorSpace||g!==y.toneMapping){f=y.outputColorSpace,g=y.toneMapping,h.defines={},le.getTransfer(f)===ge&&(h.defines.SRGB_TRANSFER="");let v=Vy[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(p),y.render(d,u),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}function yo(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=mm[i];if(r===void 0&&(r=new Float32Array(i),mm[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function en(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function nn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function gh(s,t){let e=gm[t];e===void 0&&(e=new Int32Array(t),gm[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Hy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Wy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;s.uniform2fv(this.addr,t),nn(e,t)}}function Xy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(en(e,t))return;s.uniform3fv(this.addr,t),nn(e,t)}}function Yy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;s.uniform4fv(this.addr,t),nn(e,t)}}function qy(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;vm.set(n),s.uniformMatrix2fv(this.addr,!1,vm),nn(e,n)}}function Zy(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;xm.set(n),s.uniformMatrix3fv(this.addr,!1,xm),nn(e,n)}}function Jy(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;_m.set(n),s.uniformMatrix4fv(this.addr,!1,_m),nn(e,n)}}function $y(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Ky(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;s.uniform2iv(this.addr,t),nn(e,t)}}function Qy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;s.uniform3iv(this.addr,t),nn(e,t)}}function jy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;s.uniform4iv(this.addr,t),nn(e,t)}}function tS(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function eS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;s.uniform2uiv(this.addr,t),nn(e,t)}}function nS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;s.uniform3uiv(this.addr,t),nn(e,t)}}function iS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;s.uniform4uiv(this.addr,t),nn(e,t)}}function sS(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(bf.compareFunction=e.isReversedDepthBuffer()?hh:ch,r=bf):r=Nm,e.setTexture2D(t||r,i)}function rS(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Fm,i)}function oS(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Om,i)}function aS(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Um,i)}function lS(s){switch(s){case 5126:return Hy;case 35664:return Wy;case 35665:return Xy;case 35666:return Yy;case 35674:return qy;case 35675:return Zy;case 35676:return Jy;case 5124:case 35670:return $y;case 35667:case 35671:return Ky;case 35668:case 35672:return Qy;case 35669:case 35673:return jy;case 5125:return tS;case 36294:return eS;case 36295:return nS;case 36296:return iS;case 35678:case 36198:case 36298:case 36306:case 35682:return sS;case 35679:case 36299:case 36307:return rS;case 35680:case 36300:case 36308:case 36293:return oS;case 36289:case 36303:case 36311:case 36292:return aS}}function cS(s,t){s.uniform1fv(this.addr,t)}function hS(s,t){let e=yo(t,this.size,2);s.uniform2fv(this.addr,e)}function uS(s,t){let e=yo(t,this.size,3);s.uniform3fv(this.addr,e)}function fS(s,t){let e=yo(t,this.size,4);s.uniform4fv(this.addr,e)}function dS(s,t){let e=yo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function pS(s,t){let e=yo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function mS(s,t){let e=yo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function gS(s,t){s.uniform1iv(this.addr,t)}function _S(s,t){s.uniform2iv(this.addr,t)}function xS(s,t){s.uniform3iv(this.addr,t)}function vS(s,t){s.uniform4iv(this.addr,t)}function yS(s,t){s.uniform1uiv(this.addr,t)}function SS(s,t){s.uniform2uiv(this.addr,t)}function MS(s,t){s.uniform3uiv(this.addr,t)}function bS(s,t){s.uniform4uiv(this.addr,t)}function TS(s,t,e){let n=this.cache,i=t.length,r=gh(e,i);en(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=bf:o=Nm;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function wS(s,t,e){let n=this.cache,i=t.length,r=gh(e,i);en(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Fm,r[o])}function ES(s,t,e){let n=this.cache,i=t.length,r=gh(e,i);en(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Om,r[o])}function AS(s,t,e){let n=this.cache,i=t.length,r=gh(e,i);en(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Um,r[o])}function CS(s){switch(s){case 5126:return cS;case 35664:return hS;case 35665:return uS;case 35666:return fS;case 35674:return dS;case 35675:return pS;case 35676:return mS;case 5124:case 35670:return gS;case 35667:case 35671:return _S;case 35668:case 35672:return xS;case 35669:case 35673:return vS;case 5125:return yS;case 36294:return SS;case 36295:return MS;case 36296:return bS;case 35678:case 36198:case 36298:case 36306:case 35682:return TS;case 35679:case 36299:case 36307:return wS;case 35680:case 36300:case 36308:case 36293:return ES;case 36289:case 36303:case 36311:case 36292:return AS}}function ym(s,t){s.seq.push(t),s.map[t.id]=t}function RS(s,t,e){let n=s.name,i=n.length;for(Sf.lastIndex=0;;){let r=Sf.exec(n),o=Sf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ym(e,c===void 0?new Tf(a,s,t):new wf(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new Ef(a),ym(e,d)),e=d}}}function Sm(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}function LS(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function DS(s){le._getMatrix(Mm,le.workingColorSpace,s);let t=`mat3( ${Mm.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(s)){case na:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return Yt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function bm(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+LS(s.getShaderSource(t),a)}else return r}function NS(s,t){let e=DS(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function FS(s,t){let e=US[t];return e===void 0?(Yt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function OS(){le.getLuminanceCoefficients(fh);let s=fh.x.toFixed(4),t=fh.y.toFixed(4),e=fh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ka).join(`
`)}function zS(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function kS(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ka(s){return s!==""}function Tm(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wm(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function Af(s){return s.replace(VS,HS)}function HS(s,t){let e=ee[t];if(e===void 0){let n=GS.get(t);if(n!==void 0)e=ee[n],Yt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Af(e)}function Em(s){return s.replace(WS,XS)}function XS(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Am(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function qS(s){return YS[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function JS(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":ZS[s.envMapMode]||"ENVMAP_TYPE_CUBE"}function KS(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":$S[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}function jS(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":QS[s.combine]||"ENVMAP_BLENDING_NONE"}function tM(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function eM(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=qS(e),c=JS(e),h=KS(e),d=jS(e),u=tM(e),f=BS(e),g=zS(r),_=i.createProgram(),m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ka).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ka).join(`
`),p.length>0&&(p+=`
`)):(m=[Am(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ka).join(`
`),p=[Am(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ii?"#define TONE_MAPPING":"",e.toneMapping!==Ii?ee.tonemapping_pars_fragment:"",e.toneMapping!==Ii?FS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,NS("linearToOutputTexel",e.outputColorSpace),OS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ka).join(`
`)),o=Af(o),o=Tm(o,e),o=wm(o,e),a=Af(a),a=Tm(a,e),a=wm(a,e),o=Em(o),a=Em(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===rf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let C=S+m+o,y=S+p+a,M=Sm(i,i.VERTEX_SHADER,C),b=Sm(i,i.FRAGMENT_SHADER,y);i.attachShader(_,M),i.attachShader(_,b),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(D){if(s.debug.checkShaderErrors){let L=i.getProgramInfoLog(_)||"",B=i.getShaderInfoLog(M)||"",I=i.getShaderInfoLog(b)||"",z=L.trim(),q=B.trim(),k=I.trim(),j=!0,Z=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,M,b);else{let P=bm(i,M,"vertex"),et=bm(i,b,"fragment");qt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+P+`
`+et)}else z!==""?Yt("WebGLProgram: Program Info Log:",z):(q===""||k==="")&&(Z=!1);Z&&(D.diagnostics={runnable:j,programLog:z,vertexShader:{log:q,prefix:m},fragmentShader:{log:k,prefix:p}})}i.deleteShader(M),i.deleteShader(b),v=new xo(i,_),w=kS(i,_)}let v;this.getUniforms=function(){return v===void 0&&E(this),v};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(_,PS)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=IS++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=b,this}function iM(s){return s===Vs||s===Na||s===Ua}function sM(s,t,e,n,i,r){let o=new sa,a=new Cf,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,w,R,D,L,B){let I=D.fog,z=L.geometry,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,j=t.get(v.envMap||q,k),Z=j&&j.mapping===Ca?j.image.height:null,P=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Yt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let et=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,bt=et!==void 0?et.length:0,Tt=0;z.morphAttributes.position!==void 0&&(Tt=1),z.morphAttributes.normal!==void 0&&(Tt=2),z.morphAttributes.color!==void 0&&(Tt=3);let Ht,zt,Wt,K;if(P){let Ot=Ki[P];Ht=Ot.vertexShader,zt=Ot.fragmentShader}else{Ht=v.vertexShader,zt=v.fragmentShader;let Ot=a.getVertexShaderStage(v),ht=a.getFragmentShaderStage(v);a.update(v,Ot,ht),Wt=Ot.id,K=ht.id}let tt=s.getRenderTarget(),gt=s.state.buffers.depth.getReversed(),Bt=L.isInstancedMesh===!0,st=L.isBatchedMesh===!0,Dt=!!v.map,kt=!!v.matcap,Lt=!!j,Xt=!!v.aoMap,jt=!!v.lightMap,H=!!v.bumpMap&&v.wireframe===!1,Qt=!!v.normalMap,pe=!!v.displacementMap,Ee=!!v.emissiveMap,Gt=!!v.metalnessMap,fe=!!v.roughnessMap,F=v.anisotropy>0,Ae=v.clearcoat>0,it=v.dispersion>0,A=v.retroreflectivity>0,x=v.iridescence>0,O=v.sheen>0,V=v.transmission>0,W=F&&!!v.anisotropyMap,ct=Ae&&!!v.clearcoatMap,lt=Ae&&!!v.clearcoatNormalMap,Q=Ae&&!!v.clearcoatRoughnessMap,J=x&&!!v.iridescenceMap,rt=x&&!!v.iridescenceThicknessMap,vt=O&&!!v.sheenColorMap,dt=O&&!!v.sheenRoughnessMap,mt=!!v.specularMap,ut=!!v.specularColorMap,Ct=!!v.specularIntensityMap,Ft=V&&!!v.transmissionMap,N=V&&!!v.thicknessMap,pt=!!v.gradientMap,nt=!!v.alphaMap,_t=v.alphaTest>0,yt=!!v.alphaHash,ot=!!v.extensions,ft=Ii;v.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(ft=s.toneMapping);let at={shaderID:P,shaderType:v.type,shaderName:v.name,vertexShader:Ht,fragmentShader:zt,defines:v.defines,customVertexShaderID:Wt,customFragmentShaderID:K,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:st,batchingColor:st&&L._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&L.instanceColor!==null,instancingMorph:Bt&&L.morphTexture!==null,outputColorSpace:tt===null?s.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Dt,matcap:kt,envMap:Lt,envMapMode:Lt&&j.mapping,envMapCubeUVHeight:Z,aoMap:Xt,lightMap:jt,bumpMap:H,normalMap:Qt,displacementMap:pe,emissiveMap:Ee,normalMapObjectSpace:Qt&&v.normalMapType===Zp,normalMapTangentSpace:Qt&&v.normalMapType===Fa,packedNormalMap:Qt&&v.normalMapType===Fa&&iM(v.normalMap.format),metalnessMap:Gt,roughnessMap:fe,anisotropy:F,anisotropyMap:W,clearcoat:Ae,clearcoatMap:ct,clearcoatNormalMap:lt,clearcoatRoughnessMap:Q,dispersion:it,retroreflection:A,iridescence:x,iridescenceMap:J,iridescenceThicknessMap:rt,sheen:O,sheenColorMap:vt,sheenRoughnessMap:dt,specularMap:mt,specularColorMap:ut,specularIntensityMap:Ct,transmission:V,transmissionMap:Ft,thicknessMap:N,gradientMap:pt,opaque:v.transparent===!1&&v.blending===uo&&v.alphaToCoverage===!1,alphaMap:nt,alphaTest:_t,alphaHash:yt,combine:v.combine,mapUv:Dt&&g(v.map.channel),aoMapUv:Xt&&g(v.aoMap.channel),lightMapUv:jt&&g(v.lightMap.channel),bumpMapUv:H&&g(v.bumpMap.channel),normalMapUv:Qt&&g(v.normalMap.channel),displacementMapUv:pe&&g(v.displacementMap.channel),emissiveMapUv:Ee&&g(v.emissiveMap.channel),metalnessMapUv:Gt&&g(v.metalnessMap.channel),roughnessMapUv:fe&&g(v.roughnessMap.channel),anisotropyMapUv:W&&g(v.anisotropyMap.channel),clearcoatMapUv:ct&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:lt&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:dt&&g(v.sheenRoughnessMap.channel),specularMapUv:mt&&g(v.specularMap.channel),specularColorMapUv:ut&&g(v.specularColorMap.channel),specularIntensityMapUv:Ct&&g(v.specularIntensityMap.channel),transmissionMapUv:Ft&&g(v.transmissionMap.channel),thicknessMapUv:N&&g(v.thicknessMap.channel),alphaMapUv:nt&&g(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Qt||F),vertexNormals:!!z.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!z.attributes.uv&&(Dt||nt),fog:!!I,useFog:v.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||z.attributes.normal===void 0&&Qt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:gt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Tt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:ft,decodeVideoTexture:Dt&&v.map.isVideoTexture===!0&&le.getTransfer(v.map.colorSpace)===ge,decodeVideoTextureEmissive:Ee&&v.emissiveMap.isVideoTexture===!0&&le.getTransfer(v.emissiveMap.colorSpace)===ge,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===mi,flipSided:v.side===mn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ot&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&v.extensions.multiDraw===!0||st)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return at.vertexUv1s=l.has(1),at.vertexUv2s=l.has(2),at.vertexUv3s=l.has(3),l.clear(),at}function m(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let R in v.defines)w.push(R),w.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(p(w,v),S(w,v),w.push(s.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function p(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function S(v,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function C(v){let w=f[v.type],R;if(w){let D=Ki[w];R=lm.clone(D.uniforms)}else R=v.uniforms;return R}function y(v,w){let R=h.get(w);return R!==void 0?++R.usedTimes:(R=new eM(s,w,v,i),c.push(R),h.set(w,R)),R}function M(v){if(--v.usedTimes===0){let w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function b(v){a.remove(v)}function E(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:C,acquireProgram:y,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:E}}function rM(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function oM(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Cm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Rm(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,_,m,p){let S=s[t];return S===void 0?(S={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:p},s[t]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=g,S.materialVariant=o(u),S.groupOrder=_,S.renderOrder=u.renderOrder,S.z=m,S.group=p),t++,S}function l(u,f,g,_,m,p,S){S.reversedDepth===!0&&(m=-m);let C=a(u,f,g,_,m,p);g.transmission>0?n.push(C):g.transparent===!0?i.push(C):e.push(C)}function c(u,f,g,_,m,p){let S=a(u,f,g,_,m,p);g.transmission>0?n.unshift(S):g.transparent===!0?i.unshift(S):e.unshift(S)}function h(u,f){e.length>1&&e.sort(u||oM),n.length>1&&n.sort(f||Cm),i.length>1&&i.sort(f||Cm)}function d(){for(let u=t,f=s.length;u<f;u++){let g=s[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function aM(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Rm,s.set(n,[o])):i>=r.length?(o=new Rm,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function lM(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new Zt};break;case"SpotLight":e={position:new G,direction:new G,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new G,halfWidth:new G,halfHeight:new G};break}return s[t.id]=e,e}}}function cM(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}function uM(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function fM(s){let t=new lM,e=cM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);let i=new G,r=new be,o=new be;function a(c){let h=0,d=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,S=0,C=0,y=0,M=0,b=0,E=0,v=0,w=0,R=0;c.sort(uM);for(let L=0,B=c.length;L<B;L++){let I=c[L],z=I.color,q=I.intensity,k=I.distance,j=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Vs?j=I.shadow.map.texture:j=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=z.r*q,d+=z.g*q,u+=z.b*q;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(I.sh.coefficients[Z],q);R++}else if(I.isSunLight){let Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let P=I.shadow,et=e.get(I);et.shadowIntensity=P.intensity,et.shadowBias=P.bias,et.shadowNormalBias=P.normalBias,et.shadowRadius=P.radius,et.shadowMapSize.copy(P.mapSize).multiply(P.getFrameExtents()),n.sunShadow[g]=et,n.sunShadowMap[g]=j;let bt=P.getViewportCount();for(let Tt=0;Tt<bt;Tt++)n.sunShadowMatrix[_+Tt]=P.getMatrix(Tt),n.sunShadowCascade[_+Tt]=P._cascadeData[Tt];_+=bt,g++}n.sun[f]=Z,f++}else if(I.isDirectionalLight){let Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let P=I.shadow,et=e.get(I);et.shadowIntensity=P.intensity,et.shadowBias=P.bias,et.shadowNormalBias=P.normalBias,et.shadowRadius=P.radius,et.shadowMapSize=P.mapSize,n.directionalShadow[m]=et,n.directionalShadowMap[m]=j,n.directionalShadowMatrix[m]=I.shadow.matrix,M++}n.directional[m]=Z,m++}else if(I.isSpotLight){let Z=t.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(z).multiplyScalar(q),Z.distance=k,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,n.spot[S]=Z;let P=I.shadow;if(I.map&&(n.spotLightMap[v]=I.map,v++,P.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[S]=P.matrix,I.castShadow){let et=e.get(I);et.shadowIntensity=P.intensity,et.shadowBias=P.bias,et.shadowNormalBias=P.normalBias,et.shadowRadius=P.radius,et.shadowMapSize=P.mapSize,n.spotShadow[S]=et,n.spotShadowMap[S]=j,E++}S++}else if(I.isRectAreaLight){let Z=t.get(I);Z.color.copy(z).multiplyScalar(q),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),n.rectArea[C]=Z,C++}else if(I.isPointLight){let Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){let P=I.shadow,et=e.get(I);et.shadowIntensity=P.intensity,et.shadowBias=P.bias,et.shadowNormalBias=P.normalBias,et.shadowRadius=P.radius,et.shadowMapSize=P.mapSize,et.shadowCameraNear=P.camera.near,et.shadowCameraFar=P.camera.far,n.pointShadow[p]=et,n.pointShadowMap[p]=j,n.pointShadowMatrix[p]=I.shadow.matrix,b++}n.point[p]=Z,p++}else if(I.isHemisphereLight){let Z=t.get(I);Z.skyColor.copy(I.color).multiplyScalar(q),Z.groundColor.copy(I.groundColor).multiplyScalar(q),n.hemi[y]=Z,y++}}C>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let D=n.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==S||D.rectAreaLength!==C||D.hemiLength!==y||D.numSunShadows!==g||D.numDirectionalShadows!==M||D.numPointShadows!==b||D.numSpotShadows!==E||D.numSpotMaps!==v||D.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=S,n.rectArea.length=C,n.point.length=p,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+v-w,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=S,D.rectAreaLength=C,D.hemiLength=y,D.numSunShadows=g,D.numDirectionalShadows=M,D.numPointShadows=b,D.numSpotShadows=E,D.numSpotMaps=v,D.numLightProbes=R,n.version=hM++)}function l(c,h){let d=0,u=0,f=0,g=0,_=0,m=0,p=h.matrixWorldInverse;for(let S=0,C=c.length;S<C;S++){let y=c[S];if(y.isSunLight){let M=n.sun[d];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),d++}else if(y.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),u++}else if(y.isSpotLight){let M=n.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),g++}else if(y.isRectAreaLight){let M=n.rectArea[_];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:n}}function Pm(s){let t=new fM(s),e=[],n=[],i=[];function r(u){d.camera=u,e.length=0,n.length=0,i.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function dM(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Pm(s),t.set(i,[a])):r>=o.length?(a=new Pm(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function xM(s,t,e){let n=new ro,i=new ne,r=new ne,o=new Ue,a=new ac,l=new lc,c={},h=e.maxTextureSize,d={[Os]:mn,[mn]:Os,[mi]:mi},u=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:pM,fragmentShader:mM}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new pn;g.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new xe(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ea;let p=this.type;this.render=function(b,E,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===wp&&(Yt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ea);let w=s.getRenderTarget(),R=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Ji),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let B=p!==this.type;B&&E.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(z=>z.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,z=b.length;I<z;I++){let q=b[I],k=q.shadow;if(k===void 0){Yt("WebGLShadowMap:",q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);let j=k.getFrameExtents();i.multiply(j),r.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/j.x),i.x=r.x*j.x,k.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/j.y),i.y=r.y*j.y,k.mapSize.y=r.y));let Z=s.state.buffers.depth.getReversed();if(k.camera._reversedDepth=Z,k.map===null||B===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===ho){if(q.isPointLight){Yt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new qn(i.x,i.y,{format:Vs,type:Di,minFilter:dn,magFilter:dn,generateMipmaps:!1}),k.map.texture.name=q.name+".shadowMap",k.map.depthTexture=new Ls(i.x,i.y,gi),k.map.depthTexture.name=q.name+".shadowMapDepth",k.map.depthTexture.format=Gi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=cn,k.map.depthTexture.magFilter=cn}else q.isPointLight?(k.map=new dh(i.x),k.map.depthTexture=new rc(i.x,Li)):(k.map=new qn(i.x,i.y),k.map.depthTexture=new Ls(i.x,i.y,Li)),k.map.depthTexture.name=q.name+".shadowMap",k.map.depthTexture.format=Gi,this.type===Ea?(k.map.depthTexture.compareFunction=Z?hh:ch,k.map.depthTexture.minFilter=dn,k.map.depthTexture.magFilter=dn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=cn,k.map.depthTexture.magFilter=cn);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==i.x||k.map.height!==i.y)&&k.map.setSize(i.x,i.y);let P=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();q.isPointLight!==!0&&k.updateMatrices(q,v);for(let et=0;et<P;et++){let bt=k.getCamera(et);if(q.isPointLight){let Tt=k.camera,Ht=k.matrix,zt=q.distance||Tt.far;zt!==Tt.far&&(Tt.far=zt,Tt.updateProjectionMatrix()),za.setFromMatrixPosition(q.matrixWorld),Tt.position.copy(za),Mf.copy(Tt.position),Mf.add(gM[et]),Tt.up.copy(_M[et]),Tt.lookAt(Mf),Tt.updateMatrixWorld(),Ht.makeTranslation(-za.x,-za.y,-za.z),Im.multiplyMatrices(Tt.projectionMatrix,Tt.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Im,Tt.coordinateSystem,Tt.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)s.setRenderTarget(k.map,et),s.clear();else{et===0&&(s.setRenderTarget(k.map),s.clear());let Tt=k.getViewport(et);o.set(r.x*Tt.x,r.y*Tt.y,r.x*Tt.z,r.y*Tt.w),L.viewport(o)}n=k.getFrustum(et),y(E,v,bt,q,this.type)}k.isPointLightShadow!==!0&&this.type===ho&&S(k,v),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(w,R,D)};function S(b,E){let v=t.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new qn(i.x,i.y,{format:Vs,type:Di}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(E,null,v,u,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(E,null,v,f,_,null)}function C(b,E,v,w){let R=null,D=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)R=D;else if(R=v.isPointLight===!0?l:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let L=R.uuid,B=E.uuid,I=c[L];I===void 0&&(I={},c[L]=I);let z=I[B];z===void 0&&(z=R.clone(),I[B]=z,E.addEventListener("dispose",M)),R=z}if(R.visible=E.visible,R.wireframe=E.wireframe,w===ho?R.side=E.shadowSide!==null?E.shadowSide:E.side:R.side=E.shadowSide!==null?E.shadowSide:d[E.side],R.alphaMap=E.alphaMap,R.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,R.map=E.map,R.clipShadows=E.clipShadows,R.clippingPlanes=E.clippingPlanes,R.clipIntersection=E.clipIntersection,R.displacementMap=E.displacementMap,R.displacementScale=E.displacementScale,R.displacementBias=E.displacementBias,R.wireframeLinewidth=E.wireframeLinewidth,R.linewidth=E.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let L=s.properties.get(R);L.light=v}return R}function y(b,E,v,w,R){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===ho)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);let B=t.update(b),I=b.material;if(Array.isArray(I)){let z=B.groups;for(let q=0,k=z.length;q<k;q++){let j=z[q],Z=I[j.materialIndex];if(Z&&Z.visible){let P=C(b,Z,w,R);b.onBeforeShadow(s,b,E,v,B,P,j),s.renderBufferDirect(v,null,B,P,b,j),b.onAfterShadow(s,b,E,v,B,P,j)}}}else if(I.visible){let z=C(b,I,w,R);b.onBeforeShadow(s,b,E,v,B,z,null),s.renderBufferDirect(v,null,B,z,b,null),b.onAfterShadow(s,b,E,v,B,z,null)}}let L=b.children;for(let B=0,I=L.length;B<I;B++)y(L[B],E,v,w,R)}function M(b){b.target.removeEventListener("dispose",M);for(let v in c){let w=c[v],R=b.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function vM(s,t){function e(){let N=!1,pt=new Ue,nt=null,_t=new Ue(0,0,0,0);return{setMask:function(yt){nt!==yt&&!N&&(s.colorMask(yt,yt,yt,yt),nt=yt)},setLocked:function(yt){N=yt},setClear:function(yt,ot,ft,at,Ot){Ot===!0&&(yt*=at,ot*=at,ft*=at),pt.set(yt,ot,ft,at),_t.equals(pt)===!1&&(s.clearColor(yt,ot,ft,at),_t.copy(pt))},reset:function(){N=!1,nt=null,_t.set(-1,0,0,0)}}}function n(){let N=!1,pt=!1,nt=null,_t=null,yt=null;return{setReversed:function(ot){if(pt!==ot){let ft=t.get("EXT_clip_control");ot?ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.ZERO_TO_ONE_EXT):ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.NEGATIVE_ONE_TO_ONE_EXT),pt=ot;let at=yt;yt=null,this.setClear(at)}},getReversed:function(){return pt},setTest:function(ot){ot?tt(s.DEPTH_TEST):gt(s.DEPTH_TEST)},setMask:function(ot){nt!==ot&&!N&&(s.depthMask(ot),nt=ot)},setFunc:function(ot){if(pt&&(ot=om[ot]),_t!==ot){switch(ot){case Xl:s.depthFunc(s.NEVER);break;case Yl:s.depthFunc(s.ALWAYS);break;case ql:s.depthFunc(s.LESS);break;case jr:s.depthFunc(s.LEQUAL);break;case Zl:s.depthFunc(s.EQUAL);break;case Jl:s.depthFunc(s.GEQUAL);break;case $l:s.depthFunc(s.GREATER);break;case Kl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_t=ot}},setLocked:function(ot){N=ot},setClear:function(ot){yt!==ot&&(yt=ot,pt&&(ot=1-ot),s.clearDepth(ot))},reset:function(){N=!1,nt=null,_t=null,yt=null,pt=!1}}}function i(){let N=!1,pt=null,nt=null,_t=null,yt=null,ot=null,ft=null,at=null,Ot=null;return{setTest:function(ht){N||(ht?tt(s.STENCIL_TEST):gt(s.STENCIL_TEST))},setMask:function(ht){pt!==ht&&!N&&(s.stencilMask(ht),pt=ht)},setFunc:function(ht,Vt,Rt){(nt!==ht||_t!==Vt||yt!==Rt)&&(s.stencilFunc(ht,Vt,Rt),nt=ht,_t=Vt,yt=Rt)},setOp:function(ht,Vt,Rt){(ot!==ht||ft!==Vt||at!==Rt)&&(s.stencilOp(ht,Vt,Rt),ot=ht,ft=Vt,at=Rt)},setLocked:function(ht){N=ht},setClear:function(ht){Ot!==ht&&(s.clearStencil(ht),Ot=ht)},reset:function(){N=!1,pt=null,nt=null,_t=null,yt=null,ot=null,ft=null,at=null,Ot=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],_=null,m=!1,p=null,S=null,C=null,y=null,M=null,b=null,E=null,v=new Zt(0,0,0),w=0,R=!1,D=null,L=null,B=null,I=null,z=null,q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,j=0,Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Z)[1]),k=j>=1):Z.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),k=j>=2);let P=null,et={},bt=s.getParameter(s.SCISSOR_BOX),Tt=s.getParameter(s.VIEWPORT),Ht=new Ue().fromArray(bt),zt=new Ue().fromArray(Tt);function Wt(N,pt,nt,_t){let yt=new Uint8Array(4),ot=s.createTexture();s.bindTexture(N,ot),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ft=0;ft<nt;ft++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(pt,0,s.RGBA,1,1,_t,0,s.RGBA,s.UNSIGNED_BYTE,yt):s.texImage2D(pt+ft,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,yt);return ot}let K={};K[s.TEXTURE_2D]=Wt(s.TEXTURE_2D,s.TEXTURE_2D,1),K[s.TEXTURE_CUBE_MAP]=Wt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[s.TEXTURE_2D_ARRAY]=Wt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),K[s.TEXTURE_3D]=Wt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),tt(s.DEPTH_TEST),o.setFunc(jr),H(!1),Qt(ku),tt(s.CULL_FACE),Xt(Ji);function tt(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function gt(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function Bt(N,pt){return u[N]!==pt?(s.bindFramebuffer(N,pt),u[N]=pt,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=pt),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=pt),!0):!1}function st(N,pt){let nt=g,_t=!1;if(N){nt=f.get(pt),nt===void 0&&(nt=[],f.set(pt,nt));let yt=N.textures;if(nt.length!==yt.length||nt[0]!==s.COLOR_ATTACHMENT0){for(let ot=0,ft=yt.length;ot<ft;ot++)nt[ot]=s.COLOR_ATTACHMENT0+ot;nt.length=yt.length,_t=!0}}else nt[0]!==s.BACK&&(nt[0]=s.BACK,_t=!0);_t&&s.drawBuffers(nt)}function Dt(N){return _!==N?(s.useProgram(N),_=N,!0):!1}let kt={[hr]:s.FUNC_ADD,[Ap]:s.FUNC_SUBTRACT,[Cp]:s.FUNC_REVERSE_SUBTRACT};kt[Rp]=s.MIN,kt[Pp]=s.MAX;let Lt={[Ip]:s.ZERO,[Lp]:s.ONE,[Dp]:s.SRC_COLOR,[Hu]:s.SRC_ALPHA,[zp]:s.SRC_ALPHA_SATURATE,[Op]:s.DST_COLOR,[Up]:s.DST_ALPHA,[Np]:s.ONE_MINUS_SRC_COLOR,[Wu]:s.ONE_MINUS_SRC_ALPHA,[Bp]:s.ONE_MINUS_DST_COLOR,[Fp]:s.ONE_MINUS_DST_ALPHA,[kp]:s.CONSTANT_COLOR,[Vp]:s.ONE_MINUS_CONSTANT_COLOR,[Gp]:s.CONSTANT_ALPHA,[Hp]:s.ONE_MINUS_CONSTANT_ALPHA};function Xt(N,pt,nt,_t,yt,ot,ft,at,Ot,ht){if(N===Ji){m===!0&&(gt(s.BLEND),m=!1);return}if(m===!1&&(tt(s.BLEND),m=!0),N!==Ep){if(N!==p||ht!==R){if((S!==hr||M!==hr)&&(s.blendEquation(s.FUNC_ADD),S=hr,M=hr),ht)switch(N){case uo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fo:s.blendFunc(s.ONE,s.ONE);break;case Vu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:qt("WebGLState: Invalid blending: ",N);break}else switch(N){case uo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Vu:qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gu:qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qt("WebGLState: Invalid blending: ",N);break}C=null,y=null,b=null,E=null,v.set(0,0,0),w=0,p=N,R=ht}return}yt=yt||pt,ot=ot||nt,ft=ft||_t,(pt!==S||yt!==M)&&(s.blendEquationSeparate(kt[pt],kt[yt]),S=pt,M=yt),(nt!==C||_t!==y||ot!==b||ft!==E)&&(s.blendFuncSeparate(Lt[nt],Lt[_t],Lt[ot],Lt[ft]),C=nt,y=_t,b=ot,E=ft),(at.equals(v)===!1||Ot!==w)&&(s.blendColor(at.r,at.g,at.b,Ot),v.copy(at),w=Ot),p=N,R=!1}function jt(N,pt){N.side===mi?gt(s.CULL_FACE):tt(s.CULL_FACE);let nt=N.side===mn;pt&&(nt=!nt),H(nt),N.blending===uo&&N.transparent===!1?Xt(Ji):Xt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let _t=N.stencilWrite;a.setTest(_t),_t&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ee(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?tt(s.SAMPLE_ALPHA_TO_COVERAGE):gt(s.SAMPLE_ALPHA_TO_COVERAGE)}function H(N){D!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),D=N)}function Qt(N){N!==bp?(tt(s.CULL_FACE),N!==L&&(N===ku?s.cullFace(s.BACK):N===Tp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):gt(s.CULL_FACE),L=N}function pe(N){N!==B&&(k&&s.lineWidth(N),B=N)}function Ee(N,pt,nt){N?(tt(s.POLYGON_OFFSET_FILL),(I!==pt||z!==nt)&&(I=pt,z=nt,o.getReversed()&&(pt=-pt),s.polygonOffset(pt,nt))):gt(s.POLYGON_OFFSET_FILL)}function Gt(N){N?tt(s.SCISSOR_TEST):gt(s.SCISSOR_TEST)}function fe(N){N===void 0&&(N=s.TEXTURE0+q-1),P!==N&&(s.activeTexture(N),P=N)}function F(N,pt,nt){nt===void 0&&(P===null?nt=s.TEXTURE0+q-1:nt=P);let _t=et[nt];_t===void 0&&(_t={type:void 0,texture:void 0},et[nt]=_t),(_t.type!==N||_t.texture!==pt)&&(P!==nt&&(s.activeTexture(nt),P=nt),s.bindTexture(N,pt||K[N]),_t.type=N,_t.texture=pt)}function Ae(){let N=et[P];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function it(){try{s.compressedTexImage2D(...arguments)}catch(N){qt("WebGLState:",N)}}function A(){try{s.compressedTexImage3D(...arguments)}catch(N){qt("WebGLState:",N)}}function x(){try{s.texSubImage2D(...arguments)}catch(N){qt("WebGLState:",N)}}function O(){try{s.texSubImage3D(...arguments)}catch(N){qt("WebGLState:",N)}}function V(){try{s.compressedTexSubImage2D(...arguments)}catch(N){qt("WebGLState:",N)}}function W(){try{s.compressedTexSubImage3D(...arguments)}catch(N){qt("WebGLState:",N)}}function ct(){try{s.texStorage2D(...arguments)}catch(N){qt("WebGLState:",N)}}function lt(){try{s.texStorage3D(...arguments)}catch(N){qt("WebGLState:",N)}}function Q(){try{s.texImage2D(...arguments)}catch(N){qt("WebGLState:",N)}}function J(){try{s.texImage3D(...arguments)}catch(N){qt("WebGLState:",N)}}function rt(N){return d[N]!==void 0?d[N]:s.getParameter(N)}function vt(N,pt){d[N]!==pt&&(s.pixelStorei(N,pt),d[N]=pt)}function dt(N){Ht.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Ht.copy(N))}function mt(N){zt.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),zt.copy(N))}function ut(N,pt){let nt=c.get(pt);nt===void 0&&(nt=new WeakMap,c.set(pt,nt));let _t=nt.get(N);_t===void 0&&(_t=s.getUniformBlockIndex(pt,N.name),nt.set(N,_t))}function Ct(N,pt){let _t=c.get(pt).get(N);l.get(pt)!==_t&&(s.uniformBlockBinding(pt,_t,N.__bindingPointIndex),l.set(pt,_t))}function Ft(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},P=null,et={},u={},f=new WeakMap,g=[],_=null,m=!1,p=null,S=null,C=null,y=null,M=null,b=null,E=null,v=new Zt(0,0,0),w=0,R=!1,D=null,L=null,B=null,I=null,z=null,Ht.set(0,0,s.canvas.width,s.canvas.height),zt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:tt,disable:gt,bindFramebuffer:Bt,drawBuffers:st,useProgram:Dt,setBlending:Xt,setMaterial:jt,setFlipSided:H,setCullFace:Qt,setLineWidth:pe,setPolygonOffset:Ee,setScissorTest:Gt,activeTexture:fe,bindTexture:F,unbindTexture:Ae,compressedTexImage2D:it,compressedTexImage3D:A,texImage2D:Q,texImage3D:J,pixelStorei:vt,getParameter:rt,updateUBOMapping:ut,uniformBlockBinding:Ct,texStorage2D:ct,texStorage3D:lt,texSubImage2D:x,texSubImage3D:O,compressedTexSubImage2D:V,compressedTexSubImage3D:W,scissor:dt,viewport:mt,reset:Ft}}function yM(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,x){return g?new OffscreenCanvas(A,x):eo("canvas")}function m(A,x,O){let V=1,W=it(A);if((W.width>O||W.height>O)&&(V=O/Math.max(W.width,W.height)),V<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ct=Math.floor(V*W.width),lt=Math.floor(V*W.height);u===void 0&&(u=_(ct,lt));let Q=x?_(ct,lt):u;return Q.width=ct,Q.height=lt,Q.getContext("2d").drawImage(A,0,0,ct,lt),Yt("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+ct+"x"+lt+")."),Q}else return"data"in A&&Yt("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),A;return A}function p(A){return A.generateMipmaps}function S(A){s.generateMipmap(A)}function C(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(A,x,O,V,W,ct=!1){if(A!==null){if(s[A]!==void 0)return s[A];Yt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let lt;V&&(lt=t.get("EXT_texture_norm16"),lt||Yt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=x;if(x===s.RED&&(O===s.FLOAT&&(Q=s.R32F),O===s.HALF_FLOAT&&(Q=s.R16F),O===s.UNSIGNED_BYTE&&(Q=s.R8),O===s.UNSIGNED_SHORT&&lt&&(Q=lt.R16_EXT),O===s.SHORT&&lt&&(Q=lt.R16_SNORM_EXT)),x===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(Q=s.R8UI),O===s.UNSIGNED_SHORT&&(Q=s.R16UI),O===s.UNSIGNED_INT&&(Q=s.R32UI),O===s.BYTE&&(Q=s.R8I),O===s.SHORT&&(Q=s.R16I),O===s.INT&&(Q=s.R32I)),x===s.RG&&(O===s.FLOAT&&(Q=s.RG32F),O===s.HALF_FLOAT&&(Q=s.RG16F),O===s.UNSIGNED_BYTE&&(Q=s.RG8),O===s.UNSIGNED_SHORT&&lt&&(Q=lt.RG16_EXT),O===s.SHORT&&lt&&(Q=lt.RG16_SNORM_EXT)),x===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(Q=s.RG8UI),O===s.UNSIGNED_SHORT&&(Q=s.RG16UI),O===s.UNSIGNED_INT&&(Q=s.RG32UI),O===s.BYTE&&(Q=s.RG8I),O===s.SHORT&&(Q=s.RG16I),O===s.INT&&(Q=s.RG32I)),x===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),O===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),O===s.UNSIGNED_INT&&(Q=s.RGB32UI),O===s.BYTE&&(Q=s.RGB8I),O===s.SHORT&&(Q=s.RGB16I),O===s.INT&&(Q=s.RGB32I)),x===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),O===s.UNSIGNED_INT&&(Q=s.RGBA32UI),O===s.BYTE&&(Q=s.RGBA8I),O===s.SHORT&&(Q=s.RGBA16I),O===s.INT&&(Q=s.RGBA32I)),x===s.RGB&&(O===s.UNSIGNED_SHORT&&lt&&(Q=lt.RGB16_EXT),O===s.SHORT&&lt&&(Q=lt.RGB16_SNORM_EXT),O===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(Q=s.R11F_G11F_B10F)),x===s.RGBA){let J=ct?na:le.getTransfer(W);O===s.FLOAT&&(Q=s.RGBA32F),O===s.HALF_FLOAT&&(Q=s.RGBA16F),O===s.UNSIGNED_BYTE&&(Q=J===ge?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT&&lt&&(Q=lt.RGBA16_EXT),O===s.SHORT&&lt&&(Q=lt.RGBA16_SNORM_EXT),O===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function M(A,x){let O;return A?x===null||x===Li||x===mo?O=s.DEPTH24_STENCIL8:x===gi?O=s.DEPTH32F_STENCIL8:x===po&&(O=s.DEPTH24_STENCIL8,Yt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Li||x===mo?O=s.DEPTH_COMPONENT24:x===gi?O=s.DEPTH_COMPONENT32F:x===po&&(O=s.DEPTH_COMPONENT16),O}function b(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==cn&&A.minFilter!==dn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function E(A){let x=A.target;x.removeEventListener("dispose",E),w(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function v(A){let x=A.target;x.removeEventListener("dispose",v),D(x)}function w(A){let x=n.get(A);if(x.__webglInit===void 0)return;let O=A.source,V=f.get(O);if(V){let W=V[x.__cacheKey];W.usedTimes--,W.usedTimes===0&&R(A),Object.keys(V).length===0&&f.delete(O)}n.remove(A)}function R(A){let x=n.get(A);s.deleteTexture(x.__webglTexture);let O=A.source,V=f.get(O);delete V[x.__cacheKey],o.memory.textures--}function D(A){let x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(x.__webglFramebuffer[V]))for(let W=0;W<x.__webglFramebuffer[V].length;W++)s.deleteFramebuffer(x.__webglFramebuffer[V][W]);else s.deleteFramebuffer(x.__webglFramebuffer[V]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[V])}else{if(Array.isArray(x.__webglFramebuffer))for(let V=0;V<x.__webglFramebuffer.length;V++)s.deleteFramebuffer(x.__webglFramebuffer[V]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let V=0;V<x.__webglColorRenderbuffer.length;V++)x.__webglColorRenderbuffer[V]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[V]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let O=A.textures;for(let V=0,W=O.length;V<W;V++){let ct=n.get(O[V]);ct.__webglTexture&&(s.deleteTexture(ct.__webglTexture),o.memory.textures--),n.remove(O[V])}n.remove(A)}let L=0;function B(){L=0}function I(){return L}function z(A){L=A}function q(){let A=L;return A>=i.maxTextures&&Yt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+i.maxTextures),L+=1,A}function k(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function j(A,x){let O=n.get(A);if(A.isVideoTexture&&F(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){let V=A.image;if(V===null)Yt("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Yt("WebGLRenderer: Texture marked for update but image is incomplete");else{gt(O,A,x);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+x)}function Z(A,x){let O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){gt(O,A,x);return}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+x)}function P(A,x){let O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){gt(O,A,x);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+x)}function et(A,x){let O=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&O.__version!==A.version){Bt(O,A,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+x)}let bt={[Ql]:s.REPEAT,[Vi]:s.CLAMP_TO_EDGE,[jl]:s.MIRRORED_REPEAT},Tt={[cn]:s.NEAREST,[Yp]:s.NEAREST_MIPMAP_NEAREST,[Ra]:s.NEAREST_MIPMAP_LINEAR,[dn]:s.LINEAR,[wc]:s.LINEAR_MIPMAP_NEAREST,[zs]:s.LINEAR_MIPMAP_LINEAR},Ht={[$p]:s.NEVER,[em]:s.ALWAYS,[Kp]:s.LESS,[ch]:s.LEQUAL,[Qp]:s.EQUAL,[hh]:s.GEQUAL,[jp]:s.GREATER,[tm]:s.NOTEQUAL};function zt(A,x){if(x.type===gi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===dn||x.magFilter===wc||x.magFilter===Ra||x.magFilter===zs||x.minFilter===dn||x.minFilter===wc||x.minFilter===Ra||x.minFilter===zs)&&Yt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,bt[x.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,bt[x.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,bt[x.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,Tt[x.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,Tt[x.minFilter]),x.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Ht[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===cn||x.minFilter!==Ra&&x.minFilter!==zs||x.type===gi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Wt(A,x){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",E));let V=x.source,W=f.get(V);W===void 0&&(W={},f.set(V,W));let ct=k(x);if(ct!==A.__cacheKey){W[ct]===void 0&&(W[ct]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),W[ct].usedTimes++;let lt=W[A.__cacheKey];lt!==void 0&&(W[A.__cacheKey].usedTimes--,lt.usedTimes===0&&R(x)),A.__cacheKey=ct,A.__webglTexture=W[ct].texture}return O}function K(A,x,O){return Math.floor(Math.floor(A/O)/x)}function tt(A,x,O,V){let ct=A.updateRanges;if(ct.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,O,V,x.data);else{ct.sort((vt,dt)=>vt.start-dt.start);let lt=0;for(let vt=1;vt<ct.length;vt++){let dt=ct[lt],mt=ct[vt],ut=dt.start+dt.count,Ct=K(mt.start,x.width,4),Ft=K(dt.start,x.width,4);mt.start<=ut+1&&Ct===Ft&&K(mt.start+mt.count-1,x.width,4)===Ct?dt.count=Math.max(dt.count,mt.start+mt.count-dt.start):(++lt,ct[lt]=mt)}ct.length=lt+1;let Q=e.getParameter(s.UNPACK_ROW_LENGTH),J=e.getParameter(s.UNPACK_SKIP_PIXELS),rt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let vt=0,dt=ct.length;vt<dt;vt++){let mt=ct[vt],ut=Math.floor(mt.start/4),Ct=Math.ceil(mt.count/4),Ft=ut%x.width,N=Math.floor(ut/x.width),pt=Ct,nt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Ft),e.pixelStorei(s.UNPACK_SKIP_ROWS,N),e.texSubImage2D(s.TEXTURE_2D,0,Ft,N,pt,nt,O,V,x.data)}A.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,Q),e.pixelStorei(s.UNPACK_SKIP_PIXELS,J),e.pixelStorei(s.UNPACK_SKIP_ROWS,rt)}}function gt(A,x,O){let V=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(V=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(V=s.TEXTURE_3D);let W=Wt(A,x),ct=x.source;e.bindTexture(V,A.__webglTexture,s.TEXTURE0+O);let lt=n.get(ct);if(ct.version!==lt.__version||W===!0){if(e.activeTexture(s.TEXTURE0+O),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let nt=le.getPrimaries(le.workingColorSpace),_t=x.colorSpace===us?null:le.getPrimaries(x.colorSpace),yt=x.colorSpace===us||nt===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt)}e.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment);let J=m(x.image,!1,i.maxTextureSize);J=Ae(x,J);let rt=r.convert(x.format,x.colorSpace),vt=r.convert(x.type),dt=y(x.internalFormat,rt,vt,x.normalized,x.colorSpace,x.isVideoTexture);zt(V,x);let mt,ut=x.mipmaps,Ct=x.isVideoTexture!==!0,Ft=lt.__version===void 0||W===!0,N=ct.dataReady,pt=b(x,J);if(x.isDepthTexture)dt=M(x.format===ks,x.type),Ft&&(Ct?e.texStorage2D(s.TEXTURE_2D,1,dt,J.width,J.height):e.texImage2D(s.TEXTURE_2D,0,dt,J.width,J.height,0,rt,vt,null));else if(x.isDataTexture)if(ut.length>0){Ct&&Ft&&e.texStorage2D(s.TEXTURE_2D,pt,dt,ut[0].width,ut[0].height);for(let nt=0,_t=ut.length;nt<_t;nt++)mt=ut[nt],Ct?N&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,mt.width,mt.height,rt,vt,mt.data):e.texImage2D(s.TEXTURE_2D,nt,dt,mt.width,mt.height,0,rt,vt,mt.data);x.generateMipmaps=!1}else Ct?(Ft&&e.texStorage2D(s.TEXTURE_2D,pt,dt,J.width,J.height),N&&tt(x,J,rt,vt)):e.texImage2D(s.TEXTURE_2D,0,dt,J.width,J.height,0,rt,vt,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ct&&Ft&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,dt,ut[0].width,ut[0].height,J.depth);for(let nt=0,_t=ut.length;nt<_t;nt++)if(mt=ut[nt],x.format!==_i)if(rt!==null)if(Ct){if(N)if(x.layerUpdates.size>0){let yt=hf(mt.width,mt.height,x.format,x.type);for(let ot of x.layerUpdates){let ft=mt.data.subarray(ot*yt/mt.data.BYTES_PER_ELEMENT,(ot+1)*yt/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,ot,mt.width,mt.height,1,rt,ft)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,mt.width,mt.height,J.depth,rt,mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,nt,dt,mt.width,mt.height,J.depth,0,mt.data,0,0);else Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ct?N&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,mt.width,mt.height,J.depth,rt,vt,mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,nt,dt,mt.width,mt.height,J.depth,0,rt,vt,mt.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ct&&Ft&&e.texStorage2D(s.TEXTURE_2D,pt,dt,ut[0].width,ut[0].height);for(let nt=0,_t=ut.length;nt<_t;nt++)mt=ut[nt],x.format!==_i?rt!==null?Ct?N&&e.compressedTexSubImage2D(s.TEXTURE_2D,nt,0,0,mt.width,mt.height,rt,mt.data):e.compressedTexImage2D(s.TEXTURE_2D,nt,dt,mt.width,mt.height,0,mt.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?N&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,mt.width,mt.height,rt,vt,mt.data):e.texImage2D(s.TEXTURE_2D,nt,dt,mt.width,mt.height,0,rt,vt,mt.data)}else if(x.isDataArrayTexture)if(Ct){if(Ft&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,dt,J.width,J.height,J.depth),N)if(x.layerUpdates.size>0){let nt=hf(J.width,J.height,x.format,x.type);for(let _t of x.layerUpdates){let yt=J.data.subarray(_t*nt/J.data.BYTES_PER_ELEMENT,(_t+1)*nt/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_t,J.width,J.height,1,rt,vt,yt)}x.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,rt,vt,J.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,dt,J.width,J.height,J.depth,0,rt,vt,J.data);else if(x.isData3DTexture)Ct?(Ft&&e.texStorage3D(s.TEXTURE_3D,pt,dt,J.width,J.height,J.depth),N&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,rt,vt,J.data)):e.texImage3D(s.TEXTURE_3D,0,dt,J.width,J.height,J.depth,0,rt,vt,J.data);else if(x.isFramebufferTexture){if(Ft)if(Ct)e.texStorage2D(s.TEXTURE_2D,pt,dt,J.width,J.height);else{let nt=J.width,_t=J.height;for(let yt=0;yt<pt;yt++)e.texImage2D(s.TEXTURE_2D,yt,dt,nt,_t,0,rt,vt,null),nt>>=1,_t>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in s){let nt=s.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),J.parentNode!==nt){nt.appendChild(J),d.add(x),nt.onpaint=_t=>{let yt=_t.changedElements;for(let ot of d)yt.includes(ot.image)&&(ot.needsUpdate=!0)},nt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,J);else{let yt=s.RGBA,ot=s.RGBA,ft=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,yt,ot,ft,J)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ut.length>0){if(Ct&&Ft){let nt=it(ut[0]);e.texStorage2D(s.TEXTURE_2D,pt,dt,nt.width,nt.height)}for(let nt=0,_t=ut.length;nt<_t;nt++)mt=ut[nt],Ct?N&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,rt,vt,mt):e.texImage2D(s.TEXTURE_2D,nt,dt,rt,vt,mt);x.generateMipmaps=!1}else if(Ct){if(Ft){let nt=it(J);e.texStorage2D(s.TEXTURE_2D,pt,dt,nt.width,nt.height)}N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,rt,vt,J)}else e.texImage2D(s.TEXTURE_2D,0,dt,rt,vt,J);p(x)&&S(V),lt.__version=ct.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Bt(A,x,O){if(x.image.length!==6)return;let V=Wt(A,x),W=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+O);let ct=n.get(W);if(W.version!==ct.__version||V===!0){e.activeTexture(s.TEXTURE0+O);let lt=le.getPrimaries(le.workingColorSpace),Q=x.colorSpace===us?null:le.getPrimaries(x.colorSpace),J=x.colorSpace===us||lt===Q?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let rt=x.isCompressedTexture||x.image[0].isCompressedTexture,vt=x.image[0]&&x.image[0].isDataTexture,dt=[];for(let ot=0;ot<6;ot++)!rt&&!vt?dt[ot]=m(x.image[ot],!0,i.maxCubemapSize):dt[ot]=vt?x.image[ot].image:x.image[ot],dt[ot]=Ae(x,dt[ot]);let mt=dt[0],ut=r.convert(x.format,x.colorSpace),Ct=r.convert(x.type),Ft=y(x.internalFormat,ut,Ct,x.normalized,x.colorSpace),N=x.isVideoTexture!==!0,pt=ct.__version===void 0||V===!0,nt=W.dataReady,_t=b(x,mt);zt(s.TEXTURE_CUBE_MAP,x);let yt;if(rt){N&&pt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,_t,Ft,mt.width,mt.height);for(let ot=0;ot<6;ot++){yt=dt[ot].mipmaps;for(let ft=0;ft<yt.length;ft++){let at=yt[ft];x.format!==_i?ut!==null?N?nt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ft,0,0,at.width,at.height,ut,at.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ft,Ft,at.width,at.height,0,at.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ft,0,0,at.width,at.height,ut,Ct,at.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ft,Ft,at.width,at.height,0,ut,Ct,at.data)}}}else{if(yt=x.mipmaps,N&&pt){yt.length>0&&_t++;let ot=it(dt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,_t,Ft,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(vt){N?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,dt[ot].width,dt[ot].height,ut,Ct,dt[ot].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Ft,dt[ot].width,dt[ot].height,0,ut,Ct,dt[ot].data);for(let ft=0;ft<yt.length;ft++){let Ot=yt[ft].image[ot].image;N?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ft+1,0,0,Ot.width,Ot.height,ut,Ct,Ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ft+1,Ft,Ot.width,Ot.height,0,ut,Ct,Ot.data)}}else{N?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,ut,Ct,dt[ot]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Ft,ut,Ct,dt[ot]);for(let ft=0;ft<yt.length;ft++){let at=yt[ft];N?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ft+1,0,0,ut,Ct,at.image[ot]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ft+1,Ft,ut,Ct,at.image[ot])}}}p(x)&&S(s.TEXTURE_CUBE_MAP),ct.__version=W.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function st(A,x,O,V,W,ct){let lt=r.convert(O.format,O.colorSpace),Q=r.convert(O.type),J=y(O.internalFormat,lt,Q,O.normalized,O.colorSpace),rt=n.get(x),vt=n.get(O);if(vt.__renderTarget=x,!rt.__hasExternalTextures){let dt=Math.max(1,x.width>>ct),mt=Math.max(1,x.height>>ct);W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?e.texImage3D(W,ct,J,dt,mt,x.depth,0,lt,Q,null):e.texImage2D(W,ct,J,dt,mt,0,lt,Q,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),fe(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,V,W,vt.__webglTexture,0,Gt(x)):(W===s.TEXTURE_2D||W>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,V,W,vt.__webglTexture,ct),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Dt(A,x,O){if(s.bindRenderbuffer(s.RENDERBUFFER,A),x.depthBuffer){let V=x.depthTexture,W=V&&V.isDepthTexture?V.type:null,ct=M(x.stencilBuffer,W),lt=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;fe(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Gt(x),ct,x.width,x.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt(x),ct,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,ct,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,lt,s.RENDERBUFFER,A)}else{let V=x.textures;for(let W=0;W<V.length;W++){let ct=V[W],lt=r.convert(ct.format,ct.colorSpace),Q=r.convert(ct.type),J=y(ct.internalFormat,lt,Q,ct.normalized,ct.colorSpace);fe(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Gt(x),J,x.width,x.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt(x),J,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,J,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function kt(A,x,O){let V=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W=n.get(x.depthTexture);if(W.__renderTarget=x,(!W.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V){if(W.__webglInit===void 0&&(W.__webglInit=!0,x.depthTexture.addEventListener("dispose",E)),W.__webglTexture===void 0){W.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture),zt(s.TEXTURE_CUBE_MAP,x.depthTexture);let rt=r.convert(x.depthTexture.format),vt=r.convert(x.depthTexture.type),dt;x.depthTexture.format===Gi?dt=s.DEPTH_COMPONENT24:x.depthTexture.format===ks&&(dt=s.DEPTH24_STENCIL8);for(let mt=0;mt<6;mt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,dt,x.width,x.height,0,rt,vt,null)}}else j(x.depthTexture,0);let ct=W.__webglTexture,lt=Gt(x),Q=V?s.TEXTURE_CUBE_MAP_POSITIVE_X+O:s.TEXTURE_2D,J=x.depthTexture.format===ks?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(x.depthTexture.format===Gi)fe(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,Q,ct,0,lt):s.framebufferTexture2D(s.FRAMEBUFFER,J,Q,ct,0);else if(x.depthTexture.format===ks)fe(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,Q,ct,0,lt):s.framebufferTexture2D(s.FRAMEBUFFER,J,Q,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Lt(A){let x=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let V=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),V){let W=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,V.removeEventListener("dispose",W)};V.addEventListener("dispose",W),x.__depthDisposeCallback=W}x.__boundDepthTexture=V}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let V=0;V<6;V++)kt(x.__webglFramebuffer[V],A,V);else{let V=A.texture.mipmaps;V&&V.length>0?kt(x.__webglFramebuffer[0],A,0):kt(x.__webglFramebuffer,A,0)}else if(O){x.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[V]),x.__webglDepthbuffer[V]===void 0)x.__webglDepthbuffer[V]=s.createRenderbuffer(),Dt(x.__webglDepthbuffer[V],A,!1);else{let W=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=x.__webglDepthbuffer[V];s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,W,s.RENDERBUFFER,ct)}}else{let V=A.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),Dt(x.__webglDepthbuffer,A,!1);else{let W=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,W,s.RENDERBUFFER,ct)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Xt(A,x,O){let V=n.get(A);x!==void 0&&st(V.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Lt(A)}function jt(A){let x=A.texture,O=n.get(A),V=n.get(x);A.addEventListener("dispose",v);let W=A.textures,ct=A.isWebGLCubeRenderTarget===!0,lt=W.length>1;if(lt||(V.__webglTexture===void 0&&(V.__webglTexture=s.createTexture()),V.__version=x.version,o.memory.textures++),ct){O.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[Q]=[];for(let J=0;J<x.mipmaps.length;J++)O.__webglFramebuffer[Q][J]=s.createFramebuffer()}else O.__webglFramebuffer[Q]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let Q=0;Q<x.mipmaps.length;Q++)O.__webglFramebuffer[Q]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(lt)for(let Q=0,J=W.length;Q<J;Q++){let rt=n.get(W[Q]);rt.__webglTexture===void 0&&(rt.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&fe(A)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Q=0;Q<W.length;Q++){let J=W[Q];O.__webglColorRenderbuffer[Q]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[Q]);let rt=r.convert(J.format,J.colorSpace),vt=r.convert(J.type),dt=y(J.internalFormat,rt,vt,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),mt=Gt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,mt,dt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Q,s.RENDERBUFFER,O.__webglColorRenderbuffer[Q])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),Dt(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ct){e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture),zt(s.TEXTURE_CUBE_MAP,x);for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)st(O.__webglFramebuffer[Q][J],A,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,J);else st(O.__webglFramebuffer[Q],A,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);p(x)&&S(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){for(let Q=0,J=W.length;Q<J;Q++){let rt=W[Q],vt=n.get(rt),dt=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(dt=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(dt,vt.__webglTexture),zt(dt,rt),st(O.__webglFramebuffer,A,rt,s.COLOR_ATTACHMENT0+Q,dt,0),p(rt)&&S(dt)}e.unbindTexture()}else{let Q=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Q,V.__webglTexture),zt(Q,x),x.mipmaps&&x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)st(O.__webglFramebuffer[J],A,x,s.COLOR_ATTACHMENT0,Q,J);else st(O.__webglFramebuffer,A,x,s.COLOR_ATTACHMENT0,Q,0);p(x)&&S(Q),e.unbindTexture()}A.depthBuffer&&Lt(A)}function H(A){let x=A.textures;for(let O=0,V=x.length;O<V;O++){let W=x[O];if(p(W)){let ct=C(A),lt=n.get(W).__webglTexture;e.bindTexture(ct,lt),S(ct),e.unbindTexture()}}}let Qt=[],pe=[];function Ee(A){if(A.samples>0){if(fe(A)===!1){let x=A.textures,O=A.width,V=A.height,W=s.COLOR_BUFFER_BIT,ct=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=n.get(A),Q=x.length>1;if(Q)for(let rt=0;rt<x.length;rt++)e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer);let J=A.texture.mipmaps;J&&J.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let rt=0;rt<x.length;rt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(W|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(W|=s.STENCIL_BUFFER_BIT)),Q){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,lt.__webglColorRenderbuffer[rt]);let vt=n.get(x[rt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,vt,0)}s.blitFramebuffer(0,0,O,V,0,0,O,V,W,s.NEAREST),l===!0&&(Qt.length=0,pe.length=0,Qt.push(s.COLOR_ATTACHMENT0+rt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(Qt.push(ct),pe.push(ct),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,pe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Qt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Q)for(let rt=0;rt<x.length;rt++){e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,lt.__webglColorRenderbuffer[rt]);let vt=n.get(x[rt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,vt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let x=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function Gt(A){return Math.min(i.maxSamples,A.samples)}function fe(A){let x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function F(A){let x=o.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function Ae(A,x){let O=A.colorSpace,V=A.format,W=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==ea&&O!==us&&(le.getTransfer(O)===ge?(V!==_i||W!==Zn)&&Yt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qt("WebGLTextures: Unsupported texture color space:",O)),x}function it(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=B,this.getTextureUnits=I,this.setTextureUnits=z,this.setTexture2D=j,this.setTexture2DArray=Z,this.setTexture3D=P,this.setTextureCube=et,this.rebindTextures=Xt,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=fe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function SM(s,t){function e(n,i=us){let r,o=le.getTransfer(i);if(n===Zn)return s.UNSIGNED_BYTE;if(n===Ac)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Cc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===tf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ef)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Qu)return s.BYTE;if(n===ju)return s.SHORT;if(n===po)return s.UNSIGNED_SHORT;if(n===Ec)return s.INT;if(n===Li)return s.UNSIGNED_INT;if(n===gi)return s.FLOAT;if(n===Di)return s.HALF_FLOAT;if(n===nf)return s.ALPHA;if(n===sf)return s.RGB;if(n===_i)return s.RGBA;if(n===Gi)return s.DEPTH_COMPONENT;if(n===ks)return s.DEPTH_STENCIL;if(n===Rc)return s.RED;if(n===Pc)return s.RED_INTEGER;if(n===Vs)return s.RG;if(n===Ic)return s.RG_INTEGER;if(n===Lc)return s.RGBA_INTEGER;if(n===Pa||n===Ia||n===La||n===Da)if(o===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Pa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Pa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Da)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Dc||n===Nc||n===Uc||n===Fc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Dc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oc||n===Bc||n===zc||n===kc||n===Vc||n===Na||n===Gc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oc||n===Bc)return o===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===kc)return r.COMPRESSED_R11_EAC;if(n===Vc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Na)return r.COMPRESSED_RG11_EAC;if(n===Gc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Hc||n===Wc||n===Xc||n===Yc||n===qc||n===Zc||n===Jc||n===$c||n===Kc||n===Qc||n===jc||n===th||n===eh||n===nh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Hc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$c)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Kc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===th)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===eh)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nh)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ih||n===sh||n===rh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ih)return o===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===oh||n===ah||n===Ua||n===lh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===oh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ah)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ua)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===mo?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}function wM(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,af(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,C,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,C):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===mn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===mn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=t.get(p),C=S.envMap,y=S.envMapRotation;C&&(m.envMap.value=C,m.envMapRotation.value.setFromMatrix4(TM.makeRotationFromEuler(y)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Bm),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,C){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=C*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===mn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function EM(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){let b=M.program;n.uniformBlockBinding(y,b)}function c(y,M){let b=i[y.id];b===void 0&&(m(y),b=h(y),i[y.id]=b,y.addEventListener("dispose",S));let E=M.program;n.updateUBOMapping(y,E);let v=t.render.frame;r[y.id]!==v&&(u(y),r[y.id]=v)}function h(y){let M=d();y.__bindingPointIndex=M;let b=s.createBuffer(),E=y.__size,v=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,E,v),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,b),b}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let M=i[y.id],b=y.uniforms,E=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let v=0,w=b.length;v<w;v++){let R=b[v];if(Array.isArray(R))for(let D=0,L=R.length;D<L;D++)f(R[D],v,D,E);else f(R,v,0,E)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,M,b,E){if(_(y,M,b,E)===!0){let v=y.__offset,w=y.value;if(Array.isArray(w)){let R=0;for(let D=0;D<w.length;D++){let L=w[D],B=p(L);g(L,y.__data,R),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(R+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,v,y.__data)}}function g(y,M,b){typeof y=="number"||typeof y=="boolean"?M[0]=y:y.isMatrix3?(M[0]=y.elements[0],M[1]=y.elements[1],M[2]=y.elements[2],M[3]=0,M[4]=y.elements[3],M[5]=y.elements[4],M[6]=y.elements[5],M[7]=0,M[8]=y.elements[6],M[9]=y.elements[7],M[10]=y.elements[8],M[11]=0):ArrayBuffer.isView(y)?M.set(new y.constructor(y.buffer,y.byteOffset,M.length)):y.toArray(M,b)}function _(y,M,b,E){let v=y.value,w=M+"_"+b;if(E[w]===void 0)return typeof v=="number"||typeof v=="boolean"?E[w]=v:ArrayBuffer.isView(v)?E[w]=v.slice():E[w]=v.clone(),!0;{let R=E[w];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return E[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function m(y){let M=y.uniforms,b=0,E=16;for(let w=0,R=M.length;w<R;w++){let D=Array.isArray(M[w])?M[w]:[M[w]];for(let L=0,B=D.length;L<B;L++){let I=D[L],z=Array.isArray(I.value)?I.value:[I.value];for(let q=0,k=z.length;q<k;q++){let j=z[q],Z=p(j),P=b%E,et=P%Z.boundary,bt=P+et;b+=et,bt!==0&&E-bt<Z.storage&&(b+=E-bt),I.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=b,b+=Z.storage}}}let v=b%E;return v>0&&(b+=E-v),y.__size=b,y.__cache={},this}function p(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?Yt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):Yt("WebGLRenderer: Unsupported uniform value type.",y),M}function S(y){let M=y.target;M.removeEventListener("dispose",S);let b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function C(){for(let y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:C}}function CM(){return $i===null&&($i=new ca(AM,16,16,Vs,Di),$i.name="DFG_LUT",$i.minFilter=dn,$i.magFilter=dn,$i.wrapS=Vi,$i.wrapT=Vi,$i.generateMipmaps=!1,$i.needsUpdate=!0),$i}var V0,G0,H0,W0,X0,Y0,q0,Z0,J0,$0,K0,Q0,j0,tx,ex,nx,ix,sx,rx,ox,ax,lx,cx,hx,ux,fx,dx,px,mx,gx,_x,xx,vx,yx,Sx,Mx,bx,Tx,wx,Ex,Ax,Cx,Rx,Px,Ix,Lx,Dx,Nx,Ux,Fx,Ox,Bx,zx,kx,Vx,Gx,Hx,Wx,Xx,Yx,qx,Zx,Jx,$x,Kx,Qx,jx,tv,ev,nv,iv,sv,rv,ov,av,lv,cv,hv,uv,fv,dv,pv,mv,gv,_v,xv,vv,yv,Sv,Mv,bv,Tv,wv,Ev,Av,Cv,Rv,Pv,Iv,Lv,Dv,Nv,Uv,Fv,Ov,Bv,zv,kv,Vv,Gv,Hv,Wv,Xv,Yv,qv,Zv,Jv,$v,Kv,Qv,jv,ty,ey,ny,iy,sy,ry,oy,ay,ly,cy,hy,uy,fy,dy,py,my,gy,_y,xy,vy,yy,ee,St,Ki,uh,Sy,Dm,_o,Ay,Cy,Ry,Ba,um,_f,xf,vf,yf,Py,dr,vo,dh,Vy,Nm,bf,Um,Fm,Om,mm,gm,_m,xm,vm,Tf,wf,Ef,Sf,xo,PS,IS,Mm,US,fh,VS,GS,WS,YS,ZS,$S,QS,nM,Cf,Rf,hM,pM,mM,gM,_M,Im,za,Mf,MM,bM,Pf,If,TM,Bm,AM,$i,ph,_h=zi(()=>{gf();gf();V0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,G0=`#ifdef USE_ALPHAHASH
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
#endif`,H0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,W0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Y0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,q0=`#ifdef USE_AOMAP
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
#endif`,Z0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,J0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,$0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,K0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Q0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,j0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tx=`#ifdef USE_IRIDESCENCE
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
#endif`,ex=`#ifdef USE_BUMPMAP
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
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ox=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ax=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,hx=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,ux=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,fx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,dx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,px=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_x="gl_FragColor = linearToOutputTexel( gl_FragColor );",xx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,yx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Sx=`#ifdef USE_ENVMAP
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
#endif`,Mx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ex=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ax=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cx=`#ifdef USE_GRADIENTMAP
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
}`,Rx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Px=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lx=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,Dx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Nx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ux=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ox=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kx=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Wx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$x=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kx=`#if defined( USE_POINTS_UV )
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
#endif`,Qx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ev=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ov=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,av=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,hv=`#ifdef USE_NORMALMAP
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
#endif`,uv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,_v=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Tv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Ev=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Av=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pv=`#ifdef USE_SKINNING
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
#endif`,Iv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nv=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uv=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fv=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gv=`uniform sampler2D t2D;
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
}`,Hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Zv=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Jv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,$v=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jv=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ty=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ey=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,ny=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,iy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,sy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,ry=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,oy=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,ay=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,ly=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,hy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,uy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,fy=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,dy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,py=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,my=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,gy=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,_y=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,xy=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,vy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,yy=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,ee={alphahash_fragment:V0,alphahash_pars_fragment:G0,alphamap_fragment:H0,alphamap_pars_fragment:W0,alphatest_fragment:X0,alphatest_pars_fragment:Y0,aomap_fragment:q0,aomap_pars_fragment:Z0,batching_pars_vertex:J0,batching_vertex:$0,begin_vertex:K0,beginnormal_vertex:Q0,bsdfs:j0,iridescence_fragment:tx,bumpmap_pars_fragment:ex,clipping_planes_fragment:nx,clipping_planes_pars_fragment:ix,clipping_planes_pars_vertex:sx,clipping_planes_vertex:rx,color_fragment:ox,color_pars_fragment:ax,color_pars_vertex:lx,color_vertex:cx,common:hx,cube_uv_reflection_fragment:ux,defaultnormal_vertex:fx,displacementmap_pars_vertex:dx,displacementmap_vertex:px,emissivemap_fragment:mx,emissivemap_pars_fragment:gx,colorspace_fragment:_x,colorspace_pars_fragment:xx,envmap_fragment:vx,envmap_common_pars_fragment:yx,envmap_pars_fragment:Sx,envmap_pars_vertex:Mx,envmap_physical_pars_fragment:Dx,envmap_vertex:bx,fog_vertex:Tx,fog_pars_vertex:wx,fog_fragment:Ex,fog_pars_fragment:Ax,gradientmap_pars_fragment:Cx,lightmap_pars_fragment:Rx,lights_lambert_fragment:Px,lights_lambert_pars_fragment:Ix,lights_pars_begin:Lx,lights_toon_fragment:Nx,lights_toon_pars_fragment:Ux,lights_phong_fragment:Fx,lights_phong_pars_fragment:Ox,lights_physical_fragment:Bx,lights_physical_pars_fragment:zx,lights_fragment_begin:kx,lights_fragment_maps:Vx,lights_fragment_end:Gx,lightprobes_pars_fragment:Hx,logdepthbuf_fragment:Wx,logdepthbuf_pars_fragment:Xx,logdepthbuf_pars_vertex:Yx,logdepthbuf_vertex:qx,map_fragment:Zx,map_pars_fragment:Jx,map_particle_fragment:$x,map_particle_pars_fragment:Kx,metalnessmap_fragment:Qx,metalnessmap_pars_fragment:jx,morphinstance_vertex:tv,morphcolor_vertex:ev,morphnormal_vertex:nv,morphtarget_pars_vertex:iv,morphtarget_vertex:sv,normal_fragment_begin:rv,normal_fragment_maps:ov,normal_pars_fragment:av,normal_pars_vertex:lv,normal_vertex:cv,normalmap_pars_fragment:hv,clearcoat_normal_fragment_begin:uv,clearcoat_normal_fragment_maps:fv,clearcoat_pars_fragment:dv,iridescence_pars_fragment:pv,opaque_fragment:mv,packing:gv,premultiplied_alpha_fragment:_v,project_vertex:xv,dithering_fragment:vv,dithering_pars_fragment:yv,roughnessmap_fragment:Sv,roughnessmap_pars_fragment:Mv,shadowmap_pars_fragment:bv,shadowmap_pars_vertex:Tv,shadowmap_vertex:wv,shadowmask_pars_fragment:Ev,skinbase_vertex:Av,skinning_pars_vertex:Cv,skinning_vertex:Rv,skinnormal_vertex:Pv,specularmap_fragment:Iv,specularmap_pars_fragment:Lv,tonemapping_fragment:Dv,tonemapping_pars_fragment:Nv,transmission_fragment:Uv,transmission_pars_fragment:Fv,uv_pars_fragment:Ov,uv_pars_vertex:Bv,uv_vertex:zv,worldpos_vertex:kv,background_vert:Vv,background_frag:Gv,backgroundCube_vert:Hv,backgroundCube_frag:Wv,cube_vert:Xv,cube_frag:Yv,depth_vert:qv,depth_frag:Zv,distance_vert:Jv,distance_frag:$v,equirect_vert:Kv,equirect_frag:Qv,linedashed_vert:jv,linedashed_frag:ty,meshbasic_vert:ey,meshbasic_frag:ny,meshlambert_vert:iy,meshlambert_frag:sy,meshmatcap_vert:ry,meshmatcap_frag:oy,meshnormal_vert:ay,meshnormal_frag:ly,meshphong_vert:cy,meshphong_frag:hy,meshphysical_vert:uy,meshphysical_frag:fy,meshtoon_vert:dy,meshtoon_frag:py,points_vert:my,points_frag:gy,shadow_vert:_y,shadow_frag:xy,sprite_vert:vy,sprite_frag:yy},St={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Ki={basic:{uniforms:wn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:wn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Zt(0)},envMapIntensity:{value:1}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:wn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:wn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:wn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Zt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:wn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:wn([St.points,St.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:wn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:wn([St.common,St.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:wn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:wn([St.sprite,St.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distance:{uniforms:wn([St.common,St.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distance_vert,fragmentShader:ee.distance_frag},shadow:{uniforms:wn([St.lights,St.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};Ki.physical={uniforms:wn([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};uh={r:0,b:0,g:0},Sy=new be,Dm=new $t;Dm.set(-1,0,0,0,1,0,0,0,1);_o=4,Ay=6,Cy=20,Ry=256,Ba=new co,um=new Zt,_f=null,xf=0,vf=0,yf=!1,Py=new G,dr=new G,vo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=Py}=r;_f=this._renderer.getRenderTarget(),xf=this._renderer.getActiveCubeFace(),vf=this._renderer.getActiveMipmapLevel(),yf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(_f,xf,vf),this._renderer.xr.enabled=yf,t.scissorTest=!1,go(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Bs||t.mapping===ur?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_f=this._renderer.getRenderTarget(),xf=this._renderer.getActiveCubeFace(),vf=this._renderer.getActiveMipmapLevel(),yf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Di,format:_i,colorSpace:ea,depthBuffer:!1},i=fm(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fm(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Iy(r)),this._blurMaterial=Dy(r,t,e),this._ggxMaterial=Ly(r,t,e)}return i}_compileMaterial(t){let e=new xe(new pn,t);this._renderer.compile(e,Ba)}_sceneToCubeUV(t,e,n,i,r){let l=new fn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(um),d.toneMapping=Ii,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xe(new Zi,new Is({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,p=!1,S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,p=!0):(m.color.copy(um),p=!0);for(let C=0;C<6;C++){let y=C%3;y===0?(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[C],r.y,r.z)):y===1?(l.up.set(0,0,c[C]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[C],r.z)):(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[C]));let M=this._cubeSize;go(i,y*M,C>2?M:0,M,M),d.setRenderTarget(i),p&&d.render(_,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Bs||t.mapping===ur;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=pm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dm());let r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;go(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ba)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-_o?n-g+_o:0),p=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,go(r,m,p,3*_,2*_),i.setRenderTarget(r),i.render(a,Ba),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,go(t,m,p,3*_,2*_),i.setRenderTarget(t),i.render(a,Ba)}_blur(t,e,n,i){let r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,i,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],d=3*h*(i>this._lodMax-_o?i-this._lodMax+_o:0),u=4*(this._cubeSize-h);go(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,Ba)}};dh=class extends qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new da(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Zi(5,5,5),r=new ni({name:"CubemapFromEquirect",uniforms:fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:Ji});r.uniforms.tEquirect.value=e;let o=new xe(i,r),a=e.minFilter;return e.minFilter===zs&&(e.minFilter=dn),new vc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}};Vy={[Xu]:"LINEAR_TONE_MAPPING",[Yu]:"REINHARD_TONE_MAPPING",[qu]:"CINEON_TONE_MAPPING",[Aa]:"ACES_FILMIC_TONE_MAPPING",[Ju]:"AGX_TONE_MAPPING",[$u]:"NEUTRAL_TONE_MAPPING",[Zu]:"CUSTOM_TONE_MAPPING"};Nm=new On,bf=new Ls(1,1),Um=new ia,Fm=new sc,Om=new da,mm=[],gm=[],_m=new Float32Array(16),xm=new Float32Array(9),vm=new Float32Array(4);Tf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=lS(e.type)}},wf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=CS(e.type)}},Ef=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Sf=/(\w+)(\])?(\[|\.)?/g;xo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);RS(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};PS=37297,IS=0;Mm=new $t;US={[Xu]:"Linear",[Yu]:"Reinhard",[qu]:"Cineon",[Aa]:"ACESFilmic",[Ju]:"AgX",[$u]:"Neutral",[Zu]:"Custom"};fh=new G;VS=/^[ \t]*#include +<([\w\d./]+)>/gm;GS=new Map;WS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;YS={[Ea]:"SHADOWMAP_TYPE_PCF",[ho]:"SHADOWMAP_TYPE_VSM"};ZS={[Bs]:"ENVMAP_TYPE_CUBE",[ur]:"ENVMAP_TYPE_CUBE",[Ca]:"ENVMAP_TYPE_CUBE_UV"};$S={[ur]:"ENVMAP_MODE_REFRACTION"};QS={[Mc]:"ENVMAP_BLENDING_MULTIPLY",[Wp]:"ENVMAP_BLENDING_MIX",[Xp]:"ENVMAP_BLENDING_ADD"};nM=0,Cf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Rf(t),e.set(t,n)),n}},Rf=class{constructor(t){this.id=nM++,this.code=t,this.usedTimes=0}};hM=0;pM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,gM=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],_M=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Im=new be,za=new G,Mf=new G;MM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Pf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new pa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ni({vertexShader:MM,fragmentShader:bM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xe(new ar(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},If=class extends Hi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,_=typeof XRWebGLBinding<"u",m=new Pf,p={},S=e.getContextAttributes(),C=null,y=null,M=[],b=[],E=new ne,v=null,w=null,R=new fn;R.viewport=new Ue;let D=new fn;D.viewport=new Ue;let L=[R,D],B=new yc,I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let tt=M[K];return tt===void 0&&(tt=new so,M[K]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(K){let tt=M[K];return tt===void 0&&(tt=new so,M[K]=tt),tt.getGripSpace()},this.getHand=function(K){let tt=M[K];return tt===void 0&&(tt=new so,M[K]=tt),tt.getHandSpace()};function q(K){let tt=b.indexOf(K.inputSource);if(tt===-1)return;let gt=M[tt];gt!==void 0&&(gt.update(K.inputSource,K.frame,c||o),gt.dispatchEvent({type:K.type,data:K.inputSource}))}function k(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",j);for(let K=0;K<M.length;K++){let tt=b[K];tt!==null&&(b[K]=null,M[K].disconnect(tt))}I=null,z=null,m.reset();for(let K in p)delete p[K];if(t.setRenderTarget(C),f=null,u=null,d=null,i=null,y=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(E.width,E.height,!1),w!==null){let K=w.camera;K.fov=w.fov,K.zoom=w.zoom,K.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Yt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&Yt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(C=t.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",k),i.addEventListener("inputsourceschange",j),S.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,Bt=null,st=null;S.depth&&(st=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=S.stencil?ks:Gi,Bt=S.stencil?mo:Li);let Dt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Dt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new qn(u.textureWidth,u.textureHeight,{format:_i,type:Zn,depthTexture:new Ls(u.textureWidth,u.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let gt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,gt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new qn(f.framebufferWidth,f.framebufferHeight,{format:_i,type:Zn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Wt.setContext(i),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(K){for(let tt=0;tt<K.removed.length;tt++){let gt=K.removed[tt],Bt=b.indexOf(gt);Bt>=0&&(b[Bt]=null,M[Bt].disconnect(gt))}for(let tt=0;tt<K.added.length;tt++){let gt=K.added[tt],Bt=b.indexOf(gt);if(Bt===-1){for(let Dt=0;Dt<M.length;Dt++)if(Dt>=b.length){b.push(gt),Bt=Dt;break}else if(b[Dt]===null){b[Dt]=gt,Bt=Dt;break}if(Bt===-1)break}let st=M[Bt];st&&st.connect(gt)}}let Z=new G,P=new G;function et(K,tt,gt){Z.setFromMatrixPosition(tt.matrixWorld),P.setFromMatrixPosition(gt.matrixWorld);let Bt=Z.distanceTo(P),st=tt.projectionMatrix.elements,Dt=gt.projectionMatrix.elements,kt=st[14]/(st[10]-1),Lt=st[14]/(st[10]+1),Xt=(st[9]+1)/st[5],jt=(st[9]-1)/st[5],H=(st[8]-1)/st[0],Qt=(Dt[8]+1)/Dt[0],pe=kt*H,Ee=kt*Qt,Gt=Bt/(-H+Qt),fe=Gt*-H;if(tt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(fe),K.translateZ(Gt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),st[10]===-1)K.projectionMatrix.copy(tt.projectionMatrix),K.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let F=kt+Gt,Ae=Lt+Gt,it=pe-fe,A=Ee+(Bt-fe),x=Xt*Lt/Ae*F,O=jt*Lt/Ae*F;K.projectionMatrix.makePerspective(it,A,x,O,F,Ae),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function bt(K,tt){tt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(tt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let tt=K.near,gt=K.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(gt=m.depthFar)),B.near=D.near=R.near=tt,B.far=D.far=R.far=gt,(I!==B.near||z!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),I=B.near,z=B.far),B.layers.mask=K.layers.mask|6,R.layers.mask=B.layers.mask&-5,D.layers.mask=B.layers.mask&-3;let Bt=K.parent,st=B.cameras;bt(B,Bt);for(let Dt=0;Dt<st.length;Dt++)bt(st[Dt],Bt);st.length===2?et(B,R,D):B.projectionMatrix.copy(R.projectionMatrix),w===null&&K.isPerspectiveCamera&&(w={camera:K,fov:K.fov,zoom:K.zoom}),Tt(K,B,Bt)};function Tt(K,tt,gt){gt===null?K.matrix.copy(tt.matrixWorld):(K.matrix.copy(gt.matrixWorld),K.matrix.invert(),K.matrix.multiply(tt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(tt.projectionMatrix),K.projectionMatrixInverse.copy(tt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ec*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(K){return p[K]};let Ht=null;function zt(K,tt){if(h=tt.getViewerPose(c||o),g=tt,h!==null){let gt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Bt=!1;gt.length!==B.cameras.length&&(B.cameras.length=0,Bt=!0);for(let Lt=0;Lt<gt.length;Lt++){let Xt=gt[Lt],jt=null;if(f!==null)jt=f.getViewport(Xt);else{let Qt=d.getViewSubImage(u,Xt);jt=Qt.viewport,Lt===0&&(t.setRenderTargetTextures(y,Qt.colorTexture,Qt.depthStencilTexture),t.setRenderTarget(y))}let H=L[Lt];H===void 0&&(H=new fn,H.layers.enable(Lt),H.viewport=new Ue,L[Lt]=H),H.matrix.fromArray(Xt.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(Xt.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(jt.x,jt.y,jt.width,jt.height),Lt===0&&(B.matrix.copy(H.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Bt===!0&&B.cameras.push(H)}let st=i.enabledFeatures;if(st&&st.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let Lt=d.getDepthInformation(gt[0]);Lt&&Lt.isValid&&Lt.texture&&m.init(Lt,i.renderState)}if(st&&st.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let Lt=0;Lt<gt.length;Lt++){let Xt=gt[Lt].camera;if(Xt){let jt=p[Xt];jt||(jt=new pa,p[Xt]=jt);let H=d.getCameraImage(Xt);jt.sourceTexture=H}}}}for(let gt=0;gt<M.length;gt++){let Bt=b[gt],st=M[gt];Bt!==null&&st!==void 0&&st.update(Bt,tt,c||o)}Ht&&Ht(K,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}let Wt=new Lm;Wt.setAnimationLoop(zt),this.setAnimationLoop=function(K){Ht=K},this.dispose=function(){}}},TM=new be,Bm=new $t;Bm.set(-1,0,0,0,1,0,0,0,1);AM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),$i=null;ph=class{constructor(t={}){let{canvas:e=im(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Zn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let _=f,m=new Set([Lc,Ic,Pc]),p=new Set([Zn,Li,po,mo,Ac,Cc]),S=new Uint32Array(4),C=new Int32Array(4),y=new G,M=null,b=null,E=[],v=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,L=null,B=null,I=null,z=null;this._outputColorSpace=Tn;let q=0,k=0,j=null,Z=-1,P=null,et=new Ue,bt=new Ue,Tt=null,Ht=new Zt(0),zt=0,Wt=e.width,K=e.height,tt=1,gt=null,Bt=null,st=new Ue(0,0,Wt,K),Dt=new Ue(0,0,Wt,K),kt=!1,Lt=new ro,Xt=!1,jt=!1,H=new be,Qt=new G,pe=new Ue,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function fe(){return j===null?tt:1}let F=n;function Ae(T,U){return e.getContext(T,U)}let it,A,x,O,V,W,ct,lt,Q,J,rt,vt,dt,mt,ut,Ct,Ft,N,pt,nt,_t,yt,ot;try{let T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ot,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",Vt,!1),F===null){let U="webgl2";if(F=Ae(U,T),F===null)throw Ae(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ft()}catch(T){throw e.removeEventListener("webglcontextlost",Ot,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",Vt,!1),qt("WebGLRenderer: "+T.message),T}function ft(){it=new Uy(F),it.init(),_t=new SM(F,it),A=new wy(F,it,t,_t),x=new vM(F,it),A.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),B=F.createFramebuffer(),I=F.createFramebuffer(),z=F.createFramebuffer(),O=new By(F),V=new rM,W=new yM(F,it,x,V,A,_t,O),ct=new Ny(R),lt=new k0(F),yt=new by(F,lt),Q=new Fy(F,lt,O,yt),J=new ky(F,Q,lt,yt,O),N=new zy(F,A,W),ut=new Ey(V),rt=new sM(R,ct,it,A,yt,ut),vt=new wM(R,V),dt=new aM,mt=new dM(it),Ft=new My(R,ct,x,J,g,l),Ct=new xM(R,J,A),ot=new EM(F,O,A,x),pt=new Ty(F,it,O),nt=new Oy(F,it,O),O.programs=rt.programs,R.capabilities=A,R.extensions=it,R.properties=V,R.renderLists=dt,R.shadowMap=Ct,R.state=x,R.info=O}_!==Zn&&(w=new Gy(_,e.width,e.height,a,i,r));let at=new If(R,F);this.xr=at,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let T=it.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=it.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(T){T!==void 0&&(tt=T,this.setSize(Wt,K,!1))},this.getSize=function(T){return T.set(Wt,K)},this.setSize=function(T,U,$=!0){if(at.isPresenting){Yt("WebGLRenderer: Can't change size while VR device is presenting.");return}Wt=T,K=U,e.width=Math.floor(T*tt),e.height=Math.floor(U*tt),$===!0&&(e.style.width=T+"px",e.style.height=U+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(Wt*tt,K*tt).floor()},this.setDrawingBufferSize=function(T,U,$){Wt=T,K=U,tt=$,e.width=Math.floor(T*$),e.height=Math.floor(U*$),this.setViewport(0,0,T,U)},this.setEffects=function(T){if(_===Zn){qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let U=0;U<T.length;U++)if(T[U].isOutputPass===!0){Yt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(et)},this.getViewport=function(T){return T.copy(st)},this.setViewport=function(T,U,$,X){T.isVector4?st.set(T.x,T.y,T.z,T.w):st.set(T,U,$,X),x.viewport(et.copy(st).multiplyScalar(tt).round())},this.getScissor=function(T){return T.copy(Dt)},this.setScissor=function(T,U,$,X){T.isVector4?Dt.set(T.x,T.y,T.z,T.w):Dt.set(T,U,$,X),x.scissor(bt.copy(Dt).multiplyScalar(tt).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(T){x.setScissorTest(kt=T)},this.setOpaqueSort=function(T){gt=T},this.setTransparentSort=function(T){Bt=T},this.getClearColor=function(T){return T.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor(...arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,$=!0){let X=0;if(T){let Y=!1;if(j!==null){let xt=j.texture.format;Y=m.has(xt)}if(Y){let xt=j.texture.type,Et=p.has(xt),Mt=Ft.getClearColor(),Pt=Ft.getClearAlpha(),Ut=Mt.r,te=Mt.g,ae=Mt.b;Et?(S[0]=Ut,S[1]=te,S[2]=ae,S[3]=Pt,F.clearBufferuiv(F.COLOR,0,S)):(C[0]=Ut,C[1]=te,C[2]=ae,C[3]=Pt,F.clearBufferiv(F.COLOR,0,C))}else X|=F.COLOR_BUFFER_BIT}U&&(X|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(X|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&F.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),L=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Ot,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",Vt,!1),Ft.dispose(),dt.dispose(),mt.dispose(),V.dispose(),ct.dispose(),J.dispose(),yt.dispose(),ot.dispose(),rt.dispose(),at.dispose(),at.removeEventListener("sessionstart",Ie),at.removeEventListener("sessionend",Se),he.stop()};function Ot(T){T.preventDefault(),of("WebGLRenderer: Context Lost."),D=!0}function ht(){of("WebGLRenderer: Context Restored."),D=!1;let T=O.autoReset,U=Ct.enabled,$=Ct.autoUpdate,X=Ct.needsUpdate,Y=Ct.type;ft(),O.autoReset=T,Ct.enabled=U,Ct.autoUpdate=$,Ct.needsUpdate=X,Ct.type=Y}function Vt(T){qt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Rt(T){let U=T.target;U.removeEventListener("dispose",Rt),Jt(U)}function Jt(T){qe(T),V.remove(T)}function qe(T){let U=V.get(T).programs;U!==void 0&&(U.forEach(function($){rt.releaseProgram($)}),T.isShaderMaterial&&rt.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,$,X,Y,xt){U===null&&(U=Ee);let Et=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Mt=an(T,U,$,X,Y);x.setMaterial(X,Et);let Pt=$.index,Ut=1;if(X.wireframe===!0){if(Pt=Q.getWireframeAttribute($),Pt===void 0)return;Ut=2}let te=$.drawRange,ae=$.attributes.position,It=te.start*Ut,me=(te.start+te.count)*Ut;xt!==null&&(It=Math.max(It,xt.start*Ut),me=Math.min(me,(xt.start+xt.count)*Ut)),Pt!==null?(It=Math.max(It,0),me=Math.min(me,Pt.count)):ae!=null&&(It=Math.max(It,0),me=Math.min(me,ae.count));let Je=me-It;if(Je<0||Je===1/0)return;yt.setup(Y,X,Mt,$,Pt);let Le,Me=pt;if(Pt!==null&&(Le=lt.get(Pt),Me=nt,Me.setIndex(Le)),Y.isMesh)X.wireframe===!0?(x.setLineWidth(X.wireframeLinewidth*fe()),Me.setMode(F.LINES)):Me.setMode(F.TRIANGLES);else if(Y.isLine){let Sn=X.linewidth;Sn===void 0&&(Sn=1),x.setLineWidth(Sn*fe()),Y.isLineSegments?Me.setMode(F.LINES):Y.isLineLoop?Me.setMode(F.LINE_LOOP):Me.setMode(F.LINE_STRIP)}else Y.isPoints?Me.setMode(F.POINTS):Y.isSprite&&Me.setMode(F.TRIANGLES);if(Y.isBatchedMesh)if(it.get("WEBGL_multi_draw"))Me.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Sn=Y._multiDrawStarts,wt=Y._multiDrawCounts,Un=Y._multiDrawCount,de=Pt?lt.get(Pt).bytesPerElement:1,di=V.get(X).currentProgram.getUniforms();for(let Bi=0;Bi<Un;Bi++)di.setValue(F,"_gl_DrawID",Bi),Me.render(Sn[Bi]/de,wt[Bi])}else if(Y.isInstancedMesh)Me.renderInstances(It,Je,Y.count);else if($.isInstancedBufferGeometry){let Sn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,wt=Math.min($.instanceCount,Sn);Me.renderInstances(It,Je,wt)}else Me.render(It,Je)};function re(T,U,$,X){L!==null&&T.isNodeMaterial&&L.setObject(X,T),Xt===!0&&ut.setState(T,$,!1),T.transparent===!0&&T.side===mi&&T.forceSinglePass===!1?(T.side=mn,T.needsUpdate=!0,ke(T,U,X),T.side=Os,T.needsUpdate=!0,ke(T,U,X),T.side=mi):ke(T,U,X)}this.compile=function(T,U,$=null){$===null&&($=T),L!==null&&L.renderStart(T,U,$),b=mt.get($),b.init(U),v.push(b),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(U.layers)&&(b.pushLight(Y),Y.castShadow&&b.pushShadow(Y))}),T!==$&&T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(U.layers)&&(b.pushLight(Y),Y.castShadow&&b.pushShadow(Y))}),b.setupLights(),L!==null&&L.updateLights(b.state.lightsArray),jt=this.localClippingEnabled,Xt=ut.init(this.clippingPlanes,jt),Xt===!0&&ut.setGlobalState(this.clippingPlanes,U),L!==null&&Ct.render(b.state.shadowsArray,$,U);let X=new Set;return T.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let xt=Y.material;if(xt)if(Array.isArray(xt))for(let Et=0;Et<xt.length;Et++){let Mt=xt[Et];re(Mt,$,U,Y),X.add(Mt)}else re(xt,$,U,Y),X.add(xt)}),b=v.pop(),L!==null&&L.renderEnd(),X},this.compileAsync=function(T,U,$=null){let X=this.compile(T,U,$);return new Promise(Y=>{function xt(){if(X.forEach(function(Et){let Pt=V.get(Et).currentProgram;(Pt===void 0||Pt.isReady())&&X.delete(Et)}),X.size===0){Y(T);return}setTimeout(xt,10)}it.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let Pe=null;function on(T){Pe&&Pe(T)}function Ie(){he.stop()}function Se(){he.start()}let he=new Lm;he.setAnimationLoop(on),typeof self<"u"&&he.setContext(self),this.setAnimationLoop=function(T){Pe=T,at.setAnimationLoop(T),T===null?he.stop():he.start()},at.addEventListener("sessionstart",Ie),at.addEventListener("sessionend",Se),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L!==null&&L.renderStart(T,U);let $=at.enabled===!0&&at.isPresenting===!0,X=w!==null&&(j===null||$)&&w.begin(R,j);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(U),U=at.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,U,j),b=mt.get(T,v.length),b.init(U),b.state.textureUnits=W.getTextureUnits(),v.push(b),H.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Lt.setFromProjectionMatrix(H,Ri,U.reversedDepth),jt=this.localClippingEnabled,Xt=ut.init(this.clippingPlanes,jt),M=dt.get(T,E.length),M.init(),E.push(M),at.enabled===!0&&at.isPresenting===!0){let Et=R.xr.getDepthSensingMesh();Et!==null&&Dn(Et,U,-1/0,R.sortObjects)}Dn(T,U,0,R.sortObjects),M.finish(),L!==null&&L.updateLights(b.state.lightsArray),R.sortObjects===!0&&M.sort(gt,Bt),Gt=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,Gt&&Ft.addToRenderList(M,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xt===!0&&ut.beginShadows();let Y=b.state.shadowsArray;if(Ct.render(Y,T,U),Xt===!0&&ut.endShadows(),(X&&w.hasRenderPass())===!1){let Et=M.opaque,Mt=M.transmissive;if(b.setupLights(),U.isArrayCamera){let Pt=U.cameras;if(Mt.length>0)for(let Ut=0,te=Pt.length;Ut<te;Ut++){let ae=Pt[Ut];yn(Et,Mt,T,ae)}Gt&&Ft.render(T);for(let Ut=0,te=Pt.length;Ut<te;Ut++){let ae=Pt[Ut];Ce(M,T,ae,ae.viewport)}}else Mt.length>0&&yn(Et,Mt,T,U),Gt&&Ft.render(T),Ce(M,T,U)}j!==null&&k===0&&(W.updateMultisampleRenderTarget(j),W.updateRenderTargetMipmap(j)),X&&w.end(R),T.isScene===!0&&T.onAfterRender(R,T,U),yt.resetDefaultState(),Z=-1,P=null,v.pop(),v.length>0?(b=v[v.length-1],W.setTextureUnits(b.state.textureUnits),Xt===!0&&ut.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,E.pop(),E.length>0?M=E[E.length-1]:M=null,L!==null&&L.renderEnd()};function Dn(T,U,$,X){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLightProbeGrid)b.pushLightProbeGrid(T);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(Lt)){X&&pe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(H);let Et=J.update(T),Mt=T.material;Mt.visible&&M.push(T,Et,Mt,$,pe.z,null,U)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(Lt))){let Et=J.update(T),Mt=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),pe.copy(T.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),pe.copy(Et.boundingSphere.center)),pe.applyMatrix4(T.matrixWorld).applyMatrix4(H)),Array.isArray(Mt)){let Pt=Et.groups;for(let Ut=0,te=Pt.length;Ut<te;Ut++){let ae=Pt[Ut],It=Mt[ae.materialIndex];It&&It.visible&&M.push(T,Et,It,$,pe.z,ae,U)}}else Mt.visible&&M.push(T,Et,Mt,$,pe.z,null,U)}}let xt=T.children;for(let Et=0,Mt=xt.length;Et<Mt;Et++)Dn(xt[Et],U,$,X)}function Ce(T,U,$,X){let{opaque:Y,transmissive:xt,transparent:Et}=T;b.setupLightsView($),Xt===!0&&ut.setGlobalState(R.clippingPlanes,$),X&&x.viewport(et.copy(X)),Y.length>0&&Nn(Y,U,$),xt.length>0&&Nn(xt,U,$),Et.length>0&&Nn(Et,U,$),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function yn(T,U,$,X){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[X.id]===void 0){let It=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[X.id]=new qn(1,1,{generateMipmaps:!0,type:It?Di:Zn,minFilter:zs,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:le.workingColorSpace})}let xt=b.state.transmissionRenderTarget[X.id],Et=X.viewport||et;xt.setSize(Et.z*R.transmissionResolutionScale,Et.w*R.transmissionResolutionScale);let Mt=R.getRenderTarget(),Pt=R.getActiveCubeFace(),Ut=R.getActiveMipmapLevel();R.setRenderTarget(xt),R.getClearColor(Ht),zt=R.getClearAlpha(),zt<1&&R.setClearColor(16777215,.5),R.clear(),Gt&&Ft.render($);let te=R.toneMapping;R.toneMapping=Ii;let ae=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),b.setupLightsView(X),Xt===!0&&ut.setGlobalState(R.clippingPlanes,X),Nn(T,$,X),W.updateMultisampleRenderTarget(xt),W.updateRenderTargetMipmap(xt),it.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let me=0,Je=U.length;me<Je;me++){let Le=U[me],{object:Me,geometry:Sn,material:wt,group:Un}=Le;if(wt.side===mi&&Me.layers.test(X.layers)){let de=wt.side;wt.side=mn,wt.needsUpdate=!0,Ze(Me,$,X,Sn,wt,Un),wt.side=de,wt.needsUpdate=!0,It=!0}}It===!0&&(W.updateMultisampleRenderTarget(xt),W.updateRenderTargetMipmap(xt))}R.setRenderTarget(Mt,Pt,Ut),R.setClearColor(Ht,zt),ae!==void 0&&(X.viewport=ae),R.toneMapping=te}function Nn(T,U,$){let X=U.isScene===!0?U.overrideMaterial:null;for(let Y=0,xt=T.length;Y<xt;Y++){let Et=T[Y],{object:Mt,geometry:Pt,group:Ut}=Et,te=Et.material;te.allowOverride===!0&&X!==null&&(te=X),Mt.layers.test($.layers)&&Ze(Mt,U,$,Pt,te,Ut)}}function Ze(T,U,$,X,Y,xt){L!==null&&Y.isNodeMaterial&&L.setObject(T,Y),T.onBeforeRender(R,U,$,X,Y,xt),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(R,U,$,X,T,xt),Y.transparent===!0&&Y.side===mi&&Y.forceSinglePass===!1?(Y.side=mn,Y.needsUpdate=!0,R.renderBufferDirect($,U,X,Y,T,xt),Y.side=Os,Y.needsUpdate=!0,R.renderBufferDirect($,U,X,Y,T,xt),Y.side=mi):R.renderBufferDirect($,U,X,Y,T,xt),T.onAfterRender(R,U,$,X,Y,xt)}function ke(T,U,$){U.isScene!==!0&&(U=Ee);let X=V.get(T),Y=b.state.lights,xt=b.state.shadowsArray,Et=Y.state.version,Mt=rt.getParameters(T,Y.state,xt,U,$,b.state.lightProbeGridArray),Pt=rt.getProgramCacheKey(Mt),Ut=X.programs;X.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?U.environment:null,X.fog=U.fog;let te=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;X.envMap=ct.get(T.envMap||X.environment,te),X.envMapRotation=X.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Ut===void 0&&(T.addEventListener("dispose",Rt),Ut=new Map,X.programs=Ut);let ae=Ut.get(Pt);if(ae!==void 0){if(X.currentProgram===ae&&X.lightsStateVersion===Et)return Oi(T,Mt),ae}else Mt.uniforms=rt.getUniforms(T),L!==null&&T.isNodeMaterial&&L.build(T,$,Mt),T.onBeforeCompile(Mt,R),ae=rt.acquireProgram(Mt,Pt),Ut.set(Pt,ae),X.uniforms=Mt.uniforms;let It=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(It.clippingPlanes=ut.uniform),Oi(T,Mt),X.needsLights=fi(T),X.lightsStateVersion=Et,X.needsLights&&(It.ambientLightColor.value=Y.state.ambient,It.lightProbe.value=Y.state.probe,It.sunLights.value=Y.state.sun,It.sunLightShadows.value=Y.state.sunShadow,It.directionalLights.value=Y.state.directional,It.directionalLightShadows.value=Y.state.directionalShadow,It.spotLights.value=Y.state.spot,It.spotLightShadows.value=Y.state.spotShadow,It.rectAreaLights.value=Y.state.rectArea,It.ltc_1.value=Y.state.rectAreaLTC1,It.ltc_2.value=Y.state.rectAreaLTC2,It.pointLights.value=Y.state.point,It.pointLightShadows.value=Y.state.pointShadow,It.hemisphereLights.value=Y.state.hemi,It.sunShadowMatrix.value=Y.state.sunShadowMatrix,It.sunShadowCascade.value=Y.state.sunShadowCascade,It.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,It.spotLightMatrix.value=Y.state.spotLightMatrix,It.spotLightMap.value=Y.state.spotLightMap,It.pointShadowMatrix.value=Y.state.pointShadowMatrix),X.lightProbeGrid=b.state.lightProbeGridArray.length>0,X.currentProgram=ae,X.uniformsList=null,ae}function je(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=xo.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Oi(T,U){let $=V.get(T);$.outputColorSpace=U.outputColorSpace,$.batching=U.batching,$.batchingColor=U.batchingColor,$.instancing=U.instancing,$.instancingColor=U.instancingColor,$.instancingMorph=U.instancingMorph,$.skinning=U.skinning,$.morphTargets=U.morphTargets,$.morphNormals=U.morphNormals,$.morphColors=U.morphColors,$.morphTargetsCount=U.morphTargetsCount,$.numClippingPlanes=U.numClippingPlanes,$.numIntersection=U.numClipIntersection,$.vertexAlphas=U.vertexAlphas,$.vertexTangents=U.vertexTangents,$.toneMapping=U.toneMapping}function Dr(T,U){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;y.setFromMatrixPosition(U.matrixWorld);for(let $=0,X=T.length;$<X;$++){let Y=T[$];if(Y.texture!==null&&Y.boundingBox.containsPoint(y))return Y}return null}function an(T,U,$,X,Y){U.isScene!==!0&&(U=Ee),W.resetTextureUnits();let xt=U.fog,Et=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?U.environment:null,Mt=j===null?R.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:le.workingColorSpace,Pt=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Ut=ct.get(X.envMap||Et,Pt),te=X.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ae=!!$.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),It=!!$.morphAttributes.position,me=!!$.morphAttributes.normal,Je=!!$.morphAttributes.color,Le=Ii;X.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Le=R.toneMapping);let Me=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Sn=Me!==void 0?Me.length:0,wt=V.get(X),Un=b.state.lights;if(Xt===!0&&(jt===!0||T!==P)){let Re=T===P&&X.id===Z;ut.setState(X,T,Re)}let de=!1;X.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==Un.state.version||wt.outputColorSpace!==Mt||Y.isBatchedMesh&&wt.batching===!1||!Y.isBatchedMesh&&wt.batching===!0||Y.isBatchedMesh&&wt.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&wt.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&wt.instancing===!1||!Y.isInstancedMesh&&wt.instancing===!0||Y.isSkinnedMesh&&wt.skinning===!1||!Y.isSkinnedMesh&&wt.skinning===!0||Y.isInstancedMesh&&wt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&wt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&wt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&wt.instancingMorph===!1&&Y.morphTexture!==null||wt.envMap!==Ut||X.fog===!0&&wt.fog!==xt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==ut.numPlanes||wt.numIntersection!==ut.numIntersection)||wt.vertexAlphas!==te||wt.vertexTangents!==ae||wt.morphTargets!==It||wt.morphNormals!==me||wt.morphColors!==Je||wt.toneMapping!==Le||wt.morphTargetsCount!==Sn||!!wt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(de=!0):(de=!0,wt.__version=X.version);let di=wt.currentProgram;de===!0&&(di=ke(X,U,Y),L&&X.isNodeMaterial&&L.onUpdateProgram(X,di,wt));let Bi=!1,Ms=!1,Ur=!1,ye=di.getUniforms(),Xe=wt.uniforms;if(x.useProgram(di.program)&&(Bi=!0,Ms=!0,Ur=!0),X.id!==Z&&(Z=X.id,Ms=!0),wt.needsLights){let Re=Dr(b.state.lightProbeGridArray,Y);wt.lightProbeGrid!==Re&&(wt.lightProbeGrid=Re,Ms=!0)}if(Bi||P!==T){x.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ye.setValue(F,"projectionMatrix",T.projectionMatrix),ye.setValue(F,"viewMatrix",T.matrixWorldInverse);let Ts=ye.map.cameraPosition;Ts!==void 0&&Ts.setValue(F,Qt.setFromMatrixPosition(T.matrixWorld)),A.logarithmicDepthBuffer&&ye.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ye.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),P!==T&&(P=T,Ms=!0,Ur=!0)}if(wt.needsLights&&(Un.state.sunShadowMap.length>0&&ye.setValue(F,"sunShadowMap",Un.state.sunShadowMap,W),Un.state.directionalShadowMap.length>0&&ye.setValue(F,"directionalShadowMap",Un.state.directionalShadowMap,W),Un.state.spotShadowMap.length>0&&ye.setValue(F,"spotShadowMap",Un.state.spotShadowMap,W),Un.state.pointShadowMap.length>0&&ye.setValue(F,"pointShadowMap",Un.state.pointShadowMap,W)),Y.isSkinnedMesh){ye.setOptional(F,Y,"bindMatrix"),ye.setOptional(F,Y,"bindMatrixInverse");let Re=Y.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),ye.setValue(F,"boneTexture",Re.boneTexture,W))}Y.isBatchedMesh&&(ye.setOptional(F,Y,"batchingTexture"),ye.setValue(F,"batchingTexture",Y._matricesTexture,W),ye.setOptional(F,Y,"batchingIdTexture"),ye.setValue(F,"batchingIdTexture",Y._indirectTexture,W),ye.setOptional(F,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ye.setValue(F,"batchingColorTexture",Y._colorsTexture,W));let bs=$.morphAttributes;if((bs.position!==void 0||bs.normal!==void 0||bs.color!==void 0)&&N.update(Y,$,di),(Ms||wt.receiveShadow!==Y.receiveShadow)&&(wt.receiveShadow=Y.receiveShadow,ye.setValue(F,"receiveShadow",Y.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&U.environment!==null&&(Xe.envMapIntensity.value=U.environmentIntensity),Xe.dfgLUT!==void 0&&(Xe.dfgLUT.value=CM()),Ms){if(ye.setValue(F,"toneMappingExposure",R.toneMappingExposure),wt.needsLights&&We(Xe,Ur),xt&&X.fog===!0&&vt.refreshFogUniforms(Xe,xt),vt.refreshMaterialUniforms(Xe,X,tt,K,b.state.transmissionRenderTarget[T.id]),wt.needsLights&&wt.lightProbeGrid){let Re=wt.lightProbeGrid;Xe.probesSH.value=Re.texture,Xe.probesMin.value.copy(Re.boundingBox.min),Xe.probesMax.value.copy(Re.boundingBox.max),Xe.probesResolution.value.copy(Re.resolution)}xo.upload(F,je(wt),Xe,W)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(xo.upload(F,je(wt),Xe,W),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ye.setValue(F,"center",Y.center),ye.setValue(F,"modelViewMatrix",Y.modelViewMatrix),ye.setValue(F,"normalMatrix",Y.normalMatrix),ye.setValue(F,"modelMatrix",Y.matrixWorld),X.uniformsGroups!==void 0){let Re=X.uniformsGroups;for(let Ts=0,Fr=Re.length;Ts<Fr;Ts++){let $d=Re[Ts];ot.update($d,di),ot.bind($d,di)}}return di}function We(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.sunLights.needsUpdate=U,T.sunLightShadows.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function fi(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(T,U,$){let X=V.get(T);X.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),V.get(T.texture).__webglTexture=U,V.get(T.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:$,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){let $=V.get(T);$.__webglFramebuffer=U,$.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,$=0){j=T,q=U,k=$;let X=null,Y=!1,xt=!1;if(T){let Mt=V.get(T);if(Mt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(F.FRAMEBUFFER,Mt.__webglFramebuffer),et.copy(T.viewport),bt.copy(T.scissor),Tt=T.scissorTest,x.viewport(et),x.scissor(bt),x.setScissorTest(Tt),Z=-1;return}else if(Mt.__webglFramebuffer===void 0)W.setupRenderTarget(T);else if(Mt.__hasExternalTextures)W.rebindTextures(T,V.get(T.texture).__webglTexture,V.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let te=T.depthTexture;if(Mt.__boundDepthTexture!==te){if(te!==null&&V.has(te)&&(T.width!==te.image.width||T.height!==te.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(T)}}let Pt=T.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(xt=!0);let Ut=V.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ut[U])?X=Ut[U][$]:X=Ut[U],Y=!0):T.samples>0&&W.useMultisampledRTT(T)===!1?X=V.get(T).__webglMultisampledFramebuffer:Array.isArray(Ut)?X=Ut[$]:X=Ut,et.copy(T.viewport),bt.copy(T.scissor),Tt=T.scissorTest}else et.copy(st).multiplyScalar(tt).floor(),bt.copy(Dt).multiplyScalar(tt).floor(),Tt=kt;if($!==0&&(X=B),x.bindFramebuffer(F.FRAMEBUFFER,X)&&x.drawBuffers(T,X),x.viewport(et),x.scissor(bt),x.setScissorTest(Tt),Y){let Mt=V.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,Mt.__webglTexture,$)}else if(xt){let Mt=U;for(let Pt=0;Pt<T.textures.length;Pt++){let Ut=V.get(T.textures[Pt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Pt,Ut.__webglTexture,$,Mt)}}else if(T!==null&&$!==0){let Mt=V.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Mt.__webglTexture,$)}Z=-1};function Nr(T){let U=V.get(T);return(U.__readFormat!==T.format||U.__readType!==T.type)&&(U.__readFormat=T.format,U.__readType=T.type,U.__formatReadable=A.textureFormatReadable(T.format),U.__typeReadable=A.textureTypeReadable(T.type)),U}this.readRenderTargetPixels=function(T,U,$,X,Y,xt,Et,Mt=0){if(!(T&&T.isWebGLRenderTarget)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=V.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Et!==void 0&&(Pt=Pt[Et]),Pt){x.bindFramebuffer(F.FRAMEBUFFER,Pt);try{let Ut=T.textures[Mt],te=Ut.format,ae=Ut.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Mt);let It=Nr(Ut);if(It.__formatReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-X&&$>=0&&$<=T.height-Y&&F.readPixels(U,$,X,Y,_t.convert(te),_t.convert(ae),xt)}finally{let Ut=j!==null?V.get(j).__webglFramebuffer:null;x.bindFramebuffer(F.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(T,U,$,X,Y,xt,Et,Mt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=V.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Et!==void 0&&(Pt=Pt[Et]),Pt)if(U>=0&&U<=T.width-X&&$>=0&&$<=T.height-Y){x.bindFramebuffer(F.FRAMEBUFFER,Pt);let Ut=T.textures[Mt],te=Ut.format,ae=Ut.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Mt);let It=Nr(Ut);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let me=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,me),F.bufferData(F.PIXEL_PACK_BUFFER,xt.byteLength,F.STREAM_READ),F.readPixels(U,$,X,Y,_t.convert(te),_t.convert(ae),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Je=j!==null?V.get(j).__webglFramebuffer:null;x.bindFramebuffer(F.FRAMEBUFFER,Je);let Le=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await rm(F,Le,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,me),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,xt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(me),F.deleteSync(Le),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,$=0){let X=Math.pow(2,-$),Y=Math.floor(T.image.width*X),xt=Math.floor(T.image.height*X),Et=U!==null?U.x:0,Mt=U!==null?U.y:0;W.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,$,0,0,Et,Mt,Y,xt),x.unbindTexture()},this.copyTextureToTexture=function(T,U,$=null,X=null,Y=0,xt=0){let Et,Mt,Pt,Ut,te,ae,It,me,Je,Le=T.isCompressedTexture?T.mipmaps[xt]:T.image;if($!==null)Et=$.max.x-$.min.x,Mt=$.max.y-$.min.y,Pt=$.isBox3?$.max.z-$.min.z:1,Ut=$.min.x,te=$.min.y,ae=$.isBox3?$.min.z:0;else{let Xe=Math.pow(2,-Y);Et=Math.floor(Le.width*Xe),Mt=Math.floor(Le.height*Xe),T.isDataArrayTexture?Pt=Le.depth:T.isData3DTexture?Pt=Math.floor(Le.depth*Xe):Pt=1,Ut=0,te=0,ae=0}X!==null?(It=X.x,me=X.y,Je=X.z):(It=0,me=0,Je=0);let Me=_t.convert(U.format),Sn=_t.convert(U.type),wt;U.isData3DTexture?(W.setTexture3D(U,0),wt=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(W.setTexture2DArray(U,0),wt=F.TEXTURE_2D_ARRAY):(W.setTexture2D(U,0),wt=F.TEXTURE_2D),x.activeTexture(F.TEXTURE0),x.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),x.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),x.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let Un=x.getParameter(F.UNPACK_ROW_LENGTH),de=x.getParameter(F.UNPACK_IMAGE_HEIGHT),di=x.getParameter(F.UNPACK_SKIP_PIXELS),Bi=x.getParameter(F.UNPACK_SKIP_ROWS),Ms=x.getParameter(F.UNPACK_SKIP_IMAGES);x.pixelStorei(F.UNPACK_ROW_LENGTH,Le.width),x.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Le.height),x.pixelStorei(F.UNPACK_SKIP_PIXELS,Ut),x.pixelStorei(F.UNPACK_SKIP_ROWS,te),x.pixelStorei(F.UNPACK_SKIP_IMAGES,ae);let Ur=T.isDataArrayTexture||T.isData3DTexture,ye=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){let Xe=V.get(T),bs=V.get(U),Re=V.get(Xe.__renderTarget),Ts=V.get(bs.__renderTarget);x.bindFramebuffer(F.READ_FRAMEBUFFER,Re.__webglFramebuffer),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ts.__webglFramebuffer);for(let Fr=0;Fr<Pt;Fr++)Ur&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,V.get(T).__webglTexture,Y,ae+Fr),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,V.get(U).__webglTexture,xt,Je+Fr)),F.blitFramebuffer(Ut,te,Et,Mt,It,me,Et,Mt,F.DEPTH_BUFFER_BIT,F.NEAREST);x.bindFramebuffer(F.READ_FRAMEBUFFER,null),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Y!==0||T.isRenderTargetTexture||V.has(T)){let Xe=V.get(T),bs=V.get(U);x.bindFramebuffer(F.READ_FRAMEBUFFER,I),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,z);for(let Re=0;Re<Pt;Re++)Ur?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Xe.__webglTexture,Y,ae+Re):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Xe.__webglTexture,Y),ye?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,bs.__webglTexture,xt,Je+Re):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,bs.__webglTexture,xt),Y!==0?F.blitFramebuffer(Ut,te,Et,Mt,It,me,Et,Mt,F.COLOR_BUFFER_BIT,F.NEAREST):ye?F.copyTexSubImage3D(wt,xt,It,me,Je+Re,Ut,te,Et,Mt):F.copyTexSubImage2D(wt,xt,It,me,Ut,te,Et,Mt);x.bindFramebuffer(F.READ_FRAMEBUFFER,null),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ye?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(wt,xt,It,me,Je,Et,Mt,Pt,Me,Sn,Le.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(wt,xt,It,me,Je,Et,Mt,Pt,Me,Le.data):F.texSubImage3D(wt,xt,It,me,Je,Et,Mt,Pt,Me,Sn,Le):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,xt,It,me,Et,Mt,Me,Sn,Le.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,xt,It,me,Le.width,Le.height,Me,Le.data):F.texSubImage2D(F.TEXTURE_2D,xt,It,me,Et,Mt,Me,Sn,Le);x.pixelStorei(F.UNPACK_ROW_LENGTH,Un),x.pixelStorei(F.UNPACK_IMAGE_HEIGHT,de),x.pixelStorei(F.UNPACK_SKIP_PIXELS,di),x.pixelStorei(F.UNPACK_SKIP_ROWS,Bi),x.pixelStorei(F.UNPACK_SKIP_IMAGES,Ms),xt===0&&U.generateMipmaps&&F.generateMipmap(wt),x.unbindTexture()},this.initRenderTarget=function(T){V.get(T).__webglFramebuffer===void 0&&W.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?W.setTextureCube(T,0):T.isData3DTexture?W.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?W.setTexture2DArray(T,0):W.setTexture2D(T,0),x.unbindTexture()},this.resetState=function(){q=0,k=0,j=null,x.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}}});function So(s){return new va({color:0,emissive:16777215,emissiveIntensity:s})}var xh,zm=zi(()=>{_h();xh=class extends or{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Zi;t.deleteAttribute("uv");let e=new lr({side:mn}),n=new lr,i=new cr(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new xe(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new ua(t,n,6),a=new tn;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new xe(t,So(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new xe(t,So(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new xe(t,So(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new xe(t,So(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new xe(t,So(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new xe(t,So(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}}});function xi(s,t,e,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;Va.copy(t),Va[n]=0,Va.normalize();let c=.5*o/(o+a),h=1-Va.angleTo(s)/l;return Math.sign(Va[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Va,vh,km=zi(()=>{_h();Va=new G;vh=class s extends Zi{constructor(t=1,e=1,n=1,i=2,r=.1){let o=i*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new G,c=new G,h=new G(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,_=new G,m=.5/o;for(let p=0,S=0;p<d.length;p+=3,S+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[p+0]=h.x*Math.sign(l.x)+c.x*r,d[p+1]=h.y*Math.sign(l.y)+c.y*r,d[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/g)){case 0:_.set(1,0,0),f[S+0]=xi(_,c,"z","y",r,n),f[S+1]=1-xi(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),f[S+0]=1-xi(_,c,"z","y",r,n),f[S+1]=1-xi(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),f[S+0]=1-xi(_,c,"x","z",r,t),f[S+1]=xi(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),f[S+0]=1-xi(_,c,"x","z",r,t),f[S+1]=1-xi(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),f[S+0]=1-xi(_,c,"x","y",r,t),f[S+1]=1-xi(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),f[S+0]=xi(_,c,"x","y",r,t),f[S+1]=1-xi(_,c,"y","x",r,e);break}}static fromJSON(t){return new s(t.width,t.height,t.depth,t.segments,t.radius)}}});function fs(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Jm(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var Qn,qa,Jf,gn,Fe,yi,we,zf,PM,IM,$m,LM,DM,sn,Ve,ps,Rh,ts,Kn,$f,yh,Km,An,NM,UM,Vm,Kf,_r,Lf,Qf,FM,OM,Be,Qi,kf,jf,ri,Th,Qm,jm,Ph,Za,tg,Ja,BM,Sh,zM,td,Hs,Vf,eg,Jn,Df,Gm,Mh,ed,nd,Ws,id,Bn,Ge,Oe,xr,kM,wh,sd,ng,ig,sg,oi,VM,bo,Hm,Eh,Wa,GM,rg,Ih,Xs,pr,HM,Gf,WM,Wm,To,Ah,Lh,Dh,og,ji,ag,lg,XM,Hf,YM,qM,wo,Xm,ZM,vi,Xa,Ys,Qa,_n,JM,Wf,cg,$M,Si,Xf,hg,ug,Yf,fg,dg,KM,QM,jM,pg,tb,eb,Ao,mg,nb,Ym,si,Ga,Mo,gg,_g,Te,Ha,Nf,xg,vg,qm,ds,ib,rd,$a,$n,Eo,ue,sb,rb,ob,ab,lb,cb,mr,vr,yg,Uf,Ff,od,Ka,En,hb,ad,ub,ld,Gs,qf,cd,fb,db,pb,Ya,Sg,Mg,Ye,hd,bg,mb,gb,Nh,Tg,_b,ud,fd,xb,vb,yb,dd,zn,gr,bh,Sb,Zm,Mb,Of,Zf,wg,bb,Ch,Tb,wb,Bf,Cn,Eb,Ab,Cb,Rb,Pb,Ib,Lb,Db,Nb,Ub,Fb,Ob,Bb,zb,kb,Vb,Gb,Hb,pd=zi(()=>{Qn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},qa={duration:.5,overwrite:!1,delay:0},yi=1e8,we=1/yi,zf=Math.PI*2,PM=zf/4,IM=0,$m=Math.sqrt,LM=Math.cos,DM=Math.sin,sn=function(t){return typeof t=="string"},Ve=function(t){return typeof t=="function"},ps=function(t){return typeof t=="number"},Rh=function(t){return typeof t>"u"},ts=function(t){return typeof t=="object"},Kn=function(t){return t!==!1},$f=function(){return typeof window<"u"},yh=function(t){return Ve(t)||sn(t)},Km=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},An=Array.isArray,NM=/random\([^)]+\)/g,UM=/,\s*/g,Vm=/(?:-?\.?\d|\.)+/gi,Kf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,_r=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Lf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Qf=/[+-]=-?[.\d]+/,FM=/[^,'"\[\]\s]+/gi,OM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ri={},Th={},jm=function(t){return(Th=bo(t,ri))&&Cn},Ph=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Za=function(t,e){return!e&&console.warn(t)},tg=function(t,e){return t&&(ri[t]=e)&&Th&&(Th[t]=e)||ri},Ja=function(){return 0},BM={suppressEvents:!0,isStart:!0,kill:!1},Sh={suppressEvents:!0,kill:!1},zM={suppressEvents:!0},td={},Hs=[],Vf={},Jn={},Df={},Gm=30,Mh=[],ed="",nd=function(t){var e=t[0],n,i;if(ts(e)||Ve(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Mh.length;i--&&!Mh[i].targetTest(e););n=Mh[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new od(t[i],n)))||t.splice(i,1);return t},Ws=function(t){return t._gsap||nd(Si(t))[0]._gsap},id=function(t,e,n){return(n=t[e])&&Ve(n)?t[e]():Rh(n)&&t.getAttribute&&t.getAttribute(e)||n},Bn=function(t,e){return(t=t.split(",")).forEach(e)||t},Ge=function(t){return Math.round(t*1e5)/1e5||0},Oe=function(t){return Math.round(t*1e7)/1e7||0},xr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},kM=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},wh=function(){var t=Hs.length,e=Hs.slice(0),n,i;for(Vf={},Hs.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},sd=function(t){return!!(t._initted||t._startAt||t.add)},ng=function(t,e,n,i){Hs.length&&!gn&&wh(),t.render(e,n,i||!!(gn&&e<0&&sd(t))),Hs.length&&!gn&&wh()},ig=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(FM).length<2?e:sn(t)?t.trim():t},sg=function(t){return t},oi=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},VM=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},bo=function(t,e){for(var n in e)t[n]=e[n];return t},Hm=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=ts(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},Eh=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Wa=function(t){var e=t.parent||Be,n=t.keyframes?VM(An(t.keyframes)):oi;if(Kn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},GM=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},rg=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Ih=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Xs=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},pr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},HM=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Gf=function(t,e,n,i){return t._startAt&&(gn?t._startAt.revert(Sh):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},WM=function s(t){return!t||t._ts&&s(t.parent)},Wm=function(t){return t._repeat?To(t._tTime,t=t.duration()+t._rDelay)*t:0},To=function(t,e){var n=Math.floor(t=Oe(t/e));return t&&n===t?n-1:n},Ah=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Lh=function(t){return t._end=Oe(t._start+(t._tDur/Math.abs(t._ts||t._rts||we)||0))},Dh=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Oe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Lh(t),n._dirty||pr(n,t)),t},og=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Ah(t.rawTime(),e),(!e._dur||Qa(0,e.totalDuration(),n)-e._tTime>we)&&e.render(n,!0)),pr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-we}},ji=function(t,e,n,i){return e.parent&&Xs(e),e._start=Oe((ps(n)?n:n||t!==Be?vi(t,n,e):t._time)+e._delay),e._end=Oe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),rg(t,e,"_first","_last",t._sort?"_start":0),Hf(e)||(t._recent=e),i||og(t,e),t._ts<0&&Dh(t,t._tTime),t},ag=function(t,e){return(ri.ScrollTrigger||Ph("scrollTrigger",e))&&ri.ScrollTrigger.create(e,t)},lg=function(t,e,n,i,r){if(cd(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!gn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&eg!==$n.frame)return Hs.push(t),t._lazy=[r,i],1},XM=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Hf=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},YM=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&XM(t)&&!(!t._initted&&Hf(t))||(t._ts<0||t._dp._ts<0)&&!Hf(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=Qa(0,t._tDur,e),h=To(l,a),t._yoyo&&h&1&&(o=1-o),h!==To(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||gn||i||t._zTime===we||!e&&t._zTime){if(!t._initted&&lg(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?we:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Gf(t,e,n,!0),t._onUpdate&&!n&&si(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&si(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Xs(t,1),!n&&!gn&&(si(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},qM=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},wo=function(t,e,n,i){var r=t._repeat,o=Oe(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:Oe(o*(r+1)+t._rDelay*r):o,a>0&&!i&&Dh(t,t._tTime=t._tDur*a),t.parent&&Lh(t),n||pr(t.parent,t),t},Xm=function(t){return t instanceof En?pr(t):wo(t,t._dur)},ZM={_start:0,endTime:Ja,totalDuration:Ja},vi=function s(t,e,n){var i=t.labels,r=t._recent||ZM,o=t.duration()>=yi?r.endTime(!1):t._dur,a,l,c;return sn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(An(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Xa=function(t,e,n){var i=ps(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Kn(l.vars.inherit)&&l.parent;o.immediateRender=Kn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new Ye(e[0],o,e[r+1])},Ys=function(t,e){return t||t===0?e(t):e},Qa=function(t,e,n){return n<t?t:n>e?e:n},_n=function(t,e){return!sn(t)||!(e=OM.exec(t))?"":e[1]},JM=function(t,e,n){return Ys(n,function(i){return Qa(t,e,i)})},Wf=[].slice,cg=function(t,e){return t&&ts(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ts(t[0]))&&!t.nodeType&&t!==Qi},$M=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return sn(i)&&!e||cg(i,1)?(r=n).push.apply(r,Si(i)):n.push(i)})||n},Si=function(t,e,n){return Fe&&!e&&Fe.selector?Fe.selector(t):sn(t)&&!n&&(kf||!Eo())?Wf.call((e||jf).querySelectorAll(t),0):An(t)?$M(t,n):cg(t)?Wf.call(t,0):t?[t]:[]},Xf=function(t){return t=Si(t)[0]||Za("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Si(e,n.querySelectorAll?n:n===t?Za("Invalid scope")||jf.createElement("div"):t)}},hg=function(t){return t.sort(function(){return .5-Math.random()})},ug=function(t){if(Ve(t))return t;var e=ts(t)?t:{each:t},n=mr(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,d=i;return sn(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],d=i[1]),function(u,f,g){var _=(g||e).length,m=o[_],p,S,C,y,M,b,E,v,w;if(!m){if(w=e.grid==="auto"?0:(e.grid||[1,yi])[1],!w){for(E=-yi;E<(E=g[w++].getBoundingClientRect().left)&&w<_;);w<_&&w--}for(m=o[_]=[],p=l?Math.min(w,_)*h-.5:i%w,S=w===yi?0:l?_*d/w-.5:i/w|0,E=0,v=yi,b=0;b<_;b++)C=b%w-p,y=S-(b/w|0),m[b]=M=c?Math.abs(c==="y"?y:C):$m(C*C+y*y),M>E&&(E=M),M<v&&(v=M);i==="random"&&hg(m),m.max=E-v,m.min=v,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(w>_?_-1:c?c==="y"?_/w:w:Math.max(w,_/w))||0)*(i==="edges"?-1:1),m.b=_<0?r-_:r,m.u=_n(e.amount||e.each)||0,n=n&&_<0?cb(n):n}return _=(m[u]-m.min)/m.max||0,Oe(m.b+(n?n(_):_)*m.v)+m.u}},Yf=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Oe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ps(n)?0:_n(n))}},fg=function(t,e){var n=An(t),i,r;return!n&&ts(t)&&(i=n=t.radius||yi,t.values?(t=Si(t.values),(r=!ps(t[0]))&&(i*=i)):t=Yf(t.increment)),Ys(e,n?Ve(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=yi,h=0,d=t.length,u,f;d--;)r?(u=t[d].x-a,f=t[d].y-l,u=u*u+f*f):u=Math.abs(t[d]-a),u<c&&(c=u,h=d);return h=!i||c<=i?t[h]:o,r||h===o||ps(o)?h:h+_n(o)}:Yf(t))},dg=function(t,e,n,i){return Ys(An(t)?!e:n===!0?!!(n=0):!i,function(){return An(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},KM=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},QM=function(t,e){return function(n){return t(parseFloat(n))+(e||_n(n))}},jM=function(t,e,n){return mg(t,e,0,1,n)},pg=function(t,e,n){return Ys(n,function(i){return t[~~e(i)]})},tb=function s(t,e,n){var i=e-t;return An(t)?pg(t,s(0,t.length),e):Ys(n,function(r){return(i+(r-t)%i)%i+t})},eb=function s(t,e,n){var i=e-t,r=i*2;return An(t)?pg(t,s(0,t.length-1),e):Ys(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},Ao=function(t){return t.replace(NM,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(UM);return dg(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},mg=function(t,e,n,i,r){var o=e-t,a=i-n;return Ys(r,function(l){return n+((l-t)/o*a||0)})},nb=function s(t,e,n,i){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var o=sn(t),a={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(An(t)&&!An(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(s(t[c-1],t[c]));d--,r=function(g){g*=d;var _=Math.min(u,~~g);return h[_](g-_)},n=e}else i||(t=bo(An(t)?[]:{},t));if(!h){for(l in e)ad.call(a,t,l,"get",e[l]);r=function(g){return fd(g,a)||(o?t.p:t)}}}return Ys(n,r)},Ym=function(t,e,n){var i=t.labels,r=yi,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},si=function(t,e,n){var i=t.vars,r=i[e],o=Fe,a=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&Hs.length&&wh(),a&&(Fe=a),h=l?r.apply(c,l):r.call(c),Fe=o,h},Ga=function(t){return Xs(t),t.scrollTrigger&&t.scrollTrigger.kill(!!gn),t.progress()<1&&si(t,"onInterrupt"),t},gg=[],_g=function(t){if(t)if(t=!t.name&&t.default||t,$f()||t.headless){var e=t.name,n=Ve(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Ja,render:fd,add:ad,kill:vb,modifier:xb,rawVars:0},o={targetTest:0,get:0,getSetter:Nh,aliases:{},register:0};if(Eo(),t!==i){if(Jn[e])return;oi(i,oi(Eh(t,r),o)),bo(i.prototype,bo(r,Eh(t,o))),Jn[i.prop=e]=i,t.targetTest&&(Mh.push(i),td[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}tg(e,i),t.register&&t.register(Cn,i,zn)}else gg.push(t)},Te=255,Ha={aqua:[0,Te,Te],lime:[0,Te,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Te],navy:[0,0,128],white:[Te,Te,Te],olive:[128,128,0],yellow:[Te,Te,0],orange:[Te,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Te,0,0],pink:[Te,192,203],cyan:[0,Te,Te],transparent:[Te,Te,Te,0]},Nf=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Te+.5|0},xg=function(t,e,n){var i=t?ps(t)?[t>>16,t>>8&Te,t&Te]:0:Ha.black,r,o,a,l,c,h,d,u,f,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ha[t])i=Ha[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Te,i&Te,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Te,t&Te]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Vm),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=Nf(l+1/3,r,o),i[1]=Nf(l,r,o),i[2]=Nf(l-1/3,r,o);else if(~t.indexOf("="))return i=t.match(Kf),n&&i.length<4&&(i[3]=1),i}else i=t.match(Vm)||Ha.transparent;i=i.map(Number)}return e&&!g&&(r=i[0]/Te,o=i[1]/Te,a=i[2]/Te,d=Math.max(r,o,a),u=Math.min(r,o,a),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===r?(o-a)/f+(o<a?6:0):d===o?(a-r)/f+2:(r-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},vg=function(t){var e=[],n=[],i=-1;return t.split(ds).forEach(function(r){var o=r.match(_r)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},qm=function(t,e,n){var i="",r=(t+i).match(ds),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!r)return t;if(r=r.map(function(u){return(u=xg(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=vg(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(ds,"1").split(_r),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(ds),d=c.length-1;a<d;a++)i+=c[a]+r[a];return i+c[d]},ds=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ha)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),ib=/hsl[a]?\(/,rd=function(t){var e=t.join(" "),n;if(ds.lastIndex=0,ds.test(e))return n=ib.test(e),t[1]=qm(t[1],n),t[0]=qm(t[0],n,vg(t[1])),!0},$n=(function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,d,u,f,g=function _(m){var p=s()-i,S=m===!0,C,y,M,b;if((p>t||p<0)&&(n+=p-e),i+=p,M=i-n,C=M-o,(C>0||S)&&(b=++d.frame,u=M-d.time*1e3,d.time=M=M/1e3,o+=C+(C>=r?4:r-C),y=1),S||(l=c(_)),y)for(f=0;f<a.length;f++)a[f](M,u,b,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){Qm&&(!kf&&$f()&&(Qi=kf=window,jf=Qi.document||{},ri.gsap=Cn,(Qi.gsapVersions||(Qi.gsapVersions=[])).push(Cn.version),jm(Th||Qi.GreenSockGlobals||!Qi.gsap&&Qi||{}),gg.forEach(_g)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(m){return setTimeout(m,o-d.time*1e3+1|0)},$a=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),$a=0,c=Ja},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){r=1e3/(m||240),o=d.time*1e3+r},add:function(m,p,S){var C=p?function(y,M,b,E){m(y,M,b,E),d.remove(C)}:m;return d.remove(m),a[S?"unshift":"push"](C),Eo(),C},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},d})(),Eo=function(){return!$a&&$n.wake()},ue={},sb=/^[\d.\-M][\d.\-,\s]/,rb=/["']/g,ob=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(rb,"").trim():+c,i=l.substr(a+1).trim();return e},ab=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},lb=function(t){var e=(t+"").split("("),n=ue[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[ob(e[1])]:ab(t).split(",").map(ig)):ue._CE&&sb.test(t)?ue._CE("",t):n},cb=function(t){return function(e){return 1-t(1-e)}},mr=function(t,e){return t&&(Ve(t)?t:ue[t]||lb(t))||e},vr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return Bn(t,function(a){ue[a]=ri[a]=r,ue[o=a.toLowerCase()]=n;for(var l in r)ue[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ue[a+"."+l]=r[l]}),r},yg=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Uf=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/zf*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*DM((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:yg(a);return r=zf/r,l.config=function(c,h){return s(t,c,h)},l},Ff=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:yg(n);return i.config=function(r){return s(t,r)},i};Bn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;vr(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ue.Linear.easeNone=ue.none=ue.Linear.easeIn;vr("Elastic",Uf("in"),Uf("out"),Uf());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};vr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);vr("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});vr("Circ",function(s){return-($m(1-s*s)-1)});vr("Sine",function(s){return s===1?1:-LM(s*PM)+1});vr("Back",Ff("in"),Ff("out"),Ff());ue.SteppedEase=ue.steps=ri.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-we;return function(a){return((i*Qa(0,o,a)|0)+r)*n}}};qa.ease=ue["quad.out"];Bn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return ed+=s+","+s+"Params,"});od=function(t,e){this.id=IM++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:id,this.set=e?e.getSetter:Nh},Ka=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,wo(this,+e.duration,1,1),this.data=e.data,Fe&&(this._ctx=Fe,Fe.data.push(this)),$a||$n.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,wo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Eo(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Dh(this,n),!r._dp||r.parent||og(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ji(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===we||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ng(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Wm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Wm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?To(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-we?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Ah(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-we?0:this._rts,this.totalTime(Qa(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Lh(this),HM(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Eo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==we&&(this._tTime-=we)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Oe(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ji(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Kn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ah(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=zM);var i=gn;return gn=n,sd(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),gn=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Xm(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Xm(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(vi(this,n),Kn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Kn(i)),this._dur||(this._zTime=-we),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-we:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-we,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-we)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var a=Ve(n)?n:sg,l=function(){var h=i.then;i.then=null,r&&r(),Ve(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Ga(this)},s})();oi(Ka.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-we,_prom:0,_ps:!1,_rts:1});En=(function(s){Jm(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Kn(n.sortChildren),Be&&ji(n.parent||Be,fs(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&ag(fs(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return Xa(0,arguments,this),this},e.from=function(i,r,o){return Xa(1,arguments,this),this},e.fromTo=function(i,r,o,a){return Xa(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,Wa(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Ye(i,r,vi(this,o),1),this},e.call=function(i,r,o){return ji(this,Ye.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Ye(i,o,vi(this,l)),this},e.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,Wa(o).immediateRender=Kn(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},e.staggerFromTo=function(i,r,o,a,l,c,h,d){return a.startAt=o,Wa(a).immediateRender=Kn(a.immediateRender),this.staggerTo(i,r,a,l,c,h,d)},e.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Oe(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,f,g,_,m,p,S,C,y,M,b,E;if(this!==Be&&h>l&&i>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),u=h,y=this._start,C=this._ts,p=!C,d&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(u=Oe(h%m),h===l?(_=this._repeat,u=c):(M=Oe(h/m),_=~~M,_&&_===M&&(u=c,_--),u>c&&(u=c)),M=To(this._tTime,m),!a&&this._tTime&&M!==_&&this._tTime-M*m-this._dur<=0&&(M=_),b&&_&1&&(u=c-u,E=1),_!==M&&!this._lock){var v=b&&M&1,w=v===(b&&_&1);if(_<M&&(v=!v),a=v?0:h%c?c:h,this._lock=1,this.render(a||(E?0:Oe(_*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&si(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,M=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,a=v?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=qM(this,Oe(a),Oe(u)),S&&(h-=u-(u=S._start))),this._tTime=h,this._time=u,this._act=!!C,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!r&&!M&&(si(this,"onStart"),this._tTime!==h))return this;if(u>=a&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||u>=f._start)&&f._ts&&S!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,r,o),u!==this._time||!this._ts&&!p){S=0,g&&(h+=this._zTime=-we);break}}f=g}else{f=this._last;for(var R=i<0?i:u;f;){if(g=f._prev,(f._act||R<=f._end)&&f._ts&&S!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(R-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(R-f._start)*f._ts,r,o||gn&&sd(f)),u!==this._time||!this._ts&&!p){S=0,g&&(h+=this._zTime=R?-we:we);break}}f=g}}if(S&&!r&&(this.pause(),S.render(u>=a?0:-we)._zTime=u>=a?1:-1,this._ts))return this._start=y,Lh(this),this.render(i,r,o);this._onUpdate&&!r&&si(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(C)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Xs(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(si(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(ps(r)||(r=vi(this,r,i)),!(i instanceof Ka)){if(An(i))return i.forEach(function(a){return o.add(a,r)}),this;if(sn(i))return this.addLabel(i,r);if(Ve(i))i=Ye.delayedCall(0,i);else return this}return this!==i?ji(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-yi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ye?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return sn(i)?this.removeLabel(i):Ve(i)?this.killTweensOf(i):(i.parent===this&&Ih(this,i),i===this._recent&&(this._recent=this._last),pr(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Oe($n.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=vi(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=Ye.delayedCall(0,r||Ja,o);return a.data="isPause",this._hasPause=1,ji(this,a,vi(this,i))},e.removePause=function(i){var r=this._first;for(i=vi(this,i);r;)r._start===i&&r.data==="isPause"&&Xs(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Gs!==a[l]&&a[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=Si(i),l=this._first,c=ps(r),h;l;)l instanceof Ye?kM(l._targets,a)&&(c?(!Gs||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=vi(o,i),l=r,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,g=Ye.to(o,oi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||we,onStart:function(){if(o.pause(),!f){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&wo(g,m,0,1).render(g._time,!0,!0),f=1}h&&h.apply(g,d||[])}},r));return u?g.render(0):g},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,oi({startAt:{time:vi(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Ym(this,vi(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Ym(this,vi(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+we)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Oe(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return pr(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),pr(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,l=yi,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ji(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Oe(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;wo(o,o===Be&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Be._ts&&(ng(Be,Ah(i,Be)),eg=$n.frame),$n.frame>=Gm){Gm+=Qn.autoSleep||120;var r=Be._first;if((!r||!r._ts)&&Qn.autoSleep&&$n._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||$n.sleep()}}},t})(Ka);oi(En.prototype,{_lock:0,_hasPause:0,_forcing:0});hb=function(t,e,n,i,r,o,a){var l=new zn(this._pt,t,e,0,1,ud,null,r),c=0,h=0,d,u,f,g,_,m,p,S;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Ao(i)),o&&(S=[n,i],o(S,t,e),n=S[0],i=S[1]),u=n.match(Lf)||[];d=Lf.exec(i);)g=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==u[h++]&&(m=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?xr(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},c=Lf.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Qf.test(i)||p)&&(l.e=0),this._pt=l,l},ad=function(t,e,n,i,r,o,a,l,c,h){Ve(i)&&(i=i(r||0,t,o));var d=t[e],u=n!=="get"?n:Ve(d)?c?t[e.indexOf("set")||!Ve(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=Ve(d)?c?mb:bg:hd,g;if(sn(i)&&(~i.indexOf("random(")&&(i=Ao(i)),i.charAt(1)==="="&&(g=xr(u,i)+(_n(u)||0),(g||g===0)&&(i=g))),!h||u!==i||qf)return!isNaN(u*i)&&i!==""?(g=new zn(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?_b:Tg,0,f),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!d&&!(e in t)&&Ph(e,i),hb.call(this,t,e,u,i,f,l||Qn.stringFilter,c))},ub=function(t,e,n,i,r){if(Ve(t)&&(t=Ya(t,r,e,n,i)),!ts(t)||t.style&&t.nodeType||An(t)||Km(t))return sn(t)?Ya(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=Ya(t[a],r,e,n,i);return o},ld=function(t,e,n,i,r,o){var a,l,c,h;if(Jn[t]&&(a=new Jn[t]).init(r,a.rawVars?e[t]:ub(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new zn(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==Mo))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},cd=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,S=p&&p.data==="nested"?p.vars.targets:m,C=t._overwrite==="auto"&&!Jf,y=t.timeline,M=i.easeReverse||d,b,E,v,w,R,D,L,B,I,z,q,k,j;if(y&&(!u||!r)&&(r="none"),t._ease=mr(r,qa.ease),t._rEase=M&&(mr(M)||t._ease),t._from=!y&&!!i.runBackwards,t._from&&(t.ratio=1),!y||u&&!i.stagger){if(B=m[0]?Ws(m[0]).harness:0,k=B&&i[B.prop],b=Eh(i,td),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!f?_.render(-1,!0):_.revert(h&&g?Sh:BM),_._lazy=0),o){if(Xs(t._startAt=Ye.set(m,oi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Kn(l),startAt:null,delay:0,onUpdate:c&&function(){return si(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(gn||!a&&!f)&&t._startAt.revert(Sh),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(a=!1),v=oi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Kn(l),immediateRender:a,stagger:0,parent:p},b),k&&(v[B.prop]=k),Xs(t._startAt=Ye.set(m,v)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(gn?t._startAt.revert(Sh):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,we,we);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Kn(l)||l&&!g,E=0;E<m.length;E++){if(R=m[E],L=R._gsap||nd(m)[E]._gsap,t._ptLookup[E]=z={},Vf[L.id]&&Hs.length&&wh(),q=S===m?E:S.indexOf(R),B&&(I=new B).init(R,k||b,t,q,S)!==!1&&(t._pt=w=new zn(t._pt,R,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(Z){z[Z]=w}),I.priority&&(D=1)),!B||k)for(v in b)Jn[v]&&(I=ld(v,b,t,q,R,S))?I.priority&&(D=1):z[v]=w=ad.call(t,R,v,"get",b[v],q,S,0,i.stringFilter);t._op&&t._op[E]&&t.kill(R,t._op[E]),C&&t._pt&&(Gs=t,Be.killTweensOf(R,z,t.globalTime(e)),j=!t.parent,Gs=0),t._pt&&l&&(Vf[L.id]=1)}D&&dd(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!j,u&&e<=0&&y.render(yi,!0,!0)},fb=function(t,e,n,i,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return qf=1,t.vars[e]="+=0",cd(t,a),qf=0,l?Za(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=Ge(n)+_n(d.e)),d.b&&(d.b=h.s+_n(d.b))},db=function(t,e){var n=t[0]?Ws(t[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return e;r=bo({},e);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},pb=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(An(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},Ya=function(t,e,n,i,r){return Ve(t)?t.call(e,n,i,r):sn(t)&&~t.indexOf("random(")?Ao(t):t},Sg=ed+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Mg={};Bn(Sg+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Mg[s]=1});Ye=(function(s){Jm(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Wa(i))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=i.parent||Be,S=(An(n)||Km(n)?ps(n[0]):"length"in i)?[n]:Si(n),C,y,M,b,E,v,w,R;if(a._targets=S.length?nd(S):Za("GSAP target "+n+" not found. https://gsap.com",!Qn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,g||u||yh(c)||yh(h)){i=a.vars;var D=i.easeReverse||i.yoyoEase;if(C=a.timeline=new En({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:S}),C.kill(),C.parent=C._dp=fs(a),C._start=0,u||yh(c)||yh(h)){if(b=S.length,w=u&&ug(u),ts(u))for(E in u)~Sg.indexOf(E)&&(R||(R={}),R[E]=u[E]);for(y=0;y<b;y++)M=Eh(i,Mg),M.stagger=0,D&&(M.easeReverse=D),R&&bo(M,R),v=S[y],M.duration=+Ya(c,fs(a),y,v,S),M.delay=(+Ya(h,fs(a),y,v,S)||0)-a._delay,!u&&b===1&&M.delay&&(a._delay=h=M.delay,a._start+=h,M.delay=0),C.to(v,M,w?w(y,v,S):0),C._ease=ue.none;C.duration()?c=h=0:a.timeline=0}else if(g){Wa(oi(C.vars.defaults,{ease:"none"})),C._ease=mr(g.ease||i.ease||"none");var L=0,B,I,z;if(An(g))g.forEach(function(q){return C.to(S,q,">")}),C.duration();else{M={};for(E in g)E==="ease"||E==="easeEach"||pb(E,g[E],M,g.easeEach);for(E in M)for(B=M[E].sort(function(q,k){return q.t-k.t}),L=0,y=0;y<B.length;y++)I=B[y],z={ease:I.e,duration:(I.t-(y?B[y-1].t:0))/100*c},z[E]=I.v,C.to(S,z,L),L+=z.duration;C.duration()<c&&C.to({},{duration:c-C.duration()})}}c||a.duration(c=C.duration())}else a.timeline=0;return f===!0&&!Jf&&(Gs=fs(a),Be.killTweensOf(S),Gs=0),ji(p,fs(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!g&&a._start===Oe(p._time)&&Kn(d)&&WM(fs(a))&&p.data!=="nested")&&(a._tTime=-we,a.render(Math.max(0,-h)||0)),m&&ag(fs(a),m),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-we&&!h?l:i<we?0:i,u,f,g,_,m,p,S,C;if(!c)YM(this,i,r,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,C=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,o);if(u=Oe(d%_),d===l?(g=this._repeat,u=c):(m=Oe(d/_),g=~~m,g&&g===m?(u=c,g--):u>c&&(u=c)),p=this._yoyo&&g&1,p&&(u=c-u),m=To(this._tTime,_),u===a&&!o&&this._initted&&g===m)return this._tTime=d,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&u!==_&&this._initted&&(this._lock=o=1,this.render(Oe(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(lg(this,h?i:u,o,r,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._rEase){var y=u<a;if(y!==this._inv){var M=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=M?(y?-1:1)/M:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(u/c);if(this._from&&(this.ratio=S=1-S),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!r&&!m&&(si(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(S,f.d),f=f._next;C&&C.render(i<0?i:C._dur*C._ease(u/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Gf(this,i,r,o),si(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&si(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Gf(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Xs(this,1),!r&&!(h&&!a)&&(d||a||p)&&(si(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,l){$a||$n.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||cd(this,c),h=this._ease(c/this._dur),fb(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(Dh(this,0),this.parent||rg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Ga(this):this.scrollTrigger&&this.scrollTrigger.kill(!!gn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Gs&&Gs.vars.overwrite!==!0)._first||Ga(this),this.parent&&o!==this.timeline.totalDuration()&&wo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Si(i):a,c=this._ptLookup,h=this._pt,d,u,f,g,_,m,p;if((!r||r==="all")&&GM(a,l))return r==="all"&&(this._pt=0),Ga(this);for(d=this._op=this._op||[],r!=="all"&&(sn(r)&&(_={},Bn(r,function(S){return _[S]=1}),r=_),r=db(a,r)),p=a.length;p--;)if(~l.indexOf(a[p])){u=c[p],r==="all"?(d[p]=r,g=u,f={}):(f=d[p]=d[p]||{},g=r);for(_ in g)m=u&&u[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Ih(this,m,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&Ga(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return Xa(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return Xa(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return Be.killTweensOf(i,r,o)},t})(Ka);oi(Ye.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Bn("staggerTo,staggerFrom,staggerFromTo",function(s){Ye[s]=function(){var t=new En,e=Wf.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});hd=function(t,e,n){return t[e]=n},bg=function(t,e,n){return t[e](n)},mb=function(t,e,n,i){return t[e](i.fp,n)},gb=function(t,e,n){return t.setAttribute(e,n)},Nh=function(t,e){return Ve(t[e])?bg:Rh(t[e])&&t.setAttribute?gb:hd},Tg=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},_b=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},ud=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},fd=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},xb=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},vb=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Ih(this,e,"_pt"):e.dep||(n=1),e=i;return!n},yb=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},dd=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},zn=(function(){function s(e,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||Tg,this.d=l||this,this.set=c||hd,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=yb,this.m=n,this.mt=r,this.tween=i},s})();Bn(ed+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return td[s]=1});ri.TweenMax=ri.TweenLite=Ye;ri.TimelineLite=ri.TimelineMax=En;Be=new En({sortChildren:!1,defaults:qa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Qn.stringFilter=rd;gr=[],bh={},Sb=[],Zm=0,Mb=0,Of=function(t){return(bh[t]||Sb).map(function(e){return e()})},Zf=function(){var t=Date.now(),e=[];t-Zm>2&&(Of("matchMediaInit"),gr.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=Qi.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Of("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Zm=t,Of("matchMedia"))},wg=(function(){function s(e,n){this.selector=n&&Xf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Mb++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){Ve(n)&&(r=i,i=n,n=Ve);var o=this,a=function(){var c=Fe,h=o.selector,d;return c&&c!==o&&c.data.push(o),r&&(o.selector=Xf(r)),Fe=o,d=i.apply(o,arguments),Ve(d)&&o._r.push(d),Fe=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===Ve?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Fe;Fe=null,n(this),Fe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Ye&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof En?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ye)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=gr.length;o--;)gr[o].id===this.id&&gr.splice(o,1)},t.revert=function(n){this.kill(n||{})},s})(),bb=(function(){function s(e){this.contexts=[],this.scope=e,Fe&&Fe.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){ts(n)||(n={matches:n});var o=new wg(0,r||this.scope),a=o.conditions={},l,c,h;Fe&&!o.selector&&(o.selector=Fe.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Qi.matchMedia(n[c]),l&&(gr.indexOf(o)<0&&gr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Zf):l.addEventListener("change",Zf)));return h&&i(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),Ch={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return _g(i)})},timeline:function(t){return new En(t)},getTweensOf:function(t,e){return Be.getTweensOf(t,e)},getProperty:function(t,e,n,i){sn(t)&&(t=Si(t)[0]);var r=Ws(t||{}).get,o=n?sg:ig;return n==="native"&&(n=""),t&&(e?o((Jn[e]&&Jn[e].get||r)(t,e,n,i)):function(a,l,c){return o((Jn[a]&&Jn[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Si(t),t.length>1){var i=t.map(function(h){return Cn.quickSetter(h,e,n)}),r=i.length;return function(h){for(var d=r;d--;)i[d](h)}}t=t[0]||{};var o=Jn[e],a=Ws(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;Mo._pt=0,d.init(t,n?h+n:h,Mo,0,[t]),d.render(1,d),Mo._pt&&fd(1,Mo)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=Cn.to(t,oi((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return Be.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=mr(t.ease,qa.ease)),Hm(qa,t||{})},config:function(t){return Hm(Qn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Jn[a]&&!ri[a]&&Za(e+" effect requires "+a+" plugin.")}),Df[e]=function(a,l,c){return n(Si(a),oi(l||{},r),c)},o&&(En.prototype[e]=function(a,l,c){return this.add(Df[e](a,ts(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ue[t]=mr(e)},parseEase:function(t,e){return arguments.length?mr(t,e):ue},getById:function(t){return Be.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new En(t),i,r;for(n.smoothChildTiming=Kn(t.smoothChildTiming),Be.remove(n),n._dp=0,n._time=n._tTime=Be._time,i=Be._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Ye&&i.vars.onComplete===i._targets[0]))&&ji(n,i,i._start-i._delay),i=r;return ji(Be,n,0),n},context:function(t,e){return t?new wg(t,e):Fe},matchMedia:function(t){return new bb(t)},matchMediaRefresh:function(){return gr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Zf()},addEventListener:function(t,e){var n=bh[t]||(bh[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=bh[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:tb,wrapYoyo:eb,distribute:ug,random:dg,snap:fg,normalize:jM,getUnit:_n,clamp:JM,splitColor:xg,toArray:Si,selector:Xf,mapRange:mg,pipe:KM,unitize:QM,interpolate:nb,shuffle:hg},install:jm,effects:Df,ticker:$n,updateRoot:En.updateRoot,plugins:Jn,globalTimeline:Be,core:{PropTween:zn,globals:tg,Tween:Ye,Timeline:En,Animation:Ka,getCache:Ws,_removeLinkedListItem:Ih,reverting:function(){return gn},context:function(t){return t&&Fe&&(Fe.data.push(t),t._ctx=Fe),Fe},suppressOverwrites:function(t){return Jf=t}}};Bn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Ch[s]=Ye[s]});$n.add(En.updateRoot);Mo=Ch.to({},{duration:0});Tb=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},wb=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=Tb(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},Bf=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(sn(r)&&(l={},Bn(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}wb(a,r)}}}},Cn=Ch.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)gn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Bf("roundProps",Yf),Bf("modifiers"),Bf("snap",fg))||Ch;Ye.version=En.version=Cn.version="3.15.0";Qm=1;$f()&&Eo();Eb=ue.Power0,Ab=ue.Power1,Cb=ue.Power2,Rb=ue.Power3,Pb=ue.Power4,Ib=ue.Linear,Lb=ue.Quad,Db=ue.Cubic,Nb=ue.Quart,Ub=ue.Quint,Fb=ue.Strong,Ob=ue.Elastic,Bb=ue.Back,zb=ue.SteppedEase,kb=ue.Bounce,Vb=ue.Sine,Gb=ue.Expo,Hb=ue.Circ});var Eg,qs,Ro,yd,br,Wb,Ag,Sd,Xb,gs,Mr,Po,Co,Cg,Md,Yb,qb,es,gd,Zb,Jb,$b,Kb,Fg,Og,Qb,jb,t1,e1,n1,i1,ze,jn,s1,Bg,r1,zg,kg,_d,ai,Rg,Io,xd,Pg,Ig,Vg,Gg,Js,Zs,Lg,o1,$s,ms,a1,Dg,l1,c1,Uh,tl,Hg,Wg,Ng,bd,vd,el,Fh,md,h1,yr,ja,Sr,Xg,u1,f1,Ug,d1,Td,Yg=zi(()=>{pd();Xb=function(){return typeof window<"u"},gs={},Mr=180/Math.PI,Po=Math.PI/180,Co=Math.atan2,Cg=1e8,Md=/([A-Z])/g,Yb=/(left|right|width|margin|padding|x)/i,qb=/[\s,\(]\S/,es={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},gd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Zb=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Jb=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},$b=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Kb=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Fg=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Og=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Qb=function(t,e,n){return t.style[e]=n},jb=function(t,e,n){return t.style.setProperty(e,n)},t1=function(t,e,n){return t._gsap[e]=n},e1=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},n1=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},i1=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},ze="transform",jn=ze+"Origin",s1=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in gs&&r){if(this.tfm=this.tfm||{},t!=="transform")t=es[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=ms(i,a)}):this.tfm[t]=o.x?o[t]:ms(i,t),t===jn&&(this.tfm.zOrigin=o.zOrigin);else return es.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(ze)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(jn,e,"")),t=ze}(r||e)&&this.props.push(t,e,r[t])},Bg=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},r1=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Md,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Sd(),(!r||!r.isStart)&&!n[ze]&&(Bg(n),i.zOrigin&&n[jn]&&(n[jn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},zg=function(t,e){var n={target:t,props:[],revert:r1,save:s1};return t._gsap||Cn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},_d=function(t,e){var n=qs.createElementNS?qs.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):qs.createElement(t);return n&&n.style?n:qs.createElement(t)},ai=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Md,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,Io(e)||e,1)||""},Rg="O,Moz,ms,Ms,Webkit".split(","),Io=function(t,e,n){var i=e||br,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Rg[o]+t in r););return o<0?null:(o===3?"ms":o>=0?Rg[o]:"")+t},xd=function(){Xb()&&window.document&&(Eg=window,qs=Eg.document,Ro=qs.documentElement,br=_d("div")||{style:{}},Wb=_d("div"),ze=Io(ze),jn=ze+"Origin",br.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",kg=!!Io("perspective"),Sd=Cn.core.reverting,yd=1)},Pg=function(t){var e=t.ownerSVGElement,n=_d("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Ro.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Ro.removeChild(n),r},Ig=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Vg=function(t){var e,n;try{e=t.getBBox()}catch{e=Pg(t),n=1}return e&&(e.width||e.height)||n||(e=Pg(t)),e&&!e.width&&!e.x&&!e.y?{x:+Ig(t,["x","cx","x1"])||0,y:+Ig(t,["y","cy","y1"])||0,width:0,height:0}:e},Gg=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Vg(t))},Js=function(t,e){if(e){var n=t.style,i;e in gs&&e!==jn&&(e=ze),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Md,"-$1").toLowerCase())):n.removeAttribute(e)}},Zs=function(t,e,n,i,r,o){var a=new zn(t._pt,e,n,0,1,o?Og:Fg);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},Lg={deg:1,rad:1,turn:1},o1={grid:1,flex:1},$s=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=br.style,l=Yb.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",f=i==="%",g,_,m,p;if(i===o||!r||Lg[i]||Lg[o])return r;if(o!=="px"&&!u&&(r=s(t,e,n,"px")),p=t.getCTM&&Gg(t),(f||o==="%")&&(gs[e]||~e.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[h],Ge(f?r/g*d:r/100*g);if(a[l?"width":"height"]=d+(u?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===qs||!_.appendChild)&&(_=qs.body),m=_._gsap,m&&f&&m.width&&l&&m.time===$n.time&&!m.uncache)return Ge(r/m.width*d);if(f&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=d+i,g=t[h],S?t.style[e]=S:Js(t,e)}else(f||o==="%")&&!o1[ai(_,"display")]&&(a.position=ai(t,"position")),_===t&&(a.position="static"),_.appendChild(br),g=br[h],_.removeChild(br),a.position="absolute";return l&&f&&(m=Ws(_),m.time=$n.time,m.width=_[h]),Ge(u?g*r/d:g&&r?d/g*r:0)},ms=function(t,e,n,i){var r;return yd||xd(),e in es&&e!=="transform"&&(e=es[e],~e.indexOf(",")&&(e=e.split(",")[0])),gs[e]&&e!=="transform"?(r=el(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Fh(ai(t,jn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Uh[e]&&Uh[e](t,e,n)||ai(t,e)||id(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?$s(t,e,r,n)+n:r},a1=function(t,e,n,i){if(!n||n==="none"){var r=Io(e,t,1),o=r&&ai(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=ai(t,"borderTopColor"))}var a=new zn(this._pt,t.style,e,0,1,ud),l=0,c=0,h,d,u,f,g,_,m,p,S,C,y,M;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ai(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=ai(t,e)||i,_?t.style[e]=_:Js(t,e)),h=[n,i],rd(h),n=h[0],i=h[1],u=n.match(_r)||[],M=i.match(_r)||[],M.length){for(;d=_r.exec(i);)m=d[0],S=i.substring(l,d.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),m!==(_=u[c++]||"")&&(f=parseFloat(_)||0,y=_.substr((f+"").length),m.charAt(1)==="="&&(m=xr(f,m)+y),p=parseFloat(m),C=m.substr((p+"").length),l=_r.lastIndex-C.length,C||(C=C||Qn.units[e]||y,l===i.length&&(i+=C,a.e+=C)),y!==C&&(f=$s(t,e,_,C)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:f,c:p-f,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Og:Fg;return Qf.test(i)&&(a.e=0),this._pt=a,a},Dg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},l1=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Dg[n]||n,e[1]=Dg[i]||i,e.join(" ")},c1=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],gs[a]&&(l=1,a=a==="transformOrigin"?jn:ze),Js(n,a);l&&(Js(n,ze),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",el(n,1),o.uncache=1,Bg(i)))}},Uh={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new zn(t._pt,e,n,0,0,c1);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},tl=[1,0,0,1,0,0],Hg={},Wg=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Ng=function(t){var e=ai(t,ze);return Wg(e)?tl:e.substr(7).match(Kf).map(Ge)},bd=function(t,e){var n=t._gsap||Ws(t),i=t.style,r=Ng(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?tl:r):(r===tl&&!t.offsetParent&&t!==Ro&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Ro.appendChild(t)),r=Ng(t),l?i.display=l:Js(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Ro.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},vd=function(t,e,n,i,r,o){var a=t._gsap,l=r||bd(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,u=a.yOffset||0,f=l[0],g=l[1],_=l[2],m=l[3],p=l[4],S=l[5],C=e.split(" "),y=parseFloat(C[0])||0,M=parseFloat(C[1])||0,b,E,v,w;n?l!==tl&&(E=f*m-g*_)&&(v=y*(m/E)+M*(-_/E)+(_*S-m*p)/E,w=y*(-g/E)+M*(f/E)-(f*S-g*p)/E,y=v,M=w):(b=Vg(t),y=b.x+(~C[0].indexOf("%")?y/100*b.width:y),M=b.y+(~(C[1]||C[0]).indexOf("%")?M/100*b.height:M)),i||i!==!1&&a.smooth?(p=y-c,S=M-h,a.xOffset=d+(p*f+S*_)-p,a.yOffset=u+(p*g+S*m)-S):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=M,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[jn]="0px 0px",o&&(Zs(o,a,"xOrigin",c,y),Zs(o,a,"yOrigin",h,M),Zs(o,a,"xOffset",d,a.xOffset),Zs(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",y+" "+M)},el=function(t,e){var n=t._gsap||new od(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=ai(t,jn)||"0",h,d,u,f,g,_,m,p,S,C,y,M,b,E,v,w,R,D,L,B,I,z,q,k,j,Z,P,et,bt,Tt,Ht,zt;return h=d=u=_=m=p=S=C=y=0,f=g=1,n.svg=!!(t.getCTM&&Gg(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ze]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ze]!=="none"?l[ze]:"")),i.scale=i.rotate=i.translate="none"),E=bd(t,n.svg),n.svg&&(n.uncache?(j=t.getBBox(),c=n.xOrigin-j.x+"px "+(n.yOrigin-j.y)+"px",k=""):k=!e&&t.getAttribute("data-svg-origin"),vd(t,k||c,!!k||n.originIsAbsolute,n.smooth!==!1,E)),M=n.xOrigin||0,b=n.yOrigin||0,E!==tl&&(D=E[0],L=E[1],B=E[2],I=E[3],h=z=E[4],d=q=E[5],E.length===6?(f=Math.sqrt(D*D+L*L),g=Math.sqrt(I*I+B*B),_=D||L?Co(L,D)*Mr:0,S=B||I?Co(B,I)*Mr+_:0,S&&(g*=Math.abs(Math.cos(S*Po))),n.svg&&(h-=M-(M*D+b*B),d-=b-(M*L+b*I))):(zt=E[6],Tt=E[7],P=E[8],et=E[9],bt=E[10],Ht=E[11],h=E[12],d=E[13],u=E[14],v=Co(zt,bt),m=v*Mr,v&&(w=Math.cos(-v),R=Math.sin(-v),k=z*w+P*R,j=q*w+et*R,Z=zt*w+bt*R,P=z*-R+P*w,et=q*-R+et*w,bt=zt*-R+bt*w,Ht=Tt*-R+Ht*w,z=k,q=j,zt=Z),v=Co(-B,bt),p=v*Mr,v&&(w=Math.cos(-v),R=Math.sin(-v),k=D*w-P*R,j=L*w-et*R,Z=B*w-bt*R,Ht=I*R+Ht*w,D=k,L=j,B=Z),v=Co(L,D),_=v*Mr,v&&(w=Math.cos(v),R=Math.sin(v),k=D*w+L*R,j=z*w+q*R,L=L*w-D*R,q=q*w-z*R,D=k,z=j),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=Ge(Math.sqrt(D*D+L*L+B*B)),g=Ge(Math.sqrt(q*q+zt*zt)),v=Co(z,q),S=Math.abs(v)>2e-4?v*Mr:0,y=Ht?1/(Ht<0?-Ht:Ht):0),n.svg&&(k=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Wg(ai(t,ze)),k&&t.setAttribute("transform",k))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(f*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=Ge(f),n.scaleY=Ge(g),n.rotation=Ge(_)+a,n.rotationX=Ge(m)+a,n.rotationY=Ge(p)+a,n.skewX=S+a,n.skewY=C+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[jn]=Fh(c)),n.xOffset=n.yOffset=0,n.force3D=Qn.force3D,n.renderTransform=n.svg?u1:kg?Xg:h1,n.uncache=0,n},Fh=function(t){return(t=t.split(" "))[0]+" "+t[1]},md=function(t,e,n){var i=_n(e);return Ge(parseFloat(e)+parseFloat($s(t,"x",n+"px",i)))+i},h1=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Xg(t,e)},yr="0deg",ja="0px",Sr=") ",Xg=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,C=n.zOrigin,y="",M=p==="auto"&&t&&t!==1||p===!0;if(C&&(d!==yr||h!==yr)){var b=parseFloat(h)*Po,E=Math.sin(b),v=Math.cos(b),w;b=parseFloat(d)*Po,w=Math.cos(b),o=md(S,o,E*w*-C),a=md(S,a,-Math.sin(b)*-C),l=md(S,l,v*w*-C+C)}m!==ja&&(y+="perspective("+m+Sr),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(M||o!==ja||a!==ja||l!==ja)&&(y+=l!==ja||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Sr),c!==yr&&(y+="rotate("+c+Sr),h!==yr&&(y+="rotateY("+h+Sr),d!==yr&&(y+="rotateX("+d+Sr),(u!==yr||f!==yr)&&(y+="skew("+u+", "+f+Sr),(g!==1||_!==1)&&(y+="scale("+g+", "+_+Sr),S.style[ze]=y||"translate(0, 0)"},u1=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,C=parseFloat(o),y=parseFloat(a),M,b,E,v,w;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Po,c*=Po,M=Math.cos(l)*d,b=Math.sin(l)*d,E=Math.sin(l-c)*-u,v=Math.cos(l-c)*u,c&&(h*=Po,w=Math.tan(c-h),w=Math.sqrt(1+w*w),E*=w,v*=w,h&&(w=Math.tan(h),w=Math.sqrt(1+w*w),M*=w,b*=w)),M=Ge(M),b=Ge(b),E=Ge(E),v=Ge(v)):(M=d,v=u,b=E=0),(C&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(C=$s(f,"x",o,"px"),y=$s(f,"y",a,"px")),(g||_||m||p)&&(C=Ge(C+g-(g*M+_*E)+m),y=Ge(y+_-(g*b+_*v)+p)),(i||r)&&(w=f.getBBox(),C=Ge(C+i/100*w.width),y=Ge(y+r/100*w.height)),w="matrix("+M+","+b+","+E+","+v+","+C+","+y+")",f.setAttribute("transform",w),S&&(f.style[ze]=w)},f1=function(t,e,n,i,r){var o=360,a=sn(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?Mr:1),c=l-i,h=i+c+"deg",d,u;return a&&(d=r.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*Cg)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*Cg)%o-~~(c/o)*o)),t._pt=u=new zn(t._pt,e,n,i,c,Zb),u.e=h,u.u="deg",t._props.push(n),u},Ug=function(t,e){for(var n in e)t[n]=e[n];return t},d1=function(t,e,n){var i=Ug({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,u,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[ze]=e,a=el(n,1),Js(n,ze),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ze],o[ze]=e,a=el(n,1),o[ze]=c);for(l in gs)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(f=_n(c),g=_n(h),d=f!==g?$s(n,l,c,g):parseFloat(c),u=parseFloat(h),t._pt=new zn(t._pt,a,l,d,u-d,gd),t._pt.u=g||0,t._props.push(l));Ug(a,i)};Bn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});Uh[t>1?"border"+s:s]=function(a,l,c,h,d){var u,f;if(arguments.length<4)return u=o.map(function(g){return ms(a,g,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},o.forEach(function(g,_){return f[g]=u[_]=u[_]||u[(_-1)/2|0]}),a.init(l,f,d)}});Td={name:"css",register:xd,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,l=n.vars.startAt,c,h,d,u,f,g,_,m,p,S,C,y,M,b,E,v,w;yd||xd(),this.styles=this.styles||zg(t),v=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(Jn[_]&&ld(_,e,n,i,t,r)))){if(f=typeof h,g=Uh[_],f==="function"&&(h=h.call(n,i,t,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Ao(h)),g)g(this,t,_,h,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",ds.lastIndex=0,ds.test(c)||(m=_n(c),p=_n(h),p?m!==p&&(c=$s(t,_,c,p)+p):m&&(h+=m)),this.add(a,"setProperty",c,h,i,r,0,0,_),o.push(_),v.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,r):l[_],sn(c)&&~c.indexOf("random(")&&(c=Ao(c)),_n(c+"")||c==="auto"||(c+=Qn.units[_]||_n(ms(t,_))||""),(c+"").charAt(1)==="="&&(c=ms(t,_))):c=ms(t,_),u=parseFloat(c),S=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),d=parseFloat(h),_ in es&&(_==="autoAlpha"&&(u===1&&ms(t,"visibility")==="hidden"&&d&&(u=0),v.push("visibility",0,a.visibility),Zs(this,a,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=es[_],~_.indexOf(",")&&(_=_.split(",")[0]))),C=_ in gs,C){if(this.styles.save(_),w=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=ai(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var R=t.style.perspective;t.style.perspective=h,h=ai(t,"perspective"),R?t.style.perspective=R:Js(t,"perspective")}d=parseFloat(h)}if(y||(M=t._gsap,M.renderTransform&&!e.parseTransform||el(t,e.parseTransform),b=e.smoothOrigin!==!1&&M.smooth,y=this._pt=new zn(this._pt,a,ze,0,1,M.renderTransform,M,0,-1),y.dep=1),_==="scale")this._pt=new zn(this._pt,M,"scaleY",M.scaleY,(S?xr(M.scaleY,S+d):d)-M.scaleY||0,gd),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){v.push(jn,0,a[jn]),h=l1(h),M.svg?vd(t,h,0,b,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==M.zOrigin&&Zs(this,M,"zOrigin",M.zOrigin,p),Zs(this,a,_,Fh(c),Fh(h)));continue}else if(_==="svgOrigin"){vd(t,h,1,b,0,this);continue}else if(_ in Hg){f1(this,M,_,u,S?xr(u,S+h):h);continue}else if(_==="smoothOrigin"){Zs(this,M,"smooth",M.smooth,h);continue}else if(_==="force3D"){M[_]=h;continue}else if(_==="transform"){d1(this,h,t);continue}}else _ in a||(_=Io(_)||_);if(C||(d||d===0)&&(u||u===0)&&!qb.test(h)&&_ in a)m=(c+"").substr((u+"").length),d||(d=0),p=_n(h)||(_ in Qn.units?Qn.units[_]:m),m!==p&&(u=$s(t,_,c,p)),this._pt=new zn(this._pt,C?M:a,_,u,(S?xr(u,S+d):d)-u,!C&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?Kb:gd),this._pt.u=p||0,C&&w!==h?(this._pt.b=c,this._pt.e=w,this._pt.r=$b):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Jb);else if(_ in a)a1.call(this,t,_,c,S?S+h:h);else if(_ in t)this.add(t,_,c||t[_],S?S+h:h,i,r);else if(_!=="parseTransform"){Ph(_,h);continue}C||(_ in a?v.push(_,0,a[_]):typeof t[_]=="function"?v.push(_,2,t[_]()):v.push(_,1,c||t[_])),o.push(_)}}E&&dd(this)},render:function(t,e){if(e.tween._time||!Sd())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:ms,aliases:es,getSetter:function(t,e,n){var i=es[e];return i&&i.indexOf(",")<0&&(e=i),e in gs&&e!==jn&&(t._gsap.x||ms(t,"x"))?n&&Ag===n?e==="scale"?e1:t1:(Ag=n||{})&&(e==="scale"?n1:i1):t.style&&!Rh(t.style[e])?Qb:~e.indexOf("-")?jb:Nh(t,e)},core:{_removeProperty:Js,_getMatrix:bd}};Cn.utils.checkPrefix=Io;Cn.core.getStyleSaver=zg;(function(s,t,e,n){var i=Bn(s+","+t+","+e,function(r){gs[r]=1});Bn(t,function(r){Qn.units[r]="deg",Hg[r]=1}),es[i[13]]=s+","+t,Bn(n,function(r){var o=r.split(":");es[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Bn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Qn.units[s]="px"});Cn.registerPlugin(Td)});var xn,IA,qg=zi(()=>{pd();Yg();xn=Cn.registerPlugin(Td)||Cn,IA=xn.core.Tween});function Zg(s,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function p1(s,t,e){return t&&Zg(s.prototype,t),e&&Zg(s,e),s}var vn,zh,m1,li,Ks,Qs,Do,$g,Tr,No,Kg,_s,Ni,Qg,jg,t_,Lo,ie,Ui,il,wd,g1,vs,sl,Vn,kn,Oh,Bh,Ed,kh,Rn,Ke,Gn,_1,xs,Vh,nl,Jg,e_,n_,He,i_=zi(()=>{jg=function(){return vn||typeof window<"u"&&(vn=window.gsap)&&vn.registerPlugin&&vn},t_=1,Lo=[],ie=[],Ui=[],il=Date.now,wd=function(t,e){return e},g1=function(){var t=No.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ie),i.push.apply(i,Ui),ie=n,Ui=i,wd=function(o,a){return e[o](a)}},vs=function(t,e){return~Ui.indexOf(t)&&Ui[Ui.indexOf(t)+1][e]},sl=function(t){return!!~Kg.indexOf(t)},Vn=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:i!==!1,capture:!!r})},kn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Oh="scrollLeft",Bh="scrollTop",Ed=function(){return _s&&_s.isPressed||ie.cache++},kh=function(t,e){var n=function i(r){if(r||r===0){t_&&(li.history.scrollRestoration="manual");var o=_s&&_s.isPressed;r=i.v=Math.round(r)||(_s&&_s.iOS?1:0),t(r),i.cacheID=ie.cache,o&&wd("ss",r)}else(e||ie.cache!==i.cacheID||wd("ref"))&&(i.cacheID=ie.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Rn={s:Oh,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:kh(function(s){return arguments.length?li.scrollTo(s,Ke.sc()):li.pageXOffset||Ks[Oh]||Qs[Oh]||Do[Oh]||0})},Ke={s:Bh,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Rn,sc:kh(function(s){return arguments.length?li.scrollTo(Rn.sc(),s):li.pageYOffset||Ks[Bh]||Qs[Bh]||Do[Bh]||0})},Gn=function(t,e){return(e&&e._ctx&&e._ctx.selector||vn.utils.toArray)(t)[0]||(typeof t=="string"&&vn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},_1=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},xs=function(t,e){var n=e.s,i=e.sc;sl(t)&&(t=Ks.scrollingElement||Qs);var r=ie.indexOf(t),o=i===Ke.sc?1:2;!~r&&(r=ie.push(t)-1),ie[r+o]||Vn(t,"scroll",Ed);var a=ie[r+o],l=a||(ie[r+o]=kh(vs(t,n),!0)||(sl(t)?i:kh(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=vn.getProperty(t,"scrollBehavior")==="smooth"),l},Vh=function(t,e,n){var i=t,r=t,o=il(),a=o,l=e||50,c=Math.max(500,l*3),h=function(g,_){var m=il();_||m-o>l?(r=i,i=g,a=o,o=m):n?i+=g:i=r+(g-r)/(m-a)*(o-a)},d=function(){r=i=n?0:i,a=o=0},u=function(g){var _=a,m=r,p=il();return(g||g===0)&&g!==i&&h(g),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:h,reset:d,getVelocity:u}},nl=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Jg=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},e_=function(){No=vn.core.globals().ScrollTrigger,No&&No.core&&g1()},n_=function(t){return vn=t||jg(),!zh&&vn&&typeof document<"u"&&document.body&&(li=window,Ks=document,Qs=Ks.documentElement,Do=Ks.body,Kg=[li,Ks,Qs,Do],m1=vn.utils.clamp,Qg=vn.core.context||function(){},Tr="onpointerenter"in Do?"pointer":"mouse",$g=He.isTouch=li.matchMedia&&li.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in li||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ni=He.eventTypes=("ontouchstart"in Qs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Qs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return t_=0},500),zh=1),No||e_(),zh};Rn.op=Ke;ie.cache=0;He=(function(){function s(e){this.init(e)}var t=s.prototype;return t.init=function(n){zh||n_(vn)||console.warn("Please gsap.registerPlugin(Observer)"),No||e_();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,u=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,S=n.onDrag,C=n.onPress,y=n.onRelease,M=n.onRight,b=n.onLeft,E=n.onUp,v=n.onDown,w=n.onChangeX,R=n.onChangeY,D=n.onChange,L=n.onToggleX,B=n.onToggleY,I=n.onHover,z=n.onHoverEnd,q=n.onMove,k=n.ignoreCheck,j=n.isNormalizer,Z=n.onGestureStart,P=n.onGestureEnd,et=n.onWheel,bt=n.onEnable,Tt=n.onDisable,Ht=n.onClick,zt=n.scrollSpeed,Wt=n.capture,K=n.allowClicks,tt=n.lockAxis,gt=n.onLockAxis;this.target=a=Gn(a)||Qs,this.vars=n,f&&(f=vn.utils.toArray(f)),i=i||1e-9,r=r||0,g=g||1,zt=zt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(li.getComputedStyle(Do).lineHeight)||22);var Bt,st,Dt,kt,Lt,Xt,jt,H=this,Qt=0,pe=0,Ee=n.passive||!h&&n.passive!==!1,Gt=xs(a,Rn),fe=xs(a,Ke),F=Gt(),Ae=fe(),it=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ni[0]==="pointerdown",A=sl(a),x=a.ownerDocument||Ks,O=[0,0,0],V=[0,0,0],W=0,ct=function(){return W=il()},lt=function(at,Ot){return(H.event=at)&&f&&_1(at.target,f)||Ot&&it&&at.pointerType!=="touch"||k&&k(at,Ot)},Q=function(){H._vx.reset(),H._vy.reset(),st.pause(),d&&d(H)},J=function(){var at=H.deltaX=Jg(O),Ot=H.deltaY=Jg(V),ht=Math.abs(at)>=i,Vt=Math.abs(Ot)>=i;D&&(ht||Vt)&&D(H,at,Ot,O,V),ht&&(M&&H.deltaX>0&&M(H),b&&H.deltaX<0&&b(H),w&&w(H),L&&H.deltaX<0!=Qt<0&&L(H),Qt=H.deltaX,O[0]=O[1]=O[2]=0),Vt&&(v&&H.deltaY>0&&v(H),E&&H.deltaY<0&&E(H),R&&R(H),B&&H.deltaY<0!=pe<0&&B(H),pe=H.deltaY,V[0]=V[1]=V[2]=0),(kt||Dt)&&(q&&q(H),Dt&&(m&&Dt===1&&m(H),S&&S(H),Dt=0),kt=!1),Xt&&!(Xt=!1)&&gt&&gt(H),Lt&&(et(H),Lt=!1),Bt=0},rt=function(at,Ot,ht){O[ht]+=at,V[ht]+=Ot,H._vx.update(at),H._vy.update(Ot),c?Bt||(Bt=requestAnimationFrame(J)):J()},vt=function(at,Ot){tt&&!jt&&(H.axis=jt=Math.abs(at)>Math.abs(Ot)?"x":"y",Xt=!0),jt!=="y"&&(O[2]+=at,H._vx.update(at,!0)),jt!=="x"&&(V[2]+=Ot,H._vy.update(Ot,!0)),c?Bt||(Bt=requestAnimationFrame(J)):J()},dt=function(at){if(!lt(at,1)){at=nl(at,h);var Ot=at.clientX,ht=at.clientY,Vt=Ot-H.x,Rt=ht-H.y,Jt=H.isDragging;H.x=Ot,H.y=ht,(Jt||(Vt||Rt)&&(Math.abs(H.startX-Ot)>=r||Math.abs(H.startY-ht)>=r))&&(Dt||(Dt=Jt?2:1),Jt||(H.isDragging=!0),vt(Vt,Rt))}},mt=H.onPress=function(ft){lt(ft,1)||ft&&ft.button||(H.axis=jt=null,st.pause(),H.isPressed=!0,ft=nl(ft),Qt=pe=0,H.startX=H.x=ft.clientX,H.startY=H.y=ft.clientY,H._vx.reset(),H._vy.reset(),Vn(j?a:x,Ni[1],dt,Ee,!0),H.deltaX=H.deltaY=0,C&&C(H))},ut=H.onRelease=function(ft){if(!lt(ft,1)){kn(j?a:x,Ni[1],dt,!0);var at=!isNaN(H.y-H.startY),Ot=H.isDragging,ht=Ot&&(Math.abs(H.x-H.startX)>3||Math.abs(H.y-H.startY)>3),Vt=nl(ft);!ht&&at&&(H._vx.reset(),H._vy.reset(),h&&K&&vn.delayedCall(.08,function(){if(il()-W>300&&!ft.defaultPrevented){if(ft.target.click)ft.target.click();else if(x.createEvent){var Rt=x.createEvent("MouseEvents");Rt.initMouseEvent("click",!0,!0,li,1,Vt.screenX,Vt.screenY,Vt.clientX,Vt.clientY,!1,!1,!1,!1,0,null),ft.target.dispatchEvent(Rt)}}})),H.isDragging=H.isGesturing=H.isPressed=!1,d&&Ot&&!j&&st.restart(!0),Dt&&J(),p&&Ot&&p(H),y&&y(H,ht)}},Ct=function(at){return at.touches&&at.touches.length>1&&(H.isGesturing=!0)&&Z(at,H.isDragging)},Ft=function(){return(H.isGesturing=!1)||P(H)},N=function(at){if(!lt(at)){var Ot=Gt(),ht=fe();rt((Ot-F)*zt,(ht-Ae)*zt,1),F=Ot,Ae=ht,d&&st.restart(!0)}},pt=function(at){if(!lt(at)){at=nl(at,h),et&&(Lt=!0);var Ot=(at.deltaMode===1?l:at.deltaMode===2?li.innerHeight:1)*g;rt(at.deltaX*Ot,at.deltaY*Ot,0),d&&!j&&st.restart(!0)}},nt=function(at){if(!lt(at)){var Ot=at.clientX,ht=at.clientY,Vt=Ot-H.x,Rt=ht-H.y;H.x=Ot,H.y=ht,kt=!0,d&&st.restart(!0),(Vt||Rt)&&vt(Vt,Rt)}},_t=function(at){H.event=at,I(H)},yt=function(at){H.event=at,z(H)},ot=function(at){return lt(at)||nl(at,h)&&Ht(H)};st=H._dc=vn.delayedCall(u||.25,Q).pause(),H.deltaX=H.deltaY=0,H._vx=Vh(0,50,!0),H._vy=Vh(0,50,!0),H.scrollX=Gt,H.scrollY=fe,H.isDragging=H.isGesturing=H.isPressed=!1,Qg(this),H.enable=function(ft){return H.isEnabled||(Vn(A?x:a,"scroll",Ed),o.indexOf("scroll")>=0&&Vn(A?x:a,"scroll",N,Ee,Wt),o.indexOf("wheel")>=0&&Vn(a,"wheel",pt,Ee,Wt),(o.indexOf("touch")>=0&&$g||o.indexOf("pointer")>=0)&&(Vn(a,Ni[0],mt,Ee,Wt),Vn(x,Ni[2],ut),Vn(x,Ni[3],ut),K&&Vn(a,"click",ct,!0,!0),Ht&&Vn(a,"click",ot),Z&&Vn(x,"gesturestart",Ct),P&&Vn(x,"gestureend",Ft),I&&Vn(a,Tr+"enter",_t),z&&Vn(a,Tr+"leave",yt),q&&Vn(a,Tr+"move",nt)),H.isEnabled=!0,H.isDragging=H.isGesturing=H.isPressed=kt=Dt=!1,H._vx.reset(),H._vy.reset(),F=Gt(),Ae=fe(),ft&&ft.type&&mt(ft),bt&&bt(H)),H},H.disable=function(){H.isEnabled&&(Lo.filter(function(ft){return ft!==H&&sl(ft.target)}).length||kn(A?x:a,"scroll",Ed),H.isPressed&&(H._vx.reset(),H._vy.reset(),kn(j?a:x,Ni[1],dt,!0)),kn(A?x:a,"scroll",N,Wt),kn(a,"wheel",pt,Wt),kn(a,Ni[0],mt,Wt),kn(x,Ni[2],ut),kn(x,Ni[3],ut),kn(a,"click",ct,!0),kn(a,"click",ot),kn(x,"gesturestart",Ct),kn(x,"gestureend",Ft),kn(a,Tr+"enter",_t),kn(a,Tr+"leave",yt),kn(a,Tr+"move",nt),H.isEnabled=H.isPressed=H.isDragging=!1,Tt&&Tt(H))},H.kill=H.revert=function(){H.disable();var ft=Lo.indexOf(H);ft>=0&&Lo.splice(ft,1),_s===H&&(_s=0)},Lo.push(H),j&&sl(a)&&(_s=H),H.enable(_)},p1(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();He.version="3.15.0";He.create=function(s){return new He(s)};He.register=n_;He.getAll=function(){return Lo.slice()};He.getById=function(s){return Lo.filter(function(t){return t.vars.id===s})[0]};jg()&&vn.registerPlugin(He)});var At,Bo,oe,ve,ui,_e,kd,iu,xl,ul,ol,Gh,Pn,ou,Dd,Wn,s_,r_,zo,S_,Ad,M_,Hn,Nd,b_,T_,js,Ud,Vd,ko,Gd,fl,Fd,Cd,Hh,In,Rd,Ti,al,o_,a_,x1,l_,c_,ns,ll,w_,E_,Pr,A_,C_,v1,y1,is,Wh,hi,Ln,cl,wr,rl,Uo,Fo,R_,P_,Hd,Wd,Ar,Cr,dl,pl,ml,gl,Qe,Mi,Go,Xd,rn,bi,S1,h_,ys,su,I_,M1,Yd,b1,Xh,un,hn,Yh,u_,qh,ru,Qh,Zh,jh,se,Od,vl,f_,Oo,Pd,hl,Ir,T1,L_,Lr,ci,D_,N_,qd,U_,Xn,Rr,d_,w1,F_,p_,Er,Bd,tu,_l,Ss,zd,eu,E1,Id,A1,Vo,Jh,C1,nu,m_,R1,g_,O_,$h,__,Kt,x_,Ld,Kh,P1,B_,I1,v_,y_,L1,z_=zi(()=>{i_();Hh=1,In=Date.now,Rd=In(),Ti=0,al=0,o_=function(t,e,n){var i=hi(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},a_=function(t,e){return e&&(!hi(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},x1=function s(){return al&&requestAnimationFrame(s)},l_=function(){return ou=1},c_=function(){return ou=0},ns=function(t){return t},ll=function(t){return Math.round(t*1e5)/1e5||0},w_=function(){return typeof window<"u"},E_=function(){return At||w_()&&(At=window.gsap)&&At.registerPlugin&&At},Pr=function(t){return!!~kd.indexOf(t)},A_=function(t){return(t==="Height"?Gd:oe["inner"+t])||ui["client"+t]||_e["client"+t]},C_=function(t){return vs(t,"getBoundingClientRect")||(Pr(t)?function(){return nu.width=oe.innerWidth,nu.height=Gd,nu}:function(){return ys(t)})},v1=function(t,e,n){var i=n.d,r=n.d2,o=n.a;return(o=vs(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?A_(r):t["client"+r])||0}},y1=function(t,e){return!e||~Ui.indexOf(t)?C_(t):function(){return nu}},is=function(t,e){var n=e.s,i=e.d2,r=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=vs(t,n))?o()-C_(t)()[r]:Pr(t)?(ui[n]||_e[n])-A_(i):t[n]-t["offset"+i])},Wh=function(t,e){for(var n=0;n<zo.length;n+=3)(!e||~e.indexOf(zo[n+1]))&&t(zo[n],zo[n+1],zo[n+2])},hi=function(t){return typeof t=="string"},Ln=function(t){return typeof t=="function"},cl=function(t){return typeof t=="number"},wr=function(t){return typeof t=="object"},rl=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Uo=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},Fo=Math.abs,R_="left",P_="top",Hd="right",Wd="bottom",Ar="width",Cr="height",dl="Right",pl="Left",ml="Top",gl="Bottom",Qe="padding",Mi="margin",Go="Width",Xd="Height",rn="px",bi=function(t){return oe.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},S1=function(t){var e=bi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},h_=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},ys=function(t,e){var n=e&&bi(t)[Dd]!=="matrix(1, 0, 0, 1, 0, 0)"&&At.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},su=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},I_=function(t){var e=[],n=t.labels,i=t.duration(),r;for(r in n)e.push(n[r]/i);return e},M1=function(t){return function(e){return At.utils.snap(I_(t),e)}},Yd=function(t){var e=At.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return e(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=e(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:e(r<0?i-t:i+t)}},b1=function(t){return function(e,n){return Yd(I_(t))(e,n.direction)}},Xh=function(t,e,n,i){return n.split(",").forEach(function(r){return t(e,r,i)})},un=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:!i,capture:!!r})},hn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Yh=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},u_={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},qh={toggleActions:"play",anticipatePin:0},ru={top:0,left:0,center:.5,bottom:1,right:1},Qh=function(t,e){if(hi(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in ru?ru[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Zh=function(t,e,n,i,r,o,a,l){var c=r.startColor,h=r.endColor,d=r.fontSize,u=r.indent,f=r.fontWeight,g=ve.createElement("div"),_=Pr(n)||vs(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,p=_?_e:n.tagName==="IFRAME"?n.contentDocument.body:n,S=t.indexOf("start")!==-1,C=S?c:h,y="border-color:"+C+";font-size:"+d+";color:"+C+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(y+=(i===Ke?Hd:Wd)+":"+(o+parseFloat(u))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=S,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=y,g.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],jh(g,0,i,S),g},jh=function(t,e,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+Go]=1,r["border"+a+Go]=0,r[n.p]=e+"px",At.set(t,r)},se=[],Od={},f_=function(){return In()-Ti>34&&(vl||(vl=requestAnimationFrame(Ss)))},Oo=function(){(!Hn||!Hn.isPressed||Hn.startX>_e.clientWidth)&&(ie.cache++,Hn?vl||(vl=requestAnimationFrame(Ss)):Ss(),Ti||Lr("scrollStart"),Ti=In())},Pd=function(){T_=oe.innerWidth,b_=oe.innerHeight},hl=function(t){ie.cache++,(t===!0||!Pn&&!M_&&!ve.fullscreenElement&&!ve.webkitFullscreenElement&&(!Nd||T_!==oe.innerWidth||Math.abs(oe.innerHeight-b_)>oe.innerHeight*.25))&&iu.restart(!0)},Ir={},T1=[],L_=function s(){return hn(Kt,"scrollEnd",s)||Er(!0)},Lr=function(t){return Ir[t]&&Ir[t].map(function(e){return e()})||T1},ci=[],D_=function(t){for(var e=0;e<ci.length;e+=5)(!t||ci[e+4]&&ci[e+4].query===t)&&(ci[e].style.cssText=ci[e+1],ci[e].getBBox&&ci[e].setAttribute("transform",ci[e+2]||""),ci[e+3].uncache=1)},N_=function(){return ie.forEach(function(t){return Ln(t)&&++t.cacheID&&(t.rec=t())})},qd=function(t,e){var n;for(Wn=0;Wn<se.length;Wn++)n=se[Wn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));fl=!0,e&&D_(e),e||Lr("revert")},U_=function(t,e){ie.cache++,(e||!Xn)&&ie.forEach(function(n){return Ln(n)&&n.cacheID++&&(n.rec=0)}),hi(t)&&(oe.history.scrollRestoration=Vd=t)},Rr=0,w1=function(){if(d_!==Rr){var t=d_=Rr;requestAnimationFrame(function(){return t===Rr&&Er(!0)})}},F_=function(){_e.appendChild(ko),Gd=!Hn&&ko.offsetHeight||oe.innerHeight,_e.removeChild(ko)},p_=function(t){return xl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Er=function(t,e){if(ui=ve.documentElement,_e=ve.body,kd=[oe,ve,ui,_e],Ti&&!t&&!fl){un(Kt,"scrollEnd",L_);return}F_(),Xn=Kt.isRefreshing=!0,fl||N_();var n=Lr("refreshInit");S_&&Kt.sort(),e||qd(),ie.forEach(function(i){Ln(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),se.slice(0).forEach(function(i){return i.refresh()}),fl=!1,se.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),Fd=1,p_(!0),se.forEach(function(i){var r=is(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),p_(!1),Fd=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ie.forEach(function(i){Ln(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),U_(Vd,1),iu.pause(),Rr++,Xn=2,Ss(2),se.forEach(function(i){return Ln(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Xn=Kt.isRefreshing=!1,Lr("refresh")},Bd=0,tu=1,Ss=function(t){if(t===2||!Xn&&!fl){Kt.isUpdating=!0,_l&&_l.update(0);var e=se.length,n=In(),i=n-Rd>=50,r=e&&se[0].scroll();if(tu=Bd>r?-1:1,Xn||(Bd=r),i&&(Ti&&!ou&&n-Ti>200&&(Ti=0,Lr("scrollEnd")),ol=Rd,Rd=n),tu<0){for(Wn=e;Wn-- >0;)se[Wn]&&se[Wn].update(0,i);tu=1}else for(Wn=0;Wn<e;Wn++)se[Wn]&&se[Wn].update(0,i);Kt.isUpdating=!1}vl=0},zd=[R_,P_,Wd,Hd,Mi+gl,Mi+dl,Mi+ml,Mi+pl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],eu=zd.concat([Ar,Cr,"boxSizing","max"+Go,"max"+Xd,"position",Mi,Qe,Qe+ml,Qe+dl,Qe+gl,Qe+pl]),E1=function(t,e,n){Vo(n);var i=t._gsap;if(i.spacerIsNative)Vo(i.spacerState);else if(t._gsap.swappedIn){var r=e.parentNode;r&&(r.insertBefore(t,e),r.removeChild(e))}t._gsap.swappedIn=!1},Id=function(t,e,n,i){if(!t._gsap.swappedIn){for(var r=zd.length,o=e.style,a=t.style,l;r--;)l=zd[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Wd]=a[Hd]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ar]=su(t,Rn)+rn,o[Cr]=su(t,Ke)+rn,o[Qe]=a[Mi]=a[P_]=a[R_]="0",Vo(i),a[Ar]=a["max"+Go]=n[Ar],a[Cr]=a["max"+Xd]=n[Cr],a[Qe]=n[Qe],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},A1=/([A-Z])/g,Vo=function(t){if(t){var e=t.t.style,n=t.length,i=0,r,o;for((t.t._gsap||At.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],r=t[i],o?e[r]=o:e[r]&&e.removeProperty(r.replace(A1,"-$1").toLowerCase())}},Jh=function(t){for(var e=eu.length,n=t.style,i=[],r=0;r<e;r++)i.push(eu[r],n[eu[r]]);return i.t=t,i},C1=function(t,e,n){for(var i=[],r=t.length,o=n?8:0,a;o<r;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},nu={left:0,top:0},m_=function(t,e,n,i,r,o,a,l,c,h,d,u,f,g){Ln(t)&&(t=t(l)),hi(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?Qh("0"+t.substr(3),n):0));var _=f?f.time():0,m,p,S;if(f&&f.seek(0),isNaN(t)||(t=+t),cl(t))f&&(t=At.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,t)),a&&jh(a,n,i,!0);else{Ln(e)&&(e=e(l));var C=(t||"0").split(" "),y,M,b,E;S=Gn(e,l)||_e,y=ys(S)||{},(!y||!y.left&&!y.top)&&bi(S).display==="none"&&(E=S.style.display,S.style.display="block",y=ys(S),E?S.style.display=E:S.style.removeProperty("display")),M=Qh(C[0],y[i.d]),b=Qh(C[1]||"0",n),t=y[i.p]-c[i.p]-h+M+r-b,a&&jh(a,b,i,n-b<20||a._isStart&&b>20),n-=n-b}if(g&&(l[g]=t||-.001,t<0&&(t=0)),o){var v=t+n,w=o._isStart;m="scroll"+i.d2,jh(o,v,i,w&&v>20||!w&&(d?Math.max(_e[m],ui[m]):o.parentNode[m])<=v+1),d&&(c=ys(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+rn))}return f&&S&&(m=ys(S),f.seek(u),p=ys(S),f._caScrollDist=m[i.p]-p[i.p],t=t/f._caScrollDist*u),f&&f.seek(_),f?t:Math.round(t)},R1=/(webkit|moz|length|cssText|inset)/i,g_=function(t,e,n,i){if(t.parentNode!==e){var r=t.style,o,a;if(e===_e){t._stOrig=r.cssText,a=bi(t);for(o in a)!+o&&!R1.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=t._stOrig;At.core.getCache(t).uncache=1,e.appendChild(t)}},O_=function(t,e,n){var i=e,r=i;return function(o){var a=Math.round(t());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=Math.round(o),i}},$h=function(t,e,n){var i={};i[e.p]="+="+n,At.set(t,i)},__=function(t,e){var n=xs(t,e),i="_scroll"+e.p2,r=function o(a,l,c,h,d){var u=o.tween,f=l.onComplete,g={};c=c||n();var _=O_(n,c,function(){u.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,u&&u.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){ie.cache++,o.tween&&Ss()},l.onComplete=function(){o.tween=0,f&&f.call(u)},u=o.tween=At.to(t,l),u};return t[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},un(t,"wheel",n.wheelHandler),Kt.isTouch&&un(t,"touchmove",n.wheelHandler),r},Kt=(function(){function s(e,n){Bo||s.register(At)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Ud(this),this.init(e,n)}var t=s.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!al){this.update=this.refresh=this.kill=ns;return}n=h_(hi(n)||cl(n)||n.nodeType?{trigger:n}:n,qh);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,d=r.scrub,u=r.trigger,f=r.pin,g=r.pinSpacing,_=r.invalidateOnRefresh,m=r.anticipatePin,p=r.onScrubComplete,S=r.onSnapComplete,C=r.once,y=r.snap,M=r.pinReparent,b=r.pinSpacer,E=r.containerAnimation,v=r.fastScrollEnd,w=r.preventOverlaps,R=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Rn:Ke,D=!d&&d!==0,L=Gn(n.scroller||oe),B=At.core.getCache(L),I=Pr(L),z=("pinType"in n?n.pinType:vs(L,"pinType")||I&&"fixed")==="fixed",q=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],k=D&&n.toggleActions.split(" "),j="markers"in n?n.markers:qh.markers,Z=I?0:parseFloat(bi(L)["border"+R.p2+Go])||0,P=this,et=n.onRefreshInit&&function(){return n.onRefreshInit(P)},bt=v1(L,I,R),Tt=y1(L,I),Ht=0,zt=0,Wt=0,K=xs(L,R),tt,gt,Bt,st,Dt,kt,Lt,Xt,jt,H,Qt,pe,Ee,Gt,fe,F,Ae,it,A,x,O,V,W,ct,lt,Q,J,rt,vt,dt,mt,ut,Ct,Ft,N,pt,nt,_t,yt;if(P._startClamp=P._endClamp=!1,P._dir=R,m*=45,P.scroller=L,P.scroll=E?E.time.bind(E):K,st=K(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(S_=1,n.refreshPriority===-9999&&(_l=P)),B.tweenScroll=B.tweenScroll||{top:__(L,Ke),left:__(L,Rn)},P.tweenTo=tt=B.tweenScroll[R.p],P.scrubDuration=function(ht){Ct=cl(ht)&&ht,Ct?ut?ut.duration(ht):ut=At.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ct,paused:!0,onComplete:function(){return p&&p(P)}}):(ut&&ut.progress(1).kill(),ut=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(d),dt=0,l||(l=i.vars.id)),y&&((!wr(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in _e.style&&At.set(I?[_e,ui]:L,{scrollBehavior:"auto"}),ie.forEach(function(ht){return Ln(ht)&&ht.target===(I?ve.scrollingElement||ui:L)&&(ht.smooth=!1)}),Bt=Ln(y.snapTo)?y.snapTo:y.snapTo==="labels"?M1(i):y.snapTo==="labelsDirectional"?b1(i):y.directional!==!1?function(ht,Vt){return Yd(y.snapTo)(ht,In()-zt<500?0:Vt.direction)}:At.utils.snap(y.snapTo),Ft=y.duration||{min:.1,max:2},Ft=wr(Ft)?ul(Ft.min,Ft.max):ul(Ft,Ft),N=At.delayedCall(y.delay||Ct/2||.1,function(){var ht=K(),Vt=In()-zt<500,Rt=tt.tween;if((Vt||Math.abs(P.getVelocity())<10)&&!Rt&&!ou&&Ht!==ht){var Jt=(ht-kt)/Gt,qe=i&&!D?i.totalProgress():Jt,re=Vt?0:(qe-mt)/(In()-ol)*1e3||0,Pe=At.utils.clamp(-Jt,1-Jt,Fo(re/2)*re/.185),on=Jt+(y.inertia===!1?0:Pe),Ie,Se,he=y,Dn=he.onStart,Ce=he.onInterrupt,yn=he.onComplete;if(Ie=Bt(on,P),cl(Ie)||(Ie=on),Se=Math.max(0,Math.round(kt+Ie*Gt)),ht<=Lt&&ht>=kt&&Se!==ht){if(Rt&&!Rt._initted&&Rt.data<=Fo(Se-ht))return;y.inertia===!1&&(Pe=Ie-Jt),tt(Se,{duration:Ft(Fo(Math.max(Fo(on-qe),Fo(Ie-qe))*.185/re/.05||0)),ease:y.ease||"power3",data:Fo(Se-ht),onInterrupt:function(){return N.restart(!0)&&Ce&&Uo(P,Ce)},onComplete:function(){P.update(),Ht=K(),i&&!D&&(ut?ut.resetTo("totalProgress",Ie,i._tTime/i._tDur):i.progress(Ie)),dt=mt=i&&!D?i.totalProgress():P.progress,S&&S(P),yn&&Uo(P,yn)}},ht,Pe*Gt,Se-ht-Pe*Gt),Dn&&Uo(P,Dn,tt.tween)}}else P.isActive&&Ht!==ht&&N.restart(!0)}).pause()),l&&(Od[l]=P),u=P.trigger=Gn(u||f!==!0&&f),yt=u&&u._gsap&&u._gsap.stRevert,yt&&(yt=yt(P)),f=f===!0?u:Gn(f),hi(a)&&(a={targets:u,className:a}),f&&(g===!1||g===Mi||(g=!g&&f.parentNode&&f.parentNode.style&&bi(f.parentNode).display==="flex"?!1:Qe),P.pin=f,gt=At.core.getCache(f),gt.spacer?fe=gt.pinState:(b&&(b=Gn(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),gt.spacerIsNative=!!b,b&&(gt.spacerState=Jh(b))),gt.spacer=it=b||ve.createElement("div"),it.classList.add("pin-spacer"),l&&it.classList.add("pin-spacer-"+l),gt.pinState=fe=Jh(f)),n.force3D!==!1&&At.set(f,{force3D:!0}),P.spacer=it=gt.spacer,vt=bi(f),ct=vt[g+R.os2],x=At.getProperty(f),O=At.quickSetter(f,R.a,rn),Id(f,it,vt),Ae=Jh(f)),j){pe=wr(j)?h_(j,u_):u_,H=Zh("scroller-start",l,L,R,pe,0),Qt=Zh("scroller-end",l,L,R,pe,0,H),A=H["offset"+R.op.d2];var ot=Gn(vs(L,"content")||L);Xt=this.markerStart=Zh("start",l,ot,R,pe,A,0,E),jt=this.markerEnd=Zh("end",l,ot,R,pe,A,0,E),E&&(_t=At.quickSetter([Xt,jt],R.a,rn)),!z&&!(Ui.length&&vs(L,"fixedMarkers")===!0)&&(S1(I?_e:L),At.set([H,Qt],{force3D:!0}),Q=At.quickSetter(H,R.a,rn),rt=At.quickSetter(Qt,R.a,rn))}if(E){var ft=E.vars.onUpdate,at=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){P.update(0,0,1),ft&&ft.apply(E,at||[])})}if(P.previous=function(){return se[se.indexOf(P)-1]},P.next=function(){return se[se.indexOf(P)+1]},P.revert=function(ht,Vt){if(!Vt)return P.kill(!0);var Rt=ht!==!1||!P.enabled,Jt=Pn;Rt!==P.isReverted&&(Rt&&(pt=Math.max(K(),P.scroll.rec||0),Wt=P.progress,nt=i&&i.progress()),Xt&&[Xt,jt,H,Qt].forEach(function(qe){return qe.style.display=Rt?"none":"block"}),Rt&&(Pn=P,P.update(Rt)),f&&(!M||!P.isActive)&&(Rt?E1(f,it,fe):Id(f,it,bi(f),lt)),Rt||P.update(Rt),Pn=Jt,P.isReverted=Rt)},P.refresh=function(ht,Vt,Rt,Jt){if(!((Pn||!P.enabled)&&!Vt)){if(f&&ht&&Ti){un(s,"scrollEnd",L_);return}!Xn&&et&&et(P),Pn=P,tt.tween&&!Rt&&(tt.tween.kill(),tt.tween=0),ut&&ut.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(xt){return xt.vars.immediateRender&&xt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var qe=bt(),re=Tt(),Pe=E?E.duration():is(L,R),on=Gt<=.01||!Gt,Ie=0,Se=Jt||0,he=wr(Rt)?Rt.end:n.end,Dn=n.endTrigger||u,Ce=wr(Rt)?Rt.start:n.start||(n.start===0||!u?0:f?"0 0":"0 100%"),yn=P.pinnedContainer=n.pinnedContainer&&Gn(n.pinnedContainer,P),Nn=u&&Math.max(0,se.indexOf(P))||0,Ze=Nn,ke,je,Oi,Dr,an,We,fi,Nr,T,U,$,X,Y;for(j&&wr(Rt)&&(X=At.getProperty(H,R.p),Y=At.getProperty(Qt,R.p));Ze-- >0;)We=se[Ze],We.end||We.refresh(0,1)||(Pn=P),fi=We.pin,fi&&(fi===u||fi===f||fi===yn)&&!We.isReverted&&(U||(U=[]),U.unshift(We),We.revert(!0,!0)),We!==se[Ze]&&(Nn--,Ze--);for(Ln(Ce)&&(Ce=Ce(P)),Ce=o_(Ce,"start",P),kt=m_(Ce,u,qe,R,K(),Xt,H,P,re,Z,z,Pe,E,P._startClamp&&"_startClamp")||(f?-.001:0),Ln(he)&&(he=he(P)),hi(he)&&!he.indexOf("+=")&&(~he.indexOf(" ")?he=(hi(Ce)?Ce.split(" ")[0]:"")+he:(Ie=Qh(he.substr(2),qe),he=hi(Ce)?Ce:(E?At.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,kt):kt)+Ie,Dn=u)),he=o_(he,"end",P),Lt=Math.max(kt,m_(he||(Dn?"100% 0":Pe),Dn,qe,R,K()+Ie,jt,Qt,P,re,Z,z,Pe,E,P._endClamp&&"_endClamp"))||-.001,Ie=0,Ze=Nn;Ze--;)We=se[Ze]||{},fi=We.pin,fi&&We.start-We._pinPush<=kt&&!E&&We.end>0&&(ke=We.end-(P._startClamp?Math.max(0,We.start):We.start),(fi===u&&We.start-We._pinPush<kt||fi===yn)&&isNaN(Ce)&&(Ie+=ke*(1-We.progress)),fi===f&&(Se+=ke));if(kt+=Ie,Lt+=Ie,P._startClamp&&(P._startClamp+=Ie),P._endClamp&&!Xn&&(P._endClamp=Lt||-.001,Lt=Math.min(Lt,is(L,R))),Gt=Lt-kt||(kt-=.01)&&.001,on&&(Wt=At.utils.clamp(0,1,At.utils.normalize(kt,Lt,pt))),P._pinPush=Se,Xt&&Ie&&(ke={},ke[R.a]="+="+Ie,yn&&(ke[R.p]="-="+K()),At.set([Xt,jt],ke)),f&&!(Fd&&P.end>=is(L,R)))ke=bi(f),Dr=R===Ke,Oi=K(),V=parseFloat(x(R.a))+Se,!Pe&&Lt>1&&($=(I?ve.scrollingElement||ui:L).style,$={style:$,value:$["overflow"+R.a.toUpperCase()]},I&&bi(_e)["overflow"+R.a.toUpperCase()]!=="scroll"&&($.style["overflow"+R.a.toUpperCase()]="scroll")),Id(f,it,ke),Ae=Jh(f),je=ys(f,!0),Nr=z&&xs(L,Dr?Rn:Ke)(),g?(lt=[g+R.os2,Gt+Se+rn],lt.t=it,Ze=g===Qe?su(f,R)+Gt+Se:0,Ze&&(lt.push(R.d,Ze+rn),it.style.flexBasis!=="auto"&&(it.style.flexBasis=Ze+rn)),Vo(lt),yn&&se.forEach(function(xt){xt.pin===yn&&xt.vars.pinSpacing!==!1&&(xt._subPinOffset=!0)}),z&&K(pt)):(Ze=su(f,R),Ze&&it.style.flexBasis!=="auto"&&(it.style.flexBasis=Ze+rn)),z&&(an={top:je.top+(Dr?Oi-kt:Nr)+rn,left:je.left+(Dr?Nr:Oi-kt)+rn,boxSizing:"border-box",position:"fixed"},an[Ar]=an["max"+Go]=Math.ceil(je.width)+rn,an[Cr]=an["max"+Xd]=Math.ceil(je.height)+rn,an[Mi]=an[Mi+ml]=an[Mi+dl]=an[Mi+gl]=an[Mi+pl]="0",an[Qe]=ke[Qe],an[Qe+ml]=ke[Qe+ml],an[Qe+dl]=ke[Qe+dl],an[Qe+gl]=ke[Qe+gl],an[Qe+pl]=ke[Qe+pl],F=C1(fe,an,M),Xn&&K(0)),i?(T=i._initted,Ad(1),i.render(i.duration(),!0,!0),W=x(R.a)-V+Gt+Se,J=Math.abs(Gt-W)>1,z&&J&&F.splice(F.length-2,2),i.render(0,!0,!0),T||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Ad(0)):W=Gt,$&&($.value?$.style["overflow"+R.a.toUpperCase()]=$.value:$.style.removeProperty("overflow-"+R.a));else if(u&&K()&&!E)for(je=u.parentNode;je&&je!==_e;)je._pinOffset&&(kt-=je._pinOffset,Lt-=je._pinOffset),je=je.parentNode;U&&U.forEach(function(xt){return xt.revert(!1,!0)}),P.start=kt,P.end=Lt,st=Dt=Xn?pt:K(),!E&&!Xn&&(st<pt&&K(pt),P.scroll.rec=0),P.revert(!1,!0),zt=In(),N&&(Ht=-1,N.restart(!0)),Pn=0,i&&D&&(i._initted||nt)&&i.progress()!==nt&&i.progress(nt||0,!0).render(i.time(),!0,!0),(on||Wt!==P.progress||E||_||i&&!i._initted)&&(i&&!D&&(i._initted||Wt||i.vars.immediateRender!==!1)&&i.totalProgress(E&&kt<-.001&&!Wt?At.utils.normalize(kt,Lt,0):Wt,!0),P.progress=on||(st-kt)/Gt===Wt?0:Wt),f&&g&&(it._pinOffset=Math.round(P.progress*W)),ut&&ut.invalidate(),isNaN(X)||(X-=At.getProperty(H,R.p),Y-=At.getProperty(Qt,R.p),$h(H,R,X),$h(Xt,R,X-(Jt||0)),$h(Qt,R,Y),$h(jt,R,Y-(Jt||0))),on&&!Xn&&P.update(),h&&!Xn&&!Ee&&(Ee=!0,h(P),Ee=!1)}},P.getVelocity=function(){return(K()-Dt)/(In()-ol)*1e3||0},P.endAnimation=function(){rl(P.callbackAnimation),i&&(ut?ut.progress(1):i.paused()?D||rl(i,P.direction<0,1):rl(i,i.reversed()))},P.labelToScroll=function(ht){return i&&i.labels&&(kt||P.refresh()||kt)+i.labels[ht]/i.duration()*Gt||0},P.getTrailing=function(ht){var Vt=se.indexOf(P),Rt=P.direction>0?se.slice(0,Vt).reverse():se.slice(Vt+1);return(hi(ht)?Rt.filter(function(Jt){return Jt.vars.preventOverlaps===ht}):Rt).filter(function(Jt){return P.direction>0?Jt.end<=kt:Jt.start>=Lt})},P.update=function(ht,Vt,Rt){if(!(E&&!Rt&&!ht)){var Jt=Xn===!0?pt:P.scroll(),qe=ht?0:(Jt-kt)/Gt,re=qe<0?0:qe>1?1:qe||0,Pe=P.progress,on,Ie,Se,he,Dn,Ce,yn,Nn;if(Vt&&(Dt=st,st=E?K():Jt,y&&(mt=dt,dt=i&&!D?i.totalProgress():re)),m&&f&&!Pn&&!Hh&&Ti&&(!re&&kt<Jt+(Jt-Dt)/(In()-ol)*m?re=1e-4:re===1&&Lt>Jt+(Jt-Dt)/(In()-ol)*m&&(re=.9999)),re!==Pe&&P.enabled){if(on=P.isActive=!!re&&re<1,Ie=!!Pe&&Pe<1,Ce=on!==Ie,Dn=Ce||!!re!=!!Pe,P.direction=re>Pe?1:-1,P.progress=re,Dn&&!Pn&&(Se=re&&!Pe?0:re===1?1:Pe===1?2:3,D&&(he=!Ce&&k[Se+1]!=="none"&&k[Se+1]||k[Se],Nn=i&&(he==="complete"||he==="reset"||he in i))),w&&(Ce||Nn)&&(Nn||d||!i)&&(Ln(w)?w(P):P.getTrailing(w).forEach(function(Oi){return Oi.endAnimation()})),D||(ut&&!Pn&&!Hh?(ut._dp._time-ut._start!==ut._time&&ut.render(ut._dp._time-ut._start),ut.resetTo?ut.resetTo("totalProgress",re,i._tTime/i._tDur):(ut.vars.totalProgress=re,ut.invalidate().restart())):i&&i.totalProgress(re,!!(Pn&&(zt||ht)))),f){if(ht&&g&&(it.style[g+R.os2]=ct),!z)O(ll(V+W*re));else if(Dn){if(yn=!ht&&re>Pe&&Lt+1>Jt&&Jt+1>=is(L,R),M)if(!ht&&(on||yn)){var Ze=ys(f,!0),ke=Jt-kt;g_(f,_e,Ze.top+(R===Ke?ke:0)+rn,Ze.left+(R===Ke?0:ke)+rn)}else g_(f,it);Vo(on||yn?F:Ae),J&&re<1&&on||O(V+(re===1&&!yn?W:0))}}y&&!tt.tween&&!Pn&&!Hh&&N.restart(!0),a&&(Ce||C&&re&&(re<1||!Cd))&&xl(a.targets).forEach(function(Oi){return Oi.classList[on||C?"add":"remove"](a.className)}),o&&!D&&!ht&&o(P),Dn&&!Pn?(D&&(Nn&&(he==="complete"?i.pause().totalProgress(1):he==="reset"?i.restart(!0).pause():he==="restart"?i.restart(!0):i[he]()),o&&o(P)),(Ce||!Cd)&&(c&&Ce&&Uo(P,c),q[Se]&&Uo(P,q[Se]),C&&(re===1?P.kill(!1,1):q[Se]=0),Ce||(Se=re===1?1:3,q[Se]&&Uo(P,q[Se]))),v&&!on&&Math.abs(P.getVelocity())>(cl(v)?v:2500)&&(rl(P.callbackAnimation),ut?ut.progress(1):rl(i,he==="reverse"?1:!re,1))):D&&o&&!Pn&&o(P)}if(rt){var je=E?Jt/E.duration()*(E._caScrollDist||0):Jt;Q(je+(H._isFlipped?1:0)),rt(je)}_t&&_t(-Jt/E.duration()*(E._caScrollDist||0))}},P.enable=function(ht,Vt){P.enabled||(P.enabled=!0,un(L,"resize",hl),I||un(L,"scroll",Oo),et&&un(s,"refreshInit",et),ht!==!1&&(P.progress=Wt=0,st=Dt=Ht=K()),Vt!==!1&&P.refresh())},P.getTween=function(ht){return ht&&tt?tt.tween:ut},P.setPositions=function(ht,Vt,Rt,Jt){if(E){var qe=E.scrollTrigger,re=E.duration(),Pe=qe.end-qe.start;ht=qe.start+Pe*ht/re,Vt=qe.start+Pe*Vt/re}P.refresh(!1,!1,{start:a_(ht,Rt&&!!P._startClamp),end:a_(Vt,Rt&&!!P._endClamp)},Jt),P.update()},P.adjustPinSpacing=function(ht){if(lt&&ht){var Vt=lt.indexOf(R.d)+1;lt[Vt]=parseFloat(lt[Vt])+ht+rn,lt[1]=parseFloat(lt[1])+ht+rn,Vo(lt)}},P.disable=function(ht,Vt){if(ht!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Vt||ut&&ut.pause(),pt=0,gt&&(gt.uncache=1),et&&hn(s,"refreshInit",et),N&&(N.pause(),tt.tween&&tt.tween.kill()&&(tt.tween=0)),!I)){for(var Rt=se.length;Rt--;)if(se[Rt].scroller===L&&se[Rt]!==P)return;hn(L,"resize",hl),I||hn(L,"scroll",Oo)}},P.kill=function(ht,Vt){P.disable(ht,Vt),ut&&!Vt&&ut.kill(),l&&delete Od[l];var Rt=se.indexOf(P);Rt>=0&&se.splice(Rt,1),Rt===Wn&&tu>0&&Wn--,Rt=0,se.forEach(function(Jt){return Jt.scroller===P.scroller&&(Rt=1)}),Rt||Xn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,ht&&i.revert({kill:!1}),Vt||i.kill()),Xt&&[Xt,jt,H,Qt].forEach(function(Jt){return Jt.parentNode&&Jt.parentNode.removeChild(Jt)}),_l===P&&(_l=0),f&&(gt&&(gt.uncache=1),Rt=0,se.forEach(function(Jt){return Jt.pin===f&&Rt++}),Rt||(gt.spacer=0)),n.onKill&&n.onKill(P)},se.push(P),P.enable(!1,!1),yt&&yt(P),i&&i.add&&!Gt){var Ot=P.update;P.update=function(){P.update=Ot,ie.cache++,kt||Lt||P.refresh()},At.delayedCall(.01,P.update),Gt=.01,kt=Lt=0}else P.refresh();f&&w1()},s.register=function(n){return Bo||(At=n||E_(),w_()&&window.document&&s.enable(),Bo=al),Bo},s.defaults=function(n){if(n)for(var i in n)qh[i]=n[i];return qh},s.disable=function(n,i){al=0,se.forEach(function(o){return o[i?"kill":"disable"](n)}),hn(oe,"wheel",Oo),hn(ve,"scroll",Oo),clearInterval(Gh),hn(ve,"touchcancel",ns),hn(_e,"touchstart",ns),Xh(hn,ve,"pointerdown,touchstart,mousedown",l_),Xh(hn,ve,"pointerup,touchend,mouseup",c_),iu.kill(),Wh(hn);for(var r=0;r<ie.length;r+=3)Yh(hn,ie[r],ie[r+1]),Yh(hn,ie[r],ie[r+2])},s.enable=function(){if(oe=window,ve=document,ui=ve.documentElement,_e=ve.body,At){if(xl=At.utils.toArray,ul=At.utils.clamp,Ud=At.core.context||ns,Ad=At.core.suppressOverwrites||ns,Vd=oe.history.scrollRestoration||"auto",Bd=oe.pageYOffset||0,At.core.globals("ScrollTrigger",s),_e){al=1,ko=document.createElement("div"),ko.style.height="100vh",ko.style.position="absolute",F_(),x1(),He.register(At),s.isTouch=He.isTouch,js=He.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Nd=He.isTouch===1,un(oe,"wheel",Oo),kd=[oe,ve,ui,_e],At.matchMedia?(s.matchMedia=function(h){var d=At.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},At.addEventListener("matchMediaInit",function(){N_(),qd()}),At.addEventListener("matchMediaRevert",function(){return D_()}),At.addEventListener("matchMedia",function(){Er(0,1),Lr("matchMedia")}),At.matchMedia().add("(orientation: portrait)",function(){return Pd(),Pd})):console.warn("Requires GSAP 3.11.0 or later"),Pd(),un(ve,"scroll",Oo);var n=_e.hasAttribute("style"),i=_e.style,r=i.borderTopStyle,o=At.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=ys(_e),Ke.m=Math.round(a.top+Ke.sc())||0,Rn.m=Math.round(a.left+Rn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(_e.setAttribute("style",""),_e.removeAttribute("style")),Gh=setInterval(f_,250),At.delayedCall(.5,function(){return Hh=0}),un(ve,"touchcancel",ns),un(_e,"touchstart",ns),Xh(un,ve,"pointerdown,touchstart,mousedown",l_),Xh(un,ve,"pointerup,touchend,mouseup",c_),Dd=At.utils.checkPrefix("transform"),eu.push(Dd),Bo=In(),iu=At.delayedCall(.2,Er).pause(),zo=[ve,"visibilitychange",function(){var h=oe.innerWidth,d=oe.innerHeight;ve.hidden?(s_=h,r_=d):(s_!==h||r_!==d)&&hl()},ve,"DOMContentLoaded",Er,oe,"load",Er,oe,"resize",hl],Wh(un),se.forEach(function(h){return h.enable(0,1)}),l=0;l<ie.length;l+=3)Yh(hn,ie[l],ie[l+1]),Yh(hn,ie[l],ie[l+2])}else if(ve){var c=function h(){s.enable(),ve.removeEventListener("DOMContentLoaded",h)};ve.addEventListener("DOMContentLoaded",c)}}},s.config=function(n){"limitCallbacks"in n&&(Cd=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Gh)||(Gh=i)&&setInterval(f_,i),"ignoreMobileResize"in n&&(Nd=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Wh(hn)||Wh(un,n.autoRefreshEvents||"none"),M_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=Gn(n),o=ie.indexOf(r),a=Pr(r);~o&&ie.splice(o,a?6:2),i&&(a?Ui.unshift(oe,i,_e,i,ui,i):Ui.unshift(r,i))},s.clearMatchMedia=function(n){se.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(hi(n)?Gn(n):n).getBoundingClientRect(),a=o[r?Ar:Cr]*i||0;return r?o.right-a>0&&o.left+a<oe.innerWidth:o.bottom-a>0&&o.top+a<oe.innerHeight},s.positionInViewport=function(n,i,r){hi(n)&&(n=Gn(n));var o=n.getBoundingClientRect(),a=o[r?Ar:Cr],l=i==null?a/2:i in ru?ru[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/oe.innerWidth:(o.top+l)/oe.innerHeight},s.killAll=function(n){if(se.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Ir.killAll||[];Ir={},i.forEach(function(r){return r()})}},s})();Kt.version="3.15.0";Kt.saveStyles=function(s){return s?xl(s).forEach(function(t){if(t&&t.style){var e=ci.indexOf(t);e>=0&&ci.splice(e,5),ci.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),At.core.getCache(t),Ud())}}):ci};Kt.revert=function(s,t){return qd(!s,t)};Kt.create=function(s,t){return new Kt(s,t)};Kt.refresh=function(s){return s?hl(!0):(Bo||Kt.register())&&Er(!0)};Kt.update=function(s){return++ie.cache&&Ss(s===!0?2:0)};Kt.clearScrollMemory=U_;Kt.maxScroll=function(s,t){return is(s,t?Rn:Ke)};Kt.getScrollFunc=function(s,t){return xs(Gn(s),t?Rn:Ke)};Kt.getById=function(s){return Od[s]};Kt.getAll=function(){return se.filter(function(s){return s.vars.id!=="ScrollSmoother"})};Kt.isScrolling=function(){return!!Ti};Kt.snapDirectional=Yd;Kt.addEventListener=function(s,t){var e=Ir[s]||(Ir[s]=[]);~e.indexOf(t)||e.push(t)};Kt.removeEventListener=function(s,t){var e=Ir[s],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Kt.batch=function(s,t){var e=[],n={},i=t.interval||.016,r=t.batchMax||1e9,o=function(c,h){var d=[],u=[],f=At.delayedCall(i,function(){h(d,u),d=[],u=[]}).pause();return function(g){d.length||f.restart(!0),d.push(g.trigger),u.push(g),r<=d.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&Ln(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Ln(r)&&(r=r(),un(Kt,"refresh",function(){return r=t.batchMax()})),xl(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Kt.create(c))}),e};x_=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Ld=function s(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(He.isTouch?" pinch-zoom":""):"none",t===ui&&s(_e,e)},Kh={auto:1,scroll:1},P1=function(t){var e=t.event,n=t.target,i=t.axis,r=(e.changedTouches?e.changedTouches[0]:e).target,o=r._gsap||At.core.getCache(r),a=In(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==_e&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Kh[(l=bi(r)).overflowY]||Kh[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!Pr(r)&&(Kh[(l=bi(r)).overflowY]||Kh[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},B_=function(t,e,n,i){return He.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&P1,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&un(ve,He.eventTypes[0],y_,!1,!0)},onDisable:function(){return hn(ve,He.eventTypes[0],y_,!0)}})},I1=/(input|label|select|textarea)/i,y_=function(t){var e=I1.test(t.target.tagName);(e||v_)&&(t._gsapAllow=!0,v_=e)},L1=function(t){wr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,r=e.allowNestedScroll,o=e.onRelease,a,l,c=Gn(t.target)||ui,h=At.core.globals().ScrollSmoother,d=h&&h.get(),u=js&&(t.content&&Gn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=xs(c,Ke),g=xs(c,Rn),_=1,m=(He.isTouch&&oe.visualViewport?oe.visualViewport.scale*oe.visualViewport.width:oe.outerWidth)/oe.innerWidth,p=0,S=Ln(i)?function(){return i(a)}:function(){return i||2.8},C,y,M=B_(c,t.type,!0,r),b=function(){return y=!1},E=ns,v=ns,w=function(){l=is(c,Ke),v=ul(js?1:0,l),n&&(E=ul(0,is(c,Rn))),C=Rr},R=function(){u._gsap.y=ll(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},D=function(){if(y){requestAnimationFrame(b);var j=ll(a.deltaY/2),Z=v(f.v-j);if(u&&Z!==f.v+f.offset){f.offset=Z-f.v;var P=ll((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",u._gsap.y=P+"px",f.cacheID=ie.cache,Ss()}return!0}f.offset&&R(),y=!0},L,B,I,z,q=function(){w(),L.isActive()&&L.vars.scrollY>l&&(f()>l?L.progress(1)&&f(l):L.resetTo("scrollY",l))};return u&&At.set(u,{y:"+=0"}),t.ignoreCheck=function(k){return js&&k.type==="touchmove"&&D(k)||_>1.05&&k.type!=="touchstart"||a.isGesturing||k.touches&&k.touches.length>1},t.onPress=function(){y=!1;var k=_;_=ll((oe.visualViewport&&oe.visualViewport.scale||1)/m),L.pause(),k!==_&&Ld(c,_>1.01?!0:n?!1:"x"),B=g(),I=f(),w(),C=Rr},t.onRelease=t.onGestureStart=function(k,j){if(f.offset&&R(),!j)z.restart(!0);else{ie.cache++;var Z=S(),P,et;n&&(P=g(),et=P+Z*.05*-k.velocityX/.227,Z*=x_(g,P,et,is(c,Rn)),L.vars.scrollX=E(et)),P=f(),et=P+Z*.05*-k.velocityY/.227,Z*=x_(f,P,et,is(c,Ke)),L.vars.scrollY=v(et),L.invalidate().duration(Z).play(.01),(js&&L.vars.scrollY>=l||P>=l-1)&&At.to({},{onUpdate:q,duration:Z})}o&&o(k)},t.onWheel=function(){L._ts&&L.pause(),In()-p>1e3&&(C=0,p=In())},t.onChange=function(k,j,Z,P,et){if(Rr!==C&&w(),j&&n&&g(E(P[2]===j?B+(k.startX-k.x):g()+j-P[1])),Z){f.offset&&R();var bt=et[2]===Z,Tt=bt?I+k.startY-k.y:f()+Z-et[1],Ht=v(Tt);bt&&Tt!==Ht&&(I+=Ht-Tt),f(Ht)}(Z||j)&&Ss()},t.onEnable=function(){Ld(c,n?!1:"x"),Kt.addEventListener("refresh",q),un(oe,"resize",q),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),M.enable()},t.onDisable=function(){Ld(c,!0),hn(oe,"resize",q),Kt.removeEventListener("refresh",q),M.kill()},t.lockAxis=t.lockAxis!==!1,a=new He(t),a.iOS=js,js&&!f()&&f(1),js&&At.ticker.add(ns),z=a._dc,L=At.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:O_(f,f(),function(){return L.pause()})},onUpdate:Ss,onComplete:z.vars.onComplete}),a};Kt.sort=function(s){if(Ln(s))return se.sort(s);var t=oe.pageYOffset||0;return Kt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+oe.innerHeight}),se.sort(s||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Kt.observe=function(s){return new He(s)};Kt.normalizeScroll=function(s){if(typeof s>"u")return Hn;if(s===!0&&Hn)return Hn.enable();if(s===!1){Hn&&Hn.kill(),Hn=s;return}var t=s instanceof He?s:L1(s);return Hn&&Hn.target===t.target&&Hn.kill(),Pr(t.target)&&(Hn=t),t};Kt.core={_getVelocityProp:Vh,_inputObserver:B_,_scrollers:ie,_proxies:Ui,bridge:{ss:function(){Ti||Lr("scrollStart"),Ti=In()},ref:function(){return Pn}}};E_()&&At.registerPlugin(Kt)});function H_(s,t,e){return Math.max(s,Math.min(t,e))}function D1(s,t,e){return(1-e)*s+e*t}function N1(s,t,e,n){return D1(s,t,1-Math.exp(-e*n))}function U1(s,t){return(s%t+t)%t}function O1(s,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,s.apply(this,n)},t)}}function V_(s,t){return s===1?z1:s===2?t:1}var k_,F1,B1,W_,z1,tr,k1,G_,X_,Y_=zi(()=>{k_="1.3.26";F1=class{constructor(){Nt(this,"isRunning",!1);Nt(this,"value",0);Nt(this,"from",0);Nt(this,"to",0);Nt(this,"currentTime",0);Nt(this,"lerp");Nt(this,"duration");Nt(this,"easing");Nt(this,"onUpdate")}advance(s){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=s;let e=H_(0,this.currentTime/this.duration,1);t=e>=1;let n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=N1(this.value,this.to,this.lerp*60,s),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(s,t,{lerp:e,duration:n,easing:i,onStart:r,onUpdate:o}){this.from=this.value=s,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=o}};B1=class{constructor(s,t,{autoResize:e=!0,debounce:n=250}={}){Nt(this,"width",0);Nt(this,"height",0);Nt(this,"scrollHeight",0);Nt(this,"scrollWidth",0);Nt(this,"debouncedResize");Nt(this,"wrapperResizeObserver");Nt(this,"contentResizeObserver");Nt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Nt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Nt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=t,e&&(this.debouncedResize=O1(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},W_=class{constructor(){Nt(this,"events",{})}emit(s,...t){let e=this.events[s]||[];for(let n=0,i=e.length;n<i;n++)e[n]?.(...t)}on(s,t){return this.events[s]?this.events[s].push(t):this.events[s]=[t],()=>{this.events[s]=this.events[s]?.filter(e=>t!==e)}}off(s,t){this.events[s]=this.events[s]?.filter(e=>t!==e)}destroy(){this.events={}}},z1=100/6,tr={passive:!1};k1=class{constructor(s,t={wheelMultiplier:1,touchMultiplier:1}){Nt(this,"touchStart",{x:0,y:0});Nt(this,"lastDelta",{x:0,y:0});Nt(this,"window",{width:0,height:0});Nt(this,"emitter",new W_);Nt(this,"onTouchStart",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});Nt(this,"onTouchMove",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:s})});Nt(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});Nt(this,"onWheel",s=>{let{deltaX:t,deltaY:e,deltaMode:n}=s,i=V_(n,this.window.width),r=V_(n,this.window.height);t*=i,e*=r,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:s})});Nt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,tr),this.element.addEventListener("touchstart",this.onTouchStart,tr),this.element.addEventListener("touchmove",this.onTouchMove,tr),this.element.addEventListener("touchend",this.onTouchEnd,tr)}on(s,t){return this.emitter.on(s,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,tr),this.element.removeEventListener("touchstart",this.onTouchStart,tr),this.element.removeEventListener("touchmove",this.onTouchMove,tr),this.element.removeEventListener("touchend",this.onTouchEnd,tr)}},G_=s=>Math.min(1,1.001-2**(-10*s)),X_=class{constructor({wrapper:s=window,content:t=document.documentElement,eventsTarget:e=s,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:r=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:u=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:p,overscroll:S=!0,autoRaf:C=!1,anchors:y=!1,autoToggle:M=!1,allowNestedScroll:b=!1,__experimental__naiveDimensions:E=!1,naiveDimensions:v=E,stopInertiaOnNavigate:w=!1,respectReducedMotion:R=!0}={}){Nt(this,"_isScrolling",!1);Nt(this,"_isStopped",!1);Nt(this,"_isLocked",!1);Nt(this,"_preventNextNativeScrollEvent",!1);Nt(this,"_resetVelocityTimeout",null);Nt(this,"_rafId",null);Nt(this,"_isDraggingSelection",!1);Nt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Nt(this,"isTouching");Nt(this,"isIos");Nt(this,"time",0);Nt(this,"userData",{});Nt(this,"lastVelocity",0);Nt(this,"velocity",0);Nt(this,"direction",0);Nt(this,"options");Nt(this,"targetScroll");Nt(this,"animatedScroll");Nt(this,"animate",new F1);Nt(this,"emitter",new W_);Nt(this,"dimensions");Nt(this,"virtualScroll");Nt(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});Nt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Nt(this,"onTransitionEnd",s=>{s.propertyName?.includes("overflow")&&s.target===this.rootElement&&this.checkOverflow()});Nt(this,"onClick",s=>{let t=s.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=decodeURIComponent(n.hash);this.scrollTo(r,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Nt(this,"onPointerDown",s=>{s.button===1&&this.reset()});Nt(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;let{deltaX:t,deltaY:e,event:n}=s;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),r=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(g=>g instanceof HTMLElement&&(typeof c=="function"&&c?.(g)||g.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&g.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&g.hasAttribute?.("data-lenis-prevent-horizontal")||i&&g.hasAttribute?.("data-lenis-prevent-touch")||r&&g.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(g,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let u=i&&this.options.syncTouch,f=i&&n.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Nt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Nt(this,"raf",s=>{let t=s-(this.time||s);this.time=s,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=k_,window.lenis||(window.lenis={}),window.lenis.version=k_,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!s||s===document.documentElement)&&(s=window),typeof a=="number"&&typeof l!="function"?l=G_:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:s,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:r,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:d,touchMultiplier:f,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:p,overscroll:S,autoRaf:C,anchors:y,autoToggle:M,allowNestedScroll:b,naiveDimensions:v,stopInertiaOnNavigate:w,respectReducedMotion:R},this.dimensions=new B1(s,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new k1(e,{touchMultiplier:f,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,t){return this.emitter.on(s,t)}off(s,t){return this.emitter.off(s,t)}get overflow(){let s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}isTouchOnSelectionHandle(s){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=s.targetTouches[0]??s.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],r=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-r.right,e.clientY-r.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:r=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?e=!0:(r=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=s,f=t;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let g=null;if(typeof u=="string"?(g=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),g||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof HTMLElement&&u?.nodeType&&(g=u),g){if(this.options.wrapper!==window){let y=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?y.left:y.top}let _=g.getBoundingClientRect(),m=getComputedStyle(g),p=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),S=getComputedStyle(this.rootElement),C=this.isHorizontal?Number.parseFloat(S.scrollPaddingLeft):Number.parseFloat(S.scrollPaddingTop);u=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(C)?0:C)}}if(typeof u=="number"){if(u+=f,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let g=u-this.animatedScroll;g>this.limit/2?u-=this.limit:g<-this.limit/2&&(u+=this.limit)}}else u=H_(0,u,this.limit);if(u===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=d??{},e){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=G_:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:r,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(g,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),i&&(this.targetScroll=g),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:t,deltaY:e}){let n=Date.now();s._lenis||(s._lenis={});let i=s._lenis,r,o,a,l,c,h,d,u,f,g;if(n-(i.time??0)>2e3){i.time=Date.now();let b=window.getComputedStyle(s);if(i.computedStyle=b,r=["auto","overlay","scroll"].includes(b.overflowX),o=["auto","overlay","scroll"].includes(b.overflowY),c=["auto"].includes(b.overscrollBehaviorX),h=["auto"].includes(b.overscrollBehaviorY),i.hasOverflowX=r,i.hasOverflowY=o,!(r||o))return!1;d=s.scrollWidth,u=s.scrollHeight,f=s.clientWidth,g=s.clientHeight,a=d>f,l=u>g,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=u,i.clientWidth=f,i.clientHeight=g,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,r=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,u=i.scrollHeight,f=i.clientWidth,g=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(r&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",m,p,S,C,y,M;if(_==="horizontal")m=Math.round(s.scrollLeft),p=d-f,S=t,C=r,y=a,M=c;else if(_==="vertical")m=Math.round(s.scrollTop),p=u-g,S=e,C=o,y=l,M=h;else return!1;return!M&&(m>=p||m<=0)?!0:(S>0?m<p:m>0)&&C&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?U1(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(s=>{this.rootElement.classList.add(s)})}cleanUpClassName(){for(let s of Array.from(this.rootElement.classList))(s==="lenis"||s.startsWith("lenis-"))&&this.rootElement.classList.remove(s)}}});var q1=n0(()=>{_h();zm();km();qg();z_();Y_();xn.registerPlugin(Kt);var Jd=document.documentElement,Fi=window.matchMedia("(prefers-reduced-motion: reduce)").matches,V1=window.matchMedia("(max-width: 760px)"),Ho=()=>V1.matches;new URLSearchParams(location.search).has("og")&&Jd.classList.add("og");var G1=["Guitar","Sourdough","Excel","Arabic","Maths","Yoga","Fix a leaking tap","Python"],Wo=[[-1.55,.95,.2],[.2,1.15,-.6],[1.55,.65,.3],[-.95,-.15,.8],[1.25,-.5,-.4],[-1.6,-.95,-.3],[.45,-1.15,.5],[-.2,.25,-1.1]],H1=828/1844,q_=1.04,W1=.24,Z_=.46,Yo=null;Fi||(Yo=new X_({lerp:.085,autoRaf:!1}),Yo.on("scroll",Kt.update),xn.ticker.add(s=>Yo.raf(s*1e3)),xn.ticker.lagSmoothing(0));var Zd=!1;function Q_(s,t=!1){Yo?Yo.scrollTo(s,{duration:1.4,immediate:t,force:!0}):s.scrollIntoView({behavior:Fi||t?"auto":"smooth"}),t&&(Zd=!0)}for(let s of document.querySelectorAll('a[href^="#"]'))s.addEventListener("click",t=>{let e=s.getAttribute("href"),n=e.length>1?document.querySelector(e):null;n&&(t.preventDefault(),Q_(n),history.replaceState(null,"",e))});var X1=document.querySelector(".nav");Kt.create({start:24,end:"max",onToggle:s=>X1.classList.toggle("is-scrolled",s.isActive)});for(let s of xn.utils.toArray("[data-reveal]")){let t=s.hasAttribute("data-reveal-children")?[...s.children]:[s];if(Fi){xn.set(t,{autoAlpha:1});continue}xn.set(t,{autoAlpha:0,y:28}),Kt.create({trigger:s,start:"top 86%",once:!0,onEnter:()=>xn.to(t,{autoAlpha:1,y:0,duration:1,ease:"power3.out",stagger:.09,delay:s.closest("#hero")?.35:0})})}Jd.classList.remove("js");var Xo=document.querySelector(".film");if(Xo){let s=Xo.querySelector("video");Xo.querySelector(".film__play").addEventListener("click",()=>s.play()),s.addEventListener("play",()=>Xo.classList.add("is-playing")),s.addEventListener("pause",()=>Xo.classList.remove("is-playing")),s.addEventListener("ended",()=>Xo.classList.remove("is-playing"))}var au=()=>{},J_=document.getElementById("gl"),$_=null;try{$_=Y1(J_),au=$_.setScreen}catch(s){console.warn("WebGL unavailable, showing the static fallback.",s),J_.remove(),Jd.classList.add("no-gl")}var j_=xn.utils.toArray(".step"),K_=j_[0]?.dataset.screen;K_&&au(K_);for(let s of xn.utils.toArray(".scene--phone .scene__head")){let t=s.parentElement.querySelector(".step")?.dataset.screen;t&&Kt.create({trigger:s,start:"top 62%",end:"bottom 62%",onToggle:e=>{e.isActive&&au(t)}})}for(let s of j_)Kt.create({trigger:s,start:"top 62%",end:"bottom 62%",onToggle:t=>{s.classList.toggle("is-active",t.isActive),t.isActive&&au(s.dataset.screen)}});document.fonts?.ready&&document.fonts.ready.then(()=>Kt.refresh());window.__hk={lenis:Yo,jump(s){let t=document.querySelector(s.startsWith("#")||s.includes(" ")?s:`#${s}`);t&&Q_(t,!0)}};function Y1(s){let t=new ph({canvas:s,antialias:!0,alpha:!0,powerPreference:"high-performance"});t.setClearColor(0,0),t.outputColorSpace=Tn,t.toneMapping=Aa,t.toneMappingExposure=1.05;let e=new or;e.fog=new ra(403229,.05);let n=new vo(t);e.environment=n.fromScene(new xh,.04).texture,e.environmentIntensity=.55,n.dispose();let i=new fn(36,1,.1,60);i.position.set(0,0,8),e.add(new Ma(13627102,403229,.5));let r=new wa(16777215,1.7);r.position.set(3,5,4),e.add(r);let o=new cr(12907071,22,24,2);o.position.set(-4,2.5,-2),e.add(o);let a=new Pi;e.add(a);let l=new Pi;a.add(l);let c=new Ds({color:12907071,metalness:.7,roughness:.3,clearcoat:1,clearcoatRoughness:.15,emissive:12907071,emissiveIntensity:.22}),h=new xe(new ma(Z_,Z_,.1,72),c);h.rotation.x=Math.PI/2,l.add(h);let d=new Ds({color:1089122,metalness:.2,roughness:.4,clearcoat:.8}),u=new xe(new xa(.28,.036,16,72),d);u.position.z=.052;let f=u.clone();f.position.z=-.052,l.add(u,f);let g=new _a(W1,48,32),_=new Zt(670508),m=new Zt(12907071),p=[];for(let it=0;it<8;it++){let A=it/8*Math.PI*2+Math.PI/2,x=new xe(g,new Ds({color:1089122,roughness:.3,metalness:.05,clearcoat:1,clearcoatRoughness:.1,emissive:670508,emissiveIntensity:.5}));a.add(x),p.push({mesh:x,home:new G(Math.cos(A)*q_,Math.sin(A)*q_,0),scatter:new G(Wo[it][0]*.85,Wo[it][1],Wo[it][2]),scatterMobile:new G(Wo[it][0]*.75,Wo[it][1]*.65,Wo[it][2]),phase:it*.8})}let S=[];for(let it=0;it<3;it++){let A=new xe(new ga(.9,.925,128),new Is({color:12907071,transparent:!0,opacity:0,blending:fo,depthWrite:!1,side:mi}));A.visible=!1,a.add(A),S.push(A)}let C=Ho()?260:540,y=new Float32Array(C*3);for(let it=0;it<C;it++)y[it*3]=(Math.random()-.5)*16,y[it*3+1]=(Math.random()-.5)*11,y[it*3+2]=(Math.random()-.5)*9-1;let M=new pn;M.setAttribute("position",new Fn(y,3));let b=new fa(M,new oo({color:3984262,size:.045,transparent:!0,opacity:.7,depthWrite:!1,blending:fo,sizeAttenuation:!0}));e.add(b);let E=2.25,v=E*H1,w=new Pi;e.add(w);let R=new xe(new vh(v*.9,E*.955,.12,4,.05),new Ds({color:923155,metalness:.5,roughness:.4,clearcoat:.7}));R.position.z=-.062,w.add(R);let D=new ar(v,E),L=()=>new xe(D,new Is({transparent:!0,toneMapped:!1,fog:!1})),B=L(),I=L();I.position.z=.002,I.material.opacity=0,w.add(B,I);let z={y:0},q=new Sa,k={},j=it=>{if(!k[it]){let A=q.load(`/assets/img/screens/${it}.webp`);A.colorSpace=Tn,A.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy()),k[it]=A}return k[it]};for(let it of document.querySelectorAll("[data-screen]"))j(it.dataset.screen);let Z=null,P=!1,et=null;function bt(it){if(!(!it||it===Z)){if(P){et=it;return}if(!Z){B.material.map=j(it),B.material.needsUpdate=!0,Z=it;return}P=!0,I.material.map=j(it),I.material.needsUpdate=!0,I.material.opacity=0,Fi||xn.fromTo(z,{y:-.08},{y:0,duration:.7,ease:"power3.out"}),xn.to(I.material,{opacity:1,duration:Fi?0:.45,ease:"power2.out",onComplete:()=>{if(B.material.map=I.material.map,B.material.needsUpdate=!0,I.material.opacity=0,Z=it,P=!1,et){let A=et;et=null,bt(A)}}})}}let Tt=document.getElementById("labels"),Ht=G1.map(it=>{let A=document.createElement("span");return A.className="orb-label",A.textContent=it,Tt.appendChild(A),A}),zt=[...document.querySelectorAll("[data-shot]")];function Wt(it,A){let x=it?0:xn.utils.clamp(.7,1.1,A/1.6),O=1.75*x,V=(rt,vt,dt,mt,ut,Ct,Ft,N)=>({phoneX:rt,phoneY:vt,phoneZ:dt,phoneRX:mt,phoneRY:ut,phoneRZ:Ct,phoneS:Ft,phoneA:N}),W=(rt,vt,dt,mt,ut,Ct,Ft,N,pt)=>({ringX:rt,ringY:vt,ringZ:dt,ringRX:mt,ringRY:ut,ringRZ:Ct,ringS:Ft,spread:N,spin:pt}),ct=(rt,vt,dt)=>({camX:rt,camY:vt,camZ:dt+(it?.9:0)}),lt=V(0,-4.2,0,0,0,0,.8,0),Q=rt=>it?V(0,.9,0,.02,rt*.5,0,.8,1):V(O,-.05,0,0,rt,0,1,1),J=(rt,vt,dt)=>({particles:rt,sonar:vt,labels:dt});return{hero:{...ct(0,.15,7.6),...it?W(0,1.6,0,.45,0,0,.8,0,1):W(1.9*x,.05,0,.45,0,0,1.25,0,1),...lt,...J(1,0,0)},anything:{...ct(0,0,7.2),...it?W(0,1.55,0,.3,.2,0,.72,1,.3):W(1.9*x,-.1,0,.3,.3,0,1.2,1,.3),...lt,...J(.8,0,1)},how:{...ct(0,0,6.4),...it?W(1,2.3,-2.8,.9,.3,0,.45,0,.5):W((1.75+1.1)*x,1.6,-3.6,.9,.3,0,.5,0,.5),...Q(-.3),...J(.6,0,0)},urgent:{...ct(0,0,6.4),...it?W(0,1.05,-3,1.25,0,0,1.1,.12,.2):W(O+.5*x,.1,-3.2,1.25,0,0,1.3,.12,.2),...Q(-.2),...J(.5,1,0)},sell:{...ct(0,0,6.4),...it?W(-1.1,2.3,-2.6,.6,-.4,0,.45,0,.6):W(-2.4*x,-1.9,-2.2,.6,-.4,0,.7,0,.6),...Q(-.3),...J(.6,0,0)},people:{...ct(0,0,7),...W(0,0,-3,.4,0,0,1,0,.4),...lt,...J(.3,0,0)},film:{...ct(0,0,7.5),...W(3.2*x,1.9,-3,.5,.3,0,.6,0,.4),...lt,...J(.5,0,0)},trust:{...ct(0,.3,7.2),...it?W(0,.3,-2.6,1.15,0,0,1.4,.3,.25):W(.9*x,-.3,-2.4,1.15,0,0,1.8,.3,.25),...lt,...J(.7,0,0)},download:{...ct(0,0,6.2),...it?W(0,1.45,-.5,.15,0,0,.6,0,1.4):W(0,1.25,-.8,.2,0,0,.72,0,1.4),...lt,...J(1,0,0)}}}let K=Wt(Ho(),innerWidth/innerHeight),tt=zt.map(it=>K[it.dataset.shot]??K.hero),gt=Object.keys(tt[0]),Bt={...tt[0]},st={...tt[0]},Dt=[];function kt(){Dt=zt.map(it=>{let A=it.getBoundingClientRect(),x=A.top+window.scrollY;return{top:x,bottom:x+A.height}})}let Lt=it=>{let A=xn.utils.clamp(0,1,it);return A*A*(3-2*A)};function Xt(it,A){for(let x=0;x<Dt.length;x++){let O=Dt[x],V=Math.max(O.top,O.bottom-A);if(it<O.top){if(x===0)return 0;let W=Dt[x-1],ct=Math.max(W.top,W.bottom-A);return x-1+Lt((it-ct)/Math.max(1,O.top-ct))}if(it<=V)return x}return Dt.length-1}function jt(){let it=Xt(window.scrollY,innerHeight),A=Math.floor(it),x=it-A,O=tt[A],V=tt[Math.min(A+1,tt.length-1)];for(let W of gt)Bt[W]=O[W]+(V[W]-O[W])*x}let H={v:Fi?1:0};Fi||xn.to(H,{v:1,duration:2.2,ease:"power3.out",delay:.1});let Qt={x:0,y:0};Fi||window.addEventListener("pointermove",it=>{Ho()||(Qt.x=(it.clientX/innerWidth-.5)*2,Qt.y=(it.clientY/innerHeight-.5)*2)},{passive:!0});function pe(){let it=innerWidth,A=innerHeight;t.setPixelRatio(Math.min(devicePixelRatio||1,Ho()?1.75:2)),t.setSize(it,A,!1),i.aspect=it/A,i.updateProjectionMatrix(),K=Wt(Ho(),it/A),tt=zt.map(x=>K[x.dataset.shot]??K.hero),kt()}pe();let Ee=0;window.addEventListener("resize",()=>{clearTimeout(Ee),Ee=setTimeout(pe,120)}),Kt.addEventListener("refresh",kt);let Gt=new G,fe=new G,F=-1;function Ae(it,A){if(document.hidden)return;let x=it,O=Math.min(.05,(A||16)/1e3);if(jt(),Fi||Zd){for(let J of gt)st[J]=Bt[J];Zd=!1}else{let J=1-Math.exp(-O*5.5);for(let rt of gt)st[rt]+=(Bt[rt]-st[rt])*J}let V=1-H.v;i.position.set(st.camX+Qt.x*.22,st.camY-Qt.y*.14,st.camZ+V*3.2),fe.set(0,0,0),i.lookAt(fe);let W=Math.max(st.spread,V),ct=Ho();a.position.set(st.ringX,st.ringY,st.ringZ),a.rotation.set(st.ringRX+Math.sin(x*.4)*.04,st.ringRY+x*.06*st.spin,st.ringRZ),a.scale.setScalar(st.ringS),l.rotation.y=x*.25*st.spin;for(let J=0;J<p.length;J++){let rt=p[J];Gt.copy(rt.home).lerp(ct?rt.scatterMobile:rt.scatter,W),Gt.y+=Math.sin(x*.9+rt.phase)*.05*(.4+W),rt.mesh.position.copy(Gt);let vt=J<5?st.sonar*(.35+.35*Math.sin(x*2.2-J*.9)):0;rt.mesh.material.emissive.lerpColors(_,m,vt),rt.mesh.material.emissiveIntensity=.5+.5*vt}for(let J=0;J<S.length;J++){let rt=(x*.42+J/3)%1,vt=S[J];vt.visible=st.sonar>.02,vt.scale.setScalar(.5+rt*2.2),vt.material.opacity=(1-rt)*.5*st.sonar}b.rotation.y=x*.015,b.position.y=Math.sin(x*.2)*.2,b.material.opacity=.72*st.particles;let lt=Fi?0:Math.sin(x*.7)*.035;w.visible=st.phoneA>.02,w.position.set(st.phoneX,st.phoneY+lt+z.y,st.phoneZ),w.rotation.set(st.phoneRX,st.phoneRY+(Fi?0:Math.sin(x*.55)*.03),st.phoneRZ),w.scale.setScalar(st.phoneS*(.72+.28*st.phoneA));let Q=st.labels;if(Q>.01){Tt.style.opacity=Q.toFixed(3),F=1;for(let J=0;J<p.length;J++){p[J].mesh.getWorldPosition(Gt).project(i);let rt=(Gt.x*.5+.5)*innerWidth,vt=(-Gt.y*.5+.5)*innerHeight+34*st.ringS,dt=Ht[J];dt.style.transform=`translate(-50%,-50%) translate3d(${rt.toFixed(1)}px,${vt.toFixed(1)}px,0)`,dt.style.opacity=Gt.z<1?"1":"0"}}else F!==0&&(Tt.style.opacity="0",F=0);t.render(e,i)}return xn.ticker.add(Ae),{setScreen:bt,resize:pe}}});export default q1();
