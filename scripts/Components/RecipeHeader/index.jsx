import React from 'react';

import Header from '../Header/index.jsx';

const Styles = {
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
        flexDirection: 'row',
        // width: '100%',
        // justifyContent: 'flex-end',
        // marginTop: '8px',
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


class RecipeHeader extends React.Component {
    render() {
        function formatAbv(abv) {
            return abv.toPrecision(2);
        }

        const {
            abv,
            ibu,
            og,
            name
        } = this.props;

        return (
            <div style={ Styles.container }>
                <div style={ Styles.wrapperRapper }>
                <div style={ Styles.nameWrapper }>
                    <Header
                    text={ name }
                    uppercase={ true }
                    impact={ true }
                    color="#fff"
                    />
                </div>

                <div style={ Styles.statsWrapper }>
                    <div style={ Styles.startStat }>
                        <div style={ Styles.desc }>ABV</div>
                        <div style={ Styles.value }>{ formatAbv(abv) }%</div>
                    </div>
                    <div style={ Styles.stat }>
                        <div style={ Styles.desc }>IBU</div>
                        <div style={ Styles.value }>{ ibu }</div>
                    </div>
                    <div style={ Styles.stat }>
                        <div style={ Styles.desc }>OG</div>
                        <div style={ Styles.value }>{ og }</div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

RecipeHeader.propTypes = {

}

export default RecipeHeader;
