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

  let filterBy = $.el("#filterBy")
  $.document(filterBy).change(() => {
    State.navigate.setter({
      filterBy: filterBy.options[filterBy.selectedIndex].value
    })
    console.log(filterBy.options[filterBy.selectedIndex].value);
  })

  let searchTextEl = $.el("#searchText")
  console.log(searchTextEl);
  $.document(searchTextEl).keyUp(() => {
    State.navigate.setter({
      searchText: searchTextEl.value
    })
    Navigate.method.search()
    Planet.render()
  })
}

window.addEventListener('load', () => {
  loadNavigate()
  loadPlanet()
  navigate()
});