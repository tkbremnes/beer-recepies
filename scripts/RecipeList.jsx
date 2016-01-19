import React, { Component} from 'react';

import { connect } from 'react-redux';
import { Router, Route, Link } from 'react-router'

import { fetchRecipes } from './Actions';

import { RecipeListHeader } from './RecipeListHeader.jsx';

// import { RecipeListFooter } from './RecipeListFooter.jsx';
// import { RecipeListItem } from './RecipeListItem.jsx';

import ListItem from 'material-ui/lib/lists/list-item';

import FontIcon from 'material-ui/lib/font-icon';
import IconButton from 'material-ui/lib/icon-button';

import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';

import TextField from 'material-ui/lib/text-field';

class RecipeListItem extends React.Component {
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

class RecipeList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Styles = {
      ListFooter: {
      },
      ListHeader: {
        flexShrink: 0
      }
    }

    const {
      dispatch,
      recipes,
      selectedRecipeId
    } = this.props;

    function getSecondaryTextFromRecipe(recipe) {
      return `${recipe.style} (${recipe.abv.toPrecision(2)}%)`
    }


    var getRecipesDom = (_r) => {
      let res = [];
      if (!_r || !_r.recipes) {
        return;
      }
      _r.recipes.forEach((recipe, pos) => {
        const isSelected = recipe.id === selectedRecipeId;

        res.push(<ListItem
          onClick={() => this.props.onSelectRecipe(recipe.id)}
          primaryText={ recipe.name }
          secondaryText={ getSecondaryTextFromRecipe(recipe) }
          recipe={ recipe }
          key={ pos } />
        );
      });
      return res;
    }

    return <div className="master">
      <Toolbar style={ Styles.ListHeader }>
        <IconButton tooltip="Sort">
          <FontIcon className="muidocs-icon-custom-sort"/>
        </IconButton>
      </Toolbar>

      <div className="recipe-list"> { getRecipesDom(recipes) } </div>

      <Toolbar style={ Styles.ListFooter }>
        <TextField
          hintText="Search" />
      </Toolbar>

    </div>
  }
}

function select(state) {
  return {
    recipes: state.recipes
  }
}

export default connect(select)(RecipeList)

