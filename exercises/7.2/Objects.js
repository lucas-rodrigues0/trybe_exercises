const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};


const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.

  let messageDelivery = `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name},\nTelefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`

  return messageDelivery;
}

console.log(customerInfo(order));

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.name = 'Luiz Silva';
  order.payment = 50;
  let orderPizzas = Object.keys(order.order.pizza);
  let orderDrinks = order.order.drinks.coke.type;

  let messageOrder = `Olá, ${order.name}, o total do seu pedido de ${orderPizzas} e ${orderDrinks} é R$ ${order.payment},00`;

  return messageOrder;
}

console.log(orderModifier(order));