import HttpLib from "../lib/httplib.js"
import DOMHelper from "../lib/domhelper.js"
import Store from "../store/store.js"

const http = new HttpLib
const $ = DOMHelper
const $state = Store

let Planet = {
  name: 'planet',
  template: (planets) => {
    let row = ""
    planets.forEach(planet => {
      row += `
            <tr>
              <td>${planet.name}</td>
              <td>${planet.rotation_period}</td>
              <td>${planet.orbital_period}</td>
              <td>${planet.diameter}</td>
              <td>${planet.climate}</td>
            </tr>`
    })

    let table = `
            <table class = "table is-bordered is-striped is-center" style="margin: 0 auto">
               <thead>
                  <tr>
                      <th>Name</th>
                      <th>Rotation Period</th>
                      <th>Orbital Period</th>
                      <th>Diameter</th>
                      <th>Climate</th>
                  </tr>
               </thead>
               <tbody>
                  ${row}
               </tbody>
            </table>
            `
    return `<div class="column is-full">${table}</div>`
  },

  data: {
    sync: () => {
      return Planet.data = Object.assign(Planet.data, $state.getter())
    }
  },

  init: () => {
    $state.Action.unsubscribe.loadResource()
    $state.Action.subscriber.LoadResource(() => Planet.method.loadResource())

    $state.Action.unsubscribe.planetRender()
    $state.Action.subscriber.planetRender(() => Planet.render())
  },

  method: {
    loadResource: async () => {
      Store.mutation.switchLoading(true)
      $state.Action.notify.loading()

      let data = Planet.data.sync()
      let index = data.pageIndex
      let page = data.pages[index]
      if (page && page.planets && page.planets.length > 0) {
        console.log("load resource from cache");
        await Planet.method._getPlanetFromCache(data.pages, page, index)
          .then(response => {
            Planet.method._responseConverter(response)
            Planet.render()
          })
      } else {
        console.log("load resource throught http request");
        await Planet.method._getPlanetFromHttp()
      }
    },

    _getPlanetFromCache: async (pages, page, index) => {
      console.log("pages: ", pages, page, index);
      let response = {
        count: page.count,
        next: page.next,
        previous: page.previous,
        results: page.results,
        pageIndex: index,
        pages: pages
      }
      return response
    },

    _getPlanetFromHttp: async () => {
      let data = Planet.data.sync()
      http.get(data.url)
        .then(response => {
          response.pageIndex = Planet.method._getPage(data.url)
          response.pages = data.pages
          Planet.method._responseConverter(response)
          Planet.render()
        })
        .catch(err => console.log(err))
    },

    _pushAtIndex: (index, arr, obj) => {
      arr[index] = obj
      return arr;
    },

    _getPage: url => {
      return Number(url.split("page=")[1]) - 1
    },

    _getPages: response => {
      let page = {
        count: response.count,
        next: response.next,
        previous: response.previous,
        results: response.results,
        planets: response.results
      }
      return Planet.method._pushAtIndex(response.pageIndex, response.pages, page)
    },

    _responseConverter: response => {
      Store.mutation.change({
        count: response.count,
        next: response.next,
        previous: response.previous,
        results: response.results,
        planets: response.results,
        pageIndex: response.pageIndex,
        planets: response.results,
        pages: Planet.method._getPages(response),
        enableBtnNext: response.next ? true : false,
        enableBtnPrevious: response.previous ? true : false,
      })
    }
  },

  render: () => {
    let data = Planet.data.sync()
    let view = Planet.template(data.planets)
    $.document(Planet.name).replace(view)
    Store.mutation.switchLoading(false)
    $state.Action.notify.loading()
    $state.Action.notify.navigate()
  }
}

export default Planet;