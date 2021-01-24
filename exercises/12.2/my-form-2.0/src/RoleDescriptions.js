import React from 'react';
import PropTypes from 'prop-types';

class RoleDescriptions extends React.Component {
  render() {
    const { value, handleProfInputChange } = this.props;
    return (
      <div>
        <label>
          Descrição do cargo:
          <textarea
            id="roleDescriptions"
            name="roleDescriptions"
            value={ value }
            onChange={ handleProfInputChange }
            maxLength="500"
          />
        </label>
      </div>
    );
  }
}

RoleDescriptions.propTypes = {
  value: PropTypes.string.isRequired,
  handleProfInputChange: PropTypes.func.isRequired,
};

export default RoleDescriptions;
