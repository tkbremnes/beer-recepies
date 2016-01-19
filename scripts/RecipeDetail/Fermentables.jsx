import React, { Component } from 'react';

class Fermentables extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      ingredients
    } = this.props;

    if (!ingredients || !ingredients.forEach) {
      return <p>Loading...</p>;
    }

    const tableBody = ingredients.map((ingredient, index) => {
      const {
        weight,
        name,
        color
      } = ingredient;

      return <tr key={ index }>
        <td className="right-aligned">{ Math.round(weight * 1000) }g</td>
        <td className="ingredient-name">{ name }</td>
        <td className="right-aligned">{ color } °L</td>
      </tr>
    });

    return <table>
      <tbody>
        { tableBody }
      </tbody>)
    </table>
  }
}

export default Fermentables
