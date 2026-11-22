(function(){
  const config = window.IDD_CONFIG || {};
  const menu = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  menu.addEventListener('click', function(){
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  document.getElementById('year').textContent = new Date().getFullYear();

  const filters = [...document.querySelectorAll('.filter')];
  const cards = [...document.querySelectorAll('.content-card')];
  const search = document.getElementById('contentSearch');
  const empty = document.getElementById('emptyState');
  let active = 'all';
  function applyFilter(){
    const term = search.value.trim().toLowerCase();
    let visible = 0;
    cards.forEach(card => {
      const matchesCategory = active === 'all' || card.dataset.category === active;
      const matchesText = card.textContent.toLowerCase().includes(term);
      const show = matchesCategory && matchesText;
      card.hidden = !show;
      if(show) visible++;
    });
    empty.hidden = visible !== 0;
  }
  filters.forEach(btn => btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active'); active = btn.dataset.filter; applyFilter();
  }));
  search.addEventListener('input', applyFilter);

  document.querySelectorAll('[data-social]').forEach(link => {
    const platform = link.dataset.social;
    const url = config.socials && config.socials[platform];
    if(url && /^https:\/\/(www\.)?/.test(url)){
      link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer';
    } else {
      link.href = 'mailto:' + (config.email || 'islamicdailydrive@gmail.com') + '?subject=' + encodeURIComponent('Islamic Daily Drive social media link');
      link.addEventListener('click', function(e){
        if(!url){ e.preventDefault(); alert('The official ' + platform + ' link has not been added yet. Please email Islamic Daily Drive for the correct page link.'); }
      });
    }
  });
})();
