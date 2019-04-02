import DOMHelper from "./domhelper.js"
import Store from "./store.js";

const $ = DOMHelper
const $state = Store.state.loading

let Loading = {
  name: 'loading',
  data: {
    sync: () => {
      return Loading.data = Object.assign(Loading.data, $state.getter())
    }
  },
  template: (data) => {
    return `<div id="loading" style="display: ${data.isShow ? 'block' : 'none'}">Loading...</div>`
  },
  method: {

  },
  render: () => {
    let data = Loading.data.sync()
    $.document(Loading.name).replace(Loading.template(data))
  }
}

export default Loading;