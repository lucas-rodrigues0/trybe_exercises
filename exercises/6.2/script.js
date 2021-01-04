
function createStates() {
  const braStates = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
  
  const selectTag = document.getElementById('input-state');
  
  for (let index = 0; index < braStates.length; index += 1) {
    const createOption = document.createElement('option');
    createOption.value = braStates[index];
    createOption.innerHTML = braStates[index];
    selectTag.appendChild(createOption); 
  }
}

function removeVisualizationDiv() {
  const visualizationDiv = document.querySelector('#form-visualization');
    while (visualizationDiv.firstChild) {
      visualizationDiv.removeChild(visualizationDiv.lastChild);
    }
}

function eraseForm() {
  const eraseBtn = document.getElementById('erase-btn');

  eraseBtn.addEventListener('click', function () {
    document.querySelector('#input-name').value = '';
    document.querySelector('#input-email').value = '';
    document.querySelector('#input-cpf').value = '';
    document.querySelector('#input-address').value = '';
    document.querySelector('#input-city').value = '';
    document.querySelector('#input-state').value = '';
  
    document.querySelector('#input-resume').value = '';
    document.querySelector('#input-role').value = '';
    document.querySelector('#input-description').value = '';
    document.querySelector('#input-date').value = '';

    removeVisualizationDiv();
  });
}

function showForm() {
  removeVisualizationDiv();

  const formVisualization = document.getElementById('form-visualization');
  const inputValues = document.getElementsByTagName('input');

  for (let i = 0; i < inputValues.length; i += 1) {
    const resultSpan = document.createElement('span');
    resultSpan.innerHTML = inputValues[i].value;
    resultSpan.style.display = 'block';
    formVisualization.appendChild(resultSpan);
  }
}


window.onload = function () {
  createStates();

  document.getElementById('input-date').DatePickerX.init({
    format: 'dd/mm/yyyy',
  });

  new JustValidate('.js-form', {
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      cpf: {
        required: true,
      },
      address: {
        required: true,
      },
      city: {
        required: true,
      },
      state: {
        required: true,
      },
      radio: {
        required: true,
      },
      resume: {
        required: true,
      },
      role: {
        required: true,
      },
      jobDescription: {
        required: true,
      },
      date: {
        required: true,
      },
    },
    messages: {
      name: 'Digite seu nome',
      email: 'Insira um email válido.',
      cpf: 'Insira seu CPF.',
      address: 'Insira seu endereço.',
      city: 'Insira sua cidade.',
      state: 'Selecione um estado.',
      radio: 'Selecione um tipo.',
      resume: 'Escreva um resumo do currículo.',
      role: 'Insira o cargo.',
      jobDescription: 'Insira uma descrição do cargo.',
      date: 'Insira a data de início.',
    },

    colorWrong: 'red',

  });

  eraseForm();

  const submitBtn = document.getElementById('verify-btn');
  submitBtn.addEventListener('click', showForm);

};

