import React, { Component } from 'react';
import { connect } from 'react-redux';
import addPersonalInfo from '../actions/inputPersonalAction';

const UF = [ '(AC)-Acre', '(AL)-Alagoas', '(AP)-Amapá', '(AM)-Amazonas', '(BA)-Bahia', '(CE)-Ceará', '(DF)-Distrito Federal', '(ES)-Espírito Santo', '(GO)-Goiás', '(MA)-Maranhão', '(MT)-Mato Grosso', '(MS)-Mato Grosso do Sul', '(MG)-Minas Gerais', '(PA)-Pará', '(PB)-Paraíba', '(PR)-Paraná', '(PE)-Pernambuco', '(PI)-Piauí', '(RJ)-Rio de Janeiro', '(RN)-Rio Grande do Norte', '(RS)-Rio Grande do Sul', '(RO)-Rondônia', '(RR)-Roraima', '(SC)-Santa Catarina', '(SP)-São Paulo', '(SE)-Sergipe', '(TO)-Tocantins' ];

class InputCombobox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }
  }

  componentDidUpdate(prevProps) {
    const { personalInfo, id } = this.props;
    if (prevProps.personalInfo !== personalInfo) {
      this.handleValue(id);
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    const { addInfo } = this.props;
    addInfo(name, value);
  }

  handleValue = (id) => {
    const { personalInfo } = this.props;
    Object.keys(personalInfo).forEach(key => {
      if (key === id) {
        this.setState({
          value: personalInfo[ key ],
        });
      }
    })
  }

  render() {
    const { children, id } = this.props;
    const { value } = this.state;

    return (
      <label className="label-container">
        { children }
        <select
          name={ id }
          value={ value }
          onChange={ (event) => this.handleChange(event) }
          required
          className="select-container"
        >
          <option key="choose" value="">Escolha aqui</option>
          { UF.map(option => {
            return <option key={ option } value={ option }>{ option }</option>;
          }) }
        </select>
      </label>
    )
  }
}

const mapStateToProps = (state) => ({
  personalInfo: state.form.personalInfo
})

const mapDispatchToProps = (dispatch) => ({
  addInfo: (name, value) => dispatch(addPersonalInfo(name, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(InputCombobox);
