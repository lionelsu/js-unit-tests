const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function')
    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails())).toBe(true)
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails()).toHaveLength(2)
    // Teste se os dois itens dentro do array retornado pela função são objetos.

    /* 
      Acredito que usando a HOF fica menos verboso e mais acertivo
      expect(productDetails().every(item => typeof item === 'object')).toBe(true);
    */
    expect(productDetails()).toContainEqual(expect.any(Object))

    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    const [produto1, produto2] = productDetails('produto1', 'produto2');
    expect(produto1).not.toBe(produto2)
    // Teste se os dois productIds terminam com 123.
    
    // Usando a mesma chamada desestruturada do teste anterior
    expect(produto1.details.productId.includes('123')).toBe(true)
    expect(produto2.details.productId.includes('123')).toBe(true)
  });
});
