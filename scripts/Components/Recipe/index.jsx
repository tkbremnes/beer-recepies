import React from 'react';

import { connect } from 'react-redux';

import FermentablesComposite from '../FermentablesComposite/index.jsx';
import HopsComposite from '../HopsComposite/index.jsx';
import YeastsComposite from '../YeastsComposite/index.jsx';

import { fetchRecipe } from '../../Utils/Actions';

class Recipe extends React.Component {
    constructor(props) {
      super(props);
    }

    componentWillMount() {
        this.props.dispatch(fetchRecipe());
    }

    componentDidMount() {
        console.log('woaw');
    }

    render() {
        const {
            recipe
        } = this.props;
        console.log(this.props);

        return (
            <div>
                <FermentablesComposite
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
