import DOMHelper from "../lib/domhelper.js"
import Store from "../store/store.js"

const $ = DOMHelper
const $state = Store

let About = {
  name: 'about',
  template: (data) => {
    let view = `
      <div id="about" class="about-section">
        <div class="container text-center">
          <h2 class="section-title">Why Use AppKit Landing?</h2>
          <p class="intro">Appkit Landing uses modern front-end technologies and is packed with useful components and
            widgets to speed up your development</p>
          <ul class="technologies list-inline">
            <li class="list-inline-item"><img src="assets/images/logo-html5.svg" alt="HTML5"></li>
            <li class="list-inline-item"><img src="assets/images/logo-css3.svg" alt="CSS3"></li>
            <li class="list-inline-item"><img src="assets/images/logo-bootstrap.svg" alt="Bootstrap"></li>
            <li class="list-inline-item"><img src="assets/images/logo-sass.svg" alt="Sass"></li>
            <li class="list-inline-item"><img src="assets/images/logo-jquery.svg" alt="jQuery"></li>
          </ul>

          <div class="items-wrapper row">
            <div class="item col-md-4 col-12">
              <div class="item-inner">
                <div class="figure-holder">
                  <img class="figure-image" src="assets/images/figure-1.png" alt="image">
                </div>
                <h3 class="item-title">Benefit Lorem Ipsum</h3>
                <div class="item-desc">
                  List one of your product's benefits here. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                  commodo ligula eget dolor.
                </div>
              </div>
            </div>
            <div class="item col-md-4 col-12">
              <div class="item-inner">
                <div class="figure-holder">
                  <img class="figure-image" src="assets/images/figure-2.png" alt="image">
                </div>
                <h3 class="item-title">Benefit Corporis</h3>
                <div class="item-desc">
                  List one of your product's benefits here. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                  commodo ligula eget dolor. </div>
              </div>
            </div>
            <div class="item col-md-4 col-12">
              <div class="item-inner">
                <div class="figure-holder">
                  <img class="figure-image" src="assets/images/figure-3.png" alt="image">
                </div>
                <h3 class="item-title">Benefit Imperdiet</h3>
                <div class="item-desc">
                  List one of your product's benefits here. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                  commodo ligula eget dolor. </div>
              </div>
            </div>
          </div>
        </div>
      </div>`

    return view;
  },

  data: {
    sync: () => {
      return $this.data = Object.assign($this.data, $state.getter())
    }
  },

  init: () => {
    // $state.Action.unsubscribe.navigate()
    // $state.Action.subscriber.navigateRender(data => Header.render())
  },

  method: {

  },

  render: () => {
    let data = $this.data.sync()
    $.elements($this.name).forEach(e => {
      e = $.document($this.name).replace($this.template(data))
    })
  }
}

let $this = About

export default $this;