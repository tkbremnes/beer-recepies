import React from 'react';

class SpicesRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      name: '',
      aa: '',
      type: 'pellets',
      use: 'boil'
    };

    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.handleOnWeightChange = this.handleOnWeightChange.bind(this);
    this.handleOnNameChange = this.handleOnNameChange.bind(this);
    this.handleOnAaChange = this.handleOnAaChange.bind(this);
    this.handleOnUseChange = this.handleOnUseChange.bind(this);
    this.handleOnTypeChange = this.handleOnTypeChange.bind(this);
  }

  handleOnBlur() {
    // store and calculate
    console.log(this.state.weight, this.state.name, this.state.color)
  }

  handleOnWeightChange(event) {
    this.setState({weight: event.target.value});
  }

  handleOnNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleOnAaChange(event) {
    this.setState({aa: event.target.value});
  }

  handleOnTypeChange(event) {
    this.setState({color: event.target.value});
  }

  handleOnUseChange(event) {
    this.setState({use: event.target.value});
  }

  render() {
    return <div className="recipe-row">
      <input
        type="text"
        placeholder="weight"
        className="recipe-input three-digit weight-input"
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
        placeholder="aa"
        className="recipe-input two-digit"
        value={ this.state.aa }
        onBlur={ this.handleOnBlur }
        onChange={ this.handleOnAaChange }
      ></input>

      <select
        name="select"
        className="recipe-input"
        onBlur={ this.handleOnBlur }
        onChange={ this.handleOnUseChange }
      >
        <option value="boil">Boil</option>
        <option value="dry">Dry</option>
      </select>

      <select
        name="select"
        className="recipe-input"
        onBlur={ this.handleOnBlur }
        onChange={ this.handleOnTypeChange }
      >
        <option value="pellets">Pellets</option>
        <option value="whole">Whole cone</option>
      </select>
    </div>
  }
}

export default SpicesRow;
