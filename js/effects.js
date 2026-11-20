// Click water-drop splash and the living water surface
function splash(x,y){const mk=c=>{const d=document.createElement('div');d.className='ck '+c;d.style.left=x+'px';d.style.top=y+'px';document.body.append(d);return d};
const dr=mk('fd');dr.animate([{transform:'translateY(-80px) scale(.8,1.5)',opacity:0},{transform:'translateY(0)',opacity:1}],{duration:200,easing:'ease-in'}).onfinish=()=>{dr.remove();
[0,150].forEach(dl=>{const r=mk('rg');r.style.animationDelay=dl+'ms';r.onanimationend=()=>r.remove()});
for(let i=0;i<8;i++){const s=mk('sd'),a=Math.PI*(.12+.76*i/7),d=30+Math.random()*50,dx=Math.cos(a)*d,dy=-Math.sin(a)*d;
s.animate([{transform:'translate(0,0)',opacity:1},{transform:`translate(${dx}px,${dy}px)`,offset:.45,opacity:1},{transform:`translate(${dx*1.4}px,${dy+70}px) scale(.3)`,opacity:0}],{duration:650+Math.random()*300,easing:'ease-out'}).onfinish=()=>s.remove()}
window.WH&&WH(x)}}
addEventListener('pointerdown',e=>splash(e.clientX,e.clientY));
(function(){const A=document.getElementById('wa'),B=document.getElementById('wb'),N=64,h=new Float32Array(N),v=new Float32Array(N);let lp=scrollY,sv=0,t=0;
window.WH=x=>{const i=Math.max(1,Math.min(N-2,Math.round(x/innerWidth*(N-1))));v[i]-=22};
(function f(){t+=.016;const pr=scrollY/Math.max(1,document.body.scrollHeight-innerHeight),sp=Math.abs(scrollY-lp);lp=scrollY;sv+=(Math.min(sp,40)-sv)*.1;
for(let i=0;i<N;i++){const l=h[i?i-1:0],r=h[i<N-1?i+1:N-1];v[i]=(v[i]+.3*(l+r-2*h[i])-.02*h[i])*.985}
for(let i=0;i<N;i++)h[i]+=v[i];
const base=178-pr*92,am=4+sv*.35;let d1='M0,200',d2='M0,200';
for(let i=0;i<N;i++){const x=i/(N-1)*1200,k=x/1200*6.283;d1+=' L'+x.toFixed(0)+','+(base+Math.sin(k*2+t*1.3)*am+h[i]).toFixed(1);d2+=' L'+x.toFixed(0)+','+(base+6+Math.sin(k*3-t*1.7)*am*.8+h[i]*.7).toFixed(1)}
A.setAttribute('d',d1+' L1200,200Z');B.setAttribute('d',d2+' L1200,200Z');requestAnimationFrame(f)})()})();
