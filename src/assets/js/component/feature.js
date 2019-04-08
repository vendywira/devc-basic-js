import DOMHelper from "../lib/domhelper.js"
import Store from "../store/store.js"

const $ = DOMHelper
const $state = Store

let Feature = {
  name: 'feature',
  template: (data) => {
    let view = `
      <div id="features" class="features-section">
        <div class="container text-center">
          <h2 class="section-title">Discover Features</h2>
          <p class="intro">You can use this section to list your product features. The screenshots used here were taken from
            <a href="https://www.uxfordev.com/appify/index.html" target="_blank">Bootstrap 4 admin theme Appify</a></p>

          <div class="tabbed-area row">

            <!-- Nav tabs -->
            <div class="feature-nav nav nav-pill flex-column col-lg-4 col-md-6 col-12 order-0 order-md-1" role="tablist"
              aria-orientation="vertical">
              <a class="nav-link active mb-lg-3" href="#feature-1" aria-controls="feature-1" data-toggle="pill" role="tab"
                aria-selected="true"><i class="fas fa-magic mr-2"></i>20+ Use Case-based App Pages</a>
              <a class="nav-link mb-lg-3" href="#feature-2" aria-controls="feature-2" data-toggle="pill" role="tab"
                aria-selected="false"><i class="fas fa-cubes mr-2"></i>100+ Components and Widgets</a>
              <a class="nav-link mb-lg-3" href="#feature-3" aria-controls="feature-3" data-toggle="pill" role="tab"
                aria-selected="false"><i class="fas fa-chart-bar mr-2"></i>Useful Chart Libraries</a>
              <a class="nav-link mb-lg-3" href="#feature-4" aria-controls="feature-4" data-toggle="pill" role="tab"
                aria-selected="false"><i class="fas fa-code mr-2"></i>Valid HTML5 + CSS3</a>
              <a class="nav-link mb-lg-3" href="#feature-5" aria-controls="feature-5" data-toggle="pill" role="tab"
                aria-selected="false"><i class="fas fa-rocket mr-2"></i>Built on Bootstrap 4 &amp; SCSS</a>
              <a class="nav-link mb-lg-3" href="#feature-6" aria-controls="feature-6" data-toggle="pill" role="tab"
                aria-selected="false"><i class="fas fa-mobile-alt mr-2"></i>Fully Responsive</a>
              <a class="nav-link mb-lg-3" href="#feature-7" aria-controls="feature-7" data-toggle="pill" role="tab"
                aria-selected="false"><i class="fas fa-star mr-2"></i>Beautiful UI</a>
              <a class="nav-link mb-lg-3" href="#feature-8" aria-controls="feature-8" data-toggle="pill" role="tab"
                aria-selected="false"><i class="fas fa-heart mr-2"></i>Free Updates &amp; Support</a>
            </div>

            <!-- Tab panes -->
            <div class="feature-content tab-content col-lg-8 col-md-6 col-12 order-1 order-md-0">
              <div role="tabpanel" class="tab-pane fade show active" id="feature-1">
                <a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/appkit-landing-free-bootstrap-theme-for-developers-and-startups/"
                  target="_blank"><img class="img-fluid" src="assets/images/feature-1.png" alt="screenshot"></a>
              </div>
              <div role="tabpanel" class="tab-pane fade" id="feature-2">
                <a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/appkit-landing-free-bootstrap-theme-for-developers-and-startups/"
                  target="_blank"><img class="img-fluid" src="assets/images/feature-2.png" alt="screenshot"></a>
              </div>
              <div role="tabpanel" class="tab-pane fade" id="feature-3">
                <a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/appkit-landing-free-bootstrap-theme-for-developers-and-startups/"
                  target="_blank"><img class="img-fluid" src="assets/images/feature-3.png" alt="screenshot"></a>
              </div>
              <div role="tabpanel" class="tab-pane fade" id="feature-4">
                <a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/appkit-landing-free-bootstrap-theme-for-developers-and-startups/"
                  target="_blank"><img class="img-fluid" src="assets/images/feature-4.png" alt="screenshot"></a>
              </div>
              <div role="tabpanel" class="tab-pane fade" id="feature-5">
                <a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/appkit-landing-free-bootstrap-theme-for-developers-and-startups/"
                  target="_blank"><img class="img-fluid" src="assets/images/feature-5.png" alt="screenshot"></a>
              </div>
              <div role="tabpanel" class="tab-pane fade" id="feature-6">
                <a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/appkit-landing-free-bootstrap-theme-for-developers-and-startups/"
                  target="_blank"><img class="img-fluid" src="assets/images/feature-6.png" alt="screenshot"></a>
              </div>
              <div role="tabpanel" class="tab-pane fade" id="feature-7">
                <a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/appkit-landing-free-bootstrap-theme-for-developers-and-startups/"
                  target="_blank"><img class="img-fluid" src="assets/images/feature-7.png" alt="screenshot"></a>
              </div>
              <div role="tabpanel" class="tab-pane fade" id="feature-8">
                <a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/appkit-landing-free-bootstrap-theme-for-developers-and-startups/"
                  target="_blank"><img class="img-fluid" src="assets/images/feature-8.png" alt="screenshot"></a>
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

let $this = Feature

export default $this;