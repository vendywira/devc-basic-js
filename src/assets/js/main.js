import Planet from "./component/planet.js"
import DOMHelper from "./lib/domhelper.js"

const $ = DOMHelper

let loadPlanet = () => {
  Planet.method.loadResource()
}

window.addEventListener('load', () => loadPlanet())