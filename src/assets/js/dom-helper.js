/**
 * @author vendywira
 * this helper will help you to simplifiying dom manipulation
 * this helper work like jquery
 * import this library on your code and create class instant and you can use the function
 */

class DOMHelper {

  constructor() {
    this._documentSelector = null
  }

  static el(querySelector) {
    let el = new DOMHelper
    el._documentSelector = document.querySelector(querySelector)
    return el._documentSelector
  }

  static document(querySelector) {
    let el = new DOMHelper
    if (typeof querySelector === 'object') {
      el._documentSelector = querySelector
      console.log("object selector", querySelector, el);
    } else {
      let element = document.querySelector(querySelector)
      el._documentSelector = element ? element : document.getElementById(querySelector)
    }
    return el
  }

  replace(el) {
    try {
      let element = document.createElement('div')
      element.innerHTML = el
      this._documentSelector.parentNode.replaceChild(element, this._documentSelector)
      this._documentSelector = element
      return this._documentSelector
    } catch (e) {
      console.log(`Warning: ${e}`);
    }
  }

  click(func) {
    this._documentSelector.addEventListener('click', func)
  }

  dblClick(func) {
    this._documentSelector.addEventListener('dblclick', func)
  }

  mouseOver(func) {
    this._documentSelector.addEventListener('mouseover', func)
  }

  mouseEnter(func) {
    this._documentSelector.addEventListener('mouseenter', func)
  }

  mouseLeave(func) {
    this._documentSelector.addEventListener('mouseleave', func)
  }

  mouseDown(func) {
    this._documentSelector.addEventListener('mouseleave', func)
  }

  change(func) {
    this._documentSelector.addEventListener('change', func)
  }

  keyUp(func) {
    this._documentSelector.addEventListener('keyup', func)
  }

  keyDown(func) {
    this._documentSelector.addEventListener('keydown', func)
  }

  keyPress(func) {
    this._documentSelector.addEventListener('keypress', func)
  }
}

export default DOMHelper;