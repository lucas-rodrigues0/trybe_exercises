import React, { Component } from 'react';
import { connect } from 'react-redux';
import addPersonalInfo from '../actions/inputAction';

class InputText extends Component {
  handleChange = ({ target }) => {
    const { name, value } = target;
    const { addInfo } = this.props;
    addInfo(name, value);
  }

  handleValue = (id) => {
    const { personalInfo } = this.props;
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
  personalInfo: state.form.personalInfo
})

const mapDispatchToProps = (dispatch) => ({
  addInfo: (name, value) => dispatch(addPersonalInfo(name, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(InputText);
