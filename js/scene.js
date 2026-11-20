// Three.js 3D water droplet, leaves and particles (fixed background)
(function(){const c=document.getElementById('bg');if(!window.THREE)return;let R;try{R=new THREE.WebGLRenderer({canvas:c,alpha:true,antialias:true})}catch(e){return}
R.setPixelRatio(Math.min(devicePixelRatio,2));const S=new THREE.Scene(),C=new THREE.PerspectiveCamera(45,1,.1,100);C.position.z=8;
const pr=[];for(let i=0;i<=60;i++){const t=Math.PI-i/60*Math.PI;pr.push(new THREE.Vector2(Math.max(0,Math.sin(t)*Math.sin(t/2))*1.5,Math.cos(t)*1.7))}
const G=new THREE.Group();S.add(G);const drop=new THREE.Mesh(new THREE.LatheGeometry(pr,64),new THREE.MeshPhysicalMaterial({color:0x38bdf8,roughness:.04,metalness:0,transparent:true,opacity:.82,clearcoat:1,clearcoatRoughness:0,emissive:0x0a4a80,emissiveIntensity:.6}));G.add(drop);
const core=new THREE.Mesh(new THREE.SphereGeometry(.5,24,24),new THREE.MeshBasicMaterial({color:0x22d3ee,transparent:true,opacity:.35}));core.position.y=-.4;G.add(core);const rg=[0,1].map(i=>{const m=new THREE.Mesh(new THREE.RingGeometry(.95,1,64),new THREE.MeshBasicMaterial({color:0x22d3ee,transparent:true,side:2}));m.rotation.x=-Math.PI/2;m.position.y=-2;G.add(m);return m});
S.add(new THREE.AmbientLight(0x6fb8ff,.7));const l1=new THREE.PointLight(0x22d3ee,2.2,30);l1.position.set(4,4,6);const l2=new THREE.PointLight(0x34d399,1.6,30);l2.position.set(-5,-2,4);S.add(l1,l2);
const sh=new THREE.Shape();sh.moveTo(0,0);sh.quadraticCurveTo(.55,.5,0,1.3);sh.quadraticCurveTo(-.55,.5,0,0);const lg=new THREE.ShapeGeometry(sh),lm=new THREE.MeshStandardMaterial({color:0x34d399,side:2,roughness:.5,emissive:0x064e3b});const lv=[];
for(let i=0;i<7;i++){const m=new THREE.Mesh(lg,lm),a=i/7*6.283;m.userData={a,r:2.6+Math.random()*.8,y:(Math.random()-.5)*3};G.add(m);lv.push(m)}
const N=500,pos=new Float32Array(N*3);for(let i=0;i<N*3;i++)pos[i]=(Math.random()-.5)*(i%3==2?10:22);const pg=new THREE.BufferGeometry();pg.setAttribute('position',new THREE.BufferAttribute(pos,3));
const pt=new THREE.Points(pg,new THREE.PointsMaterial({color:0x22d3ee,size:.05,transparent:true,opacity:.75,blending:THREE.AdditiveBlending,depthWrite:false}));S.add(pt);
let mx=0,my=0;addEventListener('pointermove',e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});
function rs(){R.setSize(innerWidth,innerHeight,false);C.aspect=innerWidth/innerHeight;C.updateProjectionMatrix()}rs();addEventListener('resize',rs);
const k=new THREE.Clock();(function a(){const t=k.getElapsedTime(),p=Math.min(scrollY/innerHeight,3),w=innerWidth<800;
G.position.x=(w?0:2.4)*Math.max(0,1-p*.9)+ (p>1?(w?0:-3.4):0)*Math.min(1,p-1>0?p-1:0);G.position.y=Math.sin(t)*.15+p*.5+(w?1.2:0);G.scale.setScalar(Math.max(.4,(w?.55:1)-p*.22));
rg.forEach((m,i)=>{const q=(t*.5+i*.5)%1;m.scale.setScalar(.3+q*3.2);m.material.opacity=(1-q)*.6});G.rotation.y=t*.4+mx*1.2;G.rotation.x=my*.3;lv.forEach(m=>{const u=m.userData,an=u.a+t*.3;m.position.set(Math.cos(an)*u.r,u.y+Math.sin(t+u.a)*.2,Math.sin(an)*u.r);m.rotation.set(t*.5+u.a,an,.4)});
pt.rotation.y=t*.03+mx*.2;pt.position.y=p*.6;c.style.opacity=p>1.2?.5:1;R.render(S,C);requestAnimationFrame(a)})()})();
