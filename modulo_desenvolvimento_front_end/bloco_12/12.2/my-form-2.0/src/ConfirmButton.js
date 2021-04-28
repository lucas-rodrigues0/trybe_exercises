import React from 'react';
import PropTypes from 'prop-types';

class ConfirmButton extends React.Component {
  render() {
    const { confirmationStatus } = this.props;
    return (
      <div>
        <button
          type="button"
          onClick={ confirmationStatus }
        >
          Confirm
        </button>
      </div>
    );
  }
}

ConfirmButton.propTypes = {
  confirmationStatus: PropTypes.func.isRequired,
};

export default ConfirmButton;
