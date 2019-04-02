import HttpLib from "./httplib.js"
import DOMHelper from "./dom-helper.js"
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
        return `<div class="page page__content" id="content">${view}</div>`
    },

    data: {
        url: "",
        count: 0,
        next: "",
        prev: "",
        planets: []
    },

    method: {
        getPlanets: () => http.get(Planet.data.url)
            .then(response => {
                Planet.method._responseConverter(response)
                Planet.render(Planet.data)
            })
            .catch(err => console.log(err)),

        loadResource: () => {
            let page = _pages[pageIndex]
            State.loading.isShow = true
            State.planet.url = url

            if (page && page.results.length > 0) {
                console.log("load from array");
                render(page)
            } else {
                console.log("load from url");
                getPlanets(url)
            }
            console.log(_pages);
        },

        _responseConverter: response => {
            Planet.data.count = response.count
            Planet.data.next = response.next
            Planet.data.prev = response.previous
            Planet.data.planets = response.results
        }
    },

    render: data => {
        let view = Planet.template(data.planets)
        State.loading.setter({
            isShow: false
        })
        Loading.render()
        console.log(Loading.data);
        $.document(Planet.name).replace(view)
    }
}

export default Planet;