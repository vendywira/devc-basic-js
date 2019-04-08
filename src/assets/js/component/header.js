import DOMHelper from "../lib/domhelper.js"
import Store from "../store/store.js"

const $ = DOMHelper
const $state = Store

let Header = {
  name: 'header',
  template: (data) => {
    let view = `
    <header id="nav-header" class="header">
        <div class="container">
          <h1 class="logo">
            <a class="scrollto" href="#hero">
              <span class="logo-icon-wrapper"><img class="logo-icon" src="assets/images/logo-icon.svg" alt="icon"></span>
              <span class="text"><span class="highlight">Dev</span>Circle</span></a>
          </h1>
          <nav class="main-nav navbar-expand-md float-right navbar-inverse" role="navigation">

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>

            <div id="navbar-collapse" class="navbar-collapse collapse">
              <ul class="nav navbar-nav">
                <li class="nav-item"><a class="active nav-link scrollto" href="#about">About</a></li>
                <li class="nav-item"><a class="nav-link scrollto" href="#testimonials">Testimonials</a></li>
                <li class="nav-item"><a class="nav-link scrollto" href="#features">Features</a></li>
                <li class="nav-item"><a class="nav-link scrollto" href="#team">Team</a></li>
                <li class="nav-item"><a class="nav-link scrollto" href="#pricing">Pricing</a></li>
                <li class="nav-item"><a class="nav-link scrollto" href="#contact">Contact</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>`

    return view
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

let $this = Header

export default Header;