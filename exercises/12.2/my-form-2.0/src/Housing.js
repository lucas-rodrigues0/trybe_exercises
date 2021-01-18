import React from 'react';

class Housing extends React.Component {
  render() {
    return (
      <div>
        <label>Habitação:</label>
        <input 
          type="radio" 
          id="casa" 
          name="housing" 
          onChange={this.props.handleInputChange}
          checked
        />
        <label>Casa</label>

        <input 
          type="radio" 
          id="apartamento" 
          name="housing" 
          onChange={this.props.handleInputChange}
        />
        <label>Apartamento</label>

      </div>
    );
  }
}

export default Housing;
