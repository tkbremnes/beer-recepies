import React, { Component} from 'react';
import { render } from 'react-dom';

class RecipeListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const abv = this.props.recipe.abv && this.props.recipe.abv.toPrecision(2);
    const recipeUrl = `/recipes/${this.props.recipe.id}`

    let className = "recipe-item clickable";
    if (this.props.isSelected) {
      className += " selected"
    }

    return <article
      className={ className }
      onClick={ this.props.onClick }
      >
        <header>{ this.props.recipe.name }</header>
        <p className="subtext">{ abv }% { this.props.recipe.style }</p>
      </article>
  }
}

export default RecipeListItem
