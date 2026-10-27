/* Progressive enhancement: the high-detail image remains visible without WebGL. */
(() => {
  'use strict';
  const canvas=document.getElementById('blackhole-canvas');
  const host=document.getElementById('home');
  if(!canvas || !host) return;
  const gl=canvas.getContext('webgl',{alpha:false,antialias:false,powerPreference:'low-power'});
  if(!gl) return;
  const vertex=`attribute vec2 position;varying vec2 uv;void main(){uv=(position+1.0)*0.5;gl_Position=vec4(position,0.,1.);}`;
  const fragment=`precision mediump float;
  varying vec2 uv;
  uniform sampler2D image;
  uniform vec2 resolution;
  uniform vec2 pointer;
  uniform float imageAspect;
  uniform float time;
  float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
  void main(){
    float aspect=resolution.x/resolution.y;
    vec2 q=uv;
    if(aspect>imageAspect) q.y=(q.y-.5)*imageAspect/aspect+.5;
    else q.x=(q.x-.67)*aspect/imageAspect+.67;
    q+=pointer*.002;
    vec2 center=vec2(.665,.515);
    vec2 p=(q-center)*vec2(imageAspect,1.);
    float r=length(p);
    float theta=atan(p.y,p.x);
    float zone=smoothstep(.17,.23,r)*(1.-smoothstep(.39,.65,r));
    float swirl=zone*(sin(r*32.-time*.55)*.008+sin(theta*3.+time*.3)*.004);
    float c=cos(swirl),s=sin(swirl);
    vec2 warped=mat2(c,-s,s,c)*p;
    vec2 source=center+warped/vec2(imageAspect,1.);
    vec3 col=texture2D(image,source).rgb;
    float hot=max(col.r,max(col.g,col.b));
    float filament=sin(theta*26.-time*1.8+r*80.)*.5+.5;
    float pulse=zone*smoothstep(.38,.95,hot)*(.045+.055*filament);
    col+=vec3(1.,.38,.08)*pulse;
    float ray=exp(-abs(r-.204)*150.)*pow(max(0.,cos(theta-time*.3)),16.);
    col+=vec3(1.,.72,.35)*ray*.08;
    gl_FragColor=vec4(col,1.);
  }`;
  function compile(type,source){const shader=gl.createShader(type);gl.shaderSource(shader,source);gl.compileShader(shader);if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS)){gl.deleteShader(shader);return null;}return shader;}
  const vs=compile(gl.VERTEX_SHADER,vertex),fs=compile(gl.FRAGMENT_SHADER,fragment);
  if(!vs||!fs)return;
  const program=gl.createProgram();gl.attachShader(program,vs);gl.attachShader(program,fs);gl.linkProgram(program);
  if(!gl.getProgramParameter(program,gl.LINK_STATUS))return;
  gl.useProgram(program);
  const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);
  const position=gl.getAttribLocation(program,'position');gl.enableVertexAttribArray(position);gl.vertexAttribPointer(position,2,gl.FLOAT,false,0,0);
  const uniforms={};['resolution','pointer','imageAspect','time','image'].forEach(name=>uniforms[name]=gl.getUniformLocation(program,name));
  let ready=false,visible=true,raf=0,last=0,lost=false;const pointer=[0,0];
  function resize(){const r=canvas.getBoundingClientRect();const scale=Math.min(devicePixelRatio||1,1.5,2200/Math.max(1,r.width));canvas.width=Math.max(1,Math.round(r.width*scale));canvas.height=Math.max(1,Math.round(r.height*scale));gl.viewport(0,0,canvas.width,canvas.height);gl.uniform2f(uniforms.resolution,canvas.width,canvas.height);}
  function enabled(){return ready&&!lost&&visible&&!document.hidden&&!document.documentElement.classList.contains('is-still');}
  function tick(t){raf=0;if(!enabled())return;if(t-last>33){gl.uniform1f(uniforms.time,t/1000);gl.uniform2f(uniforms.pointer,pointer[0],pointer[1]);gl.drawArrays(gl.TRIANGLES,0,6);last=t;}raf=requestAnimationFrame(tick);}
  function restart(){if(raf)cancelAnimationFrame(raf);raf=0;if(enabled())raf=requestAnimationFrame(tick);}
  const img=new Image();img.onload=()=>{try{const texture=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,texture);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,img);gl.uniform1i(uniforms.image,0);gl.uniform1f(uniforms.imageAspect,img.naturalWidth/img.naturalHeight);resize();gl.uniform1f(uniforms.time,0);gl.uniform2f(uniforms.pointer,0,0);gl.drawArrays(gl.TRIANGLES,0,6);ready=true;canvas.classList.add('ready');restart();}catch{canvas.classList.remove('ready');}};img.src='assets/black-hole.png';
  new ResizeObserver(()=>{resize();restart();}).observe(canvas);
  new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;restart();}).observe(host);
  new MutationObserver(restart).observe(document.documentElement,{attributes:true,attributeFilter:['class']});
  host.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;const r=host.getBoundingClientRect();pointer[0]=(e.clientX-r.left)/r.width-.5;pointer[1]=.5-(e.clientY-r.top)/r.height;},{passive:true});
  host.addEventListener('pointerleave',()=>{pointer[0]=0;pointer[1]=0;});
  document.addEventListener('visibilitychange',restart);
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();lost=true;canvas.classList.remove('ready');restart();});
})();
