import Planet from "./component/planet.js"
import Navigate from "./component/navigate.js"
import App from "./lib/app.js"
import Loading from "./component/loading.js";

new App({
  el: "#app",
  template: `
    <loading></loading>
    <navigate></navigate>
    <planet></planet>`,
  main: () => {
    Navigate.init()
    Loading.init()
    Planet.init()
    Planet.method.loadResource()
  }
})