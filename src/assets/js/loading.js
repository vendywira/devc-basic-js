import DOMHelper from "./dom-helper.js"
const $ = DOMHelper

let Loading = {
  name: 'loading',
  data: {
    isShow: true
  },
  template: `<div id="loading">Loading...</div>`,
  method: {

  },
  render: () => {
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