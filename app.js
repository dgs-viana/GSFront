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


document.getElementById("form").addEventListener("submit", function(e) {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();

  if (nome === "" || email === "") {
    e.preventDefault();
    alert("Preencha todos os campos obrigatórios.");
  }
});
document.getElementById("menu-toggle").addEventListener("click", function() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
});
function mudarTema(tema) {
  if (tema === "claro") {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
  } else if (tema === "escuro") {
    document.body.style.backgroundColor = "#111";
    document.body.style.color = "#eee";
  } else if (tema === "colorido") {
    document.body.style.backgroundColor = "#ffeb3b";
    document.body.style.color = "#333";
  }
}

const quiz = document.getElementById("quiz-container");

perguntas.forEach((p, i) => {
  const div = document.createElement("div");
  div.innerHTML = <p>${p.pergunta}</p> + p.opcoes.map((op, j) => 
    <label><input type="radio" name="q${i}" value="${j}">${op}</label>
  ).join("<br>");
  quiz.appendChild(div);
});

function verificarRespostas() {
  let acertos = 0;
  perguntas.forEach((p, i) => {
    const selecionada = document.querySelector(input[name="q${i}"]:checked);
    if (selecionada && parseInt(selecionada.value) === p.correta) {
      acertos++;
    }
  });
  document.getElementById("resultado").innerText = Você acertou ${acertos} de ${perguntas.length}.;
}