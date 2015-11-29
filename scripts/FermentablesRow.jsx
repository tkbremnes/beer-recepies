import React from 'react';

class FermentablesRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      name: '',
      color: ''
    };

    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.handleOnWeightChange = this.handleOnWeightChange.bind(this);
    this.handleOnNameChange = this.handleOnNameChange.bind(this);
    this.handleOnColorChange = this.handleOnColorChange.bind(this);
  }

  handleOnBlur() {
    // store and calculate
    console.log(this.state.weight, this.state.name, this.state.color)
  }

  handleOnWeightChange(event) {
    this.setState({weight: event.target.value});
  }

  handleOnNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleOnColorChange(event) {
    this.setState({color: event.target.value});
  }

  render() {
    return <div className="recipe-row">
      <input
        type="text"
        placeholder="Weight"
        className="recipe-input weight-input five-digit"
        value={ this.state.weight }
        onBlur={ this.handleOnBlur }
        onChange={ this.handleOnWeightChange }
      ></input>
      <input
        type="text"
        placeholder="name"
        className="recipe-input fill-width"
        value={ this.state.name }
        onBlur={ this.handleOnBlur }
        onChange={ this.handleOnNameChange }
      ></input>
      <input
        type="text"
        placeholder="color"
        className="recipe-input three-digit"
        value={ this.state.color }
        onBlur={ this.handleOnBlur }
        onChange={ this.handleOnColorChange }
      ></input>
    </div>
  }
}

export default FermentablesRow;
