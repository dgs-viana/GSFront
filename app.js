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



const perguntas = [
  { pergunta: "Qual desses materiais contribui mais para o entupimento de bueiros?", opcoes: ["a)Areia", "b)Folhas secas", " c)Sacolas Plásticas","d)Tinta"], correta: 3 },
  { pergunta: "Qual destas ações ajuda a prevenir enchentes no seu bairro?", opcoes: ["a)Jogar lixo no chão", "b) Lavar a calçada com mangueira", "c)Plantar em áreas permeáveis ","d) Construir sobre rios"], correta: 3 },
  { pergunta: "O que é um “jardim de chuva”?", opcoes: ["a) Um espaço para tomar banho de chuva", "b) Uma planta que suga água da enchente", "c) Área com vegetação que absorve a água ","d) Um tipo de floreira suspensa"], correta: 3 },
  { pergunta: "Qual tecnologia pode prever enchentes com antecedência?", opcoes: ["a) Fogões inteligentes", "b) Relógios analógicos", "c) Inteligência Artificial","d) Termômetros"], correta: 3 },
  { pergunta: "O que os sensores IoT em bueiros monitoram?", opcoes: ["a) O tipo de lixo reciclável", "b) O nível da água e entupimentos ", "c) O cheiro do local","d) A temperatura da rua"], correta: 2 },
  { pergunta: "O que significa “área de risco” em um mapa preventivo?", opcoes: ["a) Onde há muitos restaurantes", "b) Onde pode faltar luz", "c) Onde há alta probabilidade de alagamento ","d) Onde o sinal de celular é fraco"], correta: 3 },
  { pergunta: "Qual é uma atitude correta antes de uma chuva forte?", opcoes: ["a) Esvaziar a geladeira", "b) Ignorar os alertas", "c) Elevar móveis e desligar aparelhos elétricos","d) Trancar portas e janelas sem se informar"], correta: 3 },
  { pergunta: "O que o aplicativo Water Alert permite que o cidadão faça?", opcoes: ["a) Solicitar um ônibus", "b) Reportar lixo em bueiros", "c) Reservar uma quadra de esportes","d) Fazer denúncias criminais"], correta: 2 },
  { pergunta: "Como a educação ajuda a prevenir enchentes?", opcoes: ["a) Incentiva o uso de energia solar", "b) Ensina a lavar calçadas com água reciclada", "c) Conscientiza sobre descarte correto e ações locais","d) Cria jogos sobre trânsito"], correta: 3 }, 
  { pergunta: "Qual dessas é uma consequência comum das enchentes?", opcoes: ["a) Redução da conta de luz", "b) Ganho de produtividade", "c) Danos a casas, saúde pública e mobilidade urbana","d) Melhor sinal de internet"], correta: 3 },
  
];

