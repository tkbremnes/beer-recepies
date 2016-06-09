import React from 'react';
import SharedStyles from '../../Shared/Styles.js';

const styles = {
    container: SharedStyles.tableRowContainer,

    name: SharedStyles.ingredient.name,
    weight: SharedStyles.ingredient.weight,
    time: SharedStyles.ingredient.color,
    aa: SharedStyles.ingredient.aa
}

class Hop extends React.Component {
    render() {
        return (
            <div style={ styles.container }>
                <p style={ styles.name }>{ this.props.name }</p>
                <p style={ styles.weight }>{ this.props.weight }g</p>
                <p style={ styles.aa }>{ this.props.aa }%</p>
                <p style={ styles.time }>{ this.props.time } min</p>
            </div>
        )
    }
}

Hop.propTypes = {
    name: React.PropTypes.string.isRequired,
    weight: React.PropTypes.number.isRequired,
    time: React.PropTypes.string.isRequired,
    aa: React.PropTypes.number.isRequired
};

export default Hop;
