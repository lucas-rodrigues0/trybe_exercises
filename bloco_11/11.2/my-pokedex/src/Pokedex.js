import React from 'react';

import Pokemon from './Pokemon';
import './Pokedex.css';

class Pokedex extends React.Component {
  render() {
    const { input } = this.props;
    return (
      <section className="main-container">
        {input.map(elem => {
          return <Pokemon data={elem} />
        })}
      </section>
    );
  };
};

export default Pokedex;
