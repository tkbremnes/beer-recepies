import React from 'react';
import SharedStyles from '../../Shared/Styles.js';

const styles = {
    container: SharedStyles.tableRowContainer,

    name: SharedStyles.ingredient.name,
    weight: SharedStyles.ingredient.weight,
    color: SharedStyles.ingredient.color
}

class Fermentable extends React.Component {
    render() {
        return (
            <div style={ styles.container }>
                <p style={ styles.name }>{ this.props.name }</p>
                <p style={ styles.weight }>{ this.props.weight }g</p>
                <p style={ styles.color }>{ this.props.color }°L</p>
            </div>
        )
    }
}

Fermentable.propTypes = {
    name: React.PropTypes.string.isRequired,
    weight: React.PropTypes.number.isRequired,
    color: React.PropTypes.number.isRequired
};

export default Fermentable;
