import React from 'react';

let batchSizeValue = 0;
class BatchSize extends React.Component {
    constructor(props) {
        super(props);
        this.onBatchSizeChange = this.onBatchSizeChange.bind(null, this);
    }

    onBatchSizeChange(event) {
        batchSizeValue = event.target.value;
    }

    componentWillMount() {

    }

    render() {
        return (
            <div>
                <span>Batch size: </span>
                <input
                    value={ batchSizeValue }
                    onChange={ this.onBatchSizeChange }
                />
                <span>L</span>
            </div>
        )
    }
}

BatchSize.propTypes = {

}

export default BatchSize;
