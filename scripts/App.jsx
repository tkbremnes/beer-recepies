import React from 'react';
import { render } from 'react-dom';
import CreateRecipeView from './CreateRecipeView.jsx';
import RecipeListView from './RecipeListView.jsx';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router';

import store from './reducers';
import Brauhaus from 'brauhaus';
require('brauhaus-beerxml');

fetch('/ex/recipes.xml').then(res => res.text()).then(
  (xml) => {
    let recipes = Brauhaus.Recipe.fromBeerXml(xml);
    recipes.forEach((recipe) => {
      recipe.calculate();
    });

    window.recipes = recipes;
  }
);

let rootElement = document.getElementById('container')
// React.render(
//   <Provider store={ store }>
//     <CreateRecipeView />
//   </Provider>,
//   rootElement
// )


// render((
// ), document.body)

class Root extends React.Component {
  render() {
    return <div>
      Halla
    </div>
  }
}
class About extends React.Component {
  render() {
    return <div>
      About
    </div>
  }
}
class Settings extends React.Component {
  render() {
    return <div>
      Settings
    </div>
  }
}

class TestRecipeView extends React.Component {
  getRecipeFromId(id) {
    if (!id) {
      return 'lol';
    }
    return 'lal'
  }

  componentDidMount() {
    const recipe = this.getRecipeFromId(this.props.params.recipeId);
    this.setState({
      // route components are rendered with useful information, like URL params
      recipeId: this.props.params.recipeId
    })
  }

  render() {
    if (!this.state) {
      return <div>Loading...</div>;
    }
    return <div>
      <p>Hello world</p>
      <p>ID: { this.state.recipeId }</p>
    </div>
  }
}

window.addEventListener('keydown', function (event) {
  if (event.code === "KeyF" && event.metaKey) {
    event.preventDefault();

    document.querySelector('#search-field').focus();
  }
});

React.render(
  <Provider store={ store }>
    <Router history={browserHistory}>
        <Route path="/" component={Root} />
        <Route path="/about" component={About} />
        <Route path="/settings" component={Settings} />
        <Route path="/recipes" component={RecipeListView}></Route>
    </Router>

  </Provider>
, rootElement);
    // <RecipeList />

// React.render(<CreateRecipeView store={ store } />, document.getElementById('container'));
