import React from 'react';

class FermentablesRow extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.handleOnWeightChange = this.handleOnWeightChange.bind(this);
    this.handleOnNameChange = this.handleOnNameChange.bind(this);
    this.handleOnColorChange = this.handleOnColorChange.bind(this);
  }

  handleOnBlur() {
    // console.log(this.state.weight, this.state.name, this.state.color)
  }

  handleOnChange(updatedFermentable) {
    updatedFermentable.id = this.props.fermentable.id;
    this.props.onFermentableChange(undefined, updatedFermentable)
  }

  handleOnWeightChange(event) {
    this.handleOnChange({
      weight: event.target.value,
      name: this.props.fermentable.name,
      color: this.props.fermentable.color
    });

    this.props.onWeightChange();
  }

  handleOnNameChange(event) {
    this.handleOnChange({
      weight: this.props.fermentable.weight,
      name: event.target.value,
      color: this.props.fermentable.color
    });
  }

  handleOnColorChange(event) {
    this.handleOnChange({
      weight: this.props.fermentable.weight,
      name: this.props.fermentable.name,
      color: event.target.value
    });
  }

  render() {
    return <div className="recipe-row">
      <div
        className="weight-input-wrapper"
      >
        <input
          type="text"
          placeholder="Weight"
          className="recipe-input weight-input five-digit"
          value={ this.props.fermentable.weight }
          onBlur={ this.handleOnBlur }
          onChange={ this.handleOnWeightChange }
        ></input>
        <span className="denominator">g</span>
      </div>
      <input
        type="text"
        placeholder="Name"
        className="recipe-input fill-width"
        value={ this.props.fermentable.name }
        onBlur={ this.handleOnBlur }
        onChange={ this.handleOnNameChange }
      ></input>
      <input
        type="text"
        placeholder="Color"
        className="recipe-input three-digit"
        value={ this.props.fermentable.color }
        onBlur={ this.handleOnBlur }
        onChange={ this.handleOnColorChange }
      ></input>
    </div>
  }
}

export default FermentablesRow;
