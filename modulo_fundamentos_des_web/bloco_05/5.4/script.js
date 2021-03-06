
let definitions = {
  backgroundColor: '',
  color: '',
  fontSize: '',
  lineHeight: '',
  fontFamily: '',
};

//atualiza o CSS com as definições
const mainDefinitions = document.querySelector('.main-content');
function setDefinitions() {
  mainDefinitions.style.backgroundColor = definitions.backgroundColor;
  mainDefinitions.style.color = definitions.color;
  mainDefinitions.style.fontSize = definitions.fontSize;
  mainDefinitions.style.lineHeight = definitions.lineHeight;
  mainDefinitions.style.fontFamily = definitions.fontFamily;
}

//Atualiza o localStorage
function updateSettings() {
  localStorage.setItem('settings',  JSON.stringify(definitions));
} 

//retorna a definições padrão
function standartDefinition() {
  definitions.backgroundColor = 'white';
  definitions.color = 'black';
  definitions.fontSize = 'medium';
  definitions.lineHeight = 'normal';
  definitions.fontFamily = 'monospace';
  setDefinitions();
  updateSettings();
};

// Verifica se já há um localStorage e resgata as definições, se negativo cria um.
if (localStorage.settings === undefined) {
  standartDefinition();
}
else {
  let settingLocal = localStorage.getItem('settings')
  definitions = JSON.parse(settingLocal);
  setDefinitions();
};
// console.log(definitions);

//Altera as definições do setting e faz o update no localStorage.
const fundoTelaBtn = document.getElementById('background-btn');
fundoTelaBtn.addEventListener('click', function(){
  let bgColor = document.getElementById('backgroundColor').value;
  definitions.backgroundColor = bgColor;
  updateSettings();
  setDefinitions();
});

const corTextoBtn = document.getElementById('color-btn');
corTextoBtn.addEventListener('click', function(){
  let colorText = document.getElementById('color').value;
  definitions.color = colorText;
  updateSettings();
  setDefinitions();
});

const tamanhoBtn = document.getElementById('size-btn');
tamanhoBtn.addEventListener('click', function(){
  let sizeText = document.getElementById('fontSize').value;
  definitions.fontSize = sizeText;
  updateSettings();
  setDefinitions();
});

const espacamentoBtn = document.getElementById('line-btn');
espacamentoBtn.addEventListener('click', function(){
  let lineText = document.getElementById('lineHeight').value;
  definitions.lineHeight = lineText;
  updateSettings();
  setDefinitions();
});

const familyBtn = document.getElementById('family-btn');
familyBtn.addEventListener('click', function(){
  let fontFamily = document.getElementById('fontFamily').value;
  definitions.fontFamily = fontFamily;
  updateSettings();
  setDefinitions();
});

//Limpa localStorage
const clearDefinitions = document.getElementById("clearStorage-btn");
clearDefinitions.addEventListener('click', function() {
  delete localStorage.settings;
});

//Aciona botao para padrão de definições
const stdDefinitions = document.getElementById("std-definition-btn");
stdDefinitions.addEventListener('click', standartDefinition);

