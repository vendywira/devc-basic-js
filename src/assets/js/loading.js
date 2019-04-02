import DOMHelper from "./dom-helper.js"
import State from "./state.js";
const $ = DOMHelper

let Loading = {
  name: 'loading',
  data: {
    sync: () => {
      Loading.data = Object.assign(Loading.data, State.loading.getter())
    }
  },
  template: `<div id="loading">Loading...</div>`,
  method: {

  },
  render: () => {
    Loading.data.sync()
    console.log(Loading.data);
    $.document(Loading.name).replace(Loading.template)
    let el = $.el('#loading')
    if (Loading.data.isShow) {
      el.setAttribute('style', 'display: block')
    } else {
      el.setAttribute('style', 'display: none')
    }
  }
}

export default Loading;