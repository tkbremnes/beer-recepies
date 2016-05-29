import React from 'react';
import ReactDOM from 'react-dom';

import CreateRecipeView from './CreateRecipeView.jsx';
import RecipeListView from './RecipeListView.jsx';
import { Provider } from 'react-redux';

import { Router, Route, Link, browserHistory } from 'react-router';

import store from './Utils/Reducers';

import Logo from './Components/Logo/index.jsx';
import Recipe from './Components/Recipe/index.jsx';

class Root extends React.Component {
  render() {
    return (
        <div>
            <Logo
            height="100px"
            width="100px"
            />

            <Recipe />
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
