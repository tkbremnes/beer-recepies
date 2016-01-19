import Brauhaus from 'brauhaus';
require('brauhaus-beerxml');

window.Brauhaus = Brauhaus;

function normalize(beerXml) {
  const beerJson = Brauhaus.Recipe.fromBeerXml(beerXml);

  const complexField = [
    'style',
    'fermentables',
    'hops',
    'misc',
    'spices',
    'yeasts',
    'mash'
  ]

  var res = {
    recipes: [],

    // styleForId: [],
    fermentablesForId: [],
    spicesForId: [],
    yeastsForId: [],
    // mashForId: []
  };

  beerJson.forEach(recipe => {
    recipe.calculate();

    const id = Math.round(Math.random() * 100000);

    const normalizedRecipe = {
      abv: recipe.abv,
      abw: recipe.abw,
      agingDays: recipe.agingDays,
      agingTemp: recipe.agingTemp,
      author: recipe.author,
      batchSize: recipe.batchSize,
      boilSize: recipe.boilSize,
      bottlingPressure: recipe.bottlingPressure,
      buToGu: recipe.buToGu,
      bv: recipe.bv,
      calories: recipe.calories,
      color: recipe.color,
      fg: recipe.fg,
      fgPlato: recipe.fgPlato,
      ibu: recipe.ibu,
      mash: recipe.mash,
      mashEfficiency: recipe.mashEfficiency,
      name: recipe.name,
      og: recipe.og,
      ogPlato: recipe.ogPlato,
      price: recipe.price,
      primaryDays: recipe.primaryDays,
      primaryTemp: recipe.primaryTemp,
      primingCornSugar: recipe.primingCornSugar,
      primingDme: recipe.primingDme,
      primingHoney: recipe.primingHoney,
      primingSugar: recipe.primingSugar,
      realExtract: recipe.realExtract,
      secondaryDays: recipe.secondaryDays,
      secondaryTemp: recipe.secondaryTemp,
      tertiaryDays: recipe.tertiaryDays,

      style: recipe.style.name,
      id: id // todo!
    };

    res.recipes.push(normalizedRecipe);


    recipe.fermentables.forEach(fermentable => {
      var fermentableWithId = {
        name: fermentable.name,
        weight: fermentable.weight,
        yield: fermentable.yield,
        color: fermentable.color,
        late: fermentable.late,

        id: id
      }
      res.fermentablesForId.push(fermentableWithId);
    });

    recipe.spices.forEach(spice => {
      var spiceWithId = {
        name: spice.name,
        weight: spice.weight,
        aa: spice.aa,
        use: spice.use,
        form: spice.form,

        id: id
      };

      res.spicesForId.push(spiceWithId);
    });

    recipe.yeast.forEach(yeast => {
      var yeastWithId = {
        name: yeast.name,
        type: yeast.type,
        form: yeast.form,
        attenuation: yeast.attenuation,

        id: id
      };

      res.yeastsForId.push(yeastWithId);
    });
  });

  return res;
}

export const FERMENTABLE_CHANGED = 'fermentable_changed';
export const CHANGE_FERMENTABLE_WEIGHT = 'change_fermentable_weight';
export const CHANGE_FERMENTABLE_NAME = 'change_fermentable_name';
export const CHANGE_FERMENTABLE_COLOR = 'change_fermentable_color';
export const SAVE_RECIPE = 'save_recipe';
export const TOTAL_WEIGHT_CHANGED = 'total_weight_changed';
export const ADD_FERMENTABLE = 'add_fermentable';
export const FETCH_RECIPES = 'fetch_recipes';

export const SET_SELECTED_RECIPE = 'set_selected_recipe';

export function selectRecipe(recipeId) {
  return {
    type: SET_SELECTED_RECIPE,
    value: recipeId
  }
}

export const REQUEST_RECIPES = 'request_recipes'
function requestRecipes() {
  return {
    type: REQUEST_RECIPES
  }
}

export const RECEIVE_RECIPES = 'receive_recipes'
function receiveRecipes(beerXml) {
  return {
    type: RECEIVE_RECIPES,
    recipes: normalize(beerXml)
  }
}

export function fetchRecipes() {
  return dispatch => {
    // dispatch(requestRecipes())
    return fetch('/ex/recipes.xml')
      .then(response => {
        return response.text()
      })
      .then(beerXml => dispatch(receiveRecipes(beerXml)))
  }
}
