import React, { Component } from 'react';
import { connect } from 'react-redux';
import clearForm from '../actions/clearBtnAction';

class ClearButton extends Component {
  render() {
    const { clearForm } = this.props;
    return (
      <button type="button" onClick={ clearForm }>Apagar</button>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  clearForm: () => dispatch(clearForm())
})

export default connect(null, mapDispatchToProps)(ClearButton);
