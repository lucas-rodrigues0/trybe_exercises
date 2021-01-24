import React from 'react';

class Housing extends React.Component {
  render() {
    return (
      <div>
        <label>
          Habitação:
          <label htmlFor="casa">
            <input 
              type="radio" 
              id="casa" 
              name="housing" 
              onChange={this.props.handleInputChange}
              checked
            />
            Casa
          </label>
          <label htmlFor="apartamento">
            <input 
              type="radio" 
              id="apartamento" 
              name="housing" 
              onChange={this.props.handleInputChange}
            />
            Apartamento
          </label>
        </label>
      </div>
    );
  }
}

export default Housing;
