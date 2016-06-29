import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import {
    Router,
    Route,
    hashHistory,
    Link,
    IndexRoute
} from 'react-router';

import store from './Utils/Reducers';

import Logo from './Components/Logo/index.jsx';
import AppFooter from './Components/AppFooter/index.jsx';
import RecipeCollection from './Components/RecipeCollection/index-alt.jsx';
import RecipeDetail from './Components/RecipeDetail/index.jsx';

import NavHeader from './Components/NavHeader/index.jsx';
import SideBarNav from './Components/SideBarNav/index.jsx';

import PouchDB from 'PouchDB';

import uuid from 'node-uuid';
window.uuid = uuid;

function onSideBarToggle() {
    console.log('rawr');
}

class Root extends React.Component {
  render() {
    return (
        <div style={ { paddingBottom: '40px', paddingTop: '40px' } }>
            {/*<Logo
            height="100px"
            width="100px"
            />*/}

            {/*<SideBarNav />*/}

            <NavHeader onSideBarToggle={ onSideBarToggle } />

            <main>

                { this.props.children }

                <AppFooter />
            </main>

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
    <Router history={ hashHistory }>
        <Route path="/" component={ Root }>
            <Route path="recipes" component={ RecipeCollection } />

            <Route path="recipe/:recipeId" component={ RecipeDetail } />

            <Route path="about" component={ About } />

            <Route path="*" component={ NoMatch }/>
        </Route>

    </Router>

  </Provider>
, rootElement);
