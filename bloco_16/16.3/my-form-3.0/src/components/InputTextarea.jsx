import React, { Component } from 'react';
import { connect } from 'react-redux';
import addProfessionalInfo from '../actions/inputProfessionalAction';

class InputTextarea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }
  }

  componentDidUpdate(prevProps) {
    const { professionalInfo, id } = this.props;
    if (prevProps.professionalInfo !== professionalInfo) {
      this.handleValue(id);
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    const { addInfo } = this.props;
    addInfo(name, value);
  }

  handleValue = (id) => {
    const { professionalInfo } = this.props;
    Object.keys(professionalInfo).forEach(key => {
      if (key === id) {
        this.setState({
          value: professionalInfo[ key ],
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
        <textarea
          name={ id }
          value={ value }
          onChange={ (event) => this.handleChange(event) }
          maxLength={ maxLength }
          wrap="hard"
          className="input-textarea"
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
