// Exercicio 01

const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun\n-------exerc 01 e 02\n`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun(mars)); // A
console.log(planetDistanceFromSun(venus)); // B
console.log(planetDistanceFromSun(jupiter)); // C

// Exercicio 02

console.log(planetDistanceFromSun(mars)); // A
setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C

// Exercicio 03

const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  console.log("Returned planet: ", mars, "\n-------exerc03\n");
};

getPlanet(); // imprime Marte depois de 4 segundos

setTimeout(() => console.log(getPlanet()), 4000);

// Exercicio 04 e 05 e 06

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);


const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`);

const transmission = () => Math.floor(Math.random() * 100);

// definição da função sendMarsTemperature...
const sendMarsTemperature = (callbacks, handleError) => {
  setTimeout(() => {
    const sucessTransmission = transmission();
    const temperature = getMarsTemperature();

    if (sucessTransmission <= 60) {
      console.log(`Mars temperature is: ${temperature} degree Celsius`);
  
      callbacks(temperature);

      console.log('-------exerc04 e 05\n');
    } else {
      handleError(`Too busy to say that it is ${temperature} degree!`);
      console.log('-------exerc06\n');
    }

  }, messageDelay());
};

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);
