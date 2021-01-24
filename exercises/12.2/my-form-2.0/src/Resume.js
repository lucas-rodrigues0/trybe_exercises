import React from 'react';
import PropTypes from 'prop-types';

class Resume extends React.Component {
  render() {
    const { value, handleProfInputChange } = this.props;
    return (
      <div>
        <label>
          Curriculo profissional:
          <textarea
            id="resume"
            name="resume"
            value={ value }
            onChange={ handleProfInputChange }
            maxLength="1000"
          />
        </label>
      </div>
    );
  }
}

Resume.propTypes = {
  value: PropTypes.string.isRequired,
  handleProfInputChange: PropTypes.func.isRequired,
};

export default Resume;
