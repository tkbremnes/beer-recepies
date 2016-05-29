import React from 'react';
import ReactDOM from 'react-dom';

import CreateRecipeView from './CreateRecipeView.jsx';
import RecipeListView from './RecipeListView.jsx';
import { Provider } from 'react-redux';

import { Router, Route, Link, browserHistory } from 'react-router';


import store from './reducers';
import Brauhaus from 'brauhaus';
require('brauhaus-beerxml');

import Logo from './Components/Logo/index.jsx';
import Recipe from './Components/Recipe/index.jsx';

fetch('/ex/recipes.xml').then(res => res.text()).then(
  (xml) => {
    let recipes = Brauhaus.Recipe.fromBeerXml(xml);
    recipes.forEach((recipe) => {
      recipe.calculate();
    });

    window.recipes = recipes;
  }
);

import exampleRecipes from '../ex/recipes.js';
const recipe = exampleRecipes.recipes[0];

class Root extends React.Component {
  render() {
    return (
        <div>
            <Logo
            height="100px"
            width="100px"
            />

            <Recipe
                recipe={ recipe }
            />
        </div>
    )
  }
}

window.addEventListener('keydown', function (event) {
  if (event.code === "KeyF" && event.metaKey) {
    event.preventDefault();

    document.querySelector('#search-field').focus();
  }
});

const rootElement = document.getElementById('container')
ReactDOM.render(
  <Provider store={ store }>
    <Router history={browserHistory}>
        <Route path="/" component={Root} />
    </Router>

  </Provider>
, rootElement);
