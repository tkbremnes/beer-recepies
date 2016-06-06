import React from 'react';

import { connect } from 'react-redux';

import FermentablesComposite from '../FermentablesComposite/index.jsx';
import HopsComposite from '../HopsComposite/index.jsx';
import YeastsComposite from '../YeastsComposite/index.jsx';
import BatchSize from '../BatchSize/index.jsx';

import Header from '../Header/index.jsx';
import Loader from '../Loader/index.jsx';
import Link from '../Link/index.jsx';
import Temperature from '../Temperature/index.jsx';

import { fetchRecipe } from '../../Utils/Actions';

const Styles ={
    container: {
        maxWidth: "600px",
        margin: "auto",
        border: "1px solid"
    }
}

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
            return (<Loader />);
        }

        const {
            recipe
        } = this.props;

        return (
            <div style={ Styles.container }>
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

                <p>Mash temp: <Temperature value={ 67 } /></p>
                <p>Fermentation temp: <Temperature value={ 19 } /></p>
                <p>Total boil time: 90 min</p>

                <hr />
                <p>Source: <Link href={ recipe.source } text={ "BYO" } /></p>
                <p>Style: { recipe.style }</p>
                <p>Carb level: {recipe.carbonation.from} - {recipe.carbonation.to}</p>
                <hr />

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
