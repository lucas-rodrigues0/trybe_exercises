import React from 'react';
import PropTypes from 'prop-types';

class ResetButton extends React.Component {
  render() {
    const { resetStatus } = this.props;
    return (
      <div>
        <button
          type="button"
          onClick={ resetStatus }
        >
          Reset
        </button>
      </div>
    );
  }
}

ResetButton.propTypes = {
  resetStatus: PropTypes.func.isRequired,
};

export default ResetButton;
