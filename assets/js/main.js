module.exports = {
    theme: {
      extend: {
        keyframes: {
          typing: {
            'from': { width: '0%' },
            'to': { width: '100%' },
          },
          blink: {
            '50%': { borderColor: 'transparent' },
          },
        },
        animation: {
          typing: 'typing 3s steps(20, end) forwards',
          blink: 'blink 0.7s step-end infinite',
        },
      },
    },
    plugins: [],
  };

  
  document.querySelectorAll('a[href^="#event"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const offset = 100;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
  document.querySelectorAll('a[href^="#gallery"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const offset = 100; 
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  document.querySelectorAll('a[href^="index.html#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetUrl = this.getAttribute('href');
      window.location.href = targetUrl;
    });
  });