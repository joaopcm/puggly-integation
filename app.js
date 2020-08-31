const puggly = require('pluggy-sdk');

const clientId = '',
  clientSecret = '';

const client = new puggly.PluggyClient({
  clientId,
  clientSecret,
});

// Lista todos os connectors (instituicoes bancarias integradas com o Puggly)
// client.fetchConnectors().then(({ results: connectors }) => {
//   connectors.map((connector) => console.log(connector));
// });

// Cria uma conta bancaria de um connector
// client
//   .createItem(7, {
//     agency: 1234,
//     account: '1234567',
//     password: 123456,
//   })
//   .then((item) => {
//     console.log(item);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Lista todas as contas bancarias criadas
// client.fetchItems().then((response) => {
//   console.log(response);
// });

// Lista todas as transacoes de uma conta
// client
//   .fetchTransaction('4fd0d374-2362-426d-bf86-2085c7ab1120')
//   .then((response) => console.log(response))
//   .catch((error) => console.error(error));
