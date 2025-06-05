const imagens = [
  "img/primeira-imagem.jpg",
  "img/segunda-imagem.jpg",
  "img/terceira-imagem.jpg"
];


let index = 0;
const carousel = document.getElementById("carousel-img");


function trocarImagem() {
  index = (index + 1) % imagens.length;
  carousel.src = imagens[index];
}


setInterval(trocarImagem, 5000);


const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");


menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});



