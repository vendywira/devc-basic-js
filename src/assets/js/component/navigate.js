import DOMHelper from "../lib/domhelper.js"
import Store from "../store/store.js"
import Planet from "./planet.js"

const $ = DOMHelper
const $state = Store

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
              <input class="input is-rounded" type="text" placeholder="Find planet" id="searchText" value="${data.searchText}" autofocus>
            </div>
          </div>
          <div class="field">
            <div class="column control">
              <buthon class="pagination-previous" id="prev" ${data.enableBtnPrevious ? '' : 'disabled'}>prev</buthon>
              <button class="pagination-next" id="next" ${data.enableBtnNext ? '' : 'disabled'}>next</button>
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
      Store.mutation.change({
        planets: planets.slice(0, 10)
      })
      return Store.getter().planets
    },

    _uniqueValidation: (object, arr) => {
      if (!arr.includes(object)) {
        arr.push(object)
      }
    },

    previous: () => {
      let data = Navigate.data.sync()
      if (data.previous) {
        Store.mutation.change({
          url: data.previous,
          isShowLoading: true,
          pageIndex: (Navigate.data.pageIndex - 1)
        })
        Planet.method.loadResource()
      }
    },

    next: () => {
      let data = Navigate.data.sync()
      if (data.next) {
        Store.mutation.change({
          url: data.next,
          isShowLoading: true,
          pageIndex: (Navigate.data.pageIndex + 1)
        })
        Planet.method.loadResource()
      }
    },

    search: () => {
      return Navigate.method.filterBy()
    }
  },

  render: () => {
    let data = Navigate.data.sync()
    console.log(data);
    $.document(Navigate.name).replace(Navigate.template(data))
    $.document("#next").click(() => Navigate.method.next())
    $.document("#prev").click(() => Navigate.method.previous())

    let filterBy = $.el("#filterBy")
    $.document(filterBy).change(() => {
      Store.mutation.filterBy(filterBy.options[filterBy.selectedIndex].value)
    })

    let searchTextEl = $.el("#searchText")
    searchTextEl.selectionStart = searchTextEl.selectionEnd = searchTextEl.value.length;
    searchTextEl.focus()
    $.document(searchTextEl).keyUp(() => {
      Store.mutation.searchText(searchTextEl.value)
      Navigate.method.search()
      Planet.render()
    })
  }
}

export default Navigate;