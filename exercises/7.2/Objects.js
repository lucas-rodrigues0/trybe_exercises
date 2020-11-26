// Parte I

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

// Parte II

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addKeys = (object, key, value) => object[key] = value;

addKeys(lesson2, 'turno', 'manhã');

console.log(lesson2);

const showKeys = object => Object.keys(object);

console.log(showKeys(lesson1));

const objectLength = object => Object.entries(object).length;

console.log(objectLength(lesson3));

const showValues = object => Object.values(object);

console.log(showValues(lesson2));

const allLessons = {
  lesson1: Object.assign({}, lesson1),
  lesson2: Object.assign({}, lesson2),
  lesson3: Object.assign({}, lesson3)
};

console.log(allLessons);

const countStudent = object => {
  let count = 0;
  let objectsInside = Object.values(object);
  for (let i = 0; i < objectsInside.length; i += 1) {
    count += objectsInside[i].numeroEstudantes;
  }
  return count;
}

console.log(countStudent(allLessons));

const valueByNumber = (object, position) => {
  let value = Object.values(object);
  return value[position];
}

console.log(valueByNumber(lesson1, 0));

const verifyPair = (object, key, value) => {
  let obj = Object.entries(object);
  let output = false;
  for (let i in obj) {
    if (obj[i][0] == key && obj[i][1] == value) {
      output = true;
    }
  }
  return output;
};

console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

const countStudentByKey = (object, key) => {
  let count = 0;
  let objectsInside = Object.values(object);
  for (let i = 0; i < objectsInside.length; i += 1) {
    if (objectsInside[i].materia === key) {
      count += objectsInside[i].numeroEstudantes;
    }
  }
  return count;
};

console.log(countStudentByKey(allLessons, 'Matemática'));

const createReport = (object, key) => {
  let objectsInside = Object.values(object);
  let arrAulas = [];
  let output = {
    professor: key,
    aulas: arrAulas,
    estudantes: 0
  };

  for (let i = 0; i < objectsInside.length; i += 1) {
    if (objectsInside[i].professor === key) {
      arrAulas.push(objectsInside[i].materia);
      output.estudantes += objectsInside[i].numeroEstudantes;
    }
  }
  return output;
};

console.log(createReport(allLessons, 'Maria Clara'));
