import Navigate from "./navigate.js"
import Planet from "./planet.js"
import Loading from "./loading.js"
import State from "./state.js"
import DOMHelper from "./dom-helper.js"

const $ = DOMHelper

let next = null
let prev = null

let loadPlanet = () => {
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

let goNextPage = () => {
  Navigate.method.next()
  loadPlanet()
  navigate()
  console.log(next, prev);
}

let goPreviousPage = () => {
  Navigate.method.prev()
  loadPlanet()
  navigate()
  console.log(next, prev);
}

let navigate = () => {
  $.document("#next").click(() => goNextPage())
  $.document("#prev").click(() => goPreviousPage())
}

window.addEventListener('load', () => {
  loadNavigate()
  loadPlanet()
  navigate()
});