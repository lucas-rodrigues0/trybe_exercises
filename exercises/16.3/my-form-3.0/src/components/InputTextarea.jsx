import React, { Component } from 'react';
import { connect } from 'react-redux';
import addProfessionalInfo from '../actions/inputProfessionalAction';

class InputTextarea extends Component {
  handleChange = ({ target }) => {
    const { name, value } = target;
    const { addInfo } = this.props;
    addInfo(name, value);
  }

  handleValue = (id) => {
    const { professionalInfo } = this.props;
    Object.keys(professionalInfo).forEach(key => {
      if (key === id) {
        return professionalInfo[ key ];
      }
    })
  }

  render() {
    const { children, id, maxLength } = this.props;
    return (
      <label>
        { children }
        <textarea
          name={ id }
          value={ this.handleValue(id) }
          onChange={ (event) => this.handleChange(event) }
          maxLength={ maxLength }
        />
      </label>
    )
  }
}

const mapStateToProps = (state) => ({
  professionalInfo: state.form.professionalInfo,
})

const mapDispatchToProps = (dispatch) => ({
  addInfo: (name, value) => dispatch(addProfessionalInfo(name, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(InputTextarea);
