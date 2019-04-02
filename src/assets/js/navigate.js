import DOMHelper from "./dom-helper.js"
import State from "./state.js"


const $ = DOMHelper

let Navigate = {
  name: 'navigate',
  template: (data) => {
    let view = `
    <div id='navigate'>
      <input type="text" id="filter">
      <button id="prev" ${data.posiblePrev ? '' : 'disabled'}'>prev</button>
      <button id="next" ${data.posibleNext ? '' : 'disabled'}>next</button>
    `
    return view
  },

  data: {
    sync: () => {
      return Navigate.data = Object.assign(Navigate.data, State.navigate.getter())
    }
  },

  method: {
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
      let data = Navigate.data.sync()
      let searchText = data.searchText
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

    _uniqueValidation: (object, arr) => {
      if (!arr.includes(object)) {
        arr.push(object)
      }
    },

    prev: () => {
      let data = Navigate.data.sync()
      if (data.prev) {
        State.planet.setter({
          url: data.prev,
          pageIndex: (State.planet.data.pageIndex - 1)
        })
        Navigate.render()
      }
      console.log(data);
      console.log(`prev : ${State.planet.data.pageIndex}`);
    },

    next: () => {
      let data = Navigate.data.sync()
      if (data.next) {
        State.planet.setter({
          url: data.next,
          pageIndex: (State.planet.data.pageIndex + 1)
        })
        Navigate.render()
      }
      console.log(data);
      console.log(`next : ${State.planet.data.pageIndex}`);
    },

    search: () => {
      Navigate.method.filterBy()
    }
  },

  render: () => {
    let data = Navigate.data.sync()
    $.document(Navigate.name).replace(Navigate.template(data))
  }
}

export default Navigate;