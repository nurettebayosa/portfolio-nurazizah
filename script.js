/* ============================================================
   NUR AZIZAH PORTFOLIO — script.js
   Canvas bg, typewriter, scroll reveal, carousel, navbar
   ============================================================ */

// ===== CANVAS BACKGROUND =====
(function () {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  const PARTICLE_COUNT = 80;
  const ACCENT = '14, 165, 233';

  const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    r: Math.random() * 1.5 + 0.5,
    alpha: Math.random() * 0.5 + 0.2,
  }));

  function drawGrid() {
    const spacing = 60;
    ctx.strokeStyle = `rgba(${ACCENT}, 0.04)`;
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += spacing) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += spacing) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
    }
  }

  function connectParticles() {
    const maxDist = 130;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.18;
          ctx.strokeStyle = `rgba(${ACCENT}, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid();

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${ACCENT}, ${p.alpha})`;
      ctx.fill();
    });

    connectParticles();
    requestAnimationFrame(animate);
  }

  animate();
})();

// ===== TYPEWRITER EFFECT =====
(function () {
  const roles = [
    'System Information Student',
    'UI/UX Designer',
    'Programmer',
    'QA & Documentation Enthusiast',
    'Data Automation Specialist',
  ];
  const el = document.getElementById('typewriter');
  if (!el) return;

  let roleIdx = 0, charIdx = 0, deleting = false;
  const TYPE_SPEED = 70, DELETE_SPEED = 35, PAUSE = 2000;

  function tick() {
    const current = roles[roleIdx];
    if (deleting) {
      charIdx--;
      el.textContent = current.slice(0, charIdx);
      if (charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        setTimeout(tick, 400);
        return;
      }
      setTimeout(tick, DELETE_SPEED);
    } else {
      charIdx++;
      el.textContent = current.slice(0, charIdx);
      if (charIdx === current.length) {
        deleting = true;
        setTimeout(tick, PAUSE);
        return;
      }
      setTimeout(tick, TYPE_SPEED);
    }
  }
  setTimeout(tick, 1200);
})();

// ===== NAVBAR SCROLL + ACTIVE =====
(function () {
  const navbar = document.getElementById('navbar');
  const links = document.querySelectorAll('.nav-link[href^="#"]');
  const sections = Array.from(links).map(l => document.querySelector(l.getAttribute('href'))).filter(Boolean);

  function onScroll() {
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');

    // Active link
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 140) current = '#' + s.id;
    });
    links.forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === current);
    });

    // Back to top
    const btt = document.getElementById('back-to-top');
    if (btt) btt.classList.toggle('visible', window.scrollY > 400);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
})();

// ===== MOBILE NAV TOGGLE =====
(function () {
  const btn = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    links.classList.toggle('open');
  });
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
})();

// ===== BACK TO TOP =====
document.getElementById('back-to-top')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== SCROLL REVEAL =====
(function () {
  const els = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
})();

// ===== IMAGE CAROUSEL =====
const carousels = {};

function initCarousels() {
  document.querySelectorAll('.project-carousel').forEach(carousel => {
    const id = carousel.id;
    const track = carousel.querySelector('.carousel-track');
    const slides = track.children;
    const dotsContainer = document.getElementById(`dots-${id}`);

    carousels[id] = { index: 0, total: slides.length };

    // Create dots
    for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement('div');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', () => goTo(id, i));
      dotsContainer.appendChild(dot);
    }

    if (slides.length <= 1) {
      const prev = carousel.querySelector('.prev');
      const next = carousel.querySelector('.next');
      if (prev) prev.style.display = 'none';
      if (next) next.style.display = 'none';
    }

    // Auto-advance
    if (slides.length > 1) {
      setInterval(() => slideCarousel(id, 1), 4500 + Math.random() * 1500);
    }
  });
}

function goTo(id, idx) {
  const c = carousels[id];
  if (!c) return;
  c.index = (idx + c.total) % c.total;
  const carousel = document.getElementById(id);
  const track = carousel.querySelector('.carousel-track');
  track.style.transform = `translateX(-${c.index * 100}%)`;
  const dots = document.querySelectorAll(`#dots-${id} .carousel-dot`);
  dots.forEach((d, i) => d.classList.toggle('active', i === c.index));
}

function slideCarousel(id, dir) {
  const c = carousels[id];
  if (!c) return;
  goTo(id, c.index + dir);
}

// Expose for onclick
window.slideCarousel = slideCarousel;

// ===== PROJECT FILTER =====
(function () {
  const btns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card[data-category]');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      cards.forEach(card => {
        const cats = card.dataset.category || '';
        const match = filter === 'all' || cats.includes(filter);
        card.classList.toggle('hidden', !match);
      });
    });
  });
})();

// ===== INIT ALL =====
document.addEventListener('DOMContentLoaded', () => {
  initCarousels();
});
