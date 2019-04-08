import DOMHelper from "../lib/domhelper.js"
import Store from "../store/store.js"

const $ = DOMHelper
const $state = Store

let Contact = {
  name: 'contact',
  template: (data) => {
    let view = `
    <div id="contact" class="contact-section">
      <div class="container text-center">
        <h2 class="section-title">Contact Us</h2>
        <div class="contact-content">
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
            sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.</p>
        </div>
        <a class="btn btn-cta btn-primary"
          href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/appkit-landing-free-bootstrap-theme-for-developers-and-startups/">Get
          in Touch</a>
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

let $this = Contact

export default $this;