import React from 'react';

class BatchSize extends React.Component {
    render() {
        return (
            <div>
                <span>Batch size: </span>
                <input value={ this.props.value }/>
                <span>L</span>
            </div>
        )
    }
}

BatchSize.propTypes = {

}

export default BatchSize;
