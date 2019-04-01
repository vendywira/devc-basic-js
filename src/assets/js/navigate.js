// import DOMHelper from "./dom-helper.js"
// import HttpLib from "./httplib.js"
// const $ = DOMHelper
// const http = new HttpLib

let Navigate = {
  name: 'navigate',
  data: {
    url: "https://swapi.co/api/planets/?page=1",
    next: "",
    prev: "",
    page: 1
  },

  template: `
      <input type="text" id="filter">
      <button id="prev">prev</button>
      <button id="next">next</button>
      `,

  method: {
    _pushAtIndex: (index, arr, obj) => {
      arr[index] = obj
    },

    _getPage: url => {
      return Number(url.split("page=")[1])
    },

    filterByName: (searchText, planets) => {
      return planets
        .filter(planet => planet.name.toLowerCase().trim()
          .includes(searchText.toLowerCase().trim()));
    },

    filterByRotation: (searchText, planets) => {
      return planets
        .filter(planet => planet.rotation_period.toLowerCase().trim()
          .includes(searchText.toLowerCase().trim()));
    },

    filterByOrbital: (searchText, planets) => {
      return planets
        .filter(planet => planet.orbital_period.toLowerCase().trim()
          .includes(searchText.toLowerCase().trim()));
    },

    filterByDiameter: (searchText, planets) => {
      return planets
        .filter(planet => planet.diameter.toLowerCase().trim()
          .includes(searchText.toLowerCase().trim()));
    },

    filterByClimate: (searchText, planets) => {
      return planets
        .filter(planet => planet.climate.toLowerCase().trim()
          .includes(searchText.toLowerCase().trim()));
    },

    filterByAll: (searchText, planets) => {
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

    filterBy: (searchText, by) => {
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
      planets.slice(0, 10).forEach(e => content.innerHTML += listView.render(e))
    },

    loadResource: url => {
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
    },
  }
}

export default Navigate;