import HttpLib from "./httplib.js"
import DOMHelper from "./domhelper.js"
import State from "./state.js"
import Loading from './loading.js';

const http = new HttpLib
let $ = DOMHelper

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
            return Planet.data = Object.assign(Planet.data, State.planet.getter())
        }
    },

    method: {
        loadResource: async () => {
            let data = Planet.data.sync()
            let index = data.pageIndex
            let page = data.pages[index]

            if (page && page.planets && page.planets.length > 0) {
                console.log("load resource from cache");
                Planet.method._responseConverter(page)
                Planet.render()
            } else {
                console.log("load resource throught http request");
                await Planet.method._getPlanets()
            }
        },

        _getPlanets: async () => {
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
                prev: response.previous,
                results: response.results,
            }
            let pagesData = Planet.method._pushAtIndex(response.pageIndex, response.pages, page)

            let planetData = {
                count: response.count,
                pageIndex: response.pageIndex,
                planets: response.results,
                pages: pagesData,
            }
            State.planet.setter(planetData)

            let navigateData = {
                next: response.next,
                prev: response.previous,
                posibleNext: response.next ? true : false,
                posiblePrev: response.prev ? true : false,
                pages: pagesData,
            }
            State.navigate.setter(navigateData)
        }
    },

    render: () => {
        let data = Planet.data.sync()
        let view = Planet.template(data.planets)
        $.document(Planet.name).replace(view)

        State.loading.setter({
            isShow: false
        })
        Loading.render()
    }
}

export default Planet;