import React from 'react';
import Brauhaus from 'brauhaus';

import FermentablesRow from './FermentablesRow.jsx';
import SpicesRow from './SpicesRow.jsx';
import YeastRow from './YeastRow.jsx';

class CreateRecipeView extends React.Component {
  handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const efficiency = 78;

    let r = new Brauhaus.Recipe({
      name: form[0].value,
      description: 'A new test beer using Brauhaus.js!',
      batchSize: 20.0,
      boilSize: 10.0,
    });
    // r.add('fermentable', {
    //   weight: form[1].value / 1000,
    //   color: form[2].value,
    //   name: form[3].value,
    //   yield: efficiency,
    // });

    // r.add('hop', {
    //   name: form[7].value,
    //   weight: form[8].value / 1000,
    //   aa: form[9].value,
    //   use: form[10].value,
    //   form: form[11].value
    // });

    // r.add('yeast', {
    //   name: form[12].value,
    //   type: form[13].value,
    //   form: form[14].value,
    //   attenuation: form[15].value,
    // });

    r.mash = new Brauhaus.Mash({
      name: 'My mash',
      ph: 5.4
    });

    r.mash.addStep({
      name: 'Saccharification',
      type: 'Infusion',
      time: 60,
      temp: 68,
      waterRatio: 2.75,
    });
  };

  render() {
    return <div className="card main-view"><form onSubmit={ this.handleSubmit }>
      <input type="text" placeholder="Name of brew" className="beer-name-input recipe-input" tabIndex="1" autoFocus="true"></input>

      <div className="recipe-type-wrapper">
        <h1>Fermentables</h1>

        <FermentablesRow></FermentablesRow>
      </div>

      <div className="recipe-type-wrapper">
        <h1>Hops</h1>

        <SpicesRow></SpicesRow>
      </div>

      <div className="recipe-type-wrapper">
        <h1>Yeast</h1>

        <YeastRow></YeastRow>
      </div>

      <div>
        <input type="submit" value="Save"></input>
      </div>
    </form>
  </div>
  }
}

export default CreateRecipeView;
