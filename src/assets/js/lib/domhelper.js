/**
 * @author vendywira
 * this helper will help you to simplifiying dom manipulation
 * this helper work like jquery
 * import this library on your code and create class instant and you can used it function
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

  static elements(querySelectors) {
    let domElements = document.querySelectorAll(querySelectors)
    return domElements.length !== 0 ? domElements : document.querySelectorAll(`#${querySelectors}`)
  }

  static document(querySelector) {
    let el = new DOMHelper
    if (typeof querySelector === 'object') {
      el._documentSelector = querySelector
    } else {
      let element = document.querySelector(querySelector)
      el._documentSelector = element ? element : document.getElementById(querySelector)
    }
    return el
  }

  child(querySelector) {
    this._documentSelector = this._documentSelector.querySelector(querySelector)
    return this
  }

  getElement() {
    return this._documentSelector
  }

  replace(el) {
    try {
      let element = document.createElement('div')
      let id = this._documentSelector.getAttribute('id')
      element.setAttribute("id", id ? id : this._documentSelector.nodeName.toLowerCase())
      element.innerHTML = el
      this._documentSelector.parentNode.replaceChild(element, this._documentSelector)
      this._documentSelector = element
      return this._documentSelector
    } catch (e) {
      console.log(`Warning: ${e}`);
    }
  }

  click(func) {
    try {
      this._documentSelector.addEventListener('click', func)
    } catch (e) {
      console.log(e);
    }
  }

  dblClick(func) {
    try {
      this._documentSelector.addEventListener('dblclick', func)
    } catch (e) {
      console.log(e);
    }
  }

  mouseOver(func) {
    try {
      this._documentSelector.addEventListener('mouseover', func)
    } catch (e) {
      console.log(e);
    }
  }

  mouseEnter(func) {
    try {
      this._documentSelector.addEventListener('mouseenter', func)
    } catch (e) {
      console.log(e);
    }
  }

  mouseLeave(func) {
    try {
      this._documentSelector.addEventListener('mouseleave', func)
    } catch (e) {
      console.log(e);
    }
  }

  mouseDown(func) {
    try {
      this._documentSelector.addEventListener('mouseleave', func)
    } catch (e) {
      console.log(e);
    }
  }

  change(func) {
    try {
      this._documentSelector.addEventListener('change', func)
    } catch (e) {
      console.log(e);
    }
  }

  keyUp(func) {
    try {
      this._documentSelector.addEventListener('keyup', func)
    } catch (e) {
      console.log(e);
    }
  }

  keyDown(func) {
    try {
      this._documentSelector.addEventListener('keydown', func)
    } catch (e) {
      console.log(e);
    }
  }

  keyPress(func) {
    try {
      this._documentSelector.addEventListener('keypress', func)
    } catch (e) {
      console.log(e);
    }
  }
}

export default DOMHelper;