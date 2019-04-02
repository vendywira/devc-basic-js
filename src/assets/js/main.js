import Navigate from "./navigate.js"
import Planet from "./planet.js"
import Loading from "./loading.js"
import State from "./state.js"

let loadPlanet = async () => {
  showLoading()
  Planet.method.loadResource()
}

let loadNavigate = () => {
  Navigate.render()
}

let showLoading = () => {
  State.loading.setter({
    isShow: true
  })
  Loading.render()
}

window.addEventListener('load', () => {
  loadNavigate()
  loadPlanet()
});