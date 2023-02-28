/*
  A função createStudent recebe como parâmetro um nome, e retorna um objeto contendo duas chaves:

    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

  Implemente a função de forma que ela atenda aos testes propostos.

  Parâmetros:
    - Uma string;
  Comportamento:
    const estudante = createStudent('Leandrão, o Lobo Solitário')

    estudante.name // Retorna: 'Leandrão, o Lobo Solitário'
    estudante.feedback() // Retorna: 'Eita pessoa boa!'
*/

// como esta função não tem nada dentro, apenas um retorno, o seu return é implicito, não precisando declarar retorno, é como se o retorno já existisse invisivelmente.
const createStudent = (name) => ({
  // uma arrow function que recebe um nome como parametro e retorna duas chaves, name contendo o name e
    name,
    // a chave feedback contendo uma função anonima que retorna uma string com uma frase besta
    feedback: () => 'Eita pessoa boa!',
});

module.exports = createStudent;
