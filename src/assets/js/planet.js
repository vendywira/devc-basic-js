import HttpLib from "./httplib.js"
import DOMHelper from "./domhelper.js"
import Store from "./store.js"
import Loading from './loading.js';

const http = new HttpLib
const $ = DOMHelper
const $state = Store.state.planet
const $navigate = Store.state.navigate
const $loading = Store.state.loading

let Planet = {
  name: 'planet',
  template: (planets) => {
    let view = ""
    planets.forEach(planet => {
      view += `<ul class="content content__list" id="content-list">
                <li>name: ${planet.name}</li>
                <li>rotation period: ${planet.rotation_period}</li>
                <li>orbital period: ${planet.orbital_period}</li>
                <li>diameter: ${planet.diameter}</li>
                <li>climate: ${planet.climate}</li>
              </ul>`
    })
    return `<div class="page page__content" id="planet">${view}</div>`
  },

  data: {
    sync: () => {
      return Planet.data = Object.assign(Planet.data, $state.getter())
    }
  },

  method: {
    loadResource: async () => {
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

    _responseConverter: response => {
      let page = {
        count: response.count,
        next: response.next,
        previous: response.previous,
        results: response.results,
        planets: response.results
      }
      console.log(response);
      let pagesData = Planet.method._pushAtIndex(response.pageIndex, response.pages, page)

      let planetData = {
        count: response.count,
        pageIndex: response.pageIndex,
        planets: response.results,
        pages: pagesData,
      }
      $state.setter(planetData)

      let navigateData = {
        next: response.next,
        previous: response.previous,
        posibleNext: response.next ? true : false,
        posiblePrevious: response.previous ? true : false,
        pages: pagesData,
      }
      $navigate.setter(navigateData)
    }
  },

  render: () => {
    let data = Planet.data.sync()
    let view = Planet.template(data.planets)
    $.document(Planet.name).replace(view)

    $loading.setter({
      isShow: false
    })
    Loading.render()
  }
}

export default Planet;