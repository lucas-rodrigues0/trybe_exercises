import React, { Component } from 'react';
import { connect } from 'react-redux';
import addPersonalInfo from '../actions/inputPersonalAction';

class InputText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    }
  }

  componentDidUpdate(prevProps) {
    const { personalInfo } = this.props;
    if (prevProps.personalInfo !== personalInfo) {
      this.handleValue();
    }
  }

  handleChange = ({ target }) => {
    const { name, id } = target;
    const { addInfo } = this.props;
    this.setState({ selectedOption: id });
    addInfo(name, id);
  }

  handleValue = () => {
    const { selectedOption } = this.props;
    this.setState({
      value: selectedOption,
    })
  }

  render() {
    const { children, id } = this.props;

    return (
      <label className="label-container">
        { children }
        <label htmlFor="casa" className="label-option">
          <input
            type="radio"
            id="casa"
            name={ id }
            onChange={(event) => this.handleChange(event) }
            checked={ this.state.value === "casa" }
            className="input-radio"
          />
          <span className="checkmark"></span>
            Casa
          </label>
        <label htmlFor="apartamento" className="label-option">
          <input
            type="radio"
            id="apartamento"
            name={ id }
            onChange={ (event) => this.handleChange(event) }
            checked={ this.state.value === "apartamento" }
            className="input-radio"
          />
          <span className="checkmark"></span>
            Apartamento
          </label>
      </label>
    )
  }
}

const mapStateToProps = (state) => ({
  personalInfo: state.form.personalInfo,
  selectedOption: state.form.personalInfo.habitation,
})

const mapDispatchToProps = (dispatch) => ({
  addInfo: (name, value) => dispatch(addPersonalInfo(name, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(InputText);
