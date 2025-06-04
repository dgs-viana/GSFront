// Indica a seção ativa no menu
const links = document.querySelectorAll('.menu a');

window.addEventListener('scroll', () => {
  let current = '';
  document.querySelectorAll('section').forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (scrollY >= sectionTop) current = section.getAttribute('id');
  });

  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
