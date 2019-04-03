import DOMHelper from "../lib/domhelper.js"
import Store from "../store/store.js"

const $ = DOMHelper
const $state = Store.state.navigate
const $planet = Store.state.planet

let Navigate = {
  name: 'navigate',
  template: (data) => {
    let view = `
      <div class="column">
        <div id='navigate' class="columns is-mobile is-multi-line is-centered">
          <div class="field">
            <div class="column control">
              <div class="select is-primary">
                <select id="filterBy">
                  <option value="all">all</option>
                  <option value="name">name</option>
                  <option value="rotation">rotation</option>
                  <option value="orbital">orbital</option>
                  <option value="diameter">diameter</option>
                  <option value="climate">climate</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <div class="column control">
              <input class="input is-rounded" type="text" placeholder="Find planet" id="searchText">
            </div>
          </div>
          <div class="field">
            <div class="column control">
              <buthon class="pagination-previous" id="prev" ${data.posiblePrevious ? '' : 'disabled'}>prev</buthon>
              <button class="pagination-next" id="next" ${data.posibleNext ? '' : 'disabled'}>next</button>
            </div>
          </div>
        </div>
      </div>`

    return view
  },

  data: {
    sync: () => {
      return Navigate.data = Object.assign(Navigate.data, $state.getter())
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

      $planet.setter({
        planets: planets.slice(0, 10)
      })
      return $planet.getter().planets
    },

    _uniqueValidation: (object, arr) => {
      if (!arr.includes(object)) {
        arr.push(object)
      }
    },

    previous: () => {
      let data = Navigate.data.sync()
      if (data.previous) {
        $planet.setter({
          url: data.previous,
          pageIndex: ($planet.data.pageIndex - 1)
        })
        Navigate.render()
      }
    },

    next: () => {
      let data = Navigate.data.sync()
      if (data.next) {
        $planet.setter({
          url: data.next,
          pageIndex: ($planet.data.pageIndex + 1)
        })
        Navigate.render()
      }
    },

    search: () => {
      return Navigate.method.filterBy()
    }
  },

  render: () => {
    let data = Navigate.data.sync()
    $.document(Navigate.name).replace(Navigate.template(data))
    console.log(data);
  }
}

export default Navigate;