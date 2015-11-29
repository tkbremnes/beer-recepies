import React from 'react';

class YeastRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      attenuation: '',
      form: 'liquid',
      type: 'ale'
    };

    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.handleOnNameChange = this.handleOnNameChange.bind(this);
    this.handleOnFormChange = this.handleOnFormChange.bind(this);
    this.handleOnTypeChange = this.handleOnTypeChange.bind(this);
    this.handleOnAttenuationChange = this.handleOnAttenuationChange.bind(this);
  }

  handleOnBlur() {
    // store and calculate
    console.log(this.state.weight, this.state.name, this.state.color)
  }

  handleOnNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleOnTypeChange(event) {
    this.setState({color: event.target.value});
  }

  handleOnFormChange(event) {
    this.setState({form: event.target.value});
  }

  handleOnAttenuationChange(event) {
    this.setState({attenuation: event.target.value});
  }

  render() {
    return <div className="recipe-row">
      <input
        type="text"
        placeholder="name"
        className="recipe-input fill-width"
        value={ this.state.name }
        onBlur={ this.handleOnBlur }
        onChange={ this.handleOnNameChange }
      ></input>

      <select
        name="select"
        className="recipe-input"
        onBlur={ this.handleOnBlur }
        onChange={ this.handleOnFormChange }
      >
        <option value="liquid">Liquid</option>
        <option value="dry">Dry</option>
      </select>

      <select
        name="select"
        className="recipe-input"
        onBlur={ this.handleOnBlur }
        onChange={ this.handleOnTypeChange }
      >
        <option value="ale">Ale</option>
        <option value="lager">Lager</option>
        <option value="other">Other</option>
      </select>

      <input
        type="text"
        placeholder="attenuation"
        className="two-digit recipe-input"
        value={ this.state.attenuation }
        onBlur={ this.handleOnBlur }
        onChange={ this.handleOnAttenuationChange }

      ></input>

    </div>
  }
}

export default YeastRow;
