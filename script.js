let filmes = {
  "Animação": [
    {
      titulo: "Procurando Nemo",
      classificacao: "Livre",
      idadeMin: 0,
      sinopse: "Quando Nemo é capturado por um mergulhador, seu pai Marlin parte em uma jornada pelo oceano ao lado de Dory, enfrentando tubarões, água-vivas e perigos para encontrá-lo."
    },
    {
      titulo: "Homem-Aranha: No Aranhaverso",
      classificacao: "10 anos",
      idadeMin: 10,
      sinopse: "Miles Morales descobre outras versões do Homem-Aranha vindas de realidades diferentes, enquanto aprende a dominar seus novos poderes."
    },
    {
      titulo: "Your Name",
      classificacao: "12 anos",
      idadeMin: 12,
      sinopse: "Dois jovens que nunca se viram começam misteriosamente a trocar de corpo. Aos poucos, criam uma ligação profunda que vai além do tempo."
    },
    {
      titulo: "Ataque dos Titãs: O Arco e a Flecha Escarlate",
      classificacao: "14 anos",
      idadeMin: 14,
      sinopse: "Eren Jaeger decide eliminar todos os titãs após testemunhar a morte de sua mãe, iniciando uma guerra desesperada pela sobrevivência da humanidade."
    },
    {
      titulo: "Demon Slayer: Mugen Train",
      classificacao: "16 anos",
      idadeMin: 16,
      sinopse: "Tanjirou e seus amigos embarcam no Trem Infinito para ajudar Rengoku, o pilar da chama, enfrentando Enmu e ilusões mortais."
    }
  ],

  "Comédia": [
    {
      titulo: "Lilo & Stitch",
      classificacao: "Livre",
      idadeMin: 0,
      sinopse: "Lilo adota Stitch acreditando que ele é um cachorro comum, sem saber que ele é um experimento alienígena fugitivo. Juntos, vivem confusões e descobrem o valor da família."
    },
    {
      titulo: "Como Treinar Seu Dragão",
      classificacao: "10 anos",
      idadeMin: 10,
      sinopse: "Soluço é um jovem viking que desafia as tradições de sua aldeia ao fazer amizade com um dragão raro chamado Banguela, iniciando uma jornada de coragem e amizade."
    },
    {
      titulo: "Gente Grande",
      classificacao: "12 anos",
      idadeMin: 12,
      sinopse: "Cinco amigos de infância se reencontram após a morte do treinador e percebem que, mesmo adultos, ainda têm muito o que aprender sobre maturidade."
    },
    {
      titulo: "Superbad: É Hoje",
      classificacao: "14 anos",
      idadeMin: 14,
      sinopse: "Dois adolescentes tentam aproveitar a festa de formatura para impressionar suas paqueras, mas a noite se transforma em uma sequência de situações absurdas."
    },
    {
      titulo: "16 Anos... Ou Quase",
      classificacao: "16 anos",
      idadeMin: 16,
      sinopse: "Arnaud, um advogado bem-sucedido, descobre que está passando por puberdade tardia aos 34 anos e precisa da ajuda do irmão adolescente para lidar com isso."
    }
  ],

  "Suspense": [
    {
      titulo: "Os Fantasmas de Scrooge",
      classificacao: "Livre",
      idadeMin: 0,
      sinopse: "Na noite de Natal, o rabugento Scrooge recebe a visita de três fantasmas que o fazem enfrentar seu passado, presente e futuro para mudar sua vida."
    },
    {
      titulo: "Coraline",
      classificacao: "10 anos",
      idadeMin: 10,
      sinopse: "Coraline encontra uma porta secreta para um mundo paralelo aparentemente perfeito, mas logo descobre que algo terrível se esconde por trás da ilusão."
    },
    {
      titulo: "A Família Addams",
      classificacao: "12 anos",
      idadeMin: 12,
      sinopse: "Um impostor tenta se passar pelo desaparecido Fester para roubar a fortuna dos Addams, mas a convivência com a família muda completamente seus planos."
    },
    {
      titulo: "A Fera",
      classificacao: "14 anos",
      idadeMin: 14,
      sinopse: "Em uma reserva africana, um pai e suas filhas são perseguidos por um leão que se tornou hostil após sobreviver a caçadores ilegais."
    },
    {
      titulo: "Fuja",
      classificacao: "16 anos",
      idadeMin: 16,
      sinopse: "Chloe começa a desconfiar que sua mãe esconde segredos sombrios sobre sua saúde e percebe que sua vida inteira foi construída sobre mentiras."
    }
  ]
};
};


let idadeUsuario = 0;


function inserirNome() {
  let nomeUsuario = prompt("Qual o seu nome?");
  let elemento = document.querySelector("#nome-usuario");
  elemento.textContent = `Olá, ${nomeUsuario}! Espero te ajudar a escolher um filme!`;
}


function validarIdade() {
  const input = document.getElementById('idade');
  idadeUsuario = parseInt(input.value);
  if (!isNaN(idadeUsuario) && idadeUsuario >= 0) {
    document.getElementById('menu-generos').classList.remove('oculto');
  } else {
    alert('Por favor, digite uma idade válida.');
  }
}


function mostrarFilmes(genero) {
  const container = document.getElementById('conteudo-filmes');
  container.innerHTML = '';


  filmes[genero].forEach(filme => {
    if (verificarClassificacao(filme.classificacao)) {
      const div = document.createElement('div');
      div.classList.add('filme');


      div.innerHTML = `
  	<h2>${filme.nome}</h2>
 	 <img src="${filme.imagem}" alt="${filme.nome}" />
  	<p><strong>Classificação:</strong> ${filme.classificacao} anos</p>
  	<p><strong>Ano:</strong> ${filme.ano}</p>
  	<p><strong>Duração:</strong> ${filme.duracao}</p>
  	<p><strong>Sinopse:</strong> ${filme.sinopse}</p>


  	<iframe 
    		src="https://www.youtube.com/embed/${filme.trailer}"
   		 allowfullscreen>
  	</iframe>
`;


      container.appendChild(div);
    }
  });
}


function verificarClassificacao(classificacao) {
  if (classificacao === 'Livre') return true;
  return idadeUsuario >= parseInt(classificacao);
}


inserirNome();
