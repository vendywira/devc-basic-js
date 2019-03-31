import HttpLib from "./httplib.js"
import DOMHelper from "./dom-helper.js"

const http = new HttpLib
let $ = DOMHelper

const content = null || $.el('#content')
const loadingEl = null || $.el('#loading')

let url = "https://swapi.co/api/planets/?page=1"
let urlNext, urlPrev, pageCount
let _planets = []
let _pages = []

let getPlanets = url => http.get(url)
  .then(response => {
    response.url = url
    loadDataToTable(response)
  })
  .catch(err => console.log(err))

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

let listView = {
  render: planet => {
    let template = `
        <ul class="content content__list" id="content-list">
          <li>name: ${planet.name}</li>
          <li>rotation period: ${planet.rotation_period}</li>
          <li>orbital period: ${planet.orbital_period}</li>
          <li>diameter: ${planet.diameter}</li>
          <li>climate: ${planet.climate}</li>
        </ul>`
    return template
  }
}

let addUniquePlanet = planet => {
  if (!_planets.includes(planet)) {
    _planets.push(planet)
  }
}

let filterUniquePlanet = (planet, planets) => {
  if (!planets.includes(planet)) {
    planets.push(planet)
  }
}

let loading = isShow => {
  if (isShow) {
    loadingEl.style.display = 'block';
  } else {
    loadingEl.style.display = 'none';
  }
}

let filterByName = searchText => {
  return _planets
    .filter(planet => planet.name.toLowerCase().trim()
      .includes(searchText.toLowerCase().trim()));
}

let filterByRotation = searchText => {
  return _planets
    .filter(planet => planet.rotation_period.toLowerCase().trim()
      .includes(searchText.toLowerCase().trim()));
}

let filterByOrbital = searchText => {
  return _planets
    .filter(planet => planet.orbital_period.toLowerCase().trim()
      .includes(searchText.toLowerCase().trim()));
}

let filterByDiameter = searchText => {
  return _planets
    .filter(planet => planet.diameter.toLowerCase().trim()
      .includes(searchText.toLowerCase().trim()));
}

let filterByClimate = searchText => {
  return _planets
    .filter(planet => planet.climate.toLowerCase().trim()
      .includes(searchText.toLowerCase().trim()));
}

let filterByAll = searchText => {
  let filteredItems = filterByName(searchText)
    .concat(filterByRotation(searchText))
    .concat(filterByOrbital(searchText))
    .concat(filterByDiameter(searchText))
    .concat(filterByClimate(searchText))

  let planets = []
  filteredItems.forEach(planet => {
    filterUniquePlanet(planet, planets)
  })

  return planets
}

let filterBy = (searchText, by) => {
  let planets = []
  content.innerHTML = ""
  switch (by) {
    case 'name':
      planets = filterByName(searchText)
      break
    case 'rotation':
      planets = filterByRotation(searchText)
      break
    case 'orbital':
      planets = filterByOrbital(searchText)
      break
    case 'diameter':
      planets = filterByDiameter(searchText)
      break
    case 'climate':
      planets = filterByClimate(searchText)
      break
    default:
      planets = filterByAll(searchText)
      break
  }
  planets.forEach(e => content.innerHTML += listView.render(e))
}

let _pushAtIndex = (index, arr, obj) => {
  arr[index] = obj
}

let _popAtIndex = (index, arr) => {
  if (arr.length > index) {
    arr.splice(index, 1);
  }
}

let _getPage = url => {
  return Number(url.split("page=")[1])
}

$.action('#filter').keyUp(() => {
  let searchText = $.el('#filter').value
  filterBy(searchText)
})

$.action("#prev").click(() => {
  if (urlPrev !== null) {
    loadResource(urlPrev)
  }
})

$.action("#next").click(() => {
  if (urlNext !== null) {
    loadResource(urlNext)
  }
})

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

// Listen on page load:
window.addEventListener('load', getPlanets(url));