import React from 'react';
import PropTypes from 'prop-types';

class Role extends React.Component {
  render() {
    const { value, handleProfInputChange } = this.props;
    return (
      <div>
        <label>
          Cargo:
          <input
            type="text"
            id="role"
            name="role"
            value={ value }
            onChange={ handleProfInputChange }
            maxLength="40"
          />
        </label>
      </div>
    );
  }
}

Role.propTypes = {
  value: PropTypes.string.isRequired,
  handleProfInputChange: PropTypes.func.isRequired,
};

export default Role;
