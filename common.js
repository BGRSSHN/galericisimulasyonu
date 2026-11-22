// Ortak: yasal metni sayfaya bas, alt bilgiyi doldur. Metinler legal.js'de (oyunla aynı dosya).
(function(){
  const VS=window.LEGAL_VS||{},set=(id,v)=>{const e=document.getElementById(id);if(e)e.textContent=v};
  const d=document.querySelector('[data-doc]');
  if(d)d.innerHTML={kvkk:window.KVKK_HTML,privacy:window.PRIVACY_HTML}[d.dataset.doc]||'';
  set('y',new Date().getFullYear());
  set('vs',VS.ad&&VS.ad[0]!=='['?VS.ad:'Galerici Tycoon');
  const m=document.getElementById('mail');
  if(m){if(VS.eposta&&VS.eposta.includes('@')&&VS.eposta[0]!=='[')m.href='mailto:'+VS.eposta;else m.remove()}
})();
