import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import {
    Router,
    Route,
    browserHistory,
    Link,
    IndexRoute
} from 'react-router';

import store from './Utils/Reducers';

import Logo from './Components/Logo/index.jsx';
import AppFooter from './Components/AppFooter/index.jsx';
import RecipeCollection from './Components/RecipeCollection/index.jsx';
import Recipe from './Components/Recipe/index.jsx';

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

            <nav style={{ borderBottom: '1px solid #000' }}>
                <Link to="/about">About</Link>
                <Link to="/recipes">Recipes</Link>
            </nav>

            { this.props.children }

            <AppFooter />
        </div>
    )
  }
}

class RecipeDetail extends React.Component {
    componentWillMount() {
        console.log('mjau');
    }

    render() {
        return (
            <div style={ { paddingBottom: '40px' } }>
            <p>Mjau</p>

            <AppFooter />
            </div>
        )
    }
}

class About extends React.Component {
    render() {
        return(
            <div>This is text about this app</div>
        )
    }
}

class NoMatch extends React.Component {
    render() {
        return(
            <div>404</div>
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
    <Router history={ browserHistory }>
        <Route path="/" component={ Root }>
            <Route path="recipes">
                <IndexRoute component={ RecipeCollection } />

                <Route path="recipe/:recipeId" component={ RecipeDetail } />
            </Route>

            <Route path="about" component={ About } />

            <Route path="*" component={ NoMatch }/>
        </Route>

    </Router>

  </Provider>
, rootElement);
