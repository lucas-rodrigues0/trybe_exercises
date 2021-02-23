import React, { Component } from 'react';
import { connect } from 'react-redux';
import addPersonalInfo from '../actions/inputPersonalAction';

class InputText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: 'casa',
    }
  }

  handleChange = ({ target }) => {
    const { name, id } = target;
    const { addInfo } = this.props;
    this.setState({ selectedOption: id });
    addInfo(name, id);
  }

  render() {
    const { children, id } = this.props;

    return (
      <label>
        { children }
        <label htmlFor="casa">
          <input
            type="radio"
            id="casa"
            name={ id }
            onChange={(event) => this.handleChange(event) }
            checked={ this.state.selectedOption === "casa" }
          />
            Casa
          </label>
        <label htmlFor="apartamento">
          <input
            type="radio"
            id="apartamento"
            name={ id }
            onChange={ (event) => this.handleChange(event) }
            checked={ this.state.selectedOption === "apartamento" }
          />
            Apartamento
          </label>
      </label>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addInfo: (name, value) => dispatch(addPersonalInfo(name, value)),
})

export default connect(null, mapDispatchToProps)(InputText);
