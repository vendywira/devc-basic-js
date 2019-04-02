import DOMHelper from "./dom-helper.js"
import State from "./state.js"


const $ = DOMHelper

let Navigate = {
  name: 'navigate',
  template: (data) => {
    let view = `
    <div id='navigate'>
      <select id="filterBy">
        <option value="all">all</option>
        <option value="name">name</option>
        <option value="location">location</option>
        <option value="orbital">orbital</option>
        <option value="diameter">diameter</option>
        <option value="climate">climate</option>
      </select>
      <input type="text" id="searchText">
      <button id="prev" ${data.posiblePrev ? '' : 'disabled'}'>prev</button>
      <button id="next" ${data.posibleNext ? '' : 'disabled'}>next</button>
    </div>
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
      let $m = Navigate.method
      let filteredItems = $m._filterByName(searchText, planets)
        .concat($m._filterByRotation(searchText, planets))
        .concat($m._filterByOrbital(searchText, planets))
        .concat($m._filterByDiameter(searchText, planets))
        .concat($m._filterByClimate(searchText, planets))

      let finalFilteredItems = []
      filteredItems.forEach(planet => {
        $m._uniqueValidation(planet, finalFilteredItems)
      })

      return finalFilteredItems
    },

    filterBy: () => {
      let data = Navigate.data.sync()
      let $m = Navigate.method
      let searchText = data.searchText
      let by = Navigate.data.filterBy
      let planets = data.pages.flatMap(page => page.results)
      console.log(planets);
      switch (by) {
        case 'name':
          planets = $m._filterByName(searchText, planets)
          break
        case 'rotation':
          planets = $m._filterByRotation(searchText, planets)
          break
        case 'orbital':
          planets = $m._filterByOrbital(searchText, planets)
          break
        case 'diameter':
          planets = $m._filterByDiameter(searchText, planets)
          break
        case 'climate':
          planets = $m._filterByClimate(searchText, planets)
          break
        default:
          planets = $m._filterByAll(searchText, planets)
          console.log(planets);
          break
      }

      State.planet.setter({
        planets: planets.slice(0, 10)
      })
      return State.planet.getter().planets
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
      return Navigate.method.filterBy()
    }
  },

  render: () => {
    let data = Navigate.data.sync()
    $.document(Navigate.name).replace(Navigate.template(data))
  }
}

export default Navigate;