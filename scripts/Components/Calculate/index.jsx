import React from 'react';

class Calculate extends React.Component{
    render() {
        return (
            <p>Total weight: { this.props.totalWeight }</p>
        )
    }
}
Calculate.propTypes = {
    totalWeight: React.PropTypes.number.isRequired
}

export default Calculate;
