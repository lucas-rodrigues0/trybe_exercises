import React from 'react';
import PropTypes from 'prop-types';

class Role extends React.Component {
  render() {
    const { inputValue, handleInputChange } = this.props;
    return (
      <div>
        <label>
          Cargo:
          <input
            type="text"
            id="role"
            name="role"
            value={ inputValue }
            onChange={ handleInputChange }
            maxLength="40"
          />
        </label>
      </div>
    );
  }
}

Role.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default Role;
