import DOMHelper from "../lib/domhelper.js"
import Store from "../store/store.js"

const $ = DOMHelper
const $state = Store

let Banner = {
  name: 'banner',
  template: (data) => {
    let view = `
        <div id="hero" class="hero-section">
          <div id="hero-carousel" class="hero-carousel carousel carousel-fade slide" data-ride="carousel"
            data-interval="10000">

            <div class="figure-holder-wrapper">
              <div class="container">
                <div class="row justify-content-end">
                  <div class="figure-holder">
                    <img class="figure-image img-fluid" src="assets/images/imac.png" alt="image" />
                  </div>
                </div>
              </div>
            </div>

            <!-- Indicators -->
            <ol class="carousel-indicators">
              <li class="active" data-slide-to="0" data-target="#hero-carousel"></li>
              <li data-slide-to="1" data-target="#hero-carousel"></li>
              <li data-slide-to="2" data-target="#hero-carousel"></li>
            </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner">

              <div class="carousel-item item-1 active">
                <div class="item-content container">
                  <div class="item-content-inner">

                    <h2 class="heading">AppKit Landing is the perfect landing page template <br class="d-none d-md-block">for
                      your product</h2>
                    <p class="intro">It helps you to build a beautiful and effective landing page to promote your product or
                      side project!</p>
                    <a class="btn btn-primary btn-cta"
                      href="#"
                      target="_blank">Download Now</a>

                  </div>
                </div>
              </div>

              <div class="carousel-item item-2">
                <div class="item-content container">
                  <div class="item-content-inner">

                    <h2 class="heading">Bootstrap Lover?</h2>
                    <p class="intro">AppKit Landing is built on Bootstrap 4 and SASS so it's quick and easy to customise!</p>
                    <a class="btn btn-primary btn-cta"
                      href="#"
                      target="_blank">Find out more</a>

                  </div>
                </div>
              </div>

              <div class="carousel-item item-3">
                <div class="item-content container">
                  <div class="item-content-inner">

                    <h2 class="heading">Ready to build outstanding product?</h2>
                    <p class="intro">Get AppKit Landing today and it will help you promote your product effectively!</p>
                    <a class="btn btn-primary btn-cta"
                      href="#"
                      target="_blank">Get Started</a>

                  </div>
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

let $this = Banner

export default $this;