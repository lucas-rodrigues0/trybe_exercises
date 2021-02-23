import React, { Component } from 'react';
import { connect } from 'react-redux';
import addPersonalInfo from '../actions/inputPersonalAction';
import addProfessionalInfo from '../actions/inputProfessionalAction';

class InputText extends Component {
  handleChange = ({ target }) => {
    const { name, value } = target;
    const { addPersonalInfo, addProfessionalInfo } = this.props;

    if (name === 'roleDescriptions') {
      addProfessionalInfo(name, value);
    } else {
      addPersonalInfo(name, value);
    }
  }

  handleValue = (id) => {
    const { personalInfo, professionalInfo } = this.props;
    if (id === 'roleDescriptions') {
      return professionalInfo[ id ];
    }

    Object.keys(personalInfo).forEach(key => {
      if (key === id) {
        return personalInfo[key];
      }
    })
  }

  render() {
    const { children, id, maxLength } = this.props;

    return (
      <label>
        { children }
        <input
          name={ id }
          type="text"
          maxLength={ maxLength }
          value={ this.handleValue(id) }
          onChange={ (event) => this.handleChange(event) }
        />
      </label>
    )
  }
}

const mapStateToProps = (state) => ({
  personalInfo: state.form.personalInfo,
  professionalInfo: state.form.professionalInfo,
})

const mapDispatchToProps = (dispatch) => ({
  addPersonalInfo: (name, value) => dispatch(addPersonalInfo(name, value)),
  addProfessionalInfo: (name, value) => dispatch(addProfessionalInfo(name, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(InputText);
