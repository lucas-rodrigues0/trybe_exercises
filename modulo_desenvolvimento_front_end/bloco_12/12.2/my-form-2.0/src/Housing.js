import React from 'react';
import PropTypes from 'prop-types';

class Housing extends React.Component {
  render() {
    const { handleInputChange } = this.props;
    return (
      <div>
        <label>
          Habitação:
          <label htmlFor="casa">
            <input 
              type="radio" 
              id="casa" 
              name="housing" 
              onChange={ handleInputChange }
              checked
            />
            Casa
          </label>
          <label htmlFor="apartamento">
            <input 
              type="radio" 
              id="apartamento" 
              name="housing" 
              onChange={ handleInputChange }
            />
            Apartamento
          </label>
        </label>
      </div>
    );
  }
}

Housing.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
};

export default Housing;
