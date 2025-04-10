// Função para somar dois números
const soma = (num1, num2) => num1 + num2;

// Função para subtrair dois números
const subtrai = (num1, num2) => num1 - num2;

// Função para multiplicar dois números
const multiplica = (num1, num2) => num1 * num2;

// Função para dividir dois números
const divide = (num1, num2) => num1 / num2;

// Função para mostrar o resultado das operações
const mostraResultado = (num1, num2) => {
    console.log(`Soma entre ${num1} e ${num2}:`, soma(num1, num2));
    console.log(`Subtração entre ${num1} e ${num2}:`, subtrai(num1, num2));
    console.log(`Multiplicação entre ${num1} e ${num2}:`, multiplica(num1, num2));
    console.log(`Divisão entre ${num1} e ${num2}:`, divide(num1, num2));
};

// Exemplo de uso
mostraResultado(10, 5);
