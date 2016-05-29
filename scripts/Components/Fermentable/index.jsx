import React from 'react';

class Fermentable extends React.Component {
    render() {
        return (
            <div>
                <p>{ this.props.name }</p>
                <p>{ this.props.weight }</p>
                <p>{ this.props.color }</p>
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
