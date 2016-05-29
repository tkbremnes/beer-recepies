import React, { Component} from 'react';

import { connect } from 'react-redux';
import { Router, Route, Link } from 'react-router'

import { fetchRecipes } from './Actions';

import RecipeListHeader from './RecipeListHeader.jsx';
import RecipeListFooter from './RecipeListFooter.jsx';
import RecipeListItem from './RecipeListItem.jsx';

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

        // res.push(<ListItem
        //   onClick={() => this.props.onSelectRecipe(recipe.id)}
        //   primaryText={ recipe.name }
        //   secondaryText={ getSecondaryTextFromRecipe(recipe) }
        //   recipe={ recipe }
        //   key={ pos } />
        // );
      });
      return res;
    }
      // <Toolbar style={ Styles.ListHeader }>
      //   <IconButton tooltip="Sort">
      //     <FontIcon className="muidocs-icon-custom-sort"/>
      //   </IconButton>
      // </Toolbar>

    return <div className="master">
      <RecipeListHeader />
      <div className="recipe-list"> { getRecipesDom(recipes) } </div>
      <RecipeListFooter />
    </div>
  }
}

function select(state) {
  return {
    recipes: state.recipes
  }
}

export default connect(select)(RecipeList)
