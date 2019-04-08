import App from "./lib/app.js"
import Header from "./component/header.js"
import Banner from "./component/banner.js"
import About from "./component/about.js"
import Testimonial from "./component/testimonial.js"
import Feature from "./component/feature.js"
import Team from "./component/team.js"
import Pricing from "./component/pricing.js"
import Contact from "./component/contact.js"
import Footer from "./component/footer.js"

new App({
  el: "#app",
  template: `
    <header></header>
    <banner></banner>
    <about></about>
    <testimonial></testimonial>
    <feature></feature>
    <team></team>
    <pricing></pricing>
    <contact></contact>
    <footer></footer>
    `,
  main: () => {
    Header.render()
    Banner.render()
    About.render()
    Testimonial.render()
    Feature.render()
    Team.render()
    Pricing.render()
    Contact.render()
    Footer.render()
  }
})