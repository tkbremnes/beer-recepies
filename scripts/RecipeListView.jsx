import React, { Component } from 'react';
import { render } from 'react-dom';

import { connect } from 'react-redux';
import { Router, Route, Link } from 'react-router'

import { fetchRecipes, selectRecipe } from './Actions';

import RecipeList from './RecipeList.jsx';
import RecipeListDetail from './RecipeListDetail.jsx';
import RecipeListHeader from './RecipeListHeader.jsx';


class RecipeListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchRecipes());
  }

  render() {
    const {
      dispatch,
      recipes,
      uiState
    } = this.props;

    return <div>
      <p>Hello</p>
    </div>
  }
}

function select(state) {
  return {
    recipes: state.recipes,
    uiState: state.uiState,
  }
}

export default connect(select)(RecipeListView)
