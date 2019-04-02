import DOMHelper from "./dom-helper.js"
import State from "./state.js"


const $ = DOMHelper

let Navigate = {
  name: 'navigate',
  template: `
    <input type="text" id="filter">
    <button id="prev">prev</button>
    <button id="next">next</button>
  `,

  data: {
    pageIndex: 0,
    pages: [],
    filterBy: "",
    searchText: "",
  },

  method: {
    _pushAtIndex: (index, arr, obj) => {
      arr[index] = obj
    },

    _getPage: () => {
      return Number(Navigate.data.url.split("page=")[1])
    },

    _filterByName: (searchText, planets) => {
      return planets
        .filter(planet => planet.name.toLowerCase().trim()
          .includes(searchText.toLowerCase().trim()));
    },

    _filterByRotation: (searchText, planets) => {
      return planets
        .filter(planet => planet.rotation_period.toLowerCase().trim()
          .includes(searchText.toLowerCase().trim()));
    },

    _filterByOrbital: (searchText, planets) => {
      return planets
        .filter(planet => planet.orbital_period.toLowerCase().trim()
          .includes(searchText.toLowerCase().trim()));
    },

    _filterByDiameter: (searchText, planets) => {
      return planets
        .filter(planet => planet.diameter.toLowerCase().trim()
          .includes(searchText.toLowerCase().trim()));
    },

    _filterByClimate: (searchText, planets) => {
      return planets
        .filter(planet => planet.climate.toLowerCase().trim()
          .includes(searchText.toLowerCase().trim()));
    },

    _filterByAll: (searchText, planets) => {
      let filteredItems = filterByName(searchText, planets)
        .concat(filterByRotation(searchText, planets))
        .concat(filterByOrbital(searchText, planets))
        .concat(filterByDiameter(searchText, planets))
        .concat(filterByClimate(searchText, planets))

      let finalFilteredItems = []
      filteredItems.forEach(planet => {
        filterUniquePlanet(planet, finalFilteredItems)
      })

      return finalFilteredItems
    },

    filterBy: () => {
      let searchText = Navigate.data.searchText
      let by = Navigate.data.filterBy
      let planets = _pages.flatMap(page => page.results)
      console.log(planets);
      content.innerHTML = ""
      switch (by) {
        case 'name':
          planets = filterByName(searchText, planets)
          break
        case 'rotation':
          planets = filterByRotation(searchText, planets)
          break
        case 'orbital':
          planets = filterByOrbital(searchText, planets)
          break
        case 'diameter':
          planets = filterByDiameter(searchText, planets)
          break
        case 'climate':
          planets = filterByClimate(searchText, planets)
          break
        default:
          planets = filterByAll(searchText, planets)
          console.log(planets);
          break
      }
      return planets.slice(0, 10)
    },

    _filterUniquePlanet: (planet, planets) => {
      if (!planets.includes(planet)) {
        planets.push(planet)
      }
    },

    prev: () => {
      if (urlPrev !== null) {
        loadResource(urlPrev)
      }
    },

    next: () => {
      if (urlNext !== null) {
        loadResource(urlNext)
      }
    },

    search: () => {
      Navigate.data.searchText = $.el('#filter').value
      Navigate.data.filterBy = ""
      filterBy()
    }
  },

  render: () => {
    $.document(Navigate.name).replace(Navigate.template)
  }
}

export default Navigate;