import React from 'react';
import Brauhaus from 'brauhaus';

class RecipeList extends React.Component {
  render() {
    let recipes = [];

    this.props.recipes.forEach(function (recipe, pos) {
      recipes.push(<Recipe recipe={recipe} key={pos} />);
    });

    return <div> { recipes } </div>
  }
}

class Recipe extends React.Component {
  render() {
    return <article className="card clickable">
        <header>{ this.props.recipe.name }</header>
        <table>
          <tbody>
            <tr>
              <th>ABV</th>
              <td>{ this.props.recipe.abv.toPrecision(2) }%</td>
            </tr>
            <tr>
              <th>IBU</th>
              <td>{ Math.round(this.props.recipe.ibu) }</td>
            </tr>
          </tbody>
        </table>
      </article>
  }
}

class CreateRecipeView extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    console.log(e);

    const form = e.target;
    const efficiency = 78;

    let r = new Brauhaus.Recipe({
      name: form[0].value,
      description: 'A new test beer using Brauhaus.js!',
      batchSize: 20.0,
      boilSize: 10.0,
    });

    r.add('fermentable', {
      weight: form[1].value / 1000,
      color: form[2].value,
      name: form[3].value,
      yield: efficiency,
    });

    r.add('fermentable', {
      weight: form[4].value / 1000,
      color: form[5].value,
      name: form[6].value,
      yield: efficiency,
    });

    r.add('hop', {
      name: form[7].value,
      weight: form[8].value / 1000,
      aa: form[9].value,
      use: form[10].value,
      form: form[11].value
    });

    r.add('yeast', {
      name: form[12].value,
      type: form[13].value,
      form: form[14].value,
      attenuation: form[15].value,
    });

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

    r.calculate();
    console.log(r)
  };

  render() {
    return <div className="card main-view"><form onSubmit={ this.handleSubmit }>
      <input type="text" placeholder="Name of brew" className="beer-name-input"></input>

      <div className="recipe-type-wrapper">
        <p>Fermentables</p>

        <div className="recipe-row">
          <input type="text" placeholder="weight" className="weight-input five-digit"></input>
          <input type="text" placeholder="name" className="fill-width"></input>
          <input type="text" placeholder="color" className="three-digit"></input>
        </div>

        <div className="recipe-row">
          <input type="text" placeholder="weight" className="weight-input five-digit"></input>
          <input type="text" placeholder="name" className="fill-width"></input>
          <input type="text" placeholder="color" className="three-digit"></input>
        </div>
      </div>

      <div className="recipe-type-wrapper">
        <p>Hops</p>

        <div className="recipe-row">

          <input type="text" placeholder="weight" className="three-digit"></input>
          <input type="text" placeholder="name" className="fill-width"></input>
          <input type="text" placeholder="aa" className="two-digit"></input>

          <select name="select">
            <option value="boil">Boil</option>
            <option value="dry">Dry</option>
          </select>

          <select name="select">
            <option value="pellets">Pellets</option>
            <option value="whole">Whole cone</option>
          </select>
        </div>
      </div>

      <div className="recipe-type-wrapper">
        <p>Yeast</p>

        <div className="recipe-row">

          <input type="text" placeholder="name" className="fill-width"></input>

          <select name="select">
            <option value="ale">Ale</option>
            <option value="lager">Lager</option>
            <option value="other">Other</option>
          </select>

          <select name="select">
            <option value="liquid">Liquid</option>
            <option value="dry">Dry</option>
          </select>

          <input type="text" placeholder="attenuation" className="two-digit"></input>
        </div>
      </div>

      <div>
        <input type="submit" value="Save"></input>
      </div>
    </form></div>
  }
}

class BeerView extends React.Component {
  render() {
    return <div>{ this.props.recipe.name }</div>
  }
}

class RecipeScraper extends React.Component {
  render() {
    const url = 'temp';

    window.fetch('http://localhost:9000/kolsch-altbier/item/1881-koelsch-style-profile')
      .then(function (res) {
        return res.text();
      })
      .then(function (body) {
        var parser = new DOMParser();
        var htmlDoc = parser.parseFromString(body, "text/html");

        var content = htmlDoc.querySelector('#content-main')
          .querySelector('.itemBody')
          .querySelector('.itemFullText');

        console.log(content);
      });
  }
}

const staticRecipes = [
  {
    abv: 6.667858048422881,
    abw: 5.2172719080530054,
    author: "danielgtaylor",
    batchSize: 18.92705,
    boilSize: 11.35623,
    buToGu: 0.2947789199571786,
    bv: 0.7577864266251388,
    calories: 195.00334749781888,
    color: 10.100657561905829,
    fermentables: [
      {
        color: 10,
        late: false,
        name: "Munich liquid extract",
        weight: 2.26795,
        yield: 75.7346258709,
      },
      {
        color: 3,
        late: false,
        name: "Wheat liquid extract",
        weight: 1.36077,
        yield: 75.7346258709,
      },
      {
        color: 1,
        late: false,
        name: "Pilsner malt (steeped)",
        weight: 0.226795,
        yield: 73.5707794175,
      },
      {
        color: 34,
        late: false,
        name: "Caramunich (steeped)",
        weight: 0.226795,
        yield: 75.7346258709,
      },
      {
        color: 19,
        late: false,
        name: "Aromatic (steeped)",
        weight: 0.1133975,
        yield: 73.5707794175,
      }
    ],
    fg: 1.0096479445748985,
    fgPlato: 2.470248099146545,
    ibu: 17.775066759970656,
    mashEfficiency: 75,
    name: "Aramis Saison",
    og: 1.0602996535931157,
    ogPlato: 14.81185411741032,
    price: 33.94436787172289,
    primingCornSugar: 0.12961975028595002,
    primingDme: 0.17271702105852554,
    primingHoney: 0.15877900931027733,
    primingSugar: 0.11794749177270022,
    realExtract: 4.701610467248635,
    spices: [
      {
        aa: 8.1,
        form: "Pellet",
        name: "Aramis hops",
        use: "Boil",
        weight: 0.0212615166549,
      },
      {
        aa: 8.1,
        form: "Pellet",
        name: "Aramis hops",
        use: "Boil",
        weight: 0.00708717221828,
      },
    ],
    // style: Object,
    // timelineMap: Object,
    yeast: [
      {
        attenuation: 84,
        form: "Liquid",
        name: "WLP560 - Classic Saison Ale Blend",
        type: "Ale"
      }
    ]
  }
]

// React.render(<RecipeList recipes={staticRecipes} />, document.getElementById('container'));
// React.render(<BeerView recipe={staticRecipes[0]} />, document.getElementById('container'));
// React.render(<CreateRecipeView />, document.getElementById('container'));
React.render(<RecipeScraper />, document.getElementById('container'));
