/* eslint-disable max-len */

/*
  A função createMenu(), retornará um novo objeto. Este novo objeto contém algumas chaves e ao acessar cada uma delas temos os seguintes retornos:

  - Uma chave `fetchMenu` retornando o menu, que nada mais é que o objeto passado como parâmetro para createMenu()

    Exemplo:
    const meuRestaurante = createMenu({
      food: {'coxinha': 3.90, 'sanduiche', 9.90},
      drinks: {'agua': 3.90, 'cerveja': 6.90}
    });

    meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` armazenando um array de strings. Cada string é a chave de um pedido.
    Exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` armazenando uma função. Essa função recebe uma string como parâmetro e essa string deve ser adicionada à lista armazenada em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função. Essa função faz a soma do preço de todos os pedidos, retornando essa soma de preços com acréscimo de 10%.

  Comportamento:
    const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} })

    meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

    meuRestaurante.order('coxinha') // Retorno: undefined

    meuRestaurante.consumption // Retorno: ['coxinha']

    meuRestaurante.pay() // Retorno: 4.29

  IMPORTANTE: FAÇA OS TESTES E IMPLEMENTAÇÕES DE ACORDO COM A SEQUÊNCIA INDICADA NO README DO PROJETO!

  BOAS PRÁTICAS TDD: COMECE PELO TESTE 1 DO ARQUIVO `tests/restaurant.spec.js` E VOLTE A ESTE ARQUIVO QUANDO FOR INDICADO!
*/

// Faça os ítens de 1 a 3 no arquivo tests/restaurant.spec.js

// 4: Crie uma função `createMenu()` que, recebendo um objeto como parâmetro, retorna esse objeto no seguinte formato: 
//  { fetchMenu: () => objetoPassadoPorParametro }.
// Tentei separar todas as responsabilidades, talvez não fosse necessário que o fetchMenu fosse separado mas, eu achei estéticamente melhor assim
const fetchMenu = (objectMenu) => objectMenu;

// o método order vai receber também dois parâmetros mas, ele não vai usar a instância do consumption se chamado diretamente, ele precisa da menuFunctions para funcionar
// em resumo ele procura nas chaves do objectMenu usando o método some para que verifique se cada chave passada no parâmetro contem o item que procuramos, se sim, o consumption é alimentado, se não o retorno é Item indisponível
// Lembrando que se trata de uma função arrow function retornando uma função (currying), pode parecer meio confuso, pq é mesmo, mas entenda que depois dos primerios parametros passados, o paramentro dentro da função (string) pode ser usado em outras partes do código, o segredo em si está na chamada, após populado a chamada dentro do objeto menuFunctions irá inferir o parametro (string), pq os paramêtros iniciais do order já foram passados na construção da função menuFunctions
const order = (objectMenu, consumption) => (string) => {
  const menuItems = Object.keys(objectMenu);
  if (menuItems.some((item) => objectMenu[item][string])) {
  consumption.push(string);
  return consumption;
  }
  return 'Item indisponível';
};

// Aqui o uso de um reduce aninhado, o primeiro itera sob os items existentes no consumption e o segundo itera sob os preços existentes nos valores do objectMenu, a notação || 0 é para que se caso o reduce passar por um valor que seja undefined o valor somado seja 0, evitando retornos NaN. Talvez fosse melhor fazer isso com um ternário mas o lint não deixa.
const pay = (objectMenu, consumption) => () => {
  const tax = 1.1;
  const menuValues = Object.values(objectMenu);
  const orderItem = consumption.reduce((acc, item) => {
    const itemPrice = menuValues.reduce((price, category) => price + (category[item] || 0), 0);
    return acc + itemPrice;
  }, 0);
  const totalPrice = orderItem * tax;
  return totalPrice;
};

// Esta função vai desestruturar o objectMenu para espalhar entre as propriedades do retorno, esta função também vai fazer a chamada do array vazio para guardar os itens de consumo.
const menuFunctions = ({ objectMenu }) => {
  const consumption = [];
  return {
    fetchMenu: fetchMenu(objectMenu),
    consumption,
    order: order(objectMenu, consumption),
    pay: pay(objectMenu, consumption),
  };
};

// Por fim, a função responsável por fazer todo o resto do trabalho e chamar todas as outras funções. Usando o spread operator para espalhar suas propriedades no retorno e desestruturando o objectMenu para que cada chamada referencie a um novo objeto.
const createMenu = (objectMenu) => ({
  ...menuFunctions({ objectMenu }),
});

/*
const createMenu = (objectMenu) => {
  const consumption = [];

  return {
    fetchMenu: () => objectMenu,
    consumption,
    order: (string) => {
      const menuItems = Object.keys(objectMenu);
      if (menuItems.some((item) => objectMenu[item][string])) {
        consumption.push(string);
        return consumption;
      }
      return 'Item indisponível';
    },
    pay: () => {
      const tax = 1.1;
      const orderItem = consumption.reduce((acc, item) => {
        const itemPrice = Object.values(objectMenu).reduce((price, category) => price + (category[item] || 0), 0);
        return acc + itemPrice;
      }, 0);
      const totalPrice = orderItem * tax;
      return totalPrice;
    },
  };
};
*/
// Faça o item 5 no arquivo tests/restaurant.spec.js

// 6: Adicione ao objeto retornado por `createMenu()` uma chave de nome `consumption` que, como valor inicial, tem um array vazio.

// Faça o item 7 no arquivo tests/restaurant.spec.js

// 8: Crie uma função, associada à chave 'order', que, ao receber uma string como parâmetro, adiciona essa string ao array da chave 'consumption'.
// - se a string existir nas chaves 'food' ou 'drink', deve ser adicionada ao array consumption
// - senão, deve exibir a mensagem "Item indisponível" e não adicionar nada ao array
// Ex: obj.order('coxinha') --> ['coxinha']
// Ex: obj.order('picanha') --> Exibe "Item indisponível"

// Faça os ítens de 9 a 11 no arquivo tests/restaurant.spec.js

// 12: Adicione ao objeto retornado por `createMenu()` uma chave `pay` armazenando uma função que:
// - percorrerá item a item de `objetoRetornado.consumption`;
// - fará a soma do preço desses itens;
// - retornará o valor somado acrescido de 10%.
// DICA: para isso, você precisará percorrer tanto o objeto da chave `food` quanto o objeto da chave `drink`.

module.exports = createMenu;
