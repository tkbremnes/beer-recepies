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
        maxWidth: "640px",
        margin: "auto",
        padding: "0 20px"
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

        const SubHeaderStyle = {
            flavorText: {
                display: "flex",
                flexDirection: "row",
                // textTransform: 'uppercase'

            },
            stats: {
                stat: {
                    value: {},
                    desc: {}
                }
            },
            container: {
                // borderTop: "3px solid #000",
                borderBottom: "3px solid #000",

                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',

                padding: '6px 0',
            },
            statsWrapper: {
                display: 'flex',
                flexDirection: 'row'
            },
            stat: {
                width: '60px',
                borderLeft: '2px solid #000'
            },
            desc: {
                textAlign: 'center',
            },
            value: {
                textAlign: 'center',
            }
        }

        return (
            <div style={ Styles.container }>
                <div style={ SubHeaderStyle.container }>
                    <Header
                        text={ recipe.name }
                        uppercase={ true }
                    />

                    <div style={ SubHeaderStyle.statsWrapper }>
                        <div style={ SubHeaderStyle.stat }>
                            <div style={ SubHeaderStyle.desc }>ABV</div>
                            <div style={ SubHeaderStyle.value }>5.4%</div>
                        </div>
                        <div style={ SubHeaderStyle.stat }>
                            <div style={ SubHeaderStyle.desc }>IBU</div>
                            <div style={ SubHeaderStyle.value }>25</div>
                        </div>
                        <div style={ SubHeaderStyle.stat }>
                            <div style={ SubHeaderStyle.desc }>OG</div>
                            <div style={ SubHeaderStyle.value }>1.054</div>
                        </div>
                    </div>
                </div>
                <p>Source: <Link href={ recipe.source } text={ "BYO" } /></p>

                <BatchSize
                    value={ 20 }
                />
                <p>Mash temp: <Temperature value={ 67 } /></p>
                <p>Fermentation temp: <Temperature value={ 19 } /></p>
                <p>Total boil time: 90 min</p>
                <p>Style: { recipe.style }</p>
                <p>Carb level: {recipe.carbonation.from} - {recipe.carbonation.to}</p>
                <hr />

                <Header
                    level={ 2 }
                    text="Ingredients"
                    uppercase={ true }
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
