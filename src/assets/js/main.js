import Navigate from "./navigate.js"
import Planet from "./planet.js"
import Loading from "./loading.js"
import State from "./state.js"

let url = "https://swapi.co/api/planets/?page=1"

let loadPlanet = async url => {
  Planet.data.url = url
  State.loading.setter({
    isShow: true
  })
  await Planet.method.getPlanets()
}

let loadNavigate = () => {
  Navigate.render()
}

let loading = () => {
  Loading.render()
}

window.addEventListener('load', () => {
  loading()
  loadNavigate()
  loadPlanet(url)
});

let loadDataToTable = response => {
  content.innerHTML = null
  pageCount = _getPage(response.url)
  urlNext = response.next
  urlPrev = response.previous
  let index = pageCount - 1

  if (_pages.length === 0) {
    _pages[0] = response
  } else {
    _pushAtIndex(index, _pages, response)
  }

  for (const planet of _pages[index].results) {
    content.innerHTML += listView.render(planet)
  }
  loading(false)
}

let loadResource = url => {
  loading(true)
  let page = _pages[_getPage(url) - 1]
  if (page && page.results.length > 0) {
    console.log("load from array");
    urlNext = page.urlNext
    urlPrev = page.urlPrev
    url = page.url
    loadDataToTable(page)
  } else {
    console.log("load from url");
    getPlanets(url)
  }
  console.log(_pages);
}