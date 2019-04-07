import DOMHelper from "../lib/domhelper.js"

let $ = DOMHelper

class App {
  constructor(object) {
    this.el = object.el
    this.template = object.template
    this.main = object.main
    this._onLoad()
    this.main()
  }

  _onLoad() {
    $.document(this.el).replace(this.template)
  }
}

export default App;