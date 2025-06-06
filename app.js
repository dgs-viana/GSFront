document.addEventListener("DOMContentLoaded", () => {
  const imagens = [
    "img/segunda-imagem.jpg",
    "img/primeira-imagem.jpg",
    "img/terceira-imagem.jpg"
  ];

  let index = 0;
  const carousel = document.getElementById("carousel-img");

  function trocarImagem() {
    index = (index + 1) % imagens.length;
    carousel.src = imagens[index];
  }

  

  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  document.querySelectorAll('.color-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const newColor = btn.getAttribute('data-color');
      document.documentElement.style.setProperty('--cor-fundo1', newColor);
      document.documentElement.style.setProperty('--cor-div-tecnologias', newColor);
      document.querySelector('nav').style.backgroundColor = newColor;
      document.querySelector('footer').style.backgroundColor = newColor;
    });
  });
});
