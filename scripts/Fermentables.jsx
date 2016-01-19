import React, { Component } from 'react';
import { render } from 'react-dom';

import FermentablesRow from './FermentablesRow.jsx';

class Fermentables extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddFermentable = this.handleAddFermentable.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
  }


  handleOnChange(id, value) {
    var ev = {
      type: 'fermentable_changed',
      value: value,
      id: id
    }

    this.props.onFermentableChange(ev);
  }

  handleAddFermentable(e) {
    e.preventDefault();
    var ev = {
      type: 'add_fermentable'
    }
    this.props.onAddFermentable(ev);
  }

  handleWeightChange() {
    var totalWeight = 0;

    this.props.fermentables.forEach(function (_f) {
      totalWeight += parseInt(_f.weight);
    });
    console.log('totalWeight', totalWeight);

    this.props.onTotalWeightChange({
      type: 'total_weight_changed',
      value: totalWeight
    });
  }

  render() {
    var _fermentables = this.props.fermentables.map((fermentable, index) => {
      return (
        <FermentablesRow
          onFermentableChange={ this.handleOnChange }
          onWeightChange={ this.handleWeightChange }
          fermentable={ fermentable }
          key={ fermentable.id }
        ></FermentablesRow>
      );
    });

    return <div>
      { _fermentables }
      <button onClick={ this.handleAddFermentable }>Add fermentable</button>
    </div>
  }
}

export default Fermentables;

