import DOMHelper from "../lib/domhelper.js"
import Store from "../store/store.js"

const $ = DOMHelper
const $state = Store

let Pricing = {
  name: 'pricing',
  template: (data) => {
    let view = `
    <div id="pricing" class="pricing-section">
      <div class="container text-center">
        <h2 class="section-title">Pricing</h2>
        <div class="intro">AppKit Landing's future updates are 100% FREE for existing customers</div>
        <div class="pricing-wrapper row">
          <div class="item item-1 col-md-4 col-12">
            <div class="item-inner">
              <h3 class="item-heading">FREE<br><span class="item-heading-desc">(CC BY 3.0)</span></h3>
              <div class="price-figure">
                <span class="currency">$</span><span class="number">0</span>
              </div>
              <ul class="list-unstyled mb-3">
                <li class="mb-2"><i class="fas fa-check"></i> Single installation</li>
                <li class="mb-2"><i class="fas fa-check"></i> Multiple installations</li>
                <li class="mb-2"><i class="fas fa-times"></i> Use without attribution link</li>
              </ul>
              <div class="mb-3"><a
                  href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/appkit-landing-free-bootstrap-theme-for-developers-and-startups/"
                  target="_blank">License Details</a></div>
              <a class="btn btn-cta"
                href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/appkit-landing-free-bootstrap-theme-for-developers-and-startups/">Get
                it now</a>
            </div>
          </div>
          <div class="item item-2 col-md-4 col-12">
            <div class="item-inner">
              <h3 class="item-heading">Single Application<br><span class="item-heading-desc">(Commercial License)</span>
              </h3>

              <div class="price-figure">
                <span class="currency">$</span><span class="number">29</span>
              </div>
              <ul class="list-unstyled mb-3">
                <li class="mb-2"><i class="fas fa-check"></i> Single installation</li>
                <li class="mb-2"><i class="fas fa-times"></i> Multiple installations</li>
                <li class="mb-2"><i class="fas fa-check"></i> Use without attribution link</li>
              </ul>
              <div class="mb-3"><a
                  href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/appkit-landing-free-bootstrap-theme-for-developers-and-startups/"
                  target="_blank">License Details</a></div>
              <a class="btn btn-cta"
                href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/appkit-landing-free-bootstrap-theme-for-developers-and-startups/">Get
                it now</a>
            </div>
          </div>

          <div class="item item-3 col-md-4 col-12">
            <div class="item-inner">
              <h3 class="item-heading">Multiple Applications<br><span class="item-heading-desc">(Commercial
                  License)</span></h3>
              <div class="price-figure">
                <span class="currency">$</span><span class="number">99</span>
              </div>
              <!--//price-figure-->
              <ul class="list-unstyled mb-3">
                <li class="mb-2"><i class="fas fa-check"></i> Single installation</li>
                <li class="mb-2"><i class="fas fa-check"></i> Multiple installations</li>
                <li class="mb-2"><i class="fas fa-check"></i> Use without attribution link</li>
              </ul>
              <div class="mb-3"><a
                  href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/appkit-landing-free-bootstrap-theme-for-developers-and-startups/"
                  target="_blank">License Details</a></div>
              <a class="btn btn-cta"
                href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/appkit-landing-free-bootstrap-theme-for-developers-and-startups/"
                target="_blank">Get it now</a>
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

let $this = Pricing

export default $this;