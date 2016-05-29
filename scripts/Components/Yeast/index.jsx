import React from 'react';
import SharedStyles from '../../Shared/Styles.js';

class Yeast extends React.Component {
    render() {
        return (
            <div style={ SharedStyles.tableRowContainer }>
                <p>{ this.props.name }</p>
            </div>
        )
    }
}

export default Yeast;
