const braStates = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

const selectTag = document.getElementById('input-state');

for (let index = 0; index < braStates.length; index += 1) {
  const createOption = document.createElement('option');
  createOption.value = braStates[index];
  createOption.innerHTML = braStates[index];
  selectTag.appendChild(createOption); 
}


function verifyDateFormat(value) {
  const inputDateValue = document.getElementById('input-date').value;
  let verifiedCondition = false;
  let countVerification = 0;
  if (inputDateValue.length === 10) {
    let arraySplitDate = inputDateValue.split('/');
    
    if (arraySplitDate.length === 3) {
      
      if (arraySplitDate[0] >= 0 && arraySplitDate[0] <= 31) {
        countVerification += 1;
      }
      if (arraySplitDate[1] >= 0 && arraySplitDate[1] <= 12) {
        countVerification += 1;
      }
      if (arraySplitDate[2] >= 1900 && arraySplitDate[2] <= 2020) {
        countVerification += 1;
      }
      if (countVerification == 3) {
        verifiedCondition = true;
      }

    } else {
      verifiedCondition = false;
    }
  }
  return verifiedCondition;
}

const formVisualization = document.getElementById('form-visualization');

function createresultSpan(input, inputValue) {
  const resultSpan = document.createElement('span');
  resultSpan.innerHTML = input + ' ' + inputValue;
  resultSpan.style.display = 'block';
  formVisualization.appendChild(resultSpan);
}

function removeVisualizationDiv() {
  const visualizationDiv = document.querySelector('#form-visualization');
    while (visualizationDiv.firstChild) {
      visualizationDiv.removeChild(visualizationDiv.lastChild);
    }
}

const verifyBtn = document.getElementById('verify-btn');
verifyBtn.addEventListener('click', visualizeForm);

function visualizeForm(event) {
  removeVisualizationDiv();

  let input1 = 'Nome Completo:';
  let input1Value = document.querySelector('#input-name').value;
  let input2 = 'E-mail:';
  let input2Value = document.querySelector('#input-email').value;
  let input3 = 'CPF:';
  let input3Value = document.querySelector('#input-cpf').value;
  let input4 = 'Endereço Completo:';
  let input4Value = document.querySelector('#input-address').value;
  let input5 = 'Cidade:';
  let input5Value = document.querySelector('#input-city').value;
  let input6 = 'Estado:';
  let input6Value = document.querySelector('#input-state').value;
  let input7 = 'Tipo de Moradia:';
  let input7Value = '';
  if (document.getElementsByName('house')[0].checked) {
    input7Value = document.getElementsByName('house')[0].value;
  } else if (document.getElementsByName('house')[1].checked) {
    input7Value = document.getElementsByName('house')[1].value;
  }
  let input8 = 'Resumo do currículo:';
  let input8Value = document.querySelector('#input-resume').value;
  let input9 = 'Cargo';
  let input9Value = document.querySelector('#input-role').value;
  let input10 = 'Descrição do cargo:';
  let input10Value = document.querySelector('#input-description').value;
  let input11 = 'Data de início:';
  let input11Value = '';
  if (verifyDateFormat(document.querySelector('#input-date').value)) {
    input11Value = document.querySelector('#input-date').value;
  }
  

  if (input1Value != '') {
    createresultSpan(input1, input1Value);
  } else {
    event.preventDefault();
    alert('Por favor inserir o Nome Completo');
    removeVisualizationDiv();
  }
  if (input2Value != '') {
    createresultSpan(input2, input2Value);
  } else {
    event.preventDefault();
    alert('Por favor inserir o E-mail');
    removeVisualizationDiv();
  }
  if (input3Value != '') {
    createresultSpan(input3, input3Value);
  } else {
    event.preventDefault();
    alert('Por favor inserir o CPF');
    removeVisualizationDiv();
  }
  if (input4Value != '') {
    createresultSpan(input4, input4Value);
  } else {
    event.preventDefault();
    alert('Por favor inserir o Endereço Completo');
    removeVisualizationDiv();
  }
  if (input5Value != '') {
    createresultSpan(input5, input5Value);
  } else {
    event.preventDefault();
    alert('Por favor inserir o Cidade');
    removeVisualizationDiv();
  }
  if (input6Value != '') {
    createresultSpan(input6, input6Value);
  } else {
    event.preventDefault();
    alert('Por favor inserir o Estado');
    removeVisualizationDiv();
  }
  if (input7Value != '') {
    createresultSpan(input7, input7Value);
  } else {
    event.preventDefault();
    alert('Tipo de moradia não selecionado');
    removeVisualizationDiv();
  }
  if (input8Value != '') {
    createresultSpan(input8, input8Value);
  } else {
    event.preventDefault();
    alert('Por favor inserir o Resumo do currículo');
    removeVisualizationDiv();
  }
  if (input9Value != '') {
    createresultSpan(input9, input9Value);
  } else {
    event.preventDefault();
    alert('Por favor inserir o Cargo');
    removeVisualizationDiv();
  }
  if (input10Value != '') {
    createresultSpan(input10, input10Value);
  } else {
    event.preventDefault();
    alert('Por favor inserir o Descrição do cargo');
    removeVisualizationDiv();
  }
  if (input11Value != '') {
    createresultSpan(input11, input11Value);
  } else {
    event.preventDefault();
    alert('Por favor inserir a data com o padrão dd/mm/aaaa');
    removeVisualizationDiv();
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
eraseForm();
