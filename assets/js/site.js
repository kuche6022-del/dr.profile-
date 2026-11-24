(()=>{'use strict';
const root=document.documentElement;
const header=document.querySelector('.site-header');
const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});}
const themeButton=document.createElement('button');
themeButton.className='theme-toggle';
themeButton.type='button';
themeButton.setAttribute('aria-label','Switch to dark colour mode');
themeButton.title='Switch website colour mode';
const stored=localStorage.getItem('grace-theme');
const systemDark=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;
let mode=stored==='dark'||stored==='light'?stored:(systemDark?'dark':'light');
function applyTheme(next,save){
 mode=next;
 root.setAttribute('data-theme-mode',mode);
 themeButton.textContent=mode==='dark'?'☀ Light mode':'☾ Dark mode';
 themeButton.setAttribute('aria-label',mode==='dark'?'Switch to light colour mode':'Switch to dark colour mode');
 themeButton.setAttribute('aria-pressed',String(mode==='dark'));
 const meta=document.querySelector('meta[name="theme-color"]');
 if(meta)meta.setAttribute('content',mode==='dark'?'#14232c':'#f8f7f3');
 if(save)localStorage.setItem('grace-theme',mode);
}
if(header){header.appendChild(themeButton);applyTheme(mode,false);themeButton.addEventListener('click',()=>applyTheme(mode==='dark'?'light':'dark',true));}
document.querySelectorAll('#year').forEach(el=>el.textContent=new Date().getFullYear());
const finder=document.getElementById('programme-finder');
if(finder){finder.addEventListener('submit',e=>{e.preventDefault();const choice=new FormData(finder).get('journey');const map={'pressure':['REST · Burnout Recovery','A structured space to examine pressure, restore boundaries and build more sustainable ways of working.','burnout-recovery.html'],'later':['SAGE · Life After 55','Explore identity, purpose and the possibilities of a new life or career chapter.','third-act.html'],'young':['RISE · Young People (16–25)','A supportive, strengths-based space to explore identity, relationships and next steps.','rise-coaching.html'],'study':['Student Success Coaching','Support for confidence, belonging, motivation and progress in education.','student-success.html'],'team':['Workplace & Healthcare Wellbeing','Discuss staff wellbeing, burnout prevention and a programme shaped around your organisation.','workplace-wellbeing.html'],'business':['Business & Leadership Mentoring','A practical sounding board for leadership, business and professional decisions.','business-mentoring.html']};const item=map[choice];const out=document.getElementById('programme-result');if(item&&out){out.innerHTML='<strong>'+item[0]+'</strong><p>'+item[1]+'</p><a class="btn btn-primary" href="'+item[2]+'">Explore this pathway</a>';out.classList.add('show');out.focus();}});}
const form=document.getElementById('contact-form');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const note=document.getElementById('form-note');if(note)note.textContent='Your form is ready for a secure email or booking integration. Please use the LinkedIn contact link until Grace’s approved business email is added. Do not include sensitive personal or health information.';});}
})();