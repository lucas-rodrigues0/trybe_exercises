import React, { Component } from 'react';
import { connect } from 'react-redux';
import submitForm from '../actions/submitBtnAction';

class SubmitButton extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <button type="button" onClick={ handleClick } className="btn">Enviar</button>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleClick: () => dispatch(submitForm())
})

export default connect(null, mapDispatchToProps)(SubmitButton);
