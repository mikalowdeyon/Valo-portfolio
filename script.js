const navLinks = document.querySelectorAll('nav ul li a');


  function openLMS() {
    // This "pretends" to open LMS but goes to Valorant project
    window.location.href = "https://mikalowdeyon.github.io/Profile/";
  }

  function openRealProject() {
    // Replace this with your real project link if different
    window.location.href = "https://drive.google.com/drive/folders/1GvzcpGlt8PzJiMA1xhfeM3P_qdjIfJJF?usp=sharing";
  }
    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if(targetSection){
          window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });

    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      alert('Thank you for contacting us!');
      contactForm.reset();
    });

    // Animate hero text on load
    window.addEventListener('load', () => {
      const heroText = document.querySelector('.hero-content h1');
      heroText.style.opacity = 0;
      heroText.style.transform = 'translateY(20px)';
      setTimeout(() => {
        heroText.style.transition = 'all 1s ease';
        heroText.style.opacity = 1;
        heroText.style.transform = 'translateY(0)';
      }, 200);
    });

    // Flip card click toggle (for mobile)
    const flipCards = document.querySelectorAll('.flip-card');
    flipCards.forEach(card => {
      card.addEventListener('click', () => {
        card.querySelector('.flip-inner').classList.toggle('flipped');
      });
    });

    // Add hover effect toggle class for flip-inner
    const style = document.createElement('style');
    style.innerHTML = `
      .flip-inner.flipped {
        transform: rotateY(180deg);
      }
    `;
    document.head.appendChild(style);

    // Highlight nav on scroll
    window.addEventListener('scroll', () => {
      const sections = document.querySelectorAll('section[id]');
      let scrollPos = window.scrollY + 100;
      sections.forEach(sec => {
        if(scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight){
          navLinks.forEach(link => link.classList.remove('active'));
          const activeLink = document.querySelector('nav ul li a[href="#' + sec.id + '"]');
          if(activeLink) activeLink.classList.add('active');
        }
      });
    });
