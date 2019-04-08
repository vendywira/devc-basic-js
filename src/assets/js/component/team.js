import DOMHelper from "../lib/domhelper.js"
import Store from "../store/store.js"

const $ = DOMHelper
const $state = Store

let Team = {
  name: 'team',
  template: (data) => {
    let view = `
    <div class="team-section" id="team">
      <div class="container text-center">
        <h2 class="section-title">Our Team</h2>
        <div class="story">
          <p>Introduce your team here. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
            eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
            mus. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean
            leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
            feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
            ultricies nisi vel augue</p>
        </div>
        <div class="members-wrapper row">
          <div class="item col-md-6 col-12">
            <div class="item-inner">
              <div class="profile mb-2">
                <img class="profile-image" src="assets/images/team-1.png" alt="Xiaoying Riley" />
              </div>
              <div class="member-content">
                <h3 class="member-name">Xiaoying Riley</h3>
                <div class="member-title">Full-Stack Designer</div>
                <ul class="social list-inline">
                  <li class="list-inline-item"><a class="twitter" href="https://twitter.com/3rdwave_themes"
                      target="_blank"><i class="fab fa-twitter"></i></a></li>

                  <li class="list-inline-item"><a class="facebook" href="https://www.facebook.com/3rdwavethemes/"
                      target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                  <li class="list-inline-item"><a class="github" href="https://github.com/xriley" target="_blank"><i
                        class="fab fa-github"></i></a></li>
                  <li class="list-inline-item"><a class="dribbble" href="https://dribbble.com/Xiaoying" target="_blank"><i
                        class="fab fa-dribbble"></i></a></li>
                  <li class="list-inline-item"><a class="medium" href="https://uk.linkedin.com/in/xiaoying"
                      target="_blank"><i class="fab fa-medium-m"></i></a></li>
                </ul>
                <div class="member-desc">
                  <p>Xiaoying is the UX/UI designer behind AppKit Landing. She makes <a
                      href="https://themes.3rdwavemedia.com/bootstrap-templates/free/" target="_blank">free Bootstrap
                      themes</a> for developers. You can find her sharing useful UX and webdev related content on <a
                      href="https://twitter.com/3rdwave_themes" target="_blank">Twitter</a> and <a
                      href="https://www.facebook.com/3rdwavethemes/" target="_blank">Facebook</a>. Follow her if you like
                    what she does!</p>
                </div>
              </div>
            </div>
          </div>
          <div class="item col-md-6 col-12">
            <div class="item-inner">
              <div class="profile mb-2">
                <img class="profile-image" src="assets/images/team-2.png" alt="Tom Najdek" />
              </div>
              <div class="member-content">
                <h3 class="member-name">Tomasz Najdek</h3>
                <div class="member-title">Full-Stack Developer</div>
                <ul class="social list-inline">
                  <li class="list-inline-item"><a class="twitter" href="http://twitter.com/tnajdek" target="_blank"><i
                        class="fab fa-twitter"></i></a></li>
                  <li class="list-inline-item"><a href="https://www.doppnet.com/" target="_blank"><i
                        class="fas fa-globe"></i></a></li>
                  <li class="list-inline-item"><a class="github" href="https://github.com/tnajdek" target="_blank"><i
                        class="fab fa-github"></i></a></li>
                </ul>
                <div class="member-desc">
                  <p>Tom is a full-stack developer specialising in building large, scalable and user-friendly web apps.
                    Follow him on <a href="https://twitter.com/tnajdek" target="_blank">Twitter</a> for fresh developer
                    tips and check out his <a href="https://github.com/tnajdek" target="_blank">Github</a> for useful
                    open-source tools.
                  </p>
                </div>
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

let $this = Team

export default $this;