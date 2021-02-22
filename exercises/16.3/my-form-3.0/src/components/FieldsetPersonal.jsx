import React, { Component } from 'react';
import { connect } from 'react-redux';

class FieldsetPersonal extends Component {
  render() {
    return (
      <fieldset>


      </fieldset>
    );
  }
}

const mapStateToProps = (state) => ({
  personalInfo: state.form.
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(FieldsetPersonal);
