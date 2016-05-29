import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import _ from 'underscore';

import Actions from './Actions';
window.Actions = Actions;
console.log(Actions);

function uiState(state = {}, action, value) {
  switch(action.type) {
    default: {
      return state;
    }
  }
}

function recipe(state, action) {
    if (!state) {
        return {};
    }

    switch (action.type) {
        case 'receive_recipes': {
            return action.recipe;
        }

        case 'add_fermentable': {
            const recipe = _.clone(state);
            recipe.fermentables.push(action.fermentable);
            return recipe;
        }

        default: {
            return state;
        }
    }
}

const brewStore = combineReducers({
  recipe,
  uiState
});


const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore)

let store = createStoreWithMiddleware(brewStore);

window.newStore = store;

export default store;
