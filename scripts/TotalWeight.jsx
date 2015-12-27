import React from 'react';
import { createStore } from 'redux';

const Events = {
  CHANGE_FERMENTABLE_WEIGHT: 'change_fermentable_weight',
  CHANGE_FERMENTABLE_NAME: 'change_fermentable_name',
  CHANGE_FERMENTABLE_COLOR: 'change_fermentable_color'
}


class FermentablesRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      total: { this.props.weight.SI }g
    </div>
  }
}

export default FermentablesRow;
