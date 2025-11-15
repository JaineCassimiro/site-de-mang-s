// Lista de dados dos mangás
const listaMangas = [
    { 
        titulo: "Ataque dos Titãs", 
        capitulos: 139, 
        genero: "Ação, Fantasia", 
        imagem: "https://via.placeholder.com/200x300?text=AOT" 
    },
    { 
        titulo: "Jujutsu Kaisen", 
        capitulos: 250, 
        genero: "Sobrenatural, Luta", 
        imagem: "https://via.placeholder.com/200x300?text=JJK" 
    },
    { 
        titulo: "Spy x Family", 
        capitulos: 95, 
        genero: "Comédia, Espionagem", 
        imagem: "https://via.placeholder.com/200x300?text=SxF" 
    },
    { 
        titulo: "Chainsaw Man", 
        capitulos: 160, 
        genero: "Terror, Ação", 
        imagem: "https://via.placeholder.com/200x300?text=CSM" 
    },
    // Adicione mais mangás aqui...
];

const container = document.getElementById('mangas-container');

/**
 * Função que cria e retorna o elemento HTML para um card de mangá.
 * @param {Object} manga - O objeto contendo os dados do mangá.
 */
function criarCardManga(manga) {
    const card = document.createElement('div');
    card.classList.add('manga-card');

    card.innerHTML = `
        <img src="${manga.imagem}" alt="Capa de ${manga.titulo}">
        <div class="manga-info">
            <h3>${manga.titulo}</h3>
            <p>Capítulos: ${manga.capitulos}</p>
            <p>Gênero: ${manga.genero}</p>
        </div>
    `;

    // Adiciona um evento de clique básico (exemplo de interatividade)
    card.addEventListener('click', () => {
        console.log(`Você clicou no mangá: ${manga.titulo}`);
        alert(`Abrindo página de ${manga.titulo}...`);
        // Aqui você adicionaria a lógica para navegar para a página do mangá
    });

    return card;
}

/**
 * Itera sobre a lista de mangás e os insere no container.
 */
function carregarMangas() {
    listaMangas.forEach(manga => {
        const cardElement = criarCardManga(manga);
        container.appendChild(cardElement);
    });
}

// Executa a função assim que o script é carregado
carregarMangas();