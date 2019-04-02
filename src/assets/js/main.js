import Navigate from "./navigate.js"
import Planet from "./planet.js"
import Loading from "./loading.js"
import Store from "./store.js"
import DOMHelper from "./domhelper.js"

const $ = DOMHelper

let loadPlanet = () => {
  showLoading()
  Planet.method.loadResource()
}

let loadNavigate = () => {
  Navigate.render()
}

let showLoading = () => {
  Store.state.loading.setter({
    isShow: true
  })
  Loading.render()
}

let goNextPage = () => {
  Navigate.method.next()
  loadPlanet()
  navigate()
}

let goPreviousPage = () => {
  Navigate.method.previous()
  loadPlanet()
  navigate()
}

let navigate = () => {
  $.document("#next").click(() => goNextPage())
  $.document("#prev").click(() => goPreviousPage())

  let filterBy = $.el("#filterBy")
  $.document(filterBy).change(() => {
    Store.state.navigate.setter({
      filterBy: filterBy.options[filterBy.selectedIndex].value
    })
  })

  let searchTextEl = $.el("#searchText")
  $.document(searchTextEl).keyUp(() => {
    Store.state.navigate.setter({
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