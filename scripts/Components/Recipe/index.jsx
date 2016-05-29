import React from 'react';

import { connect } from 'react-redux';

import FermentablesComposite from '../FermentablesComposite/index.jsx';
import HopsComposite from '../HopsComposite/index.jsx';
import YeastsComposite from '../YeastsComposite/index.jsx';
import BatchSize from '../BatchSize/index.jsx';

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
        const {
            recipe
        } = this.props;

        return (
            <div>
                <BatchSize
                    value={ 20 }
                />

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
