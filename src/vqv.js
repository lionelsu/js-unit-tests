/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo:

  Parâmetros:
  - Uma string;
  - Um número.

  Comportamento:
  vqv(Tunico, 30) // Retorna:
  'Oi, meu nome é Tunico!
  Tenho 30 anos,
  trabalho na Trybe e mando muito em programação!
  #VQV!'

  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.
*/

const vqv = (name, age) => {
  // if para  inverter a verificação dos parâmetros que não forem recebidos, o problema aqui é que sem a atribuição !name... o valor seria declarado como falso e o bloco if não seria executado, por isso invertemos ele para que seja verdadeiro caso não tenha parâmetros
  if (!name || !age) {
    return;
  }

  // Separando as variáveis em duas partes pq o lint não deixa executar com mais de 120 caracteres 
  // Uso dos \n para quebrar linha com precisão.
  const firstPart = `Oi, meu nome é ${name}!\nTenho ${age} anos,`;
  const lastPart = 'trabalho na Trybe e mando muito em programação!\n#VQV!';
  const message = `${firstPart}\n${lastPart}`;

  // retorno da string construída
  return message;
};

module.exports = vqv;
