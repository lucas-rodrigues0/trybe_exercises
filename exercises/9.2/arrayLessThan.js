const promise = new Promise((resolve, reject) => {
  const randomArray = [];
  while(randomArray.length < 10) {
    let randNumber = Math.floor(Math.random() * 51)
    randomArray.push(randNumber * randNumber);
  };

  const condition = randomArray.reduce((acc, curr) => acc += curr);

  if (condition > 8000) {
    reject(condition);
  } else {
    resolve(condition);
  }
})
.then((number) => { 
  console.log(`Congratulation!!! The condition is under scope. the current value is ${number}.`);
  return number;
})
.then((number) => {
  const output = [number*2, number*3, number*5, number*10];
  console.log(output);
  return output;
})
.then((array) => {
  const output =array.reduce((acc, curr) => acc += curr);
  console.log(`The sum of the numbers is: ${output}.`);
})
.catch(err => console.log(`Condition over 8000 not allowed. current value is ${err}. or: \n"É mais de oito mil! Essa promise deve estar quebrada!"`));
