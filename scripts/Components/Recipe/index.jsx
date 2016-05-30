import React from 'react';

import { connect } from 'react-redux';

import FermentablesComposite from '../FermentablesComposite/index.jsx';
import HopsComposite from '../HopsComposite/index.jsx';
import YeastsComposite from '../YeastsComposite/index.jsx';
import BatchSize from '../BatchSize/index.jsx';

import Header from '../Header/index.jsx';
import Loader from '../Loader/index.jsx';

import { fetchRecipe } from '../../Utils/Actions';

class Recipe extends React.Component {
    constructor(props) {
      super(props);
      this.onFermentableAdded = this.onFermentableAdded.bind(this);
    }

    onFermentableAdded(fermentable) {
        this.props.dispatch({type: 'add_fermentable', fermentable});
    }

    componentWillMount() {
        this.props.dispatch(fetchRecipe());
    }

    render() {
        if(!this.props.recipe.name) {
            return (<Loader></Loader>);
        }

        const {
            recipe
        } = this.props;

        return (
            <div>
                <Header
                    text={ recipe.name }
                />

                <BatchSize
                    value={ 20 }
                />
                <div>
                    <p>Brewhouse efficiency</p>
                </div>

                <hr />

                <p>Mash temp: 67</p>
                <p>Fermentation temp: 19</p>
                <p>Total boil time: 90</p>
                <p>Carb level: 2-2.5</p>

                <FermentablesComposite
                    onFermentableAdded={ this.onFermentableAdded }
                    fermentables={ recipe.fermentables }
                />

                <HopsComposite
                    hops={ recipe.hops }
                />

                <YeastsComposite
                    yeasts={ recipe.yeasts }
                />
            </div>
        )
    }
}
Recipe.propTypes = {
    // recipe: React.PropTypes.object.isRequired
}

function select(state) {
    return {
        recipe: state.recipe
    }
}

export default connect(select)(Recipe);
