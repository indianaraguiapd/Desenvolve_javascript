// Array de objetos para armazenar os livros no estoque
let estoque = [];

// Função para adicionar um livro ao estoque
function adicionarLivro(titulo, autor, quantidade) {
    // Verifica se o livro já existe no estoque
    let livroExistente = estoque.find(livro => livro.titulo === titulo);
    if (livroExistente) {
        console.log(`O livro \"${titulo}\" já existe no estoque.`);
    } else {
        estoque.push({ titulo, autor, quantidade });
        console.log(`O livro \"${titulo}\" foi adicionado ao estoque.`);
    }
}

// Função para remover um livro do estoque
function removerLivro(titulo) {
    let indice = estoque.findIndex(livro => livro.titulo === titulo);
    if (indice !== -1) {
        estoque.splice(indice, 1);
        console.log(`O livro \"${titulo}\" foi removido do estoque.`);
    } else {
        console.log(`O livro \"${titulo}\" não foi encontrado no estoque.`);
    }
}

// Função para atualizar a quantidade de um livro no estoque
function atualizarQuantidade(titulo, novaQuantidade) {
    let livro = estoque.find(livro => livro.titulo === titulo);
    if (livro) {
        livro.quantidade = novaQuantidade;
        console.log(`A quantidade do livro \"${titulo}\" foi atualizada para ${novaQuantidade}.`);
    } else {
        console.log(`O livro \"${titulo}\" não foi encontrado no estoque.`);
    }
}

// Função para listar todos os livros no estoque
function listarLivros() {
    if (estoque.length === 0) {
        console.log("O estoque está vazio.");
    } else {
        console.log("Livros disponíveis no estoque:");
        estoque.forEach(livro => {
            console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}, Quantidade: ${livro.quantidade}`);
        });
    }
}

// Exemplos de uso
adicionarLivro("O Senhor dos Anéis", "J.R.R. Tolkien", 5);
adicionarLivro("Harry Potter e a Pedra Filosofal", "J.K. Rowling", 3);
adicionarLivro("O Senhor dos Anéis", "J.R.R. Tolkien", 5); // Tenta adicionar duplicado
listarLivros();
atualizarQuantidade("Harry Potter e a Pedra Filosofal", 10);
removerLivro("O Senhor dos Anéis");
listarLivros();
