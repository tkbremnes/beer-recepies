import React, { Component} from 'react';
import { render } from 'react-dom';

import Brauhaus from 'brauhaus';

import { connect } from 'react-redux';
import { Router, Route, Link } from 'react-router'

import { fetchRecipes } from './Actions';
import Paper from 'material-ui/lib/paper';

import Colors from 'material-ui/lib/styles/colors';


class RecipeListDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  getRecipeFromId(id) {
    if (!this.props.recipes || !this.props.recipes.recipes || !this.props.recipes.recipes.forEach) {
      return {name: 'unknown'};
    }
    var res;
    this.props.recipes.recipes.forEach((recipe) => {
      if (recipe.id === id) {
        res = recipe;
      }
    })
    return res;
  }

  getFermentablesFromId(id) {
    if (!this.props.recipes || !this.props.recipes.fermentablesForId || !this.props.recipes.fermentablesForId.forEach) {
      return {name: 'unknown'};
    }

    let res = [];
    this.props.recipes.fermentablesForId.forEach((fermentable) => {
      if (fermentable.id === id) {
        res.push(fermentable);
      }
    })
    return res;
  }
  getSpicesFromId(id) {
    if (!this.props.recipes || !this.props.recipes.spicesForId || !this.props.recipes.spicesForId.forEach) {
      return {name: 'unknown'};
    }
    let res = [];
    this.props.recipes.spicesForId.forEach((spice) => {
      if (spice.id === id) {
        res.push(spice);
      }
    })
    return res;
  }
  getYeastsFromId(id) {
    if (!this.props.recipes || !this.props.recipes.yeastsForId || !this.props.recipes.yeastsForId.forEach) {
      return {name: 'unknown'};
    }
    let res = [];
    this.props.recipes.yeastsForId.forEach((yeast) => {
      if (yeast.id === id) {
        res.push(yeast);
      }
    })
    return res;
  }

  render() {
    const {
      recipes,
      selectedRecipeId
    } = this.props

    const recipe = this.getRecipeFromId(selectedRecipeId);
    const fermentables = this.getFermentablesFromId(selectedRecipeId);
    const spices = this.getSpicesFromId(selectedRecipeId);
    const yeasts = this.getYeastsFromId(selectedRecipeId);

    const abv = recipe.abv && recipe.abv.toPrecision(2);
    const ibu = recipe.ibu && Math.floor(recipe.ibu);

    function renderFermentables(ingredients) {
      if (!ingredients || !ingredients.forEach) {
        return;
      }

      let res = [];
      ingredients.forEach(function (ingredient, pos) {
        const weight = Math.floor(ingredient.weight * 1000);

        res.push(<tr key={pos}>
          <td className="right-aligned">
           { weight }g
          </td>
          <td className="ingredient-name">
            { ingredient.name }
          </td>
          <td
            className="right-aligned"
          >
            { ingredient.color } °L
          </td>
        </tr>)
      })
      return <table>
      <tbody>
        { res }
      </tbody></table>;
    }
    function renderSpices(ingredients) {
      if (!ingredients || !ingredients.forEach) {
        return;
      }

      let res = [];
      ingredients.forEach(function (ingredient, pos) {
        const weight = Math.floor(ingredient.weight * 1000);

        res.push(<tr key={pos}>
          <td className="right-aligned">
           { weight }g
          </td>
          <td className="ingredient-name">
            { ingredient.name }
          </td>
          <td className="right-aligned">
            { ingredient.aa }%
          </td>
        </tr>)
      })
      return <table>
      <tbody>
        { res }
      </tbody></table>;
    }
    function renderYeasts(ingredients) {
      if (!ingredients || !ingredients.forEach) {
        return;
      }

      let res = [];
      ingredients.forEach(function (ingredient, pos) {
        res.push(<tr key={pos}>
          <td>
            { ingredient.name }
          </td>
          <td>
            { ingredient.type }
          </td>
          <td>
            { ingredient.form }
          </td>
          <td>
            { ingredient.attenuation }
          </td>
        </tr>)
      })
      return <table>
      <thead>
        <tr>
          <td>Weight</td>
          <td>Type</td>
          <td>Form</td>
          <td>Attenuation</td>
        </tr>
      </thead>
      <tbody>
        { res }
      </tbody></table>;
    }

    const {
      name,
      author
    } = recipe;

    const color = recipe.color && Math.round(recipe.color);

    function isVowel(letter) {
      letter = letter.toLowerCase();
      return (letter === 'a' ||
        letter === 'e' ||
        letter === 'i' ||
        letter === 'o' ||
        letter === 'u' ||
        letter === 'y')
    }

    const beerStyle = recipe.style;
    let indefArticle = 'A';
    if (beerStyle && isVowel(beerStyle[0])) {
      indefArticle = 'An';
    }

    const Styles = {
      stats: {
        color: {
          background: Brauhaus.srmToCss(color),
          borderRadius: '50%',
          height: '2em',
          width: '2em',
          lineHeight: '2em',
          border: '1px solid rgba(255, 255, 255, .3)',
          fontSize: '.5em',
          color: '#fff'
        },
        ibu: {
          fontSize: '.8em'
        },
        abv: {
          fontSize: '.8em'
        }
      },

      RecipeDetailWrapper: {
        backgroundColor: Colors.teal500
      },

      RecipeDetail: {
        margin: '1em 0 0 0',
        padding: '.5em 1em'
      }
    }

    console.log(indefArticle, beerStyle);

    return <div
      className="recipe-detail detail"
      style={ Styles.RecipeDetailWrapper }
    >
      <Paper
        style={ Styles.RecipeDetail }
      >
        <header>
          <h1 className="name">{ name }</h1>
          <p className="style">{ indefArticle } <span className="text-link">{ beerStyle }</span> by { author }</p>

          <div className="stats">
            <p className="abv" style={ Styles.stats.abv }>{ abv }%</p>
            <p className="ibu" style={ Styles.stats.ibu }>{ ibu } IBU</p>
            <p className="color" style={ Styles.stats.color }>{ color }</p>
          </div>
        </header>

        <h3>Fermentables</h3>
        { renderFermentables(fermentables) }

        <h3>Hops</h3>
        { renderSpices(spices) }

        <h3>Yeast</h3>
        { renderYeasts(yeasts) }

        <p>Primary fermentation: { recipe.primaryDays } days at { recipe.primaryTemp } °C.</p>
        <p>Secondary fermentation: { recipe.secondaryDays } days at { recipe.secondaryTemp } °C.</p>
        <p>Age for { recipe.agingDays } days at { recipe.agingTemp } °C.</p>
        <p>Bottling pressure: { recipe.bottlingPressure }</p>

        <hr />
        <p>Batchsize: { recipe.batchSize }</p>
        <p>Boilsize: { recipe.boilSize }</p>
        <p>Masheff: { recipe.mashEfficiency }%</p>
      </Paper>
    </div>
  }
}

function select(state) {
  return {
    recipes: state.recipes
  }
}

export default connect(select)(RecipeListDetail)

