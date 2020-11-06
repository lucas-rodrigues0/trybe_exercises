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

//Exercicio 01
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

//Exercicio 02
function createButton(str, id) {
  const colocaBotao = document.querySelector('.buttons-container');
  const criaBotao = document.createElement('button');
  criaBotao.id = id;
  criaBotao.innerHTML = str;
  colocaBotao.appendChild(criaButao);
};

createButton("Feriados", "btn-holiday");

//Exercicio 03
// lógica inversa do botao com entendimento pelo "plantão triad of Power"
function alteraCorFeriado() {
  
  const botaoFeriados = document.querySelector('#btn-holiday');
  const diasFeriados = document.querySelectorAll('.holiday');
  
  botaoFeriados.addEventListener("click", alteraCor);
  function alteraCor() {
    for (let i = 0; i < diasFeriados.length; i +=1) {
      if (diasFeriados[i].style.backgroundColor == "white") {
        diasFeriados[i].style.backgroundColor = "red";
      }
      else {
        diasFeriados[i].style.backgroundColor = "white";
      }
    }
  }
}
alteraCorFeriado();

//Exercicio 04
// refatoraçao com entendimento pelo "plantão triad of Power"
createButton("Sexta-feira", "btn-friday");

//Exercicio 05
// lógica inversa do botao com entendimento pelo "plantão triad of Power"
function alteraTextoButao() {
  let botaoSexta = document.querySelector('#btn-friday');
  let diasSexta = document.querySelectorAll('.friday');

  botaoSexta.addEventListener('click', alteraTexto);
  function alteraTexto() {
    for (let i = 0; i < diasSexta.length; i +=1) {
    let day = diasSexta[i];
    if (day.innerText === "SEXTA!!!") {
      day.innerText = Number(day.previousElementSibling.innerText) + 1;
    }
    else {
      day.innerText = "SEXTA!!!";
    }
    
  }
  }
  
}
alteraTextoButao();



// function retornarButaoSexta() {
//   for (let i = 0; i < diasSexta.length; i +=1) {
//     let day = diasSexta[i];
//     day.innerHTML = none;
//   }
// }

// butaoSexta.addEventListener('dblclick', retornarButaoSexta);

// let dias = document.querySelectorAll(".day");

// function zoom()


function addTarefa(str) {
  let criaSpan = document.createElement("span");
  let adicionaSpan = document.querySelector(".my-tasks");

  criaSpan.innerHTML = str;
  adicionaSpan.appendChild(criaSpan);
}

addTarefa("cozinhar");

function addLegenda(str) {
  let criaDiv = document.createElement("div");
  let adicionaDiv = document.querySelector(".my-tasks");

  criaDiv.className = "task";
  criaDiv.style.backgroundColor = str;
  adicionaDiv.appendChild(criaDiv);
}

addLegenda("orange");

let selectDiv = document.querySelector(".task");

function selecionaTarefa() {
  selectDiv.className = "task selected";
}

selectDiv.addEventListener("click", selecionaTarefa);

let unselectDiv = document.querySelector(".task selected");

function unselecionaTarefa() {
  unselectDiv.className = "task";
}

unselectDiv.addEventListener("click", unselecionaTarefa);


