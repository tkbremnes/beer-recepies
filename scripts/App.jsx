import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { Router, Route, browserHistory, Link } from 'react-router';

import store from './Utils/Reducers';

import Logo from './Components/Logo/index.jsx';
import AppFooter from './Components/AppFooter/index.jsx';
import RecipeCollection from './Components/RecipeCollection/index.jsx';

import PouchDB from 'PouchDB';

import uuid from 'node-uuid';
window.uuid = uuid;

class Root extends React.Component {
  render() {
    return (
        <div style={ { paddingBottom: '40px' } }>
            {/*<Logo
            height="100px"
            width="100px"
            />*/}

            <RecipeCollection />
            <AppFooter />
        </div>
    )
  }
}
class About extends React.Component {
    render() {
        return(
            <div>About</div>
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
        <Route path="/aboutss" component={About} />
        {/*<Route path="/recipes" component={Recipes}>*/}
            <Route path="/recipe/:recipeId" component={Logo} />
        {/*</Route>*/}
    </Router>

  </Provider>
, rootElement);
