 // Scroll-triggered fade-up animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // Stagger children inside .fade-up parents
  document.querySelectorAll('.service-card, .testimonial-card, .gallery-item').forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 0.1}s`;
  });

  // Form submit
  function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.form-submit');
    btn.textContent = '✓ Inquiry Sent — I\'ll be in touch soon!';
    btn.style.background = '#16a34a';
    btn.style.animation = 'none';
  }

  // Generate wave bars via JS
  const waveContainer = document.querySelector('.animated-waves');
  if (waveContainer && waveContainer.children.length === 0) {
    for (let i = 0; i < 48; i++) {
      const bar = document.createElement('div');
      bar.className = 'wave-bar';
      bar.style.animationDelay = `${(i * 0.06).toFixed(2)}s`;
      waveContainer.appendChild(bar);
    }
  }