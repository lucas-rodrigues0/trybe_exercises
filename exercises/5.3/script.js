function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.


function createDaysOfMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const monthDaysList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const daysMonth = dezDaysList[index];
    const dayMonthList = document.createElement('li');
    
    if (daysMonth == 24 || daysMonth == 31) {
      dayMonthList.className = "day holiday";
    }
    else if (daysMonth == 4 || daysMonth == 11 || daysMonth == 18) {
      dayMonthList.className = "day friday";
    }
    else if (daysMonth == 25) {
      dayMonthList.className = "day friday holiday";
    }
    else {
      dayMonthList.className = "day";
    }

    dayMonthList.innerHTML = daysMonth;

    monthDaysList.appendChild(dayMonthList);
  };

};

createDaysOfMonth();

function createButtonHoliday(str) {
  let colocaButao = document.querySelector('.buttons-container');
  let criaButao = document.createElement('button');
  criaButao.id = "btn-holiday";
  criaButao.innerHTML = str;
  colocaButao.appendChild(criaButao);
};

createButtonHoliday('Feriados');

let butaoFeriados = document.querySelector('#btn-holiday');
let diasFeriados = document.querySelectorAll('.holiday');
  

function alteraCorFeriado() {
  
    for (let i = 0; i < diasFeriados.length; i +=1) {
      let day = diasFeriados[i];
      day.style.backgroundColor = "red";
    }
}

butaoFeriados.addEventListener("click", alteraCorFeriado);

function retornarButaoFeriado() {
  for (let i = 0; i < diasFeriados.length; i +=1) {
    let day = diasFeriados[i];
    day.style.backgroundColor = 'rgb(238,238,238)';
  }
}

butaoFeriados.addEventListener('dblclick', retornarButaoFeriado);

function createButtonFriday(str) {
  let colocaButao = document.querySelector('.buttons-container');
  let criaButao = document.createElement('button');
  criaButao.id = "btn-friday";
  criaButao.innerHTML = str;
  colocaButao.appendChild(criaButao);
};

createButtonFriday('Sexta-feira');

let butaoSexta = document.querySelector('#btn-friday');
let diasSexta = document.querySelectorAll('.friday');

function alteraTextoButao() {
  for (let i = 0; i < diasSexta.length; i +=1) {
    let day = diasSexta[i];
    day.innerHTML = "SEXTA";
  }
}

butaoSexta.addEventListener('click', alteraTextoButao);

// function retornarButaoSexta() {
//   for (let i = 0; i < diasSexta.length; i +=1) {
//     let day = diasSexta[i];
//     day.innerHTML = none;
//   }
// }

// butaoSexta.addEventListener('dblclick', retornarButaoSexta);