// Array de objetos representando os alunos
const alunos = [
    { nome: 'João', nota: 7 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Pedro', nota: 8 },
    { nome: 'Ana', nota: 4 },
    { nome: 'José', nota: 6 },
];

// Função para validar se um objeto de aluno tem uma estrutura correta
function validarAluno(aluno) {
    return aluno && typeof aluno.nome === 'string' && typeof aluno.nota === 'number';
}

// Função para filtrar os alunos com nota maior ou igual a 6
function alunosAprovados(arrayDeAlunos) {
    return arrayDeAlunos
        .filter(aluno => validarAluno(aluno) && aluno.nota >= 6)
        .map(({ nome, nota }) => ({ nome, nota })); // Uso de destructuring para tornar mais claro
}

// Função para formatar a saída dos alunos
function formatarAlunos(alunos) {
    return alunos.map(aluno => `Nome: ${aluno.nome}, Nota: ${aluno.nota}`).join('\n');
}

// Chamada da função para obter os alunos aprovados
const alunosAprovadosArray = alunosAprovados(alunos);

// Imprimindo os alunos aprovados formatados
console.log('Alunos aprovados:');
console.log(formatarAlunos(alunosAprovadosArray));