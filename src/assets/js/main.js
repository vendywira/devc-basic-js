import Planet from "./component/planet.js"

import App from "./lib/app.js"

window.addEventListener('load', function () {
  new App({
    el: "#app",
    template: `
      <loading></loading>
      <navigate></navigate>
      <planet></planet>`,
    main: () => {
      Planet.method.loadResource()
    }
  })
})