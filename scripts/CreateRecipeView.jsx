import React, { Component, PropTypes } from 'react';
import Brauhaus from 'brauhaus';

import { connect } from 'react-redux'

import Fermentables from './Fermentables.jsx';
import Spices from './Spices.jsx';
import YeastRow from './YeastRow.jsx';
import TotalWeight from './TotalWeight.jsx';

class CreateRecipeView extends React.Component {
  constructor(props) {
    super(props);
    this.dispatcher = this.dispatcher.bind(this);
    this.saveRecipe = this.saveRecipe.bind(this);
  }

  saveRecipe(e) {
    e.preventDefault();
    this.dispatcher({type: 'save_recipe'});
  };

  dispatcher(event) {
    this.props.dispatch(event);
  }

  render() {
    const {
      dispatch,
      fermentables,
      fermentablesMeta
    } = this.props;

    return <div className="card main-view"><form onSubmit={ this.handleSubmit }>
      <input
        type="text"
        placeholder="Name of brew"
        className="beer-name-input recipe-input"
        tabIndex="1"
        autoFocus="true"
      ></input>

      <input
        type="text"
        placeholder="Type"
        className="type-input recipe-input"
      ></input>

      <div className="recipe-type-wrapper">
        <h1>Fermentables</h1>

        <Fermentables
          fermentables={
            fermentables
          }
          onFermentableChange={ this.dispatcher }
          onTotalWeightChange={ this.dispatcher }
          onAddFermentable={ this.dispatcher }
        ></Fermentables>
        <TotalWeight weight={ fermentablesMeta.totalWeight }></TotalWeight>
      </div>

      <div className="recipe-type-wrapper">
        <h1>Hops</h1>

        <Spices></Spices>
      </div>

      <div className="recipe-type-wrapper">
        <h1>Yeast</h1>

        <YeastRow></YeastRow>
      </div>

      <div>
        <button onClick={ this.saveRecipe }>Save</button>
      </div>
    </form>
  </div>
  }
}


// CreateRecipeView.propTypes = {
//   fermentables: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     weight: PropTypes.string.isRequired,
//     color: PropTypes.string.isRequired
//   }).isRequired).isRequired,
// }


function select(state) {
  return {
    fermentables: state.fermentablesForId,
    fermentablesMeta: state.fermentablesMetaForId
  }
}

export default connect(select)(CreateRecipeView)

