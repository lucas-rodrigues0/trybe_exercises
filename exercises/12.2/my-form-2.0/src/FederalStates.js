import React from 'react';

const UF =  ['(AC)-Acre', '(AL)-Alagoas', '(AP)-Amapá', '(AM)-Amazonas', '(BA)-Bahia', '(CE)-Ceará', '(DF)-Distrito Federal', '(ES)-Espírito Santo', '(GO)-Goiás', '(MA)-Maranhão', '(MT)-Mato Grosso', '(MS)-Mato Grosso do Sul', '(MG)-Minas Gerais', '(PA)-Pará', '(PB)-Paraíba', '(PR)-Paraná', '(PE)-Pernambuco', '(PI)-Piauí', '(RJ)-Rio de Janeiro', '(RN)-Rio Grande do Norte', '(RS)-Rio Grande do Sul', '(RO)-Rondônia', '(RR)-Roraima', '(SC)-Santa Catarina', '(SP)-São Paulo', '(SE)-Sergipe', '(TO)-Tocantins'];

class FederalStates extends React.Component {
  render() {
    return (
      <div>
        <label>UF:</label>
        <select 
          name="federalstate"
          id="federalstate"
          onChange={this.props.handleInputChange}
          required
        >
          {UF.map(option => {
            return <option key={option} value={option}>{option}</option>;
          })}          
        </select>
      </div>
    );
  }
}

export default FederalStates;
