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
  colocaBotao.appendChild(criaBotao);
};

createButton("Feriados", "btn-holiday");

//Exercicio 03
// lógica inversa do botao com entendimento pelo "plantão triad of Power"
function alteraCorFeriado() {
  
  const botaoFeriados = document.querySelector('#btn-holiday');
  const diasFeriados = document.querySelectorAll('.holiday');
  const listaDias = document.querySelector(".days-container");
  
  botaoFeriados.addEventListener("click", alteraCor);
  function alteraCor() {
    for (let i = 0; i < diasFeriados.length; i +=1) {
      if (diasFeriados[i].style.backgroundColor === listaDias.style.backgroundColor) {
        diasFeriados[i].style.backgroundColor = "red";
      }
      else {
        diasFeriados[i].style.backgroundColor = "";
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
  const botaoSexta = document.querySelector('#btn-friday');
  const diasSexta = document.querySelectorAll('.friday');

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

//Exercicio 06
// com entendimento pelo "plantão triad of Power"
const days = document.querySelector("#days");

function zoomDia() {
  days.addEventListener("mouseover", function (event) {
    event.target.style.fontSize = "28px";
    event.target.style.fontWeight = "bold";
  });
}
zoomDia();

function zoomOutDia() {
  const days = document.querySelector("#days");

  days.addEventListener("mouseout", function(event) {
    event.target.style.fontSize = "20px";
    event.target.style.fontWeight = "normal";
  });
}
zoomOutDia();

//Exercicio 07

const adicionaDiv = document.querySelector(".my-tasks");

function addTarefa(str) {
  const criaSpan = document.createElement("span");
  criaSpan.innerHTML = str;
  adicionaDiv.appendChild(criaSpan);
}

addTarefa("cozinhar");

//Exercicio 08
function addLegenda(str) {
  const criaDiv = document.createElement("div");
  criaDiv.className = "task";
  criaDiv.style.backgroundColor = str;

  adicionaDiv.appendChild(criaDiv);
}

addLegenda("orange");

//Exercicio 09
// com entendimento pelo "plantão triad of Power"
function selecionaTarefa() {
  const taskDiv = document.querySelector(".task");

  taskDiv.addEventListener("click", function(event) {
    const selectDiv = document.querySelector(".task.selected");
    if (selectDiv === null) {
      event.target.className = "task selected";
    }
    else {
      event.target.className = "task";
    }
  });
}

selecionaTarefa();

//Exercicio 10
// com entendimento pelo "plantão triad of Power"
function tarefaDia() {
  days.addEventListener("click", function(event) {
    const selectDiv = document.querySelector(".selected");
    if (selectDiv != null) {
       if (event.target.style.color === selectDiv.style.backgroundColor) {
        event.target.style.color = "rgb(119,119,119)";
      }
      else {
        event.target.style.color = selectDiv.style.backgroundColor;
      }
    }
  });
}

tarefaDia();

//Exercicio Bonus

function adicionarCompromisso() {
  const addCompromissoList = document.querySelector('.task-list');
  const botaoAdicionar = document.getElementById('btn-add');
  const addTextoCompromisso = document.getElementById('task-input');

  addTextoCompromisso.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      criaCompromisso();
    }
  });
  
  botaoAdicionar.addEventListener('click', criaCompromisso);

  function criaCompromisso() {
    let criaListaCompromisso = document.createElement('li');

    if (addTextoCompromisso.value == '') {
      alert('Compromisso indefinido!');
    }
    else {
       criaListaCompromisso.innerText = addTextoCompromisso.value;
      addCompromissoList.appendChild(criaListaCompromisso);
    }
  }
}

adicionarCompromisso();
