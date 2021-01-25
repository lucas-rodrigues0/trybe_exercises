import React from 'react';
import PropTypes from 'prop-types';

class RoleDescriptions extends React.Component {
  render() {
    const { inputValue, handleInputChange } = this.props;
    return (
      <div>
        <label>
          Descrição do cargo:
          <textarea
            id="roleDescriptions"
            name="roleDescriptions"
            value={ inputValue }
            onChange={ handleInputChange }
            maxLength="500"
          />
        </label>
      </div>
    );
  }
}

RoleDescriptions.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default RoleDescriptions;
