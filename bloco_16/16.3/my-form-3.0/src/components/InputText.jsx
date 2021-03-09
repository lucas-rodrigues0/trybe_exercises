import React, { Component } from 'react';
import { connect } from 'react-redux';
import addPersonalInfo from '../actions/inputPersonalAction';
import addProfessionalInfo from '../actions/inputProfessionalAction';

class InputText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }
  }

  componentDidUpdate(prevProps) {
    const { personalInfo, professionalInfo, id } = this.props;
    if (prevProps.personalInfo !== personalInfo) {
      this.handleValue(id);
    } else if (prevProps.professionalInfo !== professionalInfo) {
      this.handleValue(id);
    }
  }

  handleChange = ({ target }) => {
    let { name, value } = target;
    const { addPersonalInfo, addProfessionalInfo } = this.props;

    if (name === 'name') {
      value = value.toUpperCase();
    }

    if (name === "address") {
      value = value.replace(/[^A-Za-z0-9\/_]/g, ' ');
    }

    if (name === 'roleDescriptions') {
      addProfessionalInfo(name, value);
    } else {
      addPersonalInfo(name, value);
    }
  }

  handleValue = (id) => {
    const { personalInfo, professionalInfo } = this.props;
    if (id === 'roleDescriptions') {
      this.setState({
        value: professionalInfo[ id ],
      });
    }

    Object.keys(personalInfo).forEach(key => {
      if (key === id) {
        this.setState({
          value: personalInfo[ key ],
        });
      }
    })
  }

  render() {
    const { children, id, maxLength } = this.props;
    const { value } = this.state;

    return (
      <label className="label-container">
        { children }
        <input
          name={ id }
          type="text"
          maxLength={ maxLength }
          value={ value }
          onChange={ (event) => this.handleChange(event) }
          className="input-text"
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
