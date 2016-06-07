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
    outerContainer: {
    },
    innerContainer: {
        maxWidth: "640px",
        margin: "auto",
        padding: "0 10px"
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
        if(!this.props.recipe.entities) {
            return (<Loader />);
        }

        function collectionToArray(collection) {
            return Object.keys(collection).map((key) => {
                return collection[key]
            })[0];
        }
        const recipe = collectionToArray(this.props.recipe.entities.recipe);

        const fermentables = this.props.recipe.entities.fermentables;
        const hops = this.props.recipe.entities.hops;
        const yeasts = this.props.recipe.entities.yeasts;
        console.log(recipe);

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
                padding: '18px 0 16px 0',
                backgroundColor: '#f04e0d',
                marginBottom: '6px',
                borderTop: '4px solid',
                borderBottom: '4px solid',
            },
            statsWrapper: {
                display: 'flex',
                flexDirection: 'row'
            },
            startStat: {
                width: '60px',
                fontFamily: '"Slabo 27px"'
            },
            stat: {
                width: '60px',
                borderLeft: '2px solid #000',
            },
            desc: {
                textAlign: 'center',
                color: 'white',
                fontFamily: '"Slabo 27px"'
            },
            value: {
                textAlign: 'center',
                fontFamily: '"Slabo 27px"'
            },
            nameWrapper: {
                flexGrow: 1,
                borderBottom: '3px solid #000',
                paddingBottom: '4px'
            },
            wrapperRapper: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                maxWidth: '640px',
                padding: '0 10px',
                margin: 'auto'
            }
        }

        return (
            <div style={ Styles.outerContainer } >
                <div style={ SubHeaderStyle.container }>
                    <div style={ SubHeaderStyle.wrapperRapper }>
                    <div style={ SubHeaderStyle.nameWrapper }>
                        <Header
                        text={ recipe.name }
                        uppercase={ true }
                        impact={ true }
                        color="#fff"
                        />
                    </div>

                    <div style={ SubHeaderStyle.statsWrapper }>
                        <div style={ SubHeaderStyle.startStat }>
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
                </div>

            <div style={ Styles.innerContainer }>
                {/*<Header
                    level={ 2 }
                    text="Ingredients"
                    uppercase={ true }
                    impact={ true }
                />*/}

                <FermentablesComposite
                    onFermentableAdded={ this.onFermentableAdded }
                    fermentables={ fermentables }
                />

                <HopsComposite
                    hops={ hops }
                />

                <YeastsComposite
                    yeasts={ yeasts }
                />

                <div style={ { display: 'none' } }>

                    <BatchSize
                        value={ 20 }
                    />

                    <p>Source: <Link href={ recipe.source } text={ "BYO" } /></p>
                    <p>Mash temp: <Temperature value={ 67 } /></p>
                    <p>Fermentation temp: <Temperature value={ 19 } /></p>
                    <p>Total boil time: 90 min</p>
                    <p>Style: { recipe.style }</p>
                    <p>Carb level: {recipe.carbonation.from} - {recipe.carbonation.to}</p>
                </div>
            </div>
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
