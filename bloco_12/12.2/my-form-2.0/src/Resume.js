import React from 'react';
import PropTypes from 'prop-types';

class Resume extends React.Component {
  render() {
    const { inputValue, handleInputChange } = this.props;
    return (
      <div>
        <label>
          Curriculo profissional:
          <textarea
            id="resume"
            name="resume"
            value={ inputValue }
            onChange={ handleInputChange }
            maxLength="1000"
          />
        </label>
      </div>
    );
  }
}

Resume.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default Resume;
