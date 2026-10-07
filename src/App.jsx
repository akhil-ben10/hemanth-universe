import React, {useState,useEffect,useRef} from 'react';
import Icon from './components/Icon';
import {Pillars,ReunionItems,Recipes,DesignTags,ServiceCards,Gallery,FilmToggle} from './components/Content';
import GamingGear from './components/GamingGear';
import PhotoDialog from './components/PhotoDialog';
import useAmbientMedia from './useAmbientMedia';
export default function App(){
const [menuOpen,setMenuOpen]=useState(false);const [photo,setPhoto]=useState(null);const [filmsPaused,setFilmsPaused]=useState(()=>matchMedia('(prefers-reduced-motion: reduce)').matches);const root=useRef(null);
useAmbientMedia(root,filmsPaused,setFilmsPaused);
function onClick(e){const tile=e.target.closest('[data-photo]');if(tile){setPhoto({src:tile.dataset.photo,alt:tile.querySelector('img').alt})}if(e.target.closest('#mm a'))setMenuOpen(false)}
return <div ref={root} onClick={onClick}>

<header className="fixed left-0 w-full z-50 glass border-b border-slate-800/80" style={{"top": "env(safe-area-inset-top,0px)"}}>
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
  <a href="#home" aria-label="Hemanth home" className="flex items-center space-x-3"><div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-gold-600 to-gold-400 flex items-center justify-center font-heading font-bold text-navy-900 text-xl">H</div><span className="font-heading font-bold text-xl text-white">Hemanth<span className="text-gold-500">.</span></span></a>
  <nav className="hidden md:flex space-x-7 text-sm font-medium text-slate-300"><a href="#about" className="hover:text-gold-400">About</a><a href="#mithrulam" className="hover:text-gold-400">Mithrulam</a><a href="#dishcovery" className="hover:text-gold-400">Dishcovery</a><a href="#design" className="hover:text-gold-400">Design</a><a href="#service" className="hover:text-gold-400">Service</a><a href="#lifestyle" className="hover:text-gold-400">Lifestyle</a><a href="#gallery" className="hover:text-gold-400">Gallery</a></nav>
  <a href="#contact" className="hidden md:inline-block px-5 py-2.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-semibold text-sm">Contact</a>
  <button onClick={() => setMenuOpen(!menuOpen)} id="mb" aria-label="Toggle menu" aria-controls="mm" aria-expanded={menuOpen} className="md:hidden text-slate-300 p-2 text-2xl"><Icon name="menu" className="" /></button>
 </div>
 <div id="mm" className={(menuOpen ? "" : "hidden ")+"md:hidden px-4 pt-2 pb-6 space-y-2 text-slate-300"}><a href="#about" className="block px-3 py-2">About</a><a href="#mithrulam" className="block px-3 py-2">Mithrulam</a><a href="#dishcovery" className="block px-3 py-2">Dishcovery</a><a href="#design" className="block px-3 py-2">Design</a><a href="#service" className="block px-3 py-2">Service</a><a href="#lifestyle" className="block px-3 py-2">Lifestyle</a><a href="#gallery" className="block px-3 py-2">Gallery</a><a href="#contact" className="block px-3 py-2">Contact</a></div>
</header>

<main><section id="home" className="min-h-screen pt-32 pb-20 flex items-center relative overflow-hidden bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900">
 <div className="absolute top-1/4 left-10 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>
 <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid lg:grid-cols-12 gap-12 items-center">
  <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
   <div className="flex flex-wrap justify-center lg:justify-start gap-2 text-xs sm:text-sm font-medium text-gold-400"><span className="glass px-4 py-2 rounded-full">🧭 Explorer</span><span className="glass px-4 py-2 rounded-full">🤝 Philanthropist</span><span className="glass px-4 py-2 rounded-full">📖 Wisdom Seeker</span></div>
   <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-white leading-tight">Hi, I'm <span className="gt">Hemanth</span></h1>
   <p className="text-gold-400/80 text-lg">అన్వేషకుడు · సేవాపరుడు · జ్ఞానాన్వేషి</p>
   <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">Organizer of reunions, creator of recipes, designer of banners and brands. I bring people together — through <b className="text-white font-medium">memories</b>, <b className="text-white font-medium">food</b>, <b className="text-white font-medium">design</b> and <b className="text-white font-medium">service</b>.</p>
   <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
    <a href="#gallery" className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-bold text-center hover:scale-105 transition">View Gallery</a>
    <a href="#mithrulam" className="w-full sm:w-auto px-8 py-3.5 rounded-xl glass text-white font-semibold text-center">Mithrulam Reunion</a>
   </div>
   <div className="pt-8 border-t border-slate-800 grid grid-cols-3 gap-4 text-center lg:text-left">
    <div><div className="font-heading text-2xl sm:text-3xl font-bold text-gold-400">2K13</div><div className="text-xs text-slate-400 mt-1">LFPS Batch</div></div>
    <div><div className="font-heading text-2xl sm:text-3xl font-bold text-gold-400">Dishcovery</div><div className="text-xs text-slate-400 mt-1">Weekend Chef</div></div>
    <div><div className="font-heading text-2xl sm:text-3xl font-bold text-gold-400">Annadanam</div><div className="text-xs text-slate-400 mt-1">Community Service</div></div>
   </div>
  </div>
  <div className="lg:col-span-5 grid grid-cols-2 gap-4 max-w-md mx-auto w-full lg:max-w-none">
   <button className="portrait-tile h-80" data-photo="assets/03-1000080360.jpg" aria-label="View Hemanth’s forest portrait"><img src="assets/03-1000080360.jpg" alt="Hemanth among the trees" /><span>Curiosity, always.</span></button>
   <button className="portrait-tile h-80 translate-y-6" data-photo="assets/journey.jpg" aria-label="View Hemanth’s hilltop photograph"><img src="assets/journey.jpg" alt="Hemanth looking across a valley" style={{"objectPosition": "72% center"}} /><span>New perspectives.</span></button>
  </div>
 </div>
</section>

<section id="about" className="sec bg-navy-800/50 border-t border-slate-800"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-14"><h2 className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-2">Who I Am</h2><h3 className="font-heading text-3xl sm:text-4xl font-bold text-white">Three Ways I Live</h3></div>
 <div id="pillars" className="grid lg:grid-cols-3 gap-8"><Pillars /></div>
</div></section>

<section id="mithrulam" className="sec border-t border-slate-800"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
 <div className="space-y-5">
  <h2 className="text-xs font-bold uppercase tracking-widest text-gold-400">Biggest Ongoing Project</h2>
  <h3 className="font-heading text-3xl sm:text-4xl font-bold text-white">Mithrulam — <span className="gt">LFPS 2K13 Reunion</span></h3>
  <p className="text-slate-400 leading-relaxed">Bringing the Little Flowers E.M. High School class of 2K13 back together — from branding to the last scorecard.</p>
  <div id="reunion" className="grid sm:grid-cols-2 gap-3"><ReunionItems /></div>
  <p className="text-sm text-slate-400">Attendees bring their old school memories: uniform, belt, tie, ID card, diary and more.</p>
 </div>
 <div className="grid grid-cols-2 gap-4 items-start"><div className="reunion-art h-64 sm:h-80 rounded-2xl p-5 flex flex-col justify-between border border-gold-500/25"><span className="text-xs tracking-widest text-gold-300">LFPS · CLASS OF 2K13</span><div><span className="text-3xl sm:text-4xl font-heading font-bold text-white">మిత్రులం</span><span className="block mt-3 text-xs tracking-widest text-gold-300">MITHRULAM</span></div><span className="text-sm text-slate-300">Old memories.<br />New stories.</span></div><button data-photo="assets/02-1000245161.jpg" className="portrait-tile h-64 sm:h-80 mt-8" aria-label="View Hemanth capturing a memory"><img src="assets/02-1000245161.jpg" alt="Hemanth photographing a historic courtyard" loading="lazy" style={{"objectPosition": "62% center"}} /><span>Collecting memories.</span></button></div>
</div></section>

<section id="dishcovery" className="sec bg-navy-800/40 border-t border-slate-800"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center max-w-2xl mx-auto mb-14"><h2 className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-2">Cooking Hobby</h2><h3 className="font-heading text-3xl sm:text-4xl font-bold text-white">Dishcovery</h3><p className="text-slate-400 mt-3">Hemanth, Diwakar & Akhil experiment with unique recipes every weekend.</p></div>
 <div id="recipes" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"><Recipes /></div>
</div></section>

<section id="design" className="sec border-t border-slate-800"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center max-w-2xl mx-auto mb-14"><h2 className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-2">Design & Creativity</h2><h3 className="font-heading text-3xl sm:text-4xl font-bold text-white">Clean. Layered. Never Cluttered.</h3></div>
 <div id="design-grid" className="flex flex-wrap justify-center gap-3"><DesignTags /></div><div className="creative-stories"><button className="portrait-tile" data-photo="assets/creative-portrait.jpg" aria-label="View creative portrait"><img src="assets/creative-portrait.jpg" alt="Stylized portrait of Hemanth in red and blue tones" loading="lazy" /><span>A different perspective.</span></button><button className="portrait-tile" data-photo="assets/stage-costume.jpg" aria-label="View costume portrait"><img src="assets/stage-costume.jpg" alt="Hemanth wearing an ornate colourful stage costume" loading="lazy" style={{"objectPosition": "center 35%"}} /><span>Colour. Character. Creativity.</span></button></div>
</div></section>

<section id="service" className="sec bg-navy-800/50 border-t border-slate-800"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center max-w-2xl mx-auto mb-14"><h2 className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-2">Friends & Community</h2><h3 className="font-heading text-3xl sm:text-4xl font-bold text-white">Giving Back Together</h3></div>
 <div id="serve" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"><ServiceCards /></div><button className="friends-feature portrait-tile" data-photo="assets/friends-outdoors.jpg" aria-label="View friends on an outdoor trip"><img src="assets/friends-outdoors.jpg" alt="Hemanth and friends sitting among tree roots on an outdoor trip" loading="lazy" /><span>Shared adventures. Familiar faces.</span></button>
</div></section>

<section id="lifestyle" className="sec bg-navy-800/40 border-t border-slate-800"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center max-w-2xl mx-auto mb-14"><h2 className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-2">Off Duty</h2><h3 className="font-heading text-3xl sm:text-4xl font-bold text-white">Movement. Mindfulness. A Little Play.</h3></div><div className="grid lg:grid-cols-2 gap-8"><article className="glass p-6 sm:p-8 rounded-2xl"><span className="text-xs tracking-widest text-gold-400">MORNING RITUAL</span><h4 className="font-heading text-2xl sm:text-3xl text-white font-bold mt-3">A strong start, a quiet mind.</h4><p className="text-slate-400 mt-4 leading-relaxed">Morning running, exercise and yoga. Making room for movement, a fresh breath and a calmer beginning.</p><div className="flex flex-wrap gap-2 mt-5 text-sm text-gold-300"><span className="glass rounded-full px-4 py-2">Running</span><span className="glass rounded-full px-4 py-2">Exercise</span><span className="glass rounded-full px-4 py-2">Yoga</span></div><div className="film-grid mt-7"><figure><video autoPlay={true} loop={true} muted={true} playsInline={true} preload="metadata" poster="assets/morning-1.jpg" aria-label="Silent film of Hemanth outdoors"><source src="assets/morning-1.mp4" type="video/mp4" /></video><figcaption>Fresh air. Fresh energy.</figcaption></figure><figure><video autoPlay={true} loop={true} muted={true} playsInline={true} preload="metadata" poster="assets/morning-2.jpg" aria-label="Silent film of Hemanth on the school grounds"><source src="assets/morning-2.mp4" type="video/mp4" /></video><figcaption>Everyday, in motion.</figcaption></figure></div><FilmToggle paused={filmsPaused} onToggle={() => setFilmsPaused(!filmsPaused)} /></article><article className="glass p-6 sm:p-8 rounded-2xl"><span className="text-xs tracking-widest text-gold-400">GAME MODE</span><h4 className="font-heading text-2xl sm:text-3xl text-white font-bold mt-3">Drop in. Squad up.</h4><p className="text-slate-400 mt-4 leading-relaxed">Another side of Hemanth: the BGMI player. Quick decisions, a little competition and the fun of a good match.</p><GamingGear /></article></div></div></section>
<section id="gallery" className="sec border-t border-slate-800"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center max-w-2xl mx-auto mb-10"><h2 className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-2">Moments</h2><h3 className="font-heading text-3xl sm:text-4xl font-bold text-white">Photo & Video Gallery</h3><p className="text-slate-400 mt-3 text-sm">A few places, perspectives and everyday moments. Tap a photo to look closer.</p></div>
 <div id="gal" className="grid grid-cols-2 md:grid-cols-4 gap-4"><Gallery /></div><div className="gallery-film-control"><span>Little moments, in motion.</span><FilmToggle paused={filmsPaused} onToggle={() => setFilmsPaused(!filmsPaused)} /></div>
</div></section>

<section id="contact" className="sec bg-navy-800/40 border-t border-slate-800"><div className="max-w-3xl mx-auto px-4 text-center space-y-5"><h2 className="text-xs font-bold uppercase tracking-widest text-gold-400">Website Design · Contact</h2><h3 className="font-heading text-3xl sm:text-4xl font-bold text-white">Want a website like this?</h3><p className="text-slate-400" lang="te">ఇలాంటి వెబ్‌సైట్ కావాలా? సంప్రదించండి.</p><a href="tel:+917661919185" className="contact-number">7661919185</a><div className="contact-actions"><a href="tel:+917661919185" className="contact-call">Call now</a><a href="https://wa.me/917661919185" target="_blank" rel="noopener noreferrer" className="contact-whatsapp">Chat on WhatsApp</a></div></div></section>
</main><footer className="py-8 border-t border-slate-800/80 text-center text-slate-500 text-sm">© 2026 Hemanth · Made with ❤️ by friends</footer>
<PhotoDialog photo={photo} onClose={()=>setPhoto(null)} /></div>}
