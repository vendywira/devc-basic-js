import DOMHelper from "../lib/domhelper.js"
import Store from "../store/store.js"

const $ = DOMHelper
const $state = Store

let Footer = {
  name: 'footer',
  template: (data) => {
    let view = `
    <footer class="footer text-center">
      <div class="container">
        <small class="copyright">Created by <a href="https://www.linkedin.com/in/vendywira/"
            target="_blank">I Wayan Vendy Wiranatha</a></small>
      </div>
    </footer>`

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

let $this = Footer

export default $this;