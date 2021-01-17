import React from 'react';

import './Pokemon.css'

class Pokemon extends React.Component {
  render() {
    const { id, name, type, averageWeight, image, moreInfo } = this.props.data;

    return (
      <section className="pokemon-card">
        <h3>{name}</h3>
        <img src={image} alt={name} />
        <div>id: {id}</div>
        <div>type: {type}</div>
        <div>weight: {averageWeight.value}{averageWeight.measurementUnit}</div>
        <a href={moreInfo}>more info</a>
      </section>
    );
  };
};

export default Pokemon;
