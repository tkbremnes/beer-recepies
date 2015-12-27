import React from 'react';
import CreateRecipeView from './CreateRecipeView.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Brauhaus from 'brauhaus';
require('brauhaus-beerxml');

window.Brauhaus = Brauhaus;

import { combineReducers } from 'redux'


const Actions = {
  FERMENTABLE_CHANGED: 'fermentable_changed',
  CHANGE_FERMENTABLE_WEIGHT: 'change_fermentable_weight',
  CHANGE_FERMENTABLE_NAME: 'change_fermentable_name',
  CHANGE_FERMENTABLE_COLOR: 'change_fermentable_color',

  SAVE_RECIPE: 'save_recipe',

  TOTAL_WEIGHT_CHANGED: 'total_weight_changed',

  ADD_FERMENTABLE: 'add_fermentable'
}


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

      console.log(r.toBeerXml());

      return state;
    }

    default: {
      return state;
    }
  }
}

const brewStore = combineReducers({
  fermentablesForId,
  fermentablesMetaForId,
  recipe
});


let store = createStore(brewStore);

store.subscribe(function () {
  // console.table(store.getState().fermentables);
  // console.log(store.getState().fermentablesMeta);
});









class RecipeList extends React.Component {
  render() {
    let recipes = [];

    this.props.recipes.forEach(function (recipe, pos) {
      recipes.push(<Recipe recipe={recipe} key={pos} />);
    });

    return <div> { recipes } </div>
  }
}

class Recipe extends React.Component {
  render() {
    return <article className="card clickable">
        <header>{ this.props.recipe.name }</header>
        <table>
          <tbody>
            <tr>
              <th>ABV</th>
              <td>{ this.props.recipe.abv.toPrecision(2) }%</td>
            </tr>
            <tr>
              <th>IBU</th>
              <td>{ Math.round(this.props.recipe.ibu) }</td>
            </tr>
          </tbody>
        </table>
      </article>
  }
}

class BeerView extends React.Component {
  render() {
    return <div>{ this.props.recipe.name }</div>
  }
}

class RecipeScraper extends React.Component {
  render() {
    const url = 'temp';

    window.fetch('http://localhost:9000/kolsch-altbier/item/1881-koelsch-style-profile')
      .then(function (res) {
        return res.text();
      })
      .then(function (body) {
        var parser = new DOMParser();
        var htmlDoc = parser.parseFromString(body, "text/html");

        var content = htmlDoc.querySelector('#content-main')
          .querySelector('.itemBody')
          .querySelector('.itemFullText');

        console.log(content);
      });
  }
}

const staticRecipes = [
  {
    abv: 6.667858048422881,
    abw: 5.2172719080530054,
    author: "danielgtaylor",
    batchSize: 18.92705,
    boilSize: 11.35623,
    buToGu: 0.2947789199571786,
    bv: 0.7577864266251388,
    calories: 195.00334749781888,
    color: 10.100657561905829,
    fermentables: [
      {
        color: 10,
        late: false,
        name: "Munich liquid extract",
        weight: 2.26795,
        yield: 75.7346258709,
      },
      {
        color: 3,
        late: false,
        name: "Wheat liquid extract",
        weight: 1.36077,
        yield: 75.7346258709,
      },
      {
        color: 1,
        late: false,
        name: "Pilsner malt (steeped)",
        weight: 0.226795,
        yield: 73.5707794175,
      },
      {
        color: 34,
        late: false,
        name: "Caramunich (steeped)",
        weight: 0.226795,
        yield: 75.7346258709,
      },
      {
        color: 19,
        late: false,
        name: "Aromatic (steeped)",
        weight: 0.1133975,
        yield: 73.5707794175,
      }
    ],
    fg: 1.0096479445748985,
    fgPlato: 2.470248099146545,
    ibu: 17.775066759970656,
    mashEfficiency: 75,
    name: "Aramis Saison",
    og: 1.0602996535931157,
    ogPlato: 14.81185411741032,
    price: 33.94436787172289,
    primingCornSugar: 0.12961975028595002,
    primingDme: 0.17271702105852554,
    primingHoney: 0.15877900931027733,
    primingSugar: 0.11794749177270022,
    realExtract: 4.701610467248635,
    spices: [
      {
        aa: 8.1,
        form: "Pellet",
        name: "Aramis hops",
        use: "Boil",
        weight: 0.0212615166549,
      },
      {
        aa: 8.1,
        form: "Pellet",
        name: "Aramis hops",
        use: "Boil",
        weight: 0.00708717221828,
      },
    ],
    // style: Object,
    // timelineMap: Object,
    yeast: [
      {
        attenuation: 84,
        form: "Liquid",
        name: "WLP560 - Classic Saison Ale Blend",
        type: "Ale"
      }
    ]
  }
]

let rootElement = document.getElementById('container')
React.render(
  <Provider store={ store }>
    <CreateRecipeView />
  </Provider>,
  rootElement
)

// React.render(<RecipeList recipes={staticRecipes} />, document.getElementById('container'));
// React.render(<BeerView recipe={staticRecipes[0]} />, document.getElementById('container'));
// React.render(<CreateRecipeView store={ store } />, document.getElementById('container'));
// React.render(<RecipeScraper />, document.getElementById('container'));
