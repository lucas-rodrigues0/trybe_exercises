const braStates = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

const selectTag = document.getElementById('input-state');

for (let index = 0; index < braStates.length; index += 1) {
  const createOption = document.createElement('option');
  createOption.value = braStates[index];
  createOption.innerHTML = braStates[index];
  selectTag.appendChild(createOption); 
}


function verifyDateFormat() {
  const inputDateValue = document.getElementById('input-date').value;
  let verifiedCondition = true;

  if (inputDateValue.length === 10) {
    let arraySplitDate = inputDateValue.split('/');
    
    if (arraySplitDate.length === 3) {
      for (let index = 0; index < arraySplitDate.length; index += 1) {
        if (arraySplitDate[0] < 0 || arraySplitDate[0] > 31 || arraySplitDate[0] != Number) {
          verifiedCondition = false;
        } else if (arraySplitDate[1] < 0 || arraySplitDate[1] > 12 || arraySplitDate[1] != Number) {
          verifiedCondition = false;
        } else if (arraySplitDate[2] < 1900 || arraySplitDate[2] > 2020 || arraySplitDate[2] != Number) {
          verifiedCondition = false;
        }
      }
    } else {
      verifiedCondition = false;
    }
  }
  return verifiedCondition;
}

const verifyBtn = document.getElementById('verify-btn');
verifyBtn.addEventListener('click' visualizeForm);

function visualizeForm() {
  
  const form = document.getElementById('forms');
    form.preventDefault();

    if (verifyDateFormat()) {
      document.getElementById('form-visualization').innerHTML = form.value;
    }
  
}
