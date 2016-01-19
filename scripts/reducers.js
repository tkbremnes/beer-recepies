import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import Actions, {
  RECEIVE_RECIPES,
  SET_SELECTED_RECIPE
} from './Actions';

window.Actions = Actions;


function fermentablesMetaForId(state, action, value) {
    // todo, properly
  if (!state) {
    state = {
      totalWeight: {SI: '3'}
    }
  }

  switch (action.type) {
    case Actions.TOTAL_WEIGHT_CHANGED: {
      state.totalWeight = { SI: action.value };

      return state;
    }

    default: {
      return state;
    }
  }
}

function fermentablesForId(state, action, value) {
  // todo, properly
  if (!state) {
    state = [
      {
        id: 0,
        name: 'Maris Otter',
        weight: 4000,
        color: 5
      }
    ]
  }

  switch (action.type) {
    case Actions.TOTAL_WEIGHT_CHANGED: {

      return state;
    }
    case Actions.ADD_FERMENTABLE:

      return [
        ...state,
        {
          id: Math.round(Math.random()*4000), // todo
          name: '',
          weight: '',
          color: ''
        }
      ]

      return state;
    case Actions.FERMENTABLE_CHANGED: {
      // TODO! COPY better
      var _fermentables = [];
      state.forEach(function (_f) {
        if (_f.id === action.value.id) {
          console.table(action.value);
          _fermentables.push(action.value);
        }
        else {
          _fermentables.push({
            id: _f.id,
            weight: _f.weight,
            name: _f.name,
            color: _f.color
          });
        }
      });

      return _fermentables;
    }

    default: {
      return state
    }
  }
}


function getRecipes() {
    return fetch('/ex/recipes.xml').then(res => res.text()).then(xml =>
        Brauhaus.Recipe.fromBeerXml(xml)
    );
}

function recipes(state = {}, action, value) {
  switch(action.type) {
    case(RECEIVE_RECIPES): {
      return action.recipes;
    }
    default: {
      return state
    }
  }
}


function uiState(state = {}, action, value) {
  switch(action.type) {
    case SET_SELECTED_RECIPE: {
      var res = {
        selectedRecipeId: action.value
      }
      return res;
    }

    default: {
      return state;
    }
  }
}










function recipe(state, action, value) {
  if (!state) {
    return {};
  }

  switch (action.type) {
    case Actions.SAVE_RECIPE: {
      function getRecipeForId(_storeState, _id) {
        // todo
        var res = {
          name: 'todo',
          description: 'also todo',

          fermentables: _storeState.fermentablesForId,
          spices: [],
          yeasts: []
        };
        return res;
      }

      console.log('saving...');

      // should get id
      var recipe = getRecipeForId(store.getState(), action.id);
      console.log(recipe);

      // from brewMeta
      var name = recipe.name;
      var description = recipe.description;

      // from breweryMeta
      var batchSize = 20.0;
      var boilSize = 10.0;
      const efficiency = 78;
      const phLevel = 5.4;

      let r = new Brauhaus.Recipe({
        name: name,
        description: description,
        batchSize: boilSize,
        boilSize: boilSize,
      });

      // add fermentables
      recipe.fermentables.forEach(_f => {
        r.add('fermentable', {
          weight: _f.weight,
          color: _f.color,
          name: _f.name,
          efficiency: efficiency
        });
      });

      // add spices
      recipe.spices.forEach(_s => {
        r.add('hop', {
          name: _s.name,
          weight: _s.weight,
          aa: _s.aa,
          use: _s.use,
          form: _s.form
        })
      });

      // add yeasts
      recipe.yeasts.forEach(_y => {
        r.add('yeast', {
          name: _y.name,
          type: _y.type,
          form: _y.form,
          attenuation: _y.attenuation,
        });
      });

      r.mash = new Brauhaus.Mash({
        name: 'My mash',
        ph: phLevel
      });

      r.mash.addStep({
        name: 'Saccharification',
        type: 'Infusion',
        time: 60,
        temp: 68,
        waterRatio: 2.75,
      });

      return state;
    }

    default: {
      return state;
    }
  }
}

const brewStore = combineReducers({
  recipes,
  uiState
});


const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore)

let store = createStoreWithMiddleware(brewStore);

window.store = store;

export default store;
