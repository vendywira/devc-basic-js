import HttpLib from "./httplib.js"
import DOMHelper from "./dom-helper.js"

const http = new HttpLib
let $ = DOMHelper

let Planet = {
  name: 'planet',
  data: {

  },

  template: (planets) => {
    let view = ""
    planets.forEach(planet => {
      view += `<ul class="content content__list" id="content-list">
                <li>name: ${planet.name}</li>
                <li>rotation period: ${planet.rotation_period}</li>
                <li>orbital period: ${planet.orbital_period}</li>
                <li>diameter: ${planet.diameter}</li>
                <li>climate: ${planet.climate}</li>
              </ul>`
    })
    return `<div class="page page__content" id="content">${view}</div>`
  },

  method: {
    getPlanets: url => http.get(url)
      .then(response => {
        response.url = url
        Planet.render(response)
      })
      .catch(err => console.log(err)),
  },

  render: response => {
    let view = Planet.template(response.results)
    $.document(Planet.name).replace(view)
  }
}

export default Planet;