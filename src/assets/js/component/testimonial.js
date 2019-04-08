import DOMHelper from "../lib/domhelper.js"
import Store from "../store/store.js"

const $ = DOMHelper
const $state = Store

let Testimonial = {
  name: 'testimonial',
  template: (data) => {
    let view = `
    <div id="testimonials" class="testimonials-section">
      <div class="container">
        <h2 class="section-title text-center">Many Happy Customers</h2>
        <div class="item mx-auto">
          <div class="profile-holder">
            <img class="profile-image" src="assets/images/profile-1.png" alt="profile">
          </div>
          <div class="quote-holder">
            <blockquote class="quote">
              <p>Testimonial goes here Donec felis odio, sagittis eu cursus ac, porttitor eu purus. In a bibendum dui.
                Nullam id est sed felis rutrum tincidunt eu nec nisi morbi euismod semper neque sed lobortis.</p>
              <div class="quote-source">
                <span class="name">@JohnK,</span>
                <span class="meta">San Francisco</span>
              </div>
            </blockquote>
          </div>
        </div>
        <div class="item item-reversed mx-auto">
          <div class="profile-holder">
            <img class="profile-image" src="assets/images/profile-2.png" alt="profile">
          </div>
          <div class="quote-holder">
            <blockquote class="quote">
              <p>Testimonial goes here fermentum sed pharetra in, aliquet sodales quam. Ut sed turpis quis orci viverra
                aliquet interdum ut ipsum. </p>
              <div class="quote-source">
                <span class="name">@LisaWhite,</span>
                <span class="meta">London</span>
              </div>
            </blockquote>
          </div>
        </div>
        <div class="item mx-auto">
          <div class="profile-holder">
            <img class="profile-image" src="assets/images/profile-3.png" alt="profile">
          </div>
          <div class="quote-holder">
            <blockquote class="quote">
              <p>Testimonial goes here vestibulum non hendrerit lorem, luctus tincidunt erat. Sed pharetra aliquam
                posuere. Pellentesque sollicitudin.</p>
              <div class="quote-source">
                <span class="name">@MattH,</span>
                <span class="meta">Berlin</span>
              </div>
            </blockquote>
          </div>
        </div>
        <div class="item item-reversed mx-auto">
          <div class="profile-holder">
            <img class="profile-image" src="assets/images/profile-4.png" alt="profile">
          </div>
          <div class="quote-holder">
            <blockquote class="quote">
              <p>Testimonial goes here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis</p>
              <div class="quote-source">
                <span class="name">@RyanW,</span>
                <span class="meta">Paris</span>
              </div>
            </blockquote>

          </div>
        </div>
      </div>
    </div>`

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

let $this = Testimonial

export default $this;