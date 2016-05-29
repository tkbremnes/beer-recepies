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
import Fermentables from './Components/Fermentables/index.jsx';

fetch('/ex/recipes.xml').then(res => res.text()).then(
  (xml) => {
    let recipes = Brauhaus.Recipe.fromBeerXml(xml);
    recipes.forEach((recipe) => {
      recipe.calculate();
    });

    window.recipes = recipes;
  }
);

const FermentablesList = [
    {
        name: "Maris Otter",
        weight: 4500,
        color: 5
    },
    {
        name: "CaraPils",
        weight: 200,
        color: 12
    },
    {
        name: "Wheat",
        weight: 1500,
        color: 55
    }
]

class Root extends React.Component {
  render() {
    return (
        <div>
            <Logo
            height="100px"
            width="100px"
            />

            <Fermentables
                fermentables={ FermentablesList }
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
